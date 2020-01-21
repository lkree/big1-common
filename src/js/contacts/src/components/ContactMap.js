import React from "react";
import {City} from "./City";
import {BranchWrapper} from "./BranchWrapper";
import {CurrentRegion} from "./CurrentRegion";
import {SearchCity} from "./SearchCity";
import {CitiesList} from "./CitiesList";

export default class ContactMap extends React.Component {
  constructor(props) {
    super(props);
    this.baseCityId = '28';
    this.citiesList = window.citiesList;
    this.map = document.querySelector('.contactMap__call-map');
    this.state = {
      isRenderedBranch: false,
      branches: '',
      chosenCity: this.getCookie('deliveryCity') || YMaps?.location?.city || '',
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
    const w = () => {
      w.setMapKladr = () => {
        window.JCShiptorWidgetPvz.setParams({
          location: {
            kladr_id: kladr_id
          },
        });

        return w;
      };
      w.refreshMap = () => {
        window.JCShiptorWidgetPvz.refresh();

        return w;
      };
      w.callMap = () => {
        this.map.click();

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

      return w;
    };

    w()
      .setMapKladr()
      .refreshMap()
      .callMap()
      .removeActiveElement()
      .setActiveElement()
      .saveCity()
      .saveDeliveryType()
      .chooseCity()
      .refreshHeader();
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
  onBranchClick = ({target, target: {value, dataset: {city}}, id}) => {
    this.setCityId(id);
    this.saveCookie('deliveryAddress', value);
    this.saveCookie('deliveryCity', city);
    this.saveDeliveryType('pickup');
    this.renderBranch([]);
    this.chooseCity(city);
    this.disableActiveElement();
    location.reload();
  };
  setCityId = (id = this.baseCityId) => this.saveCookie('region_id', id);
  /**
   * @param id {String}
   */
  setSelfExportPointId = (id) => this.saveCookie('selfExportPointId', id);
  saveDeliveryType = (deliveryType) => this.saveCookie('deliveryType', deliveryType);
  PickupPointClickHandler = () => {
    const shiptorWidget = document.querySelector("#shiptor_widget_pvz");

    shiptorWidget.addEventListener ('onPvzSelect', ({detail: {address, id, courier}}) => {
      this.saveCookie('deliveryAddress', address);
      this.setSelfExportPointId(id);
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