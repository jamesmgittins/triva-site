import{S as O,i as j,s as F,k,q as V,a as x,l as w,m as q,r as H,h as _,c as R,n as L,b as E,H as b,g as P,f as U,d as B,J as X,G as d,y as Z,z as $,A as ee,B as te,v as se,K as g,I as ae}from"../chunks/index.7efe732c.js";import{S as oe,g as re,a as le}from"../chunks/triviaapi.856ad97c.js";import{h as ne,R as v,i as A,q as I,a as C,d as N,b as Q,w as W,e as Y,f as z,t as G,c as J,g as ce}from"../chunks/stores.ca7412b8.js";function K(l,t,a){const m=l.slice();return m[12]=t[a],m}function ie(l){let t,a=l[12].name+"",m,o,n,h=l[12].description+"",p,f;return{c(){t=k("p"),m=V(a),o=x(),n=k("p"),p=V(h),f=x(),this.h()},l(c){t=w(c,"P",{class:!0});var i=q(t);m=H(i,a),i.forEach(_),o=R(c),n=w(c,"P",{});var s=q(n);p=H(s,h),s.forEach(_),f=R(c),this.h()},h(){L(t,"class","font-bold")},m(c,i){E(c,t,i),b(t,m),E(c,o,i),E(c,n,i),b(n,p),E(c,f,i)},p:ae,d(c){c&&_(t),c&&_(o),c&&_(n),c&&_(f)}}}function M(l){let t,a;function m(){return l[2](l[12])}return t=new oe({props:{onclick:m,$$slots:{default:[ie]},$$scope:{ctx:l}}}),{c(){Z(t.$$.fragment)},l(o){$(t.$$.fragment,o)},m(o,n){ee(t,o,n),a=!0},p(o,n){l=o;const h={};n&32768&&(h.$$scope={dirty:n,ctx:l}),t.$set(h)},i(o){a||(P(t.$$.fragment,o),a=!0)},o(o){B(t.$$.fragment,o),a=!1},d(o){te(t,o)}}}function ue(l){let t,a,m,o,n,h,p,f,c,i=l[0],s=[];for(let r=0;r<i.length;r+=1)s[r]=M(K(l,i,r));const S=r=>B(s[r],1,1,()=>{s[r]=null});return{c(){t=k("div"),a=k("h1"),m=V("You have earned a reward!"),o=x(),n=k("p"),h=V("Please make your choice"),p=x(),f=k("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var u=q(t);a=w(u,"H1",{class:!0});var e=q(a);m=H(e,"You have earned a reward!"),e.forEach(_),o=R(u),n=w(u,"P",{class:!0});var y=q(n);h=H(y,"Please make your choice"),y.forEach(_),p=R(u),f=w(u,"DIV",{class:!0});var D=q(f);for(let T=0;T<s.length;T+=1)s[T].l(D);D.forEach(_),u.forEach(_),this.h()},h(){L(a,"class","text-4xl font-bold mt-5"),L(n,"class","mt-8 mb-4"),L(f,"class","grid grid-cols-1 sm:grid-cols-2 gap-1"),L(t,"class","text-center")},m(r,u){E(r,t,u),b(t,a),b(a,m),b(t,o),b(t,n),b(n,h),b(t,p),b(t,f);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(f,null);c=!0},p(r,[u]){if(u&3){i=r[0];let e;for(e=0;e<i.length;e+=1){const y=K(r,i,e);s[e]?(s[e].p(y,u),P(s[e],1)):(s[e]=M(y),s[e].c(),P(s[e],1),s[e].m(f,null))}for(se(),e=i.length;e<s.length;e+=1)S(e);U()}},i(r){if(!c){for(let u=0;u<i.length;u+=1)P(s[u]);c=!0}},o(r){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)B(s[u]);c=!1},d(r){r&&_(t),X(s,r)}}}function fe(l,t,a){let m,o,n,h,p,f,c,i,s;d(l,I,e=>a(3,m=e)),d(l,C,e=>a(4,o=e)),d(l,N,e=>a(5,n=e)),d(l,Q,e=>a(6,h=e)),d(l,W,e=>a(7,p=e)),d(l,Y,e=>a(8,f=e)),d(l,z,e=>a(9,c=e)),d(l,G,e=>a(10,i=e)),d(l,J,e=>a(11,s=e));let S=ne();const r=e=>{switch(e.id){case v.extraLife:g(J,s=s+1,s);break;case v.extraTime:g(G,i=i+1,i);break;case v.choices:g(C,o=o+1,o);break;case v.category:g(z,c=!0,c);break;case v.betterOdds:g(Y,f=f+.25,f);break;case v.words:g(W,p=p+1,p);break}A.set(e.name,A.has(e.name)?A.get(e.name)+1:1),g(Q,h=h+1,h),g(N,n=ce(h),n),re(n,o).then(y=>{g(I,m=y,m),le("../game/")})};return[S,r,e=>r(e)]}class _e extends O{constructor(t){super(),j(this,t,fe,ue,F,{})}}export{_e as default};
