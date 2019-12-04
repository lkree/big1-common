{
  const option = {
    selfExportModule: document.querySelector('.delivery-selfExport'),
  };
  window.options = _.extend(option, {
    citiesList: option.selfExportModule.querySelector('.delivery-selfExport__cities-list'),
    searchInput: option.selfExportModule.querySelector('.delivery-selfExport__search-input'),
    close: option.selfExportModule.querySelector('.delivery-selfExport__close'),
    blockScreen: document.querySelector('.basket__display-block'),
    confirmButton: option.selfExportModule.querySelector('.delivery-selfExport__confirm-btn'),
    waitScreen: option.selfExportModule.querySelector('.delivery-selfExport__wait-screen'),
  });
  const handler = (options) => {
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
      getDataSet: (el, dataType) => el.dataset[dataType],
      clearEl: (el) => el = null,
      hide: (el) => h.handleClass(el, 'add', 'hidden'),
      show: (el) => h.handleClass(el, 'remove', 'hidden'),
    };
    const module = ({ blockScreen, selfExportModule, waitScreen }) => {
      module.initiate = () => {
        const w = () => {
          let renderedPoints, renderedCity, userCity, deliveryPoi

          w.setBlockScreen = () => {
            h.show(blockScreen);

            return w;
          };
          w.showModule = () => {
            h.show(selfExportModule);

            return w;
          };
          w.setWaitScreen = () => {
            h.show(waitScreen);

            return w;
          };
          w.checkRender = () => {
            const s = () => {
              s.getRenderedPoints = () => {
                renderedPoints = h.getDataSet(selfExportModule, 'renderedPoints');

                return s;
              };
              s.getRenderedCity = () => {
                renderedCity = h.getDataSet(selfExportModule, 'renderedCity');

                return s;
              };

              return s;
            };

            s()
              .getRenderedCity()
              .getRenderedPoints();

            return w;
          };
          w.getUserCity = () => {
            if (!renderedCity) userCity = YMaps.location.city;

            return w;
          };
          w.setUserCity = () => {
            if (!renderedCity) h.setDataSet(selfExportModule, 'renderedCity', userCity);

            return w;
          };
          w.getDeliveryPoints = () => {
            if (!renderedPoints) {

            }

            return w;
          };
          w.renderDeliveryPoints = () => {
            if (!renderedPoints) {

            }

            return w;
          };
          w.disableWaitScreen = () => {
            h.hide(blockScreen);

            return w;
          };

          return w;
        };

        w()
          .setBlockScreen()
          .showModule()
          .setWaitScreen()
          .checkRender()
          .getUserCity()
          .setUserCity()
          .getDeliveryPoints()
          .renderDeliveryPoints()
          .disableWaitScreen()
      };

      return module;
    };
    const eventListeners = () => {};

    module(options)
      .initiate();

    eventListeners(options)
      .create()
      .add();
  };

  window.deliverySelfExport = _.partial(handler, options);
}