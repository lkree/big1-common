class ShiptorPointsGetter {
  /**
   *
   * @param {string} usersCity (usersQuery string (getted from input))
   * @param {string} fromCity kladrId
   */
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
  /**
   *
   * @returns {Promise<*>}
   */
  getDeliveryPoints = async () => {
    await this._getUsersCityKladr();

    const data = this._dataHandler({
      method: "getDeliveryPoints",
      params: {
        kladr_id: `${this.usersCityKladr}`,
        courier: 'cdek',
      }
    });
    return await this._getData(data);
  };
  _getUsersCityKladr = async () => {
    const data = this._dataHandler({method: 'suggestSettlement', params: {query: this.usersCity, country_code: "RU"}});
    let result = await this._getData(data);

    try {
      this.usersCityKladr = result.result[0].kladr_id;
    } catch(e) {
      this.usersCityKladr = '00000000000';
    }

    return result;
  };
  _dataHandler = (properties) => {
    let data = _.clone(this.cityData);
    return JSON.stringify(_.extend(data, properties));
  };
};

const calculate = new ShiptorPointsGetter({
  usersCity: 'Ростов',
  fromCity: '77000000000',
});

calculate.getDeliveryPoints()
  .then((result) => console.log(result.result.methods));