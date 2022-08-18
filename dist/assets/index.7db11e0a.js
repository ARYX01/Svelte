(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function A(){}const Pe=t=>t;function St(t,e){for(const n in e)t[n]=e[n];return t}function at(t){return t()}function et(){return Object.create(null)}function W(t){t.forEach(at)}function Ve(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Et(t){return Object.keys(t).length===0}function Rt(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(Rt(e,n))}function ct(t,e,n,l){if(t){const s=ft(t,e,n,l);return t[0](s)}}function ft(t,e,n,l){return t[1]&&l?St(n.ctx.slice(),t[1](l(e))):n.ctx}function dt(t,e,n,l){if(t[2]&&l){const s=t[2](l(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)i[a]=e.dirty[a]|s[a];return i}return e.dirty|s}return e.dirty}function mt(t,e,n,l,s,i){if(s){const r=ft(e,n,l,i);t.p(r,s)}}function pt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function tt(t){return t==null?"":t}const _t=typeof window<"u";let ht=_t?()=>window.performance.now():()=>Date.now(),xe=_t?t=>requestAnimationFrame(t):A;const re=new Set;function gt(t){re.forEach(e=>{e.c(t)||(re.delete(e),e.f())}),re.size!==0&&xe(gt)}function vt(t){let e;return re.size===0&&xe(gt),{promise:new Promise(n=>{re.add(e={c:t,f:n})}),abort(){re.delete(e)}}}function d(t,e){t.appendChild(e)}function yt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function qt(t){const e=_("style");return Ft(yt(t),e),e.sheet}function Ft(t,e){d(t.head||t,e)}function j(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function $(){return B(" ")}function Lt(){return B("")}function q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function Ot(t){return function(e){return e.preventDefault(),t.call(this,e)}}function o(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function nt(t,e){t.value=e==null?"":e}function $t(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,l,e),s}const qe=new Map;let Fe=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:qt(e),rules:{}};return qe.set(t,n),n}function bt(t,e,n,l,s,i,r,a=0){const u=16.666/l;let c=`{
`;for(let y=0;y<=1;y+=u){const S=e+(n-e)*i(y);c+=y*100+`%{${r(S,1-S)}}
`}const g=c+`100% {${r(n,1-n)}}
}`,v=`__svelte_${Nt(g)}_${a}`,f=yt(t),{stylesheet:m,rules:p}=qe.get(f)||At(f,t);p[v]||(p[v]=!0,m.insertRule(`@keyframes ${v} ${g}`,m.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${v} ${l}ms linear ${s}ms 1 both`,Fe+=1,v}function De(t,e){const n=(t.style.animation||"").split(", "),l=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=n.length-l.length;s&&(t.style.animation=l.join(", "),Fe-=s,Fe||It())}function It(){xe(()=>{Fe||(qe.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),qe.clear())})}let ve;function he(t){ve=t}function Dt(){if(!ve)throw new Error("Function called outside component initialization");return ve}function Tt(){const t=Dt();return(e,n,{cancelable:l=!1}={})=>{const s=t.$$.callbacks[e];if(s){const i=$t(e,n,{cancelable:l});return s.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const _e=[],lt=[],Ee=[],st=[],Pt=Promise.resolve();let Te=!1;function Vt(){Te||(Te=!0,Pt.then(kt))}function ue(t){Ee.push(t)}const Ne=new Set;let Ce=0;function kt(){const t=ve;do{for(;Ce<_e.length;){const e=_e[Ce];Ce++,he(e),xt(e.$$)}for(he(null),_e.length=0,Ce=0;lt.length;)lt.pop()();for(let e=0;e<Ee.length;e+=1){const n=Ee[e];Ne.has(n)||(Ne.add(n),n())}Ee.length=0}while(_e.length);for(;st.length;)st.pop()();Te=!1,Ne.clear(),he(t)}function xt(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ue)}}let pe;function wt(){return pe||(pe=Promise.resolve(),pe.then(()=>{pe=null})),pe}function Le(t,e,n){t.dispatchEvent($t(`${e?"intro":"outro"}${n}`))}const Re=new Set;let J;function Bt(){J={r:0,c:[],p:J}}function zt(){J.r||W(J.c),J=J.p}function O(t,e){t&&t.i&&(Re.delete(t),t.i(e))}function N(t,e,n,l){if(t&&t.o){if(Re.has(t))return;Re.add(t),J.c.push(()=>{Re.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}const jt={duration:0};function Ht(t,e,n){let l=e(t,n),s=!1,i,r,a=0;function u(){i&&De(t,i)}function c(){const{delay:v=0,duration:f=300,easing:m=Pe,tick:p=A,css:h}=l||jt;h&&(i=bt(t,0,1,f,v,m,h,a++)),p(0,1);const y=ht()+v,S=y+f;r&&r.abort(),s=!0,ue(()=>Le(t,!0,"start")),r=vt(F=>{if(s){if(F>=S)return p(1,0),Le(t,!0,"end"),u(),s=!1;if(F>=y){const G=m((F-y)/f);p(G,1-G)}}return s})}let g=!1;return{start(){g||(g=!0,De(t),Ve(l)?(l=l(),wt().then(c)):c())},invalidate(){g=!1},end(){s&&(u(),s=!1)}}}function Ut(t,e,n){let l=e(t,n),s=!0,i;const r=J;r.r+=1;function a(){const{delay:u=0,duration:c=300,easing:g=Pe,tick:v=A,css:f}=l||jt;f&&(i=bt(t,1,0,c,u,g,f));const m=ht()+u,p=m+c;ue(()=>Le(t,!1,"start")),vt(h=>{if(s){if(h>=p)return v(0,1),Le(t,!1,"end"),--r.r||W(r.c),!1;if(h>=m){const y=g((h-m)/c);v(1-y,y)}}return s})}return Ve(l)?wt().then(()=>{l=l(),a()}):a(),{end(u){u&&l.tick&&l.tick(1,0),s&&(i&&De(t,i),s=!1)}}}function Gt(t,e){N(t,1,1,()=>{e.delete(t.key)})}function Jt(t,e,n,l,s,i,r,a,u,c,g,v){let f=t.length,m=i.length,p=f;const h={};for(;p--;)h[t[p].key]=p;const y=[],S=new Map,F=new Map;for(p=m;p--;){const b=v(s,i,p),L=n(b);let C=r.get(L);C?l&&C.p(b,e):(C=c(L,b),C.c()),S.set(L,y[p]=C),L in h&&F.set(L,Math.abs(p-h[L]))}const G=new Set,z=new Set;function E(b){O(b,1),b.m(a,g),r.set(b.key,b),g=b.first,m--}for(;f&&m;){const b=y[m-1],L=t[f-1],C=b.key,K=L.key;b===L?(g=b.first,f--,m--):S.has(K)?!r.has(C)||G.has(C)?E(b):z.has(K)?f--:F.get(C)>F.get(K)?(z.add(C),E(b)):(G.add(K),f--):(u(L,r),f--)}for(;f--;){const b=t[f];S.has(b.key)||u(b,r)}for(;m;)E(y[m-1]);return y}function X(t){t&&t.c()}function H(t,e,n,l){const{fragment:s,on_mount:i,on_destroy:r,after_update:a}=t.$$;s&&s.m(e,n),l||ue(()=>{const u=i.map(at).filter(Ve);r?r.push(...u):W(u),t.$$.on_mount=[]}),a.forEach(ue)}function U(t,e){const n=t.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Xt(t,e){t.$$.dirty[0]===-1&&(_e.push(t),Vt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Y(t,e,n,l,s,i,r,a=[-1]){const u=ve;he(t);const c=t.$$={fragment:null,ctx:null,props:i,update:A,not_equal:s,bound:et(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:et(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};r&&r(c.root);let g=!1;if(c.ctx=n?n(t,e.props||{},(v,f,...m)=>{const p=m.length?m[0]:f;return c.ctx&&s(c.ctx[v],c.ctx[v]=p)&&(!c.skip_bound&&c.bound[v]&&c.bound[v](p),g&&Xt(t,v)),f}):[],c.update(),g=!0,W(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const v=Mt(e.target);c.fragment&&c.fragment.l(v),v.forEach(k)}else c.fragment&&c.fragment.c();e.intro&&O(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),kt()}he(u)}class Z{$destroy(){U(this,1),this.$destroy=A}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!Et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Se,Wt=new Uint8Array(16);function Qt(){if(!Se&&(Se=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Se))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Se(Wt)}const Yt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Zt(t){return typeof t=="string"&&Yt.test(t)}var w=[];for(var Ae=0;Ae<256;++Ae)w.push((Ae+256).toString(16).substr(1));function Kt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(w[t[e+0]]+w[t[e+1]]+w[t[e+2]]+w[t[e+3]]+"-"+w[t[e+4]]+w[t[e+5]]+"-"+w[t[e+6]]+w[t[e+7]]+"-"+w[t[e+8]]+w[t[e+9]]+"-"+w[t[e+10]]+w[t[e+11]]+w[t[e+12]]+w[t[e+13]]+w[t[e+14]]+w[t[e+15]]).toLowerCase();if(!Zt(n))throw TypeError("Stringified UUID is invalid");return n}function en(t,e,n){t=t||{};var l=t.random||(t.rng||Qt)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){n=n||0;for(var s=0;s<16;++s)e[n+s]=l[s];return e}return Kt(l)}const tn=(t,e)=>{let n=[],l;const s=f=>{try{return JSON.parse(f)}catch(m){m instanceof Error&&console.log(m)}},i=(f,m)=>{try{localStorage.setItem(f,JSON.stringify(m))}catch(p){p instanceof Error&&console.log(p)}},r=f=>{try{return localStorage.getItem(f)}catch(m){m instanceof Error&&console.log(m)}};let a=r(t);a==null?(l=e,i(t,l)):l=s(r(t));let u=new BroadcastChannel(t);u.onmessage=f=>{l=s(r(t)),f.data===t&&n.forEach(m=>m(l))};const c=f=>(f(l),n=[...n,f],f.length===1&&u===null&&(u=new BroadcastChannel(t)),()=>{n=n.filter(p=>p!=f),u&&f.length===0&&(u.close(),u=null)}),g=f=>{l=f,i(t,f),n.forEach(m=>m(l)),u&&u.postMessage(t)};return{subscribe:c,set:g,update:f=>g(f(l))}},Oe=tn("feedbacks",[{id:1,rating:10,text:"test"},{id:2,rating:7,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."},{id:3,rating:8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."},{id:4,rating:8,text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae."}]);function nn(t){let e,n;const l=t[1].default,s=ct(l,t,t[0],null);return{c(){e=_("div"),s&&s.c(),o(e,"class","card svelte-1mj4ff7")},m(i,r){j(i,e,r),s&&s.m(e,null),n=!0},p(i,[r]){s&&s.p&&(!n||r&1)&&mt(s,l,i,i[0],n?dt(l,i[0],r,null):pt(i[0]),null)},i(i){n||(O(s,i),n=!0)},o(i){N(s,i),n=!1},d(i){i&&k(e),s&&s.d(i)}}}function ln(t,e,n){let{$$slots:l={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&n(0,s=i.$$scope)},[s,l]}class Ct extends Z{constructor(e){super(),Y(this,e,ln,nn,Q,{})}}function sn(t){let e,n,l;const s=t[4].default,i=ct(s,t,t[3],null);return{c(){e=_("button"),i&&i.c(),o(e,"type",t[1]),e.disabled=t[2],o(e,"class",n=tt(t[0])+" svelte-ketqkq")},m(r,a){j(r,e,a),i&&i.m(e,null),l=!0},p(r,[a]){i&&i.p&&(!l||a&8)&&mt(i,s,r,r[3],l?dt(s,r[3],a,null):pt(r[3]),null),(!l||a&2)&&o(e,"type",r[1]),(!l||a&4)&&(e.disabled=r[2]),(!l||a&1&&n!==(n=tt(r[0])+" svelte-ketqkq"))&&o(e,"class",n)},i(r){l||(O(i,r),l=!0)},o(r){N(i,r),l=!1},d(r){r&&k(e),i&&i.d(r)}}}function rn(t,e,n){let{$$slots:l={},$$scope:s}=e,{style:i="primary"}=e,{type:r="button"}=e,{disabled:a=!1}=e;return t.$$set=u=>{"style"in u&&n(0,i=u.style),"type"in u&&n(1,r=u.type),"disabled"in u&&n(2,a=u.disabled),"$$scope"in u&&n(3,s=u.$$scope)},[i,r,a,s,l]}class un extends Z{constructor(e){super(),Y(this,e,rn,sn,Q,{style:0,type:1,disabled:2})}}function an(t){let e,n,l,s,i,r,a,u,c,g,v,f,m,p,h,y,S,F,G,z,E,b,L,C,K,ee,I,ye,Be,ae,ze,te,D,$e,He,oe,Ue,ne,T,be,Ge,ce,Je,le,P,ke,Xe,fe,We,se,V,we,Qe,de,Ye,ie,x,je,Ze,me,Me,Ke;return{c(){e=_("ul"),n=_("li"),l=_("input"),i=$(),r=_("label"),r.textContent="1",a=$(),u=_("li"),c=_("input"),v=$(),f=_("label"),f.textContent="2",m=$(),p=_("li"),h=_("input"),S=$(),F=_("label"),F.textContent="3",G=$(),z=_("li"),E=_("input"),L=$(),C=_("label"),C.textContent="4",K=$(),ee=_("li"),I=_("input"),Be=$(),ae=_("label"),ae.textContent="5",ze=$(),te=_("li"),D=_("input"),He=$(),oe=_("label"),oe.textContent="6",Ue=$(),ne=_("li"),T=_("input"),Ge=$(),ce=_("label"),ce.textContent="7",Je=$(),le=_("li"),P=_("input"),Xe=$(),fe=_("label"),fe.textContent="8",We=$(),se=_("li"),V=_("input"),Qe=$(),de=_("label"),de.textContent="9",Ye=$(),ie=_("li"),x=_("input"),Ze=$(),me=_("label"),me.textContent="10",o(l,"type","radio"),o(l,"id","num1"),o(l,"name","rating"),l.value="1",l.checked=s=t[0]===1,o(l,"class","svelte-1ua1t9j"),o(r,"for","num1"),o(r,"class","svelte-1ua1t9j"),o(n,"class","svelte-1ua1t9j"),o(c,"type","radio"),o(c,"id","num2"),o(c,"name","rating"),c.value="2",c.checked=g=t[0]===2,o(c,"class","svelte-1ua1t9j"),o(f,"for","num2"),o(f,"class","svelte-1ua1t9j"),o(u,"class","svelte-1ua1t9j"),o(h,"type","radio"),o(h,"id","num3"),o(h,"name","rating"),h.value="3",h.checked=y=t[0]===3,o(h,"class","svelte-1ua1t9j"),o(F,"for","num3"),o(F,"class","svelte-1ua1t9j"),o(p,"class","svelte-1ua1t9j"),o(E,"type","radio"),o(E,"id","num4"),o(E,"name","rating"),E.value="4",E.checked=b=t[0]===4,o(E,"class","svelte-1ua1t9j"),o(C,"for","num4"),o(C,"class","svelte-1ua1t9j"),o(z,"class","svelte-1ua1t9j"),o(I,"type","radio"),o(I,"id","num5"),o(I,"name","rating"),I.value="5",I.checked=ye=t[0]===5,o(I,"class","svelte-1ua1t9j"),o(ae,"for","num5"),o(ae,"class","svelte-1ua1t9j"),o(ee,"class","svelte-1ua1t9j"),o(D,"type","radio"),o(D,"id","num6"),o(D,"name","rating"),D.value="6",D.checked=$e=t[0]===6,o(D,"class","svelte-1ua1t9j"),o(oe,"for","num6"),o(oe,"class","svelte-1ua1t9j"),o(te,"class","svelte-1ua1t9j"),o(T,"type","radio"),o(T,"id","num7"),o(T,"name","rating"),T.value="7",T.checked=be=t[0]===7,o(T,"class","svelte-1ua1t9j"),o(ce,"for","num7"),o(ce,"class","svelte-1ua1t9j"),o(ne,"class","svelte-1ua1t9j"),o(P,"type","radio"),o(P,"id","num8"),o(P,"name","rating"),P.value="8",P.checked=ke=t[0]===8,o(P,"class","svelte-1ua1t9j"),o(fe,"for","num8"),o(fe,"class","svelte-1ua1t9j"),o(le,"class","svelte-1ua1t9j"),o(V,"type","radio"),o(V,"id","num9"),o(V,"name","rating"),V.value="9",V.checked=we=t[0]===9,o(V,"class","svelte-1ua1t9j"),o(de,"for","num9"),o(de,"class","svelte-1ua1t9j"),o(se,"class","svelte-1ua1t9j"),o(x,"type","radio"),o(x,"id","num10"),o(x,"name","rating"),x.value="10",x.checked=je=t[0]===10,o(x,"class","svelte-1ua1t9j"),o(me,"for","num10"),o(me,"class","svelte-1ua1t9j"),o(ie,"class","svelte-1ua1t9j"),o(e,"class","rating svelte-1ua1t9j")},m(R,M){j(R,e,M),d(e,n),d(n,l),d(n,i),d(n,r),d(e,a),d(e,u),d(u,c),d(u,v),d(u,f),d(e,m),d(e,p),d(p,h),d(p,S),d(p,F),d(e,G),d(e,z),d(z,E),d(z,L),d(z,C),d(e,K),d(e,ee),d(ee,I),d(ee,Be),d(ee,ae),d(e,ze),d(e,te),d(te,D),d(te,He),d(te,oe),d(e,Ue),d(e,ne),d(ne,T),d(ne,Ge),d(ne,ce),d(e,Je),d(e,le),d(le,P),d(le,Xe),d(le,fe),d(e,We),d(e,se),d(se,V),d(se,Qe),d(se,de),d(e,Ye),d(e,ie),d(ie,x),d(ie,Ze),d(ie,me),Me||(Ke=[q(l,"change",t[1]),q(c,"change",t[1]),q(h,"change",t[1]),q(E,"change",t[1]),q(I,"change",t[1]),q(D,"change",t[1]),q(T,"change",t[1]),q(P,"change",t[1]),q(V,"change",t[1]),q(x,"change",t[1])],Me=!0)},p(R,[M]){M&1&&s!==(s=R[0]===1)&&(l.checked=s),M&1&&g!==(g=R[0]===2)&&(c.checked=g),M&1&&y!==(y=R[0]===3)&&(h.checked=y),M&1&&b!==(b=R[0]===4)&&(E.checked=b),M&1&&ye!==(ye=R[0]===5)&&(I.checked=ye),M&1&&$e!==($e=R[0]===6)&&(D.checked=$e),M&1&&be!==(be=R[0]===7)&&(T.checked=be),M&1&&ke!==(ke=R[0]===8)&&(P.checked=ke),M&1&&we!==(we=R[0]===9)&&(V.checked=we),M&1&&je!==(je=R[0]===10)&&(x.checked=je)},i:A,o:A,d(R){R&&k(e),Me=!1,W(Ke)}}}function on(t,e,n){let l=10;const s=Tt();return[l,r=>{n(0,l=r.currentTarget.value),s("rating-select",l)}]}class cn extends Z{constructor(e){super(),Y(this,e,on,an,Q,{})}}function fn(t){let e;return{c(){e=B("Send")},m(n,l){j(n,e,l)},d(n){n&&k(e)}}}function it(t){let e,n;return{c(){e=_("div"),n=B(t[2]),o(e,"class","message svelte-1osx45f")},m(l,s){j(l,e,s),d(e,n)},p(l,s){s&4&&ge(n,l[2])},d(l){l&&k(e)}}}function dn(t){let e,n,l,s,i,r,a,u,c,g,v,f,m;s=new cn({}),s.$on("rating-select",t[3]),c=new un({props:{disabled:t[1],type:"submit",$$slots:{default:[fn]},$$scope:{ctx:t}}});let p=t[2]&&it(t);return{c(){e=_("header"),e.innerHTML='<h2 class="svelte-1osx45f">How would you rate your service with us?</h2>',n=$(),l=_("form"),X(s.$$.fragment),i=$(),r=_("div"),a=_("input"),u=$(),X(c.$$.fragment),g=$(),p&&p.c(),o(e,"class","svelte-1osx45f"),o(a,"type","text"),o(a,"placeholder","Tell us something that keeps you coming back"),o(a,"class","svelte-1osx45f"),o(r,"class","input-group svelte-1osx45f")},m(h,y){j(h,e,y),j(h,n,y),j(h,l,y),H(s,l,null),d(l,i),d(l,r),d(r,a),nt(a,t[0]),d(r,u),H(c,r,null),d(l,g),p&&p.m(l,null),v=!0,f||(m=[q(a,"input",t[4]),q(a,"input",t[6]),q(l,"submit",Ot(t[5]))],f=!0)},p(h,y){y&1&&a.value!==h[0]&&nt(a,h[0]);const S={};y&2&&(S.disabled=h[1]),y&256&&(S.$$scope={dirty:y,ctx:h}),c.$set(S),h[2]?p?p.p(h,y):(p=it(h),p.c(),p.m(l,null)):p&&(p.d(1),p=null)},i(h){v||(O(s.$$.fragment,h),O(c.$$.fragment,h),v=!0)},o(h){N(s.$$.fragment,h),N(c.$$.fragment,h),v=!1},d(h){h&&k(e),h&&k(n),h&&k(l),U(s),U(c),p&&p.d(),f=!1,W(m)}}}function mn(t){let e,n;return e=new Ct({props:{$$slots:{default:[dn]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,[s]){const i={};s&263&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){N(e.$$.fragment,l),n=!1},d(l){U(e,l)}}}let Ie=10;function pn(t,e,n){let l="",s=10,i=!0,r;const a=v=>s=v.detail,u=()=>{l.trim().length<=Ie?(n(2,r=`Text must be at least ${Ie} characters`),n(1,i=!0)):(n(2,r=null),n(1,i=!1))},c=()=>{if(l.trim().length>Ie){const v={id:en(),text:l,rating:+s};Oe.update(f=>[v,...f]),n(0,l="")}};function g(){l=this.value,n(0,l)}return[l,i,r,a,u,c,g]}class _n extends Z{constructor(e){super(),Y(this,e,pn,mn,Q,{})}}function hn(t){const e=t-1;return e*e*e+1}function gn(t,{delay:e=0,duration:n=400,easing:l=Pe}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:l,css:i=>`opacity: ${i*s}`}}function vn(t,{delay:e=0,duration:n=400,easing:l=hn,start:s=0,opacity:i=0}={}){const r=getComputedStyle(t),a=+r.opacity,u=r.transform==="none"?"":r.transform,c=1-s,g=a*(1-i);return{delay:e,duration:n,easing:l,css:(v,f)=>`
			transform: ${u} scale(${1-c*f});
			opacity: ${a-g*f}
		`}}function yn(t){let e,n=t[0].rating+"",l,s,i,r,a,u=t[0].text+"",c,g,v;return{c(){e=_("div"),l=B(n),s=$(),i=_("button"),i.textContent="X",r=$(),a=_("p"),c=B(u),o(e,"class","num-display svelte-s2w90w"),o(i,"class","close svelte-s2w90w"),o(a,"class","text-display")},m(f,m){j(f,e,m),d(e,l),j(f,s,m),j(f,i,m),j(f,r,m),j(f,a,m),d(a,c),g||(v=q(i,"click",t[2]),g=!0)},p(f,m){m&1&&n!==(n=f[0].rating+"")&&ge(l,n),m&1&&u!==(u=f[0].text+"")&&ge(c,u)},d(f){f&&k(e),f&&k(s),f&&k(i),f&&k(r),f&&k(a),g=!1,v()}}}function $n(t){let e,n;return e=new Ct({props:{$$slots:{default:[yn]},$$scope:{ctx:t}}}),{c(){X(e.$$.fragment)},m(l,s){H(e,l,s),n=!0},p(l,[s]){const i={};s&9&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){n||(O(e.$$.fragment,l),n=!0)},o(l){N(e.$$.fragment,l),n=!1},d(l){U(e,l)}}}function bn(t,e,n){let{item:l}=e;const s=r=>{Oe.update(a=>a.filter(u=>u.id!=r))},i=()=>s(l.id);return t.$$set=r=>{"item"in r&&n(0,l=r.item)},[l,s,i]}class kn extends Z{constructor(e){super(),Y(this,e,bn,$n,Q,{item:0})}}function rt(t,e,n){const l=t.slice();return l[1]=e[n],l}function ut(t,e){let n,l,s,i,r,a;return l=new kn({props:{item:e[1]}}),{key:t,first:null,c(){n=_("div"),X(l.$$.fragment),s=$(),this.first=n},m(u,c){j(u,n,c),H(l,n,null),d(n,s),a=!0},p(u,c){e=u;const g={};c&1&&(g.item=e[1]),l.$set(g)},i(u){a||(O(l.$$.fragment,u),ue(()=>{r&&r.end(1),i=Ht(n,vn,{}),i.start()}),a=!0)},o(u){N(l.$$.fragment,u),i&&i.invalidate(),r=Ut(n,gn,{duration:500}),a=!1},d(u){u&&k(n),U(l),u&&r&&r.end()}}}function wn(t){let e=[],n=new Map,l,s,i=t[0];const r=a=>a[1].id;for(let a=0;a<i.length;a+=1){let u=rt(t,i,a),c=r(u);n.set(c,e[a]=ut(c,u))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();l=Lt()},m(a,u){for(let c=0;c<e.length;c+=1)e[c].m(a,u);j(a,l,u),s=!0},p(a,[u]){u&1&&(i=a[0],Bt(),e=Jt(e,u,r,1,a,i,n,l.parentNode,Gt,ut,l,rt),zt())},i(a){if(!s){for(let u=0;u<i.length;u+=1)O(e[u]);s=!0}},o(a){for(let u=0;u<e.length;u+=1)N(e[u]);s=!1},d(a){for(let u=0;u<e.length;u+=1)e[u].d(a);a&&k(l)}}}function jn(t,e,n){let l;return ot(t,Oe,s=>n(0,l=s)),[l]}class Cn extends Z{constructor(e){super(),Y(this,e,jn,wn,Q,{})}}function Sn(t){let e,n,l,s,i,r,a,u;return{c(){e=_("div"),n=_("h4"),l=B(t[1]),s=B(" Reviews"),i=$(),r=_("h4"),a=B("Ratings Average: "),u=B(t[0]),o(e,"class","feedback-stats svelte-ga2qn0")},m(c,g){j(c,e,g),d(e,n),d(n,l),d(n,s),d(e,i),d(e,r),d(r,a),d(r,u)},p(c,[g]){g&2&&ge(l,c[1]),g&1&&ge(u,c[0])},i:A,o:A,d(c){c&&k(e)}}}function En(t,e,n){let l,s,i;return ot(t,Oe,r=>n(2,i=r)),t.$$.update=()=>{t.$$.dirty&4&&n(1,l=i.length),t.$$.dirty&4&&n(0,s=i.length==0?"no reviews":Math.round(i.reduce((r,{rating:a})=>r+a,0)/i.length*100)/100)},[s,l,i]}class Rn extends Z{constructor(e){super(),Y(this,e,En,Sn,Q,{})}}function qn(t){let e,n,l,s,i,r,a;return n=new _n({}),s=new Rn({}),r=new Cn({}),{c(){e=_("main"),X(n.$$.fragment),l=$(),X(s.$$.fragment),i=$(),X(r.$$.fragment),o(e,"class","container")},m(u,c){j(u,e,c),H(n,e,null),d(e,l),H(s,e,null),d(e,i),H(r,e,null),a=!0},p:A,i(u){a||(O(n.$$.fragment,u),O(s.$$.fragment,u),O(r.$$.fragment,u),a=!0)},o(u){N(n.$$.fragment,u),N(s.$$.fragment,u),N(r.$$.fragment,u),a=!1},d(u){u&&k(e),U(n),U(s),U(r)}}}class Fn extends Z{constructor(e){super(),Y(this,e,null,qn,Q,{})}}new Fn({target:document.body});