class shiptorPointsGetter {
  constructor({usersCity, fromCity}) {
    this.usersCity = this._escapeHtml(usersCity);
    this.fromCity = fromCity;
    this.cityData = {
      "id": "JsonRpcClient.js",
      "jsonrpc": "2.0",
      "method": "",
    };
  };
  _escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, (m) => map[m] );
  };
  _getData = async (data) => {
   return await fetch('https://api.shiptor.ru/public/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
     .then((result) => result.json())
  };
  getDeliveryPoints = async () => {
    this.usersCityKladr ? '' : await this._getUsersCityKladr();

    const usersCityId = this.usersCityKladr, deliveryCityId = this.fromCity;

    const data = this._dataHandler({
      method: "calculateShipping",
      params: {
        courier: 'cdek',
        length: 10,
        width: 10,
        height: 10,
        weight: 10,
        cod: 0,
        declared_cost: 0,
        kladr_id: `${usersCityId}`,
        kladr_id_from: `${deliveryCityId}`,
      }
    });
    return await this._getData(data);
  };
  _getUsersCityKladr = async () => {
    const data = this._dataHandler({method: 'suggestSettlement', params: {query: this.usersCity, country_code: "RU"}});
    const result = await this._getData(data);
    console.log(result.result);
    this.usersCityKladr = result.result[0].kladr_id;
    return result;
  };
  _dataHandler = (properties) => {
    let data = _.clone(this.cityData);
    return JSON.stringify(_.extend(data, properties));
  };
};

const calculate = new shiptorPointsGetter({
  usersCity: document.querySelector('.deliveryCalculator__users-city-input'),
  fromCity: document.querySelector('.deliveryCalculator__delivery-city-input'),
});



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