import{S as q,i as P,s as T,y as p,a as w,z as m,c as d,A as i,b as l,g as c,d as _,B as g,h as u,k as C,l as L,n as I,ac as R,p as B,C as z,w as D,q as k,r as A}from"../chunks/index.a36818d1.js";import{T as G,R as M,S as h,a as E}from"../chunks/Title.a0cdabd3.js";import{A as F}from"../chunks/AutoAdjust.3282e06a.js";import{I as S}from"../chunks/IconButton.a9c093a5.js";import{L as H}from"../chunks/LoremIpsum.18ab6735.js";function J(o){let t;return{c(){t=k("menu")},l(n){t=A(n,"menu")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function K(o){let t;return{c(){t=k("Standard")},l(n){t=A(n,"Standard")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function N(o){let t,n,e,r;return t=new S({props:{class:"material-icons",$$slots:{default:[J]},$$scope:{ctx:o}}}),e=new E({props:{$$slots:{default:[K]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=w(),p(e.$$.fragment)},l(s){m(t.$$.fragment,s),n=d(s),m(e.$$.fragment,s)},m(s,a){i(t,s,a),l(s,n,a),i(e,s,a),r=!0},p(s,a){const $={};a&4&&($.$$scope={dirty:a,ctx:s}),t.$set($);const f={};a&4&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){r||(c(t.$$.fragment,s),c(e.$$.fragment,s),r=!0)},o(s){_(t.$$.fragment,s),_(e.$$.fragment,s),r=!1},d(s){g(t,s),s&&u(n),g(e,s)}}}function O(o){let t;return{c(){t=k("file_download")},l(n){t=A(n,"file_download")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function Q(o){let t;return{c(){t=k("print")},l(n){t=A(n,"print")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function U(o){let t;return{c(){t=k("bookmark")},l(n){t=A(n,"bookmark")},m(n,e){l(n,t,e)},d(n){n&&u(t)}}}function V(o){let t,n,e,r,s,a;return t=new S({props:{class:"material-icons","aria-label":"Download",$$slots:{default:[O]},$$scope:{ctx:o}}}),e=new S({props:{class:"material-icons","aria-label":"Print this page",$$slots:{default:[Q]},$$scope:{ctx:o}}}),s=new S({props:{class:"material-icons","aria-label":"Bookmark this page",$$slots:{default:[U]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=w(),p(e.$$.fragment),r=w(),p(s.$$.fragment)},l($){m(t.$$.fragment,$),n=d($),m(e.$$.fragment,$),r=d($),m(s.$$.fragment,$)},m($,f){i(t,$,f),l($,n,f),i(e,$,f),l($,r,f),i(s,$,f),a=!0},p($,f){const b={};f&4&&(b.$$scope={dirty:f,ctx:$}),t.$set(b);const j={};f&4&&(j.$$scope={dirty:f,ctx:$}),e.$set(j);const v={};f&4&&(v.$$scope={dirty:f,ctx:$}),s.$set(v)},i($){a||(c(t.$$.fragment,$),c(e.$$.fragment,$),c(s.$$.fragment,$),a=!0)},o($){_(t.$$.fragment,$),_(e.$$.fragment,$),_(s.$$.fragment,$),a=!1},d($){g(t,$),$&&u(n),g(e,$),$&&u(r),g(s,$)}}}function W(o){let t,n,e,r;return t=new h({props:{$$slots:{default:[N]},$$scope:{ctx:o}}}),e=new h({props:{align:"end",toolbar:!0,$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=w(),p(e.$$.fragment)},l(s){m(t.$$.fragment,s),n=d(s),m(e.$$.fragment,s)},m(s,a){i(t,s,a),l(s,n,a),i(e,s,a),r=!0},p(s,a){const $={};a&4&&($.$$scope={dirty:a,ctx:s}),t.$set($);const f={};a&4&&(f.$$scope={dirty:a,ctx:s}),e.$set(f)},i(s){r||(c(t.$$.fragment,s),c(e.$$.fragment,s),r=!0)},o(s){_(t.$$.fragment,s),_(e.$$.fragment,s),r=!1},d(s){g(t,s),s&&u(n),g(e,s)}}}function X(o){let t,n;return t=new M({props:{$$slots:{default:[W]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment)},l(e){m(t.$$.fragment,e)},m(e,r){i(t,e,r),n=!0},p(e,r){const s={};r&4&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){n||(c(t.$$.fragment,e),n=!0)},o(e){_(t.$$.fragment,e),n=!1},d(e){g(t,e)}}}function Y(o){let t,n,e,r,s;return t=new H({}),{c(){p(t.$$.fragment),n=w(),e=C("img"),this.h()},l(a){m(t.$$.fragment,a),n=d(a),e=L(a,"IMG",{alt:!0,src:!0,style:!0}),this.h()},h(){I(e,"alt","Page content placeholder"),R(e.src,r="/page-content.jpg")||I(e,"src",r),B(e,"display","block"),B(e,"max-width","100%"),B(e,"height","auto"),B(e,"margin","1em auto")},m(a,$){i(t,a,$),l(a,n,$),l(a,e,$),s=!0},p:z,i(a){s||(c(t.$$.fragment,a),s=!0)},o(a){_(t.$$.fragment,a),s=!1},d(a){g(t,a),a&&u(n),a&&u(e)}}}function Z(o){let t,n,e,r,s={variant:"standard",$$slots:{default:[X]},$$scope:{ctx:o}};return t=new G({props:s}),o[1](t),e=new F({props:{topAppBar:o[0],$$slots:{default:[Y]},$$scope:{ctx:o}}}),{c(){p(t.$$.fragment),n=w(),p(e.$$.fragment)},l(a){m(t.$$.fragment,a),n=d(a),m(e.$$.fragment,a)},m(a,$){i(t,a,$),l(a,n,$),i(e,a,$),r=!0},p(a,[$]){const f={};$&4&&(f.$$scope={dirty:$,ctx:a}),t.$set(f);const b={};$&1&&(b.topAppBar=a[0]),$&4&&(b.$$scope={dirty:$,ctx:a}),e.$set(b)},i(a){r||(c(t.$$.fragment,a),c(e.$$.fragment,a),r=!0)},o(a){_(t.$$.fragment,a),_(e.$$.fragment,a),r=!1},d(a){o[1](null),g(t,a),a&&u(n),g(e,a)}}}function x(o,t,n){let e;function r(s){D[s?"unshift":"push"](()=>{e=s,n(0,e)})}return[e,r]}class at extends q{constructor(t){super(),P(this,t,x,Z,T,{})}}export{at as default};
