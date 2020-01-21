class ShiptorPointsGetter {
  /**
   *
   * @param {String} usersCity (usersQuery string (getted from input))
   * @param {String} fromCity kladrId
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
   * works only after using getUsersCityKladr
   * @param courier {Object<string>}
   * @returns {Promise<*>}
   */
  getDeliveryPoints = async ({courier} = {}) => {
    if (courier)
      courier = {courier: courier};

    const data = this._dataHandler({
      method: "getDeliveryPoints",
      params: {
        kladr_id: `${this.usersCityKladr}`,
        cod: '0',
        ...courier
      }
    });
    return await this._getData(data);
  };
  getUsersCityKladr = async () => {
    const data = this._dataHandler({method: 'suggestSettlement', params: {query: this.usersCity, country_code: "RU"}});
    let result = await this._getData(data);

    try {
      this.usersCityKladr = result.result[0].kladr_id;
    } catch(e) {
      this.usersCityKladr = '00000000000';
    }

    return result;
  };
  calculateShipping = async () => {
    const data = this._dataHandler({
      method: "calculateShipping",
      params: {
        kladr_id: `${this.usersCityKladr}`,
        kladr_id_from: '76000001000',
        cod: '0',
        length: 10,
        width: 10,
        height: 10,
        weight: 1,
        declared_cost: 0
      }
    });
    return await this._getData(data);
  };
  _dataHandler = (properties) => {
    let data = _.clone(this.cityData);
    return JSON.stringify(_.extend(data, properties));
  };
}

// const calculate = new ShiptorPointsGetter({
//   usersCity: 'Ростов',
//   fromCity: '77000000000',
// });
//
// calculate.getDeliveryPoints()
//   .then((result) => console.log(result.result.methods));