import{S as J,i as K,s as M,k as v,q as N,a as x,l as w,m as q,r as S,h as p,c as I,n as L,b as k,I as y,g as V,f as U,d as H,K as X,G as b,y as Z,z as $,A as ee,B as te,v as se,L as g,H as ae,J as oe}from"../chunks/index.3fa84bc6.js";import{S as le,g as re,a as ne}from"../chunks/triviaapi.ef6783a1.js";import{h as ce,R as P,i as C,q as T,a as B,d as D,b as O,w as Y,e as Q,f as W,t as j,c as z,g as ie}from"../chunks/iconify-icon.c5a87fcb.js";function F(l,t,o){const i=l.slice();return i[12]=t[o],i}function ue(l){let t;return{c(){t=v("iconify-icon"),this.h()},l(o){t=w(o,"ICONIFY-ICON",{icon:!0}),q(t).forEach(p),this.h()},h(){ae(t,"icon",l[12].icon)},m(o,i){k(o,t,i)},p:oe,d(o){o&&p(t)}}}function fe(l){let t,o,i,n=l[12].name+"",u,f,h,_=l[12].description+"",d,m,s=l[12].icon&&ue(l);return{c(){t=v("span"),s&&s.c(),o=x(),i=v("p"),u=N(n),f=x(),h=v("p"),d=N(_),m=x(),this.h()},l(r){t=w(r,"SPAN",{class:!0});var a=q(t);s&&s.l(a),a.forEach(p),o=I(r),i=w(r,"P",{class:!0});var c=q(i);u=S(c,n),c.forEach(p),f=I(r),h=w(r,"P",{class:!0});var e=q(h);d=S(e,_),e.forEach(p),m=I(r),this.h()},h(){L(t,"class","left-0 top-0 absolute mr-2 bg-indigo-600 h-full px-2 py-4 rounded-l flex items-center justify-center text-4xl"),L(i,"class","font-bold pl-12"),L(h,"class","pl-12")},m(r,a){k(r,t,a),s&&s.m(t,null),k(r,o,a),k(r,i,a),y(i,u),k(r,f,a),k(r,h,a),y(h,d),k(r,m,a)},p(r,a){r[12].icon&&s.p(r,a)},d(r){r&&p(t),s&&s.d(),r&&p(o),r&&p(i),r&&p(f),r&&p(h),r&&p(m)}}}function G(l){let t,o;function i(){return l[2](l[12])}return t=new le({props:{onclick:i,$$slots:{default:[fe]},$$scope:{ctx:l}}}),{c(){Z(t.$$.fragment)},l(n){$(t.$$.fragment,n)},m(n,u){ee(t,n,u),o=!0},p(n,u){l=n;const f={};u&32768&&(f.$$scope={dirty:u,ctx:l}),t.$set(f)},i(n){o||(V(t.$$.fragment,n),o=!0)},o(n){H(t.$$.fragment,n),o=!1},d(n){te(t,n)}}}function me(l){let t,o,i,n,u,f,h,_,d,m=l[0],s=[];for(let a=0;a<m.length;a+=1)s[a]=G(F(l,m,a));const r=a=>H(s[a],1,1,()=>{s[a]=null});return{c(){t=v("div"),o=v("h1"),i=N("You have earned a reward!"),n=x(),u=v("p"),f=N("Please make your choice"),h=x(),_=v("div");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){t=w(a,"DIV",{class:!0});var c=q(t);o=w(c,"H1",{class:!0});var e=q(o);i=S(e,"You have earned a reward!"),e.forEach(p),n=I(c),u=w(c,"P",{class:!0});var E=q(u);f=S(E,"Please make your choice"),E.forEach(p),h=I(c),_=w(c,"DIV",{class:!0});var R=q(_);for(let A=0;A<s.length;A+=1)s[A].l(R);R.forEach(p),c.forEach(p),this.h()},h(){L(o,"class","text-4xl font-bold"),L(u,"class","mt-8 mb-4"),L(_,"class","grid grid-cols-1 sm:grid-cols-2 gap-1"),L(t,"class","text-center")},m(a,c){k(a,t,c),y(t,o),y(o,i),y(t,n),y(t,u),y(u,f),y(t,h),y(t,_);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(_,null);d=!0},p(a,[c]){if(c&3){m=a[0];let e;for(e=0;e<m.length;e+=1){const E=F(a,m,e);s[e]?(s[e].p(E,c),V(s[e],1)):(s[e]=G(E),s[e].c(),V(s[e],1),s[e].m(_,null))}for(se(),e=m.length;e<s.length;e+=1)r(e);U()}},i(a){if(!d){for(let c=0;c<m.length;c+=1)V(s[c]);d=!0}},o(a){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)H(s[c]);d=!1},d(a){a&&p(t),X(s,a)}}}function he(l,t,o){let i,n,u,f,h,_,d,m,s;b(l,T,e=>o(3,i=e)),b(l,B,e=>o(4,n=e)),b(l,D,e=>o(5,u=e)),b(l,O,e=>o(6,f=e)),b(l,Y,e=>o(7,h=e)),b(l,Q,e=>o(8,_=e)),b(l,W,e=>o(9,d=e)),b(l,j,e=>o(10,m=e)),b(l,z,e=>o(11,s=e));let r=ce();const a=e=>{switch(e.id){case P.extraLife:g(z,s=s+1,s);break;case P.extraTime:g(j,m=m+1,m);break;case P.choices:g(B,n=n+1,n);break;case P.category:g(W,d=!0,d);break;case P.betterOdds:g(Q,_=_+.25,_);break;case P.words:g(Y,h=h+1,h);break}C.set(e.name,C.has(e.name)?C.get(e.name)+1:1),g(O,f=f+1,f),g(D,u=ie(f),u),re(u,n).then(E=>{g(T,i=E,i),ne("../game/")})};return[r,a,e=>a(e)]}class be extends J{constructor(t){super(),K(this,t,he,me,M,{})}}export{be as default};
