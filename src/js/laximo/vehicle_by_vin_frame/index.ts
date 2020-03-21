// @ts-nocheck
import {eventAdd, checkAvailable, lowerCase} from './utils.ts';

interface IOptions {
  addCar: Element;
  userExitWrapper: Element;
}
interface IProps extends IOptions {
  addCarButton: Element|null;
  userExitLink: Element|null;
}
interface ICheckStatementProps {
  condition: boolean;
  stateA: Function;
  stateB: Function;
}

const options: IOptions = {
  addCar: document.querySelector('.add-car') || document.createElement('div'),
  userExitWrapper: document.querySelector('.b-tsd-user')|| document.createElement('div'),
};
const props: IProps = {
  ...options,
  addCarButton: options.addCar.querySelector('.add-car__add-button'),
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
            getVIN: (): void => {
              const params = new URLSearchParams(window.location.search);
              w.VIN = params.get('vin') || '';
            },
            checkForAlreadyAddedVIN: async (): Promise<void> => {
              await fetch('/autos.html')
                .then(result => result.text())
                .then(result => {
                  w.isCarAlreadyAdded = Boolean(
                      ~lowerCase(result)
                        .indexOf(lowerCase(w.VIN)));

                  w._checkStatement({
                    condition: w.isCarAlreadyAdded,
                    stateA: w.alreadyAddedHandler,
                    stateB: w.dontAddedHandler
                  });
                });
            },
            alreadyAddedHandler: (): void => {
              console.log(props);
            },
            dontAddedHandler: (): void => {
              console.log(props);
            },
          };

          Object.setPrototypeOf(w, w.prototype);

          return Object.assign(w, {
            VIN: '',
            isCarAlreadyAdded: false,
            addedCarClassname: 'add-car__add-button--added',
          });
        })();

        const {
          getVIN,
          checkForAlreadyAddedVIN,
          checkForUserLogin,
        } = w;

        checkForUserLogin(props) &&
          w
            ._then(getVIN)
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
addCarToGarageHandler();

eventAdd(document, 'DOMContentLoaded', addCarToGarageHandler);

// _then: (cb: Function, ...args: any): Function => {
//   cb(args);
//   return w.prototype;
// },
// const w = (() => {
//   const w = () => w;
//   w.prototype = {
//     _then: (cb = () => {}, ...args) => {cb(...args); return w.prototype},
//     hasBasketSelectedItems: () => !!basketApi.getTotalSum(),
//     preventDefault: (evt = {preventDefault: () => {}}) => evt.preventDefault(),
//     checkStatement: ({condition, stateA, stateB}) => condition ? stateA() : stateB(),
//     setWaitScreen: (waitScreen) => h.setWaitScreen(waitScreen),
//     emptyFunction: () => {},
//     showReact: () => {
//       h.show(reactWrapper);
//       w.hideBasket();
//       w.renderedBasket = false;
//     },
//     showBasket: () => {
//       w.hideReact();
//       h.show(basketForm);
//       w.renderedBasket = true;
//     },
//     hideReact: () => h.hide(reactWrapper),
//     hideBasket: () => h.hide(basketForm),
//     disableWaitScreen: () => h.hide(waitScreen),
//     alertMessage: (message) => alert(message),
//     showAlertPosition: () => w.alertMessage(w.alertPositionMessage),
//   };
//   Object.setPrototypeOf(w, w.prototype);
//
//   return Object.assign(w, {
//     renderedBasket: true,
//     alertPositionMessage: 'Пожалуйста, выберите хотя бы одну позицию',
//   });
// })();