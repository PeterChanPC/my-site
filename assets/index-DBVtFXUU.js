var Q_=Object.defineProperty;var e0=(t,e,n)=>e in t?Q_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var re=(t,e,n)=>e0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},ts=[],ni=()=>{},t0=()=>!1,ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ou=t=>t.startsWith("onUpdate:"),Jt=Object.assign,Fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},n0=Object.prototype.hasOwnProperty,ht=(t,e)=>n0.call(t,e),Xe=Array.isArray,ns=t=>Ha(t)==="[object Map]",Xp=t=>Ha(t)==="[object Set]",je=t=>typeof t=="function",Lt=t=>typeof t=="string",qi=t=>typeof t=="symbol",At=t=>t!==null&&typeof t=="object",$p=t=>(At(t)||je(t))&&je(t.then)&&je(t.catch),qp=Object.prototype.toString,Ha=t=>qp.call(t),i0=t=>Ha(t).slice(8,-1),jp=t=>Ha(t)==="[object Object]",Bu=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=Nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),za=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},r0=/-(\w)/g,Pn=za(t=>t.replace(r0,(e,n)=>n?n.toUpperCase():"")),s0=/\B([A-Z])/g,Cr=za(t=>t.replace(s0,"-$1").toLowerCase()),Va=za(t=>t.charAt(0).toUpperCase()+t.slice(1)),dl=za(t=>t?`on${Va(t)}`:""),Hi=(t,e)=>!Object.is(t,e),fa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},mc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xf;const Ga=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ku(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Lt(i)?c0(i):ku(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(t)||At(t))return t}const o0=/;(?![^(]*\))/g,a0=/:([^]+)/,l0=/\/\*[^]*?\*\//g;function c0(t){const e={};return t.replace(l0,"").split(o0).forEach(n=>{if(n){const i=n.split(a0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wi(t){let e="";if(Lt(t))e=t;else if(Xe(t))for(let n=0;n<t.length;n++){const i=Wi(t[n]);i&&(e+=i+" ")}else if(At(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const u0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",f0=Nu(u0);function Kp(t){return!!t||t===""}const Zp=t=>!!(t&&t.__v_isRef===!0),Qn=t=>Lt(t)?t:t==null?"":Xe(t)||At(t)&&(t.toString===qp||!je(t.toString))?Zp(t)?Qn(t.value):JSON.stringify(t,Jp,2):String(t),Jp=(t,e)=>Zp(e)?Jp(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[pl(i,s)+" =>"]=r,n),{})}:Xp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pl(n))}:qi(e)?pl(e):At(e)&&!Xe(e)&&!jp(e)?String(e):e,pl=(t,e="")=>{var n;return qi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sn;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=sn,!e&&sn&&(this.index=(sn.scopes||(sn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=sn;try{return sn=this,e()}finally{sn=n}}}on(){sn=this}off(){sn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hu(t){return new Qp(t)}function em(){return sn}function h0(t,e=!1){sn&&sn.cleanups.push(t)}let Mt;const ml=new WeakSet;class tm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,sn&&sn.active&&sn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ml.has(this)&&(ml.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||im(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$f(this),rm(this);const e=Mt,n=kn;Mt=this,kn=!0;try{return this.fn()}finally{sm(this),Mt=e,kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gu(e);this.deps=this.depsTail=void 0,$f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ml.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gc(this)&&this.run()}get dirty(){return gc(this)}}let nm=0,qs,js;function im(t,e=!1){if(t.flags|=8,e){t.next=js,js=t;return}t.next=qs,qs=t}function zu(){nm++}function Vu(){if(--nm>0)return;if(js){let e=js;for(js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function rm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sm(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Gu(i),d0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function gc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(om(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function om(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===io))return;t.globalVersion=io;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!gc(t)){t.flags&=-3;return}const n=Mt,i=kn;Mt=t,kn=!0;try{rm(t);const r=t.fn(t._value);(e.version===0||Hi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Mt=n,kn=i,sm(t),t.flags&=-3}}function Gu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Gu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function d0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kn=!0;const am=[];function ji(){am.push(kn),kn=!1}function Yi(){const t=am.pop();kn=t===void 0?!0:t}function $f(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Mt;Mt=void 0;try{e()}finally{Mt=n}}}let io=0;class p0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Mt||!kn||Mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Mt)n=this.activeLink=new p0(Mt,this),Mt.deps?(n.prevDep=Mt.depsTail,Mt.depsTail.nextDep=n,Mt.depsTail=n):Mt.deps=Mt.depsTail=n,lm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Mt.depsTail,n.nextDep=void 0,Mt.depsTail.nextDep=n,Mt.depsTail=n,Mt.deps===n&&(Mt.deps=i)}return n}trigger(e){this.version++,io++,this.notify(e)}notify(e){zu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vu()}}}function lm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ta=new WeakMap,Sr=Symbol(""),_c=Symbol(""),ro=Symbol("");function jt(t,e,n){if(kn&&Mt){let i=Ta.get(t);i||Ta.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Wu),r.map=i,r.key=n),r.track()}}function _i(t,e,n,i,r,s){const o=Ta.get(t);if(!o){io++;return}const a=l=>{l&&l.trigger()};if(zu(),e==="clear")o.forEach(a);else{const l=Xe(t),c=l&&Bu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ro||!qi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ro)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Sr)),ns(t)&&a(o.get(_c)));break;case"delete":l||(a(o.get(Sr)),ns(t)&&a(o.get(_c)));break;case"set":ns(t)&&a(o.get(Sr));break}}Vu()}function m0(t,e){const n=Ta.get(t);return n&&n.get(e)}function Ir(t){const e=ot(t);return e===t?e:(jt(e,"iterate",ro),Rn(t)?e:e.map(Yt))}function Wa(t){return jt(t=ot(t),"iterate",ro),t}const g0={__proto__:null,[Symbol.iterator](){return gl(this,Symbol.iterator,Yt)},concat(...t){return Ir(this).concat(...t.map(e=>Xe(e)?Ir(e):e))},entries(){return gl(this,"entries",t=>(t[1]=Yt(t[1]),t))},every(t,e){return ai(this,"every",t,e,void 0,arguments)},filter(t,e){return ai(this,"filter",t,e,n=>n.map(Yt),arguments)},find(t,e){return ai(this,"find",t,e,Yt,arguments)},findIndex(t,e){return ai(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ai(this,"findLast",t,e,Yt,arguments)},findLastIndex(t,e){return ai(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ai(this,"forEach",t,e,void 0,arguments)},includes(...t){return _l(this,"includes",t)},indexOf(...t){return _l(this,"indexOf",t)},join(t){return Ir(this).join(t)},lastIndexOf(...t){return _l(this,"lastIndexOf",t)},map(t,e){return ai(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return qf(this,"reduce",t,e)},reduceRight(t,...e){return qf(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return ai(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Ir(this).toReversed()},toSorted(t){return Ir(this).toSorted(t)},toSpliced(...t){return Ir(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return gl(this,"values",Yt)}};function gl(t,e,n){const i=Wa(t),r=i[e]();return i!==t&&!Rn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const _0=Array.prototype;function ai(t,e,n,i,r,s){const o=Wa(t),a=o!==t&&!Rn(t),l=o[e];if(l!==_0[e]){const f=l.apply(t,s);return a?Yt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Yt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function qf(t,e,n,i){const r=Wa(t);let s=n;return r!==t&&(Rn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Yt(a),l,t)}),r[e](s,...i)}function _l(t,e,n){const i=ot(t);jt(i,"iterate",ro);const r=i[e](...n);return(r===-1||r===!1)&&qu(n[0])?(n[0]=ot(n[0]),i[e](...n)):r}function Ls(t,e,n=[]){ji(),zu();const i=ot(t)[e].apply(t,n);return Vu(),Yi(),i}const v0=Nu("__proto__,__v_isRef,__isVue"),cm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qi));function x0(t){qi(t)||(t=String(t));const e=ot(this);return jt(e,"has",t),e.hasOwnProperty(t)}class um{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?C0:pm:s?dm:hm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!r){let l;if(o&&(l=g0[n]))return l;if(n==="hasOwnProperty")return x0}const a=Reflect.get(e,n,Pt(e)?e:i);return(qi(n)?cm.has(n):v0(n))||(r||jt(e,"get",n),s)?a:Pt(a)?o&&Bu(n)?a:a.value:At(a)?r?gm(a):Mo(a):a}}class fm extends um{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=br(s);if(!Rn(i)&&!br(i)&&(s=ot(s),i=ot(i)),!Xe(e)&&Pt(s)&&!Pt(i))return l?!1:(s.value=i,!0)}const o=Xe(e)&&Bu(n)?Number(n)<e.length:ht(e,n),a=Reflect.set(e,n,i,Pt(e)?e:r);return e===ot(r)&&(o?Hi(i,s)&&_i(e,"set",n,i):_i(e,"add",n,i)),a}deleteProperty(e,n){const i=ht(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&_i(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!qi(n)||!cm.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",Xe(e)?"length":Sr),Reflect.ownKeys(e)}}class S0 extends um{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const y0=new fm,E0=new S0,M0=new fm(!0);const vc=t=>t,No=t=>Reflect.getPrototypeOf(t);function b0(t,e,n){return function(...i){const r=this.__v_raw,s=ot(r),o=ns(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?vc:e?xc:Yt;return!e&&jt(s,"iterate",l?_c:Sr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Oo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function T0(t,e){const n={get(r){const s=this.__v_raw,o=ot(s),a=ot(r);t||(Hi(r,a)&&jt(o,"get",r),jt(o,"get",a));const{has:l}=No(o),c=e?vc:t?xc:Yt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&jt(ot(r),"iterate",Sr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ot(s),a=ot(r);return t||(Hi(r,a)&&jt(o,"has",r),jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ot(a),c=e?vc:t?xc:Yt;return!t&&jt(l,"iterate",Sr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Jt(n,t?{add:Oo("add"),set:Oo("set"),delete:Oo("delete"),clear:Oo("clear")}:{add(r){!e&&!Rn(r)&&!br(r)&&(r=ot(r));const s=ot(this);return No(s).has.call(s,r)||(s.add(r),_i(s,"add",r,r)),this},set(r,s){!e&&!Rn(s)&&!br(s)&&(s=ot(s));const o=ot(this),{has:a,get:l}=No(o);let c=a.call(o,r);c||(r=ot(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Hi(s,u)&&_i(o,"set",r,s):_i(o,"add",r,s),this},delete(r){const s=ot(this),{has:o,get:a}=No(s);let l=o.call(s,r);l||(r=ot(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&_i(s,"delete",r,void 0),c},clear(){const r=ot(this),s=r.size!==0,o=r.clear();return s&&_i(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=b0(r,t,e)}),n}function Xu(t,e){const n=T0(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ht(n,r)&&r in i?n:i,r,s)}const w0={get:Xu(!1,!1)},A0={get:Xu(!1,!0)},R0={get:Xu(!0,!1)};const hm=new WeakMap,dm=new WeakMap,pm=new WeakMap,C0=new WeakMap;function P0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function L0(t){return t.__v_skip||!Object.isExtensible(t)?0:P0(i0(t))}function Mo(t){return br(t)?t:$u(t,!1,y0,w0,hm)}function mm(t){return $u(t,!1,M0,A0,dm)}function gm(t){return $u(t,!0,E0,R0,pm)}function $u(t,e,n,i,r){if(!At(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=L0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function zi(t){return br(t)?zi(t.__v_raw):!!(t&&t.__v_isReactive)}function br(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function qu(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function ju(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&Yp(t,"__v_skip",!0),t}const Yt=t=>At(t)?Mo(t):t,xc=t=>At(t)?gm(t):t;function Pt(t){return t?t.__v_isRef===!0:!1}function ln(t){return _m(t,!1)}function Yu(t){return _m(t,!0)}function _m(t,e){return Pt(t)?t:new I0(t,e)}class I0{constructor(e,n){this.dep=new Wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:Yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Rn(e)||br(e);e=i?e:ot(e),Hi(e,n)&&(this._rawValue=e,this._value=i?e:Yt(e),this.dep.trigger())}}function Cn(t){return Pt(t)?t.value:t}const D0={get:(t,e,n)=>e==="__v_raw"?t:Cn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Pt(r)&&!Pt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function vm(t){return zi(t)?t:new Proxy(t,D0)}function U0(t){const e=Xe(t)?new Array(t.length):{};for(const n in t)e[n]=O0(t,n);return e}class N0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return m0(ot(this._object),this._key)}}function O0(t,e,n){const i=t[e];return Pt(i)?i:new N0(t,e,n)}class F0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=io-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return im(this,!0),!0}get value(){const e=this.dep.track();return om(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function B0(t,e,n=!1){let i,r;return je(t)?i=t:(i=t.get,r=t.set),new F0(i,r,n)}const Fo={},wa=new WeakMap;let fr;function k0(t,e=!1,n=fr){if(n){let i=wa.get(n);i||wa.set(n,i=[]),i.push(t)}}function H0(t,e,n=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:Rn(x)||r===!1||r===0?vi(x,1):vi(x);let u,f,d,p,_=!1,v=!1;if(Pt(t)?(f=()=>t.value,_=Rn(t)):zi(t)?(f=()=>c(t),_=!0):Xe(t)?(v=!0,_=t.some(x=>zi(x)||Rn(x)),f=()=>t.map(x=>{if(Pt(x))return x.value;if(zi(x))return c(x);if(je(x))return l?l(x,2):x()})):je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ji();try{d()}finally{Yi()}}const x=fr;fr=u;try{return l?l(t,3,[p]):t(p)}finally{fr=x}}:f=ni,e&&r){const x=f,P=r===!0?1/0:r;f=()=>vi(x(),P)}const m=em(),h=()=>{u.stop(),m&&m.active&&Fu(m.effects,u)};if(s&&e){const x=e;e=(...P)=>{x(...P),h()}}let S=v?new Array(t.length).fill(Fo):Fo;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(r||_||(v?P.some((I,R)=>Hi(I,S[R])):Hi(P,S))){d&&d();const I=fr;fr=u;try{const R=[P,S===Fo?void 0:v&&S[0]===Fo?[]:S,p];l?l(e,3,R):e(...R),S=P}finally{fr=I}}}else u.run()};return a&&a(E),u=new tm(f),u.scheduler=o?()=>o(E,!1):E,p=x=>k0(x,!1,u),d=u.onStop=()=>{const x=wa.get(u);if(x){if(l)l(x,4);else for(const P of x)P();wa.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function vi(t,e=1/0,n){if(e<=0||!At(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pt(t))vi(t.value,e,n);else if(Xe(t))for(let i=0;i<t.length;i++)vi(t[i],e,n);else if(Xp(t)||ns(t))t.forEach(i=>{vi(i,e,n)});else if(jp(t)){for(const i in t)vi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&vi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(t,e,n,i){try{return i?t(...i):t()}catch(r){Xa(r,e,n)}}function ri(t,e,n,i){if(je(t)){const r=bo(t,e,n,i);return r&&$p(r)&&r.catch(s=>{Xa(s,e,n)}),r}if(Xe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(ri(t[s],e,n,i));return r}}function Xa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){ji(),bo(s,null,10,[t,l,c]),Yi();return}}z0(t,n,r,i,o)}function z0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const on=[];let Kn=-1;const is=[];let Ni=null,Yr=0;const xm=Promise.resolve();let Aa=null;function Ku(t){const e=Aa||xm;return t?e.then(this?t.bind(this):t):e}function V0(t){let e=Kn+1,n=on.length;for(;e<n;){const i=e+n>>>1,r=on[i],s=so(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Zu(t){if(!(t.flags&1)){const e=so(t),n=on[on.length-1];!n||!(t.flags&2)&&e>=so(n)?on.push(t):on.splice(V0(e),0,t),t.flags|=1,Sm()}}function Sm(){Aa||(Aa=xm.then(Em))}function G0(t){Xe(t)?is.push(...t):Ni&&t.id===-1?Ni.splice(Yr+1,0,t):t.flags&1||(is.push(t),t.flags|=1),Sm()}function jf(t,e,n=Kn+1){for(;n<on.length;n++){const i=on[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;on.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ym(t){if(is.length){const e=[...new Set(is)].sort((n,i)=>so(n)-so(i));if(is.length=0,Ni){Ni.push(...e);return}for(Ni=e,Yr=0;Yr<Ni.length;Yr++){const n=Ni[Yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ni=null,Yr=0}}const so=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Em(t){try{for(Kn=0;Kn<on.length;Kn++){const e=on[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<on.length;Kn++){const e=on[Kn];e&&(e.flags&=-2)}Kn=-1,on.length=0,ym(),Aa=null,(on.length||is.length)&&Em()}}let cn=null,Mm=null;function Ra(t){const e=cn;return cn=t,Mm=t&&t.type.__scopeId||null,e}function Ca(t,e=cn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&sh(-1);const s=Ra(e);let o;try{o=t(...r)}finally{Ra(s),i._d&&sh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yf(t,e){if(cn===null)return t;const n=ja(cn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&vi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ir(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ji(),ri(l,n,8,[t.el,a,t,e]),Yi())}}const W0=Symbol("_vte"),X0=t=>t.__isTeleport;function Ju(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ju(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Xt(t,e){return je(t)?Jt({name:t.name},e,{setup:t}):t}function bm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Tm(t){const e=ls(),n=Yu(null);if(e){const r=e.refs===vt?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function Pa(t,e,n,i,r=!1){if(Xe(t)){t.forEach((_,v)=>Pa(_,e&&(Xe(e)?e[v]:e),n,i,r));return}if(Ys(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Pa(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?ja(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,d=ot(f),p=f===vt?()=>!1:_=>ht(d,_);if(c!=null&&c!==l&&(Lt(c)?(u[c]=null,p(c)&&(f[c]=null)):Pt(c)&&(c.value=null)),je(l))bo(l,a,12,[o,u]);else{const _=Lt(l),v=Pt(l);if(_||v){const m=()=>{if(t.f){const h=_?p(l)?f[l]:u[l]:l.value;r?Xe(h)&&Fu(h,s):Xe(h)?h.includes(s)||h.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,vn(m,n)):m()}}}Ga().requestIdleCallback;Ga().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,wm=t=>t.type.__isKeepAlive;function $0(t,e){Am(t,"a",e)}function q0(t,e){Am(t,"da",e)}function Am(t,e,n=Vt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($a(e,i,n),n){let r=n.parent;for(;r&&r.parent;)wm(r.parent.vnode)&&j0(i,e,n,r),r=r.parent}}function j0(t,e,n,i){const r=$a(e,t,i,!0);Es(()=>{Fu(i[e],r)},n)}function $a(t,e,n=Vt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ji();const a=wo(n),l=ri(e,n,t,o);return a(),Yi(),l});return i?r.unshift(s):r.push(s),s}}const Ti=t=>(e,n=Vt)=>{(!ao||t==="sp")&&$a(t,(...i)=>e(...i),n)},Rm=Ti("bm"),ys=Ti("m"),Y0=Ti("bu"),K0=Ti("u"),Z0=Ti("bum"),Es=Ti("um"),J0=Ti("sp"),Q0=Ti("rtg"),ev=Ti("rtc");function tv(t,e=Vt){$a("ec",t,e)}const Cm="components";function yr(t,e){return Lm(Cm,t,!0,e)||t}const Pm=Symbol.for("v-ndc");function nv(t){return Lt(t)?Lm(Cm,t,!1)||t:t||Pm}function Lm(t,e,n=!0,i=!1){const r=cn||Vt;if(r){const s=r.type;{const a=Wv(s,!1);if(a&&(a===e||a===Pn(e)||a===Va(Pn(e))))return s}const o=Kf(r[t]||s[t],e)||Kf(r.appContext[t],e);return!o&&i?s:o}}function Kf(t,e){return t&&(t[e]||t[Pn(e)]||t[Va(Pn(e))])}function iv(t,e,n,i){let r;const s=n,o=Xe(t);if(o||Lt(t)){const a=o&&zi(t);let l=!1;a&&(l=!Rn(t),t=Wa(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Yt(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(At(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Sc=t=>t?Jm(t)?ja(t):Sc(t.parent):null,Ks=Jt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sc(t.parent),$root:t=>Sc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dm(t),$forceUpdate:t=>t.f||(t.f=()=>{Zu(t.update)}),$nextTick:t=>t.n||(t.n=Ku.bind(t.proxy)),$watch:t=>Tv.bind(t)}),vl=(t,e)=>t!==vt&&!t.__isScriptSetup&&ht(t,e),rv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(vl(i,e))return o[e]=1,i[e];if(r!==vt&&ht(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ht(c,e))return o[e]=3,s[e];if(n!==vt&&ht(n,e))return o[e]=4,n[e];yc&&(o[e]=0)}}const u=Ks[e];let f,d;if(u)return e==="$attrs"&&jt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==vt&&ht(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return vl(r,e)?(r[e]=n,!0):i!==vt&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==vt&&ht(t,o)||vl(e,o)||(a=s[0])&&ht(a,o)||ht(i,o)||ht(Ks,o)||ht(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zf(t){return Xe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function sv(t){const e=Dm(t),n=t.proxy,i=t.ctx;yc=!1,e.beforeCreate&&Jf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:E,unmounted:x,render:P,renderTracked:I,renderTriggered:R,errorCaptured:O,serverPrefetch:w,expose:T,inheritAttrs:F,components:Y,directives:q,filters:ae}=e;if(c&&ov(c,i,null),o)for(const Z in o){const X=o[Z];je(X)&&(i[Z]=X.bind(n))}if(r){const Z=r.call(n,n);At(Z)&&(t.data=Mo(Z))}if(yc=!0,s)for(const Z in s){const X=s[Z],me=je(X)?X.bind(n,n):je(X.get)?X.get.bind(n,n):ni,Se=!je(X)&&je(X.set)?X.set.bind(n):ni,Re=Ut({get:me,set:Se});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Be=>Re.value=Be})}if(a)for(const Z in a)Im(a[Z],i,n,Z);if(l){const Z=je(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(X=>{ha(X,Z[X])})}u&&Jf(u,t,"c");function te(Z,X){Xe(X)?X.forEach(me=>Z(me.bind(n))):X&&Z(X.bind(n))}if(te(Rm,f),te(ys,d),te(Y0,p),te(K0,_),te($0,v),te(q0,m),te(tv,O),te(ev,I),te(Q0,R),te(Z0,S),te(Es,x),te(J0,w),Xe(T))if(T.length){const Z=t.exposed||(t.exposed={});T.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:me=>n[X]=me})})}else t.exposed||(t.exposed={});P&&t.render===ni&&(t.render=P),F!=null&&(t.inheritAttrs=F),Y&&(t.components=Y),q&&(t.directives=q),w&&bm(t)}function ov(t,e,n=ni){Xe(t)&&(t=Ec(t));for(const i in t){const r=t[i];let s;At(r)?"default"in r?s=Hn(r.from||i,r.default,!0):s=Hn(r.from||i):s=Hn(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Jf(t,e,n){ri(Xe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Im(t,e,n,i){let r=i.includes(".")?$m(n,i):()=>n[i];if(Lt(t)){const s=e[t];je(s)&&zn(r,s)}else if(je(t))zn(r,t.bind(n));else if(At(t))if(Xe(t))t.forEach(s=>Im(s,e,n,i));else{const s=je(t.handler)?t.handler.bind(n):e[t.handler];je(s)&&zn(r,s,t)}}function Dm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>La(l,c,o,!0)),La(l,e,o)),At(e)&&s.set(e,l),l}function La(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&La(t,s,n,!0),r&&r.forEach(o=>La(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=av[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const av={data:Qf,props:eh,emits:eh,methods:Gs,computed:Gs,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Gs,directives:Gs,watch:cv,provide:Qf,inject:lv};function Qf(t,e){return e?t?function(){return Jt(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function lv(t,e){return Gs(Ec(t),Ec(e))}function Ec(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?Jt(Object.create(null),t,e):e}function eh(t,e){return t?Xe(t)&&Xe(e)?[...new Set([...t,...e])]:Jt(Object.create(null),Zf(t),Zf(e??{})):e}function cv(t,e){if(!t)return e;if(!e)return t;const n=Jt(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function Um(){return{app:null,config:{isNativeTag:t0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uv=0;function fv(t,e){return function(i,r=null){je(i)||(i=Jt({},i)),r!=null&&!At(r)&&(r=null);const s=Um(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:uv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$v,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...f)):je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||rt(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ja(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ri(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Er;Er=c;try{return u()}finally{Er=f}}};return c}}let Er=null;function ha(t,e){if(Vt){let n=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===n&&(n=Vt.provides=Object.create(i)),n[t]=e}}function Hn(t,e,n=!1){const i=Vt||cn;if(i||Er){const r=Er?Er._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function hv(){return!!(Vt||cn||Er)}const Nm={},Om=()=>Object.create(Nm),Fm=t=>Object.getPrototypeOf(t)===Nm;function dv(t,e,n,i=!1){const r={},s=Om();t.propsDefaults=Object.create(null),Bm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:mm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function pv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ot(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(qa(t.emitsOptions,d))continue;const p=e[d];if(l)if(ht(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=Pn(d);r[_]=Mc(l,a,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Bm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ht(e,f)&&((u=Cr(f))===f||!ht(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Mc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ht(e,f))&&(delete s[f],c=!0)}c&&_i(t.attrs,"set","")}function Bm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;r&&ht(r,u=Pn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:qa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ot(n),c=a||vt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Mc(r,l,f,c[f],t,!ht(c,f))}}return o}function Mc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=wo(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Cr(n))&&(i=!0))}return i}const mv=new WeakMap;function km(t,e,n=!1){const i=n?mv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!je(t)){const u=f=>{l=!0;const[d,p]=km(f,e,!0);Jt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return At(t)&&i.set(t,ts),ts;if(Xe(s))for(let u=0;u<s.length;u++){const f=Pn(s[u]);th(f)&&(o[f]=vt)}else if(s)for(const u in s){const f=Pn(u);if(th(f)){const d=s[u],p=o[f]=Xe(d)||je(d)?{type:d}:Jt({},d),_=p.type;let v=!1,m=!0;if(Xe(_))for(let h=0;h<_.length;++h){const S=_[h],E=je(S)&&S.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=je(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||ht(p,"default"))&&a.push(f)}}const c=[o,a];return At(t)&&i.set(t,c),c}function th(t){return t[0]!=="$"&&!$s(t)}const Hm=t=>t[0]==="_"||t==="$stable",Qu=t=>Xe(t)?t.map(Zn):[Zn(t)],gv=(t,e,n)=>{if(e._n)return e;const i=Ca((...r)=>Qu(e(...r)),n);return i._c=!1,i},zm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hm(r))continue;const s=t[r];if(je(s))e[r]=gv(r,s,i);else if(s!=null){const o=Qu(s);e[r]=()=>o}}},Vm=(t,e)=>{const n=Qu(e);t.slots.default=()=>n},Gm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},_v=(t,e,n)=>{const i=t.slots=Om();if(t.vnode.shapeFlag&32){const r=e._;r?(Gm(i,e,n),n&&Yp(i,"_",r,!0)):zm(e,i)}else e&&Vm(t,e)},vv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Gm(r,e,n):(s=!e.$stable,zm(e,r)),o=e}else e&&(Vm(t,e),o={default:1});if(s)for(const a in r)!Hm(a)&&o[a]==null&&delete r[a]},vn=Iv;function xv(t){return Sv(t)}function Sv(t,e){const n=Ga();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ni,insertStaticContent:_}=t,v=(D,U,y,ne=null,K=null,Q=null,b=void 0,C=null,N=!!U.dynamicChildren)=>{if(D===U)return;D&&!Is(D,U)&&(ne=H(D),Be(D,K,Q,!0),D=null),U.patchFlag===-2&&(N=!1,U.dynamicChildren=null);const{type:k,ref:ge,shapeFlag:M}=U;switch(k){case To:m(D,U,y,ne);break;case Tr:h(D,U,y,ne);break;case Sl:D==null&&S(U,y,ne,b);break;case an:Y(D,U,y,ne,K,Q,b,C,N);break;default:M&1?P(D,U,y,ne,K,Q,b,C,N):M&6?q(D,U,y,ne,K,Q,b,C,N):(M&64||M&128)&&k.process(D,U,y,ne,K,Q,b,C,N,ce)}ge!=null&&K&&Pa(ge,D&&D.ref,Q,U||D,!U)},m=(D,U,y,ne)=>{if(D==null)i(U.el=a(U.children),y,ne);else{const K=U.el=D.el;U.children!==D.children&&c(K,U.children)}},h=(D,U,y,ne)=>{D==null?i(U.el=l(U.children||""),y,ne):U.el=D.el},S=(D,U,y,ne)=>{[D.el,D.anchor]=_(D.children,U,y,ne,D.el,D.anchor)},E=({el:D,anchor:U},y,ne)=>{let K;for(;D&&D!==U;)K=d(D),i(D,y,ne),D=K;i(U,y,ne)},x=({el:D,anchor:U})=>{let y;for(;D&&D!==U;)y=d(D),r(D),D=y;r(U)},P=(D,U,y,ne,K,Q,b,C,N)=>{U.type==="svg"?b="svg":U.type==="math"&&(b="mathml"),D==null?I(U,y,ne,K,Q,b,C,N):w(D,U,K,Q,b,C,N)},I=(D,U,y,ne,K,Q,b,C)=>{let N,k;const{props:ge,shapeFlag:M,transition:g,dirs:L}=D;if(N=D.el=o(D.type,Q,ge&&ge.is,ge),M&8?u(N,D.children):M&16&&O(D.children,N,null,ne,K,xl(D,Q),b,C),L&&ir(D,null,ne,"created"),R(N,D,D.scopeId,b,ne),ge){for(const j in ge)j!=="value"&&!$s(j)&&s(N,j,null,ge[j],Q,ne);"value"in ge&&s(N,"value",null,ge.value,Q),(k=ge.onVnodeBeforeMount)&&qn(k,ne,D)}L&&ir(D,null,ne,"beforeMount");const z=yv(K,g);z&&g.beforeEnter(N),i(N,U,y),((k=ge&&ge.onVnodeMounted)||z||L)&&vn(()=>{k&&qn(k,ne,D),z&&g.enter(N),L&&ir(D,null,ne,"mounted")},K)},R=(D,U,y,ne,K)=>{if(y&&p(D,y),ne)for(let Q=0;Q<ne.length;Q++)p(D,ne[Q]);if(K){let Q=K.subTree;if(U===Q||jm(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const b=K.vnode;R(D,b,b.scopeId,b.slotScopeIds,K.parent)}}},O=(D,U,y,ne,K,Q,b,C,N=0)=>{for(let k=N;k<D.length;k++){const ge=D[k]=C?Oi(D[k]):Zn(D[k]);v(null,ge,U,y,ne,K,Q,b,C)}},w=(D,U,y,ne,K,Q,b)=>{const C=U.el=D.el;let{patchFlag:N,dynamicChildren:k,dirs:ge}=U;N|=D.patchFlag&16;const M=D.props||vt,g=U.props||vt;let L;if(y&&rr(y,!1),(L=g.onVnodeBeforeUpdate)&&qn(L,y,U,D),ge&&ir(U,D,y,"beforeUpdate"),y&&rr(y,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(C,""),k?T(D.dynamicChildren,k,C,y,ne,xl(U,K),Q):b||X(D,U,C,null,y,ne,xl(U,K),Q,!1),N>0){if(N&16)F(C,M,g,y,K);else if(N&2&&M.class!==g.class&&s(C,"class",null,g.class,K),N&4&&s(C,"style",M.style,g.style,K),N&8){const z=U.dynamicProps;for(let j=0;j<z.length;j++){const $=z[j],Ee=M[$],de=g[$];(de!==Ee||$==="value")&&s(C,$,Ee,de,K,y)}}N&1&&D.children!==U.children&&u(C,U.children)}else!b&&k==null&&F(C,M,g,y,K);((L=g.onVnodeUpdated)||ge)&&vn(()=>{L&&qn(L,y,U,D),ge&&ir(U,D,y,"updated")},ne)},T=(D,U,y,ne,K,Q,b)=>{for(let C=0;C<U.length;C++){const N=D[C],k=U[C],ge=N.el&&(N.type===an||!Is(N,k)||N.shapeFlag&70)?f(N.el):y;v(N,k,ge,null,ne,K,Q,b,!0)}},F=(D,U,y,ne,K)=>{if(U!==y){if(U!==vt)for(const Q in U)!$s(Q)&&!(Q in y)&&s(D,Q,U[Q],null,K,ne);for(const Q in y){if($s(Q))continue;const b=y[Q],C=U[Q];b!==C&&Q!=="value"&&s(D,Q,C,b,K,ne)}"value"in y&&s(D,"value",U.value,y.value,K)}},Y=(D,U,y,ne,K,Q,b,C,N)=>{const k=U.el=D?D.el:a(""),ge=U.anchor=D?D.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:L}=U;L&&(C=C?C.concat(L):L),D==null?(i(k,y,ne),i(ge,y,ne),O(U.children||[],y,ge,K,Q,b,C,N)):M>0&&M&64&&g&&D.dynamicChildren?(T(D.dynamicChildren,g,y,K,Q,b,C),(U.key!=null||K&&U===K.subTree)&&Wm(D,U,!0)):X(D,U,y,ge,K,Q,b,C,N)},q=(D,U,y,ne,K,Q,b,C,N)=>{U.slotScopeIds=C,D==null?U.shapeFlag&512?K.ctx.activate(U,y,ne,b,N):ae(U,y,ne,K,Q,b,N):le(D,U,N)},ae=(D,U,y,ne,K,Q,b)=>{const C=D.component=kv(D,ne,K);if(wm(D)&&(C.ctx.renderer=ce),Hv(C,!1,b),C.asyncDep){if(K&&K.registerDep(C,te,b),!D.el){const N=C.subTree=rt(Tr);h(null,N,U,y)}}else te(C,D,U,y,K,Q,b)},le=(D,U,y)=>{const ne=U.component=D.component;if(Pv(D,U,y))if(ne.asyncDep&&!ne.asyncResolved){Z(ne,U,y);return}else ne.next=U,ne.update();else U.el=D.el,ne.vnode=U},te=(D,U,y,ne,K,Q,b)=>{const C=()=>{if(D.isMounted){let{next:M,bu:g,u:L,parent:z,vnode:j}=D;{const Ce=Xm(D);if(Ce){M&&(M.el=j.el,Z(D,M,b)),Ce.asyncDep.then(()=>{D.isUnmounted||C()});return}}let $=M,Ee;rr(D,!1),M?(M.el=j.el,Z(D,M,b)):M=j,g&&fa(g),(Ee=M.props&&M.props.onVnodeBeforeUpdate)&&qn(Ee,z,M,j),rr(D,!0);const de=ih(D),Te=D.subTree;D.subTree=de,v(Te,de,f(Te.el),H(Te),D,K,Q),M.el=de.el,$===null&&Lv(D,de.el),L&&vn(L,K),(Ee=M.props&&M.props.onVnodeUpdated)&&vn(()=>qn(Ee,z,M,j),K)}else{let M;const{el:g,props:L}=U,{bm:z,m:j,parent:$,root:Ee,type:de}=D,Te=Ys(U);rr(D,!1),z&&fa(z),!Te&&(M=L&&L.onVnodeBeforeMount)&&qn(M,$,U),rr(D,!0);{Ee.ce&&Ee.ce._injectChildStyle(de);const Ce=D.subTree=ih(D);v(null,Ce,y,ne,D,K,Q),U.el=Ce.el}if(j&&vn(j,K),!Te&&(M=L&&L.onVnodeMounted)){const Ce=U;vn(()=>qn(M,$,Ce),K)}(U.shapeFlag&256||$&&Ys($.vnode)&&$.vnode.shapeFlag&256)&&D.a&&vn(D.a,K),D.isMounted=!0,U=y=ne=null}};D.scope.on();const N=D.effect=new tm(C);D.scope.off();const k=D.update=N.run.bind(N),ge=D.job=N.runIfDirty.bind(N);ge.i=D,ge.id=D.uid,N.scheduler=()=>Zu(ge),rr(D,!0),k()},Z=(D,U,y)=>{U.component=D;const ne=D.vnode.props;D.vnode=U,D.next=null,pv(D,U.props,ne,y),vv(D,U.children,y),ji(),jf(D),Yi()},X=(D,U,y,ne,K,Q,b,C,N=!1)=>{const k=D&&D.children,ge=D?D.shapeFlag:0,M=U.children,{patchFlag:g,shapeFlag:L}=U;if(g>0){if(g&128){Se(k,M,y,ne,K,Q,b,C,N);return}else if(g&256){me(k,M,y,ne,K,Q,b,C,N);return}}L&8?(ge&16&&be(k,K,Q),M!==k&&u(y,M)):ge&16?L&16?Se(k,M,y,ne,K,Q,b,C,N):be(k,K,Q,!0):(ge&8&&u(y,""),L&16&&O(M,y,ne,K,Q,b,C,N))},me=(D,U,y,ne,K,Q,b,C,N)=>{D=D||ts,U=U||ts;const k=D.length,ge=U.length,M=Math.min(k,ge);let g;for(g=0;g<M;g++){const L=U[g]=N?Oi(U[g]):Zn(U[g]);v(D[g],L,y,null,K,Q,b,C,N)}k>ge?be(D,K,Q,!0,!1,M):O(U,y,ne,K,Q,b,C,N,M)},Se=(D,U,y,ne,K,Q,b,C,N)=>{let k=0;const ge=U.length;let M=D.length-1,g=ge-1;for(;k<=M&&k<=g;){const L=D[k],z=U[k]=N?Oi(U[k]):Zn(U[k]);if(Is(L,z))v(L,z,y,null,K,Q,b,C,N);else break;k++}for(;k<=M&&k<=g;){const L=D[M],z=U[g]=N?Oi(U[g]):Zn(U[g]);if(Is(L,z))v(L,z,y,null,K,Q,b,C,N);else break;M--,g--}if(k>M){if(k<=g){const L=g+1,z=L<ge?U[L].el:ne;for(;k<=g;)v(null,U[k]=N?Oi(U[k]):Zn(U[k]),y,z,K,Q,b,C,N),k++}}else if(k>g)for(;k<=M;)Be(D[k],K,Q,!0),k++;else{const L=k,z=k,j=new Map;for(k=z;k<=g;k++){const Ue=U[k]=N?Oi(U[k]):Zn(U[k]);Ue.key!=null&&j.set(Ue.key,k)}let $,Ee=0;const de=g-z+1;let Te=!1,Ce=0;const he=new Array(de);for(k=0;k<de;k++)he[k]=0;for(k=L;k<=M;k++){const Ue=D[k];if(Ee>=de){Be(Ue,K,Q,!0);continue}let Ne;if(Ue.key!=null)Ne=j.get(Ue.key);else for($=z;$<=g;$++)if(he[$-z]===0&&Is(Ue,U[$])){Ne=$;break}Ne===void 0?Be(Ue,K,Q,!0):(he[Ne-z]=k+1,Ne>=Ce?Ce=Ne:Te=!0,v(Ue,U[Ne],y,null,K,Q,b,C,N),Ee++)}const Pe=Te?Ev(he):ts;for($=Pe.length-1,k=de-1;k>=0;k--){const Ue=z+k,Ne=U[Ue],ye=Ue+1<ge?U[Ue+1].el:ne;he[k]===0?v(null,Ne,y,ye,K,Q,b,C,N):Te&&($<0||k!==Pe[$]?Re(Ne,y,ye,2):$--)}}},Re=(D,U,y,ne,K=null)=>{const{el:Q,type:b,transition:C,children:N,shapeFlag:k}=D;if(k&6){Re(D.component.subTree,U,y,ne);return}if(k&128){D.suspense.move(U,y,ne);return}if(k&64){b.move(D,U,y,ce);return}if(b===an){i(Q,U,y);for(let M=0;M<N.length;M++)Re(N[M],U,y,ne);i(D.anchor,U,y);return}if(b===Sl){E(D,U,y);return}if(ne!==2&&k&1&&C)if(ne===0)C.beforeEnter(Q),i(Q,U,y),vn(()=>C.enter(Q),K);else{const{leave:M,delayLeave:g,afterLeave:L}=C,z=()=>i(Q,U,y),j=()=>{M(Q,()=>{z(),L&&L()})};g?g(Q,z,j):j()}else i(Q,U,y)},Be=(D,U,y,ne=!1,K=!1)=>{const{type:Q,props:b,ref:C,children:N,dynamicChildren:k,shapeFlag:ge,patchFlag:M,dirs:g,cacheIndex:L}=D;if(M===-2&&(K=!1),C!=null&&Pa(C,null,y,D,!0),L!=null&&(U.renderCache[L]=void 0),ge&256){U.ctx.deactivate(D);return}const z=ge&1&&g,j=!Ys(D);let $;if(j&&($=b&&b.onVnodeBeforeUnmount)&&qn($,U,D),ge&6)xe(D.component,y,ne);else{if(ge&128){D.suspense.unmount(y,ne);return}z&&ir(D,null,U,"beforeUnmount"),ge&64?D.type.remove(D,U,y,ce,ne):k&&!k.hasOnce&&(Q!==an||M>0&&M&64)?be(k,U,y,!1,!0):(Q===an&&M&384||!K&&ge&16)&&be(N,U,y),ne&&Je(D)}(j&&($=b&&b.onVnodeUnmounted)||z)&&vn(()=>{$&&qn($,U,D),z&&ir(D,null,U,"unmounted")},y)},Je=D=>{const{type:U,el:y,anchor:ne,transition:K}=D;if(U===an){oe(y,ne);return}if(U===Sl){x(D);return}const Q=()=>{r(y),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(D.shapeFlag&1&&K&&!K.persisted){const{leave:b,delayLeave:C}=K,N=()=>b(y,Q);C?C(D.el,Q,N):N()}else Q()},oe=(D,U)=>{let y;for(;D!==U;)y=d(D),r(D),D=y;r(U)},xe=(D,U,y)=>{const{bum:ne,scope:K,job:Q,subTree:b,um:C,m:N,a:k}=D;nh(N),nh(k),ne&&fa(ne),K.stop(),Q&&(Q.flags|=8,Be(b,D,U,y)),C&&vn(C,U),vn(()=>{D.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},be=(D,U,y,ne=!1,K=!1,Q=0)=>{for(let b=Q;b<D.length;b++)Be(D[b],U,y,ne,K)},H=D=>{if(D.shapeFlag&6)return H(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const U=d(D.anchor||D.el),y=U&&U[W0];return y?d(y):U};let se=!1;const ue=(D,U,y)=>{D==null?U._vnode&&Be(U._vnode,null,null,!0):v(U._vnode||null,D,U,null,null,null,y),U._vnode=D,se||(se=!0,jf(),ym(),se=!1)},ce={p:v,um:Be,m:Re,r:Je,mt:ae,mc:O,pc:X,pbc:T,n:H,o:t};return{render:ue,hydrate:void 0,createApp:fv(ue)}}function xl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Wm(t,e,n=!1){const i=t.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Oi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Wm(o,a)),a.type===To&&(a.el=o.el)}}function Ev(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Xm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xm(e)}function nh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Mv=Symbol.for("v-scx"),bv=()=>Hn(Mv);function ef(t,e){return tf(t,null,e)}function zn(t,e,n){return tf(t,e,n)}function tf(t,e,n=vt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Jt({},n),l=e&&i||!e&&s!=="post";let c;if(ao){if(s==="sync"){const p=bv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ni,p.resume=ni,p.pause=ni,p}}const u=Vt;a.call=(p,_,v)=>ri(p,u,_,v);let f=!1;s==="post"?a.scheduler=p=>{vn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Zu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=H0(t,e,a);return ao&&(c?c.push(d):l&&d()),d}function Tv(t,e,n){const i=this.proxy,r=Lt(t)?t.includes(".")?$m(i,t):()=>i[t]:t.bind(i,i);let s;je(e)?s=e:(s=e.handler,n=e);const o=wo(this),a=tf(r,s.bind(i),n);return o(),a}function $m(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const wv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pn(e)}Modifiers`]||t[`${Cr(e)}Modifiers`];function Av(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let r=n;const s=e.startsWith("update:"),o=s&&wv(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Lt(u)?u.trim():u)),o.number&&(r=n.map(mc)));let a,l=i[a=dl(e)]||i[a=dl(Pn(e))];!l&&s&&(l=i[a=dl(Cr(e))]),l&&ri(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ri(c,t,6,r)}}function qm(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=qm(c,e,!0);u&&(a=!0,Jt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(At(t)&&i.set(t,null),null):(Xe(s)?s.forEach(l=>o[l]=null):Jt(o,s),At(t)&&i.set(t,o),o)}function qa(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,Cr(e))||ht(t,e))}function ih(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:v}=t,m=Ra(t);let h,S;try{if(n.shapeFlag&4){const x=r||i,P=x;h=Zn(c.call(P,x,u,f,p,d,_)),S=a}else{const x=e;h=Zn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),S=e.props?a:Rv(a)}}catch(x){Zs.length=0,Xa(x,t,1),h=rt(Tr)}let E=h;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:P}=E;x.length&&P&7&&(s&&x.some(Ou)&&(S=Cv(S,s)),E=as(E,S,!1,!0))}return n.dirs&&(E=as(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ju(E,n.transition),h=E,Ra(m),h}const Rv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},Cv=(t,e)=>{const n={};for(const i in t)(!Ou(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Pv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?rh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!qa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?rh(i,o,c):!0:!!o;return!1}function rh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!qa(n,s))return!0}return!1}function Lv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const jm=t=>t.__isSuspense;function Iv(t,e){e&&e.pendingBranch?Xe(t)?e.effects.push(...t):e.effects.push(t):G0(t)}const an=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),Tr=Symbol.for("v-cmt"),Sl=Symbol.for("v-stc"),Zs=[];let xn=null;function gt(t=!1){Zs.push(xn=t?null:[])}function Dv(){Zs.pop(),xn=Zs[Zs.length-1]||null}let oo=1;function sh(t,e=!1){oo+=t,t<0&&xn&&e&&(xn.hasOnce=!0)}function Ym(t){return t.dynamicChildren=oo>0?xn||ts:null,Dv(),oo>0&&xn&&xn.push(t),t}function yt(t,e,n,i,r,s){return Ym(We(t,e,n,i,r,s,!0))}function Km(t,e,n,i,r){return Ym(rt(t,e,n,i,r,!0))}function Ia(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const Zm=({key:t})=>t??null,da=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||Pt(t)||je(t)?{i:cn,r:t,k:e,f:!!n}:t:null);function We(t,e=null,n=null,i=0,r=null,s=t===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zm(e),ref:e&&da(e),scopeId:Mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:cn};return a?(nf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),oo>0&&!o&&xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xn.push(l),l}const rt=Uv;function Uv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Pm)&&(t=Tr),Ia(t)){const a=as(t,e,!0);return n&&nf(a,n),oo>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag=-2,a}if(Xv(t)&&(t=t.__vccOpts),e){e=Nv(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=Wi(a)),At(l)&&(qu(l)&&!Xe(l)&&(l=Jt({},l)),e.style=ku(l))}const o=Lt(t)?1:jm(t)?128:X0(t)?64:At(t)?4:je(t)?2:0;return We(t,e,n,i,r,o,s,!0)}function Nv(t){return t?qu(t)||Fm(t)?Jt({},t):t:null}function as(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Ov(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zm(c),ref:e&&e.ref?n&&s?Xe(s)?s.concat(da(e)):[s,da(e)]:da(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&as(t.ssContent),ssFallback:t.ssFallback&&as(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ju(u,l.clone(u)),u}function Ws(t=" ",e=0){return rt(To,null,t,e)}function Si(t="",e=!1){return e?(gt(),Km(Tr,null,t)):rt(Tr,null,t)}function Zn(t){return t==null||typeof t=="boolean"?rt(Tr):Xe(t)?rt(an,null,t.slice()):Ia(t)?Oi(t):rt(To,null,String(t))}function Oi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:as(t)}function nf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Xe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Fm(e)?e._ctx=cn:r===3&&cn&&(cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:cn},n=32):(e=String(e),i&64?(n=16,e=[Ws(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ov(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wi([e.class,i.class]));else if(r==="style")e.style=ku([e.style,i.style]);else if(ka(r)){const s=e[r],o=i[r];o&&s!==o&&!(Xe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function qn(t,e,n,i=null){ri(t,e,7,[n,i])}const Fv=Um();let Bv=0;function kv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Fv,s={uid:Bv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(i,r),emitsOptions:qm(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Av.bind(null,s),t.ce&&t.ce(s),s}let Vt=null;const ls=()=>Vt||cn;let Da,bc;{const t=Ga(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Da=e("__VUE_INSTANCE_SETTERS__",n=>Vt=n),bc=e("__VUE_SSR_SETTERS__",n=>ao=n)}const wo=t=>{const e=Vt;return Da(t),t.scope.on(),()=>{t.scope.off(),Da(e)}},oh=()=>{Vt&&Vt.scope.off(),Da(null)};function Jm(t){return t.vnode.shapeFlag&4}let ao=!1;function Hv(t,e=!1,n=!1){e&&bc(e);const{props:i,children:r}=t.vnode,s=Jm(t);dv(t,i,s,e),_v(t,r,n);const o=s?zv(t,e):void 0;return e&&bc(!1),o}function zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,rv);const{setup:i}=n;if(i){ji();const r=t.setupContext=i.length>1?Gv(t):null,s=wo(t),o=bo(i,t,0,[t.props,r]),a=$p(o);if(Yi(),s(),(a||t.sp)&&!Ys(t)&&bm(t),a){if(o.then(oh,oh),e)return o.then(l=>{ah(t,l)}).catch(l=>{Xa(l,t,0)});t.asyncDep=o}else ah(t,o)}else Qm(t)}function ah(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:At(e)&&(t.setupState=vm(e)),Qm(t)}function Qm(t,e,n){const i=t.type;t.render||(t.render=i.render||ni);{const r=wo(t);ji();try{sv(t)}finally{Yi(),r()}}}const Vv={get(t,e){return jt(t,"get",""),t[e]}};function Gv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vv),slots:t.slots,emit:t.emit,expose:e}}function ja(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vm(ju(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}})):t.proxy}function Wv(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function Xv(t){return je(t)&&"__vccOpts"in t}const Ut=(t,e)=>B0(t,e,ao);function Ya(t,e,n){const i=arguments.length;return i===2?At(e)&&!Xe(e)?Ia(e)?rt(t,null,[e]):rt(t,e):rt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ia(n)&&(n=[n]),rt(t,e,n))}const $v="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const lh=typeof window<"u"&&window.trustedTypes;if(lh)try{Tc=lh.createPolicy("vue",{createHTML:t=>t})}catch{}const eg=Tc?t=>Tc.createHTML(t):t=>t,qv="http://www.w3.org/2000/svg",jv="http://www.w3.org/1998/Math/MathML",gi=typeof document<"u"?document:null,ch=gi&&gi.createElement("template"),Yv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?gi.createElementNS(qv,t):e==="mathml"?gi.createElementNS(jv,t):n?gi.createElement(t,{is:n}):gi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>gi.createTextNode(t),createComment:t=>gi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{ch.innerHTML=eg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=ch.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kv=Symbol("_vtc");function Zv(t,e,n){const i=t[Kv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uh=Symbol("_vod"),Jv=Symbol("_vsh"),Qv=Symbol(""),ex=/(^|;)\s*display\s*:/;function tx(t,e,n){const i=t.style,r=Lt(n);let s=!1;if(n&&!r){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&pa(i,a,"")}else for(const o in e)n[o]==null&&pa(i,o,"");for(const o in n)o==="display"&&(s=!0),pa(i,o,n[o])}else if(r){if(e!==n){const o=i[Qv];o&&(n+=";"+o),i.cssText=n,s=ex.test(n)}}else e&&t.removeAttribute("style");uh in t&&(t[uh]=s?i.display:"",t[Jv]&&(i.display="none"))}const fh=/\s*!important$/;function pa(t,e,n){if(Xe(n))n.forEach(i=>pa(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=nx(t,e);fh.test(n)?t.setProperty(Cr(i),n.replace(fh,""),"important"):t[i]=n}}const hh=["Webkit","Moz","ms"],yl={};function nx(t,e){const n=yl[e];if(n)return n;let i=Pn(e);if(i!=="filter"&&i in t)return yl[e]=i;i=Va(i);for(let r=0;r<hh.length;r++){const s=hh[r]+i;if(s in t)return yl[e]=s}return e}const dh="http://www.w3.org/1999/xlink";function ph(t,e,n,i,r,s=f0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dh,e.slice(6,e.length)):t.setAttributeNS(dh,e,n):n==null||s&&!Kp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":qi(n)?String(n):n)}function mh(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?eg(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Kr(t,e,n,i){t.addEventListener(e,n,i)}function ix(t,e,n,i){t.removeEventListener(e,n,i)}const gh=Symbol("_vei");function rx(t,e,n,i,r=null){const s=t[gh]||(t[gh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=sx(e);if(i){const c=s[e]=lx(i,r);Kr(t,a,c,l)}else o&&(ix(t,a,o,l),s[e]=void 0)}}const _h=/(?:Once|Passive|Capture)$/;function sx(t){let e;if(_h.test(t)){e={};let i;for(;i=t.match(_h);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let El=0;const ox=Promise.resolve(),ax=()=>El||(ox.then(()=>El=0),El=Date.now());function lx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ri(cx(i,n.value),e,5,[i])};return n.value=t,n.attached=ax(),n}function cx(t,e){if(Xe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const vh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ux=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Zv(t,i,o):e==="style"?tx(t,n,i):ka(e)?Ou(e)||rx(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fx(t,e,i,o))?(mh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ph(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?mh(t,Pn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ph(t,e,i,o))};function fx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&vh(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vh(e)&&Lt(n)?!1:e in t}const xh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Xe(e)?n=>fa(e,n):e};function hx(t){t.target.composing=!0}function Sh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ml=Symbol("_assign"),yh={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Ml]=xh(r);const s=i||r.props&&r.props.type==="number";Kr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=mc(a)),t[Ml](a)}),n&&Kr(t,"change",()=>{t.value=t.value.trim()}),e||(Kr(t,"compositionstart",hx),Kr(t,"compositionend",Sh),Kr(t,"change",Sh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Ml]=xh(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?mc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},dx=Jt({patchProp:ux},Yv);let Eh;function px(){return Eh||(Eh=xv(dx))}const mx=(...t)=>{const e=px().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=_x(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,gx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function gx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _x(t){return Lt(t)?document.querySelector(t):t}const vx=Xt({name:"a-hoverable",props:{isExternal:{type:Boolean,default:!1},to:{type:String,default:""},target:{type:String,default:"_self"},imgSrc:{type:String,default:""},shape:{type:String,default:"pill"},effect:{type:String,default:""},text:{type:String,default:""}}}),Xn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},xx={key:0,class:"relative w-50 h-50"},Sx=["src","alt"],yx={key:1,class:"font-size-16 capitalize"};function Ex(t,e,n,i,r,s){return gt(),Km(nv(t.isExternal?"a":"router-link"),{class:Wi(["flex row a-center h-50 user-select-none pointer",{"j-start":t.shape==="pill"},{"j-center":t.shape==="round"},t.effect]),to:t.isExternal?void 0:{name:t.to},href:t.isExternal?t.to:void 0,target:t.target},{default:Ca(()=>[t.imgSrc?(gt(),yt("div",xx,[We("img",{src:t.imgSrc,alt:t.to},null,8,Sx)])):Si("",!0),t.text?(gt(),yt("span",yx,Qn(t.text),1)):Si("",!0)]),_:1},8,["class","to","href","target"])}const tg=Xn(vx,[["render",Ex]]),Mx=Xt({name:"switch-button",props:{isActive:{type:Boolean,default:!1},change:{type:Function,default:()=>{}},imgSrcL:{type:String,default:""},imgSrcR:{type:String,default:""},textL:{type:String,default:""},textR:{type:String,default:""}}}),bx={key:0,class:"relative"},Tx=["src"],wx={key:1},Ax={key:0,class:"relative"},Rx=["src"],Cx={key:1};function Px(t,e,n,i,r,s){return gt(),yt("button",{class:"flex row a-center j-center border-none bg-none w-32 h-32 font-size-16 pointer user-select-none",onClick:e[0]||(e[0]=(...o)=>t.change&&t.change(...o))},[We("div",{class:Wi(["tr-100",{"w-full o-1":!t.isActive},{"w-0 o-0":t.isActive}])},[t.imgSrcL?(gt(),yt("div",bx,[We("img",{src:t.imgSrcL},null,8,Tx)])):Si("",!0),t.textL?(gt(),yt("span",wx,Qn(t.textL),1)):Si("",!0)],2),We("div",{class:Wi(["tr-100",{"w-full o-1":t.isActive},{"w-0 o-0":!t.isActive}])},[t.imgSrcR?(gt(),yt("div",Ax,[We("img",{src:t.imgSrcR},null,8,Rx)])):Si("",!0),t.textR?(gt(),yt("span",Cx,Qn(t.textR),1)):Si("",!0)],2)])}const ng=Xn(Mx,[["render",Px]]),Lx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z'/%3e%3cpath%20d='M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z'/%3e%3c/svg%3e",Ix="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",Dx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",Ux="data:image/svg+xml,%3csvg%20id='Layer_1'%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%3e%3cpath%20d='m4%206a2.982%202.982%200%200%201%20-2.122-.879l-1.544-1.374a1%201%200%200%201%201.332-1.494l1.585%201.414a1%201%200%200%200%201.456.04l3.604-3.431a1%201%200%200%201%201.378%201.448l-3.589%203.414a2.964%202.964%200%200%201%20-2.1.862zm20-2a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.589-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1.023%201.023%200%200%201%20-1.414%200l-1.59-1.585a1%201%200%200%200%20-1.414%201.414l1.585%201.585a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.585-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1%201%200%200%201%20-1.456-.04l-1.585-1.414a1%201%200%200%200%20-1.332%201.494l1.544%201.374a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1z'/%3e%3c/svg%3e",Nx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",Ox="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",Fx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",Bx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,20c-.552,0-1-.447-1-1,0-2.318,1.382-4.357,3.891-5.741,2.287-1.26,3.469-3.755,3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57,.147-4.952,1.307-1.363,1.144-2.144,2.82-2.144,4.597,0,.552-.448,1-1,1s-1-.448-1-1c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.289,13.441,.126c3.222,.565,5.866,3.21,6.432,6.432,.598,3.402-1.017,6.798-4.016,8.453-1.303,.718-2.857,1.993-2.857,3.989,0,.553-.448,1-1,1Zm-1.5,2.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z'/%3e%3c/svg%3e",kx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",Hx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z'/%3e%3cpath%20d='M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z'/%3e%3c/svg%3e",ig=Object.freeze(Object.defineProperty({__proto__:null,angleDoubleRight:Lx,crossSmall:Ix,home:Dx,list:Nx,listCheck:Ux,menuBurger:Ox,moonStars:Fx,question:Bx,sun:kx,user:Hx},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let rg;const Ka=t=>rg=t,sg=Symbol();function wc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Js||(Js={}));function zx(){const t=Hu(!0),e=t.run(()=>ln({}));let n=[],i=[];const r=ju({install(s){Ka(r),r._a=s,s.provide(sg,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const og=()=>{};function Mh(t,e,n,i=og){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&em()&&h0(r),r}function Dr(t,...e){t.slice().forEach(n=>{n(...e)})}const Vx=t=>t(),bh=Symbol(),bl=Symbol();function Ac(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];wc(r)&&wc(i)&&t.hasOwnProperty(n)&&!Pt(i)&&!zi(i)?t[n]=Ac(r,i):t[n]=i}return t}const Gx=Symbol();function Wx(t){return!wc(t)||!t.hasOwnProperty(Gx)}const{assign:Ui}=Object;function Xx(t){return!!(Pt(t)&&t.effect)}function $x(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=U0(n.state.value[t]);return Ui(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=ju(Ut(()=>{Ka(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=ag(t,c,e,n,i,!0),l}function ag(t,e,n={},i,r,s){let o;const a=Ui({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),ln({});let v;function m(O){let w;c=u=!1,typeof O=="function"?(O(i.state.value[t]),w={type:Js.patchFunction,storeId:t,events:p}):(Ac(i.state.value[t],O),w={type:Js.patchObject,payload:O,storeId:t,events:p});const T=v=Symbol();Ku().then(()=>{v===T&&(c=!0)}),u=!0,Dr(f,w,i.state.value[t])}const h=s?function(){const{state:w}=n,T=w?w():{};this.$patch(F=>{Ui(F,T)})}:og;function S(){o.stop(),f=[],d=[],i._s.delete(t)}const E=(O,w="")=>{if(bh in O)return O[bl]=w,O;const T=function(){Ka(i);const F=Array.from(arguments),Y=[],q=[];function ae(Z){Y.push(Z)}function le(Z){q.push(Z)}Dr(d,{args:F,name:T[bl],store:P,after:ae,onError:le});let te;try{te=O.apply(this&&this.$id===t?this:P,F)}catch(Z){throw Dr(q,Z),Z}return te instanceof Promise?te.then(Z=>(Dr(Y,Z),Z)).catch(Z=>(Dr(q,Z),Promise.reject(Z))):(Dr(Y,te),te)};return T[bh]=!0,T[bl]=w,T},x={_p:i,$id:t,$onAction:Mh.bind(null,d),$patch:m,$reset:h,$subscribe(O,w={}){const T=Mh(f,O,w.detached,()=>F()),F=o.run(()=>zn(()=>i.state.value[t],Y=>{(w.flush==="sync"?u:c)&&O({storeId:t,type:Js.direct,events:p},Y)},Ui({},l,w)));return T},$dispose:S},P=Mo(x);i._s.set(t,P);const R=(i._a&&i._a.runWithContext||Vx)(()=>i._e.run(()=>(o=Hu()).run(()=>e({action:E}))));for(const O in R){const w=R[O];if(Pt(w)&&!Xx(w)||zi(w))s||(_&&Wx(w)&&(Pt(w)?w.value=_[O]:Ac(w,_[O])),i.state.value[t][O]=w);else if(typeof w=="function"){const T=E(w,O);R[O]=T,a.actions[O]=w}}return Ui(P,R),Ui(ot(P),R),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:O=>{m(w=>{Ui(w,O)})}}),i._p.forEach(O=>{Ui(P,o.run(()=>O({store:P,app:i._a,pinia:i,options:a})))}),_&&s&&n.hydrate&&n.hydrate(P.$state,_),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function rf(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(o,a){const l=hv();return o=o||(l?Hn(sg,null):null),o&&Ka(o),o=rg,o._s.has(t)||(r?ag(t,e,i,o):$x(t,i,o)),o._s.get(t)}return s.$id=t,s}const qx=["light","dark"],Ao=rf("theme",()=>{const t=localStorage.getItem("theme"),e=ln(qx.includes(t)?t:"light");ef(()=>{localStorage.setItem("theme",e.value)});const n=Ut(()=>e.value==="dark");return{theme:e,isDark:n,changeTheme:()=>{switch(e.value){case"light":e.value="dark";break;case"dark":e.value="light";break}}}});/*!
  * shared v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Ua=typeof window<"u",Ki=(t,e=!1)=>e?Symbol.for(t):Symbol(t),jx=(t,e,n)=>Yx({l:t,k:e,s:n}),Yx=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Nt=t=>typeof t=="number"&&isFinite(t),Kx=t=>sf(t)==="[object Date]",cs=t=>sf(t)==="[object RegExp]",Za=t=>Qe(t)&&Object.keys(t).length===0,Ft=Object.assign,Zx=Object.create,St=(t=null)=>Zx(t);let Th;const gr=()=>Th||(Th=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:St());function wh(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Jx=Object.prototype.hasOwnProperty;function Fn(t,e){return Jx.call(t,e)}const Ot=Array.isArray,Tt=t=>typeof t=="function",Le=t=>typeof t=="string",lt=t=>typeof t=="boolean",ct=t=>t!==null&&typeof t=="object",Qx=t=>ct(t)&&Tt(t.then)&&Tt(t.catch),lg=Object.prototype.toString,sf=t=>lg.call(t),Qe=t=>sf(t)==="[object Object]",eS=t=>t==null?"":Ot(t)||Qe(t)&&t.toString===lg?JSON.stringify(t,null,2):String(t);function of(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function tS(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Bo=t=>!ct(t)||Ot(t);function ma(t,e){if(Bo(t)||Bo(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(ct(i[s])&&!ct(r[s])&&(r[s]=Array.isArray(i[s])?[]:St()),Bo(r[s])||Bo(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function nS(t,e,n){return{line:t,column:e,offset:n}}function Rc(t,e,n){return{start:t,end:e}}const mt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},iS=17;function Ja(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function rS(t){throw t}const li=" ",sS="\r",rn=`
`,oS="\u2028",aS="\u2029";function lS(t){const e=t;let n=0,i=1,r=1,s=0;const o=R=>e[R]===sS&&e[R+1]===rn,a=R=>e[R]===rn,l=R=>e[R]===aS,c=R=>e[R]===oS,u=R=>o(R)||a(R)||l(R)||c(R),f=()=>n,d=()=>i,p=()=>r,_=()=>s,v=R=>o(R)||l(R)||c(R)?rn:e[R],m=()=>v(n),h=()=>v(n+s);function S(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function E(){return o(n+s)&&s++,s++,e[n+s]}function x(){n=0,i=1,r=1,s=0}function P(R=0){s=R}function I(){const R=n+s;for(;R!==n;)S();s=0}return{index:f,line:d,column:p,peekOffset:_,charAt:v,currentChar:m,currentPeek:h,next:S,peek:E,reset:x,resetPeek:P,skipToPeek:I}}const wi=void 0,cS=".",Ah="'",uS="tokenizer";function fS(t,e={}){const n=e.location!==!1,i=lS(t),r=()=>i.index(),s=()=>nS(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(b,C,N,...k){const ge=c();if(C.column+=N,C.offset+=N,u){const M=n?Rc(ge.startLoc,C):null,g=Ja(b,M,{domain:uS,args:k});u(g)}}function d(b,C,N){b.endLoc=s(),b.currentType=C;const k={type:C};return n&&(k.loc=Rc(b.startLoc,b.endLoc)),N!=null&&(k.value=N),k}const p=b=>d(b,13);function _(b,C){return b.currentChar()===C?(b.next(),C):(f(mt.EXPECTED_TOKEN,s(),0,C),"")}function v(b){let C="";for(;b.currentPeek()===li||b.currentPeek()===rn;)C+=b.currentPeek(),b.peek();return C}function m(b){const C=v(b);return b.skipToPeek(),C}function h(b){if(b===wi)return!1;const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function S(b){if(b===wi)return!1;const C=b.charCodeAt(0);return C>=48&&C<=57}function E(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const k=h(b.currentPeek());return b.resetPeek(),k}function x(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const k=b.currentPeek()==="-"?b.peek():b.currentPeek(),ge=S(k);return b.resetPeek(),ge}function P(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const k=b.currentPeek()===Ah;return b.resetPeek(),k}function I(b,C){const{currentType:N}=C;if(N!==7)return!1;v(b);const k=b.currentPeek()===".";return b.resetPeek(),k}function R(b,C){const{currentType:N}=C;if(N!==8)return!1;v(b);const k=h(b.currentPeek());return b.resetPeek(),k}function O(b,C){const{currentType:N}=C;if(!(N===7||N===11))return!1;v(b);const k=b.currentPeek()===":";return b.resetPeek(),k}function w(b,C){const{currentType:N}=C;if(N!==9)return!1;const k=()=>{const M=b.currentPeek();return M==="{"?h(b.peek()):M==="@"||M==="|"||M===":"||M==="."||M===li||!M?!1:M===rn?(b.peek(),k()):F(b,!1)},ge=k();return b.resetPeek(),ge}function T(b){v(b);const C=b.currentPeek()==="|";return b.resetPeek(),C}function F(b,C=!0){const N=(ge=!1,M="")=>{const g=b.currentPeek();return g==="{"||g==="@"||!g?ge:g==="|"?!(M===li||M===rn):g===li?(b.peek(),N(!0,li)):g===rn?(b.peek(),N(!0,rn)):!0},k=N();return C&&b.resetPeek(),k}function Y(b,C){const N=b.currentChar();return N===wi?wi:C(N)?(b.next(),N):null}function q(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function ae(b){return Y(b,q)}function le(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function te(b){return Y(b,le)}function Z(b){const C=b.charCodeAt(0);return C>=48&&C<=57}function X(b){return Y(b,Z)}function me(b){const C=b.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function Se(b){return Y(b,me)}function Re(b){let C="",N="";for(;C=X(b);)N+=C;return N}function Be(b){let C="";for(;;){const N=b.currentChar();if(N==="{"||N==="}"||N==="@"||N==="|"||!N)break;if(N===li||N===rn)if(F(b))C+=N,b.next();else{if(T(b))break;C+=N,b.next()}else C+=N,b.next()}return C}function Je(b){m(b);let C="",N="";for(;C=te(b);)N+=C;return b.currentChar()===wi&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),N}function oe(b){m(b);let C="";return b.currentChar()==="-"?(b.next(),C+=`-${Re(b)}`):C+=Re(b),b.currentChar()===wi&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),C}function xe(b){return b!==Ah&&b!==rn}function be(b){m(b),_(b,"'");let C="",N="";for(;C=Y(b,xe);)C==="\\"?N+=H(b):N+=C;const k=b.currentChar();return k===rn||k===wi?(f(mt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),k===rn&&(b.next(),_(b,"'")),N):(_(b,"'"),N)}function H(b){const C=b.currentChar();switch(C){case"\\":case"'":return b.next(),`\\${C}`;case"u":return se(b,C,4);case"U":return se(b,C,6);default:return f(mt.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function se(b,C,N){_(b,C);let k="";for(let ge=0;ge<N;ge++){const M=Se(b);if(!M){f(mt.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${k}${b.currentChar()}`);break}k+=M}return`\\${C}${k}`}function ue(b){return b!=="{"&&b!=="}"&&b!==li&&b!==rn}function ce(b){m(b);let C="",N="";for(;C=Y(b,ue);)N+=C;return N}function ke(b){let C="",N="";for(;C=ae(b);)N+=C;return N}function D(b){const C=N=>{const k=b.currentChar();return k==="{"||k==="@"||k==="|"||k==="("||k===")"||!k||k===li?N:(N+=k,b.next(),C(N))};return C("")}function U(b){m(b);const C=_(b,"|");return m(b),C}function y(b,C){let N=null;switch(b.currentChar()){case"{":return C.braceNest>=1&&f(mt.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),b.next(),N=d(C,2,"{"),m(b),C.braceNest++,N;case"}":return C.braceNest>0&&C.currentType===2&&f(mt.EMPTY_PLACEHOLDER,s(),0),b.next(),N=d(C,3,"}"),C.braceNest--,C.braceNest>0&&m(b),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),N;case"@":return C.braceNest>0&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),N=ne(b,C)||p(C),C.braceNest=0,N;default:{let ge=!0,M=!0,g=!0;if(T(b))return C.braceNest>0&&f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(mt.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,K(b,C);if(ge=E(b,C))return N=d(C,4,Je(b)),m(b),N;if(M=x(b,C))return N=d(C,5,oe(b)),m(b),N;if(g=P(b,C))return N=d(C,6,be(b)),m(b),N;if(!ge&&!M&&!g)return N=d(C,12,ce(b)),f(mt.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,N.value),m(b),N;break}}return N}function ne(b,C){const{currentType:N}=C;let k=null;const ge=b.currentChar();switch((N===7||N===8||N===11||N===9)&&(ge===rn||ge===li)&&f(mt.INVALID_LINKED_FORMAT,s(),0),ge){case"@":return b.next(),k=d(C,7,"@"),C.inLinked=!0,k;case".":return m(b),b.next(),d(C,8,".");case":":return m(b),b.next(),d(C,9,":");default:return T(b)?(k=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,k):I(b,C)||O(b,C)?(m(b),ne(b,C)):R(b,C)?(m(b),d(C,11,ke(b))):w(b,C)?(m(b),ge==="{"?y(b,C)||k:d(C,10,D(b))):(N===7&&f(mt.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,K(b,C))}}function K(b,C){let N={type:13};if(C.braceNest>0)return y(b,C)||p(C);if(C.inLinked)return ne(b,C)||p(C);switch(b.currentChar()){case"{":return y(b,C)||p(C);case"}":return f(mt.UNBALANCED_CLOSING_BRACE,s(),0),b.next(),d(C,3,"}");case"@":return ne(b,C)||p(C);default:{if(T(b))return N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(F(b))return d(C,0,Be(b));break}}return N}function Q(){const{currentType:b,offset:C,startLoc:N,endLoc:k}=l;return l.lastType=b,l.lastOffset=C,l.lastStartLoc=N,l.lastEndLoc=k,l.offset=r(),l.startLoc=s(),i.currentChar()===wi?d(l,13):K(i,l)}return{nextToken:Q,currentOffset:r,currentPosition:s,context:c}}const hS="parser",dS=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function pS(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function mS(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,S,E,x,...P){const I=h.currentPosition();if(I.offset+=x,I.column+=x,n){const R=e?Rc(E,I):null,O=Ja(S,R,{domain:hS,args:P});n(O)}}function r(h,S,E){const x={type:h};return e&&(x.start=S,x.end=S,x.loc={start:E,end:E}),x}function s(h,S,E,x){e&&(h.end=S,h.loc&&(h.loc.end=E))}function o(h,S){const E=h.context(),x=r(3,E.offset,E.startLoc);return x.value=S,s(x,h.currentOffset(),h.currentPosition()),x}function a(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:P}=E,I=r(5,x,P);return I.index=parseInt(S,10),h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function l(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:P}=E,I=r(4,x,P);return I.key=S,h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function c(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:P}=E,I=r(9,x,P);return I.value=S.replace(dS,pS),h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function u(h){const S=h.nextToken(),E=h.context(),{lastOffset:x,lastStartLoc:P}=E,I=r(8,x,P);return S.type!==11?(i(h,mt.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),I.value="",s(I,x,P),{nextConsumeToken:S,node:I}):(S.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(S)),I.value=S.value||"",s(I,h.currentOffset(),h.currentPosition()),{node:I})}function f(h,S){const E=h.context(),x=r(7,E.offset,E.startLoc);return x.value=S,s(x,h.currentOffset(),h.currentPosition()),x}function d(h){const S=h.context(),E=r(6,S.offset,S.startLoc);let x=h.nextToken();if(x.type===8){const P=u(h);E.modifier=P.node,x=P.nextConsumeToken||h.nextToken()}switch(x.type!==9&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),x=h.nextToken(),x.type===2&&(x=h.nextToken()),x.type){case 10:x.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=f(h,x.value||"");break;case 4:x.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=l(h,x.value||"");break;case 5:x.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=a(h,x.value||"");break;case 6:x.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=c(h,x.value||"");break;default:{i(h,mt.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const P=h.context(),I=r(7,P.offset,P.startLoc);return I.value="",s(I,P.offset,P.startLoc),E.key=I,s(E,P.offset,P.startLoc),{nextConsumeToken:x,node:E}}}return s(E,h.currentOffset(),h.currentPosition()),{node:E}}function p(h){const S=h.context(),E=S.currentType===1?h.currentOffset():S.offset,x=S.currentType===1?S.endLoc:S.startLoc,P=r(2,E,x);P.items=[];let I=null;do{const w=I||h.nextToken();switch(I=null,w.type){case 0:w.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),P.items.push(o(h,w.value||""));break;case 5:w.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),P.items.push(a(h,w.value||""));break;case 4:w.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),P.items.push(l(h,w.value||""));break;case 6:w.value==null&&i(h,mt.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),P.items.push(c(h,w.value||""));break;case 7:{const T=d(h);P.items.push(T.node),I=T.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const R=S.currentType===1?S.lastOffset:h.currentOffset(),O=S.currentType===1?S.lastEndLoc:h.currentPosition();return s(P,R,O),P}function _(h,S,E,x){const P=h.context();let I=x.items.length===0;const R=r(1,S,E);R.cases=[],R.cases.push(x);do{const O=p(h);I||(I=O.items.length===0),R.cases.push(O)}while(P.currentType!==13);return I&&i(h,mt.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),s(R,h.currentOffset(),h.currentPosition()),R}function v(h){const S=h.context(),{offset:E,startLoc:x}=S,P=p(h);return S.currentType===13?P:_(h,E,x,P)}function m(h){const S=fS(h,Ft({},t)),E=S.context(),x=r(0,E.offset,E.startLoc);return e&&x.loc&&(x.loc.source=h),x.body=v(S),t.onCacheKey&&(x.cacheKey=t.onCacheKey(h)),E.currentType!==13&&i(S,mt.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,h[E.offset]||""),s(x,S.currentOffset(),S.currentPosition()),x}return{parse:m}}function jn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function gS(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Rh(t,e){for(let n=0;n<t.length;n++)af(t[n],e)}function af(t,e){switch(t.type){case 1:Rh(t.cases,e),e.helper("plural");break;case 2:Rh(t.items,e);break;case 6:{af(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function _S(t,e={}){const n=gS(t);n.helper("normalize"),t.body&&af(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function vS(t){const e=t.body;return e.type===2?Ch(e):e.cases.forEach(n=>Ch(n)),t}function Ch(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=of(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Zr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Zr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Zr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Zr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Zr(e.key),e.k=e.key,delete e.key,e.modifier&&(Zr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function xS(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(v,m){o.code+=v}function c(v,m=!0){const h=m?i:"";l(r?h+"  ".repeat(v):h)}function u(v=!0){const m=++o.indentLevel;v&&c(m)}function f(v=!0){const m=--o.indentLevel;v&&c(m)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>o.needIndent}}function SS(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),us(t,e.key),e.modifier?(t.push(", "),us(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function yS(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(us(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function ES(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(us(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function MS(t,e){e.body?us(t,e.body):t.push("null")}function us(t,e){const{helper:n}=t;switch(e.type){case 0:MS(t,e);break;case 1:ES(t,e);break;case 2:yS(t,e);break;case 6:SS(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const bS=(t,e={})=>{const n=Le(e.mode)?e.mode:"normal",i=Le(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=xS(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${of(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),us(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function TS(t,e={}){const n=Ft({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=mS(n).parse(t);return i?(s&&vS(a),r&&Zr(a),{ast:a,code:""}):(_S(a,n),bS(a,n))}/*!
  * core-base v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function wS(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(gr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(gr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Tl(t){return n=>AS(n,t)}function AS(t,e){const n=CS(e);if(n==null)throw lo(0);if(lf(n)===1){const s=LS(n);return t.plural(s.reduce((o,a)=>[...o,Ph(t,a)],[]))}else return Ph(t,n)}const RS=["b","body"];function CS(t){return Zi(t,RS)}const PS=["c","cases"];function LS(t){return Zi(t,PS,[])}function Ph(t,e){const n=DS(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=NS(e).reduce((r,s)=>[...r,Cc(t,s)],[]);return t.normalize(i)}}const IS=["s","static"];function DS(t){return Zi(t,IS)}const US=["i","items"];function NS(t){return Zi(t,US,[])}function Cc(t,e){const n=lf(e);switch(n){case 3:return ko(e,n);case 9:return ko(e,n);case 4:{const i=e;if(Fn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Fn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw lo(n)}case 5:{const i=e;if(Fn(i,"i")&&Nt(i.i))return t.interpolate(t.list(i.i));if(Fn(i,"index")&&Nt(i.index))return t.interpolate(t.list(i.index));throw lo(n)}case 6:{const i=e,r=kS(i),s=zS(i);return t.linked(Cc(t,s),r?Cc(t,r):void 0,t.type)}case 7:return ko(e,n);case 8:return ko(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const OS=["t","type"];function lf(t){return Zi(t,OS)}const FS=["v","value"];function ko(t,e){const n=Zi(t,FS);if(n)return n;throw lo(e)}const BS=["m","modifier"];function kS(t){return Zi(t,BS)}const HS=["k","key"];function zS(t){const e=Zi(t,HS);if(e)return e;throw lo(6)}function Zi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Fn(t,r)&&t[r]!=null)return t[r]}return n}function lo(t){return new Error(`unhandled node type: ${t}`)}const VS=t=>t;let Ho=St();function fs(t){return ct(t)&&lf(t)===0&&(Fn(t,"b")||Fn(t,"body"))}function GS(t,e={}){let n=!1;const i=e.onError||rS;return e.onError=r=>{n=!0,i(r)},{...TS(t,e),detectError:n}}function WS(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Le(t)){lt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||VS)(t),r=Ho[i];if(r)return r;const{ast:s,detectError:o}=GS(t,{...e,location:!1,jit:!0}),a=Tl(s);return o?a:Ho[i]=a}else{const n=t.cacheKey;if(n){const i=Ho[n];return i||(Ho[n]=Tl(t))}else return Tl(t)}}let co=null;function XS(t){co=t}function $S(t,e,n){co&&co.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const qS=jS("function:translate");function jS(t){return e=>co&&co.emit(t,e)}const yi={INVALID_ARGUMENT:iS,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},YS=24;function Ei(t){return Ja(t,null,void 0)}function cf(t,e){return e.locale!=null?Lh(e.locale):Lh(t.locale)}let wl;function Lh(t){if(Le(t))return t;if(Tt(t)){if(t.resolvedOnce&&wl!=null)return wl;if(t.constructor.name==="Function"){const e=t();if(Qx(e))throw Ei(yi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return wl=e}else throw Ei(yi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Ei(yi.NOT_SUPPORT_LOCALE_TYPE)}function KS(t,e,n){return[...new Set([n,...Ot(e)?e:ct(e)?Object.keys(e):Le(e)?[e]:[n]])]}function cg(t,e,n){const i=Le(n)?n:uo,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Ot(o);)o=Ih(s,o,e);const a=Ot(e)||!Qe(e)?e:e.default?e.default:null;o=Le(a)?[a]:a,Ot(o)&&Ih(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Ih(t,e,n){let i=!0;for(let r=0;r<e.length&&lt(i);r++){const s=e[r];Le(s)&&(i=ZS(t,e[r],n))}return i}function ZS(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=JS(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function JS(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Ot(n)||Qe(n))&&n[r]&&(i=n[r])}return i}const Ji=[];Ji[0]={w:[0],i:[3,0],"[":[4],o:[7]};Ji[1]={w:[1],".":[2],"[":[4],o:[7]};Ji[2]={w:[2],i:[3,0],0:[3,0]};Ji[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Ji[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Ji[5]={"'":[4,0],o:8,l:[5,0]};Ji[6]={'"':[4,0],o:8,l:[6,0]};const QS=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ey(t){return QS.test(t)}function ty(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function ny(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function iy(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:ey(e)?ty(e):"*"+e}function ry(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=iy(o),o===!1))return!1;d[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=ny(s),f=Ji[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Dh=new Map;function sy(t,e){return ct(t)?t[e]:null}function oy(t,e){if(!ct(t))return null;let n=Dh.get(e);if(n||(n=ry(e),n&&Dh.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=r[n[s]];if(o===void 0||Tt(r))return null;r=o,s++}return r}const ay="11.1.2",Qa=-1,uo="en-US",Uh="",Nh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function ly(){return{upper:(t,e)=>e==="text"&&Le(t)?t.toUpperCase():e==="vnode"&&ct(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Le(t)?t.toLowerCase():e==="vnode"&&ct(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Le(t)?Nh(t):e==="vnode"&&ct(t)&&"__v_isVNode"in t?Nh(t.children):t}}let ug;function cy(t){ug=t}let fg;function uy(t){fg=t}let hg;function fy(t){hg=t}let dg=null;const hy=t=>{dg=t},dy=()=>dg;let pg=null;const Oh=t=>{pg=t},py=()=>pg;let Fh=0;function my(t={}){const e=Tt(t.onWarn)?t.onWarn:tS,n=Le(t.version)?t.version:ay,i=Le(t.locale)||Tt(t.locale)?t.locale:uo,r=Tt(i)?uo:i,s=Ot(t.fallbackLocale)||Qe(t.fallbackLocale)||Le(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Qe(t.messages)?t.messages:Al(r),a=Qe(t.datetimeFormats)?t.datetimeFormats:Al(r),l=Qe(t.numberFormats)?t.numberFormats:Al(r),c=Ft(St(),t.modifiers,ly()),u=t.pluralRules||St(),f=Tt(t.missing)?t.missing:null,d=lt(t.missingWarn)||cs(t.missingWarn)?t.missingWarn:!0,p=lt(t.fallbackWarn)||cs(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,v=!!t.unresolving,m=Tt(t.postTranslation)?t.postTranslation:null,h=Qe(t.processor)?t.processor:null,S=lt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,x=Tt(t.messageCompiler)?t.messageCompiler:ug,P=Tt(t.messageResolver)?t.messageResolver:fg||sy,I=Tt(t.localeFallbacker)?t.localeFallbacker:hg||KS,R=ct(t.fallbackContext)?t.fallbackContext:void 0,O=t,w=ct(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,T=ct(O.__numberFormatters)?O.__numberFormatters:new Map,F=ct(O.__meta)?O.__meta:{};Fh++;const Y={version:n,cid:Fh,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:_,unresolving:v,postTranslation:m,processor:h,warnHtmlMessage:S,escapeParameter:E,messageCompiler:x,messageResolver:P,localeFallbacker:I,fallbackContext:R,onWarn:e,__meta:F};return Y.datetimeFormats=a,Y.numberFormats=l,Y.__datetimeFormatters=w,Y.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&$S(Y,n,F),Y}const Al=t=>({[t]:St()});function uf(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Le(a)?a:e}else return e}function Ds(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function gy(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function _y(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(gy(t,e[i]))return!0;return!1}function Bh(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Pc(...e),d=lt(u.missingWarn)?u.missingWarn:t.missingWarn;lt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=cf(t,u),v=o(t,r,_);if(!Le(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},h,S=null;const E="datetime format";for(let I=0;I<v.length&&(h=v[I],m=n[h]||{},S=m[l],!Qe(S));I++)uf(t,l,h,d,E);if(!Qe(S)||!Le(h))return i?Qa:l;let x=`${h}__${l}`;Za(f)||(x=`${x}__${JSON.stringify(f)}`);let P=a.get(x);return P||(P=new Intl.DateTimeFormat(h,Ft({},S,f)),a.set(x,P)),p?P.formatToParts(c):P.format(c)}const mg=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Pc(...t){const[e,n,i,r]=t,s=St();let o=St(),a;if(Le(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ei(yi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Ei(yi.INVALID_ISO_DATE_ARGUMENT)}}else if(Kx(e)){if(isNaN(e.getTime()))throw Ei(yi.INVALID_DATE_ARGUMENT);a=e}else if(Nt(e))a=e;else throw Ei(yi.INVALID_ARGUMENT);return Le(n)?s.key=n:Qe(n)&&Object.keys(n).forEach(l=>{mg.includes(l)?o[l]=n[l]:s[l]=n[l]}),Le(i)?s.locale=i:Qe(i)&&(o=i),Qe(r)&&(o=r),[s.key||"",a,s,o]}function kh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Hh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Lc(...e),d=lt(u.missingWarn)?u.missingWarn:t.missingWarn;lt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=cf(t,u),v=o(t,r,_);if(!Le(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},h,S=null;const E="number format";for(let I=0;I<v.length&&(h=v[I],m=n[h]||{},S=m[l],!Qe(S));I++)uf(t,l,h,d,E);if(!Qe(S)||!Le(h))return i?Qa:l;let x=`${h}__${l}`;Za(f)||(x=`${x}__${JSON.stringify(f)}`);let P=a.get(x);return P||(P=new Intl.NumberFormat(h,Ft({},S,f)),a.set(x,P)),p?P.formatToParts(c):P.format(c)}const gg=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Lc(...t){const[e,n,i,r]=t,s=St();let o=St();if(!Nt(e))throw Ei(yi.INVALID_ARGUMENT);const a=e;return Le(n)?s.key=n:Qe(n)&&Object.keys(n).forEach(l=>{gg.includes(l)?o[l]=n[l]:s[l]=n[l]}),Le(i)?s.locale=i:Qe(i)&&(o=i),Qe(r)&&(o=r),[s.key||"",a,s,o]}function zh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const vy=t=>t,xy=t=>"",Sy="text",yy=t=>t.length===0?"":of(t),Ey=eS;function Vh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function My(t){const e=Nt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Nt(t.named.count)||Nt(t.named.n))?Nt(t.named.count)?t.named.count:Nt(t.named.n)?t.named.n:e:e}function by(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Ty(t={}){const e=t.locale,n=My(t),i=ct(t.pluralRules)&&Le(e)&&Tt(t.pluralRules[e])?t.pluralRules[e]:Vh,r=ct(t.pluralRules)&&Le(e)&&Tt(t.pluralRules[e])?Vh:void 0,s=h=>h[i(n,h.length,r)],o=t.list||[],a=h=>o[h],l=t.named||St();Nt(t.pluralIndex)&&by(n,l);const c=h=>l[h];function u(h,S){const E=Tt(t.messages)?t.messages(h,!!S):ct(t.messages)?t.messages[h]:!1;return E||(t.parent?t.parent.message(h):xy)}const f=h=>t.modifiers?t.modifiers[h]:vy,d=Qe(t.processor)&&Tt(t.processor.normalize)?t.processor.normalize:yy,p=Qe(t.processor)&&Tt(t.processor.interpolate)?t.processor.interpolate:Ey,_=Qe(t.processor)&&Le(t.processor.type)?t.processor.type:Sy,m={list:a,named:c,plural:s,linked:(h,...S)=>{const[E,x]=S;let P="text",I="";S.length===1?ct(E)?(I=E.modifier||I,P=E.type||P):Le(E)&&(I=E||I):S.length===2&&(Le(E)&&(I=E||I),Le(x)&&(P=x||P));const R=u(h,!0)(m),O=P==="vnode"&&Ot(R)&&I?R[0]:R;return I?f(I)(O,P):O},message:u,type:_,interpolate:p,normalize:d,values:Ft(St(),o,l)};return m}const Gh=()=>"",An=t=>Tt(t);function Wh(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=Ic(...e),u=lt(c.missingWarn)?c.missingWarn:t.missingWarn,f=lt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=lt(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Le(c.default)||lt(c.default)?lt(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,v=n||_!=null&&(Le(_)||Tt(_)),m=cf(t,c);d&&wy(c);let[h,S,E]=p?[l,m,a[m]||St()]:_g(t,l,m,o,f,u),x=h,P=l;if(!p&&!(Le(x)||fs(x)||An(x))&&v&&(x=_,P=x),!p&&(!(Le(x)||fs(x)||An(x))||!Le(S)))return r?Qa:l;let I=!1;const R=()=>{I=!0},O=An(x)?x:vg(t,l,S,x,P,R);if(I)return x;const w=Cy(t,S,E,c),T=Ty(w),F=Ay(t,O,T),Y=i?i(F,l):F;if(__INTLIFY_PROD_DEVTOOLS__){const q={timestamp:Date.now(),key:Le(l)?l:An(x)?x.key:"",locale:S||(An(x)?x.locale:""),format:Le(x)?x:An(x)?x.source:"",message:Y};q.meta=Ft({},t.__meta,dy()||{}),qS(q)}return Y}function wy(t){Ot(t.list)?t.list=t.list.map(e=>Le(e)?wh(e):e):ct(t.named)&&Object.keys(t.named).forEach(e=>{Le(t.named[e])&&(t.named[e]=wh(t.named[e]))})}function _g(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=St(),d,p=null;const _="translate";for(let v=0;v<u.length&&(d=u[v],f=o[d]||St(),(p=l(f,e))===null&&(p=f[e]),!(Le(p)||fs(p)||An(p)));v++)if(!_y(d,u)){const m=uf(t,e,d,s,_);m!==e&&(p=m)}return[p,d,f]}function vg(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(An(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,Ry(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function Ay(t,e,n){return e(n)}function Ic(...t){const[e,n,i]=t,r=St();if(!Le(e)&&!Nt(e)&&!An(e)&&!fs(e))throw Ei(yi.INVALID_ARGUMENT);const s=Nt(e)?String(e):(An(e),e);return Nt(n)?r.plural=n:Le(n)?r.default=n:Qe(n)&&!Za(n)?r.named=n:Ot(n)&&(r.list=n),Nt(i)?r.plural=i:Le(i)?r.default=i:Qe(i)&&Ft(r,i),[s,r]}function Ry(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>jx(e,n,o)}}function Cy(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let v=o(n,p);if(v==null&&(u||_)){const[,,m]=_g(u||t,p,e,a,l,c);v=o(m,p)}if(Le(v)||fs(v)){let m=!1;const S=vg(t,p,e,v,p,()=>{m=!0});return m?Gh:S}else return An(v)?v:Gh}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Nt(i.plural)&&(d.pluralIndex=i.plural),d}wS();/*!
  * vue-i18n v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Py="11.1.2";function Ly(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(gr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(gr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(gr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(gr().__INTLIFY_PROD_DEVTOOLS__=!1)}const pn={UNEXPECTED_RETURN_TYPE:YS,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function En(t,...e){return Ja(t,null,void 0)}const Dc=Ki("__translateVNode"),Uc=Ki("__datetimeParts"),Nc=Ki("__numberParts"),xg=Ki("__setPluralRules"),Sg=Ki("__injectWithOption"),Oc=Ki("__dispose");function fo(t){if(!ct(t))return t;for(const e in t)if(Fn(t,e))if(!e.includes("."))ct(t[e])&&fo(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=St()),!ct(r[n[o]])){s=!0;break}r=r[n[o]]}s||(r[n[i]]=t[e],delete t[e]),ct(r[n[i]])&&fo(r[n[i]])}return t}function ff(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Qe(n)?n:Ot(i)?St():{[t]:St()};if(Ot(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||St(),ma(c,o[l])):ma(c,o)}else Le(a)&&ma(JSON.parse(a),o)}),r==null&&s)for(const a in o)Fn(o,a)&&fo(o[a]);return o}function yg(t){return t.type}function Eg(t,e,n){let i=ct(e.messages)?e.messages:St();"__i18nGlobal"in n&&(i=ff(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(ct(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ct(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Xh(t){return rt(To,null,t,0)}const $h="__INTLIFY_META__",qh=()=>[],Iy=()=>!1;let jh=0;function Yh(t){return(e,n,i,r)=>t(n,i,ls()||void 0,r)}const Dy=()=>{const t=ls();let e=null;return t&&(e=yg(t)[$h])?{[$h]:e}:null};function hf(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Ua?ln:Yu;let o=lt(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Le(t.locale)?t.locale:uo),l=s(e&&o?e.fallbackLocale.value:Le(t.fallbackLocale)||Ot(t.fallbackLocale)||Qe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(ff(a.value,t)),u=s(Qe(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(Qe(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=e?e.missingWarn:lt(t.missingWarn)||cs(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:lt(t.fallbackWarn)||cs(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:lt(t.fallbackRoot)?t.fallbackRoot:!0,v=!!t.fallbackFormat,m=Tt(t.missing)?t.missing:null,h=Tt(t.missing)?Yh(t.missing):null,S=Tt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:lt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const P=e?e.modifiers:Qe(t.modifiers)?t.modifiers:{};let I=t.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&Oh(null);const g={version:Py,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:P,pluralRules:I,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:E,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=Qe(R)?R.__datetimeFormatters:void 0,g.__numberFormatters=Qe(R)?R.__numberFormatters:void 0;const L=my(g);return i&&Oh(L),L})(),Ds(R,a.value,l.value);function w(){return[a.value,l.value,c.value,u.value,f.value]}const T=Ut({get:()=>a.value,set:g=>{R.locale=g,a.value=g}}),F=Ut({get:()=>l.value,set:g=>{R.fallbackLocale=g,l.value=g,Ds(R,a.value,g)}}),Y=Ut(()=>c.value),q=Ut(()=>u.value),ae=Ut(()=>f.value);function le(){return Tt(S)?S:null}function te(g){S=g,R.postTranslation=g}function Z(){return m}function X(g){g!==null&&(h=Yh(g)),m=g,R.missing=h}const me=(g,L,z,j,$,Ee)=>{w();let de;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?py():void 0),de=g(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(z!=="translate exists"&&Nt(de)&&de===Qa||z==="translate exists"&&!de){const[Te,Ce]=L();return e&&_?j(e):$(Te)}else{if(Ee(de))return de;throw En(pn.UNEXPECTED_RETURN_TYPE)}};function Se(...g){return me(L=>Reflect.apply(Wh,null,[L,...g]),()=>Ic(...g),"translate",L=>Reflect.apply(L.t,L,[...g]),L=>L,L=>Le(L))}function Re(...g){const[L,z,j]=g;if(j&&!ct(j))throw En(pn.INVALID_ARGUMENT);return Se(L,z,Ft({resolvedMessage:!0},j||{}))}function Be(...g){return me(L=>Reflect.apply(Bh,null,[L,...g]),()=>Pc(...g),"datetime format",L=>Reflect.apply(L.d,L,[...g]),()=>Uh,L=>Le(L))}function Je(...g){return me(L=>Reflect.apply(Hh,null,[L,...g]),()=>Lc(...g),"number format",L=>Reflect.apply(L.n,L,[...g]),()=>Uh,L=>Le(L))}function oe(g){return g.map(L=>Le(L)||Nt(L)||lt(L)?Xh(String(L)):L)}const be={normalize:oe,interpolate:g=>g,type:"vnode"};function H(...g){return me(L=>{let z;const j=L;try{j.processor=be,z=Reflect.apply(Wh,null,[j,...g])}finally{j.processor=null}return z},()=>Ic(...g),"translate",L=>L[Dc](...g),L=>[Xh(L)],L=>Ot(L))}function se(...g){return me(L=>Reflect.apply(Hh,null,[L,...g]),()=>Lc(...g),"number format",L=>L[Nc](...g),qh,L=>Le(L)||Ot(L))}function ue(...g){return me(L=>Reflect.apply(Bh,null,[L,...g]),()=>Pc(...g),"datetime format",L=>L[Uc](...g),qh,L=>Le(L)||Ot(L))}function ce(g){I=g,R.pluralRules=I}function ke(g,L){return me(()=>{if(!g)return!1;const z=Le(L)?L:a.value,j=y(z),$=R.messageResolver(j,g);return fs($)||An($)||Le($)},()=>[g],"translate exists",z=>Reflect.apply(z.te,z,[g,L]),Iy,z=>lt(z))}function D(g){let L=null;const z=cg(R,l.value,a.value);for(let j=0;j<z.length;j++){const $=c.value[z[j]]||{},Ee=R.messageResolver($,g);if(Ee!=null){L=Ee;break}}return L}function U(g){const L=D(g);return L??(e?e.tm(g)||{}:{})}function y(g){return c.value[g]||{}}function ne(g,L){if(r){const z={[g]:L};for(const j in z)Fn(z,j)&&fo(z[j]);L=z[g]}c.value[g]=L,R.messages=c.value}function K(g,L){c.value[g]=c.value[g]||{};const z={[g]:L};if(r)for(const j in z)Fn(z,j)&&fo(z[j]);L=z[g],ma(L,c.value[g]),R.messages=c.value}function Q(g){return u.value[g]||{}}function b(g,L){u.value[g]=L,R.datetimeFormats=u.value,kh(R,g,L)}function C(g,L){u.value[g]=Ft(u.value[g]||{},L),R.datetimeFormats=u.value,kh(R,g,L)}function N(g){return f.value[g]||{}}function k(g,L){f.value[g]=L,R.numberFormats=f.value,zh(R,g,L)}function ge(g,L){f.value[g]=Ft(f.value[g]||{},L),R.numberFormats=f.value,zh(R,g,L)}jh++,e&&Ua&&(zn(e.locale,g=>{o&&(a.value=g,R.locale=g,Ds(R,a.value,l.value))}),zn(e.fallbackLocale,g=>{o&&(l.value=g,R.fallbackLocale=g,Ds(R,a.value,l.value))}));const M={id:jh,locale:T,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Ds(R,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:Y,get modifiers(){return P},get pluralRules(){return I||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(g){d=g,R.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(g){p=g,R.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return v},set fallbackFormat(g){v=g,R.fallbackFormat=v},get warnHtmlMessage(){return E},set warnHtmlMessage(g){E=g,R.warnHtmlMessage=g},get escapeParameter(){return x},set escapeParameter(g){x=g,R.escapeParameter=g},t:Se,getLocaleMessage:y,setLocaleMessage:ne,mergeLocaleMessage:K,getPostTranslationHandler:le,setPostTranslationHandler:te,getMissingHandler:Z,setMissingHandler:X,[xg]:ce};return M.datetimeFormats=q,M.numberFormats=ae,M.rt=Re,M.te=ke,M.tm=U,M.d=Be,M.n=Je,M.getDateTimeFormat=Q,M.setDateTimeFormat=b,M.mergeDateTimeFormat=C,M.getNumberFormat=N,M.setNumberFormat=k,M.mergeNumberFormat=ge,M[Sg]=n,M[Dc]=H,M[Uc]=ue,M[Nc]=se,M}function Uy(t){const e=Le(t.locale)?t.locale:uo,n=Le(t.fallbackLocale)||Ot(t.fallbackLocale)||Qe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=Tt(t.missing)?t.missing:void 0,r=lt(t.silentTranslationWarn)||cs(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=lt(t.silentFallbackWarn)||cs(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=lt(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Qe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=Tt(t.postTranslation)?t.postTranslation:void 0,f=Le(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=lt(t.sync)?t.sync:!0;let _=t.messages;if(Qe(t.sharedMessages)){const P=t.sharedMessages;_=Object.keys(P).reduce((R,O)=>{const w=R[O]||(R[O]={});return Ft(w,P[O]),R},_||{})}const{__i18n:v,__root:m,__injectWithOption:h}=t,S=t.datetimeFormats,E=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:x,datetimeFormats:S,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:v,__root:m,__injectWithOption:h}}function Fc(t={}){const e=hf(Uy(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return lt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=lt(r)?!r:r},get silentFallbackWarn(){return lt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=lt(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function Ny(t,e,n){return{beforeCreate(){const i=ls();if(!i)throw En(pn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Kh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Fc(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Kh(t,r);else{this.$i18n=Fc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&Eg(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=ls();if(!i)throw En(pn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Kh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[xg](e.pluralizationRules||t.pluralizationRules);const n=ff(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const df={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Oy({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===an?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},St())}function Mg(){return an}const Fy=Xt({name:"i18n-t",props:Ft({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Nt(t)||!isNaN(t)}},df),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Qi({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),o=St();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Le(t.plural)?+t.plural:t.plural);const a=Oy(e,s),l=r[Dc](t.keypath,a,o),c=Ft(St(),i),u=Le(t.tag)||ct(t.tag)?t.tag:Mg();return Ya(u,c,l)}}}),Zh=Fy;function By(t){return Ot(t)&&!Le(t[0])}function bg(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=St();t.locale&&(o.locale=t.locale),Le(t.format)?o.key=t.format:ct(t.format)&&(Le(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,p)=>n.includes(p)?Ft(St(),d,{[p]:t.format[p]}):d,St()));const l=i(t.value,o,a);let c=[o.key];Ot(l)?c=l.map((d,p)=>{const _=r[d.type],v=_?_({[d.type]:d.value,index:p,parts:l}):[d.value];return By(v)&&(v[0].key=`${d.type}-${p}`),v}):Le(l)&&(c=[l]);const u=Ft(St(),s),f=Le(t.tag)||ct(t.tag)?t.tag:Mg();return Ya(f,u,c)}}const ky=Xt({name:"i18n-n",props:Ft({value:{type:Number,required:!0},format:{type:[String,Object]}},df),setup(t,e){const n=t.i18n||Qi({useScope:t.scope,__useComponent:!0});return bg(t,e,gg,(...i)=>n[Nc](...i))}}),Jh=ky;function Hy(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function zy(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw En(pn.UNEXPECTED_ERROR);const c=Hy(t,a.$),u=Qh(l);return[Reflect.apply(c.t,c,[...ed(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Ua&&t.global===c&&(o.__i18nWatcher=zn(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ua&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Qh(a);o.textContent=Reflect.apply(l.t,l,[...ed(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Qh(t){if(Le(t))return{path:t};if(Qe(t)){if(!("path"in t))throw En(pn.REQUIRED_VALUE,"path");return t}else throw En(pn.INVALID_VALUE)}function ed(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Le(n)&&(o.locale=n),Nt(r)&&(o.plural=r),Nt(s)&&(o.plural=s),[e,a,o]}function Vy(t,e,...n){const i=Qe(n[0])?n[0]:{};(lt(i.globalInstall)?i.globalInstall:!0)&&([Zh.name,"I18nT"].forEach(s=>t.component(s,Zh)),[Jh.name,"I18nN"].forEach(s=>t.component(s,Jh)),[nd.name,"I18nD"].forEach(s=>t.component(s,nd))),t.directive("t",zy(e))}const Gy=Ki("global-vue-i18n");function Wy(t={}){const e=__VUE_I18N_LEGACY_API__&&lt(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=lt(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=Xy(t,e),o=Ki("");function a(f){return i.get(f)||null}function l(f,d){i.set(f,d)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),Qe(d[0])){const v=d[0];u.__composerExtend=v.__composerExtend,u.__vueI18nExtend=v.__vueI18nExtend}let p=null;!e&&n&&(p=Qy(f,u.global)),__VUE_I18N_FULL_INSTALL__&&Vy(f,u,...d),__VUE_I18N_LEGACY_API__&&e&&f.mixin(Ny(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function Qi(t={}){const e=ls();if(e==null)throw En(pn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw En(pn.NOT_INSTALLED);const n=$y(e),i=jy(n),r=yg(e),s=qy(t,r);if(s==="global")return Eg(i,t,r),i;if(s==="parent"){let l=Yy(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ft({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=hf(l),o.__composerExtend&&(a[Oc]=o.__composerExtend(a)),Zy(o,e,a),o.__setInstance(e,a)}return a}function Xy(t,e){const n=Hu(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Fc(t)):n.run(()=>hf(t));if(i==null)throw En(pn.UNEXPECTED_ERROR);return[n,i]}function $y(t){const e=Hn(t.isCE?Gy:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw En(t.isCE?pn.NOT_INSTALLED_WITH_PROVIDE:pn.UNEXPECTED_ERROR);return e}function qy(t,e){return Za(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function jy(t){return t.mode==="composition"?t.global:t.global.__composer}function Yy(t,e,n=!1){let i=null;const r=e.root;let s=Ky(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[Sg]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function Ky(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function Zy(t,e,n){ys(()=>{},e),Es(()=>{const i=n;t.__deleteInstance(e);const r=i[Oc];r&&(r(),delete i[Oc])},e)}const Jy=["locale","fallbackLocale","availableLocales"],td=["t","rt","d","n","tm","te"];function Qy(t,e){const n=Object.create(null);return Jy.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw En(pn.UNEXPECTED_ERROR);const o=Pt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,td.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw En(pn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,td.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const eE=Xt({name:"i18n-d",props:Ft({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},df),setup(t,e){const n=t.i18n||Qi({useScope:t.scope,__useComponent:!0});return bg(t,e,mg,(...i)=>n[Uc](...i))}}),nd=eE;Ly();cy(WS);uy(oy);fy(cg);if(__INTLIFY_PROD_DEVTOOLS__){const t=gr();t.__INTLIFY__=!0,XS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const tE=["en-US","zh-TW"],Tg=rf("lang",()=>{const{locale:t}=Qi({useScope:"global"}),e=localStorage.getItem("lang");t.value=tE.includes(e)?e:"en-US",ef(()=>{localStorage.setItem("lang",t.value)});const n=Ut(()=>t.value==="en-US");return{locale:t,isEnUS:n,changeLang:()=>{switch(t.value){case"en-US":t.value="zh-TW";break;case"zh-TW":t.value="en-US";break}}}}),nE=Xt({name:"global-sidebar",components:{AHoverable:tg,Switch:ng},props:{toggled:{type:Boolean,default:!1},toggleSidebar:{type:Function,default:()=>{}}},setup(){const t=Ao(),e=Tg(),{t:n}=Qi();return{icons:ig,themeStore:t,langStore:e,t:n}}}),iE={class:"relative flex row j-around nly w-160 h-50 pt-24 mt-32 mr-10 ml-10 top-line"};function rE(t,e,n,i,r,s){const o=yr("AHoverable"),a=yr("Switch");return gt(),yt(an,null,[We("aside",{class:Wi(["absolute r--200 flex flex-col t-0 w-180 h-full pt-50 pr-10 pl-10 bg-glassy tr-100 z-99",{"sm:r-0":t.toggled}])},[rt(o,{to:"home",imgSrc:t.icons.home,text:t.t("home"),shape:"pill"},null,8,["imgSrc","text"]),rt(o,{to:"works",imgSrc:t.icons.list,text:t.t("work"),shape:"pill"},null,8,["imgSrc","text"]),rt(o,{to:"blogs",imgSrc:t.icons.list,text:t.t("blog"),shape:"pill"},null,8,["imgSrc","text"]),We("div",iE,[rt(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["change","isActive","imgSrcL","imgSrcR"]),rt(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])])],2),We("div",{class:Wi(["bg-dark fixed t-0 l-0 w-dvw h-dvh o-0 z--0 tr-100",{"sm:o-1 sm:z-98":t.toggled}]),onClick:e[0]||(e[0]=l=>t.toggleSidebar())},null,2)],64)}const sE=Xn(nE,[["render",rE]]),oE=Xt({name:"global-header",components:{AHoverable:tg,Switch:ng,GlobalSidebar:sE},setup(){const t=Ao(),e=Tg(),{t:n}=Qi(),i=ln(!1),r=()=>{i.value=!i.value},s=()=>{window.innerWidth>640&&(i.value=!1)};return ys(()=>window.addEventListener("resize",s)),Es(()=>window.removeEventListener("resize",s)),{icons:ig,themeStore:t,langStore:e,t:n,toggled:i,toggleSidebar:r}}}),aE={class:"fixed flex row a-center j-between t-0 l-0 w-dvw h-50 font-size-16 z-100"},lE={class:"flex row j-around w-400 ml-70 sm:none"},cE={class:"flex row a-center j-around w-116 pr-16 sm:none"},uE=["src"],fE=["src"];function hE(t,e,n,i,r,s){const o=yr("AHoverable"),a=yr("Switch"),l=yr("GlobalSidebar");return gt(),yt(an,null,[We("header",aE,[e[1]||(e[1]=We("h1",{class:"absolute l-0 w-38 ml-16 mr-16 mt-auto mb-auto font-size-36 italic user-select-none"},"Pc",-1)),We("nav",lE,[rt(o,{to:"home",effect:"underline-m",text:t.t("home")},null,8,["text"]),rt(o,{to:"works",effect:"underline-m",text:t.t("work")},null,8,["text"]),rt(o,{to:"blogs",effect:"underline-m",text:t.t("blog")},null,8,["text"])]),We("aside",cE,[rt(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["change","isActive","imgSrcL","imgSrcR"]),rt(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])]),We("button",{class:"none relative w-50 h-50 bg-none border-none pointer sm:block sm:ml-auto",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?Si("",!0):(gt(),yt("img",{key:0,src:t.icons.menuBurger,alt:"menu"},null,8,uE)),t.toggled?(gt(),yt("img",{key:1,src:t.icons.crossSmall,alt:"close"},null,8,fE)):Si("",!0)])]),rt(l,{toggled:t.toggled,toggleSidebar:t.toggleSidebar},null,8,["toggled","toggleSidebar"])],64)}const dE=Xn(oE,[["render",hE]]),pE=Xt({__name:"App",setup(t){const e=Ao();return ef(()=>{document.body.style.setProperty("--theme",e.theme)}),(n,i)=>{const r=yr("router-view");return gt(),yt(an,null,[rt(dE),rt(r)],64)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function wg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&wg(t.default)}const ft=Object.assign;function Rl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Gn(r)?r.map(t):t(r)}return n}const Qs=()=>{},Gn=Array.isArray,Ag=/#/g,gE=/&/g,_E=/\//g,vE=/=/g,xE=/\?/g,Rg=/\+/g,SE=/%5B/g,yE=/%5D/g,Cg=/%5E/g,EE=/%60/g,Pg=/%7B/g,ME=/%7C/g,Lg=/%7D/g,bE=/%20/g;function pf(t){return encodeURI(""+t).replace(ME,"|").replace(SE,"[").replace(yE,"]")}function TE(t){return pf(t).replace(Pg,"{").replace(Lg,"}").replace(Cg,"^")}function Bc(t){return pf(t).replace(Rg,"%2B").replace(bE,"+").replace(Ag,"%23").replace(gE,"%26").replace(EE,"`").replace(Pg,"{").replace(Lg,"}").replace(Cg,"^")}function wE(t){return Bc(t).replace(vE,"%3D")}function AE(t){return pf(t).replace(Ag,"%23").replace(xE,"%3F")}function RE(t){return t==null?"":AE(t).replace(_E,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const CE=/\/$/,PE=t=>t.replace(CE,"");function Cl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=UE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ho(o)}}function LE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function IE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&hs(e.matched[i],n.matched[r])&&Ig(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ig(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!DE(t[n],e[n]))return!1;return!0}function DE(t,e){return Gn(t)?rd(t,e):Gn(e)?rd(e,t):t===e}function rd(t,e){return Gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function UE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var po;(function(t){t.pop="pop",t.push="push"})(po||(po={}));var eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(eo||(eo={}));function NE(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),PE(t)}const OE=/^[^#]+#/;function FE(t,e){return t.replace(OE,"#")+e}function BE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function kE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=BE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sd(t,e){return(history.state?history.state.position-e:-1)+t}const kc=new Map;function HE(t,e){kc.set(t,e)}function zE(t){const e=kc.get(t);return kc.delete(t),e}let VE=()=>location.protocol+"//"+location.host;function Dg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),id(l,"")}return id(n,t)+i+r}function GE(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=Dg(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(n.value,_,{delta:m,type:po.pop,direction:m?m>0?eo.forward:eo.back:eo.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ft({},d.state,{scroll:el()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function od(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?el():null}}function WE(t){const{history:e,location:n}=window,i={value:Dg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:VE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ft({},e.state,od(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ft({},r.value,e.state,{forward:l,scroll:el()});s(u.current,u,!0);const f=ft({},od(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function XE(t){t=NE(t);const e=WE(t),n=GE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ft({location:"",base:t,go:i,createHref:FE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function $E(t){return typeof t=="string"||t&&typeof t=="object"}function Ug(t){return typeof t=="string"||typeof t=="symbol"}const Ng=Symbol("");var ad;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ad||(ad={}));function ds(t,e){return ft(new Error,{type:t,[Ng]:!0},e)}function ci(t,e){return t instanceof Error&&Ng in t&&(e==null||!!(t.type&e))}const ld="[^/]+?",qE={sensitive:!1,strict:!1,start:!0,end:!0},jE=/[.+*?^${}()[\]/\\]/g;function YE(t,e){const n=ft({},qE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(jE,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:h}=d;s.push({name:_,repeatable:v,optional:m});const S=h||ld;if(S!==ld){p+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+x.message)}}let E=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=20,m&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=s[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,h=_ in c?c[_]:"";if(Gn(h)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=Gn(h)?h.join("/"):h;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function KE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Og(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=KE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(cd(i))return 1;if(cd(r))return-1}return r.length-i.length}function cd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZE={type:0,value:""},JE=/[a-zA-Z0-9_]/;function QE(t){if(!t)return[[]];if(t==="/")return[[ZE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:JE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function eM(t,e,n){const i=YE(QE(t.path),n),r=ft(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function tM(t,e){const n=[],i=new Map;e=dd({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const _=!p,v=fd(f);v.aliasOf=p&&p.record;const m=dd(e,f),h=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of x)h.push(fd(ft({},v,{components:p?p.record.components:v.components,path:P,aliasOf:p?p.record:v})))}let S,E;for(const x of h){const{path:P}=x;if(d&&P[0]!=="/"){const I=d.record.path,R=I[I.length-1]==="/"?"":"/";x.path=d.record.path+(P&&R+P)}if(S=eM(x,d,m),p?p.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),_&&f.name&&!hd(S)&&o(f.name)),Fg(S)&&l(S),v.children){const I=v.children;for(let R=0;R<I.length;R++)s(I[R],S,p&&p.children[R])}p=p||S}return E?()=>{o(E)}:Qs}function o(f){if(Ug(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=rM(f,n);n.splice(d,0,f),f.record.name&&!hd(f)&&i.set(f.record.name,f)}function c(f,d){let p,_={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw ds(1,{location:f});m=p.record.name,_=ft(ud(d.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&ud(f.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(f.path!=null)v=f.path,p=n.find(E=>E.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw ds(1,{location:f,currentLocation:d});m=p.record.name,_=ft({},d.params,f.params),v=p.stringify(_)}const h=[];let S=p;for(;S;)h.unshift(S.record),S=S.parent;return{name:m,path:v,params:_,matched:h,meta:iM(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ud(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function fd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:nM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function nM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iM(t){return t.reduce((e,n)=>ft(e,n.meta),{})}function dd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function rM(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Og(t,e[s])<0?i=s:n=s+1}const r=sM(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function sM(t){let e=t;for(;e=e.parent;)if(Fg(e)&&Og(t,e)===0)return e}function Fg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function oM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Rg," "),o=s.indexOf("="),a=ho(o<0?s:s.slice(0,o)),l=o<0?null:ho(s.slice(o+1));if(a in e){let c=e[a];Gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function pd(t){let e="";for(let n in t){const i=t[n];if(n=wE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gn(i)?i.map(s=>s&&Bc(s)):[i&&Bc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function aM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Gn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const lM=Symbol(""),md=Symbol(""),mf=Symbol(""),Bg=Symbol(""),Hc=Symbol("");function Us(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Fi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ds(4,{from:n,to:e})):d instanceof Error?l(d):$E(d)?l(ds(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Pl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(wg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Fi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=mE(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Fi(p,n,i,o,a,r)()}))}}return s}function gd(t){const e=Hn(mf),n=Hn(Bg),i=Ut(()=>{const l=Cn(t.to);return e.resolve(l)}),r=Ut(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(hs.bind(null,u));if(d>-1)return d;const p=_d(l[c-2]);return c>1&&_d(u)===p&&f[f.length-1].path!==p?f.findIndex(hs.bind(null,l[c-2])):d}),s=Ut(()=>r.value>-1&&dM(n.params,i.value.params)),o=Ut(()=>r.value>-1&&r.value===n.matched.length-1&&Ig(n.params,i.value.params));function a(l={}){if(hM(l)){const c=e[Cn(t.replace)?"replace":"push"](Cn(t.to)).catch(Qs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ut(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function cM(t){return t.length===1?t[0]:t}const uM=Xt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gd,setup(t,{slots:e}){const n=Mo(gd(t)),{options:i}=Hn(mf),r=Ut(()=>({[vd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[vd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&cM(e.default(n));return t.custom?s:Ya("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),fM=uM;function hM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Gn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function _d(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vd=(t,e,n)=>t??e??n,pM=Xt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Hn(Hc),r=Ut(()=>t.route||i.value),s=Hn(md,0),o=Ut(()=>{let c=Cn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ut(()=>r.value.matched[o.value]);ha(md,Ut(()=>o.value+1)),ha(lM,a),ha(Hc,r);const l=ln();return zn(()=>[l.value,a.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!hs(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return xd(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ya(d,ft({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return xd(n.default,{Component:m,route:c})||m}}});function xd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const mM=pM;function gM(t){const e=tM(t.routes,t),n=t.parseQuery||oM,i=t.stringifyQuery||pd,r=t.history,s=Us(),o=Us(),a=Us(),l=Yu(Ai);let c=Ai;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rl.bind(null,H=>""+H),f=Rl.bind(null,RE),d=Rl.bind(null,ho);function p(H,se){let ue,ce;return Ug(H)?(ue=e.getRecordMatcher(H),ce=se):ce=H,e.addRoute(ce,ue)}function _(H){const se=e.getRecordMatcher(H);se&&e.removeRoute(se)}function v(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function h(H,se){if(se=ft({},se||l.value),typeof H=="string"){const y=Cl(n,H,se.path),ne=e.resolve({path:y.path},se),K=r.createHref(y.fullPath);return ft(y,ne,{params:d(ne.params),hash:ho(y.hash),redirectedFrom:void 0,href:K})}let ue;if(H.path!=null)ue=ft({},H,{path:Cl(n,H.path,se.path).path});else{const y=ft({},H.params);for(const ne in y)y[ne]==null&&delete y[ne];ue=ft({},H,{params:f(y)}),se.params=f(se.params)}const ce=e.resolve(ue,se),ke=H.hash||"";ce.params=u(d(ce.params));const D=LE(i,ft({},H,{hash:TE(ke),path:ce.path})),U=r.createHref(D);return ft({fullPath:D,hash:ke,query:i===pd?aM(H.query):H.query||{}},ce,{redirectedFrom:void 0,href:U})}function S(H){return typeof H=="string"?Cl(n,H,l.value.path):ft({},H)}function E(H,se){if(c!==H)return ds(8,{from:se,to:H})}function x(H){return R(H)}function P(H){return x(ft(S(H),{replace:!0}))}function I(H){const se=H.matched[H.matched.length-1];if(se&&se.redirect){const{redirect:ue}=se;let ce=typeof ue=="function"?ue(H):ue;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=S(ce):{path:ce},ce.params={}),ft({query:H.query,hash:H.hash,params:ce.path!=null?{}:H.params},ce)}}function R(H,se){const ue=c=h(H),ce=l.value,ke=H.state,D=H.force,U=H.replace===!0,y=I(ue);if(y)return R(ft(S(y),{state:typeof y=="object"?ft({},ke,y.state):ke,force:D,replace:U}),se||ue);const ne=ue;ne.redirectedFrom=se;let K;return!D&&IE(i,ce,ue)&&(K=ds(16,{to:ne,from:ce}),Re(ce,ce,!0,!1)),(K?Promise.resolve(K):T(ne,ce)).catch(Q=>ci(Q)?ci(Q,2)?Q:Se(Q):X(Q,ne,ce)).then(Q=>{if(Q){if(ci(Q,2))return R(ft({replace:U},S(Q.to),{state:typeof Q.to=="object"?ft({},ke,Q.to.state):ke,force:D}),se||ne)}else Q=Y(ne,ce,!0,U,ke);return F(ne,ce,Q),Q})}function O(H,se){const ue=E(H,se);return ue?Promise.reject(ue):Promise.resolve()}function w(H){const se=oe.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(H):H()}function T(H,se){let ue;const[ce,ke,D]=_M(H,se);ue=Pl(ce.reverse(),"beforeRouteLeave",H,se);for(const y of ce)y.leaveGuards.forEach(ne=>{ue.push(Fi(ne,H,se))});const U=O.bind(null,H,se);return ue.push(U),be(ue).then(()=>{ue=[];for(const y of s.list())ue.push(Fi(y,H,se));return ue.push(U),be(ue)}).then(()=>{ue=Pl(ke,"beforeRouteUpdate",H,se);for(const y of ke)y.updateGuards.forEach(ne=>{ue.push(Fi(ne,H,se))});return ue.push(U),be(ue)}).then(()=>{ue=[];for(const y of D)if(y.beforeEnter)if(Gn(y.beforeEnter))for(const ne of y.beforeEnter)ue.push(Fi(ne,H,se));else ue.push(Fi(y.beforeEnter,H,se));return ue.push(U),be(ue)}).then(()=>(H.matched.forEach(y=>y.enterCallbacks={}),ue=Pl(D,"beforeRouteEnter",H,se,w),ue.push(U),be(ue))).then(()=>{ue=[];for(const y of o.list())ue.push(Fi(y,H,se));return ue.push(U),be(ue)}).catch(y=>ci(y,8)?y:Promise.reject(y))}function F(H,se,ue){a.list().forEach(ce=>w(()=>ce(H,se,ue)))}function Y(H,se,ue,ce,ke){const D=E(H,se);if(D)return D;const U=se===Ai,y=Jr?history.state:{};ue&&(ce||U?r.replace(H.fullPath,ft({scroll:U&&y&&y.scroll},ke)):r.push(H.fullPath,ke)),l.value=H,Re(H,se,ue,U),Se()}let q;function ae(){q||(q=r.listen((H,se,ue)=>{if(!xe.listening)return;const ce=h(H),ke=I(ce);if(ke){R(ft(ke,{replace:!0,force:!0}),ce).catch(Qs);return}c=ce;const D=l.value;Jr&&HE(sd(D.fullPath,ue.delta),el()),T(ce,D).catch(U=>ci(U,12)?U:ci(U,2)?(R(ft(S(U.to),{force:!0}),ce).then(y=>{ci(y,20)&&!ue.delta&&ue.type===po.pop&&r.go(-1,!1)}).catch(Qs),Promise.reject()):(ue.delta&&r.go(-ue.delta,!1),X(U,ce,D))).then(U=>{U=U||Y(ce,D,!1),U&&(ue.delta&&!ci(U,8)?r.go(-ue.delta,!1):ue.type===po.pop&&ci(U,20)&&r.go(-1,!1)),F(ce,D,U)}).catch(Qs)}))}let le=Us(),te=Us(),Z;function X(H,se,ue){Se(H);const ce=te.list();return ce.length?ce.forEach(ke=>ke(H,se,ue)):console.error(H),Promise.reject(H)}function me(){return Z&&l.value!==Ai?Promise.resolve():new Promise((H,se)=>{le.add([H,se])})}function Se(H){return Z||(Z=!H,ae(),le.list().forEach(([se,ue])=>H?ue(H):se()),le.reset()),H}function Re(H,se,ue,ce){const{scrollBehavior:ke}=t;if(!Jr||!ke)return Promise.resolve();const D=!ue&&zE(sd(H.fullPath,0))||(ce||!ue)&&history.state&&history.state.scroll||null;return Ku().then(()=>ke(H,se,D)).then(U=>U&&kE(U)).catch(U=>X(U,H,se))}const Be=H=>r.go(H);let Je;const oe=new Set,xe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:t,push:x,replace:P,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:me,install(H){const se=this;H.component("RouterLink",fM),H.component("RouterView",mM),H.config.globalProperties.$router=se,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Cn(l)}),Jr&&!Je&&l.value===Ai&&(Je=!0,x(r.location).catch(ke=>{}));const ue={};for(const ke in Ai)Object.defineProperty(ue,ke,{get:()=>l.value[ke],enumerable:!0});H.provide(mf,se),H.provide(Bg,mm(ue)),H.provide(Hc,l);const ce=H.unmount;oe.add(H),H.unmount=function(){oe.delete(H),oe.size<1&&(c=Ai,q&&q(),q=null,l.value=Ai,Je=!1,Z=!1),ce()}}};function be(H){return H.reduce((se,ue)=>se.then(()=>w(ue)),Promise.resolve())}return xe}function _M(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>hs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hs(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="177",vM=0,Sd=1,xM=2,kg=1,Hg=2,mi=3,Xi=0,hn=1,xi=2,Vi=0,rs=1,yd=2,Ed=3,Md=4,SM=5,pr=100,yM=101,EM=102,MM=103,bM=104,TM=200,wM=201,AM=202,RM=203,zc=204,Vc=205,CM=206,PM=207,LM=208,IM=209,DM=210,UM=211,NM=212,OM=213,FM=214,Gc=0,Wc=1,Xc=2,ps=3,$c=4,qc=5,jc=6,Yc=7,tl=0,BM=1,kM=2,Gi=0,HM=1,zM=2,VM=3,GM=4,WM=5,XM=6,$M=7,zg=300,ms=301,gs=302,Kc=303,Zc=304,nl=306,mo=1e3,_r=1001,Jc=1002,Sn=1003,qM=1004,zo=1005,ei=1006,Ll=1007,vr=1008,si=1009,Vg=1010,Gg=1011,go=1012,_f=1013,wr=1014,ti=1015,Ro=1016,vf=1017,xf=1018,_o=1020,Wg=35902,Xg=1021,$g=1022,Bn=1023,vo=1026,xo=1027,Sf=1028,yf=1029,qg=1030,Ef=1031,Mf=1033,ga=33776,_a=33777,va=33778,xa=33779,Qc=35840,eu=35841,tu=35842,nu=35843,iu=36196,ru=37492,su=37496,ou=37808,au=37809,lu=37810,cu=37811,uu=37812,fu=37813,hu=37814,du=37815,pu=37816,mu=37817,gu=37818,_u=37819,vu=37820,xu=37821,Sa=36492,Su=36494,yu=36495,jg=36283,Eu=36284,Mu=36285,bu=36286,jM=3200,YM=3201,bf=0,KM=1,ki="",wn="srgb",_s="srgb-linear",Na="linear",_t="srgb",Ur=7680,bd=519,ZM=512,JM=513,QM=514,Yg=515,eb=516,tb=517,nb=518,ib=519,Td=35044,wd="300 es",Mi=2e3,Oa=2001;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ad=1234567;const to=Math.PI/180,vs=180/Math.PI;function bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Tf(t,e){return(t%e+e)%e}function rb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function sb(t,e,n){return t!==e?(n-t)/(e-t):0}function no(t,e,n){return(1-n)*t+n*e}function ob(t,e,n,i){return no(t,e,1-Math.exp(-n*i))}function ab(t,e=1){return e-Math.abs(Tf(t,e*2)-e)}function lb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function cb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ub(t,e){return t+Math.floor(Math.random()*(e-t+1))}function fb(t,e){return t+Math.random()*(e-t)}function hb(t){return t*(.5-Math.random())}function db(t){t!==void 0&&(Ad=t);let e=Ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pb(t){return t*to}function mb(t){return t*vs}function gb(t){return(t&t-1)===0&&t!==0}function _b(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function xb(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Vo={DEG2RAD:to,RAD2DEG:vs,generateUUID:bs,clamp:et,euclideanModulo:Tf,mapLinear:rb,inverseLerp:sb,lerp:no,damp:ob,pingpong:ab,smoothstep:lb,smootherstep:cb,randInt:ub,randFloat:fb,randFloatSpread:hb,seededRandom:db,degToRad:pb,radToDeg:mb,isPowerOfTwo:gb,ceilPowerOfTwo:_b,floorPowerOfTwo:vb,setQuaternionFromProperEuler:xb,normalize:tn,denormalize:Qr};class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*v,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const P=Math.sqrt(E),I=Math.atan2(P,h*S);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}const x=a*S;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,f=f*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Il.copy(this).projectOnVector(e),this.sub(Il)}reflect(e){return this.sub(Il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Il=new W,Rd=new Co;class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],S=r[1],E=r[4],x=r[7],P=r[2],I=r[5],R=r[8];return s[0]=o*v+a*S+l*P,s[3]=o*m+a*E+l*I,s[6]=o*h+a*x+l*R,s[1]=c*v+u*S+f*P,s[4]=c*m+u*E+f*I,s[7]=c*h+u*x+f*R,s[2]=d*v+p*S+_*P,s[5]=d*m+p*E+_*I,s[8]=d*h+p*x+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Dl.makeScale(e,n)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Dl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dl=new Ke;function Kg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function So(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sb(){const t=So("canvas");return t.style.display="block",t}const Cd={};function ss(t){t in Cd||(Cd[t]=!0,console.warn(t))}function yb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Eb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mb(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bb(){const t={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Na:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[_s]:{primaries:e,whitePoint:i,transfer:Na,toXYZ:Pd,fromXYZ:Ld,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:Pd,fromXYZ:Ld,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),t}const at=bb();function bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class Tb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=So("canvas")),Nr.width=e.width,Nr.height=e.height;const r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=So("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bi(n[i]/255)*255):n[i]=bi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wb=0;class wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ul(r[o].image)):s.push(Ul(r[o]))}else s=Ul(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ul(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Tb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ab=0;const Nl=new W;class Zt extends Ms{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=_r,r=_r,s=ei,o=vr,a=Bn,l=si,c=Zt.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=bs(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nl).x}get height(){return this.source.getSize(Nl).y}get depth(){return this.source.getSize(Nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=zg;Zt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,P=(h+1)/2,I=(u+d)/4,R=(f+v)/4,O=(_+m)/4;return E>x&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=I/i,s=R/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=I/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=R/s,r=O/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rb extends Ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Zt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends Rb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zg extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cb extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Wo.subVectors(this.max,Ns),Or.subVectors(e.a,Ns),Fr.subVectors(e.b,Ns),Br.subVectors(e.c,Ns),Ri.subVectors(Fr,Or),Ci.subVectors(Br,Fr),sr.subVectors(Or,Br);let n=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-sr.z,sr.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,sr.z,0,-sr.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-sr.y,sr.x,0];return!Ol(n,Or,Fr,Br,Wo)||(n=[1,0,0,0,1,0,0,0,1],!Ol(n,Or,Fr,Br,Wo))?!1:(Xo.crossVectors(Ri,Ci),n=[Xo.x,Xo.y,Xo.z],Ol(n,Or,Fr,Br,Wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new W,new W,new W,new W,new W,new W,new W,new W],Dn=new W,Go=new Pr,Or=new W,Fr=new W,Br=new W,Ri=new W,Ci=new W,sr=new W,Ns=new W,Wo=new W,Xo=new W,or=new W;function Ol(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Pb=new Pr,Os=new W,Fl=new W;class Po{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Pb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Fl)),this.expandByPoint(Os.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new W,Bl=new W,$o=new W,Pi=new W,kl=new W,qo=new W,Hl=new W;class Jg{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bl.copy(e).add(n).multiplyScalar(.5),$o.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Bl);const s=e.distanceTo(n)*.5,o=-this.direction.dot($o),a=Pi.dot(this.direction),l=-Pi.dot($o),c=Pi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bl).addScaledVector($o,d),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){kl.subVectors(n,e),qo.subVectors(i,e),Hl.crossVectors(kl,qo);let o=this.direction.dot(Hl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(Pi,qo));if(l<0)return null;const c=a*this.direction.dot(kl.cross(Pi));if(c<0||l+c>o)return null;const u=-a*Pi.dot(Hl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),o=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lb,e,Ib)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Li.crossVectors(i,gn),Li.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Li.crossVectors(i,gn)),Li.normalize(),jo.crossVectors(gn,Li),r[0]=Li.x,r[4]=jo.x,r[8]=gn.x,r[1]=Li.y,r[5]=jo.y,r[9]=gn.y,r[2]=Li.z,r[6]=jo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],S=i[3],E=i[7],x=i[11],P=i[15],I=r[0],R=r[4],O=r[8],w=r[12],T=r[1],F=r[5],Y=r[9],q=r[13],ae=r[2],le=r[6],te=r[10],Z=r[14],X=r[3],me=r[7],Se=r[11],Re=r[15];return s[0]=o*I+a*T+l*ae+c*X,s[4]=o*R+a*F+l*le+c*me,s[8]=o*O+a*Y+l*te+c*Se,s[12]=o*w+a*q+l*Z+c*Re,s[1]=u*I+f*T+d*ae+p*X,s[5]=u*R+f*F+d*le+p*me,s[9]=u*O+f*Y+d*te+p*Se,s[13]=u*w+f*q+d*Z+p*Re,s[2]=_*I+v*T+m*ae+h*X,s[6]=_*R+v*F+m*le+h*me,s[10]=_*O+v*Y+m*te+h*Se,s[14]=_*w+v*q+m*Z+h*Re,s[3]=S*I+E*T+x*ae+P*X,s[7]=S*R+E*F+x*le+P*me,s[11]=S*O+E*Y+x*te+P*Se,s[15]=S*w+E*q+x*Z+P*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,E=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-_*f*c+_*a*p-o*v*p-u*a*h+o*f*h,P=_*f*l-u*v*l-_*a*d+o*v*d+u*a*m-o*f*m,I=n*S+i*E+r*x+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=S*R,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*R,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*R,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*R,e[4]=E*R,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*h+n*d*h)*R,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*h-n*l*h)*R,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*R,e[8]=x*R,e[9]=(_*f*s-u*v*s-_*i*p+n*v*p+u*i*h-n*f*h)*R,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*h+n*a*h)*R,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*R,e[12]=P*R,e[13]=(u*v*r-_*f*r+_*i*d-n*v*d-u*i*m+n*f*m)*R,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*R,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,v=o*u,m=o*f,h=a*f,S=l*c,E=l*u,x=l*f,P=i.x,I=i.y,R=i.z;return r[0]=(1-(v+h))*P,r[1]=(p+x)*P,r[2]=(_-E)*P,r[3]=0,r[4]=(p-x)*I,r[5]=(1-(d+h))*I,r[6]=(m+S)*I,r[7]=0,r[8]=(_+E)*R,r[9]=(m-S)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const o=kr.set(r[4],r[5],r[6]).length(),a=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/o,f=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Mi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Oa)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,v;if(a===Mi)_=(o+s)*f,v=-2*f;else if(a===Oa)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new W,Un=new Et,Lb=new W(0,0,0),Ib=new W(1,1,1),Li=new W,jo=new W,gn=new W,Id=new Et,Dd=new Co;class Wn{constructor(e=0,n=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Id,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Db=0;const Ud=new W,Hr=new Co,hi=new Et,Yo=new W,Fs=new W,Ub=new W,Nb=new Co,Nd=new W(1,0,0),Od=new W(0,1,0),Fd=new W(0,0,1),Bd={type:"added"},Ob={type:"removed"},zr={type:"childadded",child:null},zl={type:"childremoved",child:null};class Bt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new W,n=new Wn,i=new Co,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,n){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yo.copy(e):Yo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Fs,Yo,this.up):hi.lookAt(Yo,Fs,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(hi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bd),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ob),zl.child=e,this.dispatchEvent(zl),zl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bd),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Bt.DEFAULT_UP=new W(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new W,di=new W,Vl=new W,pi=new W,Vr=new W,Gr=new W,kd=new W,Gl=new W,Wl=new W,Xl=new W,$l=new xt,ql=new xt,jl=new xt;class On{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),di.subVectors(i,n),Vl.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(di),l=Nn.dot(Vl),c=di.dot(di),u=di.dot(Vl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return $l.setScalar(0),ql.setScalar(0),jl.setScalar(0),$l.fromBufferAttribute(e,n),ql.fromBufferAttribute(e,i),jl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($l,s.x),o.addScaledVector(ql,s.y),o.addScaledVector(jl,s.z),o}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),di.subVectors(e,n),Nn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Vr.subVectors(r,i),Gr.subVectors(s,i),Gl.subVectors(e,i);const l=Vr.dot(Gl),c=Gr.dot(Gl);if(l<=0&&c<=0)return n.copy(i);Wl.subVectors(e,r);const u=Vr.dot(Wl),f=Gr.dot(Wl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Vr,o);Xl.subVectors(e,s);const p=Vr.dot(Xl),_=Gr.dot(Xl);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Gr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return kd.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(kd,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Yl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=Tf(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Yl(o,s,e+1/3),this.g=Yl(o,s,e),this.b=Yl(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=Qg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return at.workingToColorSpace(qt.copy(this),e),Math.round(et(qt.r*255,0,255))*65536+Math.round(et(qt.g*255,0,255))*256+Math.round(et(qt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=wn){at.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Ko);const i=no(Ii.h,Ko.h,n),r=no(Ii.s,Ko.s,n),s=no(Ii.l,Ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new it;it.NAMES=Qg;let Fb=0;class Ts extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=rs,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Vc,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zc&&(i.blendSrc=this.blendSrc),this.blendDst!==Vc&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rf extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new W,Zo=new tt;let Bb=0;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Td,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zo.fromBufferAttribute(this,n),Zo.applyMatrix3(e),this.setXY(n,Zo.x,Zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qr(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qr(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qr(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Td&&(e.usage=this.usage),e}}class e_ extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class t_ extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ii extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kb=0;const Tn=new Et,Kl=new Bt,Wr=new W,_n=new Pr,Bs=new Pr,zt=new W;class er extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kg(e)?t_:e_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return Kl.lookAt(e),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ii(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(_n.min,Bs.min),_n.expandByPoint(zt),zt.addVectors(_n.max,Bs.max),_n.expandByPoint(zt)):(_n.expandByPoint(Bs.min),_n.expandByPoint(Bs.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(e,c),zt.add(Wr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new W,l[O]=new W;const c=new W,u=new W,f=new W,d=new tt,p=new tt,_=new tt,v=new W,m=new W;function h(O,w,T){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[O].add(v),a[w].add(v),a[T].add(v),l[O].add(m),l[w].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,w=S.length;O<w;++O){const T=S[O],F=T.start,Y=T.count;for(let q=F,ae=F+Y;q<ae;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new W,x=new W,P=new W,I=new W;function R(O){P.fromBufferAttribute(r,O),I.copy(P);const w=a[O];E.copy(w),E.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(I,w);const F=x.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,w=S.length;O<w;++O){const T=S[O],F=T.start,Y=T.count;for(let q=F,ae=F+Y;q<ae;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new er,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hd=new Et,ar=new Jg,Jo=new Po,zd=new W,Qo=new W,ea=new W,ta=new W,Zl=new W,na=new W,Vd=new W,ia=new W;class Wt extends Bt{constructor(e=new er,n=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Zl.fromBufferAttribute(f,e),o?na.addScaledVector(Zl,u):na.addScaledVector(Zl.sub(n),u))}n.add(na)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Jo.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Jo,zd)===null||ar.origin.distanceToSquared(zd)>(e.far-e.near)**2))&&(Hd.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,P=E;x<P;x+=3){const I=a.getX(x),R=a.getX(x+1),O=a.getX(x+2);r=ra(this,h,e,i,c,u,f,I,R,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=ra(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,P=E;x<P;x+=3){const I=x,R=x+1,O=x+2;r=ra(this,h,e,i,c,u,f,I,R,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=m,E=m+1,x=m+2;r=ra(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Hb(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xi,a),l===null)return null;ia.copy(a),ia.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ia);return c<n.near||c>n.far?null:{distance:c,point:ia.clone(),object:t}}function ra(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Qo),t.getVertexPosition(l,ea),t.getVertexPosition(c,ta);const u=Hb(t,e,n,i,Qo,ea,ta,Vd);if(u){const f=new W;On.getBarycoord(Vd,Qo,ea,ta,f),r&&(u.uv=On.getInterpolatedAttribute(r,a,l,c,f,new tt)),s&&(u.uv1=On.getInterpolatedAttribute(s,a,l,c,f,new tt)),o&&(u.normal=On.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};On.getNormal(Qo,ea,ta,d.normal),u.face=d,u.barycoord=f}return u}class ws extends er{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ii(c,3)),this.setAttribute("normal",new ii(u,3)),this.setAttribute("uv",new ii(f,2));function _(v,m,h,S,E,x,P,I,R,O,w){const T=x/R,F=P/O,Y=x/2,q=P/2,ae=I/2,le=R+1,te=O+1;let Z=0,X=0;const me=new W;for(let Se=0;Se<te;Se++){const Re=Se*F-q;for(let Be=0;Be<le;Be++){const Je=Be*T-Y;me[v]=Je*S,me[m]=Re*E,me[h]=ae,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[h]=I>0?1:-1,u.push(me.x,me.y,me.z),f.push(Be/R),f.push(1-Se/O),Z+=1}}for(let Se=0;Se<O;Se++)for(let Re=0;Re<R;Re++){const Be=d+Re+le*Se,Je=d+Re+le*(Se+1),oe=d+(Re+1)+le*(Se+1),xe=d+(Re+1)+le*Se;l.push(Be,Je,xe),l.push(Je,oe,xe),X+=6}a.addGroup(p,X,w),p+=X,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=xs(t[n]);for(const r in i)e[r]=i[r]}return e}function zb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function n_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Vb={clone:xs,merge:nn};var Gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gb,this.fragmentShader=Wb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class i_ extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new W,Gd=new tt,Wd=new tt;class fn extends i_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,n){return this.getViewBounds(e,Gd,Wd),n.subVectors(Wd,Gd)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Xr=-90,$r=1;class Xb extends Bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(Xr,$r,e,n);r.layers=this.layers,this.add(r);const s=new fn(Xr,$r,e,n);s.layers=this.layers,this.add(s);const o=new fn(Xr,$r,e,n);o.layers=this.layers,this.add(o);const a=new fn(Xr,$r,e,n);a.layers=this.layers,this.add(a);const l=new fn(Xr,$r,e,n);l.layers=this.layers,this.add(l);const c=new fn(Xr,$r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class r_ extends Zt{constructor(e=[],n=ms,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new r_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ws(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new Wt(r,s),a=n.minFilter;return n.minFilter===vr&&(n.minFilter=ei),new Xb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class sa extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qb={type:"move"};class Jl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class s_ extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jb extends Zt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Sn,u=Sn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xd extends Vn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qr=new Et,$d=new Et,oa=[],qd=new Pr,Yb=new Et,ks=new Wt,Hs=new Po;class Kb extends Wt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Xd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Yb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,qr),qd.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(qd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Po),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,qr),Hs.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(Hs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),e.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qr),$d.multiplyMatrices(i,qr),ks.matrixWorld=$d,ks.raycast(e,oa);for(let o=0,a=oa.length;o<a;o++){const l=oa[o];l.instanceId=s,l.object=this,n.push(l)}oa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Xd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new jb(new Float32Array(r*this.count),r,this.count,Sf,ti));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ql=new W,Zb=new W,Jb=new Ke;class hr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ql.subVectors(i,n).cross(Zb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Jb.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Po,aa=new W;class Cf{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+_,x+S).normalize(),i[3].setComponents(l-o,d-u,m-_,x-S).normalize(),i[4].setComponents(l-a,d-f,m-v,x-E).normalize(),n===Mi)i[5].setComponents(l+a,d+f,m+v,x+E).normalize();else if(n===Oa)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(aa.x=r.normal.x>0?e.max.x:e.min.x,aa.y=r.normal.y>0?e.max.y:e.min.y,aa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class o_ extends Zt{constructor(e,n,i=wr,r,s,o,a=Sn,l=Sn,c,u=vo,f=1){if(u!==vo&&u!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ss extends er{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let E=0;E<c;E++){const x=E*f-s;_.push(x,-S,0),v.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const E=S+c*h,x=S+c*(h+1),P=S+1+c*(h+1),I=S+1+c*h;p.push(E,x,I),p.push(x,P,I)}this.setIndex(p),this.setAttribute("position",new ii(_,3)),this.setAttribute("normal",new ii(v,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pf extends er{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new W,d=new W,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const S=[],E=h/i;let x=0;h===0&&o===0?x=.5/n:h===i&&l===Math.PI&&(x=-.5/n);for(let P=0;P<=n;P++){const I=P/n;f.x=-e*Math.cos(r+I*s)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(r+I*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(I+x,1-E),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<n;S++){const E=u[h][S+1],x=u[h][S],P=u[h+1][S],I=u[h+1][S+1];(h!==0||o>0)&&p.push(E,x,I),(h!==i-1||l<Math.PI)&&p.push(x,P,I)}this.setIndex(p),this.setAttribute("position",new ii(_,3)),this.setAttribute("normal",new ii(v,3)),this.setAttribute("uv",new ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qb extends Ts{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class a_ extends Ts{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eT extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tT extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class nT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const iT=new nT;class Lf{constructor(e){this.manager=e!==void 0?e:iT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lf.DEFAULT_MATERIAL_NAME="__DEFAULT";class rT extends Lf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=jd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=So("img");function l(){u(),jd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class sT extends Lf{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,o=new rT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class If extends Bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const ec=new Et,Yd=new W,Kd=new W;class l_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Yd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yd),Kd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Kd),n.updateMatrixWorld(),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ec)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oT extends l_{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=vs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Zd extends If{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new oT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Jd=new Et,zs=new W,tc=new W;class aT extends l_{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(zs),tc.copy(i.position),tc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(tc),i.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),Jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd)}}class Qd extends If{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new aT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class c_ extends i_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class u_ extends If{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class lT extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class f_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ep(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ep();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ep(){return performance.now()}const tp=new Et;class np{constructor(e,n,i=0,r=1/0){this.ray=new Jg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Af,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return tp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tp),this}intersectObject(e,n=!0,i=[]){return Tu(e,this,i,n),i.sort(ip),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Tu(e[r],this,i,n);return i.sort(ip),i}}function ip(t,e){return t.distance-e.distance}function Tu(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Tu(s[o],e,n,!0)}}function rp(t,e,n,i){const r=cT(i);switch(n){case Xg:return t*e;case Sf:return t*e/r.components*r.byteLength;case yf:return t*e/r.components*r.byteLength;case qg:return t*e*2/r.components*r.byteLength;case Ef:return t*e*2/r.components*r.byteLength;case $g:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case Mf:return t*e*4/r.components*r.byteLength;case ga:case _a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case va:case xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eu:case nu:return Math.max(t,16)*Math.max(e,8)/4;case Qc:case tu:return Math.max(t,8)*Math.max(e,8)/2;case iu:case ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case du:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _u:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sa:case Su:case yu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jg:case Eu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mu:case bu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cT(t){switch(t){case si:case Vg:return{byteLength:1,components:1};case go:case Gg:case Ro:return{byteLength:2,components:1};case vf:case xf:return{byteLength:2,components:4};case wr:case _f:case ti:return{byteLength:4,components:1};case Wg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function uT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_T=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ST=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zT="gl_FragColor = linearToOutputTexel( gl_FragColor );",VT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,i1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,r1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,c1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,N1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ew=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Aw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ow=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:fT,alphahash_pars_fragment:hT,alphamap_fragment:dT,alphamap_pars_fragment:pT,alphatest_fragment:mT,alphatest_pars_fragment:gT,aomap_fragment:_T,aomap_pars_fragment:vT,batching_pars_vertex:xT,batching_vertex:ST,begin_vertex:yT,beginnormal_vertex:ET,bsdfs:MT,iridescence_fragment:bT,bumpmap_pars_fragment:TT,clipping_planes_fragment:wT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:PT,color_pars_fragment:LT,color_pars_vertex:IT,color_vertex:DT,common:UT,cube_uv_reflection_fragment:NT,defaultnormal_vertex:OT,displacementmap_pars_vertex:FT,displacementmap_vertex:BT,emissivemap_fragment:kT,emissivemap_pars_fragment:HT,colorspace_fragment:zT,colorspace_pars_fragment:VT,envmap_fragment:GT,envmap_common_pars_fragment:WT,envmap_pars_fragment:XT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:i1,envmap_vertex:qT,fog_vertex:jT,fog_pars_vertex:YT,fog_fragment:KT,fog_pars_fragment:ZT,gradientmap_pars_fragment:JT,lightmap_pars_fragment:QT,lights_lambert_fragment:e1,lights_lambert_pars_fragment:t1,lights_pars_begin:n1,lights_toon_fragment:r1,lights_toon_pars_fragment:s1,lights_phong_fragment:o1,lights_phong_pars_fragment:a1,lights_physical_fragment:l1,lights_physical_pars_fragment:c1,lights_fragment_begin:u1,lights_fragment_maps:f1,lights_fragment_end:h1,logdepthbuf_fragment:d1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:_1,map_pars_fragment:v1,map_particle_fragment:x1,map_particle_pars_fragment:S1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:E1,morphinstance_vertex:M1,morphcolor_vertex:b1,morphnormal_vertex:T1,morphtarget_pars_vertex:w1,morphtarget_vertex:A1,normal_fragment_begin:R1,normal_fragment_maps:C1,normal_pars_fragment:P1,normal_pars_vertex:L1,normal_vertex:I1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:N1,clearcoat_pars_fragment:O1,iridescence_pars_fragment:F1,opaque_fragment:B1,packing:k1,premultiplied_alpha_fragment:H1,project_vertex:z1,dithering_fragment:V1,dithering_pars_fragment:G1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:X1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:q1,shadowmap_vertex:j1,shadowmask_pars_fragment:Y1,skinbase_vertex:K1,skinning_pars_vertex:Z1,skinning_vertex:J1,skinnormal_vertex:Q1,specularmap_fragment:ew,specularmap_pars_fragment:tw,tonemapping_fragment:nw,tonemapping_pars_fragment:iw,transmission_fragment:rw,transmission_pars_fragment:sw,uv_pars_fragment:ow,uv_pars_vertex:aw,uv_vertex:lw,worldpos_vertex:cw,background_vert:uw,background_frag:fw,backgroundCube_vert:hw,backgroundCube_frag:dw,cube_vert:pw,cube_frag:mw,depth_vert:gw,depth_frag:_w,distanceRGBA_vert:vw,distanceRGBA_frag:xw,equirect_vert:Sw,equirect_frag:yw,linedashed_vert:Ew,linedashed_frag:Mw,meshbasic_vert:bw,meshbasic_frag:Tw,meshlambert_vert:ww,meshlambert_frag:Aw,meshmatcap_vert:Rw,meshmatcap_frag:Cw,meshnormal_vert:Pw,meshnormal_frag:Lw,meshphong_vert:Iw,meshphong_frag:Dw,meshphysical_vert:Uw,meshphysical_frag:Nw,meshtoon_vert:Ow,meshtoon_frag:Fw,points_vert:Bw,points_frag:kw,shadow_vert:Hw,shadow_frag:zw,sprite_vert:Vw,sprite_frag:Gw},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:nn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:nn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:nn([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:nn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:nn([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:nn([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:nn([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:nn([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const la={r:0,b:0,g:0},cr=new Wn,Ww=new Et;function Xw(t,e,n,i,r,s,o){const a=new it(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function v(E){let x=!1;const P=_(E);P===null?h(a,l):P&&P.isColor&&(h(P,1),x=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const P=_(x);P&&(P.isCubeTexture||P.mapping===nl)?(u===void 0&&(u=new Wt(new ws(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:xs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),cr.copy(x.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ww.makeRotationFromEuler(cr)),u.material.toneMapped=at.getTransfer(P.colorSpace)!==_t,(f!==P||d!==P.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Wt(new Ss(2,2),new $i({name:"BackgroundMaterial",uniforms:xs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(P.colorSpace)!==_t,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,x){E.getRGB(la,n_(t)),i.buffers.color.setClear(la.r,la.g,la.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:m,dispose:S}}function $w(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,F,Y,q,ae){let le=!1;const te=f(q,Y,F);s!==te&&(s=te,c(s.object)),le=p(T,q,Y,ae),le&&_(T,q,Y,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,x(T,F,Y,q),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,F,Y){const q=Y.wireframe===!0;let ae=i[T.id];ae===void 0&&(ae={},i[T.id]=ae);let le=ae[F.id];le===void 0&&(le={},ae[F.id]=le);let te=le[q];return te===void 0&&(te=d(l()),le[q]=te),te}function d(T){const F=[],Y=[],q=[];for(let ae=0;ae<n;ae++)F[ae]=0,Y[ae]=0,q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:q,object:T,attributes:{},index:null}}function p(T,F,Y,q){const ae=s.attributes,le=F.attributes;let te=0;const Z=Y.getAttributes();for(const X in Z)if(Z[X].location>=0){const Se=ae[X];let Re=le[X];if(Re===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Re=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Re=T.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;te++}return s.attributesNum!==te||s.index!==q}function _(T,F,Y,q){const ae={},le=F.attributes;let te=0;const Z=Y.getAttributes();for(const X in Z)if(Z[X].location>=0){let Se=le[X];Se===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),ae[X]=Re,te++}s.attributes=ae,s.attributesNum=te,s.index=q}function v(){const T=s.newAttributes;for(let F=0,Y=T.length;F<Y;F++)T[F]=0}function m(T){h(T,0)}function h(T,F){const Y=s.newAttributes,q=s.enabledAttributes,ae=s.attributeDivisors;Y[T]=1,q[T]===0&&(t.enableVertexAttribArray(T),q[T]=1),ae[T]!==F&&(t.vertexAttribDivisor(T,F),ae[T]=F)}function S(){const T=s.newAttributes,F=s.enabledAttributes;for(let Y=0,q=F.length;Y<q;Y++)F[Y]!==T[Y]&&(t.disableVertexAttribArray(Y),F[Y]=0)}function E(T,F,Y,q,ae,le,te){te===!0?t.vertexAttribIPointer(T,F,Y,ae,le):t.vertexAttribPointer(T,F,Y,q,ae,le)}function x(T,F,Y,q){v();const ae=q.attributes,le=Y.getAttributes(),te=F.defaultAttributeValues;for(const Z in le){const X=le[Z];if(X.location>=0){let me=ae[Z];if(me===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const Se=me.normalized,Re=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const Je=Be.buffer,oe=Be.type,xe=Be.bytesPerElement,be=oe===t.INT||oe===t.UNSIGNED_INT||me.gpuType===_f;if(me.isInterleavedBufferAttribute){const H=me.data,se=H.stride,ue=me.offset;if(H.isInstancedInterleavedBuffer){for(let ce=0;ce<X.locationSize;ce++)h(X.location+ce,H.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let ce=0;ce<X.locationSize;ce++)E(X.location+ce,Re/X.locationSize,oe,Se,se*xe,(ue+Re/X.locationSize*ce)*xe,be)}else{if(me.isInstancedBufferAttribute){for(let H=0;H<X.locationSize;H++)h(X.location+H,me.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let H=0;H<X.locationSize;H++)m(X.location+H);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let H=0;H<X.locationSize;H++)E(X.location+H,Re/X.locationSize,oe,Se,Re*xe,Re/X.locationSize*H*xe,be)}}else if(te!==void 0){const Se=te[Z];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(X.location,Se);break;case 3:t.vertexAttrib3fv(X.location,Se);break;case 4:t.vertexAttrib4fv(X.location,Se);break;default:t.vertexAttrib1fv(X.location,Se)}}}}S()}function P(){O();for(const T in i){const F=i[T];for(const Y in F){const q=F[Y];for(const ae in q)u(q[ae].object),delete q[ae];delete F[Y]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const F=i[T.id];for(const Y in F){const q=F[Y];for(const ae in q)u(q[ae].object),delete q[ae];delete F[Y]}delete i[T.id]}function R(T){for(const F in i){const Y=i[F];if(Y[T.id]===void 0)continue;const q=Y[T.id];for(const ae in q)u(q[ae].object),delete q[ae];delete Y[T.id]}}function O(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function qw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Bn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const O=R===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==si&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!O)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:I}}function Yw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new hr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let x=h.clippingState||null;l.value=x,x=u(_,d,E,p);for(let P=0;P!==E;++P)x[P]=n[P];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Kw(t){let e=new WeakMap;function n(o,a){return a===Kc?o.mapping=ms:a===Zc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kc||a===Zc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $b(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const es=4,sp=[.125,.215,.35,.446,.526,.582],mr=20,nc=new c_,op=new it;let ic=null,rc=0,sc=0,oc=!1;const dr=(1+Math.sqrt(5))/2,jr=1/dr,ap=[new W(-dr,jr,0),new W(dr,jr,0),new W(-jr,0,dr),new W(jr,0,dr),new W(0,dr,-jr),new W(0,dr,jr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Zw=new W;class lp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Zw}=s;ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ic,rc,sc),this._renderer.xr.enabled=oc,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ic=this._renderer.getRenderTarget(),rc=this._renderer.getActiveCubeFace(),sc=this._renderer.getActiveMipmapLevel(),oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ro,format:Bn,colorSpace:_s,depthBuffer:!1},r=cp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jw(s)),this._blurMaterial=Qw(s,e,n)}return r}_compileMaterial(e){const n=new Wt(this._lodPlanes[0],e);this._renderer.compile(n,nc)}_sceneToCubeUV(e,n,i,r,s){const l=new fn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(op),f.toneMapping=Gi,f.autoClear=!1;const _=new Rf({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new Wt(new ws,_);let m=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,m=!0):(_.color.copy(op),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;ca(r,E*x,S>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ca(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,nc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ap[(r-s-1)%ap.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const h=[];let S=0;for(let R=0;R<mr;++R){const O=R/v,w=Math.exp(-O*O/2);h.push(w),R===0?S+=w:R<m&&(S+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const x=this._sizeLods[r],P=3*x*(r>E-es?r-E+es:0),I=4*(this._cubeSize-x);ca(n,P,I,3*x,2*x),l.setRenderTarget(n),l.render(f,nc)}}function Jw(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+sp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-es?l=sp[o-t+es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,O=I>2?0:-1,w=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];S.set(w,v*_*I),E.set(d,m*_*I);const T=[I,I,I,I,I,I];x.set(T,h*_*I)}const P=new er;P.setAttribute("position",new Vn(S,v)),P.setAttribute("uv",new Vn(E,m)),P.setAttribute("faceIndex",new Vn(x,h)),e.push(P),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function cp(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ca(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Qw(t,e,n){const i=new Float32Array(mr),r=new W(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function up(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function fp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kc||l===Zc,u=l===ms||l===gs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new lp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new lp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nA(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,x=S.length;E<x;E+=3){const P=S[E+0],I=S[E+1],R=S[E+2];d.push(P,I,I,R,R,P)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const P=E+0,I=E+1,R=E+2;d.push(P,I,I,R,R,P)}}else return;const m=new(Kg(d)?t_:e_)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function iA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S]*v[S];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function rA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sA(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*I*4*f),O=new Zg(R,P,I,f);O.type=ti,O.needsUpdate=!0;const w=x*4;for(let F=0;F<f;F++){const Y=h[F],q=S[F],ae=E[F],le=P*I*4*F;for(let te=0;te<Y.count;te++){const Z=te*w;_===!0&&(r.fromBufferAttribute(Y,te),R[le+Z+0]=r.x,R[le+Z+1]=r.y,R[le+Z+2]=r.z,R[le+Z+3]=0),v===!0&&(r.fromBufferAttribute(q,te),R[le+Z+4]=r.x,R[le+Z+5]=r.y,R[le+Z+6]=r.z,R[le+Z+7]=0),m===!0&&(r.fromBufferAttribute(ae,te),R[le+Z+8]=r.x,R[le+Z+9]=r.y,R[le+Z+10]=r.z,R[le+Z+11]=ae.itemSize===4?r.w:1)}}d={count:f,texture:O,size:new tt(P,I)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function oA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const d_=new Zt,hp=new o_(1,1),p_=new Zg,m_=new Cb,g_=new r_,dp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),_p=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=dp[r];if(s===void 0&&(s=new Float32Array(r),dp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function il(t,e){let n=pp[e];n===void 0&&(n=new Int32Array(e),pp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function fA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(kt(n,i))return;_p.set(i),t.uniformMatrix2fv(this.addr,!1,_p),Ht(n,i)}}function hA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(kt(n,i))return;gp.set(i),t.uniformMatrix3fv(this.addr,!1,gp),Ht(n,i)}}function dA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(kt(n,i))return;mp.set(i),t.uniformMatrix4fv(this.addr,!1,mp),Ht(n,i)}}function pA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function vA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function EA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(hp.compareFunction=Yg,s=hp):s=d_,n.setTexture2D(e||s,r)}function MA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||m_,r)}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||g_,r)}function TA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||p_,r)}function wA(t){switch(t){case 5126:return aA;case 35664:return lA;case 35665:return cA;case 35666:return uA;case 35674:return fA;case 35675:return hA;case 35676:return dA;case 5124:case 35670:return pA;case 35667:case 35671:return mA;case 35668:case 35672:return gA;case 35669:case 35673:return _A;case 5125:return vA;case 36294:return xA;case 36295:return SA;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return TA}}function AA(t,e){t.uniform1fv(this.addr,e)}function RA(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function CA(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function PA(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function LA(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function IA(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function DA(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UA(t,e){t.uniform1iv(this.addr,e)}function NA(t,e){t.uniform2iv(this.addr,e)}function OA(t,e){t.uniform3iv(this.addr,e)}function FA(t,e){t.uniform4iv(this.addr,e)}function BA(t,e){t.uniform1uiv(this.addr,e)}function kA(t,e){t.uniform2uiv(this.addr,e)}function HA(t,e){t.uniform3uiv(this.addr,e)}function zA(t,e){t.uniform4uiv(this.addr,e)}function VA(t,e,n){const i=this.cache,r=e.length,s=il(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||d_,s[o])}function GA(t,e,n){const i=this.cache,r=e.length,s=il(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||m_,s[o])}function WA(t,e,n){const i=this.cache,r=e.length,s=il(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||g_,s[o])}function XA(t,e,n){const i=this.cache,r=e.length,s=il(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||p_,s[o])}function $A(t){switch(t){case 5126:return AA;case 35664:return RA;case 35665:return CA;case 35666:return PA;case 35674:return LA;case 35675:return IA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return NA;case 35668:case 35672:return OA;case 35669:case 35673:return FA;case 5125:return BA;case 36294:return kA;case 36295:return HA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return GA;case 35680:case 36300:case 36308:case 36293:return WA;case 36289:case 36303:case 36311:case 36292:return XA}}class qA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wA(n.type)}}class jA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$A(n.type)}}class YA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ac=/(\w+)(\])?(\[|\.)?/g;function vp(t,e){t.seq.push(e),t.map[e.id]=e}function KA(t,e,n){const i=t.name,r=i.length;for(ac.lastIndex=0;;){const s=ac.exec(i),o=ac.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vp(n,c===void 0?new qA(a,t,e):new jA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new YA(a),vp(n,f)),n=f}}}class ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function xp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZA=37297;let JA=0;function QA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Sp=new Ke;function eR(t){at._getMatrix(Sp,at.workingColorSpace,t);const e=`mat3( ${Sp.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case Na:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+QA(t.getShaderSource(e),o)}else return r}function tR(t,e){const n=eR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nR(t,e){let n;switch(e){case HM:n="Linear";break;case zM:n="Reinhard";break;case VM:n="Cineon";break;case GM:n="ACESFilmic";break;case XM:n="AgX";break;case $M:n="Neutral";break;case WM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ua=new W;function iR(){at.getLuminanceCoefficients(ua);const t=ua.x.toFixed(4),e=ua.y.toFixed(4),n=ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function sR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Ep(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(t){return t.replace(aR,cR)}const lR=new Map;function cR(t,e){let n=Ze[e];if(n===void 0){const i=lR.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wu(n)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(t){return t.replace(uR,fR)}function fR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Hg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function dR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case BM:e="ENVMAP_BLENDING_MIX";break;case kM:e="ENVMAP_BLENDING_ADD";break}return e}function gR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _R(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hR(n),c=dR(n),u=pR(n),f=mR(n),d=gR(n),p=rR(n),_=sR(s),v=r.createProgram();let m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),h.length>0&&(h+=`
`)):(m=[Tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),h=[Tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Gi?nR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,tR("linearToOutputTexel",n.outputColorSpace),iR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=wu(o),o=Ep(o,n),o=Mp(o,n),a=wu(a),a=Ep(a,n),a=Mp(a,n),o=bp(o),a=bp(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+m+o,x=S+h+a,P=xp(r,r.VERTEX_SHADER,E),I=xp(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,I),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(F){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),q=r.getShaderInfoLog(P).trim(),ae=r.getShaderInfoLog(I).trim();let le=!0,te=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(le=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,I);else{const Z=yp(r,P,"vertex"),X=yp(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+Z+`
`+X)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||ae==="")&&(te=!1);te&&(F.diagnostics={runnable:le,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:ae,prefix:h}})}r.deleteShader(P),r.deleteShader(I),O=new ya(r,v),w=oR(r,v)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,ZA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=I,this}let vR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new SR(e),n.set(e,i)),i}}class SR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function yR(t,e,n,i,r,s,o){const a=new Af,l=new xR,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,T,F,Y,q){const ae=Y.fog,le=q.geometry,te=w.isMeshStandardMaterial?Y.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||te),X=Z&&Z.mapping===nl?Z.image.height:null,me=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Se=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Re=Se!==void 0?Se.length:0;let Be=0;le.morphAttributes.position!==void 0&&(Be=1),le.morphAttributes.normal!==void 0&&(Be=2),le.morphAttributes.color!==void 0&&(Be=3);let Je,oe,xe,be;if(me){const dt=Jn[me];Je=dt.vertexShader,oe=dt.fragmentShader}else Je=w.vertexShader,oe=w.fragmentShader,l.update(w),xe=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const H=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),ue=q.isInstancedMesh===!0,ce=q.isBatchedMesh===!0,ke=!!w.map,D=!!w.matcap,U=!!Z,y=!!w.aoMap,ne=!!w.lightMap,K=!!w.bumpMap,Q=!!w.normalMap,b=!!w.displacementMap,C=!!w.emissiveMap,N=!!w.metalnessMap,k=!!w.roughnessMap,ge=w.anisotropy>0,M=w.clearcoat>0,g=w.dispersion>0,L=w.iridescence>0,z=w.sheen>0,j=w.transmission>0,$=ge&&!!w.anisotropyMap,Ee=M&&!!w.clearcoatMap,de=M&&!!w.clearcoatNormalMap,Te=M&&!!w.clearcoatRoughnessMap,Ce=L&&!!w.iridescenceMap,he=L&&!!w.iridescenceThicknessMap,Pe=z&&!!w.sheenColorMap,Ue=z&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,ye=!!w.specularColorMap,$e=!!w.specularIntensityMap,B=j&&!!w.transmissionMap,we=j&&!!w.thicknessMap,pe=!!w.gradientMap,De=!!w.alphaMap,_e=w.alphaTest>0,fe=!!w.alphaHash,Oe=!!w.extensions;let qe=Gi;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qe=t.toneMapping);const bt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:oe,defines:w.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:ce,batchingColor:ce&&q._colorsTexture!==null,instancing:ue,instancingColor:ue&&q.instanceColor!==null,instancingMorph:ue&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:D,envMap:U,envMapMode:U&&Z.mapping,envMapCubeUVHeight:X,aoMap:y,lightMap:ne,bumpMap:K,normalMap:Q,displacementMap:d&&b,emissiveMap:C,normalMapObjectSpace:Q&&w.normalMapType===KM,normalMapTangentSpace:Q&&w.normalMapType===bf,metalnessMap:N,roughnessMap:k,anisotropy:ge,anisotropyMap:$,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:g,iridescence:L,iridescenceMap:Ce,iridescenceThicknessMap:he,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:ye,specularIntensityMap:$e,transmission:j,transmissionMap:B,thicknessMap:we,gradientMap:pe,opaque:w.transparent===!1&&w.blending===rs&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:fe,combine:w.combine,mapUv:ke&&v(w.map.channel),aoMapUv:y&&v(w.aoMap.channel),lightMapUv:ne&&v(w.lightMap.channel),bumpMapUv:K&&v(w.bumpMap.channel),normalMapUv:Q&&v(w.normalMap.channel),displacementMapUv:b&&v(w.displacementMap.channel),emissiveMapUv:C&&v(w.emissiveMap.channel),metalnessMapUv:N&&v(w.metalnessMap.channel),roughnessMapUv:k&&v(w.roughnessMap.channel),anisotropyMapUv:$&&v(w.anisotropyMap.channel),clearcoatMapUv:Ee&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:he&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(w.sheenRoughnessMap.channel),specularMapUv:Ne&&v(w.specularMap.channel),specularColorMapUv:ye&&v(w.specularColorMap.channel),specularIntensityMapUv:$e&&v(w.specularIntensityMap.channel),transmissionMapUv:B&&v(w.transmissionMap.channel),thicknessMapUv:we&&v(w.thicknessMap.channel),alphaMapUv:De&&v(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Q||ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!le.attributes.uv&&(ke||De),fog:!!ae,useFog:w.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:q.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&at.getTransfer(w.map.colorSpace)===_t,decodeVideoTextureEmissive:C&&w.emissiveMap.isVideoTexture===!0&&at.getTransfer(w.emissiveMap.colorSpace)===_t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xi,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function h(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)T.push(F),T.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(T,w),E(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function S(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function E(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const T=_[w.type];let F;if(T){const Y=Jn[T];F=Vb.clone(Y.uniforms)}else F=w.uniforms;return F}function P(w,T){let F;for(let Y=0,q=u.length;Y<q;Y++){const ae=u[Y];if(ae.cacheKey===T){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new _R(t,T,w,s),u.push(F)),F}function I(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:P,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:O}}function ER(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function MR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ap(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||MR),i.length>1&&i.sort(d||wp),r.length>1&&r.sort(d||wp)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ap,t.set(i,[o])):r>=s.length?(o=new Ap,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new it};break;case"SpotLight":n={position:new W,direction:new W,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function wR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AR=0;function RR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CR(t){const e=new TR,n=wR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new Et,o=new Et;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,S=0,E=0,x=0,P=0,I=0,R=0;c.sort(RR);for(let w=0,T=c.length;w<T;w++){const F=c[w],Y=F.color,q=F.intensity,ae=F.distance,le=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Y.r*q,f+=Y.g*q,d+=Y.b*q;else if(F.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(F.sh.coefficients[te],q);R++}else if(F.isDirectionalLight){const te=e.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,X=n.get(F);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=te,p++}else if(F.isSpotLight){const te=e.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(Y).multiplyScalar(q),te.distance=ae,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,i.spot[v]=te;const Z=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,Z.updateMatrices(F),F.castShadow&&I++),i.spotLightMatrix[v]=Z.matrix,F.castShadow){const X=n.get(F);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=le,x++}v++}else if(F.isRectAreaLight){const te=e.get(F);te.color.copy(Y).multiplyScalar(q),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=te,m++}else if(F.isPointLight){const te=e.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity),te.distance=F.distance,te.decay=F.decay,F.castShadow){const Z=F.shadow,X=n.get(F);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=le,i.pointShadowMatrix[_]=F.shadow.matrix,E++}i.point[_]=te,_++}else if(F.isHemisphereLight){const te=e.get(F);te.skyColor.copy(F.color).multiplyScalar(q),te.groundColor.copy(F.groundColor).multiplyScalar(q),i.hemi[h]=te,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==S||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==P||O.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+P-I,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=S,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=P,O.numLightProbes=R,i.version=AR++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Rp(t){const e=new CR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Rp(t),e.set(r,[a])):s>=o.length?(a=new Rp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DR(t,e,n){let i=new Cf;const r=new tt,s=new tt,o=new xt,a=new eT({depthPacking:YM}),l=new tT,c={},u=n.maxTextureSize,f={[Xi]:hn,[hn]:Xi,[xi]:xi},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:LR,fragmentShader:IR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new er;_.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kg;let h=this.type;this.render=function(I,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const w=t.getRenderTarget(),T=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(Vi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=h!==mi&&this.type===mi,ae=h===mi&&this.type!==mi;for(let le=0,te=I.length;le<te;le++){const Z=I[le],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||q===!0||ae===!0){const Re=this.type!==mi?{minFilter:Sn,magFilter:Sn}:{};X.map!==null&&X.map.dispose(),X.map=new Ar(r.x,r.y,Re),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const Se=X.getViewportCount();for(let Re=0;Re<Se;Re++){const Be=X.getViewport(Re);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),Y.viewport(o),X.updateMatrices(Z,Re),i=X.getFrustum(),x(R,O,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===mi&&S(X,O),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,T,F)};function S(I,R){const O=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(R,null,O,d,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(R,null,O,p,v,null)}function E(I,R,O,w){let T=null;const F=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)T=F;else if(T=O.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const Y=T.uuid,q=R.uuid;let ae=c[Y];ae===void 0&&(ae={},c[Y]=ae);let le=ae[q];le===void 0&&(le=T.clone(),ae[q]=le,R.addEventListener("dispose",P)),T=le}if(T.visible=R.visible,T.wireframe=R.wireframe,w===mi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=t.properties.get(T);Y.light=O}return T}function x(I,R,O,w,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===mi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const q=e.update(I),ae=I.material;if(Array.isArray(ae)){const le=q.groups;for(let te=0,Z=le.length;te<Z;te++){const X=le[te],me=ae[X.materialIndex];if(me&&me.visible){const Se=E(I,me,w,T);I.onBeforeShadow(t,I,R,O,q,Se,X),t.renderBufferDirect(O,null,q,Se,I,X),I.onAfterShadow(t,I,R,O,q,Se,X)}}}else if(ae.visible){const le=E(I,ae,w,T);I.onBeforeShadow(t,I,R,O,q,le,null),t.renderBufferDirect(O,null,q,le,I,null),I.onAfterShadow(t,I,R,O,q,le,null)}}const Y=I.children;for(let q=0,ae=Y.length;q<ae;q++)x(Y[q],R,O,w,T)}function P(I){I.target.removeEventListener("dispose",P);for(const O in c){const w=c[O],T=I.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const UR={[Gc]:Wc,[Xc]:jc,[$c]:Yc,[ps]:qc,[Wc]:Gc,[jc]:Xc,[Yc]:$c,[qc]:ps};function NR(t,e){function n(){let B=!1;const we=new xt;let pe=null;const De=new xt(0,0,0,0);return{setMask:function(_e){pe!==_e&&!B&&(t.colorMask(_e,_e,_e,_e),pe=_e)},setLocked:function(_e){B=_e},setClear:function(_e,fe,Oe,qe,bt){bt===!0&&(_e*=qe,fe*=qe,Oe*=qe),we.set(_e,fe,Oe,qe),De.equals(we)===!1&&(t.clearColor(_e,fe,Oe,qe),De.copy(we))},reset:function(){B=!1,pe=null,De.set(-1,0,0,0)}}}function i(){let B=!1,we=!1,pe=null,De=null,_e=null;return{setReversed:function(fe){if(we!==fe){const Oe=e.get("EXT_clip_control");fe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const qe=_e;_e=null,this.setClear(qe)}},getReversed:function(){return we},setTest:function(fe){fe?H(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(fe){pe!==fe&&!B&&(t.depthMask(fe),pe=fe)},setFunc:function(fe){if(we&&(fe=UR[fe]),De!==fe){switch(fe){case Gc:t.depthFunc(t.NEVER);break;case Wc:t.depthFunc(t.ALWAYS);break;case Xc:t.depthFunc(t.LESS);break;case ps:t.depthFunc(t.LEQUAL);break;case $c:t.depthFunc(t.EQUAL);break;case qc:t.depthFunc(t.GEQUAL);break;case jc:t.depthFunc(t.GREATER);break;case Yc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=fe}},setLocked:function(fe){B=fe},setClear:function(fe){_e!==fe&&(we&&(fe=1-fe),t.clearDepth(fe),_e=fe)},reset:function(){B=!1,pe=null,De=null,_e=null,we=!1}}}function r(){let B=!1,we=null,pe=null,De=null,_e=null,fe=null,Oe=null,qe=null,bt=null;return{setTest:function(dt){B||(dt?H(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(dt){we!==dt&&!B&&(t.stencilMask(dt),we=dt)},setFunc:function(dt,Ln,oi){(pe!==dt||De!==Ln||_e!==oi)&&(t.stencilFunc(dt,Ln,oi),pe=dt,De=Ln,_e=oi)},setOp:function(dt,Ln,oi){(fe!==dt||Oe!==Ln||qe!==oi)&&(t.stencilOp(dt,Ln,oi),fe=dt,Oe=Ln,qe=oi)},setLocked:function(dt){B=dt},setClear:function(dt){bt!==dt&&(t.clearStencil(dt),bt=dt)},reset:function(){B=!1,we=null,pe=null,De=null,_e=null,fe=null,Oe=null,qe=null,bt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,P=null,I=null,R=new it(0,0,0),O=0,w=!1,T=null,F=null,Y=null,q=null,ae=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Z=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),te=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),te=Z>=2);let me=null,Se={};const Re=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Je=new xt().fromArray(Re),oe=new xt().fromArray(Be);function xe(B,we,pe,De){const _e=new Uint8Array(4),fe=t.createTexture();t.bindTexture(B,fe),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<pe;Oe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(we+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return fe}const be={};be[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(ps),K(!1),Q(Sd),H(t.CULL_FACE),y(Vi);function H(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function se(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function ue(B,we){return f[B]!==we?(t.bindFramebuffer(B,we),f[B]=we,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function ce(B,we){let pe=p,De=!1;if(B){pe=d.get(we),pe===void 0&&(pe=[],d.set(we,pe));const _e=B.textures;if(pe.length!==_e.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Oe=_e.length;fe<Oe;fe++)pe[fe]=t.COLOR_ATTACHMENT0+fe;pe.length=_e.length,De=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,De=!0);De&&t.drawBuffers(pe)}function ke(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const D={[pr]:t.FUNC_ADD,[yM]:t.FUNC_SUBTRACT,[EM]:t.FUNC_REVERSE_SUBTRACT};D[MM]=t.MIN,D[bM]=t.MAX;const U={[TM]:t.ZERO,[wM]:t.ONE,[AM]:t.SRC_COLOR,[zc]:t.SRC_ALPHA,[DM]:t.SRC_ALPHA_SATURATE,[LM]:t.DST_COLOR,[CM]:t.DST_ALPHA,[RM]:t.ONE_MINUS_SRC_COLOR,[Vc]:t.ONE_MINUS_SRC_ALPHA,[IM]:t.ONE_MINUS_DST_COLOR,[PM]:t.ONE_MINUS_DST_ALPHA,[UM]:t.CONSTANT_COLOR,[NM]:t.ONE_MINUS_CONSTANT_COLOR,[OM]:t.CONSTANT_ALPHA,[FM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(B,we,pe,De,_e,fe,Oe,qe,bt,dt){if(B===Vi){v===!0&&(se(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),B!==SM){if(B!==m||dt!==w){if((h!==pr||x!==pr)&&(t.blendEquation(t.FUNC_ADD),h=pr,x=pr),dt)switch(B){case rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yd:t.blendFunc(t.ONE,t.ONE);break;case Ed:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Md:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ed:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Md:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,E=null,P=null,I=null,R.set(0,0,0),O=0,m=B,w=dt}return}_e=_e||we,fe=fe||pe,Oe=Oe||De,(we!==h||_e!==x)&&(t.blendEquationSeparate(D[we],D[_e]),h=we,x=_e),(pe!==S||De!==E||fe!==P||Oe!==I)&&(t.blendFuncSeparate(U[pe],U[De],U[fe],U[Oe]),S=pe,E=De,P=fe,I=Oe),(qe.equals(R)===!1||bt!==O)&&(t.blendColor(qe.r,qe.g,qe.b,bt),R.copy(qe),O=bt),m=B,w=!1}function ne(B,we){B.side===xi?se(t.CULL_FACE):H(t.CULL_FACE);let pe=B.side===hn;we&&(pe=!pe),K(pe),B.blending===rs&&B.transparent===!1?y(Vi):y(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const De=B.stencilWrite;a.setTest(De),De&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),C(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(B){T!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),T=B)}function Q(B){B!==vM?(H(t.CULL_FACE),B!==F&&(B===Sd?t.cullFace(t.BACK):B===xM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),F=B}function b(B){B!==Y&&(te&&t.lineWidth(B),Y=B)}function C(B,we,pe){B?(H(t.POLYGON_OFFSET_FILL),(q!==we||ae!==pe)&&(t.polygonOffset(we,pe),q=we,ae=pe)):se(t.POLYGON_OFFSET_FILL)}function N(B){B?H(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function k(B){B===void 0&&(B=t.TEXTURE0+le-1),me!==B&&(t.activeTexture(B),me=B)}function ge(B,we,pe){pe===void 0&&(me===null?pe=t.TEXTURE0+le-1:pe=me);let De=Se[pe];De===void 0&&(De={type:void 0,texture:void 0},Se[pe]=De),(De.type!==B||De.texture!==we)&&(me!==pe&&(t.activeTexture(pe),me=pe),t.bindTexture(B,we||be[B]),De.type=B,De.texture=we)}function M(){const B=Se[me];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function L(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function z(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){Je.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Je.copy(B))}function Ue(B){oe.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),oe.copy(B))}function Ne(B,we){let pe=c.get(we);pe===void 0&&(pe=new WeakMap,c.set(we,pe));let De=pe.get(B);De===void 0&&(De=t.getUniformBlockIndex(we,B.name),pe.set(B,De))}function ye(B,we){const De=c.get(we).get(B);l.get(we)!==De&&(t.uniformBlockBinding(we,De,B.__bindingPointIndex),l.set(we,De))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},me=null,Se={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,P=null,I=null,R=new it(0,0,0),O=0,w=!1,T=null,F=null,Y=null,q=null,ae=null,Je.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:se,bindFramebuffer:ue,drawBuffers:ce,useProgram:ke,setBlending:y,setMaterial:ne,setFlipSided:K,setCullFace:Q,setLineWidth:b,setPolygonOffset:C,setScissorTest:N,activeTexture:k,bindTexture:ge,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:L,texImage2D:Ce,texImage3D:he,updateUBOMapping:Ne,uniformBlockBinding:ye,texStorage2D:de,texStorage3D:Te,texSubImage2D:z,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:Ee,scissor:Pe,viewport:Ue,reset:$e}}function OR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):So("canvas")}function v(M,g,L){let z=1;const j=ge(M);if((j.width>L||j.height>L)&&(z=L/Math.max(j.width,j.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(z*j.width),Ee=Math.floor(z*j.height);f===void 0&&(f=_($,Ee));const de=g?_($,Ee):f;return de.width=$,de.height=Ee,de.getContext("2d").drawImage(M,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Ee+")."),de}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,g,L,z,j=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=g;if(g===t.RED&&(L===t.FLOAT&&($=t.R32F),L===t.HALF_FLOAT&&($=t.R16F),L===t.UNSIGNED_BYTE&&($=t.R8)),g===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&($=t.R8UI),L===t.UNSIGNED_SHORT&&($=t.R16UI),L===t.UNSIGNED_INT&&($=t.R32UI),L===t.BYTE&&($=t.R8I),L===t.SHORT&&($=t.R16I),L===t.INT&&($=t.R32I)),g===t.RG&&(L===t.FLOAT&&($=t.RG32F),L===t.HALF_FLOAT&&($=t.RG16F),L===t.UNSIGNED_BYTE&&($=t.RG8)),g===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&($=t.RG8UI),L===t.UNSIGNED_SHORT&&($=t.RG16UI),L===t.UNSIGNED_INT&&($=t.RG32UI),L===t.BYTE&&($=t.RG8I),L===t.SHORT&&($=t.RG16I),L===t.INT&&($=t.RG32I)),g===t.RGB_INTEGER&&(L===t.UNSIGNED_BYTE&&($=t.RGB8UI),L===t.UNSIGNED_SHORT&&($=t.RGB16UI),L===t.UNSIGNED_INT&&($=t.RGB32UI),L===t.BYTE&&($=t.RGB8I),L===t.SHORT&&($=t.RGB16I),L===t.INT&&($=t.RGB32I)),g===t.RGBA_INTEGER&&(L===t.UNSIGNED_BYTE&&($=t.RGBA8UI),L===t.UNSIGNED_SHORT&&($=t.RGBA16UI),L===t.UNSIGNED_INT&&($=t.RGBA32UI),L===t.BYTE&&($=t.RGBA8I),L===t.SHORT&&($=t.RGBA16I),L===t.INT&&($=t.RGBA32I)),g===t.RGB&&L===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),g===t.RGBA){const Ee=j?Na:at.getTransfer(z);L===t.FLOAT&&($=t.RGBA32F),L===t.HALF_FLOAT&&($=t.RGBA16F),L===t.UNSIGNED_BYTE&&($=Ee===_t?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(M,g){let L;return M?g===null||g===wr||g===_o?L=t.DEPTH24_STENCIL8:g===ti?L=t.DEPTH32F_STENCIL8:g===go&&(L=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===wr||g===_o?L=t.DEPTH_COMPONENT24:g===ti?L=t.DEPTH_COMPONENT32F:g===go&&(L=t.DEPTH_COMPONENT16),L}function P(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Sn&&M.minFilter!==ei?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function I(M){const g=M.target;g.removeEventListener("dispose",I),O(g),g.isVideoTexture&&u.delete(g)}function R(M){const g=M.target;g.removeEventListener("dispose",R),T(g)}function O(M){const g=i.get(M);if(g.__webglInit===void 0)return;const L=M.source,z=d.get(L);if(z){const j=z[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&w(M),Object.keys(z).length===0&&d.delete(L)}i.remove(M)}function w(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const L=M.source,z=d.get(L);delete z[g.__cacheKey],o.memory.textures--}function T(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let j=0;j<g.__webglFramebuffer[z].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[z][j]);else t.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)t.deleteFramebuffer(g.__webglFramebuffer[z]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const L=M.textures;for(let z=0,j=L.length;z<j;z++){const $=i.get(L[z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(L[z])}i.remove(M)}let F=0;function Y(){F=0}function q(){const M=F;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function ae(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function le(M,g){const L=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(L,M,g);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+g)}function te(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){be(L,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+g)}function Z(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){be(L,M,g);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+g)}function X(M,g){const L=i.get(M);if(M.version>0&&L.__version!==M.version){H(L,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+g)}const me={[mo]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[Jc]:t.MIRRORED_REPEAT},Se={[Sn]:t.NEAREST,[qM]:t.NEAREST_MIPMAP_NEAREST,[zo]:t.NEAREST_MIPMAP_LINEAR,[ei]:t.LINEAR,[Ll]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},Re={[ZM]:t.NEVER,[ib]:t.ALWAYS,[JM]:t.LESS,[Yg]:t.LEQUAL,[QM]:t.EQUAL,[nb]:t.GEQUAL,[eb]:t.GREATER,[tb]:t.NOTEQUAL};function Be(M,g){if(g.type===ti&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ei||g.magFilter===Ll||g.magFilter===zo||g.magFilter===vr||g.minFilter===ei||g.minFilter===Ll||g.minFilter===zo||g.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,me[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,me[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,me[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Se[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Sn||g.minFilter!==zo&&g.minFilter!==vr||g.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Je(M,g){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",I));const z=g.source;let j=d.get(z);j===void 0&&(j={},d.set(z,j));const $=ae(g);if($!==M.__cacheKey){j[$]===void 0&&(j[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[$].usedTimes++;const Ee=j[M.__cacheKey];Ee!==void 0&&(j[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(g)),M.__cacheKey=$,M.__webglTexture=j[$].texture}return L}function oe(M,g,L){return Math.floor(Math.floor(M/L)/g)}function xe(M,g,L,z){const $=M.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,L,z,g.data);else{$.sort((he,Pe)=>he.start-Pe.start);let Ee=0;for(let he=1;he<$.length;he++){const Pe=$[Ee],Ue=$[he],Ne=Pe.start+Pe.count,ye=oe(Ue.start,g.width,4),$e=oe(Pe.start,g.width,4);Ue.start<=Ne+1&&ye===$e&&oe(Ue.start+Ue.count-1,g.width,4)===ye?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++Ee,$[Ee]=Ue)}$.length=Ee+1;const de=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let he=0,Pe=$.length;he<Pe;he++){const Ue=$[he],Ne=Math.floor(Ue.start/4),ye=Math.ceil(Ue.count/4),$e=Ne%g.width,B=Math.floor(Ne/g.width),we=ye,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,$e,B,we,pe,L,z,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,de),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function be(M,g,L){let z=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=t.TEXTURE_3D);const j=Je(M,g),$=g.source;n.bindTexture(z,M.__webglTexture,t.TEXTURE0+L);const Ee=i.get($);if($.version!==Ee.__version||j===!0){n.activeTexture(t.TEXTURE0+L);const de=at.getPrimaries(at.workingColorSpace),Te=g.colorSpace===ki?null:at.getPrimaries(g.colorSpace),Ce=g.colorSpace===ki||de===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let he=v(g.image,!1,r.maxTextureSize);he=k(g,he);const Pe=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type);let Ne=E(g.internalFormat,Pe,Ue,g.colorSpace,g.isVideoTexture);Be(z,g);let ye;const $e=g.mipmaps,B=g.isVideoTexture!==!0,we=Ee.__version===void 0||j===!0,pe=$.dataReady,De=P(g,he);if(g.isDepthTexture)Ne=x(g.format===xo,g.type),we&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ne,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ne,he.width,he.height,0,Pe,Ue,null));else if(g.isDataTexture)if($e.length>0){B&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,$e[0].width,$e[0].height);for(let _e=0,fe=$e.length;_e<fe;_e++)ye=$e[_e],B?pe&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Pe,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,_e,Ne,ye.width,ye.height,0,Pe,Ue,ye.data);g.generateMipmaps=!1}else B?(we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,he.width,he.height),pe&&xe(g,he,Pe,Ue)):n.texImage2D(t.TEXTURE_2D,0,Ne,he.width,he.height,0,Pe,Ue,he.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){B&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,$e[0].width,$e[0].height,he.depth);for(let _e=0,fe=$e.length;_e<fe;_e++)if(ye=$e[_e],g.format!==Bn)if(Pe!==null)if(B){if(pe)if(g.layerUpdates.size>0){const Oe=rp(ye.width,ye.height,g.format,g.type);for(const qe of g.layerUpdates){const bt=ye.data.subarray(qe*Oe/ye.data.BYTES_PER_ELEMENT,(qe+1)*Oe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,qe,ye.width,ye.height,1,Pe,bt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,ye.width,ye.height,he.depth,Pe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Ne,ye.width,ye.height,he.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,ye.width,ye.height,he.depth,Pe,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Ne,ye.width,ye.height,he.depth,0,Pe,Ue,ye.data)}else{B&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,$e[0].width,$e[0].height);for(let _e=0,fe=$e.length;_e<fe;_e++)ye=$e[_e],g.format!==Bn?Pe!==null?B?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Pe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?pe&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Pe,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,_e,Ne,ye.width,ye.height,0,Pe,Ue,ye.data)}else if(g.isDataArrayTexture)if(B){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,he.width,he.height,he.depth),pe)if(g.layerUpdates.size>0){const _e=rp(he.width,he.height,g.format,g.type);for(const fe of g.layerUpdates){const Oe=he.data.subarray(fe*_e/he.data.BYTES_PER_ELEMENT,(fe+1)*_e/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,he.width,he.height,1,Pe,Ue,Oe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,Ue,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,Pe,Ue,he.data);else if(g.isData3DTexture)B?(we&&n.texStorage3D(t.TEXTURE_3D,De,Ne,he.width,he.height,he.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,Ue,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,Pe,Ue,he.data);else if(g.isFramebufferTexture){if(we)if(B)n.texStorage2D(t.TEXTURE_2D,De,Ne,he.width,he.height);else{let _e=he.width,fe=he.height;for(let Oe=0;Oe<De;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Ne,_e,fe,0,Pe,Ue,null),_e>>=1,fe>>=1}}else if($e.length>0){if(B&&we){const _e=ge($e[0]);n.texStorage2D(t.TEXTURE_2D,De,Ne,_e.width,_e.height)}for(let _e=0,fe=$e.length;_e<fe;_e++)ye=$e[_e],B?pe&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Pe,Ue,ye):n.texImage2D(t.TEXTURE_2D,_e,Ne,Pe,Ue,ye);g.generateMipmaps=!1}else if(B){if(we){const _e=ge(he);n.texStorage2D(t.TEXTURE_2D,De,Ne,_e.width,_e.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Ue,he)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Pe,Ue,he);m(g)&&h(z),Ee.__version=$.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function H(M,g,L){if(g.image.length!==6)return;const z=Je(M,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+L);const $=i.get(j);if(j.version!==$.__version||z===!0){n.activeTexture(t.TEXTURE0+L);const Ee=at.getPrimaries(at.workingColorSpace),de=g.colorSpace===ki?null:at.getPrimaries(g.colorSpace),Te=g.colorSpace===ki||Ee===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,Pe=[];for(let fe=0;fe<6;fe++)!Ce&&!he?Pe[fe]=v(g.image[fe],!0,r.maxCubemapSize):Pe[fe]=he?g.image[fe].image:g.image[fe],Pe[fe]=k(g,Pe[fe]);const Ue=Pe[0],Ne=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),$e=E(g.internalFormat,Ne,ye,g.colorSpace),B=g.isVideoTexture!==!0,we=$.__version===void 0||z===!0,pe=j.dataReady;let De=P(g,Ue);Be(t.TEXTURE_CUBE_MAP,g);let _e;if(Ce){B&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,$e,Ue.width,Ue.height);for(let fe=0;fe<6;fe++){_e=Pe[fe].mipmaps;for(let Oe=0;Oe<_e.length;Oe++){const qe=_e[Oe];g.format!==Bn?Ne!==null?B?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,0,0,qe.width,qe.height,Ne,qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,$e,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,0,0,qe.width,qe.height,Ne,ye,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe,$e,qe.width,qe.height,0,Ne,ye,qe.data)}}}else{if(_e=g.mipmaps,B&&we){_e.length>0&&De++;const fe=ge(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,$e,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(he){B?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Pe[fe].width,Pe[fe].height,Ne,ye,Pe[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,$e,Pe[fe].width,Pe[fe].height,0,Ne,ye,Pe[fe].data);for(let Oe=0;Oe<_e.length;Oe++){const bt=_e[Oe].image[fe].image;B?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,0,0,bt.width,bt.height,Ne,ye,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,$e,bt.width,bt.height,0,Ne,ye,bt.data)}}else{B?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ne,ye,Pe[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,$e,Ne,ye,Pe[fe]);for(let Oe=0;Oe<_e.length;Oe++){const qe=_e[Oe];B?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,0,0,Ne,ye,qe.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Oe+1,$e,Ne,ye,qe.image[fe])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),$.__version=j.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function se(M,g,L,z,j,$){const Ee=s.convert(L.format,L.colorSpace),de=s.convert(L.type),Te=E(L.internalFormat,Ee,de,L.colorSpace),Ce=i.get(g),he=i.get(L);if(he.__renderTarget=g,!Ce.__hasExternalTextures){const Pe=Math.max(1,g.width>>$),Ue=Math.max(1,g.height>>$);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,$,Te,Pe,Ue,g.depth,0,Ee,de,null):n.texImage2D(j,$,Te,Pe,Ue,0,Ee,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,j,he.__webglTexture,0,b(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,j,he.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(M,g,L){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,j=z&&z.isDepthTexture?z.type:null,$=x(g.stencilBuffer,j),Ee=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=b(g);C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,g.width,g.height):L?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,$,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,M)}else{const z=g.textures;for(let j=0;j<z.length;j++){const $=z[j],Ee=s.convert($.format,$.colorSpace),de=s.convert($.type),Te=E($.internalFormat,Ee,de,$.colorSpace),Ce=b(g);L&&C(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Te,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),le(g.depthTexture,0);const j=z.__webglTexture,$=b(g);if(g.depthTexture.format===vo)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(g.depthTexture.format===xo)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(M){const g=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",j)};z.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const z=M.texture.mipmaps;z&&z.length>0?ce(g.__webglFramebuffer[0],M):ce(g.__webglFramebuffer,M)}else if(L){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=t.createRenderbuffer(),ue(g.__webglDepthbuffer[z],M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,$)}}else{const z=M.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ue(g.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(M,g,L){const z=i.get(M);g!==void 0&&se(z.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&ke(M)}function U(M){const g=M.texture,L=i.get(M),z=i.get(g);M.addEventListener("dispose",R);const j=M.textures,$=M.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=g.version,o.memory.textures++),$){L.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer[de]=[];for(let Te=0;Te<g.mipmaps.length;Te++)L.__webglFramebuffer[de][Te]=t.createFramebuffer()}else L.__webglFramebuffer[de]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){L.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)L.__webglFramebuffer[de]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let de=0,Te=j.length;de<Te;de++){const Ce=i.get(j[de]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&C(M)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let de=0;de<j.length;de++){const Te=j[de];L.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[de]);const Ce=s.convert(Te.format,Te.colorSpace),he=s.convert(Te.type),Pe=E(Te.internalFormat,Ce,he,Te.colorSpace,M.isXRRenderTarget===!0),Ue=b(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Pe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,L.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(L.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),Be(t.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)se(L.__webglFramebuffer[de][Te],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else se(L.__webglFramebuffer[de],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let de=0,Te=j.length;de<Te;de++){const Ce=j[de],he=i.get(Ce);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),Be(t.TEXTURE_2D,Ce),se(L.__webglFramebuffer,M,Ce,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Ce)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(de=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,z.__webglTexture),Be(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)se(L.__webglFramebuffer[Te],M,g,t.COLOR_ATTACHMENT0,de,Te);else se(L.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,de,0);m(g)&&h(de),n.unbindTexture()}M.depthBuffer&&ke(M)}function y(M){const g=M.textures;for(let L=0,z=g.length;L<z;L++){const j=g[L];if(m(j)){const $=S(M),Ee=i.get(j).__webglTexture;n.bindTexture($,Ee),h($),n.unbindTexture()}}}const ne=[],K=[];function Q(M){if(M.samples>0){if(C(M)===!1){const g=M.textures,L=M.width,z=M.height;let j=t.COLOR_BUFFER_BIT;const $=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(M),de=g.length>1;if(de)for(let Ce=0;Ce<g.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const he=i.get(g[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,L,z,0,0,L,z,j,t.NEAREST),l===!0&&(ne.length=0,K.length=0,ne.push(t.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ne.push($),K.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,K)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ce=0;Ce<g.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const he=i.get(g[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function b(M){return Math.min(r.maxSamples,M.samples)}function C(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function k(M,g){const L=M.colorSpace,z=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==_s&&L!==ki&&(at.getTransfer(L)===_t?(z!==Bn||j!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),g}function ge(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=te,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=D,this.setupRenderTarget=U,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=se,this.useMultisampledRTT=C}function FR(t,e){function n(i,r=ki){let s;const o=at.getTransfer(r);if(i===si)return t.UNSIGNED_BYTE;if(i===vf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vg)return t.BYTE;if(i===Gg)return t.SHORT;if(i===go)return t.UNSIGNED_SHORT;if(i===_f)return t.INT;if(i===wr)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Ro)return t.HALF_FLOAT;if(i===Xg)return t.ALPHA;if(i===$g)return t.RGB;if(i===Bn)return t.RGBA;if(i===vo)return t.DEPTH_COMPONENT;if(i===xo)return t.DEPTH_STENCIL;if(i===Sf)return t.RED;if(i===yf)return t.RED_INTEGER;if(i===qg)return t.RG;if(i===Ef)return t.RG_INTEGER;if(i===Mf)return t.RGBA_INTEGER;if(i===ga||i===_a||i===va||i===xa)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qc||i===eu||i===tu||i===nu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===iu||i===ru)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===su)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ou)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===au)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===du)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_u)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xu)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sa||i===Su||i===yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Sa)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Su)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jg||i===Eu||i===Mu||i===bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const BR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:BR,fragmentShader:kR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wt(new Ss(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zR extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=new HR,m=n.getContextAttributes();let h=null,S=null;const E=[],x=[],P=new tt;let I=null;const R=new fn;R.viewport=new xt;const O=new fn;O.viewport=new xt;const w=[R,O],T=new lT;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let xe=E[oe];return xe===void 0&&(xe=new Jl,E[oe]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(oe){let xe=E[oe];return xe===void 0&&(xe=new Jl,E[oe]=xe),xe.getGripSpace()},this.getHand=function(oe){let xe=E[oe];return xe===void 0&&(xe=new Jl,E[oe]=xe),xe.getHandSpace()};function q(oe){const xe=x.indexOf(oe.inputSource);if(xe===-1)return;const be=E[xe];be!==void 0&&(be.update(oe.inputSource,oe.frame,c||o),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ae(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",le);for(let oe=0;oe<E.length;oe++){const xe=x[oe];xe!==null&&(x[oe]=null,E[oe].disconnect(xe))}F=null,Y=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,H=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?xo:vo,H=m.stencil?_o:wr);const ue={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ar(d.textureWidth,d.textureHeight,{format:Bn,type:si,depthTexture:new o_(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ar(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(oe){for(let xe=0;xe<oe.removed.length;xe++){const be=oe.removed[xe],H=x.indexOf(be);H>=0&&(x[H]=null,E[H].disconnect(be))}for(let xe=0;xe<oe.added.length;xe++){const be=oe.added[xe];let H=x.indexOf(be);if(H===-1){for(let ue=0;ue<E.length;ue++)if(ue>=x.length){x.push(be),H=ue;break}else if(x[ue]===null){x[ue]=be,H=ue;break}if(H===-1)break}const se=E[H];se&&se.connect(be)}}const te=new W,Z=new W;function X(oe,xe,be){te.setFromMatrixPosition(xe.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const H=te.distanceTo(Z),se=xe.projectionMatrix.elements,ue=be.projectionMatrix.elements,ce=se[14]/(se[10]-1),ke=se[14]/(se[10]+1),D=(se[9]+1)/se[5],U=(se[9]-1)/se[5],y=(se[8]-1)/se[0],ne=(ue[8]+1)/ue[0],K=ce*y,Q=ce*ne,b=H/(-y+ne),C=b*-y;if(xe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(C),oe.translateZ(b),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),se[10]===-1)oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const N=ce+b,k=ke+b,ge=K-C,M=Q+(H-C),g=D*ke/k*N,L=U*ke/k*N;oe.projectionMatrix.makePerspective(ge,M,g,L,N,k),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function me(oe,xe){xe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(xe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let xe=oe.near,be=oe.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(be=v.depthFar)),T.near=O.near=R.near=xe,T.far=O.far=R.far=be,(F!==T.near||Y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,Y=T.far),R.layers.mask=oe.layers.mask|2,O.layers.mask=oe.layers.mask|4,T.layers.mask=R.layers.mask|O.layers.mask;const H=oe.parent,se=T.cameras;me(T,H);for(let ue=0;ue<se.length;ue++)me(se[ue],H);se.length===2?X(T,R,O):T.projectionMatrix.copy(R.projectionMatrix),Se(oe,T,H)};function Se(oe,xe,be){be===null?oe.matrix.copy(xe.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(xe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(xe.projectionMatrix),oe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=vs*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=oe)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let Re=null;function Be(oe,xe){if(u=xe.getViewerPose(c||o),_=xe,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;be.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let ce=0;ce<be.length;ce++){const ke=be[ce];let D=null;if(p!==null)D=p.getViewport(ke);else{const y=f.getViewSubImage(d,ke);D=y.viewport,ce===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let U=w[ce];U===void 0&&(U=new fn,U.layers.enable(ce),U.viewport=new xt,w[ce]=U),U.matrix.fromArray(ke.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(ke.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(D.x,D.y,D.width,D.height),ce===0&&(T.matrix.copy(U.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),H===!0&&T.cameras.push(U)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ce=f.getDepthInformation(be[0]);ce&&ce.isValid&&ce.texture&&v.init(e,ce,r.renderState)}}for(let be=0;be<E.length;be++){const H=x[be],se=E[be];H!==null&&se!==void 0&&se.update(H,xe,c||o)}Re&&Re(oe,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),_=null}const Je=new h_;Je.setAnimationLoop(Be),this.setAnimationLoop=function(oe){Re=oe},this.dispose=function(){}}}const ur=new Wn,VR=new Et;function GR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,n_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,ur.copy(x),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(VR.makeRotationFromEuler(ur)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(_(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(S,P);const I=e.render.frame;s[S.id]!==I&&(d(S),s[S.id]=I)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),P=S.__size,I=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],x=S.uniforms,P=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let I=0,R=x.length;I<R;I++){const O=Array.isArray(x[I])?x[I]:[x[I]];for(let w=0,T=O.length;w<T;w++){const F=O[w];if(p(F,I,w,P)===!0){const Y=F.__offset,q=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let le=0;le<q.length;le++){const te=q[le],Z=v(te);typeof te=="number"||typeof te=="boolean"?(F.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,Y+ae,F.__data)):te.isMatrix3?(F.__data[0]=te.elements[0],F.__data[1]=te.elements[1],F.__data[2]=te.elements[2],F.__data[3]=0,F.__data[4]=te.elements[3],F.__data[5]=te.elements[4],F.__data[6]=te.elements[5],F.__data[7]=0,F.__data[8]=te.elements[6],F.__data[9]=te.elements[7],F.__data[10]=te.elements[8],F.__data[11]=0):(te.toArray(F.__data,ae),ae+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,E,x,P){const I=S.value,R=E+"_"+x;if(P[R]===void 0)return typeof I=="number"||typeof I=="boolean"?P[R]=I:P[R]=I.clone(),!0;{const O=P[R];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return P[R]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(S){const E=S.uniforms;let x=0;const P=16;for(let R=0,O=E.length;R<O;R++){const w=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,F=w.length;T<F;T++){const Y=w[T],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let ae=0,le=q.length;ae<le;ae++){const te=q[ae],Z=v(te),X=x%P,me=X%Z.boundary,Se=X+me;x+=me,Se!==0&&P-Se<Z.storage&&(x+=P-Se),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=Z.storage}}}const I=x%P;return I>0&&(x+=P-I),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class XR{constructor(e={}){const{canvas:n=Sb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=wn;let I=0,R=0,O=null,w=-1,T=null;const F=new xt,Y=new xt;let q=null;const ae=new it(0);let le=0,te=n.width,Z=n.height,X=1,me=null,Se=null;const Re=new xt(0,0,te,Z),Be=new xt(0,0,te,Z);let Je=!1;const oe=new Cf;let xe=!1,be=!1;const H=new Et,se=new Et,ue=new W,ce=new xt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function U(){return O===null?X:1}let y=i;function ne(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gf}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",fe,!1),y===null){const V="webgl2";if(y=ne(V,A),y===null)throw ne(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,Q,b,C,N,k,ge,M,g,L,z,j,$,Ee,de,Te,Ce,he,Pe,Ue,Ne,ye,$e,B;function we(){K=new tA(y),K.init(),ye=new FR(y,K),Q=new jw(y,K,e,ye),b=new NR(y,K),Q.reverseDepthBuffer&&d&&b.buffers.depth.setReversed(!0),C=new rA(y),N=new ER,k=new OR(y,K,b,N,Q,ye,C),ge=new Kw(x),M=new eA(x),g=new uT(y),$e=new $w(y,g),L=new nA(y,g,C,$e),z=new oA(y,L,g,C),Pe=new sA(y,Q,k),Te=new Yw(N),j=new yR(x,ge,M,K,Q,$e,Te),$=new GR(x,N),Ee=new bR,de=new PR(K),he=new Xw(x,ge,M,b,z,p,l),Ce=new DR(x,z,Q),B=new WR(y,C,Q,b),Ue=new qw(y,K,C),Ne=new iA(y,K,C),C.programs=j.programs,x.capabilities=Q,x.extensions=K,x.properties=N,x.renderLists=Ee,x.shadowMap=Ce,x.state=b,x.info=C}we();const pe=new zR(x,y);this.xr=pe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(te,Z,!1))},this.getSize=function(A){return A.set(te,Z)},this.setSize=function(A,V,J=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,Z=V,n.width=Math.floor(A*X),n.height=Math.floor(V*X),J===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(te*X,Z*X).floor()},this.setDrawingBufferSize=function(A,V,J){te=A,Z=V,X=J,n.width=Math.floor(A*J),n.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,V,J,ee){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,V,J,ee),b.viewport(F.copy(Re).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,V,J,ee){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,V,J,ee),b.scissor(Y.copy(Be).multiplyScalar(X).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){b.setScissorTest(Je=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){Se=A},this.getClearColor=function(A){return A.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,J=!0){let ee=0;if(A){let G=!1;if(O!==null){const ve=O.texture.format;G=ve===Mf||ve===Ef||ve===yf}if(G){const ve=O.texture.type,Ae=ve===si||ve===wr||ve===go||ve===_o||ve===vf||ve===xf,Fe=he.getClearColor(),Ie=he.getClearAlpha(),Ve=Fe.r,Ge=Fe.g,He=Fe.b;Ae?(_[0]=Ve,_[1]=Ge,_[2]=He,_[3]=Ie,y.clearBufferuiv(y.COLOR,0,_)):(v[0]=Ve,v[1]=Ge,v[2]=He,v[3]=Ie,y.clearBufferiv(y.COLOR,0,v))}else ee|=y.COLOR_BUFFER_BIT}V&&(ee|=y.DEPTH_BUFFER_BIT),J&&(ee|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),he.dispose(),Ee.dispose(),de.dispose(),N.dispose(),ge.dispose(),M.dispose(),z.dispose(),$e.dispose(),B.dispose(),j.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Bf),pe.removeEventListener("sessionend",kf),tr.stop()};function De(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=C.autoReset,V=Ce.enabled,J=Ce.autoUpdate,ee=Ce.needsUpdate,G=Ce.type;we(),C.autoReset=A,Ce.enabled=V,Ce.autoUpdate=J,Ce.needsUpdate=ee,Ce.type=G}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const V=A.target;V.removeEventListener("dispose",Oe),qe(V)}function qe(A){bt(A),N.remove(A)}function bt(A){const V=N.get(A).programs;V!==void 0&&(V.forEach(function(J){j.releaseProgram(J)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,ee,G,ve){V===null&&(V=ke);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Fe=q_(A,V,J,ee,G);b.setMaterial(ee,Ae);let Ie=J.index,Ve=1;if(ee.wireframe===!0){if(Ie=L.getWireframeAttribute(J),Ie===void 0)return;Ve=2}const Ge=J.drawRange,He=J.attributes.position;let nt=Ge.start*Ve,pt=(Ge.start+Ge.count)*Ve;ve!==null&&(nt=Math.max(nt,ve.start*Ve),pt=Math.min(pt,(ve.start+ve.count)*Ve)),Ie!==null?(nt=Math.max(nt,0),pt=Math.min(pt,Ie.count)):He!=null&&(nt=Math.max(nt,0),pt=Math.min(pt,He.count));const Rt=pt-nt;if(Rt<0||Rt===1/0)return;$e.setup(G,ee,Fe,J,Ie);let Ct,st=Ue;if(Ie!==null&&(Ct=g.get(Ie),st=Ne,st.setIndex(Ct)),G.isMesh)ee.wireframe===!0?(b.setLineWidth(ee.wireframeLinewidth*U()),st.setMode(y.LINES)):st.setMode(y.TRIANGLES);else if(G.isLine){let ze=ee.linewidth;ze===void 0&&(ze=1),b.setLineWidth(ze*U()),G.isLineSegments?st.setMode(y.LINES):G.isLineLoop?st.setMode(y.LINE_LOOP):st.setMode(y.LINE_STRIP)}else G.isPoints?st.setMode(y.POINTS):G.isSprite&&st.setMode(y.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ze=G._multiDrawStarts,Gt=G._multiDrawCounts,ut=G._multiDrawCount,In=Ie?g.get(Ie).bytesPerElement:1,Lr=N.get(ee).currentProgram.getUniforms();for(let mn=0;mn<ut;mn++)Lr.setValue(y,"_gl_DrawID",mn),st.render(ze[mn]/In,Gt[mn])}else if(G.isInstancedMesh)st.renderInstances(nt,Rt,G.count);else if(J.isInstancedBufferGeometry){const ze=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Gt=Math.min(J.instanceCount,ze);st.renderInstances(nt,Rt,Gt)}else st.render(nt,Rt)};function dt(A,V,J){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Uo(A,V,J),A.side=Xi,A.needsUpdate=!0,Uo(A,V,J),A.side=xi):Uo(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),h=de.get(J),h.init(V),E.push(h),J.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];dt(Fe,J,G),ee.add(Fe)}else dt(ve,J,G),ee.add(ve)}),h=E.pop(),ee},this.compileAsync=function(A,V,J=null){const ee=this.compile(A,V,J);return new Promise(G=>{function ve(){if(ee.forEach(function(Ae){N.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){G(A);return}setTimeout(ve,10)}K.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ln=null;function oi(A){Ln&&Ln(A)}function Bf(){tr.stop()}function kf(){tr.start()}const tr=new h_;tr.setAnimationLoop(oi),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(A){Ln=A,pe.setAnimationLoop(A),A===null?tr.stop():tr.start()},pe.addEventListener("sessionstart",Bf),pe.addEventListener("sessionend",kf),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,O),h=de.get(A,E.length),h.init(V),E.push(h),se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),oe.setFromProjectionMatrix(se),be=this.localClippingEnabled,xe=Te.init(this.clippingPlanes,be),m=Ee.get(A,S.length),m.init(),S.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&fl(ve,V,-1/0,x.sortObjects)}fl(A,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(me,Se),D=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,D&&he.addToRenderList(m,A),this.info.render.frame++,xe===!0&&Te.beginShadows();const J=h.state.shadowsArray;Ce.render(J,A,V),xe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,G=m.transmissive;if(h.setupLights(),V.isArrayCamera){const ve=V.cameras;if(G.length>0)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Ie=ve[Ae];zf(ee,G,A,Ie)}D&&he.render(A);for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Ie=ve[Ae];Hf(m,A,Ie,Ie.viewport)}}else G.length>0&&zf(ee,G,A,V),D&&he.render(A),Hf(m,A,V);O!==null&&R===0&&(k.updateMultisampleRenderTarget(O),k.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(x,A,V),$e.resetDefaultState(),w=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],xe===!0&&Te.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function fl(A,V,J,ee){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||oe.intersectsSprite(A)){ee&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Ae=z.update(A),Fe=A.material;Fe.visible&&m.push(A,Ae,Fe,J,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||oe.intersectsObject(A))){const Ae=z.update(A),Fe=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),ce.copy(Ae.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){const Ie=Ae.groups;for(let Ve=0,Ge=Ie.length;Ve<Ge;Ve++){const He=Ie[Ve],nt=Fe[He.materialIndex];nt&&nt.visible&&m.push(A,Ae,nt,J,ce.z,He)}}else Fe.visible&&m.push(A,Ae,Fe,J,ce.z,null)}}const ve=A.children;for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++)fl(ve[Ae],V,J,ee)}function Hf(A,V,J,ee){const G=A.opaque,ve=A.transmissive,Ae=A.transparent;h.setupLightsView(J),xe===!0&&Te.setGlobalState(x.clippingPlanes,J),ee&&b.viewport(F.copy(ee)),G.length>0&&Do(G,V,J),ve.length>0&&Do(ve,V,J),Ae.length>0&&Do(Ae,V,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function zf(A,V,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ee.id]===void 0&&(h.state.transmissionRenderTarget[ee.id]=new Ar(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ro:si,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ve=h.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||F;ve.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(ae),le=x.getClearAlpha(),le<1&&x.setClearColor(16777215,.5),x.clear(),D&&he.render(J);const Ie=x.toneMapping;x.toneMapping=Gi;const Ve=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),h.setupLightsView(ee),xe===!0&&Te.setGlobalState(x.clippingPlanes,ee),Do(A,J,ee),k.updateMultisampleRenderTarget(ve),k.updateRenderTargetMipmap(ve),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let He=0,nt=V.length;He<nt;He++){const pt=V[He],Rt=pt.object,Ct=pt.geometry,st=pt.material,ze=pt.group;if(st.side===xi&&Rt.layers.test(ee.layers)){const Gt=st.side;st.side=hn,st.needsUpdate=!0,Vf(Rt,J,ee,Ct,st,ze),st.side=Gt,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(k.updateMultisampleRenderTarget(ve),k.updateRenderTargetMipmap(ve))}x.setRenderTarget(Fe),x.setClearColor(ae,le),Ve!==void 0&&(ee.viewport=Ve),x.toneMapping=Ie}function Do(A,V,J){const ee=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ve=A.length;G<ve;G++){const Ae=A[G],Fe=Ae.object,Ie=Ae.geometry,Ve=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&ee!==null&&(Ge=ee),Fe.layers.test(J.layers)&&Vf(Fe,V,J,Ie,Ge,Ve)}}function Vf(A,V,J,ee,G,ve){A.onBeforeRender(x,V,J,ee,G,ve),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(x,V,J,ee,A,ve),G.transparent===!0&&G.side===xi&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,x.renderBufferDirect(J,V,ee,G,A,ve),G.side=Xi,G.needsUpdate=!0,x.renderBufferDirect(J,V,ee,G,A,ve),G.side=xi):x.renderBufferDirect(J,V,ee,G,A,ve),A.onAfterRender(x,V,J,ee,G,ve)}function Uo(A,V,J){V.isScene!==!0&&(V=ke);const ee=N.get(A),G=h.state.lights,ve=h.state.shadowsArray,Ae=G.state.version,Fe=j.getParameters(A,G.state,ve,V,J),Ie=j.getProgramCacheKey(Fe);let Ve=ee.programs;ee.environment=A.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(A.isMeshStandardMaterial?M:ge).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Oe),Ve=new Map,ee.programs=Ve);let Ge=Ve.get(Ie);if(Ge!==void 0){if(ee.currentProgram===Ge&&ee.lightsStateVersion===Ae)return Wf(A,Fe),Ge}else Fe.uniforms=j.getUniforms(A),A.onBeforeCompile(Fe,x),Ge=j.acquireProgram(Fe,Ie),Ve.set(Ie,Ge),ee.uniforms=Fe.uniforms;const He=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Te.uniform),Wf(A,Fe),ee.needsLights=Y_(A),ee.lightsStateVersion=Ae,ee.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=Ge,ee.uniformsList=null,Ge}function Gf(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=ya.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Wf(A,V){const J=N.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function q_(A,V,J,ee,G){V.isScene!==!0&&(V=ke),k.resetTextureUnits();const ve=V.fog,Ae=ee.isMeshStandardMaterial?V.environment:null,Fe=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_s,Ie=(ee.isMeshStandardMaterial?M:ge).get(ee.envMap||Ae),Ve=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,pt=!!J.morphAttributes.color;let Rt=Gi;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const Ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,st=Ct!==void 0?Ct.length:0,ze=N.get(ee),Gt=h.state.lights;if(xe===!0&&(be===!0||A!==T)){const Qt=A===T&&ee.id===w;Te.setState(ee,A,Qt)}let ut=!1;ee.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Gt.state.version||ze.outputColorSpace!==Fe||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isBatchedMesh&&ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==Ie||ee.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Te.numPlanes||ze.numIntersection!==Te.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==Ge||ze.morphTargets!==He||ze.morphNormals!==nt||ze.morphColors!==pt||ze.toneMapping!==Rt||ze.morphTargetsCount!==st)&&(ut=!0):(ut=!0,ze.__version=ee.version);let In=ze.currentProgram;ut===!0&&(In=Uo(ee,V,G));let Lr=!1,mn=!1,Ps=!1;const wt=In.getUniforms(),Mn=ze.uniforms;if(b.useProgram(In.program)&&(Lr=!0,mn=!0,Ps=!0),ee.id!==w&&(w=ee.id,mn=!0),Lr||T!==A){b.buffers.depth.getReversed()?(H.copy(A.projectionMatrix),Eb(H),Mb(H),wt.setValue(y,"projectionMatrix",H)):wt.setValue(y,"projectionMatrix",A.projectionMatrix),wt.setValue(y,"viewMatrix",A.matrixWorldInverse);const un=wt.map.cameraPosition;un!==void 0&&un.setValue(y,ue.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&wt.setValue(y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(y,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,mn=!0,Ps=!0)}if(G.isSkinnedMesh){wt.setOptional(y,G,"bindMatrix"),wt.setOptional(y,G,"bindMatrixInverse");const Qt=G.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),wt.setValue(y,"boneTexture",Qt.boneTexture,k))}G.isBatchedMesh&&(wt.setOptional(y,G,"batchingTexture"),wt.setValue(y,"batchingTexture",G._matricesTexture,k),wt.setOptional(y,G,"batchingIdTexture"),wt.setValue(y,"batchingIdTexture",G._indirectTexture,k),wt.setOptional(y,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(y,"batchingColorTexture",G._colorsTexture,k));const bn=J.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Pe.update(G,J,In),(mn||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,wt.setValue(y,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Mn.envMap.value=Ie,Mn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&V.environment!==null&&(Mn.envMapIntensity.value=V.environmentIntensity),mn&&(wt.setValue(y,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&j_(Mn,Ps),ve&&ee.fog===!0&&$.refreshFogUniforms(Mn,ve),$.refreshMaterialUniforms(Mn,ee,X,Z,h.state.transmissionRenderTarget[A.id]),ya.upload(y,Gf(ze),Mn,k)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ya.upload(y,Gf(ze),Mn,k),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(y,"center",G.center),wt.setValue(y,"modelViewMatrix",G.modelViewMatrix),wt.setValue(y,"normalMatrix",G.normalMatrix),wt.setValue(y,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Qt=ee.uniformsGroups;for(let un=0,hl=Qt.length;un<hl;un++){const nr=Qt[un];B.update(nr,In),B.bind(nr,In)}}return In}function j_(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Y_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,V,J){const ee=N.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=V,N.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const J=N.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0};const K_=y.createFramebuffer();this.setRenderTarget=function(A,V=0,J=0){O=A,I=V,R=J;let ee=!0,G=null,ve=!1,Ae=!1;if(A){const Ie=N.get(A);if(Ie.__useDefaultFramebuffer!==void 0)b.bindFramebuffer(y.FRAMEBUFFER,null),ee=!1;else if(Ie.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Ie.__hasExternalTextures)k.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Ie.__boundDepthTexture!==He){if(He!==null&&N.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Ge=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?G=Ge[V][J]:G=Ge[V],ve=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?G=N.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[J]:G=Ge,F.copy(A.viewport),Y.copy(A.scissor),q=A.scissorTest}else F.copy(Re).multiplyScalar(X).floor(),Y.copy(Be).multiplyScalar(X).floor(),q=Je;if(J!==0&&(G=K_),b.bindFramebuffer(y.FRAMEBUFFER,G)&&ee&&b.drawBuffers(A,G),b.viewport(F),b.scissor(Y),b.setScissorTest(q),ve){const Ie=N.get(A.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,J)}else if(Ae){const Ie=N.get(A.texture),Ve=V;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ie.__webglTexture,J,Ve)}else if(A!==null&&J!==0){const Ie=N.get(A.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ie.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(A,V,J,ee,G,ve,Ae,Fe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){b.bindFramebuffer(y.FRAMEBUFFER,Ie);try{const Ve=A.textures[Fe],Ge=Ve.format,He=Ve.type;if(!Q.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-ee&&J>=0&&J<=A.height-G&&(A.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(V,J,ee,G,ye.convert(Ge),ye.convert(He),ve))}finally{const Ve=O!==null?N.get(O).__webglFramebuffer:null;b.bindFramebuffer(y.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,ee,G,ve,Ae,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(V>=0&&V<=A.width-ee&&J>=0&&J<=A.height-G){b.bindFramebuffer(y.FRAMEBUFFER,Ie);const Ve=A.textures[Fe],Ge=Ve.format,He=Ve.type;if(!Q.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,nt),y.bufferData(y.PIXEL_PACK_BUFFER,ve.byteLength,y.STREAM_READ),A.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(V,J,ee,G,ye.convert(Ge),ye.convert(He),0);const pt=O!==null?N.get(O).__webglFramebuffer:null;b.bindFramebuffer(y.FRAMEBUFFER,pt);const Rt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await yb(y,Rt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,nt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ve),y.deleteBuffer(nt),y.deleteSync(Rt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,J=0){const ee=Math.pow(2,-J),G=Math.floor(A.image.width*ee),ve=Math.floor(A.image.height*ee),Ae=V!==null?V.x:0,Fe=V!==null?V.y:0;k.setTexture2D(A,0),y.copyTexSubImage2D(y.TEXTURE_2D,J,0,0,Ae,Fe,G,ve),b.unbindTexture()};const Z_=y.createFramebuffer(),J_=y.createFramebuffer();this.copyTextureToTexture=function(A,V,J=null,ee=null,G=0,ve=null){ve===null&&(G!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Ae,Fe,Ie,Ve,Ge,He,nt,pt,Rt;const Ct=A.isCompressedTexture?A.mipmaps[ve]:A.image;if(J!==null)Ae=J.max.x-J.min.x,Fe=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,Ge=J.min.y,He=J.isBox3?J.min.z:0;else{const bn=Math.pow(2,-G);Ae=Math.floor(Ct.width*bn),Fe=Math.floor(Ct.height*bn),A.isDataArrayTexture?Ie=Ct.depth:A.isData3DTexture?Ie=Math.floor(Ct.depth*bn):Ie=1,Ve=0,Ge=0,He=0}ee!==null?(nt=ee.x,pt=ee.y,Rt=ee.z):(nt=0,pt=0,Rt=0);const st=ye.convert(V.format),ze=ye.convert(V.type);let Gt;V.isData3DTexture?(k.setTexture3D(V,0),Gt=y.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),Gt=y.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),Gt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,V.unpackAlignment);const ut=y.getParameter(y.UNPACK_ROW_LENGTH),In=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Lr=y.getParameter(y.UNPACK_SKIP_PIXELS),mn=y.getParameter(y.UNPACK_SKIP_ROWS),Ps=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Ct.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ct.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(y.UNPACK_SKIP_IMAGES,He);const wt=A.isDataArrayTexture||A.isData3DTexture,Mn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const bn=N.get(A),Qt=N.get(V),un=N.get(bn.__renderTarget),hl=N.get(Qt.__renderTarget);b.bindFramebuffer(y.READ_FRAMEBUFFER,un.__webglFramebuffer),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,hl.__webglFramebuffer);for(let nr=0;nr<Ie;nr++)wt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(A).__webglTexture,G,He+nr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(V).__webglTexture,ve,Rt+nr)),y.blitFramebuffer(Ve,Ge,Ae,Fe,nt,pt,Ae,Fe,y.DEPTH_BUFFER_BIT,y.NEAREST);b.bindFramebuffer(y.READ_FRAMEBUFFER,null),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||N.has(A)){const bn=N.get(A),Qt=N.get(V);b.bindFramebuffer(y.READ_FRAMEBUFFER,Z_),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,J_);for(let un=0;un<Ie;un++)wt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,bn.__webglTexture,G,He+un):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,bn.__webglTexture,G),Mn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Qt.__webglTexture,ve,Rt+un):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Qt.__webglTexture,ve),G!==0?y.blitFramebuffer(Ve,Ge,Ae,Fe,nt,pt,Ae,Fe,y.COLOR_BUFFER_BIT,y.NEAREST):Mn?y.copyTexSubImage3D(Gt,ve,nt,pt,Rt+un,Ve,Ge,Ae,Fe):y.copyTexSubImage2D(Gt,ve,nt,pt,Ve,Ge,Ae,Fe);b.bindFramebuffer(y.READ_FRAMEBUFFER,null),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?y.texSubImage3D(Gt,ve,nt,pt,Rt,Ae,Fe,Ie,st,ze,Ct.data):V.isCompressedArrayTexture?y.compressedTexSubImage3D(Gt,ve,nt,pt,Rt,Ae,Fe,Ie,st,Ct.data):y.texSubImage3D(Gt,ve,nt,pt,Rt,Ae,Fe,Ie,st,ze,Ct):A.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ve,nt,pt,Ae,Fe,st,ze,Ct.data):A.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ve,nt,pt,Ct.width,Ct.height,st,Ct.data):y.texSubImage2D(y.TEXTURE_2D,ve,nt,pt,Ae,Fe,st,ze,Ct);y.pixelStorei(y.UNPACK_ROW_LENGTH,ut),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,In),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Lr),y.pixelStorei(y.UNPACK_SKIP_ROWS,mn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ps),ve===0&&V.generateMipmaps&&y.generateMipmap(Gt),b.unbindTexture()},this.copyTextureToTexture3D=function(A,V,J=null,ee=null,G=0){return ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,J,ee,G)},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){I=0,R=0,O=null,b.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}class __{constructor(e){re(this,"renderer");re(this,"resizeRenderer",()=>{this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setSize(window.innerWidth,window.innerHeight)});re(this,"boundResizeRenderer",()=>this.resizeRenderer());re(this,"addResizeListener",()=>{window.addEventListener("resize",this.boundResizeRenderer)});re(this,"removeResizeListener",()=>{window.removeEventListener("resize",this.boundResizeRenderer)});re(this,"setAnimation",(e,n,i)=>{const r=()=>{e(),this.renderer.render(n,i)};this.renderer.setAnimationLoop(r)});this.renderer=new XR({canvas:e,antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hg,this.renderer.setClearColor(0,0),this.resizeRenderer()}}class v_{constructor(){re(this,"_camera");re(this,"aspect",1);re(this,"isResizeListenerAdded",!1);re(this,"handleResize",()=>{this.updateAspect(),this.updateProjection()});this.updateAspect()}setCameraNear(e){if(e<this._camera.far)this._camera.near=e,this._camera.updateProjectionMatrix();else throw new Error("Value of near must be smaller than far")}setCameraFar(e){if(e>this._camera.near)this._camera.far=e,this._camera.updateProjectionMatrix();else throw new Error("Value of far must be greater than near")}setCameraRange(e,n){if(e>n)throw new Error("Value of far must be greater than near");this._camera.near=e,this._camera.far=n,this._camera.updateProjectionMatrix()}setCameraPos(e,n,i){this._camera.position.set(e,n,i)}setCameraLookAt(e,n,i){this._camera.lookAt(e,n,i)}updateAspect(){this.aspect=window.innerWidth/window.innerHeight}addResizeListener(){this.isResizeListenerAdded||(window.addEventListener("resize",this.handleResize),this.isResizeListenerAdded=!0)}removeResizeListener(){window.removeEventListener("resize",this.handleResize),this.isResizeListenerAdded=!1}get camera(){return this._camera}}class $R extends v_{constructor(n){super();re(this,"_camera");re(this,"size",10);this._camera=new c_,this.setCameraSize(n.size??this.size),this.setCameraRange(n.near??this._camera.near,n.far??this._camera.far),this.updateProjection()}setCameraSize(n){if(n>0)this.size=n,this.updateProjection();else throw new Error("Size cannot be less than or equal to 0")}updateProjection(){this._camera.top=this.size/this.aspect,this._camera.bottom=-this.size/this.aspect,this._camera.right=this.size,this._camera.left=-this.size,this._camera.updateProjectionMatrix()}}class qR extends v_{constructor(n){super();re(this,"_camera");this._camera=new fn,this.setCameraFOV(n.fov??this._camera.fov),this.setCameraRange(n.near??this._camera.near,n.far??this._camera.far),this.updateProjection()}setCameraFOV(n){if(n>0&&n<180)this._camera.fov=n,this._camera.updateProjectionMatrix();else throw new Error("FOV cannot be less than or equal to 0 / larger than or equal to 180")}updateProjection(){this._camera.aspect=this.aspect,this._camera.updateProjectionMatrix()}}const Cp=["orthographic","perspective"];var Au=(t=>(t[t.Orthographic=0]="Orthographic",t[t.Perspective=1]="Perspective",t))(Au||{});class x_{constructor(e,n){re(this,"controller");if(e===Cp[Au.Orthographic])this.controller=new $R(n);else if(e===Cp[Au.Perspective])this.controller=new qR(n);else throw new Error("Invalid camera type")}setCameraSize(e){if(this.controller.setCameraSize)this.controller.setCameraSize(e);else throw new Error("setCameraSize is only available for orthographic camera, use setCameraFOV instead")}setCameraFOV(e){if(this.controller.setCameraFOV)this.controller.setCameraFOV(e);else throw new Error("setCameraFOV is only available for perspective camera, use setCameraSize instead")}setCameraNear(e){this.controller.setCameraNear(e)}setCameraFar(e){this.controller.setCameraFar(e)}setCameraRange(e,n){this.controller.setCameraRange(e,n)}setCameraPos(e,n,i){this.controller.setCameraPos(e,n,i)}setCameraLookAt(e,n,i){this.controller.setCameraLookAt(e,n,i)}addResizeListener(){this.controller.addResizeListener()}removeResizeListener(){this.controller.removeResizeListener()}get camera(){return this.controller.camera}}class jR{constructor(){re(this,"directions",[0,0,0,0]);re(this,"moveDir",new tt(0,0));re(this,"_mousePos",new tt(0,0));re(this,"_isMouse",!1);re(this,"handleMovementVector",()=>{this.moveDir.x=this.directions[3]-this.directions[2],this.moveDir.y=this.directions[1]-this.directions[0]});re(this,"handleKeyDown",e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=1;break;case"ArrowDown":this.directions[1]=1;break;case"ArrowLeft":this.directions[2]=1;break;case"ArrowRight":this.directions[3]=1;break}this.handleMovementVector()}});re(this,"handleKeyUp",e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=0;break;case"ArrowDown":this.directions[1]=0;break;case"ArrowLeft":this.directions[2]=0;break;case"ArrowRight":this.directions[3]=0;break}this.handleMovementVector()}});re(this,"handleMouseDown",e=>{this.isKeyboard||(this._isMouse=!0,this._mousePos.set(e.clientX,e.clientY))});re(this,"handleMouseMove",e=>{this._mousePos.set(e.clientX,e.clientY)});re(this,"handleMouseUp",()=>{this.isKeyboard||(this._isMouse=!1,this._mousePos.set(0,0))});re(this,"addInputListener",()=>{window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp)});re(this,"removeInputListener",()=>{window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)})}getMovementVectorNormalized(){return this.moveDir.normalize()}get isMouse(){return this._isMouse}get isKeyboard(){return this.directions.includes(1)}get mousePos(){return this._mousePos}}class S_{constructor(e){re(this,"raycaster",new np);re(this,"collidables",[]);re(this,"camera");re(this,"cameraRaycaster");re(this,"screenPos");re(this,"worldPoint");re(this,"angle",Math.PI/2);re(this,"axis",new W(0,1,0));re(this,"temp",new W(0,0,0));re(this,"dir",new W(0,0,0));re(this,"getRaycastHit",(e,n,i)=>(this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,this.raycaster.intersectObjects(this.collidables)));re(this,"getLinecastHit",(e,n,i=1,r=0,s=0)=>{const o=this.getRaycastHit(e,n,i);return this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,this.angle).normalize().multiplyScalar(r)),this.getRaycastHit(this.temp,n,i).forEach(a=>{o.indexOf(a)===-1&&o.push(a)}),this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,-this.angle).normalize().multiplyScalar(s)),this.getRaycastHit(this.temp,n,i).forEach(a=>{o.indexOf(a)===-1&&o.push(a)}),o});re(this,"raycast",(e,n,i)=>this.getRaycastHit(e,n,i).length===0);re(this,"Linecast",(e,n,i,r,s)=>this.getLinecastHit(e,n,i,r,s).length===0);re(this,"getRaycastHitFromScreen",(e,n)=>{if(!this.cameraRaycaster||!this.camera||!this.screenPos)return;let i=e/window.innerWidth*2-1,r=n/window.innerHeight*2-1;return this.screenPos.set(i,r),this.cameraRaycaster.setFromCamera(this.screenPos,this.camera),this.cameraRaycaster.far=100,this.cameraRaycaster.intersectObjects(this.collidables)});re(this,"screenPointToWorld",(e,n)=>{const i=this.getRaycastHitFromScreen(e,n);if(!(!i||!this.worldPoint))return this.worldPoint.set(i[0].point.x,i[0].point.y,-i[0].point.z),this.worldPoint});e&&(this.camera=e,this.cameraRaycaster=new np,this.screenPos=new tt(0,0),this.worldPoint=new W(0,0,0))}setCollidables(e){this.collidables=e}}const YR="/my-site/assets/texture-Bhl9W45K.webp";class KR{constructor(e,n){re(this,"wallMaterial_1",new a_({color:15658734}));re(this,"wallMaterial_2",new Rf({opacity:0,transparent:!0}));re(this,"floorMaterial",this.wallMaterial_1);re(this,"playerGeometry",new Pf(1,32,32));re(this,"wallGeometry",new Ss(20,20));re(this,"floorGeometry",new Ss(20,100));re(this,"wall_1",new Wt(this.wallGeometry,this.wallMaterial_1));re(this,"wall_2",new Wt(this.wallGeometry,this.wallMaterial_2));re(this,"wall_3",new Wt(this.wallGeometry,this.wallMaterial_2));re(this,"wall_4",new Wt(this.wallGeometry,this.wallMaterial_2));re(this,"floor",new Wt(this.floorGeometry,this.floorMaterial));re(this,"spotlightPrimaryPosLight",new W(50,50,50));re(this,"spotlightPrimaryPosDark",new W(-50,50,50));re(this,"ambientLight",new u_(13421772));re(this,"spotlightPrimary",new Zd(16777215));re(this,"spotlightSecondary",new Zd(14540253));re(this,"theme","light");re(this,"clock",new f_);re(this,"rendererController");re(this,"cameraController",new x_("orthographic",{size:5,near:-100,far:1e3}));re(this,"scene",new s_);re(this,"gameInput",new jR);re(this,"physics",new S_(this.cameraController.camera));re(this,"playerTexture",new sT().load(YR));re(this,"playerMaterial",new Qb({color:16777215,map:this.playerTexture}));re(this,"playerMesh",new Wt(this.playerGeometry,this.playerMaterial));re(this,"playerObject",new Bt().attach(this.playerMesh));re(this,"player",new Ru(this.playerObject,this.gameInput,this.physics));re(this,"setTextures",()=>{this.playerTexture.wrapS=mo,this.playerTexture.wrapT=mo,this.playerTexture.repeat.set(3,3)});re(this,"setPositions",()=>{this.cameraController.setCameraPos(0,10,50),this.cameraController.setCameraLookAt(0,0,0),this.playerObject.position.set(3,0,-2),this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_3.position.set(5,0,0),this.wall_4.position.set(0,0,10),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.theme==="light"?this.spotlightPrimary.position.set(50,50,50):this.spotlightPrimary.position.set(-50,50,50),this.spotlightSecondary.position.set(-50,50,50)});re(this,"setLightings",()=>{this.playerMesh.castShadow=!0,this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.castShadow=!0,this.spotlightPrimary.shadow.intensity=.8,this.spotlightPrimary.shadow.mapSize.width=512,this.spotlightPrimary.shadow.mapSize.height=512,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.castShadow=!0,this.spotlightSecondary.shadow.intensity=.8,this.spotlightSecondary.shadow.mapSize.width=512,this.spotlightSecondary.shadow.mapSize.height=512,this.theme==="light"?(this.ambientLight.intensity=1,this.spotlightPrimary.angle=.1,this.spotlightSecondary.power=0):(this.ambientLight.intensity=0,this.spotlightPrimary.angle=.03,this.spotlightSecondary.power=5e3)});re(this,"createScene",()=>{this.setTextures(),this.setPositions(),this.setLightings(),this.scene.add(this.playerObject,this.floor,this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.ambientLight,this.spotlightPrimary,this.spotlightSecondary);const e=this.scene.children.filter(n=>n!==this.playerObject);this.physics.setCollidables(e)});re(this,"updateTheme",()=>{this.theme==="light"?(this.ambientLight.intensity=Vo.lerp(this.ambientLight.intensity,1,.1),this.spotlightPrimary.angle=Vo.lerp(this.spotlightPrimary.angle,.1,.1),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosLight,.1),this.spotlightSecondary.power=0):(this.ambientLight.intensity=Vo.lerp(this.ambientLight.intensity,0,.1),this.spotlightPrimary.angle=Vo.lerp(this.spotlightPrimary.angle,.03,.1),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosDark,.1),this.spotlightSecondary.power=5e3)});re(this,"update",()=>{this.updateTheme();const e=this.clock.getDelta();this.player.applyMovement(e)});re(this,"startScene",()=>{this.createScene(),this.gameInput.addInputListener(),this.rendererController.addResizeListener(),this.cameraController.addResizeListener(),this.rendererController.setAnimation(this.update,this.scene,this.cameraController.camera)});re(this,"endScene",()=>{this.gameInput.removeInputListener(),this.rendererController.removeResizeListener(),this.cameraController.removeResizeListener()});re(this,"setTheme",e=>this.theme=e);n&&(this.theme=n),this.rendererController=new __(e)}}class ZR{constructor(e,n){re(this,"material",new a_({color:16777215}));re(this,"boxGeometry",new ws(1,1,2));re(this,"player",new Bt);re(this,"playerLight",new Qd(16777215));re(this,"maxCount",1e4);re(this,"speeds",[]);re(this,"phases",[]);re(this,"amplitudes",[]);re(this,"dummy",new Bt);re(this,"wall",new Kb(this.boxGeometry,this.material,this.maxCount));re(this,"ambientLight",new u_(16777215));re(this,"pointLight",new Qd(16777215));re(this,"scene",new s_);re(this,"cameraController",new x_("perspective",{fov:60,near:1,far:1e3}));re(this,"physics",new S_);re(this,"theme","light");re(this,"clock",new f_);re(this,"rendererController");re(this,"setPositions",()=>{for(let e=0;e<this.maxCount;e++)this.speeds[e]=Math.random()/2,this.phases[e]=Math.random()*Math.PI*2,this.amplitudes[e]=Math.random()/2+1;this.cameraController.setCameraPos(0,0,-15),this.cameraController.setCameraLookAt(0,0,0),this.player.position.set(0,0,-5),this.pointLight.position.set(0,0,-5)});re(this,"setLightings",()=>{this.pointLight.intensity=20,this.theme==="light"?this.ambientLight.intensity=1:this.ambientLight.intensity=0});re(this,"createScene",()=>{this.setPositions(),this.setLightings(),this.player.attach(this.playerLight),this.scene.add(this.ambientLight,this.pointLight,this.wall,this.player);const e=this.scene.children.filter(n=>n!==this.player);this.physics.setCollidables(e)});re(this,"updateTheme",()=>{this.theme==="light"?this.ambientLight.intensity<1&&(this.ambientLight.intensity+=.05):this.ambientLight.intensity>0&&(this.ambientLight.intensity-=.05)});re(this,"updateWall",e=>{const n=window.innerWidth/20,i=window.innerHeight/20,r=n/2,s=i/2;let o=0;const a=.02;this.wall.count=n*i;for(let l=-r;l<r;l++)for(let c=-s;c<s;c++)this.dummy.position.x=l*(1+a),this.dummy.position.y=c*(1+a),this.dummy.position.z=Math.sin(e*this.speeds[o]*this.phases[o]*this.amplitudes[o])/2,this.dummy.updateMatrix(),this.wall.setMatrixAt(o,this.dummy.matrix),o++;this.wall.instanceMatrix.needsUpdate=!0});re(this,"update",()=>{const e=this.clock.getElapsedTime();this.updateWall(e),this.updateTheme()});re(this,"startScene",()=>{this.createScene(),this.rendererController.addResizeListener(),this.cameraController.addResizeListener(),this.rendererController.setAnimation(this.update,this.scene,this.cameraController.camera)});re(this,"endScene",()=>{this.rendererController.removeResizeListener(),this.cameraController.removeResizeListener()});re(this,"setTheme",e=>this.theme=e);n&&(this.theme=n),this.rendererController=new __(e)}}const Bi=class Bi{constructor(e,n,i){re(this,"moveVec",new tt(0,0));re(this,"displacement",new W(0,0,0));re(this,"_velocity",new W(0,0,0));re(this,"velocityX",new W(0,0,0));re(this,"velocityZ",new W(0,0,0));re(this,"_force",new W(0,0,0));re(this,"_drag",new W(0,0,0));re(this,"player");re(this,"gameInput");re(this,"physics");re(this,"updateMoveVec",()=>{if(this.gameInput.isKeyboard)this.moveVec=this.gameInput.getMovementVectorNormalized();else if(this.gameInput.isMouse){const e=this.gameInput.mousePos,n=this.physics.screenPointToWorld(e.x,e.y);if(n){const i=n.sub(this.player.position).normalize();i&&this.moveVec.set(i.x,i.z)}}else this.moveVec.set(0,0)});re(this,"updateForce",e=>{this._force.set(this.moveVec.x,0,this.moveVec.y).multiplyScalar(e),this._force.z*=2});re(this,"updateDrag",e=>{this._drag.copy(this._velocity).multiplyScalar(-e)});re(this,"updateVelocity",e=>{let n=this._force.add(this._drag).multiplyScalar(e);this._velocity.length()<Bi.VELOCITY_THRESHOLD&&this._force.length()===0&&(this._velocity.set(0,0,0),n.set(0,0,0)),this._velocity.add(n)});re(this,"checkCollision",()=>{let e=this.physics.Linecast(this.player.position,this._velocity,1,1,1)&&this.physics.Linecast(this.player.position,this._force,1,1,1);e||(this.velocityX.set(this._velocity.x,0,0),this.velocityZ.set(0,0,this._velocity.z),e=this.physics.Linecast(this.player.position,this.velocityX,1,1,1),e?(e=this.physics.Linecast(this.player.position,this.velocityZ,1,1,1),e?this._velocity.set(this.velocityX.x,0,this.velocityZ.z):this._velocity.set(this.velocityX.x,0,-this.velocityZ.z)):(e=this.physics.Linecast(this.player.position,this.velocityZ,1,1,1),e?this._velocity.set(-this.velocityX.x,0,this.velocityZ.z):this._velocity.multiplyScalar(0)))});re(this,"applyMovement",e=>{this.updateMoveVec(),this.updateForce(Bi.FORCE_COE),this.updateDrag(Bi.DRAG_COE),this.updateVelocity(e),this.checkCollision(),this.displacement.copy(this._velocity).multiplyScalar(e),this.player.position.add(this.displacement)});this.player=e,this.gameInput=n,this.physics=i}get force(){return this._force}get getDrag(){return this._drag}get velocity(){return this._velocity}};re(Bi,"FORCE_COE",30),re(Bi,"DRAG_COE",3),re(Bi,"VELOCITY_THRESHOLD",.5);let Ru=Bi;class y_{constructor(e,n,i="light"){re(this,"controller");re(this,"startScene",()=>this.controller.startScene());re(this,"endScene",()=>this.controller.endScene());re(this,"setTheme",e=>this.controller.setTheme(e));if(n==="homepage")this.controller=new KR(e,i);else if(n==="project")this.controller=new ZR(e,i);else throw new Error("Invalid Scene")}}const JR=Xt({name:"homepage-background",setup(t,{expose:e}){const n=Tm("canvas"),i=Ao();return ys(()=>{if(!n.value)return;const r=new y_(n.value,"homepage",i.theme);r.startScene(),zn(i,()=>r.setTheme(i.theme)),Es(()=>{r.endScene()})}),e(),{canvas:n}}}),QR={ref:"canvas"};function eC(t,e,n,i,r,s){return gt(),yt("canvas",QR,null,512)}const tC=Xn(JR,[["render",eC]]),nC=Xt({name:"animated-txt",props:{text:{type:String,default:""},duration:{type:Number,default:0},delay:{type:Number,default:0},stagger:{type:Number,default:0}},setup(t,{expose:e}){const n=Ut(()=>{const o=t.text.split("");o[0]=o[0].toUpperCase();for(let a=0;a<t.text.length;a++)(o[a+1]===" "||o[a-1]===" "&&o[a]==="i")&&(o[a]=o[a].toUpperCase());return o}),i=ln([]);zn(n,()=>{i.value=[],s()});function r(o,a){o instanceof HTMLElement?i.value[a]=o:i.value[a]=null}function s(){setTimeout(()=>{i.value.forEach((o,a)=>{o==null||o.animate([{opacity:0},{opacity:1}],{duration:t.duration,delay:a*t.stagger,fill:"both"})})},t.delay)}return ys(()=>s()),e(),{chars:n,setCharRef:r}}});function iC(t,e,n,i,r,s){return gt(),yt("div",null,[(gt(!0),yt(an,null,iv(t.chars,(o,a)=>(gt(),yt("span",{class:"o-0",key:a,ref_for:!0,ref:l=>t.setCharRef(l,a)},Qn(o),1))),128))])}const lc=Xn(nC,[["render",iC]]),rC={class:"page flex row a-center j-start"},sC={class:"absolute t-0 l-0 w-full h-full"},oC={class:"grid grid-cols-2 a-start w-auto pl-0.10 z-1"},aC=Xt({__name:"homepage",setup(t){const{t:e}=Qi();return(n,i)=>(gt(),yt("div",rC,[We("div",sC,[rt(tC)]),We("div",oC,[rt(lc,{class:"col-span-2 hem-1 pb-10 font-size-md",text:Cn(e)("hello"),duration:500,stagger:50},null,8,["text"]),rt(lc,{class:"sm:col-span-2 hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"peter",duration:1e3,stagger:100}),rt(lc,{class:"hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"chan",duration:1e3,delay:500,stagger:100})])]))}}),lC={class:"page"},cC={class:"absolute t-0 l-0 w-full h-full"},uC=Xt({__name:"projects",setup(t){const{t:e}=Qi(),n=Tm("canvas"),i=Ao();return ys(()=>{if(!n.value)return;const r=new y_(n.value,"project",i.theme);r.startScene(),zn(i,()=>r.setTheme(i.theme)),Es(()=>{r.endScene()})}),(r,s)=>(gt(),yt("div",lC,[We("div",cC,[We("canvas",{ref_key:"canvas",ref:n},null,512)])]))}}),fC={},hC={class:"page"};function dC(t,e){return gt(),yt("div",hC,e[0]||(e[0]=[We("h1",null,"Sorry",-1),We("h2",null,"This page is not yet online",-1)]))}const pC=Xn(fC,[["render",dC]]);function E_(t,e){return function(){return t.apply(e,arguments)}}const{toString:mC}=Object.prototype,{getPrototypeOf:Uf}=Object,rl=(t=>e=>{const n=mC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=t=>(t=t.toLowerCase(),e=>rl(e)===t),sl=t=>e=>typeof e===t,{isArray:Rs}=Array,yo=sl("undefined");function gC(t){return t!==null&&!yo(t)&&t.constructor!==null&&!yo(t.constructor)&&yn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const M_=$n("ArrayBuffer");function _C(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&M_(t.buffer),e}const vC=sl("string"),yn=sl("function"),b_=sl("number"),ol=t=>t!==null&&typeof t=="object",xC=t=>t===!0||t===!1,Ea=t=>{if(rl(t)!=="object")return!1;const e=Uf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},SC=$n("Date"),yC=$n("File"),EC=$n("Blob"),MC=$n("FileList"),bC=t=>ol(t)&&yn(t.pipe),TC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||yn(t.append)&&((e=rl(t))==="formdata"||e==="object"&&yn(t.toString)&&t.toString()==="[object FormData]"))},wC=$n("URLSearchParams"),[AC,RC,CC,PC]=["ReadableStream","Request","Response","Headers"].map($n),LC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Rs(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function T_(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,w_=t=>!yo(t)&&t!==xr;function Cu(){const{caseless:t}=w_(this)&&this||{},e={},n=(i,r)=>{const s=t&&T_(e,r)||r;Ea(e[s])&&Ea(i)?e[s]=Cu(e[s],i):Ea(i)?e[s]=Cu({},i):Rs(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Lo(arguments[i],n);return e}const IC=(t,e,n,{allOwnKeys:i}={})=>(Lo(e,(r,s)=>{n&&yn(r)?t[s]=E_(r,n):t[s]=r},{allOwnKeys:i}),t),DC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),UC=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},NC=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Uf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},OC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},FC=t=>{if(!t)return null;if(Rs(t))return t;let e=t.length;if(!b_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},BC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Uf(Uint8Array)),kC=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},HC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},zC=$n("HTMLFormElement"),VC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Pp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),GC=$n("RegExp"),A_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Lo(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},WC=t=>{A_(t,(e,n)=>{if(yn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(yn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},XC=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Rs(t)?i(t):i(String(t).split(e)),n},$C=()=>{},qC=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function jC(t){return!!(t&&yn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const YC=t=>{const e=new Array(10),n=(i,r)=>{if(ol(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Rs(i)?[]:{};return Lo(i,(o,a)=>{const l=n(o,r+1);!yo(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},KC=$n("AsyncFunction"),ZC=t=>t&&(ol(t)||yn(t))&&yn(t.then)&&yn(t.catch),R_=((t,e)=>t?setImmediate:e?((n,i)=>(xr.addEventListener("message",({source:r,data:s})=>{r===xr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),xr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",yn(xr.postMessage)),JC=typeof queueMicrotask<"u"?queueMicrotask.bind(xr):typeof process<"u"&&process.nextTick||R_,ie={isArray:Rs,isArrayBuffer:M_,isBuffer:gC,isFormData:TC,isArrayBufferView:_C,isString:vC,isNumber:b_,isBoolean:xC,isObject:ol,isPlainObject:Ea,isReadableStream:AC,isRequest:RC,isResponse:CC,isHeaders:PC,isUndefined:yo,isDate:SC,isFile:yC,isBlob:EC,isRegExp:GC,isFunction:yn,isStream:bC,isURLSearchParams:wC,isTypedArray:BC,isFileList:MC,forEach:Lo,merge:Cu,extend:IC,trim:LC,stripBOM:DC,inherits:UC,toFlatObject:NC,kindOf:rl,kindOfTest:$n,endsWith:OC,toArray:FC,forEachEntry:kC,matchAll:HC,isHTMLForm:zC,hasOwnProperty:Pp,hasOwnProp:Pp,reduceDescriptors:A_,freezeMethods:WC,toObjectSet:XC,toCamelCase:VC,noop:$C,toFiniteNumber:qC,findKey:T_,global:xr,isContextDefined:w_,isSpecCompliantForm:jC,toJSONObject:YC,isAsyncFn:KC,isThenable:ZC,setImmediate:R_,asap:JC};function Ye(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}ie.inherits(Ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.status}}});const C_=Ye.prototype,P_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{P_[t]={value:t}});Object.defineProperties(Ye,P_);Object.defineProperty(C_,"isAxiosError",{value:!0});Ye.from=(t,e,n,i,r,s)=>{const o=Object.create(C_);return ie.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ye.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const QC=null;function Pu(t){return ie.isPlainObject(t)||ie.isArray(t)}function L_(t){return ie.endsWith(t,"[]")?t.slice(0,-2):t}function Lp(t,e,n){return t?t.concat(e).map(function(r,s){return r=L_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function eP(t){return ie.isArray(t)&&!t.some(Pu)}const tP=ie.toFlatObject(ie,{},null,function(e){return/^is[A-Z]/.test(e)});function al(t,e,n){if(!ie.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=ie.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!ie.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&ie.isSpecCompliantForm(e);if(!ie.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(ie.isDate(_))return _.toISOString();if(!l&&ie.isBlob(_))throw new Ye("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(_)||ie.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,m){let h=_;if(_&&!m&&typeof _=="object"){if(ie.endsWith(v,"{}"))v=i?v:v.slice(0,-2),_=JSON.stringify(_);else if(ie.isArray(_)&&eP(_)||(ie.isFileList(_)||ie.endsWith(v,"[]"))&&(h=ie.toArray(_)))return v=L_(v),h.forEach(function(E,x){!(ie.isUndefined(E)||E===null)&&e.append(o===!0?Lp([v],x,s):o===null?v:v+"[]",c(E))}),!1}return Pu(_)?!0:(e.append(Lp(m,v,s),c(_)),!1)}const f=[],d=Object.assign(tP,{defaultVisitor:u,convertValue:c,isVisitable:Pu});function p(_,v){if(!ie.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),ie.forEach(_,function(h,S){(!(ie.isUndefined(h)||h===null)&&r.call(e,h,ie.isString(S)?S.trim():S,v,d))===!0&&p(h,v?v.concat(S):[S])}),f.pop()}}if(!ie.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Ip(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Nf(t,e){this._pairs=[],t&&al(t,this,e)}const I_=Nf.prototype;I_.append=function(e,n){this._pairs.push([e,n])};I_.toString=function(e){const n=e?function(i){return e.call(this,i,Ip)}:Ip;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function nP(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function D_(t,e,n){if(!e)return t;const i=n&&n.encode||nP;ie.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=ie.isURLSearchParams(e)?e.toString():new Nf(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Dp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ie.forEach(this.handlers,function(i){i!==null&&e(i)})}}const U_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},iP=typeof URLSearchParams<"u"?URLSearchParams:Nf,rP=typeof FormData<"u"?FormData:null,sP=typeof Blob<"u"?Blob:null,oP={isBrowser:!0,classes:{URLSearchParams:iP,FormData:rP,Blob:sP},protocols:["http","https","file","blob","url","data"]},Of=typeof window<"u"&&typeof document<"u",Lu=typeof navigator=="object"&&navigator||void 0,aP=Of&&(!Lu||["ReactNative","NativeScript","NS"].indexOf(Lu.product)<0),lP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",cP=Of&&window.location.href||"http://localhost",uP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Of,hasStandardBrowserEnv:aP,hasStandardBrowserWebWorkerEnv:lP,navigator:Lu,origin:cP},Symbol.toStringTag,{value:"Module"})),Kt={...uP,...oP};function fP(t,e){return al(t,new Kt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Kt.isNode&&ie.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function hP(t){return ie.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function dP(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function N_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&ie.isArray(r)?r.length:o,l?(ie.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!ie.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&ie.isArray(r[o])&&(r[o]=dP(r[o])),!a)}if(ie.isFormData(t)&&ie.isFunction(t.entries)){const n={};return ie.forEachEntry(t,(i,r)=>{e(hP(i),r,n,0)}),n}return null}function pP(t,e,n){if(ie.isString(t))try{return(e||JSON.parse)(t),ie.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Io={transitional:U_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=ie.isObject(e);if(s&&ie.isHTMLForm(e)&&(e=new FormData(e)),ie.isFormData(e))return r?JSON.stringify(N_(e)):e;if(ie.isArrayBuffer(e)||ie.isBuffer(e)||ie.isStream(e)||ie.isFile(e)||ie.isBlob(e)||ie.isReadableStream(e))return e;if(ie.isArrayBufferView(e))return e.buffer;if(ie.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return fP(e,this.formSerializer).toString();if((a=ie.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return al(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),pP(e)):e}],transformResponse:[function(e){const n=this.transitional||Io.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(ie.isResponse(e)||ie.isReadableStream(e))return e;if(e&&ie.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ye.from(a,Ye.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ie.forEach(["delete","get","head","post","put","patch"],t=>{Io.headers[t]={}});const mP=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gP=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&mP[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Up=Symbol("internals");function Vs(t){return t&&String(t).trim().toLowerCase()}function Ma(t){return t===!1||t==null?t:ie.isArray(t)?t.map(Ma):String(t)}function _P(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const vP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function cc(t,e,n,i,r){if(ie.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!ie.isString(e)){if(ie.isString(i))return e.indexOf(i)!==-1;if(ie.isRegExp(i))return i.test(e)}}function xP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function SP(t,e){const n=ie.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let dn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Vs(l);if(!u)throw new Error("header name must be a non-empty string");const f=ie.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Ma(a))}const o=(a,l)=>ie.forEach(a,(c,u)=>s(c,u,l));if(ie.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(ie.isString(e)&&(e=e.trim())&&!vP(e))o(gP(e),n);else if(ie.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=Vs(e),e){const i=ie.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return _P(r);if(ie.isFunction(n))return n.call(this,r,i);if(ie.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Vs(e),e){const i=ie.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||cc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Vs(o),o){const a=ie.findKey(i,o);a&&(!n||cc(i,i[a],a,n))&&(delete i[a],r=!0)}}return ie.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||cc(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return ie.forEach(this,(r,s)=>{const o=ie.findKey(i,s);if(o){n[o]=Ma(r),delete n[s];return}const a=e?xP(s):String(s).trim();a!==s&&delete n[s],n[a]=Ma(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return ie.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&ie.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Up]=this[Up]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Vs(o);i[a]||(SP(r,o),i[a]=!0)}return ie.isArray(e)?e.forEach(s):s(e),this}};dn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ie.reduceDescriptors(dn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});ie.freezeMethods(dn);function uc(t,e){const n=this||Io,i=e||n,r=dn.from(i.headers);let s=i.data;return ie.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function O_(t){return!!(t&&t.__CANCEL__)}function Cs(t,e,n){Ye.call(this,t??"canceled",Ye.ERR_CANCELED,e,n),this.name="CanceledError"}ie.inherits(Cs,Ye,{__CANCEL__:!0});function F_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ye("Request failed with status code "+n.status,[Ye.ERR_BAD_REQUEST,Ye.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function yP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function EP(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function MP(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Fa=(t,e,n=3)=>{let i=0;const r=EP(50,250);return MP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Np=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Op=t=>(...e)=>ie.asap(()=>t(...e)),bP=Kt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Kt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,TP=Kt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];ie.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ie.isString(i)&&o.push("path="+i),ie.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function wP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function AP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function B_(t,e,n){let i=!wP(e);return t&&i||n==!1?AP(t,e):e}const Fp=t=>t instanceof dn?{...t}:t;function Rr(t,e){e=e||{};const n={};function i(c,u,f,d){return ie.isPlainObject(c)&&ie.isPlainObject(u)?ie.merge.call({caseless:d},c,u):ie.isPlainObject(u)?ie.merge({},u):ie.isArray(u)?u.slice():u}function r(c,u,f,d){if(ie.isUndefined(u)){if(!ie.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!ie.isUndefined(u))return i(void 0,u)}function o(c,u){if(ie.isUndefined(u)){if(!ie.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Fp(c),Fp(u),f,!0)};return ie.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);ie.isUndefined(d)&&f!==a||(n[u]=d)}),n}const k_=t=>{const e=Rr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=dn.from(o),e.url=D_(B_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(ie.isFormData(n)){if(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Kt.hasStandardBrowserEnv&&(i&&ie.isFunction(i)&&(i=i(e)),i||i!==!1&&bP(e.url))){const c=r&&s&&TP.read(s);c&&o.set(r,c)}return e},RP=typeof XMLHttpRequest<"u",CP=RP&&function(t){return new Promise(function(n,i){const r=k_(t);let s=r.data;const o=dn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,_;function v(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const E=dn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),P={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};F_(function(R){n(R),v()},function(R){i(R),v()},P),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Ye("Request aborted",Ye.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new Ye("Network Error",Ye.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const P=r.transitional||U_;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),i(new Ye(x,P.clarifyTimeoutError?Ye.ETIMEDOUT:Ye.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&ie.forEach(o.toJSON(),function(x,P){m.setRequestHeader(P,x)}),ie.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,_]=Fa(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Fa(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=E=>{m&&(i(!E||E.type?new Cs(null,t,m):E),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const S=yP(r.url);if(S&&Kt.protocols.indexOf(S)===-1){i(new Ye("Unsupported protocol "+S+":",Ye.ERR_BAD_REQUEST,t));return}m.send(s||null)})},PP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ye?u:new Cs(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Ye(`timeout ${e} of ms exceeded`,Ye.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>ie.asap(a),l}},LP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},IP=async function*(t,e){for await(const n of DP(t))yield*LP(n,e)},DP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Bp=(t,e,n,i)=>{const r=IP(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},ll=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",H_=ll&&typeof ReadableStream=="function",UP=ll&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),z_=(t,...e)=>{try{return!!t(...e)}catch{return!1}},NP=H_&&z_(()=>{let t=!1;const e=new Request(Kt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),kp=64*1024,Iu=H_&&z_(()=>ie.isReadableStream(new Response("").body)),Ba={stream:Iu&&(t=>t.body)};ll&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ba[e]&&(Ba[e]=ie.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Ye(`Response type '${e}' is not supported`,Ye.ERR_NOT_SUPPORT,i)})})})(new Response);const OP=async t=>{if(t==null)return 0;if(ie.isBlob(t))return t.size;if(ie.isSpecCompliantForm(t))return(await new Request(Kt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(ie.isArrayBufferView(t)||ie.isArrayBuffer(t))return t.byteLength;if(ie.isURLSearchParams(t)&&(t=t+""),ie.isString(t))return(await UP(t)).byteLength},FP=async(t,e)=>{const n=ie.toFiniteNumber(t.getContentLength());return n??OP(e)},BP=ll&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=k_(t);c=c?(c+"").toLowerCase():"text";let p=PP([r,s&&s.toAbortSignal()],o),_;const v=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&NP&&n!=="get"&&n!=="head"&&(m=await FP(u,i))!==0){let P=new Request(e,{method:"POST",body:i,duplex:"half"}),I;if(ie.isFormData(i)&&(I=P.headers.get("content-type"))&&u.setContentType(I),P.body){const[R,O]=Np(m,Fa(Op(l)));i=Bp(P.body,kp,R,O)}}ie.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;_=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:h?f:void 0});let S=await fetch(_);const E=Iu&&(c==="stream"||c==="response");if(Iu&&(a||E&&v)){const P={};["status","statusText","headers"].forEach(w=>{P[w]=S[w]});const I=ie.toFiniteNumber(S.headers.get("content-length")),[R,O]=a&&Np(I,Fa(Op(a),!0))||[];S=new Response(Bp(S.body,kp,R,()=>{O&&O(),v&&v()}),P)}c=c||"text";let x=await Ba[ie.findKey(Ba,c)||"text"](S,t);return!E&&v&&v(),await new Promise((P,I)=>{F_(P,I,{data:x,headers:dn.from(S.headers),status:S.status,statusText:S.statusText,config:t,request:_})})}catch(h){throw v&&v(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new Ye("Network Error",Ye.ERR_NETWORK,t,_),{cause:h.cause||h}):Ye.from(h,h&&h.code,t,_)}}),Du={http:QC,xhr:CP,fetch:BP};ie.forEach(Du,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Hp=t=>`- ${t}`,kP=t=>ie.isFunction(t)||t===null||t===!1,V_={getAdapter:t=>{t=ie.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!kP(n)&&(i=Du[(o=String(n)).toLowerCase()],i===void 0))throw new Ye(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Hp).join(`
`):" "+Hp(s[0]):"as no adapter specified";throw new Ye("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Du};function fc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Cs(null,t)}function zp(t){return fc(t),t.headers=dn.from(t.headers),t.data=uc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),V_.getAdapter(t.adapter||Io.adapter)(t).then(function(i){return fc(t),i.data=uc.call(t,t.transformResponse,i),i.headers=dn.from(i.headers),i},function(i){return O_(i)||(fc(t),i&&i.response&&(i.response.data=uc.call(t,t.transformResponse,i.response),i.response.headers=dn.from(i.response.headers))),Promise.reject(i)})}const G_="1.8.3",cl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{cl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Vp={};cl.transitional=function(e,n,i){function r(s,o){return"[Axios v"+G_+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Ye(r(o," has been removed"+(n?" in "+n:"")),Ye.ERR_DEPRECATED);return n&&!Vp[o]&&(Vp[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};cl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function HP(t,e,n){if(typeof t!="object")throw new Ye("options must be an object",Ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ye("option "+s+" must be "+l,Ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ye("Unknown option "+s,Ye.ERR_BAD_OPTION)}}const ba={assertOptions:HP,validators:cl},Yn=ba.validators;let Mr=class{constructor(e){this.defaults=e,this.interceptors={request:new Dp,response:new Dp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Rr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&ba.assertOptions(i,{silentJSONParsing:Yn.transitional(Yn.boolean),forcedJSONParsing:Yn.transitional(Yn.boolean),clarifyTimeoutError:Yn.transitional(Yn.boolean)},!1),r!=null&&(ie.isFunction(r)?n.paramsSerializer={serialize:r}:ba.assertOptions(r,{encode:Yn.function,serialize:Yn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),ba.assertOptions(n,{baseUrl:Yn.spelling("baseURL"),withXsrfToken:Yn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&ie.merge(s.common,s[n.method]);s&&ie.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=dn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const _=[zp.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let p=n;for(f=0;f<d;){const _=a[f++],v=a[f++];try{p=_(p)}catch(m){v.call(this,m);break}}try{u=zp.call(this,p)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Rr(this.defaults,e);const n=B_(e.baseURL,e.url,e.allowAbsoluteUrls);return D_(n,e.params,e.paramsSerializer)}};ie.forEach(["delete","get","head","options"],function(e){Mr.prototype[e]=function(n,i){return this.request(Rr(i||{},{method:e,url:n,data:(i||{}).data}))}});ie.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Rr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Mr.prototype[e]=n(),Mr.prototype[e+"Form"]=n(!0)});let zP=class W_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Cs(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new W_(function(r){e=r}),cancel:e}}};function VP(t){return function(n){return t.apply(null,n)}}function GP(t){return ie.isObject(t)&&t.isAxiosError===!0}const Uu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Uu).forEach(([t,e])=>{Uu[e]=t});function X_(t){const e=new Mr(t),n=E_(Mr.prototype.request,e);return ie.extend(n,Mr.prototype,e,{allOwnKeys:!0}),ie.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return X_(Rr(t,r))},n}const It=X_(Io);It.Axios=Mr;It.CanceledError=Cs;It.CancelToken=zP;It.isCancel=O_;It.VERSION=G_;It.toFormData=al;It.AxiosError=Ye;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=VP;It.isAxiosError=GP;It.mergeConfig=Rr;It.AxiosHeaders=dn;It.formToJSON=t=>N_(ie.isHTMLForm(t)?new FormData(t):t);It.getAdapter=V_.getAdapter;It.HttpStatusCode=Uu;It.default=It;const{Axios:_L,AxiosError:vL,CanceledError:xL,isCancel:SL,CancelToken:yL,VERSION:EL,all:ML,Cancel:bL,isAxiosError:TL,spread:wL,toFormData:AL,AxiosHeaders:RL,HttpStatusCode:CL,formToJSON:PL,getAdapter:LL,mergeConfig:IL}=It,Gp=()=>It.create({baseURL:"https://dummyjson.com/auth/",timeout:1e3}),Wp={getUserFromLogin(t){return Gp().post("/login",t,{headers:{"Content-Type":"application/json"}})},getCurrentAuthByToken(t){return Gp().get("/me",{headers:{Authorization:`Bearer ${t}`}})}},Ff=rf("user",()=>{const t=ln(null),e=ln(null),n=ln(null),i=ln(null);async function r(a,l){var c;try{const u=await Wp.getUserFromLogin({username:a,password:l,expiresponseInMins:.1});e.value=u.data.accessToken,Eo.push(((c=Eo.currentRoute.value.query.redirect)==null?void 0:c.toString())||{name:"authentication"})}catch{n.value="Login failed"}}async function s(){try{if(!e.value)return i.value="You are not login",!1;const a=await Wp.getCurrentAuthByToken(e.value);return t.value=a.data,!0}catch(a){return i.value=`Authentication failed ${a.status}`,!1}}function o(){t.value=null,e.value=null}return{user:t,accessToken:e,loginErr:n,authErr:i,handleLogin:r,handleAuth:s,$reset:o}}),WP={class:"page grid grid-cols-2 grid-rows-4 a-center j-items-center w-0.90 pl-0.5 pr-0.5 font-size-16"},XP={class:"col-span-2 mt-12 mb-12 txt-a-center"},$P={key:0,class:"mt-0 mb-0"},qP={key:1,class:"mt-0 mb-0"},jP={class:"mt-8 mb-0"},hc=3e3,YP=Xt({__name:"AuthView",setup(t){const e=Ff(),n=ln(""),i=ln("");let r=setTimeout(()=>{}),s=!1;Rm(async()=>{await e.handleAuth()});const o=async()=>{n.value="Authenticating",s=await e.handleAuth(),console.log(e.authErr),s?(clearTimeout(r),n.value="Authentication success",r=setTimeout(()=>{n.value=""},hc)):(clearTimeout(r),n.value="Authentication failed",i.value=e.authErr,r=setTimeout(()=>{n.value="",i.value=""},hc))},a=()=>{e.user&&(clearTimeout(r),n.value="You are login",r=setTimeout(()=>{n.value=""},hc))};return(l,c)=>{const u=yr("router-link");return gt(),yt("div",WP,[We("div",XP,[Cn(e).user?(gt(),yt("p",$P,[Ws(" Username: "+Qn(Cn(e).user.username)+" ",1),c[0]||(c[0]=We("br",null,null,-1)),Ws(" Email: "+Qn(Cn(e).user.email)+" ",1),c[1]||(c[1]=We("br",null,null,-1))])):(gt(),yt("p",qP,"You are not login")),We("p",jP,[Ws(Qn(n.value)+" ",1),c[2]||(c[2]=We("br",null,null,-1)),Ws(" "+Qn(i.value),1)])]),rt(u,{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",to:{name:"login"},onClick:a},{default:Ca(()=>c[3]||(c[3]=[We("span",null,"Login",-1)])),_:1}),c[6]||(c[6]=We("span",null,"Direct to login page if you are not login",-1)),rt(u,{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",to:{name:"auth-content"}},{default:Ca(()=>c[4]||(c[4]=[We("span",null,"Can only access after login",-1)])),_:1}),c[7]||(c[7]=We("span",null,"Direct to content page if you are login else will direct you to login page",-1)),We("button",{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",onClick:o},c[5]||(c[5]=[We("span",{class:"font-size-16"},"Authenticate",-1)])),c[8]||(c[8]=We("span",null,"Check for authentication",-1))])}}}),KP={class:"login page"},ZP={key:0},JP=Xt({__name:"LoginView",setup(t){const e=ln("emilys"),n=ln("emilyspass"),i=Ff(),r=async()=>{await i.handleLogin(e.value,n.value)};return(s,o)=>(gt(),yt("div",KP,[o[6]||(o[6]=We("h1",null,"Login",-1)),We("div",null,[o[2]||(o[2]=We("span",null,"Username: ",-1)),Yf(We("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,512),[[yh,e.value]]),o[3]||(o[3]=We("br",null,null,-1)),o[4]||(o[4]=We("span",null,"Password: ",-1)),Yf(We("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,512),[[yh,n.value]]),o[5]||(o[5]=We("br",null,null,-1)),We("button",{onClick:r},"Login")]),Cn(i).loginErr?(gt(),yt("p",ZP,Qn(Cn(i).loginErr),1)):Si("",!0)]))}}),QP=Xn(JP,[["__scopeId","data-v-10e3505e"]]),eL={class:"auth-content page"},tL=Xt({__name:"AuthContentView",setup(t){const e=()=>{Eo.push({name:"authentication"})};return(n,i)=>(gt(),yt("div",eL,[i[0]||(i[0]=We("span",null,"You have successfully login",-1)),We("button",{onClick:e},"Back to Authentication Page")]))}}),nL=Xn(tL,[["__scopeId","data-v-191902c5"]]),iL={},rL={class:"page"};function sL(t,e){return gt(),yt("div",rL,e[0]||(e[0]=[We("h1",null,"Sorry",-1),We("h2",null,"This page is not yet online",-1)]))}const oL=Xn(iL,[["render",sL]]),aL={},lL={class:"page test"};function cL(t,e){return gt(),yt("div",lL," Test ")}const uL=Xn(aL,[["render",cL],["__scopeId","data-v-cd553ea4"]]),$_=[{path:"/",name:"home",component:aC},{path:"/works",name:"works",component:uC},{path:"/blogs",name:"blogs",component:oL},{path:"/todos",name:"todos",component:pC},{path:"/authentication",name:"authentication",component:YP},{path:"/login",name:"login",component:QP,meta:{requireGuest:!0}},{path:"/auth-content",name:"auth-content",component:nL,meta:{requireAuth:!0}},{path:"/test",name:"test",component:uL}],Eo=gM({history:XE("/my-site/"),scrollBehavior(){return{top:0}},routes:$_});Eo.beforeEach(async(t,e,n)=>{const i=Ff(),r=sessionStorage.redirect;r?($_.forEach(s=>{r===s.path&&(sessionStorage.removeItem("redirect"),n(r))}),n()):t.meta.requireAuth?await i.handleAuth()?n():n({name:"login",query:{redirect:t.fullPath}}):t.meta.requireGuest&&await i.handleAuth()?n({name:"authentication"}):n()});const dc={messages:{hello:"hello, i am",home:"home",work:"work",todos:"todos",authentication:"authentication",blogs:"blogs",blog:"blog",test:"test"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},pc={messages:{hello:"你好, 我是",home:"主頁",work:"項目",todos:"任務清單",authentication:"驗證",blogs:"部落格",blog:"博客",test:"測試"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},fL={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":dc.messages,"zh-TW":pc.messages},datetimeFormats:{"en-US":dc.dateTimeFormats,"zh-TW":pc.dateTimeFormats},numberFormats:{"en-US":dc.numberFormats,"zh-TW":pc.numberFormats}},hL=Wy(fL),dL=zx(),ul=mx(pE);ul.use(Eo);ul.use(hL);ul.use(dL);ul.mount("#app");
