import{S as M,i as U,s as X,k as v,q as P,a as L,l as E,m as w,r as x,h,c as A,n as q,b as k,I as y,g as N,f as Z,d as I,K as $,G as b,y as ee,z as te,A as se,B as oe,v as ae,L as g,H as le,J as re}from"../chunks/index.3fa84bc6.js";import{S as ne,g as ie,a as ce}from"../chunks/triviaapi.07ed2a82.js";import{h as ue,R,i as D,q as H,a as T,d as O,b as W,w as B,e as Y,f as Q,t as j,c as z,g as fe}from"../chunks/iconify-icon.fb13cc3a.js";import{s as F,S as G}from"../chunks/sounds.345e44b3.js";function J(l,t,a){const c=l.slice();return c[12]=t[a],c}function me(l){let t;return{c(){t=v("iconify-icon"),this.h()},l(a){t=E(a,"ICONIFY-ICON",{icon:!0}),w(t).forEach(h),this.h()},h(){le(t,"icon",l[12].icon)},m(a,c){k(a,t,c)},p:re,d(a){a&&h(t)}}}function pe(l){let t,a,c,n=l[12].name+"",u,f,p,_=l[12].description+"",d,m,s=l[12].icon&&me(l);return{c(){t=v("span"),s&&s.c(),a=L(),c=v("p"),u=P(n),f=L(),p=v("p"),d=P(_),m=L(),this.h()},l(r){t=E(r,"SPAN",{class:!0});var o=w(t);s&&s.l(o),o.forEach(h),a=A(r),c=E(r,"P",{class:!0});var i=w(c);u=x(i,n),i.forEach(h),f=A(r),p=E(r,"P",{class:!0});var e=w(p);d=x(e,_),e.forEach(h),m=A(r),this.h()},h(){q(t,"class","left-0 top-0 absolute mr-2 bg-indigo-600 h-full px-2 py-4 rounded-l flex items-center justify-center text-4xl"),q(c,"class","font-bold pl-12"),q(p,"class","pl-12")},m(r,o){k(r,t,o),s&&s.m(t,null),k(r,a,o),k(r,c,o),y(c,u),k(r,f,o),k(r,p,o),y(p,d),k(r,m,o)},p(r,o){r[12].icon&&s.p(r,o)},d(r){r&&h(t),s&&s.d(),r&&h(a),r&&h(c),r&&h(f),r&&h(p),r&&h(m)}}}function K(l){let t,a;function c(){return l[2](l[12])}return t=new ne({props:{onclick:c,$$slots:{default:[pe]},$$scope:{ctx:l}}}),{c(){ee(t.$$.fragment)},l(n){te(t.$$.fragment,n)},m(n,u){se(t,n,u),a=!0},p(n,u){l=n;const f={};u&32768&&(f.$$scope={dirty:u,ctx:l}),t.$set(f)},i(n){a||(N(t.$$.fragment,n),a=!0)},o(n){I(t.$$.fragment,n),a=!1},d(n){oe(t,n)}}}function he(l){let t,a,c,n,u,f,p,_,d,m=l[0],s=[];for(let o=0;o<m.length;o+=1)s[o]=K(J(l,m,o));const r=o=>I(s[o],1,1,()=>{s[o]=null});return{c(){t=v("div"),a=v("h1"),c=P("You have earned a reward!"),n=L(),u=v("p"),f=P("Please make your choice"),p=L(),_=v("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=E(o,"DIV",{class:!0});var i=w(t);a=E(i,"H1",{class:!0});var e=w(a);c=x(e,"You have earned a reward!"),e.forEach(h),n=A(i),u=E(i,"P",{class:!0});var S=w(u);f=x(S,"Please make your choice"),S.forEach(h),p=A(i),_=E(i,"DIV",{class:!0});var V=w(_);for(let C=0;C<s.length;C+=1)s[C].l(V);V.forEach(h),i.forEach(h),this.h()},h(){q(a,"class","text-4xl font-bold"),q(u,"class","mt-8 mb-4"),q(_,"class","grid grid-cols-1 sm:grid-cols-2 gap-1"),q(t,"class","text-center")},m(o,i){k(o,t,i),y(t,a),y(a,c),y(t,n),y(t,u),y(u,f),y(t,p),y(t,_);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(_,null);d=!0},p(o,[i]){if(i&3){m=o[0];let e;for(e=0;e<m.length;e+=1){const S=J(o,m,e);s[e]?(s[e].p(S,i),N(s[e],1)):(s[e]=K(S),s[e].c(),N(s[e],1),s[e].m(_,null))}for(ae(),e=m.length;e<s.length;e+=1)r(e);Z()}},i(o){if(!d){for(let i=0;i<m.length;i+=1)N(s[i]);d=!0}},o(o){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)I(s[i]);d=!1},d(o){o&&h(t),$(s,o)}}}function _e(l,t,a){let c,n,u,f,p,_,d,m,s;b(l,H,e=>a(3,c=e)),b(l,T,e=>a(4,n=e)),b(l,O,e=>a(5,u=e)),b(l,W,e=>a(6,f=e)),b(l,B,e=>a(7,p=e)),b(l,Y,e=>a(8,_=e)),b(l,Q,e=>a(9,d=e)),b(l,j,e=>a(10,m=e)),b(l,z,e=>a(11,s=e));let r=ue();F.playSound(G.EARNED_REWARD);const o=e=>{switch(e.id){case R.extraLife:g(z,s=s+1,s);break;case R.extraTime:g(j,m=m+1,m);break;case R.choices:g(T,n=n+1,n);break;case R.category:g(Q,d=!0,d);break;case R.betterOdds:g(Y,_=_+.25,_);break;case R.words:g(B,p=p+1,p);break}F.playSound(G.CHOSEN_REWARD),D.set(e.name,D.has(e.name)?D.get(e.name)+1:1),g(W,f=f+1,f),g(O,u=fe(f),u),ie(u,n).then(S=>{g(H,c=S,c),ce("../game/")})};return[r,o,e=>o(e)]}class ke extends M{constructor(t){super(),U(this,t,_e,he,X,{})}}export{ke as default};
