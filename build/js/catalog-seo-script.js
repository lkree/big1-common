"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var a=0,e=Array(t.length);a<t.length;a++)e[a]=t[a];return e}}function _classCallCheck(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,a){for(var e,r=0;r<a.length;r++)(e=a[r]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function _createClass(t,a,e){return a&&_defineProperties(t.prototype,a),e&&_defineProperties(t,e),t}!function(){function i(t){return!!t}function n(t){return!!t[0]}function s(){var t=document.querySelector(".tabn:not(.hidden) .cloned-lax-list").dataset.catalogType;d.init(t)}function l(t,a,e){return t[a]=e}function e(){var t=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0],a=$(".laximo-in-laxTecdoc"),e=$(".td-model");return t?void e.css("min-height","unset"):void e.attr("style","min-height: ".concat(a.innerHeight()-200,"px"))}function c(t){var a=i(t[0].value),e=$("<div>",{class:"laximo-div-selectors-wrapper"});$(t).each(function(){$("<div>",{text:$(this).text(),class:a?"laximo-div-selector":"laximo-div-selector--no-hover","data-id":$(this).val()}).appendTo(e)});var r=$("#js-laximo-wizard-options .lx-b-sel-tm");if(n(r)){if(a)u(r);else{var o=[$(".laximo-div-selectors-wrapper"),$(".laximo-div-desctipion")];u(o)}r[0].prepend(e[0]),function(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],a=$(".lx-vin-search-module .js-laximo-wizard-select"),e=$(".lx-wrap-ss"),r=$("#js-laximo-wizard-options .lx-b-sel-tm"),o=$(".lx-wrap-btn-sm"),i=$("<label>",{text:"Выберите модификацию",class:"laximo-div-desctipion"});t&&(a.remove(),o.remove(),e.remove()),r[0].prepend(i[0])}(a)}}var p,t,d=new(function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"init",value:function(t){if(t){var a=t.split(" ");return this.get_wizard(a)}}},{key:"get_wizard",value:function(t){var a,e,r;return a=t[0],e="no"===t[1]?"":t[1],r="no"===t[2]?"":t[2],void 0===window.location.href.split("/")[4]?$.get("laximo/".concat(a,"/wizard?key=").concat(e,"&wizard_id=").concat(r)):$.get("https://big1.ru/laximo/".concat(a,"/wizard?key=").concat(e,"&wizard_id=").concat(r))}}]),t}()),u=function(t){Array.isArray(t)?$(t).each(function(){$(this).remove()}):$(t).html("")},r=(p={},function(t){t=t.toLowerCase();var a=function(t,a){return t[a]}(p,t);if(i(a)){if(Array.isArray(a))return void c(a);if("not-found"===a)return s(),void setTimeout(function(){c([$("<option>",{text:"В автоматическом режиме модификацию найти не удалось. Попробуйте самостоятельно.",value:""})])},1500);d.init(p[t])}else{var e=document.querySelectorAll(".tabn:not(.hidden) .cloned-lax-list option"),r=function(){var r=[];return function(e,t){return _toConsumableArray(t).forEach(function(t){if(e=e.toLowerCase(),~t.textContent.toLowerCase().indexOf(e)){var a=t.cloneNode(!0);r.push(a)}}),r}}()(t,e),o=r.length;switch(!0){case 0===o:l(p,t,"not-found"),s(),setTimeout(function(){c([$("<option>",{text:"В автоматическом режиме модификацию найти не удалось. Попробуйте самостоятельно.",value:""})])},1500);break;case 1<o:l(p,t,r),c(r);break;default:l(p,t,r[0].value),d.init(r[0].value)}}});function a(t){var a;t.originalEvent.stopPropagation(),t.originalEvent.target.classList.contains("tecdoc-cars-btns-wrapper__catalog-btn--second")?(a=$(t.originalEvent.target).parent().prev().data("href"),window.location.assign(a)):function(){var t=$(".laximo-in-laxTecdoc");if(n(t)&&"none"!==t[0].style.display)return t.slideUp(500),e(!0);e(),t.slideDown(500)}()}function o(){var t=document.querySelector(".td-model").querySelectorAll("li"),a=document.querySelectorAll(".car-chooser-list-tecdoc__point");Array.from(t).forEach(function(t){return t.style.display="none"}),Array.from(a).forEach(function(t){return t.classList.remove("active")})}function _(a){if(i(a.classList.contains("car-chooser-list-tecdoc__point"))){var t=document.querySelectorAll(".car-chooser-list-tecdoc__point");o(),Array.from(t).forEach(function(t){"1"===t.dataset.status?t.dataset.status="0":"0"===t.dataset.status&&t===a&&(a.dataset.status="1",t.classList.toggle("active"),function(a){var t=document.querySelector(".td-model").querySelectorAll("li");a=a.toUpperCase().replace("-","").replace(" ",""),Array.from(t).map(function(t){t.style.display=~t.dataset.name.indexOf(a)?"block":"none"})}(a.textContent),r(a.textContent))})}}$(document).ready(function(){(new LaximoWizard).init()}),t=document.querySelector(".car-type-toggler__checkbox"),i(t)&&(t.checked=!1),function(){if(n($(".lx-b-lax-container select"))){$(".lx-b-lax-col .lx-b-lax-container > .lx-sel-or").first().css("display","none");var t=$("<div></div>",{text:"Поиск по VIN ↓",class:"VIN-search-button"}).css({"font-weight":"700","font-size":"16px",border:"1px solid",padding:"10px 5px"});$(".lx-vin-search-module").prepend(t),$(".lx-b-search-container").first().slideUp()}}(),$(document).on("DOMContentLoaded",function(){function r(a,e){_toConsumableArray(document.images).forEach(function(t){t.src===a&&t.setAttribute("style",e)})}var t;t=$(".td-model")[0].querySelectorAll("li"),Array.from(t).map(function(t){t.querySelector("img").removeAttribute("style")}),[{src:["https://api.parts-soft.ru/system/car_base_model/default.gif"],style:"margin-top: 0 !important"},{src:["https://api.parts-soft.ru/system/car_base_model/3093/575_23_original_original.jpg"],style:"margin-top: 30px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/3630/587_3439_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/3612/587_500_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/3611/587_488_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/1079/525_3388_original_original.jpg"],style:"margin-top: -20px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/3676/587_440_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/3672/587_436_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/3595/587_3943_original_original.jpg"],style:"margin-top: -14px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/3703/587_1629_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/3701/587_3889_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/1215/525_2022_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/1231/517_4180_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/2103/553_3909_original_original.jpg"],style:"margin-top: -10px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/5509/13_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5466/16_original_original.jpg"],style:"margin-top: -30px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/1078/525_3449_original_original.jpg"],style:"margin-top: -79px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/4723/9_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5515/6_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5474/15_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5472/14_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5471/19_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5477/12_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5470/9_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5469/18_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5467/17_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5508/10_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5465/20_original_original.jpg"],style:"margin-top: -44px !important"},{src:["https://api.parts-soft.ru/system/car_base_model/5514/5_original_original.jpg","https://api.parts-soft.ru/system/car_base_model/5476/11_original_original.jpg"],style:"margin-top: -48px !important"}].forEach(function(t){var a=t.src,e=t.style;Array.isArray(a)?a.forEach(function(t){r(t,e)}):r(a,e)})}),$(".car-type-toggler").on("change",function(){(function(){try{var t=document.querySelectorAll(".tabn"),a=!0,e=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(a=(o=i.next()).done);a=!0)o.value.classList.toggle("hidden")}catch(t){e=!0,r=t}finally{try{a||null==i.return||i.return()}finally{if(e)throw r}}}catch(t){console.log(t.message)}})(),o()}),$(document).on("click",function(t){var a,e,r;a=$(".tecdoc-cars-btns-wrapper__catalog-btn"),e=$(".tecdoc-cars-btns-wrapper__catalog-btn--second"),r=$(".tecdoc-cars-btns-wrapper"),a.hasClass("activated")&&!t.originalEvent.target.classList.contains("model-item")&&(t.stopImmediatePropagation(),a.removeClass("activated"),r.css({top:"195px",margin:"10px 0 0 0",transition:"top 1s ease"}),a.css({"font-size":"14px","font-weight":"400","align-items":"unset","font-family":"inherit"}),a.text("Оригиналы"),e.text("Аналоги")),t.originalEvent.target.classList.contains("laximo-div-selector")&&d.init(t.originalEvent.target.dataset.id)}),$(".model-item").on("click",function(r){!function(){r.stopImmediatePropagation();var t=$(r.currentTarget).find(".tecdoc-cars-btns-wrapper__catalog-btn"),a=$(r.currentTarget).find(".tecdoc-cars-btns-wrapper__catalog-btn--second"),e=$(r.currentTarget).find(".tecdoc-cars-btns-wrapper");t.hasClass("activated")||($(r.originalEvent.target).css({position:"relative"}),e.css({top:"0",margin:"0",transition:"top 1s ease","align-items":"center"}),t.css({display:"flex","align-items":"center","justify-content":"center","font-size":"18px","font-weight":"700","font-family":"MyriadPro"}),t.text("Каталог оригинальных запчастей"),a.text("Каталог неоригинальных запчастей"),t.addClass("activated"))}()}),$(".tecdoc-cars-btns-wrapper__catalog-btn").on("click",a),$(".VIN-search-button").on("click",function(){var t,a;t=$(".VIN-search-button"),"none"===(a=$(".lx-b-search-container"))[0].style.display?(t.hide(),a.slideDown()):(t.show(),a.slideUp())}),$(".lx-b-lax-col-close").on("click",a),$(document).on("click",function(t){return _(t.target)}),$(document).on("keydown",function(t){return 27===t.originalEvent.keyCode?o():void 0})}();