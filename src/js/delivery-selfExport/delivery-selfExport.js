{
  const option = {
    selfExportModule: document.querySelector('.delivery-selfExport'),
  };
  window.options = _.extend(option, {
    citiesList: option.selfExportModule.querySelector('.delivery-selfExport__cities-list'),
    pickupList: option.selfExportModule.querySelector('.delivery-selfExport__pickup-list'),
    pickupSection: option.selfExportModule.querySelector('.delivery-selfExport__pickup'),
    citiesSection: option.selfExportModule.querySelector('.delivery-selfExport__cities'),
    citySearchInput: option.selfExportModule.querySelector('.delivery-selfExport__city-search-input'),
    pickupSearchInput: option.selfExportModule.querySelector('.delivery-selfExport__pickup-search-input'),
    close: option.selfExportModule.querySelector('.delivery-selfExport__close'),
    blockScreen: document.querySelector('.basket__display-block'),
    errorSection: option.selfExportModule.querySelector('.delivery-selfExport__error'),
    confirmButton: option.selfExportModule.querySelector('.delivery-selfExport__confirm-btn'),
    waitScreen: option.selfExportModule.querySelector('.delivery-selfExport__wait-screen'),
    chosenCity: option.selfExportModule.querySelector('.delivery-selfExport__chosen-city'),
    changeCity: option.selfExportModule.querySelector('.delivery-selfExport__change-city'),
    showMap: option.selfExportModule.querySelector('.delivery-selfExport__show-map'),
    cities: [
      "Абакан",
      "Абинск",
      "Азов",
      "Аксай",
      "Актау",
      "Актобе",
      "Алапаевск",
      "Александров",
      "Алексеевка",
      "Алексин",
      "Алушта",
      "Альметьевск",
      "Амурск",
      "Анапа",
      "Ангарск",
      "Анжеро-Судженск",
      "Апатиты",
      "Апрелевка",
      "Апшеронск",
      "Арамиль",
      "Арзамас",
      "Армавир",
      "Арсеньев",
      "Артем",
      "Архангельск",
      "Асбест",
      "Астрахань",
      "Атырау",
      "Ахтубинск",
      "Ачинск",
      "Аша",
      "Балабаново",
      "Балаково",
      "Балахна",
      "Балашиха",
      "Балашов",
      "Барановичи",
      "Барнаул",
      "Батайск",
      "Бахчисарай",
      "Белая Калитва",
      "Белгород",
      "Белебей",
      "Белово",
      "Белогорск",
      "Белорецк",
      "Белореченск",
      "Бердск",
      "Березники",
      "Березовский",
      "Бийск",
      "Бикин",
      "Биробиджан",
      "Бирск",
      "Благовещенск",
      "Боброво",
      "Бобруйск",
      "Богородск",
      "Бор",
      "Борзя",
      "Борисов",
      "Борисоглебск",
      "Боровичи",
      "Братск",
      "Брест",
      "Бронницы",
      "Брянск",
      "Бугульма",
      "Буденновск",
      "Бузулук",
      "Буй",
      "Булатниковское",
      "Бутово",
      "ВНИИССОК",
      "Валдай",
      "Валуйки",
      "Великие Луки",
      "Великий Новгород",
      "Великий Устюг",
      "Вельск",
      "Верещагино",
      "Верхняя Пышма",
      "Верхняя Салда",
      "Видное",
      "Витебск",
      "Владивосток",
      "Владикавказ",
      "Владимир",
      "Власиха",
      "Волгоград",
      "Волгодонск",
      "Волжск",
      "Волжский",
      "Вологда",
      "Волоколамск",
      "Волхов",
      "Вольск",
      "Воркута",
      "Воронеж",
      "Воскресенск",
      "Воткинск",
      "Всеволожск",
      "Выборг",
      "Выкса",
      "Высокая Гора",
      "Вышний Волочек",
      "Вязники",
      "Вязьма",
      "Вятские Поляны",
      "Гагарина",
      "Гай",
      "Галич",
      "Гатчина",
      "Геленджик",
      "Георгиевск",
      "Глазов",
      "Голицыно",
      "Голышманово",
      "Гомель",
      "Горки-10",
      "Горно-Алтайск",
      "Городец",
      "Горячеводский",
      "Горячий Ключ",
      "Гродно",
      "Грозный",
      "Грэсовский",
      "Грязи",
      "Губаха",
      "Губкин",
      "Губкинский",
      "Гуково",
      "Гусь-Хрустальный",
      "Дедовск",
      "Дербент",
      "Джанкой",
      "Дзержинск",
      "Дзержинский",
      "Димитровград",
      "Динская",
      "Дмитров",
      "Добрянка",
      "Долгопрудный",
      "Домодедово",
      "Донецк",
      "Дубна",
      "Дюртюли",
      "Евпатория",
      "Егорьевск",
      "Ейск",
      "Екатеринбург",
      "Елабуга",
      "Елец",
      "Елизаветинская",
      "Елизово",
      "Ессентуки",
      "Ессентукская",
      "Железноводск",
      "Железногорск",
      "Железнодорожный",
      "Жуковский",
      "Забайкальск",
      "Заводоуковск",
      "Заволжье",
      "Заинск",
      "Заречный",
      "Заринск",
      "Звенигород",
      "Зеленогорск",
      "Зеленоград",
      "Зеленодольск",
      "Зеленокумск",
      "Зерноград",
      "Златоуст",
      "Ивангород",
      "Иваново",
      "Ивантеевка",
      "Игра",
      "Ижевск",
      "Изобильный",
      "Иннополис",
      "Иноземцево",
      "Ирбит",
      "Иркутск",
      "Искитим",
      "Истра",
      "Ишим",
      "Ишимбай",
      "Йошкар-Ола",
      "Казань",
      "Калининград",
      "Калуга",
      "Каменка",
      "Каменск-Уральский",
      "Каменск-Шахтинский",
      "Камышин",
      "Камышлов",
      "Канаш",
      "Кандалакша",
      "Каневская",
      "Канск",
      "Караганда",
      "Касимов",
      "Каспийск",
      "Качканар",
      "Кашира",
      "Кемерово",
      "Керчь",
      "Кизляр",
      "Кимовск",
      "Кимры",
      "Кингисепп",
      "Кинешма",
      "Киржач",
      "Кириши",
      "Киров",
      "Кирово-Чепецк",
      "Кировск",
      "Киселевск",
      "Кисловодск",
      "Клин",
      "Клинцы",
      "Ковров",
      "Когалым",
      "Кокшетау",
      "Коломна",
      "Колпашево",
      "Колпино",
      "Кольцово",
      "Кольчугино",
      "Коммунарка",
      "Комсомольск-на-Амуре",
      "Конаково",
      "Кондопога",
      "Копейск",
      "Кореновск",
      "Королев",
      "Костанай",
      "Кострома",
      "Котельники",
      "Котельнич",
      "Котлас",
      "Кочубеевское",
      "Красная Поляна",
      "Красноармейск",
      "Красногорск",
      "Краснодар",
      "Красное Село",
      "Красное-на-Волге",
      "Краснокамск",
      "Краснообск",
      "Красноперекопск",
      "Краснотурьинск",
      "Красноуфимск",
      "Красноярск",
      "Кронштадт",
      "Кропоткин",
      "Крымск",
      "Кстово",
      "Кубинка",
      "Кувандык",
      "Кудрово",
      "Кудымкар",
      "Кузнецк",
      "Кукмор",
      "Кулебаки",
      "Кунгур",
      "Курган",
      "Курганинск",
      "Куровское",
      "Курск",
      "Курчатов",
      "Кушва",
      "Кызыл",
      "Кызылорда",
      "Кяхта",
      "Лабинск",
      "Лангепас",
      "Ленинградская",
      "Лениногорск",
      "Ленинск-Кузнецкий",
      "Лермонтов",
      "Лесной",
      "Лесной Городок",
      "Лесосибирск",
      "Лида",
      "Ликино-Дулево",
      "Липецк",
      "Лиски",
      "Лобня",
      "Ломоносов",
      "Луга",
      "Луховицы",
      "Лучегорск",
      "Лыткарино",
      "Люберцы",
      "Людиново",
      "Магадан",
      "Магнитогорск",
      "Майкоп",
      "Малаховка",
      "Маркс",
      "Махачкала",
      "Мегион",
      "Междуреченск",
      "Мелеуз",
      "Мехзавод",
      "Миасс",
      "Миллерово",
      "Минеральные Воды",
      "Минск",
      "Минусинск",
      "Мирный",
      "Михайлов",
      "Михайловка",
      "Михайловск",
      "Мичуринск",
      "Могилёв",
      "Можайск",
      "Мончегорск",
      "Морозовск",
      "Москва",
      "Московский",
      "Мурино",
      "Мурманск",
      "Муром",
      "Мытищи",
      "Набережные Челны",
      "Надым",
      "Назарово",
      "Назрань",
      "Нальчик",
      "Наро-Фоминск",
      "Нарьян-Мар",
      "Нахабино",
      "Находка",
      "Невинномысск",
      "Невьянск",
      "Нерехта",
      "Нерюнгри",
      "Нефтекамск",
      "Нефтеюганск",
      "Нижневартовск",
      "Нижнекамск",
      "Нижний Новгород",
      "Нижний Тагил",
      "Нижняя Тура",
      "Новая",
      "Новоалександровск",
      "Новоалтайск",
      "Новое Девяткино",
      "Новозыбков",
      "Новокузнецк",
      "Новокуйбышевск",
      "Новомосковск",
      "Новополоцк",
      "Новороссийск",
      "Новосибирск",
      "Новотроицк",
      "Новоуральск",
      "Новочебоксарск",
      "Новочеркасск",
      "Новошахтинск",
      "Новый Уренгой",
      "Ногинск",
      "Норильск",
      "Ноябрьск",
      "Нур-Султан",
      "Нурлат",
      "Нягань",
      "Обнинск",
      "Обухово",
      "Одинцово",
      "Озерск",
      "Озеры",
      "Октябрьский",
      "Омск",
      "Оренбург",
      "Орехово-Зуево",
      "Орск",
      "Орша",
      "Орёл",
      "Осиново",
      "Островцы",
      "Острогожск",
      "Отрадный",
      "Ош",
      "Павлово",
      "Павловск",
      "Павловская",
      "Павловский Посад",
      "Павлодар",
      "Пенза",
      "Первоуральск",
      "Переславль-Залесский",
      "Пермь",
      "Петергоф",
      "Петрозаводск",
      "Петропавловск",
      "Петропавловск-Камчатский",
      "Пинск",
      "Пограничный",
      "Подольск",
      "Подрезково",
      "Покров",
      "Полевской",
      "Поселок Пироговский",
      "Приморско-Ахтарск",
      "Приозерск",
      "Прокопьевск",
      "Протвино",
      "Прохладный",
      "Псков",
      "Путилково",
      "Пушкин",
      "Пушкино",
      "Пущино",
      "Пятигорск",
      "Раменское",
      "Ревда",
      "Реж",
      "Реутов",
      "Ржев",
      "Рославль",
      "Россошь",
      "Ростов-на-Дону",
      "Рубцовск",
      "Руза",
      "Рузаевка",
      "Рыбинск",
      "Рязань",
      "Саки",
      "Салават",
      "Салехард",
      "Сальск",
      "Салігорск",
      "Самара",
      "Санкт-Петербург",
      "Саранск",
      "Сарапул",
      "Саратов",
      "Саров",
      "Сатка",
      "Сафоново",
      "Саяногорск",
      "Свердловский",
      "Светлоград",
      "Себеж",
      "Севастополь",
      "Северодвинск",
      "Североуральск",
      "Северск",
      "Северская",
      "Селятино",
      "Семенов",
      "Сергиев Посад",
      "Серов",
      "Серпухов",
      "Сертолово",
      "Сестрорецк",
      "Сибай",
      "Симферополь",
      "Славянск-на-Кубани",
      "Смоленск",
      "Снежинск",
      "Советская Гавань",
      "Советский",
      "Сокол",
      "Соликамск",
      "Солнечногорск",
      "Сортавала",
      "Сосновоборск",
      "Сосновый Бор",
      "Сочи",
      "Спасск-Дальний",
      "Ставрополь",
      "Старая Купавна",
      "Старая Русса",
      "Старый Оскол",
      "Стерлитамак",
      "Стрежевой",
      "Строитель",
      "Ступино",
      "Судак",
      "Сургут",
      "Сухой Лог",
      "Сызрань",
      "Сыктывкар",
      "Сысерть",
      "Тавда",
      "Таганрог",
      "Тайшет",
      "Талдыкорган",
      "Тамбов",
      "Тбилисская",
      "Тверь",
      "Тейково",
      "Темиртау",
      "Темрюк",
      "Тимашевск",
      "Тихвин",
      "Тихорецк",
      "Тобольск",
      "Тольятти",
      "Томск",
      "Торжок",
      "Тосно",
      "Трехгорный",
      "Троицк",
      "Туапсе",
      "Туймазы",
      "Тула",
      "Туркестан",
      "Тучково",
      "Тюмень",
      "Ува",
      "Улан-Удэ",
      "Ульяновск",
      "Управленческий",
      "Урай",
      "Уральск",
      "Урюпинск",
      "Усолье-Сибирское",
      "Уссурийск",
      "Усть-Джегута",
      "Усть-Илимск",
      "Усть-Каменогорск",
      "Усть-Кут",
      "Усть-Лабинск",
      "Уфа",
      "Ухта",
      "Учалы",
      "Феодосия",
      "Фролово",
      "Фролы",
      "Фрязино",
      "Хабаровск",
      "Ханты-Мансийск",
      "Хасавюрт",
      "Химки",
      "Хотьково",
      "Цимлянск",
      "Чайковский",
      "Чебаркуль",
      "Чебоксары",
      "Чегдомын",
      "Челябинск",
      "Череповец",
      "Черкесск",
      "Черноголовка",
      "Черногорск",
      "Черноморское",
      "Чернушка",
      "Чехов",
      "Чистополь",
      "Чита",
      "Чудово",
      "Чусовой",
      "Шадринск",
      "Шарыпово",
      "Шатура",
      "Шаховская",
      "Шахты",
      "Шебекино",
      "Шумово",
      "Шушары",
      "Шуя",
      "Шымкент",
      "Щекино",
      "Щелково",
      "Щербинка",
      "Электрогорск",
      "Электросталь",
      "Электроугли",
      "Энгельс",
      "Югорск",
      "Южно-Сахалинск",
      "Южноуральск",
      "Юрга",
      "Юрюзань",
      "Яблоновский",
      "Якутск",
      "Ялта",
      "Ялуторовск",
      "Янино-1",
      "Янтарный",
      "Ярославль",
      "Ярцево"
    ],
  });
  const handler = (options) => {
    const h = {
      handleClass: (el, action, className) => el.classList[action](className),
      hasClass: (el, className) => el.classList.contains(className),
      escapeHtml: (text) => {
        const map = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, (m) => map[m]);
      },
      activateButton: (button, className = 'delivery-selfExport__confirm-btn--deactive') => {
        button.disabled = false;
        h.handleClass(button, 'remove', className);
      },
      disableButton: (button, className = 'delivery-selfExport__confirm-btn--deactive') => {
        button.disabled = true;
        h.handleClass(button, 'add', className);
      },
      setDataSet: (el, dataType, value) => el.dataset[dataType] = value,
      getDataSet: (el, dataType) => el.dataset[dataType],
      clearEl: (el) => el.innerHTML = '',
      clearInput: (el) => el.value = '',
      removeEl: (el) => el = null,
      hide: (el) => h.handleClass(el, 'add', 'hidden'),
      show: (el) => h.handleClass(el, 'remove', 'hidden'),
      setText: (el, text) => el.textContent = text,
      eventAdd: (el, event, handler) => el.addEventListener(event, handler),
      eventRemove: (el, event, handler) => el.removeEventListener(event, handler),
      setWaitScreen: () => h.show(options.waitScreen),
      disableWaitScreen: () => h.hide(options.waitScreen),
      lowerCase: (el) => el.toLowerCase(),
      checkSubString: (string, subString) => {
        string = h.lowerCase(string);
        subString = h.lowerCase(subString);

        return !!~string.indexOf(subString);
      },
      showError: () => h.show(options.errorSection),
      hideError: () => h.hide(options.errorSection),
      filterList: ({itemList, childClassName, wrapper, fastExit, isCityFiltered, firstInitiate = true}) => (evt) => {
        const inputString = h.escapeHtml(evt.target.value);

        const w = (inputString) => {
          let renderedCities;

          w.initiate = () => {
            if (firstInitiate) itemList = itemList === 'pickup' ? wrapper.querySelector('.delivery-selfExport__pickup-list') : wrapper.querySelector('.delivery-selfExport__cities-list');

            firstInitiate = false;

            return w;
          };
          w.getAllPoints = () => {
            renderedCities = [...itemList.querySelectorAll(childClassName)];

            return w;
          };
          w.inputString = () => {
            if (inputString.length < 3) {
              if (!isCityFiltered) {
                fastExit = true;
                return w;
              }

              w.filterPoints('remove');
              isCityFiltered = false;
              fastExit = true;

              return w;
            }

            inputString = h.lowerCase(inputString);

            return w;
          };
          w.filterPoints = (action = 'add') => {
            if (fastExit) return w;

            renderedCities.forEach((point) => {
              if (h.checkSubString(point.textContent, inputString)) {
                h.handleClass(point, 'remove', 'hidden');
                return;
              }

              h.handleClass(point, action, 'hidden');
              isCityFiltered = true;
            });

            return w;
          };
          w.clearClosure = () => {
            fastExit = '';

            return w;
          };

          return w;
        };

        w(inputString)
          .initiate()
          .getAllPoints()
          .inputString()
          .filterPoints()
          .clearClosure()
      },
    }; //helpers
    const l = {
      onCityChange: () => {},
      onShowMapClick: () => {},
      onConfirmButtonClick: () => {},
      onCityConfirm: () => {},
      onCityClick: () => {},
      onCityInput: () => {},
      onPickupInput: () => {},
    }; //listeners
    const module = ({ blockScreen, selfExportModule, pickupList, chosenCity, pickupSection, confirmButton, pickupSearchInput }) => {
      module.initiate = () => {
        const w = () => {
          let renderedPoints, _renderedCity, userCity, deliveryPoints,
            shiptorApi;

          w.setBlockScreen = () => {
            h.show(blockScreen);

            return w;
          };
          w.showModule = () => {
            h.show(selfExportModule);

            return w;
          };
          w.showPickupSection = () => {
            h.show(pickupSection);

            return w;
          };
          w.setWaitScreen = () => {
            h.setWaitScreen();

            return w;
          };
          w.disableButton = () => {
            h.disableButton(confirmButton);

            return w;
          };
          w.getUserCity = () => {
            _renderedCity = chosenCity.textContent;

            return w;
          };
          w.setUserCity = () => {
            if (!_renderedCity) {
              userCity = YMaps.location.city || 'Москва';
              h.setText(chosenCity, userCity);
            }
            else userCity = _renderedCity;

            return w;
          };
          w.checkRender = () => {
            const s = () => {
              s.getRenderedPoints = () => {
                renderedPoints = h.getDataSet(selfExportModule, 'renderedPoints');

                return s;
              };
              s.getRenderedCity = () => {
                if (_renderedCity !== h.getDataSet(selfExportModule, 'renderedCity')) _renderedCity = '';

                return s;
              };
              s.setRenderedCity = () => {
                h.setDataSet(selfExportModule, 'renderedCity', userCity);

                return s;
              };

              return s;
            };

            s()
              .getRenderedCity()
              .getRenderedPoints()
              .setRenderedCity();

            return w;
          };
          w.handleDeliveryPoints = () => {
            if (!renderedPoints || !_renderedCity) {
              const s = () => {
                s.cleaPickupInput = () => {
                  h.clearInput(pickupSearchInput);

                  return s;
                };
                s.clearPickupList = () => {
                  h.clearEl(pickupList);

                  return s;
                };
                s.initiateApi = () => {
                  shiptorApi = new ShiptorPointsGetter({
                    usersCity: userCity,
                    fromCity: '77000000000',
                  });

                  return s;
                };
                s.handleRequest = () => {
                  shiptorApi
                    .getDeliveryPoints()
                    .then((result) => {
                      if (result.result.length < 1) h.showError();
                      return s.filterPoints(result)
                    })
                    .then(() => {
                      h.setDataSet(selfExportModule, 'renderedPoints', 1);
                      w.checkRender();
                      _renderedCity = userCity;
                    })
                    .then(() => w.disableWaitScreen())
                };
                s.filterPoints = async ({result}) => {
                  deliveryPoints = result.filter((point) => point.active);
                  await deliveryPoints.forEach((el) => s.renderDeliveryPoints(el));

                  return s;
                };
                s.renderDeliveryPoints = ({address, work_schedule}) => {
                  const point = document.createElement('li');
                  h.handleClass(point,'add', 'delivery-selfExport__pickup-point');

                  const pointAddress = document.createElement('p');
                  h.handleClass(pointAddress,'add','delivery-selfExport__address');
                  h.setText(pointAddress, address);

                  const schedule = document.createElement('p');
                  h.handleClass(schedule,'add', 'delivery-selfExport__work-schedule');
                  h.setText(schedule, work_schedule);

                  point.append(pointAddress);
                  point.append(schedule);

                  pickupList.append(point);
                };

                return s;
              };

              s()
                .cleaPickupInput()
                .clearPickupList()
                .initiateApi()
                .handleRequest();

              return w;
            }

            return w;
          };
          w.disableWaitScreen = async () => {
            if (renderedPoints && _renderedCity) await h.disableWaitScreen();

            return w;
          };

          return w;
        };

        w()
          .setBlockScreen()
          .showModule()
          .showPickupSection()
          .setWaitScreen()
          .disableButton()
          .getUserCity()
          .setUserCity()
          .checkRender()
          .handleDeliveryPoints()
          .disableWaitScreen()
      };

      return module;
    };
    const eventListeners = ({ changeCity, showMap, confirmButton, pickupSection, cities, citiesList, selfExportModule, citiesSection, citySearchInput, pickupSearchInput, chosenCity }) => {
      let listenersList = [];
      let isCityRendered;
      let chosenPoint;
      
      eventListeners.create = () => {
        l.onCityConfirm = () => {
          const w = () => {
            w.removeEventListeners = () => {
              h.eventRemove(confirmButton, 'click', l.onCityConfirm);
              h.eventRemove(citiesList, 'click', l.onCityClick);
              h.eventRemove(citySearchInput, 'input', l.onCityInput);

              return w;
            };
            w.addEventListeners = () => {
              h.eventAdd(changeCity, 'click', l.onCityChange);
              h.eventAdd(pickupSearchInput, 'input', l.onPickupInput);

              return w;
            };
            w.showAllCities = () => {
              [...citiesList.children].forEach((city) => h.show(city));

              return w;
            };
            w.hidePickupSection = () => {
              h.hide(citiesSection);

              return w;
            };

            return w;
          };

          w()
            .removeEventListeners()
            .showAllCities()
            .addEventListeners()
            .hidePickupSection();

          module(options)
            .initiate();
        };
        l.onCityClick = (evt) => {
          const target = evt.target;
          if (h.hasClass(target, 'delivery-selfExport__city') || h.hasClass(target, 'delivery-selfExport__city-wrapper')) {
            const w = () => {
              w.setTextCity = () => {
                h.setText(chosenCity, target.textContent);

                return w;
              };
              w.handleButton = () => {
                h.activateButton(confirmButton, 'delivery-selfExport__confirm-btn--deactive');

                return w;
              };

              return w;
            };

            w()
              .setTextCity()
              .handleButton()
          }
        };
        l.onCityInput = _.partial(h.filterList, {
          itemList: 'cities',
          childClassName: '.delivery-selfExport__city-wrapper',
          wrapper: selfExportModule,
        });
        l.onCityInput = _.debounce(l.onCityInput(), 300);
        l.onCityChange = () => {
          const w = () => {
            w.setWaitScreen = () => {
              h.setWaitScreen();

              return w;
            };
            w.hidePickupSection = () => {
              h.hide(pickupSection);

              return w;
            };
            w.hideErrorSection = () => {
              h.hideError();

              return w;
            };
            w.showCitiesSection = () => {
              h.show(citiesSection);

              return w;
            };
            w.checkPreviousRender = () => {
              isCityRendered = h.getDataSet(selfExportModule, 'isCityRendered');

              return w;
            };
            w.renderCitiesList = () => {
              const createCity = (text) => {
                const wrapper = document.createElement('li');
                const city = document.createElement('p');

                city.classList.add('delivery-selfExport__city');
                wrapper.classList.add('delivery-selfExport__city-wrapper');
                city.textContent = text;
                wrapper.append(city);

                return wrapper;
              };
              if (!isCityRendered) cities.forEach((city) => citiesList.append(createCity(city)));
              h.setDataSet(selfExportModule, 'isCityRendered', 1);

              return w;
            };
            w.disableWaitScreen = () => {
              h.disableWaitScreen();

              return w;
            };
            w.disableConfirmButton = () => {
              h.disableButton(confirmButton, 'delivery-selfExport__confirm-btn--deactive');

              return w;
            };
            w.clearInput = () => {
              h.clearInput(citySearchInput);

              return w;
            };
            w.removeEventListeners = () => {
              h.eventRemove(changeCity, 'click', l.onCityChange);
              h.eventRemove(pickupSearchInput, 'input', l.onPickupInput);

              return w;
            };
            w.addEventListeners = () => {
              h.eventAdd(confirmButton, 'click', l.onCityConfirm);
              h.eventAdd(citiesList, 'click', l.onCityClick);
              h.eventAdd(citySearchInput, 'input', l.onCityInput);

              return w;
            };

            return w;
          };

          w()
            .setWaitScreen()
            .hidePickupSection()
            .hideErrorSection()
            .showCitiesSection()
            .checkPreviousRender()
            .renderCitiesList()
            .disableWaitScreen()
            .disableConfirmButton()
            .clearInput()
            .removeEventListeners()
            .addEventListeners()
        };
        l.onPickupInput = _.partial(h.filterList, {
          itemList: 'pickup',
          childClassName: '.delivery-selfExport__pickup-point',
          wrapper: selfExportModule,
        });
        l.onPickupInput = _.debounce(l.onPickupInput(), 300);

        return eventListeners;
      };
      eventListeners.add = () => {
        listenersList = [
          [changeCity, 'click', l.onCityChange],
          [showMap, 'click', l.onShowMapClick],
          [confirmButton, 'click', l.onConfirmButtonClick],
          [pickupSearchInput, 'input', l.onPickupInput]
        ];
        listenersList.forEach((listenerOptions) => h.eventAdd(listenerOptions[0], listenerOptions[1], listenerOptions[2]));

        return eventListeners;
      };

      return eventListeners;
    };

    module(options)
      .initiate();

    eventListeners(options)
      .create()
      .add();
  };

  window.deliverySelfExport = _.partial(handler, options);
}