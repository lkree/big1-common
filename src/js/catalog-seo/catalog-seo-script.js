'use strict';
;(function() {
  const isAvailable = (element) => !!element;
  const isAvailable$ = (element) => !!element[0];
  const showRegistrationInfo = () => {
    const registration = $('.b-popup-enter');

    registration.css('display') === 'block' ? registration.css('display', 'none') :

      registration.css({
        'display'  : 'block',
        'position' : 'fixed',
        'top'      : 'calc(50vh - 85px)',
        'left'     : 'calc(50vw - 150px)'
      });
  };
  class LaximoWizardy {
    init(e) {
      if (!e) return;
      const scope = this, value = e.split(" ");

      return scope.get_wizard(value);
    };

    get_wizard(value) {
      let catalog_code, href, key, wizard_id;
      catalog_code = value[0];
      if (value[1] === 'no') {
        key = "";
      } else {
        key = value[1];
      }
      if (value[2] === 'no') {
        wizard_id = "";
      } else {
        wizard_id = value[2];
      }
      href = window.location.href.split('/');
      if (href[4] === void 0) {
        return $.get(`laximo/${catalog_code}/wizard?key=${key}&wizard_id=${wizard_id}`);
      } else {
        return $.get(`https://big1.ru/laximo/${catalog_code}/wizard?key=${key}&wizard_id=${wizard_id}`);
      }
    }
  };
  const laximo = new LaximoWizardy();
  const laxFormInitialization = () => {
    const value = document.querySelector('.tabn:not(.hidden) .cloned-lax-list').dataset.catalogType;
    laximo.init(value);
  };
  const cacheSaver = (cache, cellName, saveItem) => cache[cellName] = saveItem;
  const cacheExtractor = (cache, cellName) => cache[cellName];
  const bodyResizer = (goBack = false) => {
    const $formWrapper = $('.laximo-in-laxTecdoc'),
           $carList = $('.td-model');

    if (goBack) {
      $carList.css('min-height', '600px');
      return;
    }

    if ($formWrapper.innerHeight() - 200 < 600) return;

    $carList.attr('style', `min-height: ${$formWrapper.innerHeight() - 200}px`);
  }; //calculates form height and adds to td model (needed to autoresize page)
  const optionsChangerHelper = (result = true) => {
    const $select = $('.lx-vin-search-module .js-laximo-wizard-select'),
           $separator = $('.lx-wrap-ss'),
           $laxForm = $('#js-laximo-wizard-options .lx-b-sel-tm'),
           $acceptButton = $('.lx-wrap-btn-sm'),
           $description = $('<label>', {
             text: 'Выберите модификацию',
             class: 'laximo-div-desctipion'
           });

    if (result) {
      $select.remove();
      $acceptButton.remove();
      $separator.remove();
    }

    $laxForm[0].prepend($description[0]);
  }; //clean lax separator and removes select
  const optionsChanger = (options) => {
    let hasResult = isAvailable(options[0].value); //if no value => no result found

    const $wrapper = $('<div>', {
      class: 'laximo-div-selectors-wrapper'
    });

    $(options).each(function() {
      const option = $('<div>', {
        text: $(this).text(),
        class: hasResult ? 'laximo-div-selector' : 'laximo-div-selector--no-hover',
        'data-id': $(this).val()
      });

      option.appendTo($wrapper);
    });

    const $laxForm = $('#js-laximo-wizard-options .lx-b-sel-tm');

    if (!isAvailable$($laxForm)) return; //if no laxOptions -> exit

    if (hasResult) { //if no id => no result found
      formCleaner($laxForm);
    } else {
      const previousData = [$('.laximo-div-selectors-wrapper'), $('.laximo-div-desctipion')];
      formCleaner(previousData);
    }

    $laxForm[0].prepend($wrapper[0]);
    optionsChangerHelper(hasResult);
  }; //transfers options to divs (handmade selfopen select)
  const compareModels = () => {
    let values = [];

    return function(name, options) {
      [...options].forEach((el) => {
        name = name.toLowerCase();
        const laxName = el.textContent.toLowerCase();
        if (~laxName.indexOf(name)) {
          const copyEl = el.cloneNode(true);
          values.push(copyEl);
        }
      });

      return values;
    }
  }; //compare name with names in list
  const chooseCurrentModel = () => {
    let cache = {};

    return function(name) {
      name = name.toLowerCase();
      const currentCache = cacheExtractor(cache, name);

      if (isAvailable(currentCache)) {

        if (Array.isArray(currentCache)) {
          optionsChanger(currentCache);
          return;
        }

        if (currentCache === 'not-found') {
          laxFormInitialization();
          setTimeout(function() { optionsChanger([$('<option>', {text: 'В автоматическом режиме модификацию найти не удалось. Попробуйте самостоятельно.', value: ''})]) }, 1500);
          return;
        }

        laximo.init(cache[name]);
      }
      else {
        const options = document.querySelectorAll('.tabn:not(.hidden) .cloned-lax-list option'),
               values = compareModels()(name, options),
               resultsCount = values.length;

        switch(true) {
          case resultsCount === 0:
            cacheSaver(cache, name, 'not-found');
            laxFormInitialization();
            setTimeout(function() { optionsChanger([$('<option>', {text: 'В автоматическом режиме модификацию найти не удалось. Попробуйте самостоятельно.', value: ''})]) }, 1500);
            break;
          case resultsCount > 1:
            cacheSaver(cache, name, values);
            optionsChanger(values);
            break;
          default:
            cacheSaver(cache, name, values[0].value);
            laximo.init(values[0].value);
        }
      }
    };
  }; //laximoWizardyController
  const formCleaner = (form) => {
    Array.isArray(form) ?
      $(form).each((function() { $(this).remove() } )) :
      $(form).html('');
  };
  const scrollToForm = () => {
    const formY = $('.b-content')[0].offsetTop - 10;
    $('html').animate({scrollTop: formY}, 500);

    setTimeout(() => {
      $('.fast-menu-tabs__ul-first-level').removeAttr('style'); // removes top menu
      $('.b-bot-side').removeAttr('style'); // same thing
    }, 500);
  };
  const laximoWizardyController = chooseCurrentModel();
  // const laxFormInitialization = () => {
  //   const catalogs = document.querySelectorAll('[data-catalog-type]'),
  //          tempLax = new LaximoWizardy();
  //   let values = [];
  //
  //   [...catalogs].forEach(function(catalog) {
  //     values.push(catalog.dataset.catalogType);
  //   });
  //
  //   values.forEach(function(value, index) {
  //       tempLax.init(value);
  //
  //       setTimeout(() => {
  //         const fetchedList = $('.lx-b-lax-col .js-laximo-wizard-select').clone();
  //         let $wrapper = $('#cloned-lax-list');
  //         if (!$wrapper[0]) {
  //           $wrapper = $('<div>', {
  //             'style': 'display: none',
  //             'id': 'cloned-lax-list'
  //           });
  //
  //           $('body').append($wrapper);
  //         };
  //
  //         $wrapper
  //           .html(fetchedList);
  //
  //         $wrapper.find('option').each(function() {
  //           let textContent = $(this)
  //             .text()
  //             .replace(/é/gi, 'e');
  //           $(this).text(textContent);
  //       }, 2000);
  //     });
  //   });
  // } //upload laximo catalogs to form

  ;(function() {
    $(document).ready(function(){
      var laximo_wizard = new LaximoWizard();
      laximo_wizard.init();
    });
  })(); //parts-soft laximo initialization
  ;(function() {
    (function() {
      const toggler = document.querySelector('.car-type-toggler__checkbox');

      if (!isAvailable(toggler)) return;
      toggler.checked = false;
    })(); //togglerReconstructor
    // (function() {
    //   const cars = document.querySelectorAll('.model-link-div');
    //   const onCarClick = (evt) => {
    //     location.assign(evt.currentTarget.dataset.href);
    //   };
    //
    //   Array.from(cars)
    //     .forEach((el) => {
    //       el.addEventListener('click', onCarClick);
    //     });
    // })(); //link creator
    // (function() {
    //   if (!isAvailable$($('.lx-b-lax-container select'))) return; //if no selectos on page
    //
    //   const $unnecessaryElement = $('.lx-b-lax-col .lx-b-lax-container > .lx-sel-or').first();
    //   $unnecessaryElement.css('display', 'none');
    //
    //   const $tempHeader = $('<div></div>', {
    //       text: 'Поиск по VIN ↓',
    //       class: 'VIN-search-button'
    //     }).css({
    //       'font-weight' : '700',
    //       'font-size' : '16px',
    //       'border' : '1px solid',
    //       'padding' : '10px 5px'
    //     }),
    //     $wrapper = $('.lx-vin-search-module');
    //
    //   $wrapper.prepend($tempHeader);
    //
    //   $('.lx-b-search-container').first().slideUp();
    // })(); //laximo search page handler
    (function() {
      if (!isAvailable$($('.lx-b-lax-container select'))) return; //if no selectos on page

      const separator = $('<em>', {text: 'или'}),
             separatorWrapper = $('<div>', {class: 'lx-sel-or'});
      separatorWrapper.append(separator);

      $('.lx-vin-search-module').each(function() {
        if ($(this).find('.lx-sel-or')) $(this).find('.lx-sel-or').css('display', 'block');
        else $(this).find('.lx-b-search-container').after(separatorWrapper);
      });

      const $wrapper = $('<div>', {class: 'temp-lax-open-btn lx-btn-sm', text: 'Подобрать по параметрам', css: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }
      });
      $('.lx-vin-search-module').append($wrapper);
      $('.laximo').slideUp();
    })();
  })(); //handlers
  ;(function() { //event listeners
    const onDOMContentLoaded = () => {
      (function() {
        const carsWrapper = $('.td-model')[0],
          cars = carsWrapper.querySelectorAll('li');

        [...cars]
          .map((car) => {
            car.querySelector('img').removeAttribute('style');
          });
      })(); //carSorter
      (function() {
        const imgStyleFixer = (params) => {
          function imgFix(src, cssStyle) {
            [...document.images].forEach((img) => {
              if (img.src === src) {
                img.setAttribute('style', cssStyle);
              }
            });
          };

          params.forEach((param) => {
            const { src, style } = param;

            if (Array.isArray(src)) {
              src.forEach((link) => {
                imgFix(link, style);
              });
              return;
            };

            imgFix(src, style);
          });
        };
        const linksWStyles = [
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/default.gif'
            ],
            style: 'margin-top: 0 !important'
          }, //margin 0px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/3093/575_23_original_original.jpg'
            ],
            style: 'margin-top: 30px !important'
          }, //margin 30px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/3630/587_3439_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/3612/587_500_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/3611/587_488_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/1079/525_3388_original_original.jpg'
            ],
            style: 'margin-top: -20px !important'
          },//margin -20px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/3676/587_440_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/3672/587_436_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/3595/587_3943_original_original.jpg'
            ],
            style: 'margin-top: -14px !important'
          }, //margin -14px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/3703/587_1629_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/3701/587_3889_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/1215/525_2022_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/1231/517_4180_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/2103/553_3909_original_original.jpg'
            ],
            style: 'margin-top: -10px !important'
          }, //margin -10px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/5509/13_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5466/16_original_original.jpg'
            ],
            style: 'margin-top: -30px !important'
          }, //margin-top: -30px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/1078/525_3449_original_original.jpg'
            ],
            style: 'margin-top: -79px !important'
          }, //margin-top -79px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/4723/9_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5515/6_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5474/15_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5472/14_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5471/19_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5477/12_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5470/9_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5469/18_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5467/17_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5508/10_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5465/20_original_original.jpg'
            ],
            style: 'margin-top: -44px !important'
          }, //margin-top -44px
          {
            src: [
              'https://api.parts-soft.ru/system/car_base_model/5514/5_original_original.jpg',
              'https://api.parts-soft.ru/system/car_base_model/5476/11_original_original.jpg'
            ],
            style: 'margin-top: -48px !important'
          } //margin-top: -48px
        ];
        imgStyleFixer(linksWStyles);
      })(); //partsSoft (tecdoc) images corrector (fixes -53 margin-top)
    };
    // const onVinInfoWrapperClick = (evt) => {
    //   (function() {
    //     const $wrapper = $('.tabn:not(.hidden) .tecdoc-lax-page__where-to-find-VIN-wrapper');
    //
    //     $wrapper.toggleClass('hidden');
    //   })(); //VIN-info shower
    // };
    const onTogglerChange = (evt) => {
      (function() {
        try {
          const content = document.querySelectorAll('.tabn');
          // h1TitleSwitcher();

          for (const tab of content) {
            tab.classList.toggle('hidden');
          }
        } catch(e) {
          console.log(e.message);
        }
      })(); //truck-car switcher
      hideAllCars();
      // laxFormInitialization();
    };
    const onDocumentClick = (evt) => {
      ;(function() {
        const $leftBtns    = $('.tecdoc-cars-btns-wrapper__catalog-btn'),
          $rightBtns   = $('.tecdoc-cars-btns-wrapper__catalog-btn--second'),
          $btnsWrapper = $('.tecdoc-cars-btns-wrapper');

        ;(function() {
          $leftBtns.text('Каталоги');
          $rightBtns.text('Помощь');
        })(); // changes buttons text (temp version)


        function closeBigBtns(evt) {
          evt.stopImmediatePropagation();

          $leftBtns.removeClass('activated');

          $btnsWrapper.css({
            'top' : '195px',
            'margin' : '10px 0 0 0',
            'transition' : 'top 1s ease'
          });

          $leftBtns.css({
            'font-size' : '14px',
            'font-weight' : '400',
            'align-items' : 'unset',
            'font-family' : 'inherit'
          });

          $leftBtns.text('Каталоги');
          $rightBtns.text('Помощь');
        };

        if ($leftBtns.hasClass('activated') && !evt.originalEvent.target.classList.contains('model-item')) closeBigBtns(evt);
      })(); //works with tecdoc buttons && changes buttons text (temp version)
      ;(function() {
        if (!evt.originalEvent.target.classList.contains('laximo-div-selector')) return;
        laximo.init(evt.originalEvent.target.dataset.id);
      })(); //opens lax-form when click on div-options
      // ;(function() {
      //   if (!evt.originalEvent.target.dataset.remote) return;
      //
      //   const activeTab = document.querySelector('.[data-status="1"]');
      //   laximoWizardyController(activeTab.textContent);
      // })();
      ;(function() {
        const $btn = $('.temp-lax-open-btn');
        if (evt.target === $btn[0]) {
          $btn.css('display', 'none');
          $('#js-laximo-wizard-options').slideDown();
          $('.laximo').slideDown();
          $('#js-laximo-chassis-options').slideDown();
          bodyResizer();
        }
      })(); // on temp-lax-open-btn click
    };
    const onLiClick = (evt) => {
      (function() {
        evt.stopImmediatePropagation();

        const $leftBtn = $(evt.currentTarget).find('.tecdoc-cars-btns-wrapper__catalog-btn'),
          $rightBtn = $(evt.currentTarget).find('.tecdoc-cars-btns-wrapper__catalog-btn--second'),
          $btnsWrapper = $(evt.currentTarget).find('.tecdoc-cars-btns-wrapper');

        if ($leftBtn.hasClass('activated')) return;

        $(evt.originalEvent.target).css({
          'position' : 'relative'
        });

        $btnsWrapper.css({
          'top' : '0',
          'margin' : '0',
          'transition' : 'top 1s ease',
          'align-items' : 'center'
        });

        $leftBtn.css({
          'display' : 'flex',
          'align-items' : 'center',
          'justify-content' : 'center',
          'font-size' : '18px',
          'font-weight' : '700',
          'font-family' : 'MyriadPro'
        });

        $leftBtn.text('Каталог запчастей');
        $rightBtn.text('Задать вопрос специалисту');

        $leftBtn.addClass('activated');
      })(); //shows full buttons
    };
    const onBtnClick = (evt) => {
      evt.preventDefault();

      (function() {
        evt.originalEvent.stopPropagation();
        const $ul = $('.td-model');

        if (evt.originalEvent.target.classList.contains('tecdoc-cars-btns-wrapper__catalog-btn--second')) {
          (function() {
            // const link = $(evt.originalEvent.target).parent().prev().data('href');
            // window.location.assign(link);
            const $pcChat = $('.chat_2j'),
                  $mobileChat = $('.menuWrap_2V');

            if (isAvailable$($pcChat)) $pcChat[0].click();
            if (isAvailable$($mobileChat)) {
              $('.container_3P').css({
                'display' : 'block',
                'opacity' : '1',
                'top' : '25px',
                'z-index' : '12312313'
              });
              $('.wrap_2g').addClass('_show_10');
              $mobileChat.css({
                'position' : 'fixed',
                'bottom' : '0',
                'left' : '0'
              });
              const windowUnlocker = () => {
                $('.container_3P').css({
                  'display' : 'none',
                  'opacity' : '0'
                });
                document.removeEventListener('touchstart', windowUnlocker);
              };
              document.addEventListener('touchstart', windowUnlocker);
            };
            $ul.css({'background' : 'url(/images/another-images/seo-catalogs/seo-catalogs-girl-bg-4.png) no-repeat right top'});
          })(); //tecdoc btn handler (redirects to tecdoc car page)
        } else {
          (function() {
            // const $enterLink = $('.b-enter-link');
            //
            // if (isAvailable$($enterLink)) {
            //   showRegistrationInfo();
            //   return;
            // };

            const $form = $('.laximo-in-laxTecdoc');
            if (isAvailable$($form) && $form[0].style.display !== 'none') {
              $form.slideUp(500);
              bodyResizer(true);
              $('#js-laximo-wizard-options').slideUp();
              $('.laximo').slideUp();
              $('#js-laximo-chassis-options').slideUp();
              $('.temp-lax-open-btn').css('display', 'flex');
              return;
            };

            bodyResizer();
            $form.slideDown(500);
            scrollToForm();
            $ul.css({'background' : 'url(/images/another-images/seo-catalogs/seo-catalogs-girl-bg-3.png) no-repeat right top'});
          })(); //laximo btn handler (shows form)
        }
      })(); //laximo tecdoc btns handler into li
    };
    const onVINSearchClick = (evt) => {
      (function() {
        const $VINSearchButton  = $('.VIN-search-button'),
          $VINSearchWrapper = $('.lx-b-search-container');

        if ($VINSearchWrapper[0].style.display === 'none') {
          $VINSearchButton.hide();
          $VINSearchWrapper.slideDown();
          return;
        }

        $VINSearchButton.show();
        $VINSearchWrapper.slideUp();
      })(); //show vin search input
    };
    const hideAllCars = () => {
      const carsWrapper = document.querySelector('.td-model');

      const cars = carsWrapper.querySelectorAll('li'),
        carTabs = document.querySelectorAll('.car-chooser-list-tecdoc__point');

      [...cars]
        .forEach((el) => el.style.display = 'none');

      [...carTabs]
        .forEach((el) => el.classList.remove('active'));
    };
    const carSorter = (carMark) => {
      const carsWrapper = document.querySelector('.td-model');

      const cars = carsWrapper.querySelectorAll('li');
      carMark = carMark
        .toUpperCase()
        .replace('-', '')
        .replace(' ', '');

      [...cars]
        .map((el) => {
          if (~el.dataset.name.indexOf(carMark)) {
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
    };
    const carController = (clickedElement) => {
      if (!isAvailable(clickedElement.classList.contains('car-chooser-list-tecdoc__point'))) return;

      const carShowBtns = document.querySelectorAll('.car-chooser-list-tecdoc__point'),
            $ul = $('.td-model'),
            $form = $('.laximo-in-laxTecdoc');

      hideAllCars();
      $ul.css({'background' : 'url(/images/another-images/seo-catalogs/seo-catalogs-girl-bg-1.png) no-repeat right top'});
      $form.slideUp(500);
      $('#js-laximo-wizard-options').slideUp();
      $('.laximo').slideUp();
      $('#js-laximo-chassis-options').slideUp();
      $('.temp-lax-open-btn').css('display', 'flex');

      [...carShowBtns]
        .forEach((el) => {
          if (el.dataset.status === '1') {
            el.dataset.status = '0';
          } else if (el.dataset.status === '0' && el === clickedElement) {
            $ul.css({'background' : 'url(/images/another-images/seo-catalogs/seo-catalogs-girl-bg-2.png) no-repeat right top'});
            clickedElement.dataset.status = '1';
            el.classList.toggle('active');
            carSorter(clickedElement.textContent);
            laximoWizardyController(clickedElement.textContent);
          }
        });
    };
    // const h1TitleSwitcher = () => {
    //   if (!isAvailable(document.querySelector('#car-type-toggler__checkbox'))) return;
    //
    //   const h1 = document.querySelector('h1'),
    //          h1Text = h1.textContent.split(' ');
    //
    //   if (h1Text[1] === 'каталоги') {
    //     h1Text.splice(1,0,'грузовые');
    //     h1.textContent = h1Text.join(' ');
    //     return;
    //   }
    //
    //   h1Text[1] === 'грузовые' ? h1Text.splice(1,1,'легковые') : h1Text.splice(1,1,'грузовые');
    //   h1.textContent = h1Text.join(' ');
    // };

    $(document).on('DOMContentLoaded', onDOMContentLoaded);
    // $(document).on('DOMContentLoaded', h1TitleSwitcher);
    // $('.lx-b-lax-container--tecdoc-lax-page').on('click', onVinInfoWrapperClick);
    $('.car-type-toggler').on('change', onTogglerChange);
    $(document).on('click', onDocumentClick);
    $('.model-item').on('click', onLiClick);
    $('.tecdoc-cars-btns-wrapper__catalog-btn').on('click', onBtnClick);
    $('.VIN-search-button').on('click', onVINSearchClick);
    $('.lx-b-lax-col-close').on('click', onBtnClick);
    $(document).on('click', (evt) => carController(evt.target));
    $(document).on('keydown', (evt) => evt.originalEvent.keyCode === 27 ? hideAllCars() : undefined);
  })(); //event listeners
})();