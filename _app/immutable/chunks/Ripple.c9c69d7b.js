import{S as te,i as ie,s as O,e as A,b as D,d as C,f as ae,g as S,h as b,$ as z,a0 as ne,V as R,a1 as se,v as re,w as V,C as W,L as oe,k as le,l as ue,m as ce,aa as k,X as I,M as de,N as fe,O as pe,Y as Z,Z as me,_ as he,x as J,y as K,z as be,A as Q,a3 as E,B as N,a4 as ve,a2 as Ce,H as Se}from"./index.a36818d1.js";import{_ as Re,a as q,g as M,M as we,f as ge,u as ye,c as Y,p as De}from"./useActions.03d1b3f8.js";/**
 * @license
 * Copyright 2019 Google Inc.
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
 */function Fe(s){return s===void 0&&(s=window),He(s)?{passive:!0}:!1}function He(s){s===void 0&&(s=window);var e=!1;try{var t={get passive(){return e=!0,!1}},i=function(){};s.document.addEventListener("test",i,t),s.document.removeEventListener("test",i,t)}catch{e=!1}return e}const Le=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Fe},Symbol.toStringTag,{value:"Module"}));/**
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
 */var Me={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ue={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},x={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},U;function Ge(s,e){e===void 0&&(e=!1);var t=s.CSS,i=U;if(typeof U=="boolean"&&!e)return U;var a=t&&typeof t.supports=="function";if(!a)return!1;var n=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return i=n||o,e||(U=i),i}function Be(s,e,t){if(!s)return{x:0,y:0};var i=e.x,a=e.y,n=i+t.left,o=a+t.top,r,l;if(s.type==="touchstart"){var c=s;r=c.changedTouches[0].pageX-n,l=c.changedTouches[0].pageY-o}else{var u=s;r=u.pageX-n,l=u.pageY-o}return{x:r,y:l}}/**
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
 */var T=["touchstart","pointerdown","mousedown","keydown"],$=["touchend","pointerup","mouseup","contextmenu"],G=[],ze=function(s){Re(e,s);function e(t){var i=s.call(this,q(q({},e.defaultAdapter),t))||this;return i.activationAnimationHasEnded=!1,i.activationTimer=0,i.fgDeactivationRemovalTimer=0,i.fgScale="0",i.frame={width:0,height:0},i.initialSize=0,i.layoutFrame=0,i.maxRadius=0,i.unboundedCoords={left:0,top:0},i.activationState=i.defaultActivationState(),i.activationTimerCallback=function(){i.activationAnimationHasEnded=!0,i.runDeactivationUXLogicIfReady()},i.activateHandler=function(a){i.activateImpl(a)},i.deactivateHandler=function(){i.deactivateImpl()},i.focusHandler=function(){i.handleFocus()},i.blurHandler=function(){i.handleBlur()},i.resizeHandler=function(){i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return Me},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ue},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var a=e.cssClasses,n=a.ROOT,o=a.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,a=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(a),t.adapter.removeClass(n),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var i,a;if(t){try{for(var n=M(T),o=n.next();!o.done;o=n.next()){var r=o.value;this.adapter.registerInteractionHandler(r,this.activateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(a=n.return)&&a.call(n)}finally{if(i)throw i.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var i,a;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var n=M($),o=n.next();!o.done;o=n.next()){var r=o.value;this.adapter.registerDocumentInteractionHandler(r,this.deactivateHandler)}}catch(l){i={error:l}}finally{try{o&&!o.done&&(a=n.return)&&a.call(n)}finally{if(i)throw i.error}}},e.prototype.deregisterRootHandlers=function(){var t,i;try{for(var a=M(T),n=a.next();!n.done;n=a.next()){var o=n.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(r){t={error:r}}finally{try{n&&!n.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,i;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var a=M($),n=a.next();!n.done;n=a.next()){var o=n.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(r){t={error:r}}finally{try{n&&!n.done&&(i=a.return)&&i.call(a)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings,a=Object.keys(i);a.forEach(function(n){n.indexOf("VAR_")===0&&t.adapter.updateCssVariable(i[n],null)})},e.prototype.activateImpl=function(t){var i=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState;if(!a.isActivated){var n=this.previousActivationEvent,o=n&&t!==void 0&&n.type!==t.type;if(!o){a.isActivated=!0,a.isProgrammatic=t===void 0,a.activationEvent=t,a.wasActivatedByPointer=a.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var r=t!==void 0&&G.length>0&&G.some(function(l){return i.adapter.containsEventTarget(l)});if(r){this.resetActivationState();return}t!==void 0&&(G.push(t.target),this.registerDeactivationHandlers(t)),a.wasElementMadeActive=this.checkElementMadeActive(t),a.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){G=[],!a.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(a.wasElementMadeActive=i.checkElementMadeActive(t),a.wasElementMadeActive&&i.animateActivation()),a.wasElementMadeActive||(i.activationState=i.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,i=e.strings,a=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,r=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",d="";if(!this.adapter.isUnbounded()){var y=this.getFgTranslationCoordinates(),g=y.startPoint,f=y.endPoint;u=g.x+"px, "+g.y+"px",d=f.x+"px, "+f.y+"px"}this.adapter.updateCssVariable(a,u),this.adapter.updateCssVariable(n,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(r),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,i=t.activationEvent,a=t.wasActivatedByPointer,n;a?n=Be(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):n={x:this.frame.width/2,y:this.frame.height/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:n,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,a=this.activationState,n=a.hasDeactivationUXRun,o=a.isActivated,r=n||!o;r&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(i)},x.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,i=this.activationState;if(i.isActivated){var a=q({},i);i.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(a)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(a),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var i=t.wasActivatedByPointer,a=t.wasElementMadeActive;(i||a)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width),a=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?i:a();var n=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!==0?this.initialSize=n-1:this.initialSize=n,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,a=t.VAR_LEFT,n=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},e}(we);function ke(s){let e=s[1],t,i,a=s[1]&&j(s);return{c(){a&&a.c(),t=A()},l(n){a&&a.l(n),t=A()},m(n,o){a&&a.m(n,o),D(n,t,o),i=!0},p(n,o){n[1]?e?O(e,n[1])?(a.d(1),a=j(n),e=n[1],a.c(),a.m(t.parentNode,t)):a.p(n,o):(a=j(n),e=n[1],a.c(),a.m(t.parentNode,t)):e&&(a.d(1),a=null,e=n[1])},i(n){i||(S(a),i=!0)},o(n){C(a),i=!1},d(n){n&&b(t),a&&a.d(n)}}}function Ie(s){let e=s[1],t,i=s[1]&&P(s);return{c(){i&&i.c(),t=A()},l(a){i&&i.l(a),t=A()},m(a,n){i&&i.m(a,n),D(a,t,n)},p(a,n){a[1]?e?O(e,a[1])?(i.d(1),i=P(a),e=a[1],i.c(),i.m(t.parentNode,t)):i.p(a,n):(i=P(a),e=a[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=a[1])},i:W,o:W,d(a){a&&b(t),i&&i.d(a)}}}function j(s){let e,t,i,a,n;const o=s[8].default,r=oe(o,s,s[7],null);let l=[s[5]],c={};for(let u=0;u<l.length;u+=1)c=R(c,l[u]);return{c(){e=le(s[1]),r&&r.c(),this.h()},l(u){e=ue(u,(s[1]||"null").toUpperCase(),{});var d=ce(e);r&&r.l(d),d.forEach(b),this.h()},h(){k(s[1])(e,c)},m(u,d){D(u,e,d),r&&r.m(e,null),s[10](e),i=!0,a||(n=[I(t=ye.call(null,e,s[0])),I(s[4].call(null,e))],a=!0)},p(u,d){r&&r.p&&(!i||d&128)&&de(r,o,u,u[7],i?pe(o,u[7],d,null):fe(u[7]),null),k(u[1])(e,c=Z(l,[d&32&&u[5]])),t&&me(t.update)&&d&1&&t.update.call(null,u[0])},i(u){i||(S(r,u),i=!0)},o(u){C(r,u),i=!1},d(u){u&&b(e),r&&r.d(u),s[10](null),a=!1,he(n)}}}function P(s){let e,t,i,a,n=[s[5]],o={};for(let r=0;r<n.length;r+=1)o=R(o,n[r]);return{c(){e=le(s[1]),this.h()},l(r){e=ue(r,(s[1]||"null").toUpperCase(),{}),ce(e).forEach(b),this.h()},h(){k(s[1])(e,o)},m(r,l){D(r,e,l),s[9](e),i||(a=[I(t=ye.call(null,e,s[0])),I(s[4].call(null,e))],i=!0)},p(r,l){k(r[1])(e,o=Z(n,[l&32&&r[5]])),t&&me(t.update)&&l&1&&t.update.call(null,r[0])},d(r){r&&b(e),s[9](null),i=!1,he(a)}}}function Oe(s){let e,t,i,a;const n=[Ie,ke],o=[];function r(l,c){return l[3]?0:1}return e=r(s),t=o[e]=n[e](s),{c(){t.c(),i=A()},l(l){t.l(l),i=A()},m(l,c){o[e].m(l,c),D(l,i,c),a=!0},p(l,[c]){let u=e;e=r(l),e===u?o[e].p(l,c):(re(),C(o[u],1,1,()=>{o[u]=null}),ae(),t=o[e],t?t.p(l,c):(t=o[e]=n[e](l),t.c()),S(t,1),t.m(i.parentNode,i))},i(l){a||(S(t),a=!0)},o(l){C(t),a=!1},d(l){o[e].d(l),l&&b(i)}}}function Xe(s,e,t){let i;const a=["use","tag","getElement"];let n=z(e,a),{$$slots:o={},$$scope:r}=e,{use:l=[]}=e,{tag:c}=e;const u=ge(ne());let d;function y(){return d}function g(m){V[m?"unshift":"push"](()=>{d=m,t(2,d)})}function f(m){V[m?"unshift":"push"](()=>{d=m,t(2,d)})}return s.$$set=m=>{e=R(R({},e),se(m)),t(5,n=z(e,a)),"use"in m&&t(0,l=m.use),"tag"in m&&t(1,c=m.tag),"$$scope"in m&&t(7,r=m.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&t(3,i=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(c)>-1)},[l,c,d,i,u,n,y,r,o,g,f]}class _e extends te{constructor(e){super(),ie(this,e,Xe,Oe,O,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function qe(s){let e;const t=s[11].default,i=oe(t,s,s[13],null);return{c(){i&&i.c()},l(a){i&&i.l(a)},m(a,n){i&&i.m(a,n),e=!0},p(a,n){i&&i.p&&(!e||n&8192)&&de(i,t,a,a[13],e?pe(t,a[13],n,null):fe(a[13]),null)},i(a){e||(S(i,a),e=!0)},o(a){C(i,a),e=!1},d(a){i&&i.d(a)}}}function je(s){let e,t,i;const a=[{tag:s[3]},{use:[s[8],...s[0]]},{class:Y({[s[1]]:!0,[s[6]]:!0,...s[5]})},s[7],s[9]];var n=s[2];function o(r){let l={$$slots:{default:[qe]},$$scope:{ctx:r}};for(let c=0;c<a.length;c+=1)l=R(l,a[c]);return{props:l}}return n&&(e=J(n,o(s)),s[12](e)),{c(){e&&K(e.$$.fragment),t=A()},l(r){e&&be(e.$$.fragment,r),t=A()},m(r,l){e&&Q(e,r,l),D(r,t,l),i=!0},p(r,[l]){const c=l&1003?Z(a,[l&8&&{tag:r[3]},l&257&&{use:[r[8],...r[0]]},l&98&&{class:Y({[r[1]]:!0,[r[6]]:!0,...r[5]})},l&128&&E(r[7]),l&512&&E(r[9])]):{};if(l&8192&&(c.$$scope={dirty:l,ctx:r}),l&4&&n!==(n=r[2])){if(e){re();const u=e;C(u.$$.fragment,1,0,()=>{N(u,1)}),ae()}n?(e=J(n,o(r)),r[12](e),K(e.$$.fragment),S(e.$$.fragment,1),Q(e,t.parentNode,t)):e=null}else n&&e.$set(c)},i(r){i||(e&&S(e.$$.fragment,r),i=!0)},o(r){e&&C(e.$$.fragment,r),i=!1},d(r){s[12](null),r&&b(t),e&&N(e,r)}}}const _={component:_e,tag:"div",class:"",classMap:{},contexts:{},props:{}};function Pe(s,e,t){const i=["use","class","component","tag","getElement"];let a=z(e,i),{$$slots:n={},$$scope:o}=e,{use:r=[]}=e,{class:l=""}=e,c;const u=_.class,d={},y=[],g=_.contexts,f=_.props;let{component:m=_.component}=e,{tag:w=m===_e?_.tag:void 0}=e;Object.entries(_.classMap).forEach(([p,X])=>{const h=ve(X);h&&"subscribe"in h&&y.push(h.subscribe(v=>{t(5,d[p]=v,d)}))});const F=ge(ne());for(let p in g)g.hasOwnProperty(p)&&Ce(p,g[p]);Se(()=>{for(const p of y)p()});function H(){return c.getElement()}function L(p){V[p?"unshift":"push"](()=>{c=p,t(4,c)})}return s.$$set=p=>{e=R(R({},e),se(p)),t(9,a=z(e,i)),"use"in p&&t(0,r=p.use),"class"in p&&t(1,l=p.class),"component"in p&&t(2,m=p.component),"tag"in p&&t(3,w=p.tag),"$$scope"in p&&t(13,o=p.$$scope)},[r,l,m,w,c,d,u,f,F,a,H,n,L,o]}class Ve extends te{constructor(e){super(),ie(this,e,Pe,je,O,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const ee=Object.assign({},_);function Ke(s){return new Proxy(Ve,{construct:function(e,t){return Object.assign(_,ee,s),new e(...t)},get:function(e,t){return Object.assign(_,ee,s),e[t]}})}const{applyPassive:B}=Le,{matches:Ze}=De;function Qe(s,{ripple:e=!0,surface:t=!1,unbounded:i=!1,disabled:a=!1,color:n,active:o,rippleElement:r,eventTarget:l,activeTarget:c,addClass:u=f=>s.classList.add(f),removeClass:d=f=>s.classList.remove(f),addStyle:y=(f,m)=>s.style.setProperty(f,m),initPromise:g=Promise.resolve()}={}){let f,m=ve("SMUI:addLayoutListener"),w,F=o,H=l,L=c;function p(){t?(u("mdc-ripple-surface"),n==="primary"?(u("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):n==="secondary"?(d("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary"))):(d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),f&&F!==o&&(F=o,o?f.activate():o===!1&&f.deactivate()),e&&!f?(f=new ze({addClass:u,browserSupportsCssVars:()=>Ge(window),computeBoundingRect:()=>(r||s).getBoundingClientRect(),containsEventTarget:h=>s.contains(h),deregisterDocumentInteractionHandler:(h,v)=>document.documentElement.removeEventListener(h,v,B()),deregisterInteractionHandler:(h,v)=>(l||s).removeEventListener(h,v,B()),deregisterResizeHandler:h=>window.removeEventListener("resize",h),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??Ze(c||s,":active"),isSurfaceDisabled:()=>!!a,isUnbounded:()=>!!i,registerDocumentInteractionHandler:(h,v)=>document.documentElement.addEventListener(h,v,B()),registerInteractionHandler:(h,v)=>(l||s).addEventListener(h,v,B()),registerResizeHandler:h=>window.addEventListener("resize",h),removeClass:d,updateCssVariable:y}),g.then(()=>{f&&(f.init(),f.setUnbounded(i))})):f&&!e&&g.then(()=>{f&&(f.destroy(),f=void 0)}),f&&(H!==l||L!==c)&&(H=l,L=c,f.destroy(),requestAnimationFrame(()=>{f&&(f.init(),f.setUnbounded(i))})),!e&&i&&u("mdc-ripple-upgraded--unbounded")}p(),m&&(w=m(X));function X(){f&&f.layout()}return{update(h){({ripple:e,surface:t,unbounded:i,disabled:a,color:n,active:o,rippleElement:r,eventTarget:l,activeTarget:c,addClass:u,removeClass:d,addStyle:y,initPromise:g}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:v=>s.classList.add(v),removeClass:v=>s.classList.remove(v),addStyle:(v,Ae)=>s.style.setProperty(v,Ae),initPromise:Promise.resolve()},h)),p()},destroy(){f&&(f.destroy(),f=void 0,d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),w&&w()}}}export{ze as M,Qe as R,_e as S,Fe as a,Ke as c,Le as e,Ge as s};
