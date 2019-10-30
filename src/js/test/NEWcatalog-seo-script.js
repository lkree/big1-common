(function() {
  let formStatus = 'closed';
  let currentStatus = 'car';

  const helpers = {
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
    let hasResult = helpers.isAvailable(options[0].value); //if no value => no result found

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

    if (!helpers.isAvailable$($laxForm)) return; //if no laxOptions -> exit

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
    console.log($formWrapper.innerHeight());

    if (goBack) {
      $carList.css('min-height', '600px');
      return;
    }

    if ($formWrapper.innerHeight() - 200 < 600) return;

    $carList.attr('style', `min-height: ${$formWrapper.innerHeight() - 200}px`);
  }; //calculates form height and adds to td model (needed to autoresize page)
  const formController = (status = 'open') => {
    const $form = $('.laximo-in-laxTecdoc');

    if (helpers.isAvailable$($form)) {
      if ($form.css('display') !== 'none' && status === 'close') {
        $form.slideUp(500);
        formStatus = "closed";
        return;
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
  const getCurrentType = () => {
    const url = new URL(window.location.href);
    if (url.searchParams.get('type') === 'car') return '.text__template--car';

    return '.text__template--truck';
  }; //gets current type of cars presents
  const laxFormInitialization = () => {
    const selectedType = getCurrentType();

    const value = document.querySelector(selectedType).content.querySelector('.cloned-lax-list').dataset.catalogType;
    laximo.init(value);
  };
  const chooseCurrentModel = () => {
    let cache = {};

    return function(name) {
      name = name.toLowerCase();
      const currentCache = helpers.cacheExtractor(cache, name);

      if (helpers.isAvailable(currentCache)) {
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
        const selectedType = getCurrentType(),
               options = document.querySelector(selectedType).content.querySelectorAll('.cloned-lax-list option'),
               values = compareModels()(name, options),
               resultsCount = values.length;
        console.log(options);

        switch(true) {
          case resultsCount === 0:
            helpers.cacheSaver(cache, name, 'not-found');
            laxFormInitialization();
            setTimeout(function() { optionsChanger([$('<option>', {text: 'В автоматическом режиме модификацию найти не удалось. Попробуйте самостоятельно.', value: ''})]) }, 1500);
            break;
          case resultsCount > 1:
            helpers.cacheSaver(cache, name, values);
            optionsChanger(values);
            break;
          default:
            helpers.cacheSaver(cache, name, values[0].value);
            laximo.init(values[0].value);
        }
      }
    };
  }; //laximoWizardyController
  const laximoWizardyController = chooseCurrentModel();
  const onDocumentClick = (evt) => {
    ;(function() {
      if (!evt.originalEvent.target.classList.contains('laximo-div-selector')) return;
      laximo.init(evt.originalEvent.target.dataset.id);
    })(); //opens lax-form when click on div-options
  };
  const onDomContentLoaded = () => {
    ;(function() {
      $(document).ready(function(){
        var laximo_wizard = new LaximoWizard();
        laximo_wizard.init();
      });
    })(); //parts-soft laximo initialization
  };

  (function() {
    $('.cars-catalog__item').on('click', onLiClick);
    $('.lx-b-lax-col-close').on('click', () => formController('close'));
    $(document).on('click', onDocumentClick);
    $(document).on('DOMContentLoaded', onDomContentLoaded);
  })(); //event-listeners
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