import{F as w,a7 as S,a8 as x,a9 as P}from"./index.a36818d1.js";var b=function(n,r){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])},b(n,r)};function T(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");b(n,r);function t(){this.constructor=n}n.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var m=function(){return m=Object.assign||function(r){for(var t,o=1,i=arguments.length;o<i;o++){t=arguments[o];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r},m.apply(this,arguments)};function U(n,r,t,o){function i(e){return e instanceof t?e:new t(function(s){s(e)})}return new(t||(t=Promise))(function(e,s){function l(c){try{a(o.next(c))}catch(u){s(u)}}function h(c){try{a(o.throw(c))}catch(u){s(u)}}function a(c){c.done?e(c.value):i(c.value).then(l,h)}a((o=o.apply(n,r||[])).next())})}function W(n,r){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},o,i,e,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(a){return function(c){return h([a,c])}}function h(a){if(o)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(t=0)),t;)try{if(o=1,i&&(e=a[0]&2?i.return:a[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,a[1])).done)return e;switch(i=0,e&&(a=[a[0]&2,e.value]),a[0]){case 0:case 1:e=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,i=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!e||a[1]>e[0]&&a[1]<e[3])){t.label=a[1];break}if(a[0]===6&&t.label<e[1]){t.label=e[1],e=a;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(a);break}e[2]&&t.ops.pop(),t.trys.pop();continue}a=r.call(n,t)}catch(c){a=[6,c],i=0}finally{o=e=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function k(n){var r=typeof Symbol=="function"&&Symbol.iterator,t=r&&n[r],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function F(n,r){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),i,e=[],s;try{for(;(r===void 0||r-- >0)&&!(i=o.next()).done;)e.push(i.value)}catch(l){s={error:l}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(s)throw s.error}}return e}function I(n,r,t){if(t||arguments.length===2)for(var o=0,i=r.length,e;o<i;o++)(e||!(o in r))&&(e||(e=Array.prototype.slice.call(r,0,o)),e[o]=r[o]);return n.concat(e||Array.prototype.slice.call(r))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var R=function(){function n(r){r===void 0&&(r={}),this.adapter=r}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function A(n,r){if(n.closest)return n.closest(r);for(var t=n;t;){if(E(t,r))return t;t=t.parentElement}return null}function E(n,r){var t=n.matches||n.webkitMatchesSelector||n.msMatchesSelector;return t.call(n,r)}function $(n){var r=n;if(r.offsetParent!==null)return r.scrollWidth;var t=r.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var o=t.scrollWidth;return document.documentElement.removeChild(t),o}const z=Object.freeze(Object.defineProperty({__proto__:null,closest:A,estimateScrollWidth:$,matches:E},Symbol.toStringTag,{value:"Module"}));function B(n){return Object.entries(n).filter(([r,t])=>r!==""&&t).map(([r])=>r).join(" ")}function G(n,r,t,o={bubbles:!0},i=!1){if(typeof Event>"u")throw new Error("Event not defined.");if(!n)throw new Error("Tried to dipatch event without element.");const e=new CustomEvent(r,Object.assign(Object.assign({},o),{detail:t}));if(n==null||n.dispatchEvent(e),i&&r.startsWith("SMUI")){const s=new CustomEvent(r.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},o),{detail:t}));n==null||n.dispatchEvent(s),s.defaultPrevented&&e.preventDefault()}return e}const _=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,C=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function N(n){let r,t=[];n.$on=(i,e)=>{let s=i,l=()=>{};return r?l=r(s,e):t.push([s,e]),s.match(_)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',s),()=>{l()}};function o(i){S(n,i)}return i=>{const e=[],s={};r=(l,h)=>{let a=l,c=h,u=!1;const g=a.match(_),M=a.match(C),O=g||M;if(a.match(/^SMUI:\w+:/)){const f=a.split(":");let p="";for(let d=0;d<f.length;d++)p+=d===f.length-1?":"+f[d]:f[d].split("-").map(y=>y.slice(0,1).toUpperCase()+y.slice(1)).join("");console.warn(`The event ${a.split("$")[0]} has been renamed to ${p.split("$")[0]}.`),a=p}if(O){const f=a.split(g?":":"$");a=f[0];const p=f.slice(1).reduce((d,y)=>(d[y]=!0,d),{});p.passive&&(u=u||{},u.passive=!0),p.nonpassive&&(u=u||{},u.passive=!1),p.capture&&(u=u||{},u.capture=!0),p.once&&(u=u||{},u.once=!0),p.preventDefault&&(c=x(c)),p.stopPropagation&&(c=P(c))}const j=w(i,a,c,u),v=()=>{j();const f=e.indexOf(v);f>-1&&e.splice(f,1)};return e.push(v),a in s||(s[a]=w(i,a,o)),v};for(let l=0;l<t.length;l++)r(t[l][0],t[l][1]);return{destroy:()=>{for(let l=0;l<e.length;l++)e[l]();for(let l of Object.entries(s))l[1]()}}}}function Y(n,r){let t=[];if(r)for(let o=0;o<r.length;o++){const i=r[o],e=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(e(n,i[1])):t.push(e(n))}return{update(o){if((o&&o.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(o)for(let i=0;i<o.length;i++){const e=t[i];if(e&&e.update){const s=o[i];Array.isArray(s)&&s.length>1?e.update(s[1]):e.update()}}},destroy(){for(let o=0;o<t.length;o++){const i=t[o];i&&i.destroy&&i.destroy()}}}}export{R as M,T as _,m as a,F as b,B as c,G as d,I as e,N as f,k as g,U as h,W as i,E as m,z as p,Y as u};
