import{S as qe,i as Ie,s as Pe,k,q as E,a as P,l as g,m as y,r as $,h as p,c as C,n as A,b,I as v,u as R,d as O,f as D,g as I,G as V,y as H,z as j,A as M,B,H as J,J as K,e as le,v as L,L as Y,K as ye,p as se}from"../chunks/index.3fa84bc6.js";import{S as G,g as oe,a as Z}from"../chunks/triviaapi.fb3e7320.js";import{s as re,b as ie,g as Ce,d as ne,q as x,c as fe,w as Oe,a as Qe,t as Ve,e as Re,f as We}from"../chunks/iconify-icon.fb13cc3a.js";import{g as Ye,s as De}from"../chunks/savedata.f10b81c6.js";import{s as U,S as z}from"../chunks/sounds.345e44b3.js";const Le=!0,ue=Le,He=u=>{for(let e=u.length-1;e>0;e--){const l=Math.floor(Math.random()*(e+1));[u[e],u[l]]=[u[l],u[e]]}},ce=u=>{const e=u.toLowerCase();return u.charAt(0).toUpperCase()+e.slice(1)};function ae(u,e,l){const o=u.slice();return o[32]=e[l],o[31]=l,o}function _e(u,e,l){const o=u.slice();return o[29]=e[l],o[31]=l,o}function je(u){let e,l,o,t,r,s,_,f=u[0],i=[];for(let m=0;m<f.length;m+=1)i[m]=me(ae(u,f,m));const a=m=>O(i[m],1,1,()=>{i[m]=null});return{c(){e=k("p"),l=E("Once you select a question you will have "),o=E(u[12]),t=E(" seconds to answer it"),r=P(),s=k("div");for(let m=0;m<i.length;m+=1)i[m].c();this.h()},l(m){e=g(m,"P",{class:!0});var n=y(e);l=$(n,"Once you select a question you will have "),o=$(n,u[12]),t=$(n," seconds to answer it"),n.forEach(p),r=C(m),s=g(m,"DIV",{class:!0});var c=y(s);for(let h=0;h<i.length;h+=1)i[h].l(c);c.forEach(p),this.h()},h(){A(e,"class","mt-10 mb-5"),A(s,"class","grid grid-cols-1 sm:grid-cols-2 gap-1")},m(m,n){b(m,e,n),v(e,l),v(e,o),v(e,t),b(m,r,n),b(m,s,n);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(s,null);_=!0},p(m,n){if((!_||n[0]&4096)&&R(o,m[12]),n[0]&2171137){f=m[0];let c;for(c=0;c<f.length;c+=1){const h=ae(m,f,c);i[c]?(i[c].p(h,n),I(i[c],1)):(i[c]=me(h),i[c].c(),I(i[c],1),i[c].m(s,null))}for(L(),c=f.length;c<i.length;c+=1)a(c);D()}},i(m){if(!_){for(let n=0;n<f.length;n+=1)I(i[n]);_=!0}},o(m){i=i.filter(Boolean);for(let n=0;n<i.length;n+=1)O(i[n]);_=!1},d(m){m&&p(e),m&&p(r),m&&p(s),ye(i,m)}}}function Me(u){let e,l=u[1].question+"",o,t,r,s,_,f=!u[3]&&!u[4]&&he(u),i=u[2],a=[];for(let n=0;n<i.length;n+=1)a[n]=be(_e(u,i,n));const m=n=>O(a[n],1,1,()=>{a[n]=null});return{c(){e=k("h5"),o=E(l),t=P(),f&&f.c(),r=P(),s=k("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=g(n,"H5",{class:!0});var c=y(e);o=$(c,l),c.forEach(p),t=C(n),f&&f.l(n),r=C(n),s=g(n,"DIV",{class:!0});var h=y(s);for(let T=0;T<a.length;T+=1)a[T].l(h);h.forEach(p),this.h()},h(){A(e,"class","mt-10 mb-5 text-xl p-8 inline-block bg-indigo-500 clear-both rounded text-white"),A(s,"class","grid grid-cols-1 sm:grid-cols-2 gap-1")},m(n,c){b(n,e,c),v(e,o),b(n,t,c),f&&f.m(n,c),b(n,r,c),b(n,s,c);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(s,null);_=!0},p(n,c){if((!_||c[0]&2)&&l!==(l=n[1].question+"")&&R(o,l),!n[3]&&!n[4]?f?f.p(n,c):(f=he(n),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),c[0]&49220){i=n[2];let h;for(h=0;h<i.length;h+=1){const T=_e(n,i,h);a[h]?(a[h].p(T,c),I(a[h],1)):(a[h]=be(T),a[h].c(),I(a[h],1),a[h].m(s,null))}for(L(),h=i.length;h<a.length;h+=1)m(h);D()}},i(n){if(!_){for(let c=0;c<i.length;c+=1)I(a[c]);_=!0}},o(n){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)O(a[c]);_=!1},d(n){n&&p(e),n&&p(t),f&&f.d(n),n&&p(r),n&&p(s),ye(a,n)}}}function Be(u){let e,l;return{c(){e=k("span"),l=E("???")},l(o){e=g(o,"SPAN",{});var t=y(e);l=$(t,"???"),t.forEach(p)},m(o,t){b(o,e,t),v(e,l)},p:K,d(o){o&&p(e)}}}function Ge(u){let e,l=u[32].category+"",o;return{c(){e=k("span"),o=E(l)},l(t){e=g(t,"SPAN",{});var r=y(e);o=$(r,l),r.forEach(p)},m(t,r){b(t,e,r),v(e,o)},p(t,r){r[0]&1&&l!==(l=t[32].category+"")&&R(o,l)},d(t){t&&p(e)}}}function pe(u){let e,l=u[21](u[32])+"",o;return{c(){e=k("p"),o=E(l)},l(t){e=g(t,"P",{});var r=y(e);o=$(r,l),r.forEach(p)},m(t,r){b(t,e,r),v(e,o)},p(t,r){r[0]&1&&l!==(l=t[21](t[32])+"")&&R(o,l)},d(t){t&&p(e)}}}function Fe(u){let e,l,o=u[31]+1+"",t,r,s,_,f;function i(c,h){return c[13]?Ge:Be}let a=i(u),m=a(u),n=u[8]>0&&pe(u);return{c(){e=k("span"),l=E("Q"),t=E(o),r=P(),s=k("p"),m.c(),_=P(),n&&n.c(),f=P(),this.h()},l(c){e=g(c,"SPAN",{class:!0});var h=y(e);l=$(h,"Q"),t=$(h,o),h.forEach(p),r=C(c),s=g(c,"P",{class:!0});var T=y(s);m.l(T),T.forEach(p),_=C(c),n&&n.l(c),f=C(c),this.h()},h(){A(e,"class","left-0 top-0 absolute mr-2 bg-indigo-600 h-full p-2 rounded-l flex items-center justify-center"),A(s,"class","pl-4")},m(c,h){b(c,e,h),v(e,l),v(e,t),b(c,r,h),b(c,s,h),m.m(s,null),b(c,_,h),n&&n.m(c,h),b(c,f,h)},p(c,h){a===(a=i(c))&&m?m.p(c,h):(m.d(1),m=a(c),m&&(m.c(),m.m(s,null))),c[8]>0?n?n.p(c,h):(n=pe(c),n.c(),n.m(f.parentNode,f)):n&&(n.d(1),n=null)},d(c){c&&p(e),c&&p(r),c&&p(s),m.d(),c&&p(_),n&&n.d(c),c&&p(f)}}}function me(u){let e,l;function o(){return u[23](u[32])}return e=new G({props:{onclick:o,$$slots:{default:[Fe]},$$scope:{ctx:u}}}),{c(){H(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p(t,r){u=t;const s={};r[0]&1&&(s.onclick=o),r[0]&8449|r[1]&8&&(s.$$scope={dirty:r,ctx:u}),e.$set(s)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function he(u){let e,l,o;return{c(){e=k("div"),l=k("div"),o=k("div"),this.h()},l(t){e=g(t,"DIV",{class:!0});var r=y(e);l=g(r,"DIV",{class:!0});var s=y(l);o=g(s,"DIV",{id:!0,class:!0,style:!0}),y(o).forEach(p),s.forEach(p),r.forEach(p),this.h()},h(){A(o,"id","progress-bar"),A(o,"class","h-5 bg-orange-400 svelte-1h7b890"),se(o,"animation-duration",u[12]+"s"),A(l,"class","mb-6 h-5 w-full bg-neutral-200 dark:bg-neutral-600"),A(e,"class","bg-black")},m(t,r){b(t,e,r),v(e,l),v(l,o)},p(t,r){r[0]&4096&&se(o,"animation-duration",t[12]+"s")},d(t){t&&p(e)}}}function Ue(u){let e,l=u[14][u[31]]+"",o,t,r,s=u[29]+"",_,f;return{c(){e=k("span"),o=E(l),t=P(),r=k("p"),_=E(s),f=P(),this.h()},l(i){e=g(i,"SPAN",{class:!0});var a=y(e);o=$(a,l),a.forEach(p),t=C(i),r=g(i,"P",{class:!0});var m=y(r);_=$(m,s),m.forEach(p),f=C(i),this.h()},h(){A(e,"class","left-0 top-0 absolute mr-2 bg-indigo-600 h-full p-2 rounded-l flex items-center justify-center"),A(r,"class","pl-4")},m(i,a){b(i,e,a),v(e,o),b(i,t,a),b(i,r,a),v(r,_),b(i,f,a)},p(i,a){a[0]&4&&s!==(s=i[29]+"")&&R(_,s)},d(i){i&&p(e),i&&p(t),i&&p(r),i&&p(f)}}}function be(u){let e,l;function o(){return u[22](u[29])}return e=new G({props:{onclick:o,active:u[29]==u[6],$$slots:{default:[Ue]},$$scope:{ctx:u}}}),{c(){H(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){M(e,t,r),l=!0},p(t,r){u=t;const s={};r[0]&4&&(s.onclick=o),r[0]&68&&(s.active=u[29]==u[6]),r[0]&4|r[1]&8&&(s.$$scope={dirty:r,ctx:u}),e.$set(s)},i(t){l||(I(e.$$.fragment,t),l=!0)},o(t){O(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function de(u){let e,l,o=u[20]()+"",t,r,s,_;return s=new G({props:{onclick:u[17],$$slots:{default:[ze]},$$scope:{ctx:u}}}),{c(){e=k("h4"),l=E("Correct! "),t=E(o),r=P(),H(s.$$.fragment),this.h()},l(f){e=g(f,"H4",{class:!0});var i=y(e);l=$(i,"Correct! "),t=$(i,o),i.forEach(p),r=C(f),j(s.$$.fragment,f),this.h()},h(){A(e,"class","m-5 font-bold bg-green-800 mx-auto p-4 text-xl rounded")},m(f,i){b(f,e,i),v(e,l),v(e,t),b(f,r,i),M(s,f,i),_=!0},p(f,i){const a={};i[1]&8&&(a.$$scope={dirty:i,ctx:f}),s.$set(a)},i(f){_||(I(s.$$.fragment,f),_=!0)},o(f){O(s.$$.fragment,f),_=!1},d(f){f&&p(e),f&&p(r),B(s,f)}}}function ze(u){let e,l,o,t,r;return{c(){e=k("p"),l=E("Next Question"),o=P(),t=k("span"),r=k("iconify-icon"),this.h()},l(s){e=g(s,"P",{class:!0});var _=y(e);l=$(_,"Next Question"),_.forEach(p),o=C(s),t=g(s,"SPAN",{class:!0});var f=y(t);r=g(f,"ICONIFY-ICON",{icon:!0}),y(r).forEach(p),f.forEach(p),this.h()},h(){A(e,"class","pr-12"),J(r,"icon","material-symbols:play-arrow"),A(t,"class","right-0 top-0 absolute ml-2 bg-indigo-600 h-full px-2 py-4 rounded-r flex items-center justify-center text-4xl")},m(s,_){b(s,e,_),v(e,l),b(s,o,_),b(s,t,_),v(t,r)},p:K,d(s){s&&p(e),s&&p(o),s&&p(t)}}}function ve(u){let e,l,o,t,r,s,_=u[4]&&ke(),f=u[5]&&ge();const i=[Ke,Je],a=[];function m(n,c){return n[10]>0?0:1}return o=m(u),t=a[o]=i[o](u),{c(){_&&_.c(),e=P(),f&&f.c(),l=P(),t.c(),r=le()},l(n){_&&_.l(n),e=C(n),f&&f.l(n),l=C(n),t.l(n),r=le()},m(n,c){_&&_.m(n,c),b(n,e,c),f&&f.m(n,c),b(n,l,c),a[o].m(n,c),b(n,r,c),s=!0},p(n,c){n[4]?_||(_=ke(),_.c(),_.m(e.parentNode,e)):_&&(_.d(1),_=null),n[5]?f||(f=ge(),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null);let h=o;o=m(n),o===h?a[o].p(n,c):(L(),O(a[h],1,1,()=>{a[h]=null}),D(),t=a[o],t?t.p(n,c):(t=a[o]=i[o](n),t.c()),I(t,1),t.m(r.parentNode,r))},i(n){s||(I(t),s=!0)},o(n){O(t),s=!1},d(n){_&&_.d(n),n&&p(e),f&&f.d(n),n&&p(l),a[o].d(n),n&&p(r)}}}function ke(u){let e,l;return{c(){e=k("h4"),l=E("That was the wrong answer!"),this.h()},l(o){e=g(o,"H4",{class:!0});var t=y(e);l=$(t,"That was the wrong answer!"),t.forEach(p),this.h()},h(){A(e,"class","m-5 font-bold bg-red-800 mx-auto p-4 text-xl rounded")},m(o,t){b(o,e,t),v(e,l)},d(o){o&&p(e)}}}function ge(u){let e,l;return{c(){e=k("h4"),l=E("You ran out of time!"),this.h()},l(o){e=g(o,"H4",{class:!0});var t=y(e);l=$(t,"You ran out of time!"),t.forEach(p),this.h()},h(){A(e,"class","m-5 font-bold bg-red-800 mx-auto p-4 text-xl rounded")},m(o,t){b(o,e,t),v(e,l)},d(o){o&&p(e)}}}function Je(u){let e,l,o,t,r=u[9]-1+"",s,_,f;return e=new G({props:{onclick:u[19],$$slots:{default:[Xe]},$$scope:{ctx:u}}}),{c(){H(e.$$.fragment),l=P(),o=k("p"),t=E("You answered "),s=E(r),_=E(" questions correctly"),this.h()},l(i){j(e.$$.fragment,i),l=C(i),o=g(i,"P",{class:!0});var a=y(o);t=$(a,"You answered "),s=$(a,r),_=$(a," questions correctly"),a.forEach(p),this.h()},h(){A(o,"class","m-4")},m(i,a){M(e,i,a),b(i,l,a),b(i,o,a),v(o,t),v(o,s),v(o,_),f=!0},p(i,a){const m={};a[1]&8&&(m.$$scope={dirty:a,ctx:i}),e.$set(m),(!f||a[0]&512)&&r!==(r=i[9]-1+"")&&R(s,r)},i(i){f||(I(e.$$.fragment,i),f=!0)},o(i){O(e.$$.fragment,i),f=!1},d(i){B(e,i),i&&p(l),i&&p(o)}}}function Ke(u){let e,l,o,t,r,s,_;return s=new G({props:{onclick:u[18],$$slots:{default:[Ze]},$$scope:{ctx:u}}}),{c(){e=k("p"),l=E("You have "),o=E(u[10]),t=E(" lives remaining"),r=P(),H(s.$$.fragment),this.h()},l(f){e=g(f,"P",{class:!0});var i=y(e);l=$(i,"You have "),o=$(i,u[10]),t=$(i," lives remaining"),i.forEach(p),r=C(f),j(s.$$.fragment,f),this.h()},h(){A(e,"class","m-4")},m(f,i){b(f,e,i),v(e,l),v(e,o),v(e,t),b(f,r,i),M(s,f,i),_=!0},p(f,i){(!_||i[0]&1024)&&R(o,f[10]);const a={};i[1]&8&&(a.$$scope={dirty:i,ctx:f}),s.$set(a)},i(f){_||(I(s.$$.fragment,f),_=!0)},o(f){O(s.$$.fragment,f),_=!1},d(f){f&&p(e),f&&p(r),B(s,f)}}}function Xe(u){let e,l,o,t,r;return{c(){e=k("p"),l=E("Game over"),o=P(),t=k("span"),r=k("iconify-icon"),this.h()},l(s){e=g(s,"P",{class:!0});var _=y(e);l=$(_,"Game over"),_.forEach(p),o=C(s),t=g(s,"SPAN",{class:!0});var f=y(t);r=g(f,"ICONIFY-ICON",{class:!0,icon:!0}),y(r).forEach(p),f.forEach(p),this.h()},h(){A(e,"class","pr-12"),J(r,"class","scale-75"),J(r,"icon","icon-park-solid:bad-two"),A(t,"class","leading-10 right-0 top-0 absolute ml-2 bg-indigo-600 h-full px-2 py-4 rounded-r flex items-center justify-center text-4xl")},m(s,_){b(s,e,_),v(e,l),b(s,o,_),b(s,t,_),v(t,r)},p:K,d(s){s&&p(e),s&&p(o),s&&p(t)}}}function Ze(u){let e,l,o,t,r;return{c(){e=k("p"),l=E("Try again"),o=P(),t=k("span"),r=k("iconify-icon"),this.h()},l(s){e=g(s,"P",{class:!0});var _=y(e);l=$(_,"Try again"),_.forEach(p),o=C(s),t=g(s,"SPAN",{class:!0});var f=y(t);r=g(f,"ICONIFY-ICON",{icon:!0}),y(r).forEach(p),f.forEach(p),this.h()},h(){A(e,"class","pr-12"),J(r,"icon","material-symbols:replay"),A(t,"class","right-0 top-0 absolute ml-2 bg-indigo-600 h-full px-2 py-4 rounded-r flex items-center justify-center text-4xl")},m(s,_){b(s,e,_),v(e,l),b(s,o,_),b(s,t,_),v(t,r)},p:K,d(s){s&&p(e),s&&p(o),s&&p(t)}}}function xe(u){let e,l,o,t,r,s=ce(u[11])+"",_,f,i,a,m,n,c;const h=[Me,je],T=[];function W(S,q){return S[7]?0:1}i=W(u),a=T[i]=h[i](u);let N=u[3]&&de(u),w=(u[4]||u[5])&&ve(u);return{c(){e=k("div"),l=k("h1"),o=E("Question "),t=E(u[9]),r=E(" - "),_=E(s),f=P(),a.c(),m=P(),N&&N.c(),n=P(),w&&w.c(),this.h()},l(S){e=g(S,"DIV",{class:!0});var q=y(e);l=g(q,"H1",{class:!0});var Q=y(l);o=$(Q,"Question "),t=$(Q,u[9]),r=$(Q," - "),_=$(Q,s),Q.forEach(p),f=C(q),a.l(q),m=C(q),N&&N.l(q),n=C(q),w&&w.l(q),q.forEach(p),this.h()},h(){A(l,"class","text-4xl font-bold"),A(e,"class","text-center")},m(S,q){b(S,e,q),v(e,l),v(l,o),v(l,t),v(l,r),v(l,_),v(e,f),T[i].m(e,null),v(e,m),N&&N.m(e,null),v(e,n),w&&w.m(e,null),c=!0},p(S,q){(!c||q[0]&512)&&R(t,S[9]),(!c||q[0]&2048)&&s!==(s=ce(S[11])+"")&&R(_,s);let Q=i;i=W(S),i===Q?T[i].p(S,q):(L(),O(T[Q],1,1,()=>{T[Q]=null}),D(),a=T[i],a?a.p(S,q):(a=T[i]=h[i](S),a.c()),I(a,1),a.m(e,m)),S[3]?N?(N.p(S,q),q[0]&8&&I(N,1)):(N=de(S),N.c(),I(N,1),N.m(e,n)):N&&(L(),O(N,1,1,()=>{N=null}),D()),S[4]||S[5]?w?(w.p(S,q),q[0]&48&&I(w,1)):(w=ve(S),w.c(),I(w,1),w.m(e,null)):w&&(L(),O(w,1,1,()=>{w=null}),D())},i(S){c||(I(a),I(N),I(w),c=!0)},o(S){O(a),O(N),O(w),c=!1},d(S){S&&p(e),T[i].d(),N&&N.d(),w&&w.d()}}}function et(u,e,l){let o,t,r,s,_,f,i,a,m,n,c;V(u,Oe,d=>l(8,t=d)),V(u,ie,d=>l(9,r=d)),V(u,x,d=>l(0,s=d)),V(u,fe,d=>l(10,_=d)),V(u,Qe,d=>l(25,f=d)),V(u,ne,d=>l(11,i=d)),V(u,Ve,d=>l(12,a=d)),V(u,re,d=>l(1,m=d)),V(u,Re,d=>l(26,n=d)),V(u,We,d=>l(13,c=d));let h=[],T=!1,W=!1,N=!1,w,S="",q=Math.max(...Ye().highScores.map(d=>d.score));const Q=["A","B","C","D"],X=()=>{l(3,T=!1),l(4,W=!1),l(5,N=!1)};s.length===0&&ue&&Z("../");const ee=d=>{T||W||N||(w&&clearTimeout(w),l(6,S=d),m.correctAnswer===d?(l(3,T=!0),U.playSound(z.CORRECT_ANSWER)):(l(4,W=!0),U.playSound(z.WRONG_ANSWER)))},te=d=>{Y(re,m=d,m),l(2,h=[]),h.push(m.correctAnswer),n>Math.random()?(h.push(m.incorrectAnswers[0]),h.push(m.incorrectAnswers[1])):h.push(...m.incorrectAnswers),He(h),w&&clearTimeout(w),U.playSound(z.START_QUESTION),w=setTimeout(()=>{!W&&!T&&(U.playSound(z.WRONG_ANSWER),l(5,N=!0))},a*1e3)},we=()=>{if(w&&clearTimeout(w),r%3==0&&ue){Z("../reward/");return}Y(ie,r=r+1,r),Y(ne,i=Ce(r),i),oe(i,f).then(d=>{X(),Y(x,s=d,s)})},Ee=()=>{oe(i,f).then(d=>{Y(fe,_=_-1,_),X(),Y(x,s=d,s)})},$e=()=>{X(),De(r-1),Z("..")},Se=()=>r>q?"A new record!":r===q?"You have equalled your record!":q-r+" more to beat your record.",Ne=d=>{let F=d.question.split(" ");return F=F.splice(0,Math.min(F.length,t)),F.join(" ")},Ae=d=>ee(d),Te=d=>te(d);return u.$$.update=()=>{u.$$.dirty[0]&3&&l(7,o=m&&s.length>0&&s.filter(d=>d.id===m.id).length!==0)},[s,m,h,T,W,N,S,o,t,r,_,i,a,c,Q,ee,te,we,Ee,$e,Se,Ne,Ae,Te]}class it extends qe{constructor(e){super(),Ie(this,e,et,xe,Pe,{},null,[-1,-1])}}export{it as default};
