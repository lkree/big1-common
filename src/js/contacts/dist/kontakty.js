!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(1),o=n.n(c),i=function(e){var t=e.branches,n=e.mapLink,r=e.kladr_id,c=e.name,o=e.onClick,i=t?"contacts__city-button contacts__city-button--branch":"contacts__city-button";return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:i,onClick:function(e){return o(function(e,a){return t?{branches:t,mapLink:n,city:a}:{evt:e,kladr_id:r}}(e,c))}},c))};function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=function(e){var t=e.kladr_id,n=e.firstLetter,r=e.renderBranch,c=e.onClick,o=e.branches,u=l(e,["kladr_id","firstLetter","renderBranch","onClick","branches"]);return a.a.createElement("li",{key:t,className:"contacts__item"},n&&a.a.createElement("div",{className:"contacts__item-first-letter"},n),o?a.a.createElement(i,s({},u,{kladr_id:t,branches:o,onClick:r})):a.a.createElement(i,s({},u,{kladr_id:t,branches:o,onClick:c})))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=function(e){var t=e.street,n=e.schedule,r=e.photos,c=e.name,o=e.onClick,i=e.city,s=m(e,["street","schedule","photos","name","onClick","city"]),l=function(e){e.preventDefault(),$(".fancybox").fancybox({openEffect:"none",closeEffect:"none"})};return a.a.createElement("li",{className:"contacts__branch"},a.a.createElement("header",{className:"contacts__branch-header",onClick:function(e){var t,n=e.target,r=$(n).next();e.target.classList.contains("contacts__branch-header--open")&&(t=!0),$(".contacts__branch-body-wrapper").each((function(){$(this).prev().removeClass("contacts__branch-header--open"),$(this).parent().removeClass("contacts__branch--open"),$(this).slideUp()})),t||(l(e),r.slideDown(),n.classList.add("contacts__branch-header--open"),n.parentElement.classList.add("contacts__branch--open"))}},c),a.a.createElement("div",{className:"contacts__branch-body-wrapper"},a.a.createElement("div",{className:"contacts__branch-body"},a.a.createElement("div",{className:"contacts__branch-info"},a.a.createElement("div",{className:"contacts__branch-street"},t),a.a.createElement("div",{className:"contacts__branch-schedule"},n),a.a.createElement("button",f({onClick:o,className:"contacts__branch-accept",value:c,"data-city":i},s),"Выбрать")),a.a.createElement("div",{className:"contacts__branch-photos"},function(e){return e.map((function(e){return a.a.createElement("a",{className:"fancybox contacts__branch-photo-wrapper",rel:"gallery1",href:e},a.a.createElement("img",{src:e,className:"contacts__branch-photo"}))}))}(r)))))},p=function(e){var t=e.branches,n=e.onClick,r=e.mapLink,c=e.onBranchClick,o=e.city,i=function(e){return e.map((function(e){var t=e.name,n=e.street,r=e.schedule,i=e.photos,s=e.id,l={name:t,street:n,schedule:r,photos:i,key:t,onClick:c,id:s,city:o};return a.a.createElement(d,l)}))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:n,className:"contacts__back-button"},"Назад"),t.office&&a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"contacts__branches-wrapper-header"},"Офисы обслуживания BIG1.RU"),a.a.createElement("ul",{className:"contacts__branches-wrapper"},i(t.office))),t.points&&a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"contacts__branches-wrapper-header"},"Пункты самовывоза BIG1.RU"),a.a.createElement("ul",{className:"contacts__branches-wrapper"},i(t.points))),a.a.createElement("iframe",{src:r,width:"100%",height:"360",frameBorder:"0"}))},y=function(e){var t=e.currentCity;return a.a.createElement("header",{className:"contacts__current-region"},a.a.createElement("span",{className:"contacts__current-region-title"},"Ваш город: "),a.a.createElement("span",{className:"contacts__current-region-city"},t))},v=function(e){var t=e.onCityFilter;return a.a.createElement("div",{className:"contacts__search-city-wrapper"},a.a.createElement("input",{type:"text",onInput:t,className:"contacts__search-input",placeholder:"Поиск"}),a.a.createElement("div",{className:"contacts__search-city-help"},a.a.createElement("span",{className:"contacts__search-city-icon"}),"— в городе есть офис обслуживания BIG1.RU"))},h=function(e){var t=e.renderCity;return a.a.createElement("ul",{className:"contacts__city-list"},t())};function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(e){var n,r,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,c=k(t).call(this,e),n=!c||"object"!==b(c)&&"function"!=typeof c?g(r):c,S(g(n),"getYmapsCity",(function(){var e;try{e=YMaps.location.city}catch(e){}return e})),S(g(n),"renderCity",(function(){return n.state.filteredList.map((function(e){var t=e.name,r=e.branches,c=e.kladr_id,o=e.firstLetter,i=e.mapLink,s={name:t,branches:r,kladr_id:c,firstLetter:o,renderBranch:n.renderBranch,onClick:n.onNonBranchClick,mapLink:i};return a.a.createElement(u,s)}))})),S(g(n),"renderBranch",(function(e){var t=e.branches,r=e.mapLink,a=e.city;n.scrollToTop(),n.setState({isRenderedBrunch:!n.state.isRenderedBrunch,branches:t,mapLink:r,filteredList:n.citiesList,city:a})})),S(g(n),"saveCookie",(function(e,t){var n={path:"/",secure:!0,expires:new Date(Date.now()+864e7).toUTCString(),SameSite:"None"},r=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var a in n){r+="; "+a;var c=n[a];!0!==c&&(r+="="+c)}document.cookie=r})),S(g(n),"getCookie",(function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0})),S(g(n),"saveActiveElement",(function(e){return n.setState({activeElement:e})})),S(g(n),"removeActiveElement",(function(){return n.saveActiveElement("")})),S(g(n),"setActiveElement",(function(e){n.saveActiveElement(e),e.classList.add("contacts__city-button--active")})),S(g(n),"disableActiveElement",(function(){var e;null===(e=n.state.activeElement.classList)||void 0===e||e.remove("contacts__city-button--active"),n.removeActiveElement()})),S(g(n),"onNonBranchClick",(function(e){var t=e.evt,r=t.target,a=t.target.textContent,c=e.kladr_id,o=!1,i=function e(){return e.checkStatement=function(t,n,r){return t?n():r(),e},e.setMapKladr=function(){return window.JCShiptorWidgetPvz.setParams({location:{kladr_id:c}}),e},e.refreshMap=function(){return!o&&window.JCShiptorWidgetPvz.refresh(),e},e.callMap=function(){return!o&&n.map.click(),e},e.removeActiveElement=function(){return n.disableActiveElement(),e},e.setActiveElement=function(){return n.setActiveElement(r),e},e.saveCity=function(){return function e(){return e.saveCityId=function(){return n.setCityId(),e},e.saveCityCookie=function(){return n.saveCookie("deliveryCity",a),e},e}().saveCityId().saveCityCookie(),e},e.chooseCity=function(){return n.chooseCity(a),e},e.refreshHeader=function(){return window.userCityHandler({cityName:a,cityId:n.baseCityId}),e},e.saveDeliveryType=function(){return n.saveDeliveryType("selfExport"),e},e.removePickupFlag=function(){return o&&sessionStorage.removeItem("fromPickup"),e},e.setPickup=function(){return o=!0,e},e.emptyFunction=function(){return e},e.savePickupData=function(){return o&&n.onBranchClick({target:{value:"",dataset:{city:a},id:28}}),e},e};i().checkStatement(!!sessionStorage.getItem("fromPickup"),i.setPickup,i.emptyFunction).setMapKladr().refreshMap().callMap().removeActiveElement().setActiveElement().saveCity().removePickupFlag().saveDeliveryType().chooseCity().refreshHeader().savePickupData()})),S(g(n),"chooseCity",(function(e){return n.setState({chosenCity:e})})),S(g(n),"filterCityList",(function(e){var t=e.target;if(t.value.length<3)return n.setState({filteredList:n.citiesList});var r=g(n).citiesList;return n.setState({filteredList:r.filter((function(e){var n=e.name.toLowerCase(),r=t.value.toLowerCase();return r=r.replace("/ё/g","e"),~n.indexOf(r)}))})})),S(g(n),"scrollToTop",(function(){$("html,body").animate({scrollTop:0},500)})),S(g(n),"onBranchClick",(function(e){var t=e.target,r=t.value,a=t.dataset.city,c=t.id;n.setCityId(c),n.saveCookie("deliveryAddress",r),n.saveCookie("deliveryCost","0"),n.saveCookie("deliveryDeadline","0"),n.saveCookie("deliveryCity",a),n.saveDeliveryType("pickup"),sessionStorage.removeItem("fromPickup"),n.renderBranch([]),n.chooseCity(a),n.disableActiveElement(),n.getBackUrl()||location.reload()})),S(g(n),"setCityId",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.baseCityId;return n.saveCookie("region_id",e)})),S(g(n),"setSelfExportPointId",(function(e){return n.saveCookie("selfExportPointId",e)})),S(g(n),"saveDeliveryType",(function(e){return n.saveCookie("deliveryType",e)})),S(g(n),"getBackUrl",(function(){var e=sessionStorage.getItem("fromAnotherUrl");return console.log("llllllllllllllllll"),!!e&&(sessionStorage.removeItem("fromAnotherUrl"),location.assign(e),!0)})),S(g(n),"PickupPointClickHandler",(function(){document.querySelector("#shiptor_widget_pvz").addEventListener("onPvzSelect",(function(e){var t=e.detail,r=t.address,a=t.id,c=t.shipping_days,o=t.courier;!function(){var e=parseInt(c);if(e)n.saveCookie("deliveryDeadline",e.toString());else{var t=document.querySelector(".contacts__city-button--active").textContent,r=new ShiptorPointsGetter({usersCity:t,fromCity:"_"});r.getUsersCityKladr().then((function(){r.calculateShipping().then((function(e){var t=_(function(e){var t,n,r=e.result.methods;try{t=r[0].min_days}catch(e){var a=e.message;console.log(a),t=0}try{n=r[0].max_days}catch(e){var c=e.message;console.log(c),n=0}return[t,n]}(e),2),r=t[0],a=t[1];n.saveCookie("deliveryDeadline",a.toString()||r.toString()||"0")}))}))}}(),n.saveCookie("deliveryAddress",r),n.saveCookie("deliveryCost",window.citiesList[0].price),n.saveCookie("deliveryCourier",o),n.setSelfExportPointId(a),n.getBackUrl()}))})),n.baseCityId="28",n.citiesList=window.citiesList,n.map=document.querySelector(".contactMap__call-map"),n.state={isRenderedBranch:!1,branches:"",chosenCity:n.getCookie("deliveryCity")||n.getYmapsCity()||"",filteredList:n.citiesList,activeElement:"",city:""},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.PickupPointClickHandler()}},{key:"render",value:function(){var e=this.state,t=e.isRenderedBrunch,n=e.branches,r=e.chosenCity,c=e.mapLink,o=e.city,i=this.filterCityList,s=this.onBranchClick,l=this.renderCity;return a.a.createElement("div",{className:"contacts"},a.a.createElement(y,{currentCity:r}),t?a.a.createElement(p,{branches:n,onClick:this.renderBranch,onBranchClick:s,mapLink:c,city:o}):a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{onCityFilter:i}),a.a.createElement(h,{renderCity:l})))}}])&&C(n.prototype,r),c&&C(n,c),t}(a.a.Component);o.a.render(a.a.createElement((function(){return a.a.createElement(w,null)}),null),document.querySelector("#root"))}]);