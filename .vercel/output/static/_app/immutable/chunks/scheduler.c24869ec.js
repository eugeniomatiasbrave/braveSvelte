function D(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function K(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function T(t){return t()}function Q(){return Object.create(null)}function q(t){t.forEach(T)}function U(t){return typeof t=="function"}function V(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let h;function X(t,n){return t===n?!0:(h||(h=document.createElement("a")),h.href=n,t===h.href)}function Y(t){return Object.keys(t).length===0}function H(t,...n){if(t==null){for(const i of n)i(void 0);return D}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Z(t,n,e){t.$$.on_destroy.push(H(n,e))}function $(t,n,e,i){if(t){const r=w(t,n,e,i);return t[0](r)}}function w(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function tt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(n.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function nt(t,n,e,i,r,u){if(r){const c=w(n,e,i,u);t.p(c,r)}}function et(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let p=!1;function it(){p=!0}function rt(){p=!1}function M(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const s=n[l].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:M(1,r,S=>n[e[S]].claim_order,s))-1;i[l]=e[a]+1;const v=a+1;e[v]=l,r=Math.max(v,r)}const u=[],c=[];let o=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);o>=l;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);u.reverse(),c.sort((l,s)=>l.claim_order-s.claim_order);for(let l=0,s=0;l<c.length;l++){for(;s<u.length&&c[l].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(c[l],a)}}function P(t,n){if(p){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ct(t,n,e){p&&!e?P(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function ot(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function B(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function ut(){return E(" ")}function st(){return E("")}function at(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ft(t){return function(n){return n.preventDefault(),t.call(this,n)}}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function dt(t){return t.dataset.svelteH}function ht(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function mt(t){return t===""?null:+t}function pt(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,r=!1){L(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const l=e(o);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,n,e,i){return A(t,r=>r.nodeName===n,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];e[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(n))}function yt(t,n,e){return z(t,n,e,B)}function F(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>E(n),!0)}function bt(t){return F(t," ")}function xt(t,n){n=""+n,t.data!==n&&(t.data=n)}function gt(t,n){t.value=n??""}function Et(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n,e){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===n){r.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function kt(t){const n=t.querySelector(":checked");return n&&n.__value}function I(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Nt(t,n){const e=[];let i=0;for(const r of n.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(r)):u===`HEAD_${t}_START`&&(i+=1,e.push(r))}else i>0&&e.push(r);return e}function wt(t,n){return new t(n)}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function At(t){y().$$.on_mount.push(t)}function jt(t){y().$$.after_update.push(t)}function St(t){y().$$.on_destroy.push(t)}function Dt(){const t=y();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const u=I(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,u)}),!u.defaultPrevented}return!0}}const d=[],k=[];let _=[];const N=[],j=Promise.resolve();let g=!1;function R(){g||(g=!0,j.then(G))}function Ct(){return R(),j}function W(t){_.push(t)}const x=new Set;let f=0;function G(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,b(n),J(n.$$)}}catch(n){throw d.length=0,f=0,n}for(b(null),d.length=0,f=0;k.length;)k.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];x.has(e)||(x.add(e),e())}_.length=0}while(d.length);for(;N.length;)N.pop()();g=!1,x.clear(),b(t)}function J(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(W)}}function Tt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{R as $,dt as A,X as B,gt as C,at as D,ft as E,q as F,Dt as G,$ as H,nt as I,et as J,tt as K,H as L,U as M,Nt as N,ht as O,W as P,vt as Q,mt as R,ot as S,kt as T,St as U,Q as V,Y as W,Tt as X,m as Y,T as Z,d as _,ut as a,it as a0,rt as a1,jt as b,bt as c,lt as d,st as e,B as f,yt as g,pt as h,ct as i,_t as j,Et as k,E as l,F as m,xt as n,At as o,k as p,wt as q,K as r,V as s,Ct as t,y as u,b as v,G as w,P as x,D as y,Z as z};
