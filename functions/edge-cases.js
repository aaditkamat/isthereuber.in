!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handler=function(e,t,r){r(null,{statusCode:200,body:JSON.stringify(n.cases)})};var n=r(3)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.cases=void 0;const n=[{type:"price",message:"The price for getting an Uber is the same as getting a taxi",city:["berlin"]},{type:"price",message:"A ride from Charles de Gaule Airport to Paris is legally set at 50-55€, and 30-35€ from Orly Airport. Beware of frauds.",city:["paris"]},{type:"safety",message:"Be aware! Some taxi drivers may attack your uber driver.",city:["porto","istanbul"]},{type:"price",message:"Uber drivers only take payment by cash. If they think you'll pay by card then they'll cancel the ride",city:["san salvador","buenos aires"]},{type:"service",message:"Only Uber Black is available in Seoul.",city:["seoul"]},{type:"service",message:"It is preferred to take Yandex Taxi",country:["russia"]},{type:"service",message:"There are really few cars",city:["helsinki"]}];t.cases=n;t.default=(({name:e,info:{country:t={long_name:""}}})=>{const r=n.find(r=>r.city&&r.city.includes(e.toLowerCase())||r.country&&r.country.includes(t.long_name.toLowerCase()));if(r)return r.message})}]));