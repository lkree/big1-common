import React from "react";
import {City} from "./City";
import {BranchWrapper} from "./BranchWrapper";
import {CurrentRegion} from "./CurrentRegion";
import {SearchCity} from "./SearchCity";
import {CitiesList} from "./CitiesList";

export default class ContactMap extends React.Component {
  getYmapsCity = () => {
    let ymaps;
    try {
      ymaps = YMaps.location.city;
    } catch(e) {

    }

    return ymaps;
  };
  constructor(props) {
    super(props);
    this.baseCityId = '28';
    this.citiesList = window.citiesList;
    this.map = document.querySelector('.contactMap__call-map');
    this.state = {
      isRenderedBranch: false,
      branches: '',
      chosenCity: this.getCookie('deliveryCity') || this.getYmapsCity() || '',
      filteredList: this.citiesList,
      activeElement: '',
      city: '',
    };
  };
  renderCity = () => this.state.filteredList.map(({name, branches, kladr_id, firstLetter, mapLink}) => {
      const params = {
        name: name,
        branches: branches,
        kladr_id: kladr_id,
        firstLetter: firstLetter,
        renderBranch: this.renderBranch,
        onClick: this.onNonBranchClick,
        mapLink: mapLink
      };

      return <City {...params}/>
    });
  renderBranch = ({branches, mapLink, city}) => {
    this.scrollToTop();
    this.setState({
      isRenderedBrunch: !this.state.isRenderedBrunch,
      branches,
      mapLink,
      filteredList: this.citiesList,
      city,
    });
  };
  /**
   * @param name {String}
   * @param value {String}
   */
  saveCookie = (name, value) => {
    const options = {
      path: '/',
      secure: true,
      'max-age': new Date(Date.now() + 86400e5),
    };

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (const optionKey in options) {
      updatedCookie += "; " + optionKey;
      const optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  };
  getCookie = (name) => {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
  saveActiveElement = (target) => this.setState({
    activeElement: target,
  });
  removeActiveElement = () => this.saveActiveElement('');
  setActiveElement = (target) => {
    this.saveActiveElement(target);
    target.classList.add('contacts__city-button--active');
  };
  disableActiveElement = () => {
    this.state.activeElement.classList?.remove('contacts__city-button--active');
    this.removeActiveElement();
  };
  onNonBranchClick = ({evt: {target, target: {textContent}}, kladr_id}) => {
    let fromPickup = false;

    const w = () => {
      w.checkStatement = (condition, a, b) => {
        condition ? a() : b();

        return w;
      };
      w.setMapKladr = () => {
        window.JCShiptorWidgetPvz.setParams({
          location: {
            kladr_id: kladr_id
          },
        });

        return w;
      };
      w.refreshMap = () => {
        !fromPickup && window.JCShiptorWidgetPvz.refresh();

        return w;
      };
      w.callMap = () => {
        !fromPickup && this.map.click();

        return w;
      };
      w.removeActiveElement = () => {
        this.disableActiveElement();

        return w;
      };
      w.setActiveElement = () => {
        this.setActiveElement(target);

        return w;
      };
      w.saveCity = () => {
        const s = () => {
          s.saveCityId = () => {
            this.setCityId();

            return s;
          };
          s.saveCityCookie = () => {
            this.saveCookie('deliveryCity', textContent);

            return s;
          };

          return s;
        };

        s()
          .saveCityId()
          .saveCityCookie();

        return w;
      };
      w.chooseCity = () => {
        this.chooseCity(textContent);

        return w;
      };
      w.refreshHeader = () => {
        window.userCityHandler({
          cityName: textContent,
          cityId: this.baseCityId,
        });

        return w;
      };
      w.saveDeliveryType = () => {
        this.saveDeliveryType('selfExport');

        return w;
      };
      w.removePickupFlag = () => {
        fromPickup && sessionStorage.removeItem('fromPickup');

        return w;
      };
      w.setPickup = () => {
        fromPickup = true;

        return w;
      };
      w.emptyFunction = () => w;
      w.savePickupData = () => {
        fromPickup && this.onBranchClick({target: {value: '', dataset: {city: textContent}, id: 28}});

        return w;
      };

      return w;
    };

    w()
      .checkStatement(!!sessionStorage.getItem('fromPickup'), w.setPickup, w.emptyFunction)
      .setMapKladr()
      .refreshMap()
      .callMap()
      .removeActiveElement()
      .setActiveElement()
      .saveCity()
      .removePickupFlag()
      .saveDeliveryType()
      .chooseCity()
      .refreshHeader()
      .savePickupData();
  };
  chooseCity = (value) => this.setState({
    chosenCity: value
  });
  filterCityList = ({target}) => {
    if (target.value.length < 3) {
     return this.setState({
       filteredList: this.citiesList,
     });
    }
    const {citiesList} = this;
    return this.setState({
      filteredList: citiesList.filter((city) => {
        const cityName = city.name.toLowerCase();
        let input = target.value.toLowerCase();
        input =  input.replace('/ё/g', 'e');
        return ~cityName.indexOf(input);
      })
    });
  };
  scrollToTop = () => {
    $('html,body').animate({scrollTop: 0}, 500);
  };
  onBranchClick = ({target: {value, dataset: {city}, id}}) => {
    this.setCityId(id);
    this.saveCookie('deliveryAddress', value);
    this.saveCookie('deliveryCost', '0');
    this.saveCookie('deliveryDeadline', '0');
    this.saveCookie('deliveryCity', city);
    this.saveDeliveryType('pickup');
    sessionStorage.removeItem('fromPickup');
    this.renderBranch([]);
    this.chooseCity(city);
    this.disableActiveElement();
    this.getBackUrl() || location.reload();
  };
  setCityId = (id = this.baseCityId) => this.saveCookie('region_id', id);
  /**
   * @param id {String}
   */
  setSelfExportPointId = (id) => this.saveCookie('selfExportPointId', id);
  saveDeliveryType = (deliveryType) => this.saveCookie('deliveryType', deliveryType);
  getBackUrl = () => {
    const fromUrl = sessionStorage.getItem('fromAnotherUrl');
    if (fromUrl) {
      sessionStorage.removeItem('fromAnotherUrl');
      location.assign(fromUrl);
      return true;
    }
    else return false;
  };
  PickupPointClickHandler = () => {
    const shiptorWidget = document.querySelector("#shiptor_widget_pvz");

    shiptorWidget.addEventListener('onPvzSelect', ({detail: {address, id, shipping_days, courier}}) => {
      const setDeadline = () => {
        const deadLine = parseInt(shipping_days);

        if (deadLine)
          this.saveCookie('deliveryDeadline', deadLine.toString());
        else {
          const city = document.querySelector('.contacts__city-button--active').textContent;
          const shiptor = new ShiptorPointsGetter({usersCity: city, fromCity: '_'});
          /**
           * @param methods {Object}
           * @returns {[number, number]}
           */
          const convertDeliveryPeriod = ({ result: { methods } }) => {
            let minDays;
            let maxDays;
            try {
              minDays = methods[0].min_days;
            } catch({ message }) {
              console.log(message);
              minDays = 0;
            }
            try {
              maxDays = methods[0].max_days;
            } catch({ message }) {
              console.log(message);
              maxDays = 0;
            }


            return [minDays, maxDays];
          };

          shiptor
            .getUsersCityKladr()
            .then(() => {
              shiptor
                .calculateShipping()
                .then(result => {
                  const [minDays, maxDays] = convertDeliveryPeriod(result);
                  this.saveCookie('deliveryDeadline', maxDays.toString() || minDays.toString() || '0');
                })
            })
        }
      };

      setDeadline();
      this.saveCookie('deliveryAddress', address);
      this.saveCookie('deliveryCost', window.citiesList[0].price);
      this.saveCookie('deliveryCourier', courier);
      this.setSelfExportPointId(id);
      this.getBackUrl();
    });
  };
  componentDidMount() {
    this.PickupPointClickHandler();
  }
  render() {
    const {isRenderedBrunch, branches, chosenCity, mapLink, city} = this.state;
    const {filterCityList, onBranchClick, renderCity} = this;

    return (
      <div className={'contacts'}>
        <CurrentRegion currentCity={chosenCity}/>
        {
          isRenderedBrunch ?
              <BranchWrapper branches={branches}
                             onClick={this.renderBranch}
                             onBranchClick={onBranchClick}
                             mapLink={mapLink}
                             city={city}/> :
            <>
              <SearchCity onCityFilter={filterCityList}/>
              <CitiesList renderCity={renderCity} />
            </>
        }
      </div>
    )
  }
};