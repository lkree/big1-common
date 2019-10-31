(function() {
  $(document).on('DOMContentLoaded', function() {
    let formStatus = 'closed';
    let currentStatus = window.type;

    const h = {
      isAvailable: function(el) {
        return  !!el;
      },
      isAvailable$: function(el) {
        return !!el[0];
      },
      cacheSaver: function(cache, cellName, saveItem) {
        cache[cellName] = saveItem;
      },
      cacheExtractor: function(cache, cellName) {
        cache[cellName];
      }
    };
    const formCleaner = (form) => {
      Array.isArray(form) ?
        $(form).each((function() { $(this).remove() } )) :
        $(form).html('');
    };
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
      let hasResult = h.isAvailable(options[0].value); //if no value => no result found
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

      if (!h.isAvailable$($laxForm)) return; //if no laxOptions -> exit
      if (hasResult) { //if no id => no result found
        formCleaner($laxForm);
      } else {
        const previousData = [$('.laximo-div-selectors-wrapper'), $('.laximo-div-desctipion')];
        formCleaner(previousData);
      }

      $laxForm[0].prepend($wrapper[0]);
      optionsChangerHelper(hasResult);
    }; //transfers options to divs (handmade selfopen select)
    const bodyResizer = (goBack = false) => {
      const $formWrapper = $('.text'),
        $carList = $('.cars-catalog');
      if (typeof goBack === 'string') goBack = goBack === 'closed';
      if (goBack) {
        $carList.css('min-height', '600px');
        return;
      }
      if ($formWrapper.innerHeight() - 200 < 600) return;

      $carList.attr('style', `min-height: ${$formWrapper.innerHeight() - 200}px`);
    }; //calculates form height and adds to td model (needed to autoresize page)
    const formController = (status = 'open') => {
      const $form = $('.laximo-in-laxTecdoc');

      if (h.isAvailable$($form)) {
        if ($form.css('display') !== 'none' && status === 'close') {
          $form.slideUp(500);
          formStatus = "closed";
        } else {
          $form.slideDown(500);
          formStatus = "opened";
        }
      }
    };
    const onLiClick = (evt) => {
      laximoWizardyController(evt.currentTarget.querySelector('.cars-catalog__name').textContent);
      formController();
      scrollToForm(formStatus);
      bodyResizer(formStatus);
    };
    /**
     * @param status {string}
     * if @param 'closed' === return
     */
    const scrollToForm = (status) => {
      if (status === 'closed') return;

      const formY = $('.b-content')[0].offsetTop - 10;
      $('html').animate({scrollTop: formY}, 500);

      setTimeout(() => {
        $('.fast-menu-tabs__ul-first-level').removeAttr('style'); // removes top menu
        $('.b-bot-side').removeAttr('style'); // same thing
      }, 500);
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
      const selectedType = `.text__template--${currentStatus}`;

      const value = document.querySelector(selectedType).content.querySelector('.cloned-lax-list').dataset.catalogType;
      laximo.init(value);
    };
    const chooseCurrentModel = () => {
      let cache = {};

      return function(name) {
        name = name.toLowerCase();
        const currentCache = h.cacheExtractor(cache, name);

        if (h.isAvailable(currentCache)) {
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
          const selectedType = `.text__template--${currentStatus}`,
            options = document.querySelector(selectedType).content.querySelectorAll('.cloned-lax-list option'),
            values = compareModels()(name, options),
            resultsCount = values.length;

          switch(true) {
            case resultsCount === 0:
              h.cacheSaver(cache, name, 'not-found');
              laxFormInitialization();
              setTimeout(function() { optionsChanger([$('<option>', {text: 'В автоматическом режиме модификацию найти не удалось. Попробуйте самостоятельно.', value: ''})]) }, 1500);
              break;
            case resultsCount > 1:
              h.cacheSaver(cache, name, values);
              optionsChanger(values);
              break;
            default:
              h.cacheSaver(cache, name, values[0].value);
              laximo.init(values[0].value);
          }
        }
      };
    }; //laximoWizardyController
    const laximoWizardyController = chooseCurrentModel();
    const hideAllCars = () => {
      const carsWrappers = document.querySelectorAll('.cars-catalog__list');

      [...carsWrappers]
        .forEach((el) => el.classList.add('hidden'));
    };
    const onDocumentClick = (evt) => {
      ;(function() {
        if (!evt.originalEvent.target.classList.contains('laximo-div-selector')) return;
        laximo.init(evt.originalEvent.target.dataset.id);
      })(); //opens lax-form when click on div-options
      ;(function() {
        if (!evt.target.classList.contains('lx-wrap-btn-sm--help-btn')) return;

        const $pcChat = $('.chat_2j'),
          $mobileChat = $('.menuWrap_2V');

        if (h.isAvailable$($pcChat)) $pcChat[0].click();
        if (h.isAvailable$($mobileChat)) {
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
      })(); //onHelpButtonClick
    };
    const onTogglerChange = (changeStatus = true) => {
      hideAllCars();
      (function() {
        try {
          if (changeStatus) currentStatus = currentStatus === 'car' ? 'truck' : 'car';
          const content = document.querySelector(`.cars-catalog__list--${currentStatus}`);

          content.classList.remove('hidden');
        } catch(e) {
          console.log(e.message);
        }
      })(); //truck-car switcher
    };
    ;(function() {
      onTogglerChange(false);
      ;(function() {
        $(document).ready(function(){
          var laximo_wizard = new LaximoWizard();
          laximo_wizard.init();
        });
      })(); //parts-soft laximo initialization
    })();

    (function() {
      $('.cars-catalog__item').on('click', onLiClick);
      $('.lx-b-lax-col-close').on('click', () => formController('close'));
      $(document).on('click', onDocumentClick);
      $('.car-type-toggler__checkbox').on('change', onTogglerChange);
    })(); //event-listeners
  });
})();








// result = $(document.createElement('main')).append([...document.querySelectorAll('.cars-catalog__item')].map((el) => {
//   wrapper = el.cloneNode();
//   imgWrapper = el.querySelector('.model-link-div').cloneNode();
//   img = el.querySelector('img').cloneNode();
//   carName = el.querySelector('.car-base-list-name').cloneNode();
//
//   carName.textContent = carName.textContent.split(' ')[0];
//
//   imgWrapper.append(img);
//   wrapper.append(imgWrapper);
//   wrapper.append(carName);
//   return wrapper;
// }));