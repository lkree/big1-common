window.kladrController = function(value) {
  if (!value) return;
  function screenHandler() {
    var waitScreen = document.querySelector('.preloader-mini');

    screenHandler.setWaitScreen = function() {
      waitScreen.classList.remove('hidden');

      return screenHandler;
    };
    screenHandler.disableWaitScreen = function() {
      waitScreen.classList.add('hidden');

      return screenHandler;
    };

    return screenHandler;
  };
  function getCityKladr(value, callback) {
    var data = JSON.stringify({
      "id": "JsonRpcClient.js",
      "jsonrpc": "2.0",
      "method": "suggestSettlement",
      "params": {
        "query": value,
        "country_code": "RU"
      }
    });

    fetch('https://api.shiptor.ru/public/v1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(function(result) {
        return result.ok ? result.json() : screenHandler().disableWaitScreen();
      })
      .then(function(result) {
        callback(result);
      })
  }
  function resultHandle(result) {
    function handle(data) {
      var kladrId;
      var wrapper = function () {
        return wrapper;
      };

      wrapper.hideMap = function() {
        window.JCShiptorWidgetPvz.hide();

        return wrapper;
      };
      wrapper.getKladrId = function() {
        kladrId = data.result[0].kladr_id;

        return wrapper;
      };
      wrapper.setKladrId = function() {
        window.JCShiptorWidgetPvz.setParams({location:{kladr_id: kladrId}});
        window.JCShiptorWidgetPvz.refresh();

        return wrapper;
      };
      // wrapper.getOffers = function() {
      //   var data = JSON.stringify({
      //     "id": "JsonRpcClient.js",
      //     "jsonrpc": "2.0",
      //     "method": "calculateShipping",
      //     "params": {
      //       "length": 10,
      //       "width": 10,
      //       "height": 10,
      //       "weight": 1,
      //       "cod": 0,
      //       "declared_cost": 0,
      //       "kladr_id": widget.dataset.kladr || '77000000000',
      //       "courier": widget.dataset.courier || 'pvz'
      //     }
      //   });
      //   fetch('https://api.shiptor.ru/public/v1', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: data,
      //   })
      //     .then(function(result) {
      //       return result.json()
      //     })
      //     .then(function(result) {
      //       var handle = function(data) {
      //       };
      //       handle(result);
      //     });
      // };

      return wrapper;
    };

    var controller = handle(result);

    controller
      .getKladrId()
      .setKladrId()
      .hideMap();

    screenHandler()
      .disableWaitScreen();
  };

  screenHandler().setWaitScreen();
  getCityKladr(value, resultHandle);
};
window.mapController = function() {
  var select = document.querySelector('#apiship_delivery_variant');
  function h() {
    h.showMap = function() {
      var link = document.querySelector('.pvz-initiator');
      link.click();

      return h;
    };
    h.hideSelect = function() {
      var select = document.querySelector('tr[role=delivery-point-code-row]');
      select.classList.add('hidden');

      return h;
    };

    return h;
  };

  if (select.value === '2') {
    h()
      .showMap()
      .hideSelect()
  }
};
{
  var onDomContentLoaded = function() {
    var shiptorWidget = document. querySelector('#shiptor_widget_pvz');
    var onShiptorSubmit = function(evt) {
      var handler = function(address, options) {
        var street;
        var streetNumber;
        var match;
        var streetValue;
        var nativeSelect = document.querySelector('tr[role=delivery-point-code-row] select');
        var nativeSelectWrapper = nativeSelect.parentNode.parentNode;
        var wrapper = function() {
          return wrapper;
        };
        var searchString = function(array, subString) {
          return [...array].filter(function(element) {
            var string = element.textContent.toLowerCase();
            subString = subString.toString().toLowerCase();

            return ~string.indexOf(subString);
          });
        };

        wrapper.getStreet = function() {
          street = address.split(',')[1].split(' ')[2].toLowerCase();

          return wrapper;
        };
        wrapper.setStreetValue = function(value) {
          streetValue = value;

          return wrapper;
        };
        wrapper.getStreetNumber = function() {
          streetNumber = parseInt(address.split(',')[2].trim());

          return wrapper;
        };
        wrapper.findMatchByStreet = function() {
          match = searchString(options, street);

          return wrapper;
        };
        wrapper.findByStreetNumber = function() {
          match = searchString(match, streetNumber);

          return wrapper;
        };
        wrapper.checkConditions = function() {
          if (match.length > 1) wrapper.getStreetNumber().findByStreetNumber();
          if (match.length === 0) wrapper.showNativeSelect().markSelect();
          if (match.length === 1) wrapper.setStreetValue(match[0].value)._handleNativeSelect();

          return wrapper;
        };
        wrapper._handleNativeSelect = function() {
          $(nativeSelect).val(streetValue).change();
        };
        wrapper.showNativeSelect = function() {
          nativeSelectWrapper.classList.remove('hidden');

          return wrapper;
        };
        wrapper.markSelect = function() {
          nativeSelectWrapper.style.background = 'lightpink';
          var setTransparentBg = function() {
            nativeSelectWrapper.style.background = 'transparent';
          };

          setTimeout(setTransparentBg, 3000);

          return wrapper;
        };

        return wrapper;
      };

      var f = handler(evt.detail.address, document.querySelectorAll('#apiship_point_code option'));
      f
        .getStreet()
        .findMatchByStreet()
        .checkConditions()
    };

    shiptorWidget.addEventListener('onPvzSelect', onShiptorSubmit);
  };

  document.addEventListener('DOMContentLoaded', onDomContentLoaded);
}