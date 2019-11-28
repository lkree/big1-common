const buttonHandler = () => {
  const deliveryModule = document.querySelector('.delivery-pickup');
  const options = {
    pickupModule: deliveryModule,
    pointsWrapper: deliveryModule.querySelector('.delivery-pickup__points-list'),
    input: deliveryModule.querySelector('.delivery-pickup__input'),
    close: deliveryModule.querySelector('.delivery-pickup__close'),
    deliveryPoints: {
      'city': ['Ярославль', 'Москва', 'Астрахань', 'Оренбург', 'Бузулук', 'Химки', 'Санкт-Петербург', 'Ярославль', 'Ярославль', 'Ярославль', 'Ярославль'],
      'address': ['Полушкина Роща 16Л', 'Пушкина 30', 'Власова 61б', 'Зелинского 10', 'Соловьёва 90', 'Babel 76', 'Fallout 77', 'Полушкина Роща 16Л', 'Полушкина Роща 16Л', 'Полушкина Роща 16Л', 'Полушкина Роща 16Л'],
    },
    handleClass: (el, action, className) => el.classList[action](className),
    escapeHtml: (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };

      return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    },
  };
  const module = ({pickupModule, pointsWrapper, deliveryPoints, handleClass}) => {
    module.initiate = () => {
      const handle = (module, pointsWrapper, deliveryPoints) => {
        const waitScreen = module.querySelector('.delivery-pickup__wait-screen');
        const createPoint = (city, address) => {
          const point = document.createElement('p');
          point.classList.add('delivery-pickup__point');
          point.textContent = `${city}, ${address}`;

          return point;
        };

        handle.showModule = () => {
          handleClass(module, 'remove', 'hidden');

          return handle;
        };
        handle.setWaitScreen = () => {
          handleClass(waitScreen, 'remove', 'hidden');

          return handle;
        };
        handle.fillModule = () => {
          deliveryPoints['city'].forEach((el, i) => {
            if (module.dataset.deliveryPoint) {

            };
            pointsWrapper.append(createPoint(el, deliveryPoints['address'][i]))
          });

          return handle;
        };
        handle.disableWaitScreen = () => {
          handleClass(waitScreen, 'add', 'hidden');

          return handle;
        };

        return handle;
      };

      handle(pickupModule, pointsWrapper, deliveryPoints)
        .showModule()
        .setWaitScreen()
        .fillModule()
        .disableWaitScreen();

      return module;
    };

    return module;
  };
  const eventListeners = ({input, pointsWrapper, escapeHtml, handleClass, close, pickupModule}) => {
    let onSearchInput = () => {};
    let onPointClick = () => {};
    let onCloseClick = () => {};
    let renderedPoints;
    let filterFlag;
    let selected = [];
    const eventAdd = (el, event, handler) => el.addEventListener(event, handler);
    const eventRemove = (el, event, handler) => el.removeEventListener(event, handler);

    eventListeners.create = () => {
      onSearchInput = (evt) => {
        const inputString = escapeHtml(evt.target.value);

        const handle = (inputString) => {
          const lowerCase = (el) => el.toLowerCase();
          let fastExit;

          handle.getAllPoints = () => {
            renderedPoints = renderedPoints || [...pointsWrapper.querySelectorAll('.delivery-pickup__point')];

            return handle;
          };
          handle.inputString = () => {
            if (inputString.length < 3) {
              if (!filterFlag) {
                fastExit = true;
                return handle;
              }

              handle.filterPoints('remove');
              filterFlag = false;
              fastExit = true;

              return handle;
            }

            inputString = lowerCase(inputString);

            return handle;
          };
          handle.filterPoints = (action = 'add') => {
            if (fastExit) return handle;

            [...renderedPoints].forEach((point) => {
              const string = lowerCase(point.textContent);

              if (inputString.length > 0 && ~string.indexOf(inputString)) {
                handleClass(point, 'remove', 'hidden');
                return;
              }

              handleClass(point, action, 'hidden');
              filterFlag = true;
            });

            return handle;
          };

          return handle;
        };

        handle(inputString)
          .getAllPoints()
          .inputString()
          .filterPoints()
      };
      onSearchInput = _.debounce(onSearchInput, 300);
      onPointClick = (evt) => {
        const handle = (evt) => {
          const target = evt.target;
          let fastExit;

          handle.checkEl = () => {
            if (!target.classList.contains('delivery-pickup__point')) {
              fastExit = true;
              return handle;
            }
            if (target.classList.contains('delivery-pickup__point--active')) {
              fastExit = true;
            }

            if (selected) selected.forEach((el) => {
              handleClass(el, 'remove', 'delivery-pickup__point--active');
              selected.splice(el);
            });
            return handle;
          };
          handle.setStatus = () => {
            if (!fastExit) {
              handleClass(target, 'add', 'delivery-pickup__point--active');
              selected.push(target);
            }

            return handle;
          };

          return handle;
        };

        handle(evt)
          .checkEl()
          .setStatus()
      };
      onCloseClick = () => {
        const module = () => {
          module.saveInfo = () => {
            pickupModule.dataset.deliveryPoint = selected[0] ? selected[0].textContent : '';

            return module;
          };
          module.hide = () => {
            handleClass(pickupModule, 'add', 'hidden');

            return module;
          };
          module.inputClear = () => {
            input.value = '';

            return module;
          };
          module.clear = () => {
            [...pointsWrapper.children].forEach((el) => el.remove());

            return module;
          };
          module.removeListeners = () => {
            eventRemove(input, 'input', onSearchInput);
            eventRemove(pointsWrapper, 'click', onPointClick);
            eventRemove(close, 'click', onCloseClick);

            return module;
          };

          return module;
        };

        module()
          .saveInfo()
          .hide()
          .inputClear()
          .clear()
          .removeListeners()
      };

      return eventListeners;
    };
    eventListeners.add = () => {
      eventAdd(input, 'input', onSearchInput);
      eventAdd(pointsWrapper, 'click', onPointClick);
      eventAdd(close, 'click', onCloseClick);

      return eventListeners;
    };

    return eventListeners;
  };

  module(options)
    .initiate();

  eventListeners(options)
    .create()
    .add();
};
document.querySelector('button').addEventListener('click', buttonHandler);