(function() {
  const cookie = {
    get: function(name) {
      const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));

      return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    create: function(cookieName, cookieValue, dateValue = 1900000000000) {
      document.cookie = `${cookieName}=${cookieValue};secure;expires=${new Date(dateValue)}`;
  },
    delete: function(name) {
      this.create(name, "", -1);
    }
  };
  const isAvailable = {
    vanilla: function(element) {
      return !!element;
    },
    jquery: function(element) {
      return !!element[0];
    }
  };
  const showRegInfo = () => {
    const $registration = $('.b-popup-enter').clone();

    $registration.css('display') === 'block' ? registration.css('display', 'none') :
      $registration.css({
        'display'  : 'block',
        'position' : 'fixed',
        'top'      : 'calc(50vh - 85px)',
        'left'     : 'calc(50vw - 150px)',
        'z-index' : '11'
      });
    $(document.body).prepend($registration);
  };
  const blockPage = () => {
    const $blockPage = $('<div>', {
      class: 'block-page__div',
      css: {
        'background' : 'rgba(0, 0, 0, 0.4)',
        'z-index' : '10',
        'opacity' : '0.3',
        'width' : '100vw',
        'height' : '100vh',
        'position' : 'absolute'
      }
    });
    $(document.body).prepend($blockPage);
    $(document.body).css({
      'overflow' : 'hidden'
    });
  };

  const $enterLink = $('.b-enter-link'),
        unRegistered = isAvailable.jquery($enterLink);

  if (!unRegistered) {
    cookie.get('blockClick') ? cookie.delete('blockClick') : '';
    return;
  };
  const maxClicksCount = 6;

  const onMouseClick = () => {
    let clicksCount = 0;
    const alreadyHasBlock = cookie.get('blockClick');

    return function() {
      if (clicksCount < maxClicksCount && !alreadyHasBlock) ++clicksCount;
      else {
        if (!isAvailable.jquery($('.block-page__div'))) {
          cookie.create('blockClick', 'true');
          blockPage();
          showRegInfo();
        }
      }
    };
  };
  document.addEventListener('click', onMouseClick());
})();