
if (document.querySelector('.b-link-perscab').href === 'https://big1.ru/customers/729/dashboard') //temp wrapper
{
  const h = {
    handleClass: (el, action, className) => el.classList[action](className),
    cleanEl: (el) => el.innerHTML = '',
    initiateScript: (condition, err, cb) => condition ? cb() : err(),
    eventAdd: (el, event, handler) => el.addEventListener(event, handler),
    eventRemove: (el, event, handler) => el.removeEventListener(event, handler),
    getSupplyDate: () => localStorage.getItem('supplyDate'),
    setSupplyDate: (value) => localStorage.setItem('supplyDate', value),
    setDeliveryDate: (value) => localStorage.setItem('deliveryDate', value),
    activateButton: (button, className = 'delivery-selfExport__confirm-btn--deactive') => {
      button.disabled = false;
      h.handleClass(button, 'remove', className);
    },
    disableButton: (button, className = 'delivery-selfExport__confirm-btn--deactive') => {
      button.disabled = true;
      h.handleClass(button, 'add', className);
    },
  };
  const u = {
    checkActiveGoodies: (basket, pickUpBtn, deliveryBtn) => {
      const selectedGoodies = [...basket.querySelectorAll('.active-price-item')].filter((el) => el.checked);

      [pickUpBtn, deliveryBtn].forEach((btn) => {
        if (selectedGoodies.length < 1) h.disableButton(btn, 'basket__btn--blocked');
        else h.activateButton(btn, 'basket__btn--blocked');
      });
    },
  };
  const option =  {
    pickupModule: document.querySelector('.delivery-pickup'),
    selfExportModule: document.querySelector('.delivery-selfExport'),
  };
  const goodiesInBasket = document.querySelectorAll('.tab-bask tbody tr');
  const submitOrderButton = document.querySelector('.c-order');
  const basketDelivery = () => {
    const basket = goodiesInBasket[0].parentNode.parentNode.parentNode;
    let deliveryOutput;
    let buttonsWrapper;
    let pickUpBtn, deliveryBtn;
    let secondField, thirdField, firthField, sixthField, eighthField;
    let listenersList = [];
    let l = {
      onPickUpClick: () => {},
      onDeliveryClick: () => {},
      onDocumentReady: () => {},
      onClosePickupModule: () => {},
      onDocumentClick: () => {},
      onSubmitOrderClick: () => {},
    };

    const module = () => {
      module.make = () => {
        buttonsWrapper = goodiesInBasket[0].cloneNode(true);
        buttonsWrapper.classList.add('basket__buttons-wrapper');

        [...buttonsWrapper.children].forEach(h.cleanEl);

        return module;
      };
      module.handle = () => {
        const fill = {
          secondField: () => {
            secondField = buttonsWrapper.children[1];
            secondField.textContent = 'Доставка';

            return fill;
          },
          thirdField: () => {
            thirdField = buttonsWrapper.children[2];
            [pickUpBtn, deliveryBtn] = [document.createElement('button'), document.createElement('button')];
            const usersCity = window.usersCity ? `Доставить в ${window.usersCity}?` : 'Выбрать город для доставки';

            pickUpBtn.textContent = 'Заберу сам';
            deliveryBtn.textContent = usersCity;

            pickUpBtn.classList.add('basket__pickUpBtn');
            deliveryBtn.classList.add('basket__deliveryBtn');

            [pickUpBtn, deliveryBtn].forEach((btn) => thirdField.append(btn));

            return fill;
          },
          firthField: () => {
            firthField = buttonsWrapper.children[4];
            firthField.textContent = 'Рассчитайте доставку';

            return fill;
          },
          sixthField: () => {
            sixthField = buttonsWrapper.children[5];

            return fill;
          },
          eighthField: () => {
            eighthField = buttonsWrapper.children[7];

            return fill;
          },
        };

        fill
          .secondField()
          .thirdField()
          .firthField()
          .sixthField()
          .eighthField();

        return module;
      };
      module.insert = () => {
        basket.querySelector('tbody').append(buttonsWrapper);

        return module;
      };

      return module;
    };
    const eventListeners = (basket) => {
      eventListeners.create = () => {
        const totalPriceField = basket.querySelector('.basket-sum');
        const totalInfoPanel = totalPriceField.parentElement;
        const confirmOrderButton = totalInfoPanel.querySelector('.c-order');
        const template = (evt, text, deliveryType) => {
          const wrapper = () => {
            return wrapper;
          };
          deliveryOutput = basket.querySelector('.basket__delivery-output');
          let isElExists = !!deliveryOutput;

          wrapper.create = () => {
            if (isElExists) return wrapper;

            deliveryOutput = goodiesInBasket[0].cloneNode(true);
            [...deliveryOutput.children].forEach(h.cleanEl);
            deliveryOutput.classList.add('basket__delivery-output');

            return wrapper;
          };
          wrapper.fill = () => {
            deliveryOutput.children[2].textContent = deliveryType === 'Пункт выдачи' ? `Пункт выдачи: ${text}` : `Самовывоз: ${text}`;

            return wrapper;
          };
          wrapper.append = () => {
            if (isElExists) return wrapper;

            basket.querySelector('tbody').insertBefore(deliveryOutput, buttonsWrapper);

            return wrapper;
          };

          return wrapper;
        };
        // const getTotalSum = () => {
        //   const calculateTotalSum = {
        //     allPrices: null,
        //     filteredPrices: null,
        //     priceValues: null,
        //     _getPriceValue: (el) => (+el.dataset.basketCost * +el.dataset.basketQnt),
        //
        //     getAllPrices: () => {
        //       this.allPrices = goodiesInBasket[0].parentElement.querySelectorAll('.active-price-item');
        //
        //       return calculateTotalSum;
        //     },
        //     getOnlyCheckedPrices: () => {
        //       this.filteredPrices = [...this.allPrices].filter((input) => input.checked);
        //
        //       return calculateTotalSum;
        //     },
        //     handlePrices: () => {
        //       this.priceValues = [...this.filteredPrices].map((input) => calculateTotalSum._getPriceValue(input));
        //
        //       return calculateTotalSum;
        //     },
        //     setTotalSum: () => {
        //       totalPrice = this.priceValues.reduce((prev, curr) => prev + curr);
        //
        //       return calculateTotalSum;
        //     },
        //   };
        //
        //   calculateTotalSum
        //     .getAllPrices()
        //     .getOnlyCheckedPrices()
        //     .handlePrices()
        //     .setTotalSum();
        // };
        const setCommonDeliveryInfo = () => {
          const w = () => {
            let element = totalInfoPanel.querySelector('.basket__common-delivery-period');
            w.isElExists = !!element;

            w.checkConditions = (condition, state1, state2) => {
              condition ? state1() : state2();

              return w;
            };
            w.createEl = () => {
              element = document.createElement('span');
              element.classList.add('basket__common-delivery-period');

              return w;
            };
            w.setState = () => {
              const s = () => {
                let deliveryPeriod, maxDate;

                s.getMaxSupplyDate = () => {
                  getMaxDeliveryDate();

                  return s;
                };
                s.getMaxDeliveryDate = () => {
                  deliveryPeriod = +localStorage.getItem('deliveryDate');

                  return s;
                };
                s.handleDeliveryDate = () => {
                  deliveryPeriod = isFinite(deliveryPeriod) ? deliveryPeriod : 0;

                  return s;
                };
                s.getCommonDate = () => {
                  maxDate = +h.getSupplyDate() + +deliveryPeriod;

                  return s;
                };
                s.fillTheElement = () => {
                  element.textContent = ` и общим сроком доставки ${maxDate} дн.`;

                  return s;
                };

                return s;
              };

              s()
                .getMaxSupplyDate()
                .getMaxDeliveryDate()
                .handleDeliveryDate()
                .getCommonDate()
                .fillTheElement();

              return w;
            };
            w.addElement = () => {
              totalInfoPanel.insertBefore(element, totalPriceField.nextSibling);

              return w;
            };

            return w;
          };

          w()
            .checkConditions(w.isElExists, () => {}, w.createEl)
            .setState()
            .checkConditions(w.isElExists, () => {}, w.addElement);
        };
        const getMaxDeliveryDate = () => {
          const w = () => {
            let unParsedDates, dates;

            w.getDates = () => {
              unParsedDates = [...basket.querySelectorAll('tbody tr')]
                .filter((el) => el.querySelector('td:nth-of-type(1) input:checked'))
                .map((el) => el.querySelector('td:nth-of-type(5)').textContent);

              return w;
            };
            w.handle = () => {
              const isTwoDates = (date) => !!~date.search(/-/);
              const isHourDate = (date) => !!~date.search(/час/);

              dates = unParsedDates.map((date) => {
                if (isHourDate(date)) return 1;
                if (isTwoDates(date)) {
                  const dateAr = date.split('-').map((string) => parseInt(string));
                  return Math.max(...dateAr);
                }
                return parseInt(date);
              });
              dates = dates.filter((date) => isFinite(date));

              if (_.isEmpty(dates)) dates[0] = 0;

              return w;
            };
            w.calculateMax = () => {
              h.setSupplyDate(Math.max(...dates));

              return w;
            };

            return w;
          };

          w()
            .getDates()
            .handle()
            .calculateMax();
        };

        l.onDocumentReady = () => {
          const w = () => {
            w.clearLocalStorage = () => {
              h.setSupplyDate('0');
              h.setDeliveryDate('0');
              localStorage.setItem('deliveryAddress', '');
              localStorage.setItem('needRerender', '');

              return w;
            };
            w.confirmButtonBlock = () => {
              confirmOrderButton.href = '#';
              confirmOrderButton.classList.add('basket__confirm-btn--block');

              return w;
            };
            w.calculateDelivery = () => {
              setCommonDeliveryInfo();

              return w;
            };
            w.checkActiveGoodies = () => {
              u.checkActiveGoodies(basket, pickUpBtn, deliveryBtn);

              return w;
            };

            return w;
          };

          w()
            .clearLocalStorage()
            .confirmButtonBlock()
            .calculateDelivery()
            .checkActiveGoodies()
        };
        l.onPickUpClick = (evt) => {
          evt.preventDefault();

          const w = () => {
            w.callDeliveryPickupModule = () => {
              window.deliveryPickup();

              return w;
            };

            return w;
          };

          w()
            .callDeliveryPickupModule()
        };
        l.onDeliveryClick = (evt) => {
          evt.preventDefault();

          window.deliverySelfExport();
        };
        l.onClosePickupModule = ({ target }) => {
          const w = () => {
            let pickupPoint;
            try {
              pickupPoint = localStorage.getItem('deliveryAddress').split(' | ')[0].split(': ')[1];
            } catch(e) {
              pickupPoint = '';
            }
            const deliveryType = target.dataset.deliveryType;
            let fastExit = false;

            w.checkNecessaryUpdate = () => {
              let oldPoint;
              try {
                oldPoint = deliveryOutput.querySelector('.left').textContent.split(': ')[1];
              } catch(e) {
                oldPoint = '';
              }
              if (pickupPoint === oldPoint) fastExit = true;

              return w;
            };
            w.setCommonDeliveryPeriod = () => {
              if (!fastExit) setCommonDeliveryInfo(deliveryType);

              return w;
            };
            w.setCommonPrice = () => {
              return w;
            };
            w.unblockBtns = () => {
              if (!fastExit) {
                confirmOrderButton.href = 'https://big1.ru/orders/new';
                confirmOrderButton.classList.remove('basket__confirm-btn--block');
              }

              return w;
            };
            w.createRowWInfo = () => {
              if (!fastExit) template(null, pickupPoint ? pickupPoint.split(' | ')[0] : 'пункт не определён', deliveryType)
                .create()
                .fill()
                .append();

              return w;
            };
            w.setDeliveryPeriod = () => {
              if (!fastExit) deliveryOutput.children[4].textContent = deliveryType === 'Пункт выдачи' ? `${option.selfExportModule.dataset.deliveryPeriod ? option.selfExportModule.dataset.deliveryPeriod : '---'} дн.` : '---';

              return w;
            };
            w.setPrice = () => {
              if (!fastExit) {
                const price = deliveryType === 'Пункт выдачи' ? '350.00' : '0.00';
                deliveryOutput.children[5].textContent = deliveryOutput.children[8].textContent = `${price} р.`;
              }

              return w;
            };
            w.clearButtonsWrapper = () => {
              if (!fastExit) {
                secondField.textContent = '';
                firthField.textContent = '';
              }

              return w;
            };
            w.setTitle = () => {
              if (!fastExit) deliveryOutput.children[1].textContent = 'Доставка';

              return w;
            };
            w.calculateSum = () => {
              replaceCurrentBasketSum();

              return  w;
            };

            return w;
          };

          w()
            .checkNecessaryUpdate()
            .setCommonDeliveryPeriod()
            .setCommonPrice()
            .clearButtonsWrapper()
            .unblockBtns()
            .createRowWInfo()
            .setDeliveryPeriod()
            .setPrice()
            .setTitle()
            .calculateSum()
        };
        l.onDocumentClick = (evt) => {
          if (evt.target.classList.contains('active-price-item')) {
            const w = () => {
              w.setLocalRerenderInfo = () => {
                localStorage.setItem('needRerender', '1');

                return w;
              };
              w.rerenderCommonDeliveryInfo = () => {
                setCommonDeliveryInfo();

                return w;
              };
              w.checkActiveGoodies = () => {
                u.checkActiveGoodies(basket, pickUpBtn, deliveryBtn);

                return w;
              };

              return w;
            };

            w()
              .setLocalRerenderInfo()
              .rerenderCommonDeliveryInfo()
              .checkActiveGoodies();
          }
        };
        l.onSubmitOrderClick = (evt) => {
          const w = () => {
            let fastExit = false;

            w.preventDefault = (event) => {
              event.preventDefault();

              return w;
            };
            w.checkInfo = (basket) => {
              const wasDeliveryDone = () => !!localStorage.getItem('deliveryAddress');
              const hasGoodiesChecked = (basket) => basket.querySelectorAll('.active-price-item:checked').length !== 0;

              if (!wasDeliveryDone()) fastExit = true;
              if (!hasGoodiesChecked(basket)) fastExit = true;

              return w;
            };
            w.saveDeliveryInfo = () => {


              return w;
            };
            w.clearStorage = () => {


              return w;
            };
            w.redirectToConfirmOrderPage = () => {
              if (!fastExit) location.assign('/orders/new');

              return w;
            };

            return w;
          };

          w()
            .preventDefault(evt)
            .checkInfo(basket)
            .saveDeliveryInfo()
            .clearStorage()
            .redirectToConfirmOrderPage()
        };

        return eventListeners;
      };
      eventListeners.add = () => {
        listenersList = [
          [document, 'DOMContentLoaded', l.onDocumentReady],
          [pickUpBtn, 'click', l.onPickUpClick],
          [deliveryBtn, 'click', l.onDeliveryClick],
          [option.pickupModule, 'ClosePickupModule', l.onClosePickupModule],
          [option.selfExportModule, 'ClosePickupModule', l.onClosePickupModule],
          [document, 'click', l.onDocumentClick],
          [submitOrderButton, 'click', l.onSubmitOrderClick]
        ];
        listenersList.forEach((listenerOptions) => h.eventAdd(listenerOptions[0], listenerOptions[1], listenerOptions[2]));
      };

      return eventListeners;
    };

    module()
      .make()
      .handle()
      .insert();

    eventListeners(basket)
      .create()
      .add()
  };

  h.initiateScript(goodiesInBasket[0], () => {}, basketDelivery);
}