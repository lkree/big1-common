const form = document.querySelector('#new_customer');
const onFormSubmit = (evt) => {
  const formSubmitHandler = () => {
    const _header = 'fields%5B';
    let parsedData, sendData;
    const _escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };

      return text.replace(/[&<>"']/g, function(m) { return map[m]; });
    };
    const _specialCharsReplacer = (text) => {
      const map = {
        ' ' : '+',
        '@' : '%40'
      };

      return text.replace(/[@ ]/g, (c) => map[c]);
    };
    const handler = () => handler;

    handler.getUserInfo = () => {
      parsedData = [
        _escapeHtml(evt.target.querySelector('#customer_name').value) || '',
        _escapeHtml(evt.target.querySelector('#customer_contact_attributes_phone').value) || '',
        _escapeHtml(evt.target.querySelector('#customer_email').value) || '',
        _escapeHtml(evt.target.querySelector('#customer_family_name').value) || '',
      ];

      return handler;
    };
    handler.handleInfo = () => {
      const h = () => {
        let data;
        const _glueAll = (...args) => args.reduce((curr, prev) => curr + prev);

        const wrapper = () => wrapper;
        wrapper.replaceChars = () => {
          data = parsedData.map(el => _specialCharsReplacer(el));
          data = _.object(['name', 'phone', 'email', 'surname'], data);

          return wrapper;
        };
        wrapper.prepareQuery = () => {
          let {name, email, phone, surname} = data;
          let title, source;

          name = name ? `fields%5BNAME%5D=${name}&` : '';
          phone = phone ? `&fields%5BPHONE%5D%5B0%5D%5BVALUE%5D=${phone}&fields%5BPHONE%5D%5B0%5D%5BVALUE_TYPE%5D=WORK&` : '';
          email = email ? `fields%5BEMAIL%5D%5B0%5D%5BVALUE%5D=${email}&fields%5BEMAIL%5D%5B0%5D%5BVALUE_TYPE%5D=HOME&` : '';
          source = 'fields%5BSOURCE_ID%5D=WEB&';
          title = `TITLE%5D=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F+%D0%BD%D0%B0+big1.ru+${data.name}&`;
          surname = `fields%5BLAST_NAME%5D=${surname}`;

          sendData = _glueAll(_header, title, source, name, phone, email, surname);

          return wrapper;
        };

        return wrapper;
      };

      h()
        .replaceChars()
        .prepareQuery();

      return handler;
    };
    handler.sendData = () => {
      const xhr = new XMLHttpRequest;
      xhr.open('POST', 'https://avtodizel.bitrix24.ru/rest/391/8ttk4n73qu03obq6/crm.lead.add.json/');
      xhr.send(sendData);

      return handler;
    };

    return handler;
  };
  formSubmitHandler()
    .getUserInfo()
    .handleInfo()
    .sendData()
};
form.addEventListener('submit', onFormSubmit);