{
  const option = {
    deliveryTable: document.querySelector('.reg-col-inner table'),
    confirm: document.querySelector('[name="commit"]'),
    waitScreen: document.querySelector('.wait-screen'),
  };
  const options = _.extend(option, {
    deliveryTypeSelect: option.deliveryTable.querySelector('[name="order[delivery_type_id]"]'),
    commentInput: option.deliveryTable.querySelector('#order_comment'),
    deliveryCaption: option.deliveryTable.querySelector('#select2-order_delivery_type_id-container'),
  });
  const handler = (options) => {
    const module = () => {
      module.initiate = ({deliveryTypeSelect, commentInput, deliveryCaption, confirm, waitScreen}) => {
        const w = () => {
          let _type, deliveryAddress, deliveryValue, deliveryText, deliveryCourier;
          const delTypes = {
            'pickup' : 'Самовывоз/6',
            'selfExport' : 'Доставка транспортной компанией/7',
          };

          w.setWaitScreen = () => {
            debugger;
            waitScreen.classList.remove('hidden');

            return w;
          };
          w.getData = () => {
            deliveryAddress = getCookie('deliveryAddress');
            _type = getCookie('deliveryType');
            deliveryCourier = getCookie('deliveryCourier');

            return w;
          };
          w.checkDeliveryType = () => {
            const s = () => {
              s.getReceivedValue = () => {
                const receivedSelectValue = delTypes[_type].split('/');
                deliveryValue = receivedSelectValue[1];
                deliveryText = receivedSelectValue[0];

                return s;
              };
              s.checkConditions = (condition, doA, doB) => {
                condition ? doA() : doB();

                return s;
              };
              s.setSelectType = () => {
                deliveryTypeSelect.value = deliveryValue;
                try {
                  deliveryCaption.textContent = deliveryText;
                } catch(e) {

                }

                return s;
              };

              return s;
            };

            s()
              .getReceivedValue()
              .setSelectType();

            return w;
          };
          w.setDeliveryType = () => {
            commentInput.value = `${deliveryAddress} | ${deliveryCourier || 'Самовывоз'}`;

            return w;
          };
          w.confirmPage = () => {
            confirm.click();

            return w;
          };

          return w;
        };

        w()
          .setWaitScreen()
          .getData()
          .checkDeliveryType()
          .setDeliveryType()
          .confirmPage();

        return module;
      };

      return module;
    };

    module()
      .initiate(options);
  };

  const deliveryAutocomplete = _.partial(handler, options);

  deliveryAutocomplete();
}