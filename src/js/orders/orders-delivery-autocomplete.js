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
  let handler = (options) => {
    const module = () => {
      module.initiate = ({deliveryTypeSelect, commentInput, deliveryCaption, confirm, waitScreen}) => {
        const w = () => {
          let type, storageInfo, deliveryValue, deliveryText;
          const delTypes = {
            'pickup' : 'Самовывоз/6',
            'delivery' : 'СДЕК-тест/7',
          };

          w.setWaitScreen = () => {
            waitScreen.classList.remove('hidden');

            return w;
          };
          w.getData = () => {
            storageInfo = localStorage.getItem('deliveryAddress');
            if (storageInfo) type = storageInfo.split(': ')[0];

            return w;
          };
          w.checkDeliveryType = () => {
            const s = () => {
              s.getReceivedValue = () => {
                let receivedSelectValue;
                try {
                  receivedSelectValue = delTypes[type].split('/');
                } catch(e) {
                  receivedSelectValue = delTypes['pickup'].split('/');
                }

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
                deliveryCaption.textContent = deliveryText;

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
            commentInput.value = storageInfo || 'Доставка не записалась почему-то, уточните у клиента плс';

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