'use strict';

(function() {
  $(document).ready(function(){
    var laximo_wizard = new LaximoWizard();
    laximo_wizard.init();
  });
})();

const carSorter = () => {
  const carsWrapper = $('.td-model')[0],
        cars = carsWrapper.querySelectorAll('li');

  Array.from(cars)
    .map((car) => {
      car.removeAttribute('style');
    });
};

(function() { //link creator
  const cars = document.querySelectorAll('.model-link-div');
  const onCarClick = (evt) => {
    location.assign(evt.currentTarget.dataset.href);
  };

  Array.from(cars)
    .forEach((el) => {
      el.addEventListener('click', onCarClick);
    });

  (function() { //VIN-info shower
    const button = document.querySelector('.lx-b-lax-container--tecdoc-lax-page');

    const onButtonClick = (evt) => {
      const wrapper = document.querySelector('.tecdoc-lax-page__where-to-find-VIN-wrapper');

      wrapper.classList.toggle('hidden');
    };

    button.addEventListener('click', onButtonClick);
  })();
})();

this.LaximoWizard = class LaximoWizard {
  init() {
    var scope;
    scope = this;
    $('#js-laximo-wizard-options').on('change', '.js-laximo-wizard-select', function(e) {
      var value;
      value = e.target.value.split(" ");
      return scope.get_wizard(value);
    });
  }
};




class LaximoWizardy {
  init(e) {
    var scope;
    scope = this;

    var value;
    value = e.split(" ");
    return scope.get_wizard(value);
  };

  get_wizard(value) {
    var catalog_code, href, key, wizard_id;
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