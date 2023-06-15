import{S as Q,i as w,s as x,L as A,V as M,k as L,a as $,l as S,m as O,c as ee,h as R,W as F,b as te,E as H,X as k,F as W,M as U,N as y,O as D,Y as P,Z as j,g as B,d as G,_ as ne,$ as q,a0 as le,a2 as ae,o as ie,a1 as se,w as N}from"./index.a36818d1.js";import{_ as re,a as T,M as ue,c as V,u as X,f as oe}from"./useActions.03d1b3f8.js";import{p as Y,e as Z}from"./prefixFilter.9aa1f37f.js";/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var fe={ROOT:"mdc-form-field"},de={LABEL_SELECTOR:".mdc-form-field > label"};/**
 * @license
 * Copyright 2017 Google Inc.
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
 */var ce=function(n){re(t,n);function t(a){var s=n.call(this,T(T({},t.defaultAdapter),a))||this;return s.click=function(){s.handleClick()},s}return Object.defineProperty(t,"cssClasses",{get:function(){return fe},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return de},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},t.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},t.prototype.handleClick=function(){var a=this;this.adapter.activateInputRipple(),requestAnimationFrame(function(){a.adapter.deactivateInputRipple()})},t}(ue);const me=n=>({}),z=n=>({});function _e(n){let t,a,s,_,b,p,o,h,v;const I=n[14].default,r=A(I,n,n[13],null),g=n[14].label,u=A(g,n,n[13],z);let c=[{for:n[4]},Y(n[11],"label$")],m={};for(let e=0;e<c.length;e+=1)m=M(m,c[e]);let d=[{class:b=V({[n[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":n[2]==="end","mdc-form-field--nowrap":n[3]})},Z(n[11],["label$"])],f={};for(let e=0;e<d.length;e+=1)f=M(f,d[e]);return{c(){t=L("div"),r&&r.c(),a=$(),s=L("label"),u&&u.c(),this.h()},l(e){t=S(e,"DIV",{class:!0});var i=O(t);r&&r.l(i),a=ee(i),s=S(i,"LABEL",{for:!0});var E=O(s);u&&u.l(E),E.forEach(R),i.forEach(R),this.h()},h(){F(s,m),F(t,f)},m(e,i){te(e,t,i),r&&r.m(t,null),H(t,a),H(t,s),u&&u.m(s,null),n[15](s),n[16](t),o=!0,h||(v=[k(_=X.call(null,s,n[5])),k(p=X.call(null,t,n[0])),k(n[9].call(null,t)),W(t,"SMUIGenericInput:mount",n[10]),W(t,"SMUIGenericInput:unmount",n[17])],h=!0)},p(e,[i]){r&&r.p&&(!o||i&8192)&&U(r,I,e,e[13],o?D(I,e[13],i,null):y(e[13]),null),u&&u.p&&(!o||i&8192)&&U(u,g,e,e[13],o?D(g,e[13],i,me):y(e[13]),z),F(s,m=P(c,[(!o||i&16)&&{for:e[4]},i&2048&&Y(e[11],"label$")])),_&&j(_.update)&&i&32&&_.update.call(null,e[5]),F(t,f=P(d,[(!o||i&14&&b!==(b=V({[e[1]]:!0,"mdc-form-field":!0,"mdc-form-field--align-end":e[2]==="end","mdc-form-field--nowrap":e[3]})))&&{class:b},i&2048&&Z(e[11],["label$"])])),p&&j(p.update)&&i&1&&p.update.call(null,e[0])},i(e){o||(B(r,e),B(u,e),o=!0)},o(e){G(r,e),G(u,e),o=!1},d(e){e&&R(t),r&&r.d(e),u&&u.d(e),n[15](null),n[16](null),h=!1,ne(v)}}}let pe=0;function ge(n,t,a){const s=["use","class","align","noWrap","inputId","label$use","getElement"];let _=q(t,s),{$$slots:b={},$$scope:p}=t;const o=oe(le());let{use:h=[]}=t,{class:v=""}=t,{align:I="start"}=t,{noWrap:r=!1}=t,{inputId:g="SMUI-form-field-"+pe++}=t,{label$use:u=[]}=t,c,m,d,f;ae("SMUI:generic:input:props",{id:g}),ie(()=>(m=new ce({activateInputRipple:()=>{f&&f.activateRipple()},deactivateInputRipple:()=>{f&&f.deactivateRipple()},deregisterInteractionHandler:(l,C)=>{d.removeEventListener(l,C)},registerInteractionHandler:(l,C)=>{d.addEventListener(l,C)}}),m.init(),()=>{m.destroy()}));function e(l){a(8,f=l.detail)}function i(){return c}function E(l){N[l?"unshift":"push"](()=>{d=l,a(7,d)})}function J(l){N[l?"unshift":"push"](()=>{c=l,a(6,c)})}const K=()=>a(8,f=void 0);return n.$$set=l=>{t=M(M({},t),se(l)),a(11,_=q(t,s)),"use"in l&&a(0,h=l.use),"class"in l&&a(1,v=l.class),"align"in l&&a(2,I=l.align),"noWrap"in l&&a(3,r=l.noWrap),"inputId"in l&&a(4,g=l.inputId),"label$use"in l&&a(5,u=l.label$use),"$$scope"in l&&a(13,p=l.$$scope)},[h,v,I,r,g,u,c,d,f,o,e,_,i,p,b,E,J,K]}class ve extends Q{constructor(t){super(),w(this,t,ge,_e,x,{use:0,class:1,align:2,noWrap:3,inputId:4,label$use:5,getElement:12})}get getElement(){return this.$$.ctx[12]}}export{ve as F};
