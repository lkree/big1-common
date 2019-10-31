(function() {
  const params = function(name) {
    const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);

    if (results === null) {
      return null;
    }

    return decodeURI(results[1]) || 0;
  };
  const preloaderWindow = $('.car-type-chooser-preloader');

  if (params('type') === null) {
    preloaderWindow.removeClass('hidden');
    $('.b-header, .b-top-side').css('z-index', '0');

    const onClick = (evt) => {
      if (evt.originalEvent.target !== preloaderWindow[0]) return;

      $('.b-header, .b-top-side').css('z-index', '3');
      preloaderWindow.addClass('hidden');
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