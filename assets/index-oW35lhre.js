(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},hr=[],Jn=()=>{},Wp=()=>!1,il=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Yu=t=>t.startsWith("onUpdate:"),kt=Object.assign,$u=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},W_=Object.prototype.hasOwnProperty,ut=(t,e)=>W_.call(t,e),He=Array.isArray,dr=t=>sl(t)==="[object Map]",Xp=t=>sl(t)==="[object Set]",Ye=t=>typeof t=="function",Pt=t=>typeof t=="string",ns=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",Yp=t=>(yt(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),$p=Object.prototype.toString,sl=t=>$p.call(t),X_=t=>sl(t).slice(8,-1),qp=t=>sl(t)==="[object Object]",qu=t=>Pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qr=Xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Y_=/-\w/g,An=rl(t=>t.replace(Y_,e=>e.slice(1).toUpperCase())),$_=/\B([A-Z])/g,Bs=rl(t=>t.replace($_,"-$1").toLowerCase()),ol=rl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=rl(t=>t?`on${ol(t)}`:""),Xi=(t,e)=>!Object.is(t,e),Rl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},jp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},q_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},j_=t=>{const e=Pt(t)?Number(t):NaN;return isNaN(e)?t:e};let Qf;const al=()=>Qf||(Qf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ju(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Pt(i)?Q_(i):ju(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(t)||yt(t))return t}const K_=/;(?![^(]*\))/g,Z_=/:([^]+)/,J_=/\/\*[^]*?\*\//g;function Q_(t){const e={};return t.replace(J_,"").split(K_).forEach(n=>{if(n){const i=n.split(Z_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ko(t){let e="";if(Pt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=ko(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const e0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t0=Xu(e0);function Kp(t){return!!t||t===""}const Zp=t=>!!(t&&t.__v_isRef===!0),mo=t=>Pt(t)?t:t==null?"":He(t)||yt(t)&&(t.toString===$p||!Ye(t.toString))?Zp(t)?mo(t.value):JSON.stringify(t,Jp,2):String(t),Jp=(t,e)=>Zp(e)?Jp(t,e.value):dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Cl(i,r)+" =>"]=s,n),{})}:Xp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cl(n))}:ns(e)?Cl(e):yt(e)&&!He(e)&&!qp(e)?String(e):e,Cl=(t,e="")=>{var n;return ns(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class Qp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ku(t){return new Qp(t)}function em(){return jt}function n0(t,e=!1){jt&&jt.cleanups.push(t)}let xt;const Pl=new WeakSet;class tm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pl.has(this)&&(Pl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||im(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,eh(this),sm(this);const e=xt,n=kn;xt=this,kn=!0;try{return this.fn()}finally{rm(this),xt=e,kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qu(e);this.deps=this.depsTail=void 0,eh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cc(this)&&this.run()}get dirty(){return Cc(this)}}let nm=0,eo,to;function im(t,e=!1){if(t.flags|=8,e){t.next=to,to=t;return}t.next=eo,eo=t}function Zu(){nm++}function Ju(){if(--nm>0)return;if(to){let e=to;for(to=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;eo;){let e=eo;for(eo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function sm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function rm(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Qu(i),i0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Cc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(om(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function om(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===go)||(t.globalVersion=go,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Cc(t))))return;t.flags|=2;const e=t.dep,n=xt,i=kn;xt=t,kn=!0;try{sm(t);const s=t.fn(t._value);(e.version===0||Xi(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xt=n,kn=i,rm(t),t.flags&=-3}}function Qu(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Qu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function i0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let kn=!0;const am=[];function Ti(){am.push(kn),kn=!1}function wi(){const t=am.pop();kn=t===void 0?!0:t}function eh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xt;xt=void 0;try{e()}finally{xt=n}}}let go=0;class s0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ef{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!xt||!kn||xt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xt)n=this.activeLink=new s0(xt,this),xt.deps?(n.prevDep=xt.depsTail,xt.depsTail.nextDep=n,xt.depsTail=n):xt.deps=xt.depsTail=n,lm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=xt.depsTail,n.nextDep=void 0,xt.depsTail.nextDep=n,xt.depsTail=n,xt.deps===n&&(xt.deps=i)}return n}trigger(e){this.version++,go++,this.notify(e)}notify(e){Zu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ju()}}}function lm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ga=new WeakMap,Ps=Symbol(""),Pc=Symbol(""),_o=Symbol("");function Kt(t,e,n){if(kn&&xt){let i=Ga.get(t);i||Ga.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new ef),s.map=i,s.key=n),s.track()}}function _i(t,e,n,i,s,r){const o=Ga.get(t);if(!o){go++;return}const a=l=>{l&&l.trigger()};if(Zu(),e==="clear")o.forEach(a);else{const l=He(t),c=l&&qu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===_o||!ns(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(_o)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ps)),dr(t)&&a(o.get(Pc)));break;case"delete":l||(a(o.get(Ps)),dr(t)&&a(o.get(Pc)));break;case"set":dr(t)&&a(o.get(Ps));break}}Ju()}function r0(t,e){const n=Ga.get(t);return n&&n.get(e)}function Gs(t){const e=tt(t);return e===t?e:(Kt(e,"iterate",_o),wn(t)?e:e.map(Vt))}function ll(t){return Kt(t=tt(t),"iterate",_o),t}const o0={__proto__:null,[Symbol.iterator](){return Ll(this,Symbol.iterator,Vt)},concat(...t){return Gs(this).concat(...t.map(e=>He(e)?Gs(e):e))},entries(){return Ll(this,"entries",t=>(t[1]=Vt(t[1]),t))},every(t,e){return si(this,"every",t,e,void 0,arguments)},filter(t,e){return si(this,"filter",t,e,n=>n.map(Vt),arguments)},find(t,e){return si(this,"find",t,e,Vt,arguments)},findIndex(t,e){return si(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return si(this,"findLast",t,e,Vt,arguments)},findLastIndex(t,e){return si(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return si(this,"forEach",t,e,void 0,arguments)},includes(...t){return Il(this,"includes",t)},indexOf(...t){return Il(this,"indexOf",t)},join(t){return Gs(this).join(t)},lastIndexOf(...t){return Il(this,"lastIndexOf",t)},map(t,e){return si(this,"map",t,e,void 0,arguments)},pop(){return Br(this,"pop")},push(...t){return Br(this,"push",t)},reduce(t,...e){return th(this,"reduce",t,e)},reduceRight(t,...e){return th(this,"reduceRight",t,e)},shift(){return Br(this,"shift")},some(t,e){return si(this,"some",t,e,void 0,arguments)},splice(...t){return Br(this,"splice",t)},toReversed(){return Gs(this).toReversed()},toSorted(t){return Gs(this).toSorted(t)},toSpliced(...t){return Gs(this).toSpliced(...t)},unshift(...t){return Br(this,"unshift",t)},values(){return Ll(this,"values",Vt)}};function Ll(t,e,n){const i=ll(t),s=i[e]();return i!==t&&!wn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const a0=Array.prototype;function si(t,e,n,i,s,r){const o=ll(t),a=o!==t&&!wn(t),l=o[e];if(l!==a0[e]){const f=l.apply(t,r);return a?Vt(f):f}let c=n;o!==t&&(a?c=function(f,h){return n.call(this,Vt(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function th(t,e,n,i){const s=ll(t);let r=n;return s!==t&&(wn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Vt(a),l,t)}),s[e](r,...i)}function Il(t,e,n){const i=tt(t);Kt(i,"iterate",_o);const s=i[e](...n);return(s===-1||s===!1)&&sf(n[0])?(n[0]=tt(n[0]),i[e](...n)):s}function Br(t,e,n=[]){Ti(),Zu();const i=tt(t)[e].apply(t,n);return Ju(),wi(),i}const l0=Xu("__proto__,__v_isRef,__isVue"),cm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ns));function c0(t){ns(t)||(t=String(t));const e=tt(this);return Kt(e,"has",t),e.hasOwnProperty(t)}class um{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?x0:pm:r?dm:hm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!s){let l;if(o&&(l=o0[n]))return l;if(n==="hasOwnProperty")return c0}const a=Reflect.get(e,n,Ct(e)?e:i);if((ns(n)?cm.has(n):l0(n))||(s||Kt(e,"get",n),r))return a;if(Ct(a)){const l=o&&qu(n)?a:a.value;return s&&yt(l)?Ic(l):l}return yt(a)?s?Ic(a):zo(a):a}}class fm extends um{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=Ki(r);if(!wn(i)&&!Ki(i)&&(r=tt(r),i=tt(i)),!He(e)&&Ct(r)&&!Ct(i))return l||(r.value=i),!0}const o=He(e)&&qu(n)?Number(n)<e.length:ut(e,n),a=Reflect.set(e,n,i,Ct(e)?e:s);return e===tt(s)&&(o?Xi(i,r)&&_i(e,"set",n,i):_i(e,"add",n,i)),a}deleteProperty(e,n){const i=ut(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&_i(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ns(n)||!cm.has(n))&&Kt(e,"has",n),i}ownKeys(e){return Kt(e,"iterate",He(e)?"length":Ps),Reflect.ownKeys(e)}}class u0 extends um{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const f0=new fm,h0=new u0,d0=new fm(!0);const Lc=t=>t,Zo=t=>Reflect.getPrototypeOf(t);function p0(t,e,n){return function(...i){const s=this.__v_raw,r=tt(s),o=dr(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Lc:e?Wa:Vt;return!e&&Kt(r,"iterate",l?Pc:Ps),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Jo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function m0(t,e){const n={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);t||(Xi(s,a)&&Kt(o,"get",s),Kt(o,"get",a));const{has:l}=Zo(o),c=e?Lc:t?Wa:Vt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Kt(tt(s),"iterate",Ps),s.size},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return t||(Xi(s,a)&&Kt(o,"has",s),Kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?Lc:t?Wa:Vt;return!t&&Kt(l,"iterate",Ps),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return kt(n,t?{add:Jo("add"),set:Jo("set"),delete:Jo("delete"),clear:Jo("clear")}:{add(s){!e&&!wn(s)&&!Ki(s)&&(s=tt(s));const r=tt(this);return Zo(r).has.call(r,s)||(r.add(s),_i(r,"add",s,s)),this},set(s,r){!e&&!wn(r)&&!Ki(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=Zo(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Xi(r,u)&&_i(o,"set",s,r):_i(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=Zo(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&_i(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&_i(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=p0(s,t,e)}),n}function tf(t,e){const n=m0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ut(n,s)&&s in i?n:i,s,r)}const g0={get:tf(!1,!1)},_0={get:tf(!1,!0)},v0={get:tf(!0,!1)};const hm=new WeakMap,dm=new WeakMap,pm=new WeakMap,x0=new WeakMap;function y0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S0(t){return t.__v_skip||!Object.isExtensible(t)?0:y0(X_(t))}function zo(t){return Ki(t)?t:nf(t,!1,f0,g0,hm)}function mm(t){return nf(t,!1,d0,_0,dm)}function Ic(t){return nf(t,!0,h0,v0,pm)}function nf(t,e,n,i,s){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=S0(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function Yi(t){return Ki(t)?Yi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ki(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function sf(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function rf(t){return!ut(t,"__v_skip")&&Object.isExtensible(t)&&jp(t,"__v_skip",!0),t}const Vt=t=>yt(t)?zo(t):t,Wa=t=>yt(t)?Ic(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function ei(t){return gm(t,!1)}function of(t){return gm(t,!0)}function gm(t,e){return Ct(t)?t:new M0(t,e)}class M0{constructor(e,n){this.dep=new ef,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:tt(e),this._value=n?e:Vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||Ki(e);e=i?e:tt(e),Xi(e,n)&&(this._rawValue=e,this._value=i?e:Vt(e),this.dep.trigger())}}function Mi(t){return Ct(t)?t.value:t}const E0={get:(t,e,n)=>e==="__v_raw"?t:Mi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Ct(s)&&!Ct(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function _m(t){return Yi(t)?t:new Proxy(t,E0)}function b0(t){const e=He(t)?new Array(t.length):{};for(const n in t)e[n]=w0(t,n);return e}class T0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return r0(tt(this._object),this._key)}}function w0(t,e,n){const i=t[e];return Ct(i)?i:new T0(t,e,n)}class A0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ef(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xt!==this)return im(this,!0),!0}get value(){const e=this.dep.track();return om(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function R0(t,e,n=!1){let i,s;return Ye(t)?i=t:(i=t.get,s=t.set),new A0(i,s,n)}const Qo={},Xa=new WeakMap;let ys;function C0(t,e=!1,n=ys){if(n){let i=Xa.get(n);i||Xa.set(n,i=[]),i.push(t)}}function P0(t,e,n=vt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=v=>s?v:wn(v)||s===!1||s===0?Gi(v,1):Gi(v);let u,f,h,p,_=!1,x=!1;if(Ct(t)?(f=()=>t.value,_=wn(t)):Yi(t)?(f=()=>c(t),_=!0):He(t)?(x=!0,_=t.some(v=>Yi(v)||wn(v)),f=()=>t.map(v=>{if(Ct(v))return v.value;if(Yi(v))return c(v);if(Ye(v))return l?l(v,2):v()})):Ye(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Ti();try{h()}finally{wi()}}const v=ys;ys=u;try{return l?l(t,3,[p]):t(p)}finally{ys=v}}:f=Jn,e&&s){const v=f,L=s===!0?1/0:s;f=()=>Gi(v(),L)}const m=em(),d=()=>{u.stop(),m&&m.active&&$u(m.effects,u)};if(r&&e){const v=e;e=(...L)=>{v(...L),d()}}let S=x?new Array(t.length).fill(Qo):Qo;const y=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const L=u.run();if(s||_||(x?L.some((P,A)=>Xi(P,S[A])):Xi(L,S))){h&&h();const P=ys;ys=u;try{const A=[L,S===Qo?void 0:x&&S[0]===Qo?[]:S,p];S=L,l?l(e,3,A):e(...A)}finally{ys=P}}}else u.run()};return a&&a(y),u=new tm(f),u.scheduler=o?()=>o(y,!1):y,p=v=>C0(v,!1,u),h=u.onStop=()=>{const v=Xa.get(u);if(v){if(l)l(v,4);else for(const L of v)L();Xa.delete(u)}},e?i?y(!0):S=u.run():o?o(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Gi(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ct(t))Gi(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)Gi(t[i],e,n);else if(Xp(t)||dr(t))t.forEach(i=>{Gi(i,e,n)});else if(qp(t)){for(const i in t)Gi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Gi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ho(t,e,n,i){try{return i?t(...i):t()}catch(s){cl(s,e,n)}}function Vn(t,e,n,i){if(Ye(t)){const s=Ho(t,e,n,i);return s&&Yp(s)&&s.catch(r=>{cl(r,e,n)}),s}if(He(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Vn(t[r],e,n,i));return s}}function cl(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Ti(),Ho(r,null,10,[t,l,c]),wi();return}}L0(t,n,s,i,o)}function L0(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const sn=[];let $n=-1;const pr=[];let zi=null,or=0;const vm=Promise.resolve();let Ya=null;function af(t){const e=Ya||vm;return t?e.then(this?t.bind(this):t):e}function I0(t){let e=$n+1,n=sn.length;for(;e<n;){const i=e+n>>>1,s=sn[i],r=vo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function lf(t){if(!(t.flags&1)){const e=vo(t),n=sn[sn.length-1];!n||!(t.flags&2)&&e>=vo(n)?sn.push(t):sn.splice(I0(e),0,t),t.flags|=1,xm()}}function xm(){Ya||(Ya=vm.then(Sm))}function D0(t){He(t)?pr.push(...t):zi&&t.id===-1?zi.splice(or+1,0,t):t.flags&1||(pr.push(t),t.flags|=1),xm()}function nh(t,e,n=$n+1){for(;n<sn.length;n++){const i=sn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;sn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ym(t){if(pr.length){const e=[...new Set(pr)].sort((n,i)=>vo(n)-vo(i));if(pr.length=0,zi){zi.push(...e);return}for(zi=e,or=0;or<zi.length;or++){const n=zi[or];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zi=null,or=0}}const vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sm(t){try{for($n=0;$n<sn.length;$n++){const e=sn[$n];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;$n<sn.length;$n++){const e=sn[$n];e&&(e.flags&=-2)}$n=-1,sn.length=0,ym(),Ya=null,(sn.length||pr.length)&&Sm()}}let Un=null,Mm=null;function $a(t){const e=Un;return Un=t,Mm=t&&t.type.__scopeId||null,e}function Ds(t,e=Un,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Ka(-1);const r=$a(e);let o;try{o=t(...s)}finally{$a(r),i._d&&Ka(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function us(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ti(),Vn(l,n,8,[t.el,a,t,e]),wi())}}const N0=Symbol("_vte"),Em=t=>t.__isTeleport,gi=Symbol("_leaveCb"),ea=Symbol("_enterCb");function U0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ks(()=>{t.isMounted=!0}),Im(()=>{t.isUnmounting=!0}),t}const Mn=[Function,Array],bm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},Tm=t=>{const e=t.subTree;return e.component?Tm(e.component):e},F0={name:"BaseTransition",props:bm,setup(t,{slots:e}){const n=Ai(),i=U0();return()=>{const s=e.default&&Rm(e.default(),!0);if(!s||!s.length)return;const r=wm(s),o=tt(t),{mode:a}=o;if(i.isLeaving)return Dl(r);const l=ih(r);if(!l)return Dl(r);let c=Dc(l,o,i,n,f=>c=f);l.type!==rn&&xo(l,c);let u=n.subTree&&ih(n.subTree);if(u&&u.type!==rn&&!bs(u,l)&&Tm(n).type!==rn){let f=Dc(u,o,i,n);if(xo(u,f),a==="out-in"&&l.type!==rn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Dl(r);a==="in-out"&&l.type!==rn?f.delayLeave=(h,p,_)=>{const x=Am(i,u);x[String(u.key)]=u,h[gi]=()=>{p(),h[gi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function wm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==rn){e=n;break}}return e}const O0=F0;function Am(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Dc(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:m,onAppear:d,onAfterAppear:S,onAppearCancelled:y}=e,v=String(t.key),L=Am(n,t),P=(E,b)=>{E&&Vn(E,i,9,b)},A=(E,b)=>{const F=b[1];P(E,b),He(E)?E.every(B=>B.length<=1)&&F():E.length<=1&&F()},U={mode:o,persisted:a,beforeEnter(E){let b=l;if(!n.isMounted)if(r)b=m||l;else return;E[gi]&&E[gi](!0);const F=L[v];F&&bs(t,F)&&F.el[gi]&&F.el[gi](),P(b,[E])},enter(E){let b=c,F=u,B=f;if(!n.isMounted)if(r)b=d||c,F=S||u,B=y||f;else return;let X=!1;const ie=E[ea]=oe=>{X||(X=!0,oe?P(B,[E]):P(F,[E]),U.delayedLeave&&U.delayedLeave(),E[ea]=void 0)};b?A(b,[E,ie]):ie()},leave(E,b){const F=String(t.key);if(E[ea]&&E[ea](!0),n.isUnmounting)return b();P(h,[E]);let B=!1;const X=E[gi]=ie=>{B||(B=!0,b(),ie?P(x,[E]):P(_,[E]),E[gi]=void 0,L[F]===t&&delete L[F])};L[F]=t,p?A(p,[E,X]):X()},clone(E){const b=Dc(E,e,n,i,s);return s&&s(b),b}};return U}function Dl(t){if(ul(t))return t=Zi(t),t.children=null,t}function ih(t){if(!ul(t))return Em(t.type)&&t.children?wm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Ye(n.default))return n.default()}}function xo(t,e){t.shapeFlag&6&&t.component?(t.transition=e,xo(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rm(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Gt?(o.patchFlag&128&&s++,i=i.concat(Rm(o.children,e,a))):(e||o.type!==rn)&&i.push(a!=null?Zi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function un(t,e){return Ye(t)?kt({name:t.name},e,{setup:t}):t}function Cm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function no(t){const e=Ai(),n=of(null);if(e){const s=e.refs===vt?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}const qa=new WeakMap;function io(t,e,n,i,s=!1){if(He(t)){t.forEach((_,x)=>io(_,e&&(He(e)?e[x]:e),n,i,s));return}if(so(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&io(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?pf(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,f=a.setupState,h=tt(f),p=f===vt?Wp:_=>ut(h,_);if(c!=null&&c!==l){if(sh(e),Pt(c))u[c]=null,p(c)&&(f[c]=null);else if(Ct(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Ye(l))Ho(l,a,12,[o,u]);else{const _=Pt(l),x=Ct(l);if(_||x){const m=()=>{if(t.f){const d=_?p(l)?f[l]:u[l]:l.value;if(s)He(d)&&$u(d,r);else if(He(d))d.includes(r)||d.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const S=[r];l.value=S,t.k&&(u[t.k]=S)}}else _?(u[l]=o,p(l)&&(f[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const d=()=>{m(),qa.delete(t)};d.id=-1,qa.set(t,d),pn(d,n)}else sh(t),m()}}}function sh(t){const e=qa.get(t);e&&(e.flags|=8,qa.delete(t))}al().requestIdleCallback;al().cancelIdleCallback;const so=t=>!!t.type.__asyncLoader,ul=t=>t.type.__isKeepAlive;function B0(t,e){Pm(t,"a",e)}function k0(t,e){Pm(t,"da",e)}function Pm(t,e,n=Zt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fl(e,i,n),n){let s=n.parent;for(;s&&s.parent;)ul(s.parent.vnode)&&z0(i,e,n,s),s=s.parent}}function z0(t,e,n,i){const s=fl(e,t,i,!0);Lr(()=>{$u(i[e],s)},n)}function fl(t,e,n=Zt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ti();const a=Go(n),l=Vn(e,n,t,o);return a(),wi(),l});return i?s.unshift(r):s.push(r),r}}const Ri=t=>(e,n=Zt)=>{(!So||t==="sp")&&fl(t,(...i)=>e(...i),n)},H0=Ri("bm"),ks=Ri("m"),V0=Ri("bu"),Lm=Ri("u"),Im=Ri("bum"),Lr=Ri("um"),G0=Ri("sp"),W0=Ri("rtg"),X0=Ri("rtc");function Y0(t,e=Zt){fl("ec",t,e)}const Dm="components";function Ls(t,e){return Nm(Dm,t,!0,e)||t}const $0=Symbol.for("v-ndc");function q0(t){return Pt(t)&&Nm(Dm,t,!1)||t}function Nm(t,e,n=!0,i=!1){const s=Un||Zt;if(s){const r=s.type;{const a=Bv(r,!1);if(a&&(a===e||a===An(e)||a===ol(An(e))))return r}const o=rh(s[t]||r[t],e)||rh(s.appContext[t],e);return!o&&i?r:o}}function rh(t,e){return t&&(t[e]||t[An(e)]||t[ol(An(e))])}function j0(t,e,n,i){let s;const r=n,o=He(t);if(o||Pt(t)){const a=o&&Yi(t);let l=!1,c=!1;a&&(l=!wn(t),c=Ki(t),t=ll(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?Wa(Vt(t[u])):Vt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Nc=t=>t?Qm(t)?pf(t):Nc(t.parent):null,ro=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nc(t.parent),$root:t=>Nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fm(t),$forceUpdate:t=>t.f||(t.f=()=>{lf(t.update)}),$nextTick:t=>t.n||(t.n=af.bind(t.proxy)),$watch:t=>_v.bind(t)}),Nl=(t,e)=>t!==vt&&!t.__isScriptSetup&&ut(t,e),K0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Nl(i,e))return o[e]=1,i[e];if(s!==vt&&ut(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ut(c,e))return o[e]=3,r[e];if(n!==vt&&ut(n,e))return o[e]=4,n[e];Uc&&(o[e]=0)}}const u=ro[e];let f,h;if(u)return e==="$attrs"&&Kt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==vt&&ut(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ut(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Nl(s,e)?(s[e]=n,!0):i!==vt&&ut(i,e)?(i[e]=n,!0):ut(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(n[a]||t!==vt&&a[0]!=="$"&&ut(t,a)||Nl(e,a)||(l=r[0])&&ut(l,a)||ut(i,a)||ut(ro,a)||ut(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ut(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function oh(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Uc=!0;function Z0(t){const e=Fm(t),n=t.proxy,i=t.ctx;Uc=!1,e.beforeCreate&&ah(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:m,beforeDestroy:d,beforeUnmount:S,destroyed:y,unmounted:v,render:L,renderTracked:P,renderTriggered:A,errorCaptured:U,serverPrefetch:E,expose:b,inheritAttrs:F,components:B,directives:X,filters:ie}=e;if(c&&J0(c,i,null),o)for(const J in o){const $=o[J];Ye($)&&(i[J]=$.bind(n))}if(s){const J=s.call(n,n);yt(J)&&(t.data=zo(J))}if(Uc=!0,r)for(const J in r){const $=r[J],pe=Ye($)?$.bind(n,n):Ye($.get)?$.get.bind(n,n):Jn,ve=!Ye($)&&Ye($.set)?$.set.bind(n):Jn,we=Tt({get:pe,set:ve});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>we.value,set:Oe=>we.value=Oe})}if(a)for(const J in a)Um(a[J],i,n,J);if(l){const J=Ye(l)?l.call(n):l;Reflect.ownKeys(J).forEach($=>{Pa($,J[$])})}u&&ah(u,t,"c");function ee(J,$){He($)?$.forEach(pe=>J(pe.bind(n))):$&&J($.bind(n))}if(ee(H0,f),ee(ks,h),ee(V0,p),ee(Lm,_),ee(B0,x),ee(k0,m),ee(Y0,U),ee(X0,P),ee(W0,A),ee(Im,S),ee(Lr,v),ee(G0,E),He(b))if(b.length){const J=t.exposed||(t.exposed={});b.forEach($=>{Object.defineProperty(J,$,{get:()=>n[$],set:pe=>n[$]=pe,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===Jn&&(t.render=L),F!=null&&(t.inheritAttrs=F),B&&(t.components=B),X&&(t.directives=X),E&&Cm(t)}function J0(t,e,n=Jn){He(t)&&(t=Fc(t));for(const i in t){const s=t[i];let r;yt(s)?"default"in s?r=zn(s.from||i,s.default,!0):r=zn(s.from||i):r=zn(s),Ct(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ah(t,e,n){Vn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Um(t,e,n,i){let s=i.includes(".")?qm(n,i):()=>n[i];if(Pt(t)){const r=e[t];Ye(r)&&Ei(s,r)}else if(Ye(t))Ei(s,t.bind(n));else if(yt(t))if(He(t))t.forEach(r=>Um(r,e,n,i));else{const r=Ye(t.handler)?t.handler.bind(n):e[t.handler];Ye(r)&&Ei(s,r,t)}}function Fm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ja(l,c,o,!0)),ja(l,e,o)),yt(e)&&r.set(e,l),l}function ja(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ja(t,r,n,!0),s&&s.forEach(o=>ja(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Q0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Q0={data:lh,props:ch,emits:ch,methods:jr,computed:jr,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:jr,directives:jr,watch:tv,provide:lh,inject:ev};function lh(t,e){return e?t?function(){return kt(Ye(t)?t.call(this,this):t,Ye(e)?e.call(this,this):e)}:e:t}function ev(t,e){return jr(Fc(t),Fc(e))}function Fc(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function jr(t,e){return t?kt(Object.create(null),t,e):e}function ch(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:kt(Object.create(null),oh(t),oh(e??{})):e}function tv(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function Om(){return{app:null,config:{isNativeTag:Wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function iv(t,e){return function(i,s=null){Ye(i)||(i=kt({},i)),s!=null&&!yt(s)&&(s=null);const r=Om(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:nv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:zv,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Ye(u.install)?(o.add(u),u.install(c,...f)):Ye(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||Qe(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,pf(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Vn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Is;Is=c;try{return u()}finally{Is=f}}};return c}}let Is=null;function Pa(t,e){if(Zt){let n=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===n&&(n=Zt.provides=Object.create(i)),n[t]=e}}function zn(t,e,n=!1){const i=Ai();if(i||Is){let s=Is?Is._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ye(e)?e.call(i&&i.proxy):e}}function sv(){return!!(Ai()||Is)}const Bm={},km=()=>Object.create(Bm),zm=t=>Object.getPrototypeOf(t)===Bm;function rv(t,e,n,i=!1){const s={},r=km();t.propsDefaults=Object.create(null),Hm(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:mm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function ov(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=tt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(hl(t.emitsOptions,h))continue;const p=e[h];if(l)if(ut(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const _=An(h);s[_]=Oc(l,a,_,p,t,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Hm(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!ut(e,f)&&((u=Bs(f))===f||!ut(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Oc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!ut(e,f))&&(delete r[f],c=!0)}c&&_i(t.attrs,"set","")}function Hm(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Qr(l))continue;const c=e[l];let u;s&&ut(s,u=An(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:hl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(n),c=a||vt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Oc(s,l,f,c[f],t,!ut(c,f))}}return o}function Oc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ut(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Go(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Bs(n))&&(i=!0))}return i}const av=new WeakMap;function Vm(t,e,n=!1){const i=n?av:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Ye(t)){const u=f=>{l=!0;const[h,p]=Vm(f,e,!0);kt(o,h),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return yt(t)&&i.set(t,hr),hr;if(He(r))for(let u=0;u<r.length;u++){const f=An(r[u]);uh(f)&&(o[f]=vt)}else if(r)for(const u in r){const f=An(u);if(uh(f)){const h=r[u],p=o[f]=He(h)||Ye(h)?{type:h}:kt({},h),_=p.type;let x=!1,m=!0;if(He(_))for(let d=0;d<_.length;++d){const S=_[d],y=Ye(S)&&S.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=Ye(_)&&_.name==="Boolean";p[0]=x,p[1]=m,(x||ut(p,"default"))&&a.push(f)}}const c=[o,a];return yt(t)&&i.set(t,c),c}function uh(t){return t[0]!=="$"&&!Qr(t)}const cf=t=>t==="_"||t==="_ctx"||t==="$stable",uf=t=>He(t)?t.map(qn):[qn(t)],lv=(t,e,n)=>{if(e._n)return e;const i=Ds((...s)=>uf(e(...s)),n);return i._c=!1,i},Gm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(cf(s))continue;const r=t[s];if(Ye(r))e[s]=lv(s,r,i);else if(r!=null){const o=uf(r);e[s]=()=>o}}},Wm=(t,e)=>{const n=uf(e);t.slots.default=()=>n},Xm=(t,e,n)=>{for(const i in e)(n||!cf(i))&&(t[i]=e[i])},cv=(t,e,n)=>{const i=t.slots=km();if(t.vnode.shapeFlag&32){const s=e._;s?(Xm(i,e,n),n&&jp(i,"_",s,!0)):Gm(e,i)}else e&&Wm(t,e)},uv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Xm(s,e,n):(r=!e.$stable,Gm(e,s)),o=e}else e&&(Wm(t,e),o={default:1});if(r)for(const a in s)!cf(a)&&o[a]==null&&delete s[a]},pn=Tv;function fv(t){return hv(t)}function hv(t,e){const n=al();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Jn,insertStaticContent:_}=t,x=(D,N,M,ne=null,Z=null,K=null,w=void 0,C=null,O=!!N.dynamicChildren)=>{if(D===N)return;D&&!bs(D,N)&&(ne=V(D),Oe(D,Z,K,!0),D=null),N.patchFlag===-2&&(O=!1,N.dynamicChildren=null);const{type:k,ref:he,shapeFlag:T}=N;switch(k){case Vo:m(D,N,M,ne);break;case rn:d(D,N,M,ne);break;case Fl:D==null&&S(N,M,ne,w);break;case Gt:B(D,N,M,ne,Z,K,w,C,O);break;default:T&1?L(D,N,M,ne,Z,K,w,C,O):T&6?X(D,N,M,ne,Z,K,w,C,O):(T&64||T&128)&&k.process(D,N,M,ne,Z,K,w,C,O,ae)}he!=null&&Z?io(he,D&&D.ref,K,N||D,!N):he==null&&D&&D.ref!=null&&io(D.ref,null,K,D,!0)},m=(D,N,M,ne)=>{if(D==null)i(N.el=a(N.children),M,ne);else{const Z=N.el=D.el;N.children!==D.children&&c(Z,N.children)}},d=(D,N,M,ne)=>{D==null?i(N.el=l(N.children||""),M,ne):N.el=D.el},S=(D,N,M,ne)=>{[D.el,D.anchor]=_(D.children,N,M,ne,D.el,D.anchor)},y=({el:D,anchor:N},M,ne)=>{let Z;for(;D&&D!==N;)Z=h(D),i(D,M,ne),D=Z;i(N,M,ne)},v=({el:D,anchor:N})=>{let M;for(;D&&D!==N;)M=h(D),s(D),D=M;s(N)},L=(D,N,M,ne,Z,K,w,C,O)=>{N.type==="svg"?w="svg":N.type==="math"&&(w="mathml"),D==null?P(N,M,ne,Z,K,w,C,O):E(D,N,Z,K,w,C,O)},P=(D,N,M,ne,Z,K,w,C)=>{let O,k;const{props:he,shapeFlag:T,transition:g,dirs:I}=D;if(O=D.el=o(D.type,K,he&&he.is,he),T&8?u(O,D.children):T&16&&U(D.children,O,null,ne,Z,Ul(D,K),w,C),I&&us(D,null,ne,"created"),A(O,D,D.scopeId,w,ne),he){for(const j in he)j!=="value"&&!Qr(j)&&r(O,j,null,he[j],K,ne);"value"in he&&r(O,"value",null,he.value,K),(k=he.onVnodeBeforeMount)&&Wn(k,ne,D)}I&&us(D,null,ne,"beforeMount");const G=dv(Z,g);G&&g.beforeEnter(O),i(O,N,M),((k=he&&he.onVnodeMounted)||G||I)&&pn(()=>{k&&Wn(k,ne,D),G&&g.enter(O),I&&us(D,null,ne,"mounted")},Z)},A=(D,N,M,ne,Z)=>{if(M&&p(D,M),ne)for(let K=0;K<ne.length;K++)p(D,ne[K]);if(Z){let K=Z.subTree;if(N===K||Km(K.type)&&(K.ssContent===N||K.ssFallback===N)){const w=Z.vnode;A(D,w,w.scopeId,w.slotScopeIds,Z.parent)}}},U=(D,N,M,ne,Z,K,w,C,O=0)=>{for(let k=O;k<D.length;k++){const he=D[k]=C?Hi(D[k]):qn(D[k]);x(null,he,N,M,ne,Z,K,w,C)}},E=(D,N,M,ne,Z,K,w)=>{const C=N.el=D.el;let{patchFlag:O,dynamicChildren:k,dirs:he}=N;O|=D.patchFlag&16;const T=D.props||vt,g=N.props||vt;let I;if(M&&fs(M,!1),(I=g.onVnodeBeforeUpdate)&&Wn(I,M,N,D),he&&us(N,D,M,"beforeUpdate"),M&&fs(M,!0),(T.innerHTML&&g.innerHTML==null||T.textContent&&g.textContent==null)&&u(C,""),k?b(D.dynamicChildren,k,C,M,ne,Ul(N,Z),K):w||$(D,N,C,null,M,ne,Ul(N,Z),K,!1),O>0){if(O&16)F(C,T,g,M,Z);else if(O&2&&T.class!==g.class&&r(C,"class",null,g.class,Z),O&4&&r(C,"style",T.style,g.style,Z),O&8){const G=N.dynamicProps;for(let j=0;j<G.length;j++){const q=G[j],ye=T[q],fe=g[q];(fe!==ye||q==="value")&&r(C,q,ye,fe,Z,M)}}O&1&&D.children!==N.children&&u(C,N.children)}else!w&&k==null&&F(C,T,g,M,Z);((I=g.onVnodeUpdated)||he)&&pn(()=>{I&&Wn(I,M,N,D),he&&us(N,D,M,"updated")},ne)},b=(D,N,M,ne,Z,K,w)=>{for(let C=0;C<N.length;C++){const O=D[C],k=N[C],he=O.el&&(O.type===Gt||!bs(O,k)||O.shapeFlag&198)?f(O.el):M;x(O,k,he,null,ne,Z,K,w,!0)}},F=(D,N,M,ne,Z)=>{if(N!==M){if(N!==vt)for(const K in N)!Qr(K)&&!(K in M)&&r(D,K,N[K],null,Z,ne);for(const K in M){if(Qr(K))continue;const w=M[K],C=N[K];w!==C&&K!=="value"&&r(D,K,C,w,Z,ne)}"value"in M&&r(D,"value",N.value,M.value,Z)}},B=(D,N,M,ne,Z,K,w,C,O)=>{const k=N.el=D?D.el:a(""),he=N.anchor=D?D.anchor:a("");let{patchFlag:T,dynamicChildren:g,slotScopeIds:I}=N;I&&(C=C?C.concat(I):I),D==null?(i(k,M,ne),i(he,M,ne),U(N.children||[],M,he,Z,K,w,C,O)):T>0&&T&64&&g&&D.dynamicChildren?(b(D.dynamicChildren,g,M,Z,K,w,C),(N.key!=null||Z&&N===Z.subTree)&&Ym(D,N,!0)):$(D,N,M,he,Z,K,w,C,O)},X=(D,N,M,ne,Z,K,w,C,O)=>{N.slotScopeIds=C,D==null?N.shapeFlag&512?Z.ctx.activate(N,M,ne,w,O):ie(N,M,ne,Z,K,w,O):oe(D,N,O)},ie=(D,N,M,ne,Z,K,w)=>{const C=D.component=Dv(D,ne,Z);if(ul(D)&&(C.ctx.renderer=ae),Nv(C,!1,w),C.asyncDep){if(Z&&Z.registerDep(C,ee,w),!D.el){const O=C.subTree=Qe(rn);d(null,O,N,M),D.placeholder=O.el}}else ee(C,D,N,M,Z,K,w)},oe=(D,N,M)=>{const ne=N.component=D.component;if(Ev(D,N,M))if(ne.asyncDep&&!ne.asyncResolved){J(ne,N,M);return}else ne.next=N,ne.update();else N.el=D.el,ne.vnode=N},ee=(D,N,M,ne,Z,K,w)=>{const C=()=>{if(D.isMounted){let{next:T,bu:g,u:I,parent:G,vnode:j}=D;{const Ae=$m(D);if(Ae){T&&(T.el=j.el,J(D,T,w)),Ae.asyncDep.then(()=>{D.isUnmounted||C()});return}}let q=T,ye;fs(D,!1),T?(T.el=j.el,J(D,T,w)):T=j,g&&Rl(g),(ye=T.props&&T.props.onVnodeBeforeUpdate)&&Wn(ye,G,T,j),fs(D,!0);const fe=hh(D),Ee=D.subTree;D.subTree=fe,x(Ee,fe,f(Ee.el),V(Ee),D,Z,K),T.el=fe.el,q===null&&bv(D,fe.el),I&&pn(I,Z),(ye=T.props&&T.props.onVnodeUpdated)&&pn(()=>Wn(ye,G,T,j),Z)}else{let T;const{el:g,props:I}=N,{bm:G,m:j,parent:q,root:ye,type:fe}=D,Ee=so(N);fs(D,!1),G&&Rl(G),!Ee&&(T=I&&I.onVnodeBeforeMount)&&Wn(T,q,N),fs(D,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(fe);const Ae=D.subTree=hh(D);x(null,Ae,M,ne,D,Z,K),N.el=Ae.el}if(j&&pn(j,Z),!Ee&&(T=I&&I.onVnodeMounted)){const Ae=N;pn(()=>Wn(T,q,Ae),Z)}(N.shapeFlag&256||q&&so(q.vnode)&&q.vnode.shapeFlag&256)&&D.a&&pn(D.a,Z),D.isMounted=!0,N=M=ne=null}};D.scope.on();const O=D.effect=new tm(C);D.scope.off();const k=D.update=O.run.bind(O),he=D.job=O.runIfDirty.bind(O);he.i=D,he.id=D.uid,O.scheduler=()=>lf(he),fs(D,!0),k()},J=(D,N,M)=>{N.component=D;const ne=D.vnode.props;D.vnode=N,D.next=null,ov(D,N.props,ne,M),uv(D,N.children,M),Ti(),nh(D),wi()},$=(D,N,M,ne,Z,K,w,C,O=!1)=>{const k=D&&D.children,he=D?D.shapeFlag:0,T=N.children,{patchFlag:g,shapeFlag:I}=N;if(g>0){if(g&128){ve(k,T,M,ne,Z,K,w,C,O);return}else if(g&256){pe(k,T,M,ne,Z,K,w,C,O);return}}I&8?(he&16&&Me(k,Z,K),T!==k&&u(M,T)):he&16?I&16?ve(k,T,M,ne,Z,K,w,C,O):Me(k,Z,K,!0):(he&8&&u(M,""),I&16&&U(T,M,ne,Z,K,w,C,O))},pe=(D,N,M,ne,Z,K,w,C,O)=>{D=D||hr,N=N||hr;const k=D.length,he=N.length,T=Math.min(k,he);let g;for(g=0;g<T;g++){const I=N[g]=O?Hi(N[g]):qn(N[g]);x(D[g],I,M,null,Z,K,w,C,O)}k>he?Me(D,Z,K,!0,!1,T):U(N,M,ne,Z,K,w,C,O,T)},ve=(D,N,M,ne,Z,K,w,C,O)=>{let k=0;const he=N.length;let T=D.length-1,g=he-1;for(;k<=T&&k<=g;){const I=D[k],G=N[k]=O?Hi(N[k]):qn(N[k]);if(bs(I,G))x(I,G,M,null,Z,K,w,C,O);else break;k++}for(;k<=T&&k<=g;){const I=D[T],G=N[g]=O?Hi(N[g]):qn(N[g]);if(bs(I,G))x(I,G,M,null,Z,K,w,C,O);else break;T--,g--}if(k>T){if(k<=g){const I=g+1,G=I<he?N[I].el:ne;for(;k<=g;)x(null,N[k]=O?Hi(N[k]):qn(N[k]),M,G,Z,K,w,C,O),k++}}else if(k>g)for(;k<=T;)Oe(D[k],Z,K,!0),k++;else{const I=k,G=k,j=new Map;for(k=G;k<=g;k++){const De=N[k]=O?Hi(N[k]):qn(N[k]);De.key!=null&&j.set(De.key,k)}let q,ye=0;const fe=g-G+1;let Ee=!1,Ae=0;const ue=new Array(fe);for(k=0;k<fe;k++)ue[k]=0;for(k=I;k<=T;k++){const De=D[k];if(ye>=fe){Oe(De,Z,K,!0);continue}let Ne;if(De.key!=null)Ne=j.get(De.key);else for(q=G;q<=g;q++)if(ue[q-G]===0&&bs(De,N[q])){Ne=q;break}Ne===void 0?Oe(De,Z,K,!0):(ue[Ne-G]=k+1,Ne>=Ae?Ae=Ne:Ee=!0,x(De,N[Ne],M,null,Z,K,w,C,O),ye++)}const Re=Ee?pv(ue):hr;for(q=Re.length-1,k=fe-1;k>=0;k--){const De=G+k,Ne=N[De],xe=N[De+1],Ve=De+1<he?xe.el||xe.placeholder:ne;ue[k]===0?x(null,Ne,M,Ve,Z,K,w,C,O):Ee&&(q<0||k!==Re[q]?we(Ne,M,Ve,2):q--)}}},we=(D,N,M,ne,Z=null)=>{const{el:K,type:w,transition:C,children:O,shapeFlag:k}=D;if(k&6){we(D.component.subTree,N,M,ne);return}if(k&128){D.suspense.move(N,M,ne);return}if(k&64){w.move(D,N,M,ae);return}if(w===Gt){i(K,N,M);for(let T=0;T<O.length;T++)we(O[T],N,M,ne);i(D.anchor,N,M);return}if(w===Fl){y(D,N,M);return}if(ne!==2&&k&1&&C)if(ne===0)C.beforeEnter(K),i(K,N,M),pn(()=>C.enter(K),Z);else{const{leave:T,delayLeave:g,afterLeave:I}=C,G=()=>{D.ctx.isUnmounted?s(K):i(K,N,M)},j=()=>{K._isLeaving&&K[gi](!0),T(K,()=>{G(),I&&I()})};g?g(K,G,j):j()}else i(K,N,M)},Oe=(D,N,M,ne=!1,Z=!1)=>{const{type:K,props:w,ref:C,children:O,dynamicChildren:k,shapeFlag:he,patchFlag:T,dirs:g,cacheIndex:I}=D;if(T===-2&&(Z=!1),C!=null&&(Ti(),io(C,null,M,D,!0),wi()),I!=null&&(N.renderCache[I]=void 0),he&256){N.ctx.deactivate(D);return}const G=he&1&&g,j=!so(D);let q;if(j&&(q=w&&w.onVnodeBeforeUnmount)&&Wn(q,N,D),he&6)_e(D.component,M,ne);else{if(he&128){D.suspense.unmount(M,ne);return}G&&us(D,null,N,"beforeUnmount"),he&64?D.type.remove(D,N,M,ae,ne):k&&!k.hasOnce&&(K!==Gt||T>0&&T&64)?Me(k,N,M,!1,!0):(K===Gt&&T&384||!Z&&he&16)&&Me(O,N,M),ne&&je(D)}(j&&(q=w&&w.onVnodeUnmounted)||G)&&pn(()=>{q&&Wn(q,N,D),G&&us(D,null,N,"unmounted")},M)},je=D=>{const{type:N,el:M,anchor:ne,transition:Z}=D;if(N===Gt){re(M,ne);return}if(N===Fl){v(D);return}const K=()=>{s(M),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:w,delayLeave:C}=Z,O=()=>w(M,K);C?C(D.el,K,O):O()}else K()},re=(D,N)=>{let M;for(;D!==N;)M=h(D),s(D),D=M;s(N)},_e=(D,N,M)=>{const{bum:ne,scope:Z,job:K,subTree:w,um:C,m:O,a:k}=D;fh(O),fh(k),ne&&Rl(ne),Z.stop(),K&&(K.flags|=8,Oe(w,D,N,M)),C&&pn(C,N),pn(()=>{D.isUnmounted=!0},N)},Me=(D,N,M,ne=!1,Z=!1,K=0)=>{for(let w=K;w<D.length;w++)Oe(D[w],N,M,ne,Z)},V=D=>{if(D.shapeFlag&6)return V(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const N=h(D.anchor||D.el),M=N&&N[N0];return M?h(M):N};let se=!1;const le=(D,N,M)=>{D==null?N._vnode&&Oe(N._vnode,null,null,!0):x(N._vnode||null,D,N,null,null,null,M),N._vnode=D,se||(se=!0,nh(),ym(),se=!1)},ae={p:x,um:Oe,m:we,r:je,mt:ie,mc:U,pc:$,pbc:b,n:V,o:t};return{render:le,hydrate:void 0,createApp:iv(le)}}function Ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function dv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ym(t,e,n=!1){const i=t.children,s=e.children;if(He(i)&&He(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Hi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ym(o,a)),a.type===Vo&&a.patchFlag!==-1&&(a.el=o.el),a.type===rn&&!a.el&&(a.el=o.el)}}function pv(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $m(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$m(e)}function fh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const mv=Symbol.for("v-scx"),gv=()=>zn(mv);function ff(t,e){return hf(t,null,e)}function Ei(t,e,n){return hf(t,e,n)}function hf(t,e,n=vt){const{immediate:i,deep:s,flush:r,once:o}=n,a=kt({},n),l=e&&i||!e&&r!=="post";let c;if(So){if(r==="sync"){const p=gv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Jn,p.resume=Jn,p.pause=Jn,p}}const u=Zt;a.call=(p,_,x)=>Vn(p,u,_,x);let f=!1;r==="post"?a.scheduler=p=>{pn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():lf(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=P0(t,e,a);return So&&(c?c.push(h):l&&h()),h}function _v(t,e,n){const i=this.proxy,s=Pt(t)?t.includes(".")?qm(i,t):()=>i[t]:t.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,n=e);const o=Go(this),a=hf(s,r.bind(i),n);return o(),a}function qm(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const vv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${An(e)}Modifiers`]||t[`${Bs(e)}Modifiers`];function xv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let s=n;const r=e.startsWith("update:"),o=r&&vv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Pt(u)?u.trim():u)),o.number&&(s=n.map(q_)));let a,l=i[a=Al(e)]||i[a=Al(An(e))];!l&&r&&(l=i[a=Al(Bs(e))]),l&&Vn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vn(c,t,6,s)}}const yv=new WeakMap;function jm(t,e,n=!1){const i=n?yv:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Ye(t)){const l=c=>{const u=jm(c,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(yt(t)&&i.set(t,null),null):(He(r)?r.forEach(l=>o[l]=null):kt(o,r),yt(t)&&i.set(t,o),o)}function hl(t,e){return!t||!il(e)?!1:(e=e.slice(2).replace(/Once$/,""),ut(t,e[0].toLowerCase()+e.slice(1))||ut(t,Bs(e))||ut(t,e))}function hh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=t,m=$a(t);let d,S;try{if(n.shapeFlag&4){const v=s||i,L=v;d=qn(c.call(L,v,u,f,p,h,_)),S=a}else{const v=e;d=qn(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),S=e.props?a:Sv(a)}}catch(v){oo.length=0,cl(v,t,1),d=Qe(rn)}let y=d;if(S&&x!==!1){const v=Object.keys(S),{shapeFlag:L}=y;v.length&&L&7&&(r&&v.some(Yu)&&(S=Mv(S,r)),y=Zi(y,S,!1,!0))}return n.dirs&&(y=Zi(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&xo(y,n.transition),d=y,$a(m),d}const Sv=t=>{let e;for(const n in t)(n==="class"||n==="style"||il(n))&&((e||(e={}))[n]=t[n]);return e},Mv=(t,e)=>{const n={};for(const i in t)(!Yu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ev(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?dh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!hl(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?dh(i,o,c):!0:!!o;return!1}function dh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!hl(n,r))return!0}return!1}function bv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Km=t=>t.__isSuspense;function Tv(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):D0(t)}const Gt=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),rn=Symbol.for("v-cmt"),Fl=Symbol.for("v-stc"),oo=[];let mn=null;function st(t=!1){oo.push(mn=t?null:[])}function wv(){oo.pop(),mn=oo[oo.length-1]||null}let yo=1;function Ka(t,e=!1){yo+=t,t<0&&mn&&e&&(mn.hasOnce=!0)}function Zm(t){return t.dynamicChildren=yo>0?mn||hr:null,wv(),yo>0&&mn&&mn.push(t),t}function pt(t,e,n,i,s,r){return Zm(Nt(t,e,n,i,s,r,!0))}function dl(t,e,n,i,s){return Zm(Qe(t,e,n,i,s,!0))}function Za(t){return t?t.__v_isVNode===!0:!1}function bs(t,e){return t.type===e.type&&t.key===e.key}const Jm=({key:t})=>t??null,La=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Pt(t)||Ct(t)||Ye(t)?{i:Un,r:t,k:e,f:!!n}:t:null);function Nt(t,e=null,n=null,i=0,s=null,r=t===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jm(e),ref:e&&La(e),scopeId:Mm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Un};return a?(df(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Pt(n)?8:16),yo>0&&!o&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const Qe=Av;function Av(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===$0)&&(t=rn),Za(t)){const a=Zi(t,e,!0);return n&&df(a,n),yo>0&&!r&&mn&&(a.shapeFlag&6?mn[mn.indexOf(t)]=a:mn.push(a)),a.patchFlag=-2,a}if(kv(t)&&(t=t.__vccOpts),e){e=Rv(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=ko(a)),yt(l)&&(sf(l)&&!He(l)&&(l=kt({},l)),e.style=ju(l))}const o=Pt(t)?1:Km(t)?128:Em(t)?64:yt(t)?4:Ye(t)?2:0;return Nt(t,e,n,i,s,o,r,!0)}function Rv(t){return t?sf(t)||zm(t)?kt({},t):t:null}function Zi(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Pv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Jm(c),ref:e&&e.ref?n&&r?He(r)?r.concat(La(e)):[r,La(e)]:La(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zi(t.ssContent),ssFallback:t.ssFallback&&Zi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&xo(u,l.clone(u)),u}function Cv(t=" ",e=0){return Qe(Vo,null,t,e)}function Wt(t="",e=!1){return e?(st(),dl(rn,null,t)):Qe(rn,null,t)}function qn(t){return t==null||typeof t=="boolean"?Qe(rn):He(t)?Qe(Gt,null,t.slice()):Za(t)?Hi(t):Qe(Vo,null,String(t))}function Hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zi(t)}function df(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),df(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zm(e)?e._ctx=Un:s===3&&Un&&(Un.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Un},n=32):(e=String(e),i&64?(n=16,e=[Cv(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ko([e.class,i.class]));else if(s==="style")e.style=ju([e.style,i.style]);else if(il(s)){const r=e[s],o=i[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Wn(t,e,n,i=null){Vn(t,e,7,[n,i])}const Lv=Om();let Iv=0;function Dv(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Lv,r={uid:Iv++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vm(i,s),emitsOptions:jm(i,s),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xv.bind(null,r),t.ce&&t.ce(r),r}let Zt=null;const Ai=()=>Zt||Un;let Ja,Bc;{const t=al(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ja=e("__VUE_INSTANCE_SETTERS__",n=>Zt=n),Bc=e("__VUE_SSR_SETTERS__",n=>So=n)}const Go=t=>{const e=Zt;return Ja(t),t.scope.on(),()=>{t.scope.off(),Ja(e)}},ph=()=>{Zt&&Zt.scope.off(),Ja(null)};function Qm(t){return t.vnode.shapeFlag&4}let So=!1;function Nv(t,e=!1,n=!1){e&&Bc(e);const{props:i,children:s}=t.vnode,r=Qm(t);rv(t,i,r,e),cv(t,s,n||e);const o=r?Uv(t,e):void 0;return e&&Bc(!1),o}function Uv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,K0);const{setup:i}=n;if(i){Ti();const s=t.setupContext=i.length>1?Ov(t):null,r=Go(t),o=Ho(i,t,0,[t.props,s]),a=Yp(o);if(wi(),r(),(a||t.sp)&&!so(t)&&Cm(t),a){if(o.then(ph,ph),e)return o.then(l=>{mh(t,l)}).catch(l=>{cl(l,t,0)});t.asyncDep=o}else mh(t,o)}else eg(t)}function mh(t,e,n){Ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=_m(e)),eg(t)}function eg(t,e,n){const i=t.type;t.render||(t.render=i.render||Jn);{const s=Go(t);Ti();try{Z0(t)}finally{wi(),s()}}}const Fv={get(t,e){return Kt(t,"get",""),t[e]}};function Ov(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fv),slots:t.slots,emit:t.emit,expose:e}}function pf(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(_m(rf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ro)return ro[n](t)},has(e,n){return n in e||n in ro}})):t.proxy}function Bv(t,e=!0){return Ye(t)?t.displayName||t.name:t.name||e&&t.__name}function kv(t){return Ye(t)&&"__vccOpts"in t}const Tt=(t,e)=>R0(t,e,So);function Wo(t,e,n){try{Ka(-1);const i=arguments.length;return i===2?yt(e)&&!He(e)?Za(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Za(n)&&(n=[n]),Qe(t,e,n))}finally{Ka(1)}}const zv="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kc;const gh=typeof window<"u"&&window.trustedTypes;if(gh)try{kc=gh.createPolicy("vue",{createHTML:t=>t})}catch{}const tg=kc?t=>kc.createHTML(t):t=>t,Hv="http://www.w3.org/2000/svg",Vv="http://www.w3.org/1998/Math/MathML",mi=typeof document<"u"?document:null,_h=mi&&mi.createElement("template"),Gv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?mi.createElementNS(Hv,t):e==="mathml"?mi.createElementNS(Vv,t):n?mi.createElement(t,{is:n}):mi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>mi.createTextNode(t),createComment:t=>mi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{_h.innerHTML=tg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=_h.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Li="transition",kr="animation",Mo=Symbol("_vtc"),ng={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wv=kt({},bm,ng),Xv=t=>(t.displayName="Transition",t.props=Wv,t),Eo=Xv((t,{slots:e})=>Wo(O0,Yv(t),e)),hs=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},vh=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function Yv(t){const e={};for(const B in t)B in ng||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=$v(s),x=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:S,onEnterCancelled:y,onLeave:v,onLeaveCancelled:L,onBeforeAppear:P=d,onAppear:A=S,onAppearCancelled:U=y}=e,E=(B,X,ie,oe)=>{B._enterCancelled=oe,ds(B,X?u:a),ds(B,X?c:o),ie&&ie()},b=(B,X)=>{B._isLeaving=!1,ds(B,f),ds(B,p),ds(B,h),X&&X()},F=B=>(X,ie)=>{const oe=B?A:S,ee=()=>E(X,B,ie);hs(oe,[X,ee]),xh(()=>{ds(X,B?l:r),ri(X,B?u:a),vh(oe)||yh(X,i,x,ee)})};return kt(e,{onBeforeEnter(B){hs(d,[B]),ri(B,r),ri(B,o)},onBeforeAppear(B){hs(P,[B]),ri(B,l),ri(B,c)},onEnter:F(!1),onAppear:F(!0),onLeave(B,X){B._isLeaving=!0;const ie=()=>b(B,X);ri(B,f),B._enterCancelled?(ri(B,h),Eh(B)):(Eh(B),ri(B,h)),xh(()=>{B._isLeaving&&(ds(B,f),ri(B,p),vh(v)||yh(B,i,m,ie))}),hs(v,[B,ie])},onEnterCancelled(B){E(B,!1,void 0,!0),hs(y,[B])},onAppearCancelled(B){E(B,!0,void 0,!0),hs(U,[B])},onLeaveCancelled(B){b(B),hs(L,[B])}})}function $v(t){if(t==null)return null;if(yt(t))return[Ol(t.enter),Ol(t.leave)];{const e=Ol(t);return[e,e]}}function Ol(t){return j_(t)}function ri(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Mo]||(t[Mo]=new Set)).add(e)}function ds(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Mo];n&&(n.delete(e),n.size||(t[Mo]=void 0))}function xh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qv=0;function yh(t,e,n,i){const s=t._endId=++qv,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=jv(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,h),r()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,h)}function jv(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),s=i(`${Li}Delay`),r=i(`${Li}Duration`),o=Sh(s,r),a=i(`${kr}Delay`),l=i(`${kr}Duration`),c=Sh(a,l);let u=null,f=0,h=0;e===Li?o>0&&(u=Li,f=o,h=r.length):e===kr?c>0&&(u=kr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Li:kr:null,h=u?u===Li?r.length:l.length:0);const p=u===Li&&/\b(?:transform|all)(?:,|$)/.test(i(`${Li}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Sh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Mh(n)+Mh(t[i])))}function Mh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Eh(t){return(t?t.ownerDocument:document).body.offsetHeight}function Kv(t,e,n){const i=t[Mo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bh=Symbol("_vod"),Zv=Symbol("_vsh"),Jv=Symbol(""),Qv=/(?:^|;)\s*display\s*:/;function ex(t,e,n){const i=t.style,s=Pt(n);let r=!1;if(n&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ia(i,a,"")}else for(const o in e)n[o]==null&&Ia(i,o,"");for(const o in n)o==="display"&&(r=!0),Ia(i,o,n[o])}else if(s){if(e!==n){const o=i[Jv];o&&(n+=";"+o),i.cssText=n,r=Qv.test(n)}}else e&&t.removeAttribute("style");bh in t&&(t[bh]=r?i.display:"",t[Zv]&&(i.display="none"))}const Th=/\s*!important$/;function Ia(t,e,n){if(He(n))n.forEach(i=>Ia(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=tx(t,e);Th.test(n)?t.setProperty(Bs(i),n.replace(Th,""),"important"):t[i]=n}}const wh=["Webkit","Moz","ms"],Bl={};function tx(t,e){const n=Bl[e];if(n)return n;let i=An(e);if(i!=="filter"&&i in t)return Bl[e]=i;i=ol(i);for(let s=0;s<wh.length;s++){const r=wh[s]+i;if(r in t)return Bl[e]=r}return e}const Ah="http://www.w3.org/1999/xlink";function Rh(t,e,n,i,s,r=t0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ah,e.slice(6,e.length)):t.setAttributeNS(Ah,e,n):n==null||r&&!Kp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ns(n)?String(n):n)}function Ch(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function nx(t,e,n,i){t.addEventListener(e,n,i)}function ix(t,e,n,i){t.removeEventListener(e,n,i)}const Ph=Symbol("_vei");function sx(t,e,n,i,s=null){const r=t[Ph]||(t[Ph]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=rx(e);if(i){const c=r[e]=lx(i,s);nx(t,a,c,l)}else o&&(ix(t,a,o,l),r[e]=void 0)}}const Lh=/(?:Once|Passive|Capture)$/;function rx(t){let e;if(Lh.test(t)){e={};let i;for(;i=t.match(Lh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bs(t.slice(2)),e]}let kl=0;const ox=Promise.resolve(),ax=()=>kl||(ox.then(()=>kl=0),kl=Date.now());function lx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Vn(cx(i,n.value),e,5,[i])};return n.value=t,n.attached=ax(),n}function cx(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ih=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ux=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?Kv(t,i,o):e==="style"?ex(t,n,i):il(e)?Yu(e)||sx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fx(t,e,i,o))?(Ch(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rh(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Pt(i))?Ch(t,An(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Rh(t,e,i,o))};function fx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ih(e)&&Ye(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ih(e)&&Pt(n)?!1:e in t}const hx=kt({patchProp:ux},Gv);let Dh;function dx(){return Dh||(Dh=fv(hx))}const px=((...t)=>{const e=dx().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=gx(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,mx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function mx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function gx(t){return Pt(t)?document.querySelector(t):t}var Da=(t=>(t.Auto="auto",t.Manual="manual",t))(Da||{}),ar=(t=>(t.FadeIn="fadeIn",t.FadeOut="fadeOut",t.FadeInOut="fadeInOut",t.FadeLoop="fadeLoop",t))(ar||{}),ig=(t=>(t.Self="_self",t.Blank="_blank",t))(ig||{}),zc=(t=>(t.Pill="pill",t.Round="round",t))(zc||{});const _x=un({name:"animated-txt",props:{text:{type:String,default:""},duration:{type:Number,default:0},delay:{type:Number,default:0},staggerIn:{type:Number,default:0},staggerOut:{type:Number,default:0},pause:{type:Number,default:0},animation:{type:String,default:ar.FadeIn},mode:{type:String,default:Da.Auto}},setup(t,{expose:e}){const n=Tt(()=>{const c=t.text.split("");c[0]=c[0].toUpperCase();for(let u=0;u<t.text.length;u++)(c[u-1]===" "||c[u+1]==="'"||c[u-1]===" "&&c[u]==="i")&&(c[u]=c[u].toUpperCase());return c}),i=ei([]);function s(c,u){c instanceof HTMLElement?i.value[u]=c:i.value[u]=null}const r=[{opacity:0},{opacity:1}],o=[{opacity:.6},{opacity:1},{opacity:.6}];function a(c,u,f,h,p,_){setTimeout(()=>{for(const[x,m]of i.value.entries())m&&m.animate(c,{duration:u,delay:x*f,fill:"forwards",direction:h,easing:"linear",iterations:p})},_)}function l(){let c=t.animation,u=r,f=t.duration,h=t.staggerIn,p="normal",_=1,x=t.delay;c===ar.FadeOut?p="reverse":c===ar.FadeLoop&&(u=o,_=1/0),a(u,f,h,p,_,x),c===ar.FadeInOut&&(h=t.staggerOut,p="reverse",x+=h*t.text.length+t.pause,a(u,f,h,p,_,x))}return e({startAnimation:l}),ks(()=>{t.mode===Da.Auto&&l()}),Lm(()=>{t.mode===Da.Auto&&l()}),{Animation:ar,chars:n,setCharRef:s}}}),is=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n};function vx(t,e,n,i,s,r){return st(),pt("div",null,[(st(!0),pt(Gt,null,j0(t.chars,(o,a)=>(st(),pt("span",{class:ko([{"o-0":t.animation===t.Animation.FadeIn||t.animation===t.Animation.FadeInOut},{"o-1":t.animation===t.Animation.FadeOut},"user-select-none"]),key:o+a,ref_for:!0,ref:l=>t.setCharRef(l,a)},mo(o),3))),128))])}const Kr=is(_x,[["render",vx]]);/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function xx(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Qa=typeof window<"u",ss=(t,e=!1)=>e?Symbol.for(t):Symbol(t),yx=(t,e,n)=>Sx({l:t,k:e,s:n}),Sx=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),It=t=>typeof t=="number"&&isFinite(t),Mx=t=>mf(t)==="[object Date]",xr=t=>mf(t)==="[object RegExp]",pl=t=>Je(t)&&Object.keys(t).length===0,Ut=Object.assign,Ex=Object.create,gt=(t=null)=>Ex(t);let Nh;const As=()=>Nh||(Nh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:gt());function Uh(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Fh(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bx(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,s,r)=>`${s}="${Fh(r)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,s,r)=>`${s}='${Fh(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const Tx=Object.prototype.hasOwnProperty;function Fn(t,e){return Tx.call(t,e)}const Rt=Array.isArray,Mt=t=>typeof t=="function",Ce=t=>typeof t=="string",rt=t=>typeof t=="boolean",ot=t=>t!==null&&typeof t=="object",wx=t=>ot(t)&&Mt(t.then)&&Mt(t.catch),sg=Object.prototype.toString,mf=t=>sg.call(t),Je=t=>mf(t)==="[object Object]",Ax=t=>t==null?"":Rt(t)||Je(t)&&t.toString===sg?JSON.stringify(t,null,2):String(t);function gf(t,e=""){return t.reduce((n,i,s)=>s===0?n+i:n+e+i,"")}const ta=t=>!ot(t)||Rt(t);function Na(t,e){if(ta(t)||ta(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:s}=n.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(ot(i[r])&&!ot(s[r])&&(s[r]=Array.isArray(i[r])?[]:gt()),ta(s[r])||ta(i[r])?s[r]=i[r]:n.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Rx(t,e,n){return{line:t,column:e,offset:n}}function Hc(t,e,n){return{start:t,end:e}}const ct={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Cx=17;function ml(t,e,n={}){const{domain:i,messages:s,args:r}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function Px(t){throw t}const Xn=" ",Lx="\r",qt=`
`,Ix="\u2028",Dx="\u2029";function Nx(t){const e=t;let n=0,i=1,s=1,r=0;const o=A=>e[A]===Lx&&e[A+1]===qt,a=A=>e[A]===qt,l=A=>e[A]===Dx,c=A=>e[A]===Ix,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>n,h=()=>i,p=()=>s,_=()=>r,x=A=>o(A)||l(A)||c(A)?qt:e[A],m=()=>x(n),d=()=>x(n+r);function S(){return r=0,u(n)&&(i++,s=0),o(n)&&n++,n++,s++,e[n]}function y(){return o(n+r)&&r++,r++,e[n+r]}function v(){n=0,i=1,s=1,r=0}function L(A=0){r=A}function P(){const A=n+r;for(;A!==n;)S();r=0}return{index:f,line:h,column:p,peekOffset:_,charAt:x,currentChar:m,currentPeek:d,next:S,peek:y,reset:v,resetPeek:L,skipToPeek:P}}const oi=void 0,Ux=".",Oh="'",Fx="tokenizer";function Ox(t,e={}){const n=e.location!==!1,i=Nx(t),s=()=>i.index(),r=()=>Rx(i.line(),i.column(),i.index()),o=r(),a=s(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(w,C,O,...k){const he=c();if(C.column+=O,C.offset+=O,u){const T=n?Hc(he.startLoc,C):null,g=ml(w,T,{domain:Fx,args:k});u(g)}}function h(w,C,O){w.endLoc=r(),w.currentType=C;const k={type:C};return n&&(k.loc=Hc(w.startLoc,w.endLoc)),O!=null&&(k.value=O),k}const p=w=>h(w,13);function _(w,C){return w.currentChar()===C?(w.next(),C):(f(ct.EXPECTED_TOKEN,r(),0,C),"")}function x(w){let C="";for(;w.currentPeek()===Xn||w.currentPeek()===qt;)C+=w.currentPeek(),w.peek();return C}function m(w){const C=x(w);return w.skipToPeek(),C}function d(w){if(w===oi)return!1;const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function S(w){if(w===oi)return!1;const C=w.charCodeAt(0);return C>=48&&C<=57}function y(w,C){const{currentType:O}=C;if(O!==2)return!1;x(w);const k=d(w.currentPeek());return w.resetPeek(),k}function v(w,C){const{currentType:O}=C;if(O!==2)return!1;x(w);const k=w.currentPeek()==="-"?w.peek():w.currentPeek(),he=S(k);return w.resetPeek(),he}function L(w,C){const{currentType:O}=C;if(O!==2)return!1;x(w);const k=w.currentPeek()===Oh;return w.resetPeek(),k}function P(w,C){const{currentType:O}=C;if(O!==7)return!1;x(w);const k=w.currentPeek()===".";return w.resetPeek(),k}function A(w,C){const{currentType:O}=C;if(O!==8)return!1;x(w);const k=d(w.currentPeek());return w.resetPeek(),k}function U(w,C){const{currentType:O}=C;if(!(O===7||O===11))return!1;x(w);const k=w.currentPeek()===":";return w.resetPeek(),k}function E(w,C){const{currentType:O}=C;if(O!==9)return!1;const k=()=>{const T=w.currentPeek();return T==="{"?d(w.peek()):T==="@"||T==="|"||T===":"||T==="."||T===Xn||!T?!1:T===qt?(w.peek(),k()):F(w,!1)},he=k();return w.resetPeek(),he}function b(w){x(w);const C=w.currentPeek()==="|";return w.resetPeek(),C}function F(w,C=!0){const O=(he=!1,T="")=>{const g=w.currentPeek();return g==="{"||g==="@"||!g?he:g==="|"?!(T===Xn||T===qt):g===Xn?(w.peek(),O(!0,Xn)):g===qt?(w.peek(),O(!0,qt)):!0},k=O();return C&&w.resetPeek(),k}function B(w,C){const O=w.currentChar();return O===oi?oi:C(O)?(w.next(),O):null}function X(w){const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function ie(w){return B(w,X)}function oe(w){const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function ee(w){return B(w,oe)}function J(w){const C=w.charCodeAt(0);return C>=48&&C<=57}function $(w){return B(w,J)}function pe(w){const C=w.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function ve(w){return B(w,pe)}function we(w){let C="",O="";for(;C=$(w);)O+=C;return O}function Oe(w){let C="";for(;;){const O=w.currentChar();if(O==="{"||O==="}"||O==="@"||O==="|"||!O)break;if(O===Xn||O===qt)if(F(w))C+=O,w.next();else{if(b(w))break;C+=O,w.next()}else C+=O,w.next()}return C}function je(w){m(w);let C="",O="";for(;C=ee(w);)O+=C;const k=w.currentChar();if(k&&k!=="}"&&k!==oi&&k!==Xn&&k!==qt&&k!=="　"){const he=ae(w);return f(ct.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,O+he),O+he}return w.currentChar()===oi&&f(ct.UNTERMINATED_CLOSING_BRACE,r(),0),O}function re(w){m(w);let C="";return w.currentChar()==="-"?(w.next(),C+=`-${we(w)}`):C+=we(w),w.currentChar()===oi&&f(ct.UNTERMINATED_CLOSING_BRACE,r(),0),C}function _e(w){return w!==Oh&&w!==qt}function Me(w){m(w),_(w,"'");let C="",O="";for(;C=B(w,_e);)C==="\\"?O+=V(w):O+=C;const k=w.currentChar();return k===qt||k===oi?(f(ct.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),k===qt&&(w.next(),_(w,"'")),O):(_(w,"'"),O)}function V(w){const C=w.currentChar();switch(C){case"\\":case"'":return w.next(),`\\${C}`;case"u":return se(w,C,4);case"U":return se(w,C,6);default:return f(ct.UNKNOWN_ESCAPE_SEQUENCE,r(),0,C),""}}function se(w,C,O){_(w,C);let k="";for(let he=0;he<O;he++){const T=ve(w);if(!T){f(ct.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${C}${k}${w.currentChar()}`);break}k+=T}return`\\${C}${k}`}function le(w){return w!=="{"&&w!=="}"&&w!==Xn&&w!==qt}function ae(w){m(w);let C="",O="";for(;C=B(w,le);)O+=C;return O}function Be(w){let C="",O="";for(;C=ie(w);)O+=C;return O}function D(w){const C=O=>{const k=w.currentChar();return k==="{"||k==="@"||k==="|"||k==="("||k===")"||!k||k===Xn?O:(O+=k,w.next(),C(O))};return C("")}function N(w){m(w);const C=_(w,"|");return m(w),C}function M(w,C){let O=null;switch(w.currentChar()){case"{":return C.braceNest>=1&&f(ct.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),w.next(),O=h(C,2,"{"),m(w),C.braceNest++,O;case"}":return C.braceNest>0&&C.currentType===2&&f(ct.EMPTY_PLACEHOLDER,r(),0),w.next(),O=h(C,3,"}"),C.braceNest--,C.braceNest>0&&m(w),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),O;case"@":return C.braceNest>0&&f(ct.UNTERMINATED_CLOSING_BRACE,r(),0),O=ne(w,C)||p(C),C.braceNest=0,O;default:{let he=!0,T=!0,g=!0;if(b(w))return C.braceNest>0&&f(ct.UNTERMINATED_CLOSING_BRACE,r(),0),O=h(C,1,N(w)),C.braceNest=0,C.inLinked=!1,O;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(ct.UNTERMINATED_CLOSING_BRACE,r(),0),C.braceNest=0,Z(w,C);if(he=y(w,C))return O=h(C,4,je(w)),m(w),O;if(T=v(w,C))return O=h(C,5,re(w)),m(w),O;if(g=L(w,C))return O=h(C,6,Me(w)),m(w),O;if(!he&&!T&&!g)return O=h(C,12,ae(w)),f(ct.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,O.value),m(w),O;break}}return O}function ne(w,C){const{currentType:O}=C;let k=null;const he=w.currentChar();switch((O===7||O===8||O===11||O===9)&&(he===qt||he===Xn)&&f(ct.INVALID_LINKED_FORMAT,r(),0),he){case"@":return w.next(),k=h(C,7,"@"),C.inLinked=!0,k;case".":return m(w),w.next(),h(C,8,".");case":":return m(w),w.next(),h(C,9,":");default:return b(w)?(k=h(C,1,N(w)),C.braceNest=0,C.inLinked=!1,k):P(w,C)||U(w,C)?(m(w),ne(w,C)):A(w,C)?(m(w),h(C,11,Be(w))):E(w,C)?(m(w),he==="{"?M(w,C)||k:h(C,10,D(w))):(O===7&&f(ct.INVALID_LINKED_FORMAT,r(),0),C.braceNest=0,C.inLinked=!1,Z(w,C))}}function Z(w,C){let O={type:13};if(C.braceNest>0)return M(w,C)||p(C);if(C.inLinked)return ne(w,C)||p(C);switch(w.currentChar()){case"{":return M(w,C)||p(C);case"}":return f(ct.UNBALANCED_CLOSING_BRACE,r(),0),w.next(),h(C,3,"}");case"@":return ne(w,C)||p(C);default:{if(b(w))return O=h(C,1,N(w)),C.braceNest=0,C.inLinked=!1,O;if(F(w))return h(C,0,Oe(w));break}}return O}function K(){const{currentType:w,offset:C,startLoc:O,endLoc:k}=l;return l.lastType=w,l.lastOffset=C,l.lastStartLoc=O,l.lastEndLoc=k,l.offset=s(),l.startLoc=r(),i.currentChar()===oi?h(l,13):Z(i,l)}return{nextToken:K,currentOffset:s,currentPosition:r,context:c}}const Bx="parser",kx=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function zx(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Hx(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,S,y,v,...L){const P=d.currentPosition();if(P.offset+=v,P.column+=v,n){const A=e?Hc(y,P):null,U=ml(S,A,{domain:Bx,args:L});n(U)}}function s(d,S,y){const v={type:d};return e&&(v.start=S,v.end=S,v.loc={start:y,end:y}),v}function r(d,S,y,v){e&&(d.end=S,d.loc&&(d.loc.end=y))}function o(d,S){const y=d.context(),v=s(3,y.offset,y.startLoc);return v.value=S,r(v,d.currentOffset(),d.currentPosition()),v}function a(d,S){const y=d.context(),{lastOffset:v,lastStartLoc:L}=y,P=s(5,v,L);return P.index=parseInt(S,10),d.nextToken(),r(P,d.currentOffset(),d.currentPosition()),P}function l(d,S){const y=d.context(),{lastOffset:v,lastStartLoc:L}=y,P=s(4,v,L);return P.key=S,d.nextToken(),r(P,d.currentOffset(),d.currentPosition()),P}function c(d,S){const y=d.context(),{lastOffset:v,lastStartLoc:L}=y,P=s(9,v,L);return P.value=S.replace(kx,zx),d.nextToken(),r(P,d.currentOffset(),d.currentPosition()),P}function u(d){const S=d.nextToken(),y=d.context(),{lastOffset:v,lastStartLoc:L}=y,P=s(8,v,L);return S.type!==11?(i(d,ct.UNEXPECTED_EMPTY_LINKED_MODIFIER,y.lastStartLoc,0),P.value="",r(P,v,L),{nextConsumeToken:S,node:P}):(S.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Yn(S)),P.value=S.value||"",r(P,d.currentOffset(),d.currentPosition()),{node:P})}function f(d,S){const y=d.context(),v=s(7,y.offset,y.startLoc);return v.value=S,r(v,d.currentOffset(),d.currentPosition()),v}function h(d){const S=d.context(),y=s(6,S.offset,S.startLoc);let v=d.nextToken();if(v.type===8){const L=u(d);y.modifier=L.node,v=L.nextConsumeToken||d.nextToken()}switch(v.type!==9&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(v)),v=d.nextToken(),v.type===2&&(v=d.nextToken()),v.type){case 10:v.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(v)),y.key=f(d,v.value||"");break;case 4:v.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(v)),y.key=l(d,v.value||"");break;case 5:v.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(v)),y.key=a(d,v.value||"");break;case 6:v.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(v)),y.key=c(d,v.value||"");break;default:{i(d,ct.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const L=d.context(),P=s(7,L.offset,L.startLoc);return P.value="",r(P,L.offset,L.startLoc),y.key=P,r(y,L.offset,L.startLoc),{nextConsumeToken:v,node:y}}}return r(y,d.currentOffset(),d.currentPosition()),{node:y}}function p(d){const S=d.context(),y=S.currentType===1?d.currentOffset():S.offset,v=S.currentType===1?S.endLoc:S.startLoc,L=s(2,y,v);L.items=[];let P=null;do{const E=P||d.nextToken();switch(P=null,E.type){case 0:E.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(E)),L.items.push(o(d,E.value||""));break;case 5:E.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(E)),L.items.push(a(d,E.value||""));break;case 4:E.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(E)),L.items.push(l(d,E.value||""));break;case 6:E.value==null&&i(d,ct.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Yn(E)),L.items.push(c(d,E.value||""));break;case 7:{const b=h(d);L.items.push(b.node),P=b.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const A=S.currentType===1?S.lastOffset:d.currentOffset(),U=S.currentType===1?S.lastEndLoc:d.currentPosition();return r(L,A,U),L}function _(d,S,y,v){const L=d.context();let P=v.items.length===0;const A=s(1,S,y);A.cases=[],A.cases.push(v);do{const U=p(d);P||(P=U.items.length===0),A.cases.push(U)}while(L.currentType!==13);return P&&i(d,ct.MUST_HAVE_MESSAGES_IN_PLURAL,y,0),r(A,d.currentOffset(),d.currentPosition()),A}function x(d){const S=d.context(),{offset:y,startLoc:v}=S,L=p(d);return S.currentType===13?L:_(d,y,v,L)}function m(d){const S=Ox(d,Ut({},t)),y=S.context(),v=s(0,y.offset,y.startLoc);return e&&v.loc&&(v.loc.source=d),v.body=x(S),t.onCacheKey&&(v.cacheKey=t.onCacheKey(d)),y.currentType!==13&&i(S,ct.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,d[y.offset]||""),r(v,S.currentOffset(),S.currentPosition()),v}return{parse:m}}function Yn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Vx(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:r=>(n.helpers.add(r),r)}}function Bh(t,e){for(let n=0;n<t.length;n++)_f(t[n],e)}function _f(t,e){switch(t.type){case 1:Bh(t.cases,e),e.helper("plural");break;case 2:Bh(t.items,e);break;case 6:{_f(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Gx(t,e={}){const n=Vx(t);n.helper("normalize"),t.body&&_f(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Wx(t){const e=t.body;return e.type===2?kh(e):e.cases.forEach(n=>kh(n)),t}function kh(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=gf(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function lr(t){switch(t.t=t.type,t.type){case 0:{const e=t;lr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)lr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)lr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;lr(e.key),e.k=e.key,delete e.key,e.modifier&&(lr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function Xx(t,e){const{filename:n,breakLineCode:i,needIndent:s}=e,r=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0};r&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(x,m){o.code+=x}function c(x,m=!0){const d=m?i:"";l(s?d+"  ".repeat(x):d)}function u(x=!0){const m=++o.indentLevel;x&&c(m)}function f(x=!0){const m=--o.indentLevel;x&&c(m)}function h(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:h,helper:x=>`_${x}`,needIndent:()=>o.needIndent}}function Yx(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),yr(t,e.key),e.modifier?(t.push(", "),yr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function $x(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const s=e.items.length;for(let r=0;r<s&&(yr(t,e.items[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}function qx(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const s=e.cases.length;for(let r=0;r<s&&(yr(t,e.cases[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}}function jx(t,e){e.body?yr(t,e.body):t.push("null")}function yr(t,e){const{helper:n}=t;switch(e.type){case 0:jx(t,e);break;case 1:qx(t,e);break;case 2:$x(t,e);break;case 6:Yx(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const Kx=(t,e={})=>{const n=Ce(e.mode)?e.mode:"normal",i=Ce(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,r=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=Xx(t,{filename:i,breakLineCode:s,needIndent:r});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(r),o.length>0&&(a.push(`const { ${gf(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),yr(a,t),a.deindent(r),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function Zx(t,e={}){const n=Ut({},e),i=!!n.jit,s=!!n.minify,r=n.optimize==null?!0:n.optimize,a=Hx(n).parse(t);return i?(r&&Wx(a),s&&lr(a),{ast:a,code:""}):(Gx(a,n),Kx(a,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Jx(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(As().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(As().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Qn(t){return ot(t)&&vf(t)===0&&(Fn(t,"b")||Fn(t,"body"))}const rg=["b","body"];function Qx(t){return rs(t,rg)}const og=["c","cases"];function ey(t){return rs(t,og,[])}const ag=["s","static"];function ty(t){return rs(t,ag)}const lg=["i","items"];function ny(t){return rs(t,lg,[])}const cg=["t","type"];function vf(t){return rs(t,cg)}const ug=["v","value"];function na(t,e){const n=rs(t,ug);if(n!=null)return n;throw bo(e)}const fg=["m","modifier"];function iy(t){return rs(t,fg)}const hg=["k","key"];function sy(t){const e=rs(t,hg);if(e)return e;throw bo(6)}function rs(t,e,n){for(let i=0;i<e.length;i++){const s=e[i];if(Fn(t,s)&&t[s]!=null)return t[s]}return n}const dg=[...rg,...og,...ag,...lg,...hg,...fg,...ug,...cg];function bo(t){return new Error(`unhandled node type: ${t}`)}function zl(t){return n=>ry(n,t)}function ry(t,e){const n=Qx(e);if(n==null)throw bo(0);if(vf(n)===1){const r=ey(n);return t.plural(r.reduce((o,a)=>[...o,zh(t,a)],[]))}else return zh(t,n)}function zh(t,e){const n=ty(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=ny(e).reduce((s,r)=>[...s,Vc(t,r)],[]);return t.normalize(i)}}function Vc(t,e){const n=vf(e);switch(n){case 3:return na(e,n);case 9:return na(e,n);case 4:{const i=e;if(Fn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Fn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw bo(n)}case 5:{const i=e;if(Fn(i,"i")&&It(i.i))return t.interpolate(t.list(i.i));if(Fn(i,"index")&&It(i.index))return t.interpolate(t.list(i.index));throw bo(n)}case 6:{const i=e,s=iy(i),r=sy(i);return t.linked(Vc(t,r),s?Vc(t,s):void 0,t.type)}case 7:return na(e,n);case 8:return na(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const oy=t=>t;let ia=gt();function ay(t,e={}){let n=!1;const i=e.onError||Px;return e.onError=s=>{n=!0,i(s)},{...Zx(t,e),detectError:n}}function ly(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ce(t)){rt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||oy)(t),s=ia[i];if(s)return s;const{ast:r,detectError:o}=ay(t,{...e,location:!1,jit:!0}),a=zl(r);return o?a:ia[i]=a}else{const n=t.cacheKey;if(n){const i=ia[n];return i||(ia[n]=zl(t))}else return zl(t)}}let To=null;function cy(t){To=t}function uy(t,e,n){To&&To.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const fy=hy("function:translate");function hy(t){return e=>To&&To.emit(t,e)}const xi={INVALID_ARGUMENT:Cx,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},dy=24;function yi(t){return ml(t,null,void 0)}function xf(t,e){return e.locale!=null?Hh(e.locale):Hh(t.locale)}let Hl;function Hh(t){if(Ce(t))return t;if(Mt(t)){if(t.resolvedOnce&&Hl!=null)return Hl;if(t.constructor.name==="Function"){const e=t();if(wx(e))throw yi(xi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Hl=e}else throw yi(xi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw yi(xi.NOT_SUPPORT_LOCALE_TYPE)}function py(t,e,n){return[...new Set([n,...Rt(e)?e:ot(e)?Object.keys(e):Ce(e)?[e]:[n]])]}function pg(t,e,n){const i=Ce(n)?n:wo,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let o=[n];for(;Rt(o);)o=Vh(r,o,e);const a=Rt(e)||!Je(e)?e:e.default?e.default:null;o=Ce(a)?[a]:a,Rt(o)&&Vh(r,o,!1),s.__localeChainCache.set(i,r)}return r}function Vh(t,e,n){let i=!0;for(let s=0;s<e.length&&rt(i);s++){const r=e[s];Ce(r)&&(i=my(t,e[s],n))}return i}function my(t,e,n){let i;const s=e.split("-");do{const r=s.join("-");i=gy(t,r,n),s.splice(-1,1)}while(s.length&&i===!0);return i}function gy(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Rt(n)||Je(n))&&n[s]&&(i=n[s])}return i}const os=[];os[0]={w:[0],i:[3,0],"[":[4],o:[7]};os[1]={w:[1],".":[2],"[":[4],o:[7]};os[2]={w:[2],i:[3,0],0:[3,0]};os[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};os[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};os[5]={"'":[4,0],o:8,l:[5,0]};os[6]={'"':[4,0],o:8,l:[6,0]};const _y=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function vy(t){return _y.test(t)}function xy(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function yy(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Sy(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:vy(e)?xy(e):"*"+e}function My(t){const e=[];let n=-1,i=0,s=0,r,o,a,l,c,u,f;const h=[];h[0]=()=>{o===void 0?o=a:o+=a},h[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},h[2]=()=>{h[0](),s++},h[3]=()=>{if(s>0)s--,i=4,h[0]();else{if(s=0,o===void 0||(o=Sy(o),o===!1))return!1;h[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,h[0](),!0}for(;i!==null;)if(n++,r=t[n],!(r==="\\"&&p())){if(l=yy(r),f=os[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(a=r,u()===!1))))return;if(i===7)return e}}const Gh=new Map;function Ey(t,e){return ot(t)?t[e]:null}function by(t,e){if(!ot(t))return null;let n=Gh.get(e);if(n||(n=My(e),n&&Gh.set(e,n)),!n)return null;const i=n.length;let s=t,r=0;for(;r<i;){const o=n[r];if(dg.includes(o)&&Qn(s))return null;const a=s[o];if(a===void 0||Mt(s))return null;s=a,r++}return s}const Ty="11.1.12",gl=-1,wo="en-US",Wh="",Xh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function wy(){return{upper:(t,e)=>e==="text"&&Ce(t)?t.toUpperCase():e==="vnode"&&ot(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ce(t)?t.toLowerCase():e==="vnode"&&ot(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ce(t)?Xh(t):e==="vnode"&&ot(t)&&"__v_isVNode"in t?Xh(t.children):t}}let mg;function Ay(t){mg=t}let gg;function Ry(t){gg=t}let _g;function Cy(t){_g=t}let vg=null;const Py=t=>{vg=t},Ly=()=>vg;let xg=null;const Yh=t=>{xg=t},Iy=()=>xg;let $h=0;function Dy(t={}){const e=Mt(t.onWarn)?t.onWarn:xx,n=Ce(t.version)?t.version:Ty,i=Ce(t.locale)||Mt(t.locale)?t.locale:wo,s=Mt(i)?wo:i,r=Rt(t.fallbackLocale)||Je(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=Je(t.messages)?t.messages:Vl(s),a=Je(t.datetimeFormats)?t.datetimeFormats:Vl(s),l=Je(t.numberFormats)?t.numberFormats:Vl(s),c=Ut(gt(),t.modifiers,wy()),u=t.pluralRules||gt(),f=Mt(t.missing)?t.missing:null,h=rt(t.missingWarn)||xr(t.missingWarn)?t.missingWarn:!0,p=rt(t.fallbackWarn)||xr(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,x=!!t.unresolving,m=Mt(t.postTranslation)?t.postTranslation:null,d=Je(t.processor)?t.processor:null,S=rt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,y=!!t.escapeParameter,v=Mt(t.messageCompiler)?t.messageCompiler:mg,L=Mt(t.messageResolver)?t.messageResolver:gg||Ey,P=Mt(t.localeFallbacker)?t.localeFallbacker:_g||py,A=ot(t.fallbackContext)?t.fallbackContext:void 0,U=t,E=ot(U.__datetimeFormatters)?U.__datetimeFormatters:new Map,b=ot(U.__numberFormatters)?U.__numberFormatters:new Map,F=ot(U.__meta)?U.__meta:{};$h++;const B={version:n,cid:$h,locale:i,fallbackLocale:r,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:x,postTranslation:m,processor:d,warnHtmlMessage:S,escapeParameter:y,messageCompiler:v,messageResolver:L,localeFallbacker:P,fallbackContext:A,onWarn:e,__meta:F};return B.datetimeFormats=a,B.numberFormats=l,B.__datetimeFormatters=E,B.__numberFormatters=b,__INTLIFY_PROD_DEVTOOLS__&&uy(B,n,F),B}const Vl=t=>({[t]:gt()});function yf(t,e,n,i,s){const{missing:r,onWarn:o}=t;if(r!==null){const a=r(t,n,e,s);return Ce(a)?a:e}else return e}function zr(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Ny(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Uy(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(Ny(t,e[i]))return!0;return!1}function qh(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Gc(...e),h=rt(u.missingWarn)?u.missingWarn:t.missingWarn;rt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=xf(t,u),x=o(t,s,_);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},d,S=null;const y="datetime format";for(let P=0;P<x.length&&(d=x[P],m=n[d]||{},S=m[l],!Je(S));P++)yf(t,l,d,h,y);if(!Je(S)||!Ce(d))return i?gl:l;let v=`${d}__${l}`;pl(f)||(v=`${v}__${JSON.stringify(f)}`);let L=a.get(v);return L||(L=new Intl.DateTimeFormat(d,Ut({},S,f)),a.set(v,L)),p?L.formatToParts(c):L.format(c)}const yg=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Gc(...t){const[e,n,i,s]=t,r=gt();let o=gt(),a;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw yi(xi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw yi(xi.INVALID_ISO_DATE_ARGUMENT)}}else if(Mx(e)){if(isNaN(e.getTime()))throw yi(xi.INVALID_DATE_ARGUMENT);a=e}else if(It(e))a=e;else throw yi(xi.INVALID_ARGUMENT);return Ce(n)?r.key=n:Je(n)&&Object.keys(n).forEach(l=>{yg.includes(l)?o[l]=n[l]:r[l]=n[l]}),Ce(i)?r.locale=i:Je(i)&&(o=i),Je(s)&&(o=s),[r.key||"",a,r,o]}function jh(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function Kh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Wc(...e),h=rt(u.missingWarn)?u.missingWarn:t.missingWarn;rt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=xf(t,u),x=o(t,s,_);if(!Ce(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},d,S=null;const y="number format";for(let P=0;P<x.length&&(d=x[P],m=n[d]||{},S=m[l],!Je(S));P++)yf(t,l,d,h,y);if(!Je(S)||!Ce(d))return i?gl:l;let v=`${d}__${l}`;pl(f)||(v=`${v}__${JSON.stringify(f)}`);let L=a.get(v);return L||(L=new Intl.NumberFormat(d,Ut({},S,f)),a.set(v,L)),p?L.formatToParts(c):L.format(c)}const Sg=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Wc(...t){const[e,n,i,s]=t,r=gt();let o=gt();if(!It(e))throw yi(xi.INVALID_ARGUMENT);const a=e;return Ce(n)?r.key=n:Je(n)&&Object.keys(n).forEach(l=>{Sg.includes(l)?o[l]=n[l]:r[l]=n[l]}),Ce(i)?r.locale=i:Je(i)&&(o=i),Je(s)&&(o=s),[r.key||"",a,r,o]}function Zh(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}const Fy=t=>t,Oy=t=>"",By="text",ky=t=>t.length===0?"":gf(t),zy=Ax;function Jh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Hy(t){const e=It(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(It(t.named.count)||It(t.named.n))?It(t.named.count)?t.named.count:It(t.named.n)?t.named.n:e:e}function Vy(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Gy(t={}){const e=t.locale,n=Hy(t),i=ot(t.pluralRules)&&Ce(e)&&Mt(t.pluralRules[e])?t.pluralRules[e]:Jh,s=ot(t.pluralRules)&&Ce(e)&&Mt(t.pluralRules[e])?Jh:void 0,r=d=>d[i(n,d.length,s)],o=t.list||[],a=d=>o[d],l=t.named||gt();It(t.pluralIndex)&&Vy(n,l);const c=d=>l[d];function u(d,S){const y=Mt(t.messages)?t.messages(d,!!S):ot(t.messages)?t.messages[d]:!1;return y||(t.parent?t.parent.message(d):Oy)}const f=d=>t.modifiers?t.modifiers[d]:Fy,h=Je(t.processor)&&Mt(t.processor.normalize)?t.processor.normalize:ky,p=Je(t.processor)&&Mt(t.processor.interpolate)?t.processor.interpolate:zy,_=Je(t.processor)&&Ce(t.processor.type)?t.processor.type:By,m={list:a,named:c,plural:r,linked:(d,...S)=>{const[y,v]=S;let L="text",P="";S.length===1?ot(y)?(P=y.modifier||P,L=y.type||L):Ce(y)&&(P=y||P):S.length===2&&(Ce(y)&&(P=y||P),Ce(v)&&(L=v||L));const A=u(d,!0)(m),U=L==="vnode"&&Rt(A)&&P?A[0]:A;return P?f(P)(U,L):U},message:u,type:_,interpolate:p,normalize:h,values:Ut(gt(),o,l)};return m}const Qh=()=>"",Tn=t=>Mt(t);function ed(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=t,[l,c]=Xc(...e),u=rt(c.missingWarn)?c.missingWarn:t.missingWarn,f=rt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=rt(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Ce(c.default)||rt(c.default)?rt(c.default)?r?l:()=>l:c.default:n?r?l:()=>l:null,x=n||_!=null&&(Ce(_)||Mt(_)),m=xf(t,c);h&&Wy(c);let[d,S,y]=p?[l,m,a[m]||gt()]:Mg(t,l,m,o,f,u),v=d,L=l;if(!p&&!(Ce(v)||Qn(v)||Tn(v))&&x&&(v=_,L=v),!p&&(!(Ce(v)||Qn(v)||Tn(v))||!Ce(S)))return s?gl:l;let P=!1;const A=()=>{P=!0},U=Tn(v)?v:Eg(t,l,S,v,L,A);if(P)return v;const E=$y(t,S,y,c),b=Gy(E),F=Xy(t,U,b);let B=i?i(F,l):F;if(h&&Ce(B)&&(B=bx(B)),__INTLIFY_PROD_DEVTOOLS__){const X={timestamp:Date.now(),key:Ce(l)?l:Tn(v)?v.key:"",locale:S||(Tn(v)?v.locale:""),format:Ce(v)?v:Tn(v)?v.source:"",message:B};X.meta=Ut({},t.__meta,Ly()||{}),fy(X)}return B}function Wy(t){Rt(t.list)?t.list=t.list.map(e=>Ce(e)?Uh(e):e):ot(t.named)&&Object.keys(t.named).forEach(e=>{Ce(t.named[e])&&(t.named[e]=Uh(t.named[e]))})}function Mg(t,e,n,i,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=gt(),h,p=null;const _="translate";for(let x=0;x<u.length&&(h=u[x],f=o[h]||gt(),(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||Qn(p)||Tn(p)));x++)if(!Uy(h,u)){const m=yf(t,e,h,r,_);m!==e&&(p=m)}return[p,h,f]}function Eg(t,e,n,i,s,r){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Tn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=o(i,Yy(t,n,s,i,a,r));return l.locale=n,l.key=e,l.source=i,l}function Xy(t,e,n){return e(n)}function Xc(...t){const[e,n,i]=t,s=gt();if(!Ce(e)&&!It(e)&&!Tn(e)&&!Qn(e))throw yi(xi.INVALID_ARGUMENT);const r=It(e)?String(e):(Tn(e),e);return It(n)?s.plural=n:Ce(n)?s.default=n:Je(n)&&!pl(n)?s.named=n:Rt(n)&&(s.list=n),It(i)?s.plural=i:Ce(i)?s.default=i:Je(i)&&Ut(s,i),[r,s]}function Yy(t,e,n,i,s,r){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>yx(e,n,o)}}function $y(t,e,n,i){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:s,pluralRules:r,messages:(p,_)=>{let x=o(n,p);if(x==null&&(u||_)){const[,,m]=Mg(u||t,p,e,a,l,c);x=o(m,p)}if(Ce(x)||Qn(x)){let m=!1;const S=Eg(t,p,e,x,p,()=>{m=!0});return m?Qh:S}else return Tn(x)?x:Qh}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),It(i.plural)&&(h.pluralIndex=i.plural),h}Jx();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const qy="11.1.12";function jy(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(As().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(As().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(As().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(As().__INTLIFY_PROD_DEVTOOLS__=!1)}const cn={UNEXPECTED_RETURN_TYPE:dy,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function xn(t,...e){return ml(t,null,void 0)}const Yc=ss("__translateVNode"),$c=ss("__datetimeParts"),qc=ss("__numberParts"),bg=ss("__setPluralRules"),Tg=ss("__injectWithOption"),jc=ss("__dispose");function Ao(t){if(!ot(t)||Qn(t))return t;for(const e in t)if(Fn(t,e))if(!e.includes("."))ot(t[e])&&Ao(t[e]);else{const n=e.split("."),i=n.length-1;let s=t,r=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in s||(s[n[o]]=gt()),!ot(s[n[o]])){r=!0;break}s=s[n[o]]}if(r||(Qn(s)?dg.includes(n[i])||delete t[e]:(s[n[i]]=t[e],delete t[e])),!Qn(s)){const o=s[n[i]];ot(o)&&Ao(o)}}return t}function Sf(t,e){const{messages:n,__i18n:i,messageResolver:s,flatJson:r}=e,o=Je(n)?n:Rt(i)?gt():{[t]:gt()};if(Rt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||gt(),Na(c,o[l])):Na(c,o)}else Ce(a)&&Na(JSON.parse(a),o)}),s==null&&r)for(const a in o)Fn(o,a)&&Ao(o[a]);return o}function wg(t){return t.type}function Ag(t,e,n){let i=ot(e.messages)?e.messages:gt();"__i18nGlobal"in n&&(i=Sf(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{t.mergeLocaleMessage(r,i[r])});{if(ot(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ot(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function td(t){return Qe(Vo,null,t,0)}const nd="__INTLIFY_META__",id=()=>[],Ky=()=>!1;let sd=0;function rd(t){return((e,n,i,s)=>t(n,i,Ai()||void 0,s))}const Zy=()=>{const t=Ai();let e=null;return t&&(e=wg(t)[nd])?{[nd]:e}:null};function Mf(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,s=t.flatJson,r=Qa?ei:of;let o=rt(t.inheritLocale)?t.inheritLocale:!0;const a=r(e&&o?e.locale.value:Ce(t.locale)?t.locale:wo),l=r(e&&o?e.fallbackLocale.value:Ce(t.fallbackLocale)||Rt(t.fallbackLocale)||Je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=r(Sf(a.value,t)),u=r(Je(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=r(Je(t.numberFormats)?t.numberFormats:{[a.value]:{}});let h=e?e.missingWarn:rt(t.missingWarn)||xr(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:rt(t.fallbackWarn)||xr(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:rt(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,m=Mt(t.missing)?t.missing:null,d=Mt(t.missing)?rd(t.missing):null,S=Mt(t.postTranslation)?t.postTranslation:null,y=e?e.warnHtmlMessage:rt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter;const L=e?e.modifiers:Je(t.modifiers)?t.modifiers:{};let P=t.pluralRules||e&&e.pluralRules,A;A=(()=>{i&&Yh(null);const g={version:qy,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:L,pluralRules:P,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:y,escapeParameter:v,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=Je(A)?A.__datetimeFormatters:void 0,g.__numberFormatters=Je(A)?A.__numberFormatters:void 0;const I=Dy(g);return i&&Yh(I),I})(),zr(A,a.value,l.value);function E(){return[a.value,l.value,c.value,u.value,f.value]}const b=Tt({get:()=>a.value,set:g=>{A.locale=g,a.value=g}}),F=Tt({get:()=>l.value,set:g=>{A.fallbackLocale=g,l.value=g,zr(A,a.value,g)}}),B=Tt(()=>c.value),X=Tt(()=>u.value),ie=Tt(()=>f.value);function oe(){return Mt(S)?S:null}function ee(g){S=g,A.postTranslation=g}function J(){return m}function $(g){g!==null&&(d=rd(g)),m=g,A.missing=d}const pe=(g,I,G,j,q,ye)=>{E();let fe;try{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=e?Iy():void 0),fe=g(A)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=void 0)}if(G!=="translate exists"&&It(fe)&&fe===gl||G==="translate exists"&&!fe){const[Ee,Ae]=I();return e&&_?j(e):q(Ee)}else{if(ye(fe))return fe;throw xn(cn.UNEXPECTED_RETURN_TYPE)}};function ve(...g){return pe(I=>Reflect.apply(ed,null,[I,...g]),()=>Xc(...g),"translate",I=>Reflect.apply(I.t,I,[...g]),I=>I,I=>Ce(I))}function we(...g){const[I,G,j]=g;if(j&&!ot(j))throw xn(cn.INVALID_ARGUMENT);return ve(I,G,Ut({resolvedMessage:!0},j||{}))}function Oe(...g){return pe(I=>Reflect.apply(qh,null,[I,...g]),()=>Gc(...g),"datetime format",I=>Reflect.apply(I.d,I,[...g]),()=>Wh,I=>Ce(I)||Rt(I))}function je(...g){return pe(I=>Reflect.apply(Kh,null,[I,...g]),()=>Wc(...g),"number format",I=>Reflect.apply(I.n,I,[...g]),()=>Wh,I=>Ce(I)||Rt(I))}function re(g){return g.map(I=>Ce(I)||It(I)||rt(I)?td(String(I)):I)}const Me={normalize:re,interpolate:g=>g,type:"vnode"};function V(...g){return pe(I=>{let G;const j=I;try{j.processor=Me,G=Reflect.apply(ed,null,[j,...g])}finally{j.processor=null}return G},()=>Xc(...g),"translate",I=>I[Yc](...g),I=>[td(I)],I=>Rt(I))}function se(...g){return pe(I=>Reflect.apply(Kh,null,[I,...g]),()=>Wc(...g),"number format",I=>I[qc](...g),id,I=>Ce(I)||Rt(I))}function le(...g){return pe(I=>Reflect.apply(qh,null,[I,...g]),()=>Gc(...g),"datetime format",I=>I[$c](...g),id,I=>Ce(I)||Rt(I))}function ae(g){P=g,A.pluralRules=P}function Be(g,I){return pe(()=>{if(!g)return!1;const G=Ce(I)?I:a.value,j=M(G),q=A.messageResolver(j,g);return Qn(q)||Tn(q)||Ce(q)},()=>[g],"translate exists",G=>Reflect.apply(G.te,G,[g,I]),Ky,G=>rt(G))}function D(g){let I=null;const G=pg(A,l.value,a.value);for(let j=0;j<G.length;j++){const q=c.value[G[j]]||{},ye=A.messageResolver(q,g);if(ye!=null){I=ye;break}}return I}function N(g){const I=D(g);return I??(e?e.tm(g)||{}:{})}function M(g){return c.value[g]||{}}function ne(g,I){if(s){const G={[g]:I};for(const j in G)Fn(G,j)&&Ao(G[j]);I=G[g]}c.value[g]=I,A.messages=c.value}function Z(g,I){c.value[g]=c.value[g]||{};const G={[g]:I};if(s)for(const j in G)Fn(G,j)&&Ao(G[j]);I=G[g],Na(I,c.value[g]),A.messages=c.value}function K(g){return u.value[g]||{}}function w(g,I){u.value[g]=I,A.datetimeFormats=u.value,jh(A,g,I)}function C(g,I){u.value[g]=Ut(u.value[g]||{},I),A.datetimeFormats=u.value,jh(A,g,I)}function O(g){return f.value[g]||{}}function k(g,I){f.value[g]=I,A.numberFormats=f.value,Zh(A,g,I)}function he(g,I){f.value[g]=Ut(f.value[g]||{},I),A.numberFormats=f.value,Zh(A,g,I)}sd++,e&&Qa&&(Ei(e.locale,g=>{o&&(a.value=g,A.locale=g,zr(A,a.value,l.value))}),Ei(e.fallbackLocale,g=>{o&&(l.value=g,A.fallbackLocale=g,zr(A,a.value,l.value))}));const T={id:sd,locale:b,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,zr(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:B,get modifiers(){return L},get pluralRules(){return P||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(g){h=g,A.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(g){p=g,A.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return x},set fallbackFormat(g){x=g,A.fallbackFormat=x},get warnHtmlMessage(){return y},set warnHtmlMessage(g){y=g,A.warnHtmlMessage=g},get escapeParameter(){return v},set escapeParameter(g){v=g,A.escapeParameter=g},t:ve,getLocaleMessage:M,setLocaleMessage:ne,mergeLocaleMessage:Z,getPostTranslationHandler:oe,setPostTranslationHandler:ee,getMissingHandler:J,setMissingHandler:$,[bg]:ae};return T.datetimeFormats=X,T.numberFormats=ie,T.rt=we,T.te=Be,T.tm=N,T.d=Oe,T.n=je,T.getDateTimeFormat=K,T.setDateTimeFormat=w,T.mergeDateTimeFormat=C,T.getNumberFormat=O,T.setNumberFormat=k,T.mergeNumberFormat=he,T[Tg]=n,T[Yc]=V,T[$c]=le,T[qc]=se,T}function Jy(t){const e=Ce(t.locale)?t.locale:wo,n=Ce(t.fallbackLocale)||Rt(t.fallbackLocale)||Je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=Mt(t.missing)?t.missing:void 0,s=rt(t.silentTranslationWarn)||xr(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,r=rt(t.silentFallbackWarn)||xr(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=rt(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Je(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=Mt(t.postTranslation)?t.postTranslation:void 0,f=Ce(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=rt(t.sync)?t.sync:!0;let _=t.messages;if(Je(t.sharedMessages)){const L=t.sharedMessages;_=Object.keys(L).reduce((A,U)=>{const E=A[U]||(A[U]={});return Ut(E,L[U]),A},_||{})}const{__i18n:x,__root:m,__injectWithOption:d}=t,S=t.datetimeFormats,y=t.numberFormats,v=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:v,datetimeFormats:S,numberFormats:y,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:m,__injectWithOption:d}}function Kc(t={}){const e=Mf(Jy(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return rt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(s){e.missingWarn=rt(s)?!s:s},get silentFallbackWarn(){return rt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(s){e.fallbackWarn=rt(s)?!s:s},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,r){return e.te(s,r)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,r){e.setLocaleMessage(s,r)},mergeLocaleMessage(s,r){e.mergeLocaleMessage(s,r)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,r){e.setDateTimeFormat(s,r)},mergeDateTimeFormat(s,r){e.mergeDateTimeFormat(s,r)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,r){e.setNumberFormat(s,r)},mergeNumberFormat(s,r){e.mergeNumberFormat(s,r)}};return i.__extender=n,i}function Qy(t,e,n){return{beforeCreate(){const i=Ai();if(!i)throw xn(cn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=od(t,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=Kc(r);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=od(t,s);else{this.$i18n=Kc({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&Ag(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$te=(r,o)=>this.$i18n.te(r,o),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Ai();if(!i)throw xn(cn.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(i),delete this.$i18n}}}function od(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[bg](e.pluralizationRules||t.pluralizationRules);const n=Sf(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Ef={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function eS({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,s)=>[...i,...s.type===Gt?s.children:[s]],[]):e.reduce((n,i)=>{const s=t[i];return s&&(n[i]=s()),n},gt())}function Rg(){return Gt}const tS=un({name:"i18n-t",props:Ut({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>It(t)||!isNaN(t)}},Ef),setup(t,e){const{slots:n,attrs:i}=e,s=t.i18n||Ci({useScope:t.scope,__useComponent:!0});return()=>{const r=Object.keys(n).filter(f=>f[0]!=="_"),o=gt();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Ce(t.plural)?+t.plural:t.plural);const a=eS(e,r),l=s[Yc](t.keypath,a,o),c=Ut(gt(),i),u=Ce(t.tag)||ot(t.tag)?t.tag:Rg();return Wo(u,c,l)}}}),ad=tS;function nS(t){return Rt(t)&&!Ce(t[0])}function Cg(t,e,n,i){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a=gt();t.locale&&(o.locale=t.locale),Ce(t.format)?o.key=t.format:ot(t.format)&&(Ce(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Ut(gt(),h,{[p]:t.format[p]}):h,gt()));const l=i(t.value,o,a);let c=[o.key];Rt(l)?c=l.map((h,p)=>{const _=s[h.type],x=_?_({[h.type]:h.value,index:p,parts:l}):[h.value];return nS(x)&&(x[0].key=`${h.type}-${p}`),x}):Ce(l)&&(c=[l]);const u=Ut(gt(),r),f=Ce(t.tag)||ot(t.tag)?t.tag:Rg();return Wo(f,u,c)}}const iS=un({name:"i18n-n",props:Ut({value:{type:Number,required:!0},format:{type:[String,Object]}},Ef),setup(t,e){const n=t.i18n||Ci({useScope:t.scope,__useComponent:!0});return Cg(t,e,Sg,(...i)=>n[qc](...i))}}),ld=iS;function sS(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function rS(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw xn(cn.UNEXPECTED_ERROR);const c=sS(t,a.$),u=cd(l);return[Reflect.apply(c.t,c,[...ud(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Qa&&t.global===c&&(o.__i18nWatcher=Ei(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Qa&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=cd(a);o.textContent=Reflect.apply(l.t,l,[...ud(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function cd(t){if(Ce(t))return{path:t};if(Je(t)){if(!("path"in t))throw xn(cn.REQUIRED_VALUE,"path");return t}else throw xn(cn.INVALID_VALUE)}function ud(t){const{path:e,locale:n,args:i,choice:s,plural:r}=t,o={},a=i||{};return Ce(n)&&(o.locale=n),It(s)&&(o.plural=s),It(r)&&(o.plural=r),[e,a,o]}function oS(t,e,...n){const i=Je(n[0])?n[0]:{};(rt(i.globalInstall)?i.globalInstall:!0)&&([ad.name,"I18nT"].forEach(r=>t.component(r,ad)),[ld.name,"I18nN"].forEach(r=>t.component(r,ld)),[hd.name,"I18nD"].forEach(r=>t.component(r,hd))),t.directive("t",rS(e))}const aS=ss("global-vue-i18n");function lS(t={}){const e=__VUE_I18N_LEGACY_API__&&rt(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=rt(t.globalInjection)?t.globalInjection:!0,i=new Map,[s,r]=cS(t,e),o=ss("");function a(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),Je(h[0])){const x=h[0];u.__composerExtend=x.__composerExtend,u.__vueI18nExtend=x.__vueI18nExtend}let p=null;!e&&n&&(p=_S(f,u.global)),__VUE_I18N_FULL_INSTALL__&&oS(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(Qy(r,r.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return r},dispose(){s.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function Ci(t={}){const e=Ai();if(e==null)throw xn(cn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw xn(cn.NOT_INSTALLED);const n=uS(e),i=hS(n),s=wg(e),r=fS(t,s);if(r==="global")return Ag(i,t,s),i;if(r==="parent"){let l=dS(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ut({},t);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),a=Mf(l),o.__composerExtend&&(a[jc]=o.__composerExtend(a)),mS(o,e,a),o.__setInstance(e,a)}return a}function cS(t,e){const n=Ku(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Kc(t)):n.run(()=>Mf(t));if(i==null)throw xn(cn.UNEXPECTED_ERROR);return[n,i]}function uS(t){const e=zn(t.isCE?aS:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw xn(t.isCE?cn.NOT_INSTALLED_WITH_PROVIDE:cn.UNEXPECTED_ERROR);return e}function fS(t,e){return pl(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function hS(t){return t.mode==="composition"?t.global:t.global.__composer}function dS(t,e,n=!1){let i=null;const s=e.root;let r=pS(e,n);for(;r!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(r);a!=null&&(i=a.__composer,n&&i&&!i[Tg]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function pS(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function mS(t,e,n){ks(()=>{},e),Lr(()=>{const i=n;t.__deleteInstance(e);const s=i[jc];s&&(s(),delete i[jc])},e)}const gS=["locale","fallbackLocale","availableLocales"],fd=["t","rt","d","n","tm","te"];function _S(t,e){const n=Object.create(null);return gS.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw xn(cn.UNEXPECTED_ERROR);const o=Ct(r.value)?{get(){return r.value.value},set(a){r.value.value=a}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,fd.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw xn(cn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,r)}),()=>{delete t.config.globalProperties.$i18n,fd.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const vS=un({name:"i18n-d",props:Ut({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Ef),setup(t,e){const n=t.i18n||Ci({useScope:t.scope,__useComponent:!0});return Cg(t,e,yg,(...i)=>n[$c](...i))}}),hd=vS;jy();Ay(ly);Ry(by);Cy(pg);if(__INTLIFY_PROD_DEVTOOLS__){const t=As();t.__INTLIFY__=!0,cy(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Pg;const _l=t=>Pg=t,Lg=Symbol();function Zc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ao;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ao||(ao={}));function xS(){const t=Ku(!0),e=t.run(()=>ei({}));let n=[],i=[];const s=rf({install(r){_l(s),s._a=r,r.provide(Lg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ig=()=>{};function dd(t,e,n,i=Ig){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&em()&&n0(s),s}function Ws(t,...e){t.slice().forEach(n=>{n(...e)})}const yS=t=>t(),pd=Symbol(),Gl=Symbol();function Jc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Zc(s)&&Zc(i)&&t.hasOwnProperty(n)&&!Ct(i)&&!Yi(i)?t[n]=Jc(s,i):t[n]=i}return t}const SS=Symbol();function MS(t){return!Zc(t)||!Object.prototype.hasOwnProperty.call(t,SS)}const{assign:ki}=Object;function ES(t){return!!(Ct(t)&&t.effect)}function bS(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=b0(n.state.value[t]);return ki(u,r,Object.keys(o||{}).reduce((f,h)=>(f[h]=rf(Tt(()=>{_l(n);const p=n._s.get(t);return o[h].call(p,p)})),f),{}))}return l=Dg(t,c,e,n,i,!0),l}function Dg(t,e,n={},i,s,r){let o;const a=ki({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],p;const _=i.state.value[t];!r&&!_&&(i.state.value[t]={}),ei({});let x;function m(U){let E;c=u=!1,typeof U=="function"?(U(i.state.value[t]),E={type:ao.patchFunction,storeId:t,events:p}):(Jc(i.state.value[t],U),E={type:ao.patchObject,payload:U,storeId:t,events:p});const b=x=Symbol();af().then(()=>{x===b&&(c=!0)}),u=!0,Ws(f,E,i.state.value[t])}const d=r?function(){const{state:E}=n,b=E?E():{};this.$patch(F=>{ki(F,b)})}:Ig;function S(){o.stop(),f=[],h=[],i._s.delete(t)}const y=(U,E="")=>{if(pd in U)return U[Gl]=E,U;const b=function(){_l(i);const F=Array.from(arguments),B=[],X=[];function ie(J){B.push(J)}function oe(J){X.push(J)}Ws(h,{args:F,name:b[Gl],store:L,after:ie,onError:oe});let ee;try{ee=U.apply(this&&this.$id===t?this:L,F)}catch(J){throw Ws(X,J),J}return ee instanceof Promise?ee.then(J=>(Ws(B,J),J)).catch(J=>(Ws(X,J),Promise.reject(J))):(Ws(B,ee),ee)};return b[pd]=!0,b[Gl]=E,b},v={_p:i,$id:t,$onAction:dd.bind(null,h),$patch:m,$reset:d,$subscribe(U,E={}){const b=dd(f,U,E.detached,()=>F()),F=o.run(()=>Ei(()=>i.state.value[t],B=>{(E.flush==="sync"?u:c)&&U({storeId:t,type:ao.direct,events:p},B)},ki({},l,E)));return b},$dispose:S},L=zo(v);i._s.set(t,L);const A=(i._a&&i._a.runWithContext||yS)(()=>i._e.run(()=>(o=Ku()).run(()=>e({action:y}))));for(const U in A){const E=A[U];if(Ct(E)&&!ES(E)||Yi(E))r||(_&&MS(E)&&(Ct(E)?E.value=_[U]:Jc(E,_[U])),i.state.value[t][U]=E);else if(typeof E=="function"){const b=y(E,U);A[U]=b,a.actions[U]=E}}return ki(L,A),ki(tt(L),A),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:U=>{m(E=>{ki(E,U)})}}),i._p.forEach(U=>{ki(L,o.run(()=>U({store:L,app:i._a,pinia:i,options:a})))}),_&&r&&n.hydrate&&n.hydrate(L.$state,_),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function bf(t,e,n){let i;const s=typeof e=="function";i=s?n:e;function r(o,a){const l=sv();return o=o||(l?zn(Lg,null):null),o&&_l(o),o=Pg,o._s.has(t)||(s?Dg(t,e,i,o):bS(t,i,o)),o._s.get(t)}return r.$id=t,r}const Ir=bf("loading",()=>{const t=ei(!0),e=ei(!1),n=4500,i=500;function s(){e.value||(e.value=!0)}function r(){e.value&&(t.value&&setTimeout(()=>t.value=!1,n),e.value=!1)}return{isFirstLoad:t,isLoading:e,duration:i,load:s,done:r}}),TS=un({name:"loading",components:{AnimatedTxt:Kr},setup(){const{t}=Ci(),e=Ir(),n=Tt(()=>e.isFirstLoad?"first-load":"loading"),i=no("outerBall"),s=no("innerBall"),r=no("shadow"),o=[[{transform:"translateY(0px) scaleX(1) scaleY(1)",offset:0},{transform:"translateY(5px) scaleX(1) scaleY(1.04)",offset:.05},{transform:"translateY(12px) scaleX(1) scaleY(1.06)",offset:.1},{transform:"translateY(22px) scaleX(1) scaleY(1.08)",offset:.15},{transform:"translateY(35px) scaleX(1) scaleY(1.11)",offset:.2},{transform:"translateY(50px) scaleX(1) scaleY(1.14)",offset:.25},{transform:"translateY(68px) scaleX(1) scaleY(1.17)",offset:.3},{transform:"translateY(90px) scaleX(1) scaleY(1.20)",offset:.35},{transform:"translateY(105px) scaleX(1) scaleY(1.18)",offset:.4},{transform:"translateY(118px) scaleX(1) scaleY(1.15)",offset:.45},{transform:"translateY(120px) scaleX(1.30) scaleY(0.65)",offset:.48},{transform:"translateY(120px) scaleX(1.40) scaleY(0.60)",offset:.485},{transform:"translateY(120px) scaleX(1.35) scaleY(0.62)",offset:.49},{transform:"translateY(115px) scaleX(1.32) scaleY(0.64)",offset:.5},{transform:"translateY(100px) scaleX(1.25) scaleY(0.70)",offset:.52},{transform:"translateY(85px) scaleX(1.20) scaleY(0.76)",offset:.55},{transform:"translateY(70px) scaleX(1.15) scaleY(0.82)",offset:.58},{transform:"translateY(55px) scaleX(1.10) scaleY(0.88)",offset:.62},{transform:"translateY(40px) scaleX(1.05) scaleY(0.94)",offset:.66},{transform:"translateY(28px) scaleX(1.02) scaleY(0.98)",offset:.7},{transform:"translateY(18px) scaleX(1) scaleY(1)",offset:.75},{transform:"translateY(12px) scaleX(1) scaleY(1.04)",offset:.8},{transform:"translateY(8px) scaleX(1) scaleY(1.08)",offset:.86},{transform:"translateY(5px) scaleX(1) scaleY(1.04)",offset:.92},{transform:"translateY(3px) scaleX(1) scaleY(1.02)",offset:.96},{transform:"translateY(1px) scaleX(1) scaleY(1)",offset:.99},{transform:"translateY(0px) scaleX(1) scaleY(1)",offset:1}],[{transform:"translateY(0.0px) scaleX(1) scaleY(1)",offset:0},{transform:"translateY(6.9px) scaleX(1) scaleY(1.04)",offset:.05},{transform:"translateY(16.5px) scaleX(1) scaleY(1.06)",offset:.1},{transform:"translateY(30.2px) scaleX(1) scaleY(1.08)",offset:.15},{transform:"translateY(48.1px) scaleX(1) scaleY(1.11)",offset:.2},{transform:"translateY(68.8px) scaleX(1) scaleY(1.14)",offset:.25},{transform:"translateY(93.5px) scaleX(1) scaleY(1.17)",offset:.3},{transform:"translateY(123.8px) scaleX(1) scaleY(1.20)",offset:.35},{transform:"translateY(144.4px) scaleX(1) scaleY(1.18)",offset:.4},{transform:"translateY(162.2px) scaleX(1) scaleY(1.15)",offset:.45},{transform:"translateY(165.0px) scaleX(1.30) scaleY(0.65)",offset:.48},{transform:"translateY(165.0px) scaleX(1.40) scaleY(0.60)",offset:.485},{transform:"translateY(165.0px) scaleX(1.35) scaleY(0.62)",offset:.49},{transform:"translateY(158.1px) scaleX(1.32) scaleY(0.64)",offset:.5},{transform:"translateY(137.5px) scaleX(1.25) scaleY(0.70)",offset:.52},{transform:"translateY(116.9px) scaleX(1.20) scaleY(0.76)",offset:.55},{transform:"translateY(96.2px) scaleX(1.15) scaleY(0.82)",offset:.58},{transform:"translateY(75.6px) scaleX(1.10) scaleY(0.88)",offset:.62},{transform:"translateY(55.0px) scaleX(1.05) scaleY(0.94)",offset:.66},{transform:"translateY(38.5px) scaleX(1.02) scaleY(0.98)",offset:.7},{transform:"translateY(24.8px) scaleX(1) scaleY(1)",offset:.75},{transform:"translateY(16.5px) scaleX(1) scaleY(1.04)",offset:.8},{transform:"translateY(11.0px) scaleX(1) scaleY(1.08)",offset:.86},{transform:"translateY(6.9px) scaleX(1) scaleY(1.04)",offset:.92},{transform:"translateY(4.1px) scaleX(1) scaleY(1.02)",offset:.96},{transform:"translateY(1.4px) scaleX(1) scaleY(1)",offset:.99},{transform:"translateY(0.0px) scaleX(1) scaleY(1)",offset:1}],[{transform:"scaleX(1) translateY(140px)",offset:0},{transform:"scaleX(1.2) translateY(140px)",offset:.48},{transform:"scaleX(1.2) translateY(140px)",offset:.49},{transform:"scaleX(1) translateY(140px)"}]],a={duration:e.duration*2,easing:"linear",iterations:1/0,fill:"both"};function l(){i.value?.animate(o[0],a),s.value?.animate(o[1],a),r.value?.animate(o[2],a)}return Ei(e,()=>requestAnimationFrame(l)),{loadingStore:e,transitionName:n,t}}}),wS={key:0,class:"fixed flex a-center j-center w-full h-full z-97"},AS={key:0,class:"fixed flex flex-col a-center j-center w-full h-full bg-primary font-size-xl z-96"},RS={key:0,class:"absolute flex flex-col a-center j-center w-full h-full bg-primary glooey mix"},CS={ref:"outerBall",class:"absolute w-70 h-70 border-round bg-primary glooey-invert"},PS={ref:"innerBall",class:"absolute w-25 h-25 border-round bg-primary glooey"},LS={ref:"shadow",class:"absolute w-70 h-10 border-round bg-primary glooey-invert"};function IS(t,e,n,i,s,r){const o=Ls("AnimatedTxt");return st(),pt(Gt,null,[t.loadingStore.isFirstLoad?(st(),pt("div",wS,[t.loadingStore.isFirstLoad?(st(),dl(o,{key:0,class:"hem-1 pl-1/10 pr-1/10 font-size-xl sm:font-size-md lsem-2/10 txt-center",text:t.t("computer"),duration:800,"stagger-out":20,pause:500,animation:"fadeInOut"},null,8,["text"])):Wt("",!0)])):Wt("",!0),Qe(Eo,{name:t.transitionName,mode:"out-in"},{default:Ds(()=>[t.loadingStore.isLoading?(st(),pt("div",AS,[t.loadingStore.isFirstLoad?Wt("",!0):(st(),pt("div",RS,[Nt("div",CS,null,512),Nt("div",PS,null,512),Nt("div",LS,null,512)]))])):Wt("",!0)]),_:1},8,["name"])],64)}const DS=is(TS,[["render",IS]]),NS=un({name:"a-hoverable",props:{isExternal:{type:Boolean,default:!1},to:{type:String,default:""},target:{type:String,default:ig.Self},shape:{type:String,default:zc.Pill},effect:{type:String,default:""},img:{type:String,default:""},text:{type:String,default:""}},setup(){return{Shape:zc}}}),US={key:0,class:"relative w-50 h-50"},FS=["src","alt"],OS={key:1,class:"font-size-16 capitalize"};function BS(t,e,n,i,s,r){return st(),dl(q0(t.isExternal?"a":"router-link"),{class:ko(["flex a-center h-50 user-select-none pointer",{"j-start":t.shape===t.Shape.Pill},{"j-center":t.shape===t.Shape.Round},t.effect]),to:t.isExternal?void 0:{name:t.to},href:t.isExternal?t.to:void 0,target:t.target},{default:Ds(()=>[t.img?(st(),pt("div",US,[Nt("img",{src:t.img,alt:t.to},null,8,FS)])):Wt("",!0),t.text?(st(),pt("span",OS,mo(t.text),1)):Wt("",!0)]),_:1},8,["class","to","href","target"])}const Ng=is(NS,[["render",BS]]),kS=un({name:"switch-button",props:{isActive:{type:Boolean,default:!1},onSwitch:{type:Function,default:()=>{}},imgLeft:{type:String,default:""},imgRight:{type:String,default:""},textLeft:{type:String,default:""},textRight:{type:String,default:""}}}),zS={key:0},HS={key:0,class:"relative"},VS=["src"],GS={key:1},WS={key:1},XS={key:0,class:"relative"},YS=["src"],$S={key:1};function qS(t,e,n,i,s,r){return st(),pt("button",{class:"flex row a-center j-center border-none bg-none w-32 h-32 font-size-16 pointer user-select-none",onClick:e[0]||(e[0]=(...o)=>t.onSwitch&&t.onSwitch(...o))},[Qe(Eo,{name:"switch",mode:"out-in"},{default:Ds(()=>[t.isActive?(st(),pt("div",zS,[t.imgRight?(st(),pt("div",HS,[Nt("img",{src:t.imgRight},null,8,VS)])):Wt("",!0),t.textRight?(st(),pt("span",GS,mo(t.textRight),1)):Wt("",!0)])):(st(),pt("div",WS,[t.imgLeft?(st(),pt("div",XS,[Nt("img",{src:t.imgLeft},null,8,YS)])):Wt("",!0),t.textLeft?(st(),pt("span",$S,mo(t.textLeft),1)):Wt("",!0)]))]),_:1})])}const Ug=is(kS,[["render",qS]]),jS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z'/%3e%3cpath%20d='M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z'/%3e%3c/svg%3e",KS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",ZS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",JS="data:image/svg+xml,%3csvg%20id='Layer_1'%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%3e%3cpath%20d='m4%206a2.982%202.982%200%200%201%20-2.122-.879l-1.544-1.374a1%201%200%200%201%201.332-1.494l1.585%201.414a1%201%200%200%200%201.456.04l3.604-3.431a1%201%200%200%201%201.378%201.448l-3.589%203.414a2.964%202.964%200%200%201%20-2.1.862zm20-2a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.589-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1.023%201.023%200%200%201%20-1.414%200l-1.59-1.585a1%201%200%200%200%20-1.414%201.414l1.585%201.585a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.585-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1%201%200%200%201%20-1.456-.04l-1.585-1.414a1%201%200%200%200%20-1.332%201.494l1.544%201.374a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1z'/%3e%3c/svg%3e",QS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",eM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",tM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",nM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,20c-.552,0-1-.447-1-1,0-2.318,1.382-4.357,3.891-5.741,2.287-1.26,3.469-3.755,3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57,.147-4.952,1.307-1.363,1.144-2.144,2.82-2.144,4.597,0,.552-.448,1-1,1s-1-.448-1-1c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.289,13.441,.126c3.222,.565,5.866,3.21,6.432,6.432,.598,3.402-1.017,6.798-4.016,8.453-1.303,.718-2.857,1.993-2.857,3.989,0,.553-.448,1-1,1Zm-1.5,2.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z'/%3e%3c/svg%3e",iM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",sM="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z'/%3e%3cpath%20d='M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z'/%3e%3c/svg%3e",Fg=Object.freeze(Object.defineProperty({__proto__:null,angleDoubleRight:jS,crossSmall:KS,home:ZS,list:QS,listCheck:JS,menuBurger:eM,moonStars:tM,question:nM,sun:iM,user:sM},Symbol.toStringTag,{value:"Module"}));var Ht=(t=>(t.Light="light",t.Dark="dark",t))(Ht||{}),Ss=(t=>(t.EnUS="en-US",t.ZhTW="zh-TW",t))(Ss||{});function rM(t){return t!==null}const Dr=bf("theme",()=>{const t=ei(Ht.Light),e=localStorage.getItem("theme");rM(e)&&(t.value=e),ff(()=>localStorage.setItem("theme",t.value));function n(){switch(t.value){case Ht.Light:t.value=Ht.Dark;break;case Ht.Dark:t.value=Ht.Light;break}}const i=Tt(()=>t.value===Ht.Dark),s=Tt(()=>t.value===Ht.Light);return{theme:t,switchTheme:n,isDark:i,isLight:s}});function oM(t){return t!==null}const Og=bf("lang",()=>{const{locale:t}=Ci({useScope:"global"}),e=localStorage.getItem("lang");oM(e)&&(t.value=e),ff(()=>localStorage.setItem("lang",t.value));const n=()=>{switch(t.value){case Ss.EnUS:t.value=Ss.ZhTW;break;case Ss.ZhTW:t.value=Ss.EnUS;break}},i=Tt(()=>t.value===Ss.EnUS),s=Tt(()=>t.value===Ss.ZhTW);return{locale:t,switchLang:n,isEnUS:i,isZhTW:s}}),aM=un({name:"global-sidebar",components:{AHoverable:Ng,SwitchBtn:Ug},props:{toggled:{type:Boolean,default:!1},closeSidebar:{type:Function,default:()=>{}}},setup(){const t=Dr(),e=Og(),n=Ir(),{t:i}=Ci();return{icons:Fg,themeStore:t,langStore:e,loadingStore:n,t:i}}}),lM={key:0,class:"fixed r-0 flex flex-col w-180 h-full pt-50 pr-10 pl-10 bg-glassy z-99"},cM={class:"relative flex row j-around w-160 h-50 pt-24 mt-32 mr-10 ml-10 top-line"};function uM(t,e,n,i,s,r){const o=Ls("AHoverable"),a=Ls("SwitchBtn");return st(),pt(Gt,null,[Qe(Eo,{name:"slide-from-right"},{default:Ds(()=>[t.toggled&&!t.loadingStore.isLoading?(st(),pt("aside",lM,[Qe(o,{to:"home",img:t.icons.home,text:t.t("home"),shape:"pill"},null,8,["img","text"]),Qe(o,{to:"works",img:t.icons.list,text:t.t("work"),shape:"pill"},null,8,["img","text"]),Qe(o,{to:"blogs",img:t.icons.list,text:t.t("blog"),shape:"pill"},null,8,["img","text"]),Nt("div",cM,[Qe(a,{"on-switch":t.themeStore.switchTheme,"is-active":t.themeStore.isDark,"img-left":t.icons.sun,"img-right":t.icons.moonStars},null,8,["on-switch","is-active","img-left","img-right"]),Qe(a,{"on-switch":t.langStore.switchLang,"is-active":t.langStore.isEnUS,"text-left":"中","text-right":"Eng"},null,8,["on-switch","is-active"])])])):Wt("",!0)]),_:1}),Qe(Eo,{name:"fade"},{default:Ds(()=>[t.toggled&&!t.loadingStore.isLoading?(st(),pt("div",{key:0,class:"bg-dark fixed w-dvw h-dvh z-98",onClick:e[0]||(e[0]=l=>t.closeSidebar())})):Wt("",!0)]),_:1})],64)}const fM=is(aM,[["render",uM]]),hM=un({name:"global-header",components:{AHoverable:Ng,SwitchBtn:Ug,GlobalSidebar:fM},setup(){const t=Dr(),e=Og(),n=Ir(),{t:i}=Ci(),s=ei(!1);function r(){s.value=!s.value}function o(){s.value=!1}const a=()=>{window.innerWidth>640&&(s.value=!1)};return ks(()=>window.addEventListener("resize",a)),Lr(()=>window.removeEventListener("resize",a)),{icons:Fg,themeStore:t,langStore:e,loadingStore:n,t:i,toggled:s,toggleSidebar:r,closeSidebar:o}}}),dM={key:0,class:"fixed flex a-center j-between t-0 w-dvw h-50 z-100"},pM={class:"flex row j-around w-400 ml-70 sm:none"},mM={class:"flex row a-center j-around w-116 pr-16 sm:none"},gM=["src"],_M=["src"];function vM(t,e,n,i,s,r){const o=Ls("AHoverable"),a=Ls("SwitchBtn"),l=Ls("GlobalSidebar");return st(),pt(Gt,null,[Qe(Eo,{name:"slide-from-top"},{default:Ds(()=>[!t.loadingStore.isLoading&&!t.loadingStore.isFirstLoad?(st(),pt("header",dM,[e[1]||(e[1]=Nt("h1",{class:"absolute w-38 ml-16 mr-16 mt-auto mb-auto font-size-36 italic user-select-none"},"Pc",-1)),Nt("nav",pM,[Qe(o,{to:"home",effect:"underline-m",text:t.t("home")},null,8,["text"]),Qe(o,{to:"works",effect:"underline-m",text:t.t("work")},null,8,["text"]),Qe(o,{to:"blogs",effect:"underline-m",text:t.t("blog")},null,8,["text"])]),Nt("aside",mM,[Qe(a,{"on-switch":t.themeStore.switchTheme,"is-active":t.themeStore.isDark,"img-left":t.icons.sun,"img-right":t.icons.moonStars},null,8,["on-switch","is-active","img-left","img-right"]),Qe(a,{"on-switch":t.langStore.switchLang,"is-active":t.langStore.isEnUS,"text-left":"中","text-right":"Eng"},null,8,["on-switch","is-active"])]),Nt("button",{class:"none relative w-50 h-50 bg-none border-none pointer sm:block sm:ml-auto user-select-none",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?Wt("",!0):(st(),pt("img",{key:0,src:t.icons.menuBurger,alt:"menu"},null,8,gM)),t.toggled?(st(),pt("img",{key:1,src:t.icons.crossSmall,alt:"close"},null,8,_M)):Wt("",!0)])])):Wt("",!0)]),_:1}),Qe(l,{toggled:t.toggled,closeSidebar:t.closeSidebar},null,8,["toggled","closeSidebar"])],64)}const xM=is(hM,[["render",vM]]),yM=un({__name:"App",setup(t){const e=Dr();return ff(()=>document.body.style.setProperty("--theme",e.theme)),(n,i)=>{const s=Ls("router-view");return st(),pt(Gt,null,[Qe(DS),Qe(xM),Qe(s)],64)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const cr=typeof document<"u";function Bg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function SM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bg(t.default)}const lt=Object.assign;function Wl(t,e){const n={};for(const i in e){const s=e[i];n[i]=Gn(s)?s.map(t):t(s)}return n}const lo=()=>{},Gn=Array.isArray,kg=/#/g,MM=/&/g,EM=/\//g,bM=/=/g,TM=/\?/g,zg=/\+/g,wM=/%5B/g,AM=/%5D/g,Hg=/%5E/g,RM=/%60/g,Vg=/%7B/g,CM=/%7C/g,Gg=/%7D/g,PM=/%20/g;function Tf(t){return encodeURI(""+t).replace(CM,"|").replace(wM,"[").replace(AM,"]")}function LM(t){return Tf(t).replace(Vg,"{").replace(Gg,"}").replace(Hg,"^")}function Qc(t){return Tf(t).replace(zg,"%2B").replace(PM,"+").replace(kg,"%23").replace(MM,"%26").replace(RM,"`").replace(Vg,"{").replace(Gg,"}").replace(Hg,"^")}function IM(t){return Qc(t).replace(bM,"%3D")}function DM(t){return Tf(t).replace(kg,"%23").replace(TM,"%3F")}function NM(t){return t==null?"":DM(t).replace(EM,"%2F")}function Ro(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const UM=/\/$/,FM=t=>t.replace(UM,"");function Xl(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=zM(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:Ro(o)}}function OM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BM(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&Sr(e.matched[i],n.matched[s])&&Wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kM(t[n],e[n]))return!1;return!0}function kM(t,e){return Gn(t)?gd(t,e):Gn(e)?gd(e,t):t===e}function gd(t,e){return Gn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function zM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Co;(function(t){t.pop="pop",t.push="push"})(Co||(Co={}));var co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(co||(co={}));function HM(t){if(!t)if(cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),FM(t)}const VM=/^[^#]+#/;function GM(t,e){return t.replace(VM,"#")+e}function WM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const vl=()=>({left:window.scrollX,top:window.scrollY});function XM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=WM(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _d(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function YM(t,e){eu.set(t,e)}function $M(t){const e=eu.get(t);return eu.delete(t),e}let qM=()=>location.protocol+"//"+location.host;function Xg(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),md(l,"")}return md(n,t)+i+s}function jM(t,e,n,i){let s=[],r=[],o=null;const a=({state:h})=>{const p=Xg(t,location),_=n.value,x=e.value;let m=0;if(h){if(n.value=p,e.value=h,o&&o===_){o=null;return}m=x?h.position-x.position:0}else i(p);s.forEach(d=>{d(n.value,_,{delta:m,type:Co.pop,direction:m?m>0?co.forward:co.back:co.unknown})})};function l(){o=n.value}function c(h){s.push(h);const p=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(lt({},h.state,{scroll:vl()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function vd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?vl():null}}function KM(t){const{history:e,location:n}=window,i={value:Xg(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:qM()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,c){const u=lt({},e.state,vd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=lt({},s.value,e.state,{forward:l,scroll:vl()});r(u.current,u,!0);const f=lt({},vd(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function ZM(t){t=HM(t);const e=KM(t),n=jM(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=lt({location:"",base:t,go:i,createHref:GM.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JM(t){return typeof t=="string"||t&&typeof t=="object"}function Yg(t){return typeof t=="string"||typeof t=="symbol"}const $g=Symbol("");var xd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xd||(xd={}));function Mr(t,e){return lt(new Error,{type:t,[$g]:!0},e)}function ai(t,e){return t instanceof Error&&$g in t&&(e==null||!!(t.type&e))}const yd="[^/]+?",QM={sensitive:!1,strict:!1,start:!0,end:!0},eE=/[.+*?^${}()[\]/\\]/g;function tE(t,e){const n=lt({},QM,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(eE,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:x,optional:m,regexp:d}=h;r.push({name:_,repeatable:x,optional:m});const S=d||yd;if(S!==yd){p+=10;try{new RegExp(`(${S})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+v.message)}}let y=x?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),s+=y,p+=20,m&&(p+=-8),x&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=r[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:x,optional:m}=p,d=_ in c?c[_]:"";if(Gn(d)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=Gn(d)?d.join("/"):d;if(!S)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function nE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qg(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=nE(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(Sd(i))return 1;if(Sd(s))return-1}return s.length-i.length}function Sd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function rE(t){if(!t)return[[]];if(t==="/")return[[iE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:sE.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function oE(t,e,n){const i=tE(rE(t.path),n),s=lt(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aE(t,e){const n=[],i=new Map;e=Td({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,h,p){const _=!p,x=Ed(f);x.aliasOf=p&&p.record;const m=Td(e,f),d=[x];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of v)d.push(Ed(lt({},x,{components:p?p.record.components:x.components,path:L,aliasOf:p?p.record:x})))}let S,y;for(const v of d){const{path:L}=v;if(h&&L[0]!=="/"){const P=h.record.path,A=P[P.length-1]==="/"?"":"/";v.path=h.record.path+(L&&A+L)}if(S=oE(v,h,m),p?p.alias.push(S):(y=y||S,y!==S&&y.alias.push(S),_&&f.name&&!bd(S)&&o(f.name)),jg(S)&&l(S),x.children){const P=x.children;for(let A=0;A<P.length;A++)r(P[A],S,p&&p.children[A])}p=p||S}return y?()=>{o(y)}:lo}function o(f){if(Yg(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const h=uE(f,n);n.splice(h,0,f),f.record.name&&!bd(f)&&i.set(f.record.name,f)}function c(f,h){let p,_={},x,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Mr(1,{location:f});m=p.record.name,_=lt(Md(h.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Md(f.params,p.keys.map(y=>y.name))),x=p.stringify(_)}else if(f.path!=null)x=f.path,p=n.find(y=>y.re.test(x)),p&&(_=p.parse(x),m=p.record.name);else{if(p=h.name?i.get(h.name):n.find(y=>y.re.test(h.path)),!p)throw Mr(1,{location:f,currentLocation:h});m=p.record.name,_=lt({},h.params,f.params),x=p.stringify(_)}const d=[];let S=p;for(;S;)d.unshift(S.record),S=S.parent;return{name:m,path:x,params:_,matched:d,meta:cE(d)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Md(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ed(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function bd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cE(t){return t.reduce((e,n)=>lt(e,n.meta),{})}function Td(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function uE(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;qg(t,e[r])<0?i=r:n=r+1}const s=fE(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function fE(t){let e=t;for(;e=e.parent;)if(jg(e)&&qg(t,e)===0)return e}function jg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function hE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(zg," "),o=r.indexOf("="),a=Ro(o<0?r:r.slice(0,o)),l=o<0?null:Ro(r.slice(o+1));if(a in e){let c=e[a];Gn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function wd(t){let e="";for(let n in t){const i=t[n];if(n=IM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gn(i)?i.map(r=>r&&Qc(r)):[i&&Qc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function dE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const pE=Symbol(""),Ad=Symbol(""),wf=Symbol(""),Kg=Symbol(""),tu=Symbol("");function Hr(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Mr(4,{from:n,to:e})):h instanceof Error?l(h):JM(h)?l(Mr(2,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Yl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Bg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Vi(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=SM(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Vi(p,n,i,o,a,s)()}))}}return r}function Rd(t){const e=zn(wf),n=zn(Kg),i=Tt(()=>{const l=Mi(t.to);return e.resolve(l)}),s=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Sr.bind(null,u));if(h>-1)return h;const p=Cd(l[c-2]);return c>1&&Cd(u)===p&&f[f.length-1].path!==p?f.findIndex(Sr.bind(null,l[c-2])):h}),r=Tt(()=>s.value>-1&&xE(n.params,i.value.params)),o=Tt(()=>s.value>-1&&s.value===n.matched.length-1&&Wg(n.params,i.value.params));function a(l={}){if(vE(l)){const c=e[Mi(t.replace)?"replace":"push"](Mi(t.to)).catch(lo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function mE(t){return t.length===1?t[0]:t}const gE=un({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rd,setup(t,{slots:e}){const n=zo(Rd(t)),{options:i}=zn(wf),s=Tt(()=>({[Pd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Pd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&mE(e.default(n));return t.custom?r:Wo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),_E=gE;function vE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function xE(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Gn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pd=(t,e,n)=>t??e??n,yE=un({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=zn(tu),s=Tt(()=>t.route||i.value),r=zn(Ad,0),o=Tt(()=>{let c=Mi(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Tt(()=>s.value.matched[o.value]);Pa(Ad,Tt(()=>o.value+1)),Pa(pE,a),Pa(tu,s);const l=ei();return Ei(()=>[l.value,a.value,t.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Sr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Ld(n.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Wo(h,lt({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ld(n.default,{Component:m,route:c})||m}}});function Ld(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SE=yE;function ME(t){const e=aE(t.routes,t),n=t.parseQuery||hE,i=t.stringifyQuery||wd,s=t.history,r=Hr(),o=Hr(),a=Hr(),l=of(Ii);let c=Ii;cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wl.bind(null,V=>""+V),f=Wl.bind(null,NM),h=Wl.bind(null,Ro);function p(V,se){let le,ae;return Yg(V)?(le=e.getRecordMatcher(V),ae=se):ae=V,e.addRoute(ae,le)}function _(V){const se=e.getRecordMatcher(V);se&&e.removeRoute(se)}function x(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function d(V,se){if(se=lt({},se||l.value),typeof V=="string"){const M=Xl(n,V,se.path),ne=e.resolve({path:M.path},se),Z=s.createHref(M.fullPath);return lt(M,ne,{params:h(ne.params),hash:Ro(M.hash),redirectedFrom:void 0,href:Z})}let le;if(V.path!=null)le=lt({},V,{path:Xl(n,V.path,se.path).path});else{const M=lt({},V.params);for(const ne in M)M[ne]==null&&delete M[ne];le=lt({},V,{params:f(M)}),se.params=f(se.params)}const ae=e.resolve(le,se),Be=V.hash||"";ae.params=u(h(ae.params));const D=OM(i,lt({},V,{hash:LM(Be),path:ae.path})),N=s.createHref(D);return lt({fullPath:D,hash:Be,query:i===wd?dE(V.query):V.query||{}},ae,{redirectedFrom:void 0,href:N})}function S(V){return typeof V=="string"?Xl(n,V,l.value.path):lt({},V)}function y(V,se){if(c!==V)return Mr(8,{from:se,to:V})}function v(V){return A(V)}function L(V){return v(lt(S(V),{replace:!0}))}function P(V){const se=V.matched[V.matched.length-1];if(se&&se.redirect){const{redirect:le}=se;let ae=typeof le=="function"?le(V):le;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=S(ae):{path:ae},ae.params={}),lt({query:V.query,hash:V.hash,params:ae.path!=null?{}:V.params},ae)}}function A(V,se){const le=c=d(V),ae=l.value,Be=V.state,D=V.force,N=V.replace===!0,M=P(le);if(M)return A(lt(S(M),{state:typeof M=="object"?lt({},Be,M.state):Be,force:D,replace:N}),se||le);const ne=le;ne.redirectedFrom=se;let Z;return!D&&BM(i,ae,le)&&(Z=Mr(16,{to:ne,from:ae}),we(ae,ae,!0,!1)),(Z?Promise.resolve(Z):b(ne,ae)).catch(K=>ai(K)?ai(K,2)?K:ve(K):$(K,ne,ae)).then(K=>{if(K){if(ai(K,2))return A(lt({replace:N},S(K.to),{state:typeof K.to=="object"?lt({},Be,K.to.state):Be,force:D}),se||ne)}else K=B(ne,ae,!0,N,Be);return F(ne,ae,K),K})}function U(V,se){const le=y(V,se);return le?Promise.reject(le):Promise.resolve()}function E(V){const se=re.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(V):V()}function b(V,se){let le;const[ae,Be,D]=EE(V,se);le=Yl(ae.reverse(),"beforeRouteLeave",V,se);for(const M of ae)M.leaveGuards.forEach(ne=>{le.push(Vi(ne,V,se))});const N=U.bind(null,V,se);return le.push(N),Me(le).then(()=>{le=[];for(const M of r.list())le.push(Vi(M,V,se));return le.push(N),Me(le)}).then(()=>{le=Yl(Be,"beforeRouteUpdate",V,se);for(const M of Be)M.updateGuards.forEach(ne=>{le.push(Vi(ne,V,se))});return le.push(N),Me(le)}).then(()=>{le=[];for(const M of D)if(M.beforeEnter)if(Gn(M.beforeEnter))for(const ne of M.beforeEnter)le.push(Vi(ne,V,se));else le.push(Vi(M.beforeEnter,V,se));return le.push(N),Me(le)}).then(()=>(V.matched.forEach(M=>M.enterCallbacks={}),le=Yl(D,"beforeRouteEnter",V,se,E),le.push(N),Me(le))).then(()=>{le=[];for(const M of o.list())le.push(Vi(M,V,se));return le.push(N),Me(le)}).catch(M=>ai(M,8)?M:Promise.reject(M))}function F(V,se,le){a.list().forEach(ae=>E(()=>ae(V,se,le)))}function B(V,se,le,ae,Be){const D=y(V,se);if(D)return D;const N=se===Ii,M=cr?history.state:{};le&&(ae||N?s.replace(V.fullPath,lt({scroll:N&&M&&M.scroll},Be)):s.push(V.fullPath,Be)),l.value=V,we(V,se,le,N),ve()}let X;function ie(){X||(X=s.listen((V,se,le)=>{if(!_e.listening)return;const ae=d(V),Be=P(ae);if(Be){A(lt(Be,{replace:!0,force:!0}),ae).catch(lo);return}c=ae;const D=l.value;cr&&YM(_d(D.fullPath,le.delta),vl()),b(ae,D).catch(N=>ai(N,12)?N:ai(N,2)?(A(lt(S(N.to),{force:!0}),ae).then(M=>{ai(M,20)&&!le.delta&&le.type===Co.pop&&s.go(-1,!1)}).catch(lo),Promise.reject()):(le.delta&&s.go(-le.delta,!1),$(N,ae,D))).then(N=>{N=N||B(ae,D,!1),N&&(le.delta&&!ai(N,8)?s.go(-le.delta,!1):le.type===Co.pop&&ai(N,20)&&s.go(-1,!1)),F(ae,D,N)}).catch(lo)}))}let oe=Hr(),ee=Hr(),J;function $(V,se,le){ve(V);const ae=ee.list();return ae.length?ae.forEach(Be=>Be(V,se,le)):console.error(V),Promise.reject(V)}function pe(){return J&&l.value!==Ii?Promise.resolve():new Promise((V,se)=>{oe.add([V,se])})}function ve(V){return J||(J=!V,ie(),oe.list().forEach(([se,le])=>V?le(V):se()),oe.reset()),V}function we(V,se,le,ae){const{scrollBehavior:Be}=t;if(!cr||!Be)return Promise.resolve();const D=!le&&$M(_d(V.fullPath,0))||(ae||!le)&&history.state&&history.state.scroll||null;return af().then(()=>Be(V,se,D)).then(N=>N&&XM(N)).catch(N=>$(N,V,se))}const Oe=V=>s.go(V);let je;const re=new Set,_e={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:d,options:t,push:v,replace:L,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:pe,install(V){const se=this;V.component("RouterLink",_E),V.component("RouterView",SE),V.config.globalProperties.$router=se,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Mi(l)}),cr&&!je&&l.value===Ii&&(je=!0,v(s.location).catch(Be=>{}));const le={};for(const Be in Ii)Object.defineProperty(le,Be,{get:()=>l.value[Be],enumerable:!0});V.provide(wf,se),V.provide(Kg,mm(le)),V.provide(tu,l);const ae=V.unmount;re.add(V),V.unmount=function(){re.delete(V),re.size<1&&(c=Ii,X&&X(),X=null,l.value=Ii,je=!1,J=!1),ae()}}};function Me(V){return V.reduce((se,le)=>se.then(()=>E(le)),Promise.resolve())}return _e}function EE(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Sr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Sr(c,l))||s.push(l))}return[n,i,s]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Af="177",bE=0,Id=1,TE=2,Zg=1,Jg=2,pi=3,Ji=0,ln=1,vi=2,$i=0,mr=1,Dd=2,Nd=3,Ud=4,wE=5,Ts=100,AE=101,RE=102,CE=103,PE=104,LE=200,IE=201,DE=202,NE=203,nu=204,iu=205,UE=206,FE=207,OE=208,BE=209,kE=210,zE=211,HE=212,VE=213,GE=214,su=0,ru=1,ou=2,Er=3,au=4,lu=5,cu=6,uu=7,xl=0,WE=1,XE=2,qi=0,YE=1,$E=2,qE=3,jE=4,KE=5,ZE=6,JE=7,Qg=300,br=301,Tr=302,fu=303,hu=304,yl=306,Po=1e3,Rs=1001,du=1002,_n=1003,QE=1004,sa=1005,Kn=1006,$l=1007,Cs=1008,ti=1009,e_=1010,t_=1011,Lo=1012,Rf=1013,Ns=1014,Zn=1015,Xo=1016,Cf=1017,Pf=1018,Io=1020,n_=35902,i_=1021,s_=1022,On=1023,Do=1026,No=1027,Lf=1028,If=1029,r_=1030,Df=1031,Nf=1033,Ua=33776,Fa=33777,Oa=33778,Ba=33779,pu=35840,mu=35841,gu=35842,_u=35843,vu=36196,xu=37492,yu=37496,Su=37808,Mu=37809,Eu=37810,bu=37811,Tu=37812,wu=37813,Au=37814,Ru=37815,Cu=37816,Pu=37817,Lu=37818,Iu=37819,Du=37820,Nu=37821,ka=36492,Uu=36494,Fu=36495,o_=36283,Ou=36284,Bu=36285,ku=36286,e1=3200,t1=3201,Sl=0,n1=1,Wi="",bn="srgb",wr="srgb-linear",el="linear",dt="srgb",Xs=7680,Fd=519,i1=512,s1=513,r1=514,a_=515,o1=516,a1=517,l1=518,c1=519,Od=35044,Bd="300 es",Si=2e3,tl=2001;class Nr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kd=1234567;const uo=Math.PI/180,Ar=180/Math.PI;function zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function Uf(t,e){return(t%e+e)%e}function u1(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function f1(t,e,n){return t!==e?(n-t)/(e-t):0}function fo(t,e,n){return(1-n)*t+n*e}function h1(t,e,n,i){return fo(t,e,1-Math.exp(-n*i))}function d1(t,e=1){return e-Math.abs(Uf(t,e*2)-e)}function p1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function m1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function g1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function _1(t,e){return t+Math.random()*(e-t)}function v1(t){return t*(.5-Math.random())}function x1(t){t!==void 0&&(kd=t);let e=kd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function y1(t){return t*uo}function S1(t){return t*Ar}function M1(t){return(t&t-1)===0&&t!==0}function E1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function b1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function T1(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),p=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ur(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Bn={DEG2RAD:uo,RAD2DEG:Ar,generateUUID:zs,clamp:Ke,euclideanModulo:Uf,mapLinear:u1,inverseLerp:f1,lerp:fo,damp:h1,pingpong:d1,smoothstep:p1,smootherstep:m1,randInt:g1,randFloat:_1,randFloatSpread:v1,seededRandom:x1,degToRad:y1,radToDeg:S1,isPowerOfTwo:M1,ceilPowerOfTwo:E1,floorPowerOfTwo:b1,setQuaternionFromProperEuler:T1,normalize:tn,denormalize:ur};class Pe{constructor(e=0,n=0){Pe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],_=r[o+2],x=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*x,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const L=Math.sqrt(y),P=Math.atan2(L,d*S);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const v=a*S;if(l=l*m+h*v,c=c*m+p*v,u=u*m+_*v,f=f*m+x*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-a*p,e[n+2]=c*_+u*p+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new H,zd=new Yo;class $e{constructor(e,n,i,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=s[0],m=s[3],d=s[6],S=s[1],y=s[4],v=s[7],L=s[2],P=s[5],A=s[8];return r[0]=o*x+a*S+l*L,r[3]=o*m+a*y+l*P,r[6]=o*d+a*v+l*A,r[1]=c*x+u*S+f*L,r[4]=c*m+u*y+f*P,r[7]=c*d+u*v+f*A,r[2]=h*x+p*S+_*L,r[5]=h*m+p*y+_*P,r[8]=h*d+p*v+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,_=n*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=h*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(jl.makeScale(e,n)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,n){return this.premultiply(jl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new $e;function l_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Uo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function w1(){const t=Uo("canvas");return t.style.display="block",t}const Hd={};function gr(t){t in Hd||(Hd[t]=!0,console.warn(t))}function A1(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function R1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function C1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vd=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P1(){const t={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?el:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wr]:{primaries:e,whitePoint:i,transfer:el,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const it=P1();function bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function _r(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ys;class L1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=Uo("canvas")),Ys.width=e.width,Ys.height=e.height;const s=Ys.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Uo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bi(n[i]/255)*255):n[i]=bi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I1=0;class Ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Kl(s[o].image)):r.push(Kl(s[o]))}else r=Kl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Kl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?L1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let D1=0;const Zl=new H;class Jt extends Nr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Rs,s=Rs,r=Kn,o=Cs,a=On,l=ti,c=Jt.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=zs(),this.name="",this.source=new Ff(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Po:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case du:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Po:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case du:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Qg;Jt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,n=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,v=(p+1)/2,L=(d+1)/2,P=(u+h)/4,A=(f+x)/4,U=(_+m)/4;return y>v&&y>L?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=P/i,r=A/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=U/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-x)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N1 extends Nr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new mt(0,0,e,n),this.scissorTest=!1,this.viewport=new mt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new Jt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Ff(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends N1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class c_ extends Jt{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class U1 extends Jt{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),oa.subVectors(this.max,Vr),$s.subVectors(e.a,Vr),qs.subVectors(e.b,Vr),js.subVectors(e.c,Vr),Di.subVectors(qs,$s),Ni.subVectors(js,qs),ps.subVectors($s,js);let n=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ps.z,ps.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ps.z,0,-ps.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ps.y,ps.x,0];return!Jl(n,$s,qs,js,oa)||(n=[1,0,0,0,1,0,0,0,1],!Jl(n,$s,qs,js,oa))?!1:(aa.crossVectors(Di,Ni),n=[aa.x,aa.y,aa.z],Jl(n,$s,qs,js,oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new H,new H,new H,new H,new H,new H,new H,new H],Ln=new H,ra=new Hs,$s=new H,qs=new H,js=new H,Di=new H,Ni=new H,ps=new H,Vr=new H,oa=new H,aa=new H,ms=new H;function Jl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){ms.fromArray(t,r);const a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=n.dot(ms),u=i.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const F1=new Hs,Gr=new H,Ql=new H;class $o{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):F1.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const n=Gr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Ql)),this.expandByPoint(Gr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ci=new H,ec=new H,la=new H,Ui=new H,tc=new H,ca=new H,nc=new H;class u_{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){ec.copy(e).add(n).multiplyScalar(.5),la.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(ec);const r=e.distanceTo(n)*.5,o=-this.direction.dot(la),a=Ui.dot(this.direction),l=-Ui.dot(la),c=Ui.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ec).addScaledVector(la,h),p}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,s,r){tc.subVectors(n,e),ca.subVectors(i,e),nc.crossVectors(tc,ca);let o=this.direction.dot(nc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(ca.crossVectors(Ui,ca));if(l<0)return null;const c=a*this.direction.dot(tc.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(nc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,s,r,o,a,l,c,u,f,h,p,_,x,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,h,p,_,x,m)}set(e,n,i,s,r,o,a,l,c,u,f,h,p,_,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),o=1/Ks.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;n[0]=h+x*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;n[0]=h-x*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,x=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=x-h*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O1,e,B1)}lookAt(e,n,i){const s=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Fi.crossVectors(i,hn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Fi.crossVectors(i,hn)),Fi.normalize(),ua.crossVectors(hn,Fi),s[0]=Fi.x,s[4]=ua.x,s[8]=hn.x,s[1]=Fi.y,s[5]=ua.y,s[9]=hn.y,s[2]=Fi.z,s[6]=ua.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],m=i[10],d=i[14],S=i[3],y=i[7],v=i[11],L=i[15],P=s[0],A=s[4],U=s[8],E=s[12],b=s[1],F=s[5],B=s[9],X=s[13],ie=s[2],oe=s[6],ee=s[10],J=s[14],$=s[3],pe=s[7],ve=s[11],we=s[15];return r[0]=o*P+a*b+l*ie+c*$,r[4]=o*A+a*F+l*oe+c*pe,r[8]=o*U+a*B+l*ee+c*ve,r[12]=o*E+a*X+l*J+c*we,r[1]=u*P+f*b+h*ie+p*$,r[5]=u*A+f*F+h*oe+p*pe,r[9]=u*U+f*B+h*ee+p*ve,r[13]=u*E+f*X+h*J+p*we,r[2]=_*P+x*b+m*ie+d*$,r[6]=_*A+x*F+m*oe+d*pe,r[10]=_*U+x*B+m*ee+d*ve,r[14]=_*E+x*X+m*J+d*we,r[3]=S*P+y*b+v*ie+L*$,r[7]=S*A+y*F+v*oe+L*pe,r[11]=S*U+y*B+v*ee+L*ve,r[15]=S*E+y*X+v*J+L*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],m=e[11],d=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+x*(+n*l*p-n*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+n*c*f-n*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-n*l*f+n*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],m=e[14],d=e[15],S=f*m*c-x*h*c+x*l*p-a*m*p-f*l*d+a*h*d,y=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,v=u*x*c-_*f*c+_*a*p-o*x*p-u*a*d+o*f*d,L=_*f*l-u*x*l-_*a*h+o*x*h+u*a*m-o*f*m,P=n*S+i*y+s*v+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=S*A,e[1]=(x*h*r-f*m*r-x*s*p+i*m*p+f*s*d-i*h*d)*A,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*d+i*l*d)*A,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*A,e[4]=y*A,e[5]=(u*m*r-_*h*r+_*s*p-n*m*p-u*s*d+n*h*d)*A,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*d-n*l*d)*A,e[7]=(o*h*r-u*l*r+u*s*c-n*h*c-o*s*p+n*l*p)*A,e[8]=v*A,e[9]=(_*f*r-u*x*r-_*i*p+n*x*p+u*i*d-n*f*d)*A,e[10]=(o*x*r-_*a*r+_*i*c-n*x*c-o*i*d+n*a*d)*A,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=L*A,e[13]=(u*x*s-_*f*s+_*i*h-n*x*h-u*i*m+n*f*m)*A,e[14]=(_*a*s-o*x*s-_*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,_=r*f,x=o*u,m=o*f,d=a*f,S=l*c,y=l*u,v=l*f,L=i.x,P=i.y,A=i.z;return s[0]=(1-(x+d))*L,s[1]=(p+v)*L,s[2]=(_-y)*L,s[3]=0,s[4]=(p-v)*P,s[5]=(1-(h+d))*P,s[6]=(m+S)*P,s[7]=0,s[8]=(_+y)*A,s[9]=(m-S)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Ks.set(s[0],s[1],s[2]).length();const o=Ks.set(s[4],s[5],s[6]).length(),a=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);const c=1/r,u=1/o,f=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,n.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=Si){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),h=(i+s)/(i-s);let p,_;if(a===Si)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===tl)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Si){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),h=(n+e)*c,p=(i+s)*u;let _,x;if(a===Si)_=(o+r)*f,x=-2*f;else if(a===tl)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ks=new H,In=new _t,O1=new H(0,0,0),B1=new H(1,1,1),Fi=new H,ua=new H,hn=new H,Wd=new _t,Xd=new Yo;class Rn{constructor(e=0,n=0,i=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k1=0;const Yd=new H,Zs=new Yo,ui=new _t,fa=new H,Wr=new H,z1=new H,H1=new Yo,$d=new H(1,0,0),qd=new H(0,1,0),jd=new H(0,0,1),Kd={type:"added"},V1={type:"removed"},Js={type:"childadded",child:null},ic={type:"childremoved",child:null};class Xt extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new H,n=new Rn,i=new Yo,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new $e}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,n){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fa.copy(e):fa.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Wr,fa,this.up):ui.lookAt(fa,Wr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(ui),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),Js.child=e,this.dispatchEvent(Js),Js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(V1),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,H1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new H(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new H,fi=new H,sc=new H,hi=new H,Qs=new H,er=new H,Zd=new H,rc=new H,oc=new H,ac=new H,lc=new mt,cc=new mt,uc=new mt;class Nn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Dn.subVectors(e,n),s.cross(Dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Dn.subVectors(s,n),fi.subVectors(i,n),sc.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(fi),l=Dn.dot(sc),c=fi.dot(fi),u=fi.dot(sc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return lc.setScalar(0),cc.setScalar(0),uc.setScalar(0),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,i),uc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(cc,r.y),o.addScaledVector(uc,r.z),o}static isFrontFacing(e,n,i,s){return Dn.subVectors(i,n),fi.subVectors(e,n),Dn.cross(fi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Dn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;Qs.subVectors(s,i),er.subVectors(r,i),rc.subVectors(e,i);const l=Qs.dot(rc),c=er.dot(rc);if(l<=0&&c<=0)return n.copy(i);oc.subVectors(e,s);const u=Qs.dot(oc),f=er.dot(oc);if(u>=0&&f<=u)return n.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Qs,o);ac.subVectors(e,r);const p=Qs.dot(ac),_=er.dot(ac);if(_>=0&&p<=_)return n.copy(r);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(er,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Zd.subVectors(r,s),a=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector(Zd,a);const d=1/(m+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},ha={h:0,s:0,l:0};function fc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=it.workingColorSpace){if(e=Uf(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=fc(o,r,e+1/3),this.g=fc(o,r,e),this.b=fc(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,n=bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=f_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return it.workingToColorSpace($t.copy(this),e),Math.round(Ke($t.r*255,0,255))*65536+Math.round(Ke($t.g*255,0,255))*256+Math.round(Ke($t.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace($t.copy(this),n);const i=$t.r,s=$t.g,r=$t.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=bn){it.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,s=$t.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(ha);const i=fo(Oi.h,ha.h,n),s=fo(Oi.s,ha.s,n),r=fo(Oi.l,ha.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Ze;Ze.NAMES=f_;let G1=0;class as extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=mr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=iu,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nu&&(i.blendSrc=this.blendSrc),this.blendDst!==iu&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ml extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new H,da=new Pe;let W1=0;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Od,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)da.fromBufferAttribute(this,n),da.applyMatrix3(e),this.setXY(n,da.x,da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ur(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ur(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ur(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ur(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ur(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),s=tn(s,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class h_ extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class d_ extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vn extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let X1=0;const En=new _t,hc=new Xt,tr=new H,dn=new Hs,Xr=new Hs,Bt=new H;class Pi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?d_:h_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Xr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(dn.min,Xr.min),dn.expandByPoint(Bt),Bt.addVectors(dn.max,Xr.max),dn.expandByPoint(Bt)):(dn.expandByPoint(Xr.min),dn.expandByPoint(Xr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(e,c),Bt.add(tr)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new H,l[U]=new H;const c=new H,u=new H,f=new H,h=new Pe,p=new Pe,_=new Pe,x=new H,m=new H;function d(U,E,b){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,b),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,b),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[U].add(x),a[E].add(x),a[b].add(x),l[U].add(m),l[E].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,E=S.length;U<E;++U){const b=S[U],F=b.start,B=b.count;for(let X=F,ie=F+B;X<ie;X+=3)d(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new H,v=new H,L=new H,P=new H;function A(U){L.fromBufferAttribute(s,U),P.copy(L);const E=a[U];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),v.crossVectors(P,E);const F=v.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,F)}for(let U=0,E=S.length;U<E;++U){const b=S[U],F=b.start,B=b.count;for(let X=F,ie=F+B;X<ie;X+=3)A(e.getX(X+0)),A(e.getX(X+1)),A(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jd=new _t,gs=new u_,pa=new $o,Qd=new H,ma=new H,ga=new H,_a=new H,dc=new H,va=new H,ep=new H,xa=new H;class Dt extends Xt{constructor(e=new Pi,n=new Ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(dc.fromBufferAttribute(f,e),o?va.addScaledVector(dc,u):va.addScaledVector(dc.sub(n),u))}n.add(va)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pa.copy(i.boundingSphere),pa.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(pa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(pa,Qd)===null||gs.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Jd.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Jd),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gs)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,L=y;v<L;v+=3){const P=a.getX(v),A=a.getX(v+1),U=a.getX(v+2);s=ya(this,d,e,i,c,u,f,P,A,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=ya(this,o,e,i,c,u,f,S,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=h.length;_<x;_++){const m=h[_],d=o[m.materialIndex],S=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,L=y;v<L;v+=3){const P=v,A=v+1,U=v+2;s=ya(this,d,e,i,c,u,f,P,A,U),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=_,d=x;m<d;m+=3){const S=m,y=m+1,v=m+2;s=ya(this,o,e,i,c,u,f,S,y,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Y1(t,e,n,i,s,r,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ji,a),l===null)return null;xa.copy(a),xa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(xa);return c<n.near||c>n.far?null:{distance:c,point:xa.clone(),object:t}}function ya(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,ma),t.getVertexPosition(l,ga),t.getVertexPosition(c,_a);const u=Y1(t,e,n,i,ma,ga,_a,ep);if(u){const f=new H;Nn.getBarycoord(ep,ma,ga,_a,f),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,f,new Pe)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,f,new Pe)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Nn.getNormal(ma,ga,_a,h.normal),u.face=h,u.barycoord=f}return u}class Ur extends Pi{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(f,2));function _(x,m,d,S,y,v,L,P,A,U,E){const b=v/A,F=L/U,B=v/2,X=L/2,ie=P/2,oe=A+1,ee=U+1;let J=0,$=0;const pe=new H;for(let ve=0;ve<ee;ve++){const we=ve*F-X;for(let Oe=0;Oe<oe;Oe++){const je=Oe*b-B;pe[x]=je*S,pe[m]=we*y,pe[d]=ie,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[d]=P>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Oe/A),f.push(1-ve/U),J+=1}}for(let ve=0;ve<U;ve++)for(let we=0;we<A;we++){const Oe=h+we+oe*ve,je=h+we+oe*(ve+1),re=h+(we+1)+oe*(ve+1),_e=h+(we+1)+oe*ve;l.push(Oe,je,_e),l.push(je,re,_e),$+=6}a.addGroup(p,$,E),p+=$,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Rr(t[n]);for(const s in i)e[s]=i[s]}return e}function $1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function p_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const q1={clone:Rr,merge:nn};var j1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=$1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let m_=class extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Bi=new H,tp=new Pe,np=new Pe;class an extends m_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,tp,np),n.subVectors(np,tp)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const nr=-90,ir=1;class Z1 extends Xt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(nr,ir,e,n);s.layers=this.layers,this.add(s);const r=new an(nr,ir,e,n);r.layers=this.layers,this.add(r);const o=new an(nr,ir,e,n);o.layers=this.layers,this.add(o);const a=new an(nr,ir,e,n);a.layers=this.layers,this.add(a);const l=new an(nr,ir,e,n);l.layers=this.layers,this.add(l);const c=new an(nr,ir,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class g_ extends Jt{constructor(e=[],n=br,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J1 extends Us{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new g_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ur(5,5,5),r=new Qi({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:$i});r.uniforms.tEquirect.value=n;const o=new Dt(s,r),a=n.minFilter;return n.minFilter===Cs&&(n.minFilter=Kn),new Z1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class Sa extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q1={type:"move"};class pc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class __ extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class eb extends Jt{constructor(e=null,n=1,i=1,s,r,o,a,l,c=_n,u=_n,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ip extends Hn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new _t,sp=new _t,Ma=[],rp=new Hs,tb=new _t,Yr=new Dt,$r=new $o;class nb extends Dt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new ip(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,sr),rp.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(rp)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new $o),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,sr),$r.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union($r)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){const i=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),sp.multiplyMatrices(i,sr),Yr.matrixWorld=sp,Yr.raycast(e,Ma);for(let o=0,a=Ma.length;o<a;o++){const l=Ma[o];l.instanceId=r,l.object=this,n.push(l)}Ma.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new ip(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new eb(new Float32Array(s*this.count),s,this.count,Lf,Zn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mc=new H,ib=new H,sb=new $e;class Ms{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=mc.subVectors(i,n).cross(ib.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sb.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new $o,Ea=new H;class Bf{constructor(e=new Ms,n=new Ms,i=new Ms,s=new Ms,r=new Ms,o=new Ms){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],_=s[9],x=s[10],m=s[11],d=s[12],S=s[13],y=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,m-p,v-d).normalize(),i[1].setComponents(l+r,h+c,m+p,v+d).normalize(),i[2].setComponents(l+o,h+u,m+_,v+S).normalize(),i[3].setComponents(l-o,h-u,m-_,v-S).normalize(),i[4].setComponents(l-a,h-f,m-x,v-y).normalize(),n===Si)i[5].setComponents(l+a,h+f,m+x,v+y).normalize();else if(n===tl)i[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){return _s.center.set(0,0,0),_s.radius=.7071067811865476,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ea.x=s.normal.x>0?e.max.x:e.min.x,Ea.y=s.normal.y>0?e.max.y:e.min.y,Ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rb extends as{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}class v_ extends Jt{constructor(e,n,i=Ns,s,r,o,a=_n,l=_n,c,u=Do,f=1){if(u!==Do&&u!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,p=(o-u)/h;return(s+p)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=n||(o.isVector2?new Pe:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new H,s=[],r=[],o=[],a=new H,l=new _t;for(let p=0;p<=e;p++){const _=p/e;s[p]=this.getTangentAt(_,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ke(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(n===!0){let p=Math.acos(Ke(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class kf extends ni{constructor(e=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Pe){const i=n,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ob extends kf{constructor(e,n,i,s,r,o){super(e,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zf(){let t=0,e=0,n=0,i=0;function s(r,o,a,l){t=r,e=a,n=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,s(o,a,h,p)},calc:function(r){const o=r*r,a=o*r;return t+e*r+n*o+i*a}}}const ba=new H,gc=new zf,_c=new zf,vc=new zf;class ab extends ni{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new H){const i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(ba.subVectors(s[0],s[1]).add(s[0]),c=ba);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(ba.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ba),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),gc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,x,m),_c.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,x,m),vc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),_c.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),vc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(gc.calc(l),_c.calc(l),vc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function op(t,e,n,i,s){const r=(i-e)*.5,o=(s-n)*.5,a=t*t,l=t*a;return(2*n-2*i+r+o)*l+(-3*n+3*i-2*r-o)*a+r*t+n}function lb(t,e){const n=1-t;return n*n*e}function cb(t,e){return 2*(1-t)*t*e}function ub(t,e){return t*t*e}function ho(t,e,n,i){return lb(t,e)+cb(t,n)+ub(t,i)}function fb(t,e){const n=1-t;return n*n*n*e}function hb(t,e){const n=1-t;return 3*n*n*t*e}function db(t,e){return 3*(1-t)*t*t*e}function pb(t,e){return t*t*t*e}function po(t,e,n,i,s){return fb(t,e)+hb(t,n)+db(t,i)+pb(t,s)}class x_ extends ni{constructor(e=new Pe,n=new Pe,i=new Pe,s=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new Pe){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mb extends ni{constructor(e=new H,n=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new H){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y_ extends ni{constructor(e=new Pe,n=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Pe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Pe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gb extends ni{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends ni{constructor(e=new Pe,n=new Pe,i=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Pe){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ho(e,s.x,r.x,o.x),ho(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _b extends ni{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(ho(e,s.x,r.x,o.x),ho(e,s.y,r.y,o.y),ho(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Pe){const i=n,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(op(a,l.x,c.x,u.x,f.x),op(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const s=e.points[n];this.points.push(new Pe().fromArray(s))}return this}}var ap=Object.freeze({__proto__:null,ArcCurve:ob,CatmullRomCurve3:ab,CubicBezierCurve:x_,CubicBezierCurve3:mb,EllipseCurve:kf,LineCurve:y_,LineCurve3:gb,QuadraticBezierCurve:S_,QuadraticBezierCurve3:_b,SplineCurve:M_});class vb extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ap[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const s=e.curves[n];this.curves.push(new ap[s.type]().fromJSON(s))}return this}}class zu extends vb{constructor(e){super(),this.type="Path",this.currentPoint=new Pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new y_(this.currentPoint.clone(),new Pe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){const r=new S_(this.currentPoint.clone(),new Pe(e,n),new Pe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,o){const a=new x_(this.currentPoint.clone(),new Pe(e,n),new Pe(i,s),new Pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new M_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,s,r,o),this}absarc(e,n,i,s,r,o){return this.absellipse(e,n,i,i,s,r,o),this}ellipse(e,n,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,s,r,o,a,l),this}absellipse(e,n,i,s,r,o,a,l){const c=new kf(e,n,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class za extends zu{constructor(e){super(e),this.uuid=zs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const s=e.holes[n];this.holes.push(new zu().fromJSON(s))}return this}}function xb(t,e,n=2){const i=e&&e.length,s=i?e[0]*n:t.length;let r=E_(t,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=bb(t,e,r,n)),t.length>80*n){a=1/0,l=1/0;let u=-1/0,f=-1/0;for(let h=n;h<s;h+=n){const p=t[h],_=t[h+1];p<a&&(a=p),_<l&&(l=_),p>u&&(u=p),_>f&&(f=_)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Fo(r,o,n,a,l,c,0),o}function E_(t,e,n,i,s){let r;if(s===Ub(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=lp(o/i|0,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=lp(o/i|0,t[o],t[o+1],r);return r&&Cr(r,r.next)&&(Bo(r),r=r.next),r}function Fs(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Cr(n,n.next)||wt(n.prev,n,n.next)===0)){if(Bo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Fo(t,e,n,i,s,r,o){if(!t)return;!o&&r&&Cb(t,i,s,r);let a=t;for(;t.prev!==t.next;){const l=t.prev,c=t.next;if(r?Sb(t,i,s,r):yb(t)){e.push(l.i,t.i,c.i),Bo(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=Mb(Fs(t),e),Fo(t,e,n,i,s,r,2)):o===2&&Eb(t,e,n,i,s,r):Fo(Fs(t),e,n,i,s,r,1);break}}}function yb(t){const e=t.prev,n=t,i=t.next;if(wt(e,n,i)>=0)return!1;const s=e.x,r=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),p=Math.max(a,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=p&&Zr(s,a,r,l,o,c,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Sb(t,e,n,i){const s=t.prev,r=t,o=t.next;if(wt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,p=Math.min(a,l,c),_=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),d=Hu(p,_,e,n,i),S=Hu(x,m,e,n,i);let y=t.prevZ,v=t.nextZ;for(;y&&y.z>=d&&v&&v.z<=S;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Zr(a,u,l,f,c,h,y.x,y.y)&&wt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Zr(a,u,l,f,c,h,v.x,v.y)&&wt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&Zr(a,u,l,f,c,h,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&Zr(a,u,l,f,c,h,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mb(t,e){let n=t;do{const i=n.prev,s=n.next.next;!Cr(i,s)&&T_(i,n,n.next,s)&&Oo(i,s)&&Oo(s,i)&&(e.push(i.i,n.i,s.i),Bo(n),Bo(n.next),n=t=s),n=n.next}while(n!==t);return Fs(n)}function Eb(t,e,n,i,s,r){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ib(o,a)){let l=w_(o,a);o=Fs(o,o.next),l=Fs(l,l.next),Fo(o,e,n,i,s,r,0),Fo(l,e,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==t)}function bb(t,e,n,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:t.length,c=E_(t,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Lb(c))}s.sort(Tb);for(let r=0;r<s.length;r++)n=wb(s[r],n);return n}function Tb(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}return n}function wb(t,e){const n=Ab(t,e);if(!n)return e;const i=w_(n,t);return Fs(i,i.next),Fs(n,n.next)}function Ab(t,e){let n=e;const i=t.x,s=t.y;let r=-1/0,o;if(Cr(t,n))return n;do{if(Cr(t,n.next))return n.next;if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){const f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r&&(r=f,o=n.x<n.next.x?n:n.next,f===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&b_(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){const f=Math.abs(s-n.y)/(i-n.x);Oo(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&Rb(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o}function Rb(t,e){return wt(t.prev,t,e.prev)<0&&wt(e.next,t,t.next)<0}function Cb(t,e,n,i){let s=t;do s.z===0&&(s.z=Hu(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Pb(s)}function Pb(t){let e,n=1;do{let i=t,s;t=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<n&&(a++,o=o.nextZ,!!o);c++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;i=o}r.nextZ=null,n*=2}while(e>1);return t}function Hu(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Lb(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function b_(t,e,n,i,s,r,o,a){return(s-o)*(e-a)>=(t-o)*(r-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Zr(t,e,n,i,s,r,o,a){return!(t===o&&e===a)&&b_(t,e,n,i,s,r,o,a)}function Ib(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Db(t,e)&&(Oo(t,e)&&Oo(e,t)&&Nb(t,e)&&(wt(t.prev,t,e.prev)||wt(t,e.prev,e))||Cr(t,e)&&wt(t.prev,t,t.next)>0&&wt(e.prev,e,e.next)>0)}function wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Cr(t,e){return t.x===e.x&&t.y===e.y}function T_(t,e,n,i){const s=wa(wt(t,e,n)),r=wa(wt(t,e,i)),o=wa(wt(n,i,t)),a=wa(wt(n,i,e));return!!(s!==r&&o!==a||s===0&&Ta(t,n,e)||r===0&&Ta(t,i,e)||o===0&&Ta(n,t,i)||a===0&&Ta(n,e,i))}function Ta(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function wa(t){return t>0?1:t<0?-1:0}function Db(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&T_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Oo(t,e){return wt(t.prev,t,t.next)<0?wt(t,e,t.next)>=0&&wt(t,t.prev,e)>=0:wt(t,e,t.prev)<0||wt(t,t.next,e)<0}function Nb(t,e){let n=t,i=!1;const s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function w_(t,e){const n=Vu(t.i,t.x,t.y),i=Vu(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function lp(t,e,n,i){const s=Vu(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Bo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Vu(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ub(t,e,n,i){let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s}class Fb{static triangulate(e,n,i=2){return xb(e,n,i)}}class vr{static area(e){const n=e.length;let i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return vr.area(e)<0}static triangulateShape(e,n){const i=[],s=[],r=[];cp(e),up(i,e);let o=e.length;n.forEach(cp);for(let l=0;l<n.length;l++)s.push(o),o+=n[l].length,up(i,n[l]);const a=Fb.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function cp(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function up(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Os extends Pi{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=n/l,p=[],_=[],x=[],m=[];for(let d=0;d<u;d++){const S=d*h-o;for(let y=0;y<c;y++){const v=y*f-r;_.push(v,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const y=S+c*d,v=S+c*(d+1),L=S+1+c*(d+1),P=S+1+c*d;p.push(y,v,P),p.push(v,L,P)}this.setIndex(p),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hf extends Pi{constructor(e=new za([new Pe(0,.5),new Pe(-.5,-.5),new Pe(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new vn(s,3)),this.setAttribute("normal",new vn(r,3)),this.setAttribute("uv",new vn(o,2));function c(u){const f=s.length/3,h=u.extractPoints(n);let p=h.shape;const _=h.holes;vr.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=_.length;m<d;m++){const S=_[m];vr.isClockWise(S)===!0&&(_[m]=S.reverse())}const x=vr.triangulateShape(p,_);for(let m=0,d=_.length;m<d;m++){const S=_[m];p=p.concat(S)}for(let m=0,d=p.length;m<d;m++){const S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,d=x.length;m<d;m++){const S=x[m],y=S[0]+f,v=S[1]+f,L=S[2]+f;i.push(y,v,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return Ob(n,e)}static fromJSON(e,n){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=n[e.shapes[s]];i.push(o)}return new Hf(i,e.curveSegments)}}function Ob(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class Vf extends Pi{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new H,h=new H,p=[],_=[],x=[],m=[];for(let d=0;d<=i;d++){const S=[],y=d/i;let v=0;d===0&&o===0?v=.5/n:d===i&&l===Math.PI&&(v=-.5/n);for(let L=0;L<=n;L++){const P=L/n;f.x=-e*Math.cos(s+P*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+P*r)*Math.sin(o+y*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(P+v,1-y),S.push(c++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<n;S++){const y=u[d][S+1],v=u[d][S],L=u[d+1][S],P=u[d+1][S+1];(d!==0||o>0)&&p.push(y,v,P),(d!==i-1||l<Math.PI)&&p.push(v,L,P)}this.setIndex(p),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bb extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kb extends as{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zb extends as{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hb extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vb extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Gb{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Wb=new Gb;class qo{constructor(e){this.manager=e!==void 0?e:Wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qo.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class Xb extends Error{constructor(e,n){super(e),this.response=n}}class Yb extends qo{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=nl.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:n,onProgress:i,onError:s});return}di[e]=[],di[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=di[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let x=0;const m=new ReadableStream({start(d){S();function S(){f.read().then(({done:y,value:v})=>{if(y)d.close();else{x+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let P=0,A=u.length;P<A;P++){const U=u[P];U.onProgress&&U.onProgress(L)}d.enqueue(v),S()}},y=>{d.error(y)})}}});return new Response(m)}else throw new Xb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{nl.add(e,c);const u=di[e];delete di[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=di[e];if(u===void 0)throw this.manager.itemError(e),c;delete di[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $b extends qo{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=nl.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;const a=Uo("img");function l(){u(),nl.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class qb extends qo{constructor(e){super(e)}load(e,n,i,s){const r=new Jt,o=new $b(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Gf extends Xt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const xc=new _t,fp=new H,hp=new H;class A_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fp.setFromMatrixPosition(e.matrixWorld),n.position.copy(fp),hp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hp),n.updateMatrixWorld(),xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jb extends A_{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ar*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class dp extends Gf{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pp=new _t,qr=new H,yc=new H;class Kb extends A_{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(qr),yc.copy(i.position),yc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(yc),i.updateMatrixWorld(),s.makeTranslation(-qr.x,-qr.y,-qr.z),pp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp)}}class Zb extends Gf{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class R_ extends m_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class C_ extends Gf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jb extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=mp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function mp(){return performance.now()}const gp=new _t;class _p{constructor(e,n,i=0,s=1/0){this.ray=new u_(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,n=!0,i=[]){return Gu(e,this,i,n),i.sort(vp),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Gu(e[s],this,i,n);return i.sort(vp),i}}function vp(t,e){return t.distance-e.distance}function Gu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Gu(r[o],e,n,!0)}}class eT{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new zu,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,s){return this.currentPath.quadraticCurveTo(e,n,i,s),this}bezierCurveTo(e,n,i,s,r,o){return this.currentPath.bezierCurveTo(e,n,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(d){const S=[];for(let y=0,v=d.length;y<v;y++){const L=d[y],P=new za;P.curves=L.curves,S.push(P)}return S}function i(d,S){const y=S.length;let v=!1;for(let L=y-1,P=0;P<y;L=P++){let A=S[L],U=S[P],E=U.x-A.x,b=U.y-A.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(A=S[P],E=-E,U=S[L],b=-b),d.y<A.y||d.y>U.y)continue;if(d.y===A.y){if(d.x===A.x)return!0}else{const F=b*(d.x-A.x)-E*(d.y-A.y);if(F===0)return!0;if(F<0)continue;v=!v}}else{if(d.y!==A.y)continue;if(U.x<=d.x&&d.x<=A.x||A.x<=d.x&&d.x<=U.x)return!0}}return v}const s=vr.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new za,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const f=[],h=[];let p=[],_=0,x;h[_]=void 0,p[_]=[];for(let d=0,S=r.length;d<S;d++)a=r[d],x=a.getPoints(),o=s(x),o=e?!o:o,o?(!u&&h[_]&&_++,h[_]={s:new za,p:x},h[_].s.curves=a.curves,u&&_++,p[_]=[]):p[_].push({h:a,p:x[0]});if(!h[0])return n(r);if(h.length>1){let d=!1,S=0;for(let y=0,v=h.length;y<v;y++)f[y]=[];for(let y=0,v=h.length;y<v;y++){const L=p[y];for(let P=0;P<L.length;P++){const A=L[P];let U=!0;for(let E=0;E<h.length;E++)i(A.p,h[E].p)&&(y!==E&&S++,U?(U=!1,f[E].push(A)):d=!0);U&&f[y].push(A)}}S>0&&d===!1&&(p=f)}let m;for(let d=0,S=h.length;d<S;d++){l=h[d].s,c.push(l),m=p[d];for(let y=0,v=m.length;y<v;y++)l.holes.push(m[y].h)}return c}}function xp(t,e,n,i){const s=tT(i);switch(n){case i_:return t*e;case Lf:return t*e/s.components*s.byteLength;case If:return t*e/s.components*s.byteLength;case r_:return t*e*2/s.components*s.byteLength;case Df:return t*e*2/s.components*s.byteLength;case s_:return t*e*3/s.components*s.byteLength;case On:return t*e*4/s.components*s.byteLength;case Nf:return t*e*4/s.components*s.byteLength;case Ua:case Fa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oa:case Ba:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mu:case _u:return Math.max(t,16)*Math.max(e,8)/4;case pu:case gu:return Math.max(t,8)*Math.max(e,8)/2;case vu:case xu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Su:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Eu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Au:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ru:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Lu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Iu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Du:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Nu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ka:case Uu:case Fu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case o_:case Ou:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bu:case ku:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tT(t){switch(t){case ti:case e_:return{byteLength:1,components:1};case Lo:case t_:case Xo:return{byteLength:2,components:1};case Cf:case Pf:return{byteLength:2,components:4};case Ns:case Rf:case Zn:return{byteLength:4,components:1};case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function P_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function nT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sT=`#ifdef USE_ALPHAHASH
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
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cT=`#ifdef USE_AOMAP
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
#endif`,uT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
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
#endif`,hT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,_T=`#ifdef USE_BUMPMAP
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ET=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wT=`#define PI 3.141592653589793
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
} // validated`,AT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RT=`vec3 transformedNormal = objectNormal;
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
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DT="gl_FragColor = linearToOutputTexel( gl_FragColor );",NT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WT=`#ifdef USE_GRADIENTMAP
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
}`,XT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qT=`uniform bool receiveShadow;
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
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,KT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ew=`PhysicalMaterial material;
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
#endif`,tw=`struct PhysicalMaterial {
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
}`,nw=`
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
#endif`,iw=`#if defined( RE_IndirectDiffuse )
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
#endif`,sw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ow=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hw=`#if defined( USE_POINTS_UV )
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
#endif`,dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_w=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vw=`#ifdef USE_MORPHTARGETS
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
#endif`,xw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tw=`#ifdef USE_NORMALMAP
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
#endif`,ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Aw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hw=`float getShadowMask() {
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
}`,Vw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gw=`#ifdef USE_SKINNING
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
#endif`,Ww=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xw=`#ifdef USE_SKINNING
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
#endif`,Yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$w=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kw=`#ifdef USE_TRANSMISSION
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
#endif`,Zw=`#ifdef USE_TRANSMISSION
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
#endif`,Jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
}`,uA=`#define DISTANCE
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
}`,fA=`#define DISTANCE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,_A=`uniform vec3 diffuse;
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
}`,vA=`#define LAMBERT
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
}`,xA=`#define LAMBERT
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
}`,yA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,EA=`#define NORMAL
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
}`,bA=`#define PHONG
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
}`,TA=`#define PHONG
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
}`,wA=`#define STANDARD
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
}`,AA=`#define STANDARD
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
}`,RA=`#define TOON
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
}`,CA=`#define TOON
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
}`,PA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,IA=`#include <common>
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
}`,DA=`uniform vec3 color;
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
}`,NA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:iT,alphahash_pars_fragment:sT,alphamap_fragment:rT,alphamap_pars_fragment:oT,alphatest_fragment:aT,alphatest_pars_fragment:lT,aomap_fragment:cT,aomap_pars_fragment:uT,batching_pars_vertex:fT,batching_vertex:hT,begin_vertex:dT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:_T,clipping_planes_fragment:vT,clipping_planes_pars_fragment:xT,clipping_planes_pars_vertex:yT,clipping_planes_vertex:ST,color_fragment:MT,color_pars_fragment:ET,color_pars_vertex:bT,color_vertex:TT,common:wT,cube_uv_reflection_fragment:AT,defaultnormal_vertex:RT,displacementmap_pars_vertex:CT,displacementmap_vertex:PT,emissivemap_fragment:LT,emissivemap_pars_fragment:IT,colorspace_fragment:DT,colorspace_pars_fragment:NT,envmap_fragment:UT,envmap_common_pars_fragment:FT,envmap_pars_fragment:OT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:jT,envmap_vertex:kT,fog_vertex:zT,fog_pars_vertex:HT,fog_fragment:VT,fog_pars_fragment:GT,gradientmap_pars_fragment:WT,lightmap_pars_fragment:XT,lights_lambert_fragment:YT,lights_lambert_pars_fragment:$T,lights_pars_begin:qT,lights_toon_fragment:KT,lights_toon_pars_fragment:ZT,lights_phong_fragment:JT,lights_phong_pars_fragment:QT,lights_physical_fragment:ew,lights_physical_pars_fragment:tw,lights_fragment_begin:nw,lights_fragment_maps:iw,lights_fragment_end:sw,logdepthbuf_fragment:rw,logdepthbuf_pars_fragment:ow,logdepthbuf_pars_vertex:aw,logdepthbuf_vertex:lw,map_fragment:cw,map_pars_fragment:uw,map_particle_fragment:fw,map_particle_pars_fragment:hw,metalnessmap_fragment:dw,metalnessmap_pars_fragment:pw,morphinstance_vertex:mw,morphcolor_vertex:gw,morphnormal_vertex:_w,morphtarget_pars_vertex:vw,morphtarget_vertex:xw,normal_fragment_begin:yw,normal_fragment_maps:Sw,normal_pars_fragment:Mw,normal_pars_vertex:Ew,normal_vertex:bw,normalmap_pars_fragment:Tw,clearcoat_normal_fragment_begin:ww,clearcoat_normal_fragment_maps:Aw,clearcoat_pars_fragment:Rw,iridescence_pars_fragment:Cw,opaque_fragment:Pw,packing:Lw,premultiplied_alpha_fragment:Iw,project_vertex:Dw,dithering_fragment:Nw,dithering_pars_fragment:Uw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Ow,shadowmap_pars_fragment:Bw,shadowmap_pars_vertex:kw,shadowmap_vertex:zw,shadowmask_pars_fragment:Hw,skinbase_vertex:Vw,skinning_pars_vertex:Gw,skinning_vertex:Ww,skinnormal_vertex:Xw,specularmap_fragment:Yw,specularmap_pars_fragment:$w,tonemapping_fragment:qw,tonemapping_pars_fragment:jw,transmission_fragment:Kw,transmission_pars_fragment:Zw,uv_pars_fragment:Jw,uv_pars_vertex:Qw,uv_vertex:eA,worldpos_vertex:tA,background_vert:nA,background_frag:iA,backgroundCube_vert:sA,backgroundCube_frag:rA,cube_vert:oA,cube_frag:aA,depth_vert:lA,depth_frag:cA,distanceRGBA_vert:uA,distanceRGBA_frag:fA,equirect_vert:hA,equirect_frag:dA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:_A,meshlambert_vert:vA,meshlambert_frag:xA,meshmatcap_vert:yA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:EA,meshphong_vert:bA,meshphong_frag:TA,meshphysical_vert:wA,meshphysical_frag:AA,meshtoon_vert:RA,meshtoon_frag:CA,points_vert:PA,points_frag:LA,shadow_vert:IA,shadow_frag:DA,sprite_vert:NA,sprite_frag:UA},Se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},jn={basic:{uniforms:nn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:nn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:nn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:nn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:nn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:nn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:nn([Se.points,Se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:nn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:nn([Se.common,Se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:nn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:nn([Se.sprite,Se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:nn([Se.common,Se.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:nn([Se.lights,Se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};jn.physical={uniforms:nn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Aa={r:0,b:0,g:0},vs=new Rn,FA=new _t;function OA(t,e,n,i,s,r,o){const a=new Ze(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?n:e).get(v)),v}function x(y){let v=!1;const L=_(y);L===null?d(a,l):L&&L.isColor&&(d(L,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,v){const L=_(v);L&&(L.isCubeTexture||L.mapping===yl)?(u===void 0&&(u=new Dt(new Ur(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Rr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(vs)),u.material.toneMapped=it.getTransfer(L.colorSpace)!==dt,(f!==L||h!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Dt(new Os(2,2),new Qi({name:"BackgroundMaterial",uniforms:Rr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(L.colorSpace)!==dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(Aa,p_(t)),i.buffers.color.setClear(Aa.r,Aa.g,Aa.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:x,addToRenderList:m,dispose:S}}function BA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(b,F,B,X,ie){let oe=!1;const ee=f(X,B,F);r!==ee&&(r=ee,c(r.object)),oe=p(b,X,B,ie),oe&&_(b,X,B,ie),ie!==null&&e.update(ie,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,v(b,F,B,X),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function f(b,F,B){const X=B.wireframe===!0;let ie=i[b.id];ie===void 0&&(ie={},i[b.id]=ie);let oe=ie[F.id];oe===void 0&&(oe={},ie[F.id]=oe);let ee=oe[X];return ee===void 0&&(ee=h(l()),oe[X]=ee),ee}function h(b){const F=[],B=[],X=[];for(let ie=0;ie<n;ie++)F[ie]=0,B[ie]=0,X[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:X,object:b,attributes:{},index:null}}function p(b,F,B,X){const ie=r.attributes,oe=F.attributes;let ee=0;const J=B.getAttributes();for(const $ in J)if(J[$].location>=0){const ve=ie[$];let we=oe[$];if(we===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(we=b.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;ee++}return r.attributesNum!==ee||r.index!==X}function _(b,F,B,X){const ie={},oe=F.attributes;let ee=0;const J=B.getAttributes();for(const $ in J)if(J[$].location>=0){let ve=oe[$];ve===void 0&&($==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),$==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),ie[$]=we,ee++}r.attributes=ie,r.attributesNum=ee,r.index=X}function x(){const b=r.newAttributes;for(let F=0,B=b.length;F<B;F++)b[F]=0}function m(b){d(b,0)}function d(b,F){const B=r.newAttributes,X=r.enabledAttributes,ie=r.attributeDivisors;B[b]=1,X[b]===0&&(t.enableVertexAttribArray(b),X[b]=1),ie[b]!==F&&(t.vertexAttribDivisor(b,F),ie[b]=F)}function S(){const b=r.newAttributes,F=r.enabledAttributes;for(let B=0,X=F.length;B<X;B++)F[B]!==b[B]&&(t.disableVertexAttribArray(B),F[B]=0)}function y(b,F,B,X,ie,oe,ee){ee===!0?t.vertexAttribIPointer(b,F,B,ie,oe):t.vertexAttribPointer(b,F,B,X,ie,oe)}function v(b,F,B,X){x();const ie=X.attributes,oe=B.getAttributes(),ee=F.defaultAttributeValues;for(const J in oe){const $=oe[J];if($.location>=0){let pe=ie[J];if(pe===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(pe=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(pe=b.instanceColor)),pe!==void 0){const ve=pe.normalized,we=pe.itemSize,Oe=e.get(pe);if(Oe===void 0)continue;const je=Oe.buffer,re=Oe.type,_e=Oe.bytesPerElement,Me=re===t.INT||re===t.UNSIGNED_INT||pe.gpuType===Rf;if(pe.isInterleavedBufferAttribute){const V=pe.data,se=V.stride,le=pe.offset;if(V.isInstancedInterleavedBuffer){for(let ae=0;ae<$.locationSize;ae++)d($.location+ae,V.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<$.locationSize;ae++)m($.location+ae);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ae=0;ae<$.locationSize;ae++)y($.location+ae,we/$.locationSize,re,ve,se*_e,(le+we/$.locationSize*ae)*_e,Me)}else{if(pe.isInstancedBufferAttribute){for(let V=0;V<$.locationSize;V++)d($.location+V,pe.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let V=0;V<$.locationSize;V++)m($.location+V);t.bindBuffer(t.ARRAY_BUFFER,je);for(let V=0;V<$.locationSize;V++)y($.location+V,we/$.locationSize,re,ve,we*_e,we/$.locationSize*V*_e,Me)}}else if(ee!==void 0){const ve=ee[J];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv($.location,ve);break;case 3:t.vertexAttrib3fv($.location,ve);break;case 4:t.vertexAttrib4fv($.location,ve);break;default:t.vertexAttrib1fv($.location,ve)}}}}S()}function L(){U();for(const b in i){const F=i[b];for(const B in F){const X=F[B];for(const ie in X)u(X[ie].object),delete X[ie];delete F[B]}delete i[b]}}function P(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const B in F){const X=F[B];for(const ie in X)u(X[ie].object),delete X[ie];delete F[B]}delete i[b.id]}function A(b){for(const F in i){const B=i[F];if(B[b.id]===void 0)continue;const X=B[b.id];for(const ie in X)u(X[ie].object),delete X[ie];delete B[b.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function kA(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zA(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==On&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!U)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:L,maxSamples:P}}function HA(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Ms,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,y=S*4;let v=d.clippingState||null;l.value=v,v=u(_,h,y,p);for(let L=0;L!==y;++L)v[L]=n[L];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const d=p+x*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==x;++y,v+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function VA(t){let e=new WeakMap;function n(o,a){return a===fu?o.mapping=br:a===hu&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fu||a===hu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J1(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const fr=4,yp=[.125,.215,.35,.446,.526,.582],ws=20,Sc=new R_,Sp=new Ze;let Mc=null,Ec=0,bc=0,Tc=!1;const Es=(1+Math.sqrt(5))/2,rr=1/Es,Mp=[new H(-Es,rr,0),new H(Es,rr,0),new H(-rr,0,Es),new H(rr,0,Es),new H(0,Es,-rr),new H(0,Es,rr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],GA=new H;class Ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=GA}=r;Mc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,Ec,bc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===br||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Xo,format:On,colorSpace:wr,depthBuffer:!1},s=bp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bp(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WA(r)),this._blurMaterial=XA(r,e,n)}return s}_compileMaterial(e){const n=new Dt(this._lodPlanes[0],e);this._renderer.compile(n,Sc)}_sceneToCubeUV(e,n,i,s,r){const l=new an(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Sp),f.toneMapping=qi,f.autoClear=!1;const _=new Ml({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new Dt(new Ur,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(Sp),m=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const v=this._cubeSize;Ra(s,y*v,S>2?v:0,v,v),f.setRenderTarget(s),m&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===br||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ra(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Mp[(s-r-1)%Mp.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Dt(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ws-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):ws;m>ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const d=[];let S=0;for(let A=0;A<ws;++A){const U=A/x,E=Math.exp(-U*U/2);d.push(E),A===0?S+=E:A<m&&(S+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-i;const v=this._sizeLods[s],L=3*v*(s>y-fr?s-y+fr:0),P=4*(this._cubeSize-v);Ra(n,L,P,3*v,2*v),l.setRenderTarget(n),l.render(f,Sc)}}function WA(t){const e=[],n=[],i=[];let s=t;const r=t-fr+1+yp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-fr?l=yp[o-t+fr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,d=1,S=new Float32Array(x*_*p),y=new Float32Array(m*_*p),v=new Float32Array(d*_*p);for(let P=0;P<p;P++){const A=P%3*2/3-1,U=P>2?0:-1,E=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];S.set(E,x*_*P),y.set(h,m*_*P);const b=[P,P,P,P,P,P];v.set(b,d*_*P)}const L=new Pi;L.setAttribute("position",new Hn(S,x)),L.setAttribute("uv",new Hn(y,m)),L.setAttribute("faceIndex",new Hn(v,d)),e.push(L),s>fr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function bp(t,e,n){const i=new Us(t,e,n);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function XA(t,e,n){const i=new Float32Array(ws),s=new H(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Tp(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function wp(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function YA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fu||l===hu,u=l===br||l===Tr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ep(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new Ep(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function $A(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qA(t,e,n,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let y=0,v=S.length;y<v;y+=3){const L=S[y+0],P=S[y+1],A=S[y+2];h.push(L,P,P,A,A,L)}}else if(_!==void 0){const S=_.array;x=_.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const L=y+0,P=y+1,A=y+2;h.push(L,P,P,A,A,L)}}else return;const m=new(l_(h)?d_:h_)(h,1);m.version=x;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function jA(t,e,n){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,r,h*o),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,h*o,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];n.update(m,i,1)}function f(h,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,x,0,_);let d=0;for(let S=0;S<_;S++)d+=p[S]*x[S];n.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function KA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function ZA(t,e,n){const i=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*P*4*f),U=new c_(A,L,P,f);U.type=Zn,U.needsUpdate=!0;const E=v*4;for(let F=0;F<f;F++){const B=d[F],X=S[F],ie=y[F],oe=L*P*4*F;for(let ee=0;ee<B.count;ee++){const J=ee*E;_===!0&&(s.fromBufferAttribute(B,ee),A[oe+J+0]=s.x,A[oe+J+1]=s.y,A[oe+J+2]=s.z,A[oe+J+3]=0),x===!0&&(s.fromBufferAttribute(X,ee),A[oe+J+4]=s.x,A[oe+J+5]=s.y,A[oe+J+6]=s.z,A[oe+J+7]=0),m===!0&&(s.fromBufferAttribute(ie,ee),A[oe+J+8]=s.x,A[oe+J+9]=s.y,A[oe+J+10]=s.z,A[oe+J+11]=ie.itemSize===4?s.w:1)}}h={count:f,texture:U,size:new Pe(L,P)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function JA(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const L_=new Jt,Ap=new v_(1,1),I_=new c_,D_=new U1,N_=new g_,Rp=[],Cp=[],Pp=new Float32Array(16),Lp=new Float32Array(9),Ip=new Float32Array(4);function Fr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Rp[s];if(r===void 0&&(r=new Float32Array(s),Rp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function El(t,e){let n=Cp[e];n===void 0&&(n=new Int32Array(e),Cp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function eR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function tR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function nR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function iR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Ip.set(i),t.uniformMatrix2fv(this.addr,!1,Ip),Ot(n,i)}}function sR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Lp.set(i),t.uniformMatrix3fv(this.addr,!1,Lp),Ot(n,i)}}function rR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Pp.set(i),t.uniformMatrix4fv(this.addr,!1,Pp),Ot(n,i)}}function oR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function aR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function lR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function cR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function uR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function hR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function dR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function pR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ap.compareFunction=a_,r=Ap):r=L_,n.setTexture2D(e||r,s)}function mR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||D_,s)}function gR(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||N_,s)}function _R(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||I_,s)}function vR(t){switch(t){case 5126:return QA;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return sR;case 35676:return rR;case 5124:case 35670:return oR;case 35667:case 35671:return aR;case 35668:case 35672:return lR;case 35669:case 35673:return cR;case 5125:return uR;case 36294:return fR;case 36295:return hR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return _R}}function xR(t,e){t.uniform1fv(this.addr,e)}function yR(t,e){const n=Fr(e,this.size,2);t.uniform2fv(this.addr,n)}function SR(t,e){const n=Fr(e,this.size,3);t.uniform3fv(this.addr,n)}function MR(t,e){const n=Fr(e,this.size,4);t.uniform4fv(this.addr,n)}function ER(t,e){const n=Fr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bR(t,e){const n=Fr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TR(t,e){const n=Fr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wR(t,e){t.uniform1iv(this.addr,e)}function AR(t,e){t.uniform2iv(this.addr,e)}function RR(t,e){t.uniform3iv(this.addr,e)}function CR(t,e){t.uniform4iv(this.addr,e)}function PR(t,e){t.uniform1uiv(this.addr,e)}function LR(t,e){t.uniform2uiv(this.addr,e)}function IR(t,e){t.uniform3uiv(this.addr,e)}function DR(t,e){t.uniform4uiv(this.addr,e)}function NR(t,e,n){const i=this.cache,s=e.length,r=El(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||L_,r[o])}function UR(t,e,n){const i=this.cache,s=e.length,r=El(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||D_,r[o])}function FR(t,e,n){const i=this.cache,s=e.length,r=El(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||N_,r[o])}function OR(t,e,n){const i=this.cache,s=e.length,r=El(n,s);Ft(i,r)||(t.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||I_,r[o])}function BR(t){switch(t){case 5126:return xR;case 35664:return yR;case 35665:return SR;case 35666:return MR;case 35674:return ER;case 35675:return bR;case 35676:return TR;case 5124:case 35670:return wR;case 35667:case 35671:return AR;case 35668:case 35672:return RR;case 35669:case 35673:return CR;case 5125:return PR;case 36294:return LR;case 36295:return IR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return FR;case 36289:case 36303:case 36311:case 36292:return OR}}class kR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vR(n.type)}}class zR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BR(n.type)}}class HR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Dp(t,e){t.seq.push(e),t.map[e.id]=e}function VR(t,e,n){const i=t.name,s=i.length;for(wc.lastIndex=0;;){const r=wc.exec(i),o=wc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dp(n,c===void 0?new kR(a,t,e):new zR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new HR(a),Dp(n,f)),n=f}}}class Ha{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);VR(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function Np(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const GR=37297;let WR=0;function XR(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Up=new $e;function YR(t){it._getMatrix(Up,it.workingColorSpace,t);const e=`mat3( ${Up.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case el:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Fp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+XR(t.getShaderSource(e),o)}else return s}function $R(t,e){const n=YR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function qR(t,e){let n;switch(e){case YE:n="Linear";break;case $E:n="Reinhard";break;case qE:n="Cineon";break;case jE:n="ACESFilmic";break;case ZE:n="AgX";break;case JE:n="Neutral";break;case KE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ca=new H;function jR(){it.getLuminanceCoefficients(Ca);const t=Ca.x.toFixed(4),e=Ca.y.toFixed(4),n=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function ZR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function JR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Jr(t){return t!==""}function Op(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(t){return t.replace(QR,tC)}const eC=new Map;function tC(t,e){let n=qe[e];if(n===void 0){const i=eC.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wu(n)}const nC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(t){return t.replace(nC,iC)}function iC(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function sC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function rC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case br:case Tr:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function aC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case WE:e="ENVMAP_BLENDING_MIX";break;case XE:e="ENVMAP_BLENDING_ADD";break}return e}function lC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function cC(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=sC(n),c=rC(n),u=oC(n),f=aC(n),h=lC(n),p=KR(n),_=ZR(r),x=s.createProgram();let m,d,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Jr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Jr).join(`
`),d.length>0&&(d+=`
`)):(m=[zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),d=[zp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?qe.tonemapping_pars_fragment:"",n.toneMapping!==qi?qR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,$R("linearToOutputTexel",n.outputColorSpace),jR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jr).join(`
`)),o=Wu(o),o=Op(o,n),o=Bp(o,n),a=Wu(a),a=Op(a,n),a=Bp(a,n),o=kp(o),a=kp(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+m+o,v=S+d+a,L=Np(s,s.VERTEX_SHADER,y),P=Np(s,s.FRAGMENT_SHADER,v);s.attachShader(x,L),s.attachShader(x,P),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(F){if(t.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(L).trim(),ie=s.getShaderInfoLog(P).trim();let oe=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,L,P);else{const J=Fp(s,L,"vertex"),$=Fp(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+J+`
`+$)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(X===""||ie==="")&&(ee=!1);ee&&(F.diagnostics={runnable:oe,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:ie,prefix:d}})}s.deleteShader(L),s.deleteShader(P),U=new Ha(s,x),E=JR(s,x)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,GR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=WR++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}let uC=0;class fC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hC(e),n.set(e,i)),i}}class hC{constructor(e){this.id=uC++,this.code=e,this.usedTimes=0}}function dC(t,e,n,i,s,r,o){const a=new Of,l=new fC,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,F,B,X){const ie=B.fog,oe=X.geometry,ee=E.isMeshStandardMaterial?B.environment:null,J=(E.isMeshStandardMaterial?n:e).get(E.envMap||ee),$=J&&J.mapping===yl?J.image.height:null,pe=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ve=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,we=ve!==void 0?ve.length:0;let Oe=0;oe.morphAttributes.position!==void 0&&(Oe=1),oe.morphAttributes.normal!==void 0&&(Oe=2),oe.morphAttributes.color!==void 0&&(Oe=3);let je,re,_e,Me;if(pe){const ft=jn[pe];je=ft.vertexShader,re=ft.fragmentShader}else je=E.vertexShader,re=E.fragmentShader,l.update(E),_e=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const V=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),le=X.isInstancedMesh===!0,ae=X.isBatchedMesh===!0,Be=!!E.map,D=!!E.matcap,N=!!J,M=!!E.aoMap,ne=!!E.lightMap,Z=!!E.bumpMap,K=!!E.normalMap,w=!!E.displacementMap,C=!!E.emissiveMap,O=!!E.metalnessMap,k=!!E.roughnessMap,he=E.anisotropy>0,T=E.clearcoat>0,g=E.dispersion>0,I=E.iridescence>0,G=E.sheen>0,j=E.transmission>0,q=he&&!!E.anisotropyMap,ye=T&&!!E.clearcoatMap,fe=T&&!!E.clearcoatNormalMap,Ee=T&&!!E.clearcoatRoughnessMap,Ae=I&&!!E.iridescenceMap,ue=I&&!!E.iridescenceThicknessMap,Re=G&&!!E.sheenColorMap,De=G&&!!E.sheenRoughnessMap,Ne=!!E.specularMap,xe=!!E.specularColorMap,Ve=!!E.specularIntensityMap,z=j&&!!E.transmissionMap,be=j&&!!E.thicknessMap,de=!!E.gradientMap,Ie=!!E.alphaMap,me=E.alphaTest>0,ce=!!E.alphaHash,Ue=!!E.extensions;let Xe=qi;E.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const St={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:re,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ae,batchingColor:ae&&X._colorsTexture!==null,instancing:le,instancingColor:le&&X.instanceColor!==null,instancingMorph:le&&X.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?t.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:wr,alphaToCoverage:!!E.alphaToCoverage,map:Be,matcap:D,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:$,aoMap:M,lightMap:ne,bumpMap:Z,normalMap:K,displacementMap:h&&w,emissiveMap:C,normalMapObjectSpace:K&&E.normalMapType===n1,normalMapTangentSpace:K&&E.normalMapType===Sl,metalnessMap:O,roughnessMap:k,anisotropy:he,anisotropyMap:q,clearcoat:T,clearcoatMap:ye,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:g,iridescence:I,iridescenceMap:Ae,iridescenceThicknessMap:ue,sheen:G,sheenColorMap:Re,sheenRoughnessMap:De,specularMap:Ne,specularColorMap:xe,specularIntensityMap:Ve,transmission:j,transmissionMap:z,thicknessMap:be,gradientMap:de,opaque:E.transparent===!1&&E.blending===mr&&E.alphaToCoverage===!1,alphaMap:Ie,alphaTest:me,alphaHash:ce,combine:E.combine,mapUv:Be&&x(E.map.channel),aoMapUv:M&&x(E.aoMap.channel),lightMapUv:ne&&x(E.lightMap.channel),bumpMapUv:Z&&x(E.bumpMap.channel),normalMapUv:K&&x(E.normalMap.channel),displacementMapUv:w&&x(E.displacementMap.channel),emissiveMapUv:C&&x(E.emissiveMap.channel),metalnessMapUv:O&&x(E.metalnessMap.channel),roughnessMapUv:k&&x(E.roughnessMap.channel),anisotropyMapUv:q&&x(E.anisotropyMap.channel),clearcoatMapUv:ye&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(E.sheenRoughnessMap.channel),specularMapUv:Ne&&x(E.specularMap.channel),specularColorMapUv:xe&&x(E.specularColorMap.channel),specularIntensityMapUv:Ve&&x(E.specularIntensityMap.channel),transmissionMapUv:z&&x(E.transmissionMap.channel),thicknessMapUv:be&&x(E.thicknessMap.channel),alphaMapUv:Ie&&x(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(K||he),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!oe.attributes.uv&&(Be||Ie),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:X.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Oe,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Be&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:C&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vi,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)b.push(F),b.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(S(b,E),y(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function S(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function y(E,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const b=_[E.type];let F;if(b){const B=jn[b];F=q1.clone(B.uniforms)}else F=E.uniforms;return F}function L(E,b){let F;for(let B=0,X=u.length;B<X;B++){const ie=u[B];if(ie.cacheKey===b){F=ie,++F.usedTimes;break}}return F===void 0&&(F=new cC(t,b,E,r),u.push(F)),F}function P(E){if(--E.usedTimes===0){const b=u.indexOf(E);u[b]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:L,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:U}}function pC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function mC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Vp(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,p,_,x,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):n.push(d)}function l(f,h,p,_,x,m){const d=o(f,h,p,_,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||mC),i.length>1&&i.sort(h||Hp),s.length>1&&s.sort(h||Hp)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function gC(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Vp,t.set(i,[o])):s>=r.length?(o=new Vp,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function _C(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new Ze};break;case"SpotLight":n={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function vC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xC=0;function yC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function SC(t){const e=new _C,n=vC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new _t,o=new _t;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,m=0,d=0,S=0,y=0,v=0,L=0,P=0,A=0;c.sort(yC);for(let E=0,b=c.length;E<b;E++){const F=c[E],B=F.color,X=F.intensity,ie=F.distance,oe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=B.r*X,f+=B.g*X,h+=B.b*X;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],X);A++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,$=n.get(F);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=ee,p++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(B).multiplyScalar(X),ee.distance=ie,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[x]=ee;const J=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,J.updateMatrices(F),F.castShadow&&P++),i.spotLightMatrix[x]=J.matrix,F.castShadow){const $=n.get(F);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=oe,v++}x++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy(B).multiplyScalar(X),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=ee,m++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const J=F.shadow,$=n.get(F);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=F.shadow.matrix,y++}i.point[_]=ee,_++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(X),ee.groundColor.copy(F.groundColor).multiplyScalar(X),i.hemi[d]=ee,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==S||U.numPointShadows!==y||U.numSpotShadows!==v||U.numSpotMaps!==L||U.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,U.directionalLength=p,U.pointLength=_,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=S,U.numPointShadows=y,U.numSpotShadows=v,U.numSpotMaps=L,U.numLightProbes=A,i.version=xC++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const y=c[d];if(y.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Gp(t){const e=new SC(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function MC(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Gp(t),e.set(s,[a])):r>=o.length?(a=new Gp(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const EC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bC=`uniform sampler2D shadow_pass;
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
}`;function TC(t,e,n){let i=new Bf;const s=new Pe,r=new Pe,o=new mt,a=new Hb({depthPacking:t1}),l=new Vb,c={},u=n.maxTextureSize,f={[Ji]:ln,[ln]:Ji,[vi]:vi},h=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:EC,fragmentShader:bC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Pi;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zg;let d=this.type;this.render=function(P,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const E=t.getRenderTarget(),b=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),B=t.state;B.setBlending($i),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=d!==pi&&this.type===pi,ie=d===pi&&this.type!==pi;for(let oe=0,ee=P.length;oe<ee;oe++){const J=P[oe],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const pe=$.getFrameExtents();if(s.multiply(pe),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,$.mapSize.y=r.y)),$.map===null||X===!0||ie===!0){const we=this.type!==pi?{minFilter:_n,magFilter:_n}:{};$.map!==null&&$.map.dispose(),$.map=new Us(s.x,s.y,we),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const ve=$.getViewportCount();for(let we=0;we<ve;we++){const Oe=$.getViewport(we);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),B.viewport(o),$.updateMatrices(J,we),i=$.getFrustum(),v(A,U,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===pi&&S($,U),$.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(E,b,F)};function S(P,A){const U=e.update(x);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Us(s.x,s.y)),h.uniforms.shadow_pass.value=P.map.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(A,null,U,h,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(A,null,U,p,x,null)}function y(P,A,U,E){let b=null;const F=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const B=b.uuid,X=A.uuid;let ie=c[B];ie===void 0&&(ie={},c[B]=ie);let oe=ie[X];oe===void 0&&(oe=b.clone(),ie[X]=oe,A.addEventListener("dispose",L)),b=oe}if(b.visible=A.visible,b.wireframe=A.wireframe,E===pi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const B=t.properties.get(b);B.light=U}return b}function v(P,A,U,E,b){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&b===pi)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);const X=e.update(P),ie=P.material;if(Array.isArray(ie)){const oe=X.groups;for(let ee=0,J=oe.length;ee<J;ee++){const $=oe[ee],pe=ie[$.materialIndex];if(pe&&pe.visible){const ve=y(P,pe,E,b);P.onBeforeShadow(t,P,A,U,X,ve,$),t.renderBufferDirect(U,null,X,ve,P,$),P.onAfterShadow(t,P,A,U,X,ve,$)}}}else if(ie.visible){const oe=y(P,ie,E,b);P.onBeforeShadow(t,P,A,U,X,oe,null),t.renderBufferDirect(U,null,X,oe,P,null),P.onAfterShadow(t,P,A,U,X,oe,null)}}const B=P.children;for(let X=0,ie=B.length;X<ie;X++)v(B[X],A,U,E,b)}function L(P){P.target.removeEventListener("dispose",L);for(const U in c){const E=c[U],b=P.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}const wC={[su]:ru,[ou]:cu,[au]:uu,[Er]:lu,[ru]:su,[cu]:ou,[uu]:au,[lu]:Er};function AC(t,e){function n(){let z=!1;const be=new mt;let de=null;const Ie=new mt(0,0,0,0);return{setMask:function(me){de!==me&&!z&&(t.colorMask(me,me,me,me),de=me)},setLocked:function(me){z=me},setClear:function(me,ce,Ue,Xe,St){St===!0&&(me*=Xe,ce*=Xe,Ue*=Xe),be.set(me,ce,Ue,Xe),Ie.equals(be)===!1&&(t.clearColor(me,ce,Ue,Xe),Ie.copy(be))},reset:function(){z=!1,de=null,Ie.set(-1,0,0,0)}}}function i(){let z=!1,be=!1,de=null,Ie=null,me=null;return{setReversed:function(ce){if(be!==ce){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),be=ce;const Xe=me;me=null,this.setClear(Xe)}},getReversed:function(){return be},setTest:function(ce){ce?V(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ce){de!==ce&&!z&&(t.depthMask(ce),de=ce)},setFunc:function(ce){if(be&&(ce=wC[ce]),Ie!==ce){switch(ce){case su:t.depthFunc(t.NEVER);break;case ru:t.depthFunc(t.ALWAYS);break;case ou:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case au:t.depthFunc(t.EQUAL);break;case lu:t.depthFunc(t.GEQUAL);break;case cu:t.depthFunc(t.GREATER);break;case uu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=ce}},setLocked:function(ce){z=ce},setClear:function(ce){me!==ce&&(be&&(ce=1-ce),t.clearDepth(ce),me=ce)},reset:function(){z=!1,de=null,Ie=null,me=null,be=!1}}}function s(){let z=!1,be=null,de=null,Ie=null,me=null,ce=null,Ue=null,Xe=null,St=null;return{setTest:function(ft){z||(ft?V(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(ft){be!==ft&&!z&&(t.stencilMask(ft),be=ft)},setFunc:function(ft,Cn,ii){(de!==ft||Ie!==Cn||me!==ii)&&(t.stencilFunc(ft,Cn,ii),de=ft,Ie=Cn,me=ii)},setOp:function(ft,Cn,ii){(ce!==ft||Ue!==Cn||Xe!==ii)&&(t.stencilOp(ft,Cn,ii),ce=ft,Ue=Cn,Xe=ii)},setLocked:function(ft){z=ft},setClear:function(ft){St!==ft&&(t.clearStencil(ft),St=ft)},reset:function(){z=!1,be=null,de=null,Ie=null,me=null,ce=null,Ue=null,Xe=null,St=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,S=null,y=null,v=null,L=null,P=null,A=new Ze(0,0,0),U=0,E=!1,b=null,F=null,B=null,X=null,ie=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),ee=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ee=J>=2);let pe=null,ve={};const we=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),je=new mt().fromArray(we),re=new mt().fromArray(Oe);function _e(z,be,de,Ie){const me=new Uint8Array(4),ce=t.createTexture();t.bindTexture(z,ce),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<de;Ue++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(be+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ce}const Me={};Me[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(t.DEPTH_TEST),o.setFunc(Er),Z(!1),K(Id),V(t.CULL_FACE),M($i);function V(z){u[z]!==!0&&(t.enable(z),u[z]=!0)}function se(z){u[z]!==!1&&(t.disable(z),u[z]=!1)}function le(z,be){return f[z]!==be?(t.bindFramebuffer(z,be),f[z]=be,z===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=be),z===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=be),!0):!1}function ae(z,be){let de=p,Ie=!1;if(z){de=h.get(be),de===void 0&&(de=[],h.set(be,de));const me=z.textures;if(de.length!==me.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ue=me.length;ce<Ue;ce++)de[ce]=t.COLOR_ATTACHMENT0+ce;de.length=me.length,Ie=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(de)}function Be(z){return _!==z?(t.useProgram(z),_=z,!0):!1}const D={[Ts]:t.FUNC_ADD,[AE]:t.FUNC_SUBTRACT,[RE]:t.FUNC_REVERSE_SUBTRACT};D[CE]=t.MIN,D[PE]=t.MAX;const N={[LE]:t.ZERO,[IE]:t.ONE,[DE]:t.SRC_COLOR,[nu]:t.SRC_ALPHA,[kE]:t.SRC_ALPHA_SATURATE,[OE]:t.DST_COLOR,[UE]:t.DST_ALPHA,[NE]:t.ONE_MINUS_SRC_COLOR,[iu]:t.ONE_MINUS_SRC_ALPHA,[BE]:t.ONE_MINUS_DST_COLOR,[FE]:t.ONE_MINUS_DST_ALPHA,[zE]:t.CONSTANT_COLOR,[HE]:t.ONE_MINUS_CONSTANT_COLOR,[VE]:t.CONSTANT_ALPHA,[GE]:t.ONE_MINUS_CONSTANT_ALPHA};function M(z,be,de,Ie,me,ce,Ue,Xe,St,ft){if(z===$i){x===!0&&(se(t.BLEND),x=!1);return}if(x===!1&&(V(t.BLEND),x=!0),z!==wE){if(z!==m||ft!==E){if((d!==Ts||v!==Ts)&&(t.blendEquation(t.FUNC_ADD),d=Ts,v=Ts),ft)switch(z){case mr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dd:t.blendFunc(t.ONE,t.ONE);break;case Nd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ud:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case mr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Nd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ud:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,y=null,L=null,P=null,A.set(0,0,0),U=0,m=z,E=ft}return}me=me||be,ce=ce||de,Ue=Ue||Ie,(be!==d||me!==v)&&(t.blendEquationSeparate(D[be],D[me]),d=be,v=me),(de!==S||Ie!==y||ce!==L||Ue!==P)&&(t.blendFuncSeparate(N[de],N[Ie],N[ce],N[Ue]),S=de,y=Ie,L=ce,P=Ue),(Xe.equals(A)===!1||St!==U)&&(t.blendColor(Xe.r,Xe.g,Xe.b,St),A.copy(Xe),U=St),m=z,E=!1}function ne(z,be){z.side===vi?se(t.CULL_FACE):V(t.CULL_FACE);let de=z.side===ln;be&&(de=!de),Z(de),z.blending===mr&&z.transparent===!1?M($i):M(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ie=z.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),C(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?V(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(z){b!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),b=z)}function K(z){z!==bE?(V(t.CULL_FACE),z!==F&&(z===Id?t.cullFace(t.BACK):z===TE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),F=z}function w(z){z!==B&&(ee&&t.lineWidth(z),B=z)}function C(z,be,de){z?(V(t.POLYGON_OFFSET_FILL),(X!==be||ie!==de)&&(t.polygonOffset(be,de),X=be,ie=de)):se(t.POLYGON_OFFSET_FILL)}function O(z){z?V(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function k(z){z===void 0&&(z=t.TEXTURE0+oe-1),pe!==z&&(t.activeTexture(z),pe=z)}function he(z,be,de){de===void 0&&(pe===null?de=t.TEXTURE0+oe-1:de=pe);let Ie=ve[de];Ie===void 0&&(Ie={type:void 0,texture:void 0},ve[de]=Ie),(Ie.type!==z||Ie.texture!==be)&&(pe!==de&&(t.activeTexture(de),pe=de),t.bindTexture(z,be||Me[z]),Ie.type=z,Ie.texture=be)}function T(){const z=ve[pe];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{t.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{t.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{t.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{t.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ee(){try{t.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{t.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{t.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(z){je.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),je.copy(z))}function De(z){re.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),re.copy(z))}function Ne(z,be){let de=c.get(be);de===void 0&&(de=new WeakMap,c.set(be,de));let Ie=de.get(z);Ie===void 0&&(Ie=t.getUniformBlockIndex(be,z.name),de.set(z,Ie))}function xe(z,be){const Ie=c.get(be).get(z);l.get(be)!==Ie&&(t.uniformBlockBinding(be,Ie,z.__bindingPointIndex),l.set(be,Ie))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},pe=null,ve={},f={},h=new WeakMap,p=[],_=null,x=!1,m=null,d=null,S=null,y=null,v=null,L=null,P=null,A=new Ze(0,0,0),U=0,E=!1,b=null,F=null,B=null,X=null,ie=null,je.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:se,bindFramebuffer:le,drawBuffers:ae,useProgram:Be,setBlending:M,setMaterial:ne,setFlipSided:Z,setCullFace:K,setLineWidth:w,setPolygonOffset:C,setScissorTest:O,activeTexture:k,bindTexture:he,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ae,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:G,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:ye,scissor:Re,viewport:De,reset:Ve}}function RC(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Uo("canvas")}function x(T,g,I){let G=1;const j=he(T);if((j.width>I||j.height>I)&&(G=I/Math.max(j.width,j.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const q=Math.floor(G*j.width),ye=Math.floor(G*j.height);f===void 0&&(f=_(q,ye));const fe=g?_(q,ye):f;return fe.width=q,fe.height=ye,fe.getContext("2d").drawImage(T,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+ye+")."),fe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){t.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(T,g,I,G,j=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let q=g;if(g===t.RED&&(I===t.FLOAT&&(q=t.R32F),I===t.HALF_FLOAT&&(q=t.R16F),I===t.UNSIGNED_BYTE&&(q=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.R8UI),I===t.UNSIGNED_SHORT&&(q=t.R16UI),I===t.UNSIGNED_INT&&(q=t.R32UI),I===t.BYTE&&(q=t.R8I),I===t.SHORT&&(q=t.R16I),I===t.INT&&(q=t.R32I)),g===t.RG&&(I===t.FLOAT&&(q=t.RG32F),I===t.HALF_FLOAT&&(q=t.RG16F),I===t.UNSIGNED_BYTE&&(q=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.RG8UI),I===t.UNSIGNED_SHORT&&(q=t.RG16UI),I===t.UNSIGNED_INT&&(q=t.RG32UI),I===t.BYTE&&(q=t.RG8I),I===t.SHORT&&(q=t.RG16I),I===t.INT&&(q=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.RGB8UI),I===t.UNSIGNED_SHORT&&(q=t.RGB16UI),I===t.UNSIGNED_INT&&(q=t.RGB32UI),I===t.BYTE&&(q=t.RGB8I),I===t.SHORT&&(q=t.RGB16I),I===t.INT&&(q=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),I===t.UNSIGNED_INT&&(q=t.RGBA32UI),I===t.BYTE&&(q=t.RGBA8I),I===t.SHORT&&(q=t.RGBA16I),I===t.INT&&(q=t.RGBA32I)),g===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),g===t.RGBA){const ye=j?el:it.getTransfer(G);I===t.FLOAT&&(q=t.RGBA32F),I===t.HALF_FLOAT&&(q=t.RGBA16F),I===t.UNSIGNED_BYTE&&(q=ye===dt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(T,g){let I;return T?g===null||g===Ns||g===Io?I=t.DEPTH24_STENCIL8:g===Zn?I=t.DEPTH32F_STENCIL8:g===Lo&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ns||g===Io?I=t.DEPTH_COMPONENT24:g===Zn?I=t.DEPTH_COMPONENT32F:g===Lo&&(I=t.DEPTH_COMPONENT16),I}function L(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==Kn?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function P(T){const g=T.target;g.removeEventListener("dispose",P),U(g),g.isVideoTexture&&u.delete(g)}function A(T){const g=T.target;g.removeEventListener("dispose",A),b(g)}function U(T){const g=i.get(T);if(g.__webglInit===void 0)return;const I=T.source,G=h.get(I);if(G){const j=G[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(T),Object.keys(G).length===0&&h.delete(I)}i.remove(T)}function E(T){const g=i.get(T);t.deleteTexture(g.__webglTexture);const I=T.source,G=h.get(I);delete G[g.__cacheKey],o.memory.textures--}function b(T){const g=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(g.__webglFramebuffer[G]))for(let j=0;j<g.__webglFramebuffer[G].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[G][j]);else t.deleteFramebuffer(g.__webglFramebuffer[G]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[G])}else{if(Array.isArray(g.__webglFramebuffer))for(let G=0;G<g.__webglFramebuffer.length;G++)t.deleteFramebuffer(g.__webglFramebuffer[G]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let G=0;G<g.__webglColorRenderbuffer.length;G++)g.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[G]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=T.textures;for(let G=0,j=I.length;G<j;G++){const q=i.get(I[G]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(T)}let F=0;function B(){F=0}function X(){const T=F;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),F+=1,T}function ie(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function oe(T,g){const I=i.get(T);if(T.isVideoTexture&&O(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(I,T,g);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function ee(T,g){const I=i.get(T);if(T.version>0&&I.__version!==T.version){Me(I,T,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function J(T,g){const I=i.get(T);if(T.version>0&&I.__version!==T.version){Me(I,T,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function $(T,g){const I=i.get(T);if(T.version>0&&I.__version!==T.version){V(I,T,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const pe={[Po]:t.REPEAT,[Rs]:t.CLAMP_TO_EDGE,[du]:t.MIRRORED_REPEAT},ve={[_n]:t.NEAREST,[QE]:t.NEAREST_MIPMAP_NEAREST,[sa]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[$l]:t.LINEAR_MIPMAP_NEAREST,[Cs]:t.LINEAR_MIPMAP_LINEAR},we={[i1]:t.NEVER,[c1]:t.ALWAYS,[s1]:t.LESS,[a_]:t.LEQUAL,[r1]:t.EQUAL,[l1]:t.GEQUAL,[o1]:t.GREATER,[a1]:t.NOTEQUAL};function Oe(T,g){if(g.type===Zn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Kn||g.magFilter===$l||g.magFilter===sa||g.magFilter===Cs||g.minFilter===Kn||g.minFilter===$l||g.minFilter===sa||g.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,pe[g.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,pe[g.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,pe[g.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ve[g.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_n||g.minFilter!==sa&&g.minFilter!==Cs||g.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(T,g){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",P));const G=g.source;let j=h.get(G);j===void 0&&(j={},h.set(G,j));const q=ie(g);if(q!==T.__cacheKey){j[q]===void 0&&(j[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[q].usedTimes++;const ye=j[T.__cacheKey];ye!==void 0&&(j[T.__cacheKey].usedTimes--,ye.usedTimes===0&&E(g)),T.__cacheKey=q,T.__webglTexture=j[q].texture}return I}function re(T,g,I){return Math.floor(Math.floor(T/I)/g)}function _e(T,g,I,G){const q=T.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,G,g.data);else{q.sort((ue,Re)=>ue.start-Re.start);let ye=0;for(let ue=1;ue<q.length;ue++){const Re=q[ye],De=q[ue],Ne=Re.start+Re.count,xe=re(De.start,g.width,4),Ve=re(Re.start,g.width,4);De.start<=Ne+1&&xe===Ve&&re(De.start+De.count-1,g.width,4)===xe?Re.count=Math.max(Re.count,De.start+De.count-Re.start):(++ye,q[ye]=De)}q.length=ye+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let ue=0,Re=q.length;ue<Re;ue++){const De=q[ue],Ne=Math.floor(De.start/4),xe=Math.ceil(De.count/4),Ve=Ne%g.width,z=Math.floor(Ne/g.width),be=xe,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Ve,z,be,de,I,G,g.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function Me(T,g,I){let G=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(G=t.TEXTURE_3D);const j=je(T,g),q=g.source;n.bindTexture(G,T.__webglTexture,t.TEXTURE0+I);const ye=i.get(q);if(q.version!==ye.__version||j===!0){n.activeTexture(t.TEXTURE0+I);const fe=it.getPrimaries(it.workingColorSpace),Ee=g.colorSpace===Wi?null:it.getPrimaries(g.colorSpace),Ae=g.colorSpace===Wi||fe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ue=x(g.image,!1,s.maxTextureSize);ue=k(g,ue);const Re=r.convert(g.format,g.colorSpace),De=r.convert(g.type);let Ne=y(g.internalFormat,Re,De,g.colorSpace,g.isVideoTexture);Oe(G,g);let xe;const Ve=g.mipmaps,z=g.isVideoTexture!==!0,be=ye.__version===void 0||j===!0,de=q.dataReady,Ie=L(g,ue);if(g.isDepthTexture)Ne=v(g.format===No,g.type),be&&(z?n.texStorage2D(t.TEXTURE_2D,1,Ne,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Re,De,null));else if(g.isDataTexture)if(Ve.length>0){z&&be&&n.texStorage2D(t.TEXTURE_2D,Ie,Ne,Ve[0].width,Ve[0].height);for(let me=0,ce=Ve.length;me<ce;me++)xe=Ve[me],z?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,De,xe.data):n.texImage2D(t.TEXTURE_2D,me,Ne,xe.width,xe.height,0,Re,De,xe.data);g.generateMipmaps=!1}else z?(be&&n.texStorage2D(t.TEXTURE_2D,Ie,Ne,ue.width,ue.height),de&&_e(g,ue,Re,De)):n.texImage2D(t.TEXTURE_2D,0,Ne,ue.width,ue.height,0,Re,De,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){z&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Ne,Ve[0].width,Ve[0].height,ue.depth);for(let me=0,ce=Ve.length;me<ce;me++)if(xe=Ve[me],g.format!==On)if(Re!==null)if(z){if(de)if(g.layerUpdates.size>0){const Ue=xp(xe.width,xe.height,g.format,g.type);for(const Xe of g.layerUpdates){const St=xe.data.subarray(Xe*Ue/xe.data.BYTES_PER_ELEMENT,(Xe+1)*Ue/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,Xe,xe.width,xe.height,1,Re,St)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,ue.depth,Re,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,Ne,xe.width,xe.height,ue.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,ue.depth,Re,De,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,Ne,xe.width,xe.height,ue.depth,0,Re,De,xe.data)}else{z&&be&&n.texStorage2D(t.TEXTURE_2D,Ie,Ne,Ve[0].width,Ve[0].height);for(let me=0,ce=Ve.length;me<ce;me++)xe=Ve[me],g.format!==On?Re!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,me,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,De,xe.data):n.texImage2D(t.TEXTURE_2D,me,Ne,xe.width,xe.height,0,Re,De,xe.data)}else if(g.isDataArrayTexture)if(z){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Ne,ue.width,ue.height,ue.depth),de)if(g.layerUpdates.size>0){const me=xp(ue.width,ue.height,g.format,g.type);for(const ce of g.layerUpdates){const Ue=ue.data.subarray(ce*me/ue.data.BYTES_PER_ELEMENT,(ce+1)*me/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Re,De,Ue)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,De,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,Re,De,ue.data);else if(g.isData3DTexture)z?(be&&n.texStorage3D(t.TEXTURE_3D,Ie,Ne,ue.width,ue.height,ue.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,De,ue.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,Re,De,ue.data);else if(g.isFramebufferTexture){if(be)if(z)n.texStorage2D(t.TEXTURE_2D,Ie,Ne,ue.width,ue.height);else{let me=ue.width,ce=ue.height;for(let Ue=0;Ue<Ie;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,Ne,me,ce,0,Re,De,null),me>>=1,ce>>=1}}else if(Ve.length>0){if(z&&be){const me=he(Ve[0]);n.texStorage2D(t.TEXTURE_2D,Ie,Ne,me.width,me.height)}for(let me=0,ce=Ve.length;me<ce;me++)xe=Ve[me],z?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Re,De,xe):n.texImage2D(t.TEXTURE_2D,me,Ne,Re,De,xe);g.generateMipmaps=!1}else if(z){if(be){const me=he(ue);n.texStorage2D(t.TEXTURE_2D,Ie,Ne,me.width,me.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,De,ue)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Re,De,ue);m(g)&&d(G),ye.__version=q.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function V(T,g,I){if(g.image.length!==6)return;const G=je(T,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+I);const q=i.get(j);if(j.version!==q.__version||G===!0){n.activeTexture(t.TEXTURE0+I);const ye=it.getPrimaries(it.workingColorSpace),fe=g.colorSpace===Wi?null:it.getPrimaries(g.colorSpace),Ee=g.colorSpace===Wi||ye===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!Ae&&!ue?Re[ce]=x(g.image[ce],!0,s.maxCubemapSize):Re[ce]=ue?g.image[ce].image:g.image[ce],Re[ce]=k(g,Re[ce]);const De=Re[0],Ne=r.convert(g.format,g.colorSpace),xe=r.convert(g.type),Ve=y(g.internalFormat,Ne,xe,g.colorSpace),z=g.isVideoTexture!==!0,be=q.__version===void 0||G===!0,de=j.dataReady;let Ie=L(g,De);Oe(t.TEXTURE_CUBE_MAP,g);let me;if(Ae){z&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Ve,De.width,De.height);for(let ce=0;ce<6;ce++){me=Re[ce].mipmaps;for(let Ue=0;Ue<me.length;Ue++){const Xe=me[Ue];g.format!==On?Ne!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Xe.width,Xe.height,Ne,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,Ve,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,Xe.width,Xe.height,Ne,xe,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,Ve,Xe.width,Xe.height,0,Ne,xe,Xe.data)}}}else{if(me=g.mipmaps,z&&be){me.length>0&&Ie++;const ce=he(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,Ve,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,Ne,xe,Re[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,Re[ce].width,Re[ce].height,0,Ne,xe,Re[ce].data);for(let Ue=0;Ue<me.length;Ue++){const St=me[Ue].image[ce].image;z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,St.width,St.height,Ne,xe,St.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,Ve,St.width,St.height,0,Ne,xe,St.data)}}else{z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ne,xe,Re[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,Ne,xe,Re[ce]);for(let Ue=0;Ue<me.length;Ue++){const Xe=me[Ue];z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,Ne,xe,Xe.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,Ve,Ne,xe,Xe.image[ce])}}}m(g)&&d(t.TEXTURE_CUBE_MAP),q.__version=j.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function se(T,g,I,G,j,q){const ye=r.convert(I.format,I.colorSpace),fe=r.convert(I.type),Ee=y(I.internalFormat,ye,fe,I.colorSpace),Ae=i.get(g),ue=i.get(I);if(ue.__renderTarget=g,!Ae.__hasExternalTextures){const Re=Math.max(1,g.width>>q),De=Math.max(1,g.height>>q);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,q,Ee,Re,De,g.depth,0,ye,fe,null):n.texImage2D(j,q,Ee,Re,De,0,ye,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,j,ue.__webglTexture,0,w(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,j,ue.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(T,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,T),g.depthBuffer){const G=g.depthTexture,j=G&&G.isDepthTexture?G.type:null,q=v(g.stencilBuffer,j),ye=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=w(g);C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,q,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,T)}else{const G=g.textures;for(let j=0;j<G.length;j++){const q=G[j],ye=r.convert(q.format,q.colorSpace),fe=r.convert(q.type),Ee=y(q.internalFormat,ye,fe,q.colorSpace),Ae=w(g);I&&C(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Ee,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Ee,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(g.depthTexture);G.__renderTarget=g,(!G.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),oe(g.depthTexture,0);const j=G.__webglTexture,q=w(g);if(g.depthTexture.format===Do)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(g.depthTexture.format===No)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Be(T){const g=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),G){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,G.removeEventListener("dispose",j)};G.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=G}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const G=T.texture.mipmaps;G&&G.length>0?ae(g.__webglFramebuffer[0],T):ae(g.__webglFramebuffer,T)}else if(I){g.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[G]),g.__webglDepthbuffer[G]===void 0)g.__webglDepthbuffer[G]=t.createRenderbuffer(),le(g.__webglDepthbuffer[G],T,!1);else{const j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,q)}}else{const G=T.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),le(g.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(T,g,I){const G=i.get(T);g!==void 0&&se(G.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Be(T)}function N(T){const g=T.texture,I=i.get(T),G=i.get(g);T.addEventListener("dispose",A);const j=T.textures,q=T.isWebGLCubeRenderTarget===!0,ye=j.length>1;if(ye||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=g.version,o.memory.textures++),q){I.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<g.mipmaps.length;Ee++)I.__webglFramebuffer[fe][Ee]=t.createFramebuffer()}else I.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let fe=0;fe<g.mipmaps.length;fe++)I.__webglFramebuffer[fe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ye)for(let fe=0,Ee=j.length;fe<Ee;fe++){const Ae=i.get(j[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&C(T)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const Ee=j[fe];I.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[fe]);const Ae=r.convert(Ee.format,Ee.colorSpace),ue=r.convert(Ee.type),Re=y(Ee.internalFormat,Ae,ue,Ee.colorSpace,T.isXRRenderTarget===!0),De=w(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Re,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,I.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),le(I.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,g);for(let fe=0;fe<6;fe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)se(I.__webglFramebuffer[fe][Ee],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else se(I.__webglFramebuffer[fe],T,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(g)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let fe=0,Ee=j.length;fe<Ee;fe++){const Ae=j[fe],ue=i.get(Ae);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Oe(t.TEXTURE_2D,Ae),se(I.__webglFramebuffer,T,Ae,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Ae)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,G.__webglTexture),Oe(fe,g),g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)se(I.__webglFramebuffer[Ee],T,g,t.COLOR_ATTACHMENT0,fe,Ee);else se(I.__webglFramebuffer,T,g,t.COLOR_ATTACHMENT0,fe,0);m(g)&&d(fe),n.unbindTexture()}T.depthBuffer&&Be(T)}function M(T){const g=T.textures;for(let I=0,G=g.length;I<G;I++){const j=g[I];if(m(j)){const q=S(T),ye=i.get(j).__webglTexture;n.bindTexture(q,ye),d(q),n.unbindTexture()}}}const ne=[],Z=[];function K(T){if(T.samples>0){if(C(T)===!1){const g=T.textures,I=T.width,G=T.height;let j=t.COLOR_BUFFER_BIT;const q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(T),fe=g.length>1;if(fe)for(let Ae=0;Ae<g.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ee=T.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ae=0;Ae<g.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ue=i.get(g[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,I,G,0,0,I,G,j,t.NEAREST),l===!0&&(ne.length=0,Z.length=0,ne.push(t.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ne.push(q),Z.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<g.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Ae]);const ue=i.get(g[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function w(T){return Math.min(s.maxSamples,T.samples)}function C(T){const g=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(T){const g=o.render.frame;u.get(T)!==g&&(u.set(T,g),T.update())}function k(T,g){const I=T.colorSpace,G=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==wr&&I!==Wi&&(it.getTransfer(I)===dt?(G!==On||j!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function he(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=oe,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=D,this.setupRenderTarget=N,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=C}function CC(t,e){function n(i,s=Wi){let r;const o=it.getTransfer(s);if(i===ti)return t.UNSIGNED_BYTE;if(i===Cf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return t.BYTE;if(i===t_)return t.SHORT;if(i===Lo)return t.UNSIGNED_SHORT;if(i===Rf)return t.INT;if(i===Ns)return t.UNSIGNED_INT;if(i===Zn)return t.FLOAT;if(i===Xo)return t.HALF_FLOAT;if(i===i_)return t.ALPHA;if(i===s_)return t.RGB;if(i===On)return t.RGBA;if(i===Do)return t.DEPTH_COMPONENT;if(i===No)return t.DEPTH_STENCIL;if(i===Lf)return t.RED;if(i===If)return t.RED_INTEGER;if(i===r_)return t.RG;if(i===Df)return t.RG_INTEGER;if(i===Nf)return t.RGBA_INTEGER;if(i===Ua||i===Fa||i===Oa||i===Ba)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pu||i===mu||i===gu||i===_u)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vu||i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vu||i===xu)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Su||i===Mu||i===Eu||i===bu||i===Tu||i===wu||i===Au||i===Ru||i===Cu||i===Pu||i===Lu||i===Iu||i===Du||i===Nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Su)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Au)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ru)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Iu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Du)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nu)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Uu||i===Fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ka)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===o_||i===Ou||i===Bu||i===ku)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Io?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LC=`
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

}`;class IC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new Jt,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qi({vertexShader:PC,fragmentShader:LC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Dt(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DC extends Nr{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new IC,m=n.getContextAttributes();let d=null,S=null;const y=[],v=[],L=new Pe;let P=null;const A=new an;A.viewport=new mt;const U=new an;U.viewport=new mt;const E=[A,U],b=new Jb;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let _e=y[re];return _e===void 0&&(_e=new pc,y[re]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(re){let _e=y[re];return _e===void 0&&(_e=new pc,y[re]=_e),_e.getGripSpace()},this.getHand=function(re){let _e=y[re];return _e===void 0&&(_e=new pc,y[re]=_e),_e.getHandSpace()};function X(re){const _e=v.indexOf(re.inputSource);if(_e===-1)return;const Me=y[_e];Me!==void 0&&(Me.update(re.inputSource,re.frame,c||o),Me.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",oe);for(let re=0;re<y.length;re++){const _e=v[re];_e!==null&&(v[re]=null,y[re].disconnect(_e))}F=null,B=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,S=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){r=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(re){if(s=re,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,V=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=m.stencil?No:Do,V=m.stencil?Io:Ns);const le={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:r};f=new XRWebGLBinding(s,n),h=f.createProjectionLayer(le),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Us(h.textureWidth,h.textureHeight,{format:On,type:ti,depthTexture:new v_(h.textureWidth,h.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,Me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Us(p.framebufferWidth,p.framebufferHeight,{format:On,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(re){for(let _e=0;_e<re.removed.length;_e++){const Me=re.removed[_e],V=v.indexOf(Me);V>=0&&(v[V]=null,y[V].disconnect(Me))}for(let _e=0;_e<re.added.length;_e++){const Me=re.added[_e];let V=v.indexOf(Me);if(V===-1){for(let le=0;le<y.length;le++)if(le>=v.length){v.push(Me),V=le;break}else if(v[le]===null){v[le]=Me,V=le;break}if(V===-1)break}const se=y[V];se&&se.connect(Me)}}const ee=new H,J=new H;function $(re,_e,Me){ee.setFromMatrixPosition(_e.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const V=ee.distanceTo(J),se=_e.projectionMatrix.elements,le=Me.projectionMatrix.elements,ae=se[14]/(se[10]-1),Be=se[14]/(se[10]+1),D=(se[9]+1)/se[5],N=(se[9]-1)/se[5],M=(se[8]-1)/se[0],ne=(le[8]+1)/le[0],Z=ae*M,K=ae*ne,w=V/(-M+ne),C=w*-M;if(_e.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(C),re.translateZ(w),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const O=ae+w,k=Be+w,he=Z-C,T=K+(V-C),g=D*Be/k*O,I=N*Be/k*O;re.projectionMatrix.makePerspective(he,T,g,I,O,k),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,_e){_e===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(_e.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(s===null)return;let _e=re.near,Me=re.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),b.near=U.near=A.near=_e,b.far=U.far=A.far=Me,(F!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,B=b.far),A.layers.mask=re.layers.mask|2,U.layers.mask=re.layers.mask|4,b.layers.mask=A.layers.mask|U.layers.mask;const V=re.parent,se=b.cameras;pe(b,V);for(let le=0;le<se.length;le++)pe(se[le],V);se.length===2?$(b,A,U):b.projectionMatrix.copy(A.projectionMatrix),ve(re,b,V)};function ve(re,_e,Me){Me===null?re.matrix.copy(_e.matrixWorld):(re.matrix.copy(Me.matrixWorld),re.matrix.invert(),re.matrix.multiply(_e.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ar*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(re){l=re,h!==null&&(h.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let we=null;function Oe(re,_e){if(u=_e.getViewerPose(c||o),_=_e,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let V=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,V=!0);for(let ae=0;ae<Me.length;ae++){const Be=Me[ae];let D=null;if(p!==null)D=p.getViewport(Be);else{const M=f.getViewSubImage(h,Be);D=M.viewport,ae===0&&(e.setRenderTargetTextures(S,M.colorTexture,M.depthStencilTexture),e.setRenderTarget(S))}let N=E[ae];N===void 0&&(N=new an,N.layers.enable(ae),N.viewport=new mt,E[ae]=N),N.matrix.fromArray(Be.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Be.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(D.x,D.y,D.width,D.height),ae===0&&(b.matrix.copy(N.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),V===!0&&b.cameras.push(N)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(Me[0]);ae&&ae.isValid&&ae.texture&&x.init(e,ae,s.renderState)}}for(let Me=0;Me<y.length;Me++){const V=v[Me],se=y[Me];V!==null&&se!==void 0&&se.update(V,_e,c||o)}we&&we(re,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const je=new P_;je.setAnimationLoop(Oe),this.setAnimationLoop=function(re){we=re},this.dispose=function(){}}}const xs=new Rn,NC=new _t;function UC(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,p_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,S,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(NC.makeRotationFromEuler(xs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=y*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FC(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;i.uniformBlockBinding(S,v)}function c(S,y){let v=s[S.id];v===void 0&&(_(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(S,L);const P=e.render.frame;r[S.id]!==P&&(h(S),r[S.id]=P)}function u(S){const y=f();S.__bindingPointIndex=y;const v=t.createBuffer(),L=S.__size,P=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,L,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=s[S.id],v=S.uniforms,L=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let P=0,A=v.length;P<A;P++){const U=Array.isArray(v[P])?v[P]:[v[P]];for(let E=0,b=U.length;E<b;E++){const F=U[E];if(p(F,P,E,L)===!0){const B=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let oe=0;oe<X.length;oe++){const ee=X[oe],J=x(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,B+ie,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,ie),ie+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,y,v,L){const P=S.value,A=y+"_"+v;if(L[A]===void 0)return typeof P=="number"||typeof P=="boolean"?L[A]=P:L[A]=P.clone(),!0;{const U=L[A];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return L[A]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function _(S){const y=S.uniforms;let v=0;const L=16;for(let A=0,U=y.length;A<U;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let b=0,F=E.length;b<F;b++){const B=E[b],X=Array.isArray(B.value)?B.value:[B.value];for(let ie=0,oe=X.length;ie<oe;ie++){const ee=X[ie],J=x(ee),$=v%L,pe=$%J.boundary,ve=$+pe;v+=pe,ve!==0&&L-ve<J.storage&&(v+=L-ve),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=J.storage}}}const P=v%L;return P>0&&(v+=L-P),S.__size=v,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),t.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class OC{constructor(e={}){const{canvas:n=w1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const S=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=bn;let P=0,A=0,U=null,E=-1,b=null;const F=new mt,B=new mt;let X=null;const ie=new Ze(0);let oe=0,ee=n.width,J=n.height,$=1,pe=null,ve=null;const we=new mt(0,0,ee,J),Oe=new mt(0,0,ee,J);let je=!1;const re=new Bf;let _e=!1,Me=!1;const V=new _t,se=new _t,le=new H,ae=new mt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function N(){return U===null?$:1}let M=i;function ne(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Af}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ce,!1),M===null){const W="webgl2";if(M=ne(W,R),M===null)throw ne(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Z,K,w,C,O,k,he,T,g,I,G,j,q,ye,fe,Ee,Ae,ue,Re,De,Ne,xe,Ve,z;function be(){Z=new $A(M),Z.init(),xe=new CC(M,Z),K=new zA(M,Z,e,xe),w=new AC(M,Z),K.reverseDepthBuffer&&h&&w.buffers.depth.setReversed(!0),C=new KA(M),O=new pC,k=new RC(M,Z,w,O,K,xe,C),he=new VA(v),T=new YA(v),g=new nT(M),Ve=new BA(M,g),I=new qA(M,g,C,Ve),G=new JA(M,I,g,C),Re=new ZA(M,K,k),Ee=new HA(O),j=new dC(v,he,T,Z,K,Ve,Ee),q=new UC(v,O),ye=new gC,fe=new MC(Z),ue=new OA(v,he,T,w,G,p,l),Ae=new TC(v,G,K),z=new FC(M,C,K,w),De=new kA(M,Z,C),Ne=new jA(M,Z,C),C.programs=j.programs,v.capabilities=K,v.extensions=Z,v.properties=O,v.renderLists=ye,v.shadowMap=Ae,v.state=w,v.info=C}be();const de=new DC(v,M);this.xr=de,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const R=Z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(ee,J,!1))},this.getSize=function(R){return R.set(ee,J)},this.setSize=function(R,W,Q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=R,J=W,n.width=Math.floor(R*$),n.height=Math.floor(W*$),Q===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ee*$,J*$).floor()},this.setDrawingBufferSize=function(R,W,Q){ee=R,J=W,$=Q,n.width=Math.floor(R*Q),n.height=Math.floor(W*Q),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(we)},this.setViewport=function(R,W,Q,te){R.isVector4?we.set(R.x,R.y,R.z,R.w):we.set(R,W,Q,te),w.viewport(F.copy(we).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(Oe)},this.setScissor=function(R,W,Q,te){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,W,Q,te),w.scissor(B.copy(Oe).multiplyScalar($).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){w.setScissorTest(je=R)},this.setOpaqueSort=function(R){pe=R},this.setTransparentSort=function(R){ve=R},this.getClearColor=function(R){return R.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,Q=!0){let te=0;if(R){let Y=!1;if(U!==null){const ge=U.texture.format;Y=ge===Nf||ge===Df||ge===If}if(Y){const ge=U.texture.type,Te=ge===ti||ge===Ns||ge===Lo||ge===Io||ge===Cf||ge===Pf,Fe=ue.getClearColor(),Le=ue.getClearAlpha(),Ge=Fe.r,We=Fe.g,ke=Fe.b;Te?(_[0]=Ge,_[1]=We,_[2]=ke,_[3]=Le,M.clearBufferuiv(M.COLOR,0,_)):(x[0]=Ge,x[1]=We,x[2]=ke,x[3]=Le,M.clearBufferiv(M.COLOR,0,x))}else te|=M.COLOR_BUFFER_BIT}W&&(te|=M.DEPTH_BUFFER_BIT),Q&&(te|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),ye.dispose(),fe.dispose(),O.dispose(),he.dispose(),T.dispose(),G.dispose(),Ve.dispose(),z.dispose(),j.dispose(),de.dispose(),de.removeEventListener("sessionstart",Yf),de.removeEventListener("sessionend",$f),ls.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=C.autoReset,W=Ae.enabled,Q=Ae.autoUpdate,te=Ae.needsUpdate,Y=Ae.type;be(),C.autoReset=R,Ae.enabled=W,Ae.autoUpdate=Q,Ae.needsUpdate=te,Ae.type=Y}function ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ue(R){const W=R.target;W.removeEventListener("dispose",Ue),Xe(W)}function Xe(R){St(R),O.remove(R)}function St(R){const W=O.get(R).programs;W!==void 0&&(W.forEach(function(Q){j.releaseProgram(Q)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,Q,te,Y,ge){W===null&&(W=Be);const Te=Y.isMesh&&Y.matrixWorld.determinant()<0,Fe=B_(R,W,Q,te,Y);w.setMaterial(te,Te);let Le=Q.index,Ge=1;if(te.wireframe===!0){if(Le=I.getWireframeAttribute(Q),Le===void 0)return;Ge=2}const We=Q.drawRange,ke=Q.attributes.position;let et=We.start*Ge,ht=(We.start+We.count)*Ge;ge!==null&&(et=Math.max(et,ge.start*Ge),ht=Math.min(ht,(ge.start+ge.count)*Ge)),Le!==null?(et=Math.max(et,0),ht=Math.min(ht,Le.count)):ke!=null&&(et=Math.max(et,0),ht=Math.min(ht,ke.count));const bt=ht-et;if(bt<0||bt===1/0)return;Ve.setup(Y,te,Fe,Q,Le);let At,nt=De;if(Le!==null&&(At=g.get(Le),nt=Ne,nt.setIndex(At)),Y.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*N()),nt.setMode(M.LINES)):nt.setMode(M.TRIANGLES);else if(Y.isLine){let ze=te.linewidth;ze===void 0&&(ze=1),w.setLineWidth(ze*N()),Y.isLineSegments?nt.setMode(M.LINES):Y.isLineLoop?nt.setMode(M.LINE_LOOP):nt.setMode(M.LINE_STRIP)}else Y.isPoints?nt.setMode(M.POINTS):Y.isSprite&&nt.setMode(M.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))nt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ze=Y._multiDrawStarts,zt=Y._multiDrawCounts,at=Y._multiDrawCount,Pn=Le?g.get(Le).bytesPerElement:1,Vs=O.get(te).currentProgram.getUniforms();for(let fn=0;fn<at;fn++)Vs.setValue(M,"_gl_DrawID",fn),nt.render(ze[fn]/Pn,zt[fn])}else if(Y.isInstancedMesh)nt.renderInstances(et,bt,Y.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,zt=Math.min(Q.instanceCount,ze);nt.renderInstances(et,bt,zt)}else nt.render(et,bt)};function ft(R,W,Q){R.transparent===!0&&R.side===vi&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,Ko(R,W,Q),R.side=Ji,R.needsUpdate=!0,Ko(R,W,Q),R.side=vi):Ko(R,W,Q)}this.compile=function(R,W,Q=null){Q===null&&(Q=R),d=fe.get(Q),d.init(W),y.push(d),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),R!==Q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights();const te=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ge=Y.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Fe=ge[Te];ft(Fe,Q,Y),te.add(Fe)}else ft(ge,Q,Y),te.add(ge)}),d=y.pop(),te},this.compileAsync=function(R,W,Q=null){const te=this.compile(R,W,Q);return new Promise(Y=>{function ge(){if(te.forEach(function(Te){O.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){Y(R);return}setTimeout(ge,10)}Z.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Cn=null;function ii(R){Cn&&Cn(R)}function Yf(){ls.stop()}function $f(){ls.start()}const ls=new P_;ls.setAnimationLoop(ii),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(R){Cn=R,de.setAnimationLoop(R),R===null?ls.stop():ls.start()},de.addEventListener("sessionstart",Yf),de.addEventListener("sessionend",$f),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(W),W=de.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,W,U),d=fe.get(R,y.length),d.init(W),y.push(d),se.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),re.setFromProjectionMatrix(se),Me=this.localClippingEnabled,_e=Ee.init(this.clippingPlanes,Me),m=ye.get(R,S.length),m.init(),S.push(m),de.enabled===!0&&de.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&Tl(ge,W,-1/0,v.sortObjects)}Tl(R,W,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pe,ve),D=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,D&&ue.addToRenderList(m,R),this.info.render.frame++,_e===!0&&Ee.beginShadows();const Q=d.state.shadowsArray;Ae.render(Q,R,W),_e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,Y=m.transmissive;if(d.setupLights(),W.isArrayCamera){const ge=W.cameras;if(Y.length>0)for(let Te=0,Fe=ge.length;Te<Fe;Te++){const Le=ge[Te];jf(te,Y,R,Le)}D&&ue.render(R);for(let Te=0,Fe=ge.length;Te<Fe;Te++){const Le=ge[Te];qf(m,R,Le,Le.viewport)}}else Y.length>0&&jf(te,Y,R,W),D&&ue.render(R),qf(m,R,W);U!==null&&A===0&&(k.updateMultisampleRenderTarget(U),k.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(v,R,W),Ve.resetDefaultState(),E=-1,b=null,y.pop(),y.length>0?(d=y[y.length-1],_e===!0&&Ee.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Tl(R,W,Q,te){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){te&&ae.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const Te=G.update(R),Fe=R.material;Fe.visible&&m.push(R,Te,Fe,Q,ae.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Te=G.update(R),Fe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ae.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),ae.copy(Te.boundingSphere.center)),ae.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){const Le=Te.groups;for(let Ge=0,We=Le.length;Ge<We;Ge++){const ke=Le[Ge],et=Fe[ke.materialIndex];et&&et.visible&&m.push(R,Te,et,Q,ae.z,ke)}}else Fe.visible&&m.push(R,Te,Fe,Q,ae.z,null)}}const ge=R.children;for(let Te=0,Fe=ge.length;Te<Fe;Te++)Tl(ge[Te],W,Q,te)}function qf(R,W,Q,te){const Y=R.opaque,ge=R.transmissive,Te=R.transparent;d.setupLightsView(Q),_e===!0&&Ee.setGlobalState(v.clippingPlanes,Q),te&&w.viewport(F.copy(te)),Y.length>0&&jo(Y,W,Q),ge.length>0&&jo(ge,W,Q),Te.length>0&&jo(Te,W,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function jf(R,W,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[te.id]===void 0&&(d.state.transmissionRenderTarget[te.id]=new Us(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Xo:ti,minFilter:Cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ge=d.state.transmissionRenderTarget[te.id],Te=te.viewport||F;ge.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(ie),oe=v.getClearAlpha(),oe<1&&v.setClearColor(16777215,.5),v.clear(),D&&ue.render(Q);const Le=v.toneMapping;v.toneMapping=qi;const Ge=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),d.setupLightsView(te),_e===!0&&Ee.setGlobalState(v.clippingPlanes,te),jo(R,Q,te),k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge),Z.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let ke=0,et=W.length;ke<et;ke++){const ht=W[ke],bt=ht.object,At=ht.geometry,nt=ht.material,ze=ht.group;if(nt.side===vi&&bt.layers.test(te.layers)){const zt=nt.side;nt.side=ln,nt.needsUpdate=!0,Kf(bt,Q,te,At,nt,ze),nt.side=zt,nt.needsUpdate=!0,We=!0}}We===!0&&(k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge))}v.setRenderTarget(Fe),v.setClearColor(ie,oe),Ge!==void 0&&(te.viewport=Ge),v.toneMapping=Le}function jo(R,W,Q){const te=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,ge=R.length;Y<ge;Y++){const Te=R[Y],Fe=Te.object,Le=Te.geometry,Ge=Te.group;let We=Te.material;We.allowOverride===!0&&te!==null&&(We=te),Fe.layers.test(Q.layers)&&Kf(Fe,W,Q,Le,We,Ge)}}function Kf(R,W,Q,te,Y,ge){R.onBeforeRender(v,W,Q,te,Y,ge),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,W,Q,te,R,ge),Y.transparent===!0&&Y.side===vi&&Y.forceSinglePass===!1?(Y.side=ln,Y.needsUpdate=!0,v.renderBufferDirect(Q,W,te,Y,R,ge),Y.side=Ji,Y.needsUpdate=!0,v.renderBufferDirect(Q,W,te,Y,R,ge),Y.side=vi):v.renderBufferDirect(Q,W,te,Y,R,ge),R.onAfterRender(v,W,Q,te,Y,ge)}function Ko(R,W,Q){W.isScene!==!0&&(W=Be);const te=O.get(R),Y=d.state.lights,ge=d.state.shadowsArray,Te=Y.state.version,Fe=j.getParameters(R,Y.state,ge,W,Q),Le=j.getProgramCacheKey(Fe);let Ge=te.programs;te.environment=R.isMeshStandardMaterial?W.environment:null,te.fog=W.fog,te.envMap=(R.isMeshStandardMaterial?T:he).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",Ue),Ge=new Map,te.programs=Ge);let We=Ge.get(Le);if(We!==void 0){if(te.currentProgram===We&&te.lightsStateVersion===Te)return Jf(R,Fe),We}else Fe.uniforms=j.getUniforms(R),R.onBeforeCompile(Fe,v),We=j.acquireProgram(Fe,Le),Ge.set(Le,We),te.uniforms=Fe.uniforms;const ke=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=Ee.uniform),Jf(R,Fe),te.needsLights=z_(R),te.lightsStateVersion=Te,te.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),te.currentProgram=We,te.uniformsList=null,We}function Zf(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ha.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Jf(R,W){const Q=O.get(R);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function B_(R,W,Q,te,Y){W.isScene!==!0&&(W=Be),k.resetTextureUnits();const ge=W.fog,Te=te.isMeshStandardMaterial?W.environment:null,Fe=U===null?v.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:wr,Le=(te.isMeshStandardMaterial?T:he).get(te.envMap||Te),Ge=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,We=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ke=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,ht=!!Q.morphAttributes.color;let bt=qi;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(bt=v.toneMapping);const At=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,nt=At!==void 0?At.length:0,ze=O.get(te),zt=d.state.lights;if(_e===!0&&(Me===!0||R!==b)){const Qt=R===b&&te.id===E;Ee.setState(te,R,Qt)}let at=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==zt.state.version||ze.outputColorSpace!==Fe||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Le||te.fog===!0&&ze.fog!==ge||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ee.numPlanes||ze.numIntersection!==Ee.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==We||ze.morphTargets!==ke||ze.morphNormals!==et||ze.morphColors!==ht||ze.toneMapping!==bt||ze.morphTargetsCount!==nt)&&(at=!0):(at=!0,ze.__version=te.version);let Pn=ze.currentProgram;at===!0&&(Pn=Ko(te,W,Y));let Vs=!1,fn=!1,Or=!1;const Et=Pn.getUniforms(),yn=ze.uniforms;if(w.useProgram(Pn.program)&&(Vs=!0,fn=!0,Or=!0),te.id!==E&&(E=te.id,fn=!0),Vs||b!==R){w.buffers.depth.getReversed()?(V.copy(R.projectionMatrix),R1(V),C1(V),Et.setValue(M,"projectionMatrix",V)):Et.setValue(M,"projectionMatrix",R.projectionMatrix),Et.setValue(M,"viewMatrix",R.matrixWorldInverse);const on=Et.map.cameraPosition;on!==void 0&&on.setValue(M,le.setFromMatrixPosition(R.matrixWorld)),K.logarithmicDepthBuffer&&Et.setValue(M,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Et.setValue(M,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,fn=!0,Or=!0)}if(Y.isSkinnedMesh){Et.setOptional(M,Y,"bindMatrix"),Et.setOptional(M,Y,"bindMatrixInverse");const Qt=Y.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Et.setValue(M,"boneTexture",Qt.boneTexture,k))}Y.isBatchedMesh&&(Et.setOptional(M,Y,"batchingTexture"),Et.setValue(M,"batchingTexture",Y._matricesTexture,k),Et.setOptional(M,Y,"batchingIdTexture"),Et.setValue(M,"batchingIdTexture",Y._indirectTexture,k),Et.setOptional(M,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Et.setValue(M,"batchingColorTexture",Y._colorsTexture,k));const Sn=Q.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Re.update(Y,Q,Pn),(fn||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,Et.setValue(M,"receiveShadow",Y.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(yn.envMap.value=Le,yn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),fn&&(Et.setValue(M,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&k_(yn,Or),ge&&te.fog===!0&&q.refreshFogUniforms(yn,ge),q.refreshMaterialUniforms(yn,te,$,J,d.state.transmissionRenderTarget[R.id]),Ha.upload(M,Zf(ze),yn,k)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ha.upload(M,Zf(ze),yn,k),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Et.setValue(M,"center",Y.center),Et.setValue(M,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(M,"normalMatrix",Y.normalMatrix),Et.setValue(M,"modelMatrix",Y.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Qt=te.uniformsGroups;for(let on=0,wl=Qt.length;on<wl;on++){const cs=Qt[on];z.update(cs,Pn),z.bind(cs,Pn)}}return Pn}function k_(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function z_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,W,Q){const te=O.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),O.get(R.texture).__webglTexture=W,O.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const Q=O.get(R);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0};const H_=M.createFramebuffer();this.setRenderTarget=function(R,W=0,Q=0){U=R,P=W,A=Q;let te=!0,Y=null,ge=!1,Te=!1;if(R){const Le=O.get(R);if(Le.__useDefaultFramebuffer!==void 0)w.bindFramebuffer(M.FRAMEBUFFER,null),te=!1;else if(Le.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(Le.__hasExternalTextures)k.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&O.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}const Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);const We=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[W])?Y=We[W][Q]:Y=We[W],ge=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?Y=O.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[Q]:Y=We,F.copy(R.viewport),B.copy(R.scissor),X=R.scissorTest}else F.copy(we).multiplyScalar($).floor(),B.copy(Oe).multiplyScalar($).floor(),X=je;if(Q!==0&&(Y=H_),w.bindFramebuffer(M.FRAMEBUFFER,Y)&&te&&w.drawBuffers(R,Y),w.viewport(F),w.scissor(B),w.setScissorTest(X),ge){const Le=O.get(R.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,Q)}else if(Te){const Le=O.get(R.texture),Ge=W;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Le.__webglTexture,Q,Ge)}else if(R!==null&&Q!==0){const Le=O.get(R.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Le.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(R,W,Q,te,Y,ge,Te,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le){w.bindFramebuffer(M.FRAMEBUFFER,Le);try{const Ge=R.textures[Fe],We=Ge.format,ke=Ge.type;if(!K.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-te&&Q>=0&&Q<=R.height-Y&&(R.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Fe),M.readPixels(W,Q,te,Y,xe.convert(We),xe.convert(ke),ge))}finally{const Ge=U!==null?O.get(U).__webglFramebuffer:null;w.bindFramebuffer(M.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,W,Q,te,Y,ge,Te,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Le=Le[Te]),Le)if(W>=0&&W<=R.width-te&&Q>=0&&Q<=R.height-Y){w.bindFramebuffer(M.FRAMEBUFFER,Le);const Ge=R.textures[Fe],We=Ge.format,ke=Ge.type;if(!K.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,et),M.bufferData(M.PIXEL_PACK_BUFFER,ge.byteLength,M.STREAM_READ),R.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+Fe),M.readPixels(W,Q,te,Y,xe.convert(We),xe.convert(ke),0);const ht=U!==null?O.get(U).__webglFramebuffer:null;w.bindFramebuffer(M.FRAMEBUFFER,ht);const bt=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await A1(M,bt,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,et),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,ge),M.deleteBuffer(et),M.deleteSync(bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,Q=0){const te=Math.pow(2,-Q),Y=Math.floor(R.image.width*te),ge=Math.floor(R.image.height*te),Te=W!==null?W.x:0,Fe=W!==null?W.y:0;k.setTexture2D(R,0),M.copyTexSubImage2D(M.TEXTURE_2D,Q,0,0,Te,Fe,Y,ge),w.unbindTexture()};const V_=M.createFramebuffer(),G_=M.createFramebuffer();this.copyTextureToTexture=function(R,W,Q=null,te=null,Y=0,ge=null){ge===null&&(Y!==0?(gr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=Y,Y=0):ge=0);let Te,Fe,Le,Ge,We,ke,et,ht,bt;const At=R.isCompressedTexture?R.mipmaps[ge]:R.image;if(Q!==null)Te=Q.max.x-Q.min.x,Fe=Q.max.y-Q.min.y,Le=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,We=Q.min.y,ke=Q.isBox3?Q.min.z:0;else{const Sn=Math.pow(2,-Y);Te=Math.floor(At.width*Sn),Fe=Math.floor(At.height*Sn),R.isDataArrayTexture?Le=At.depth:R.isData3DTexture?Le=Math.floor(At.depth*Sn):Le=1,Ge=0,We=0,ke=0}te!==null?(et=te.x,ht=te.y,bt=te.z):(et=0,ht=0,bt=0);const nt=xe.convert(W.format),ze=xe.convert(W.type);let zt;W.isData3DTexture?(k.setTexture3D(W,0),zt=M.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(k.setTexture2DArray(W,0),zt=M.TEXTURE_2D_ARRAY):(k.setTexture2D(W,0),zt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,W.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,W.unpackAlignment);const at=M.getParameter(M.UNPACK_ROW_LENGTH),Pn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Vs=M.getParameter(M.UNPACK_SKIP_PIXELS),fn=M.getParameter(M.UNPACK_SKIP_ROWS),Or=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,At.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,At.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Ge),M.pixelStorei(M.UNPACK_SKIP_ROWS,We),M.pixelStorei(M.UNPACK_SKIP_IMAGES,ke);const Et=R.isDataArrayTexture||R.isData3DTexture,yn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Sn=O.get(R),Qt=O.get(W),on=O.get(Sn.__renderTarget),wl=O.get(Qt.__renderTarget);w.bindFramebuffer(M.READ_FRAMEBUFFER,on.__webglFramebuffer),w.bindFramebuffer(M.DRAW_FRAMEBUFFER,wl.__webglFramebuffer);for(let cs=0;cs<Le;cs++)Et&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,O.get(R).__webglTexture,Y,ke+cs),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,O.get(W).__webglTexture,ge,bt+cs)),M.blitFramebuffer(Ge,We,Te,Fe,et,ht,Te,Fe,M.DEPTH_BUFFER_BIT,M.NEAREST);w.bindFramebuffer(M.READ_FRAMEBUFFER,null),w.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||O.has(R)){const Sn=O.get(R),Qt=O.get(W);w.bindFramebuffer(M.READ_FRAMEBUFFER,V_),w.bindFramebuffer(M.DRAW_FRAMEBUFFER,G_);for(let on=0;on<Le;on++)Et?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Sn.__webglTexture,Y,ke+on):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Sn.__webglTexture,Y),yn?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Qt.__webglTexture,ge,bt+on):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Qt.__webglTexture,ge),Y!==0?M.blitFramebuffer(Ge,We,Te,Fe,et,ht,Te,Fe,M.COLOR_BUFFER_BIT,M.NEAREST):yn?M.copyTexSubImage3D(zt,ge,et,ht,bt+on,Ge,We,Te,Fe):M.copyTexSubImage2D(zt,ge,et,ht,Ge,We,Te,Fe);w.bindFramebuffer(M.READ_FRAMEBUFFER,null),w.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?M.texSubImage3D(zt,ge,et,ht,bt,Te,Fe,Le,nt,ze,At.data):W.isCompressedArrayTexture?M.compressedTexSubImage3D(zt,ge,et,ht,bt,Te,Fe,Le,nt,At.data):M.texSubImage3D(zt,ge,et,ht,bt,Te,Fe,Le,nt,ze,At):R.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,ge,et,ht,Te,Fe,nt,ze,At.data):R.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,ge,et,ht,At.width,At.height,nt,At.data):M.texSubImage2D(M.TEXTURE_2D,ge,et,ht,Te,Fe,nt,ze,At);M.pixelStorei(M.UNPACK_ROW_LENGTH,at),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Pn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Vs),M.pixelStorei(M.UNPACK_SKIP_ROWS,fn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Or),ge===0&&W.generateMipmaps&&M.generateMipmap(zt),w.unbindTexture()},this.copyTextureToTexture3D=function(R,W,Q=null,te=null,Y=0){return gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,Q,te,Y)},this.initRenderTarget=function(R){O.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){P=0,A=0,U=null,w.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}class BC{directions=[0,0,0,0];moveDir=new Pe(0,0);_mouseXSpeed;_mouseYSpeed;_isMouse=!1;_isMouseMovingTimer=setTimeout(()=>{});_mousePos=new Pe(window.innerWidth/2,window.innerHeight/2);_mouseDir=new Pe(0,0);constructor(e=11e3,n=9500){this._mouseXSpeed=e,this._mouseYSpeed=n}handleMovementVector=()=>{this.moveDir.x=this.directions[3]-this.directions[2],this.moveDir.y=this.directions[1]-this.directions[0]};handleKeyDown=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=1;break;case"ArrowDown":this.directions[1]=1;break;case"ArrowLeft":this.directions[2]=1;break;case"ArrowRight":this.directions[3]=1;break}this.handleMovementVector()}};handleKeyUp=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=0;break;case"ArrowDown":this.directions[1]=0;break;case"ArrowLeft":this.directions[2]=0;break;case"ArrowRight":this.directions[3]=0;break}this.handleMovementVector()}};handleMouseClick=e=>{this._mousePos.set(e.clientX,e.clientY)};handleStart=e=>{if(!this.isKeyboard){if(this._mouseDir.set(0,0),e.type==="mousedown"){const n=e;this._mousePos.set(n.clientX,n.clientY)}else if(e.type==="touchstart"){const n=e;this._mousePos.set(n.touches[0].clientX,n.touches[0].clientY)}this._isMouse=!0}};handleMove=e=>{let n=0,i=0;if(e.type==="mousemove"){const o=e;n=Bn.lerp(this.mousePos.x,o.clientX,.5),i=Bn.lerp(this.mousePos.y,o.clientY,.5)}else if(e.type==="touchmove"){const o=e;n=Bn.lerp(this.mousePos.x,o.touches[0].clientX,.5),i=Bn.lerp(this.mousePos.y,o.touches[0].clientY,.5)}const s=(n-this.mousePos.x)*this._mouseXSpeed/window.innerWidth/window.innerHeight,r=(i-this.mousePos.y)*this._mouseYSpeed/window.innerWidth/window.innerHeight;this._mouseDir.set(s,r),this._mousePos.set(n,i),clearTimeout(this._isMouseMovingTimer),this._isMouseMovingTimer=setTimeout(()=>{this._mouseDir.set(0,0)},50)};handleEnd=()=>{this.isKeyboard||(this._mouseDir.set(0,0),this._isMouse=!1)};start(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("click",this.handleMouseClick),window.addEventListener("mousedown",this.handleStart),window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleEnd),window.addEventListener("touchstart",this.handleStart,{passive:!1}),window.addEventListener("touchmove",this.handleMove,{passive:!1}),window.addEventListener("touchend",this.handleEnd,{passive:!1})}update(){}end(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("click",this.handleMouseClick),window.removeEventListener("mousedown",this.handleStart),window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleEnd),window.removeEventListener("touchstart",this.handleStart),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleEnd)}getMovementVectorNormalized(){return this.moveDir.normalize()}get mousePos(){return this._mousePos}get mouseDir(){return this._mouseDir}get isMouse(){return this._isMouse}get isKeyboard(){return this.directions.includes(1)}set mouseHorizontalSpeed(e){this._mouseXSpeed=e}set mouseVerticalSpeed(e){this._mouseYSpeed=e}}class kC{collidables=[];raycaster=new _p;cameraRaycaster=new _p;screenPoint=new Pe(0,0);screenWorldPos=new H(0,0,0);angle=Math.PI/2;axis=new H(0,1,0);temp=new H(0,0,0);dir=new H(0,0,0);setCollidables(e){this.collidables=e}getRaycastHit(e,n,i){return this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,this.raycaster.intersectObjects(this.collidables)}getLinecastHit(e,n,i=1,s=0){const r=this.getRaycastHit(e,n,i);return this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,this.angle).normalize().multiplyScalar(s)),this.getRaycastHit(this.temp,n,i).forEach(o=>{r.indexOf(o)===-1&&r.push(o)}),this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,-this.angle).normalize().multiplyScalar(s)),this.getRaycastHit(this.temp,n,i).forEach(o=>{r.indexOf(o)===-1&&r.push(o)}),r}raycast(e,n,i){return this.getRaycastHit(e,n,i).length===0}linecast(e,n,i,s){return this.getLinecastHit(e,n,i,s).length===0}getRaycastHitFromScreen=(e,n,i)=>{const s=n/window.innerWidth*2-1,r=-(i/window.innerHeight)*2+1;return this.screenPoint.set(s,r),this.cameraRaycaster.setFromCamera(this.screenPoint,e),this.cameraRaycaster.intersectObjects(this.collidables)};screenPointToWorld=(e,n,i)=>{const s=this.getRaycastHitFromScreen(e,n,i);if(!(!s||!s[0]))return this.screenWorldPos.set(s[0].point.x,s[0].point.y,s[0].point.z),this.screenWorldPos}}class U_{_renderer;constructor(e){this._renderer=new OC({canvas:e,antialias:!0,alpha:!0})}handleResize=()=>{this._renderer.setPixelRatio(window.devicePixelRatio||1),this._renderer.setSize(window.innerWidth,window.innerHeight)};startAnimation(e,n,i){const s=()=>{e(),this._renderer.render(n,i)};this._renderer.setAnimationLoop(s)}start(){window.addEventListener("resize",this.handleResize),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=Jg,this._renderer.setClearColor(0,0),this.handleResize()}update(){}end(){window.removeEventListener("resize",this.handleResize),this._renderer.dispose()}}let zC=class{_camera=new R_;size=5;isListenerAdded=!1;updateProjection=()=>{const e=window.innerWidth/window.innerHeight;this._camera.top=this.size/e,this._camera.bottom=-this.size/e,this._camera.right=this.size,this._camera.left=-this.size,this._camera.updateProjectionMatrix()};start(){this.updateProjection(),this._camera.position.set(0,10,50),this._camera.lookAt(0,0,0),!this.isListenerAdded&&(window.addEventListener("resize",this.updateProjection),this.isListenerAdded=!0)}update(){}end(){window.removeEventListener("resize",this.updateProjection),this.isListenerAdded=!1}get camera(){return this._camera}},HC=class{ambientLightIntensityLight=1;ambientLightIntensityDark=0;spotlightPrimaryPosLight=new H(50,50,50);spotlightPrimaryPosDark=new H(-50,50,50);spotlightPrimaryAngleLight=.1;spotlightPrimaryAngleDark=.03;spotlightSecondaryPowLight=0;spotlightSecondaryPowDark=5e3;ambientLight=new C_(13421772);spotlightPrimary=new dp(16777215);spotlightSecondary=new dp(14540253);alpha=.1;themeStore=Dr();start(){this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.shadow.intensity=.8,this.spotlightPrimary.castShadow=!0,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.shadow.intensity=.8,this.spotlightSecondary.castShadow=!0,this.themeStore.theme===Ht.Light?(this.spotlightPrimary.position.set(50,50,50),this.ambientLight.intensity=this.ambientLightIntensityLight,this.spotlightPrimary.angle=this.spotlightPrimaryAngleLight,this.spotlightSecondary.power=this.spotlightSecondaryPowLight):this.themeStore.theme===Ht.Dark&&(this.spotlightPrimary.position.set(-50,50,50),this.ambientLight.intensity=this.ambientLightIntensityDark,this.spotlightPrimary.angle=this.spotlightPrimaryAngleDark,this.spotlightSecondary.power=this.spotlightSecondaryPowDark),this.spotlightSecondary.position.set(-50,50,50),es.add(this.ambientLight,this.spotlightPrimary,this.spotlightSecondary)}update(){this.themeStore.theme==="light"?(this.ambientLight.intensity=Bn.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,this.alpha),this.spotlightPrimary.angle=Bn.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleLight,this.alpha),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosLight,this.alpha),this.spotlightSecondary.power=this.spotlightSecondaryPowLight):(this.ambientLight.intensity=Bn.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,this.alpha),this.spotlightPrimary.angle=Bn.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleDark,this.alpha),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosDark,this.alpha),this.spotlightSecondary.power=this.spotlightSecondaryPowDark)}end(){es.remove(this.ambientLight,this.spotlightPrimary,this.spotlightSecondary),this.ambientLight.dispose(),this.spotlightPrimary.dispose(),this.spotlightSecondary.dispose()}};const VC="/my-site/assets/texture-Bhl9W45K.webp";let GC=class{velocityGrounding=.5;maxForce=100;bounciness=1;forceCoe=30;dragCoe=3;mousePosYOffset=100;moveVec=new Pe(0,0);displacement=new H(0,0,0);_velocity=new H(0,0,0);velocityX=new H(0,0,0);velocityZ=new H(0,0,0);_force=new H(0,0,0);_drag=new H(0,0,0);playerRadius=1;playerGeometry=new Vf(this.playerRadius,32,32);playerTexture=new qb().load(VC);playerMaterial=new kb({color:16777215,map:this.playerTexture});player=new Dt(this.playerGeometry,this.playerMaterial);updateMoveVec(){if(gn.isKeyboard)this.moveVec=gn.getMovementVectorNormalized();else if(gn.isMouse){const e=gn.mousePos,n=Pr.screenPointToWorld(Va.camera,e.x,e.y+this.mousePosYOffset);if(n){const i=n.sub(this.player.position).normalize();i&&this.moveVec.set(i.x,i.z)}}else this.moveVec.set(0,0)}updateForce(e){if(e>this.maxForce)throw new Error("Large force may result in object tunneling in this physics engine");this._force.set(this.moveVec.x,0,this.moveVec.y).multiplyScalar(e),this._force.z*=2}updateDrag(e){if(e>this.maxForce)throw new Error("Large force may result in object tunneling in this physics engine");this._drag.copy(this._velocity).multiplyScalar(-e)}updateVelocity(e){let n=this._force.add(this._drag).multiplyScalar(e);this._velocity.length()<this.velocityGrounding&&this._force.length()===0&&(this._velocity.set(0,0,0),n.set(0,0,0)),this._velocity.add(n)}safeLinecast(e){return Pr.linecast(this.player.position,e,this.playerRadius,this.playerRadius)}checkCollision(){let e=this.safeLinecast(this._velocity)&&this.safeLinecast(this._force);e||(this.velocityX.set(this._velocity.x,0,0),this.velocityZ.set(0,0,this._velocity.z),e=this.safeLinecast(this.velocityX),e?(e=this.safeLinecast(this.velocityZ),e?this._velocity.set(this.velocityX.x,0,this.velocityZ.z):this._velocity.set(this.velocityX.x,0,-this.velocityZ.z*this.bounciness)):(e=this.safeLinecast(this.velocityZ),e?this._velocity.set(-this.velocityX.x*this.bounciness,0,this.velocityZ.z):this._velocity.set(0,0,0)))}applyMovement(){const e=F_.getDelta();this.updateMoveVec(),this.updateForce(this.forceCoe),this.updateDrag(this.dragCoe),this.updateVelocity(e),this.checkCollision(),this.displacement.copy(this._velocity).multiplyScalar(e),this.player.position.add(this.displacement)}start(){this.playerTexture.wrapS=Po,this.playerTexture.wrapT=Po,this.playerTexture.repeat.set(3,3),this.player.position.set(3,0,-2),this.player.castShadow=!0,es.add(this.player)}update(){this.applyMovement()}end(){es.remove(this.player),this.playerMaterial.dispose(),this.playerTexture.dispose(),this.playerGeometry.dispose()}get obj(){return this.player}};class WC{wallMaterial_1=new zb({color:15658734});wallMaterial_2=new Ml({opacity:0,transparent:!0});floorMaterial=this.wallMaterial_1;wallGeometry=new Os(20,20);floorGeometry=new Os(20,100);wall_1=new Dt(this.wallGeometry,this.wallMaterial_1);wall_2=new Dt(this.wallGeometry,this.wallMaterial_2);wall_3=new Dt(this.wallGeometry,this.wallMaterial_2);wall_4=new Dt(this.wallGeometry,this.wallMaterial_2);floor=new Dt(this.floorGeometry,this.floorMaterial);start(){this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.position.set(5,0,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.position.set(0,0,10),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,es.add(this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.floor)}update(){}end(){es.remove(this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.floor),this.wallMaterial_1.dispose(),this.wallMaterial_2.dispose(),this.floorMaterial.dispose(),this.wallGeometry.dispose(),this.floorGeometry.dispose()}}const es=new __,Va=new zC;class XC{walls=new WC;player=new GC;lights=new HC;rendererController;constructor(e){this.rendererController=new U_(e)}start(){this.player.start(),this.walls.start(),this.lights.start(),Va.start();const e=es.children.filter(n=>n!==this.player.obj);Pr.setCollidables(e),gn.start(),this.rendererController.start(),this.rendererController.startAnimation(()=>this.update(),es,Va.camera)}update(){this.player.update(),this.walls.update(),this.lights.update()}end(){Va.end(),gn.end(),this.rendererController.end(),this.player.end(),this.walls.end(),this.lights.end()}}class YC{_camera=new an;isListenerAdded=!1;move(e,n,i){this._camera.position.x+=e*i,this._camera.position.y+=n*i}updateProjection=()=>{const e=window.innerWidth/window.innerHeight;this._camera.aspect=e,this._camera.updateProjectionMatrix()};start(){this.updateProjection(),this._camera.fov=60,this._camera.near=1,this._camera.far=1e3,this._camera.position.set(0,0,15),this._camera.lookAt(0,0,0),!this.isListenerAdded&&(window.addEventListener("resize",this.updateProjection),this.isListenerAdded=!0)}update(){const e=gn.mouseDir;gn.isMouse&&e.length()!==0&&this.move(-e.x,e.y,2)}end(){window.removeEventListener("resize",this.updateProjection),this.isListenerAdded=!1}get camera(){return this._camera}}class $C{alpha=.1;ambientLightIntensityLight=.7;ambientLightIntensityDark=.1;ambientLight=new C_(16777215);themeStore=Dr();start(){this.themeStore.theme===Ht.Light?this.ambientLight.intensity=this.ambientLightIntensityLight:this.themeStore.theme===Ht.Dark&&(this.ambientLight.intensity=this.ambientLightIntensityDark),ts.add(this.ambientLight)}update(){this.themeStore.theme===Ht.Light?this.ambientLight.intensity=Bn.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,this.alpha):this.themeStore.theme===Ht.Dark&&(this.ambientLight.intensity=Bn.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,this.alpha))}end(){ts.remove(this.ambientLight),this.ambientLight.dispose()}}class qC{player=new Zb(16777215);geometry=new Os(100,100);material=new Ml({opacity:0,transparent:!0});intersectPlane=new Dt(this.geometry,this.material);mouseWorldPos=new H(0,0,0);updateMouseWorldPos(){const e=gn.mousePos,n=Pr.screenPointToWorld(ji.camera,e.x,e.y);n&&(this.mouseWorldPos=n)}applyMovement(){this.updateMouseWorldPos(),this.player.position.set(this.mouseWorldPos.x,this.mouseWorldPos.y,10),this.intersectPlane.position.set(this.mouseWorldPos.x,this.mouseWorldPos.y,5)}start(){this.player.intensity=50,this.player.castShadow=!0,this.player.shadow.camera.far=10,this.player.shadow.intensity=.5,this.player.shadow.normalBias=.3,this.player.shadow.radius=2,ts.add(this.player,this.intersectPlane)}update(){this.applyMovement()}end(){ts.remove(this.player,this.intersectPlane),this.player.dispose(),this.geometry.dispose(),this.material.dispose()}get obj(){return this.intersectPlane}}class jC extends qo{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new Yb(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=r.parse(JSON.parse(a));n&&n(l)},i,s)}parse(e){return new KC(e)}}class KC{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],s=ZC(e,n,this.data);for(let r=0,o=s.length;r<o;r++)i.push(...s[r].toShapes());return i}}function ZC(t,e,n){const i=Array.from(t),s=e/n.resolution,r=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*s,o=[];let a=0,l=0;for(let c=0;c<i.length;c++){const u=i[c];if(u===`
`)a=0,l-=r;else{const f=JC(u,s,a,l,n);a+=f.offsetX,o.push(f.path)}}return o}function JC(t,e,n,i,s){const r=s.glyphs[t]||s.glyphs["?"];if(!r){console.error('THREE.Font: character "'+t+'" does not exists in font family '+s.familyName+".");return}const o=new eT;let a,l,c,u,f,h,p,_;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,d=x.length;m<d;)switch(x[m++]){case"m":a=x[m++]*e+n,l=x[m++]*e+i,o.moveTo(a,l);break;case"l":a=x[m++]*e+n,l=x[m++]*e+i,o.lineTo(a,l);break;case"q":c=x[m++]*e+n,u=x[m++]*e+i,f=x[m++]*e+n,h=x[m++]*e+i,o.quadraticCurveTo(f,h,c,u);break;case"b":c=x[m++]*e+n,u=x[m++]*e+i,f=x[m++]*e+n,h=x[m++]*e+i,p=x[m++]*e+n,_=x[m++]*e+i,o.bezierCurveTo(f,h,p,_,c,u);break}}return{offsetX:r.ha*e,path:o}}class QC{text;theme=Ht.Light;loader=new jC;url="src/assets/font/helvetiker_regular.typeface.json";material=new rb;_object=new Dt;constructor(e){this.text=e,this.loader.load(this.url,n=>this.onLoad(n))}updateColor(){const e=Dr();this.theme!==e.theme&&(this.theme=e.theme,e.theme===Ht.Light?this.material.color.set(0):e.theme===Ht.Dark&&this.material.color.set(16777215))}updateDirection(){this._object.lookAt(ji.camera.position)}onLoad(e){const n=e.generateShapes(this.text,1),i=new Hf(n),s=new Dt(i,this.material);this.updateColor(),this._object=s,console.log(this._object)}start(){this._object&&(this._object.position.z=8,ts.add(this._object))}update(){this.updateColor(),this.updateDirection()}end(){}}class eP{maxAmp=.7;minAmp=.3;ampCoe=this.maxAmp-this.minAmp;maxSpeed=1;minSpeed=.3;speedCoe=this.maxSpeed-this.minSpeed;phaseCoe=2*Math.PI;amplitudes=[];speeds=[];phases=[];maxMouseEffect=3.5;mouseEffectSigma=8;tailEffect=[];size;dummy=new Xt;mesh;text=new QC("my work 1");constructor(e,n,i=0){this.size=i;const s=i**2;this.mesh=new nb(e,n,s),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0;for(let r=0;r<s;r++)this.amplitudes[r]=Math.random()*this.ampCoe+this.minAmp,this.speeds[r]=Math.random()*this.speedCoe+this.minSpeed,this.phases[r]=this.phaseCoe*Math.random(),this.tailEffect.push(0)}setPos(e,n,i){this.mesh.position.set(e,n,i)}start(){this.update(),this.text.start(),ts.add(this.mesh)}update(){let e=0;const n=Pr.screenPointToWorld(ji.camera,gn.mousePos.x,gn.mousePos.y);for(let i=0;i<this.size;i++)for(let s=0;s<this.size;s++){const r=i,o=s,a=this.amplitudes[e]*Math.sin(F_.getElapsedTime()*this.speeds[e]+this.phases[e]);let l=999;n&&(l=(n.x-r-this.mesh.position.x)**2+(n.y-o-this.mesh.position.y)**2);const c=this.maxMouseEffect*Math.exp(-l/this.mouseEffectSigma);let u=.5;c<this.tailEffect[e]&&(u=.2),this.tailEffect[e]=Bn.lerp(this.tailEffect[e],c,u),this.dummy.position.x=r,this.dummy.position.y=o,this.dummy.position.z=a+this.tailEffect[e],this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),e++}this.mesh.instanceMatrix.needsUpdate=!0,this.text.update()}end(){ts.remove(this.mesh),this.mesh.dispose(),this.text.end()}}class tP{_size;_renderDist;loadedChunks=new Map;center=new Pe(0,0);geometry=new Ur(1,1,3);material=new Bb({color:16777215,roughness:.5,metalness:.1});constructor(e,n){this._size=e,this._renderDist=n}getCurrentGridFromWorld(){this.center.set(Math.floor(ji.camera.position.x/this._size),Math.floor(ji.camera.position.y/this._size))}updateChunks(){const e=new Set;for(let n=-this._renderDist;n<=this._renderDist;n++)for(let i=-this._renderDist;i<=this._renderDist;i++){const s=this.center.x+n,r=this.center.y+i,o=`${s},${r}`;if(e.add(o),!this.loadedChunks.has(o)){const a=new eP(this.geometry,this.material,this._size),l=s*this._size,c=r*this._size;a.setPos(l,c,0),a.start(),this.loadedChunks.set(o,a)}}for(const n of this.loadedChunks.keys())if(!e.has(n)){const i=this.loadedChunks.get(n);i&&i.end(),this.loadedChunks.delete(n)}}start(){}update(){this.getCurrentGridFromWorld(),this.updateChunks(),this.loadedChunks.forEach(e=>e.update())}end(){this.loadedChunks.forEach(e=>e.end()),this.geometry.dispose(),this.material.dispose()}}const ts=new __,ji=new YC;class nP{lights=new $C;player=new qC;chunkLoader=new tP(12,2);rendererController;constructor(e){this.rendererController=new U_(e)}start(){this.lights.start(),this.player.start(),this.chunkLoader.start(),ji.start(),Pr.setCollidables([this.player.obj]),gn.start(),this.rendererController.start(),this.rendererController.startAnimation(()=>this.update(),ts,ji.camera)}update(){this.lights.update(),this.player.update(),this.chunkLoader.update(),ji.update()}end(){gn.end(),this.rendererController.end(),this.lights.end(),this.player.end(),this.chunkLoader.end()}}const gn=new BC,Pr=new kC,F_=new Qb,iP={class:"absolute t-0 w-dvw h-dvh"},sP={key:1,class:"grid grid-cols-2 pl-1/10 pr-1/10 z-1"},rP=un({__name:"homepage",setup(t){const{t:e}=Ci(),n=Ir(),i=no("canvas"),s=ei(!1);function r(){s.value=!0}return ks(()=>{if(!i.value)return;const o=new XC(i.value);o.start(),Lr(()=>o.end())}),(o,a)=>(st(),pt("div",{class:"page flex a-center j-start",onClick:a[0]||(a[0]=l=>r())},[Nt("div",iP,[Nt("canvas",{ref_key:"canvas",ref:i},null,512)]),!s.value&&!Mi(n).isLoading?(st(),dl(Kr,{key:0,class:"hem-10 pl-1/10 pr-1/10 font-size-xl lsem-0.5 txt-center txt-shadow z-1",text:Mi(e)("click"),duration:3e3,animation:"fadeLoop"},null,8,["text"])):Wt("",!0),s.value?(st(),pt("div",sP,[Qe(Kr,{class:"col-span-2 hem-10 pb-10 font-size-md lsem-0.1",text:Mi(e)("hello"),duration:500,"stagger-in":50},null,8,["text"]),Qe(Kr,{class:"sm:col-span-2 hem-10 font-size-4xl lsem-0.5 txt-shadow uppercase",text:"peter",duration:1e3,"stagger-in":100}),Qe(Kr,{class:"sm:col-span-2 hem-10 font-size-4xl lsem-0.5 txt-shadow uppercase",text:"chan",duration:1e3,delay:500,"stagger-in":100})])):Wt("",!0)]))}}),oP={class:"page"},aP={class:"absolute t-0 w-dvw h-dvh"},lP=un({__name:"projects",setup(t){const{t:e}=Ci(),n=no("canvas");return ks(()=>{if(!n.value)return;const i=new nP(n.value);i.start(),Lr(()=>i.end())}),(i,s)=>(st(),pt("div",oP,[Nt("div",aP,[Nt("canvas",{ref_key:"canvas",ref:n},null,512)])]))}}),cP={},uP={class:"page"};function fP(t,e){return st(),pt("div",uP,[...e[0]||(e[0]=[Nt("h1",{class:"pl-20 pr-20 font-size-48"},"Sorry",-1),Nt("h2",{class:"pl-20 pr-20"},"This page is not yet online",-1)])])}const hP=is(cP,[["render",fP]]),dP={};function pP(t,e){return null}const mP=is(dP,[["render",pP],["__scopeId","data-v-1d7c9e6b"]]),O_=[{path:"/",name:"home",component:rP},{path:"/works",name:"works",component:lP},{path:"/blogs",name:"blogs",component:hP},{path:"/test",name:"test",component:mP}],Xf=ME({history:ZM("/my-site/"),scrollBehavior(){return{top:0}},routes:O_});Xf.beforeEach(async(t,e,n)=>{const i=Ir();i.load();const s=i.isFirstLoad?0:i.duration;await new Promise(o=>setTimeout(o,s));const r=sessionStorage.redirect;return r&&O_.find(o=>o.path===r)?(sessionStorage.removeItem("redirect"),n(r)):n()});Xf.afterEach((t,e,n)=>{Ir().done()});const Ac={messages:{hello:"hello, i am",home:"home",work:"work",todos:"todos",authentication:"authentication",blogs:"blogs",blog:"blog",test:"test",computer:"use computer for the best experience",click:"click to start"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},Rc={messages:{hello:"你好, 我是",home:"主頁",work:"項目",todos:"任務清單",authentication:"驗證",blogs:"部落格",blog:"博客",test:"測試",computer:"使用電腦體驗最佳",click:"按下開始"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},gP={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":Ac.messages,"zh-TW":Rc.messages},datetimeFormats:{"en-US":Ac.dateTimeFormats,"zh-TW":Rc.dateTimeFormats},numberFormats:{"en-US":Ac.numberFormats,"zh-TW":Rc.numberFormats}},_P=lS(gP),vP=xS(),bl=px(yM);bl.use(Xf);bl.use(_P);bl.use(vP);bl.mount("#app");
