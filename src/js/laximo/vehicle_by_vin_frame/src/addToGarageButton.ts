// @ts-nocheck
import {
  eventAdd,
  checkAvailable,
  lowerCase,
  flattenObjectValues,
  addClass,
  setText,
  getText,
  eventRemove
} from './utils.ts';
import {addedButtonProps, apiUrl, garageUrl} from "./settings.ts";
import {IOptions, ICheckStatementProps, IProps, IAppInitiate, IApp} from "./interfaces.ts";

export default () => {
  const options: IOptions = {
    addCarButtons: document.querySelectorAll('.add-car .add-car__add-button') || document.createElement('div'),
    userExitWrapper: document.querySelector('.b-tsd-user')|| document.createElement('div'),
    carData: document.querySelectorAll('.b-content .table tbody tr'),
    authToken: document.querySelector('meta[name=csrf-token]').content,
  };
  const props: IProps = {
    ...options,
    userExitLink: options.userExitWrapper.querySelector('.b-link-exit'),
  };

  const addCarToGarage = (props: IProps): void => {
    const app = ((): IApp => {
      const app = () => {};
      app.prototype = {
        initiate: async (props): void => {
          const w = (): IAppInitiate => {
            const w = () => {};

            w.prototype = {
              _then(cb: string, ...args): Object {
                this[cb](...args);
                return this;
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

                  const getFormData = () => {
                    const formData = new FormData();

                    formData.append('any_auto[type]', 'AnyAuto');
                    formData.append('utf8', '✓');
                    formData.append('authenticity_token', this.authToken);
                    formData.append('any_auto[code]', this.carVIN);
                    formData.append('any_auto[make_name]', this.carName);
                    formData.append('any_auto[model]', this.carModel);
                    formData.append('any_auto[year]', this.carYear);
                    formData.append('any_auto[engine]', '');
                    formData.append('any_auto[body]', '');
                    formData.append('any_auto[comment]', '');

                    return formData;
                  };

                  const formData = getFormData();

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
              dontLoginHandler(): void {}
            };

            Object.setPrototypeOf(w, w.prototype);

            return Object.assign(w, {
              isCarAlreadyAdded: false,
              authToken: '',
              carVIN: '',
              carName: '',
              carModel: '',
              carYear: '',
            });
          };
          const app = w();

          if (app.checkForUserLogin()) {
            app.getCarData();
            app.isCarAlreadyAdded = await app.checkForAlreadyAddedVIN();

            app.isCarAlreadyAdded ?
              app.alreadyAddedHandler() :
              app.dontAddedHandler();
          }
        },
      };

      Object.setPrototypeOf(app, app.prototype);

      return Object.assign(app, {});
    })();

    app
      .initiate(props);
  };

  const addCarToGarageHandler = addCarToGarage.bind(null, props);

  eventAdd(document, 'DOMContentLoaded', addCarToGarageHandler);
}