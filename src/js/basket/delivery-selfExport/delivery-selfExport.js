window.deliverySelfExport = () => {
  /*
  constants
   */
  const option = {
    selfExportModule: document.querySelector('.delivery-selfExport'),
    JCShiptorWidgetPvz: document.querySelector('#shiptor_widget_pvz'),
    map: document.querySelector('[data-role="shiptor_widget_show"]'),
  };
  /*
   another constants depends on option object
   */
  const options = _.extend(option, {
    citiesList: option.selfExportModule.querySelector('.delivery-selfExport__cities-list'),
    pickupList: option.selfExportModule.querySelector('.delivery-selfExport__pickup-list'),
    pickupSection: option.selfExportModule.querySelector('.delivery-selfExport__pickup'),
    citiesSection: option.selfExportModule.querySelector('.delivery-selfExport__cities'),
    citySearchInput: option.selfExportModule.querySelector('.delivery-selfExport__city-search-input'),
    pickupSearchInput: option.selfExportModule.querySelector('.delivery-selfExport__pickup-search-input'),
    errorSection: option.selfExportModule.querySelector('.delivery-selfExport__error'),
    waitScreen: option.selfExportModule.querySelector('.delivery-selfExport__wait-screen'),
    chosenCity: option.selfExportModule.querySelector('.delivery-selfExport__chosen-city'),
    changeCity: option.selfExportModule.querySelector('.delivery-selfExport__change-city'),
    showMap: option.selfExportModule.querySelector('.delivery-selfExport__show-map'),
  });
  const handler = (options) => {
    const l = {
      onChangeCity: () => {},
      onShowMapClick: () => {},
      onPickupConfirm: () => {},
      onPickupInput: () => {},
      onPickupPointClick: () => {},
      onCloseClick: () => {},
      onMapClose: () => {},
    }; //listeners
    const u = {
      saveStorageInfo: (module, chosenPoint, courier) => {
        localStorage.setItem('deliveryDate', h.getDataSet(module, 'deliveryPeriod'));
        localStorage.setItem('deliveryAddress', `delivery: ${chosenPoint} | ${courier}`);
      },
      /**
       * @param methods {Object}
       * @returns {[number, number]}
       */
      convertDeliveryPeriod: ({ result: { methods } }) => {
        let minDays;
        let maxDays;
        try {
          minDays = methods[0].min_days;
        } catch({ message }) {
          console.log(message);
          minDays = 0;
        }
        try {
          maxDays = methods[0].max_days;
        } catch({ message }) {
          console.log(message);
          maxDays = 0;
        }


        return [minDays, maxDays];
      },
      initiateApi: (usersCity, fromCity = '77000000000') => (new ShiptorPointsGetter({
        usersCity: usersCity,
        fromCity: fromCity,
      })),
      filterList: ({itemList, childClassName, wrapper, fastExit, isCityFiltered, firstInitiate = true}) => (evt) => {
        const inputString = h.escapeHtml(evt.target.value);

        const w = (inputString) => {
          let renderedCities;

          w.initiate = () => {
            if (firstInitiate) itemList = itemList === 'pickup' ? wrapper.querySelector('.delivery-selfExport__pickup-list') : wrapper.querySelector('.delivery-selfExport__cities-list');

            firstInitiate = false;

            return w;
          };
          w.getAllPoints = () => {
            renderedCities = [...itemList.querySelectorAll(childClassName)];

            return w;
          };
          w.inputString = () => {
            if (inputString.length < 3) {
              if (!isCityFiltered) {
                fastExit = true;
                return w;
              }

              w.filterPoints('remove');
              isCityFiltered = false;
              fastExit = true;

              return w;
            }

            inputString = h.lowerCase(inputString);

            return w;
          };
          w.filterPoints = (action = 'add') => {
            if (fastExit) return w;

            renderedCities.forEach((point) => {
              const {value: textContent} = point.dataset;

              if (h.checkSubString(textContent, inputString)) {
                h.handleClass(point, 'remove', 'hidden');
                return;
              }

              h.handleClass(point, action, 'hidden');
              isCityFiltered = true;
            });

            return w;
          };
          w.clearClosure = () => {
            fastExit = '';

            return w;
          };

          return w;
        };

        w(inputString)
          .initiate()
          .getAllPoints()
          .inputString()
          .filterPoints()
          .clearClosure()
      },
    }; //functions especially used for this module
    const module = ({ selfExportModule, pickupList, chosenCity, pickupSection, pickupSearchInput, JCShiptorWidgetPvz, waitScreen, errorSection }) => {
      module.initiate = () => {
        const w = () => {
          let _renderedCity, userCity, deliveryPoints, shiptorApi, shippingDays, isRendered = false;
          let needRerender = +localStorage.getItem('needRerender');

          w.showPickupSection = () => {
            h.show(pickupSection);

            return w;
          };
          w.setWaitScreen = () => {
            h.setWaitScreen(waitScreen);

            return w;
          };
          w.getUserCity = () => {
            _renderedCity = chosenCity.textContent;

            return w;
          };
          w.setUserCity = () => {
            if (!_renderedCity) {
              userCity = getCookie('deliveryCity') || YMaps.location.city || 'Ярославль';
              h.setText(chosenCity, userCity);
            }
            else userCity = _renderedCity;

            return w;
          };
          w.checkRender = () => {
            const s = () => {
              s.getRenderedPoints = () => {
                isRendered = h.getDataSet(selfExportModule, 'renderedPoints');

                return s;
              };
              s.getRenderedCity = () => {
                if (_renderedCity !== h.getDataSet(selfExportModule, 'renderedCity')) _renderedCity = '';

                return s;
              };
              s.setRenderedCity = () => {
                h.setDataSet(selfExportModule, 'renderedCity', userCity);

                return s;
              };

              return s;
            };

            s()
              .getRenderedCity()
              .getRenderedPoints()
              .setRenderedCity();

            return w;
          };
          w.handleDeliveryPoints = () => {
            if (!isRendered || !_renderedCity || needRerender) {
              const s = () => {
                s.clearLocalRerenderInfo = () => {
                  localStorage.setItem('needRerender', '');
                  needRerender = false;

                  return s;
                };
                s.cleaPickupInput = () => {
                  h.clearInput(pickupSearchInput);

                  return s;
                };
                s.clearPickupList = () => {
                  h.clearEl(pickupList);

                  return s;
                };
                s.initiateApi = () => {
                  shiptorApi = u.initiateApi(userCity, '77000000000');

                  return s;
                };
                s.handleRequest = () => {
                  shiptorApi
                    .getUsersCityKladr()
                    .then((result) => {
                      let kladrId;
                      try {
                        kladrId = result.result[0].kladr_id;
                      } catch({ message }) {
                        console.log(message);
                        kladrId = '11001110011'
                      }
                      h.setDataSet(selfExportModule, 'cityKladr', kladrId);

                      return kladrId;
                    })
                    .then((result) => h.setDataSet(JCShiptorWidgetPvz, 'cityKladr', result))
                    .then((result) => s.setKladrId(result))
                    .then(() => window.JCShiptorWidgetPvz.hide())
                    .then(() => shiptorApi.calculateShipping())
                    .then(result => {
                      const supplyPeriod = 0;
                      const [minDays, maxDays] = u.convertDeliveryPeriod(result);
                      shippingDays = [minDays + supplyPeriod, maxDays + supplyPeriod];

                      h.setDataSet(selfExportModule, 'deliveryPeriod', maxDays || minDays);
                    })
                    .then(() => {
                      shiptorApi
                        .getDeliveryPoints(['cdek', 'pec', 'dpd'])
                        .then((result = []) => {
                          if (result.result.length < 1) h.showError(errorSection);
                          return s.filterPoints(result)
                        })
                        .then(() => {
                          h.setDataSet(selfExportModule, 'renderedPoints', 1);
                          w.checkRender();
                          _renderedCity = userCity;
                        })
                        .then(() => w.disableWaitScreen(waitScreen));
                    })
                };
                s.filterPoints = ({result}) => {
                  deliveryPoints = result.filter((point) => point.active);
                  s.renderDeliveryPoints(deliveryPoints);

                  return s;
                };
                s.renderDeliveryPoints = (points) => {
                  const handleAddress = (address, fallback) => {
                    let street, house, value;
                    try {
                      address = address ? address : fallback;
                      if (typeof address === 'object') {
                        street = address.street; house = address.house;
                        value = `${street} ${house}`;
                      } else {
                        value = fallback;
                        value = value.split(', ');
                        value = `${value[1]} ${value[2]}`;
                      }
                    } catch(e) {

                    }

                    return value;
                  };
                  const createDeliveryPoint = ({ courier, address, prepare_address, id }) => {
                    const value = handleAddress(prepare_address, address);

                    const point = document.createElement('li');
                    h.handleClass(point,'add', 'delivery-selfExport__pickup-point');
                    h.setDataSet(point, 'value', value);
                    h.setDataSet(point, 'id', id);
                    h.setDataSet(point, 'courier', courier);

                    const pointAddress = document.createElement('p');
                    h.handleClass(pointAddress,'add','delivery-selfExport__address');
                    h.setText(pointAddress, address);

                    point.append(pointAddress);

                    return point;
                  };
                  const wrapper = document.createDocumentFragment();

                  points.forEach((point) => {
                    wrapper.append(createDeliveryPoint(point))
                  });
                  pickupList.append(wrapper);
                };
                s.setKladrId = (kladrId) => {
                  window.JCShiptorWidgetPvz.setParams({
                    location: {
                      kladr_id: kladrId
                    }
                  });
                  window.JCShiptorWidgetPvz.refresh();

                  return s;
                };

                return s;
              };

              s()
                .clearLocalRerenderInfo()
                .cleaPickupInput()
                .clearPickupList()
                .initiateApi()
                .handleRequest();

              return w;
            }
            else w.disableWaitScreen(waitScreen);

            return w;
          };
          w.disableWaitScreen = async () => {
            await h.disableWaitScreen(waitScreen);

            return w;
          };

          return w;
        };

        w()
          .showPickupSection()
          .setWaitScreen()
          .getUserCity()
          .setUserCity()
          .checkRender()
          .handleDeliveryPoints()
      };

      return module;
    };
    const eventListeners = ({ changeCity, showMap, pickupSection, citiesList, selfExportModule, citiesSection, pickupSearchInput, pickupList, JCShiptorWidgetPvz, map }) => {
      let listenersList = [];
      let chosenPoint;
      let _chosenPoint = `${selfExportModule.dataset.renderedCity}, ${selfExportModule.dataset.deliveryPoint}` || '';
      let _chosenCourier = h.getDataSet(pickupList.querySelector('.delivery-selfExport__pickup-point--active'), 'courier');
      let customEvent = new Event('ClosePickupModule', {bubbles: true});
      
      eventListeners.create = () => {
        l.onChangeCity = () => {
          h.saveAllCookie({type: null, address: null, id: null, deadline: null, cost: null, courier: null});
          sessionStorage.setItem('fromBasket', 'y');
          sessionStorage.setItem('prevBasketPage', '2');
          location.assign('/kontakty.html');
        };
        l.onPickupInput = _.partial(u.filterList, {
          itemList: 'pickup',
          childClassName: '.delivery-selfExport__pickup-point',
          wrapper: selfExportModule,
        });
        l.onPickupInput = _.debounce(l.onPickupInput(), 300);
        l.onPickupPointClick = (evt) => {
          const handle = ({ target }) => {
            let fastExit, prevEl, selected;
            const helper = () => {
              helper.setFastExit = (value) => {
                fastExit = value;

                return helper;
              };
              helper.setSelected = (value) => {
                selected = value;

                return helper;
              };
              helper.setPrevEl = (elem) => {
                prevEl = elem;

                return helper;
              };
              helper.clearSavedInfo = () => {
                h.setDataSet(selfExportModule, 'deliveryPoint', null);
                h.clearStorage(['deliveryDate', 'deliveryAddress']);

                h.saveAllCookie({type: null, address: null, id: null, deadline: null, cost: null, courier: null});

                return helper;
              };
              helper.clearChosenPoint = () => {
                h.removeElement(chosenPoint);

                return helper;
              };
              helper.setChosenPoint = () => {
                _chosenPoint = target.querySelector('.delivery-selfExport__address').textContent;
                _chosenCourier = h.getDataSet(target, 'courier');
                h.setDataSet(selfExportModule, 'deliveryPoint', h.getDataSet(target, 'value'));

                return helper;
              };
              helper.setStorageInfo = () => {
                u.saveStorageInfo(selfExportModule, _chosenPoint, _chosenCourier);

                h.saveAllCookie({type: 'selfExport', address: _chosenPoint, id: h.getDataSet(target, 'id'), deadline: selfExportModule.dataset.deliveryPeriod, cost: window.citiesList[0].price, courier: _chosenCourier});

                return helper;
              };

              return helper;
            };

            handle.checkEl = () => {
              const targetTag = h.lowerCase(target.tagName);
              if (targetTag !== 'li' && targetTag !== 'p') {
                helper()
                  .setFastExit(true);

                return handle;
              }
              if (targetTag === 'p') target = target.parentElement;
              if (target.classList.contains('delivery-selfExport__pickup-point--active')) {
                helper()
                  .setFastExit(true)
                  .setSelected(true);
              } else helper().setPrevEl(pickupList.querySelector('.delivery-selfExport__pickup-point--active'));

              return handle;
            };
            handle.saveInfo = () => {
              if (selected) {
                helper()
                  .clearSavedInfo()
                  .clearChosenPoint();

                return handle;
              }
              if (!fastExit) {
                helper()
                  .setChosenPoint()
                  .setStorageInfo()
              }

              return handle;
            };
            handle.setStatus = () => {
              if (!fastExit) h.handleClass(target, 'add', 'delivery-selfExport__pickup-point--active');
              if (selected) h.handleClass(target, 'remove', 'delivery-selfExport__pickup-point--active');
              if (prevEl) h.handleClass(prevEl, 'remove', 'delivery-selfExport__pickup-point--active');

              return handle;
            };

            return handle;
          };

          handle(evt)
            .checkEl()
            .saveInfo()
            .setStatus()
        };
        l.onCloseClick = () => {
          const w = () => {
            w.restorePoints = () => {
              [...pickupList.children].forEach((point) => h.handleClass(point, 'remove', 'hidden'));

              return w;
            };
            w.hide = () => {
              [selfExportModule, pickupSection, citiesSection].forEach(h.hide);

              return w;
            };
            w.inputClear = () => {
              pickupSearchInput.value = '';

              return w;
            };
            w.showAllCities = () => {
              h.showAll(citiesList.children);

              return w;
            };
            w.removeListeners = () => {
              h.removeListOfEvents(listenersList, 'closeModule');

              return w;
            };
            w.callCustomEvent = () => {
              selfExportModule.dispatchEvent(customEvent);

              return w;
            };

            return w;
          };

          w()
            .hide()
            .restorePoints()
            .inputClear()
            .showAllCities()
            .removeListeners()
            .callCustomEvent()
        };
        l.onPickupConfirm = () => {
          u.saveStorageInfo(selfExportModule, _chosenPoint, _chosenCourier);
          l.onCloseClick();
        };
        l.onShowMapClick = () => {
          const w = () => {
            w.mapCall = () => {
              map.click();

              return w;
            };

            return w;
          };

          w()
            .mapCall();
        };
        l.onMapClose = (evt) => {
          const w = () => {
            w.handleData = ({ detail: { address } }) => {
              const s = () => {
                let chosenEl;

                s.handleGettedAddress = () => {
                  address = h.lowerCase(address);

                  return s;
                };
                s.getChosenPickupFromList = () => {
                  chosenEl = [...pickupList.children].filter((el) => {
                    const pickupAddress = h.lowerCase(el.querySelector('.delivery-selfExport__address').textContent);
                    return h.isMatch(pickupAddress, address)
                  });

                  return s;
                };
                s.handleChosenPoint = () => {
                  if (!chosenEl) {
                    alert('Автоматически пункт выдачи не найден :( \n Попробуйте самостоятельно найти в списке');
                    return;
                  }
                  chosenEl = chosenEl[0];

                  chosenEl.click();

                  return s;
                };
                s.sortPickupList = () => {
                  chosenEl.remove();
                  pickupList.prepend(chosenEl);

                  return s;
                };
                s.clearPreviousSearch = () => {
                  l.onPickupInput({target: {value: ''}});

                  return s;
                };

                return s;
              };

              s()
                .handleGettedAddress()
                .getChosenPickupFromList()
                .handleChosenPoint()
                .sortPickupList()
                .clearPreviousSearch();


              return w;
            };

            return w;
          };

          w()
            .handleData(evt)
        };

        return eventListeners;
      };
      eventListeners.listInitiate = () => {
        /*
        list with eventListeners and their dependencies
        shows it usage
         */
        listenersList = [
          {element: changeCity, ev: 'click', listener: l.onChangeCity, changeCityRemove: true, cityConfirmAdd: true, boot: true },
          {element: showMap, ev: 'click', listener: l.onShowMapClick, changeCityRemove: true, cityConfirmAdd: true, boot: true },
          {element: pickupSearchInput, ev: 'input', listener: l.onPickupInput, changeCityRemove: true, cityConfirmAdd: true, boot: true },
          {element: pickupList, ev: 'click', listener: l.onPickupPointClick, changeCityRemove: true, cityConfirmAdd: true, boot: true },
          {element: JCShiptorWidgetPvz, ev: 'onPvzSelect', listener: l.onMapClose, boot: true }
        ];

        return eventListeners;
      };
      eventListeners.add = () => {
        /*
        initiate listeners
         */
        h.addListOfEvents(listenersList, 'boot');

        return eventListeners;
      };

      return eventListeners;
    };

    module(options)
      .initiate();

    eventListeners(options)
      .create()
      .listInitiate()
      .add();
  };
  handler(options);
};