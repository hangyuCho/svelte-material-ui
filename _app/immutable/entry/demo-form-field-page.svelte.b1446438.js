import{S as B,i as L,s as M,y as F,a as C,k,q as p,z as P,c as N,l as v,m as w,r as d,h as i,n as x,A as R,b as g,E as $,u as J,g as b,d as E,B as A,w as K,J as O,K as G,C as Q,v as le,f as ae,P as ce,p as fe,D as ie}from"../chunks/index.a36818d1.js";import{D as z}from"../chunks/Demo.6b8479f4.js";import{F as V}from"../chunks/FormField.49b1cd9e.js";import{C as oe}from"../chunks/Checkbox.a3cb1fd3.js";import{R as ue}from"../chunks/Radio.6e034859.js";import{S as $e}from"../chunks/Switch.aba0302c.js";function he(f){let e,s,t;function l(n){f[1](n)}let a={};return f[0]!==void 0&&(a.checked=f[0]),e=new oe({props:a}),K.push(()=>O(e,"checked",l)),{c(){F(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,c){R(e,n,c),t=!0},p(n,c){const r={};!s&&c&1&&(s=!0,r.checked=n[0],G(()=>s=!1)),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function me(f){let e,s;return{c(){e=k("span"),s=p("Form fields let you click the label to toggle or focus the form control."),this.h()},l(t){e=v(t,"SPAN",{slot:!0});var l=w(e);s=d(l,"Form fields let you click the label to toggle or focus the form control."),l.forEach(i),this.h()},h(){x(e,"slot","label")},m(t,l){g(t,e,l),$(e,s)},p:Q,d(t){t&&i(e)}}}function pe(f){let e,s,t,l,a=f[0]?"Yes":"No",n,c;return e=new V({props:{$$slots:{label:[me],default:[he]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment),s=C(),t=k("pre"),l=p("Checked: "),n=p(a),this.h()},l(r){P(e.$$.fragment,r),s=N(r),t=v(r,"PRE",{class:!0});var o=w(t);l=d(o,"Checked: "),n=d(o,a),o.forEach(i),this.h()},h(){x(t,"class","status")},m(r,o){R(e,r,o),g(r,s,o),g(r,t,o),$(t,l),$(t,n),c=!0},p(r,[o]){const u={};o&5&&(u.$$scope={dirty:o,ctx:r}),e.$set(u),(!c||o&1)&&a!==(a=r[0]?"Yes":"No")&&J(n,a)},i(r){c||(b(e.$$.fragment,r),c=!0)},o(r){E(e.$$.fragment,r),c=!1},d(r){A(e,r),r&&i(s),r&&i(t)}}}function de(f,e,s){let t=!1;function l(a){t=a,s(0,t)}return[t,l]}class _e extends B{constructor(e){super(),L(this,e,de,pe,M,{})}}function ge(f){let e,s,t;function l(n){f[1](n)}let a={};return f[0]!==void 0&&(a.checked=f[0]),e=new oe({props:a}),K.push(()=>O(e,"checked",l)),{c(){F(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,c){R(e,n,c),t=!0},p(n,c){const r={};!s&&c&1&&(s=!0,r.checked=n[0],G(()=>s=!1)),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function be(f){let e,s;return{c(){e=k("span"),s=p("The input can be aligned at the end too."),this.h()},l(t){e=v(t,"SPAN",{slot:!0});var l=w(e);s=d(l,"The input can be aligned at the end too."),l.forEach(i),this.h()},h(){x(e,"slot","label")},m(t,l){g(t,e,l),$(e,s)},p:Q,d(t){t&&i(e)}}}function ke(f){let e,s,t,l,a=f[0]?"Yes":"No",n,c;return e=new V({props:{align:"end",$$slots:{label:[be],default:[ge]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment),s=C(),t=k("pre"),l=p("Checked: "),n=p(a),this.h()},l(r){P(e.$$.fragment,r),s=N(r),t=v(r,"PRE",{class:!0});var o=w(t);l=d(o,"Checked: "),n=d(o,a),o.forEach(i),this.h()},h(){x(t,"class","status")},m(r,o){R(e,r,o),g(r,s,o),g(r,t,o),$(t,l),$(t,n),c=!0},p(r,[o]){const u={};o&5&&(u.$$scope={dirty:o,ctx:r}),e.$set(u),(!c||o&1)&&a!==(a=r[0]?"Yes":"No")&&J(n,a)},i(r){c||(b(e.$$.fragment,r),c=!0)},o(r){E(e.$$.fragment,r),c=!1},d(r){A(e,r),r&&i(s),r&&i(t)}}}function ve(f,e,s){let t=!1;function l(a){t=a,s(0,t)}return[t,l]}class we extends B{constructor(e){super(),L(this,e,ve,ke,M,{})}}function ne(f,e,s){const t=f.slice();return t[2]=e[s],t}function Ee(f){let e,s,t;function l(n){f[1](n)}let a={value:f[2]};return f[0]!==void 0&&(a.group=f[0]),e=new ue({props:a}),K.push(()=>O(e,"group",l)),{c(){F(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,c){R(e,n,c),t=!0},p(n,c){const r={};!s&&c&1&&(s=!0,r.group=n[0],G(()=>s=!1)),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Se(f){let e,s=`${f[2][0].toUpperCase()}${f[2].slice(1)}`,t;return{c(){e=k("span"),t=p(s),this.h()},l(l){e=v(l,"SPAN",{slot:!0});var a=w(e);t=d(a,s),a.forEach(i),this.h()},h(){x(e,"slot","label")},m(l,a){g(l,e,a),$(e,t)},p:Q,d(l){l&&i(e)}}}function re(f){let e,s;return e=new V({props:{style:"margin-right: 1em;",$$slots:{label:[Se],default:[Ee]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,l){R(e,t,l),s=!0},p(t,l){const a={};l&33&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Ce(f){let e,s,t,l,a,n=["yes","no"],c=[];for(let o=0;o<2;o+=1)c[o]=re(ne(f,n,o));const r=o=>E(c[o],1,1,()=>{c[o]=null});return{c(){for(let o=0;o<2;o+=1)c[o].c();e=C(),s=k("pre"),t=p("Selected: "),l=p(f[0]),this.h()},l(o){for(let h=0;h<2;h+=1)c[h].l(o);e=N(o),s=v(o,"PRE",{class:!0});var u=w(s);t=d(u,"Selected: "),l=d(u,f[0]),u.forEach(i),this.h()},h(){x(s,"class","status")},m(o,u){for(let h=0;h<2;h+=1)c[h]&&c[h].m(o,u);g(o,e,u),g(o,s,u),$(s,t),$(s,l),a=!0},p(o,[u]){if(u&1){n=["yes","no"];let h;for(h=0;h<2;h+=1){const D=ne(o,n,h);c[h]?(c[h].p(D,u),b(c[h],1)):(c[h]=re(D),c[h].c(),b(c[h],1),c[h].m(e.parentNode,e))}for(le(),h=2;h<2;h+=1)r(h);ae()}(!a||u&1)&&J(l,o[0])},i(o){if(!a){for(let u=0;u<2;u+=1)b(c[u]);a=!0}},o(o){c=c.filter(Boolean);for(let u=0;u<2;u+=1)E(c[u]);a=!1},d(o){ce(c,o),o&&i(e),o&&i(s)}}}function Ne(f,e,s){let t="yes";function l(a){t=a,s(0,t)}return[t,l]}class Fe extends B{constructor(e){super(),L(this,e,Ne,Ce,M,{})}}function Pe(f){let e,s,t;function l(n){f[1](n)}let a={};return f[0]!==void 0&&(a.checked=f[0]),e=new $e({props:a}),K.push(()=>O(e,"checked",l)),{c(){F(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,c){R(e,n,c),t=!0},p(n,c){const r={};!s&&c&1&&(s=!0,r.checked=n[0],G(()=>s=!1)),e.$set(r)},i(n){t||(b(e.$$.fragment,n),t=!0)},o(n){E(e.$$.fragment,n),t=!1},d(n){A(e,n)}}}function Re(f){let e,s,t,l;return{c(){e=k("span"),s=p("I agree to the terms and conditions of the software, "),t=k("small"),l=p("and hereby sign away my rights just to use this app."),this.h()},l(a){e=v(a,"SPAN",{slot:!0});var n=w(e);s=d(n,"I agree to the terms and conditions of the software, "),t=v(n,"SMALL",{style:!0});var c=w(t);l=d(c,"and hereby sign away my rights just to use this app."),c.forEach(i),n.forEach(i),this.h()},h(){fe(t,"opacity",".4"),x(e,"slot","label")},m(a,n){g(a,e,n),$(e,s),$(e,t),$(t,l)},p:Q,d(a){a&&i(e)}}}function Ae(f){let e,s,t,l,a=f[0]?"Yes, muahahah.":"Not yet.",n,c;return e=new V({props:{$$slots:{label:[Re],default:[Pe]},$$scope:{ctx:f}}}),{c(){F(e.$$.fragment),s=C(),t=k("pre"),l=p("Agreed: "),n=p(a),this.h()},l(r){P(e.$$.fragment,r),s=N(r),t=v(r,"PRE",{class:!0});var o=w(t);l=d(o,"Agreed: "),n=d(o,a),o.forEach(i),this.h()},h(){x(t,"class","status")},m(r,o){R(e,r,o),g(r,s,o),g(r,t,o),$(t,l),$(t,n),c=!0},p(r,[o]){const u={};o&5&&(u.$$scope={dirty:o,ctx:r}),e.$set(u),(!c||o&1)&&a!==(a=r[0]?"Yes, muahahah.":"Not yet.")&&J(n,a)},i(r){c||(b(e.$$.fragment,r),c=!0)},o(r){E(e.$$.fragment,r),c=!1},d(r){A(e,r),r&&i(s),r&&i(t)}}}function xe(f,e,s){let t=!1;function l(a){t=a,s(0,t)}return[t,l]}class De extends B{constructor(e){super(),L(this,e,xe,Ae,M,{})}}function ye(f){let e;return{c(){e=p("Checkbox")},l(s){e=d(s,"Checkbox")},m(s,t){g(s,e,t)},d(s){s&&i(e)}}}function Ie(f){let e;return{c(){e=p("End alignment")},l(s){e=d(s,"End alignment")},m(s,t){g(s,e,t)},d(s){s&&i(e)}}}function Ye(f){let e;return{c(){e=p("Radio button")},l(s){e=d(s,"Radio button")},m(s,t){g(s,e,t)},d(s){s&&i(e)}}}function He(f){let e;return{c(){e=p("Switch")},l(s){e=d(s,"Switch")},m(s,t){g(s,e,t)},d(s){s&&i(e)}}}function Te(f){let e,s,t,l,a,n,c,r,o,u,h,D,W,X,y,Z,I,ee,Y,te,H,U;return y=new z({props:{component:_e,file:"form-field/_Checkbox.svelte",$$slots:{default:[ye]},$$scope:{ctx:f}}}),I=new z({props:{component:we,file:"form-field/_EndAlignment.svelte",$$slots:{default:[Ie]},$$scope:{ctx:f}}}),Y=new z({props:{component:Fe,file:"form-field/_Radio.svelte",$$slots:{default:[Ye]},$$scope:{ctx:f}}}),H=new z({props:{component:De,file:"form-field/_Switch.svelte",$$slots:{default:[He]},$$scope:{ctx:f}}}),{c(){e=C(),s=k("section"),t=k("h2"),l=p("Form Fields"),a=C(),n=k("h5"),c=p("Installation"),r=C(),o=k("pre"),u=p("npm i -D @smui/form-field"),h=C(),D=k("h5"),W=p("Demos"),X=C(),F(y.$$.fragment),Z=C(),F(I.$$.fragment),ee=C(),F(Y.$$.fragment),te=C(),F(H.$$.fragment),this.h()},l(m){ie("svelte-13edvmw",document.head).forEach(i),e=N(m),s=v(m,"SECTION",{});var _=w(s);t=v(_,"H2",{});var T=w(t);l=d(T,"Form Fields"),T.forEach(i),a=N(_),n=v(_,"H5",{});var j=w(n);c=d(j,"Installation"),j.forEach(i),r=N(_),o=v(_,"PRE",{class:!0});var q=w(o);u=d(q,"npm i -D @smui/form-field"),q.forEach(i),h=N(_),D=v(_,"H5",{});var se=w(D);W=d(se,"Demos"),se.forEach(i),X=N(_),P(y.$$.fragment,_),Z=N(_),P(I.$$.fragment,_),ee=N(_),P(Y.$$.fragment,_),te=N(_),P(H.$$.fragment,_),_.forEach(i),this.h()},h(){document.title="Form Field - SMUI",x(o,"class","demo-spaced")},m(m,S){g(m,e,S),g(m,s,S),$(s,t),$(t,l),$(s,a),$(s,n),$(n,c),$(s,r),$(s,o),$(o,u),$(s,h),$(s,D),$(D,W),$(s,X),R(y,s,null),$(s,Z),R(I,s,null),$(s,ee),R(Y,s,null),$(s,te),R(H,s,null),U=!0},p(m,[S]){const _={};S&1&&(_.$$scope={dirty:S,ctx:m}),y.$set(_);const T={};S&1&&(T.$$scope={dirty:S,ctx:m}),I.$set(T);const j={};S&1&&(j.$$scope={dirty:S,ctx:m}),Y.$set(j);const q={};S&1&&(q.$$scope={dirty:S,ctx:m}),H.$set(q)},i(m){U||(b(y.$$.fragment,m),b(I.$$.fragment,m),b(Y.$$.fragment,m),b(H.$$.fragment,m),U=!0)},o(m){E(y.$$.fragment,m),E(I.$$.fragment,m),E(Y.$$.fragment,m),E(H.$$.fragment,m),U=!1},d(m){m&&i(e),m&&i(s),A(y),A(I),A(Y),A(H)}}}class ze extends B{constructor(e){super(),L(this,e,null,Te,M,{})}}export{ze as default};
