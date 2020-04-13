window.deliveryPickup = () => {
  const getDeliveryPoints = () => {
    let ymaps, arr = [];
    try {
      ymaps = YMaps.location.city;
    } catch(e) {
      ymaps = 'Ярославль';
    }

    const currentCity = getCookie('deliveryCity') || ymaps || 'Ярославль';
    let temp = window.citiesList
      .filter(city => city.branches && city.name === currentCity)[0];

    temp &&
      temp.branches &&
        Object.keys(temp.branches).forEach(k => arr = [...arr, ...temp.branches[k]]);

    temp = arr[0] &&
      arr.map(e => e.name.split(', '));

    return {
      city: !_.isEmpty(temp) ? temp.map(el => el[0]) : 'К сожалению, в данном городе у нас нет филиалов :(',
      address: !_.isEmpty(temp) ? temp.map(el => el[1]) : 'Выберите Пункт доставки в разделе "Доставка"',
    }
  };
  const deliveryPoints = getDeliveryPoints();
  const option = {
    pickupModule: document.querySelector('.delivery-pickup'),
  };
  const options = _.extend(option, {
    pointsWrapper: option.pickupModule.querySelector('.delivery-pickup__points-list'),
    input:  option.pickupModule.querySelector('.delivery-pickup__input'),
    chosenCity: option.pickupModule.querySelector('.delivery-pickup__chosen-city'),
    changeCity: option.pickupModule.querySelector('.delivery-pickup__change-city'),
    deliveryPoints,
  });
  const buttonHandler = (options) => {
    const u = {
      saveStorageInfo: (chosenPoint) => {
        localStorage.setItem('deliveryDate', '0');
        localStorage.setItem('deliveryAddress', `pickup: ${chosenPoint}`);
      },
    };
    const module = ({pickupModule, pointsWrapper, deliveryPoints, chosenCity}) => {
      module.initiate = () => {
        const handle = (pickupModule, pointsWrapper, deliveryPoints, chosenCity) => {
          const createPoint = (city, address) => {
            const point = document.createElement('p');
            point.classList.add('delivery-pickup__point');
            point.textContent = `${city}, ${address}`;

            return point;
          };
          const createNoPoint = (header, message) => {
            const point = document.createElement('p');
            point.classList.add('delivery-pickup__no-point');
            point.innerHTML = `${header}<br/>${message}`;

            return point;
          };
          let isRendered = false, _renderedCity, userCity;

          handle.checkRender = () => {
            isRendered = pickupModule.dataset.rendered;

            return handle;
          };
          handle.fillModule = () => {
            if (!isRendered) {
              if (Array.isArray(deliveryPoints['city']))
                deliveryPoints['city'].forEach((el, i) => pointsWrapper.append(createPoint(el, deliveryPoints['address'][i])));
              else pointsWrapper.append(createNoPoint(deliveryPoints['city'], deliveryPoints['address']));

              pickupModule.dataset.rendered = '1';
            }

            return handle;
          };
          handle.getUserCity = () => {
            _renderedCity = chosenCity.textContent;

            return handle;
          };
          handle.setUserCity = () => {
            if (!_renderedCity) {
              userCity = getCookie('deliveryCity') || YMaps.location.city || 'Ярославль';
              h.setText(chosenCity, userCity);
            }
            else userCity = _renderedCity;

            return handle;
          };

          return handle;
        };

        handle(pickupModule, pointsWrapper, deliveryPoints, chosenCity)
          .checkRender()
          .fillModule()
          .getUserCity()
          .setUserCity();

        return module;
      };

      return module;
    };
    const eventListeners = ({input, pointsWrapper, pickupModule, changeCity}) => {
      let onSearchInput = () => {};
      let onPointClick = () => {};
      let onCloseClick = () => {};
      let onConfirmClick = () => {};
      let onChangeCityClick = () => {};
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
            const {target} = evt;
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

                h.saveAllCookie({type: null, address: null, id: null, deadline: null, cost: null, courier: null});

                return w;
              };
              w.clearChosenPoint = () => {
                h.removeElement(chosenPoint);

                return w;
              };
              w.setChosenPoint = () => {
                _chosenPointInfo = target.textContent;
                h.setDataSet(pickupModule, 'deliveryPoint', _chosenPointInfo);

                return w;
              };
              w.saveStorageInfo = () => {
                u.saveStorageInfo(_chosenPointInfo);

                h.saveAllCookie({type: 'pickup', address: _chosenPointInfo, id: '', deadline: '0', cost: '0', city: _chosenPointInfo.split(',')[0]});

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
                  .clearChosenPoint();

                return handle;
              }
              if (!fastExit) {
                w()
                  .setChosenPoint()
                  .saveStorageInfo();
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
        onChangeCityClick = () => {
          h.saveAllCookie({type: null, address: null, id: null, deadline: null, cost: null, courier: null});
          sessionStorage.setItem('fromAnotherUrl', '/baskets');
          sessionStorage.setItem('haveToOpenPickupModule', 'y');
          sessionStorage.setItem('prevBasketPage', '2');
          sessionStorage.setItem('fromPickup', 'y');
          sessionStorage.setItem('backFromPickup', 'y');
          location.assign('/kontakty.html');
        };

        return eventListeners;
      };
      eventListeners.add = () => {
        listenersList = [
          [input, 'input', onSearchInput],
          [pointsWrapper, 'click', onPointClick],
          [changeCity, 'click', onChangeCityClick],
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
  buttonHandler(options);
};