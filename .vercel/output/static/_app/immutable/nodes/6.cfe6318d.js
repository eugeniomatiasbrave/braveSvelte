import{s as ja,f as P,a as z,g as C,A as Ht,c as H,h as Q,d as j,j as g,k as Do,i as sn,x as _,C as ht,D as bt,E as bo,R as me,y as Ks,S as mc,F as qa,U as gc,l as de,m as fe,M as ko,n as pe,N as _c}from"../chunks/scheduler.c24869ec.js";import{S as $a,i as za,b as yc,d as Ec,m as vc,a as Tc,t as Ic,e as wc}from"../chunks/index.6593e8b9.js";import{e as No}from"../chunks/each.e59479a4.js";/* empty css                              *//* empty css                       *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ac=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,u=l?e[s+2]:0,c=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ha(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ac(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new Rc;const d=i<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const E=u<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Rc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pc=function(e){const t=Ha(e);return Ka.encodeByteArray(t,!0)},Mr=function(e){return Pc(e).replace(/\./g,"")},Cc=function(e){try{return Ka.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=()=>Sc().__FIREBASE_DEFAULTS__,Dc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Cc(e[1]);return t&&JSON.parse(t)},Ga=()=>{try{return Vc()||Dc()||bc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},kc=e=>{var t,n;return(n=(t=Ga())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Nc=e=>{const t=kc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Wa=()=>{var e;return(e=Ga())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Mr(JSON.stringify(n)),Mr(JSON.stringify(o)),a].join(".")}function xc(){try{return typeof indexedDB=="object"}catch{return!1}}function Fc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="FirebaseError";class vn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Lc,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qa.prototype.create)}}class Qa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Uc(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function Uc(e,t){return e.replace(Bc,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Bc=/\{\$([^}]+)}/g;function Gs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Mo(i)&&Mo(o)){if(!Gs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mo(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(e){return e&&e._delegate?e._delegate:e}class Bn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Mc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if($c(t))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ne){return this.instances.has(t)}getOptions(t=Ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ne){return this.component?this.component.multipleInstances?t:Ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qc(e){return e===Ne?void 0:e}function $c(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})($||($={}));const Hc={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Kc=$.INFO,Gc={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Wc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Gc[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xa{constructor(t){this.name=t,this._logLevel=Kc,this._logHandler=Wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const Qc=(e,t)=>t.some(n=>e instanceof n);let Oo,xo;function Xc(){return Oo||(Oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jc(){return xo||(xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ja=new WeakMap,Ws=new WeakMap,Ya=new WeakMap,Ds=new WeakMap,Ri=new WeakMap;function Yc(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(_e(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ja.set(n,e)}).catch(()=>{}),Ri.set(t,e),t}function Zc(e){if(Ws.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ws.set(e,t)}let Qs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ws.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ya.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _e(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function th(e){Qs=e(Qs)}function eh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bs(this),t,...n);return Ya.set(r,t.sort?t.sort():[t]),_e(r)}:Jc().includes(e)?function(...t){return e.apply(bs(this),t),_e(Ja.get(this))}:function(...t){return _e(e.apply(bs(this),t))}}function nh(e){return typeof e=="function"?eh(e):(e instanceof IDBTransaction&&Zc(e),Qc(e,Xc())?new Proxy(e,Qs):e)}function _e(e){if(e instanceof IDBRequest)return Yc(e);if(Ds.has(e))return Ds.get(e);const t=nh(e);return t!==e&&(Ds.set(e,t),Ri.set(t,e)),t}const bs=e=>Ri.get(e);function rh(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=_e(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_e(o.result),l.oldVersion,l.newVersion,_e(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sh=["get","getKey","getAll","getAllKeys","count"],ih=["put","add","delete","clear"],ks=new Map;function Fo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ih.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sh.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return ks.set(t,i),i}th(e=>({...e,get:(t,n,r)=>Fo(t,n)||e.get(t,n,r),has:(t,n)=>!!Fo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ah(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ah(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Xs="@firebase/app",Lo="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=new Xa("@firebase/app"),lh="@firebase/app-compat",uh="@firebase/analytics-compat",ch="@firebase/analytics",hh="@firebase/app-check-compat",dh="@firebase/app-check",fh="@firebase/auth",ph="@firebase/auth-compat",mh="@firebase/database",gh="@firebase/database-compat",_h="@firebase/functions",yh="@firebase/functions-compat",Eh="@firebase/installations",vh="@firebase/installations-compat",Th="@firebase/messaging",Ih="@firebase/messaging-compat",wh="@firebase/performance",Ah="@firebase/performance-compat",Rh="@firebase/remote-config",Ph="@firebase/remote-config-compat",Ch="@firebase/storage",Sh="@firebase/storage-compat",Vh="@firebase/firestore",Dh="@firebase/firestore-compat",bh="firebase",kh="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="[DEFAULT]",Nh={[Xs]:"fire-core",[lh]:"fire-core-compat",[ch]:"fire-analytics",[uh]:"fire-analytics-compat",[dh]:"fire-app-check",[hh]:"fire-app-check-compat",[fh]:"fire-auth",[ph]:"fire-auth-compat",[mh]:"fire-rtdb",[gh]:"fire-rtdb-compat",[_h]:"fire-fn",[yh]:"fire-fn-compat",[Eh]:"fire-iid",[vh]:"fire-iid-compat",[Th]:"fire-fcm",[Ih]:"fire-fcm-compat",[wh]:"fire-perf",[Ah]:"fire-perf-compat",[Rh]:"fire-rc",[Ph]:"fire-rc-compat",[Ch]:"fire-gcs",[Sh]:"fire-gcs-compat",[Vh]:"fire-fst",[Dh]:"fire-fst-compat","fire-js":"fire-js",[bh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map,Ys=new Map;function Mh(e,t){try{e.container.addComponent(t)}catch(n){Ue.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function xr(e){const t=e.name;if(Ys.has(t))return Ue.debug(`There were multiple attempts to register component ${t}.`),!1;Ys.set(t,e);for(const n of Or.values())Mh(n,e);return!0}function Oh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ye=new Qa("app","Firebase",xh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ye.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=kh;function Za(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Js,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ye.create("bad-app-name",{appName:String(s)});if(n||(n=Wa()),!n)throw ye.create("no-options");const i=Or.get(s);if(i){if(Gs(n,i.options)&&Gs(r,i.config))return i;throw ye.create("duplicate-app",{appName:s})}const o=new zc(s);for(const l of Ys.values())o.addComponent(l);const a=new Fh(n,r,o);return Or.set(s,a),a}function Uh(e=Js){const t=Or.get(e);if(!t&&e===Js&&Wa())return Za();if(!t)throw ye.create("no-app",{appName:e});return t}function on(e,t,n){var r;let s=(r=Nh[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ue.warn(a.join(" "));return}xr(new Bn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="firebase-heartbeat-database",jh=1,jn="firebase-heartbeat-store";let Ns=null;function tl(){return Ns||(Ns=rh(Bh,jh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(jn)}}}).catch(e=>{throw ye.create("idb-open",{originalErrorMessage:e.message})})),Ns}async function qh(e){try{return await(await tl()).transaction(jn).objectStore(jn).get(el(e))}catch(t){if(t instanceof vn)Ue.warn(t.message);else{const n=ye.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ue.warn(n.message)}}}async function Uo(e,t){try{const r=(await tl()).transaction(jn,"readwrite");await r.objectStore(jn).put(t,el(e)),await r.done}catch(n){if(n instanceof vn)Ue.warn(n.message);else{const r=ye.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ue.warn(r.message)}}}function el(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1024,zh=30*24*60*60*1e3;class Hh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=zh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bo(),{heartbeatsToSend:n,unsentEntries:r}=Kh(this._heartbeatsCache.heartbeats),s=Mr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bo(){return new Date().toISOString().substring(0,10)}function Kh(e,t=$h){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jo(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xc()?Fc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function jo(e){return Mr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e){xr(new Bn("platform-logger",t=>new oh(t),"PRIVATE")),xr(new Bn("heartbeat",t=>new Hh(t),"PRIVATE")),on(Xs,Lo,e),on(Xs,Lo,"esm2017"),on("fire-js","")}Wh("");var Qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,Pi=Pi||{},S=Qh||self;function Jr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function nr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Xh(e){return Object.prototype.hasOwnProperty.call(e,Ms)&&e[Ms]||(e[Ms]=++Jh)}var Ms="closure_uid_"+(1e9*Math.random()>>>0),Jh=0;function Yh(e,t,n){return e.call.apply(e.bind,arguments)}function Zh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Pt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=Yh:Pt=Zh,Pt.apply(null,arguments)}function vr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function pt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ae(){this.s=this.s,this.o=this.o}var td=0;Ae.prototype.s=!1;Ae.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),td!=0)&&Xh(this)};Ae.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nl=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ci(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function qo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Jr(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Ct(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var ed=function(){if(!S.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{S.addEventListener("test",()=>{},t),S.removeEventListener("test",()=>{},t)}catch{}return e}();function qn(e){return/^[\s\xa0]*$/.test(e)}function Yr(){var e=S.navigator;return e&&(e=e.userAgent)?e:""}function Qt(e){return Yr().indexOf(e)!=-1}function Si(e){return Si[" "](e),e}Si[" "]=function(){};function nd(e,t){var n=Wd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var rd=Qt("Opera"),hn=Qt("Trident")||Qt("MSIE"),rl=Qt("Edge"),Zs=rl||hn,sl=Qt("Gecko")&&!(Yr().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),sd=Yr().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function il(){var e=S.document;return e?e.documentMode:void 0}var ti;t:{var Os="",xs=function(){var e=Yr();if(sl)return/rv:([^\);]+)(\)|;)/.exec(e);if(rl)return/Edge\/([\d\.]+)/.exec(e);if(hn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(sd)return/WebKit\/(\S+)/.exec(e);if(rd)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(xs&&(Os=xs?xs[1]:""),hn){var Fs=il();if(Fs!=null&&Fs>parseFloat(Os)){ti=String(Fs);break t}}ti=Os}var ei;if(S.document&&hn){var $o=il();ei=$o||parseInt(ti,10)||void 0}else ei=void 0;var id=ei;function $n(e,t){if(Ct.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(sl){t:{try{Si(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:od[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$n.$.h.call(this)}}pt($n,Ct);var od={2:"touch",3:"pen",4:"mouse"};$n.prototype.h=function(){$n.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var rr="closure_listenable_"+(1e6*Math.random()|0),ad=0;function ld(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++ad,this.fa=this.ia=!1}function Zr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Vi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ud(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ol(e){const t={};for(const n in e)t[n]=e[n];return t}const zo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function al(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<zo.length;i++)n=zo[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ts(e){this.src=e,this.g={},this.h=0}ts.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=ri(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new ld(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ni(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=nl(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Zr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ri(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Ls={};function ll(e,t,n,r,s){if(r&&r.once)return cl(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)ll(e,t[i],n,r,s);return null}return n=Ni(n),e&&e[rr]?e.O(t,n,nr(r)?!!r.capture:!!r,s):ul(e,t,n,!1,r,s)}function ul(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=nr(s)?!!s.capture:!!s,a=ki(e);if(a||(e[Di]=a=new ts(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=cd(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ed||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(dl(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cd(){function e(n){return t.call(e.src,e.listener,n)}const t=hd;return e}function cl(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)cl(e,t[i],n,r,s);return null}return n=Ni(n),e&&e[rr]?e.P(t,n,nr(r)?!!r.capture:!!r,s):ul(e,t,n,!0,r,s)}function hl(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)hl(e,t[i],n,r,s);else r=nr(r)?!!r.capture:!!r,n=Ni(n),e&&e[rr]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=ri(i,n,r,s),-1<n&&(Zr(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=ki(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ri(t,n,r,s)),(n=-1<e?t[e]:null)&&bi(n))}function bi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[rr])ni(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(dl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ki(t))?(ni(n,e),n.h==0&&(n.src=null,t[Di]=null)):Zr(e)}}}function dl(e){return e in Ls?Ls[e]:Ls[e]="on"+e}function hd(e,t){if(e.fa)e=!0;else{t=new $n(t,this);var n=e.listener,r=e.la||e.src;e.ia&&bi(e),e=n.call(r,t)}return e}function ki(e){return e=e[Di],e instanceof ts?e:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ni(e){return typeof e=="function"?e:(e[Us]||(e[Us]=function(t){return e.handleEvent(t)}),e[Us])}function ft(){Ae.call(this),this.i=new ts(this),this.S=this,this.J=null}pt(ft,Ae);ft.prototype[rr]=!0;ft.prototype.removeEventListener=function(e,t,n,r){hl(this,e,t,n,r)};function Tt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ct(t,e);else if(t instanceof Ct)t.target=t.target||e;else{var s=t;t=new Ct(r,e),al(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Tr(o,r,!0,t)&&s}if(o=t.g=e,s=Tr(o,r,!0,t)&&s,s=Tr(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Tr(o,r,!1,t)&&s}ft.prototype.N=function(){if(ft.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Zr(n[r]);delete e.g[t],e.h--}}this.J=null};ft.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ft.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Tr(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ni(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Mi=S.JSON.stringify;class dd{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function fd(){var e=Oi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class pd{constructor(){this.h=this.g=null}add(t,n){const r=fl.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var fl=new dd(()=>new md,e=>e.reset());class md{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function gd(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _d(e){S.setTimeout(()=>{throw e},0)}let zn,Hn=!1,Oi=new pd,pl=()=>{const e=S.Promise.resolve(void 0);zn=()=>{e.then(yd)}};var yd=()=>{for(var e;e=fd();){try{e.h.call(e.g)}catch(n){_d(n)}var t=fl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Hn=!1};function es(e,t){ft.call(this),this.h=e||1,this.g=t||S,this.j=Pt(this.qb,this),this.l=Date.now()}pt(es,ft);y=es.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Tt(this,"tick"),this.ga&&(xi(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){es.$.N.call(this),xi(this),delete this.g};function Fi(e,t,n){if(typeof e=="function")n&&(e=Pt(e,n));else if(e&&typeof e.handleEvent=="function")e=Pt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:S.setTimeout(e,t||0)}function ml(e){e.g=Fi(()=>{e.g=null,e.i&&(e.i=!1,ml(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ed extends Ae{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ml(this)}N(){super.N(),this.g&&(S.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(e){Ae.call(this),this.h=e,this.g={}}pt(Kn,Ae);var Ho=[];function gl(e,t,n,r){Array.isArray(n)||(n&&(Ho[0]=n.toString()),n=Ho);for(var s=0;s<n.length;s++){var i=ll(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function _l(e){Vi(e.g,function(t,n){this.g.hasOwnProperty(n)&&bi(t)},e),e.g={}}Kn.prototype.N=function(){Kn.$.N.call(this),_l(this)};Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ns(){this.g=!0}ns.prototype.Ea=function(){this.g=!1};function vd(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function Td(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function rn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+wd(e,n)+(r?" "+r:"")})}function Id(e,t){e.info(function(){return"TIMEOUT: "+t})}ns.prototype.info=function(){};function wd(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Mi(n)}catch{return t}}var $e={},Ko=null;function rs(){return Ko=Ko||new ft}$e.Ta="serverreachability";function yl(e){Ct.call(this,$e.Ta,e)}pt(yl,Ct);function Gn(e){const t=rs();Tt(t,new yl(t))}$e.STAT_EVENT="statevent";function El(e,t){Ct.call(this,$e.STAT_EVENT,e),this.stat=t}pt(El,Ct);function kt(e){const t=rs();Tt(t,new El(t,e))}$e.Ua="timingevent";function vl(e,t){Ct.call(this,$e.Ua,e),this.size=t}pt(vl,Ct);function sr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return S.setTimeout(function(){e()},t)}var ss={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Li(){}Li.prototype.h=null;function Go(e){return e.h||(e.h=e.i())}function Il(){}var ir={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ui(){Ct.call(this,"d")}pt(Ui,Ct);function Bi(){Ct.call(this,"c")}pt(Bi,Ct);var si;function is(){}pt(is,Li);is.prototype.g=function(){return new XMLHttpRequest};is.prototype.i=function(){return{}};si=new is;function or(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Kn(this),this.P=Ad,e=Zs?125:void 0,this.V=new es(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wl}function wl(){this.i=null,this.g="",this.h=!1}var Ad=45e3,ii={},Fr={};y=or.prototype;y.setTimeout=function(e){this.P=e};function oi(e,t,n){e.L=1,e.v=as(ie(t)),e.s=n,e.S=!0,Al(e,null)}function Al(e,t){e.G=Date.now(),ar(e),e.A=ie(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),kl(n.i,"t",r),e.C=0,n=e.l.J,e.h=new wl,e.g=Zl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Ed(Pt(e.Pa,e,e.g),e.O)),gl(e.U,e.g,"readystatechange",e.nb),t=e.I?ol(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Gn(),vd(e.j,e.u,e.A,e.m,e.W,e.s)}y.nb=function(e){e=e.target;const t=this.M;t&&Xt(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const c=Xt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Zs||this.g&&(this.h.h||this.g.ja()||Jo(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Gn(3):Gn(2)),os(this);var n=this.g.da();this.ca=n;e:if(Rl(this)){var r=Jo(this.g);e="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Me(this),On(this);var o="";break e}this.h.i=new S.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Td(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qn(a)){var u=a;break e}}u=null}if(n=u)rn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ai(this,n);else{this.i=!1,this.o=3,kt(12),Me(this),On(this);break t}}this.S?(Pl(this,c,o),Zs&&this.i&&c==3&&(gl(this.U,this.V,"tick",this.mb),this.V.start())):(rn(this.j,this.m,o,null),ai(this,o)),c==4&&Me(this),this.i&&!this.J&&(c==4?Ql(this.l,this):(this.i=!1,ar(this)))}else Hd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,kt(12)):(this.o=0,kt(13)),Me(this),On(this)}}}catch{}finally{}};function Rl(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Pl(e,t,n){let r=!0,s;for(;!e.J&&e.C<n.length;)if(s=Rd(e,n),s==Fr){t==4&&(e.o=4,kt(14),r=!1),rn(e.j,e.m,null,"[Incomplete Response]");break}else if(s==ii){e.o=4,kt(15),rn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else rn(e.j,e.m,s,null),ai(e,s);Rl(e)&&s!=Fr&&s!=ii&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,kt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ki(t),t.M=!0,kt(11))):(rn(e.j,e.m,n,"[Invalid Chunked Response]"),Me(e),On(e))}y.mb=function(){if(this.g){var e=Xt(this.g),t=this.g.ja();this.C<t.length&&(os(this),Pl(this,e,t),this.i&&e!=4&&ar(this))}};function Rd(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Fr:(n=Number(t.substring(n,r)),isNaN(n)?ii:(r+=1,r+n>t.length?Fr:(t=t.slice(r,r+n),e.C=r+n,t)))}y.cancel=function(){this.J=!0,Me(this)};function ar(e){e.Y=Date.now()+e.P,Cl(e,e.P)}function Cl(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=sr(Pt(e.lb,e),t)}function os(e){e.B&&(S.clearTimeout(e.B),e.B=null)}y.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Id(this.j,this.A),this.L!=2&&(Gn(),kt(17)),Me(this),this.o=2,On(this)):Cl(this,this.Y-e)};function On(e){e.l.H==0||e.J||Ql(e.l,e)}function Me(e){os(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,xi(e.V),_l(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ai(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||li(n.i,e))){if(!e.K&&li(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Br(n),cs(n);else break t;Hi(n),kt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=sr(Pt(n.ib,n),6e3));if(1>=Ol(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Oe(n,11)}else if((e.K||n.g==e)&&Br(n),!qn(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=r.i;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ji(i,i.h),i.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,G(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Yl(r,r.J?r.pa:null,r.Y),o.K){xl(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(os(a),ar(a)),r.g=o}else Gl(r);0<n.j.length&&hs(n)}else u[0]!="stop"&&u[0]!="close"||Oe(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Oe(n,7):zi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Gn(4)}catch{}}function Pd(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Jr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Cd(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Jr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Sl(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Jr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Cd(e),r=Pd(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var Vl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Fe(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Fe){this.h=e.h,Lr(this,e.j),this.s=e.s,this.g=e.g,Ur(this,e.m),this.l=e.l;var t=e.i,n=new Wn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Wo(this,n),this.o=e.o}else e&&(t=String(e).match(Vl))?(this.h=!1,Lr(this,t[1]||"",!0),this.s=Dn(t[2]||""),this.g=Dn(t[3]||"",!0),Ur(this,t[4]),this.l=Dn(t[5]||"",!0),Wo(this,t[6]||"",!0),this.o=Dn(t[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}Fe.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bn(t,Qo,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(bn(t,Qo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(bn(n,n.charAt(0)=="/"?bd:Dd,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",bn(n,Nd)),e.join("")};function ie(e){return new Fe(e)}function Lr(e,t,n){e.j=n?Dn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ur(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Wo(e,t,n){t instanceof Wn?(e.i=t,Md(e.i,e.h)):(n||(t=bn(t,kd)),e.i=new Wn(t,e.h))}function G(e,t,n){e.i.set(t,n)}function as(e){return G(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Vd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Qo=/[#\/\?@]/g,Dd=/[#\?:]/g,bd=/[#\?]/g,kd=/[#\?@]/g,Nd=/#/g;function Wn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Re(e){e.g||(e.g=new Map,e.h=0,e.i&&Sd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=Wn.prototype;y.add=function(e,t){Re(this),this.i=null,e=Tn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Dl(e,t){Re(e),t=Tn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function bl(e,t){return Re(e),t=Tn(e,t),e.g.has(t)}y.forEach=function(e,t){Re(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};y.ta=function(){Re(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};y.Z=function(e){Re(this);let t=[];if(typeof e=="string")bl(this,e)&&(t=t.concat(this.g.get(Tn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return Re(this),this.i=null,e=Tn(this,e),bl(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function kl(e,t,n){Dl(e,t),0<n.length&&(e.i=null,e.g.set(Tn(e,t),Ci(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Tn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Md(e,t){t&&!e.j&&(Re(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Dl(this,r),kl(this,s,n))},e)),e.j=t}var Od=class{constructor(e,t){this.g=e,this.map=t}};function Nl(e){this.l=e||xd,S.PerformanceNavigationTiming?(e=S.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(S.g&&S.g.Ka&&S.g.Ka()&&S.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xd=10;function Ml(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ol(e){return e.h?1:e.g?e.g.size:0}function li(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ji(e,t){e.g?e.g.add(t):e.h=t}function xl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Nl.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Fl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ci(e.i)}var Fd=class{stringify(e){return S.JSON.stringify(e,void 0)}parse(e){return S.JSON.parse(e,void 0)}};function Ld(){this.g=new Fd}function Ud(e,t,n){const r=n||"";try{Sl(e,function(s,i){let o=s;nr(s)&&(o=Mi(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Bd(e,t){const n=new ns;if(S.Image){const r=new Image;r.onload=vr(Ir,n,r,"TestLoadImage: loaded",!0,t),r.onerror=vr(Ir,n,r,"TestLoadImage: error",!1,t),r.onabort=vr(Ir,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=vr(Ir,n,r,"TestLoadImage: timeout",!1,t),S.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ir(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function lr(e){this.l=e.fc||null,this.j=e.ob||!1}pt(lr,Li);lr.prototype.g=function(){return new ls(this.l,this.j)};lr.prototype.i=function(e){return function(){return e}}({});function ls(e,t){ft.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=qi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}pt(ls,ft);var qi=0;y=ls.prototype;y.open=function(e,t){if(this.readyState!=qi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Qn(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||S).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=qi};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof S.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ll(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ll(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ur(this):Qn(this),this.readyState==3&&Ll(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,ur(this))};y.Ya=function(e){this.g&&(this.response=e,ur(this))};y.ka=function(){this.g&&ur(this)};function ur(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Qn(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Qn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var jd=S.JSON.parse;function nt(e){ft.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ul,this.L=this.M=!1}pt(nt,ft);var Ul="",qd=/^https?$/i,$d=["POST","PUT"];y=nt.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():si.g(),this.C=this.u?Go(this.u):Go(si),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Xo(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=S.FormData&&e instanceof S.FormData,!(0<=nl($d,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ql(this),0<this.B&&((this.L=zd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=Fi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Xo(this,i)}};function zd(e){return hn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof Pi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))};function Xo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Bl(e),us(e)}function Bl(e){e.F||(e.F=!0,Tt(e,"complete"),Tt(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Tt(this,"complete"),Tt(this,"abort"),us(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),us(this,!0)),nt.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?jl(this):this.kb())};y.kb=function(){jl(this)};function jl(e){if(e.h&&typeof Pi<"u"&&(!e.C[1]||Xt(e)!=4||e.da()!=2)){if(e.v&&Xt(e)==4)Fi(e.La,0,e);else if(Tt(e,"readystatechange"),Xt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(Vl)[1]||null;!s&&S.self&&S.self.location&&(s=S.self.location.protocol.slice(0,-1)),r=!qd.test(s?s.toLowerCase():"")}n=r}if(n)Tt(e,"complete"),Tt(e,"success");else{e.m=6;try{var i=2<Xt(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Bl(e)}}finally{us(e)}}}}function us(e,t){if(e.g){ql(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Tt(e,"ready");try{n.onreadystatechange=r}catch{}}}function ql(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(S.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function Xt(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),jd(t)}};function Jo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ul:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Hd(e){const t={};e=(e.g&&2<=Xt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(qn(e[r]))continue;var n=gd(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}ud(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $l(e){let t="";return Vi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function $i(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=$l(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):G(e,t,n))}function Sn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zl(e){this.Ga=0,this.j=[],this.l=new ns,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Sn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Sn("baseRetryDelayMs",5e3,e),this.hb=Sn("retryDelaySeedMs",1e4,e),this.eb=Sn("forwardChannelMaxRetries",2,e),this.xa=Sn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Nl(e&&e.concurrentRequestLimit),this.Ja=new Ld,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=zl.prototype;y.ra=8;y.H=1;function zi(e){if(Hl(e),e.H==3){var t=e.W++,n=ie(e.I);if(G(n,"SID",e.K),G(n,"RID",t),G(n,"TYPE","terminate"),cr(e,n),t=new or(e,e.l,t),t.L=2,t.v=as(ie(n)),n=!1,S.navigator&&S.navigator.sendBeacon)try{n=S.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&S.Image&&(new Image().src=t.v,n=!0),n||(t.g=Zl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ar(t)}Jl(e)}function cs(e){e.g&&(Ki(e),e.g.cancel(),e.g=null)}function Hl(e){cs(e),e.u&&(S.clearTimeout(e.u),e.u=null),Br(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&S.clearTimeout(e.m),e.m=null)}function hs(e){if(!Ml(e.i)&&!e.m){e.m=!0;var t=e.Na;zn||pl(),Hn||(zn(),Hn=!0),Oi.add(t,e),e.C=0}}function Kd(e,t){return Ol(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=sr(Pt(e.Na,e,t),Xl(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new or(this,this.l,e);let i=this.s;if(this.U&&(i?(i=ol(i),al(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Kl(this,s,t),n=ie(this.I),G(n,"RID",e),G(n,"CVER",22),this.F&&G(n,"X-HTTP-Session-Id",this.F),cr(this,n),i&&(this.O?t="headers="+encodeURIComponent(String($l(i)))+"&"+t:this.o&&$i(n,this.o,i)),ji(this.i,s),this.bb&&G(n,"TYPE","init"),this.P?(G(n,"$req",t),G(n,"SID","null"),s.aa=!0,oi(s,n,null)):oi(s,n,t),this.H=2}}else this.H==3&&(e?Yo(this,e):this.j.length==0||Ml(this.i)||Yo(this))};function Yo(e,t){var n;t?n=t.m:n=e.W++;const r=ie(e.I);G(r,"SID",e.K),G(r,"RID",n),G(r,"AID",e.V),cr(e,r),e.o&&e.s&&$i(r,e.o,e.s),n=new or(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Kl(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ji(e.i,n),oi(n,r,t)}function cr(e,t){e.na&&Vi(e.na,function(n,r){G(t,r,n)}),e.h&&Sl({},function(n,r){G(t,r,n)})}function Kl(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Pt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let u=s[l].g;const c=s[l].map;if(u-=i,0>u)i=Math.max(0,s[l].g-100),a=!1;else try{Ud(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Gl(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;zn||pl(),Hn||(zn(),Hn=!0),Oi.add(t,e),e.A=0}}function Hi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=sr(Pt(e.Ma,e),Xl(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,Wl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=sr(Pt(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,kt(10),cs(this),Wl(this))};function Ki(e){e.B!=null&&(S.clearTimeout(e.B),e.B=null)}function Wl(e){e.g=new or(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ie(e.wa);G(t,"RID","rpc"),G(t,"SID",e.K),G(t,"AID",e.V),G(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&G(t,"TO",e.qa),G(t,"TYPE","xmlhttp"),cr(e,t),e.o&&e.s&&$i(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=as(ie(t)),n.s=null,n.S=!0,Al(n,e)}y.ib=function(){this.v!=null&&(this.v=null,cs(this),Hi(this),kt(19))};function Br(e){e.v!=null&&(S.clearTimeout(e.v),e.v=null)}function Ql(e,t){var n=null;if(e.g==t){Br(e),Ki(e),e.g=null;var r=2}else if(li(e.i,t))n=t.F,xl(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;r=rs(),Tt(r,new vl(r,n)),hs(e)}else Gl(e);else if(s=t.o,s==3||s==0&&0<t.ca||!(r==1&&Kd(e,t)||r==2&&Hi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Oe(e,5);break;case 4:Oe(e,10);break;case 3:Oe(e,6);break;default:Oe(e,2)}}}function Xl(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Oe(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Pt(e.pb,e);n||(n=new Fe("//www.google.com/images/cleardot.gif"),S.location&&S.location.protocol=="http"||Lr(n,"https"),as(n)),Bd(n.toString(),r)}else kt(2);e.H=0,e.h&&e.h.za(t),Jl(e),Hl(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),kt(2)):(this.l.info("Failed to ping google.com"),kt(1))};function Jl(e){if(e.H=0,e.ma=[],e.h){const t=Fl(e.i);(t.length!=0||e.j.length!=0)&&(qo(e.ma,t),qo(e.ma,e.j),e.i.i.length=0,Ci(e.j),e.j.length=0),e.h.ya()}}function Yl(e,t,n){var r=n instanceof Fe?ie(n):new Fe(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ur(r,r.m);else{var s=S.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Fe(null);r&&Lr(i,r),t&&(i.g=t),s&&Ur(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&G(r,n,t),G(r,"VER",e.ra),cr(e,r),r}function Zl(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new nt(new lr({ob:!0})):new nt(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function tu(){}y=tu.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function jr(){if(hn&&!(10<=Number(id)))throw Error("Environmental error: no available transport.")}jr.prototype.g=function(e,t){return new Bt(e,t)};function Bt(e,t){ft.call(this),this.g=new zl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!qn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new In(this)}pt(Bt,ft);Bt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;kt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Yl(e,null,e.Y),hs(e)};Bt.prototype.close=function(){zi(this.g)};Bt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Mi(e),e=n);t.j.push(new Od(t.fb++,e)),t.H==3&&hs(t)};Bt.prototype.N=function(){this.g.h=null,delete this.j,zi(this.g),delete this.g,Bt.$.N.call(this)};function eu(e){Ui.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}pt(eu,Ui);function nu(){Bi.call(this),this.status=1}pt(nu,Bi);function In(e){this.g=e}pt(In,tu);In.prototype.Ba=function(){Tt(this.g,"a")};In.prototype.Aa=function(e){Tt(this.g,new eu(e))};In.prototype.za=function(e){Tt(this.g,new nu)};In.prototype.ya=function(){Tt(this.g,"b")};function Gd(){this.blockSize=-1}function Gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}pt(Gt,Gd);Gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Bs(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}Gt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Bs(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Bs(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Bs(this,r),s=0;break}}this.h=s,this.i+=t};Gt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function K(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var Wd={};function Gi(e){return-128<=e&&128>e?nd(e,function(t){return new K([t|0],0>t?-1:0)}):new K([e|0],0>e?-1:0)}function Jt(e){if(isNaN(e)||!isFinite(e))return an;if(0>e)return vt(Jt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ui;return new K(t,0)}function ru(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return vt(ru(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Jt(Math.pow(t,8)),r=an,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=Jt(Math.pow(t,i)),r=r.R(i).add(Jt(o))):(r=r.R(n),r=r.add(Jt(o)))}return r}var ui=4294967296,an=Gi(0),ci=Gi(1),Zo=Gi(16777216);y=K.prototype;y.ea=function(){if(qt(this))return-vt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ui+r)*t,t*=ui}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(re(this))return"0";if(qt(this))return"-"+vt(this).toString(e);for(var t=Jt(Math.pow(e,6)),n=this,r="";;){var s=$r(n,t).g;n=qr(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,re(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function re(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function qt(e){return e.h==-1}y.X=function(e){return e=qr(this,e),qt(e)?-1:re(e)?0:1};function vt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new K(n,~e.h).add(ci)}y.abs=function(){return qt(this)?vt(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new K(n,n[n.length-1]&-2147483648?-1:0)};function qr(e,t){return e.add(vt(t))}y.R=function(e){if(re(this)||re(e))return an;if(qt(this))return qt(e)?vt(this).R(vt(e)):vt(vt(this).R(e));if(qt(e))return vt(this.R(vt(e)));if(0>this.X(Zo)&&0>e.X(Zo))return Jt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,wr(n,2*r+2*s),n[2*r+2*s+1]+=i*l,wr(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,wr(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,wr(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new K(n,0)};function wr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Vn(e,t){this.g=e,this.h=t}function $r(e,t){if(re(t))throw Error("division by zero");if(re(e))return new Vn(an,an);if(qt(e))return t=$r(vt(e),t),new Vn(vt(t.g),vt(t.h));if(qt(t))return t=$r(e,vt(t)),new Vn(vt(t.g),t.h);if(30<e.g.length){if(qt(e)||qt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ci,r=t;0>=r.X(e);)n=ta(n),r=ta(r);var s=tn(n,1),i=tn(r,1);for(r=tn(r,2),n=tn(n,2);!re(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=tn(r,1),n=tn(n,1)}return t=qr(e,s.R(t)),new Vn(s,t)}for(s=an;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Jt(n),o=i.R(t);qt(o)||0<o.X(e);)n-=r,i=Jt(n),o=i.R(t);re(i)&&(i=ci),s=s.add(i),e=qr(e,o)}return new Vn(s,e)}y.gb=function(e){return $r(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new K(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new K(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new K(n,this.h^e.h)};function ta(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new K(n,e.h)}function tn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new K(s,e.h)}jr.prototype.createWebChannel=jr.prototype.g;Bt.prototype.send=Bt.prototype.u;Bt.prototype.open=Bt.prototype.m;Bt.prototype.close=Bt.prototype.close;ss.NO_ERROR=0;ss.TIMEOUT=8;ss.HTTP_ERROR=6;Tl.COMPLETE="complete";Il.EventType=ir;ir.OPEN="a";ir.CLOSE="b";ir.ERROR="c";ir.MESSAGE="d";ft.prototype.listen=ft.prototype.O;nt.prototype.listenOnce=nt.prototype.P;nt.prototype.getLastError=nt.prototype.Sa;nt.prototype.getLastErrorCode=nt.prototype.Ia;nt.prototype.getStatus=nt.prototype.da;nt.prototype.getResponseJson=nt.prototype.Wa;nt.prototype.getResponseText=nt.prototype.ja;nt.prototype.send=nt.prototype.ha;nt.prototype.setWithCredentials=nt.prototype.Oa;Gt.prototype.digest=Gt.prototype.l;Gt.prototype.reset=Gt.prototype.reset;Gt.prototype.update=Gt.prototype.j;K.prototype.add=K.prototype.add;K.prototype.multiply=K.prototype.R;K.prototype.modulo=K.prototype.gb;K.prototype.compare=K.prototype.X;K.prototype.toNumber=K.prototype.ea;K.prototype.toString=K.prototype.toString;K.prototype.getBits=K.prototype.D;K.fromNumber=Jt;K.fromString=ru;var Qd=function(){return new jr},Xd=function(){return rs()},js=ss,Jd=Tl,Yd=$e,ea={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Zd=lr,Ar=Il,tf=nt,ef=Gt,ln=K;const na="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Xa("@firebase/firestore");function ra(){return Be.logLevel}function T(e,...t){if(Be.logLevel<=$.DEBUG){const n=t.map(Wi);Be.debug(`Firestore (${wn}): ${e}`,...n)}}function oe(e,...t){if(Be.logLevel<=$.ERROR){const n=t.map(Wi);Be.error(`Firestore (${wn}): ${e}`,...n)}}function dn(e,...t){if(Be.logLevel<=$.WARN){const n=t.map(Wi);Be.warn(`Firestore (${wn}): ${e}`,...n)}}function Wi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e="Unexpected state"){const t=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: `+e;throw oe(t),new Error(t)}function W(e,t){e||R()}function b(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends vn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class nf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class rf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sf{constructor(t){this.t=t,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Le;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Le,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Le)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new su(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new wt(t)}}class of{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class af{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new of(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(W(typeof n.token=="string"),this.R=n.token,new lf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=cf(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function q(e,t){return e<t?-1:e>t?1:0}function fn(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ct.fromMillis(Date.now())}static fromDate(t){return ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new ct(0,0))}static max(){return new V(new ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,n,r){n===void 0?n=0:n>t.length&&R(),r===void 0?r=t.length-n:r>t.length-n&&R(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Xn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Xn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class X extends Xn{construct(t,n,r){return new X(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new X(n)}static emptyPath(){return new X([])}}const hf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Xn{construct(t,n,r){return new Rt(t,n,r)}static isValidIdentifier(t){return hf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new w(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new w(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new w(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Rt(n)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.path=t}static fromPath(t){return new A(X.fromString(t))}static fromName(t){return new A(X.fromString(t).popFirst(5))}static empty(){return new A(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return X.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new A(new X(t.slice()))}}function df(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=V.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Te(s,A.empty(),t)}function ff(e){return new Te(e.readTime,e.key,-1)}class Te{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Te(V.min(),A.empty(),-1)}static max(){return new Te(V.max(),A.empty(),-1)}}function pf(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=A.comparator(e.documentKey,t.documentKey),n!==0?n:q(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e){if(e.code!==p.FAILED_PRECONDITION||e.message!==mf)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):m.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):m.reject(n)}static resolve(t){return new m((n,r)=>{n(t)})}static reject(t){return new m((n,r)=>{r(t)})}static waitFor(t){return new m((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=m.resolve(!1);for(const r of t)n=n.next(s=>s?m.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new m((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===i&&r(o)},c=>s(c))}})}static doWhile(t,n){return new m((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function dr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Qi.ae=-1;function ds(e){return e==null}function zr(e){return e===0&&1/e==-1/0}function _f(e){return typeof e=="number"&&Number.isInteger(e)&&!zr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ze(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ou(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){this.comparator=t,this.root=n||Et.EMPTY}insert(t,n){return new Z(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Et.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rr(this.root,t,this.comparator,!0)}}class Rr{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Et{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Et.RED,this.left=s??Et.EMPTY,this.right=i??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Et(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const t=this.left.check();if(t!==this.right.check())throw R();return t+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Et(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ia(this.data.getIterator())}getIteratorFrom(t){return new ia(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof St)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new St(this.comparator);return n.data=t,n}}class ia{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(Rt.comparator)}static empty(){return new Lt([])}unionWith(t){let n=new St(Rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Lt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return fn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new au("Invalid base64 string: "+i):i}}(t);return new Vt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Vt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const yf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ie(e){if(W(!!e),typeof e=="string"){let t=0;const n=yf.exec(e);if(W(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(e.seconds),nanos:it(e.nanos)}}function it(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function je(e){return typeof e=="string"?Vt.fromBase64String(e):Vt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ji(e){const t=e.mapValue.fields.__previous_value__;return Xi(t)?Ji(t):t}function Jn(e){const t=Ie(e.mapValue.fields.__local_write_time__.timestampValue);return new ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t,n,r,s,i,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Yn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xi(e)?4:vf(e)?9007199254740991:10:R()}function Zt(e,t){if(e===t)return!0;const n=qe(e);if(n!==qe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Jn(e).isEqual(Jn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ie(s.timestampValue),a=Ie(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return je(s.bytesValue).isEqual(je(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return it(s.geoPointValue.latitude)===it(i.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return it(s.integerValue)===it(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=it(s.doubleValue),a=it(i.doubleValue);return o===a?zr(o)===zr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return fn(e.arrayValue.values||[],t.arrayValue.values||[],Zt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(sa(o)!==sa(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Zt(o[l],a[l])))return!1;return!0}(e,t);default:return R()}}function Zn(e,t){return(e.values||[]).find(n=>Zt(n,t))!==void 0}function pn(e,t){if(e===t)return 0;const n=qe(e),r=qe(t);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=it(i.integerValue||i.doubleValue),l=it(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return oa(e.timestampValue,t.timestampValue);case 4:return oa(Jn(e),Jn(t));case 5:return q(e.stringValue,t.stringValue);case 6:return function(i,o){const a=je(i),l=je(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=q(a[u],l[u]);if(c!==0)return c}return q(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=q(it(i.latitude),it(o.latitude));return a!==0?a:q(it(i.longitude),it(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=pn(a[u],l[u]);if(c)return c}return q(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Pr.mapValue&&o===Pr.mapValue)return 0;if(i===Pr.mapValue)return 1;if(o===Pr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=q(l[h],c[h]);if(d!==0)return d;const f=pn(a[l[h]],u[c[h]]);if(f!==0)return f}return q(l.length,c.length)}(e.mapValue,t.mapValue);default:throw R()}}function oa(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return q(e,t);const n=Ie(e),r=Ie(t),s=q(n.seconds,r.seconds);return s!==0?s:q(n.nanos,r.nanos)}function mn(e){return hi(e)}function hi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ie(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return je(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return A.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=hi(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${hi(n.fields[o])}`;return s+"}"}(e.mapValue):R()}function di(e){return!!e&&"integerValue"in e}function Yi(e){return!!e&&"arrayValue"in e}function aa(e){return!!e&&"nullValue"in e}function la(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Dr(e){return!!e&&"mapValue"in e}function xn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ze(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=xn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=xn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function vf(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Dr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=xn(n)}setAll(t){let n=Rt.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=xn(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Dr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Zt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Dr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ze(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Ot(xn(this.value))}}function lu(e){const t=[];return ze(e.fields,(n,r)=>{const s=new Rt([n]);if(Dr(r)){const i=lu(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new Lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new At(t,0,V.min(),V.min(),V.min(),Ot.empty(),0)}static newFoundDocument(t,n,r,s){return new At(t,1,n,V.min(),r,s,0)}static newNoDocument(t,n){return new At(t,2,n,V.min(),V.min(),Ot.empty(),0)}static newUnknownDocument(t,n){return new At(t,3,n,V.min(),V.min(),Ot.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n){this.position=t,this.inclusive=n}}function ua(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),n.key):r=pn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ca(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Zt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,n="asc"){this.field=t,this.dir=n}}function Tf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{}class ut extends uu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new wf(t,n,r):n==="array-contains"?new Pf(t,r):n==="in"?new Cf(t,r):n==="not-in"?new Sf(t,r):n==="array-contains-any"?new Vf(t,r):new ut(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Af(t,r):new Rf(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(pn(n,this.value)):n!==null&&qe(this.value)===qe(n)&&this.matchesComparison(pn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class te extends uu{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new te(t,n)}matches(t){return cu(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function cu(e){return e.op==="and"}function hu(e){return If(e)&&cu(e)}function If(e){for(const t of e.filters)if(t instanceof te)return!1;return!0}function fi(e){if(e instanceof ut)return e.field.canonicalString()+e.op.toString()+mn(e.value);if(hu(e))return e.filters.map(t=>fi(t)).join(",");{const t=e.filters.map(n=>fi(n)).join(",");return`${e.op}(${t})`}}function du(e,t){return e instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&Zt(r.value,s.value)}(e,t):e instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&du(o,s.filters[a]),!0):!1}(e,t):void R()}function fu(e){return e instanceof ut?function(n){return`${n.field.canonicalString()} ${n.op} ${mn(n.value)}`}(e):e instanceof te?function(n){return n.op.toString()+" {"+n.getFilters().map(fu).join(" ,")+"}"}(e):"Filter"}class wf extends ut{constructor(t,n,r){super(t,n,r),this.key=A.fromName(r.referenceValue)}matches(t){const n=A.comparator(t.key,this.key);return this.matchesComparison(n)}}class Af extends ut{constructor(t,n){super(t,"in",n),this.keys=pu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Rf extends ut{constructor(t,n){super(t,"not-in",n),this.keys=pu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>A.fromName(r.referenceValue))}class Pf extends ut{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Yi(n)&&Zn(n.arrayValue,this.value)}}class Cf extends ut{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Zn(this.value.arrayValue,n)}}class Sf extends ut{constructor(t,n){super(t,"not-in",n)}matches(t){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Zn(this.value.arrayValue,n)}}class Vf extends ut{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Yi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.he=null}}function ha(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Df(e,t,n,r,s,i,o)}function Zi(e){const t=b(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>fi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ds(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>mn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>mn(r)).join(",")),t.he=n}return t.he}function to(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Tf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!du(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ca(e.startAt,t.startAt)&&ca(e.endAt,t.endAt)}function pi(e){return A.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function bf(e,t,n,r,s,i,o,a){return new fs(e,t,n,r,s,i,o,a)}function eo(e){return new fs(e)}function da(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function kf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Nf(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Mf(e){return e.collectionGroup!==null}function un(e){const t=b(e);if(t.Pe===null){t.Pe=[];const n=Nf(t),r=kf(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Fn(n)),t.Pe.push(new Fn(Rt.keyField(),"asc"));else{let s=!1;for(const i of t.explicitOrderBy)t.Pe.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Fn(Rt.keyField(),i))}}}return t.Pe}function ae(e){const t=b(e);if(!t.Ie)if(t.limitType==="F")t.Ie=ha(t.path,t.collectionGroup,un(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of un(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Fn(i.field,o))}const r=t.endAt?new Hr(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Hr(t.startAt.position,t.startAt.inclusive):null;t.Ie=ha(t.path,t.collectionGroup,n,t.filters,t.limit,r,s)}return t.Ie}function mi(e,t,n){return new fs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function ps(e,t){return to(ae(e),ae(t))&&e.limitType===t.limitType}function mu(e){return`${Zi(ae(e))}|lt:${e.limitType}`}function gi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>fu(s)).join(", ")}]`),ds(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>mn(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>mn(s)).join(",")),`Target(${r})`}(ae(e))}; limitType=${e.limitType})`}function ms(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):A.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of un(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=ua(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,un(r),s)||r.endAt&&!function(o,a,l){const u=ua(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,un(r),s))}(e,t)}function Of(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function gu(e){return(t,n)=>{let r=!1;for(const s of un(e)){const i=xf(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xf(e,t,n){const r=e.field.isKeyField()?A.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?pn(l,u):R()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ze(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return ou(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=new Z(A.comparator);function le(){return Ff}const _u=new Z(A.comparator);function kn(...e){let t=_u;for(const n of e)t=t.insert(n.key,n);return t}function yu(e){let t=_u;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function xe(){return Ln()}function Eu(){return Ln()}function Ln(){return new An(e=>e.toString(),(e,t)=>e.isEqual(t))}const Lf=new Z(A.comparator),Uf=new St(A.comparator);function x(...e){let t=Uf;for(const n of e)t=t.add(n);return t}const Bf=new St(q);function jf(){return Bf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zr(t)?"-0":t}}function Tu(e){return{integerValue:""+e}}function qf(e,t){return _f(t)?Tu(t):vu(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this._=void 0}}function $f(e,t,n){return e instanceof Kr?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Xi(i)&&(i=Ji(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof tr?wu(e,t):e instanceof er?Au(e,t):function(s,i){const o=Iu(s,i),a=fa(o)+fa(s.Te);return di(o)&&di(s.Te)?Tu(a):vu(s.serializer,a)}(e,t)}function zf(e,t,n){return e instanceof tr?wu(e,t):e instanceof er?Au(e,t):n}function Iu(e,t){return e instanceof Gr?function(r){return di(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Kr extends gs{}class tr extends gs{constructor(t){super(),this.elements=t}}function wu(e,t){const n=Ru(t);for(const r of e.elements)n.some(s=>Zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class er extends gs{constructor(t){super(),this.elements=t}}function Au(e,t){let n=Ru(t);for(const r of e.elements)n=n.filter(s=>!Zt(s,r));return{arrayValue:{values:n}}}class Gr extends gs{constructor(t,n){super(),this.serializer=t,this.Te=n}}function fa(e){return it(e.integerValue||e.doubleValue)}function Ru(e){return Yi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Hf(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof tr&&s instanceof tr||r instanceof er&&s instanceof er?fn(r.elements,s.elements,Zt):r instanceof Gr&&s instanceof Gr?Zt(r.Te,s.Te):r instanceof Kr&&s instanceof Kr}(e.transform,t.transform)}class Kf{constructor(t,n){this.version=t,this.transformResults=n}}class Kt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Kt}static exists(t){return new Kt(void 0,t)}static updateTime(t){return new Kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function br(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class _s{}function Pu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new no(e.key,Kt.none()):new fr(e.key,e.data,Kt.none());{const n=e.data,r=Ot.empty();let s=new St(Rt.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pe(e.key,r,new Lt(s.toArray()),Kt.none())}}function Gf(e,t,n){e instanceof fr?function(s,i,o){const a=s.value.clone(),l=ma(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Pe?function(s,i,o){if(!br(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=ma(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Cu(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Un(e,t,n,r){return e instanceof fr?function(i,o,a,l){if(!br(i.precondition,o))return a;const u=i.value.clone(),c=ga(i.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Pe?function(i,o,a,l){if(!br(i.precondition,o))return a;const u=ga(i.fieldTransforms,l,o),c=o.data;return c.setAll(Cu(i)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return br(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Wf(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Iu(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function pa(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&fn(r,s,(i,o)=>Hf(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class fr extends _s{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pe extends _s{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ma(e,t,n){const r=new Map;W(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,zf(o,a,n[s]))}return r}function ga(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$f(i,o,t))}return r}class no extends _s{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qf extends _s{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Gf(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Un(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Un(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Eu();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Pu(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),x())}isEqual(t){return this.batchId===t.batchId&&fn(this.mutations,t.mutations,(n,r)=>pa(n,r))&&fn(this.baseMutations,t.baseMutations,(n,r)=>pa(n,r))}}class ro{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){W(t.mutations.length===r.length);let s=function(){return Lf}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ro(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st,U;function Zf(e){switch(e){default:return R();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function Su(e){if(e===void 0)return oe("GRPC error has no .code"),p.UNKNOWN;switch(e){case st.OK:return p.OK;case st.CANCELLED:return p.CANCELLED;case st.UNKNOWN:return p.UNKNOWN;case st.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case st.INTERNAL:return p.INTERNAL;case st.UNAVAILABLE:return p.UNAVAILABLE;case st.UNAUTHENTICATED:return p.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case st.NOT_FOUND:return p.NOT_FOUND;case st.ALREADY_EXISTS:return p.ALREADY_EXISTS;case st.PERMISSION_DENIED:return p.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case st.ABORTED:return p.ABORTED;case st.OUT_OF_RANGE:return p.OUT_OF_RANGE;case st.UNIMPLEMENTED:return p.UNIMPLEMENTED;case st.DATA_LOSS:return p.DATA_LOSS;default:return R()}}(U=st||(st={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Cr}static getOrCreateInstance(){return Cr===null&&(Cr=new so),Cr}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Cr=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new ln([4294967295,4294967295],0);function _a(e){const t=tp().encode(e),n=new ef;return n.update(t),new Uint8Array(n.digest())}function ya(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ln([n,r],0),new ln([s,i],0)]}class io{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Nn(`Invalid padding: ${n}`);if(r<0)throw new Nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Nn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Nn(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=ln.fromNumber(this.de)}Re(t,n,r){let s=t.add(n.multiply(ln.fromNumber(r)));return s.compare(ep)===1&&(s=new ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=_a(t),[r,s]=ya(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new io(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=_a(t),[r,s]=ya(n);for(let i=0;i<this.hashCount;i++){const o=this.Re(r,s,i);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,pr.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ys(V.min(),s,new Z(q),le(),x())}}class pr{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new pr(r,n,x(),x(),x())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n,r,s){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=s}}class Vu{constructor(t,n){this.targetId=t,this.pe=n}}class Du{constructor(t,n,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ea{constructor(){this.ye=0,this.we=Ta(),this.Se=Vt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=x(),n=x(),r=x();return this.we.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:R()}}),new pr(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=Ta()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class np{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=le(),this.$e=va(),this.Ue=new Z(q)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:R()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(t){var n,r;const s=t.targetId,i=t.pe.count,o=this.Xe(s);if(o){const a=o.target;if(pi(a))if(i===0){const l=new A(a.path);this.ze(s,l,At.newNoDocument(l,V.min()))}else W(i===1);else{const l=this.et(s);if(l!==i){const u=this.tt(t,l);if(u.status!==0){this.Ye(s);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(s,c)}(n=so.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,E){var I,v,D,O,M,B;const tt={localCacheCount:f,existenceFilterCount:E.count},F=E.unchangedNames;return F&&(tt.bloomFilter={applied:h===0,hashCount:(I=F==null?void 0:F.hashCount)!==null&&I!==void 0?I:0,bitmapLength:(O=(D=(v=F==null?void 0:F.bits)===null||v===void 0?void 0:v.bitmap)===null||D===void 0?void 0:D.length)!==null&&O!==void 0?O:0,padding:(B=(M=F==null?void 0:F.bits)===null||M===void 0?void 0:M.padding)!==null&&B!==void 0?B:0},d&&(tt.bloomFilter.mightContain=d)),tt}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:s}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=je(i).toUint8Array()}catch(h){if(h instanceof au)return dn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new io(l,o,a)}catch(h){return dn(h instanceof Nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const c=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:s===n-this.it(t.targetId,c)?0:2,nt:c}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{n(i.path.canonicalString())||(this.ze(t,i,null),s++)}),s}st(t){const n=new Map;this.Qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&pi(a.target)){const l=new A(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,At.newNoDocument(l,t))}i.Ce&&(n.set(o,i.Me()),i.xe())}});let r=x();this.$e.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.Ke.forEach((i,o)=>o.setReadTime(t));const s=new ys(t,n,this.Ue,this.Ke,r);return this.Ke=le(),this.$e=va(),this.Ue=new Z(q),s}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const s=this.He(t);this.ot(t,n)?s.Oe(n,1):s.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Ea,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new St(q),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Ea),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function va(){return new Z(A.comparator)}function Ta(){return new Z(A.comparator)}const rp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ip=(()=>({and:"AND",or:"OR"}))();class op{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function _i(e,t){return e.useProto3Json||ds(t)?t:{value:t}}function Wr(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ap(e,t){return Wr(e,t.toTimestamp())}function Yt(e){return W(!!e),V.fromTimestamp(function(n){const r=Ie(n);return new ct(r.seconds,r.nanos)}(e))}function oo(e,t){return function(r){return new X(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function ku(e){const t=X.fromString(e);return W(xu(t)),t}function yi(e,t){return oo(e.databaseId,t.path)}function qs(e,t){const n=ku(t);if(n.get(1)!==e.databaseId.projectId)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new A(Nu(n))}function Ei(e,t){return oo(e.databaseId,t)}function lp(e){const t=ku(e);return t.length===4?X.emptyPath():Nu(t)}function vi(e){return new X(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Nu(e){return W(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Ia(e,t,n){return{name:yi(e,t),fields:n.value.mapValue.fields}}function up(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(W(c===void 0||typeof c=="string"),Vt.fromBase64String(c||"")):(W(c===void 0||c instanceof Uint8Array),Vt.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?p.UNKNOWN:Su(u.code);return new w(c,u.message||"")}(o);n=new Du(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=qs(e,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):V.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=At.newFoundDocument(s,i,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new kr(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=qs(e,r.document),i=r.readTime?Yt(r.readTime):V.min(),o=At.newNoDocument(s,i),a=r.removedTargetIds||[];n=new kr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=qs(e,r.document),i=r.removedTargetIds||[];n=new kr([],i,s,null)}else{if(!("filter"in t))return R();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Yf(s,i),a=r.targetId;n=new Vu(a,o)}}return n}function cp(e,t){let n;if(t instanceof fr)n={update:Ia(e,t.key,t.value)};else if(t instanceof no)n={delete:yi(e,t.key)};else if(t instanceof Pe)n={update:Ia(e,t.key,t.data),updateMask:Ep(t.fieldMask)};else{if(!(t instanceof Qf))return R();n={verify:yi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Kr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof er)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Gr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw R()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ap(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:R()}(e,t.precondition)),n}function hp(e,t){return e&&e.length>0?(W(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(V.min())&&(o=Yt(i)),new Kf(o,s.transformResults||[])}(n,t))):[]}function dp(e,t){return{documents:[Ei(e,t.path)]}}function fp(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Ei(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Ei(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return Ou(te.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:en(h.field),direction:gp(h.dir)}}(u))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=_i(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function pp(e){let t=lp(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){W(r===1);const c=n.from[0];c.allDescendants?s=c.collectionId:t=t.child(c.collectionId)}let i=[];n.where&&(i=function(h){const d=Mu(h);return d instanceof te&&hu(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(E){return new Fn(nn(E.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ds(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Hr(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Hr(f,d)}(n.endAt)),bf(t,s,o,i,a,"F",l,u)}function mp(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Mu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=nn(n.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=nn(n.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=nn(n.unaryFilter.field);return ut.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=nn(n.unaryFilter.field);return ut.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(e):e.fieldFilter!==void 0?function(n){return ut.create(nn(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return te.create(n.compositeFilter.filters.map(r=>Mu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R()}}(n.compositeFilter.op))}(e):R()}function gp(e){return rp[e]}function _p(e){return sp[e]}function yp(e){return ip[e]}function en(e){return{fieldPath:e.canonicalString()}}function nn(e){return Rt.fromServerFormat(e.fieldPath)}function Ou(e){return e instanceof ut?function(n){if(n.op==="=="){if(la(n.value))return{unaryFilter:{field:en(n.field),op:"IS_NAN"}};if(aa(n.value))return{unaryFilter:{field:en(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(la(n.value))return{unaryFilter:{field:en(n.field),op:"IS_NOT_NAN"}};if(aa(n.value))return{unaryFilter:{field:en(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:en(n.field),op:_p(n.op),value:n.value}}}(e):e instanceof te?function(n){const r=n.getFilters().map(s=>Ou(s));return r.length===1?r[0]:{compositeFilter:{op:yp(n.op),filters:r}}}(e):R()}function Ep(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function xu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(t,n,r,s,i=V.min(),o=V.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new ge(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t){this.ct=t}}function Tp(e){const t=pp({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?mi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(){this.sn=new wp}addToCollectionParentIndex(t,n){return this.sn.add(n),m.resolve()}getCollectionParents(t,n){return m.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return m.resolve()}deleteFieldIndex(t,n){return m.resolve()}getDocumentsMatchingTarget(t,n){return m.resolve(null)}getIndexType(t,n){return m.resolve(0)}getFieldIndexes(t,n){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,n){return m.resolve(Te.min())}getMinOffsetFromCollectionGroup(t,n){return m.resolve(Te.min())}updateCollectionGroup(t,n,r){return m.resolve()}updateIndexEntries(t,n){return m.resolve()}}class wp{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new St(X.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new St(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new gn(0)}static On(){return new gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.changes=new An(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Un(r.mutation,s,Lt.empty(),ct.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,x()).next(()=>r))}getLocalViewOfDocuments(t,n,r=x()){const s=xe();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=kn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=xe();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,x()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=le();const o=Ln(),a=function(){return Ln()}();return n.forEach((l,u)=>{const c=r.get(u.key);s.has(u.key)&&(c===void 0||c.mutation instanceof Pe)?i=i.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Un(c.mutation,u,c.mutation.getFieldMask(),ct.now())):o.set(u.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Rp(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ln();let s=new Z((o,a)=>o-a),i=x();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Lt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(s.get(a.batchId)||x()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Eu();c.forEach(d=>{if(!i.has(d)){const f=Pu(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(i){return A.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Mf(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):m.resolve(xe());let a=-1,l=i;return o.next(u=>m.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(c)?m.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,l,u,x())).next(c=>({batchId:a,changes:yu(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new A(n)).next(r=>{let s=kn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const s=n.collectionGroup;let i=kn();return this.indexManager.getCollectionParents(t,s).next(o=>m.forEach(o,a=>{const l=function(c,h){return new fs(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(u=>{u.forEach((c,h)=>{i=i.insert(c,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s))).next(i=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,At.newInvalidDocument(u)))});let o=kn();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Un(u.mutation,l,Lt.empty(),ct.now()),ms(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return m.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),m.resolve()}getNamedQuery(t,n){return m.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(s){return{name:s.name,query:Tp(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.overlays=new Z(A.comparator),this.cr=new Map}getOverlay(t,n){return m.resolve(this.overlays.get(n))}getOverlays(t,n){const r=xe();return m.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),m.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.cr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.cr.delete(r)),m.resolve()}getOverlaysForCollection(t,n,r){const s=xe(),i=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return m.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Z((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=i.get(u.largestBatchId);c===null&&(c=xe(),i=i.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xe(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=s)););return m.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.cr.get(s.largestBatchId).delete(r.key);this.cr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jf(n,r));let i=this.cr.get(n);i===void 0&&(i=x(),this.cr.set(n,i)),this.cr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.lr=new St(dt.hr),this.Pr=new St(dt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new dt(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new dt(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new A(new X([])),r=new dt(n,t),s=new dt(n,t+1),i=[];return this.Pr.forEachInRange([r,s],o=>{this.Er(o),i.push(o.key)}),i}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new A(new X([])),r=new dt(n,t),s=new dt(n,t+1);let i=x();return this.Pr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new dt(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return A.comparator(t.key,n.key)||q(t.mr,n.mr)}static Ir(t,n){return q(t.mr,n.mr)||A.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new St(dt.hr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xf(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.pr=this.pr.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,n){return m.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.wr(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([r,s],o=>{const a=this.yr(o.mr);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new St(q);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.pr.forEachInRange([i,o],a=>{r=r.add(a.mr)})}),m.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;A.isDocumentKey(i)||(i=i.child(""));const o=new dt(new A(i),0);let a=new St(q);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.mr)),!0)},o),m.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const s=this.yr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){W(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return m.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new dt(n,0),s=this.pr.firstAfterOrEqual(r);return m.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t){this.Dr=t,this.docs=function(){return new Z(A.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():At.newInvalidDocument(n))}getEntries(t,n){let r=le();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():At.newInvalidDocument(s))}),m.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=le();const o=n.path,a=new A(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||pf(ff(c),r)<=0||(s.has(c.key)||ms(n,c))&&(i=i.insert(c.key,c.mutableCopy()))}return m.resolve(i)}getAllFromCollectionGroup(t,n,r,s){R()}vr(t,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new bp(this)}getSize(t){return m.resolve(this.size)}}class bp extends Ap{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.sr.addEntry(t,s)):this.sr.removeEntry(r)}),m.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.persistence=t,this.Cr=new An(n=>Zi(n),to),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new ao,this.targetCount=0,this.Or=gn.xn()}forEachTarget(t,n){return this.Cr.forEach((r,s)=>n(s)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),m.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new gn(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,m.resolve()}updateTargetData(t,n){return this.Ln(n),m.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return m.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),m.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),m.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return m.resolve(r)}containsKey(t,n){return m.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t,n){this.Nr={},this.overlays={},this.Br=new Qi(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new kp(this),this.indexManager=new Ip,this.remoteDocumentCache=function(s){return new Dp(s)}(r=>this.referenceDelegate.qr(r)),this.serializer=new vp(n),this.Qr=new Cp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Sp,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new Vp(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){T("MemoryPersistence","Starting transaction:",t);const s=new Mp(this.Br.next());return this.referenceDelegate.Kr(),r(s).next(i=>this.referenceDelegate.$r(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ur(t,n){return m.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class Mp extends gf{constructor(t){super(),this.currentSequenceNumber=t}}class lo{constructor(t){this.persistence=t,this.Wr=new ao,this.Gr=null}static zr(t){return new lo(t)}get jr(){if(this.Gr)return this.Gr;throw R()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),m.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),m.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(s=>this.jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.jr,r=>{const s=A.fromPath(r);return this.Hr(t,s).next(i=>{i||n.removeEntry(s,V.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return m.or([()=>m.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=s}static qi(t,n){let r=x(),s=x();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uo(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,s){return this.$i(t,n).next(i=>i||this.Ui(t,n,s,r)).next(i=>i||this.Wi(t,n))}$i(t,n){if(da(n))return m.resolve(null);let r=ae(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=mi(n,null,"F"),r=ae(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=x(...i);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(t,mi(n,null,"F")):this.ji(t,u,n,l)}))})))}Ui(t,n,r,s){return da(n)||s.isEqual(V.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(i=>{const o=this.Gi(n,i);return this.zi(n,o,r,s)?this.Wi(t,n):(ra()<=$.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gi(n)),this.ji(t,o,n,df(s,-1)))})}Gi(t,n){let r=new St(gu(t));return n.forEach((s,i)=>{ms(t,i)&&(r=r.add(i))}),r}zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Wi(t,n){return ra()<=$.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",gi(n)),this.Ki.getDocumentsMatchingQuery(t,n,Te.min())}ji(t,n,r,s){return this.Ki.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(t,n,r,s){this.persistence=t,this.Hi=n,this.serializer=s,this.Ji=new Z(q),this.Yi=new An(i=>Zi(i),to),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Pp(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Fp(e,t,n,r){return new xp(e,t,n,r)}async function Fu(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=x();for(const u of s){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of i){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Lp(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let f=m.resolve();return d.forEach(E=>{f=f.next(()=>c.getEntry(l,E)).next(I=>{const v=u.docVersions.get(E);W(v!==null),I.version.compareTo(v)<0&&(h.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),c.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=x();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Lu(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function Up(e,t){const n=b(e),r=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const a=[];t.targetChanges.forEach((c,h)=>{const d=s.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(i,c.removedDocuments,h).next(()=>n.kr.addMatchingKeys(i,c.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(Vt.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),s=s.insert(h,f),function(I,v,D){return I.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,f,c)&&a.push(n.kr.updateTargetData(i,f))});let l=le(),u=x();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(Bp(i,o,t.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(V.min())){const c=n.kr.getLastRemoteSnapshotVersion(i).next(h=>n.kr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ji=s,i))}function Bp(e,t,n){let r=x(),s=x();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=le();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:s}})}function jp(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function qp(e,t){const n=b(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.kr.getTargetData(r,t).next(i=>i?(s=i,m.resolve(s)):n.kr.allocateTargetId(r).next(o=>(s=new ge(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ji.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function Ti(e,t,n){const r=b(e),s=r.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!dr(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(s.target)}function wa(e,t,n){const r=b(e);let s=V.min(),i=x();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=b(l),d=h.Yi.get(c);return d!==void 0?m.resolve(h.Ji.get(d)):h.kr.getTargetData(u,c)}(r,o,ae(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?s:V.min(),n?i:x())).next(a=>($p(r,Of(t),a),{documents:a,ss:i})))}function $p(e,t,n){let r=e.Zi.get(t)||V.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.Zi.set(t,r)}class Aa{constructor(){this.activeTargetIds=jf()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zp{constructor(){this.Hs=new Aa,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Aa,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr=null;function $s(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class Wp extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${s}/databases/${i}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Ro(){return!1}Vo(n,r,s,i,o){const a=$s(),l=this.mo(n,r);T("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,i,o),this.po(n,l,u,s).then(c=>(T("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw dn("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",s),c})}yo(n,r,s,i,o,a){return this.Vo(n,r,s,i,o)}fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}mo(n,r){const s=Kp[n];return`${this.To}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,s){const i=$s();return new Promise((o,a)=>{const l=new tf;l.setWithCredentials(!0),l.listenOnce(Jd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case js.NO_ERROR:const c=l.getResponseJson();T(It,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(c)),o(c);break;case js.TIMEOUT:T(It,`RPC '${t}' ${i} timed out`),a(new w(p.DEADLINE_EXCEEDED,"Request time out"));break;case js.HTTP_ERROR:const h=l.getStatus();if(T(It,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(D)>=0?D:p.UNKNOWN}(f.status);a(new w(E,f.message))}else a(new w(p.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new w(p.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{T(It,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);T(It,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}wo(t,n,r){const s=$s(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Qd(),a=Xd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Zd({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=i.join("");T(It,`Creating RPC '${t}' stream ${s}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,f=!1;const E=new Gp({so:v=>{f?T(It,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(d||(T(It,`Opening RPC '${t}' stream ${s} transport.`),h.open(),d=!0),T(It,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},oo:()=>h.close()}),I=(v,D,O)=>{v.listen(D,M=>{try{O(M)}catch(B){setTimeout(()=>{throw B},0)}})};return I(h,Ar.EventType.OPEN,()=>{f||T(It,`RPC '${t}' stream ${s} transport opened.`)}),I(h,Ar.EventType.CLOSE,()=>{f||(f=!0,T(It,`RPC '${t}' stream ${s} transport closed`),E.Po())}),I(h,Ar.EventType.ERROR,v=>{f||(f=!0,dn(It,`RPC '${t}' stream ${s} transport errored:`,v),E.Po(new w(p.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ar.EventType.MESSAGE,v=>{var D;if(!f){const O=v.data[0];W(!!O);const M=O,B=M.error||((D=M[0])===null||D===void 0?void 0:D.error);if(B){T(It,`RPC '${t}' stream ${s} received error:`,B);const tt=B.status;let F=function(Nt){const J=st[Nt];if(J!==void 0)return Su(J)}(tt),xt=B.message;F===void 0&&(F=p.INTERNAL,xt="Unknown error status: "+tt+" with message "+B.message),f=!0,E.Po(new w(F,xt)),h.close()}else T(It,`RPC '${t}' stream ${s} received:`,O),E.Io(O)}}),I(a,Yd.STAT_EVENT,v=>{v.stat===ea.PROXY?T(It,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===ea.NOPROXY&&T(It,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.ho()},0),E}}function zs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e){return new op(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=s,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),s=Math.max(0,n-r);s>0&&T("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t,n,r,s,i,o,a,l){this.ii=t,this.Bo=r,this.Lo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Uu(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(oe(n.toString()),oe("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.ko===n&&this.e_(r,s)},r=>{t(()=>{const s=new w(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(s)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(s=>{r(()=>this.t_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qp extends Bu{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=up(this.serializer,t),r=function(i){if(!("targetChange"in i))return V.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?V.min():o.readTime?Yt(o.readTime):V.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=vi(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=pi(l)?{documents:dp(i,l)}:{query:fp(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bu(i,o.resumeToken);const u=_i(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(V.min())>0){a.readTime=Wr(i,o.snapshotVersion.toTimestamp());const u=_i(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=mp(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=vi(this.serializer),n.removeTarget=t,this.Ho(n)}}class Xp extends Bu{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=hp(t.writeResults,t.commitTime),r=Yt(t.commitTime);return this.listener.u_(r,n)}return W(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=vi(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>cp(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.h_=!1}P_(){if(this.h_)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Vo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(p.UNKNOWN,s.toString())})}yo(t,n,r,s){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.yo(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(p.UNKNOWN,i.toString())})}terminate(){this.h_=!0}}class Yp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(oe(n),this.d_=!1):T("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{He(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=b(l);u.y_.add(4),await mr(u),u.b_.set("Unknown"),u.y_.delete(4),await vs(u)}(this))})}),this.b_=new Yp(r,s)}}async function vs(e){if(He(e))for(const t of e.w_)await t(!0)}async function mr(e){for(const t of e.w_)await t(!1)}function ju(e,t){const n=b(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),fo(n)?ho(n):Rn(n).Uo()&&co(n,t))}function qu(e,t){const n=b(e),r=Rn(n);n.p_.delete(t),r.Uo()&&$u(n,t),n.p_.size===0&&(r.Uo()?r.zo():He(n)&&n.b_.set("Unknown"))}function co(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(V.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Rn(e).i_(t)}function $u(e,t){e.D_.Be(t),Rn(e).s_(t)}function ho(e){e.D_=new np({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),Rn(e).start(),e.b_.A_()}function fo(e){return He(e)&&!Rn(e).$o()&&e.p_.size>0}function He(e){return b(e).y_.size===0}function zu(e){e.D_=void 0}async function tm(e){e.p_.forEach((t,n)=>{co(e,t)})}async function em(e,t){zu(e),fo(e)?(e.b_.m_(t),ho(e)):e.b_.set("Unknown")}async function nm(e,t,n){if(e.b_.set("Online"),t instanceof Du&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.p_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.p_.delete(a),s.D_.removeTarget(a))}(e,t)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Qr(e,r)}else if(t instanceof kr?e.D_.We(t):t instanceof Vu?e.D_.Ze(t):e.D_.je(t),!n.isEqual(V.min()))try{const r=await Lu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=i.p_.get(u);c&&i.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=i.p_.get(l);if(!c)return;i.p_.set(l,c.withResumeToken(Vt.EMPTY_BYTE_STRING,c.snapshotVersion)),$u(i,l);const h=new ge(c.target,l,u,c.sequenceNumber);co(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await Qr(e,r)}}async function Qr(e,t,n){if(!dr(t))throw t;e.y_.add(1),await mr(e),e.b_.set("Offline"),n||(n=()=>Lu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await vs(e)})}function Hu(e,t){return t().catch(n=>Qr(e,n,t))}async function Ts(e){const t=b(e),n=we(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;rm(t);)try{const s=await jp(t.localStore,r);if(s===null){t.g_.length===0&&n.zo();break}r=s.batchId,sm(t,s)}catch(s){await Qr(t,s)}Ku(t)&&Gu(t)}function rm(e){return He(e)&&e.g_.length<10}function sm(e,t){e.g_.push(t);const n=we(e);n.Uo()&&n.__&&n.a_(t.mutations)}function Ku(e){return He(e)&&!we(e).$o()&&e.g_.length>0}function Gu(e){we(e).start()}async function im(e){we(e).l_()}async function om(e){const t=we(e);for(const n of e.g_)t.a_(n.mutations)}async function am(e,t,n){const r=e.g_.shift(),s=ro.from(r,t,n);await Hu(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Ts(e)}async function lm(e,t){t&&we(e).__&&await async function(r,s){if(function(o){return Zf(o)&&o!==p.ABORTED}(s.code)){const i=r.g_.shift();we(r).Go(),await Hu(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ts(r)}}(e,t),Ku(e)&&Gu(e)}async function Pa(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=He(n);n.y_.add(3),await mr(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await vs(n)}async function um(e,t){const n=b(e);t?(n.y_.delete(2),await vs(n)):t||(n.y_.add(2),await mr(n),n.b_.set("Unknown"))}function Rn(e){return e.v_||(e.v_=function(n,r,s){const i=b(n);return i.P_(),new Qp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:tm.bind(null,e),uo:em.bind(null,e),r_:nm.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),fo(e)?ho(e):e.b_.set("Unknown")):(await e.v_.stop(),zu(e))})),e.v_}function we(e){return e.C_||(e.C_=function(n,r,s){const i=b(n);return i.P_(),new Xp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{_o:im.bind(null,e),uo:lm.bind(null,e),c_:om.bind(null,e),u_:am.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Ts(e)):(await e.C_.stop(),e.g_.length>0&&(T("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Le,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new po(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mo(e,t){if(oe("AsyncQueue",`${t}: ${e}`),dr(e))return new w(p.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this.comparator=t?(n,r)=>t(n,r)||A.comparator(n.key,r.key):(n,r)=>A.comparator(n.key,r.key),this.keyedMap=kn(),this.sortedSet=new Z(this.comparator)}static emptySet(t){return new cn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof cn)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new cn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.F_=new Z(A.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):R():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class _n{constructor(t,n,r,s,i,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new _n(t,n,cn.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ps(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.x_=void 0,this.listeners=[]}}class hm{constructor(){this.queries=new An(t=>mu(t),ps),this.onlineState="Unknown",this.O_=new Set}}async function dm(e,t){const n=b(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new cm),s)try{i.x_=await n.onListen(r)}catch(o){const a=mo(o,`Initialization of query '${gi(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.N_(n.onlineState),i.x_&&t.B_(i.x_)&&go(n)}async function fm(e,t){const n=b(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function pm(e,t){const n=b(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.B_(s)&&(r=!0);o.x_=s}}r&&go(n)}function mm(e,t,n){const r=b(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function go(e){e.O_.forEach(t=>{t.next()})}class gm{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new _n(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=_n.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.key=t}}class Qu{constructor(t){this.key=t}}class _m{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=x(),this.mutatedKeys=x(),this.na=gu(t),this.ra=new cn(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Ca,s=n?n.ra:this.ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((c,h)=>{const d=s.get(c),f=ms(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?E!==I&&(r.track({type:3,doc:f}),v=!0):this._a(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this.na(f,l)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),i=I?i.add(c):i.delete(c)):(o=o.delete(c),i=i.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),i=i.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:i}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const s=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const i=t.oa.M_();i.sort((u,c)=>function(d,f){const E=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return E(d)-E(f)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,i.length!==0||l?{snapshot:new _n(this.query,t.ra,s,i,t.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Ca,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=x(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new Qu(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new Wu(r))}),n}ha(t){this.X_=t.ss,this.ta=x();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return _n.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class ym{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Em{constructor(t){this.key=t,this.Ia=!1}}class vm{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new An(a=>mu(a),ps),this.da=new Map,this.Aa=new Set,this.Ra=new Z(A.comparator),this.Va=new Map,this.ma=new ao,this.fa={},this.ga=new Map,this.pa=gn.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Tm(e,t){const n=bm(e);let r,s;const i=n.Ea.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Pa();else{const o=await qp(n.localStore,ae(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Im(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&ju(n.remoteStore,o)}return s}async function Im(e,t,n,r,s){e.wa=(h,d,f)=>async function(I,v,D,O){let M=v.view.sa(D);M.zi&&(M=await wa(I.localStore,v.query,!1).then(({documents:F})=>v.view.sa(F,M)));const B=O&&O.targetChanges.get(v.targetId),tt=v.view.applyChanges(M,I.isPrimaryClient,B);return Va(I,v.targetId,tt.ca),tt.snapshot}(e,h,d,f);const i=await wa(e.localStore,t,!0),o=new _m(t,i.ss),a=o.sa(i.documents),l=pr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,l);Va(e,n,u.ca);const c=new ym(t,n,o);return e.Ea.set(t,c),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),u.snapshot}async function wm(e,t){const n=b(e),r=n.Ea.get(t),s=n.da.get(r.targetId);if(s.length>1)return n.da.set(r.targetId,s.filter(i=>!ps(i,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ti(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qu(n.remoteStore,r.targetId),Ii(n,r.targetId)}).catch(hr)):(Ii(n,r.targetId),await Ti(n.localStore,r.targetId,!0))}async function Am(e,t,n){const r=km(e);try{const s=await function(o,a){const l=b(o),u=ct.now(),c=a.reduce((f,E)=>f.add(E.key),x());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=le(),I=x();return l.Xi.getEntries(f,c).next(v=>{E=v,E.forEach((D,O)=>{O.isValidDocument()||(I=I.add(D))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,E)).next(v=>{h=v;const D=[];for(const O of a){const M=Wf(O,h.get(O.key).overlayedDocument);M!=null&&D.push(new Pe(O.key,M,lu(M.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,D,a)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(h,I);return l.documentOverlayCache.saveOverlays(f,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:yu(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new Z(q)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,s.batchId,n),await gr(r,s.changes),await Ts(r.remoteStore)}catch(s){const i=mo(s,"Failed to persist write");n.reject(i)}}async function Xu(e,t){const n=b(e);try{const r=await Up(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Va.get(i);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ia=!0:s.modifiedDocuments.size>0?W(o.Ia):s.removedDocuments.size>0&&(W(o.Ia),o.Ia=!1))}),await gr(n,r,t)}catch(r){await hr(r)}}function Sa(e,t,n){const r=b(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ea.forEach((i,o)=>{const a=o.view.N_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=b(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&go(l)}(r.eventManager,t),s.length&&r.Ta.r_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Rm(e,t,n){const r=b(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Va.get(t),i=s&&s.key;if(i){let o=new Z(A.comparator);o=o.insert(i,At.newNoDocument(i,V.min()));const a=x().add(i),l=new ys(V.min(),new Map,new Z(q),o,a);await Xu(r,l),r.Ra=r.Ra.remove(i),r.Va.delete(t),_o(r)}else await Ti(r.localStore,t,!1).then(()=>Ii(r,t,n)).catch(hr)}async function Pm(e,t){const n=b(e),r=t.batch.batchId;try{const s=await Lp(n.localStore,t);Yu(n,r,null),Ju(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gr(n,s)}catch(s){await hr(s)}}async function Cm(e,t,n){const r=b(e);try{const s=await function(o,a){const l=b(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(W(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);Yu(r,t,n),Ju(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await gr(r,s)}catch(s){await hr(s)}}function Ju(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function Yu(e,t,n){const r=b(e);let s=r.fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.fa[r.currentUser.toKey()]=s}}function Ii(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||Zu(e,r)})}function Zu(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(qu(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),_o(e))}function Va(e,t,n){for(const r of n)r instanceof Wu?(e.ma.addReference(r.key,t),Sm(e,r)):r instanceof Qu?(T("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||Zu(e,r.key)):R()}function Sm(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(T("SyncEngine","New document in limbo: "+n),e.Aa.add(r),_o(e))}function _o(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new A(X.fromString(t)),r=e.pa.next();e.Va.set(r,new Em(n)),e.Ra=e.Ra.insert(n,r),ju(e.remoteStore,new ge(ae(eo(n.path)),r,"TargetPurposeLimboResolution",Qi.ae))}}async function gr(e,t,n){const r=b(e),s=[],i=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const c=uo.qi(l.targetId,u);i.push(c)}}))}),await Promise.all(o),r.Ta.r_(s),await async function(l,u){const c=b(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(u,d=>m.forEach(d.Li,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.ki,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!dr(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=c.Ji.get(d),E=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(E);c.Ji=c.Ji.insert(d,I)}}}(r.localStore,i))}async function Vm(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await Fu(n.localStore,t);n.currentUser=t,function(i,o){i.ga.forEach(a=>{a.forEach(l=>{l.reject(new w(p.CANCELLED,o))})}),i.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await gr(n,r.ts)}}function Dm(e,t){const n=b(e),r=n.Va.get(t);if(r&&r.Ia)return x().add(r.key);{let s=x();const i=n.da.get(t);if(!i)return s;for(const o of i){const a=n.Ea.get(o);s=s.unionWith(a.view.ia)}return s}}function bm(e){const t=b(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Rm.bind(null,t),t.Ta.r_=pm.bind(null,t.eventManager),t.Ta.Sa=mm.bind(null,t.eventManager),t}function km(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Pm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Cm.bind(null,t),t}class Da{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Es(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Fp(this.persistence,new Op,t.initialUser,this.serializer)}createPersistence(t){return new Np(lo.zr,this.serializer)}createSharedClientState(t){return new zp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Nm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vm.bind(null,this.syncEngine),await um(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new hm}()}createDatastore(t){const n=Es(t.databaseInfo.databaseId),r=function(i){return new Wp(i)}(t.databaseInfo);return function(i,o,a,l){return new Jp(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new Zp(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Sa(this.syncEngine,n,0),function(){return Ra.v()?new Ra:new Hp}())}createSyncEngine(t,n){return function(s,i,o,a,l,u,c){const h=new vm(s,i,o,a,l,u);return c&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=b(n);T("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await mr(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):oe("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=iu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Le;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=mo(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Hs(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ba(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Fm(e);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>Pa(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>Pa(t.remoteStore,i)),e._onlineComponents=t}function xm(e){return e.name==="FirebaseError"?e.code===p.FAILED_PRECONDITION||e.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Fm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hs(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!xm(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await Hs(e,new Da)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await Hs(e,new Da);return e._offlineComponents}async function tc(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await ba(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await ba(e,new Nm))),e._onlineComponents}function Lm(e){return tc(e).then(t=>t.syncEngine)}async function ka(e){const t=await tc(e),n=t.eventManager;return n.onListen=Tm.bind(null,t.syncEngine),n.onUnlisten=wm.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e,t,n){if(!n)throw new w(p.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Um(e,t,n,r){if(t===!0&&r===!0)throw new w(p.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ma(e){if(!A.isDocumentKey(e))throw new w(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Oa(e){if(A.isDocumentKey(e))throw new w(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function yo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":R()}function Ee(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yo(e);throw new w(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Um("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ec((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(p.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Is{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nf;switch(r.type){case"firstParty":return new af(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Na.get(n);r&&(T("ComponentProvider","Removing Datastore"),Na.delete(n),r.terminate())}(this),Promise.resolve()}}function Bm(e,t,n,r={}){var s;const i=(e=Ee(e,Is))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=wt.MOCK_USER;else{a=Oc(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new w(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new wt(u)}e._authCredentials=new rf(new su(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ws(this.firestore,t,this._query)}}class Ut{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ve(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ut(this.firestore,t,this._key)}}class ve extends ws{constructor(t,n,r){super(t,n,eo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ut(this.firestore,null,new A(t))}withConverter(t){return new ve(this.firestore,t,this._path)}}function Fa(e,t,...n){if(e=se(e),nc("collection","path",t),e instanceof Is){const r=X.fromString(t,...n);return Oa(r),new ve(e,null,r)}{if(!(e instanceof Ut||e instanceof ve))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(X.fromString(t,...n));return Oa(r),new ve(e.firestore,null,r)}}function wi(e,t,...n){if(e=se(e),arguments.length===1&&(t=iu.V()),nc("doc","path",t),e instanceof Is){const r=X.fromString(t,...n);return Ma(r),new Ut(e,null,new A(r))}{if(!(e instanceof Ut||e instanceof ve))throw new w(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(X.fromString(t,...n));return Ma(r),new Ut(e.firestore,e instanceof ve?e.converter:null,new A(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Uu(this,"async_queue_retry"),this.Xa=()=>{const n=zs();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=zs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=zs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new Le;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!dr(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw oe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const s=po.createAndSchedule(this,t,n,r,i=>this.ru(i));return this.ja.push(s),s}eu(){this.Ha&&R()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}function La(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class yn extends Is{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new jm}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sc(this),this._firestoreClient.terminate()}}function qm(e,t){const n=typeof e=="object"?e:Uh(),r=typeof e=="string"?e:t||"(default)",s=Oh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nc("firestore");i&&Bm(s,...i)}return s}function rc(e){return e._firestoreClient||sc(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function sc(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,u,c){return new Ef(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ec(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Om(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this._byteString=t}static fromBase64String(t){try{return new En(Vt.fromBase64String(t))}catch(n){throw new w(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new En(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=/^__.*__$/;class zm{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,n,this.fieldTransforms):new fr(t,this.data,n,this.fieldTransforms)}}class ic{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Pe(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function oc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw R()}}class To{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.au(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new To(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.cu({path:r,hu:!1});return s.Pu(t),s}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.cu({path:r,hu:!1});return s.au(),s}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Xr(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(oc(this.uu)&&$m.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Hm{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Es(t)}Ru(t,n,r,s=!1){return new To({uu:t,methodName:n,Au:r,path:Rt.emptyPath(),hu:!1,du:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ac(e){const t=e._freezeSettings(),n=Es(e._databaseId);return new Hm(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Km(e,t,n,r,s,i={}){const o=e.Ru(i.merge||i.mergeFields?2:0,t,n,s);Io("Data must be an object, but it was:",o,r);const a=lc(r,o);let l,u;if(i.merge)l=new Lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const c=[];for(const h of i.mergeFields){const d=Ai(t,h,n);if(!o.contains(d))throw new w(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);cc(c,d)||c.push(d)}l=new Lt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new zm(new Ot(a),l,u)}class Rs extends Eo{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rs}}function Gm(e,t,n,r){const s=e.Ru(1,t,n);Io("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();ze(r,(l,u)=>{const c=wo(t,l,n);u=se(u);const h=s.Iu(c);if(u instanceof Rs)i.push(c);else{const d=Ps(u,h);d!=null&&(i.push(c),o.set(c,d))}});const a=new Lt(i);return new ic(o,a,s.fieldTransforms)}function Wm(e,t,n,r,s,i){const o=e.Ru(1,t,n),a=[Ai(t,r,n)],l=[s];if(i.length%2!=0)throw new w(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ai(t,i[d])),l.push(i[d+1]);const u=[],c=Ot.empty();for(let d=a.length-1;d>=0;--d)if(!cc(u,a[d])){const f=a[d];let E=l[d];E=se(E);const I=o.Iu(f);if(E instanceof Rs)u.push(f);else{const v=Ps(E,I);v!=null&&(u.push(f),c.set(f,v))}}const h=new Lt(u);return new ic(c,h,o.fieldTransforms)}function Ps(e,t){if(uc(e=se(e)))return Io("Unsupported field value:",t,e),lc(e,t);if(e instanceof Eo)return function(r,s){if(!oc(s.uu))throw s.Eu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Eu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Ps(a,s.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:Wr(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wr(s.serializer,i)}}if(r instanceof vo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof En)return{bytesValue:bu(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:oo(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Eu(`Unsupported field value: ${yo(r)}`)}(e,t)}function lc(e,t){const n={};return ou(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ze(e,(r,s)=>{const i=Ps(s,t.lu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function uc(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ct||e instanceof vo||e instanceof En||e instanceof Ut||e instanceof Eo)}function Io(e,t,n){if(!uc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=yo(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function Ai(e,t,n){if((t=se(t))instanceof As)return t._internalPath;if(typeof t=="string")return wo(e,t);throw Xr("Field path arguments must be of type string or ",e,!1,void 0,n)}const Qm=new RegExp("[~\\*/\\[\\]]");function wo(e,t,n){if(t.search(Qm)>=0)throw Xr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new As(...t.split("."))._internalPath}catch{throw Xr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xr(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new w(p.INVALID_ARGUMENT,a+e+l)}function cc(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Xm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(dc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Xm extends hc{data(){return super.data()}}function dc(e,t){return typeof t=="string"?wo(e,t):t instanceof As?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ym{convertValue(t,n="none"){switch(qe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return it(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(je(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw R()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ze(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new vo(it(t.latitude),it(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ji(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jn(t));default:return null}}convertTimestamp(t){const n=Ie(t);return new ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=X.fromString(t);W(xu(r));const s=new Yn(r.get(1),r.get(3)),i=new A(r.popFirst(5));return s.isEqual(n)||oe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fc extends hc{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Nr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(dc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nr extends fc{data(t={}){return super.data(t)}}class tg{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Mn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Nr(this._firestore,this._userDataWriter,r.key,r,new Mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Nr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Mn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Nr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Mn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:eg(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eg(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}class pc extends Ym{constructor(t){super(),this.firestore=t}convertBytes(t){return new En(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function ng(e,t,n,...r){e=Ee(e,Ut);const s=Ee(e.firestore,yn),i=ac(s);let o;return o=typeof(t=se(t))=="string"||t instanceof As?Wm(i,"updateDoc",e._key,t,n,r):Gm(i,"updateDoc",e._key,t),Ao(s,[o.toMutation(e._key,Kt.exists(!0))])}function rg(e){return Ao(Ee(e.firestore,yn),[new no(e._key,Kt.none())])}function sg(e,t){const n=Ee(e.firestore,yn),r=wi(e),s=Zm(e.converter,t);return Ao(n,[Km(ac(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function ig(e,...t){var n,r,s;e=se(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||La(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(La(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,u,c;if(e instanceof Ut)u=Ee(e.firestore,yn),c=eo(e._key.path),l={next:h=>{t[o]&&t[o](og(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=Ee(e,ws);u=Ee(h.firestore,yn),c=h._query;const d=new pc(u);l={next:f=>{t[o]&&t[o](new tg(u,d,h,f))},error:t[o+1],complete:t[o+2]},Jm(e._query)}return function(d,f,E,I){const v=new Mm(I),D=new gm(f,v,E);return d.asyncQueue.enqueueAndForget(async()=>dm(await ka(d),D)),()=>{v.Ca(),d.asyncQueue.enqueueAndForget(async()=>fm(await ka(d),D))}}(rc(u),c,a,l)}function Ao(e,t){return function(r,s){const i=new Le;return r.asyncQueue.enqueueAndForget(async()=>Am(await Lm(r),s,i)),i.promise}(rc(e),t)}function og(e,t,n){const r=n.docs.get(t._key),s=new pc(e);return new fc(e,s,t._key,r,new Mn(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){wn=s})(Lh),xr(new Bn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new yn(new sf(r.getProvider("auth-internal")),new uf(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(u.options.projectId,c)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),on(na,"4.1.0",t),on(na,"4.1.0","esm2017")})();var ag="firebase",lg="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(ag,lg,"app");const ug={apiKey:"AIzaSyBPQtNCJQZfLsrhPOPZSVucz6BHw4b0vXo",authDomain:"svelte-brave.firebaseapp.com",projectId:"svelte-brave",storageBucket:"svelte-brave.appspot.com",messagingSenderId:"930636723462",appId:"1:930636723462:web:cdcaf0fb1d2a5396759a87"},cg=Za(ug),Vr=qm(cg);function Ua(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ba(e){let t,n,r,s='<ion-icon name="trash" class="svelte-1fnsw91"></ion-icon>',i,o,a='<ion-icon name="pencil" class="svelte-1fnsw91"></ion-icon>',l,u,c=e[3].credencial+"",h,d,f,E=e[3].dni+"",I,v,D,O=e[3].nombre+"",M,B,tt,F=e[3].os+"",xt,ot,Nt,J=e[3].dx+"",L,rt,at,ee=e[3].tel+"",mt,Ce,lt,ne=e[3].fecha_empa+"",gt,Se,_t,Dt=e[3].HbA1c+"",Ve,De,Mt,Pn;return{c(){t=P("tr"),n=P("td"),r=P("button"),r.innerHTML=s,i=z(),o=P("button"),o.innerHTML=a,l=z(),u=P("td"),h=de(c),d=z(),f=P("td"),I=de(E),v=z(),D=P("td"),M=de(O),B=z(),tt=P("td"),xt=de(F),ot=z(),Nt=P("td"),L=de(J),rt=z(),at=P("td"),mt=de(ee),Ce=z(),lt=P("td"),gt=de(ne),Se=z(),_t=P("td"),Ve=de(Dt),De=z(),this.h()},l($t){t=C($t,"TR",{class:!0});var k=Q(t);n=C(k,"TD",{class:!0});var be=Q(n);r=C(be,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Ht(r)!=="svelte-1en9mcu"&&(r.innerHTML=s),i=H(be),o=C(be,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Ht(o)!=="svelte-d00jsr"&&(o.innerHTML=a),be.forEach(j),l=H(k),u=C(k,"TD",{class:!0});var Ke=Q(u);h=fe(Ke,c),Ke.forEach(j),d=H(k),f=C(k,"TD",{class:!0});var zt=Q(f);I=fe(zt,E),zt.forEach(j),v=H(k),D=C(k,"TD",{class:!0});var Ft=Q(D);M=fe(Ft,O),Ft.forEach(j),B=H(k),tt=C(k,"TD",{class:!0});var Ge=Q(tt);xt=fe(Ge,F),Ge.forEach(j),ot=H(k),Nt=C(k,"TD",{class:!0});var jt=Q(Nt);L=fe(jt,J),jt.forEach(j),rt=H(k),at=C(k,"TD",{class:!0});var Cn=Q(at);mt=fe(Cn,ee),Cn.forEach(j),Ce=H(k),lt=C(k,"TD",{class:!0});var We=Q(lt);gt=fe(We,ne),We.forEach(j),Se=H(k),_t=C(k,"TD",{class:!0});var Wt=Q(_t);Ve=fe(Wt,Dt),Wt.forEach(j),De=H(k),k.forEach(j),this.h()},h(){g(r,"id","bo3"),g(r,"class","svelte-1fnsw91"),g(o,"id","bo3"),g(o,"class","svelte-1fnsw91"),g(n,"class","svelte-1fnsw91"),g(u,"class","svelte-1fnsw91"),g(f,"class","svelte-1fnsw91"),g(D,"class","svelte-1fnsw91"),g(tt,"class","svelte-1fnsw91"),g(Nt,"class","svelte-1fnsw91"),g(at,"class","svelte-1fnsw91"),g(lt,"class","svelte-1fnsw91"),g(_t,"class","svelte-1fnsw91"),g(t,"class","svelte-1fnsw91")},m($t,k){sn($t,t,k),_(t,n),_(n,r),_(n,i),_(n,o),_(t,l),_(t,u),_(u,h),_(t,d),_(t,f),_(f,I),_(t,v),_(t,D),_(D,M),_(t,B),_(t,tt),_(tt,xt),_(t,ot),_(t,Nt),_(Nt,L),_(t,rt),_(t,at),_(at,mt),_(t,Ce),_(t,lt),_(lt,gt),_(t,Se),_(t,_t),_(_t,Ve),_(t,De),Mt||(Pn=[bt(r,"click",function(){ko(e[6](e[3].id))&&e[6](e[3].id).apply(this,arguments)}),bt(o,"click",function(){ko(e[7](e[3]))&&e[7](e[3]).apply(this,arguments)})],Mt=!0)},p($t,k){e=$t,k&4&&c!==(c=e[3].credencial+"")&&pe(h,c),k&4&&E!==(E=e[3].dni+"")&&pe(I,E),k&4&&O!==(O=e[3].nombre+"")&&pe(M,O),k&4&&F!==(F=e[3].os+"")&&pe(xt,F),k&4&&J!==(J=e[3].dx+"")&&pe(L,J),k&4&&ee!==(ee=e[3].tel+"")&&pe(mt,ee),k&4&&ne!==(ne=e[3].fecha_empa+"")&&pe(gt,ne),k&4&&Dt!==(Dt=e[3].HbA1c+"")&&pe(Ve,Dt)},d($t){$t&&j(t),Mt=!1,qa(Pn)}}}function hg(e){let t,n='<h1 class="svelte-1fnsw91">Registros de Afiliados:</h1> <p class="svelte-1fnsw91">Altas, bajas, edición y búsqueda de pacientes.</p>',r,s,i,o='<h6 class="text-center m-0 svelte-1fnsw91">Registro de Afiliados</h6>',a,l,u,c,h="Alta Afiliado",d,f,E,I,v='<h6 class="m-0 svelte-1fnsw91">Alta de Afiliados</h6>',D,O,M,B,tt,F,xt,ot,Nt,J,L,rt,at,ee,mt,Ce,lt,ne,gt,Se,_t,Dt,Ve="Guardar",De,Mt,Pn="Cancelar",$t,k,be="Reset",Ke,zt,Ft,Ge,jt,Cn="Buscar",We,Wt,ue,Qe,Ro='<tr class="svelte-1fnsw91"><th class="col-1 svelte-1fnsw91">Eliminar|Editar</th> <th class=" svelte-1fnsw91">Credencial</th> <th class=" svelte-1fnsw91">Dni</th> <th class=" svelte-1fnsw91">Nombre</th> <th class=" svelte-1fnsw91">OS</th> <th class=" svelte-1fnsw91">Dx</th> <th class=" svelte-1fnsw91">Tel</th> <th class=" svelte-1fnsw91">Fecha_empa</th> <th class=" svelte-1fnsw91">HbA1c</th></tr>',Cs,Xe,Ss,Po,Je=No(e[2]),yt=[];for(let N=0;N<Je.length;N+=1)yt[N]=Ba(Ua(e,Je,N));return{c(){t=P("div"),t.innerHTML=n,r=z(),s=P("form"),i=P("div"),i.innerHTML=o,a=z(),l=P("div"),u=P("div"),c=P("button"),c.textContent=h,d=z(),f=P("div"),E=P("form"),I=P("div"),I.innerHTML=v,D=z(),O=P("div"),M=P("div"),B=P("input"),tt=z(),F=P("input"),xt=z(),ot=P("input"),Nt=z(),J=P("input"),L=z(),rt=P("div"),at=P("input"),ee=z(),mt=P("input"),Ce=z(),lt=P("input"),ne=z(),gt=P("input"),Se=z(),_t=P("div"),Dt=P("button"),Dt.textContent=Ve,De=z(),Mt=P("button"),Mt.textContent=Pn,$t=z(),k=P("button"),k.textContent=be,Ke=z(),zt=P("div"),Ft=P("input"),Ge=z(),jt=P("button"),jt.textContent=Cn,We=z(),Wt=P("div"),ue=P("table"),Qe=P("thead"),Qe.innerHTML=Ro,Cs=z(),Xe=P("tbody");for(let N=0;N<yt.length;N+=1)yt[N].c();this.h()},l(N){t=C(N,"DIV",{class:!0,"data-svelte-h":!0}),Ht(t)!=="svelte-170kha5"&&(t.innerHTML=n),r=H(N),s=C(N,"FORM",{class:!0});var Y=Q(s);i=C(Y,"DIV",{class:!0,"data-svelte-h":!0}),Ht(i)!=="svelte-1dhv39w"&&(i.innerHTML=o),a=H(Y),l=C(Y,"DIV",{class:!0});var et=Q(l);u=C(et,"DIV",{class:!0});var ke=Q(u);c=C(ke,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Ht(c)!=="svelte-1nnaikz"&&(c.textContent=h),d=H(ke),f=C(ke,"DIV",{id:!0,class:!0,style:!0});var Co=Q(f);E=C(Co,"FORM",{class:!0});var Ye=Q(E);I=C(Ye,"DIV",{class:!0,"data-svelte-h":!0}),Ht(I)!=="svelte-wjd6ju"&&(I.innerHTML=v),D=H(Ye),O=C(Ye,"DIV",{class:!0});var _r=Q(O);M=C(_r,"DIV",{class:!0});var ce=Q(M);B=C(ce,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),tt=H(ce),F=C(ce,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),xt=H(ce),ot=C(ce,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),Nt=H(ce),J=C(ce,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),ce.forEach(j),L=H(_r),rt=C(_r,"DIV",{class:!0});var he=Q(rt);at=C(he,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),ee=H(he),mt=C(he,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),Ce=H(he),lt=C(he,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),ne=H(he),gt=C(he,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0}),he.forEach(j),_r.forEach(j),Se=H(Ye),_t=C(Ye,"DIV",{class:!0});var Ze=Q(_t);Dt=C(Ze,"BUTTON",{type:!0,id:!0,class:!0,"data-svelte-h":!0}),Ht(Dt)!=="svelte-alahb3"&&(Dt.textContent=Ve),De=H(Ze),Mt=C(Ze,"BUTTON",{type:!0,id:!0,class:!0,"data-svelte-h":!0}),Ht(Mt)!=="svelte-1ur87cz"&&(Mt.textContent=Pn),$t=H(Ze),k=C(Ze,"BUTTON",{type:!0,id:!0,class:!0,"data-svelte-h":!0}),Ht(k)!=="svelte-ib2cpe"&&(k.textContent=be),Ze.forEach(j),Ye.forEach(j),Co.forEach(j),ke.forEach(j),Ke=H(et),zt=C(et,"DIV",{class:!0});var yr=Q(zt);Ft=C(yr,"INPUT",{type:!0,class:!0,placeholder:!0}),Ge=H(yr),jt=C(yr,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),Ht(jt)!=="svelte-16pmapb"&&(jt.textContent=Cn),yr.forEach(j),et.forEach(j),We=H(Y),Wt=C(Y,"DIV",{class:!0,id:!0});var So=Q(Wt);ue=C(So,"TABLE",{class:!0});var Er=Q(ue);Qe=C(Er,"THEAD",{"data-svelte-h":!0}),Ht(Qe)!=="svelte-1k0ybpu"&&(Qe.innerHTML=Ro),Cs=H(Er),Xe=C(Er,"TBODY",{});var Vo=Q(Xe);for(let Vs=0;Vs<yt.length;Vs+=1)yt[Vs].l(Vo);Vo.forEach(j),Er.forEach(j),So.forEach(j),Y.forEach(j),this.h()},h(){g(t,"class","titulo svelte-1fnsw91"),g(i,"class","card-header svelte-1fnsw91"),g(c,"id","bo2"),g(c,"class","svelte-1fnsw91"),g(I,"class","card-header svelte-1fnsw91"),g(B,"type","number"),g(B,"class","form-control mt-2  svelte-1fnsw91"),g(B,"id","inputcredencial"),g(B,"placeholder","Ingresar Credencial"),B.required=!0,g(F,"type","number"),g(F,"class","form-control mt-1 svelte-1fnsw91"),g(F,"id","inputdni"),g(F,"placeholder","Ingresar DNI"),F.required=!0,g(ot,"type","text"),g(ot,"class","form-control mt-1 svelte-1fnsw91"),g(ot,"id","inputnombre"),g(ot,"placeholder","Ingresar Nombre y Apellido"),ot.required=!0,g(J,"type","text"),g(J,"class","form-control mt-1 svelte-1fnsw91"),g(J,"id","inputobrasocal"),g(J,"placeholder","Ingresar OS"),J.required=!0,g(M,"class","col-5 "),g(at,"type","text"),g(at,"class","form-control mt-2  svelte-1fnsw91"),g(at,"id","inputdx"),g(at,"placeholder","Dx DBT tipo"),at.required=!0,g(mt,"type","number"),g(mt,"class","form-control mt-1 svelte-1fnsw91"),g(mt,"id","inputtel"),g(mt,"placeholder","Telefono"),mt.required=!0,g(lt,"type","text"),g(lt,"class","form-control mt-1  svelte-1fnsw91"),g(lt,"id","inputfecha_empa"),g(lt,"placeholder","Fecha Empa."),lt.required=!0,g(gt,"type","text"),g(gt,"class","form-control mt-1 svelte-1fnsw91"),g(gt,"id","inputHbA1c"),g(gt,"placeholder","HbA1c"),gt.required=!0,g(rt,"class","col-5"),g(O,"class","row justify-content-around svelte-1fnsw91"),g(Dt,"type","submit"),g(Dt,"id","bo1"),g(Dt,"class","svelte-1fnsw91"),g(Mt,"type","button"),g(Mt,"id","bo1"),g(Mt,"class","svelte-1fnsw91"),g(k,"type","reset"),g(k,"id","bo1"),k.value="Reset",g(k,"class","svelte-1fnsw91"),g(_t,"class","d-flex my-2 mx-3 gap-1"),g(E,"class","card border-dark  svelte-1fnsw91"),g(f,"id","modal"),g(f,"class","rounded-top svelte-1fnsw91"),Do(f,"--display",e[0]?"block":"none"),g(u,"class","pt-2"),g(Ft,"type","number"),g(Ft,"class","form-control svelte-1fnsw91"),g(Ft,"placeholder","Nº de Dni"),g(jt,"id","bo"),g(jt,"class","svelte-1fnsw91"),g(zt,"class","d-flex pt-2"),g(l,"class","d-flex justify-content-between mx-2"),g(ue,"class","table m-0  svelte-1fnsw91"),g(Wt,"class","rounded-top svelte-1fnsw91"),g(Wt,"id","scroll"),g(s,"class","card border-dark text-center svelte-1fnsw91")},m(N,Y){sn(N,t,Y),sn(N,r,Y),sn(N,s,Y),_(s,i),_(s,a),_(s,l),_(l,u),_(u,c),_(u,d),_(u,f),_(f,E),_(E,I),_(E,D),_(E,O),_(O,M),_(M,B),ht(B,e[3].credencial),_(M,tt),_(M,F),ht(F,e[3].dni),_(M,xt),_(M,ot),ht(ot,e[3].nombre),_(M,Nt),_(M,J),ht(J,e[3].os),_(O,L),_(O,rt),_(rt,at),ht(at,e[3].dx),_(rt,ee),_(rt,mt),ht(mt,e[3].tel),_(rt,Ce),_(rt,lt),ht(lt,e[3].fecha_empa),_(rt,ne),_(rt,gt),ht(gt,e[3].HbA1c),_(E,Se),_(E,_t),_(_t,Dt),_(_t,De),_(_t,Mt),_(_t,$t),_(_t,k),_(l,Ke),_(l,zt),_(zt,Ft),ht(Ft,e[1]),_(zt,Ge),_(zt,jt),_(s,We),_(s,Wt),_(Wt,ue),_(ue,Qe),_(ue,Cs),_(ue,Xe);for(let et=0;et<yt.length;et+=1)yt[et]&&yt[et].m(Xe,null);Ss||(Po=[bt(c,"click",e[9]),bt(B,"input",e[10]),bt(F,"input",e[11]),bt(ot,"input",e[12]),bt(J,"input",e[13]),bt(at,"input",e[14]),bt(mt,"input",e[15]),bt(lt,"input",e[16]),bt(gt,"input",e[17]),bt(Mt,"click",e[8]),bt(E,"submit",bo(e[5])),bt(Ft,"input",e[18]),bt(jt,"click",bo(e[4]))],Ss=!0)},p(N,[Y]){if(Y&8&&me(B.value)!==N[3].credencial&&ht(B,N[3].credencial),Y&8&&me(F.value)!==N[3].dni&&ht(F,N[3].dni),Y&8&&ot.value!==N[3].nombre&&ht(ot,N[3].nombre),Y&8&&J.value!==N[3].os&&ht(J,N[3].os),Y&8&&at.value!==N[3].dx&&ht(at,N[3].dx),Y&8&&me(mt.value)!==N[3].tel&&ht(mt,N[3].tel),Y&8&&lt.value!==N[3].fecha_empa&&ht(lt,N[3].fecha_empa),Y&8&&gt.value!==N[3].HbA1c&&ht(gt,N[3].HbA1c),Y&1&&Do(f,"--display",N[0]?"block":"none"),Y&2&&me(Ft.value)!==N[1]&&ht(Ft,N[1]),Y&196){Je=No(N[2]);let et;for(et=0;et<Je.length;et+=1){const ke=Ua(N,Je,et);yt[et]?yt[et].p(ke,Y):(yt[et]=Ba(ke),yt[et].c(),yt[et].m(Xe,null))}for(;et<yt.length;et+=1)yt[et].d(1);yt.length=Je.length}},i:Ks,o:Ks,d(N){N&&(j(t),j(r),j(s)),mc(yt,N),Ss=!1,qa(Po)}}}function dg(e,t,n){let r={credencial:"",dni:"",nombre:"",os:"",dx:"",tel:"",fecha_empa:"",HbA1c:""},s=!1,i=!1,o="",a,l=[];const u=()=>{let L=l.find(rt=>rt.dni===a);L?Swal.fire({icon:"success",title:"Afiliado: "+L.nombre,html:"<b>Credencial:</b> "+L.credencial+"<br><b>Dni:</b> "+L.dni+"<br><b>Obra Social:</b> "+L.os+"<br><b>Diagnostico:</b> "+L.dx+"<br><b>Tel:</b> "+L.tel+"<br><b>fecha_empa:</b> "+L.fecha_empa+"<br><b>HbA1c:</b> "+L.HbA1c,confirmButtonText:"Volver",confirmButtonColor:"var(--color-bg-1)"}):Swal.fire({title:"Credencial No encontrada!!",text:"Volver a intentar",icon:"error",confirmButtonText:"Volver",confirmButtonColor:"rgb(235, 60, 150)"})},c=async()=>{await sg(Fa(Vr,"afis"),r),Swal.fire({icon:"success",title:"ALTA REGISTRADA CON EXITO ",text:"Afiliado: "+r.nombre,backdrop:!0,confirmButtonText:"Volver",confirmButtonColor:"var(--color-bg-1)"})},h=async()=>{await ng(wi(Vr,"afis",o),r)},d=async()=>{i?(h(),Swal.fire({icon:"success",title:"EDITADO CON EXITO ",text:"Afiliado: ",backdrop:!0,confirmButtonText:"Volver",confirmButtonColor:"var(--color-bg-1)"})):c(),n(3,r={credencial:"",dni:"",nombre:"",os:"",dx:"",tel:"",fecha_empa:"",HbA1c:""})},f=ig(Fa(Vr,"afis"),L=>{n(2,l=L.docs.map(rt=>({...rt.data(),id:rt.id})))},L=>{console.log(L)}),E=async L=>{await rg(wi(Vr,"afis",L)),Swal.fire({icon:"success",title:"Afiliado Eliminado",backdrop:!0,confirmButtonText:"Volver",confirmButtonColor:"var(--color-bg-1)"})},I=L=>{D(),n(3,r.credencial=L.credencial,r),n(3,r.dni=L.dni,r),n(3,r.nombre=L.nombre,r),n(3,r.os=L.os,r),n(3,r.dx=L.dx,r),n(3,r.dx=L.tel,r),n(3,r.dx=L.fecha_empa,r),n(3,r.dx=L.HbA1c,r),o=L.id,i=!0};function v(){n(0,s=!1)}function D(){n(0,s=!0)}gc(f);function O(){r.credencial=me(this.value),n(3,r)}function M(){r.dni=me(this.value),n(3,r)}function B(){r.nombre=this.value,n(3,r)}function tt(){r.os=this.value,n(3,r)}function F(){r.dx=this.value,n(3,r)}function xt(){r.tel=me(this.value),n(3,r)}function ot(){r.fecha_empa=this.value,n(3,r)}function Nt(){r.HbA1c=this.value,n(3,r)}function J(){a=me(this.value),n(1,a)}return[s,a,l,r,u,d,E,I,v,D,O,M,B,tt,F,xt,ot,Nt,J]}class fg extends $a{constructor(t){super(),za(this,t,dg,hg,ja,{})}}function pg(e){let t,n,r,s,i;return s=new fg({}),{c(){t=P("meta"),n=z(),r=P("div"),yc(s.$$.fragment),this.h()},l(o){const a=_c("svelte-zblz0f",document.head);t=C(a,"META",{name:!0,content:!0}),a.forEach(j),n=H(o),r=C(o,"DIV",{});var l=Q(r);Ec(s.$$.fragment,l),l.forEach(j),this.h()},h(){document.title="Registos de afiliados",g(t,"name","description"),g(t,"content","Registos de afiliados")},m(o,a){_(document.head,t),sn(o,n,a),sn(o,r,a),vc(s,r,null),i=!0},p:Ks,i(o){i||(Tc(s.$$.fragment,o),i=!0)},o(o){Ic(s.$$.fragment,o),i=!1},d(o){o&&(j(n),j(r)),j(t),wc(s)}}}class wg extends $a{constructor(t){super(),za(this,t,null,pg,ja,{})}}export{wg as component};
