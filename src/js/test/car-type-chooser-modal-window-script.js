(function() {
  const imgPositionFixer = () => {
    $('.car-type-chooser-modal-window__checkbox img').css({objectPosition: '0 15px', objectFit: 'unset'});
  };
  const imgSwitcher = () => {
    const carImg = $('.car-type-chooser-modal-window__car-checkbox img'),
          truckImg = $('.car-type-chooser-modal-window__truck-checkbox img'),
          newCarImgSrc = $('.cars-catalog__list--car .cars-catalog__img').first().attr('src'),
          newTruckImgSrc = $('.cars-catalog__list--truck .cars-catalog__img').first().attr('src');

    carImg.attr('src', newCarImgSrc);
    truckImg.attr('src', newTruckImgSrc);

    return true;
  };
  const imgController = () => {
    imgSwitcher() ? imgPositionFixer() : '';
  };
  (function() {
    const params = function(name) {
      const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

      if (!results) {
        return null;
      }

      return decodeURI(results[1]) || 0;
    };
    const preloaderWindow = $('.car-type-chooser-preloader');

    if (params('type') === null) {
      imgController();
      preloaderWindow.removeClass('hidden');
      $('.b-header, .b-top-side').css('z-index', '0');

      const onClick = (evt) => {
        if (evt.originalEvent.target !== preloaderWindow[0]) return;

        $('.b-header, .b-top-side').css('z-index', '3');
        preloaderWindow.addClass('hidden');

        preloaderWindow.off('click', onClick);
      };

      preloaderWindow.on('click', onClick);
    };
  })();
  (function() {
    $(document).on('DOMContentLoaded', (evt) => {
      const urlParam = (name) => {
        const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) return null;

        return decodeURI(results[1]) || 0;
      };

      const param = urlParam('type');

      if (param === 'truck') window.type = 'truck';
      else {
        window.type = 'car';
        $('.car-type-toggler__checkbox')[0].click();
      }
    });
  })(); //switchs content according to get param (type)
})();