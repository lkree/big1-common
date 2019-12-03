{
const option = {
  pickupModule: document.querySelector('.delivery-pickup')
};
const options = _.extend(option, {
  pointsWrapper: options.pickupModule.querySelector('.delivery-pickup__points-list'),
  input:  options.pickupModule.querySelector('.delivery-pickup__input'),
  close:  options.pickupModule.querySelector('.delivery-pickup__close'),
  deliveryPoints: {
    'city': ['Ярославль', 'Москва', 'Астрахань', 'Оренбург', 'Бузулук', 'Химки', 'Санкт-Петербург', 'Горький', 'Одесса', 'Мурманск', 'Алма-Ата'],
    'address': ['Полушкина Роща 16Л', 'Пушкина 30', 'Власова 61б', 'Зелинского 10', 'Соловьёва 90', 'Babel 76', 'Fallout 77', 'Королёва 35', 'Бурмистрова 16', 'Сидорова 47/4', 'Кирова 11'],
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

    return text.replace(/[&<>"']/g, (m) => map[m]);
  },
});
const buttonHandler = (options) => {
  const module = ({pickupModule, pointsWrapper, deliveryPoints, handleClass}) => {
    module.initiate = () => {
      const handle = (pickupModule, pointsWrapper, deliveryPoints) => {
        const waitScreen = pickupModule.querySelector('.delivery-pickup__wait-screen');
        const createPoint = (city, address) => {
          const point = document.createElement('p');
          point.classList.add('delivery-pickup__point');
          point.textContent = `${city}, ${address}`;

          return point;
        };
        let isRendered = false;

        handle.showModule = () => {
          handleClass(pickupModule, 'remove', 'hidden');

          return handle;
        };
        handle.setWaitScreen = () => {
          handleClass(waitScreen, 'remove', 'hidden');

          return handle;
        };
        handle.checkRender = () => {
          isRendered = pickupModule.dataset.rendered;

          return handle;
        };
        handle.fillModule = () => {
          if (!isRendered) {
            deliveryPoints['city'].forEach((el, i) => pointsWrapper.append(createPoint(el, deliveryPoints['address'][i])));
            pickupModule.dataset.rendered = '1';
          }

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
        .checkRender()
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
    let onDocumentClick = () => {};
    let listenersList = [];
    let renderedPoints;
    let filterFlag;
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
          let fastExit, prevEl, selected;

          handle.checkEl = () => {
            if (!target.classList.contains('delivery-pickup__point')) {
              fastExit = true;
              return handle;
            }
            if (target.classList.contains('delivery-pickup__point--active')) {
              fastExit = true;
              selected = true;
            }
            else prevEl = pointsWrapper.querySelector('.delivery-pickup__point--active');

            return handle;
          };
          handle.saveInfo = () => {
            if (selected) {
              pickupModule.dataset.deliveryPoint = '';
              return handle;
            }
            if (!fastExit) pickupModule.dataset.deliveryPoint = target.textContent;

            return handle;
          };
          handle.setStatus = () => {
            if (!fastExit) handleClass(target, 'add', 'delivery-pickup__point--active');
            if (selected) handleClass(target, 'remove', 'delivery-pickup__point--active');
            if (prevEl) handleClass(prevEl, 'remove', 'delivery-pickup__point--active');

            return handle;
          };

          return handle;
        };

        handle(evt)
          .checkEl()
          .saveInfo()
          .setStatus()
      };
      onCloseClick = () => {
        const module = () => {
          module.restorePoints = () => {
            [...pointsWrapper.children].forEach((point) => handleClass(point, 'remove', 'hidden'));

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
          module.removeListeners = () => {
            listenersList.forEach((listenerOptions) => eventRemove(listenerOptions[0], listenerOptions[1], listenerOptions[2]));

            return module;
          };

          return module;
        };

        module()
          .hide()
          .restorePoints()
          .inputClear()
          .removeListeners()
      };
      onDocumentClick = (evt) => {
        if (evt.target.contains(pickupModule) && evt.target !== pickupModule) onCloseClick();
      };

      return eventListeners;
    };
    eventListeners.add = () => {
      listenersList = [
        [input, 'input', onSearchInput],
        [pointsWrapper, 'click', onPointClick],
        [close, 'click', onCloseClick],
        [document, 'click', onDocumentClick]
      ];

      listenersList.forEach((listenerOptions) => eventAdd(listenerOptions[0], listenerOptions[1], listenerOptions[2]));

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
window.onButtonClick = _.partial(buttonHandler, options);
}