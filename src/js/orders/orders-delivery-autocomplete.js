{
  const option = {
    deliveryTable: document.querySelector('.reg-col-inner table'),
  };
  const options = _.extend(option, {
    deliveryTypeSelect: option.deliveryTable.querySelector('[name="order[delivery_type_id]"]'),
    deliveryTypeLis: option.deliveryTable.querySelector('[name="order[delivery_type_id]"]').parentElement.querySelectorAll('.newList li'),
    commentInput: option.deliveryTable.querySelector('#comment'),
    deliveryCitiesLis: option.deliveryTable.querySelector('#apiship_city_guid').parentElement.querySelectorAll('.newList li'),
  });
  let handler = (options) => {
    const h = {
      checkAvailable: (el, substitute = '') => el || substitute,
      initiateApi: (usersCity, fromCity = '77000000000') => (new ShiptorPointsGetter({
        usersCity: usersCity,
        fromCity: fromCity,
      })),
      handleClass: (el, action, className) => el.classList[action](className),
      hasClass: (el, className) => el.classList.contains(className),
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
      activateButton: (button, className = 'delivery-selfExport__confirm-btn--deactive') => {
        button.disabled = false;
        h.handleClass(button, 'remove', className);
      },
      disableButton: (button, className = 'delivery-selfExport__confirm-btn--deactive') => {
        button.disabled = true;
        h.handleClass(button, 'add', className);
      },
      setDataSet: (el, dataType, value) => el.dataset[dataType] = value,
      getDataSet: (el, dataType) => el.dataset[dataType],
      clearEl: (el) => el.innerHTML = '',
      clearInput: (el) => el.value = '',
      removeEl: (el) => el = null,
      hide: (el) => h.handleClass(el, 'add', 'hidden'),
      show: (el) => h.handleClass(el, 'remove', 'hidden'),
      hideAll: (list) => [...list].forEach(h.hide),
      showAll: (list) => [...list].forEach(h.show),
      setText: (el, text) => el.textContent = text,
      eventAdd: (el, event, handler) => el.addEventListener(event, handler),
      eventRemove: (el, event, handler) => el.removeEventListener(event, handler),
      isMatch: (el, matchEl) => el === matchEl,
      removeListOfEvents: (list, filter) => {
        list
          .filter((el) => el[filter])
          .forEach((e) => h.eventRemove(e.el, e.ev, e.listener))
      },
      addListOfEvents: (list, filter) => {
        list
          .filter((el) => el[filter])
          .forEach((e) => h.eventAdd(e.el, e.ev, e.listener))
      },
      setWaitScreen: () => h.show(options.waitScreen),
      disableWaitScreen: () => h.hide(options.waitScreen),
      lowerCase: (el) => el.toLowerCase(),
      checkSubString: (string, subString) => {
        string = h.lowerCase(string);
        subString = h.lowerCase(subString);

        return !!~string.indexOf(subString);
      },
      showError: () => h.show(options.errorSection),
      hideError: () => h.hide(options.errorSection),
      clearStorage: (storages) => storages.forEach((storage) => localStorage.setItem(storage, '')),
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
              if (h.checkSubString(point.textContent, inputString)) {
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
    }; //helpers
    const module = ({deliveryTypeSelect, deliveryTypeLis,commentInput, deliveryCitiesLis}) => {
      module.initiate = () => {
        const w = () => {
          let type, address, city, street, streetNumber, storageInfo, receivedSelectValue, currentSelectType;
          const delTypes = {
            'pickup' : 'Самовывоз',
            'delivery' : 'СДЕК-тест',
          };

          w.setWaitScreen = () => {
            h.setWaitScreen();

            return w;
          };
          w.getData = () => {
            storageInfo = localStorage.getItem('deliveryAddress');
            type = storageInfo.split(':')[0];
            address = storageInfo.split(': ')[1];
            city = address.split(',')[0];
            street = address.split(', ')[1];
            streetNumber = address.split(', ')[2];

            return w;
          };
          w.checkDeliveryType = () => {
            const s = () => {
              s.getReceivedSelectValue = () => {
                receivedSelectValue = delTypes[type];

                return s;
              };
              s.getCurrentSelectValue = () => {
                currentSelectType = deliveryTypeSelect.parentElement.querySelector('.selectedTxt').textContent;

                return s;
              };
              s.checkConditions = (condition, doA, doB) => {
                condition ? doA() : doB();

                return s;
              };
              s.setSelectType = () => {
                const neededLi = [...deliveryTypeLis].find((li) => li.textContent === receivedSelectValue);
                neededLi[0].querySelector('a').click();
              };
              s.pickupHandle = () => {
                commentInput.value = storageInfo;

                return s;
              };
              s.deliveryHandle = () => {
                const z = () => {


                  return z;
                };

                z()

              };

              return s;
            };
            s()
              .getReceivedSelectValue()
              .getCurrentSelectValue()
              .checkConditions(receivedSelectValue !== currentSelectType, s.setSelectType, () => {})
              .checkConditions(currentSelectType === 'Самовывоз', s.pickupHandle, s.deliveryHandle);

            return w;
          };
          w.setDeliveryType = () => {


            return w;
          };

          return w;
        };

        w()
        // .setWaitScreen()
          .getData()
          .checkDeliveryType()
          .setDeliveryType();

        return module;
      };

      return module;
    };

    module(options)
      .initiate();
  };
  const deliveryAutocomplete = _.partial(handler, options);
  deliveryAutocomplete();
}