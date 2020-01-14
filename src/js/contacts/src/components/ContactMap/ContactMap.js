import City from "../City/";
import BranchWrapper from "../BranchWrapper/";
import CurrentRegion from "../CurrentRegion/";
import SearchCity from "../SearchCity/";
import CitiesList from "../CitiesList";

export default class ContactMap extends React.Component {
  constructor(props) {
    super(props);
    this.baseCityId = '28';
    this.citiesList = [
      {
        "name": "Абакан",
        "kladr_id": "19000001000",
        "firstLetter": "А"
      },
      {
        "name": "Альметьевск",
        "kladr_id": "16008001000"
      },
      {
        "name": "Анадырь",
        "kladr_id": "87000001000"
      },
      {
        "name": "Архангельск",
        "kladr_id": "29000001000"
      },
      {
        "name": "Астрахань",
        "kladr_id": "30000001000"
      },
      {
        "name": "Барнаул",
        "kladr_id": "22000001000",
        "firstLetter": "Б"
      },
      {
        "name": "Белгород",
        "kladr_id": "31000001000"
      },
      {
        "name": "Биробиджан",
        "kladr_id": "79000001000"
      },
      {
        "name": "Благовещенск",
        "kladr_id": "28000001000"
      },
      {
        "name": "Братск",
        "kladr_id": "38000005000"
      },
      {
        "name": "Брянск",
        "kladr_id": "32000001000"
      },
      {
        "name": "Бугульма",
        "kladr_id": "16014001000"
      },
      {
        "name": "Бузулук",
        "kladr_id": "56000006000",
        "branches": [
          {
            "name": "г. Бузулук, ул. Дорожная, 35",
            "street": 'ул. Дорожная, 35',
            "schedule": 'ПН-ПТ: 9:00 - 18:00',
            "photos": [],
            'id': '28',
          },
        ],
        "mapLink": 'https://yandex.ru/map-widget/v1/?um=constructor%3A9a0521a20ec9ea1315277cdb881c07a8ac38e1dbe49164611a0d8cca3276111f&amp;source=constructor',
      },
      {
        "name": "Великий Новгород",
        "kladr_id": "53000001000",
        "firstLetter": "В"
      },
      {
        "name": "Владивосток",
        "kladr_id": "25000001000"
      },
      {
        "name": "Владикавказ",
        "kladr_id": "15000001000"
      },
      {
        "name": "Владимир",
        "kladr_id": "33000001000"
      },
      {
        "name": "Волгоград",
        "kladr_id": "34000001000"
      },
      {
        "name": "Волгодонск",
        "kladr_id": "61000004000"
      },
      {
        "name": "Вологда",
        "kladr_id": "35000001000"
      },
      {
        "name": "Воронеж",
        "kladr_id": "36000001000"
      },
      {
        "name": "Горно-Алтайск",
        "kladr_id": "04000001000",
        "firstLetter": "Г"
      },
      {
        "name": "Грозный",
        "kladr_id": "20000001000"
      },
      {
        "name": "Дзержинск",
        "kladr_id": "52000002000",
        "firstLetter": "Д"
      },
      {
        "name": "Дятьково",
        "kladr_id": "32006001000"
      },
      {
        "name": "Екатеринбург",
        "kladr_id": "66000001000",
        "branches": [
          {
            "name": "г. Екатеринбург, Железнодорожный район (Старая сортировка), ул.Билимбаевская, д.4",
            "street": 'Железнодорожный район (Старая сортировка), ул.Билимбаевская, д.4',
            "schedule": 'ПН-ПТ: 9:00 - 18:00',
            "photos": [],
            'id': '37',
          }
        ],
        "mapLink": 'https://yandex.ru/map-widget/v1/?um=constructor%3A35a1946a7b5be2a472fcbf066fd1289306b9a854cf69f165806d9d034c79f1ee&amp;source=constructor',
        "firstLetter": "Е"
      },
      {
        "name": "Елабуга",
        "kladr_id": "16019001000"
      },
      {
        "name": "Златоуст",
        "kladr_id": "74000004000",
        "firstLetter": "З"
      },
      {
        "name": "Иваново",
        "kladr_id": "37000001000",
        "firstLetter": "И"
      },
      {
        "name": "Ижевск",
        "kladr_id": "18000001000"
      },
      {
        "name": "Иркутск",
        "kladr_id": "38000003000"
      },
      {
        "name": "Йошкар-Ола",
        "kladr_id": "12000001000",
        "firstLetter": "Й"
      },
      {
        "name": "Казань",
        "kladr_id": "16000001000",
        "firstLetter": "К"
      },
      {
        "name": "Калининград",
        "kladr_id": "39000001000"
      },
      {
        "name": "Калуга",
        "kladr_id": "40000001000"
      },
      {
        "name": "Кемерово",
        "kladr_id": "42000009000"
      },
      {
        "name": "Киров",
        "kladr_id": "43000004000"
      },
      {
        "name": "Кострома",
        "kladr_id": "44000003000"
      },
      {
        "name": "Краснодар",
        "kladr_id": "23000001000"
      },
      {
        "name": "Красноярск",
        "kladr_id": "24000001000"
      },
      {
        "name": "Курган",
        "kladr_id": "45000001000"
      },
      {
        "name": "Курск",
        "kladr_id": "46000001000"
      },
      {
        "name": "Кызыл",
        "kladr_id": "17000001000"
      },
      {
        "name": "Липецк",
        "kladr_id": "48000001000",
        "firstLetter": "Л"
      },
      {
        "name": "Магадан",
        "kladr_id": "49000001000",
        "firstLetter": "М"
      },
      {
        "name": "Магас",
        "kladr_id": "06000001000"
      },
      {
        "name": "Магнитогорск",
        "kladr_id": "74000009000"
      },
      {
        "name": "Майкоп",
        "kladr_id": "01000001000"
      },
      {
        "name": "Мамадыш",
        "kladr_id": "16021000057"
      },
      {
        "name": "Махачкала",
        "kladr_id": "05000001000"
      },
      {
        "name": "Москва",
        "kladr_id": "77000000000"
      },
      {
        "name": "Мурманск",
        "kladr_id": "51000001000"
      },
      {
        "name": "Набережные Челны",
        "kladr_id": "16000002000",
        "firstLetter": "Н"
      },
      {
        "name": "Нальчик",
        "kladr_id": "07000001000"
      },
      {
        "name": "Нарьян-Мар",
        "kladr_id": "83000001000"
      },
      {
        "name": "Нижний Новгород",
        "kladr_id": "52000001000"
      },
      {
        "name": "Новокузнецк",
        "kladr_id": "42000012000"
      },
      {
        "name": "Новосибирск",
        "kladr_id": "54000001000"
      },
      {
        "name": "Омск",
        "kladr_id": "55000001000",
        "firstLetter": "О"
      },
      {
        "name": "Оренбург",
        "kladr_id": "56000001000"
      },
      {
        "name": "Орёл",
        "kladr_id": "57000001000"
      },
      {
        "name": "Пенза",
        "kladr_id": "58000001000",
        "firstLetter": "П"
      },
      {
        "name": "Пермь",
        "kladr_id": "59000001000"
      },
      {
        "name": "Петрозаводск",
        "kladr_id": "10000001000"
      },
      {
        "name": "Петропавловск-Камчатский",
        "kladr_id": "41000001000"
      },
      {
        "name": "Псков",
        "kladr_id": "60000001000"
      },
      {
        "name": "Раменское",
        "kladr_id": "24032000028",
        "firstLetter": "Р"
      },
      {
        "name": "Ростов-на-Дону",
        "kladr_id": "61000001000"
      },
      {
        "name": "Рязань",
        "kladr_id": "62000001000"
      },
      {
        "name": "Салехард",
        "kladr_id": "89000001000",
        "firstLetter": "С"
      },
      {
        "name": "Самара",
        "kladr_id": "63000001000"
      },
      {
        "name": "Санкт-Петербург",
        "kladr_id": "78000000000"
      },
      {
        "name": "Саранск",
        "kladr_id": "13000001000"
      },
      {
        "name": "Саратов",
        "kladr_id": "64000001000"
      },
      {
        "name": "Сафоново",
        "kladr_id": "44024000153"
      },
      {
        "name": "Симферополь",
        "kladr_id": "91000007000"
      },
      {
        "name": "Смоленск",
        "kladr_id": "67000003000"
      },
      {
        "name": "Ставрополь",
        "kladr_id": "26000001000"
      },
      {
        "name": "Сыктывкар",
        "kladr_id": "11000001000"
      },
      {
        "name": "Таганрог",
        "kladr_id": "61000011000",
        "firstLetter": "Т"
      },
      {
        "name": "Тамбов",
        "kladr_id": "68000004000"
      },
      {
        "name": "Тверь",
        "kladr_id": "69000001000"
      },
      {
        "name": "Томск",
        "kladr_id": "70000001000"
      },
      {
        "name": "Тула",
        "kladr_id": "71000001000"
      },
      {
        "name": "Тюмень",
        "kladr_id": "72000001000"
      },
      {
        "name": "Улан-Удэ",
        "kladr_id": "03000001000",
        "firstLetter": "У"
      },
      {
        "name": "Ульяновск",
        "kladr_id": "73000001000"
      },
      {
        "name": "Уфа",
        "kladr_id": "02000001000"
      },
      {
        "name": "Фряново",
        "kladr_id": "50040000098",
        "firstLetter": "Ф"
      },
      {
        "name": "Хабаровск",
        "kladr_id": "27000001000",
        "firstLetter": "Х"
      },
      {
        "name": "Ханты-Мансийск",
        "kladr_id": "86000001000"
      },
      {
        "name": "Чебоксары",
        "kladr_id": "21000001000",
        "firstLetter": "Ч"
      },
      {
        "name": "Челябинск",
        "kladr_id": "74000001000"
      },
      {
        "name": "Черкесск",
        "kladr_id": "09000001000"
      },
      {
        "name": "Чехов",
        "kladr_id": "50000053000"
      },
      {
        "name": "Чита",
        "kladr_id": "75000001000"
      },
      {
        "name": "Шебекино",
        "kladr_id": "31000003000",
        "firstLetter": "Ш"
      },
      {
        "name": "Щелково",
        "kladr_id": "69015000184",
        "firstLetter": "Щ"
      },
      {
        "name": "Элиста",
        "kladr_id": "08000001000",
        "firstLetter": "Э"
      },
      {
        "name": "Южно-Сахалинск",
        "kladr_id": "65000001000",
        "firstLetter": "Ю"
      },
      {
        "name": "Якутск",
        "kladr_id": "14000001000",
        "firstLetter": "Я"
      },
      {
        "name": "Ярославль",
        "kladr_id": "76000001000",
        "branches": [
          {
            "name": "Ярославль, ул. Полушкина роща 16Л",
            "street": 'ул. Полушкина роща 16Л',
            "schedule": 'ПН-ПТ: 9:00 - 18:00',
            "photos": [],
            'id': '28',
          },
          {
            "name": "Ярославль, ул. Урицкого 47а",
            "street": 'ул. Урицкого 47а',
            "schedule": 'ПН-ПТ: 9:00 - 18:00',
            "photos": [],
            'id': '41',
          },
        ],
        "mapLink": 'https://yandex.ru/map-widget/v1/?um=constructor%3Aacbcb9cd59b569b50fcb7ed84cbe0a579a8f551b4d992fbdb6781efd00c0c49e&amp;source=constructor',
      },
      {
        "name": "Ярцево",
        "kladr_id": "67025000116"
      }
    ];
    this.map = document.querySelector('.contactMap__call-map');
    this.state = {
      isRenderedBranch: false,
      branches: '',
      chosenCity: this.getCookie('deliveryAddress') || YMaps?.location?.city || '',
      filteredList: this.citiesList,
      activeElement: '',
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
  renderBranch = ({branches, mapLink}) => {
    this.scrollToTop();
    this.setState({
      isRenderedBrunch: !this.state.isRenderedBrunch,
      branches: branches,
      mapLink: mapLink,
      filteredList: this.citiesList,
    });
  };
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
  onNonBranchClick = ({evt: {target}, kladr_id}) => {
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
          s.saveCityName = () => {
            this.saveCookie('deliveryAddress', target.textContent);

            return s;
          };
          s.saveCityId = () => {
            this.setCityId();

            return s;
          };

          return s;
        };

        s()
          .saveCityName()
          .saveCityId();

        return w;
      };
      w.chooseCity = () => {
        this.chooseCity(target.textContent);
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
      .chooseCity();
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
  onBranchClick = ({target}) => {
    const {value} = target;
    this.setCityId(target.dataset.id);
    this.saveCookie('deliveryAddress', value);
    this.renderBranch([]);
    this.chooseCity(value);
    this.disableActiveElement();
    location.reload();
  };
  setCityId = (id = this.baseCityId) => this.saveCookie('region_id', id);
  render() {
    const {isRenderedBrunch, branches, chosenCity, mapLink} = this.state;
    const {filterCityList, onBranchClick, renderCity} = this;

    return (
      <div className={'contacts'}>
        <CurrentRegion currentCity={chosenCity}/>
        {
          isRenderedBrunch ?
              <BranchWrapper branches={branches}
                             onClick={this.renderBranch}
                             onBranchClick={onBranchClick}
                             mapLink={mapLink}/> :
            <>
              <SearchCity onCityFilter={filterCityList}/>
              <CitiesList renderCity={renderCity} />
            </>
        }
      </div>
    )
  }
};