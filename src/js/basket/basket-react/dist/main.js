!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return a.a.createElement("button",t,"Продолжить")};function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=function(e){return Array.isArray(e)?e.reduce((function(e,t){var r,n;return e[t]=(r=t,(n=document.cookie.match(new RegExp("(?:^|; )"+r.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(n[1]):void 0),e}),{}):e},r=c(Object(n.useState)(t(e)),2),a=r[0],o=r[1];return Object(n.useEffect)((function(){a&&Object.keys(a)[0]&&Object.keys(a).forEach((function(e){return a[e]&&function(e,t){var r={path:"/",secure:!0,expires:new Date(Date.now()+115864e7)},n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var a in r){n+="; "+a;var o=r[a];!0!==o&&(n+="="+o)}document.cookie=n}(e,a[e])}))}),[a]),[a,function(){return o((function(e){return t(Object.keys(e))}))}]};function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=Object(n.createContext)([{},function(){}]),p=function(e){var t=e.children,r=f(l(["deliveryAddress","deliveryType","deliveryCost","deliveryDeadline","selfExportPointId","deliveryCity"]),2),o=r[0],i=r[1],c=f(Object(n.useState)(u({},o,{pickup:{officeHeader:"Офисы обслуживания",pointHeader:"Пункты самовывоза",linkText:"Выбрать другое место самовывоза",showModule:!o.deliveryAddress&&!o.deliveryType},selfExport:{header:"Пункты доставки",linkText:"Выбрать другой пункт выдачи",showModule:!1}})),2),s=c[0],p=c[1];return a.a.createElement(m.Provider,{value:[s,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(),p((function(t){return u({},t,o,e)})),s}]},t)};function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var b=function(e){var t=y(l("string"==typeof e&&[e]||e),2),r=t[0],a=t[1],o=y(Object(n.useState)(!1),2),i=o[0],c=o[1];return Object(n.useEffect)((function(){c(r&&Object.keys(r).every((function(e){return!!r[e]})))}),[r]),[i,function(){return a()}]};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=Object(n.createContext)([{},function(){}]),h=function(e){var t=e.children,r=d(b(["deliveryAddress","deliveryType","deliveryCost","deliveryDeadline"]),2),n=r[0],o=r[1];return a.a.createElement(v.Provider,{value:[n,o]},t)};function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e){var t=e.className,r=e.next,o=e.setNext,c=_(Object(n.useContext)(v),2)[1],l=_(Object(n.useContext)(m),2),u=l[0].pickup,s=l[1];return Object(n.useEffect)((function(){window.deliveryPickup()}),[]),a.a.createElement("div",{className:"delivery-pickup ".concat(t||""),"data-delivery-type":"Самовывоз"},a.a.createElement("div",{className:"delivery-pickup__chosen-city-wrapper"},a.a.createElement("p",{className:"delivery-pickup__chosen-city-descr"},"Текущий город: "),a.a.createElement("p",{className:"delivery-pickup__chosen-city"}),a.a.createElement("button",{className:"delivery-pickup__change-city"},"Выбрать другой город")),a.a.createElement("input",{type:"text",className:"delivery-pickup__input",placeholder:"Введите улицу"}),a.a.createElement("header",{className:"delivery-pickup__points-header"},u.officeHeader),a.a.createElement("div",{className:"delivery-pickup__points-list",onClick:function(e){var t=e.target;c(),s(),t.classList.contains("delivery-pickup__point--active")?o(!0):o(!1)}}),r&&a.a.createElement(i,{onClick:function(){var e=u.showModule;s({pickup:O({},u,{showModule:!e})})},className:"delivery-pickup__continue-btn"}))};function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){j(e,t,r[t])}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(e){var t=e.deliveryType,r=e.setNext,o=e.next,i=w(Object(n.useContext)(m),2),c=i[0],l=i[1],u=c[t],s=c.deliveryAddress,f=u.showModule,p=u.linkText;Object(n.useEffect)((function(){var e=!s&&sessionStorage.getItem("haveToOpenPickupModule");e&&sessionStorage.removeItem("haveToOpenPickupModule"),l(j({},t,k({},u,{showModule:e?!f:f})))}),[o]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"basket__react-delivery-choose-point"},"Текущий пункт выдачи: ",a.a.createElement("strong",{className:"basket__react-delivery-strong"},t===c.deliveryType?c.deliveryAddress:"не выбран")),a.a.createElement("button",{onClick:function(){r(!1),l(j({},t,k({},u,{showModule:!f})))},className:"basket__react-delivery-choose-pickAnotherPoint"},p))},S=function(e){var t=e.text,r=e.className;return a.a.createElement("div",{className:"basket__react-additional-info-item basket__react-additional-info-item--"+r},t)};function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){A(e,t,r[t])}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=function(){var e=C(Object(n.useState)({header:"",name:"",phone:"",schedule:"",mapLink:""}),2),t=e[0],r=e[1],o=C(Object(n.useContext)(m),1)[0],i=o.deliveryType,c=o.deliveryCity,l=o.deliveryAddress;Object(n.useEffect)((function(){var e,t,n;try{"pickup"===i?function(){var e=window.citiesList.filter((function(e){return e.name===c}))[0],t=e.mapLink,n=void 0===t?"":t,a=[];e&&e.branches&&Object.keys(e.branches).forEach((function(t){return a=[].concat(P(a),P(e.branches[t]))})),a=N({},a.filter((function(e){return e.name===l}))[0]),r(N({},a,{header:"Контактная информация",mapLink:n}))}():(e=getCookie("deliveryCity"),t=+getCookie("selfExportPointId"),(n=new ShiptorPointsGetter({usersCity:e,fromCity:"_"})).getUsersCityKladr().then((function(){n.getDeliveryPoints().then((function(e){var n=e.result.filter((function(e){return e.id===t}));try{var a=C(n,1)[0],o=a.address,i=a.phones,c=void 0===i?[]:i,l=a.work_schedule;r({header:"Контактная информация",name:o,phone:c[0]&&c.reduce((function(e,t){return"".concat(e," + /n + ").concat(t)})),schedule:l,mapLink:""})}catch(e){var u=e.message;console.log(u)}}))})))}catch(e){var a=e.message;console.log(a)}}),[]);var u=t.header,s=void 0===u?"":u,f=t.name,p=void 0===f?"":f,y=t.phone,b=void 0===y?"":y,d=t.schedule,v=void 0===d?"":d,h=t.mapLink,O=void 0===h?"":h;return(s&&p||O)&&a.a.createElement("section",{className:"basket__react-additional-info"},a.a.createElement("header",{className:"basket__react-additional-info-header"},s),a.a.createElement("div",{className:"basket__react-additional-info-body"},a.a.createElement("div",{className:"basket__react-additional-info-left-part"},function(){var e={name:p,phone:b,schedule:v};return Object.keys(e).map((function(t){return e[t]&&a.a.createElement(S,{text:e[t],className:t})}))}()),a.a.createElement("div",{className:"basket__react-additional-info-right-part"},O&&a.a.createElement("iframe",{src:O,width:"100%",height:"100%",frameBorder:"0"}))))};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var L=function(e){var t=e.deliveryType,r=D(e,["deliveryType"]),o=M(Object(n.useContext)(m),1)[0],i=o.deliveryType,c=o.pickup.showModule,l=t===i;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,I({deliveryType:t},r)),c?a.a.createElement(E,r):l&&a.a.createElement(T,null))};function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){F(e,t,r[t])}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=function(e){var t=e.className,r=e.next,o=e.setNext,c=R(Object(n.useContext)(v),2)[1],l=R(Object(n.useContext)(m),2),u=l[0].selfExport,s=l[1];return Object(n.useEffect)((function(){window.deliverySelfExport()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"delivery-selfExport ".concat(t),"data-delivery-type":"Пункт выдачи"},a.a.createElement("div",{className:"delivery-selfExport__wait-screen hidden preloader-mini"},a.a.createElement("div",{className:"preloader-mini__item"},a.a.createElement("div",{className:"preloader-mini__item-tool"}),a.a.createElement("div",{className:"preloader-mini__item-tool"}),a.a.createElement("div",{className:"preloader-mini__item-tool"}),a.a.createElement("div",{className:"preloader-mini__item-tool"}))),a.a.createElement("div",{className:"delivery-selfExport__chosen-city-wrapper"},a.a.createElement("p",{className:"delivery-selfExport__chosen-city-descr"},"Текущий город: "),a.a.createElement("p",{className:"delivery-selfExport__chosen-city"}),a.a.createElement("button",{className:"delivery-selfExport__change-city"},"Выбрать другой город")),a.a.createElement("section",{className:"delivery-selfExport__pickup"},a.a.createElement("header",{className:"delivery-selfExport__pickup-header"},a.a.createElement("p",{className:"delivery-selfExport__pickup-header-text"},"Пункты выдачи"),a.a.createElement("button",{className:"delivery-selfExport__show-map"},"Посмотреть на карте")),a.a.createElement("input",{type:"text",className:"delivery-selfExport__pickup-search-input",placeholder:"Поиск пункта выдачи"}),a.a.createElement("ul",{onClick:function(e){var t=e.target;c(),s(),t.classList.contains("delivery-selfExport__pickup-point--active")||t.parentElement.classList.contains("delivery-selfExport__pickup-point--active")?o(!0):o(!1)},className:"delivery-selfExport__pickup-list"}),r&&a.a.createElement(i,{onClick:function(){var e=u.showModule;s({selfExport:B({},u,{showModule:!e})})},className:"delivery-pickup__continue-btn"})),a.a.createElement("section",{className:"delivery-selfExport__error hidden"},a.a.createElement("p",{className:"delivery-selfExport__error-text"},"К сожалению пункты выдачи не найдены :(",a.a.createElement("br",null),"Попробуйте сменить город"))))};function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function G(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var K=function(e){var t=e.deliveryType,r=G(e,["deliveryType"]),o=q(Object(n.useContext)(m),1)[0],i=o.deliveryType,c=o.selfExport.showModule,l=t===i;return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,H({deliveryType:t},r)),c?a.a.createElement(U,r):l&&a.a.createElement(T,null))};function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var z=function(e){var t=e.onTabClick,r=e.deliveryType,n="pickup"===r,o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){W(e,t,r[t])}))}return e}({deliveryType:r},X(e,["onTabClick","deliveryType"])),i="basket__progress-header-item basket__progress-header-item--without-before ".concat(n&&"basket__progress-header-item--active"),c="basket__progress-header-item basket__progress-header-item--without-before ".concat(!n&&"basket__progress-header-item--active");return a.a.createElement(a.a.Fragment,null,a.a.createElement("ul",{className:"basket__tabs-wrapper"},a.a.createElement("li",{className:i,onClick:function(){return t("pickup")}},"Самовывоз"),a.a.createElement("li",{className:c,onClick:function(){return t("selfExport")}},"Доставка")),n?a.a.createElement(L,o):a.a.createElement(K,o))},J=function(e){var t=e.header;return a.a.createElement("header",{className:"basket__react-stage-header"},t)};function Q(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var V=function(e){var t=e.header,r=Q(e,["header"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(J,{header:t}),a.a.createElement(z,r))},Y=function(e){var t=e.name,r=(e.date,e.count),n=e.price,o=e.link;return a.a.createElement("li",{className:"basket__react-final-goods-item"},a.a.createElement("a",{href:o,className:"basket__react-final-goods-item-link"},a.a.createElement("p",{className:"basket__react-final-goods-item-name"},t)),a.a.createElement("p",{className:"basket__react-final-goods-item-count"},r," шт."),a.a.createElement("p",{className:"basket__react-final-goods-item-price"},n*r," р."))},Z=function(){var e=window.basketApi.getBasketItems();return a.a.createElement("ul",{className:"basket__react-final-goods-item-list"},e.map((function(e){return a.a.createElement(Y,e)})))},ee=function(){var e=parseInt(window.basketApi.getTotalPricesAndItems().replace("Итого ","")),t=window.basketApi.getItemsPrice();return a.a.createElement("header",{className:"basket__react-final-goods-header"},a.a.createElement("p",{className:"basket__react-final-goods-header-positions"},function(e){switch(!0){case"1"===e.toString().slice(-1):return"".concat(e," позиция");case+e.toString().slice(-1)>1&&+e.toString().slice(-1)<5:return"".concat(e," позиции");default:return"".concat(e," позиций")}}(e),a.a.createElement("button",{className:"basket__react-final-goods-open-button",onClick:function(e){var t=e.target,r=document.querySelector(".basket__react-final-goods-item-list"),n=r.style.display;"none"!==n&&n?($(r).slideUp(),t.classList.remove("basket__react-final-goods-open-button--open")):($(r).slideDown(),t.classList.add("basket__react-final-goods-open-button--open"))}},"Открыть")),a.a.createElement("p",{className:"basket__react-final-goods-header-price"},t," р."))},te=function(){return a.a.createElement("div",{className:"basket__react-final-goods"},a.a.createElement(ee,null),a.a.createElement(Z,null))};function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ne=function(){var e,t=re(Object(n.useContext)(m),1)[0].deliveryType;return a.a.createElement("header",{className:"basket__react-final-delivery-header"},a.a.createElement("p",{className:"basket__react-final-delivery-price-text"},"pickup"===t?"Самовывоз":"Доставка"),a.a.createElement("p",{className:"basket__react-final-delivery-price"},(e=getCookie("deliveryCost")||0,"".concat(e," р."))))},ae=function(){var e=window.basketApi.getMaxDeliveryDate();return a.a.createElement("div",{className:"basket__react-final-delivery-deadline"},a.a.createElement("p",{className:"basket__react-final-delivery-deadline-text"},"Срок доставки"),a.a.createElement("p",{className:"basket__react-final-delivery-deadline-days"},e," дн."))},oe=function(){return a.a.createElement("div",{className:"basket__react-final-delivery-body"},a.a.createElement("div",{className:"basket__react-final-delivery-address-wrapper"},a.a.createElement("p",{className:"basket__react-final-delivery-address"},getCookie("deliveryAddress")||"")),a.a.createElement(ae,null))},ie=function(){return a.a.createElement("div",{className:"basket__react-final-delivery"},a.a.createElement(ne,null),a.a.createElement(oe,null))},ce=function(){return a.a.createElement("div",{className:"basket__react-final-body"},a.a.createElement(te,null),a.a.createElement(ie,null))},le=function(){return a.a.createElement(ce,null)},ue=function(){return a.a.createElement(le,null)};function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var me=function(e){var t=e.text,r=e.available,n=fe(e,["text","available"]);return a.a.createElement("button",se({},n,{disabled:!r}),a.a.createElement("span",{className:"basket__react-bottom-nav-btn-text"},t),a.a.createElement("span",{className:"basket__react-bottom-nav-btn-arrow"}))};function pe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ye=function(e){var t,r=e.step,o=e.onClick,i=pe(Object(n.useContext)(v),1)[0];return a.a.createElement("div",{className:"basket__react-bottom-nav"},(t={2:{text:["К корзине","Далее"],className:["basket__react-bottom-nav-btn","basket__react-bottom-nav-btn"],onClick:[window.basketApi.returnToBasket,o.bind(null,"add")],available:[!0,i]},3:{text:["Назад","Оформить"],className:["basket__react-bottom-nav-btn","basket__react-bottom-nav-btn basket__react-bottom-nav-btn--confirm"],onClick:[o.bind(null,"sub"),function(e){e.preventDefault(),BX24.callMethod("crm.lead.list",{filter:{EMAIL:"service@moika76.ru"},select:["ID","TITLE"]},(function(e){e.error()?console.error(e.error()):(console.dir(e.data()),e.more()&&e.next())}))}],available:[!0,i]}},new Array(2).fill("").map((function(e,n){var o=t[r],i=o.text,c=o.className,l=o.onClick,u=o.available;return a.a.createElement(me,{key:n,text:i[n],className:c[n],onClick:l[n],available:u[n]})}))))};function be(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var de=function(e){var t,r,o=e.next,i=e.step,c=be(l(["deliveryCost"]),2),u=c[0].deliveryCost,s=c[1];return Object(n.useEffect)((function(){return s()}),[o]),a.a.createElement("div",{className:"basket__react-bottom-info"},(t=window.basketApi.getTotalPricesAndItems(),r=u?"".concat(u," р"):"не выбран пункт выдачи",[{text:t.split(":")[0],value:t.split(":")[1],className:"basket__react-bottom-info-item basket__react-bottom-info-item--products",step:[2]},{text:"Стоимость доставки",value:r,className:"basket__react-bottom-info-item basket__react-bottom-info-item--delivery",step:[2]},{text:"Сумма к оплате",value:" ".concat(window.basketApi.getTotalSum().toLocaleString()," р."),className:"basket__react-bottom-info-item basket__react-bottom-info-item--common",step:[3]}].filter((function(e){return e.step.includes(i)})).map((function(e,t){var r=e.text,n=e.value,o=e.className;return a.a.createElement("div",{key:t,className:o},r,": ",a.a.createElement("span",{className:"basket__react-bottom-info-item-mark"},n))}))))},ve=function(){return a.a.createElement("div",{className:"basket__react-bottom-message"},a.a.createElement("p",{className:"basket__react-bottom-message-text"},"Обращаем Ваше внимание, что стоимость доставки предварительная. Окончательная стоимость доставки будет рассчитана менеджером, исходя из веса и объема заказанных товаров."))};function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Oe=function(e){var t=he({},e);return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"basket__react-bottom-panel"},a.a.createElement(de,t),a.a.createElement(ye,t)),a.a.createElement(ve,null))},ge=function(e){var t=e.text,r=e.className,n=e.onClick;return a.a.createElement("li",{onClick:n,className:r.join(" ")},t)};function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function je(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var we=function(e){var t,r=e.header,o=e.onClick,i=(e.setStep,je(e,["header","onClick","setStep"])),c=["Корзина","Способ доставки","Подтверждение заказа"],l=ke(Object(n.useContext)(v),1)[0];return a.a.createElement("ul",{className:"basket__progress-header"},(t=r,c.map((function(e,r){var n,c=window.innerWidth,u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(Object(r));"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Ee(e,t,r[t])}))}return e}({},i,{text:c>450?e:r+1,className:(n=["basket__progress-header-item"],t===e&&n.push("basket__progress-header-item--active"),n),onClick:function(e){return 0===e?(o.bind(null,"sub")(),window.basketApi.returnToBasket()):1===e?o.bind(null,"sub")():2===e?l?o.bind(null,"add")():function(){}:void 0}.bind(null,r)});return a.a.createElement(ge,_e({key:r},u))}))))};function xe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Se=r(1);r.n(Se).a.render(a.a.createElement((function(){var e,t={2:"Способ доставки",3:"Подтверждение заказа"},r=xe(Object(n.useState)(!1),2),o=r[0],i=r[1],c=xe(l(["deliveryType"]),1)[0].deliveryType,u=xe(Object(n.useState)(c||"pickup"),2),s=u[0],f=u[1],m=xe(Object(n.useState)((e=sessionStorage.getItem("prevBasketPage"),sessionStorage.removeItem("prevBasketPage"),e&&+e||2)),2),y=m[0],b=m[1],d=function(e,t){var r="add"===e?t+1:t-1;return r<4&&r>1?r:t},v=2===y?a.a.createElement(V,{header:t[y],onTabClick:function(e){return f(e)},deliveryType:s,next:o,setNext:i}):a.a.createElement(ue,null);return a.a.createElement(p,null,a.a.createElement(h,null,a.a.createElement(we,{setStep:b,header:t[y],onClick:function(e){return b((function(t){return d(e,t)}))}}),v,a.a.createElement(Oe,{onClick:function(e){return b((function(t){return d(e,t)}))},step:y,next:o})))}),null),document.querySelector(".basket__stages"))}]);