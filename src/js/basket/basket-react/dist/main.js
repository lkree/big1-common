!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r);var s=({...e})=>n.a.createElement("button",e,"Продолжить");var l=e=>{const t=e=>Array.isArray(e)?e.reduce((e,t)=>(e[t]=(e=>{const t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0})(t),e),{}):e,[a,n]=Object(r.useState)(t(e));return Object(r.useEffect)(()=>{a&&Object.keys(a)[0]&&Object.keys(a).forEach(e=>a[e]&&((e,t)=>{const a={path:"/",secure:!0,"max-age":new Date(Date.now()+864e7)};let r=encodeURIComponent(e)+"="+encodeURIComponent(t);for(const e in a){r+="; "+e;const t=a[e];!0!==t&&(r+="="+t)}document.cookie=r})(e,a[e]))},[a]),[a,()=>n(e=>t(Object.keys(e)))]};const c=Object(r.createContext)([{},()=>{}]);var o=({children:e})=>{const[t,a]=l(["deliveryAddress","deliveryType","deliveryCost","deliveryDeadline","selfExportPointId","deliveryCity"]),[s,o]=Object(r.useState)({...t,pickup:{header:"Офисы самовывоза",linkText:"Выбрать другое место самовывоза",showModule:!1},selfExport:{header:"Пункты доставки",linkText:"Выбрать другой пункт выдачи",showModule:!1}});return n.a.createElement(c.Provider,{value:[s,(e={})=>(a(),o(a=>({...a,...t,...e})),s)]},e)};var i=e=>{const[t,a]=l("string"==typeof e&&[e]||e),[n,s]=Object(r.useState)(!1);return Object(r.useEffect)(()=>{s(t&&Object.keys(t).every(e=>!!t[e]))},[t]),[n,()=>a()]};const m=Object(r.createContext)([{},()=>{}]);var d=({children:e})=>{const[t,a]=i(["deliveryAddress","deliveryType","deliveryCost","deliveryDeadline"]);return n.a.createElement(m.Provider,{value:[t,a]},e)};const p=({className:e,next:t,setNext:a})=>{const[,l]=Object(r.useContext)(m),[{pickup:o},i]=Object(r.useContext)(c);return Object(r.useEffect)(()=>{window.deliveryPickup()},[]),n.a.createElement("div",{className:`delivery-pickup ${e||""}`,"data-delivery-type":"Самовывоз"},n.a.createElement("div",{className:"delivery-pickup__chosen-city-wrapper"},n.a.createElement("p",{className:"delivery-pickup__chosen-city-descr"},"Текущий город: "),n.a.createElement("p",{className:"delivery-pickup__chosen-city"}),n.a.createElement("button",{className:"delivery-pickup__change-city"},"Выбрать другой город")),n.a.createElement("input",{type:"text",className:"delivery-pickup__input",placeholder:"Введите улицу"}),n.a.createElement("header",{className:"delivery-pickup__points-header"},o.header),n.a.createElement("div",{className:"delivery-pickup__points-list",onClick:({target:e})=>{l(),i(),e.classList.contains("delivery-pickup__point--active")?a(!0):a(!1)}}),t&&n.a.createElement(s,{onClick:()=>{const{showModule:e}=o;i({pickup:{...o,showModule:!e}})},className:"delivery-pickup__continue-btn"}))},u=({deliveryType:e,setNext:t,next:a})=>{const[s,l]=Object(r.useContext)(c),o=s[e],{deliveryAddress:i}=s,{showModule:m,linkText:d}=o;Object(r.useEffect)(()=>{const t=!i&&sessionStorage.getItem("haveToOpenPickupModule");t&&sessionStorage.removeItem("haveToOpenPickupModule"),l({[e]:{...o,showModule:t?!m:m}})},[a]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"basket__react-delivery-choose-point"},"Текущий пункт выдачи: ",n.a.createElement("strong",{className:"basket__react-delivery-strong"},e===s.deliveryType?s.deliveryAddress:"не выбран")),n.a.createElement("button",{onClick:()=>{t(!1),l({[e]:{...o,showModule:!m}})},className:"basket__react-delivery-choose-pickAnotherPoint"},d))},_=({text:e,className:t})=>n.a.createElement("div",{className:"basket__react-additional-info-item basket__react-additional-info-item--"+t},e),b=()=>{const[e,t]=Object(r.useState)({header:"",name:"",phone:"",schedule:"",mapLink:""}),[{deliveryType:a,deliveryCity:s,deliveryAddress:l}]=Object(r.useContext)(c);Object(r.useEffect)(()=>{try{"pickup"===a?(()=>{const e=window.citiesList.filter(({name:e})=>e===s)[0],{mapLink:a=""}=e,r={...e.branches.filter(({name:e})=>e===l)[0]};t({...r,header:"Контактная информация",mapLink:a})})():((e,a)=>{const r=new ShiptorPointsGetter({usersCity:e,fromCity:"_"});r.getUsersCityKladr().then(()=>{r.getDeliveryPoints().then(({result:e})=>{const r=e.filter(e=>e.id===a);try{const[{address:e,phones:a=[],work_schedule:n}]=r;t({header:"Контактная информация",name:e,phone:a[0]&&a.reduce((e,t)=>`${e} + /n + ${t}`),schedule:n,mapLink:""})}catch({message:e}){console.log(e)}})})})(getCookie("deliveryCity"),+getCookie("selfExportPointId"))}catch({message:e}){console.log(e)}},[]);const{header:o="",name:i="",phone:m="",schedule:d="",mapLink:p=""}=e;return(o&&i||p)&&n.a.createElement("section",{className:"basket__react-additional-info"},n.a.createElement("header",{className:"basket__react-additional-info-header"},o),n.a.createElement("div",{className:"basket__react-additional-info-body"},n.a.createElement("div",{className:"basket__react-additional-info-left-part"},(()=>{const e={name:i,phone:m,schedule:d};return Object.keys(e).map(t=>e[t]&&n.a.createElement(_,{text:e[t],className:t}))})()),n.a.createElement("div",{className:"basket__react-additional-info-right-part"},p&&n.a.createElement("iframe",{src:p,width:"100%",height:"100%",frameBorder:"0"}))))};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const y=({deliveryType:e,...t})=>{const[{deliveryType:a,pickup:s}]=Object(r.useContext)(c),{showModule:l}=s,o=e===a;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,v({deliveryType:e},t)),l?n.a.createElement(p,t):o&&n.a.createElement(b,null))},k=({className:e,next:t,setNext:a})=>{const[,l]=Object(r.useContext)(m),[{selfExport:o},i]=Object(r.useContext)(c);return Object(r.useEffect)(()=>{window.deliverySelfExport()},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:`delivery-selfExport ${e}`,"data-delivery-type":"Пункт выдачи"},n.a.createElement("div",{className:"delivery-selfExport__wait-screen hidden preloader-mini"},n.a.createElement("div",{className:"preloader-mini__item"},n.a.createElement("div",{className:"preloader-mini__item-tool"}),n.a.createElement("div",{className:"preloader-mini__item-tool"}),n.a.createElement("div",{className:"preloader-mini__item-tool"}),n.a.createElement("div",{className:"preloader-mini__item-tool"}))),n.a.createElement("div",{className:"delivery-selfExport__chosen-city-wrapper"},n.a.createElement("p",{className:"delivery-selfExport__chosen-city-descr"},"Текущий город: "),n.a.createElement("p",{className:"delivery-selfExport__chosen-city"}),n.a.createElement("button",{className:"delivery-selfExport__change-city"},"Выбрать другой город")),n.a.createElement("section",{className:"delivery-selfExport__pickup"},n.a.createElement("header",{className:"delivery-selfExport__pickup-header"},n.a.createElement("p",{className:"delivery-selfExport__pickup-header-text"},"Пункты выдачи"),n.a.createElement("button",{className:"delivery-selfExport__show-map"},"Посмотреть на карте")),n.a.createElement("input",{type:"text",className:"delivery-selfExport__pickup-search-input",placeholder:"Поиск пункта выдачи"}),n.a.createElement("ul",{onClick:({target:e})=>{l(),i(),e.classList.contains("delivery-selfExport__pickup-point--active")||e.parentElement.classList.contains("delivery-selfExport__pickup-point--active")?a(!0):a(!1)},className:"delivery-selfExport__pickup-list"}),t&&n.a.createElement(s,{onClick:()=>{const{showModule:e}=o;i({selfExport:{...o,showModule:!e}})},className:"delivery-pickup__continue-btn"})),n.a.createElement("section",{className:"delivery-selfExport__error hidden"},n.a.createElement("p",{className:"delivery-selfExport__error-text"},"К сожалению пункты выдачи не найдены :(",n.a.createElement("br",null),"Попробуйте сменить город"))))};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const f=({deliveryType:e,...t})=>{const[{deliveryType:a,selfExport:s}]=Object(r.useContext)(c),{showModule:l}=s,o=e===a;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,E({deliveryType:e},t)),l?n.a.createElement(k,t):o&&n.a.createElement(b,null))},h=({onTabClick:e,deliveryType:t,...a})=>{const r="pickup"===t,s={deliveryType:t,...a},l=`basket__progress-header-item basket__progress-header-item--without-before ${r&&"basket__progress-header-item--active"}`,c=`basket__progress-header-item basket__progress-header-item--without-before ${!r&&"basket__progress-header-item--active"}`;return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"basket__tabs-wrapper"},n.a.createElement("li",{className:l,onClick:()=>e("pickup")},"Самовывоз"),n.a.createElement("li",{className:c,onClick:()=>e("selfExport")},"Доставка")),r?n.a.createElement(y,s):n.a.createElement(f,s))},N=({header:e})=>n.a.createElement("header",{className:"basket__react-stage-header"},e),g=({header:e,...t})=>n.a.createElement(n.a.Fragment,null,n.a.createElement(N,{header:e}),n.a.createElement(h,t)),x=({name:e,date:t,count:a,price:r,link:s})=>n.a.createElement("li",{className:"basket__react-final-goods-item"},n.a.createElement("a",{href:s,className:"basket__react-final-goods-item-link"},n.a.createElement("p",{className:"basket__react-final-goods-item-name"},e)),n.a.createElement("p",{className:"basket__react-final-goods-item-count"},a," шт."),n.a.createElement("p",{className:"basket__react-final-goods-item-price"},r*a," р.")),w=()=>{const e=window.basketApi.getBasketItems();return n.a.createElement("ul",{className:"basket__react-final-goods-item-list"},e.map(e=>n.a.createElement(x,e)))},O=()=>{const e=parseInt(window.basketApi.getTotalPricesAndItems().replace("Итого ","")),t=window.basketApi.getItemsPrice();return n.a.createElement("header",{className:"basket__react-final-goods-header"},n.a.createElement("p",{className:"basket__react-final-goods-header-positions"},(e=>{switch(!0){case"1"===e.toString().slice(-1):return`${e} позиция`;case+e.toString().slice(-1)>1&&+e.toString().slice(-1)<5:return`${e} позиции`;default:return`${e} позиций`}})(e),n.a.createElement("button",{className:"basket__react-final-goods-open-button",onClick:({target:e})=>{const t=document.querySelector(".basket__react-final-goods-item-list"),{style:{display:a}}=t;"none"!==a&&a?($(t).slideUp(),e.classList.remove("basket__react-final-goods-open-button--open")):($(t).slideDown(),e.classList.add("basket__react-final-goods-open-button--open"))}},"Открыть")),n.a.createElement("p",{className:"basket__react-final-goods-header-price"},t," р."))},C=()=>n.a.createElement("div",{className:"basket__react-final-goods"},n.a.createElement(O,null),n.a.createElement(w,null)),j=()=>{const[{deliveryType:e}]=Object(r.useContext)(c);return n.a.createElement("header",{className:"basket__react-final-delivery-header"},n.a.createElement("p",{className:"basket__react-final-delivery-price-text"},"pickup"===e?"Самовывоз":"Доставка"),n.a.createElement("p",{className:"basket__react-final-delivery-price"},`${getCookie("deliveryCost")||0} р.`))},T=()=>{const e=window.basketApi.getMaxDeliveryDate();return n.a.createElement("div",{className:"basket__react-final-delivery-deadline"},n.a.createElement("p",{className:"basket__react-final-delivery-deadline-text"},"Срок доставки"),n.a.createElement("p",{className:"basket__react-final-delivery-deadline-days"},e," дн."))},S=()=>{return n.a.createElement("div",{className:"basket__react-final-delivery-body"},n.a.createElement("div",{className:"basket__react-final-delivery-address-wrapper"},n.a.createElement("p",{className:"basket__react-final-delivery-address"},getCookie("deliveryAddress")||"")),n.a.createElement(T,null))},P=()=>n.a.createElement("div",{className:"basket__react-final-delivery"},n.a.createElement(j,null),n.a.createElement(S,null)),A=()=>n.a.createElement("div",{className:"basket__react-final-body"},n.a.createElement(C,null),n.a.createElement(P,null)),M=()=>n.a.createElement(A,null),I=()=>n.a.createElement(M,null);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const D=({text:e,available:t,...a})=>n.a.createElement("button",L({},a,{disabled:!t}),n.a.createElement("span",{className:"basket__react-bottom-nav-btn-text"},e),n.a.createElement("span",{className:"basket__react-bottom-nav-btn-arrow"})),F=({step:e,onClick:t})=>{const[a]=Object(r.useContext)(m);return n.a.createElement("div",{className:"basket__react-bottom-nav"},(()=>{const r={2:{text:["К корзине","Далее"],className:["basket__react-bottom-nav-btn","basket__react-bottom-nav-btn"],onClick:[window.basketApi.returnToBasket,t.bind(null,"add")],available:[!0,a]},3:{text:["Назад","Оформить"],className:["basket__react-bottom-nav-btn","basket__react-bottom-nav-btn basket__react-bottom-nav-btn--confirm"],onClick:[t.bind(null,"sub"),e=>{e.preventDefault(),window.location.assign("/orders/new")}],available:[!0,a]}};return new Array(2).fill("").map((t,a)=>{const{text:s,className:l,onClick:c,available:o}=r[e];return n.a.createElement(D,{key:a,text:s[a],className:l[a],onClick:c[a],available:o[a]})})})())},B=({next:e,step:t})=>{const[{deliveryCost:a},s]=l(["deliveryCost"]);return Object(r.useEffect)(()=>s(),[e]),n.a.createElement("div",{className:"basket__react-bottom-info"},(()=>{const e=window.basketApi.getTotalPricesAndItems(),r=a?`${a} р`:"не выбран пункт выдачи";return[{text:e.split(":")[0],value:e.split(":")[1],className:"basket__react-bottom-info-item basket__react-bottom-info-item--products",step:[2]},{text:"Стоимость доставки",value:r,className:"basket__react-bottom-info-item basket__react-bottom-info-item--delivery",step:[2]},{text:"Сумма к оплате",value:` ${window.basketApi.getTotalSum().toLocaleString()} р.`,className:"basket__react-bottom-info-item basket__react-bottom-info-item--common",step:[3]}].filter(e=>e.step.includes(t)).map(({text:e,value:t,className:a},r)=>n.a.createElement("div",{key:r,className:a},e,": ",n.a.createElement("span",{className:"basket__react-bottom-info-item-mark"},t)))})())},R=()=>n.a.createElement("div",{className:"basket__react-bottom-message"},n.a.createElement("p",{className:"basket__react-bottom-message-text"},"Обращаем Ваше внимание, что стоимость доставки предварительная. Окончательная стоимость доставки будет рассчитана менеджером, исходя из веса и объема заказанных товаров.")),U=({...e})=>n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"basket__react-bottom-panel"},n.a.createElement(B,e),n.a.createElement(F,e)),n.a.createElement(R,null)),q=({text:e,className:t,onClick:a})=>n.a.createElement("li",{onClick:a,className:t.join(" ")},e);function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}const K=({header:e,onClick:t,setStep:a,...s})=>{const l=["Корзина","Способ доставки","Подтверждение заказа"],[c]=Object(r.useContext)(m);return n.a.createElement("ul",{className:"basket__progress-header"},(e=>l.map((a,r)=>{const l=window.innerWidth,o={...s,text:l>450?a:r+1,className:(()=>{const t=["basket__progress-header-item"];return e===a&&t.push("basket__progress-header-item--active"),t})(),onClick:(e=>0===e?(t.bind(null,"sub")(),window.basketApi.returnToBasket()):1===e?t.bind(null,"sub")():2===e?c?t.bind(null,"add")():()=>{}:void 0).bind(null,r)};return n.a.createElement(q,G({key:r},o))}))(e))};var W=a(1);a.n(W).a.render(n.a.createElement(()=>{const e={2:"Способ доставки",3:"Подтверждение заказа"},[t,a]=Object(r.useState)(!1),[{deliveryType:s}]=l(["deliveryType"]),[c,i]=Object(r.useState)(s||"pickup"),[m,p]=Object(r.useState)((()=>{const e=sessionStorage.getItem("prevBasketPage");return sessionStorage.removeItem("prevBasketPage"),e&&+e})()||2),u=(e,t)=>{const a="add"===e?t+1:t-1;return a<4&&a>1?a:t},_=2===m?n.a.createElement(g,{header:e[m],onTabClick:e=>i(e),deliveryType:c,next:t,setNext:a}):n.a.createElement(I,null);return n.a.createElement(o,null,n.a.createElement(d,null,n.a.createElement(K,{setStep:p,header:e[m],onClick:e=>p(t=>u(e,t))}),_,n.a.createElement(U,{onClick:e=>p(t=>u(e,t)),step:m,next:t})))},null),document.querySelector(".basket__stages"))}]);