var q_=Object.defineProperty;var Y_=(t,e,n)=>e in t?q_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var $e=(t,e,n)=>Y_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xt={},ns=[],ii=()=>{},j_=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lu=t=>t.startsWith("onUpdate:"),nn=Object.assign,Iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},K_=Object.prototype.hasOwnProperty,dt=(t,e)=>K_.call(t,e),We=Array.isArray,is=t=>Ia(t)==="[object Map]",Ip=t=>Ia(t)==="[object Set]",Ye=t=>typeof t=="function",Bt=t=>typeof t=="string",Pi=t=>typeof t=="symbol",Tt=t=>t!==null&&typeof t=="object",Dp=t=>(Tt(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),Up=Object.prototype.toString,Ia=t=>Up.call(t),Z_=t=>Ia(t).slice(8,-1),Np=t=>Ia(t)==="[object Object]",Du=t=>Bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bs=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Da=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},J_=/-(\w)/g,Un=Da(t=>t.replace(J_,(e,n)=>n?n.toUpperCase():"")),Q_=/\B([A-Z])/g,Ir=Da(t=>t.replace(Q_,"-$1").toLowerCase()),Ua=Da(t=>t.charAt(0).toUpperCase()+t.slice(1)),ul=Da(t=>t?`on${Ua(t)}`:""),Xi=(t,e)=>!Object.is(t,e),ta=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Op=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ff;const Na=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Bt(i)?i0(i):Oa(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Bt(t)||Tt(t))return t}const e0=/;(?![^(]*\))/g,t0=/:([^]+)/,n0=/\/\*[^]*?\*\//g;function i0(t){const e={};return t.replace(n0,"").split(e0).forEach(n=>{if(n){const i=n.split(t0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ln(t){let e="";if(Bt(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=Ln(t[n]);i&&(e+=i+" ")}else if(Tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const r0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s0=Pu(r0);function Fp(t){return!!t||t===""}const Bp=t=>!!(t&&t.__v_isRef===!0),In=t=>Bt(t)?t:t==null?"":We(t)||Tt(t)&&(t.toString===Up||!Ye(t.toString))?Bp(t)?In(t.value):JSON.stringify(t,kp,2):String(t),kp=(t,e)=>Bp(e)?kp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[fl(i,s)+" =>"]=r,n),{})}:Ip(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fl(n))}:Pi(e)?fl(e):Tt(e)&&!We(e)&&!Np(e)?String(e):e,fl=(t,e="")=>{var n;return Pi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Hp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ln;try{return ln=this,e()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Uu(t){return new Hp(t)}function Vp(){return ln}function o0(t,e=!1){ln&&ln.cleanups.push(t)}let yt;const hl=new WeakSet;class zp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hl.has(this)&&(hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bf(this),Xp(this);const e=yt,n=Gn;yt=this,Gn=!0;try{return this.fn()}finally{$p(this),yt=e,Gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fu(e);this.deps=this.depsTail=void 0,Bf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dc(this)&&this.run()}get dirty(){return dc(this)}}let Gp=0,ks,Hs;function Wp(t,e=!1){if(t.flags|=8,e){t.next=Hs,Hs=t;return}t.next=ks,ks=t}function Nu(){Gp++}function Ou(){if(--Gp>0)return;if(Hs){let e=Hs;for(Hs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ks;){let e=ks;for(ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $p(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Fu(i),a0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function dc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(qp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function qp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$s))return;t.globalVersion=$s;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!dc(t)){t.flags&=-3;return}const n=yt,i=Gn;yt=t,Gn=!0;try{Xp(t);const r=t.fn(t._value);(e.version===0||Xi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{yt=n,Gn=i,$p(t),t.flags&=-3}}function Fu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Fu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function a0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gn=!0;const Yp=[];function Qi(){Yp.push(Gn),Gn=!1}function er(){const t=Yp.pop();Gn=t===void 0?!0:t}function Bf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=yt;yt=void 0;try{e()}finally{yt=n}}}let $s=0;class l0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!yt||!Gn||yt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==yt)n=this.activeLink=new l0(yt,this),yt.deps?(n.prevDep=yt.depsTail,yt.depsTail.nextDep=n,yt.depsTail=n):yt.deps=yt.depsTail=n,jp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=yt.depsTail,n.nextDep=void 0,yt.depsTail.nextDep=n,yt.depsTail=n,yt.deps===n&&(yt.deps=i)}return n}trigger(e){this.version++,$s++,this.notify(e)}notify(e){Nu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ou()}}}function jp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)jp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ma=new WeakMap,br=Symbol(""),pc=Symbol(""),qs=Symbol("");function Qt(t,e,n){if(Gn&&yt){let i=ma.get(t);i||ma.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Bu),r.map=i,r.key=n),r.track()}}function Si(t,e,n,i,r,s){const o=ma.get(t);if(!o){$s++;return}const a=l=>{l&&l.trigger()};if(Nu(),e==="clear")o.forEach(a);else{const l=We(t),c=l&&Du(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===qs||!Pi(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(qs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(br)),is(t)&&a(o.get(pc)));break;case"delete":l||(a(o.get(br)),is(t)&&a(o.get(pc)));break;case"set":is(t)&&a(o.get(br));break}}Ou()}function c0(t,e){const n=ma.get(t);return n&&n.get(e)}function Nr(t){const e=at(t);return e===t?e:(Qt(e,"iterate",qs),Dn(t)?e:e.map(en))}function Fa(t){return Qt(t=at(t),"iterate",qs),t}const u0={__proto__:null,[Symbol.iterator](){return dl(this,Symbol.iterator,en)},concat(...t){return Nr(this).concat(...t.map(e=>We(e)?Nr(e):e))},entries(){return dl(this,"entries",t=>(t[1]=en(t[1]),t))},every(t,e){return ui(this,"every",t,e,void 0,arguments)},filter(t,e){return ui(this,"filter",t,e,n=>n.map(en),arguments)},find(t,e){return ui(this,"find",t,e,en,arguments)},findIndex(t,e){return ui(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ui(this,"findLast",t,e,en,arguments)},findLastIndex(t,e){return ui(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ui(this,"forEach",t,e,void 0,arguments)},includes(...t){return pl(this,"includes",t)},indexOf(...t){return pl(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return pl(this,"lastIndexOf",t)},map(t,e){return ui(this,"map",t,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...t){return ws(this,"push",t)},reduce(t,...e){return kf(this,"reduce",t,e)},reduceRight(t,...e){return kf(this,"reduceRight",t,e)},shift(){return ws(this,"shift")},some(t,e){return ui(this,"some",t,e,void 0,arguments)},splice(...t){return ws(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return ws(this,"unshift",t)},values(){return dl(this,"values",en)}};function dl(t,e,n){const i=Fa(t),r=i[e]();return i!==t&&!Dn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const f0=Array.prototype;function ui(t,e,n,i,r,s){const o=Fa(t),a=o!==t&&!Dn(t),l=o[e];if(l!==f0[e]){const f=l.apply(t,s);return a?en(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,en(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function kf(t,e,n,i){const r=Fa(t);let s=n;return r!==t&&(Dn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,en(a),l,t)}),r[e](s,...i)}function pl(t,e,n){const i=at(t);Qt(i,"iterate",qs);const r=i[e](...n);return(r===-1||r===!1)&&Vu(n[0])?(n[0]=at(n[0]),i[e](...n)):r}function ws(t,e,n=[]){Qi(),Nu();const i=at(t)[e].apply(t,n);return Ou(),er(),i}const h0=Pu("__proto__,__v_isRef,__isVue"),Kp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pi));function d0(t){Pi(t)||(t=String(t));const e=at(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class Zp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?M0:tm:s?em:Qp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=u0[n]))return l;if(n==="hasOwnProperty")return d0}const a=Reflect.get(e,n,It(e)?e:i);return(Pi(n)?Kp.has(n):h0(n))||(r||Qt(e,"get",n),s)?a:It(a)?o&&Du(n)?a:a.value:Tt(a)?r?im(a):fo(a):a}}class Jp extends Zp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Ar(s);if(!Dn(i)&&!Ar(i)&&(s=at(s),i=at(i)),!We(e)&&It(s)&&!It(i))return l?!1:(s.value=i,!0)}const o=We(e)&&Du(n)?Number(n)<e.length:dt(e,n),a=Reflect.set(e,n,i,It(e)?e:r);return e===at(r)&&(o?Xi(i,s)&&Si(e,"set",n,i):Si(e,"add",n,i)),a}deleteProperty(e,n){const i=dt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Pi(n)||!Kp.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",We(e)?"length":br),Reflect.ownKeys(e)}}class p0 extends Zp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const m0=new Jp,g0=new p0,_0=new Jp(!0);const mc=t=>t,Ao=t=>Reflect.getPrototypeOf(t);function v0(t,e,n){return function(...i){const r=this.__v_raw,s=at(r),o=is(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?mc:e?gc:en;return!e&&Qt(s,"iterate",l?pc:br),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function x0(t,e){const n={get(r){const s=this.__v_raw,o=at(s),a=at(r);t||(Xi(r,a)&&Qt(o,"get",r),Qt(o,"get",a));const{has:l}=Ao(o),c=e?mc:t?gc:en;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Qt(at(r),"iterate",br),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=at(s),a=at(r);return t||(Xi(r,a)&&Qt(o,"has",r),Qt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),c=e?mc:t?gc:en;return!t&&Qt(l,"iterate",br),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return nn(n,t?{add:Ro("add"),set:Ro("set"),delete:Ro("delete"),clear:Ro("clear")}:{add(r){!e&&!Dn(r)&&!Ar(r)&&(r=at(r));const s=at(this);return Ao(s).has.call(s,r)||(s.add(r),Si(s,"add",r,r)),this},set(r,s){!e&&!Dn(s)&&!Ar(s)&&(s=at(s));const o=at(this),{has:a,get:l}=Ao(o);let c=a.call(o,r);c||(r=at(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Xi(s,u)&&Si(o,"set",r,s):Si(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=Ao(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Si(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&Si(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=v0(r,t,e)}),n}function ku(t,e){const n=x0(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(dt(n,r)&&r in i?n:i,r,s)}const S0={get:ku(!1,!1)},y0={get:ku(!1,!0)},E0={get:ku(!0,!1)};const Qp=new WeakMap,em=new WeakMap,tm=new WeakMap,M0=new WeakMap;function b0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T0(t){return t.__v_skip||!Object.isExtensible(t)?0:b0(Z_(t))}function fo(t){return Ar(t)?t:Hu(t,!1,m0,S0,Qp)}function nm(t){return Hu(t,!1,_0,y0,em)}function im(t){return Hu(t,!0,g0,E0,tm)}function Hu(t,e,n,i,r){if(!Tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=T0(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function $i(t){return Ar(t)?$i(t.__v_raw):!!(t&&t.__v_isReactive)}function Ar(t){return!!(t&&t.__v_isReadonly)}function Dn(t){return!!(t&&t.__v_isShallow)}function Vu(t){return t?!!t.__v_raw:!1}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function zu(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&Op(t,"__v_skip",!0),t}const en=t=>Tt(t)?fo(t):t,gc=t=>Tt(t)?im(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Ct(t){return rm(t,!1)}function Gu(t){return rm(t,!0)}function rm(t,e){return It(t)?t:new w0(t,e)}class w0{constructor(e,n){this.dep=new Bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:at(e),this._value=n?e:en(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Dn(e)||Ar(e);e=i?e:at(e),Xi(e,n)&&(this._rawValue=e,this._value=i?e:en(e),this.dep.trigger())}}function dn(t){return It(t)?t.value:t}const A0={get:(t,e,n)=>e==="__v_raw"?t:dn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return It(r)&&!It(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function sm(t){return $i(t)?t:new Proxy(t,A0)}function R0(t){const e=We(t)?new Array(t.length):{};for(const n in t)e[n]=P0(t,n);return e}class C0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return c0(at(this._object),this._key)}}function P0(t,e,n){const i=t[e];return It(i)?i:new C0(t,e,n)}class L0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return Wp(this,!0),!0}get value(){const e=this.dep.track();return qp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function I0(t,e,n=!1){let i,r;return Ye(t)?i=t:(i=t.get,r=t.set),new L0(i,r,n)}const Co={},ga=new WeakMap;let mr;function D0(t,e=!1,n=mr){if(n){let i=ga.get(n);i||ga.set(n,i=[]),i.push(t)}}function U0(t,e,n=xt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:Dn(x)||r===!1||r===0?yi(x,1):yi(x);let u,f,h,p,_=!1,v=!1;if(It(t)?(f=()=>t.value,_=Dn(t)):$i(t)?(f=()=>c(t),_=!0):We(t)?(v=!0,_=t.some(x=>$i(x)||Dn(x)),f=()=>t.map(x=>{if(It(x))return x.value;if($i(x))return c(x);if(Ye(x))return l?l(x,2):x()})):Ye(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Qi();try{h()}finally{er()}}const x=mr;mr=u;try{return l?l(t,3,[p]):t(p)}finally{mr=x}}:f=ii,e&&r){const x=f,P=r===!0?1/0:r;f=()=>yi(x(),P)}const m=Vp(),d=()=>{u.stop(),m&&m.active&&Iu(m.effects,u)};if(s&&e){const x=e;e=(...P)=>{x(...P),d()}}let S=v?new Array(t.length).fill(Co):Co;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(r||_||(v?P.some((L,w)=>Xi(L,S[w])):Xi(P,S))){h&&h();const L=mr;mr=u;try{const w=[P,S===Co?void 0:v&&S[0]===Co?[]:S,p];l?l(e,3,w):e(...w),S=P}finally{mr=L}}}else u.run()};return a&&a(E),u=new zp(f),u.scheduler=o?()=>o(E,!1):E,p=x=>D0(x,!1,u),h=u.onStop=()=>{const x=ga.get(u);if(x){if(l)l(x,4);else for(const P of x)P();ga.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function yi(t,e=1/0,n){if(e<=0||!Tt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))yi(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)yi(t[i],e,n);else if(Ip(t)||is(t))t.forEach(i=>{yi(i,e,n)});else if(Np(t)){for(const i in t)yi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&yi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(t,e,n,i){try{return i?t(...i):t()}catch(r){Ba(r,e,n)}}function ai(t,e,n,i){if(Ye(t)){const r=ho(t,e,n,i);return r&&Dp(r)&&r.catch(s=>{Ba(s,e,n)}),r}if(We(t)){const r=[];for(let s=0;s<t.length;s++)r.push(ai(t[s],e,n,i));return r}}function Ba(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Qi(),ho(s,null,10,[t,l,c]),er();return}}N0(t,n,r,i,o)}function N0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const cn=[];let Jn=-1;const rs=[];let Vi=null,Zr=0;const om=Promise.resolve();let _a=null;function Wu(t){const e=_a||om;return t?e.then(this?t.bind(this):t):e}function O0(t){let e=Jn+1,n=cn.length;for(;e<n;){const i=e+n>>>1,r=cn[i],s=Ys(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Xu(t){if(!(t.flags&1)){const e=Ys(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Ys(n)?cn.push(t):cn.splice(O0(e),0,t),t.flags|=1,am()}}function am(){_a||(_a=om.then(cm))}function F0(t){We(t)?rs.push(...t):Vi&&t.id===-1?Vi.splice(Zr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),am()}function Hf(t,e,n=Jn+1){for(;n<cn.length;n++){const i=cn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;cn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function lm(t){if(rs.length){const e=[...new Set(rs)].sort((n,i)=>Ys(n)-Ys(i));if(rs.length=0,Vi){Vi.push(...e);return}for(Vi=e,Zr=0;Zr<Vi.length;Zr++){const n=Vi[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Vi=null,Zr=0}}const Ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function cm(t){try{for(Jn=0;Jn<cn.length;Jn++){const e=cn[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<cn.length;Jn++){const e=cn[Jn];e&&(e.flags&=-2)}Jn=-1,cn.length=0,lm(),_a=null,(cn.length||rs.length)&&cm()}}let Vt=null,um=null;function va(t){const e=Vt;return Vt=t,um=t&&t.type.__scopeId||null,e}function Dt(t,e=Vt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Jf(-1);const s=va(e);let o;try{o=t(...r)}finally{va(s),i._d&&Jf(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Vf(t,e){if(Vt===null)return t;const n=Ga(Vt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=xt]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&yi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ar(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Qi(),ai(l,n,8,[t.el,a,t,e]),er())}}const B0=Symbol("_vte"),k0=t=>t.__isTeleport;function $u(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$u(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function jt(t,e){return Ye(t)?nn({name:t.name},e,{setup:t}):t}function fm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function hm(t){const e=us(),n=Gu(null);if(e){const r=e.refs===xt?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function xa(t,e,n,i,r=!1){if(We(t)){t.forEach((_,v)=>xa(_,e&&(We(e)?e[v]:e),n,i,r));return}if(ss(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&xa(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ga(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,f=a.setupState,h=at(f),p=f===xt?()=>!1:_=>dt(h,_);if(c!=null&&c!==l&&(Bt(c)?(u[c]=null,p(c)&&(f[c]=null)):It(c)&&(c.value=null)),Ye(l))ho(l,a,12,[o,u]);else{const _=Bt(l),v=It(l);if(_||v){const m=()=>{if(t.f){const d=_?p(l)?f[l]:u[l]:l.value;r?We(d)&&Iu(d,s):We(d)?d.includes(s)||d.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,yn(m,n)):m()}}}Na().requestIdleCallback;Na().cancelIdleCallback;const ss=t=>!!t.type.__asyncLoader,dm=t=>t.type.__isKeepAlive;function H0(t,e){pm(t,"a",e)}function V0(t,e){pm(t,"da",e)}function pm(t,e,n=$t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ka(e,i,n),n){let r=n.parent;for(;r&&r.parent;)dm(r.parent.vnode)&&z0(i,e,n,r),r=r.parent}}function z0(t,e,n,i){const r=ka(e,t,i,!0);po(()=>{Iu(i[e],r)},n)}function ka(t,e,n=$t,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Qi();const a=go(n),l=ai(e,n,t,o);return a(),er(),l});return i?r.unshift(s):r.push(s),s}}const Li=t=>(e,n=$t)=>{(!Zs||t==="sp")&&ka(t,(...i)=>e(...i),n)},mm=Li("bm"),Ha=Li("m"),G0=Li("bu"),W0=Li("u"),X0=Li("bum"),po=Li("um"),$0=Li("sp"),q0=Li("rtg"),Y0=Li("rtc");function j0(t,e=$t){ka("ec",t,e)}const K0="components";function Ai(t,e){return J0(K0,t,!0,e)||t}const Z0=Symbol.for("v-ndc");function J0(t,e,n=!0,i=!1){const r=Vt||$t;if(r){const s=r.type;{const a=kv(s,!1);if(a&&(a===e||a===Un(e)||a===Ua(Un(e))))return s}const o=zf(r[t]||s[t],e)||zf(r.appContext[t],e);return!o&&i?s:o}}function zf(t,e){return t&&(t[e]||t[Un(e)]||t[Ua(Un(e))])}function Gf(t,e,n,i){let r;const s=n,o=We(t);if(o||Bt(t)){const a=o&&$i(t);let l=!1;a&&(l=!Dn(t),t=Fa(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?en(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Tt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Sa(t,e,n={},i,r){if(Vt.ce||Vt.parent&&ss(Vt.parent)&&Vt.parent.ce)return e!=="default"&&(n.name=e),it(),Ea(kt,null,[et("slot",n,i&&i())],64);let s=t[e];s&&s._c&&(s._d=!1),it();const o=s&&gm(s(n)),a=n.key||o&&o.key,l=Ea(kt,{key:(a&&!Pi(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function gm(t){return t.some(e=>Ks(e)?!(e.type===ji||e.type===kt&&!gm(e.children)):!0)?t:null}const _c=t=>t?Om(t)?Ga(t):_c(t.parent):null,Vs=nn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vm(t),$forceUpdate:t=>t.f||(t.f=()=>{Xu(t.update)}),$nextTick:t=>t.n||(t.n=Wu.bind(t.proxy)),$watch:t=>Sv.bind(t)}),ml=(t,e)=>t!==xt&&!t.__isScriptSetup&&dt(t,e),Q0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ml(i,e))return o[e]=1,i[e];if(r!==xt&&dt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&dt(c,e))return o[e]=3,s[e];if(n!==xt&&dt(n,e))return o[e]=4,n[e];vc&&(o[e]=0)}}const u=Vs[e];let f,h;if(u)return e==="$attrs"&&Qt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==xt&&dt(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,dt(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ml(r,e)?(r[e]=n,!0):i!==xt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==xt&&dt(t,o)||ml(e,o)||(a=s[0])&&dt(a,o)||dt(i,o)||dt(Vs,o)||dt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wf(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vc=!0;function ev(t){const e=vm(t),n=t.proxy,i=t.ctx;vc=!1,e.beforeCreate&&Xf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:S,destroyed:E,unmounted:x,render:P,renderTracked:L,renderTriggered:w,errorCaptured:O,serverPrefetch:A,expose:b,inheritAttrs:F,components:Y,directives:q,filters:oe}=e;if(c&&tv(c,i,null),o)for(const K in o){const W=o[K];Ye(W)&&(i[K]=W.bind(n))}if(r){const K=r.call(n,n);Tt(K)&&(t.data=fo(K))}if(vc=!0,s)for(const K in s){const W=s[K],pe=Ye(W)?W.bind(n,n):Ye(W.get)?W.get.bind(n,n):ii,Se=!Ye(W)&&Ye(W.set)?W.set.bind(n):ii,Re=Ht({get:pe,set:Se});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>Re.value,set:Be=>Re.value=Be})}if(a)for(const K in a)_m(a[K],i,n,K);if(l){const K=Ye(l)?l.call(n):l;Reflect.ownKeys(K).forEach(W=>{na(W,K[W])})}u&&Xf(u,t,"c");function te(K,W){We(W)?W.forEach(pe=>K(pe.bind(n))):W&&K(W.bind(n))}if(te(mm,f),te(Ha,h),te(G0,p),te(W0,_),te(H0,v),te(V0,m),te(j0,O),te(Y0,L),te(q0,w),te(X0,S),te(po,x),te($0,A),We(b))if(b.length){const K=t.exposed||(t.exposed={});b.forEach(W=>{Object.defineProperty(K,W,{get:()=>n[W],set:pe=>n[W]=pe})})}else t.exposed||(t.exposed={});P&&t.render===ii&&(t.render=P),F!=null&&(t.inheritAttrs=F),Y&&(t.components=Y),q&&(t.directives=q),A&&fm(t)}function tv(t,e,n=ii){We(t)&&(t=xc(t));for(const i in t){const r=t[i];let s;Tt(r)?"default"in r?s=Wn(r.from||i,r.default,!0):s=Wn(r.from||i):s=Wn(r),It(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Xf(t,e,n){ai(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function _m(t,e,n,i){let r=i.includes(".")?Lm(n,i):()=>n[i];if(Bt(t)){const s=e[t];Ye(s)&&Ri(r,s)}else if(Ye(t))Ri(r,t.bind(n));else if(Tt(t))if(We(t))t.forEach(s=>_m(s,e,n,i));else{const s=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(s)&&Ri(r,s,t)}}function vm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ya(l,c,o,!0)),ya(l,e,o)),Tt(e)&&s.set(e,l),l}function ya(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ya(t,s,n,!0),r&&r.forEach(o=>ya(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=nv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nv={data:$f,props:qf,emits:qf,methods:Os,computed:Os,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Os,directives:Os,watch:rv,provide:$f,inject:iv};function $f(t,e){return e?t?function(){return nn(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function iv(t,e){return Os(xc(t),xc(e))}function xc(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?nn(Object.create(null),t,e):e}function qf(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:nn(Object.create(null),Wf(t),Wf(e??{})):e}function rv(t,e){if(!t)return e;if(!e)return t;const n=nn(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function xm(){return{app:null,config:{isNativeTag:j_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sv=0;function ov(t,e){return function(i,r=null){Ye(i)||(i=nn({},i)),r!=null&&!Tt(r)&&(r=null);const s=xm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:sv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Vv,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||et(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Ga(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ai(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Tr;Tr=c;try{return u()}finally{Tr=f}}};return c}}let Tr=null;function na(t,e){if($t){let n=$t.provides;const i=$t.parent&&$t.parent.provides;i===n&&(n=$t.provides=Object.create(i)),n[t]=e}}function Wn(t,e,n=!1){const i=$t||Vt;if(i||Tr){const r=Tr?Tr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function av(){return!!($t||Vt||Tr)}const Sm={},ym=()=>Object.create(Sm),Em=t=>Object.getPrototypeOf(t)===Sm;function lv(t,e,n,i=!1){const r={},s=ym();t.propsDefaults=Object.create(null),Mm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:nm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function cv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=at(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(za(t.emitsOptions,h))continue;const p=e[h];if(l)if(dt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Un(h);r[_]=Sc(l,a,_,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Mm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!dt(e,f)&&((u=Ir(f))===f||!dt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Sc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!dt(e,f))&&(delete s[f],c=!0)}c&&Si(t.attrs,"set","")}function Mm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bs(l))continue;const c=e[l];let u;r&&dt(r,u=Un(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:za(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(n),c=a||xt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Sc(r,l,f,c[f],t,!dt(c,f))}}return o}function Sc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=go(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ir(n))&&(i=!0))}return i}const uv=new WeakMap;function bm(t,e,n=!1){const i=n?uv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ye(t)){const u=f=>{l=!0;const[h,p]=bm(f,e,!0);nn(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Tt(t)&&i.set(t,ns),ns;if(We(s))for(let u=0;u<s.length;u++){const f=Un(s[u]);Yf(f)&&(o[f]=xt)}else if(s)for(const u in s){const f=Un(u);if(Yf(f)){const h=s[u],p=o[f]=We(h)||Ye(h)?{type:h}:nn({},h),_=p.type;let v=!1,m=!0;if(We(_))for(let d=0;d<_.length;++d){const S=_[d],E=Ye(S)&&S.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=Ye(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||dt(p,"default"))&&a.push(f)}}const c=[o,a];return Tt(t)&&i.set(t,c),c}function Yf(t){return t[0]!=="$"&&!Bs(t)}const Tm=t=>t[0]==="_"||t==="$stable",qu=t=>We(t)?t.map(Qn):[Qn(t)],fv=(t,e,n)=>{if(e._n)return e;const i=Dt((...r)=>qu(e(...r)),n);return i._c=!1,i},wm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Tm(r))continue;const s=t[r];if(Ye(s))e[r]=fv(r,s,i);else if(s!=null){const o=qu(s);e[r]=()=>o}}},Am=(t,e)=>{const n=qu(e);t.slots.default=()=>n},Rm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},hv=(t,e,n)=>{const i=t.slots=ym();if(t.vnode.shapeFlag&32){const r=e._;r?(Rm(i,e,n),n&&Op(i,"_",r,!0)):wm(e,i)}else e&&Am(t,e)},dv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Rm(r,e,n):(s=!e.$stable,wm(e,r)),o=e}else e&&(Am(t,e),o={default:1});if(s)for(const a in r)!Tm(a)&&o[a]==null&&delete r[a]},yn=Av;function pv(t){return mv(t)}function mv(t,e){const n=Na();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=ii,insertStaticContent:_}=t,v=(D,U,y,ne=null,Z=null,Q=null,T=void 0,C=null,N=!!U.dynamicChildren)=>{if(D===U)return;D&&!As(D,U)&&(ne=H(D),Be(D,Z,Q,!0),D=null),U.patchFlag===-2&&(N=!1,U.dynamicChildren=null);const{type:k,ref:me,shapeFlag:M}=U;switch(k){case mo:m(D,U,y,ne);break;case ji:d(D,U,y,ne);break;case _l:D==null&&S(U,y,ne,T);break;case kt:Y(D,U,y,ne,Z,Q,T,C,N);break;default:M&1?P(D,U,y,ne,Z,Q,T,C,N):M&6?q(D,U,y,ne,Z,Q,T,C,N):(M&64||M&128)&&k.process(D,U,y,ne,Z,Q,T,C,N,le)}me!=null&&Z&&xa(me,D&&D.ref,Q,U||D,!U)},m=(D,U,y,ne)=>{if(D==null)i(U.el=a(U.children),y,ne);else{const Z=U.el=D.el;U.children!==D.children&&c(Z,U.children)}},d=(D,U,y,ne)=>{D==null?i(U.el=l(U.children||""),y,ne):U.el=D.el},S=(D,U,y,ne)=>{[D.el,D.anchor]=_(D.children,U,y,ne,D.el,D.anchor)},E=({el:D,anchor:U},y,ne)=>{let Z;for(;D&&D!==U;)Z=h(D),i(D,y,ne),D=Z;i(U,y,ne)},x=({el:D,anchor:U})=>{let y;for(;D&&D!==U;)y=h(D),r(D),D=y;r(U)},P=(D,U,y,ne,Z,Q,T,C,N)=>{U.type==="svg"?T="svg":U.type==="math"&&(T="mathml"),D==null?L(U,y,ne,Z,Q,T,C,N):A(D,U,Z,Q,T,C,N)},L=(D,U,y,ne,Z,Q,T,C)=>{let N,k;const{props:me,shapeFlag:M,transition:g,dirs:I}=D;if(N=D.el=o(D.type,Q,me&&me.is,me),M&8?u(N,D.children):M&16&&O(D.children,N,null,ne,Z,gl(D,Q),T,C),I&&ar(D,null,ne,"created"),w(N,D,D.scopeId,T,ne),me){for(const j in me)j!=="value"&&!Bs(j)&&s(N,j,null,me[j],Q,ne);"value"in me&&s(N,"value",null,me.value,Q),(k=me.onVnodeBeforeMount)&&jn(k,ne,D)}I&&ar(D,null,ne,"beforeMount");const V=gv(Z,g);V&&g.beforeEnter(N),i(N,U,y),((k=me&&me.onVnodeMounted)||V||I)&&yn(()=>{k&&jn(k,ne,D),V&&g.enter(N),I&&ar(D,null,ne,"mounted")},Z)},w=(D,U,y,ne,Z)=>{if(y&&p(D,y),ne)for(let Q=0;Q<ne.length;Q++)p(D,ne[Q]);if(Z){let Q=Z.subTree;if(U===Q||Dm(Q.type)&&(Q.ssContent===U||Q.ssFallback===U)){const T=Z.vnode;w(D,T,T.scopeId,T.slotScopeIds,Z.parent)}}},O=(D,U,y,ne,Z,Q,T,C,N=0)=>{for(let k=N;k<D.length;k++){const me=D[k]=C?zi(D[k]):Qn(D[k]);v(null,me,U,y,ne,Z,Q,T,C)}},A=(D,U,y,ne,Z,Q,T)=>{const C=U.el=D.el;let{patchFlag:N,dynamicChildren:k,dirs:me}=U;N|=D.patchFlag&16;const M=D.props||xt,g=U.props||xt;let I;if(y&&lr(y,!1),(I=g.onVnodeBeforeUpdate)&&jn(I,y,U,D),me&&ar(U,D,y,"beforeUpdate"),y&&lr(y,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(C,""),k?b(D.dynamicChildren,k,C,y,ne,gl(U,Z),Q):T||W(D,U,C,null,y,ne,gl(U,Z),Q,!1),N>0){if(N&16)F(C,M,g,y,Z);else if(N&2&&M.class!==g.class&&s(C,"class",null,g.class,Z),N&4&&s(C,"style",M.style,g.style,Z),N&8){const V=U.dynamicProps;for(let j=0;j<V.length;j++){const X=V[j],Ee=M[X],he=g[X];(he!==Ee||X==="value")&&s(C,X,Ee,he,Z,y)}}N&1&&D.children!==U.children&&u(C,U.children)}else!T&&k==null&&F(C,M,g,y,Z);((I=g.onVnodeUpdated)||me)&&yn(()=>{I&&jn(I,y,U,D),me&&ar(U,D,y,"updated")},ne)},b=(D,U,y,ne,Z,Q,T)=>{for(let C=0;C<U.length;C++){const N=D[C],k=U[C],me=N.el&&(N.type===kt||!As(N,k)||N.shapeFlag&70)?f(N.el):y;v(N,k,me,null,ne,Z,Q,T,!0)}},F=(D,U,y,ne,Z)=>{if(U!==y){if(U!==xt)for(const Q in U)!Bs(Q)&&!(Q in y)&&s(D,Q,U[Q],null,Z,ne);for(const Q in y){if(Bs(Q))continue;const T=y[Q],C=U[Q];T!==C&&Q!=="value"&&s(D,Q,C,T,Z,ne)}"value"in y&&s(D,"value",U.value,y.value,Z)}},Y=(D,U,y,ne,Z,Q,T,C,N)=>{const k=U.el=D?D.el:a(""),me=U.anchor=D?D.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:I}=U;I&&(C=C?C.concat(I):I),D==null?(i(k,y,ne),i(me,y,ne),O(U.children||[],y,me,Z,Q,T,C,N)):M>0&&M&64&&g&&D.dynamicChildren?(b(D.dynamicChildren,g,y,Z,Q,T,C),(U.key!=null||Z&&U===Z.subTree)&&Cm(D,U,!0)):W(D,U,y,me,Z,Q,T,C,N)},q=(D,U,y,ne,Z,Q,T,C,N)=>{U.slotScopeIds=C,D==null?U.shapeFlag&512?Z.ctx.activate(U,y,ne,T,N):oe(U,y,ne,Z,Q,T,N):ae(D,U,N)},oe=(D,U,y,ne,Z,Q,T)=>{const C=D.component=Uv(D,ne,Z);if(dm(D)&&(C.ctx.renderer=le),Nv(C,!1,T),C.asyncDep){if(Z&&Z.registerDep(C,te,T),!D.el){const N=C.subTree=et(ji);d(null,N,U,y)}}else te(C,D,U,y,Z,Q,T)},ae=(D,U,y)=>{const ne=U.component=D.component;if(Tv(D,U,y))if(ne.asyncDep&&!ne.asyncResolved){K(ne,U,y);return}else ne.next=U,ne.update();else U.el=D.el,ne.vnode=U},te=(D,U,y,ne,Z,Q,T)=>{const C=()=>{if(D.isMounted){let{next:M,bu:g,u:I,parent:V,vnode:j}=D;{const Ce=Pm(D);if(Ce){M&&(M.el=j.el,K(D,M,T)),Ce.asyncDep.then(()=>{D.isUnmounted||C()});return}}let X=M,Ee;lr(D,!1),M?(M.el=j.el,K(D,M,T)):M=j,g&&ta(g),(Ee=M.props&&M.props.onVnodeBeforeUpdate)&&jn(Ee,V,M,j),lr(D,!0);const he=Kf(D),Te=D.subTree;D.subTree=he,v(Te,he,f(Te.el),H(Te),D,Z,Q),M.el=he.el,X===null&&wv(D,he.el),I&&yn(I,Z),(Ee=M.props&&M.props.onVnodeUpdated)&&yn(()=>jn(Ee,V,M,j),Z)}else{let M;const{el:g,props:I}=U,{bm:V,m:j,parent:X,root:Ee,type:he}=D,Te=ss(U);lr(D,!1),V&&ta(V),!Te&&(M=I&&I.onVnodeBeforeMount)&&jn(M,X,U),lr(D,!0);{Ee.ce&&Ee.ce._injectChildStyle(he);const Ce=D.subTree=Kf(D);v(null,Ce,y,ne,D,Z,Q),U.el=Ce.el}if(j&&yn(j,Z),!Te&&(M=I&&I.onVnodeMounted)){const Ce=U;yn(()=>jn(M,X,Ce),Z)}(U.shapeFlag&256||X&&ss(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&yn(D.a,Z),D.isMounted=!0,U=y=ne=null}};D.scope.on();const N=D.effect=new zp(C);D.scope.off();const k=D.update=N.run.bind(N),me=D.job=N.runIfDirty.bind(N);me.i=D,me.id=D.uid,N.scheduler=()=>Xu(me),lr(D,!0),k()},K=(D,U,y)=>{U.component=D;const ne=D.vnode.props;D.vnode=U,D.next=null,cv(D,U.props,ne,y),dv(D,U.children,y),Qi(),Hf(D),er()},W=(D,U,y,ne,Z,Q,T,C,N=!1)=>{const k=D&&D.children,me=D?D.shapeFlag:0,M=U.children,{patchFlag:g,shapeFlag:I}=U;if(g>0){if(g&128){Se(k,M,y,ne,Z,Q,T,C,N);return}else if(g&256){pe(k,M,y,ne,Z,Q,T,C,N);return}}I&8?(me&16&&be(k,Z,Q),M!==k&&u(y,M)):me&16?I&16?Se(k,M,y,ne,Z,Q,T,C,N):be(k,Z,Q,!0):(me&8&&u(y,""),I&16&&O(M,y,ne,Z,Q,T,C,N))},pe=(D,U,y,ne,Z,Q,T,C,N)=>{D=D||ns,U=U||ns;const k=D.length,me=U.length,M=Math.min(k,me);let g;for(g=0;g<M;g++){const I=U[g]=N?zi(U[g]):Qn(U[g]);v(D[g],I,y,null,Z,Q,T,C,N)}k>me?be(D,Z,Q,!0,!1,M):O(U,y,ne,Z,Q,T,C,N,M)},Se=(D,U,y,ne,Z,Q,T,C,N)=>{let k=0;const me=U.length;let M=D.length-1,g=me-1;for(;k<=M&&k<=g;){const I=D[k],V=U[k]=N?zi(U[k]):Qn(U[k]);if(As(I,V))v(I,V,y,null,Z,Q,T,C,N);else break;k++}for(;k<=M&&k<=g;){const I=D[M],V=U[g]=N?zi(U[g]):Qn(U[g]);if(As(I,V))v(I,V,y,null,Z,Q,T,C,N);else break;M--,g--}if(k>M){if(k<=g){const I=g+1,V=I<me?U[I].el:ne;for(;k<=g;)v(null,U[k]=N?zi(U[k]):Qn(U[k]),y,V,Z,Q,T,C,N),k++}}else if(k>g)for(;k<=M;)Be(D[k],Z,Q,!0),k++;else{const I=k,V=k,j=new Map;for(k=V;k<=g;k++){const Ue=U[k]=N?zi(U[k]):Qn(U[k]);Ue.key!=null&&j.set(Ue.key,k)}let X,Ee=0;const he=g-V+1;let Te=!1,Ce=0;const fe=new Array(he);for(k=0;k<he;k++)fe[k]=0;for(k=I;k<=M;k++){const Ue=D[k];if(Ee>=he){Be(Ue,Z,Q,!0);continue}let Ne;if(Ue.key!=null)Ne=j.get(Ue.key);else for(X=V;X<=g;X++)if(fe[X-V]===0&&As(Ue,U[X])){Ne=X;break}Ne===void 0?Be(Ue,Z,Q,!0):(fe[Ne-V]=k+1,Ne>=Ce?Ce=Ne:Te=!0,v(Ue,U[Ne],y,null,Z,Q,T,C,N),Ee++)}const Pe=Te?_v(fe):ns;for(X=Pe.length-1,k=he-1;k>=0;k--){const Ue=V+k,Ne=U[Ue],ye=Ue+1<me?U[Ue+1].el:ne;fe[k]===0?v(null,Ne,y,ye,Z,Q,T,C,N):Te&&(X<0||k!==Pe[X]?Re(Ne,y,ye,2):X--)}}},Re=(D,U,y,ne,Z=null)=>{const{el:Q,type:T,transition:C,children:N,shapeFlag:k}=D;if(k&6){Re(D.component.subTree,U,y,ne);return}if(k&128){D.suspense.move(U,y,ne);return}if(k&64){T.move(D,U,y,le);return}if(T===kt){i(Q,U,y);for(let M=0;M<N.length;M++)Re(N[M],U,y,ne);i(D.anchor,U,y);return}if(T===_l){E(D,U,y);return}if(ne!==2&&k&1&&C)if(ne===0)C.beforeEnter(Q),i(Q,U,y),yn(()=>C.enter(Q),Z);else{const{leave:M,delayLeave:g,afterLeave:I}=C,V=()=>i(Q,U,y),j=()=>{M(Q,()=>{V(),I&&I()})};g?g(Q,V,j):j()}else i(Q,U,y)},Be=(D,U,y,ne=!1,Z=!1)=>{const{type:Q,props:T,ref:C,children:N,dynamicChildren:k,shapeFlag:me,patchFlag:M,dirs:g,cacheIndex:I}=D;if(M===-2&&(Z=!1),C!=null&&xa(C,null,y,D,!0),I!=null&&(U.renderCache[I]=void 0),me&256){U.ctx.deactivate(D);return}const V=me&1&&g,j=!ss(D);let X;if(j&&(X=T&&T.onVnodeBeforeUnmount)&&jn(X,U,D),me&6)xe(D.component,y,ne);else{if(me&128){D.suspense.unmount(y,ne);return}V&&ar(D,null,U,"beforeUnmount"),me&64?D.type.remove(D,U,y,le,ne):k&&!k.hasOnce&&(Q!==kt||M>0&&M&64)?be(k,U,y,!1,!0):(Q===kt&&M&384||!Z&&me&16)&&be(N,U,y),ne&&Je(D)}(j&&(X=T&&T.onVnodeUnmounted)||V)&&yn(()=>{X&&jn(X,U,D),V&&ar(D,null,U,"unmounted")},y)},Je=D=>{const{type:U,el:y,anchor:ne,transition:Z}=D;if(U===kt){se(y,ne);return}if(U===_l){x(D);return}const Q=()=>{r(y),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:T,delayLeave:C}=Z,N=()=>T(y,Q);C?C(D.el,Q,N):N()}else Q()},se=(D,U)=>{let y;for(;D!==U;)y=h(D),r(D),D=y;r(U)},xe=(D,U,y)=>{const{bum:ne,scope:Z,job:Q,subTree:T,um:C,m:N,a:k}=D;jf(N),jf(k),ne&&ta(ne),Z.stop(),Q&&(Q.flags|=8,Be(T,D,U,y)),C&&yn(C,U),yn(()=>{D.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},be=(D,U,y,ne=!1,Z=!1,Q=0)=>{for(let T=Q;T<D.length;T++)Be(D[T],U,y,ne,Z)},H=D=>{if(D.shapeFlag&6)return H(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const U=h(D.anchor||D.el),y=U&&U[B0];return y?h(y):U};let re=!1;const ce=(D,U,y)=>{D==null?U._vnode&&Be(U._vnode,null,null,!0):v(U._vnode||null,D,U,null,null,null,y),U._vnode=D,re||(re=!0,Hf(),lm(),re=!1)},le={p:v,um:Be,m:Re,r:Je,mt:oe,mc:O,pc:W,pbc:b,n:H,o:t};return{render:ce,hydrate:void 0,createApp:ov(ce)}}function gl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Cm(t,e,n=!1){const i=t.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Cm(o,a)),a.type===mo&&(a.el=o.el)}}function _v(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Pm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pm(e)}function jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const vv=Symbol.for("v-scx"),xv=()=>Wn(vv);function Va(t,e){return Yu(t,null,e)}function Ri(t,e,n){return Yu(t,e,n)}function Yu(t,e,n=xt){const{immediate:i,deep:r,flush:s,once:o}=n,a=nn({},n),l=e&&i||!e&&s!=="post";let c;if(Zs){if(s==="sync"){const p=xv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ii,p.resume=ii,p.pause=ii,p}}const u=$t;a.call=(p,_,v)=>ai(p,u,_,v);let f=!1;s==="post"?a.scheduler=p=>{yn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Xu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=U0(t,e,a);return Zs&&(c?c.push(h):l&&h()),h}function Sv(t,e,n){const i=this.proxy,r=Bt(t)?t.includes(".")?Lm(i,t):()=>i[t]:t.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,n=e);const o=go(this),a=Yu(r,s.bind(i),n);return o(),a}function Lm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const yv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Un(e)}Modifiers`]||t[`${Ir(e)}Modifiers`];function Ev(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xt;let r=n;const s=e.startsWith("update:"),o=s&&yv(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Bt(u)?u.trim():u)),o.number&&(r=n.map(hc)));let a,l=i[a=ul(e)]||i[a=ul(Un(e))];!l&&s&&(l=i[a=ul(Ir(e))]),l&&ai(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ai(c,t,6,r)}}function Im(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ye(t)){const l=c=>{const u=Im(c,e,!0);u&&(a=!0,nn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Tt(t)&&i.set(t,null),null):(We(s)?s.forEach(l=>o[l]=null):nn(o,s),Tt(t)&&i.set(t,o),o)}function za(t,e){return!t||!La(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,Ir(e))||dt(t,e))}function Kf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=t,m=va(t);let d,S;try{if(n.shapeFlag&4){const x=r||i,P=x;d=Qn(c.call(P,x,u,f,p,h,_)),S=a}else{const x=e;d=Qn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),S=e.props?a:Mv(a)}}catch(x){zs.length=0,Ba(x,t,1),d=et(ji)}let E=d;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:P}=E;x.length&&P&7&&(s&&x.some(Lu)&&(S=bv(S,s)),E=cs(E,S,!1,!0))}return n.dirs&&(E=cs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&$u(E,n.transition),d=E,va(m),d}const Mv=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},bv=(t,e)=>{const n={};for(const i in t)(!Lu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Tv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zf(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!za(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zf(i,o,c):!0:!!o;return!1}function Zf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!za(n,s))return!0}return!1}function wv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Dm=t=>t.__isSuspense;function Av(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):F0(t)}const kt=Symbol.for("v-fgt"),mo=Symbol.for("v-txt"),ji=Symbol.for("v-cmt"),_l=Symbol.for("v-stc"),zs=[];let En=null;function it(t=!1){zs.push(En=t?null:[])}function Rv(){zs.pop(),En=zs[zs.length-1]||null}let js=1;function Jf(t,e=!1){js+=t,t<0&&En&&e&&(En.hasOnce=!0)}function Um(t){return t.dynamicChildren=js>0?En||ns:null,Rv(),js>0&&En&&En.push(t),t}function pt(t,e,n,i,r,s){return Um(ve(t,e,n,i,r,s,!0))}function Ea(t,e,n,i,r){return Um(et(t,e,n,i,r,!0))}function Ks(t){return t?t.__v_isVNode===!0:!1}function As(t,e){return t.type===e.type&&t.key===e.key}const Nm=({key:t})=>t??null,ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Bt(t)||It(t)||Ye(t)?{i:Vt,r:t,k:e,f:!!n}:t:null);function ve(t,e=null,n=null,i=0,r=null,s=t===kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nm(e),ref:e&&ia(e),scopeId:um,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Vt};return a?(ju(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Bt(n)?8:16),js>0&&!o&&En&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&En.push(l),l}const et=Cv;function Cv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Z0)&&(t=ji),Ks(t)){const a=cs(t,e,!0);return n&&ju(a,n),js>0&&!s&&En&&(a.shapeFlag&6?En[En.indexOf(t)]=a:En.push(a)),a.patchFlag=-2,a}if(Hv(t)&&(t=t.__vccOpts),e){e=Pv(e);let{class:a,style:l}=e;a&&!Bt(a)&&(e.class=Ln(a)),Tt(l)&&(Vu(l)&&!We(l)&&(l=nn({},l)),e.style=Oa(l))}const o=Bt(t)?1:Dm(t)?128:k0(t)?64:Tt(t)?4:Ye(t)?2:0;return ve(t,e,n,i,r,o,s,!0)}function Pv(t){return t?Vu(t)||Em(t)?nn({},t):t:null}function cs(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Lv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Nm(c),ref:e&&e.ref?n&&s?We(s)?s.concat(ia(e)):[s,ia(e)]:ia(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==kt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&$u(u,l.clone(u)),u}function Jt(t=" ",e=0){return et(mo,null,t,e)}function ti(t="",e=!1){return e?(it(),Ea(ji,null,t)):et(ji,null,t)}function Qn(t){return t==null||typeof t=="boolean"?et(ji):We(t)?et(kt,null,t.slice()):Ks(t)?zi(t):et(mo,null,String(t))}function zi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function ju(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ju(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Em(e)?e._ctx=Vt:r===3&&Vt&&(Vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Vt},n=32):(e=String(e),i&64?(n=16,e=[Jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Lv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ln([e.class,i.class]));else if(r==="style")e.style=Oa([e.style,i.style]);else if(La(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function jn(t,e,n,i=null){ai(t,e,7,[n,i])}const Iv=xm();let Dv=0;function Uv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Iv,s={uid:Dv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bm(i,r),emitsOptions:Im(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ev.bind(null,s),t.ce&&t.ce(s),s}let $t=null;const us=()=>$t||Vt;let Ma,yc;{const t=Na(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ma=e("__VUE_INSTANCE_SETTERS__",n=>$t=n),yc=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const go=t=>{const e=$t;return Ma(t),t.scope.on(),()=>{t.scope.off(),Ma(e)}},Qf=()=>{$t&&$t.scope.off(),Ma(null)};function Om(t){return t.vnode.shapeFlag&4}let Zs=!1;function Nv(t,e=!1,n=!1){e&&yc(e);const{props:i,children:r}=t.vnode,s=Om(t);lv(t,i,s,e),hv(t,r,n);const o=s?Ov(t,e):void 0;return e&&yc(!1),o}function Ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Q0);const{setup:i}=n;if(i){Qi();const r=t.setupContext=i.length>1?Bv(t):null,s=go(t),o=ho(i,t,0,[t.props,r]),a=Dp(o);if(er(),s(),(a||t.sp)&&!ss(t)&&fm(t),a){if(o.then(Qf,Qf),e)return o.then(l=>{eh(t,l)}).catch(l=>{Ba(l,t,0)});t.asyncDep=o}else eh(t,o)}else Fm(t)}function eh(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Tt(e)&&(t.setupState=sm(e)),Fm(t)}function Fm(t,e,n){const i=t.type;t.render||(t.render=i.render||ii);{const r=go(t);Qi();try{ev(t)}finally{er(),r()}}}const Fv={get(t,e){return Qt(t,"get",""),t[e]}};function Bv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fv),slots:t.slots,emit:t.emit,expose:e}}function Ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sm(zu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function kv(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function Hv(t){return Ye(t)&&"__vccOpts"in t}const Ht=(t,e)=>I0(t,e,Zs);function Wa(t,e,n){const i=arguments.length;return i===2?Tt(e)&&!We(e)?Ks(e)?et(t,null,[e]):et(t,e):et(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ks(n)&&(n=[n]),et(t,e,n))}const Vv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ec;const th=typeof window<"u"&&window.trustedTypes;if(th)try{Ec=th.createPolicy("vue",{createHTML:t=>t})}catch{}const Bm=Ec?t=>Ec.createHTML(t):t=>t,zv="http://www.w3.org/2000/svg",Gv="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,nh=xi&&xi.createElement("template"),Wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?xi.createElementNS(zv,t):e==="mathml"?xi.createElementNS(Gv,t):n?xi.createElement(t,{is:n}):xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>xi.createTextNode(t),createComment:t=>xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{nh.innerHTML=Bm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=nh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Xv=Symbol("_vtc");function $v(t,e,n){const i=t[Xv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ih=Symbol("_vod"),qv=Symbol("_vsh"),Yv=Symbol(""),jv=/(^|;)\s*display\s*:/;function Kv(t,e,n){const i=t.style,r=Bt(n);let s=!1;if(n&&!r){if(e)if(Bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ra(i,a,"")}else for(const o in e)n[o]==null&&ra(i,o,"");for(const o in n)o==="display"&&(s=!0),ra(i,o,n[o])}else if(r){if(e!==n){const o=i[Yv];o&&(n+=";"+o),i.cssText=n,s=jv.test(n)}}else e&&t.removeAttribute("style");ih in t&&(t[ih]=s?i.display:"",t[qv]&&(i.display="none"))}const rh=/\s*!important$/;function ra(t,e,n){if(We(n))n.forEach(i=>ra(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Zv(t,e);rh.test(n)?t.setProperty(Ir(i),n.replace(rh,""),"important"):t[i]=n}}const sh=["Webkit","Moz","ms"],vl={};function Zv(t,e){const n=vl[e];if(n)return n;let i=Un(e);if(i!=="filter"&&i in t)return vl[e]=i;i=Ua(i);for(let r=0;r<sh.length;r++){const s=sh[r]+i;if(s in t)return vl[e]=s}return e}const oh="http://www.w3.org/1999/xlink";function ah(t,e,n,i,r,s=s0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(oh,e.slice(6,e.length)):t.setAttributeNS(oh,e,n):n==null||s&&!Fp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Pi(n)?String(n):n)}function lh(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Fp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Jr(t,e,n,i){t.addEventListener(e,n,i)}function Jv(t,e,n,i){t.removeEventListener(e,n,i)}const ch=Symbol("_vei");function Qv(t,e,n,i,r=null){const s=t[ch]||(t[ch]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ex(e);if(i){const c=s[e]=ix(i,r);Jr(t,a,c,l)}else o&&(Jv(t,a,o,l),s[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function ex(t){let e;if(uh.test(t)){e={};let i;for(;i=t.match(uh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let xl=0;const tx=Promise.resolve(),nx=()=>xl||(tx.then(()=>xl=0),xl=Date.now());function ix(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ai(rx(i,n.value),e,5,[i])};return n.value=t,n.attached=nx(),n}function rx(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const fh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?$v(t,i,o):e==="style"?Kv(t,n,i):La(e)?Lu(e)||Qv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ox(t,e,i,o))?(lh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ah(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?lh(t,Un(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ah(t,e,i,o))};function ox(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&fh(e)&&Ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return fh(e)&&Bt(n)?!1:e in t}const hh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>ta(e,n):e};function ax(t){t.target.composing=!0}function dh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Sl=Symbol("_assign"),ph={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Sl]=hh(r);const s=i||r.props&&r.props.type==="number";Jr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=hc(a)),t[Sl](a)}),n&&Jr(t,"change",()=>{t.value=t.value.trim()}),e||(Jr(t,"compositionstart",ax),Jr(t,"compositionend",dh),Jr(t,"change",dh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Sl]=hh(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?hc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},lx=nn({patchProp:sx},Wv);let mh;function cx(){return mh||(mh=pv(lx))}const ux=(...t)=>{const e=cx().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=hx(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,fx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function fx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hx(t){return Bt(t)?document.querySelector(t):t}const dx=jt({name:"a-hoverable",props:{path:{type:String,default:""},href:{type:String,default:""},target:{type:String,default:"_self"},shape:{type:String,default:"center"},effect:{type:String,default:""}}}),_n=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},px=["href","target"];function mx(t,e,n,i,r,s){const o=Ai("router-link");return it(),pt(kt,null,[t.href?(it(),pt("a",{key:0,class:Ln(["a-hoverable",t.shape,t.effect]),href:t.href,target:t.target},[Sa(t.$slots,"default",{},()=>[e[0]||(e[0]=Jt("ERROR"))])],10,px)):ti("",!0),t.path?(it(),Ea(o,{key:1,class:Ln(["a-hoverable",t.shape,t.effect]),to:{name:t.path}},{default:Dt(()=>[Sa(t.$slots,"default",{},()=>[e[1]||(e[1]=Jt("ERROR"))],!0)]),_:3},8,["class","to"])):ti("",!0)],64)}const km=_n(dx,[["render",mx],["__scopeId","data-v-d4ab219a"]]),gx=jt({name:"switch-button",props:{isActive:{type:Boolean,default:!1},change:{type:Function,default:()=>{}}}});function _x(t,e,n,i,r,s){return it(),pt("button",{class:"switch",onClick:e[0]||(e[0]=(...o)=>t.change&&t.change(...o))},[ve("div",{class:Ln(["option",{active:!t.isActive}])},[Sa(t.$slots,"optionL",{},()=>[e[1]||(e[1]=Jt("IMG ERROR"))])],2),ve("div",{class:Ln(["option",{active:t.isActive}])},[Sa(t.$slots,"optionR",{},()=>[e[2]||(e[2]=Jt("IMG ERROR"))])],2)])}const Hm=_n(gx,[["render",_x],["__scopeId","data-v-e056e1dc"]]);/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vm;const Xa=t=>Vm=t,zm=Symbol();function Mc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gs||(Gs={}));function vx(){const t=Uu(!0),e=t.run(()=>Ct({}));let n=[],i=[];const r=zu({install(s){Xa(r),r._a=s,s.provide(zm,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Gm=()=>{};function gh(t,e,n,i=Gm){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Vp()&&o0(r),r}function Or(t,...e){t.slice().forEach(n=>{n(...e)})}const xx=t=>t(),_h=Symbol(),yl=Symbol();function bc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Mc(r)&&Mc(i)&&t.hasOwnProperty(n)&&!It(i)&&!$i(i)?t[n]=bc(r,i):t[n]=i}return t}const Sx=Symbol();function yx(t){return!Mc(t)||!t.hasOwnProperty(Sx)}const{assign:Hi}=Object;function Ex(t){return!!(It(t)&&t.effect)}function Mx(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=R0(n.state.value[t]);return Hi(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=zu(Ht(()=>{Xa(n);const p=n._s.get(t);return o[h].call(p,p)})),f),{}))}return l=Wm(t,c,e,n,i,!0),l}function Wm(t,e,n={},i,r,s){let o;const a=Hi({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],p;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),Ct({});let v;function m(O){let A;c=u=!1,typeof O=="function"?(O(i.state.value[t]),A={type:Gs.patchFunction,storeId:t,events:p}):(bc(i.state.value[t],O),A={type:Gs.patchObject,payload:O,storeId:t,events:p});const b=v=Symbol();Wu().then(()=>{v===b&&(c=!0)}),u=!0,Or(f,A,i.state.value[t])}const d=s?function(){const{state:A}=n,b=A?A():{};this.$patch(F=>{Hi(F,b)})}:Gm;function S(){o.stop(),f=[],h=[],i._s.delete(t)}const E=(O,A="")=>{if(_h in O)return O[yl]=A,O;const b=function(){Xa(i);const F=Array.from(arguments),Y=[],q=[];function oe(K){Y.push(K)}function ae(K){q.push(K)}Or(h,{args:F,name:b[yl],store:P,after:oe,onError:ae});let te;try{te=O.apply(this&&this.$id===t?this:P,F)}catch(K){throw Or(q,K),K}return te instanceof Promise?te.then(K=>(Or(Y,K),K)).catch(K=>(Or(q,K),Promise.reject(K))):(Or(Y,te),te)};return b[_h]=!0,b[yl]=A,b},x={_p:i,$id:t,$onAction:gh.bind(null,h),$patch:m,$reset:d,$subscribe(O,A={}){const b=gh(f,O,A.detached,()=>F()),F=o.run(()=>Ri(()=>i.state.value[t],Y=>{(A.flush==="sync"?u:c)&&O({storeId:t,type:Gs.direct,events:p},Y)},Hi({},l,A)));return b},$dispose:S},P=fo(x);i._s.set(t,P);const w=(i._a&&i._a.runWithContext||xx)(()=>i._e.run(()=>(o=Uu()).run(()=>e({action:E}))));for(const O in w){const A=w[O];if(It(A)&&!Ex(A)||$i(A))s||(_&&yx(A)&&(It(A)?A.value=_[O]:bc(A,_[O])),i.state.value[t][O]=A);else if(typeof A=="function"){const b=E(A,O);w[O]=b,a.actions[O]=A}}return Hi(P,w),Hi(at(P),w),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:O=>{m(A=>{Hi(A,O)})}}),i._p.forEach(O=>{Hi(P,o.run(()=>O({store:P,app:i._a,pinia:i,options:a})))}),_&&s&&n.hydrate&&n.hydrate(P.$state,_),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function Ku(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(o,a){const l=av();return o=o||(l?Wn(zm,null):null),o&&Xa(o),o=Vm,o._s.has(t)||(r?Wm(t,e,i,o):Mx(t,i,o)),o._s.get(t)}return s.$id=t,s}const bx=["light","dark"],_o=Ku("theme",()=>{const t=localStorage.getItem("theme"),e=Ct(bx.includes(t)?t:"light");Va(()=>{localStorage.setItem("theme",e.value)});const n=Ht(()=>e.value==="dark");function i(){switch(e.value){case"light":e.value="dark";break;case"dark":e.value="light";break}}return{theme:e,isDark:n,changeTheme:i}});/*!
  * shared v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Tx(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const ba=typeof window<"u",tr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),wx=(t,e,n)=>Ax({l:t,k:e,s:n}),Ax=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ft=t=>typeof t=="number"&&isFinite(t),Rx=t=>Zu(t)==="[object Date]",fs=t=>Zu(t)==="[object RegExp]",$a=t=>Qe(t)&&Object.keys(t).length===0,zt=Object.assign,Cx=Object.create,St=(t=null)=>Cx(t);let vh;const Sr=()=>vh||(vh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:St());function xh(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Sh(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Px(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Sh(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Sh(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const Lx=Object.prototype.hasOwnProperty;function Vn(t,e){return Lx.call(t,e)}const Pt=Array.isArray,Mt=t=>typeof t=="function",Le=t=>typeof t=="string",ct=t=>typeof t=="boolean",ut=t=>t!==null&&typeof t=="object",Ix=t=>ut(t)&&Mt(t.then)&&Mt(t.catch),Xm=Object.prototype.toString,Zu=t=>Xm.call(t),Qe=t=>Zu(t)==="[object Object]",Dx=t=>t==null?"":Pt(t)||Qe(t)&&t.toString===Xm?JSON.stringify(t,null,2):String(t);function Ju(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Po=t=>!ut(t)||Pt(t);function sa(t,e){if(Po(t)||Po(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(ut(i[s])&&!ut(r[s])&&(r[s]=Array.isArray(i[s])?[]:St()),Po(r[s])||Po(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Ux(t,e,n){return{line:t,column:e,offset:n}}function Tc(t,e,n){return{start:t,end:e}}const _t={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Nx=17;function qa(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function Ox(t){throw t}const fi=" ",Fx="\r",an=`
`,Bx="\u2028",kx="\u2029";function Hx(t){const e=t;let n=0,i=1,r=1,s=0;const o=w=>e[w]===Fx&&e[w+1]===an,a=w=>e[w]===an,l=w=>e[w]===kx,c=w=>e[w]===Bx,u=w=>o(w)||a(w)||l(w)||c(w),f=()=>n,h=()=>i,p=()=>r,_=()=>s,v=w=>o(w)||l(w)||c(w)?an:e[w],m=()=>v(n),d=()=>v(n+s);function S(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function E(){return o(n+s)&&s++,s++,e[n+s]}function x(){n=0,i=1,r=1,s=0}function P(w=0){s=w}function L(){const w=n+s;for(;w!==n;)S();s=0}return{index:f,line:h,column:p,peekOffset:_,charAt:v,currentChar:m,currentPeek:d,next:S,peek:E,reset:x,resetPeek:P,skipToPeek:L}}const Ii=void 0,Vx=".",yh="'",zx="tokenizer";function Gx(t,e={}){const n=e.location!==!1,i=Hx(t),r=()=>i.index(),s=()=>Ux(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(T,C,N,...k){const me=c();if(C.column+=N,C.offset+=N,u){const M=n?Tc(me.startLoc,C):null,g=qa(T,M,{domain:zx,args:k});u(g)}}function h(T,C,N){T.endLoc=s(),T.currentType=C;const k={type:C};return n&&(k.loc=Tc(T.startLoc,T.endLoc)),N!=null&&(k.value=N),k}const p=T=>h(T,13);function _(T,C){return T.currentChar()===C?(T.next(),C):(f(_t.EXPECTED_TOKEN,s(),0,C),"")}function v(T){let C="";for(;T.currentPeek()===fi||T.currentPeek()===an;)C+=T.currentPeek(),T.peek();return C}function m(T){const C=v(T);return T.skipToPeek(),C}function d(T){if(T===Ii)return!1;const C=T.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function S(T){if(T===Ii)return!1;const C=T.charCodeAt(0);return C>=48&&C<=57}function E(T,C){const{currentType:N}=C;if(N!==2)return!1;v(T);const k=d(T.currentPeek());return T.resetPeek(),k}function x(T,C){const{currentType:N}=C;if(N!==2)return!1;v(T);const k=T.currentPeek()==="-"?T.peek():T.currentPeek(),me=S(k);return T.resetPeek(),me}function P(T,C){const{currentType:N}=C;if(N!==2)return!1;v(T);const k=T.currentPeek()===yh;return T.resetPeek(),k}function L(T,C){const{currentType:N}=C;if(N!==7)return!1;v(T);const k=T.currentPeek()===".";return T.resetPeek(),k}function w(T,C){const{currentType:N}=C;if(N!==8)return!1;v(T);const k=d(T.currentPeek());return T.resetPeek(),k}function O(T,C){const{currentType:N}=C;if(!(N===7||N===11))return!1;v(T);const k=T.currentPeek()===":";return T.resetPeek(),k}function A(T,C){const{currentType:N}=C;if(N!==9)return!1;const k=()=>{const M=T.currentPeek();return M==="{"?d(T.peek()):M==="@"||M==="|"||M===":"||M==="."||M===fi||!M?!1:M===an?(T.peek(),k()):F(T,!1)},me=k();return T.resetPeek(),me}function b(T){v(T);const C=T.currentPeek()==="|";return T.resetPeek(),C}function F(T,C=!0){const N=(me=!1,M="")=>{const g=T.currentPeek();return g==="{"||g==="@"||!g?me:g==="|"?!(M===fi||M===an):g===fi?(T.peek(),N(!0,fi)):g===an?(T.peek(),N(!0,an)):!0},k=N();return C&&T.resetPeek(),k}function Y(T,C){const N=T.currentChar();return N===Ii?Ii:C(N)?(T.next(),N):null}function q(T){const C=T.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function oe(T){return Y(T,q)}function ae(T){const C=T.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function te(T){return Y(T,ae)}function K(T){const C=T.charCodeAt(0);return C>=48&&C<=57}function W(T){return Y(T,K)}function pe(T){const C=T.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function Se(T){return Y(T,pe)}function Re(T){let C="",N="";for(;C=W(T);)N+=C;return N}function Be(T){let C="";for(;;){const N=T.currentChar();if(N==="{"||N==="}"||N==="@"||N==="|"||!N)break;if(N===fi||N===an)if(F(T))C+=N,T.next();else{if(b(T))break;C+=N,T.next()}else C+=N,T.next()}return C}function Je(T){m(T);let C="",N="";for(;C=te(T);)N+=C;return T.currentChar()===Ii&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),N}function se(T){m(T);let C="";return T.currentChar()==="-"?(T.next(),C+=`-${Re(T)}`):C+=Re(T),T.currentChar()===Ii&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),C}function xe(T){return T!==yh&&T!==an}function be(T){m(T),_(T,"'");let C="",N="";for(;C=Y(T,xe);)C==="\\"?N+=H(T):N+=C;const k=T.currentChar();return k===an||k===Ii?(f(_t.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),k===an&&(T.next(),_(T,"'")),N):(_(T,"'"),N)}function H(T){const C=T.currentChar();switch(C){case"\\":case"'":return T.next(),`\\${C}`;case"u":return re(T,C,4);case"U":return re(T,C,6);default:return f(_t.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function re(T,C,N){_(T,C);let k="";for(let me=0;me<N;me++){const M=Se(T);if(!M){f(_t.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${k}${T.currentChar()}`);break}k+=M}return`\\${C}${k}`}function ce(T){return T!=="{"&&T!=="}"&&T!==fi&&T!==an}function le(T){m(T);let C="",N="";for(;C=Y(T,ce);)N+=C;return N}function ke(T){let C="",N="";for(;C=oe(T);)N+=C;return N}function D(T){const C=N=>{const k=T.currentChar();return k==="{"||k==="@"||k==="|"||k==="("||k===")"||!k||k===fi?N:(N+=k,T.next(),C(N))};return C("")}function U(T){m(T);const C=_(T,"|");return m(T),C}function y(T,C){let N=null;switch(T.currentChar()){case"{":return C.braceNest>=1&&f(_t.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),T.next(),N=h(C,2,"{"),m(T),C.braceNest++,N;case"}":return C.braceNest>0&&C.currentType===2&&f(_t.EMPTY_PLACEHOLDER,s(),0),T.next(),N=h(C,3,"}"),C.braceNest--,C.braceNest>0&&m(T),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),N;case"@":return C.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),N=ne(T,C)||p(C),C.braceNest=0,N;default:{let me=!0,M=!0,g=!0;if(b(T))return C.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),N=h(C,1,U(T)),C.braceNest=0,C.inLinked=!1,N;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,Z(T,C);if(me=E(T,C))return N=h(C,4,Je(T)),m(T),N;if(M=x(T,C))return N=h(C,5,se(T)),m(T),N;if(g=P(T,C))return N=h(C,6,be(T)),m(T),N;if(!me&&!M&&!g)return N=h(C,12,le(T)),f(_t.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,N.value),m(T),N;break}}return N}function ne(T,C){const{currentType:N}=C;let k=null;const me=T.currentChar();switch((N===7||N===8||N===11||N===9)&&(me===an||me===fi)&&f(_t.INVALID_LINKED_FORMAT,s(),0),me){case"@":return T.next(),k=h(C,7,"@"),C.inLinked=!0,k;case".":return m(T),T.next(),h(C,8,".");case":":return m(T),T.next(),h(C,9,":");default:return b(T)?(k=h(C,1,U(T)),C.braceNest=0,C.inLinked=!1,k):L(T,C)||O(T,C)?(m(T),ne(T,C)):w(T,C)?(m(T),h(C,11,ke(T))):A(T,C)?(m(T),me==="{"?y(T,C)||k:h(C,10,D(T))):(N===7&&f(_t.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,Z(T,C))}}function Z(T,C){let N={type:13};if(C.braceNest>0)return y(T,C)||p(C);if(C.inLinked)return ne(T,C)||p(C);switch(T.currentChar()){case"{":return y(T,C)||p(C);case"}":return f(_t.UNBALANCED_CLOSING_BRACE,s(),0),T.next(),h(C,3,"}");case"@":return ne(T,C)||p(C);default:{if(b(T))return N=h(C,1,U(T)),C.braceNest=0,C.inLinked=!1,N;if(F(T))return h(C,0,Be(T));break}}return N}function Q(){const{currentType:T,offset:C,startLoc:N,endLoc:k}=l;return l.lastType=T,l.lastOffset=C,l.lastStartLoc=N,l.lastEndLoc=k,l.offset=r(),l.startLoc=s(),i.currentChar()===Ii?h(l,13):Z(i,l)}return{nextToken:Q,currentOffset:r,currentPosition:s,context:c}}const Wx="parser",Xx=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function $x(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function qx(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,S,E,x,...P){const L=d.currentPosition();if(L.offset+=x,L.column+=x,n){const w=e?Tc(E,L):null,O=qa(S,w,{domain:Wx,args:P});n(O)}}function r(d,S,E){const x={type:d};return e&&(x.start=S,x.end=S,x.loc={start:E,end:E}),x}function s(d,S,E,x){e&&(d.end=S,d.loc&&(d.loc.end=E))}function o(d,S){const E=d.context(),x=r(3,E.offset,E.startLoc);return x.value=S,s(x,d.currentOffset(),d.currentPosition()),x}function a(d,S){const E=d.context(),{lastOffset:x,lastStartLoc:P}=E,L=r(5,x,P);return L.index=parseInt(S,10),d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function l(d,S){const E=d.context(),{lastOffset:x,lastStartLoc:P}=E,L=r(4,x,P);return L.key=S,d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function c(d,S){const E=d.context(),{lastOffset:x,lastStartLoc:P}=E,L=r(9,x,P);return L.value=S.replace(Xx,$x),d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function u(d){const S=d.nextToken(),E=d.context(),{lastOffset:x,lastStartLoc:P}=E,L=r(8,x,P);return S.type!==11?(i(d,_t.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),L.value="",s(L,x,P),{nextConsumeToken:S,node:L}):(S.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Kn(S)),L.value=S.value||"",s(L,d.currentOffset(),d.currentPosition()),{node:L})}function f(d,S){const E=d.context(),x=r(7,E.offset,E.startLoc);return x.value=S,s(x,d.currentOffset(),d.currentPosition()),x}function h(d){const S=d.context(),E=r(6,S.offset,S.startLoc);let x=d.nextToken();if(x.type===8){const P=u(d);E.modifier=P.node,x=P.nextConsumeToken||d.nextToken()}switch(x.type!==9&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),x=d.nextToken(),x.type===2&&(x=d.nextToken()),x.type){case 10:x.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=f(d,x.value||"");break;case 4:x.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=l(d,x.value||"");break;case 5:x.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=a(d,x.value||"");break;case 6:x.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=c(d,x.value||"");break;default:{i(d,_t.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const P=d.context(),L=r(7,P.offset,P.startLoc);return L.value="",s(L,P.offset,P.startLoc),E.key=L,s(E,P.offset,P.startLoc),{nextConsumeToken:x,node:E}}}return s(E,d.currentOffset(),d.currentPosition()),{node:E}}function p(d){const S=d.context(),E=S.currentType===1?d.currentOffset():S.offset,x=S.currentType===1?S.endLoc:S.startLoc,P=r(2,E,x);P.items=[];let L=null;do{const A=L||d.nextToken();switch(L=null,A.type){case 0:A.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(A)),P.items.push(o(d,A.value||""));break;case 5:A.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(A)),P.items.push(a(d,A.value||""));break;case 4:A.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(A)),P.items.push(l(d,A.value||""));break;case 6:A.value==null&&i(d,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(A)),P.items.push(c(d,A.value||""));break;case 7:{const b=h(d);P.items.push(b.node),L=b.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const w=S.currentType===1?S.lastOffset:d.currentOffset(),O=S.currentType===1?S.lastEndLoc:d.currentPosition();return s(P,w,O),P}function _(d,S,E,x){const P=d.context();let L=x.items.length===0;const w=r(1,S,E);w.cases=[],w.cases.push(x);do{const O=p(d);L||(L=O.items.length===0),w.cases.push(O)}while(P.currentType!==13);return L&&i(d,_t.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),s(w,d.currentOffset(),d.currentPosition()),w}function v(d){const S=d.context(),{offset:E,startLoc:x}=S,P=p(d);return S.currentType===13?P:_(d,E,x,P)}function m(d){const S=Gx(d,zt({},t)),E=S.context(),x=r(0,E.offset,E.startLoc);return e&&x.loc&&(x.loc.source=d),x.body=v(S),t.onCacheKey&&(x.cacheKey=t.onCacheKey(d)),E.currentType!==13&&i(S,_t.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,d[E.offset]||""),s(x,S.currentOffset(),S.currentPosition()),x}return{parse:m}}function Kn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Yx(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Eh(t,e){for(let n=0;n<t.length;n++)Qu(t[n],e)}function Qu(t,e){switch(t.type){case 1:Eh(t.cases,e),e.helper("plural");break;case 2:Eh(t.items,e);break;case 6:{Qu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function jx(t,e={}){const n=Yx(t);n.helper("normalize"),t.body&&Qu(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Kx(t){const e=t.body;return e.type===2?Mh(e):e.cases.forEach(n=>Mh(n)),t}function Mh(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Ju(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Qr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Qr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Qr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Qr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Qr(e.key),e.k=e.key,delete e.key,e.modifier&&(Qr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Zx(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(v,m){o.code+=v}function c(v,m=!0){const d=m?i:"";l(r?d+"  ".repeat(v):d)}function u(v=!0){const m=++o.indentLevel;v&&c(m)}function f(v=!0){const m=--o.indentLevel;v&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:v=>`_${v}`,needIndent:()=>o.needIndent}}function Jx(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),hs(t,e.key),e.modifier?(t.push(", "),hs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function Qx(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(hs(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function eS(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(hs(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function tS(t,e){e.body?hs(t,e.body):t.push("null")}function hs(t,e){const{helper:n}=t;switch(e.type){case 0:tS(t,e);break;case 1:eS(t,e);break;case 2:Qx(t,e);break;case 6:Jx(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const nS=(t,e={})=>{const n=Le(e.mode)?e.mode:"normal",i=Le(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=Zx(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${Ju(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),hs(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function iS(t,e={}){const n=zt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=qx(n).parse(t);return i?(s&&Kx(a),r&&Qr(a),{ast:a,code:""}):(jx(a,n),nS(a,n))}/*!
  * core-base v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function rS(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Sr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Sr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ri(t){return ut(t)&&ef(t)===0&&(Vn(t,"b")||Vn(t,"body"))}const $m=["b","body"];function sS(t){return nr(t,$m)}const qm=["c","cases"];function oS(t){return nr(t,qm,[])}const Ym=["s","static"];function aS(t){return nr(t,Ym)}const jm=["i","items"];function lS(t){return nr(t,jm,[])}const Km=["t","type"];function ef(t){return nr(t,Km)}const Zm=["v","value"];function Lo(t,e){const n=nr(t,Zm);if(n!=null)return n;throw Js(e)}const Jm=["m","modifier"];function cS(t){return nr(t,Jm)}const Qm=["k","key"];function uS(t){const e=nr(t,Qm);if(e)return e;throw Js(6)}function nr(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Vn(t,r)&&t[r]!=null)return t[r]}return n}const eg=[...$m,...qm,...Ym,...jm,...Qm,...Jm,...Zm,...Km];function Js(t){return new Error(`unhandled node type: ${t}`)}function El(t){return n=>fS(n,t)}function fS(t,e){const n=sS(e);if(n==null)throw Js(0);if(ef(n)===1){const s=oS(n);return t.plural(s.reduce((o,a)=>[...o,bh(t,a)],[]))}else return bh(t,n)}function bh(t,e){const n=aS(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=lS(e).reduce((r,s)=>[...r,wc(t,s)],[]);return t.normalize(i)}}function wc(t,e){const n=ef(e);switch(n){case 3:return Lo(e,n);case 9:return Lo(e,n);case 4:{const i=e;if(Vn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Vn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Js(n)}case 5:{const i=e;if(Vn(i,"i")&&Ft(i.i))return t.interpolate(t.list(i.i));if(Vn(i,"index")&&Ft(i.index))return t.interpolate(t.list(i.index));throw Js(n)}case 6:{const i=e,r=cS(i),s=uS(i);return t.linked(wc(t,s),r?wc(t,r):void 0,t.type)}case 7:return Lo(e,n);case 8:return Lo(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const hS=t=>t;let Io=St();function dS(t,e={}){let n=!1;const i=e.onError||Ox;return e.onError=r=>{n=!0,i(r)},{...iS(t,e),detectError:n}}function pS(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Le(t)){ct(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||hS)(t),r=Io[i];if(r)return r;const{ast:s,detectError:o}=dS(t,{...e,location:!1,jit:!0}),a=El(s);return o?a:Io[i]=a}else{const n=t.cacheKey;if(n){const i=Io[n];return i||(Io[n]=El(t))}else return El(t)}}let Qs=null;function mS(t){Qs=t}function gS(t,e,n){Qs&&Qs.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const _S=vS("function:translate");function vS(t){return e=>Qs&&Qs.emit(t,e)}const Mi={INVALID_ARGUMENT:Nx,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},xS=24;function bi(t){return qa(t,null,void 0)}function tf(t,e){return e.locale!=null?Th(e.locale):Th(t.locale)}let Ml;function Th(t){if(Le(t))return t;if(Mt(t)){if(t.resolvedOnce&&Ml!=null)return Ml;if(t.constructor.name==="Function"){const e=t();if(Ix(e))throw bi(Mi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ml=e}else throw bi(Mi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw bi(Mi.NOT_SUPPORT_LOCALE_TYPE)}function SS(t,e,n){return[...new Set([n,...Pt(e)?e:ut(e)?Object.keys(e):Le(e)?[e]:[n]])]}function tg(t,e,n){const i=Le(n)?n:eo,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Pt(o);)o=wh(s,o,e);const a=Pt(e)||!Qe(e)?e:e.default?e.default:null;o=Le(a)?[a]:a,Pt(o)&&wh(s,o,!1),r.__localeChainCache.set(i,s)}return s}function wh(t,e,n){let i=!0;for(let r=0;r<e.length&&ct(i);r++){const s=e[r];Le(s)&&(i=yS(t,e[r],n))}return i}function yS(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=ES(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function ES(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Pt(n)||Qe(n))&&n[r]&&(i=n[r])}return i}const ir=[];ir[0]={w:[0],i:[3,0],"[":[4],o:[7]};ir[1]={w:[1],".":[2],"[":[4],o:[7]};ir[2]={w:[2],i:[3,0],0:[3,0]};ir[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ir[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ir[5]={"'":[4,0],o:8,l:[5,0]};ir[6]={'"':[4,0],o:8,l:[6,0]};const MS=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function bS(t){return MS.test(t)}function TS(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function wS(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function AS(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:bS(e)?TS(e):"*"+e}function RS(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,o===void 0||(o=AS(o),o===!1))return!1;h[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=wS(s),f=ir[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Ah=new Map;function CS(t,e){return ut(t)?t[e]:null}function PS(t,e){if(!ut(t))return null;let n=Ah.get(e);if(n||(n=RS(e),n&&Ah.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(eg.includes(o)&&ri(r))return null;const a=r[o];if(a===void 0||Mt(r))return null;r=a,s++}return r}const LS="11.1.11",Ya=-1,eo="en-US",Rh="",Ch=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function IS(){return{upper:(t,e)=>e==="text"&&Le(t)?t.toUpperCase():e==="vnode"&&ut(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Le(t)?t.toLowerCase():e==="vnode"&&ut(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Le(t)?Ch(t):e==="vnode"&&ut(t)&&"__v_isVNode"in t?Ch(t.children):t}}let ng;function DS(t){ng=t}let ig;function US(t){ig=t}let rg;function NS(t){rg=t}let sg=null;const OS=t=>{sg=t},FS=()=>sg;let og=null;const Ph=t=>{og=t},BS=()=>og;let Lh=0;function kS(t={}){const e=Mt(t.onWarn)?t.onWarn:Tx,n=Le(t.version)?t.version:LS,i=Le(t.locale)||Mt(t.locale)?t.locale:eo,r=Mt(i)?eo:i,s=Pt(t.fallbackLocale)||Qe(t.fallbackLocale)||Le(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Qe(t.messages)?t.messages:bl(r),a=Qe(t.datetimeFormats)?t.datetimeFormats:bl(r),l=Qe(t.numberFormats)?t.numberFormats:bl(r),c=zt(St(),t.modifiers,IS()),u=t.pluralRules||St(),f=Mt(t.missing)?t.missing:null,h=ct(t.missingWarn)||fs(t.missingWarn)?t.missingWarn:!0,p=ct(t.fallbackWarn)||fs(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,v=!!t.unresolving,m=Mt(t.postTranslation)?t.postTranslation:null,d=Qe(t.processor)?t.processor:null,S=ct(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,x=Mt(t.messageCompiler)?t.messageCompiler:ng,P=Mt(t.messageResolver)?t.messageResolver:ig||CS,L=Mt(t.localeFallbacker)?t.localeFallbacker:rg||SS,w=ut(t.fallbackContext)?t.fallbackContext:void 0,O=t,A=ut(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,b=ut(O.__numberFormatters)?O.__numberFormatters:new Map,F=ut(O.__meta)?O.__meta:{};Lh++;const Y={version:n,cid:Lh,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:v,postTranslation:m,processor:d,warnHtmlMessage:S,escapeParameter:E,messageCompiler:x,messageResolver:P,localeFallbacker:L,fallbackContext:w,onWarn:e,__meta:F};return Y.datetimeFormats=a,Y.numberFormats=l,Y.__datetimeFormatters=A,Y.__numberFormatters=b,__INTLIFY_PROD_DEVTOOLS__&&gS(Y,n,F),Y}const bl=t=>({[t]:St()});function nf(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Le(a)?a:e}else return e}function Rs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function HS(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function VS(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(HS(t,e[i]))return!0;return!1}function Ih(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Ac(...e),h=ct(u.missingWarn)?u.missingWarn:t.missingWarn;ct(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=tf(t,u),v=o(t,r,_);if(!Le(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},d,S=null;const E="datetime format";for(let L=0;L<v.length&&(d=v[L],m=n[d]||{},S=m[l],!Qe(S));L++)nf(t,l,d,h,E);if(!Qe(S)||!Le(d))return i?Ya:l;let x=`${d}__${l}`;$a(f)||(x=`${x}__${JSON.stringify(f)}`);let P=a.get(x);return P||(P=new Intl.DateTimeFormat(d,zt({},S,f)),a.set(x,P)),p?P.formatToParts(c):P.format(c)}const ag=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Ac(...t){const[e,n,i,r]=t,s=St();let o=St(),a;if(Le(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw bi(Mi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw bi(Mi.INVALID_ISO_DATE_ARGUMENT)}}else if(Rx(e)){if(isNaN(e.getTime()))throw bi(Mi.INVALID_DATE_ARGUMENT);a=e}else if(Ft(e))a=e;else throw bi(Mi.INVALID_ARGUMENT);return Le(n)?s.key=n:Qe(n)&&Object.keys(n).forEach(l=>{ag.includes(l)?o[l]=n[l]:s[l]=n[l]}),Le(i)?s.locale=i:Qe(i)&&(o=i),Qe(r)&&(o=r),[s.key||"",a,s,o]}function Dh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Uh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Rc(...e),h=ct(u.missingWarn)?u.missingWarn:t.missingWarn;ct(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=tf(t,u),v=o(t,r,_);if(!Le(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},d,S=null;const E="number format";for(let L=0;L<v.length&&(d=v[L],m=n[d]||{},S=m[l],!Qe(S));L++)nf(t,l,d,h,E);if(!Qe(S)||!Le(d))return i?Ya:l;let x=`${d}__${l}`;$a(f)||(x=`${x}__${JSON.stringify(f)}`);let P=a.get(x);return P||(P=new Intl.NumberFormat(d,zt({},S,f)),a.set(x,P)),p?P.formatToParts(c):P.format(c)}const lg=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Rc(...t){const[e,n,i,r]=t,s=St();let o=St();if(!Ft(e))throw bi(Mi.INVALID_ARGUMENT);const a=e;return Le(n)?s.key=n:Qe(n)&&Object.keys(n).forEach(l=>{lg.includes(l)?o[l]=n[l]:s[l]=n[l]}),Le(i)?s.locale=i:Qe(i)&&(o=i),Qe(r)&&(o=r),[s.key||"",a,s,o]}function Nh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const zS=t=>t,GS=t=>"",WS="text",XS=t=>t.length===0?"":Ju(t),$S=Dx;function Oh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function qS(t){const e=Ft(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Ft(t.named.count)||Ft(t.named.n))?Ft(t.named.count)?t.named.count:Ft(t.named.n)?t.named.n:e:e}function YS(t,e){e.count||(e.count=t),e.n||(e.n=t)}function jS(t={}){const e=t.locale,n=qS(t),i=ut(t.pluralRules)&&Le(e)&&Mt(t.pluralRules[e])?t.pluralRules[e]:Oh,r=ut(t.pluralRules)&&Le(e)&&Mt(t.pluralRules[e])?Oh:void 0,s=d=>d[i(n,d.length,r)],o=t.list||[],a=d=>o[d],l=t.named||St();Ft(t.pluralIndex)&&YS(n,l);const c=d=>l[d];function u(d,S){const E=Mt(t.messages)?t.messages(d,!!S):ut(t.messages)?t.messages[d]:!1;return E||(t.parent?t.parent.message(d):GS)}const f=d=>t.modifiers?t.modifiers[d]:zS,h=Qe(t.processor)&&Mt(t.processor.normalize)?t.processor.normalize:XS,p=Qe(t.processor)&&Mt(t.processor.interpolate)?t.processor.interpolate:$S,_=Qe(t.processor)&&Le(t.processor.type)?t.processor.type:WS,m={list:a,named:c,plural:s,linked:(d,...S)=>{const[E,x]=S;let P="text",L="";S.length===1?ut(E)?(L=E.modifier||L,P=E.type||P):Le(E)&&(L=E||L):S.length===2&&(Le(E)&&(L=E||L),Le(x)&&(P=x||P));const w=u(d,!0)(m),O=P==="vnode"&&Pt(w)&&L?w[0]:w;return L?f(L)(O,P):O},message:u,type:_,interpolate:p,normalize:h,values:zt(St(),o,l)};return m}const Fh=()=>"",Cn=t=>Mt(t);function Bh(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=Cc(...e),u=ct(c.missingWarn)?c.missingWarn:t.missingWarn,f=ct(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=ct(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Le(c.default)||ct(c.default)?ct(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,v=n||_!=null&&(Le(_)||Mt(_)),m=tf(t,c);h&&KS(c);let[d,S,E]=p?[l,m,a[m]||St()]:cg(t,l,m,o,f,u),x=d,P=l;if(!p&&!(Le(x)||ri(x)||Cn(x))&&v&&(x=_,P=x),!p&&(!(Le(x)||ri(x)||Cn(x))||!Le(S)))return r?Ya:l;let L=!1;const w=()=>{L=!0},O=Cn(x)?x:ug(t,l,S,x,P,w);if(L)return x;const A=QS(t,S,E,c),b=jS(A),F=ZS(t,O,b);let Y=i?i(F,l):F;if(h&&Le(Y)&&(Y=Px(Y)),__INTLIFY_PROD_DEVTOOLS__){const q={timestamp:Date.now(),key:Le(l)?l:Cn(x)?x.key:"",locale:S||(Cn(x)?x.locale:""),format:Le(x)?x:Cn(x)?x.source:"",message:Y};q.meta=zt({},t.__meta,FS()||{}),_S(q)}return Y}function KS(t){Pt(t.list)?t.list=t.list.map(e=>Le(e)?xh(e):e):ut(t.named)&&Object.keys(t.named).forEach(e=>{Le(t.named[e])&&(t.named[e]=xh(t.named[e]))})}function cg(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=St(),h,p=null;const _="translate";for(let v=0;v<u.length&&(h=u[v],f=o[h]||St(),(p=l(f,e))===null&&(p=f[e]),!(Le(p)||ri(p)||Cn(p)));v++)if(!VS(h,u)){const m=nf(t,e,h,s,_);m!==e&&(p=m)}return[p,h,f]}function ug(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Cn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,JS(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function ZS(t,e,n){return e(n)}function Cc(...t){const[e,n,i]=t,r=St();if(!Le(e)&&!Ft(e)&&!Cn(e)&&!ri(e))throw bi(Mi.INVALID_ARGUMENT);const s=Ft(e)?String(e):(Cn(e),e);return Ft(n)?r.plural=n:Le(n)?r.default=n:Qe(n)&&!$a(n)?r.named=n:Pt(n)&&(r.list=n),Ft(i)?r.plural=i:Le(i)?r.default=i:Qe(i)&&zt(r,i),[s,r]}function JS(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>wx(e,n,o)}}function QS(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let v=o(n,p);if(v==null&&(u||_)){const[,,m]=cg(u||t,p,e,a,l,c);v=o(m,p)}if(Le(v)||ri(v)){let m=!1;const S=ug(t,p,e,v,p,()=>{m=!0});return m?Fh:S}else return Cn(v)?v:Fh}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),Ft(i.plural)&&(h.pluralIndex=i.plural),h}rS();/*!
  * vue-i18n v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const ey="11.1.11";function ty(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Sr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Sr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Sr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Sr().__INTLIFY_PROD_DEVTOOLS__=!1)}const gn={UNEXPECTED_RETURN_TYPE:xS,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function bn(t,...e){return qa(t,null,void 0)}const Pc=tr("__translateVNode"),Lc=tr("__datetimeParts"),Ic=tr("__numberParts"),fg=tr("__setPluralRules"),hg=tr("__injectWithOption"),Dc=tr("__dispose");function to(t){if(!ut(t)||ri(t))return t;for(const e in t)if(Vn(t,e))if(!e.includes("."))ut(t[e])&&to(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=St()),!ut(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(ri(r)?eg.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!ri(r)){const o=r[n[i]];ut(o)&&to(o)}}return t}function rf(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Qe(n)?n:Pt(i)?St():{[t]:St()};if(Pt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||St(),sa(c,o[l])):sa(c,o)}else Le(a)&&sa(JSON.parse(a),o)}),r==null&&s)for(const a in o)Vn(o,a)&&to(o[a]);return o}function dg(t){return t.type}function pg(t,e,n){let i=ut(e.messages)?e.messages:St();"__i18nGlobal"in n&&(i=rf(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(ut(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ut(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function kh(t){return et(mo,null,t,0)}const Hh="__INTLIFY_META__",Vh=()=>[],ny=()=>!1;let zh=0;function Gh(t){return(e,n,i,r)=>t(n,i,us()||void 0,r)}const iy=()=>{const t=us();let e=null;return t&&(e=dg(t)[Hh])?{[Hh]:e}:null};function sf(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=ba?Ct:Gu;let o=ct(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Le(t.locale)?t.locale:eo),l=s(e&&o?e.fallbackLocale.value:Le(t.fallbackLocale)||Pt(t.fallbackLocale)||Qe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(rf(a.value,t)),u=s(Qe(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(Qe(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:ct(t.missingWarn)||fs(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:ct(t.fallbackWarn)||fs(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:ct(t.fallbackRoot)?t.fallbackRoot:!0,v=!!t.fallbackFormat,m=Mt(t.missing)?t.missing:null,d=Mt(t.missing)?Gh(t.missing):null,S=Mt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:ct(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const P=e?e.modifiers:Qe(t.modifiers)?t.modifiers:{};let L=t.pluralRules||e&&e.pluralRules,w;w=(()=>{i&&Ph(null);const g={version:ey,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:P,pluralRules:L,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:E,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=Qe(w)?w.__datetimeFormatters:void 0,g.__numberFormatters=Qe(w)?w.__numberFormatters:void 0;const I=kS(g);return i&&Ph(I),I})(),Rs(w,a.value,l.value);function A(){return[a.value,l.value,c.value,u.value,f.value]}const b=Ht({get:()=>a.value,set:g=>{w.locale=g,a.value=g}}),F=Ht({get:()=>l.value,set:g=>{w.fallbackLocale=g,l.value=g,Rs(w,a.value,g)}}),Y=Ht(()=>c.value),q=Ht(()=>u.value),oe=Ht(()=>f.value);function ae(){return Mt(S)?S:null}function te(g){S=g,w.postTranslation=g}function K(){return m}function W(g){g!==null&&(d=Gh(g)),m=g,w.missing=d}const pe=(g,I,V,j,X,Ee)=>{A();let he;try{__INTLIFY_PROD_DEVTOOLS__,i||(w.fallbackContext=e?BS():void 0),he=g(w)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(w.fallbackContext=void 0)}if(V!=="translate exists"&&Ft(he)&&he===Ya||V==="translate exists"&&!he){const[Te,Ce]=I();return e&&_?j(e):X(Te)}else{if(Ee(he))return he;throw bn(gn.UNEXPECTED_RETURN_TYPE)}};function Se(...g){return pe(I=>Reflect.apply(Bh,null,[I,...g]),()=>Cc(...g),"translate",I=>Reflect.apply(I.t,I,[...g]),I=>I,I=>Le(I))}function Re(...g){const[I,V,j]=g;if(j&&!ut(j))throw bn(gn.INVALID_ARGUMENT);return Se(I,V,zt({resolvedMessage:!0},j||{}))}function Be(...g){return pe(I=>Reflect.apply(Ih,null,[I,...g]),()=>Ac(...g),"datetime format",I=>Reflect.apply(I.d,I,[...g]),()=>Rh,I=>Le(I)||Pt(I))}function Je(...g){return pe(I=>Reflect.apply(Uh,null,[I,...g]),()=>Rc(...g),"number format",I=>Reflect.apply(I.n,I,[...g]),()=>Rh,I=>Le(I)||Pt(I))}function se(g){return g.map(I=>Le(I)||Ft(I)||ct(I)?kh(String(I)):I)}const be={normalize:se,interpolate:g=>g,type:"vnode"};function H(...g){return pe(I=>{let V;const j=I;try{j.processor=be,V=Reflect.apply(Bh,null,[j,...g])}finally{j.processor=null}return V},()=>Cc(...g),"translate",I=>I[Pc](...g),I=>[kh(I)],I=>Pt(I))}function re(...g){return pe(I=>Reflect.apply(Uh,null,[I,...g]),()=>Rc(...g),"number format",I=>I[Ic](...g),Vh,I=>Le(I)||Pt(I))}function ce(...g){return pe(I=>Reflect.apply(Ih,null,[I,...g]),()=>Ac(...g),"datetime format",I=>I[Lc](...g),Vh,I=>Le(I)||Pt(I))}function le(g){L=g,w.pluralRules=L}function ke(g,I){return pe(()=>{if(!g)return!1;const V=Le(I)?I:a.value,j=y(V),X=w.messageResolver(j,g);return ri(X)||Cn(X)||Le(X)},()=>[g],"translate exists",V=>Reflect.apply(V.te,V,[g,I]),ny,V=>ct(V))}function D(g){let I=null;const V=tg(w,l.value,a.value);for(let j=0;j<V.length;j++){const X=c.value[V[j]]||{},Ee=w.messageResolver(X,g);if(Ee!=null){I=Ee;break}}return I}function U(g){const I=D(g);return I??(e?e.tm(g)||{}:{})}function y(g){return c.value[g]||{}}function ne(g,I){if(r){const V={[g]:I};for(const j in V)Vn(V,j)&&to(V[j]);I=V[g]}c.value[g]=I,w.messages=c.value}function Z(g,I){c.value[g]=c.value[g]||{};const V={[g]:I};if(r)for(const j in V)Vn(V,j)&&to(V[j]);I=V[g],sa(I,c.value[g]),w.messages=c.value}function Q(g){return u.value[g]||{}}function T(g,I){u.value[g]=I,w.datetimeFormats=u.value,Dh(w,g,I)}function C(g,I){u.value[g]=zt(u.value[g]||{},I),w.datetimeFormats=u.value,Dh(w,g,I)}function N(g){return f.value[g]||{}}function k(g,I){f.value[g]=I,w.numberFormats=f.value,Nh(w,g,I)}function me(g,I){f.value[g]=zt(f.value[g]||{},I),w.numberFormats=f.value,Nh(w,g,I)}zh++,e&&ba&&(Ri(e.locale,g=>{o&&(a.value=g,w.locale=g,Rs(w,a.value,l.value))}),Ri(e.fallbackLocale,g=>{o&&(l.value=g,w.fallbackLocale=g,Rs(w,a.value,l.value))}));const M={id:zh,locale:b,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Rs(w,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:Y,get modifiers(){return P},get pluralRules(){return L||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(g){h=g,w.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(g){p=g,w.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return v},set fallbackFormat(g){v=g,w.fallbackFormat=v},get warnHtmlMessage(){return E},set warnHtmlMessage(g){E=g,w.warnHtmlMessage=g},get escapeParameter(){return x},set escapeParameter(g){x=g,w.escapeParameter=g},t:Se,getLocaleMessage:y,setLocaleMessage:ne,mergeLocaleMessage:Z,getPostTranslationHandler:ae,setPostTranslationHandler:te,getMissingHandler:K,setMissingHandler:W,[fg]:le};return M.datetimeFormats=q,M.numberFormats=oe,M.rt=Re,M.te=ke,M.tm=U,M.d=Be,M.n=Je,M.getDateTimeFormat=Q,M.setDateTimeFormat=T,M.mergeDateTimeFormat=C,M.getNumberFormat=N,M.setNumberFormat=k,M.mergeNumberFormat=me,M[hg]=n,M[Pc]=H,M[Lc]=ce,M[Ic]=re,M}function ry(t){const e=Le(t.locale)?t.locale:eo,n=Le(t.fallbackLocale)||Pt(t.fallbackLocale)||Qe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=Mt(t.missing)?t.missing:void 0,r=ct(t.silentTranslationWarn)||fs(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=ct(t.silentFallbackWarn)||fs(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=ct(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Qe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=Mt(t.postTranslation)?t.postTranslation:void 0,f=Le(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=ct(t.sync)?t.sync:!0;let _=t.messages;if(Qe(t.sharedMessages)){const P=t.sharedMessages;_=Object.keys(P).reduce((w,O)=>{const A=w[O]||(w[O]={});return zt(A,P[O]),w},_||{})}const{__i18n:v,__root:m,__injectWithOption:d}=t,S=t.datetimeFormats,E=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:x,datetimeFormats:S,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:v,__root:m,__injectWithOption:d}}function Uc(t={}){const e=sf(ry(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return ct(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=ct(r)?!r:r},get silentFallbackWarn(){return ct(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=ct(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function sy(t,e,n){return{beforeCreate(){const i=us();if(!i)throw bn(gn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Wh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Uc(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Wh(t,r);else{this.$i18n=Uc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&pg(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=us();if(!i)throw bn(gn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Wh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[fg](e.pluralizationRules||t.pluralizationRules);const n=rf(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const of={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function oy({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===kt?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},St())}function mg(){return kt}const ay=jt({name:"i18n-t",props:zt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Ft(t)||!isNaN(t)}},of),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Dr({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),o=St();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Le(t.plural)?+t.plural:t.plural);const a=oy(e,s),l=r[Pc](t.keypath,a,o),c=zt(St(),i),u=Le(t.tag)||ut(t.tag)?t.tag:mg();return Wa(u,c,l)}}}),Xh=ay;function ly(t){return Pt(t)&&!Le(t[0])}function gg(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=St();t.locale&&(o.locale=t.locale),Le(t.format)?o.key=t.format:ut(t.format)&&(Le(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?zt(St(),h,{[p]:t.format[p]}):h,St()));const l=i(t.value,o,a);let c=[o.key];Pt(l)?c=l.map((h,p)=>{const _=r[h.type],v=_?_({[h.type]:h.value,index:p,parts:l}):[h.value];return ly(v)&&(v[0].key=`${h.type}-${p}`),v}):Le(l)&&(c=[l]);const u=zt(St(),s),f=Le(t.tag)||ut(t.tag)?t.tag:mg();return Wa(f,u,c)}}const cy=jt({name:"i18n-n",props:zt({value:{type:Number,required:!0},format:{type:[String,Object]}},of),setup(t,e){const n=t.i18n||Dr({useScope:t.scope,__useComponent:!0});return gg(t,e,lg,(...i)=>n[Ic](...i))}}),$h=cy;function uy(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function fy(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw bn(gn.UNEXPECTED_ERROR);const c=uy(t,a.$),u=qh(l);return[Reflect.apply(c.t,c,[...Yh(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);ba&&t.global===c&&(o.__i18nWatcher=Ri(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{ba&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=qh(a);o.textContent=Reflect.apply(l.t,l,[...Yh(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function qh(t){if(Le(t))return{path:t};if(Qe(t)){if(!("path"in t))throw bn(gn.REQUIRED_VALUE,"path");return t}else throw bn(gn.INVALID_VALUE)}function Yh(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Le(n)&&(o.locale=n),Ft(r)&&(o.plural=r),Ft(s)&&(o.plural=s),[e,a,o]}function hy(t,e,...n){const i=Qe(n[0])?n[0]:{};(ct(i.globalInstall)?i.globalInstall:!0)&&([Xh.name,"I18nT"].forEach(s=>t.component(s,Xh)),[$h.name,"I18nN"].forEach(s=>t.component(s,$h)),[Kh.name,"I18nD"].forEach(s=>t.component(s,Kh))),t.directive("t",fy(e))}const dy=tr("global-vue-i18n");function py(t={}){const e=__VUE_I18N_LEGACY_API__&&ct(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=ct(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=my(t,e),o=tr("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),Qe(h[0])){const v=h[0];u.__composerExtend=v.__composerExtend,u.__vueI18nExtend=v.__vueI18nExtend}let p=null;!e&&n&&(p=My(f,u.global)),__VUE_I18N_FULL_INSTALL__&&hy(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(sy(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function Dr(t={}){const e=us();if(e==null)throw bn(gn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw bn(gn.NOT_INSTALLED);const n=gy(e),i=vy(n),r=dg(e),s=_y(t,r);if(s==="global")return pg(i,t,r),i;if(s==="parent"){let l=xy(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=zt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=sf(l),o.__composerExtend&&(a[Dc]=o.__composerExtend(a)),yy(o,e,a),o.__setInstance(e,a)}return a}function my(t,e){const n=Uu(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Uc(t)):n.run(()=>sf(t));if(i==null)throw bn(gn.UNEXPECTED_ERROR);return[n,i]}function gy(t){const e=Wn(t.isCE?dy:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw bn(t.isCE?gn.NOT_INSTALLED_WITH_PROVIDE:gn.UNEXPECTED_ERROR);return e}function _y(t,e){return $a(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function vy(t){return t.mode==="composition"?t.global:t.global.__composer}function xy(t,e,n=!1){let i=null;const r=e.root;let s=Sy(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[hg]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function Sy(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function yy(t,e,n){Ha(()=>{},e),po(()=>{const i=n;t.__deleteInstance(e);const r=i[Dc];r&&(r(),delete i[Dc])},e)}const Ey=["locale","fallbackLocale","availableLocales"],jh=["t","rt","d","n","tm","te"];function My(t,e){const n=Object.create(null);return Ey.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw bn(gn.UNEXPECTED_ERROR);const o=It(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,jh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw bn(gn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,jh.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const by=jt({name:"i18n-d",props:zt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},of),setup(t,e){const n=t.i18n||Dr({useScope:t.scope,__useComponent:!0});return gg(t,e,ag,(...i)=>n[Lc](...i))}}),Kh=by;ty();DS(pS);US(PS);NS(tg);if(__INTLIFY_PROD_DEVTOOLS__){const t=Sr();t.__INTLIFY__=!0,mS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Ty=["en-US","zh-TW"],af=Ku("lang",()=>{const{locale:t}=Dr({useScope:"global"}),e=localStorage.getItem("lang");t.value=Ty.includes(e)?e:"en-US",Va(()=>{localStorage.setItem("lang",t.value)});const n=Ht(()=>t.value==="en-US");function i(){switch(t.value){case"en-US":t.value="zh-TW";break;case"zh-TW":t.value="en-US";break}}return{locale:t,isEnUS:n,changeLang:i}}),wy=jt({name:"global-sidebar",components:{AHoverable:km,Switch:Hm},props:{toggled:{type:Boolean,default:!1},toggleSidebar:{type:Function,default:()=>{}}},setup(){const t=_o(),e=af(),{t:n}=Dr();return{themeStore:t,langStore:e,t:n}}}),Ay="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",Zh="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",_g="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",vg="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",Ry={class:"wrapper"},Cy={class:"wrapper"},Py={class:"wrapper"},Ly={class:"functions"};function Iy(t,e,n,i,r,s){const o=Ai("AHoverable"),a=Ai("Switch");return it(),pt("aside",{class:Ln(["global-sidebar",{active:t.toggled}])},[et(o,{path:"home",shape:"pill"},{default:Dt(()=>[ve("div",Ry,[e[0]||(e[0]=ve("div",{class:"img-wrapper"},[ve("img",{src:Ay,alt:"home"})],-1)),ve("span",null,In(t.t("home")),1)])]),_:1}),et(o,{path:"works",shape:"pill"},{default:Dt(()=>[ve("div",Cy,[e[1]||(e[1]=ve("div",{class:"img-wrapper"},[ve("img",{src:Zh,alt:"work"})],-1)),ve("span",null,In(t.t("work")),1)])]),_:1}),et(o,{path:"blogs",shape:"pill"},{default:Dt(()=>[ve("div",Py,[e[2]||(e[2]=ve("div",{class:"img-wrapper"},[ve("img",{src:Zh,alt:"blog"})],-1)),ve("span",null,In(t.t("blog")),1)])]),_:1}),ve("div",Ly,[et(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark},{optionL:Dt(()=>e[3]||(e[3]=[ve("img",{src:_g,alt:"light"},null,-1)])),optionR:Dt(()=>e[4]||(e[4]=[ve("img",{src:vg,alt:"dark"},null,-1)])),_:1},8,["change","isActive"]),et(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS},{optionL:Dt(()=>e[5]||(e[5]=[ve("span",null,"中",-1)])),optionR:Dt(()=>e[6]||(e[6]=[ve("span",null,"Eng",-1)])),_:1},8,["change","isActive"])])],2)}const Dy=_n(wy,[["render",Iy],["__scopeId","data-v-1bb0b03d"]]),Uy=jt({name:"global-header",components:{AHoverable:km,Switch:Hm,GlobalSidebar:Dy},setup(){const t=_o(),e=af(),{t:n}=Dr(),i=Ct(!1);return{themeStore:t,langStore:e,t:n,toggled:i,toggleSidebar:()=>{i.value=!i.value}}}}),Ny="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",Oy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",Fy={class:"global-header"},By={class:"navbar"},ky={class:"wrapper"},Hy={class:"wrapper"},Vy={class:"wrapper"},zy={class:"functions"},Gy={key:0,src:Ny,alt:"menu"},Wy={key:1,src:Oy,alt:"menu"};function Xy(t,e,n,i,r,s){const o=Ai("AHoverable"),a=Ai("Switch"),l=Ai("GlobalSidebar");return it(),pt(kt,null,[ve("header",Fy,[e[6]||(e[6]=ve("h1",{class:"icon"},"Pc",-1)),ve("nav",By,[et(o,{path:"home",effect:"underline-middle"},{default:Dt(()=>[ve("div",ky,[ve("span",null,In(t.t("home")),1)])]),_:1}),et(o,{path:"works",effect:"underline-middle"},{default:Dt(()=>[ve("div",Hy,[ve("span",null,In(t.t("work")),1)])]),_:1}),et(o,{path:"blogs",effect:"underline-middle"},{default:Dt(()=>[ve("div",Vy,[ve("span",null,In(t.t("blog")),1)])]),_:1})]),ve("aside",zy,[et(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark},{optionL:Dt(()=>e[2]||(e[2]=[ve("img",{src:_g,alt:"light"},null,-1)])),optionR:Dt(()=>e[3]||(e[3]=[ve("img",{src:vg,alt:"dark"},null,-1)])),_:1},8,["change","isActive"]),et(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS},{optionL:Dt(()=>e[4]||(e[4]=[ve("span",null,"中",-1)])),optionR:Dt(()=>e[5]||(e[5]=[ve("span",null,"Eng",-1)])),_:1},8,["change","isActive"])]),ve("button",{class:"toggle-sidebar",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?ti("",!0):(it(),pt("img",Gy)),t.toggled?(it(),pt("img",Wy)):ti("",!0)])]),et(l,{toggled:t.toggled,toggleSidebar:t.toggleSidebar},null,8,["toggled","toggleSidebar"]),ve("div",{class:Ln(["sidebar-bg",{"active-bg":t.toggled}]),onClick:e[1]||(e[1]=c=>t.toggleSidebar())},null,2)],64)}const $y=_n(Uy,[["render",Xy],["__scopeId","data-v-0065d2df"]]),qy=jt({__name:"App",setup(t){const e=_o();return Va(()=>{document.body.style.setProperty("--theme",e.theme)}),(n,i)=>{const r=Ai("router-view");return it(),pt(kt,null,[et($y),et(r)],64)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof document<"u";function xg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xg(t.default)}const ht=Object.assign;function Tl(t,e){const n={};for(const i in e){const r=e[i];n[i]=$n(r)?r.map(t):t(r)}return n}const Ws=()=>{},$n=Array.isArray,Sg=/#/g,jy=/&/g,Ky=/\//g,Zy=/=/g,Jy=/\?/g,yg=/\+/g,Qy=/%5B/g,eE=/%5D/g,Eg=/%5E/g,tE=/%60/g,Mg=/%7B/g,nE=/%7C/g,bg=/%7D/g,iE=/%20/g;function lf(t){return encodeURI(""+t).replace(nE,"|").replace(Qy,"[").replace(eE,"]")}function rE(t){return lf(t).replace(Mg,"{").replace(bg,"}").replace(Eg,"^")}function Nc(t){return lf(t).replace(yg,"%2B").replace(iE,"+").replace(Sg,"%23").replace(jy,"%26").replace(tE,"`").replace(Mg,"{").replace(bg,"}").replace(Eg,"^")}function sE(t){return Nc(t).replace(Zy,"%3D")}function oE(t){return lf(t).replace(Sg,"%23").replace(Jy,"%3F")}function aE(t){return t==null?"":oE(t).replace(Ky,"%2F")}function no(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lE=/\/$/,cE=t=>t.replace(lE,"");function wl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=dE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:no(o)}}function uE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ds(e.matched[i],n.matched[r])&&Tg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hE(t[n],e[n]))return!1;return!0}function hE(t,e){return $n(t)?Qh(t,e):$n(e)?Qh(e,t):t===e}function Qh(t,e){return $n(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function dE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var io;(function(t){t.pop="pop",t.push="push"})(io||(io={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function pE(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cE(t)}const mE=/^[^#]+#/;function gE(t,e){return t.replace(mE,"#")+e}function _E(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ja=()=>({left:window.scrollX,top:window.scrollY});function vE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=_E(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ed(t,e){return(history.state?history.state.position-e:-1)+t}const Oc=new Map;function xE(t,e){Oc.set(t,e)}function SE(t){const e=Oc.get(t);return Oc.delete(t),e}let yE=()=>location.protocol+"//"+location.host;function wg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Jh(l,"")}return Jh(n,t)+i+r}function EE(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=wg(t,location),_=n.value,v=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(p);r.forEach(d=>{d(n.value,_,{delta:m,type:io.pop,direction:m?m>0?Xs.forward:Xs.back:Xs.unknown})})};function l(){o=n.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ht({},h.state,{scroll:ja()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function td(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ja():null}}function ME(t){const{history:e,location:n}=window,i={value:wg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:yE()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=ht({},e.state,td(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ht({},r.value,e.state,{forward:l,scroll:ja()});s(u.current,u,!0);const f=ht({},td(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function bE(t){t=pE(t);const e=ME(t),n=EE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ht({location:"",base:t,go:i,createHref:gE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function TE(t){return typeof t=="string"||t&&typeof t=="object"}function Ag(t){return typeof t=="string"||typeof t=="symbol"}const Rg=Symbol("");var nd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nd||(nd={}));function ps(t,e){return ht(new Error,{type:t,[Rg]:!0},e)}function hi(t,e){return t instanceof Error&&Rg in t&&(e==null||!!(t.type&e))}const id="[^/]+?",wE={sensitive:!1,strict:!1,start:!0,end:!0},AE=/[.+*?^${}()[\]/\\]/g;function RE(t,e){const n=ht({},wE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(AE,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:d}=h;s.push({name:_,repeatable:v,optional:m});const S=d||id;if(S!==id){p+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+x.message)}}let E=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=20,m&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,d=_ in c?c[_]:"";if($n(d)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=$n(d)?d.join("/"):d;if(!S)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function CE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Cg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=CE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(rd(i))return 1;if(rd(r))return-1}return r.length-i.length}function rd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PE={type:0,value:""},LE=/[a-zA-Z0-9_]/;function IE(t){if(!t)return[[]];if(t==="/")return[[PE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:LE.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function DE(t,e,n){const i=RE(IE(t.path),n),r=ht(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function UE(t,e){const n=[],i=new Map;e=ld({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const _=!p,v=od(f);v.aliasOf=p&&p.record;const m=ld(e,f),d=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of x)d.push(od(ht({},v,{components:p?p.record.components:v.components,path:P,aliasOf:p?p.record:v})))}let S,E;for(const x of d){const{path:P}=x;if(h&&P[0]!=="/"){const L=h.record.path,w=L[L.length-1]==="/"?"":"/";x.path=h.record.path+(P&&w+P)}if(S=DE(x,h,m),p?p.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),_&&f.name&&!ad(S)&&o(f.name)),Pg(S)&&l(S),v.children){const L=v.children;for(let w=0;w<L.length;w++)s(L[w],S,p&&p.children[w])}p=p||S}return E?()=>{o(E)}:Ws}function o(f){if(Ag(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=FE(f,n);n.splice(h,0,f),f.record.name&&!ad(f)&&i.set(f.record.name,f)}function c(f,h){let p,_={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw ps(1,{location:f});m=p.record.name,_=ht(sd(h.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&sd(f.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(f.path!=null)v=f.path,p=n.find(E=>E.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(E=>E.re.test(h.path)),!p)throw ps(1,{location:f,currentLocation:h});m=p.record.name,_=ht({},h.params,f.params),v=p.stringify(_)}const d=[];let S=p;for(;S;)d.unshift(S.record),S=S.parent;return{name:m,path:v,params:_,matched:d,meta:OE(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function sd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function od(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:NE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function NE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OE(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function ld(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function FE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Cg(t,e[s])<0?i=s:n=s+1}const r=BE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function BE(t){let e=t;for(;e=e.parent;)if(Pg(e)&&Cg(t,e)===0)return e}function Pg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function kE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(yg," "),o=s.indexOf("="),a=no(o<0?s:s.slice(0,o)),l=o<0?null:no(s.slice(o+1));if(a in e){let c=e[a];$n(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function cd(t){let e="";for(let n in t){const i=t[n];if(n=sE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}($n(i)?i.map(s=>s&&Nc(s)):[i&&Nc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function HE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=$n(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const VE=Symbol(""),ud=Symbol(""),cf=Symbol(""),Lg=Symbol(""),Fc=Symbol("");function Cs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Gi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(ps(4,{from:n,to:e})):h instanceof Error?l(h):TE(h)?l(ps(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Al(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Gi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Yy(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Gi(p,n,i,o,a,r)()}))}}return s}function fd(t){const e=Wn(cf),n=Wn(Lg),i=Ht(()=>{const l=dn(t.to);return e.resolve(l)}),r=Ht(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(ds.bind(null,u));if(h>-1)return h;const p=hd(l[c-2]);return c>1&&hd(u)===p&&f[f.length-1].path!==p?f.findIndex(ds.bind(null,l[c-2])):h}),s=Ht(()=>r.value>-1&&$E(n.params,i.value.params)),o=Ht(()=>r.value>-1&&r.value===n.matched.length-1&&Tg(n.params,i.value.params));function a(l={}){if(XE(l)){const c=e[dn(t.replace)?"replace":"push"](dn(t.to)).catch(Ws);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ht(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function zE(t){return t.length===1?t[0]:t}const GE=jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:fd,setup(t,{slots:e}){const n=fo(fd(t)),{options:i}=Wn(cf),r=Ht(()=>({[dd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[dd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&zE(e.default(n));return t.custom?s:Wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),WE=GE;function XE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $E(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!$n(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function hd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dd=(t,e,n)=>t??e??n,qE=jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Wn(Fc),r=Ht(()=>t.route||i.value),s=Wn(ud,0),o=Ht(()=>{let c=dn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ht(()=>r.value.matched[o.value]);na(ud,Ht(()=>o.value+1)),na(VE,a),na(Fc,r);const l=Ct();return Ri(()=>[l.value,a.value,t.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ds(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return pd(n.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Wa(h,ht({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return pd(n.default,{Component:m,route:c})||m}}});function pd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YE=qE;function jE(t){const e=UE(t.routes,t),n=t.parseQuery||kE,i=t.stringifyQuery||cd,r=t.history,s=Cs(),o=Cs(),a=Cs(),l=Gu(Di);let c=Di;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Tl.bind(null,H=>""+H),f=Tl.bind(null,aE),h=Tl.bind(null,no);function p(H,re){let ce,le;return Ag(H)?(ce=e.getRecordMatcher(H),le=re):le=H,e.addRoute(le,ce)}function _(H){const re=e.getRecordMatcher(H);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function d(H,re){if(re=ht({},re||l.value),typeof H=="string"){const y=wl(n,H,re.path),ne=e.resolve({path:y.path},re),Z=r.createHref(y.fullPath);return ht(y,ne,{params:h(ne.params),hash:no(y.hash),redirectedFrom:void 0,href:Z})}let ce;if(H.path!=null)ce=ht({},H,{path:wl(n,H.path,re.path).path});else{const y=ht({},H.params);for(const ne in y)y[ne]==null&&delete y[ne];ce=ht({},H,{params:f(y)}),re.params=f(re.params)}const le=e.resolve(ce,re),ke=H.hash||"";le.params=u(h(le.params));const D=uE(i,ht({},H,{hash:rE(ke),path:le.path})),U=r.createHref(D);return ht({fullPath:D,hash:ke,query:i===cd?HE(H.query):H.query||{}},le,{redirectedFrom:void 0,href:U})}function S(H){return typeof H=="string"?wl(n,H,l.value.path):ht({},H)}function E(H,re){if(c!==H)return ps(8,{from:re,to:H})}function x(H){return w(H)}function P(H){return x(ht(S(H),{replace:!0}))}function L(H){const re=H.matched[H.matched.length-1];if(re&&re.redirect){const{redirect:ce}=re;let le=typeof ce=="function"?ce(H):ce;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=S(le):{path:le},le.params={}),ht({query:H.query,hash:H.hash,params:le.path!=null?{}:H.params},le)}}function w(H,re){const ce=c=d(H),le=l.value,ke=H.state,D=H.force,U=H.replace===!0,y=L(ce);if(y)return w(ht(S(y),{state:typeof y=="object"?ht({},ke,y.state):ke,force:D,replace:U}),re||ce);const ne=ce;ne.redirectedFrom=re;let Z;return!D&&fE(i,le,ce)&&(Z=ps(16,{to:ne,from:le}),Re(le,le,!0,!1)),(Z?Promise.resolve(Z):b(ne,le)).catch(Q=>hi(Q)?hi(Q,2)?Q:Se(Q):W(Q,ne,le)).then(Q=>{if(Q){if(hi(Q,2))return w(ht({replace:U},S(Q.to),{state:typeof Q.to=="object"?ht({},ke,Q.to.state):ke,force:D}),re||ne)}else Q=Y(ne,le,!0,U,ke);return F(ne,le,Q),Q})}function O(H,re){const ce=E(H,re);return ce?Promise.reject(ce):Promise.resolve()}function A(H){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(H):H()}function b(H,re){let ce;const[le,ke,D]=KE(H,re);ce=Al(le.reverse(),"beforeRouteLeave",H,re);for(const y of le)y.leaveGuards.forEach(ne=>{ce.push(Gi(ne,H,re))});const U=O.bind(null,H,re);return ce.push(U),be(ce).then(()=>{ce=[];for(const y of s.list())ce.push(Gi(y,H,re));return ce.push(U),be(ce)}).then(()=>{ce=Al(ke,"beforeRouteUpdate",H,re);for(const y of ke)y.updateGuards.forEach(ne=>{ce.push(Gi(ne,H,re))});return ce.push(U),be(ce)}).then(()=>{ce=[];for(const y of D)if(y.beforeEnter)if($n(y.beforeEnter))for(const ne of y.beforeEnter)ce.push(Gi(ne,H,re));else ce.push(Gi(y.beforeEnter,H,re));return ce.push(U),be(ce)}).then(()=>(H.matched.forEach(y=>y.enterCallbacks={}),ce=Al(D,"beforeRouteEnter",H,re,A),ce.push(U),be(ce))).then(()=>{ce=[];for(const y of o.list())ce.push(Gi(y,H,re));return ce.push(U),be(ce)}).catch(y=>hi(y,8)?y:Promise.reject(y))}function F(H,re,ce){a.list().forEach(le=>A(()=>le(H,re,ce)))}function Y(H,re,ce,le,ke){const D=E(H,re);if(D)return D;const U=re===Di,y=es?history.state:{};ce&&(le||U?r.replace(H.fullPath,ht({scroll:U&&y&&y.scroll},ke)):r.push(H.fullPath,ke)),l.value=H,Re(H,re,ce,U),Se()}let q;function oe(){q||(q=r.listen((H,re,ce)=>{if(!xe.listening)return;const le=d(H),ke=L(le);if(ke){w(ht(ke,{replace:!0,force:!0}),le).catch(Ws);return}c=le;const D=l.value;es&&xE(ed(D.fullPath,ce.delta),ja()),b(le,D).catch(U=>hi(U,12)?U:hi(U,2)?(w(ht(S(U.to),{force:!0}),le).then(y=>{hi(y,20)&&!ce.delta&&ce.type===io.pop&&r.go(-1,!1)}).catch(Ws),Promise.reject()):(ce.delta&&r.go(-ce.delta,!1),W(U,le,D))).then(U=>{U=U||Y(le,D,!1),U&&(ce.delta&&!hi(U,8)?r.go(-ce.delta,!1):ce.type===io.pop&&hi(U,20)&&r.go(-1,!1)),F(le,D,U)}).catch(Ws)}))}let ae=Cs(),te=Cs(),K;function W(H,re,ce){Se(H);const le=te.list();return le.length?le.forEach(ke=>ke(H,re,ce)):console.error(H),Promise.reject(H)}function pe(){return K&&l.value!==Di?Promise.resolve():new Promise((H,re)=>{ae.add([H,re])})}function Se(H){return K||(K=!H,oe(),ae.list().forEach(([re,ce])=>H?ce(H):re()),ae.reset()),H}function Re(H,re,ce,le){const{scrollBehavior:ke}=t;if(!es||!ke)return Promise.resolve();const D=!ce&&SE(ed(H.fullPath,0))||(le||!ce)&&history.state&&history.state.scroll||null;return Wu().then(()=>ke(H,re,D)).then(U=>U&&vE(U)).catch(U=>W(U,H,re))}const Be=H=>r.go(H);let Je;const se=new Set,xe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:d,options:t,push:x,replace:P,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:pe,install(H){const re=this;H.component("RouterLink",WE),H.component("RouterView",YE),H.config.globalProperties.$router=re,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>dn(l)}),es&&!Je&&l.value===Di&&(Je=!0,x(r.location).catch(ke=>{}));const ce={};for(const ke in Di)Object.defineProperty(ce,ke,{get:()=>l.value[ke],enumerable:!0});H.provide(cf,re),H.provide(Lg,nm(ce)),H.provide(Fc,l);const le=H.unmount;se.add(H),H.unmount=function(){se.delete(H),se.size<1&&(c=Di,q&&q(),q=null,l.value=Di,Je=!1,K=!1),le()}}};function be(H){return H.reduce((re,ce)=>re.then(()=>A(ce)),Promise.resolve())}return xe}function KE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>ds(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>ds(c,l))||r.push(l))}return[n,i,r]}const ZE=jt({name:"animated-txt",props:{text:{type:String,default:""},fontSize:{type:String,default:""},textTransform:{type:String,default:""},letterSpacing:{type:String,default:""},lineHeight:{type:String,default:"sm"},justify:{type:String,default:""},wrap:{type:String,default:"nowrap"},whiteSpace:{type:Boolean,default:!1},animation:{type:String,default:""},duration:{type:String,default:"0ms"},delay:{type:String,default:"0ms"},stagger:{type:Number,default:0},lang:{type:String,default:"en-US"}},setup(t,{expose:e}){let n=0;const i=Ct([]),r=()=>n+=t.stagger;Ri(t,()=>{n=0}),Va(()=>{t.lang==="zh-TW"?i.value=t.text.split(""):i.value=t.text.split(" ")});let s=0;return e(),{words:i,getStepDelay:r,animationReset:s}}});function JE(t,e,n,i,r,s){return it(),pt("div",{class:Ln(["animated-txt",`text-${t.wrap}`,`justify-${t.justify}`,`font-size-${t.fontSize}`])},[(it(!0),pt(kt,null,Gf(t.words,o=>(it(),pt("div",{class:Ln(["word",{whitespace:t.whiteSpace},`letter-spacing-${t.letterSpacing}`,`line-height-${t.lineHeight}`]),key:`word ${t.animationReset+=1}`},[(it(!0),pt(kt,null,Gf(o,a=>(it(),pt("span",{class:Ln(["char",`animation-${t.animation}`,`text-transform-${t.textTransform}`]),key:a,style:Oa({animationDelay:`calc(${t.delay} + ${t.getStepDelay()}ms)`,animationDuration:t.duration})},In(a),7))),128))],2))),128))],2)}const md=_n(ZE,[["render",JE],["__scopeId","data-v-792e4f3e"]]),Ig="/my-site/assets/homepage-bg-32W09hT6.webp";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uf="177",QE=0,gd=1,eM=2,Dg=1,ff=2,vi=3,Ki=0,pn=1,Ei=2,qi=0,os=1,_d=2,vd=3,xd=4,tM=5,vr=100,nM=101,iM=102,rM=103,sM=104,oM=200,aM=201,lM=202,cM=203,Bc=204,kc=205,uM=206,fM=207,hM=208,dM=209,pM=210,mM=211,gM=212,_M=213,vM=214,Hc=0,Vc=1,zc=2,ms=3,Gc=4,Wc=5,Xc=6,$c=7,Ka=0,xM=1,SM=2,Yi=0,yM=1,EM=2,MM=3,bM=4,TM=5,wM=6,AM=7,Ug=300,gs=301,_s=302,qc=303,Yc=304,Za=306,Rr=1e3,yr=1001,jc=1002,Xn=1003,RM=1004,Do=1005,ni=1006,Rl=1007,Er=1008,li=1009,Ng=1010,Og=1011,ro=1012,hf=1013,Cr=1014,Ti=1015,vo=1016,df=1017,pf=1018,so=1020,Fg=35902,Bg=1021,kg=1022,zn=1023,oo=1026,ao=1027,Hg=1028,mf=1029,Vg=1030,gf=1031,_f=1033,oa=33776,aa=33777,la=33778,ca=33779,Kc=35840,Zc=35841,Jc=35842,Qc=35843,eu=36196,tu=37492,nu=37496,iu=37808,ru=37809,su=37810,ou=37811,au=37812,lu=37813,cu=37814,uu=37815,fu=37816,hu=37817,du=37818,pu=37819,mu=37820,gu=37821,ua=36492,_u=36494,vu=36495,zg=36283,xu=36284,Su=36285,yu=36286,CM=3200,PM=3201,vf=0,LM=1,Wi="",Rn="srgb",vs="srgb-linear",Ta="linear",vt="srgb",Fr=7680,Sd=519,IM=512,DM=513,UM=514,Gg=515,NM=516,OM=517,FM=518,BM=519,yd=35044,Ed="300 es",wi=2e3,wa=2001;class Ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,Aa=180/Math.PI;function xo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function kM(t,e){return(t%e+e)%e}function Pl(t,e,n){return(1-n)*t+n*e}function Ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class So{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,S=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const P=Math.sqrt(E),L=Math.atan2(P,d*S);m=Math.sin(m*L)/P,a=Math.sin(a*L)/P}const x=a*S;if(l=l*m+h*x,c=c*m+p*x,u=u*m+_*x,f=f*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-a*p,e[n+2]=c*_+u*p+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Md.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Md.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new $,Md=new So;class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],S=r[1],E=r[4],x=r[7],P=r[2],L=r[5],w=r[8];return s[0]=o*v+a*S+l*P,s[3]=o*m+a*E+l*L,s[6]=o*d+a*x+l*w,s[1]=c*v+u*S+f*P,s[4]=c*m+u*E+f*L,s[7]=c*d+u*x+f*w,s[2]=h*v+p*S+_*P,s[5]=h*m+p*E+_*L,s[8]=h*d+p*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Il.makeScale(e,n)),this}rotate(e){return this.premultiply(Il.makeRotation(-e)),this}translate(e,n){return this.premultiply(Il.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Il=new Ke;function Wg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HM(){const t=lo("canvas");return t.style.display="block",t}const bd={};function as(t){t in bd||(bd[t]=!0,console.warn(t))}function VM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function zM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function GM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Td=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WM(){const t={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?Ta:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vs]:{primaries:e,whitePoint:i,transfer:Ta,toXYZ:Td,fromXYZ:wd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Td,fromXYZ:wd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const lt=WM();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class XM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=lo("canvas")),Br.width=e.width,Br.height=e.height;const r=Br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $M=0;class xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Dl(r[o].image)):s.push(Dl(r[o]))}else s=Dl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Dl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qM=0;const Ul=new $;class un extends Ss{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=yr,r=yr,s=ni,o=Er,a=zn,l=li,c=un.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=xo(),this.name="",this.source=new xf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ug;un.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,P=(d+1)/2,L=(u+h)/4,w=(f+v)/4,O=(_+m)/4;return E>x&&E>P?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=L/i,s=w/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=L/r,s=O/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=O/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YM extends Ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new un(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new xf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends YM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Xg extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),No.subVectors(this.max,Ls),kr.subVectors(e.a,Ls),Hr.subVectors(e.b,Ls),Vr.subVectors(e.c,Ls),Ui.subVectors(Hr,kr),Ni.subVectors(Vr,Hr),cr.subVectors(kr,Vr);let n=[0,-Ui.z,Ui.y,0,-Ni.z,Ni.y,0,-cr.z,cr.y,Ui.z,0,-Ui.x,Ni.z,0,-Ni.x,cr.z,0,-cr.x,-Ui.y,Ui.x,0,-Ni.y,Ni.x,0,-cr.y,cr.x,0];return!Nl(n,kr,Hr,Vr,No)||(n=[1,0,0,0,1,0,0,0,1],!Nl(n,kr,Hr,Vr,No))?!1:(Oo.crossVectors(Ui,Ni),n=[Oo.x,Oo.y,Oo.z],Nl(n,kr,Hr,Vr,No))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new $,new $,new $,new $,new $,new $,new $,new $],Fn=new $,Uo=new yo,kr=new $,Hr=new $,Vr=new $,Ui=new $,Ni=new $,cr=new $,Ls=new $,No=new $,Oo=new $,ur=new $;function Nl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ur.fromArray(t,s);const a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),u=i.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const KM=new yo,Is=new $,Ol=new $;class Sf{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Ol)),this.expandByPoint(Is.copy(e.center).sub(Ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new $,Fl=new $,Fo=new $,Oi=new $,Bl=new $,Bo=new $,kl=new $;class $g{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fl.copy(e).add(n).multiplyScalar(.5),Fo.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(Fl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Fo),a=Oi.dot(this.direction),l=-Oi.dot(Fo),c=Oi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fl).addScaledVector(Fo,h),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){Bl.subVectors(n,e),Bo.subVectors(i,e),kl.crossVectors(Bl,Bo);let o=this.direction.dot(kl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Bo.crossVectors(Oi,Bo));if(l<0)return null;const c=a*this.direction.dot(Bl.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(kl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,_,v,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),o=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;n[0]=h+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;n[0]=h-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+v,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZM,e,JM)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(i,xn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(i,xn)),Fi.normalize(),ko.crossVectors(xn,Fi),r[0]=Fi.x,r[4]=ko.x,r[8]=xn.x,r[1]=Fi.y,r[5]=ko.y,r[9]=xn.y,r[2]=Fi.z,r[6]=ko.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],S=i[3],E=i[7],x=i[11],P=i[15],L=r[0],w=r[4],O=r[8],A=r[12],b=r[1],F=r[5],Y=r[9],q=r[13],oe=r[2],ae=r[6],te=r[10],K=r[14],W=r[3],pe=r[7],Se=r[11],Re=r[15];return s[0]=o*L+a*b+l*oe+c*W,s[4]=o*w+a*F+l*ae+c*pe,s[8]=o*O+a*Y+l*te+c*Se,s[12]=o*A+a*q+l*K+c*Re,s[1]=u*L+f*b+h*oe+p*W,s[5]=u*w+f*F+h*ae+p*pe,s[9]=u*O+f*Y+h*te+p*Se,s[13]=u*A+f*q+h*K+p*Re,s[2]=_*L+v*b+m*oe+d*W,s[6]=_*w+v*F+m*ae+d*pe,s[10]=_*O+v*Y+m*te+d*Se,s[14]=_*A+v*q+m*K+d*Re,s[3]=S*L+E*b+x*oe+P*W,s[7]=S*w+E*F+x*ae+P*pe,s[11]=S*O+E*Y+x*te+P*Se,s[15]=S*A+E*q+x*K+P*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],S=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,E=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,x=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,P=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,L=n*S+i*E+r*x+s*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/L;return e[0]=S*w,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=E*w,e[5]=(u*m*s-_*h*s+_*r*p-n*m*p-u*r*d+n*h*d)*w,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(_*f*s-u*v*s-_*i*p+n*v*p+u*i*d-n*f*d)*w,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=P*w,e[13]=(u*v*r-_*f*r+_*i*h-n*v*h-u*i*m+n*f*m)*w,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,v=o*u,m=o*f,d=a*f,S=l*c,E=l*u,x=l*f,P=i.x,L=i.y,w=i.z;return r[0]=(1-(v+d))*P,r[1]=(p+x)*P,r[2]=(_-E)*P,r[3]=0,r[4]=(p-x)*L,r[5]=(1-(h+d))*L,r[6]=(m+S)*L,r[7]=0,r[8]=(_+E)*w,r[9]=(m-S)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),a=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,f=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===wi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===wa)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let _,v;if(a===wi)_=(o+s)*f,v=-2*f;else if(a===wa)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const zr=new $,Bn=new At,ZM=new $(0,0,0),JM=new $(1,1,1),Fi=new $,ko=new $,xn=new $,Ad=new At,Rd=new So;class qn{constructor(e=0,n=0,i=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ad.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ad,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QM=0;const Cd=new $,Gr=new So,mi=new At,Ho=new $,Ds=new $,eb=new $,tb=new So,Pd=new $(1,0,0),Ld=new $(0,1,0),Id=new $(0,0,1),Dd={type:"added"},nb={type:"removed"},Wr={type:"childadded",child:null},Hl={type:"childremoved",child:null};class qt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QM++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new $,n=new qn,i=new So,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ke}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Id,e)}translateOnAxis(e,n){return Cd.copy(e).applyQuaternion(this.quaternion),this.position.add(Cd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ho.copy(e):Ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ds,Ho,this.up):mi.lookAt(Ho,Ds,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(mi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(nb),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dd),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new $(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new $,gi=new $,Vl=new $,_i=new $,Xr=new $,$r=new $,Ud=new $,zl=new $,Gl=new $,Wl=new $,Xl=new Lt,$l=new Lt,ql=new Lt;class Hn{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),gi.subVectors(i,n),Vl.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(gi),l=kn.dot(Vl),c=gi.dot(gi),u=gi.dot(Vl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Xl.setScalar(0),$l.setScalar(0),ql.setScalar(0),Xl.fromBufferAttribute(e,n),$l.fromBufferAttribute(e,i),ql.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xl,s.x),o.addScaledVector($l,s.y),o.addScaledVector(ql,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),gi.subVectors(e,n),kn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,i),$r.subVectors(s,i),zl.subVectors(e,i);const l=Xr.dot(zl),c=$r.dot(zl);if(l<=0&&c<=0)return n.copy(i);Gl.subVectors(e,r);const u=Xr.dot(Gl),f=$r.dot(Gl);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Xr,o);Wl.subVectors(e,s);const p=Xr.dot(Wl),_=$r.dot(Wl);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector($r,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Ud.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Ud,a);const d=1/(m+v+h);return o=v*d,a=h*d,n.copy(i).addScaledVector(Xr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Yl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=kM(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Yl(o,s,e+1/3),this.g=Yl(o,s,e),this.b=Yl(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=qg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(nt(Zt.r*255,0,255))*65536+Math.round(nt(Zt.g*255,0,255))*256+Math.round(nt(Zt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Rn){lt.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Vo);const i=Pl(Bi.h,Vo.h,n),r=Pl(Bi.s,Vo.s,n),s=Pl(Bi.l,Vo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new rt;rt.NAMES=qg;let ib=0;class ys extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=os,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=kc,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bc&&(i.blendSrc=this.blendSrc),this.blendDst!==kc&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ja extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new $,zo=new st;let rb=0;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=yd,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zo.fromBufferAttribute(this,n),zo.applyMatrix3(e),this.setXY(n,zo.x,zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yd&&(e.usage=this.usage),e}}class Yg extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jg extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sb=0;const An=new At,jl=new qt,qr=new $,Sn=new yo,Us=new yo,Xt=new $;class rr extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wg(e)?jg:Yg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(Sn.min,Us.min),Sn.expandByPoint(Xt),Xt.addVectors(Sn.max,Us.max),Sn.expandByPoint(Xt)):(Sn.expandByPoint(Us.min),Sn.expandByPoint(Us.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Xt.add(qr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new $,l[O]=new $;const c=new $,u=new $,f=new $,h=new st,p=new st,_=new st,v=new $,m=new $;function d(O,A,b){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,b),h.fromBufferAttribute(s,O),p.fromBufferAttribute(s,A),_.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[O].add(v),a[A].add(v),a[b].add(v),l[O].add(m),l[A].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,A=S.length;O<A;++O){const b=S[O],F=b.start,Y=b.count;for(let q=F,oe=F+Y;q<oe;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new $,x=new $,P=new $,L=new $;function w(O){P.fromBufferAttribute(r,O),L.copy(P);const A=a[O];E.copy(A),E.sub(P.multiplyScalar(P.dot(A))).normalize(),x.crossVectors(L,A);const F=x.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,A=S.length;O<A;++O){const b=S[O],F=b.start,Y=b.count;for(let q=F,oe=F+Y;q<oe;q+=3)w(e.getX(q+0)),w(e.getX(q+1)),w(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,u=new $,f=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Xt.fromBufferAttribute(e,n),Xt.normalize(),e.setXYZ(n,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new si(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nd=new At,fr=new $g,Go=new Sf,Od=new $,Wo=new $,Xo=new $,$o=new $,Kl=new $,qo=new $,Fd=new $,Yo=new $;class Ut extends qt{constructor(e=new rr,n=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){qo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Kl.fromBufferAttribute(f,e),o?qo.addScaledVector(Kl,u):qo.addScaledVector(Kl.sub(n),u))}n.add(qo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Go.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Go,Od)===null||fr.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Nd.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Nd),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,P=E;x<P;x+=3){const L=a.getX(x),w=a.getX(x+1),O=a.getX(x+2);r=jo(this,d,e,i,c,u,f,L,w,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const S=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=jo(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,P=E;x<P;x+=3){const L=x,w=x+1,O=x+2;r=jo(this,d,e,i,c,u,f,L,w,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const S=m,E=m+1,x=m+2;r=jo(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ob(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ki,a),l===null)return null;Yo.copy(a),Yo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Yo);return c<n.near||c>n.far?null:{distance:c,point:Yo.clone(),object:t}}function jo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Wo),t.getVertexPosition(l,Xo),t.getVertexPosition(c,$o);const u=ob(t,e,n,i,Wo,Xo,$o,Fd);if(u){const f=new $;Hn.getBarycoord(Fd,Wo,Xo,$o,f),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,f,new st)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,f,new st)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,f,new $),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new $,materialIndex:0};Hn.getNormal(Wo,Xo,$o,h.normal),u.face=h,u.barycoord=f}return u}class Eo extends rr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(v,m,d,S,E,x,P,L,w,O,A){const b=x/w,F=P/O,Y=x/2,q=P/2,oe=L/2,ae=w+1,te=O+1;let K=0,W=0;const pe=new $;for(let Se=0;Se<te;Se++){const Re=Se*F-q;for(let Be=0;Be<ae;Be++){const Je=Be*b-Y;pe[v]=Je*S,pe[m]=Re*E,pe[d]=oe,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[d]=L>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Be/w),f.push(1-Se/O),K+=1}}for(let Se=0;Se<O;Se++)for(let Re=0;Re<w;Re++){const Be=h+Re+ae*Se,Je=h+Re+ae*(Se+1),se=h+(Re+1)+ae*(Se+1),xe=h+(Re+1)+ae*Se;l.push(Be,Je,xe),l.push(Je,se,xe),W+=6}a.addGroup(p,W,A),p+=W,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=xs(t[n]);for(const r in i)e[r]=i[r]}return e}function ab(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Kg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const lb={clone:xs,merge:on};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=ab(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Zg extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new $,Bd=new st,kd=new st;class Pn extends Zg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Aa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Bd,kd),n.subVectors(kd,Bd)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,jr=1;class fb extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Yr,jr,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Yr,jr,e,n);s.layers=this.layers,this.add(s);const o=new Pn(Yr,jr,e,n);o.layers=this.layers,this.add(o);const a=new Pn(Yr,jr,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Yr,jr,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Yr,jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Jg extends un{constructor(e=[],n=gs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hb extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Eo(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:qi});s.uniforms.tEquirect.value=n;const o=new Ut(r,s),a=n.minFilter;return n.minFilter===Er&&(n.minFilter=ni),new fb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Ko extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Qg extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jl=new $,pb=new $,mb=new Ke;class gr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Jl.subVectors(i,n).cross(pb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Jl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mb.getNormalMatrix(e),r=this.coplanarPoint(Jl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Sf,Zo=new $;class Ef{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,o=new gr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-p,x-d).normalize(),i[1].setComponents(l+s,h+c,m+p,x+d).normalize(),i[2].setComponents(l+o,h+u,m+_,x+S).normalize(),i[3].setComponents(l-o,h-u,m-_,x-S).normalize(),i[4].setComponents(l-a,h-f,m-v,x-E).normalize(),n===wi)i[5].setComponents(l+a,h+f,m+v,x+E).normalize();else if(n===wa)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Zo.x=r.normal.x>0?e.max.x:e.min.x,Zo.y=r.normal.y>0?e.max.y:e.min.y,Zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class e_ extends un{constructor(e,n,i=Cr,r,s,o,a=Xn,l=Xn,c,u=oo,f=1){if(u!==oo&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ji extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const S=d*h-o;for(let E=0;E<c;E++){const x=E*f-s;_.push(x,-S,0),v.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const E=S+c*d,x=S+c*(d+1),P=S+1+c*(d+1),L=S+1+c*d;p.push(E,x,L),p.push(x,P,L)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qa extends rr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new $,h=new $,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const S=[],E=d/i;let x=0;d===0&&o===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let P=0;P<=n;P++){const L=P/n;f.x=-e*Math.cos(r+L*s)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(r+L*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(L+x,1-E),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<n;S++){const E=u[d][S+1],x=u[d][S],P=u[d+1][S],L=u[d+1][S+1];(d!==0||o>0)&&p.push(E,x,L),(d!==i-1||l<Math.PI)&&p.push(x,P,L)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class t_ extends ys{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class n_ extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gb extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class vb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const xb=new vb;class Mf{constructor(e){this.manager=e!==void 0?e:xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mf.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sb extends Mf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Hd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=lo("img");function l(){u(),Hd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class i_ extends Mf{constructor(e){super(e)}load(e,n,i,r){const s=new un,o=new Sb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class r_ extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ql=new At,Vd=new $,zd=new $;class yb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Vd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vd),zd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zd),n.updateMatrixWorld(),Ql.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ql),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Eb extends yb{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Aa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ra extends r_{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Eb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bf extends Zg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class s_ extends r_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mb extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Gd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Gd(){return performance.now()}const Wd=new At;class Tb{constructor(e,n,i=0,r=1/0){this.ray=new $g(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wd),this}intersectObject(e,n=!0,i=[]){return Eu(e,this,i,n),i.sort(Xd),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Eu(e[r],this,i,n);return i.sort(Xd),i}}function Xd(t,e){return t.distance-e.distance}function Eu(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Eu(s[o],e,n,!0)}}function $d(t,e,n,i){const r=wb(i);switch(n){case Bg:return t*e;case Hg:return t*e/r.components*r.byteLength;case mf:return t*e/r.components*r.byteLength;case Vg:return t*e*2/r.components*r.byteLength;case gf:return t*e*2/r.components*r.byteLength;case kg:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case _f:return t*e*4/r.components*r.byteLength;case oa:case aa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Qc:return Math.max(t,16)*Math.max(e,8)/4;case Kc:case Jc:return Math.max(t,8)*Math.max(e,8)/2;case eu:case tu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ou:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case au:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ua:case _u:case vu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zg:case xu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Su:case yu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wb(t){switch(t){case li:case Ng:return{byteLength:1,components:1};case ro:case Og:case vo:return{byteLength:2,components:1};case df:case pf:return{byteLength:2,components:4};case Cr:case hf:case Ti:return{byteLength:4,components:1};case Fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ab(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cb=`#ifdef USE_ALPHAHASH
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
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ub=`#ifdef USE_AOMAP
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
#endif`,Nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ob=`#ifdef USE_BATCHING
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
#endif`,Fb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vb=`#ifdef USE_IRIDESCENCE
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
#endif`,zb=`#ifdef USE_BUMPMAP
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
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zb=`#define PI 3.141592653589793
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
} // validated`,Jb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qb=`vec3 transformedNormal = objectNormal;
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
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rT="gl_FragColor = linearToOutputTexel( gl_FragColor );",sT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oT=`#ifdef USE_ENVMAP
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
#endif`,aT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mT=`#ifdef USE_GRADIENTMAP
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
}`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xT=`uniform bool receiveShadow;
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
#endif`,ST=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TT=`PhysicalMaterial material;
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
#endif`,wT=`struct PhysicalMaterial {
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
}`,AT=`
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
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
#endif`,CT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FT=`#if defined( USE_POINTS_UV )
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
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,VT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GT=`#ifdef USE_MORPHTARGETS
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
#endif`,WT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KT=`#ifdef USE_NORMALMAP
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
#endif`,ZT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hw=`float getShadowMask() {
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
}`,dw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
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
#endif`,_w=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Ew=`#ifdef USE_TRANSMISSION
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Aw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rw=`uniform sampler2D t2D;
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`#include <common>
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
}`,Uw=`#if DEPTH_PACKING == 3200
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
}`,Nw=`#define DISTANCE
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
}`,Ow=`#define DISTANCE
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
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
}`,Hw=`uniform vec3 diffuse;
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
}`,Vw=`#include <common>
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
}`,zw=`uniform vec3 diffuse;
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
}`,Gw=`#define LAMBERT
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
}`,Ww=`#define LAMBERT
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
}`,Xw=`#define MATCAP
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
}`,$w=`#define MATCAP
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
}`,qw=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,jw=`#define PHONG
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
}`,Kw=`#define PHONG
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
}`,Zw=`#define STANDARD
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
}`,Jw=`#define STANDARD
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
}`,Qw=`#define TOON
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
}`,eA=`#define TOON
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
}`,tA=`uniform float size;
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
}`,nA=`uniform vec3 diffuse;
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
}`,iA=`#include <common>
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
}`,rA=`uniform vec3 color;
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
}`,sA=`uniform float rotation;
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
}`,oA=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Rb,alphahash_pars_fragment:Cb,alphamap_fragment:Pb,alphamap_pars_fragment:Lb,alphatest_fragment:Ib,alphatest_pars_fragment:Db,aomap_fragment:Ub,aomap_pars_fragment:Nb,batching_pars_vertex:Ob,batching_vertex:Fb,begin_vertex:Bb,beginnormal_vertex:kb,bsdfs:Hb,iridescence_fragment:Vb,bumpmap_pars_fragment:zb,clipping_planes_fragment:Gb,clipping_planes_pars_fragment:Wb,clipping_planes_pars_vertex:Xb,clipping_planes_vertex:$b,color_fragment:qb,color_pars_fragment:Yb,color_pars_vertex:jb,color_vertex:Kb,common:Zb,cube_uv_reflection_fragment:Jb,defaultnormal_vertex:Qb,displacementmap_pars_vertex:eT,displacementmap_vertex:tT,emissivemap_fragment:nT,emissivemap_pars_fragment:iT,colorspace_fragment:rT,colorspace_pars_fragment:sT,envmap_fragment:oT,envmap_common_pars_fragment:aT,envmap_pars_fragment:lT,envmap_pars_vertex:cT,envmap_physical_pars_fragment:ST,envmap_vertex:uT,fog_vertex:fT,fog_pars_vertex:hT,fog_fragment:dT,fog_pars_fragment:pT,gradientmap_pars_fragment:mT,lightmap_pars_fragment:gT,lights_lambert_fragment:_T,lights_lambert_pars_fragment:vT,lights_pars_begin:xT,lights_toon_fragment:yT,lights_toon_pars_fragment:ET,lights_phong_fragment:MT,lights_phong_pars_fragment:bT,lights_physical_fragment:TT,lights_physical_pars_fragment:wT,lights_fragment_begin:AT,lights_fragment_maps:RT,lights_fragment_end:CT,logdepthbuf_fragment:PT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:IT,logdepthbuf_vertex:DT,map_fragment:UT,map_pars_fragment:NT,map_particle_fragment:OT,map_particle_pars_fragment:FT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:kT,morphinstance_vertex:HT,morphcolor_vertex:VT,morphnormal_vertex:zT,morphtarget_pars_vertex:GT,morphtarget_vertex:WT,normal_fragment_begin:XT,normal_fragment_maps:$T,normal_pars_fragment:qT,normal_pars_vertex:YT,normal_vertex:jT,normalmap_pars_fragment:KT,clearcoat_normal_fragment_begin:ZT,clearcoat_normal_fragment_maps:JT,clearcoat_pars_fragment:QT,iridescence_pars_fragment:ew,opaque_fragment:tw,packing:nw,premultiplied_alpha_fragment:iw,project_vertex:rw,dithering_fragment:sw,dithering_pars_fragment:ow,roughnessmap_fragment:aw,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:uw,shadowmap_vertex:fw,shadowmask_pars_fragment:hw,skinbase_vertex:dw,skinning_pars_vertex:pw,skinning_vertex:mw,skinnormal_vertex:gw,specularmap_fragment:_w,specularmap_pars_fragment:vw,tonemapping_fragment:xw,tonemapping_pars_fragment:Sw,transmission_fragment:yw,transmission_pars_fragment:Ew,uv_pars_fragment:Mw,uv_pars_vertex:bw,uv_vertex:Tw,worldpos_vertex:ww,background_vert:Aw,background_frag:Rw,backgroundCube_vert:Cw,backgroundCube_frag:Pw,cube_vert:Lw,cube_frag:Iw,depth_vert:Dw,depth_frag:Uw,distanceRGBA_vert:Nw,distanceRGBA_frag:Ow,equirect_vert:Fw,equirect_frag:Bw,linedashed_vert:kw,linedashed_frag:Hw,meshbasic_vert:Vw,meshbasic_frag:zw,meshlambert_vert:Gw,meshlambert_frag:Ww,meshmatcap_vert:Xw,meshmatcap_frag:$w,meshnormal_vert:qw,meshnormal_frag:Yw,meshphong_vert:jw,meshphong_frag:Kw,meshphysical_vert:Zw,meshphysical_frag:Jw,meshtoon_vert:Qw,meshtoon_frag:eA,points_vert:tA,points_frag:nA,shadow_vert:iA,shadow_frag:rA,sprite_vert:sA,sprite_frag:oA},Me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ei={basic:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:on([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:on([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:on([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:on([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:on([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:on([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:on([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:on([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:on([Me.common,Me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:on([Me.lights,Me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ei.physical={uniforms:on([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Jo={r:0,b:0,g:0},dr=new qn,aA=new At;function lA(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function v(E){let x=!1;const P=_(E);P===null?d(a,l):P&&P.isColor&&(d(P,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const P=_(x);P&&(P.isCubeTexture||P.mapping===Za)?(u===void 0&&(u=new Ut(new Eo(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:xs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,w,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),dr.copy(x.backgroundRotation),dr.x*=-1,dr.y*=-1,dr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(aA.makeRotationFromEuler(dr)),u.material.toneMapped=lt.getTransfer(P.colorSpace)!==vt,(f!==P||h!==P.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,h=P.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Ut(new Ji(2,2),new Zi({name:"BackgroundMaterial",uniforms:xs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(P.colorSpace)!==vt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||h!==P.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,h=P.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,x){E.getRGB(Jo,Kg(t)),i.buffers.color.setClear(Jo.r,Jo.g,Jo.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:v,addToRenderList:m,dispose:S}}function cA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(b,F,Y,q,oe){let ae=!1;const te=f(q,Y,F);s!==te&&(s=te,c(s.object)),ae=p(b,q,Y,oe),ae&&_(b,q,Y,oe),oe!==null&&e.update(oe,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,x(b,F,Y,q),oe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function f(b,F,Y){const q=Y.wireframe===!0;let oe=i[b.id];oe===void 0&&(oe={},i[b.id]=oe);let ae=oe[F.id];ae===void 0&&(ae={},oe[F.id]=ae);let te=ae[q];return te===void 0&&(te=h(l()),ae[q]=te),te}function h(b){const F=[],Y=[],q=[];for(let oe=0;oe<n;oe++)F[oe]=0,Y[oe]=0,q[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:q,object:b,attributes:{},index:null}}function p(b,F,Y,q){const oe=s.attributes,ae=F.attributes;let te=0;const K=Y.getAttributes();for(const W in K)if(K[W].location>=0){const Se=oe[W];let Re=ae[W];if(Re===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;te++}return s.attributesNum!==te||s.index!==q}function _(b,F,Y,q){const oe={},ae=F.attributes;let te=0;const K=Y.getAttributes();for(const W in K)if(K[W].location>=0){let Se=ae[W];Se===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),oe[W]=Re,te++}s.attributes=oe,s.attributesNum=te,s.index=q}function v(){const b=s.newAttributes;for(let F=0,Y=b.length;F<Y;F++)b[F]=0}function m(b){d(b,0)}function d(b,F){const Y=s.newAttributes,q=s.enabledAttributes,oe=s.attributeDivisors;Y[b]=1,q[b]===0&&(t.enableVertexAttribArray(b),q[b]=1),oe[b]!==F&&(t.vertexAttribDivisor(b,F),oe[b]=F)}function S(){const b=s.newAttributes,F=s.enabledAttributes;for(let Y=0,q=F.length;Y<q;Y++)F[Y]!==b[Y]&&(t.disableVertexAttribArray(Y),F[Y]=0)}function E(b,F,Y,q,oe,ae,te){te===!0?t.vertexAttribIPointer(b,F,Y,oe,ae):t.vertexAttribPointer(b,F,Y,q,oe,ae)}function x(b,F,Y,q){v();const oe=q.attributes,ae=Y.getAttributes(),te=F.defaultAttributeValues;for(const K in ae){const W=ae[K];if(W.location>=0){let pe=oe[K];if(pe===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){const Se=pe.normalized,Re=pe.itemSize,Be=e.get(pe);if(Be===void 0)continue;const Je=Be.buffer,se=Be.type,xe=Be.bytesPerElement,be=se===t.INT||se===t.UNSIGNED_INT||pe.gpuType===hf;if(pe.isInterleavedBufferAttribute){const H=pe.data,re=H.stride,ce=pe.offset;if(H.isInstancedInterleavedBuffer){for(let le=0;le<W.locationSize;le++)d(W.location+le,H.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let le=0;le<W.locationSize;le++)E(W.location+le,Re/W.locationSize,se,Se,re*xe,(ce+Re/W.locationSize*le)*xe,be)}else{if(pe.isInstancedBufferAttribute){for(let H=0;H<W.locationSize;H++)d(W.location+H,pe.meshPerAttribute);b.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let H=0;H<W.locationSize;H++)m(W.location+H);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let H=0;H<W.locationSize;H++)E(W.location+H,Re/W.locationSize,se,Se,Re*xe,Re/W.locationSize*H*xe,be)}}else if(te!==void 0){const Se=te[K];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(W.location,Se);break;case 3:t.vertexAttrib3fv(W.location,Se);break;case 4:t.vertexAttrib4fv(W.location,Se);break;default:t.vertexAttrib1fv(W.location,Se)}}}}S()}function P(){O();for(const b in i){const F=i[b];for(const Y in F){const q=F[Y];for(const oe in q)u(q[oe].object),delete q[oe];delete F[Y]}delete i[b]}}function L(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const Y in F){const q=F[Y];for(const oe in q)u(q[oe].object),delete q[oe];delete F[Y]}delete i[b.id]}function w(b){for(const F in i){const Y=i[F];if(Y[b.id]===void 0)continue;const q=Y[b.id];for(const oe in q)u(q[oe].object),delete q[oe];delete Y[b.id]}}function O(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:A,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function uA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const O=w===vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==li&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ti&&!O)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:L}}function hA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new gr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let x=d.clippingState||null;l.value=x,x=u(_,h,E,p);for(let P=0;P!==E;++P)x[P]=n[P];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,x=p;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function dA(t){let e=new WeakMap;function n(o,a){return a===qc?o.mapping=gs:a===Yc&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hb(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ts=4,qd=[.125,.215,.35,.446,.526,.582],xr=20,ec=new bf,Yd=new rt;let tc=null,nc=0,ic=0,rc=!1;const _r=(1+Math.sqrt(5))/2,Kr=1/_r,jd=[new $(-_r,Kr,0),new $(_r,Kr,0),new $(-Kr,0,_r),new $(Kr,0,_r),new $(0,_r,-Kr),new $(0,_r,Kr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],pA=new $;class Kd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=pA}=s;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:vo,format:zn,colorSpace:vs,depthBuffer:!1},r=Zd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mA(s)),this._blurMaterial=gA(s,e,n)}return r}_compileMaterial(e){const n=new Ut(this._lodPlanes[0],e);this._renderer.compile(n,ec)}_sceneToCubeUV(e,n,i,r,s){const l=new Pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Yd),f.toneMapping=Yi,f.autoClear=!1;const _=new Ja({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new Ut(new Eo,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(Yd),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;Qo(r,E*x,S>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gs||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ec)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jd[(r-s-1)%jd.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ut(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const d=[];let S=0;for(let w=0;w<xr;++w){const O=w/v,A=Math.exp(-O*O/2);d.push(A),w===0?S+=A:w<m&&(S+=2*A)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-i;const x=this._sizeLods[r],P=3*x*(r>E-ts?r-E+ts:0),L=4*(this._cubeSize-x);Qo(n,P,L,3*x,2*x),l.setRenderTarget(n),l.render(f,ec)}}function mA(t){const e=[],n=[],i=[];let r=t;const s=t-ts+1+qd.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ts?l=qd[o-t+ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let L=0;L<p;L++){const w=L%3*2/3-1,O=L>2?0:-1,A=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];S.set(A,v*_*L),E.set(h,m*_*L);const b=[L,L,L,L,L,L];x.set(b,d*_*L)}const P=new rr;P.setAttribute("position",new si(S,v)),P.setAttribute("uv",new si(E,m)),P.setAttribute("faceIndex",new si(x,d)),e.push(P),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zd(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gA(t,e,n){const i=new Float32Array(xr),r=new $(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Jd(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Qd(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Tf(){return`

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
	`}function _A(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qc||l===Yc,u=l===gs||l===_s;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Kd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Kd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function xA(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,x=S.length;E<x;E+=3){const P=S[E+0],L=S[E+1],w=S[E+2];h.push(P,L,L,w,w,P)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const P=E+0,L=E+1,w=E+2;h.push(P,L,L,w,w,P)}}else return;const m=new(Wg(h)?jg:Yg)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function SA(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let d=0;for(let S=0;S<_;S++)d+=p[S]*v[S];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function yA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function EA(t,e,n){const i=new WeakMap,r=new Lt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*L*4*f),O=new Xg(w,P,L,f);O.type=Ti,O.needsUpdate=!0;const A=x*4;for(let F=0;F<f;F++){const Y=d[F],q=S[F],oe=E[F],ae=P*L*4*F;for(let te=0;te<Y.count;te++){const K=te*A;_===!0&&(r.fromBufferAttribute(Y,te),w[ae+K+0]=r.x,w[ae+K+1]=r.y,w[ae+K+2]=r.z,w[ae+K+3]=0),v===!0&&(r.fromBufferAttribute(q,te),w[ae+K+4]=r.x,w[ae+K+5]=r.y,w[ae+K+6]=r.z,w[ae+K+7]=0),m===!0&&(r.fromBufferAttribute(oe,te),w[ae+K+8]=r.x,w[ae+K+9]=r.y,w[ae+K+10]=r.z,w[ae+K+11]=oe.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new st(P,L)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function MA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const a_=new un,ep=new e_(1,1),l_=new Xg,c_=new jM,u_=new Jg,tp=[],np=[],ip=new Float32Array(16),rp=new Float32Array(9),sp=new Float32Array(4);function Es(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=tp[r];if(s===void 0&&(s=new Float32Array(r),tp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Gt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function el(t,e){let n=np[e];n===void 0&&(n=new Int32Array(e),np[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2fv(this.addr,e),Wt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Gt(n,e))return;t.uniform3fv(this.addr,e),Wt(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4fv(this.addr,e),Wt(n,e)}}function RA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;sp.set(i),t.uniformMatrix2fv(this.addr,!1,sp),Wt(n,i)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;rp.set(i),t.uniformMatrix3fv(this.addr,!1,rp),Wt(n,i)}}function PA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Gt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Wt(n,e)}else{if(Gt(n,i))return;ip.set(i),t.uniformMatrix4fv(this.addr,!1,ip),Wt(n,i)}}function LA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2iv(this.addr,e),Wt(n,e)}}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3iv(this.addr,e),Wt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4iv(this.addr,e),Wt(n,e)}}function NA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Gt(n,e))return;t.uniform2uiv(this.addr,e),Wt(n,e)}}function FA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Gt(n,e))return;t.uniform3uiv(this.addr,e),Wt(n,e)}}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Gt(n,e))return;t.uniform4uiv(this.addr,e),Wt(n,e)}}function kA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ep.compareFunction=Gg,s=ep):s=a_,n.setTexture2D(e||s,r)}function HA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function VA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u_,r)}function zA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l_,r)}function GA(t){switch(t){case 5126:return bA;case 35664:return TA;case 35665:return wA;case 35666:return AA;case 35674:return RA;case 35675:return CA;case 35676:return PA;case 5124:case 35670:return LA;case 35667:case 35671:return IA;case 35668:case 35672:return DA;case 35669:case 35673:return UA;case 5125:return NA;case 36294:return OA;case 36295:return FA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return kA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return zA}}function WA(t,e){t.uniform1fv(this.addr,e)}function XA(t,e){const n=Es(e,this.size,2);t.uniform2fv(this.addr,n)}function $A(t,e){const n=Es(e,this.size,3);t.uniform3fv(this.addr,n)}function qA(t,e){const n=Es(e,this.size,4);t.uniform4fv(this.addr,n)}function YA(t,e){const n=Es(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jA(t,e){const n=Es(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function KA(t,e){const n=Es(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ZA(t,e){t.uniform1iv(this.addr,e)}function JA(t,e){t.uniform2iv(this.addr,e)}function QA(t,e){t.uniform3iv(this.addr,e)}function e1(t,e){t.uniform4iv(this.addr,e)}function t1(t,e){t.uniform1uiv(this.addr,e)}function n1(t,e){t.uniform2uiv(this.addr,e)}function i1(t,e){t.uniform3uiv(this.addr,e)}function r1(t,e){t.uniform4uiv(this.addr,e)}function s1(t,e,n){const i=this.cache,r=e.length,s=el(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a_,s[o])}function o1(t,e,n){const i=this.cache,r=e.length,s=el(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||c_,s[o])}function a1(t,e,n){const i=this.cache,r=e.length,s=el(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||u_,s[o])}function l1(t,e,n){const i=this.cache,r=e.length,s=el(n,r);Gt(i,s)||(t.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||l_,s[o])}function c1(t){switch(t){case 5126:return WA;case 35664:return XA;case 35665:return $A;case 35666:return qA;case 35674:return YA;case 35675:return jA;case 35676:return KA;case 5124:case 35670:return ZA;case 35667:case 35671:return JA;case 35668:case 35672:return QA;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=GA(n.type)}}class f1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=c1(n.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function op(t,e){t.seq.push(e),t.map[e.id]=e}function d1(t,e,n){const i=t.name,r=i.length;for(sc.lastIndex=0;;){const s=sc.exec(i),o=sc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){op(n,c===void 0?new u1(a,t,e):new f1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new h1(a),op(n,f)),n=f}}}class fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);d1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ap(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const p1=37297;let m1=0;function g1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const lp=new Ke;function _1(t){lt._getMatrix(lp,lt.workingColorSpace,t);const e=`mat3( ${lp.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Ta:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function cp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+g1(t.getShaderSource(e),o)}else return r}function v1(t,e){const n=_1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function x1(t,e){let n;switch(e){case yM:n="Linear";break;case EM:n="Reinhard";break;case MM:n="Cineon";break;case bM:n="ACESFilmic";break;case wM:n="AgX";break;case AM:n="Neutral";break;case TM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ea=new $;function S1(){lt.getLuminanceCoefficients(ea);const t=ea.x.toFixed(4),e=ea.y.toFixed(4),n=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function E1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function M1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fs(t){return t!==""}function up(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(t){return t.replace(b1,w1)}const T1=new Map;function w1(t,e){let n=Ze[e];if(n===void 0){const i=T1.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mu(n)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hp(t){return t.replace(A1,R1)}function R1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function C1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Dg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function P1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function L1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function I1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ka:e="ENVMAP_BLENDING_MULTIPLY";break;case xM:e="ENVMAP_BLENDING_MIX";break;case SM:e="ENVMAP_BLENDING_ADD";break}return e}function D1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function U1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=C1(n),c=P1(n),u=L1(n),f=I1(n),h=D1(n),p=y1(n),_=E1(s),v=r.createProgram();let m,d,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Fs).join(`
`),d.length>0&&(d+=`
`)):(m=[dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),d=[dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Yi?x1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,v1("linearToOutputTexel",n.outputColorSpace),S1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Mu(o),o=up(o,n),o=fp(o,n),a=Mu(a),a=up(a,n),a=fp(a,n),o=hp(o),a=hp(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=S+m+o,x=S+d+a,P=ap(r,r.VERTEX_SHADER,E),L=ap(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,L),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(F){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),q=r.getShaderInfoLog(P).trim(),oe=r.getShaderInfoLog(L).trim();let ae=!0,te=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,L);else{const K=cp(r,P,"vertex"),W=cp(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+K+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||oe==="")&&(te=!1);te&&(F.diagnostics={runnable:ae,programLog:Y,vertexShader:{log:q,prefix:m},fragmentShader:{log:oe,prefix:d}})}r.deleteShader(P),r.deleteShader(L),O=new fa(r,v),A=M1(r,v)}let O;this.getUniforms=function(){return O===void 0&&w(this),O};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,p1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=L,this}let N1=0;class O1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new F1(e),n.set(e,i)),i}}class F1{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}}function B1(t,e,n,i,r,s,o){const a=new yf,l=new O1,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,b,F,Y,q){const oe=Y.fog,ae=q.geometry,te=A.isMeshStandardMaterial?Y.environment:null,K=(A.isMeshStandardMaterial?n:e).get(A.envMap||te),W=K&&K.mapping===Za?K.image.height:null,pe=_[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Se=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Re=Se!==void 0?Se.length:0;let Be=0;ae.morphAttributes.position!==void 0&&(Be=1),ae.morphAttributes.normal!==void 0&&(Be=2),ae.morphAttributes.color!==void 0&&(Be=3);let Je,se,xe,be;if(pe){const mt=ei[pe];Je=mt.vertexShader,se=mt.fragmentShader}else Je=A.vertexShader,se=A.fragmentShader,l.update(A),xe=l.getVertexShaderID(A),be=l.getFragmentShaderID(A);const H=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),ce=q.isInstancedMesh===!0,le=q.isBatchedMesh===!0,ke=!!A.map,D=!!A.matcap,U=!!K,y=!!A.aoMap,ne=!!A.lightMap,Z=!!A.bumpMap,Q=!!A.normalMap,T=!!A.displacementMap,C=!!A.emissiveMap,N=!!A.metalnessMap,k=!!A.roughnessMap,me=A.anisotropy>0,M=A.clearcoat>0,g=A.dispersion>0,I=A.iridescence>0,V=A.sheen>0,j=A.transmission>0,X=me&&!!A.anisotropyMap,Ee=M&&!!A.clearcoatMap,he=M&&!!A.clearcoatNormalMap,Te=M&&!!A.clearcoatRoughnessMap,Ce=I&&!!A.iridescenceMap,fe=I&&!!A.iridescenceThicknessMap,Pe=V&&!!A.sheenColorMap,Ue=V&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,ye=!!A.specularColorMap,Xe=!!A.specularIntensityMap,B=j&&!!A.transmissionMap,we=j&&!!A.thicknessMap,de=!!A.gradientMap,De=!!A.alphaMap,ge=A.alphaTest>0,ue=!!A.alphaHash,Oe=!!A.extensions;let qe=Yi;A.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(qe=t.toneMapping);const Et={shaderID:pe,shaderType:A.type,shaderName:A.name,vertexShader:Je,fragmentShader:se,defines:A.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:le,batchingColor:le&&q._colorsTexture!==null,instancing:ce,instancingColor:ce&&q.instanceColor!==null,instancingMorph:ce&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:vs,alphaToCoverage:!!A.alphaToCoverage,map:ke,matcap:D,envMap:U,envMapMode:U&&K.mapping,envMapCubeUVHeight:W,aoMap:y,lightMap:ne,bumpMap:Z,normalMap:Q,displacementMap:h&&T,emissiveMap:C,normalMapObjectSpace:Q&&A.normalMapType===LM,normalMapTangentSpace:Q&&A.normalMapType===vf,metalnessMap:N,roughnessMap:k,anisotropy:me,anisotropyMap:X,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:g,iridescence:I,iridescenceMap:Ce,iridescenceThicknessMap:fe,sheen:V,sheenColorMap:Pe,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:ye,specularIntensityMap:Xe,transmission:j,transmissionMap:B,thicknessMap:we,gradientMap:de,opaque:A.transparent===!1&&A.blending===os&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:ue,combine:A.combine,mapUv:ke&&v(A.map.channel),aoMapUv:y&&v(A.aoMap.channel),lightMapUv:ne&&v(A.lightMap.channel),bumpMapUv:Z&&v(A.bumpMap.channel),normalMapUv:Q&&v(A.normalMap.channel),displacementMapUv:T&&v(A.displacementMap.channel),emissiveMapUv:C&&v(A.emissiveMap.channel),metalnessMapUv:N&&v(A.metalnessMap.channel),roughnessMapUv:k&&v(A.roughnessMap.channel),anisotropyMapUv:X&&v(A.anisotropyMap.channel),clearcoatMapUv:Ee&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(A.sheenRoughnessMap.channel),specularMapUv:Ne&&v(A.specularMap.channel),specularColorMapUv:ye&&v(A.specularColorMap.channel),specularIntensityMapUv:Xe&&v(A.specularIntensityMap.channel),transmissionMapUv:B&&v(A.transmissionMap.channel),thicknessMapUv:we&&v(A.thicknessMap.channel),alphaMapUv:De&&v(A.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Q||me),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ae.attributes.uv&&(ke||De),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:qe,decodeVideoTexture:ke&&A.map.isVideoTexture===!0&&lt.getTransfer(A.map.colorSpace)===vt,decodeVideoTextureEmissive:C&&A.emissiveMap.isVideoTexture===!0&&lt.getTransfer(A.emissiveMap.colorSpace)===vt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ei,flipSided:A.side===pn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Oe&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&A.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function d(A){const b=[];if(A.shaderID?b.push(A.shaderID):(b.push(A.customVertexShaderID),b.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)b.push(F),b.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(S(b,A),E(b,A),b.push(t.outputColorSpace)),b.push(A.customProgramCacheKey),b.join()}function S(A,b){A.push(b.precision),A.push(b.outputColorSpace),A.push(b.envMapMode),A.push(b.envMapCubeUVHeight),A.push(b.mapUv),A.push(b.alphaMapUv),A.push(b.lightMapUv),A.push(b.aoMapUv),A.push(b.bumpMapUv),A.push(b.normalMapUv),A.push(b.displacementMapUv),A.push(b.emissiveMapUv),A.push(b.metalnessMapUv),A.push(b.roughnessMapUv),A.push(b.anisotropyMapUv),A.push(b.clearcoatMapUv),A.push(b.clearcoatNormalMapUv),A.push(b.clearcoatRoughnessMapUv),A.push(b.iridescenceMapUv),A.push(b.iridescenceThicknessMapUv),A.push(b.sheenColorMapUv),A.push(b.sheenRoughnessMapUv),A.push(b.specularMapUv),A.push(b.specularColorMapUv),A.push(b.specularIntensityMapUv),A.push(b.transmissionMapUv),A.push(b.thicknessMapUv),A.push(b.combine),A.push(b.fogExp2),A.push(b.sizeAttenuation),A.push(b.morphTargetsCount),A.push(b.morphAttributeCount),A.push(b.numDirLights),A.push(b.numPointLights),A.push(b.numSpotLights),A.push(b.numSpotLightMaps),A.push(b.numHemiLights),A.push(b.numRectAreaLights),A.push(b.numDirLightShadows),A.push(b.numPointLightShadows),A.push(b.numSpotLightShadows),A.push(b.numSpotLightShadowsWithMaps),A.push(b.numLightProbes),A.push(b.shadowMapType),A.push(b.toneMapping),A.push(b.numClippingPlanes),A.push(b.numClipIntersection),A.push(b.depthPacking)}function E(A,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),A.push(a.mask)}function x(A){const b=_[A.type];let F;if(b){const Y=ei[b];F=lb.clone(Y.uniforms)}else F=A.uniforms;return F}function P(A,b){let F;for(let Y=0,q=u.length;Y<q;Y++){const oe=u[Y];if(oe.cacheKey===b){F=oe,++F.usedTimes;break}}return F===void 0&&(F=new U1(t,b,A,s),u.push(F)),F}function L(A){if(--A.usedTimes===0){const b=u.indexOf(A);u[b]=u[u.length-1],u.pop(),A.destroy()}}function w(A){l.remove(A)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:P,releaseProgram:L,releaseShaderCache:w,programs:u,dispose:O}}function k1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function H1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function pp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,_,v,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||H1),i.length>1&&i.sort(h||pp),r.length>1&&r.sort(h||pp)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function V1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new mp,t.set(i,[o])):r>=s.length?(o=new mp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function z1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new rt};break;case"SpotLight":n={position:new $,direction:new $,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function G1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let W1=0;function X1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $1(t){const e=new z1,n=G1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new At,o=new At;function a(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,S=0,E=0,x=0,P=0,L=0,w=0;c.sort(X1);for(let A=0,b=c.length;A<b;A++){const F=c[A],Y=F.color,q=F.intensity,oe=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Y.r*q,f+=Y.g*q,h+=Y.b*q;else if(F.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(F.sh.coefficients[te],q);w++}else if(F.isDirectionalLight){const te=e.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,W=n.get(F);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=te,p++}else if(F.isSpotLight){const te=e.get(F);te.position.setFromMatrixPosition(F.matrixWorld),te.color.copy(Y).multiplyScalar(q),te.distance=oe,te.coneCos=Math.cos(F.angle),te.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),te.decay=F.decay,i.spot[v]=te;const K=F.shadow;if(F.map&&(i.spotLightMap[P]=F.map,P++,K.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[v]=K.matrix,F.castShadow){const W=n.get(F);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=ae,x++}v++}else if(F.isRectAreaLight){const te=e.get(F);te.color.copy(Y).multiplyScalar(q),te.halfWidth.set(F.width*.5,0,0),te.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=te,m++}else if(F.isPointLight){const te=e.get(F);if(te.color.copy(F.color).multiplyScalar(F.intensity),te.distance=F.distance,te.decay=F.decay,F.castShadow){const K=F.shadow,W=n.get(F);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=F.shadow.matrix,E++}i.point[_]=te,_++}else if(F.isHemisphereLight){const te=e.get(F);te.skyColor.copy(F.color).multiplyScalar(q),te.groundColor.copy(F.groundColor).multiplyScalar(q),i.hemi[d]=te,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==S||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==P||O.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+P-L,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=w,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=S,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=P,O.numLightProbes=w,i.version=W1++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const E=c[d];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function gp(t){const e=new $1(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function q1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new gp(t),e.set(r,[a])):s>=o.length?(a=new gp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function K1(t,e,n){let i=new Ef;const r=new st,s=new st,o=new Lt,a=new gb({depthPacking:PM}),l=new _b,c={},u=n.maxTextureSize,f={[Ki]:pn,[pn]:Ki,[Ei]:Ei},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Y1,fragmentShader:j1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new rr;_.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dg;let d=this.type;this.render=function(L,w,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const A=t.getRenderTarget(),b=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(qi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=d!==vi&&this.type===vi,oe=d===vi&&this.type!==vi;for(let ae=0,te=L.length;ae<te;ae++){const K=L[ae],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const pe=W.getFrameExtents();if(r.multiply(pe),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,W.mapSize.y=s.y)),W.map===null||q===!0||oe===!0){const Re=this.type!==vi?{minFilter:Xn,magFilter:Xn}:{};W.map!==null&&W.map.dispose(),W.map=new Pr(r.x,r.y,Re),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const Se=W.getViewportCount();for(let Re=0;Re<Se;Re++){const Be=W.getViewport(Re);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),Y.viewport(o),W.updateMatrices(K,Re),i=W.getFrustum(),x(w,O,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&S(W,O),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(A,b,F)};function S(L,w){const O=e.update(v);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(w,null,O,h,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(w,null,O,p,v,null)}function E(L,w,O,A){let b=null;const F=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)b=F;else if(b=O.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const Y=b.uuid,q=w.uuid;let oe=c[Y];oe===void 0&&(oe={},c[Y]=oe);let ae=oe[q];ae===void 0&&(ae=b.clone(),oe[q]=ae,w.addEventListener("dispose",P)),b=ae}if(b.visible=w.visible,b.wireframe=w.wireframe,A===vi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:f[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,O.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=t.properties.get(b);Y.light=O}return b}function x(L,w,O,A,b){if(L.visible===!1)return;if(L.layers.test(w.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===vi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const q=e.update(L),oe=L.material;if(Array.isArray(oe)){const ae=q.groups;for(let te=0,K=ae.length;te<K;te++){const W=ae[te],pe=oe[W.materialIndex];if(pe&&pe.visible){const Se=E(L,pe,A,b);L.onBeforeShadow(t,L,w,O,q,Se,W),t.renderBufferDirect(O,null,q,Se,L,W),L.onAfterShadow(t,L,w,O,q,Se,W)}}}else if(oe.visible){const ae=E(L,oe,A,b);L.onBeforeShadow(t,L,w,O,q,ae,null),t.renderBufferDirect(O,null,q,ae,L,null),L.onAfterShadow(t,L,w,O,q,ae,null)}}const Y=L.children;for(let q=0,oe=Y.length;q<oe;q++)x(Y[q],w,O,A,b)}function P(L){L.target.removeEventListener("dispose",P);for(const O in c){const A=c[O],b=L.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}const Z1={[Hc]:Vc,[zc]:Xc,[Gc]:$c,[ms]:Wc,[Vc]:Hc,[Xc]:zc,[$c]:Gc,[Wc]:ms};function J1(t,e){function n(){let B=!1;const we=new Lt;let de=null;const De=new Lt(0,0,0,0);return{setMask:function(ge){de!==ge&&!B&&(t.colorMask(ge,ge,ge,ge),de=ge)},setLocked:function(ge){B=ge},setClear:function(ge,ue,Oe,qe,Et){Et===!0&&(ge*=qe,ue*=qe,Oe*=qe),we.set(ge,ue,Oe,qe),De.equals(we)===!1&&(t.clearColor(ge,ue,Oe,qe),De.copy(we))},reset:function(){B=!1,de=null,De.set(-1,0,0,0)}}}function i(){let B=!1,we=!1,de=null,De=null,ge=null;return{setReversed:function(ue){if(we!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const qe=ge;ge=null,this.setClear(qe)}},getReversed:function(){return we},setTest:function(ue){ue?H(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){de!==ue&&!B&&(t.depthMask(ue),de=ue)},setFunc:function(ue){if(we&&(ue=Z1[ue]),De!==ue){switch(ue){case Hc:t.depthFunc(t.NEVER);break;case Vc:t.depthFunc(t.ALWAYS);break;case zc:t.depthFunc(t.LESS);break;case ms:t.depthFunc(t.LEQUAL);break;case Gc:t.depthFunc(t.EQUAL);break;case Wc:t.depthFunc(t.GEQUAL);break;case Xc:t.depthFunc(t.GREATER);break;case $c:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){B=ue},setClear:function(ue){ge!==ue&&(we&&(ue=1-ue),t.clearDepth(ue),ge=ue)},reset:function(){B=!1,de=null,De=null,ge=null,we=!1}}}function r(){let B=!1,we=null,de=null,De=null,ge=null,ue=null,Oe=null,qe=null,Et=null;return{setTest:function(mt){B||(mt?H(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(mt){we!==mt&&!B&&(t.stencilMask(mt),we=mt)},setFunc:function(mt,Nn,ci){(de!==mt||De!==Nn||ge!==ci)&&(t.stencilFunc(mt,Nn,ci),de=mt,De=Nn,ge=ci)},setOp:function(mt,Nn,ci){(ue!==mt||Oe!==Nn||qe!==ci)&&(t.stencilOp(mt,Nn,ci),ue=mt,Oe=Nn,qe=ci)},setLocked:function(mt){B=mt},setClear:function(mt){Et!==mt&&(t.clearStencil(mt),Et=mt)},reset:function(){B=!1,we=null,de=null,De=null,ge=null,ue=null,Oe=null,qe=null,Et=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,S=null,E=null,x=null,P=null,L=null,w=new rt(0,0,0),O=0,A=!1,b=null,F=null,Y=null,q=null,oe=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,K=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),te=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),te=K>=2);let pe=null,Se={};const Re=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Je=new Lt().fromArray(Re),se=new Lt().fromArray(Be);function xe(B,we,de,De){const ge=new Uint8Array(4),ue=t.createTexture();t.bindTexture(B,ue),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<de;Oe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(we+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ue}const be={};be[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(ms),Z(!1),Q(gd),H(t.CULL_FACE),y(qi);function H(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function re(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function ce(B,we){return f[B]!==we?(t.bindFramebuffer(B,we),f[B]=we,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function le(B,we){let de=p,De=!1;if(B){de=h.get(we),de===void 0&&(de=[],h.set(we,de));const ge=B.textures;if(de.length!==ge.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Oe=ge.length;ue<Oe;ue++)de[ue]=t.COLOR_ATTACHMENT0+ue;de.length=ge.length,De=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,De=!0);De&&t.drawBuffers(de)}function ke(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const D={[vr]:t.FUNC_ADD,[nM]:t.FUNC_SUBTRACT,[iM]:t.FUNC_REVERSE_SUBTRACT};D[rM]=t.MIN,D[sM]=t.MAX;const U={[oM]:t.ZERO,[aM]:t.ONE,[lM]:t.SRC_COLOR,[Bc]:t.SRC_ALPHA,[pM]:t.SRC_ALPHA_SATURATE,[hM]:t.DST_COLOR,[uM]:t.DST_ALPHA,[cM]:t.ONE_MINUS_SRC_COLOR,[kc]:t.ONE_MINUS_SRC_ALPHA,[dM]:t.ONE_MINUS_DST_COLOR,[fM]:t.ONE_MINUS_DST_ALPHA,[mM]:t.CONSTANT_COLOR,[gM]:t.ONE_MINUS_CONSTANT_COLOR,[_M]:t.CONSTANT_ALPHA,[vM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(B,we,de,De,ge,ue,Oe,qe,Et,mt){if(B===qi){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),B!==tM){if(B!==m||mt!==A){if((d!==vr||x!==vr)&&(t.blendEquation(t.FUNC_ADD),d=vr,x=vr),mt)switch(B){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _d:t.blendFunc(t.ONE,t.ONE);break;case vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _d:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,E=null,P=null,L=null,w.set(0,0,0),O=0,m=B,A=mt}return}ge=ge||we,ue=ue||de,Oe=Oe||De,(we!==d||ge!==x)&&(t.blendEquationSeparate(D[we],D[ge]),d=we,x=ge),(de!==S||De!==E||ue!==P||Oe!==L)&&(t.blendFuncSeparate(U[de],U[De],U[ue],U[Oe]),S=de,E=De,P=ue,L=Oe),(qe.equals(w)===!1||Et!==O)&&(t.blendColor(qe.r,qe.g,qe.b,Et),w.copy(qe),O=Et),m=B,A=!1}function ne(B,we){B.side===Ei?re(t.CULL_FACE):H(t.CULL_FACE);let de=B.side===pn;we&&(de=!de),Z(de),B.blending===os&&B.transparent===!1?y(qi):y(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const De=B.stencilWrite;a.setTest(De),De&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),C(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(B){b!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),b=B)}function Q(B){B!==QE?(H(t.CULL_FACE),B!==F&&(B===gd?t.cullFace(t.BACK):B===eM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),F=B}function T(B){B!==Y&&(te&&t.lineWidth(B),Y=B)}function C(B,we,de){B?(H(t.POLYGON_OFFSET_FILL),(q!==we||oe!==de)&&(t.polygonOffset(we,de),q=we,oe=de)):re(t.POLYGON_OFFSET_FILL)}function N(B){B?H(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function k(B){B===void 0&&(B=t.TEXTURE0+ae-1),pe!==B&&(t.activeTexture(B),pe=B)}function me(B,we,de){de===void 0&&(pe===null?de=t.TEXTURE0+ae-1:de=pe);let De=Se[de];De===void 0&&(De={type:void 0,texture:void 0},Se[de]=De),(De.type!==B||De.texture!==we)&&(pe!==de&&(t.activeTexture(de),pe=de),t.bindTexture(B,we||be[B]),De.type=B,De.texture=we)}function M(){const B=Se[pe];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){Je.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Je.copy(B))}function Ue(B){se.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),se.copy(B))}function Ne(B,we){let de=c.get(we);de===void 0&&(de=new WeakMap,c.set(we,de));let De=de.get(B);De===void 0&&(De=t.getUniformBlockIndex(we,B.name),de.set(B,De))}function ye(B,we){const De=c.get(we).get(B);l.get(we)!==De&&(t.uniformBlockBinding(we,De,B.__bindingPointIndex),l.set(we,De))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},pe=null,Se={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,S=null,E=null,x=null,P=null,L=null,w=new rt(0,0,0),O=0,A=!1,b=null,F=null,Y=null,q=null,oe=null,Je.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:re,bindFramebuffer:ce,drawBuffers:le,useProgram:ke,setBlending:y,setMaterial:ne,setFlipSided:Z,setCullFace:Q,setLineWidth:T,setPolygonOffset:C,setScissorTest:N,activeTexture:k,bindTexture:me,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ce,texImage3D:fe,updateUBOMapping:Ne,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Te,texSubImage2D:V,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:Pe,viewport:Ue,reset:Xe}}function Q1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):lo("canvas")}function v(M,g,I){let V=1;const j=me(M);if((j.width>I||j.height>I)&&(V=I/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor(V*j.width),Ee=Math.floor(V*j.height);f===void 0&&(f=_(X,Ee));const he=g?_(X,Ee):f;return he.width=X,he.height=Ee,he.getContext("2d").drawImage(M,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Ee+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){t.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,g,I,V,j=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===t.RED&&(I===t.FLOAT&&(X=t.R32F),I===t.HALF_FLOAT&&(X=t.R16F),I===t.UNSIGNED_BYTE&&(X=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.R8UI),I===t.UNSIGNED_SHORT&&(X=t.R16UI),I===t.UNSIGNED_INT&&(X=t.R32UI),I===t.BYTE&&(X=t.R8I),I===t.SHORT&&(X=t.R16I),I===t.INT&&(X=t.R32I)),g===t.RG&&(I===t.FLOAT&&(X=t.RG32F),I===t.HALF_FLOAT&&(X=t.RG16F),I===t.UNSIGNED_BYTE&&(X=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RG8UI),I===t.UNSIGNED_SHORT&&(X=t.RG16UI),I===t.UNSIGNED_INT&&(X=t.RG32UI),I===t.BYTE&&(X=t.RG8I),I===t.SHORT&&(X=t.RG16I),I===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGB8UI),I===t.UNSIGNED_SHORT&&(X=t.RGB16UI),I===t.UNSIGNED_INT&&(X=t.RGB32UI),I===t.BYTE&&(X=t.RGB8I),I===t.SHORT&&(X=t.RGB16I),I===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),I===t.UNSIGNED_INT&&(X=t.RGBA32UI),I===t.BYTE&&(X=t.RGBA8I),I===t.SHORT&&(X=t.RGBA16I),I===t.INT&&(X=t.RGBA32I)),g===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),g===t.RGBA){const Ee=j?Ta:lt.getTransfer(V);I===t.FLOAT&&(X=t.RGBA32F),I===t.HALF_FLOAT&&(X=t.RGBA16F),I===t.UNSIGNED_BYTE&&(X=Ee===vt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(M,g){let I;return M?g===null||g===Cr||g===so?I=t.DEPTH24_STENCIL8:g===Ti?I=t.DEPTH32F_STENCIL8:g===ro&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cr||g===so?I=t.DEPTH_COMPONENT24:g===Ti?I=t.DEPTH_COMPONENT32F:g===ro&&(I=t.DEPTH_COMPONENT16),I}function P(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Xn&&M.minFilter!==ni?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function L(M){const g=M.target;g.removeEventListener("dispose",L),O(g),g.isVideoTexture&&u.delete(g)}function w(M){const g=M.target;g.removeEventListener("dispose",w),b(g)}function O(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,V=h.get(I);if(V){const j=V[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(M),Object.keys(V).length===0&&h.delete(I)}i.remove(M)}function A(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const I=M.source,V=h.get(I);delete V[g.__cacheKey],o.memory.textures--}function b(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let j=0;j<g.__webglFramebuffer[V].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[V][j]);else t.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)t.deleteFramebuffer(g.__webglFramebuffer[V]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=M.textures;for(let V=0,j=I.length;V<j;V++){const X=i.get(I[V]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[V])}i.remove(M)}let F=0;function Y(){F=0}function q(){const M=F;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function oe(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ae(M,g){const I=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(I,M,g);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function te(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){be(I,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function K(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){be(I,M,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function W(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){H(I,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const pe={[Rr]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[jc]:t.MIRRORED_REPEAT},Se={[Xn]:t.NEAREST,[RM]:t.NEAREST_MIPMAP_NEAREST,[Do]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[Rl]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},Re={[IM]:t.NEVER,[BM]:t.ALWAYS,[DM]:t.LESS,[Gg]:t.LEQUAL,[UM]:t.EQUAL,[FM]:t.GEQUAL,[NM]:t.GREATER,[OM]:t.NOTEQUAL};function Be(M,g){if(g.type===Ti&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ni||g.magFilter===Rl||g.magFilter===Do||g.magFilter===Er||g.minFilter===ni||g.minFilter===Rl||g.minFilter===Do||g.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,pe[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,pe[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,pe[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Se[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Xn||g.minFilter!==Do&&g.minFilter!==Er||g.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Je(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",L));const V=g.source;let j=h.get(V);j===void 0&&(j={},h.set(V,j));const X=oe(g);if(X!==M.__cacheKey){j[X]===void 0&&(j[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[X].usedTimes++;const Ee=j[M.__cacheKey];Ee!==void 0&&(j[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&A(g)),M.__cacheKey=X,M.__webglTexture=j[X].texture}return I}function se(M,g,I){return Math.floor(Math.floor(M/I)/g)}function xe(M,g,I,V){const X=M.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,V,g.data);else{X.sort((fe,Pe)=>fe.start-Pe.start);let Ee=0;for(let fe=1;fe<X.length;fe++){const Pe=X[Ee],Ue=X[fe],Ne=Pe.start+Pe.count,ye=se(Ue.start,g.width,4),Xe=se(Pe.start,g.width,4);Ue.start<=Ne+1&&ye===Xe&&se(Ue.start+Ue.count-1,g.width,4)===ye?Pe.count=Math.max(Pe.count,Ue.start+Ue.count-Pe.start):(++Ee,X[Ee]=Ue)}X.length=Ee+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let fe=0,Pe=X.length;fe<Pe;fe++){const Ue=X[fe],Ne=Math.floor(Ue.start/4),ye=Math.ceil(Ue.count/4),Xe=Ne%g.width,B=Math.floor(Ne/g.width),we=ye,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Xe,B,we,de,I,V,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function be(M,g,I){let V=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=t.TEXTURE_3D);const j=Je(M,g),X=g.source;n.bindTexture(V,M.__webglTexture,t.TEXTURE0+I);const Ee=i.get(X);if(X.version!==Ee.__version||j===!0){n.activeTexture(t.TEXTURE0+I);const he=lt.getPrimaries(lt.workingColorSpace),Te=g.colorSpace===Wi?null:lt.getPrimaries(g.colorSpace),Ce=g.colorSpace===Wi||he===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let fe=v(g.image,!1,r.maxTextureSize);fe=k(g,fe);const Pe=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type);let Ne=E(g.internalFormat,Pe,Ue,g.colorSpace,g.isVideoTexture);Be(V,g);let ye;const Xe=g.mipmaps,B=g.isVideoTexture!==!0,we=Ee.__version===void 0||j===!0,de=X.dataReady,De=P(g,fe);if(g.isDepthTexture)Ne=x(g.format===ao,g.type),we&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Pe,Ue,null));else if(g.isDataTexture)if(Xe.length>0){B&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,Xe[0].width,Xe[0].height);for(let ge=0,ue=Xe.length;ge<ue;ge++)ye=Xe[ge],B?de&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Pe,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,Pe,Ue,ye.data);g.generateMipmaps=!1}else B?(we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,fe.width,fe.height),de&&xe(g,fe,Pe,Ue)):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Pe,Ue,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){B&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,Xe[0].width,Xe[0].height,fe.depth);for(let ge=0,ue=Xe.length;ge<ue;ge++)if(ye=Xe[ge],g.format!==zn)if(Pe!==null)if(B){if(de)if(g.layerUpdates.size>0){const Oe=$d(ye.width,ye.height,g.format,g.type);for(const qe of g.layerUpdates){const Et=ye.data.subarray(qe*Oe/ye.data.BYTES_PER_ELEMENT,(qe+1)*Oe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,qe,ye.width,ye.height,1,Pe,Et)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Pe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Ne,ye.width,ye.height,fe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Pe,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Ne,ye.width,ye.height,fe.depth,0,Pe,Ue,ye.data)}else{B&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,Xe[0].width,Xe[0].height);for(let ge=0,ue=Xe.length;ge<ue;ge++)ye=Xe[ge],g.format!==zn?Pe!==null?B?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Pe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?de&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Pe,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,Pe,Ue,ye.data)}else if(g.isDataArrayTexture)if(B){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,fe.width,fe.height,fe.depth),de)if(g.layerUpdates.size>0){const ge=$d(fe.width,fe.height,g.format,g.type);for(const ue of g.layerUpdates){const Oe=fe.data.subarray(ue*ge/fe.data.BYTES_PER_ELEMENT,(ue+1)*ge/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Pe,Ue,Oe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Pe,Ue,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Pe,Ue,fe.data);else if(g.isData3DTexture)B?(we&&n.texStorage3D(t.TEXTURE_3D,De,Ne,fe.width,fe.height,fe.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Pe,Ue,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Pe,Ue,fe.data);else if(g.isFramebufferTexture){if(we)if(B)n.texStorage2D(t.TEXTURE_2D,De,Ne,fe.width,fe.height);else{let ge=fe.width,ue=fe.height;for(let Oe=0;Oe<De;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Ne,ge,ue,0,Pe,Ue,null),ge>>=1,ue>>=1}}else if(Xe.length>0){if(B&&we){const ge=me(Xe[0]);n.texStorage2D(t.TEXTURE_2D,De,Ne,ge.width,ge.height)}for(let ge=0,ue=Xe.length;ge<ue;ge++)ye=Xe[ge],B?de&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Pe,Ue,ye):n.texImage2D(t.TEXTURE_2D,ge,Ne,Pe,Ue,ye);g.generateMipmaps=!1}else if(B){if(we){const ge=me(fe);n.texStorage2D(t.TEXTURE_2D,De,Ne,ge.width,ge.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Ue,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Pe,Ue,fe);m(g)&&d(V),Ee.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function H(M,g,I){if(g.image.length!==6)return;const V=Je(M,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);const X=i.get(j);if(j.version!==X.__version||V===!0){n.activeTexture(t.TEXTURE0+I);const Ee=lt.getPrimaries(lt.workingColorSpace),he=g.colorSpace===Wi?null:lt.getPrimaries(g.colorSpace),Te=g.colorSpace===Wi||Ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Pe=[];for(let ue=0;ue<6;ue++)!Ce&&!fe?Pe[ue]=v(g.image[ue],!0,r.maxCubemapSize):Pe[ue]=fe?g.image[ue].image:g.image[ue],Pe[ue]=k(g,Pe[ue]);const Ue=Pe[0],Ne=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),Xe=E(g.internalFormat,Ne,ye,g.colorSpace),B=g.isVideoTexture!==!0,we=X.__version===void 0||V===!0,de=j.dataReady;let De=P(g,Ue);Be(t.TEXTURE_CUBE_MAP,g);let ge;if(Ce){B&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Xe,Ue.width,Ue.height);for(let ue=0;ue<6;ue++){ge=Pe[ue].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const qe=ge[Oe];g.format!==zn?Ne!==null?B?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,qe.width,qe.height,Ne,qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,Xe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,qe.width,qe.height,Ne,ye,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,Xe,qe.width,qe.height,0,Ne,ye,qe.data)}}}else{if(ge=g.mipmaps,B&&we){ge.length>0&&De++;const ue=me(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Xe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){B?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe[ue].width,Pe[ue].height,Ne,ye,Pe[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,Pe[ue].width,Pe[ue].height,0,Ne,ye,Pe[ue].data);for(let Oe=0;Oe<ge.length;Oe++){const Et=ge[Oe].image[ue].image;B?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Et.width,Et.height,Ne,ye,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,Xe,Et.width,Et.height,0,Ne,ye,Et.data)}}else{B?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,ye,Pe[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Xe,Ne,ye,Pe[ue]);for(let Oe=0;Oe<ge.length;Oe++){const qe=ge[Oe];B?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Ne,ye,qe.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,Xe,Ne,ye,qe.image[ue])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),X.__version=j.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function re(M,g,I,V,j,X){const Ee=s.convert(I.format,I.colorSpace),he=s.convert(I.type),Te=E(I.internalFormat,Ee,he,I.colorSpace),Ce=i.get(g),fe=i.get(I);if(fe.__renderTarget=g,!Ce.__hasExternalTextures){const Pe=Math.max(1,g.width>>X),Ue=Math.max(1,g.height>>X);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,X,Te,Pe,Ue,g.depth,0,Ee,he,null):n.texImage2D(j,X,Te,Pe,Ue,0,Ee,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,fe.__webglTexture,0,T(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,j,fe.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(M,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const V=g.depthTexture,j=V&&V.isDepthTexture?V.type:null,X=x(g.stencilBuffer,j),Ee=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=T(g);C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,X,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,X,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,X,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,M)}else{const V=g.textures;for(let j=0;j<V.length;j++){const X=V[j],Ee=s.convert(X.format,X.colorSpace),he=s.convert(X.type),Te=E(X.internalFormat,Ee,he,X.colorSpace),Ce=T(g);I&&C(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Te,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const j=V.__webglTexture,X=T(g);if(g.depthTexture.format===oo)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(g.depthTexture.format===ao)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ke(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const V=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=V}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=M.texture.mipmaps;V&&V.length>0?le(g.__webglFramebuffer[0],M):le(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=t.createRenderbuffer(),ce(g.__webglDepthbuffer[V],M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}}else{const V=M.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ce(g.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(M,g,I){const V=i.get(M);g!==void 0&&re(V.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&ke(M)}function U(M){const g=M.texture,I=i.get(M),V=i.get(g);M.addEventListener("dispose",w);const j=M.textures,X=M.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=g.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let Te=0;Te<g.mipmaps.length;Te++)I.__webglFramebuffer[he][Te]=t.createFramebuffer()}else I.__webglFramebuffer[he]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)I.__webglFramebuffer[he]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let he=0,Te=j.length;he<Te;he++){const Ce=i.get(j[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&C(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<j.length;he++){const Te=j[he];I.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Ce=s.convert(Te.format,Te.colorSpace),fe=s.convert(Te.type),Pe=E(Te.internalFormat,Ce,fe,Te.colorSpace,M.isXRRenderTarget===!0),Ue=T(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Pe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,I.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(I.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Be(t.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)re(I.__webglFramebuffer[he][Te],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else re(I.__webglFramebuffer[he],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let he=0,Te=j.length;he<Te;he++){const Ce=j[he],fe=i.get(Ce);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Be(t.TEXTURE_2D,Ce),re(I.__webglFramebuffer,M,Ce,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Ce)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,V.__webglTexture),Be(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)re(I.__webglFramebuffer[Te],M,g,t.COLOR_ATTACHMENT0,he,Te);else re(I.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,he,0);m(g)&&d(he),n.unbindTexture()}M.depthBuffer&&ke(M)}function y(M){const g=M.textures;for(let I=0,V=g.length;I<V;I++){const j=g[I];if(m(j)){const X=S(M),Ee=i.get(j).__webglTexture;n.bindTexture(X,Ee),d(X),n.unbindTexture()}}}const ne=[],Z=[];function Q(M){if(M.samples>0){if(C(M)===!1){const g=M.textures,I=M.width,V=M.height;let j=t.COLOR_BUFFER_BIT;const X=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(M),he=g.length>1;if(he)for(let Ce=0;Ce<g.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const fe=i.get(g[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,I,V,0,0,I,V,j,t.NEAREST),l===!0&&(ne.length=0,Z.length=0,ne.push(t.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ne.push(X),Z.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<g.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const fe=i.get(g[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function T(M){return Math.min(r.maxSamples,M.samples)}function C(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function k(M,g){const I=M.colorSpace,V=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==vs&&I!==Wi&&(lt.getTransfer(I)===vt?(V!==zn||j!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function me(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=te,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=D,this.setupRenderTarget=U,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=re,this.useMultisampledRTT=C}function eR(t,e){function n(i,r=Wi){let s;const o=lt.getTransfer(r);if(i===li)return t.UNSIGNED_BYTE;if(i===df)return t.UNSIGNED_SHORT_4_4_4_4;if(i===pf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Fg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ng)return t.BYTE;if(i===Og)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===hf)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===Ti)return t.FLOAT;if(i===vo)return t.HALF_FLOAT;if(i===Bg)return t.ALPHA;if(i===kg)return t.RGB;if(i===zn)return t.RGBA;if(i===oo)return t.DEPTH_COMPONENT;if(i===ao)return t.DEPTH_STENCIL;if(i===Hg)return t.RED;if(i===mf)return t.RED_INTEGER;if(i===Vg)return t.RG;if(i===gf)return t.RG_INTEGER;if(i===_f)return t.RGBA_INTEGER;if(i===oa||i===aa||i===la||i===ca)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kc||i===Zc||i===Jc||i===Qc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Kc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===tu||i===nu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===eu||i===tu)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===iu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ru)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ou)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===au)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===du)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ua||i===_u||i===vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ua)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zg||i===xu||i===Su||i===yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zi({vertexShader:tR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ut(new Ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends Ss{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=new iR,m=n.getContextAttributes();let d=null,S=null;const E=[],x=[],P=new st;let L=null;const w=new Pn;w.viewport=new Lt;const O=new Pn;O.viewport=new Lt;const A=[w,O],b=new Mb;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=E[se];return xe===void 0&&(xe=new Zl,E[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=E[se];return xe===void 0&&(xe=new Zl,E[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=E[se];return xe===void 0&&(xe=new Zl,E[se]=xe),xe.getHandSpace()};function q(se){const xe=x.indexOf(se.inputSource);if(xe===-1)return;const be=E[xe];be!==void 0&&(be.update(se.inputSource,se.frame,c||o),be.dispatchEvent({type:se.type,data:se.inputSource}))}function oe(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",ae);for(let se=0;se<E.length;se++){const xe=x[se];xe!==null&&(x[se]=null,E[se].disconnect(xe))}F=null,Y=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,S=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,H=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?ao:oo,H=m.stencil?so:Cr);const ce={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Pr(h.textureWidth,h.textureHeight,{format:zn,type:li,depthTexture:new e_(h.textureWidth,h.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Pr(p.framebufferWidth,p.framebufferHeight,{format:zn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(se){for(let xe=0;xe<se.removed.length;xe++){const be=se.removed[xe],H=x.indexOf(be);H>=0&&(x[H]=null,E[H].disconnect(be))}for(let xe=0;xe<se.added.length;xe++){const be=se.added[xe];let H=x.indexOf(be);if(H===-1){for(let ce=0;ce<E.length;ce++)if(ce>=x.length){x.push(be),H=ce;break}else if(x[ce]===null){x[ce]=be,H=ce;break}if(H===-1)break}const re=E[H];re&&re.connect(be)}}const te=new $,K=new $;function W(se,xe,be){te.setFromMatrixPosition(xe.matrixWorld),K.setFromMatrixPosition(be.matrixWorld);const H=te.distanceTo(K),re=xe.projectionMatrix.elements,ce=be.projectionMatrix.elements,le=re[14]/(re[10]-1),ke=re[14]/(re[10]+1),D=(re[9]+1)/re[5],U=(re[9]-1)/re[5],y=(re[8]-1)/re[0],ne=(ce[8]+1)/ce[0],Z=le*y,Q=le*ne,T=H/(-y+ne),C=T*-y;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(C),se.translateZ(T),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const N=le+T,k=ke+T,me=Z-C,M=Q+(H-C),g=D*ke/k*N,I=U*ke/k*N;se.projectionMatrix.makePerspective(me,M,g,I,N,k),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function pe(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let xe=se.near,be=se.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(be=v.depthFar)),b.near=O.near=w.near=xe,b.far=O.far=w.far=be,(F!==b.near||Y!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,Y=b.far),w.layers.mask=se.layers.mask|2,O.layers.mask=se.layers.mask|4,b.layers.mask=w.layers.mask|O.layers.mask;const H=se.parent,re=b.cameras;pe(b,H);for(let ce=0;ce<re.length;ce++)pe(re[ce],H);re.length===2?W(b,w,O):b.projectionMatrix.copy(w.projectionMatrix),Se(se,b,H)};function Se(se,xe,be){be===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Aa*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Re=null;function Be(se,xe){if(u=xe.getViewerPose(c||o),_=xe,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;be.length!==b.cameras.length&&(b.cameras.length=0,H=!0);for(let le=0;le<be.length;le++){const ke=be[le];let D=null;if(p!==null)D=p.getViewport(ke);else{const y=f.getViewSubImage(h,ke);D=y.viewport,le===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let U=A[le];U===void 0&&(U=new Pn,U.layers.enable(le),U.viewport=new Lt,A[le]=U),U.matrix.fromArray(ke.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(ke.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(D.x,D.y,D.width,D.height),le===0&&(b.matrix.copy(U.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),H===!0&&b.cameras.push(U)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(be[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let be=0;be<E.length;be++){const H=x[be],re=E[be];H!==null&&re!==void 0&&re.update(H,xe,c||o)}Re&&Re(se,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),_=null}const Je=new o_;Je.setAnimationLoop(Be),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const pr=new qn,sR=new At;function oR(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Kg(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,E,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,pr.copy(x),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(pr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=E*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function aR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(_(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const P=E.program;i.updateUBOMapping(S,P);const L=e.render.frame;s[S.id]!==L&&(h(S),s[S.id]=L)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),P=S.__size,L=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const E=r[S.id],x=S.uniforms,P=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let L=0,w=x.length;L<w;L++){const O=Array.isArray(x[L])?x[L]:[x[L]];for(let A=0,b=O.length;A<b;A++){const F=O[A];if(p(F,L,A,P)===!0){const Y=F.__offset,q=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let ae=0;ae<q.length;ae++){const te=q[ae],K=v(te);typeof te=="number"||typeof te=="boolean"?(F.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,Y+oe,F.__data)):te.isMatrix3?(F.__data[0]=te.elements[0],F.__data[1]=te.elements[1],F.__data[2]=te.elements[2],F.__data[3]=0,F.__data[4]=te.elements[3],F.__data[5]=te.elements[4],F.__data[6]=te.elements[5],F.__data[7]=0,F.__data[8]=te.elements[6],F.__data[9]=te.elements[7],F.__data[10]=te.elements[8],F.__data[11]=0):(te.toArray(F.__data,oe),oe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,E,x,P){const L=S.value,w=E+"_"+x;if(P[w]===void 0)return typeof L=="number"||typeof L=="boolean"?P[w]=L:P[w]=L.clone(),!0;{const O=P[w];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return P[w]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function _(S){const E=S.uniforms;let x=0;const P=16;for(let w=0,O=E.length;w<O;w++){const A=Array.isArray(E[w])?E[w]:[E[w]];for(let b=0,F=A.length;b<F;b++){const Y=A[b],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let oe=0,ae=q.length;oe<ae;oe++){const te=q[oe],K=v(te),W=x%P,pe=W%K.boundary,Se=W+pe;x+=pe,Se!==0&&P-Se<K.storage&&(x+=P-Se),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=K.storage}}}const L=x%P;return L>0&&(x+=P-L),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class f_{constructor(e={}){const{canvas:n=HM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=Rn;let L=0,w=0,O=null,A=-1,b=null;const F=new Lt,Y=new Lt;let q=null;const oe=new rt(0);let ae=0,te=n.width,K=n.height,W=1,pe=null,Se=null;const Re=new Lt(0,0,te,K),Be=new Lt(0,0,te,K);let Je=!1;const se=new Ef;let xe=!1,be=!1;const H=new At,re=new At,ce=new $,le=new Lt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function U(){return O===null?W:1}let y=i;function ne(R,z){return n.getContext(R,z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${uf}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",ue,!1),y===null){const z="webgl2";if(y=ne(z,R),y===null)throw ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Z,Q,T,C,N,k,me,M,g,I,V,j,X,Ee,he,Te,Ce,fe,Pe,Ue,Ne,ye,Xe,B;function we(){Z=new vA(y),Z.init(),ye=new eR(y,Z),Q=new fA(y,Z,e,ye),T=new J1(y,Z),Q.reverseDepthBuffer&&h&&T.buffers.depth.setReversed(!0),C=new yA(y),N=new k1,k=new Q1(y,Z,T,N,Q,ye,C),me=new dA(x),M=new _A(x),g=new Ab(y),Xe=new cA(y,g),I=new xA(y,g,C,Xe),V=new MA(y,I,g,C),Pe=new EA(y,Q,k),Te=new hA(N),j=new B1(x,me,M,Z,Q,Xe,Te),X=new oR(x,N),Ee=new V1,he=new q1(Z),fe=new lA(x,me,M,T,V,p,l),Ce=new K1(x,V,Q),B=new aR(y,C,Q,T),Ue=new uA(y,Z,C),Ne=new SA(y,Z,C),C.programs=j.programs,x.capabilities=Q,x.extensions=Z,x.properties=N,x.renderLists=Ee,x.shadowMap=Ce,x.state=T,x.info=C}we();const de=new rR(x,y);this.xr=de,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=Z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(te,K,!1))},this.getSize=function(R){return R.set(te,K)},this.setSize=function(R,z,J=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=R,K=z,n.width=Math.floor(R*W),n.height=Math.floor(z*W),J===!0&&(n.style.width=R+"px",n.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(te*W,K*W).floor()},this.setDrawingBufferSize=function(R,z,J){te=R,K=z,W=J,n.width=Math.floor(R*J),n.height=Math.floor(z*J),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Re)},this.setViewport=function(R,z,J,ee){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,z,J,ee),T.viewport(F.copy(Re).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Be)},this.setScissor=function(R,z,J,ee){R.isVector4?Be.set(R.x,R.y,R.z,R.w):Be.set(R,z,J,ee),T.scissor(Y.copy(Be).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){T.setScissorTest(Je=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,J=!0){let ee=0;if(R){let G=!1;if(O!==null){const _e=O.texture.format;G=_e===_f||_e===gf||_e===mf}if(G){const _e=O.texture.type,Ae=_e===li||_e===Cr||_e===ro||_e===so||_e===df||_e===pf,Fe=fe.getClearColor(),Ie=fe.getClearAlpha(),ze=Fe.r,Ge=Fe.g,He=Fe.b;Ae?(_[0]=ze,_[1]=Ge,_[2]=He,_[3]=Ie,y.clearBufferuiv(y.COLOR,0,_)):(v[0]=ze,v[1]=Ge,v[2]=He,v[3]=Ie,y.clearBufferiv(y.COLOR,0,v))}else ee|=y.COLOR_BUFFER_BIT}z&&(ee|=y.DEPTH_BUFFER_BIT),J&&(ee|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),Ee.dispose(),he.dispose(),N.dispose(),me.dispose(),M.dispose(),V.dispose(),Xe.dispose(),B.dispose(),j.dispose(),de.dispose(),de.removeEventListener("sessionstart",Pf),de.removeEventListener("sessionend",Lf),sr.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=C.autoReset,z=Ce.enabled,J=Ce.autoUpdate,ee=Ce.needsUpdate,G=Ce.type;we(),C.autoReset=R,Ce.enabled=z,Ce.autoUpdate=J,Ce.needsUpdate=ee,Ce.type=G}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const z=R.target;z.removeEventListener("dispose",Oe),qe(z)}function qe(R){Et(R),N.remove(R)}function Et(R){const z=N.get(R).programs;z!==void 0&&(z.forEach(function(J){j.releaseProgram(J)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,J,ee,G,_e){z===null&&(z=ke);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Fe=V_(R,z,J,ee,G);T.setMaterial(ee,Ae);let Ie=J.index,ze=1;if(ee.wireframe===!0){if(Ie=I.getWireframeAttribute(J),Ie===void 0)return;ze=2}const Ge=J.drawRange,He=J.attributes.position;let tt=Ge.start*ze,gt=(Ge.start+Ge.count)*ze;_e!==null&&(tt=Math.max(tt,_e.start*ze),gt=Math.min(gt,(_e.start+_e.count)*ze)),Ie!==null?(tt=Math.max(tt,0),gt=Math.min(gt,Ie.count)):He!=null&&(tt=Math.max(tt,0),gt=Math.min(gt,He.count));const wt=gt-tt;if(wt<0||wt===1/0)return;Xe.setup(G,ee,Fe,J,Ie);let Rt,ot=Ue;if(Ie!==null&&(Rt=g.get(Ie),ot=Ne,ot.setIndex(Rt)),G.isMesh)ee.wireframe===!0?(T.setLineWidth(ee.wireframeLinewidth*U()),ot.setMode(y.LINES)):ot.setMode(y.TRIANGLES);else if(G.isLine){let Ve=ee.linewidth;Ve===void 0&&(Ve=1),T.setLineWidth(Ve*U()),G.isLineSegments?ot.setMode(y.LINES):G.isLineLoop?ot.setMode(y.LINE_LOOP):ot.setMode(y.LINE_STRIP)}else G.isPoints?ot.setMode(y.POINTS):G.isSprite&&ot.setMode(y.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,Yt=G._multiDrawCounts,ft=G._multiDrawCount,On=Ie?g.get(Ie).bytesPerElement:1,Ur=N.get(ee).currentProgram.getUniforms();for(let vn=0;vn<ft;vn++)Ur.setValue(y,"_gl_DrawID",vn),ot.render(Ve[vn]/On,Yt[vn])}else if(G.isInstancedMesh)ot.renderInstances(tt,wt,G.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Yt=Math.min(J.instanceCount,Ve);ot.renderInstances(tt,wt,Yt)}else ot.render(tt,wt)};function mt(R,z,J){R.transparent===!0&&R.side===Ei&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,wo(R,z,J),R.side=Ki,R.needsUpdate=!0,wo(R,z,J),R.side=Ei):wo(R,z,J)}this.compile=function(R,z,J=null){J===null&&(J=R),d=he.get(J),d.init(z),E.push(d),J.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),R!==J&&R.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const ee=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];mt(Fe,J,G),ee.add(Fe)}else mt(_e,J,G),ee.add(_e)}),d=E.pop(),ee},this.compileAsync=function(R,z,J=null){const ee=this.compile(R,z,J);return new Promise(G=>{function _e(){if(ee.forEach(function(Ae){N.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){G(R);return}setTimeout(_e,10)}Z.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Nn=null;function ci(R){Nn&&Nn(R)}function Pf(){sr.stop()}function Lf(){sr.start()}const sr=new o_;sr.setAnimationLoop(ci),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(R){Nn=R,de.setAnimationLoop(R),R===null?sr.stop():sr.start()},de.addEventListener("sessionstart",Pf),de.addEventListener("sessionend",Lf),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(z),z=de.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,z,O),d=he.get(R,E.length),d.init(z),E.push(d),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(re),be=this.localClippingEnabled,xe=Te.init(this.clippingPlanes,be),m=Ee.get(R,S.length),m.init(),S.push(m),de.enabled===!0&&de.isPresenting===!0){const _e=x.xr.getDepthSensingMesh();_e!==null&&ll(_e,z,-1/0,x.sortObjects)}ll(R,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pe,Se),D=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,D&&fe.addToRenderList(m,R),this.info.render.frame++,xe===!0&&Te.beginShadows();const J=d.state.shadowsArray;Ce.render(J,R,z),xe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,G=m.transmissive;if(d.setupLights(),z.isArrayCamera){const _e=z.cameras;if(G.length>0)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Ie=_e[Ae];Df(ee,G,R,Ie)}D&&fe.render(R);for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Ie=_e[Ae];If(m,R,Ie,Ie.viewport)}}else G.length>0&&Df(ee,G,R,z),D&&fe.render(R),If(m,R,z);O!==null&&w===0&&(k.updateMultisampleRenderTarget(O),k.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(x,R,z),Xe.resetDefaultState(),A=-1,b=null,E.pop(),E.length>0?(d=E[E.length-1],xe===!0&&Te.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ll(R,z,J,ee){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)J=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){ee&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const Ae=V.update(R),Fe=R.material;Fe.visible&&m.push(R,Ae,Fe,J,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const Ae=V.update(R),Fe=R.material;if(ee&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),le.copy(Ae.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(Fe)){const Ie=Ae.groups;for(let ze=0,Ge=Ie.length;ze<Ge;ze++){const He=Ie[ze],tt=Fe[He.materialIndex];tt&&tt.visible&&m.push(R,Ae,tt,J,le.z,He)}}else Fe.visible&&m.push(R,Ae,Fe,J,le.z,null)}}const _e=R.children;for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++)ll(_e[Ae],z,J,ee)}function If(R,z,J,ee){const G=R.opaque,_e=R.transmissive,Ae=R.transparent;d.setupLightsView(J),xe===!0&&Te.setGlobalState(x.clippingPlanes,J),ee&&T.viewport(F.copy(ee)),G.length>0&&To(G,z,J),_e.length>0&&To(_e,z,J),Ae.length>0&&To(Ae,z,J),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Df(R,z,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ee.id]===void 0&&(d.state.transmissionRenderTarget[ee.id]=new Pr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?vo:li,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const _e=d.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||F;_e.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(oe),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),D&&fe.render(J);const Ie=x.toneMapping;x.toneMapping=Yi;const ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),d.setupLightsView(ee),xe===!0&&Te.setGlobalState(x.clippingPlanes,ee),To(R,J,ee),k.updateMultisampleRenderTarget(_e),k.updateRenderTargetMipmap(_e),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let He=0,tt=z.length;He<tt;He++){const gt=z[He],wt=gt.object,Rt=gt.geometry,ot=gt.material,Ve=gt.group;if(ot.side===Ei&&wt.layers.test(ee.layers)){const Yt=ot.side;ot.side=pn,ot.needsUpdate=!0,Uf(wt,J,ee,Rt,ot,Ve),ot.side=Yt,ot.needsUpdate=!0,Ge=!0}}Ge===!0&&(k.updateMultisampleRenderTarget(_e),k.updateRenderTargetMipmap(_e))}x.setRenderTarget(Fe),x.setClearColor(oe,ae),ze!==void 0&&(ee.viewport=ze),x.toneMapping=Ie}function To(R,z,J){const ee=z.isScene===!0?z.overrideMaterial:null;for(let G=0,_e=R.length;G<_e;G++){const Ae=R[G],Fe=Ae.object,Ie=Ae.geometry,ze=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&ee!==null&&(Ge=ee),Fe.layers.test(J.layers)&&Uf(Fe,z,J,Ie,Ge,ze)}}function Uf(R,z,J,ee,G,_e){R.onBeforeRender(x,z,J,ee,G,_e),R.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,z,J,ee,R,_e),G.transparent===!0&&G.side===Ei&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,x.renderBufferDirect(J,z,ee,G,R,_e),G.side=Ki,G.needsUpdate=!0,x.renderBufferDirect(J,z,ee,G,R,_e),G.side=Ei):x.renderBufferDirect(J,z,ee,G,R,_e),R.onAfterRender(x,z,J,ee,G,_e)}function wo(R,z,J){z.isScene!==!0&&(z=ke);const ee=N.get(R),G=d.state.lights,_e=d.state.shadowsArray,Ae=G.state.version,Fe=j.getParameters(R,G.state,_e,z,J),Ie=j.getProgramCacheKey(Fe);let ze=ee.programs;ee.environment=R.isMeshStandardMaterial?z.environment:null,ee.fog=z.fog,ee.envMap=(R.isMeshStandardMaterial?M:me).get(R.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",Oe),ze=new Map,ee.programs=ze);let Ge=ze.get(Ie);if(Ge!==void 0){if(ee.currentProgram===Ge&&ee.lightsStateVersion===Ae)return Of(R,Fe),Ge}else Fe.uniforms=j.getUniforms(R),R.onBeforeCompile(Fe,x),Ge=j.acquireProgram(Fe,Ie),ze.set(Ie,Ge),ee.uniforms=Fe.uniforms;const He=ee.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Te.uniform),Of(R,Fe),ee.needsLights=G_(R),ee.lightsStateVersion=Ae,ee.needsLights&&(He.ambientLightColor.value=G.state.ambient,He.lightProbe.value=G.state.probe,He.directionalLights.value=G.state.directional,He.directionalLightShadows.value=G.state.directionalShadow,He.spotLights.value=G.state.spot,He.spotLightShadows.value=G.state.spotShadow,He.rectAreaLights.value=G.state.rectArea,He.ltc_1.value=G.state.rectAreaLTC1,He.ltc_2.value=G.state.rectAreaLTC2,He.pointLights.value=G.state.point,He.pointLightShadows.value=G.state.pointShadow,He.hemisphereLights.value=G.state.hemi,He.directionalShadowMap.value=G.state.directionalShadowMap,He.directionalShadowMatrix.value=G.state.directionalShadowMatrix,He.spotShadowMap.value=G.state.spotShadowMap,He.spotLightMatrix.value=G.state.spotLightMatrix,He.spotLightMap.value=G.state.spotLightMap,He.pointShadowMap.value=G.state.pointShadowMap,He.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=Ge,ee.uniformsList=null,Ge}function Nf(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=fa.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Of(R,z){const J=N.get(R);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function V_(R,z,J,ee,G){z.isScene!==!0&&(z=ke),k.resetTextureUnits();const _e=z.fog,Ae=ee.isMeshStandardMaterial?z.environment:null,Fe=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:vs,Ie=(ee.isMeshStandardMaterial?M:me).get(ee.envMap||Ae),ze=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!J.morphAttributes.position,tt=!!J.morphAttributes.normal,gt=!!J.morphAttributes.color;let wt=Yi;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(wt=x.toneMapping);const Rt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=Rt!==void 0?Rt.length:0,Ve=N.get(ee),Yt=d.state.lights;if(xe===!0&&(be===!0||R!==b)){const rn=R===b&&ee.id===A;Te.setState(ee,R,rn)}let ft=!1;ee.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Yt.state.version||Ve.outputColorSpace!==Fe||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==Ie||ee.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Te.numPlanes||Ve.numIntersection!==Te.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Ge||Ve.morphTargets!==He||Ve.morphNormals!==tt||Ve.morphColors!==gt||Ve.toneMapping!==wt||Ve.morphTargetsCount!==ot)&&(ft=!0):(ft=!0,Ve.__version=ee.version);let On=Ve.currentProgram;ft===!0&&(On=wo(ee,z,G));let Ur=!1,vn=!1,Ts=!1;const bt=On.getUniforms(),Tn=Ve.uniforms;if(T.useProgram(On.program)&&(Ur=!0,vn=!0,Ts=!0),ee.id!==A&&(A=ee.id,vn=!0),Ur||b!==R){T.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),zM(H),GM(H),bt.setValue(y,"projectionMatrix",H)):bt.setValue(y,"projectionMatrix",R.projectionMatrix),bt.setValue(y,"viewMatrix",R.matrixWorldInverse);const fn=bt.map.cameraPosition;fn!==void 0&&fn.setValue(y,ce.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&bt.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&bt.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,vn=!0,Ts=!0)}if(G.isSkinnedMesh){bt.setOptional(y,G,"bindMatrix"),bt.setOptional(y,G,"bindMatrixInverse");const rn=G.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),bt.setValue(y,"boneTexture",rn.boneTexture,k))}G.isBatchedMesh&&(bt.setOptional(y,G,"batchingTexture"),bt.setValue(y,"batchingTexture",G._matricesTexture,k),bt.setOptional(y,G,"batchingIdTexture"),bt.setValue(y,"batchingIdTexture",G._indirectTexture,k),bt.setOptional(y,G,"batchingColorTexture"),G._colorsTexture!==null&&bt.setValue(y,"batchingColorTexture",G._colorsTexture,k));const wn=J.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Pe.update(G,J,On),(vn||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,bt.setValue(y,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Tn.envMap.value=Ie,Tn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&z.environment!==null&&(Tn.envMapIntensity.value=z.environmentIntensity),vn&&(bt.setValue(y,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&z_(Tn,Ts),_e&&ee.fog===!0&&X.refreshFogUniforms(Tn,_e),X.refreshMaterialUniforms(Tn,ee,W,K,d.state.transmissionRenderTarget[R.id]),fa.upload(y,Nf(Ve),Tn,k)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(fa.upload(y,Nf(Ve),Tn,k),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&bt.setValue(y,"center",G.center),bt.setValue(y,"modelViewMatrix",G.modelViewMatrix),bt.setValue(y,"normalMatrix",G.normalMatrix),bt.setValue(y,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const rn=ee.uniformsGroups;for(let fn=0,cl=rn.length;fn<cl;fn++){const or=rn[fn];B.update(or,On),B.bind(or,On)}}return On}function z_(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function G_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,z,J){const ee=N.get(R);ee.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=z,N.get(R.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const J=N.get(R);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const W_=y.createFramebuffer();this.setRenderTarget=function(R,z=0,J=0){O=R,L=z,w=J;let ee=!0,G=null,_e=!1,Ae=!1;if(R){const Ie=N.get(R);if(Ie.__useDefaultFramebuffer!==void 0)T.bindFramebuffer(y.FRAMEBUFFER,null),ee=!1;else if(Ie.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(Ie.__hasExternalTextures)k.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const He=R.depthTexture;if(Ie.__boundDepthTexture!==He){if(He!==null&&N.has(He)&&(R.width!==He.image.width||R.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}const ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ae=!0);const Ge=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[z])?G=Ge[z][J]:G=Ge[z],_e=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?G=N.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[J]:G=Ge,F.copy(R.viewport),Y.copy(R.scissor),q=R.scissorTest}else F.copy(Re).multiplyScalar(W).floor(),Y.copy(Be).multiplyScalar(W).floor(),q=Je;if(J!==0&&(G=W_),T.bindFramebuffer(y.FRAMEBUFFER,G)&&ee&&T.drawBuffers(R,G),T.viewport(F),T.scissor(Y),T.setScissorTest(q),_e){const Ie=N.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,J)}else if(Ae){const Ie=N.get(R.texture),ze=z;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ie.__webglTexture,J,ze)}else if(R!==null&&J!==0){const Ie=N.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ie.__webglTexture,J)}A=-1},this.readRenderTargetPixels=function(R,z,J,ee,G,_e,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){T.bindFramebuffer(y.FRAMEBUFFER,Ie);try{const ze=R.textures[Fe],Ge=ze.format,He=ze.type;if(!Q.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-ee&&J>=0&&J<=R.height-G&&(R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(z,J,ee,G,ye.convert(Ge),ye.convert(He),_e))}finally{const ze=O!==null?N.get(O).__webglFramebuffer:null;T.bindFramebuffer(y.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,z,J,ee,G,_e,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(z>=0&&z<=R.width-ee&&J>=0&&J<=R.height-G){T.bindFramebuffer(y.FRAMEBUFFER,Ie);const ze=R.textures[Fe],Ge=ze.format,He=ze.type;if(!Q.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,tt),y.bufferData(y.PIXEL_PACK_BUFFER,_e.byteLength,y.STREAM_READ),R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(z,J,ee,G,ye.convert(Ge),ye.convert(He),0);const gt=O!==null?N.get(O).__webglFramebuffer:null;T.bindFramebuffer(y.FRAMEBUFFER,gt);const wt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await VM(y,wt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,tt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,_e),y.deleteBuffer(tt),y.deleteSync(wt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,J=0){const ee=Math.pow(2,-J),G=Math.floor(R.image.width*ee),_e=Math.floor(R.image.height*ee),Ae=z!==null?z.x:0,Fe=z!==null?z.y:0;k.setTexture2D(R,0),y.copyTexSubImage2D(y.TEXTURE_2D,J,0,0,Ae,Fe,G,_e),T.unbindTexture()};const X_=y.createFramebuffer(),$_=y.createFramebuffer();this.copyTextureToTexture=function(R,z,J=null,ee=null,G=0,_e=null){_e===null&&(G!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ae,Fe,Ie,ze,Ge,He,tt,gt,wt;const Rt=R.isCompressedTexture?R.mipmaps[_e]:R.image;if(J!==null)Ae=J.max.x-J.min.x,Fe=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,Ge=J.min.y,He=J.isBox3?J.min.z:0;else{const wn=Math.pow(2,-G);Ae=Math.floor(Rt.width*wn),Fe=Math.floor(Rt.height*wn),R.isDataArrayTexture?Ie=Rt.depth:R.isData3DTexture?Ie=Math.floor(Rt.depth*wn):Ie=1,ze=0,Ge=0,He=0}ee!==null?(tt=ee.x,gt=ee.y,wt=ee.z):(tt=0,gt=0,wt=0);const ot=ye.convert(z.format),Ve=ye.convert(z.type);let Yt;z.isData3DTexture?(k.setTexture3D(z,0),Yt=y.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(k.setTexture2DArray(z,0),Yt=y.TEXTURE_2D_ARRAY):(k.setTexture2D(z,0),Yt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,z.unpackAlignment);const ft=y.getParameter(y.UNPACK_ROW_LENGTH),On=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Ur=y.getParameter(y.UNPACK_SKIP_PIXELS),vn=y.getParameter(y.UNPACK_SKIP_ROWS),Ts=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Rt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Rt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ze),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(y.UNPACK_SKIP_IMAGES,He);const bt=R.isDataArrayTexture||R.isData3DTexture,Tn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const wn=N.get(R),rn=N.get(z),fn=N.get(wn.__renderTarget),cl=N.get(rn.__renderTarget);T.bindFramebuffer(y.READ_FRAMEBUFFER,fn.__webglFramebuffer),T.bindFramebuffer(y.DRAW_FRAMEBUFFER,cl.__webglFramebuffer);for(let or=0;or<Ie;or++)bt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(R).__webglTexture,G,He+or),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(z).__webglTexture,_e,wt+or)),y.blitFramebuffer(ze,Ge,Ae,Fe,tt,gt,Ae,Fe,y.DEPTH_BUFFER_BIT,y.NEAREST);T.bindFramebuffer(y.READ_FRAMEBUFFER,null),T.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||N.has(R)){const wn=N.get(R),rn=N.get(z);T.bindFramebuffer(y.READ_FRAMEBUFFER,X_),T.bindFramebuffer(y.DRAW_FRAMEBUFFER,$_);for(let fn=0;fn<Ie;fn++)bt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,wn.__webglTexture,G,He+fn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,wn.__webglTexture,G),Tn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,rn.__webglTexture,_e,wt+fn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,rn.__webglTexture,_e),G!==0?y.blitFramebuffer(ze,Ge,Ae,Fe,tt,gt,Ae,Fe,y.COLOR_BUFFER_BIT,y.NEAREST):Tn?y.copyTexSubImage3D(Yt,_e,tt,gt,wt+fn,ze,Ge,Ae,Fe):y.copyTexSubImage2D(Yt,_e,tt,gt,ze,Ge,Ae,Fe);T.bindFramebuffer(y.READ_FRAMEBUFFER,null),T.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?y.texSubImage3D(Yt,_e,tt,gt,wt,Ae,Fe,Ie,ot,Ve,Rt.data):z.isCompressedArrayTexture?y.compressedTexSubImage3D(Yt,_e,tt,gt,wt,Ae,Fe,Ie,ot,Rt.data):y.texSubImage3D(Yt,_e,tt,gt,wt,Ae,Fe,Ie,ot,Ve,Rt):R.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,_e,tt,gt,Ae,Fe,ot,Ve,Rt.data):R.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,_e,tt,gt,Rt.width,Rt.height,ot,Rt.data):y.texSubImage2D(y.TEXTURE_2D,_e,tt,gt,Ae,Fe,ot,Ve,Rt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ft),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,On),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ur),y.pixelStorei(y.UNPACK_SKIP_ROWS,vn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ts),_e===0&&z.generateMipmaps&&y.generateMipmap(Yt),T.unbindTexture()},this.copyTextureToTexture3D=function(R,z,J=null,ee=null,G=0){return as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,J,ee,G)},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){L=0,w=0,O=null,T.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}class h_{constructor(e,n,i){$e(this,"player");$e(this,"velocity",new $(0,0,0));$e(this,"force",new $(0,0,0));$e(this,"drag",new $(0,0,0));$e(this,"clock",new bb);$e(this,"gameInput");$e(this,"physics");this.player=e,this.gameInput=n,this.physics=i}updateForce(e){let n=this.gameInput.getMovementVectorNormalized();this.force.set(n.x,0,n.y).multiplyScalar(e),this.force.z*=2}updateDrag(e){this.drag.set(this.velocity.x,0,this.velocity.z).multiplyScalar(e)}updateVelocity(e){let n=this.force.clone().sub(this.drag).multiplyScalar(e);this.velocity.length()<.5&&this.force.length()===0&&(this.velocity.multiplyScalar(0),n.multiplyScalar(0)),this.velocity.add(n)}applyMovement(){let e=this.clock.getDelta();this.gameInput.handleMovementVector(this.player.position),this.updateForce(30),this.updateDrag(3),this.updateVelocity(e);let n=this.physics.lineCast(this.player.position,this.velocity,1).length===0&&this.physics.lineCast(this.player.position,this.force,1).length===0;if(!n){const i=new $(this.velocity.x,0,0),r=new $(0,0,this.velocity.z);n=this.physics.lineCast(this.player.position,i,1).length===0,n?(n=this.physics.lineCast(this.player.position,r,1).length===0,n?this.velocity.set(i.x,0,r.z):this.velocity.set(i.x,0,-r.z)):(n=this.physics.lineCast(this.player.position,r,1).length===0,n?this.velocity.set(-i.x,0,r.z):this.velocity.multiplyScalar(0))}this.player.position.add(this.velocity.clone().multiplyScalar(e))}getForce(){return[this.force.x,this.force.y,this.force.z]}getDrag(){return[this.drag.x,this.drag.y,this.drag.z]}getVelocity(){return[this.velocity.x,this.velocity.y,this.velocity.z]}}class d_{constructor(e){$e(this,"isMouse",!1);$e(this,"pointerPos",new $(0,0,0));$e(this,"moveDir",new st(0,0));$e(this,"moveUp",!1);$e(this,"moveDown",!1);$e(this,"moveLeft",!1);$e(this,"moveRight",!1);$e(this,"physics");$e(this,"boundHandleKeyDown",e=>this.handleKeyDown(e));$e(this,"boundHandleKeyUp",e=>this.handleKeyUp(e));$e(this,"boundHandleMouseDown",e=>this.handleMouseDown(e));$e(this,"boundHandleMouseMove",e=>this.handleMouseMove(e));$e(this,"boundHandleMouseUp",()=>this.handleMouseUp());this.physics=e}handleKeyDown(e){if(!this.isMouse)switch(e.key){case"ArrowUp":this.moveUp=!0;break;case"ArrowDown":this.moveDown=!0;break;case"ArrowLeft":this.moveLeft=!0;break;case"ArrowRight":this.moveRight=!0;break}}handleKeyUp(e){if(!this.isMouse)switch(e.key){case"ArrowUp":this.moveUp=!1;break;case"ArrowDown":this.moveDown=!1;break;case"ArrowLeft":this.moveLeft=!1;break;case"ArrowRight":this.moveRight=!1;break}}isKeyboard(){return!!(this.moveUp||this.moveDown||this.moveLeft||this.moveRight)}handleMouseDown(e){var i;if(this.isKeyboard())return;const n=(i=this.physics)==null?void 0:i.screenPointToWorld(e.clientX,e.clientY);n&&(this.isMouse=!0,this.pointerPos.set(n.x,0,n.z))}handleMouseMove(e){var i;if(this.isKeyboard())return;const n=(i=this.physics)==null?void 0:i.screenPointToWorld(e.clientX,e.clientY);n&&this.pointerPos.set(n.x,0,n.z)}handleMouseUp(){this.isKeyboard()||(this.isMouse=!1,this.moveDir.set(0,0))}addInputListener(){window.addEventListener("keydown",this.boundHandleKeyDown),window.addEventListener("keyup",this.boundHandleKeyUp),window.addEventListener("mousedown",this.boundHandleMouseDown),window.addEventListener("mousemove",this.boundHandleMouseMove),window.addEventListener("mouseup",this.boundHandleMouseUp)}removeInputListener(){window.removeEventListener("keydown",this.boundHandleKeyDown),window.removeEventListener("keyup",this.boundHandleKeyUp),window.removeEventListener("mousedown",this.boundHandleMouseDown),window.removeEventListener("mousemove",this.boundHandleMouseMove),window.removeEventListener("mouseup",this.boundHandleMouseUp)}handleMovementVector(e){if(this.isMouse&&!this.isKeyboard()&&e){const n=this.pointerPos.clone().sub(e);n.length()>.1?this.moveDir.set(n.x,n.z):this.moveDir.set(0,0);return}this.moveUp?(this.moveDir.y=-1,this.moveDown&&(this.moveDir.y=0)):this.moveDown?(this.moveDir.y=1,this.moveUp&&(this.moveDir.y=0)):this.moveDir.y=0,this.moveLeft?(this.moveDir.x=-1,this.moveRight&&(this.moveDir.x=0)):this.moveRight?(this.moveDir.x=1,this.moveLeft&&(this.moveDir.x=0)):this.moveDir.x=0}getMovementVectorNormalized(){return this.moveDir.clone().normalize()}}class p_{constructor(e,n){$e(this,"raycaster",new Tb);$e(this,"collidables");$e(this,"camera");this.collidables=e,this.camera=n}raycast(e,n,i){let r;return this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,r=this.raycaster.intersectObjects(this.collidables),r}lineCast(e,n,i=1,r=1,s=1){let o;o=this.raycast(e,n,i);const a=new $(0,1,0),l=Math.PI/2,c=e.clone().add(n.clone().applyAxisAngle(a,l).normalize().multiplyScalar(r)),u=e.clone().add(n.clone().applyAxisAngle(a,-l).normalize().multiplyScalar(s));return this.raycast(c,n,i).forEach(f=>{o.indexOf(f)===-1&&o.push(f)}),this.raycast(u,n,i).forEach(f=>{o.indexOf(f)===-1&&o.push(f)}),o}screenPointToWorld(e,n){if(!this.camera)return;let i=e/window.innerWidth*2-1,r=n/window.innerHeight*2-1,s=new st(i,r);this.raycaster.setFromCamera(s,this.camera),this.raycaster.far=100;const o=this.raycaster.intersectObjects(this.collidables)[0];return new $(o.point.x,o.point.y,-o.point.z)}}const m_="/my-site/assets/texture-1-Bhl9W45K.webp";class lR{constructor(e){$e(this,"scene",new Qg);$e(this,"theme","light");$e(this,"playerTexture",new i_().load(m_));$e(this,"playerMaterial",new t_({color:16777215,map:this.playerTexture}));$e(this,"wallMaterial_1",new n_({color:15658734}));$e(this,"wallMaterial_2",new Ja({transparent:!0}));$e(this,"floorMaterial",this.wallMaterial_1);$e(this,"playerGeometry",new Qa(1,32,32));$e(this,"wallGeometry",new Ji(20,20));$e(this,"floorGeometry",new Ji(20,100));$e(this,"playerMesh",new Ut(this.playerGeometry,this.playerMaterial));$e(this,"player",new qt().attach(this.playerMesh));$e(this,"wall_1",new Ut(this.wallGeometry,this.wallMaterial_1));$e(this,"wall_2",new Ut(this.wallGeometry,this.wallMaterial_2));$e(this,"wall_3",new Ut(this.wallGeometry,this.wallMaterial_2));$e(this,"wall_4",new Ut(this.wallGeometry,this.wallMaterial_2));$e(this,"floor",new Ut(this.floorGeometry,this.floorMaterial));$e(this,"ambientLight",new s_(13421772));$e(this,"spotlightPrimary",new Ra(16777215));$e(this,"spotlightSecondary",new Ra(14540253));this.theme=e}setTextures(){this.playerTexture.wrapS=Rr,this.playerTexture.wrapT=Rr,this.playerTexture.repeat.set(3,3)}setPositions(){this.player.position.set(3,0,-2),this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_3.position.set(5,0,0),this.wall_4.position.set(0,0,10),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.theme==="light"?this.spotlightPrimary.position.set(50,50,50):this.spotlightPrimary.position.set(-50,50,50),this.spotlightSecondary.position.set(-50,50,50)}setLightings(){this.playerMesh.castShadow=!0,this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.castShadow=!0,this.spotlightPrimary.shadow.intensity=.8,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.castShadow=!0,this.spotlightSecondary.shadow.intensity=.8,this.theme==="light"?(this.ambientLight.intensity=1,this.spotlightPrimary.angle=.1,this.spotlightSecondary.power=0):(this.ambientLight.intensity=0,this.spotlightPrimary.angle=.03,this.spotlightSecondary.power=5e3)}createScene(){this.setTextures(),this.setPositions(),this.setLightings(),this.scene.add(this.player,this.floor,this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.ambientLight,this.spotlightPrimary,this.spotlightSecondary)}getScene(){return this.scene}getPlayerObject(){return this.player}changeTheme(e){this.theme!==e&&(this.theme=e),this.theme==="light"?(this.ambientLight.intensity<1&&(this.ambientLight.intensity+=.05),this.spotlightPrimary.angle<.1&&(this.spotlightPrimary.angle+=.005),this.spotlightPrimary.position.lerp(new $(50,50,50),.1),this.spotlightSecondary.power=0):(this.ambientLight.intensity>0&&(this.ambientLight.intensity-=.05),this.spotlightPrimary.angle>.03&&(this.spotlightPrimary.angle-=.005),this.spotlightPrimary.position.lerp(new $(-50,50,50),.1),this.spotlightSecondary.power=5e3)}}const cR=jt({name:"homepage-background",setup(t,{expose:e}){const n=Ct(void 0),i=hm("background"),r=_o(),s=()=>!!n.value;return Ha(()=>{!s()&&i.value&&(i.value.style.cssText=`
          background-position: center;
          background-size: cover;
          background-image: url(${Ig});
        `);const o=new f_({canvas:n.value,antialias:!0,alpha:!0});o.shadowMap.enabled=!0,o.shadowMap.type=ff,o.setClearColor(0,0);let a=window.innerWidth/window.innerHeight;const l=new bf(-5,5,5/a,-5/a,0,1e3);l.position.set(0,10,50),l.lookAt(0,0,0);const c=new lR(r.theme),u=c.getPlayerObject();c.createScene();const f=c.getScene(),h=f.children.filter(d=>d!==u),p=new p_(h,l),_=new d_(p),v=new h_(u,_,p);_.addInputListener();function m(){a=window.innerWidth/window.innerHeight,l.top=5/a,l.bottom=-5/a,l.updateProjectionMatrix(),c.changeTheme(r.theme),v.applyMovement(),i.value&&o.setSize(i.value.offsetWidth,i.value.offsetHeight),o.render(f,l)}o.setAnimationLoop(m),po(()=>{_.removeInputListener()})}),e(),{canvas:n}}}),uR={ref:"background",class:"homepage-bg"},fR={ref:"canvas"};function hR(t,e,n,i,r,s){return it(),pt("div",uR,[ve("canvas",fR,null,512)],512)}const dR=_n(cR,[["render",hR],["__scopeId","data-v-cd8ba0b7"]]),pR={class:"home"},mR={class:"homepage-bg"},gR={ref:"intro",class:"container show"},_R={class:"intro"},vR={class:"intro-txt"},xR=jt({__name:"homepage",setup(t){const{t:e}=Dr();return af(),(n,i)=>(it(),pt("div",pR,[ve("div",mR,[et(dR)]),ve("div",gR,[ve("div",_R,[ve("span",vR,[et(md,{text:dn(e)("hello"),fontSize:"md",textTransform:"cap",lineHeight:"xl",justify:"start",wrap:"wrap",whiteSpace:!0,animation:"fadeIn",duration:"1000ms",stagger:50},null,8,["text"]),et(md,{text:"peter chan",fontSize:"4xl",textTransform:"uc",letterSpacing:"md",lineHeight:"md",justify:"start",wrap:"wrap",animation:"fadeIn",duration:"1000ms",stagger:100})])])],512)]))}}),SR=_n(xR,[["__scopeId","data-v-b97547ba"]]),yR={},ER={class:"project-view"},MR={class:"project"};function bR(t,e){const n=Ai("router-link");return it(),pt("div",ER,[ve("div",MR,[et(n,{to:{name:"todos"}},{default:Dt(()=>e[0]||(e[0]=[ve("i",{class:"fi fi-rr-web-test"},null,-1),ve("span",null,"TodoList",-1)])),_:1}),et(n,{to:{name:"authentication"}},{default:Dt(()=>e[1]||(e[1]=[ve("i",{class:"fi fi-rr-user"},null,-1),ve("span",null,"Authentication",-1)])),_:1}),et(n,{to:{name:"test"}},{default:Dt(()=>e[2]||(e[2]=[ve("i",{class:"fi fi-rr-web-test"},null,-1),ve("span",null,"TEST",-1)])),_:1})])])}const TR=_n(yR,[["render",bR],["__scopeId","data-v-0d1c89c1"]]),wR={},AR={class:"todos"};function RR(t,e){return it(),pt("div",AR,e[0]||(e[0]=[ve("h1",null,"Sorry",-1),ve("h2",null,"This page is not yet online",-1)]))}const CR=_n(wR,[["render",RR],["__scopeId","data-v-cd3b0e09"]]);function g_(t,e){return function(){return t.apply(e,arguments)}}const{toString:PR}=Object.prototype,{getPrototypeOf:wf}=Object,tl=(t=>e=>{const n=PR.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>tl(e)===t),nl=t=>e=>typeof e===t,{isArray:Ms}=Array,co=nl("undefined");function LR(t){return t!==null&&!co(t)&&t.constructor!==null&&!co(t.constructor)&&Mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const __=Yn("ArrayBuffer");function IR(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&__(t.buffer),e}const DR=nl("string"),Mn=nl("function"),v_=nl("number"),il=t=>t!==null&&typeof t=="object",UR=t=>t===!0||t===!1,ha=t=>{if(tl(t)!=="object")return!1;const e=wf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},NR=Yn("Date"),OR=Yn("File"),FR=Yn("Blob"),BR=Yn("FileList"),kR=t=>il(t)&&Mn(t.pipe),HR=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Mn(t.append)&&((e=tl(t))==="formdata"||e==="object"&&Mn(t.toString)&&t.toString()==="[object FormData]"))},VR=Yn("URLSearchParams"),[zR,GR,WR,XR]=["ReadableStream","Request","Response","Headers"].map(Yn),$R=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Ms(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function x_(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Mr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,S_=t=>!co(t)&&t!==Mr;function bu(){const{caseless:t}=S_(this)&&this||{},e={},n=(i,r)=>{const s=t&&x_(e,r)||r;ha(e[s])&&ha(i)?e[s]=bu(e[s],i):ha(i)?e[s]=bu({},i):Ms(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Mo(arguments[i],n);return e}const qR=(t,e,n,{allOwnKeys:i}={})=>(Mo(e,(r,s)=>{n&&Mn(r)?t[s]=g_(r,n):t[s]=r},{allOwnKeys:i}),t),YR=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),jR=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},KR=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&wf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},ZR=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},JR=t=>{if(!t)return null;if(Ms(t))return t;let e=t.length;if(!v_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},QR=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&wf(Uint8Array)),eC=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},tC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},nC=Yn("HTMLFormElement"),iC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),_p=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),rC=Yn("RegExp"),y_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Mo(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},sC=t=>{y_(t,(e,n)=>{if(Mn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oC=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Ms(t)?i(t):i(String(t).split(e)),n},aC=()=>{},lC=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function cC(t){return!!(t&&Mn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const uC=t=>{const e=new Array(10),n=(i,r)=>{if(il(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Ms(i)?[]:{};return Mo(i,(o,a)=>{const l=n(o,r+1);!co(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},fC=Yn("AsyncFunction"),hC=t=>t&&(il(t)||Mn(t))&&Mn(t.then)&&Mn(t.catch),E_=((t,e)=>t?setImmediate:e?((n,i)=>(Mr.addEventListener("message",({source:r,data:s})=>{r===Mr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Mr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Mn(Mr.postMessage)),dC=typeof queueMicrotask<"u"?queueMicrotask.bind(Mr):typeof process<"u"&&process.nextTick||E_,ie={isArray:Ms,isArrayBuffer:__,isBuffer:LR,isFormData:HR,isArrayBufferView:IR,isString:DR,isNumber:v_,isBoolean:UR,isObject:il,isPlainObject:ha,isReadableStream:zR,isRequest:GR,isResponse:WR,isHeaders:XR,isUndefined:co,isDate:NR,isFile:OR,isBlob:FR,isRegExp:rC,isFunction:Mn,isStream:kR,isURLSearchParams:VR,isTypedArray:QR,isFileList:BR,forEach:Mo,merge:bu,extend:qR,trim:$R,stripBOM:YR,inherits:jR,toFlatObject:KR,kindOf:tl,kindOfTest:Yn,endsWith:ZR,toArray:JR,forEachEntry:eC,matchAll:tC,isHTMLForm:nC,hasOwnProperty:_p,hasOwnProp:_p,reduceDescriptors:y_,freezeMethods:sC,toObjectSet:oC,toCamelCase:iC,noop:aC,toFiniteNumber:lC,findKey:x_,global:Mr,isContextDefined:S_,isSpecCompliantForm:cC,toJSONObject:uC,isAsyncFn:fC,isThenable:hC,setImmediate:E_,asap:dC};function je(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}ie.inherits(je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.status}}});const M_=je.prototype,b_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{b_[t]={value:t}});Object.defineProperties(je,b_);Object.defineProperty(M_,"isAxiosError",{value:!0});je.from=(t,e,n,i,r,s)=>{const o=Object.create(M_);return ie.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),je.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const pC=null;function Tu(t){return ie.isPlainObject(t)||ie.isArray(t)}function T_(t){return ie.endsWith(t,"[]")?t.slice(0,-2):t}function vp(t,e,n){return t?t.concat(e).map(function(r,s){return r=T_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function mC(t){return ie.isArray(t)&&!t.some(Tu)}const gC=ie.toFlatObject(ie,{},null,function(e){return/^is[A-Z]/.test(e)});function rl(t,e,n){if(!ie.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=ie.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!ie.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&ie.isSpecCompliantForm(e);if(!ie.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(ie.isDate(_))return _.toISOString();if(!l&&ie.isBlob(_))throw new je("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(_)||ie.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,m){let d=_;if(_&&!m&&typeof _=="object"){if(ie.endsWith(v,"{}"))v=i?v:v.slice(0,-2),_=JSON.stringify(_);else if(ie.isArray(_)&&mC(_)||(ie.isFileList(_)||ie.endsWith(v,"[]"))&&(d=ie.toArray(_)))return v=T_(v),d.forEach(function(E,x){!(ie.isUndefined(E)||E===null)&&e.append(o===!0?vp([v],x,s):o===null?v:v+"[]",c(E))}),!1}return Tu(_)?!0:(e.append(vp(m,v,s),c(_)),!1)}const f=[],h=Object.assign(gC,{defaultVisitor:u,convertValue:c,isVisitable:Tu});function p(_,v){if(!ie.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),ie.forEach(_,function(d,S){(!(ie.isUndefined(d)||d===null)&&r.call(e,d,ie.isString(S)?S.trim():S,v,h))===!0&&p(d,v?v.concat(S):[S])}),f.pop()}}if(!ie.isObject(t))throw new TypeError("data must be an object");return p(t),e}function xp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Af(t,e){this._pairs=[],t&&rl(t,this,e)}const w_=Af.prototype;w_.append=function(e,n){this._pairs.push([e,n])};w_.toString=function(e){const n=e?function(i){return e.call(this,i,xp)}:xp;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function _C(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function A_(t,e,n){if(!e)return t;const i=n&&n.encode||_C;ie.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=ie.isURLSearchParams(e)?e.toString():new Af(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Sp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ie.forEach(this.handlers,function(i){i!==null&&e(i)})}}const R_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},vC=typeof URLSearchParams<"u"?URLSearchParams:Af,xC=typeof FormData<"u"?FormData:null,SC=typeof Blob<"u"?Blob:null,yC={isBrowser:!0,classes:{URLSearchParams:vC,FormData:xC,Blob:SC},protocols:["http","https","file","blob","url","data"]},Rf=typeof window<"u"&&typeof document<"u",wu=typeof navigator=="object"&&navigator||void 0,EC=Rf&&(!wu||["ReactNative","NativeScript","NS"].indexOf(wu.product)<0),MC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",bC=Rf&&window.location.href||"http://localhost",TC=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rf,hasStandardBrowserEnv:EC,hasStandardBrowserWebWorkerEnv:MC,navigator:wu,origin:bC},Symbol.toStringTag,{value:"Module"})),tn={...TC,...yC};function wC(t,e){return rl(t,new tn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return tn.isNode&&ie.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function AC(t){return ie.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function RC(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function C_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&ie.isArray(r)?r.length:o,l?(ie.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!ie.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&ie.isArray(r[o])&&(r[o]=RC(r[o])),!a)}if(ie.isFormData(t)&&ie.isFunction(t.entries)){const n={};return ie.forEachEntry(t,(i,r)=>{e(AC(i),r,n,0)}),n}return null}function CC(t,e,n){if(ie.isString(t))try{return(e||JSON.parse)(t),ie.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const bo={transitional:R_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=ie.isObject(e);if(s&&ie.isHTMLForm(e)&&(e=new FormData(e)),ie.isFormData(e))return r?JSON.stringify(C_(e)):e;if(ie.isArrayBuffer(e)||ie.isBuffer(e)||ie.isStream(e)||ie.isFile(e)||ie.isBlob(e)||ie.isReadableStream(e))return e;if(ie.isArrayBufferView(e))return e.buffer;if(ie.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return wC(e,this.formSerializer).toString();if((a=ie.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return rl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),CC(e)):e}],transformResponse:[function(e){const n=this.transitional||bo.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(ie.isResponse(e)||ie.isReadableStream(e))return e;if(e&&ie.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?je.from(a,je.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ie.forEach(["delete","get","head","post","put","patch"],t=>{bo.headers[t]={}});const PC=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),LC=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&PC[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},yp=Symbol("internals");function Ns(t){return t&&String(t).trim().toLowerCase()}function da(t){return t===!1||t==null?t:ie.isArray(t)?t.map(da):String(t)}function IC(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const DC=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function oc(t,e,n,i,r){if(ie.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!ie.isString(e)){if(ie.isString(i))return e.indexOf(i)!==-1;if(ie.isRegExp(i))return i.test(e)}}function UC(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function NC(t,e){const n=ie.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let mn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Ns(l);if(!u)throw new Error("header name must be a non-empty string");const f=ie.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=da(a))}const o=(a,l)=>ie.forEach(a,(c,u)=>s(c,u,l));if(ie.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(ie.isString(e)&&(e=e.trim())&&!DC(e))o(LC(e),n);else if(ie.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=Ns(e),e){const i=ie.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return IC(r);if(ie.isFunction(n))return n.call(this,r,i);if(ie.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ns(e),e){const i=ie.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||oc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Ns(o),o){const a=ie.findKey(i,o);a&&(!n||oc(i,i[a],a,n))&&(delete i[a],r=!0)}}return ie.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||oc(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return ie.forEach(this,(r,s)=>{const o=ie.findKey(i,s);if(o){n[o]=da(r),delete n[s];return}const a=e?UC(s):String(s).trim();a!==s&&delete n[s],n[a]=da(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return ie.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&ie.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[yp]=this[yp]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Ns(o);i[a]||(NC(r,o),i[a]=!0)}return ie.isArray(e)?e.forEach(s):s(e),this}};mn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ie.reduceDescriptors(mn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});ie.freezeMethods(mn);function ac(t,e){const n=this||bo,i=e||n,r=mn.from(i.headers);let s=i.data;return ie.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function P_(t){return!!(t&&t.__CANCEL__)}function bs(t,e,n){je.call(this,t??"canceled",je.ERR_CANCELED,e,n),this.name="CanceledError"}ie.inherits(bs,je,{__CANCEL__:!0});function L_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new je("Request failed with status code "+n.status,[je.ERR_BAD_REQUEST,je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function OC(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function FC(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(h*1e3/p):void 0}}function BC(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Ca=(t,e,n=3)=>{let i=0;const r=FC(50,250);return BC(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Ep=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Mp=t=>(...e)=>ie.asap(()=>t(...e)),kC=tn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,tn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(tn.origin),tn.navigator&&/(msie|trident)/i.test(tn.navigator.userAgent)):()=>!0,HC=tn.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];ie.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ie.isString(i)&&o.push("path="+i),ie.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function VC(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function zC(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function I_(t,e,n){let i=!VC(e);return t&&i||n==!1?zC(t,e):e}const bp=t=>t instanceof mn?{...t}:t;function Lr(t,e){e=e||{};const n={};function i(c,u,f,h){return ie.isPlainObject(c)&&ie.isPlainObject(u)?ie.merge.call({caseless:h},c,u):ie.isPlainObject(u)?ie.merge({},u):ie.isArray(u)?u.slice():u}function r(c,u,f,h){if(ie.isUndefined(u)){if(!ie.isUndefined(c))return i(void 0,c,f,h)}else return i(c,u,f,h)}function s(c,u){if(!ie.isUndefined(u))return i(void 0,u)}function o(c,u){if(ie.isUndefined(u)){if(!ie.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(bp(c),bp(u),f,!0)};return ie.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,h=f(t[u],e[u],u);ie.isUndefined(h)&&f!==a||(n[u]=h)}),n}const D_=t=>{const e=Lr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=mn.from(o),e.url=A_(I_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(ie.isFormData(n)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(tn.hasStandardBrowserEnv&&(i&&ie.isFunction(i)&&(i=i(e)),i||i!==!1&&kC(e.url))){const c=r&&s&&HC.read(s);c&&o.set(r,c)}return e},GC=typeof XMLHttpRequest<"u",WC=GC&&function(t){return new Promise(function(n,i){const r=D_(t);let s=r.data;const o=mn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,h,p,_;function v(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function d(){if(!m)return;const E=mn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),P={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};L_(function(w){n(w),v()},function(w){i(w),v()},P),m=null}"onloadend"in m?m.onloadend=d:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(d)},m.onabort=function(){m&&(i(new je("Request aborted",je.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new je("Network Error",je.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const P=r.transitional||R_;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),i(new je(x,P.clarifyTimeoutError?je.ETIMEDOUT:je.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&ie.forEach(o.toJSON(),function(x,P){m.setRequestHeader(P,x)}),ie.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([h,_]=Ca(c,!0),m.addEventListener("progress",h)),l&&m.upload&&([f,p]=Ca(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=E=>{m&&(i(!E||E.type?new bs(null,t,m):E),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const S=OC(r.url);if(S&&tn.protocols.indexOf(S)===-1){i(new je("Unsupported protocol "+S+":",je.ERR_BAD_REQUEST,t));return}m.send(s||null)})},XC=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof je?u:new bs(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new je(`timeout ${e} of ms exceeded`,je.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>ie.asap(a),l}},$C=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},qC=async function*(t,e){for await(const n of YC(t))yield*$C(n,e)},YC=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Tp=(t,e,n,i)=>{const r=qC(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=s+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},sl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",U_=sl&&typeof ReadableStream=="function",jC=sl&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),N_=(t,...e)=>{try{return!!t(...e)}catch{return!1}},KC=U_&&N_(()=>{let t=!1;const e=new Request(tn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),wp=64*1024,Au=U_&&N_(()=>ie.isReadableStream(new Response("").body)),Pa={stream:Au&&(t=>t.body)};sl&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Pa[e]&&(Pa[e]=ie.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new je(`Response type '${e}' is not supported`,je.ERR_NOT_SUPPORT,i)})})})(new Response);const ZC=async t=>{if(t==null)return 0;if(ie.isBlob(t))return t.size;if(ie.isSpecCompliantForm(t))return(await new Request(tn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(ie.isArrayBufferView(t)||ie.isArrayBuffer(t))return t.byteLength;if(ie.isURLSearchParams(t)&&(t=t+""),ie.isString(t))return(await jC(t)).byteLength},JC=async(t,e)=>{const n=ie.toFiniteNumber(t.getContentLength());return n??ZC(e)},QC=sl&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:h}=D_(t);c=c?(c+"").toLowerCase():"text";let p=XC([r,s&&s.toAbortSignal()],o),_;const v=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&KC&&n!=="get"&&n!=="head"&&(m=await JC(u,i))!==0){let P=new Request(e,{method:"POST",body:i,duplex:"half"}),L;if(ie.isFormData(i)&&(L=P.headers.get("content-type"))&&u.setContentType(L),P.body){const[w,O]=Ep(m,Ca(Mp(l)));i=Tp(P.body,wp,w,O)}}ie.isString(f)||(f=f?"include":"omit");const d="credentials"in Request.prototype;_=new Request(e,{...h,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:d?f:void 0});let S=await fetch(_);const E=Au&&(c==="stream"||c==="response");if(Au&&(a||E&&v)){const P={};["status","statusText","headers"].forEach(A=>{P[A]=S[A]});const L=ie.toFiniteNumber(S.headers.get("content-length")),[w,O]=a&&Ep(L,Ca(Mp(a),!0))||[];S=new Response(Tp(S.body,wp,w,()=>{O&&O(),v&&v()}),P)}c=c||"text";let x=await Pa[ie.findKey(Pa,c)||"text"](S,t);return!E&&v&&v(),await new Promise((P,L)=>{L_(P,L,{data:x,headers:mn.from(S.headers),status:S.status,statusText:S.statusText,config:t,request:_})})}catch(d){throw v&&v(),d&&d.name==="TypeError"&&/fetch/i.test(d.message)?Object.assign(new je("Network Error",je.ERR_NETWORK,t,_),{cause:d.cause||d}):je.from(d,d&&d.code,t,_)}}),Ru={http:pC,xhr:WC,fetch:QC};ie.forEach(Ru,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ap=t=>`- ${t}`,eP=t=>ie.isFunction(t)||t===null||t===!1,O_={getAdapter:t=>{t=ie.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!eP(n)&&(i=Ru[(o=String(n)).toLowerCase()],i===void 0))throw new je(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Ap).join(`
`):" "+Ap(s[0]):"as no adapter specified";throw new je("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Ru};function lc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bs(null,t)}function Rp(t){return lc(t),t.headers=mn.from(t.headers),t.data=ac.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),O_.getAdapter(t.adapter||bo.adapter)(t).then(function(i){return lc(t),i.data=ac.call(t,t.transformResponse,i),i.headers=mn.from(i.headers),i},function(i){return P_(i)||(lc(t),i&&i.response&&(i.response.data=ac.call(t,t.transformResponse,i.response),i.response.headers=mn.from(i.response.headers))),Promise.reject(i)})}const F_="1.8.3",ol={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ol[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Cp={};ol.transitional=function(e,n,i){function r(s,o){return"[Axios v"+F_+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new je(r(o," has been removed"+(n?" in "+n:"")),je.ERR_DEPRECATED);return n&&!Cp[o]&&(Cp[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};ol.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function tP(t,e,n){if(typeof t!="object")throw new je("options must be an object",je.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new je("option "+s+" must be "+l,je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new je("Unknown option "+s,je.ERR_BAD_OPTION)}}const pa={assertOptions:tP,validators:ol},Zn=pa.validators;let wr=class{constructor(e){this.defaults=e,this.interceptors={request:new Sp,response:new Sp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Lr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&pa.assertOptions(i,{silentJSONParsing:Zn.transitional(Zn.boolean),forcedJSONParsing:Zn.transitional(Zn.boolean),clarifyTimeoutError:Zn.transitional(Zn.boolean)},!1),r!=null&&(ie.isFunction(r)?n.paramsSerializer={serialize:r}:pa.assertOptions(r,{encode:Zn.function,serialize:Zn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),pa.assertOptions(n,{baseUrl:Zn.spelling("baseURL"),withXsrfToken:Zn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&ie.merge(s.common,s[n.method]);s&&ie.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=mn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,h;if(!l){const _=[Rp.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),h=_.length,u=Promise.resolve(n);f<h;)u=u.then(_[f++],_[f++]);return u}h=a.length;let p=n;for(f=0;f<h;){const _=a[f++],v=a[f++];try{p=_(p)}catch(m){v.call(this,m);break}}try{u=Rp.call(this,p)}catch(_){return Promise.reject(_)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Lr(this.defaults,e);const n=I_(e.baseURL,e.url,e.allowAbsoluteUrls);return A_(n,e.params,e.paramsSerializer)}};ie.forEach(["delete","get","head","options"],function(e){wr.prototype[e]=function(n,i){return this.request(Lr(i||{},{method:e,url:n,data:(i||{}).data}))}});ie.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Lr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}wr.prototype[e]=n(),wr.prototype[e+"Form"]=n(!0)});let nP=class B_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new bs(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new B_(function(r){e=r}),cancel:e}}};function iP(t){return function(n){return t.apply(null,n)}}function rP(t){return ie.isObject(t)&&t.isAxiosError===!0}const Cu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cu).forEach(([t,e])=>{Cu[e]=t});function k_(t){const e=new wr(t),n=g_(wr.prototype.request,e);return ie.extend(n,wr.prototype,e,{allOwnKeys:!0}),ie.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return k_(Lr(t,r))},n}const Nt=k_(bo);Nt.Axios=wr;Nt.CanceledError=bs;Nt.CancelToken=nP;Nt.isCancel=P_;Nt.VERSION=F_;Nt.toFormData=rl;Nt.AxiosError=je;Nt.Cancel=Nt.CanceledError;Nt.all=function(e){return Promise.all(e)};Nt.spread=iP;Nt.isAxiosError=rP;Nt.mergeConfig=Lr;Nt.AxiosHeaders=mn;Nt.formToJSON=t=>C_(ie.isHTMLForm(t)?new FormData(t):t);Nt.getAdapter=O_.getAdapter;Nt.HttpStatusCode=Cu;Nt.default=Nt;const{Axios:VP,AxiosError:zP,CanceledError:GP,isCancel:WP,CancelToken:XP,VERSION:$P,all:qP,Cancel:YP,isAxiosError:jP,spread:KP,toFormData:ZP,AxiosHeaders:JP,HttpStatusCode:QP,formToJSON:eL,getAdapter:tL,mergeConfig:nL}=Nt,Pp=()=>Nt.create({baseURL:"https://dummyjson.com/auth/",timeout:1e3}),Lp={getUserFromLogin(t){return Pp().post("/login",t,{headers:{"Content-Type":"application/json"}})},getCurrentAuthByToken(t){return Pp().get("/me",{headers:{Authorization:`Bearer ${t}`}})}},Cf=Ku("user",()=>{const t=Ct(null),e=Ct(null),n=Ct(null),i=Ct(null);async function r(a,l){var c;try{const u=await Lp.getUserFromLogin({username:a,password:l,expiresponseInMins:1});e.value=u.data.accessToken,uo.push(((c=uo.currentRoute.value.query.redirect)==null?void 0:c.toString())||{name:"authentication"})}catch{n.value="Login failed"}}async function s(){try{const a=await Lp.getCurrentAuthByToken(e.value);return t.value=a.data,!0}catch(a){return i.value=a.status,!1}}function o(){t.value=null,e.value=null}return{user:t,accessToken:e,loginErr:n,authErr:i,handleLogin:r,handleAuth:s,$reset:o}}),sP={class:"auth-view"},oP={class:"auth"},aP={class:"auth-details"},lP={key:0},cP={key:1},uP={key:2},fP={key:3},hP={key:4},dP={key:0},pP={key:5},mP={class:"auth-button"},gP={class:"auth-button"},cc=3e3,_P=jt({__name:"AuthView",setup(t){const e=Cf(),n=Ct(!1),i=Ct(!1),r=Ct(!1),s=Ct(!1),o=Ct(!1),a=Ct(null),l=Ct(null);mm(async()=>{await e.handleAuth()});const c=async()=>{n.value=!0,s.value=!1,r.value=!1,i.value=await e.handleAuth(),n.value=!1,i.value?(a.value&&clearTimeout(a.value),r.value=!0,a.value=setTimeout(()=>{r.value=!1},cc)):(a.value&&clearTimeout(a.value),s.value=!0,a.value=setTimeout(()=>{s.value=!1},cc))},u=()=>{o.value=!1,e.user&&(l.value&&clearTimeout(l.value),o.value=!0,l.value=setTimeout(()=>{o.value=!1},cc))};return(f,h)=>{const p=Ai("router-link");return it(),pt("div",sP,[ve("div",oP,[ve("div",aP,[dn(e).user?(it(),pt("span",lP,[Jt(" Username: "+In(dn(e).user.username)+" ",1),h[0]||(h[0]=ve("br",null,null,-1)),Jt(" Email: "+In(dn(e).user.email)+" ",1),h[1]||(h[1]=ve("br",null,null,-1))])):(it(),pt("span",cP,"You are not login")),n.value?(it(),pt("span",uP,h[2]||(h[2]=[Jt(" Authenticating"),ve("br",null,null,-1)]))):ti("",!0),r.value?(it(),pt("span",fP,h[3]||(h[3]=[Jt(" Authentication success"),ve("br",null,null,-1)]))):ti("",!0),s.value?(it(),pt("span",hP,[h[4]||(h[4]=Jt(" Authentication failed ")),h[5]||(h[5]=ve("br",null,null,-1)),Jt(" Status Code: "+In(dn(e).authErr)+" ",1),h[6]||(h[6]=ve("br",null,null,-1)),dn(e).user?(it(),pt("span",dP,"Session expired")):ti("",!0)])):ti("",!0),o.value?(it(),pt("span",pP,h[7]||(h[7]=[Jt(" You are login"),ve("br",null,null,-1)]))):ti("",!0)]),ve("div",mP,[et(p,{to:{name:"login"},onClick:u},{default:Dt(()=>h[8]||(h[8]=[ve("i",{class:"fi fi-rr-sign-out-alt"},null,-1),ve("span",null,"Login",-1)])),_:1}),h[9]||(h[9]=ve("span",null,"Direct to login page if you are not login",-1))]),ve("div",gP,[et(p,{to:{name:"auth-content"}},{default:Dt(()=>h[10]||(h[10]=[ve("i",{class:"fi fi-rr-user-key"},null,-1),ve("span",null,[Jt("Can only"),ve("br"),Jt("access after login")],-1)])),_:1}),h[11]||(h[11]=ve("span",null,[Jt("Direct to content page if you are login "),ve("br"),Jt(" else will direct you to login page")],-1))]),ve("div",{class:"auth-button"},[ve("button",{onClick:c},h[12]||(h[12]=[ve("i",{class:"fi fi-rr-unlock"},null,-1),ve("span",null,"Authenticate",-1)])),h[13]||(h[13]=ve("span",null,"Check for authentication",-1))])])])}}}),vP=_n(_P,[["__scopeId","data-v-9d9dc826"]]),xP={class:"login"},SP={key:0},yP=jt({__name:"LoginView",setup(t){const e=Ct("emilys"),n=Ct("emilyspass"),i=Cf(),r=async()=>{await i.handleLogin(e.value,n.value)};return(s,o)=>(it(),pt("div",xP,[o[6]||(o[6]=ve("h1",null,"Login",-1)),ve("div",null,[o[2]||(o[2]=ve("span",null,"Username: ",-1)),Vf(ve("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,512),[[ph,e.value]]),o[3]||(o[3]=ve("br",null,null,-1)),o[4]||(o[4]=ve("span",null,"Password: ",-1)),Vf(ve("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,512),[[ph,n.value]]),o[5]||(o[5]=ve("br",null,null,-1)),ve("button",{onClick:r},"Login")]),dn(i).loginErr?(it(),pt("p",SP,In(dn(i).loginErr),1)):ti("",!0)]))}}),EP=_n(yP,[["__scopeId","data-v-6397f412"]]),MP={class:"auth-content"},bP=jt({__name:"AuthContentView",setup(t){const e=()=>{uo.push({name:"authentication"})};return(n,i)=>(it(),pt("div",MP,[i[0]||(i[0]=ve("span",null,"You have successfully login",-1)),ve("button",{onClick:e},"Back to Authentication Page")]))}}),TP=_n(bP,[["__scopeId","data-v-4ad585de"]]),wP={},AP={class:"blogs"};function RP(t,e){return it(),pt("div",AP,e[0]||(e[0]=[ve("h1",null,"Sorry",-1),ve("h2",null,"This page is not yet online",-1)]))}const CP=_n(wP,[["render",RP],["__scopeId","data-v-691128ac"]]),PP=jt({name:"homepage-background",setup(t,{expose:e}){const n=Ct(void 0),i=hm("background"),r=_o(),s=()=>!!n.value;return Ha(()=>{!s()&&i.value&&(i.value.style.cssText=`
          background-position: center;
          background-size: cover;
          background-image: url(${Ig});
        `);const o=new f_({canvas:n.value,antialias:!0,alpha:!0});o.shadowMap.enabled=!0,o.shadowMap.type=ff,o.setClearColor(0,0);const a=new Qg;let l=window.innerWidth/window.innerHeight;const c=new bf(-5,5,5/l,-5/l,0,1e3);c.position.set(0,10,50),c.lookAt(0,0,0);const u=new i_().load(m_);u.wrapS=Rr,u.wrapT=Rr,u.repeat.set(3,3);const f=new t_({color:16777215,map:u}),h=new n_({color:15658734}),p=new Ja({transparent:!0}),_=new Ji(20,20),v=new Ut(_,h),m=new Ut(_,p),d=new Ut(_,p),S=new Ut(_,p);v.position.set(0,0,-10),v.receiveShadow=!0,m.rotation.set(0,Math.PI/2,0),m.position.set(-5,0,0),d.rotation.set(0,-Math.PI/2,0),d.position.set(5,0,0),S.rotation.set(0,Math.PI,0),S.position.set(0,0,10),v.receiveShadow=!0;const E=new Ji(20,100),x=new Ut(E,h);x.position.set(0,-1,0),x.rotation.set(-Math.PI/2,0,0),x.receiveShadow=!0;const P=new s_;P.color.set(13421772);const L=new Ra(16777215);L.power=5e4,L.penumbra=.8,L.castShadow=!0,L.shadow.intensity=.8;const w=new Ra(14540253);w.angle=.08,w.penumbra=.8,w.castShadow=!0,w.position.set(-50,50,50),w.shadow.intensity=.8,r.theme==="light"?(P.intensity=1,L.angle=.1,L.position.set(50,50,50),w.power=0):(P.intensity=0,L.angle=.03,L.position.set(-50,50,50),w.power=5e3);function O(){r.theme==="light"?(P.intensity<1&&(P.intensity+=.05),L.angle<.1&&(L.angle+=.005),L.position.lerp(new $(50,50,50),.1),w.power=0):(P.intensity>0&&(P.intensity-=.05),L.angle>.03&&(L.angle-=.005),L.position.lerp(new $(-50,50,50),.1),w.power=5e3)}const A=1,b=new Qa(A,32,32),F=new Ut(b,f);F.castShadow=!0,F.receiveShadow=!0;const Y=new qt().attach(F);Y.position.set(3,0,-2),a.add(Y,x,v,m,d,S,P,L,w);const q=a.children.filter(W=>W!==Y),oe=new p_(q,c),ae=new d_(oe);ae.addInputListener();const te=new h_(Y,ae,oe);function K(){l=window.innerWidth/window.innerHeight,c.top=5/l,c.bottom=-5/l,c.updateProjectionMatrix(),O(),te.applyMovement(),i.value&&o.setSize(i.value.offsetWidth,i.value.offsetHeight),o.render(a,c)}o.setAnimationLoop(K),po(()=>{ae.removeInputListener()})}),e(),{canvas:n}}}),LP={ref:"background",class:"homepage-bg"},IP={ref:"canvas"};function DP(t,e,n,i,r,s){return it(),pt("div",LP,[ve("canvas",IP,null,512)],512)}const UP=_n(PP,[["render",DP],["__scopeId","data-v-75002a58"]]),H_=[{path:"/",name:"home",component:SR},{path:"/works",name:"works",component:TR},{path:"/blogs",name:"blogs",component:CP},{path:"/todos",name:"todos",component:CR},{path:"/authentication",name:"authentication",component:vP},{path:"/login",name:"login",component:EP,meta:{requireGuest:!0}},{path:"/auth-content",name:"auth-content",component:TP,meta:{requireAuth:!0}},{path:"/test",name:"test",component:UP,mata:{requireGuest:!0}}],uo=jE({history:bE("/my-site/"),scrollBehavior(){return{top:0}},routes:H_});uo.beforeEach(async(t,e,n)=>{const i=Cf(),r=sessionStorage.redirect;r?(H_.forEach(s=>{r===s.path&&(sessionStorage.removeItem("redirect"),n(r))}),n()):t.meta.requireAuth?await i.handleAuth()?n():n({name:"login",query:{redirect:t.fullPath}}):t.meta.requireGuest&&await i.handleAuth()?n({name:"authentication"}):n()});const uc={messages:{hello:"hello, i am",home:"home",work:"work",blog:"blog"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},fc={messages:{hello:"你好, 我是",home:"主頁",work:"經驗",blog:"博客"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},NP={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":uc.messages,"zh-TW":fc.messages},datetimeFormats:{"en-US":uc.dateTimeFormats,"zh-TW":fc.dateTimeFormats},numberFormats:{"en-US":uc.numberFormats,"zh-TW":fc.numberFormats}},OP=py(NP),FP=vx(),al=ux(qy);al.use(uo);al.use(OP);al.use(FP);al.mount("#app");
