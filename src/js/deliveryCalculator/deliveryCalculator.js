class deliveryCalculator {
  constructor({usersCityInput, usersCityOutput, deliveryCityInput, deliveryCityOutput, submitBtn, output}) {
    this.usersCityInput = usersCityInput;
    this.usersCityOutput = usersCityOutput;
    this.deliveryCityInput = deliveryCityInput;
    this.deliveryCityOutput = deliveryCityOutput;
    this.submitBtn = submitBtn;
    this.output = output;
    this.cityData = {
      "id": "JsonRpcClient.js",
      "jsonrpc": "2.0",
      "method": "",
    }
  };
  #escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  };
  #getData = (data, callback, ...rest) => {
    fetch('https://api.shiptor.ru/public/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((result) => (result.json()))
      .then((result) => callback(result, ...rest));
  };
  #cityRenderHelper = (el, itemToCreate) => {
    const option = document.createElement(itemEl);
    const region = el.readable_parents ? el.readable_parents + ', ' : '';
    option.textContent = `${region}${el.name}`;
    option.value = el.kladr_id;

    return option;
  };
  #resultRenderHelper = () => {

  };
  #render = ({ result }, wrapper, itemEl) => {
    wrapper.innerHTML = '';

    result.forEach((el) => {
      const option = this.#cityRenderHelper(el, itemEl);
      wrapper.append(option);
    });
  };
  #outputRender = ({ result: { methods } }, wrapper, itemEl) => {
    wrapper.innerHTML = '';
    methods.forEach((el) => {
      let {cost: { services }, days, method: { name, description }} = el;
      services = services[0];
      const {name: serviceName, readable} = services;
      const div = document.createElement(itemEl);
      description = description === null ? '' : description;
      [serviceName, readable, days, name, description].forEach((text) => div.textContent += `${text}  `);
      wrapper.append(div);
    });

  };
  #dataHandler = (properties) => {
    let data = _.clone(this.cityData);
    return JSON.stringify(_.extend(data, properties));
  };
  #cityInputHandler = (evt, output) => {
    if (evt.target.value.length < 3) return;
    const usersQuery = this.#escapeHtml(evt.target.value);
    const data = this.#dataHandler({method: 'suggestSettlement', params: {query: usersQuery, country_code: "RU"}});
    this.#getData(data, this.#cityOutputRender, output, 'option');
  };
  #onCityInput = _.debounce(this.#cityInputHandler, 1000);
  #onSubmitBtnClick = () => {
    const usersCityId = this.usersCityOutput.value,
           deliveryCityId = this.deliveryCityOutput.value;
    const data = this.#dataHandler({
      method: "calculateShipping",
      params: {
        length: 10,
        width: 10,
        height: 10,
        weight: 10,
        cod: 0,
        declared_cost: 0,
        kladr_id: `${deliveryCityId}`,
        kladr_id_from: `${usersCityId}`,
      }
    });
    this.#getData(data, this.#outputRender, this.output, 'div');
  };

  init = () => {
    this.usersCityInput.addEventListener('input', (evt) => this.#onCityInput(evt, this.usersCityOutput));
    this.deliveryCityInput.addEventListener('input', (evt) => this.#onCityInput(evt, this.deliveryCityOutput));
    this.submitBtn.addEventListener('click', this.#onSubmitBtnClick);
  };
}

const calculate = new deliveryCalculator({
  usersCityInput: document.querySelector('.deliveryCalculator__users-city-input'),
  usersCityOutput: document.querySelector('.deliveryCalculator__users-city-output'),
  deliveryCityInput: document.querySelector('.deliveryCalculator__delivery-city-input'),
  deliveryCityOutput: document.querySelector('.deliveryCalculator__delivery-city-output'),
  submitBtn: document.querySelector('.deliveryCalculator__submit-btn'),
  output: document.querySelector('.deliveryCalculator__output'),
});
calculate.init();



const getInputCity = (evt) => {
  const render = ({ result }) => {
    const select = document.querySelector('select');
    result.forEach((el) => {
      const option = document.createElement('option');
      const region = el.readable_parents ? el.readable_parents + ', ' : '';
      option.textContent = `${region}${el.name}`;
      option.value = el.kladr_id;

      select.append(option);
    });
  };
  const data = JSON.stringify({
    "id": "JsonRpcClient.js",
    "jsonrpc": "2.0",
    "method": "suggestSettlement",
    "params": {
      "query": `${evt.target.value}`,
      "country_code": "RU"
    }
  });
  fetch('https://api.shiptor.ru/public/v1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  })
    .then((result) => (result.json()))
    .then((result) => render(result));
};
const onInputChange = _.debounce(getInputCity, 100);
const input = document.querySelector('input');
input.addEventListener('change', onInputChange);