import{S as te,i as se,s as le,l as E,a as L,u as I,K as ge,m as k,h as m,c as A,p as S,v as F,q as b,r as Y,F as a,b as x,L as be,M as Z,w as Q,N as Ee,n as ee,O as ue,o as ke,P as X,f as H,g as pe,d as de,t as G,Q as he,R as ze,x as me,y as ye,z as _e,C as ve}from"../../chunks/index-c70d96c8.js";import{d as Ce}from"../../chunks/transform-d6b5607a.js";import{b as Se}from"../../chunks/paths-b9644fda.js";class Te extends Map{constructor(e,l=Me){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:l}}),e!=null)for(const[t,f]of e)this.set(t,f)}get(e){return super.get(re(this,e))}has(e){return super.has(re(this,e))}set(e,l){return super.set(we(this,e),l)}delete(e){return super.delete(Pe(this,e))}}function re({_intern:s,_key:e},l){const t=e(l);return s.has(t)?s.get(t):l}function we({_intern:s,_key:e},l){const t=e(l);return s.has(t)?s.get(t):(s.set(t,l),l)}function Pe({_intern:s,_key:e},l){const t=e(l);return s.has(t)&&(l=s.get(t),s.delete(t)),l}function Me(s){return s!==null&&typeof s=="object"?s.valueOf():s}function De(s){return s}function Le(s,...e){return Ie(s,Array.from,De,e)}function Ie(s,e,l,t){return function f(c,g){if(g>=t.length)return l(c);const y=new Te,_=t[g++];let n=-1;for(const d of c){const o=_(d,++n,c),r=y.get(o);r?r.push(d):y.set(o,[d])}for(const[d,o]of y)y.set(d,f(o,g));return e(y)}(s,0)}const Ae=async s=>{if("clipboard"in navigator)await navigator.clipboard.writeText(s);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=s,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},Fe=(s,e)=>{async function l(){if(e)try{await Ae(e),s.dispatchEvent(new CustomEvent("svelte-copy",{detail:e}))}catch(t){s.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:t}))}}return s.addEventListener("click",l,!0),{update:t=>e=t,destroy:()=>s.removeEventListener("click",l,!0)}};function Ne(s){let e,l,t,f,c,g,y,_,n,d,o,r,p,T,w,q,M,N,U,P,B,D,R,K;return{c(){e=E("link"),l=L(),t=E("div"),f=E("h3"),c=I(s[0]),g=L(),y=E("p"),_=I(s[1]),n=L(),d=E("details"),o=E("summary"),r=I("CSS Snippet"),p=L(),T=E("code"),w=I(s[2]),q=L(),M=E("p"),N=E("button"),U=I("Copy CSS to Clipboard"),B=E("span"),D=I(s[3]),this.h()},l(C){const z=ge('[data-svelte="svelte-1uevrx3"]',document.head);e=k(z,"LINK",{rel:!0,href:!0}),z.forEach(m),l=A(C),t=k(C,"DIV",{style:!0,class:!0});var u=S(t);f=k(u,"H3",{class:!0});var W=S(f);c=F(W,s[0]),W.forEach(m),g=A(u),y=k(u,"P",{});var i=S(y);_=F(i,s[1]),i.forEach(m),n=A(u),d=k(u,"DETAILS",{class:!0});var h=S(d);o=k(h,"SUMMARY",{class:!0});var v=S(o);r=F(v,"CSS Snippet"),v.forEach(m),p=A(h),T=k(h,"CODE",{class:!0});var j=S(T);w=F(j,s[2]),j.forEach(m),h.forEach(m),q=A(u),M=k(u,"P",{});var V=S(M);N=k(V,"BUTTON",{class:!0});var O=S(N);U=F(O,"Copy CSS to Clipboard"),O.forEach(m),B=k(V,"SPAN",{class:!0});var J=S(B);D=F(J,s[3]),J.forEach(m),V.forEach(m),u.forEach(m),this.h()},h(){b(e,"rel","external stylesheet"),b(e,"href",s[5]),b(f,"class","svelte-19ry7n"),Y(y,"font-size",s[4],!1),b(o,"class","svelte-19ry7n"),b(T,"class","svelte-19ry7n"),b(d,"class","svelte-19ry7n"),b(N,"class","svelte-19ry7n"),b(B,"class","svelte-19ry7n"),Y(t,"font-family","'"+s[0]+"'"),b(t,"class","svelte-19ry7n")},m(C,z){a(document.head,e),x(C,l,z),x(C,t,z),a(t,f),a(f,c),a(t,g),a(t,y),a(y,_),a(t,n),a(t,d),a(d,o),a(o,r),a(d,p),a(d,T),a(T,w),a(t,q),a(t,M),a(M,N),a(N,U),a(M,B),a(B,D),R||(K=[be(P=Fe.call(null,N,s[2])),Z(N,"svelte-copy",s[6])],R=!0)},p(C,[z]){z&1&&Q(c,C[0]),z&2&&Q(_,C[1]),z&16&&Y(y,"font-size",C[4],!1),z&4&&Q(w,C[2]),P&&Ee(P.update)&&z&4&&P.update.call(null,C[2]),z&8&&Q(D,C[3]),z&1&&Y(t,"font-family","'"+C[0]+"'")},i:ee,o:ee,d(C){m(e),C&&m(l),C&&m(t),R=!1,ue(K)}}}function Be(s,e,l){let t,{id:f=""}=e,{family:c=""}=e,{size:g=16}=e,{text:y}=e,_="",n="";const d=`${Se}/assets/demo/fonts/${f}.css`,o=()=>{l(3,n="Copied!"),setTimeout(()=>{l(3,n="")},1e3)};return ke(async()=>{const r=await fetch(d);l(2,_=await r.text())}),s.$$set=r=>{"id"in r&&l(7,f=r.id),"family"in r&&l(0,c=r.family),"size"in r&&l(8,g=r.size),"text"in r&&l(1,y=r.text)},s.$$.update=()=>{s.$$.dirty&256&&l(4,t=`${g}px`)},[c,y,_,n,t,d,o,f,g]}class Oe extends te{constructor(e){super(),se(this,e,Be,Ne,le,{id:7,family:0,size:8,text:1})}}const Re=[{id:"atkinson",family:"Atkinson",type:"sans-serif"},{id:"atlas",family:"Atlas Grotesk",type:"sans-serif"},{id:"baloo-bhai",family:"Baloo Bhai",type:"sans-serif"},{id:"canela",family:"Canela",type:"serif"},{id:"computer-modern",family:"Computer Modern",type:"serif"},{id:"cozette",family:"Cozette",type:"other"},{id:"inter",family:"Inter",type:"sans-serif"},{id:"jamboree",family:"Jamboree",type:"other"},{id:"jersey",family:"Jersey M54",type:"other"},{id:"lyon",family:"Lyon Display",type:"serif"},{id:"metropolis",family:"Metropolis",type:"sans-serif"},{id:"national",family:"National 2 Web",type:"sans-serif"},{id:"publico",family:"Publico Text",type:"serif"},{id:"recoleta",family:"Recoleta",type:"serif"},{id:"rubik",family:"Rubik",type:"sans-serif"},{id:"spacemono",family:"Space Mono",type:"mono"},{id:"tiempos",family:"Tiempos Text",type:"serif"}];function ae(s,e,l){const t=s.slice();return t[5]=e[l][0],t[6]=e[l][1],t}function ie(s,e,l){const t=s.slice();return t[9]=e[l].family,t[10]=e[l].id,t}function fe(s){let e,l;return e=new Oe({props:{id:s[10],family:s[9],size:s[0],text:s[1]}}),{c(){me(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,f){_e(e,t,f),l=!0},p(t,f){const c={};f&1&&(c.size=t[0]),f&2&&(c.text=t[1]),e.$set(c)},i(t){l||(H(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){ve(e,t)}}}function ce(s){let e,l=s[5]+"",t,f,c,g,y,_=s[6],n=[];for(let o=0;o<_.length;o+=1)n[o]=fe(ie(s,_,o));const d=o=>G(n[o],1,1,()=>{n[o]=null});return{c(){e=E("h2"),t=I(l),f=L(),c=E("section");for(let o=0;o<n.length;o+=1)n[o].c();g=L(),this.h()},l(o){e=k(o,"H2",{});var r=S(e);t=F(r,l),r.forEach(m),f=A(o),c=k(o,"SECTION",{class:!0});var p=S(c);for(let T=0;T<n.length;T+=1)n[T].l(p);g=A(p),p.forEach(m),this.h()},h(){b(c,"class","svelte-1lzc8ku")},m(o,r){x(o,e,r),a(e,t),x(o,f,r),x(o,c,r);for(let p=0;p<n.length;p+=1)n[p].m(c,null);a(c,g),y=!0},p(o,r){if(r&7){_=o[6];let p;for(p=0;p<_.length;p+=1){const T=ie(o,_,p);n[p]?(n[p].p(T,r),H(n[p],1)):(n[p]=fe(T),n[p].c(),H(n[p],1),n[p].m(c,g))}for(pe(),p=_.length;p<n.length;p+=1)d(p);de()}},i(o){if(!y){for(let r=0;r<_.length;r+=1)H(n[r]);y=!0}},o(o){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)G(n[r]);y=!1},d(o){o&&m(e),o&&m(f),o&&m(c),he(n,o)}}}function je(s){let e,l,t,f,c,g,y,_,n,d,o,r,p,T,w,q,M,N,U,P,B,D,R,K,C,z=s[2],u=[];for(let i=0;i<z.length;i+=1)u[i]=ce(ae(s,z,i));const W=i=>G(u[i],1,1,()=>{u[i]=null});return{c(){e=E("div"),l=E("h1"),t=I("Hosted Fonts on The Pudding"),f=L(),c=E("p"),g=E("em"),y=I("Do not use fonts hosted by The Pudding without written permission."),_=L(),n=E("form"),d=E("label"),o=I("font-size: "),r=I(s[0]),p=I("px"),T=L(),w=E("input"),q=L(),M=E("label"),N=I("text sample"),U=L(),P=E("input"),B=L(),D=E("article");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){e=k(i,"DIV",{id:!0,class:!0});var h=S(e);l=k(h,"H1",{});var v=S(l);t=F(v,"Hosted Fonts on The Pudding"),v.forEach(m),f=A(h),c=k(h,"P",{});var j=S(c);g=k(j,"EM",{});var V=S(g);y=F(V,"Do not use fonts hosted by The Pudding without written permission."),V.forEach(m),j.forEach(m),_=A(h),n=k(h,"FORM",{});var O=S(n);d=k(O,"LABEL",{for:!0,class:!0});var J=S(d);o=F(J,"font-size: "),r=F(J,s[0]),p=F(J,"px"),J.forEach(m),T=A(O),w=k(O,"INPUT",{id:!0,type:!0,min:!0,max:!0}),q=A(O),M=k(O,"LABEL",{for:!0,class:!0});var ne=S(M);N=F(ne,"text sample"),ne.forEach(m),U=A(O),P=k(O,"INPUT",{id:!0,type:!0,maxlength:!0}),O.forEach(m),h.forEach(m),B=A(i),D=k(i,"ARTICLE",{class:!0});var oe=S(D);for(let $=0;$<u.length;$+=1)u[$].l(oe);oe.forEach(m),this.h()},h(){b(d,"for","size"),b(d,"class","svelte-1lzc8ku"),b(w,"id","size"),b(w,"type","range"),b(w,"min","12"),b(w,"max","48"),b(M,"for","text"),b(M,"class","svelte-1lzc8ku"),b(P,"id","text"),b(P,"type","text"),b(P,"maxlength","100"),b(e,"id","info"),b(e,"class","svelte-1lzc8ku"),b(D,"class","svelte-1lzc8ku")},m(i,h){x(i,e,h),a(e,l),a(l,t),a(e,f),a(e,c),a(c,g),a(g,y),a(e,_),a(e,n),a(n,d),a(d,o),a(d,r),a(d,p),a(n,T),a(n,w),X(w,s[0]),a(n,q),a(n,M),a(M,N),a(n,U),a(n,P),X(P,s[1]),x(i,B,h),x(i,D,h);for(let v=0;v<u.length;v+=1)u[v].m(D,null);R=!0,K||(C=[Z(w,"change",s[3]),Z(w,"input",s[3]),Z(P,"input",s[4])],K=!0)},p(i,[h]){if((!R||h&1)&&Q(r,i[0]),h&1&&X(w,i[0]),h&2&&P.value!==i[1]&&X(P,i[1]),h&7){z=i[2];let v;for(v=0;v<z.length;v+=1){const j=ae(i,z,v);u[v]?(u[v].p(j,h),H(u[v],1)):(u[v]=ce(j),u[v].c(),H(u[v],1),u[v].m(D,null))}for(pe(),v=z.length;v<u.length;v+=1)W(v);de()}},i(i){if(!R){for(let h=0;h<z.length;h+=1)H(u[h]);R=!0}},o(i){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)G(u[h]);R=!1},d(i){i&&m(e),i&&m(B),i&&m(D),he(u,i),K=!1,ue(C)}}}function xe(s,e,l){let t=18,f="The quick brown fox jumps over the lazy dog.";const c=Le(Re,_=>_.type);c.sort((_,n)=>Ce(_[1].length,n[1].length));function g(){t=ze(this.value),l(0,t)}function y(){f=this.value,l(1,f)}return[t,f,c,g,y]}class He extends te{constructor(e){super(),se(this,e,xe,je,le,{})}}function qe(s){let e,l;return e=new He({}),{c(){me(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,f){_e(e,t,f),l=!0},p:ee,i(t){l||(H(e.$$.fragment,t),l=!0)},o(t){G(e.$$.fragment,t),l=!1},d(t){ve(e,t)}}}class Ve extends te{constructor(e){super(),se(this,e,null,qe,le,{})}}export{Ve as default};
