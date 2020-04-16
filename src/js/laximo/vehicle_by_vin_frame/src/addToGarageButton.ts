import {
  eventAdd,
  checkAvailable,
  lowerCase,
  flattenObjectValues,
  addClass,
  setText,
  getText,
  eventRemove,
  getFormData
} from '../../../utils/utils.js';
import {addedButtonProps, apiUrl, garageUrl} from "./settings.js";
import {IOptions, ICheckStatementProps, IProps, IAppInitiate, IApp} from "./interfaces.js";

export default () => {
  const options: IOptions = {
    addCarButtons: document.querySelectorAll('.add-car .add-car__add-button'),
    userExitWrapper: document.querySelector('.b-tsd-user')|| document.createElement('div'),
    carData: document.querySelectorAll('.b-content .table tbody tr'),
    authToken: (document.querySelector('meta[name=csrf-token]') as HTMLMetaElement)!.content,
  };
  const props: IProps = {
    ...options,
    userExitLink: options.userExitWrapper.querySelector('.b-link-exit')!,
  };

  const addCarToGarage = (props: IProps): void => {
    const app = (): IApp => {
      const app: IApp = {
        initiate: async (props): Promise<void> => {
          const w = (): IAppInitiate => {
            const w: IAppInitiate = {
              _then(cb: string, ...args): IAppInitiate {
                this[cb](...args);
                return w;
              },
              _checkStatement({condition, stateA, stateB}: ICheckStatementProps) {
                return condition ? stateA() : stateB()
              },
              checkForUserLogin(): boolean {
                return checkAvailable(props.userExitLink)
              },
              getCarData(): void {
                const params = new URLSearchParams(window.location.search);
                this.carVIN = params.get('vin') || '';
                this.authToken = props.authToken;

                [...props.carData].forEach(tr => {
                  const trLabel = getText(tr.children[0]);
                  const trValue = getText(tr.children[1]);
                  switch (trLabel)
                  {
                    case 'Производитель:':
                      this.carName = trValue;
                      break;
                    case 'Модель:':
                      this.carModel = trValue;
                      break;
                    case 'Выпущено':
                      this.carYear = trValue;
                      break;
                    default:
                      break;
                  }
                })
              },
              checkForAlreadyAddedVIN(): Promise<boolean>|boolean {
                return fetch(`${apiUrl}?autos=json`)
                  .then(result => result.json())
                  .then(result => {
                    const codes = flattenObjectValues(result, 'code', []).map(lowerCase);

                    return codes.includes(lowerCase(this.carVIN));
                  });
              },
              alreadyAddedHandler(): void {
                const {addCarButtons} = props;
                const {text, className} = addedButtonProps;

                [...addCarButtons].forEach(button => {
                  setText(button, text);
                  addClass(button, className);
                });
              },
              dontAddedHandler(): void {
                const addButtonHandler = () => {
                  [...props.addCarButtons].forEach(button => {
                    button.disabled = true;
                  });

                  const formData = getFormData([
                    { key: 'any_auto[type]', value: 'AnyAuto' },
                    { key: 'utf8', value: 'AnyAuto' },
                    { key: 'authenticity_token', value: this.authToken },
                    { key: 'any_auto[code]', value: this.carVIN },
                    { key: 'any_auto[make_name]', value: this.carName },
                    { key: 'any_auto[model]', value: this.carModel },
                    { key: 'any_auto[year]', value: this.carYear },
                    { key: 'any_auto[engine]', value: '' },
                    { key: 'any_auto[body]', value: '' },
                    { key: 'any_auto[comment]', value: '' },
                  ]);

                  fetch(garageUrl, {
                    method: 'POST',
                    body: formData
                  });
                  [...props.addCarButtons].forEach(button => {
                    eventRemove(button, 'click', addButtonHandler);
                  });

                  addCarToGarageHandler();
                };

                [...props.addCarButtons].forEach(button => {
                  eventAdd(button, 'click', addButtonHandler);
                })
              },
              dontLoginHandler(): void {},
              isCarAlreadyAdded: false,
              authToken: '',
              carVIN: '',
              carName: '',
              carModel: '',
              carYear: '',
            };

            return w;
          };
          const app = w();

          if (app.checkForUserLogin()) {
            app.getCarData();
            app.isCarAlreadyAdded = await app.checkForAlreadyAddedVIN();

            app.isCarAlreadyAdded
              ? app.alreadyAddedHandler()
              : app.dontAddedHandler();
          }
        }
      }

      return app;
    };

    app()
      .initiate(props);
  };

  const addCarToGarageHandler = addCarToGarage.bind(null, props);

  eventAdd(document, 'DOMContentLoaded', addCarToGarageHandler);
}