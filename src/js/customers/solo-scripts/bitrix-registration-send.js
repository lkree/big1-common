const form = document.querySelector('#new_customer');
const onFormSubmit = (evt) => {
  const w = () => {
    const _header = 'fields%5B';
    let parsedData, sendData, fastExit;
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
    const getCookie = (name) => {
      const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    w.checkRegion = () => {
      const region = getCookie('region_id');
      if ((region === '41') || (region === '43') || (region === '44'))//region !== '28' && region !== undefined
        fastExit = true;

      return w;
    };
    w.getUserInfo = () => {
      if (fastExit) return w;
      parsedData = [
        _escapeHtml(evt.target.querySelector('#customer_name').value) || '',
        _escapeHtml(evt.target.querySelector('#customer_contact_attributes_phone').value) || '',
        _escapeHtml(evt.target.querySelector('#customer_email').value) || '',
        _escapeHtml(evt.target.querySelector('#customer_family_name').value) || '',
      ];

      return w;
    };
    w.handleInfo = () => {
      if (fastExit) return w;
      const h = () => {
        let data;
        const _glueAll = (...args) => args.reduce((curr, prev) => curr + prev);

        const wrapper = () => wrapper;
        const getCookie = (name) => {
          const matches = document.cookie.match(new RegExp(
              "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
          ));
          return matches ? decodeURIComponent(matches[1]) : undefined;
        };
        wrapper.replaceChars = () => {
          data = parsedData.map(el => _specialCharsReplacer(el));
          data = _.object(['name', 'phone', 'email', 'surname'], data);

          return wrapper;
        };
        wrapper.prepareQuery = () => {
          let {name, email, phone, surname} = data;
          let title, source, utm;

          const utm_source = getCookie('utm_source');

          name = name ? `fields%5BNAME%5D=${name}&` : '';
          phone = phone ? `&fields%5BPHONE%5D%5B0%5D%5BVALUE%5D=${phone}&fields%5BPHONE%5D%5B0%5D%5BVALUE_TYPE%5D=WORK&` : '';
          email = email ? `fields%5BEMAIL%5D%5B0%5D%5BVALUE%5D=${email}&fields%5BEMAIL%5D%5B0%5D%5BVALUE_TYPE%5D=HOME&` : '';
          source = 'fields%5BSOURCE_ID%5D=WEB&';
          title = `TITLE%5D=%D0%A0%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F+%D0%BD%D0%B0+big1.ru+${data.name}&`;
          surname = `fields%5BLAST_NAME%5D=${surname}&`;
          utm = utm_source  ? `fields%5BUTM_SOURCE%5D=${utm_source}`: '';
          sendData = _glueAll(_header, title, source, name, phone, email, surname, utm);

          return wrapper;
        };

        return wrapper;
      };

      h()
        .replaceChars()
        .prepareQuery();

      return w;
    };
    w.sendData = () => {
      if (fastExit) return w;
      const xhr = new XMLHttpRequest;
      xhr.open('POST', 'https://avtodizel.bitrix24.ru/rest/391/8ttk4n73qu03obq6/crm.lead.add.json/');
      xhr.send(sendData);

      return w;
    };

    return w;
  };
  w()
    .checkRegion()
    .getUserInfo()
    .handleInfo()
    .sendData()
};
form.addEventListener('submit', onFormSubmit);