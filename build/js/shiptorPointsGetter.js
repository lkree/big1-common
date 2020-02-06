"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null==arguments[e]?{}:arguments[e],i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),i.forEach(function(e){_defineProperty(t,e,r[e])})}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}class ShiptorPointsGetter{constructor({usersCity:t,fromCity:e}){_defineProperty(this,"_escapeHtml",t=>{const e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return t.replace(/[&<>"']/g,t=>e[t])}),_defineProperty(this,"_getData",async t=>await fetch("https://api.shiptor.ru/public/v1",{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then(t=>t.json())),_defineProperty(this,"getDeliveryPoints",async({courier:t}={})=>{t&&(t={courier:t});const e=this._dataHandler({method:"getDeliveryPoints",params:_objectSpread({kladr_id:`${this.usersCityKladr}`,cod:"0"},t)});return await this._getData(e)}),_defineProperty(this,"getUsersCityKladr",async()=>{const t=this._dataHandler({method:"suggestSettlement",params:{query:this.usersCity,country_code:"RU"}});let e=await this._getData(t);try{this.usersCityKladr=e.result[0].kladr_id}catch(t){this.usersCityKladr="00000000000"}return e}),_defineProperty(this,"calculateShipping",async()=>{const t=this._dataHandler({method:"calculateShipping",params:{kladr_id:`${this.usersCityKladr}`,kladr_id_from:"76000001000",cod:"0",length:10,width:10,height:10,weight:1,declared_cost:0}});return await this._getData(t)}),_defineProperty(this,"_dataHandler",t=>{let e=_.clone(this.cityData);return JSON.stringify(_.extend(e,t))}),this.usersCity=this._escapeHtml(t),this.fromCity=e,this.cityData={id:"JsonRpcClient.js",jsonrpc:"2.0",method:""}}}