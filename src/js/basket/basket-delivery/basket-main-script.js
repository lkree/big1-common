{
  window.h = {
    /**
     * @param type {String}
     * @param address {String}
     * @param id {String}
     * @param deadline {String}
     * @param cost {String}
     * @param city {String}
     * @param courier {String}
     */
    saveAllCookie: ({type, address, id, deadline, cost, city = '', courier}) => {
      const cookieTypes = ['deliveryType', 'deliveryAddress', 'selfExportPointId', 'deliveryDeadline', 'deliveryCost', 'deliveryCity', 'deliveryCourier'];
      const cookieValues = [type, address, id, deadline, cost, city, courier];

      cookieValues.forEach((v, i) => {
        if (v === null) {
          saveCookie(cookieTypes[i], '');
          return;
        }
        if (!v) return;

        saveCookie(cookieTypes[i], v);
      });
    },
    /**
     * @param element {*}
     * @param substitute {String}
     * @returns {*|string}
     */
    checkAvailable: (element, substitute = '') => element || substitute,
    /**
     * @param element {HTMLElement}
     * @returns {string}
     */
    getText: (element) => element ? element.textContent : '',
    /**
     * @param element {HTMLElement}
     * @param action {String}
     * @param className {String}
     * @returns {*}
     */
    handleClass: (element, action, className) => element.classList[action](className),
    /**
     * @param element {HTMLElement}
     * @param className {String}
     * @returns {*}
     */
    addClass: (element, className) => h.handleClass(element, 'add', className),
    /**
     * @param element {HTMLElement}
     * @param className {String}
     * @returns {*}
     */
    removeClass: (element, className) => h.handleClass(element, 'remove', className),
    /**
     * @param element {HTMLElement}
     * @param className {String}
     * @returns {boolean}
     */
    hasClass: (element, className) => element.classList.contains(className),
    /**
     * @param text {String}
     * @returns {*|void|string}
     */
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
    /**
     * @param button {HTMLElement}
     * @param className {String}
     * @returns {void}
     */
    activateButton: (button, className) => {
      button.disabled = false;
      h.handleClass(button, 'remove', className);
    },
    /**
     * @param button {HTMLElement}
     * @param className {String}
     * @returns {void}
     */
    disableButton: (button, className) => {
      button.disabled = true;
      h.handleClass(button, 'add', className);
    },
    /**
     * @param element {HTMLElement}
     * @param dataType {String}
     * @param value {String}
     * @returns {*}
     */
    setDataSet: (element, dataType, value) => element.dataset[dataType] = value,
    /**
     * @param element {HTMLElement}
     * @param dataType {String}
     * @returns {*}
     */
    getDataSet: (element, dataType) => element ? element.dataset[dataType] : '',
    /**
     * @param element {HTMLElement}
     * @returns {*}
     */
    clearEl: (element) => element.innerHTML = '',
    /**
     * @param element {HTMLElement}
     * @returns {*}
     */
    clearInput: (element) => element.value = '',
    /**
     * @param element {*}
     * @returns {null}
     */
    removeElement: (element) => element = null,
    /**
     * @param element {HTMLElement}
     * @returns {*}
     */
    hide: (element) => h.handleClass(element, 'add', 'hidden'),
    /**
     * @param element {HTMLElement}
     * @returns {*}
     */
    show: (element) => h.handleClass(element, 'remove', 'hidden'),
    /**
     * @param list {Array<HTMLElement>}
     */
    hideAll: (list) => [...list].forEach(h.hide),
    /**
     * @param list {Array<HTMLElement>}
     */
    showAll: (list) => [...list].forEach(h.show),
    /**
     * @param element {HTMLElement}
     * @param text {String}
     * @returns {*}
     */
    setText: (element, text) => element.textContent = text,
    /**
     * @param element {HTMLElement}
     * @param event {String}
     * @param handler {Function}
     * @returns {*}
     */
    eventAdd: (element, event, handler) => element.addEventListener(event, handler),
    /**
     * @param element {HTMLElement}
     * @param event {String}
     * @param handler {Function}
     * @returns {*}
     */
    eventRemove: (element, event, handler) => element.removeEventListener(event, handler),
    /**
     * @param element {*}
     * @param matchelement {*}
     * @returns {boolean}
     */
    isMatch: (element, matchelement) => element === matchelement,
    /**
     * @param list {Array<HTMLElement>}
     * @param filter {String}
     */
    removeListOfEvents: (list, filter) => {
      list
        .filter((element) => element[filter])
        .forEach((e) => h.eventRemove(e.element, e.ev, e.listener))
    },
    /**
     * @param list {Array<HTMLElement>}
     * @param filter {String}
     */
    addListOfEvents: (list, filter) => {
      list
        .filter((element) => element[filter])
        .forEach((e) => h.eventAdd(e.element, e.ev, e.listener))
    },
    /**
     * @param waitScreen {HTMLElement}
     * @returns {*}
     */
    setWaitScreen: (waitScreen) => h.show(waitScreen),
    /**
     * @param waitScreen {HTMLElement}
     * @returns {*}
     */
    disableWaitScreen: (waitScreen) => h.hide(waitScreen),
    /**
     * @param element {String}
     * @returns {string}
     */
    lowerCase: (element) => element.toLowerCase(),
    /**
     * @param string {String}
     * @param subString {String}
     * @returns {boolean}
     */
    checkSubString: (string, subString) => {
      string = h.lowerCase(string);
      subString = h.lowerCase(subString);

      return !!~string.indexOf(subString);
    },
    showError: (errorSection) => h.show(errorSection),
    hideError: (errorSection) => h.hide(errorSection),
    /**
     * @param storages {Array<String>}
     * @returns {*}
     */
    clearStorage: (storages) => storages.forEach((storage) => localStorage.setItem(storage, '')),
  }; //helpers
  const options = {
    basketForm: document.querySelector('.basket-index-page'),
    waitScreen: document.querySelector('.basket__wait-screen'),
    reactWrapper: document.querySelector('.basket__stages'),
  };
  const props = {
    ...options,
    nextButton: options.basketForm.querySelector('.basket__react-bottom-nav-btn'),
    progressHeaderButtons: options.basketForm.querySelectorAll('.basket__progress-header-item'),
    countInputs: options.basketForm.querySelectorAll('input.center'),
  };
  /**
   * will render the react && api for react && controls the statement of whole app
   * @param props {Object}
   * @param props.basketForm {HTMLElement}
   * @param props.reactWrapper {HTMLElement}
   * @param props.nextButton {HTMLElement}
   * @param props.progressHeaderButtons {HTMLCollection}
   */
  const basketHandler = (props) => {

    /**
     * listeners list
     * @type {{onProgressHeaderButtonClick: Function, onNextButtonClick: Function, onCountInputBlur: Function}}
     */
    const l = {
      onNextButtonClick: () => {},
      onProgressHeaderButtonClick: () => {},
      onCountInputBlur: () => {},
    };
    const app = () => {
      app.initiate = () => {
        return app;
      };
      app.handleEventListeners = ({nextButton, basketForm, waitScreen, reactWrapper, progressHeaderButtons}) => {
        const w = () => {
          w.createEventListeners = () => {
            l.onNextButtonClick = () => {
              const w = (() => {
                const w = () => w;
                w.prototype = {
                  /**
                   * Functor for initiate chaining
                   * @param cb {Function}
                   * @param args {*}
                   * @returns {Function}
                   */
                  _then: (cb = () => {}, ...args) => {cb(...args); return w.prototype},
                  hasBasketSelectedItems: () => !!basketApi.getTotalSum(),
                  /**
                   * @param evt {Event | Object}
                   * @param evt.preventDefault {Function}
                   */
                  preventDefault: (evt = {preventDefault: () => {}}) => evt.preventDefault(),
                  /**
                   * @param condition {Boolean}
                   * @param stateA {Function}
                   * @param stateB {Function}
                   * @returns {*}
                   */
                  checkStatement: ({condition, stateA, stateB}) => condition ? stateA() : stateB(),
                  setWaitScreen: (waitScreen) => h.setWaitScreen(waitScreen),
                  emptyFunction: () => {},
                  showReact: () => {
                    h.show(reactWrapper);
                    w.hideBasket();
                    w.renderedBasket = false;
                  },
                  showBasket: () => {
                    w.hideReact();
                    h.show(basketForm);
                    w.renderedBasket = true;
                  },
                  hideReact: () => h.hide(reactWrapper),
                  hideBasket: () => h.hide(basketForm),
                  disableWaitScreen: () => h.hide(waitScreen),
                  alertMessage: (message) => alert(message),
                  showAlertPosition: () => w.alertMessage(w.alertPositionMessage),
                };
                Object.setPrototypeOf(w, w.prototype);

                return Object.assign(w, {
                  renderedBasket: true,
                  alertPositionMessage: 'Пожалуйста, выберите хотя бы одну позицию',
                });
              })();

              return evt => {
                const {preventDefault, checkStatement, setWaitScreen, showReact, showBasket, disableWaitScreen, renderedBasket, hasBasketSelectedItems, showAlertPosition} = w;
                /**
                 * check for items in basket
                 * if ok -> continue chaining
                 * else alert user and return from function
                 */
                preventDefault(evt);

                if (!hasBasketSelectedItems())
                  showAlertPosition();
                else
                  w
                    ._then(setWaitScreen, waitScreen)
                    ._then(checkStatement, {
                      condition: renderedBasket,
                      stateA: showReact,
                      stateB: showBasket,
                    })
                    ._then(disableWaitScreen);
              };
            };
            // l.onProgressHeaderButtonClick = ({target}) => {
            //   const step = target.dataset.value;
            //   if (!step) return;
            //
            //   sessionStorage.setItem('prevBasketPage', step);
            //   l.onNextButtonClick()();
            // };
            l.onCountInputBlur = () => basketForm.submit();

            return w;
          };
          w.addListeners = () => {
            h.eventAdd(nextButton, 'click', l.onNextButtonClick());
            [...progressHeaderButtons].forEach(e => h.eventAdd(e, 'click', l.onProgressHeaderButtonClick));
            // [...countInputs].forEach(e => h.eventAdd(e, 'blur', l.onCountInputBlur));

            return w;
          };

          return w;
        };

        w()
          .createEventListeners()
          .addListeners();

        return app;
      };

      return app;
    };

    app()
      .initiate(props)
      .handleEventListeners(props)
  };

  basketHandler(props);

  window.basketApi = {
    /**
     * @returns {string}
     */
    getTotalPricesAndItems: () => (
      options.basketForm.querySelector('.basket__react-bottom-info')
        .textContent
        .trim()
        .replace(/\n/gi, '')
        .split(' ')
        .filter(el => !!el.trim())
        .filter(el => {
          const wordsToRemove = ['Оформить', 'Удалить', 'выбранные', 'позиции', 'Next'];
          if (!wordsToRemove.includes(el)) return el;
        })
        .join(' ')
    ),
    /**
     * @returns {Number}
     */
    getTotalSum: () => window.calculateTotalSum() + (+getCookie('deliveryCost') || 0),
    /**
     * @returns {number}
     */
    getMaxDeliveryDate: () => {
      const w = () => {
        let unParsedDates, dates;

        w.getDates = (basket) => {
          unParsedDates = [...basket.querySelectorAll('tbody tr')]
            .filter((el) => el.querySelector('td:nth-of-type(1) input:checked'))
            .map((el) => el.querySelector('td:nth-of-type(6)').textContent);

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
          const maxDate = Math.max(...dates);
          const deliveryDate = +getCookie('deliveryDeadline');
          return maxDate + deliveryDate;
        };

        return w;
      };

      return w()
        .getDates(options.basketForm)
        .handle()
        .calculateMax();
    },
    returnToBasket: () => props.nextButton.click(),
    getBasketItems: () => {
      const activeRows = [...options.basketForm.querySelectorAll('table tbody tr')]
        .filter(el => el.querySelector('input.active-price-item').checked === true);

      try {
        const resultData = [];
        activeRows.forEach((el) => {
          const {
            children: [
              {firstElementChild: {dataset: {basketCost: price, basketQnt: count}}},
              {firstElementChild: {firstElementChild: {href: link, textContent: article}}},
              {firstChild: {textContent: name}},
              ,
              ,
              {textContent: date},
            ]
          } = el;
          resultData.push({
            name: article.trim() + ' ' + name.trim(),
            date: date.trim(),
            count: +count.trim(),
            price: +price.trim(),
            link,
          });
        });

        return resultData;
      } catch({message}) {
        return [];
      }
    },
    getPositionsNumber: () => [...options.basketForm.querySelectorAll('table tbody tr')]
      .filter(el => el.querySelector('input.active-price-item').checked === true).length,
    getDeliveryPrice: () => {
      const cost = getCookie('deliveryCost');
      return cost || cost === '0' ? +cost : '';
    },
    getItemsPrice: () => window.calculateTotalSum(),
    getDeliveryDeadline: () => +getCookie('deliveryDeadline'),
    getDeliveryItemDeadline: (itemDeadline = '', deliveryDeadline = window.basketApi.getDeliveryDeadline()) => {
      let dates;
      const isTwoDates = (date) => !!~date.search(/-/);
      const isHourDate = (date) => !!~date.search(/час/);

      const getParsedDate = (date) => {
        if (isHourDate(date)) return [1];
        if (isTwoDates(date)) return date.split('-').map((string) => parseInt(string));

        return [parseInt(date)];
      };

      dates = getParsedDate(itemDeadline);
      dates = dates.filter((date) => isFinite(date));
      if (_.isEmpty(dates)) dates[0] = 0;

      return dates.map(el => el + (deliveryDeadline || 0));
    },
  };
  const prevBasketPage = sessionStorage.getItem('prevBasketPage');
  if (prevBasketPage) props.nextButton.click();
}