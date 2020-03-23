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
import {IOptions, ICheckStatementProps, IProps} from "./interfaces.ts";

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
    const app = (() => {
      const app = () => {};
      app.prototype = {
        initiate: (props): void => {
          const w = (() => {
            const w = () => {};

            w.prototype = {
              _then: (cb: Function, ...args): Function => {
                cb(...args);
                return w.prototype;
              },
              _checkStatement: ({condition, stateA, stateB}: ICheckStatementProps) => condition ? stateA() : stateB(),
              checkForUserLogin: ({userExitLink}): boolean => checkAvailable(userExitLink),
              getCarData: async (): Promise<void> => {
                const params = new URLSearchParams(window.location.search);
                w.carVIN = params.get('vin') || '';
                w.authToken = props.authToken;

                [...props.carData].forEach(tr => {
                  const trLabel = getText(tr.children[0]);
                  const trValue = getText(tr.children[1]);
                  switch (trLabel)
                  {
                    case 'Производитель:':
                      w.carName = trValue;
                      break;
                    case 'Модель:':
                      w.carModel = trValue;
                      break;
                    case 'Выпущено':
                      w.carYear = trValue;
                      break;
                    default:
                      break;
                  }
                })
              },
              checkForAlreadyAddedVIN: (): Promise<void>|void => {
                fetch(`${apiUrl}?autos=json`)
                  .then(result => result.json())
                  .then(result => {
                    const codes = flattenObjectValues(result, 'code', []).map(lowerCase);
                    w.isCarAlreadyAdded = codes.includes(lowerCase(w.carVIN));
                  })
                  .then(() => {
                    w._checkStatement({
                      condition: w.isCarAlreadyAdded,
                      stateA: w.alreadyAddedHandler,
                      stateB: w.dontAddedHandler
                    })
                  });
              },
              alreadyAddedHandler: (): void => {
                const {addCarButtons} = props;
                const {text, className} = addedButtonProps;

                [...addCarButtons].forEach(button => {
                  setText(button, text);
                  addClass(button, className);
                });
              },
              dontAddedHandler: (): void => {
                const onAddButtonClick = () => {
                  [...props.addCarButtons].forEach(button => {
                    button.disabled = true;
                  });

                  const getFormData = () => {
                    const formData = new FormData();

                    formData.append('any_auto[type]', 'AnyAuto');
                    formData.append('utf8', '✓');
                    formData.append('authenticity_token', w.authToken);
                    formData.append('any_auto[code]', w.carVIN);
                    formData.append('any_auto[make_name]', w.carName);
                    formData.append('any_auto[model]', w.carModel);
                    formData.append('any_auto[year]', w.carYear);
                    formData.append('any_auto[engine]', '');
                    formData.append('any_auto[body]', '');
                    formData.append('any_auto[comment]', '');

                    return formData;
                  };

                  const formData = getFormData();

                  fetch(garageUrl, {
                    method: 'POST',
                    body: formData
                  })
                    .then(() => {
                      [...props.addCarButtons].forEach(button => {
                        eventRemove(button, 'click', onAddButtonClick);
                      });

                      addCarToGarageHandler();
                    });

                };

                [...props.addCarButtons].forEach(button => {
                  eventAdd(button, 'click', onAddButtonClick);
                })
              },
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
          })();

          const {
            getCarData,
            checkForAlreadyAddedVIN,
            checkForUserLogin,
          } = w;

          checkForUserLogin(props) &&
          w
            ._then(getCarData)
            ._then(checkForAlreadyAddedVIN)

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