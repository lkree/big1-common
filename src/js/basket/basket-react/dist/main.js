!function(e){var t={};function a(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(r,l,function(t){return e[t]}.bind(null,l));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r);const n=({className:e})=>(Object(r.useEffect)(()=>{window.deliveryPickup()}),l.a.createElement("div",{className:`delivery-pickup ${e}`,"data-delivery-type":"Самовывоз"},l.a.createElement("input",{type:"text",className:"delivery-pickup__input",placeholder:"Введите город"}),l.a.createElement("div",{className:"delivery-pickup__points-list"}))),s=({showPoint:e,deliveryProps:t,onPickAnotherPointClick:a,setButtonState:r})=>{const{header:n,linkText:s,showModule:c}=t,i=getCookie("deliveryAddress");return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"basket__react-delivery-choose-header"},n),c?"":l.a.createElement("div",{className:"basket__react-delivery-choose-point"},"Текущий пункт выдачи: ",l.a.createElement("strong",{className:"basket__react-delivery-strong"},i&&e?i:"не выбран")),l.a.createElement("button",{onClick:()=>{a({...t,showModule:!c});(()=>{const e=[getCookie("deliveryAddress"),getCookie("deliveryDeadline"),getCookie("deliveryCost"),getCookie("deliveryType")].every(e=>!!e);r(e)})()},className:"basket__react-delivery-choose-pickAnotherPoint"},s))},c=({text:e,className:t})=>l.a.createElement("div",{className:"basket__react-additional-info-item basket__react-additional-info-item--"+t},e),i=()=>{const[e,t]=Object(r.useState)({header:"",name:"",phone:"",schedule:"",mapLink:""});Object(r.useEffect)(()=>{const e=getCookie("deliveryType");try{"pickup"===e?(()=>{const e=getCookie("deliveryCity"),a=getCookie("deliveryAddress"),r=window.citiesList.filter(({name:t})=>t===e)[0],{mapLink:l=""}=r,n={...r.branches.filter(({name:e})=>e===a)[0]};t({...n,header:"Контактная информация",mapLink:l})})():((e,a)=>{const r=new ShiptorPointsGetter({usersCity:e,fromCity:"_"});r.getUsersCityKladr().then(()=>{r.getDeliveryPoints().then(({result:e})=>{const r=e.filter(e=>e.id===a);try{const[{address:e,phones:a=[],work_schedule:l}]=r;t({header:"Контактная информация",name:e,phone:a[0]?a.reduce((e,t)=>`${e} + /n + ${t}`):"",schedule:l,mapLink:""})}catch({message:e}){console.log(e)}})})})(getCookie("deliveryCity"),+getCookie("selfExportPointId"))}catch({message:e}){console.log(e)}},[]);const{header:a="",name:n="",phone:s="",schedule:i="",mapLink:o=""}=e;return a&&n||o?l.a.createElement("section",{className:"basket__react-additional-info"},l.a.createElement("header",{className:"basket__react-additional-info-header"},a),l.a.createElement("div",{className:"basket__react-additional-info-body"},l.a.createElement("div",{className:"basket__react-additional-info-left-part"},(()=>{const e={name:n,phone:s,schedule:i};return Object.keys(e).map(t=>e[t]?l.a.createElement(c,{text:e[t],className:t}):"")})()),l.a.createElement("div",{className:"basket__react-additional-info-right-part"},o?l.a.createElement("iframe",{src:o,width:"100%",height:"100%",frameBorder:"0"}):""))):""};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const m=({deliveryType:e,...t})=>{const{deliveryProps:{showModule:a}}=t,r=e===getCookie("deliveryType");return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,o({showPoint:r},t)),a?l.a.createElement(n,t):r?l.a.createElement(i,null):"")},d=({className:e})=>(Object(r.useEffect)(()=>{window.deliverySelfExport()}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:`delivery-selfExport ${e}`,"data-delivery-type":"Пункт выдачи"},l.a.createElement("div",{className:"delivery-selfExport__wait-screen hidden preloader-mini"},l.a.createElement("div",{className:"preloader-mini__item"},l.a.createElement("div",{className:"preloader-mini__item-tool"}),l.a.createElement("div",{className:"preloader-mini__item-tool"}),l.a.createElement("div",{className:"preloader-mini__item-tool"}),l.a.createElement("div",{className:"preloader-mini__item-tool"}))),l.a.createElement("div",{className:"delivery-selfExport__chosen-city-wrapper"},l.a.createElement("p",{className:"delivery-selfExport__chosen-city-descr"},"Текущий город: "),l.a.createElement("p",{className:"delivery-selfExport__chosen-city"}),l.a.createElement("button",{className:"delivery-selfExport__change-city"},"Выбрать другой город")),l.a.createElement("section",{className:"delivery-selfExport__pickup"},l.a.createElement("header",{className:"delivery-selfExport__pickup-header"},l.a.createElement("p",{className:"delivery-selfExport__pickup-header-text"},"Пункты выдачи"),l.a.createElement("button",{className:"delivery-selfExport__show-map"},"Посмотреть на карте")),l.a.createElement("input",{type:"text",className:"delivery-selfExport__pickup-search-input",placeholder:"Поиск пункта выдачи"}),l.a.createElement("ul",{className:"delivery-selfExport__pickup-list"})),l.a.createElement("section",{className:"delivery-selfExport__cities hidden"},l.a.createElement("input",{type:"text",className:"delivery-selfExport__city-search-input",placeholder:"Поиск города"}),l.a.createElement("ul",{className:"delivery-selfExport__cities-list"})),l.a.createElement("section",{className:"delivery-selfExport__error hidden"},l.a.createElement("p",{className:"delivery-selfExport__error-text"},"К сожалению пункты выдачи не найдены :(",l.a.createElement("br",null),"Попробуйте сменить город")))));function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const u=({deliveryType:e,...t})=>{const{deliveryProps:{showModule:a}}=t,r=e===getCookie("deliveryType");return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,p({showPoint:r},t)),a?l.a.createElement(d,t):r?l.a.createElement(i,null):"")},_=({onTabClick:e,deliveryType:t,...a})=>{const n={pickup:{header:"Офисы обслуживания",point:getCookie("deliveryAddress"),linkText:"Выбрать другое место самовывоза",showModule:!1},selfExport:{header:"Офисы самовывоза",point:getCookie("deliveryAddress"),linkText:"Выбрать другой пункт выдачи",showModule:!1}},[s,c]=Object(r.useState)(n[t]),i="pickup"===t,o={deliveryProps:s,onPickAnotherPointClick:c,deliveryType:t,...a},d=t=>{e(t),c(n[t])},p=`basket__progress-header-item basket__progress-header-item--without-before ${i?"basket__progress-header-item--active":""}`,_=`basket__progress-header-item basket__progress-header-item--without-before ${i?"":"basket__progress-header-item--active"}`;return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:"basket__tabs-wrapper"},l.a.createElement("li",{className:p,onClick:()=>d("pickup")},"Самовывоз"),l.a.createElement("li",{className:_,onClick:()=>d("selfExport")},"Доставка")),i?l.a.createElement(m,o):l.a.createElement(u,o))},k=({header:e})=>l.a.createElement("header",{className:"basket__react-stage-header"},e),b=({header:e,...t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{header:e}),l.a.createElement(_,t)),v=({name:e,date:t,count:a,price:r,link:n})=>l.a.createElement("li",{className:"basket__react-final-goods-item"},l.a.createElement("a",{href:n,className:"basket__react-final-goods-item-link"},l.a.createElement("p",{className:"basket__react-final-goods-item-name"},e)),l.a.createElement("p",{className:"basket__react-final-goods-item-date"},t),l.a.createElement("p",{className:"basket__react-final-goods-item-count"},a," шт."),l.a.createElement("p",{className:"basket__react-final-goods-item-price"},r*a," р.")),E=()=>{return l.a.createElement("ul",{className:"basket__react-final-goods-item-list"},window.basketApi.getBasketItems().map(e=>l.a.createElement(v,e)))},y=()=>{const e=parseInt(window.basketApi.getTotalPricesAndItems().replace("Итого ","")),t=window.basketApi.getItemsPrice();return l.a.createElement("header",{className:"basket__react-final-goods-header"},l.a.createElement("p",{className:"basket__react-final-goods-header-positions"},(e=>{switch(!0){case"1"===e.toString().slice(-1):return`${e} позиция`;case+e.toString().slice(-1)>1&&+e.toString().slice(-1)<5:return`${e} позиции`;default:return`${e} позиций`}})(e)),l.a.createElement("p",{className:"basket__react-final-goods-header-price"},"На сумму ",t," р."))},f=()=>l.a.createElement("div",{className:"basket__react-final-goods"},l.a.createElement(y,null),l.a.createElement(E,null)),h=()=>{return l.a.createElement("header",{className:"basket__react-final-delivery-header"},l.a.createElement("p",{className:"basket__react-final-delivery-header-type"},"pickup"===getCookie("deliveryType")?"Самовывоз":"Пункт выдачи"),l.a.createElement("p",{className:"basket__react-final-delivery-header-price"},`${getCookie("deliveryCost")||0} р.`))},g=()=>{return l.a.createElement("div",{className:"basket__react-final-delivery-body"},l.a.createElement("p",{className:"basket__react-final-delivery-address-text"},"Адрес:"),l.a.createElement("p",{className:"basket__react-final-delivery-address"},getCookie("deliveryAddress")||""))},N=()=>l.a.createElement("div",{className:"basket__react-final-delivery"},l.a.createElement(h,null),l.a.createElement(g,null)),x=()=>{const e=window.basketApi.getMaxDeliveryDate();return l.a.createElement("div",{className:"basket__react-final-delivery-deadline"},l.a.createElement("p",{className:"basket__react-final-delivery-deadline-text"},"Срок доставки"),l.a.createElement("p",{className:"basket__react-final-delivery-deadline-days"},e," дн."))},w=()=>{const e=window.basketApi.getTotalSum();return l.a.createElement("div",{className:"basket__react-final-sum"},l.a.createElement("div",{className:"basket__react-final-message"},"Итого:"),l.a.createElement("div",{className:"basket__react-final-price"},e," р."))},C=()=>l.a.createElement("div",{className:"basket__react-final-body"},l.a.createElement(f,null),l.a.createElement(N,null),l.a.createElement(x,null),l.a.createElement(w,null)),O=()=>l.a.createElement(C,null),P=()=>l.a.createElement(O,null);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const T=({text:e,available:t,...a})=>l.a.createElement("button",j({},a,{disabled:!t}),l.a.createElement("span",{className:"basket__react-bottom-nav-btn-text"},e),l.a.createElement("span",{className:"basket__react-bottom-nav-btn-arrow"})),A=({step:e,onClick:t,buttonAvailable:a,setButtonState:n})=>{Object(r.useEffect)(()=>{const e=[getCookie("deliveryAddress"),getCookie("deliveryDeadline"),getCookie("deliveryCost"),getCookie("deliveryType")].every(e=>!!e);n(e)},[]);return l.a.createElement("div",{className:"basket__react-bottom-nav"},(()=>{const r={2:{text:["Back To Basket","Next"],className:"basket__react-bottom-nav-btn",onClick:[window.basketApi.returnToBasket,t.bind(null,"add")],available:[!0,a]},3:{text:["Prev","Оформить"],className:"basket__react-bottom-nav-btn",onClick:[t.bind(null,"sub"),e=>e.preventDefault()],available:[!0,a]}};return new Array(2).fill("").map((t,a)=>{const{text:n,className:s,onClick:c,available:i}=r[e];return l.a.createElement(T,{key:a,text:n[a],className:s,onClick:c[a],available:i[a]})})})())},S=()=>{return l.a.createElement("div",{className:"basket__react-bottom-info"},(()=>{const e=window.basketApi.getTotalPricesAndItems();return[{text:e.replace("Итого ","").split(":")[0],value:e.split(":")[1],className:"basket__react-bottom-info-item basket__react-bottom-info-item--products"},{text:"Стоимость доставки",value:`${window.basketApi.getDeliveryPrice()} р`,className:"basket__react-bottom-info-item basket__react-bottom-info-item--delivery"}].map(({text:e,value:t,className:a},r)=>l.a.createElement("div",{key:r,className:a},e,": ",l.a.createElement("span",{className:"basket__react-bottom-info-item-mark"},t)))})())},M=()=>l.a.createElement("div",{className:"basket__react-bottom-message"},l.a.createElement("p",{className:"basket__react-bottom-message-text"},"Обращаем Ваше внимание, что окончательная стоимость и состав заказа, если в нём присутствуют товары и/или услуги, участвующие в акции, будут подтверждены после обработки заказа.")),$=({...e})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"basket__react-bottom-panel"},l.a.createElement(S,null),l.a.createElement(A,e)),l.a.createElement(M,null)),B=({text:e,className:t,onClick:a})=>l.a.createElement("li",{onClick:a,className:t.join(" ")},e);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const F=({header:e,onClick:t,...a})=>{const r=["Корзина","Способ доставки","Подтверждение заказа"];return l.a.createElement("ul",{className:"basket__progress-header"},(e=>r.map((r,n)=>{const s=window.innerWidth,c={...a,text:s>450?r:n+1,className:(()=>{const t=["basket__progress-header-item"];return e===r&&t.push("basket__progress-header-item--active"),t})(),onClick:(e=>0===e?window.basketApi.returnToBasket:1===e?t.bind(null,"sub"):2===e?t.bind(null,"add"):void 0)(n)};return l.a.createElement(B,D({key:n},c))}))(e))};var I=a(1);a.n(I).a.render(l.a.createElement(()=>{Object(r.useEffect)(()=>{const e=getCookie("setStage");saveCookie("setStage",""),e&&i(o(e,c))},[]);const e={2:"Способ доставки",3:"Подтверждение заказа"},[t,a]=Object(r.useState)(!1),[n,s]=Object(r.useState)(getCookie("deliveryType")||"pickup"),[c,i]=Object(r.useState)(2),o=(e,t)=>{const a="add"===e?t+1:t-1;return a<4&&a>1?a:t},m=2===c?l.a.createElement(b,{header:e[c],onTabClick:e=>s(e),deliveryType:n,setButtonState:a}):l.a.createElement(P,null);return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{header:e[c],onClick:e=>i(t=>o(e,t))}),m,l.a.createElement($,{onClick:e=>i(t=>o(e,t)),step:c,buttonAvailable:t,setButtonState:a}))},null),document.querySelector(".basket__stages"))}]);