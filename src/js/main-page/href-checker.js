'use strict';

//Объект для хранения чеков соответствия URL
window.hrefChecker = {
  //Проверка на соответствие ссылки заданным параметрам
  laximoBreadcrumbs: function() {
    const brands = ['isuzu', 'kia', 'mercedes', 'daf', 'man', 'volvo', 'hyundai', 'iveco', 'renault', 'scania', 'toyota', 'bmw', 'mitsubishi', 'skoda', 'volkswagen', 'ford', 'nissan', 'audi', 'mazda', 'chevrolet', 'opel'];
    let brandHref;
    try {
      brandHref = href[4].split('?')[0]
    } catch {
      brandHref = href[4];
    }
      if (href[3] === 'original-catalog') return brands.includes(brandHref) && !href[5];
      if (
          href[3] === 'original-catalog' && 
          href[4].slice(0,9) === 'car-parts' 
          && href[5] === undefined
      ) {
          return true;
      } else if (
          href[3] === 'original-catalog' && 
          href[4].slice(0, 11) === 'truck-parts' && 
          href[5] === undefined
      ) {
          return true;
      }

      return false;
  },
  laximoScrolling: function() {
      if (
          href[3] === 'original-catalog' && 
          href[4].slice(0,9) === 'car-parts' 
          && href[5] === undefined
      ) {
          return true;
      } else if (
          href[3] === 'original-catalog' && 
          href[4].slice(0, 11) === 'truck-parts' && 
          href[5] === undefined
      ) {
          return true;
      }

      return false;
  },
  mainPage: function() {
      return href[2].slice(0, 7) === 'big1.ru' && !href[3] || href[2].slice(0, 7) === 'big1.ru' && href[3].slice(0,1) === '?';
  },
  laximoMainPage: function() {
      return href[3].slice(0,6) === 'laximo' && href[4] === undefined;
  },
  tecdcocBreadCrumbs: function() {
      if (href[3] === 'car_base' && href[4] !== undefined)
          if (href[4].slice(0,11) === 'truck-parts') {
              return true;
          } else if (href[4].slice(0,9) === 'car-parts') {
              return true;
          }
      return false;
  },
  autoChooser: function() {
      if (href[3] === 'fast-auto-chooser' && href[4] !== undefined) {
          if (href[4].slice(0,5) === 'truck' || href[4].slice(0,3) === 'car') {
              return true;
          }
      }
      return false;
  },
  bigService: function() {
      return href[3].slice(0,15) === 'vin_query_parts';
  },
  tecDocLinksProfileCreator: function() {
      return href[3].slice(0, 5) === 'autos' && href[4] === undefined;
  },
  vinAutoInfoGetter: function() {
    return href[3].slice(0, 9) === 'any_autos';
  },
  // laximoCatalogs: function() {
  //     const getParams = new URL(document.location).searchParams;
  //     return href[3] === 'laximo' && href[4] !== undefined && href[5] !== undefined && href[6] !== undefined && getParams.get('vin') !== null;
  // },
  registrationForm: function() {
      return href[3].slice(0,9) === 'customers' && href[4] === undefined;
  }
};