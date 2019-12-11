{
  const option = {
    pickupModule: document.querySelector('.delivery-pickup'),
  };
  const options = _.extend(option, {
    pointsWrapper: option.pickupModule.querySelector('.delivery-pickup__points-list'),
    input:  option.pickupModule.querySelector('.delivery-pickup__input'),
    close:  option.pickupModule.querySelector('.delivery-pickup__close'),
    blockScreen: document.querySelector('.basket__display-block'),
    confirmButton: option.pickupModule.querySelector('.delivery-pickup__confirm-btn'),
    deliveryPoints: {
      'city': ['Ярославль', 'Москва', 'Астрахань', 'Оренбург', 'Бузулук', 'Химки', 'Санкт-Петербург', 'Горький', 'Одесса', 'Мурманск', 'Алма-Ата'],
      'address': ['Полушкина Роща 16Л', 'Пушкина 30', 'Власова 61б', 'Зелинского 10', 'Соловьёва 90', 'Babel 76', 'Fallout 77', 'Королёва 35', 'Бурмистрова 16', 'Сидорова 47/4', 'Кирова 11'],
    },
  });
  const buttonHandler = (options) => {
    const h = {
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
      activateButton: (button) => {
        button.disabled = false;
        h.handleClass(button, 'remove', 'delivery-pickup__confirm-btn--deactive');
      },
      disableButton: (button) => {
        button.disabled = true;
        h.handleClass(button, 'add', 'delivery-pickup__confirm-btn--deactive')
      },
      setDataSet: (el, dataType, value) => el.dataset[dataType] = value,
      clearEl: (el) => el = null,
    };
    const u = {
      saveStorageInfo: (chosenPoint) => {
        localStorage.setItem('deliveryDate', '0');
        localStorage.setItem('deliveryAddress', `pickup: ${chosenPoint}`);
      },
    };
    const module = ({pickupModule, pointsWrapper, deliveryPoints, blockScreen}) => {
      module.initiate = () => {
        const handle = (pickupModule, pointsWrapper, deliveryPoints, blockScreen) => {
          const waitScreen = pickupModule.querySelector('.delivery-pickup__wait-screen');
          const createPoint = (city, address) => {
            const point = document.createElement('p');
            point.classList.add('delivery-pickup__point');
            point.textContent = `${city}, ${address}`;

            return point;
          };
          let isRendered = false;

          handle.setBlockScreen = () => {
            h.handleClass(blockScreen, 'remove', 'hidden');

            return handle;
          };
          handle.showModule = () => {
            h.handleClass(pickupModule, 'remove', 'hidden');

            return handle;
          };
          handle.setWaitScreen = () => {
            h.handleClass(waitScreen, 'remove', 'hidden');

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
            h.handleClass(waitScreen, 'add', 'hidden');

            return handle;
          };

          return handle;
        };

        handle(pickupModule, pointsWrapper, deliveryPoints, blockScreen)
          .setBlockScreen()
          .showModule()
          .setWaitScreen()
          .checkRender()
          .fillModule()
          .disableWaitScreen();

        return module;
      };

      return module;
    };
    const eventListeners = ({input, pointsWrapper, close, pickupModule, blockScreen, confirmButton}) => {
      let onSearchInput = () => {};
      let onPointClick = () => {};
      let onCloseClick = () => {};
      let onBlockScreenClick = () => {};
      let onConfirmClick = () => {};
      let customEvent = new Event('ClosePickupModule', {bubbles: true});
      let listenersList = [];
      let renderedPoints;
      let filterFlag;
      let chosenPoint;
      let _chosenPointInfo = pickupModule.dataset.deliveryPoint || '';
      const eventAdd = (el, event, handler) => el.addEventListener(event, handler);
      const eventRemove = (el, event, handler) => el.removeEventListener(event, handler);

      eventListeners.create = () => {
        onSearchInput = (evt) => {
          const inputString = h.escapeHtml(evt.target.value);

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
                  h.handleClass(point, 'remove', 'hidden');
                  return;
                }

                h.handleClass(point, action, 'hidden');
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
            const w = () => {
              w.setFastExit = (value) => {
                fastExit = value;

                return w;
              };
              w.setSelected = (value) => {
                selected = value;

                return w;
              };
              w.setPrevEl = (elem) => {
                prevEl = elem;

                return w;
              };
              w.clearSavedInfo = () => {
                h.setDataSet(pickupModule, 'deliveryPoint', '');
                localStorage.setItem('deliveryAddress', '');
                localStorage.setItem('deliveryDate', '');

                return w;
              };
              w.clearChosenPoint = () => {
                h.clearEl(chosenPoint);

                return w;
              };
              w.disableButton = () => {
                h.disableButton(confirmButton);

                return w;
              };
              w.setChosenPoint = () => {
                _chosenPointInfo = target.textContent;
                h.setDataSet(pickupModule, 'deliveryPoint', _chosenPointInfo);

                return w;
              };
              w.activateButton = () => {
                h.activateButton(confirmButton);

                return w;
              };
              w.saveStorageInfo = () => {
                u.saveStorageInfo(_chosenPointInfo);

                return w;
              };

              return w;
            };

            handle.checkEl = () => {
              if (!target.classList.contains('delivery-pickup__point')) {
                w()
                  .setFastExit(true);

                return handle;
              }
              if (target.classList.contains('delivery-pickup__point--active')) {
                w()
                  .setFastExit(true)
                  .setSelected(true);
              }
              else w().setPrevEl(pointsWrapper.querySelector('.delivery-pickup__point--active'));

              return handle;
            };
            handle.saveInfo = () => {
              if (selected) {
                w()
                  .clearSavedInfo()
                  .clearChosenPoint()
                  .disableButton();

                return handle;
              }
              if (!fastExit) {
                w()
                  .setChosenPoint()
                  .activateButton()
                  .saveStorageInfo()
              }

              return handle;
            };
            handle.setStatus = () => {
              if (!fastExit) h.handleClass(target, 'add', 'delivery-pickup__point--active');
              if (selected) h.handleClass(target, 'remove', 'delivery-pickup__point--active');
              if (prevEl) h.handleClass(prevEl, 'remove', 'delivery-pickup__point--active');

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
              [...pointsWrapper.children].forEach((point) => h.handleClass(point, 'remove', 'hidden'));

              return module;
            };
            module.hide = () => {
              h.handleClass(pickupModule, 'add', 'hidden');

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
            module.disableBlockScreen = () => {
              h.handleClass(blockScreen, 'add', 'hidden');

              return module;
            };
            module.blockConfirmButton = () => {
              if (chosenPoint) h.disableButton(confirmButton);

              return module;
            };
            module.callCustomEvent = () => {
              pickupModule.dispatchEvent(customEvent);

              return module;
            };

            return module;
          };

          module()
            .hide()
            .restorePoints()
            .inputClear()
            .removeListeners()
            .blockConfirmButton()
            .disableBlockScreen()
            .callCustomEvent()
        };
        onBlockScreenClick = (evt) => {
          onCloseClick();
        };
        onConfirmClick = () => {
          const w = () => {
            w.closeModule = () => {
              onCloseClick();

              return w;
            };
            w.saveInfo = () => {
              u.saveStorageInfo(_chosenPointInfo);

              return w;
            };

            return w;
          };

          w()
            .saveInfo()
            .closeModule()
        };

        return eventListeners;
      };
      eventListeners.add = () => {
        listenersList = [
          [input, 'input', onSearchInput],
          [pointsWrapper, 'click', onPointClick],
          [close, 'click', onCloseClick],
          [blockScreen, 'click', onBlockScreenClick],
          [confirmButton, 'click', onConfirmClick]
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
  window.deliveryPickup = _.partial(buttonHandler, options);
}