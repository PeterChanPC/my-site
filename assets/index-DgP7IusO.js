(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const _t={},or=[],si=()=>{},nm=()=>!1,Xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ku=t=>t.startsWith("onUpdate:"),tn=Object.assign,Hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},m0=Object.prototype.hasOwnProperty,ht=(t,e)=>m0.call(t,e),$e=Array.isArray,ar=t=>$a(t)==="[object Map]",im=t=>$a(t)==="[object Set]",qe=t=>typeof t=="function",Dt=t=>typeof t=="string",ts=t=>typeof t=="symbol",Tt=t=>t!==null&&typeof t=="object",sm=t=>(Tt(t)||qe(t))&&qe(t.then)&&qe(t.catch),rm=Object.prototype.toString,$a=t=>rm.call(t),g0=t=>$a(t).slice(8,-1),om=t=>$a(t)==="[object Object]",zu=t=>Dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qr=Bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ja=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_0=/-\w/g,Dn=ja(t=>t.replace(_0,e=>e.slice(1).toUpperCase())),v0=/\B([A-Z])/g,Is=ja(t=>t.replace(v0,"-$1").toLowerCase()),qa=ja(t=>t.charAt(0).toUpperCase()+t.slice(1)),vl=ja(t=>t?`on${qa(t)}`:""),Xi=(t,e)=>!Object.is(t,e),pa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},am=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},yc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Jf;const Ya=()=>Jf||(Jf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vu(t){if($e(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Dt(i)?E0(i):Vu(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(t)||Tt(t))return t}const x0=/;(?![^(]*\))/g,S0=/:([^]+)/,y0=/\/\*[^]*?\*\//g;function E0(t){const e={};return t.replace(y0,"").split(x0).forEach(n=>{if(n){const i=n.split(S0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Yi(t){let e="";if(Dt(t))e=t;else if($e(t))for(let n=0;n<t.length;n++){const i=Yi(t[n]);i&&(e+=i+" ")}else if(Tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const M0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b0=Bu(M0);function lm(t){return!!t||t===""}const cm=t=>!!(t&&t.__v_isRef===!0),ti=t=>Dt(t)?t:t==null?"":$e(t)||Tt(t)&&(t.toString===rm||!qe(t.toString))?cm(t)?ti(t.value):JSON.stringify(t,um,2):String(t),um=(t,e)=>cm(e)?um(t,e.value):ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[xl(i,r)+" =>"]=s,n),{})}:im(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xl(n))}:ts(e)?xl(e):Tt(e)&&!$e(e)&&!om(e)?String(e):e,xl=(t,e="")=>{var n;return ts(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class fm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Gu(t){return new fm(t)}function hm(){return Kt}function T0(t,e=!1){Kt&&Kt.cleanups.push(t)}let yt;const Sl=new WeakSet;class dm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sl.has(this)&&(Sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qf(this),gm(this);const e=yt,n=zn;yt=this,zn=!0;try{return this.fn()}finally{_m(this),yt=e,zn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$u(e);this.deps=this.depsTail=void 0,Qf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ec(this)&&this.run()}get dirty(){return Ec(this)}}let pm=0,Yr,Kr;function mm(t,e=!1){if(t.flags|=8,e){t.next=Kr,Kr=t;return}t.next=Yr,Yr=t}function Wu(){pm++}function Xu(){if(--pm>0)return;if(Kr){let e=Kr;for(Kr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Yr;){let e=Yr;for(Yr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function gm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _m(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),$u(i),w0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===so)||(t.globalVersion=so,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ec(t))))return;t.flags|=2;const e=t.dep,n=yt,i=zn;yt=t,zn=!0;try{gm(t);const s=t.fn(t._value);(e.version===0||Xi(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{yt=n,zn=i,_m(t),t.flags&=-3}}function $u(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)$u(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function w0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let zn=!0;const xm=[];function Ci(){xm.push(zn),zn=!1}function Pi(){const t=xm.pop();zn=t===void 0?!0:t}function Qf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=yt;yt=void 0;try{e()}finally{yt=n}}}let so=0;class A0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ju{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!yt||!zn||yt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==yt)n=this.activeLink=new A0(yt,this),yt.deps?(n.prevDep=yt.depsTail,yt.depsTail.nextDep=n,yt.depsTail=n):yt.deps=yt.depsTail=n,Sm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=yt.depsTail,n.nextDep=void 0,yt.depsTail.nextDep=n,yt.depsTail=n,yt.deps===n&&(yt.deps=i)}return n}trigger(e){this.version++,so++,this.notify(e)}notify(e){Wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xu()}}}function Sm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Sm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ca=new WeakMap,Ts=Symbol(""),Mc=Symbol(""),ro=Symbol("");function Zt(t,e,n){if(zn&&yt){let i=Ca.get(t);i||Ca.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new ju),s.map=i,s.key=n),s.track()}}function Si(t,e,n,i,s,r){const o=Ca.get(t);if(!o){so++;return}const a=l=>{l&&l.trigger()};if(Wu(),e==="clear")o.forEach(a);else{const l=$e(t),c=l&&zu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ro||!ts(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ro)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ts)),ar(t)&&a(o.get(Mc)));break;case"delete":l||(a(o.get(Ts)),ar(t)&&a(o.get(Mc)));break;case"set":ar(t)&&a(o.get(Ts));break}}Xu()}function R0(t,e){const n=Ca.get(t);return n&&n.get(e)}function Fs(t){const e=rt(t);return e===t?e:(Zt(e,"iterate",ro),Pn(t)?e:e.map(Wt))}function Ka(t){return Zt(t=rt(t),"iterate",ro),t}const C0={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,Wt)},concat(...t){return Fs(this).concat(...t.map(e=>$e(e)?Fs(e):e))},entries(){return yl(this,"entries",t=>(t[1]=Wt(t[1]),t))},every(t,e){return ui(this,"every",t,e,void 0,arguments)},filter(t,e){return ui(this,"filter",t,e,n=>n.map(Wt),arguments)},find(t,e){return ui(this,"find",t,e,Wt,arguments)},findIndex(t,e){return ui(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ui(this,"findLast",t,e,Wt,arguments)},findLastIndex(t,e){return ui(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ui(this,"forEach",t,e,void 0,arguments)},includes(...t){return El(this,"includes",t)},indexOf(...t){return El(this,"indexOf",t)},join(t){return Fs(this).join(t)},lastIndexOf(...t){return El(this,"lastIndexOf",t)},map(t,e){return ui(this,"map",t,e,void 0,arguments)},pop(){return Ir(this,"pop")},push(...t){return Ir(this,"push",t)},reduce(t,...e){return eh(this,"reduce",t,e)},reduceRight(t,...e){return eh(this,"reduceRight",t,e)},shift(){return Ir(this,"shift")},some(t,e){return ui(this,"some",t,e,void 0,arguments)},splice(...t){return Ir(this,"splice",t)},toReversed(){return Fs(this).toReversed()},toSorted(t){return Fs(this).toSorted(t)},toSpliced(...t){return Fs(this).toSpliced(...t)},unshift(...t){return Ir(this,"unshift",t)},values(){return yl(this,"values",Wt)}};function yl(t,e,n){const i=Ka(t),s=i[e]();return i!==t&&!Pn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const P0=Array.prototype;function ui(t,e,n,i,s,r){const o=Ka(t),a=o!==t&&!Pn(t),l=o[e];if(l!==P0[e]){const f=l.apply(t,r);return a?Wt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Wt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function eh(t,e,n,i){const s=Ka(t);let r=n;return s!==t&&(Pn(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Wt(a),l,t)}),s[e](r,...i)}function El(t,e,n){const i=rt(t);Zt(i,"iterate",ro);const s=i[e](...n);return(s===-1||s===!1)&&Ku(n[0])?(n[0]=rt(n[0]),i[e](...n)):s}function Ir(t,e,n=[]){Ci(),Wu();const i=rt(t)[e].apply(t,n);return Xu(),Pi(),i}const L0=Bu("__proto__,__v_isRef,__isVue"),ym=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ts));function D0(t){ts(t)||(t=String(t));const e=rt(this);return Zt(e,"has",t),e.hasOwnProperty(t)}class Em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?V0:wm:r?Tm:bm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=C0[n]))return l;if(n==="hasOwnProperty")return D0}const a=Reflect.get(e,n,Lt(e)?e:i);if((ts(n)?ym.has(n):L0(n))||(s||Zt(e,"get",n),r))return a;if(Lt(a)){const l=o&&zu(n)?a:a.value;return s&&Tt(l)?Tc(l):l}return Tt(a)?s?Tc(a):Mo(a):a}}class Mm extends Em{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];if(!this._isShallow){const l=Ki(r);if(!Pn(i)&&!Ki(i)&&(r=rt(r),i=rt(i)),!$e(e)&&Lt(r)&&!Lt(i))return l||(r.value=i),!0}const o=$e(e)&&zu(n)?Number(n)<e.length:ht(e,n),a=Reflect.set(e,n,i,Lt(e)?e:s);return e===rt(s)&&(o?Xi(i,r)&&Si(e,"set",n,i):Si(e,"add",n,i)),a}deleteProperty(e,n){const i=ht(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Si(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!ts(n)||!ym.has(n))&&Zt(e,"has",n),i}ownKeys(e){return Zt(e,"iterate",$e(e)?"length":Ts),Reflect.ownKeys(e)}}class I0 extends Em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const U0=new Mm,N0=new I0,O0=new Mm(!0);const bc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function F0(t,e,n){return function(...i){const s=this.__v_raw,r=rt(s),o=ar(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?bc:e?Pa:Wt;return!e&&Zt(r,"iterate",l?Mc:Ts),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Bo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function B0(t,e){const n={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);t||(Xi(s,a)&&Zt(o,"get",s),Zt(o,"get",a));const{has:l}=Fo(o),c=e?bc:t?Pa:Wt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Zt(rt(s),"iterate",Ts),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return t||(Xi(s,a)&&Zt(o,"has",s),Zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?bc:t?Pa:Wt;return!t&&Zt(l,"iterate",Ts),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return tn(n,t?{add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear")}:{add(s){!e&&!Pn(s)&&!Ki(s)&&(s=rt(s));const r=rt(this);return Fo(r).has.call(r,s)||(r.add(s),Si(r,"add",s,s)),this},set(s,r){!e&&!Pn(r)&&!Ki(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=Fo(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Xi(r,u)&&Si(o,"set",s,r):Si(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=Fo(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Si(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&Si(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=F0(s,t,e)}),n}function qu(t,e){const n=B0(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(ht(n,s)&&s in i?n:i,s,r)}const k0={get:qu(!1,!1)},H0={get:qu(!1,!0)},z0={get:qu(!0,!1)};const bm=new WeakMap,Tm=new WeakMap,wm=new WeakMap,V0=new WeakMap;function G0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W0(t){return t.__v_skip||!Object.isExtensible(t)?0:G0(g0(t))}function Mo(t){return Ki(t)?t:Yu(t,!1,U0,k0,bm)}function Am(t){return Yu(t,!1,O0,H0,Tm)}function Tc(t){return Yu(t,!0,N0,z0,wm)}function Yu(t,e,n,i,s){if(!Tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=W0(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function $i(t){return Ki(t)?$i(t.__v_raw):!!(t&&t.__v_isReactive)}function Ki(t){return!!(t&&t.__v_isReadonly)}function Pn(t){return!!(t&&t.__v_isShallow)}function Ku(t){return t?!!t.__v_raw:!1}function rt(t){const e=t&&t.__v_raw;return e?rt(e):t}function Zu(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&am(t,"__v_skip",!0),t}const Wt=t=>Tt(t)?Mo(t):t,Pa=t=>Tt(t)?Tc(t):t;function Lt(t){return t?t.__v_isRef===!0:!1}function ln(t){return Rm(t,!1)}function Ju(t){return Rm(t,!0)}function Rm(t,e){return Lt(t)?t:new X0(t,e)}class X0{constructor(e,n){this.dep=new ju,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:rt(e),this._value=n?e:Wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Pn(e)||Ki(e);e=i?e:rt(e),Xi(e,n)&&(this._rawValue=e,this._value=i?e:Wt(e),this.dep.trigger())}}function Ln(t){return Lt(t)?t.value:t}const $0={get:(t,e,n)=>e==="__v_raw"?t:Ln(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Cm(t){return $i(t)?t:new Proxy(t,$0)}function j0(t){const e=$e(t)?new Array(t.length):{};for(const n in t)e[n]=Y0(t,n);return e}class q0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return R0(rt(this._object),this._key)}}function Y0(t,e,n){const i=t[e];return Lt(i)?i:new q0(t,e,n)}class K0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ju(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=so-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return mm(this,!0),!0}get value(){const e=this.dep.track();return vm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Z0(t,e,n=!1){let i,s;return qe(t)?i=t:(i=t.get,s=t.set),new K0(i,s,n)}const ko={},La=new WeakMap;let _s;function J0(t,e=!1,n=_s){if(n){let i=La.get(n);i||La.set(n,i=[]),i.push(t)}}function Q0(t,e,n=_t){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=x=>s?x:Pn(x)||s===!1||s===0?yi(x,1):yi(x);let u,f,d,p,_=!1,v=!1;if(Lt(t)?(f=()=>t.value,_=Pn(t)):$i(t)?(f=()=>c(t),_=!0):$e(t)?(v=!0,_=t.some(x=>$i(x)||Pn(x)),f=()=>t.map(x=>{if(Lt(x))return x.value;if($i(x))return c(x);if(qe(x))return l?l(x,2):x()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Ci();try{d()}finally{Pi()}}const x=_s;_s=u;try{return l?l(t,3,[p]):t(p)}finally{_s=x}}:f=si,e&&s){const x=f,L=s===!0?1/0:s;f=()=>yi(x(),L)}const m=hm(),h=()=>{u.stop(),m&&m.active&&Hu(m.effects,u)};if(r&&e){const x=e;e=(...L)=>{x(...L),h()}}let S=v?new Array(t.length).fill(ko):ko;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const L=u.run();if(s||_||(v?L.some((D,A)=>Xi(D,S[A])):Xi(L,S))){d&&d();const D=_s;_s=u;try{const A=[L,S===ko?void 0:v&&S[0]===ko?[]:S,p];S=L,l?l(e,3,A):e(...A)}finally{_s=D}}}else u.run()};return a&&a(E),u=new dm(f),u.scheduler=o?()=>o(E,!1):E,p=x=>J0(x,!1,u),d=u.onStop=()=>{const x=La.get(u);if(x){if(l)l(x,4);else for(const L of x)L();La.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function yi(t,e=1/0,n){if(e<=0||!Tt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Lt(t))yi(t.value,e,n);else if($e(t))for(let i=0;i<t.length;i++)yi(t[i],e,n);else if(im(t)||ar(t))t.forEach(i=>{yi(i,e,n)});else if(om(t)){for(const i in t)yi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&yi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(t,e,n,i){try{return i?t(...i):t()}catch(s){Za(s,e,n)}}function ai(t,e,n,i){if(qe(t)){const s=bo(t,e,n,i);return s&&sm(s)&&s.catch(r=>{Za(r,e,n)}),s}if($e(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ai(t[r],e,n,i));return s}}function Za(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||_t;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Ci(),bo(r,null,10,[t,l,c]),Pi();return}}ev(t,n,s,i,o)}function ev(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const on=[];let Jn=-1;const lr=[];let Hi=null,er=0;const Pm=Promise.resolve();let Da=null;function Qu(t){const e=Da||Pm;return t?e.then(this?t.bind(this):t):e}function tv(t){let e=Jn+1,n=on.length;for(;e<n;){const i=e+n>>>1,s=on[i],r=oo(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function ef(t){if(!(t.flags&1)){const e=oo(t),n=on[on.length-1];!n||!(t.flags&2)&&e>=oo(n)?on.push(t):on.splice(tv(e),0,t),t.flags|=1,Lm()}}function Lm(){Da||(Da=Pm.then(Im))}function nv(t){$e(t)?lr.push(...t):Hi&&t.id===-1?Hi.splice(er+1,0,t):t.flags&1||(lr.push(t),t.flags|=1),Lm()}function th(t,e,n=Jn+1){for(;n<on.length;n++){const i=on[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;on.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Dm(t){if(lr.length){const e=[...new Set(lr)].sort((n,i)=>oo(n)-oo(i));if(lr.length=0,Hi){Hi.push(...e);return}for(Hi=e,er=0;er<Hi.length;er++){const n=Hi[er];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hi=null,er=0}}const oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Im(t){try{for(Jn=0;Jn<on.length;Jn++){const e=on[Jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jn<on.length;Jn++){const e=on[Jn];e&&(e.flags&=-2)}Jn=-1,on.length=0,Dm(),Da=null,(on.length||lr.length)&&Im()}}let yn=null,Um=null;function Ia(t){const e=yn;return yn=t,Um=t&&t.type.__scopeId||null,e}function Ua(t,e=yn,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Fa(-1);const r=Ia(e);let o;try{o=t(...s)}finally{Ia(r),i._d&&Fa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function nh(t,e){if(yn===null)return t;const n=el(yn),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=_t]=e[s];r&&(qe(r)&&(r={mounted:r,updated:r}),r.deep&&yi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function cs(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ci(),ai(l,n,8,[t.el,a,t,e]),Pi())}}const iv=Symbol("_vte"),sv=t=>t.__isTeleport,rv=Symbol("_leaveCb");function tf(t,e){t.shapeFlag&6&&t.component?(t.transition=e,tf(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $t(t,e){return qe(t)?tn({name:t.name},e,{setup:t}):t}function Nm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Om(t){const e=Ji(),n=Ju(null);if(e){const s=e.refs===_t?e.refs={}:e.refs;Object.defineProperty(s,t,{enumerable:!0,get:()=>n.value,set:r=>n.value=r})}return n}const Na=new WeakMap;function Zr(t,e,n,i,s=!1){if($e(t)){t.forEach((_,v)=>Zr(_,e&&($e(e)?e[v]:e),n,i,s));return}if(Jr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zr(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?el(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_t?a.refs={}:a.refs,f=a.setupState,d=rt(f),p=f===_t?nm:_=>ht(d,_);if(c!=null&&c!==l){if(ih(e),Dt(c))u[c]=null,p(c)&&(f[c]=null);else if(Lt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(qe(l))bo(l,a,12,[o,u]);else{const _=Dt(l),v=Lt(l);if(_||v){const m=()=>{if(t.f){const h=_?p(l)?f[l]:u[l]:l.value;if(s)$e(h)&&Hu(h,r);else if($e(h))h.includes(r)||h.push(r);else if(_)u[l]=[r],p(l)&&(f[l]=u[l]);else{const S=[r];l.value=S,t.k&&(u[t.k]=S)}}else _?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const h=()=>{m(),Na.delete(t)};h.id=-1,Na.set(t,h),xn(h,n)}else ih(t),m()}}}function ih(t){const e=Na.get(t);e&&(e.flags|=8,Na.delete(t))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const Jr=t=>!!t.type.__asyncLoader,Fm=t=>t.type.__isKeepAlive;function ov(t,e){Bm(t,"a",e)}function av(t,e){Bm(t,"da",e)}function Bm(t,e,n=Jt){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ja(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Fm(s.parent.vnode)&&lv(i,e,n,s),s=s.parent}}function lv(t,e,n,i){const s=Ja(e,t,i,!0);wr(()=>{Hu(i[e],s)},n)}function Ja(t,e,n=Jt,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ci();const a=wo(n),l=ai(e,n,t,o);return a(),Pi(),l});return i?s.unshift(r):s.push(r),r}}const Li=t=>(e,n=Jt)=>{(!lo||t==="sp")&&Ja(t,(...i)=>e(...i),n)},km=Li("bm"),Tr=Li("m"),cv=Li("bu"),uv=Li("u"),fv=Li("bum"),wr=Li("um"),hv=Li("sp"),dv=Li("rtg"),pv=Li("rtc");function mv(t,e=Jt){Ja("ec",t,e)}const Hm="components";function ws(t,e){return Vm(Hm,t,!0,e)||t}const zm=Symbol.for("v-ndc");function gv(t){return Dt(t)?Vm(Hm,t,!1)||t:t||zm}function Vm(t,e,n=!0,i=!1){const s=yn||Jt;if(s){const r=s.type;{const a=rx(r,!1);if(a&&(a===e||a===Dn(e)||a===qa(Dn(e))))return r}const o=sh(s[t]||r[t],e)||sh(s.appContext[t],e);return!o&&i?r:o}}function sh(t,e){return t&&(t[e]||t[Dn(e)]||t[qa(Dn(e))])}function _v(t,e,n,i){let s;const r=n,o=$e(t);if(o||Dt(t)){const a=o&&$i(t);let l=!1,c=!1;a&&(l=!Pn(t),c=Ki(t),t=Ka(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?Pa(Wt(t[u])):Wt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(Tt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const wc=t=>t?lg(t)?el(t):wc(t.parent):null,Qr=tn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wc(t.parent),$root:t=>wc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wm(t),$forceUpdate:t=>t.f||(t.f=()=>{ef(t.update)}),$nextTick:t=>t.n||(t.n=Qu.bind(t.proxy)),$watch:t=>kv.bind(t)}),Ml=(t,e)=>t!==_t&&!t.__isScriptSetup&&ht(t,e),vv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ml(i,e))return o[e]=1,i[e];if(s!==_t&&ht(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ht(c,e))return o[e]=3,r[e];if(n!==_t&&ht(n,e))return o[e]=4,n[e];Ac&&(o[e]=0)}}const u=Qr[e];let f,d;if(u)return e==="$attrs"&&Zt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==_t&&ht(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ml(s,e)?(s[e]=n,!0):i!==_t&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r,type:o}},a){let l,c;return!!(n[a]||t!==_t&&a[0]!=="$"&&ht(t,a)||Ml(e,a)||(l=r[0])&&ht(l,a)||ht(i,a)||ht(Qr,a)||ht(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rh(t){return $e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ac=!0;function xv(t){const e=Wm(t),n=t.proxy,i=t.ctx;Ac=!1,e.beforeCreate&&oh(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:E,unmounted:x,render:L,renderTracked:D,renderTriggered:A,errorCaptured:O,serverPrefetch:w,expose:T,inheritAttrs:F,components:q,directives:j,filters:oe}=e;if(c&&Sv(c,i,null),o)for(const Z in o){const W=o[Z];qe(W)&&(i[Z]=W.bind(n))}if(s){const Z=s.call(n,n);Tt(Z)&&(t.data=Mo(Z))}if(Ac=!0,r)for(const Z in r){const W=r[Z],me=qe(W)?W.bind(n,n):qe(W.get)?W.get.bind(n,n):si,xe=!qe(W)&&qe(W.set)?W.set.bind(n):si,Se=Nt({get:me,set:xe});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Se.value,set:De=>Se.value=De})}if(a)for(const Z in a)Gm(a[Z],i,n,Z);if(l){const Z=qe(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(W=>{ma(W,Z[W])})}u&&oh(u,t,"c");function K(Z,W){$e(W)?W.forEach(me=>Z(me.bind(n))):W&&Z(W.bind(n))}if(K(km,f),K(Tr,d),K(cv,p),K(uv,_),K(ov,v),K(av,m),K(mv,O),K(pv,D),K(dv,A),K(fv,S),K(wr,x),K(hv,w),$e(T))if(T.length){const Z=t.exposed||(t.exposed={});T.forEach(W=>{Object.defineProperty(Z,W,{get:()=>n[W],set:me=>n[W]=me,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===si&&(t.render=L),F!=null&&(t.inheritAttrs=F),q&&(t.components=q),j&&(t.directives=j),w&&Nm(t)}function Sv(t,e,n=si){$e(t)&&(t=Rc(t));for(const i in t){const s=t[i];let r;Tt(s)?"default"in s?r=Vn(s.from||i,s.default,!0):r=Vn(s.from||i):r=Vn(s),Lt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function oh(t,e,n){ai($e(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gm(t,e,n,i){let s=i.includes(".")?ng(n,i):()=>n[i];if(Dt(t)){const r=e[t];qe(r)&&Ai(s,r)}else if(qe(t))Ai(s,t.bind(n));else if(Tt(t))if($e(t))t.forEach(r=>Gm(r,e,n,i));else{const r=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(r)&&Ai(s,r,t)}}function Wm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Oa(l,c,o,!0)),Oa(l,e,o)),Tt(e)&&r.set(e,l),l}function Oa(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Oa(t,r,n,!0),s&&s.forEach(o=>Oa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=yv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yv={data:ah,props:lh,emits:lh,methods:Xr,computed:Xr,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Xr,directives:Xr,watch:Mv,provide:ah,inject:Ev};function ah(t,e){return e?t?function(){return tn(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function Ev(t,e){return Xr(Rc(t),Rc(e))}function Rc(t){if($e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Xr(t,e){return t?tn(Object.create(null),t,e):e}function lh(t,e){return t?$e(t)&&$e(e)?[...new Set([...t,...e])]:tn(Object.create(null),rh(t),rh(e??{})):e}function Mv(t,e){if(!t)return e;if(!e)return t;const n=tn(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function Xm(){return{app:null,config:{isNativeTag:nm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bv=0;function Tv(t,e){return function(i,s=null){qe(i)||(i=tn({},i)),s!=null&&!Tt(s)&&(s=null);const r=Xm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:bv++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:ax,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||it(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,el(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ai(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=As;As=c;try{return u()}finally{As=f}}};return c}}let As=null;function ma(t,e){if(Jt){let n=Jt.provides;const i=Jt.parent&&Jt.parent.provides;i===n&&(n=Jt.provides=Object.create(i)),n[t]=e}}function Vn(t,e,n=!1){const i=Ji();if(i||As){let s=As?As._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function wv(){return!!(Ji()||As)}const $m={},jm=()=>Object.create($m),qm=t=>Object.getPrototypeOf(t)===$m;function Av(t,e,n,i=!1){const s={},r=jm();t.propsDefaults=Object.create(null),Ym(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Am(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Rv(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=rt(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Qa(t.emitsOptions,d))continue;const p=e[d];if(l)if(ht(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const _=Dn(d);s[_]=Cc(l,a,_,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Ym(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!ht(e,f)&&((u=Is(f))===f||!ht(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Cc(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!ht(e,f))&&(delete r[f],c=!0)}c&&Si(t.attrs,"set","")}function Ym(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(qr(l))continue;const c=e[l];let u;s&&ht(s,u=Dn(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Qa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(n),c=a||_t;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Cc(s,l,f,c[f],t,!ht(c,f))}}return o}function Cc(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=wo(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Is(n))&&(i=!0))}return i}const Cv=new WeakMap;function Km(t,e,n=!1){const i=n?Cv:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[d,p]=Km(f,e,!0);tn(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Tt(t)&&i.set(t,or),or;if($e(r))for(let u=0;u<r.length;u++){const f=Dn(r[u]);ch(f)&&(o[f]=_t)}else if(r)for(const u in r){const f=Dn(u);if(ch(f)){const d=r[u],p=o[f]=$e(d)||qe(d)?{type:d}:tn({},d),_=p.type;let v=!1,m=!0;if($e(_))for(let h=0;h<_.length;++h){const S=_[h],E=qe(S)&&S.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=qe(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||ht(p,"default"))&&a.push(f)}}const c=[o,a];return Tt(t)&&i.set(t,c),c}function ch(t){return t[0]!=="$"&&!qr(t)}const nf=t=>t==="_"||t==="_ctx"||t==="$stable",sf=t=>$e(t)?t.map(Qn):[Qn(t)],Pv=(t,e,n)=>{if(e._n)return e;const i=Ua((...s)=>sf(e(...s)),n);return i._c=!1,i},Zm=(t,e,n)=>{const i=t._ctx;for(const s in t){if(nf(s))continue;const r=t[s];if(qe(r))e[s]=Pv(s,r,i);else if(r!=null){const o=sf(r);e[s]=()=>o}}},Jm=(t,e)=>{const n=sf(e);t.slots.default=()=>n},Qm=(t,e,n)=>{for(const i in e)(n||!nf(i))&&(t[i]=e[i])},Lv=(t,e,n)=>{const i=t.slots=jm();if(t.vnode.shapeFlag&32){const s=e._;s?(Qm(i,e,n),n&&am(i,"_",s,!0)):Zm(e,i)}else e&&Jm(t,e)},Dv=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=_t;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Qm(s,e,n):(r=!e.$stable,Zm(e,s)),o=e}else e&&(Jm(t,e),o={default:1});if(r)for(const a in s)!nf(a)&&o[a]==null&&delete s[a]},xn=jv;function Iv(t){return Uv(t)}function Uv(t,e){const n=Ya();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=si,insertStaticContent:_}=t,v=(I,U,y,ie=null,Q=null,J=null,b=void 0,C=null,N=!!U.dynamicChildren)=>{if(I===U)return;I&&!Ur(I,U)&&(ie=H(I),De(I,Q,J,!0),I=null),U.patchFlag===-2&&(N=!1,U.dynamicChildren=null);const{type:B,ref:de,shapeFlag:M}=U;switch(B){case To:m(I,U,y,ie);break;case Zi:h(I,U,y,ie);break;case Tl:I==null&&S(U,y,ie,b);break;case an:q(I,U,y,ie,Q,J,b,C,N);break;default:M&1?L(I,U,y,ie,Q,J,b,C,N):M&6?j(I,U,y,ie,Q,J,b,C,N):(M&64||M&128)&&B.process(I,U,y,ie,Q,J,b,C,N,le)}de!=null&&Q?Zr(de,I&&I.ref,J,U||I,!U):de==null&&I&&I.ref!=null&&Zr(I.ref,null,J,I,!0)},m=(I,U,y,ie)=>{if(I==null)i(U.el=a(U.children),y,ie);else{const Q=U.el=I.el;U.children!==I.children&&c(Q,U.children)}},h=(I,U,y,ie)=>{I==null?i(U.el=l(U.children||""),y,ie):U.el=I.el},S=(I,U,y,ie)=>{[I.el,I.anchor]=_(I.children,U,y,ie,I.el,I.anchor)},E=({el:I,anchor:U},y,ie)=>{let Q;for(;I&&I!==U;)Q=d(I),i(I,y,ie),I=Q;i(U,y,ie)},x=({el:I,anchor:U})=>{let y;for(;I&&I!==U;)y=d(I),s(I),I=y;s(U)},L=(I,U,y,ie,Q,J,b,C,N)=>{U.type==="svg"?b="svg":U.type==="math"&&(b="mathml"),I==null?D(U,y,ie,Q,J,b,C,N):w(I,U,Q,J,b,C,N)},D=(I,U,y,ie,Q,J,b,C)=>{let N,B;const{props:de,shapeFlag:M,transition:g,dirs:P}=I;if(N=I.el=o(I.type,J,de&&de.is,de),M&8?u(N,I.children):M&16&&O(I.children,N,null,ie,Q,bl(I,J),b,C),P&&cs(I,null,ie,"created"),A(N,I,I.scopeId,b,ie),de){for(const Y in de)Y!=="value"&&!qr(Y)&&r(N,Y,null,de[Y],J,ie);"value"in de&&r(N,"value",null,de.value,J),(B=de.onVnodeBeforeMount)&&qn(B,ie,I)}P&&cs(I,null,ie,"beforeMount");const z=Nv(Q,g);z&&g.beforeEnter(N),i(N,U,y),((B=de&&de.onVnodeMounted)||z||P)&&xn(()=>{B&&qn(B,ie,I),z&&g.enter(N),P&&cs(I,null,ie,"mounted")},Q)},A=(I,U,y,ie,Q)=>{if(y&&p(I,y),ie)for(let J=0;J<ie.length;J++)p(I,ie[J]);if(Q){let J=Q.subTree;if(U===J||sg(J.type)&&(J.ssContent===U||J.ssFallback===U)){const b=Q.vnode;A(I,b,b.scopeId,b.slotScopeIds,Q.parent)}}},O=(I,U,y,ie,Q,J,b,C,N=0)=>{for(let B=N;B<I.length;B++){const de=I[B]=C?zi(I[B]):Qn(I[B]);v(null,de,U,y,ie,Q,J,b,C)}},w=(I,U,y,ie,Q,J,b)=>{const C=U.el=I.el;let{patchFlag:N,dynamicChildren:B,dirs:de}=U;N|=I.patchFlag&16;const M=I.props||_t,g=U.props||_t;let P;if(y&&us(y,!1),(P=g.onVnodeBeforeUpdate)&&qn(P,y,U,I),de&&cs(U,I,y,"beforeUpdate"),y&&us(y,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(C,""),B?T(I.dynamicChildren,B,C,y,ie,bl(U,Q),J):b||W(I,U,C,null,y,ie,bl(U,Q),J,!1),N>0){if(N&16)F(C,M,g,y,Q);else if(N&2&&M.class!==g.class&&r(C,"class",null,g.class,Q),N&4&&r(C,"style",M.style,g.style,Q),N&8){const z=U.dynamicProps;for(let Y=0;Y<z.length;Y++){const $=z[Y],Ee=M[$],he=g[$];(he!==Ee||$==="value")&&r(C,$,Ee,he,Q,y)}}N&1&&I.children!==U.children&&u(C,U.children)}else!b&&B==null&&F(C,M,g,y,Q);((P=g.onVnodeUpdated)||de)&&xn(()=>{P&&qn(P,y,U,I),de&&cs(U,I,y,"updated")},ie)},T=(I,U,y,ie,Q,J,b)=>{for(let C=0;C<U.length;C++){const N=I[C],B=U[C],de=N.el&&(N.type===an||!Ur(N,B)||N.shapeFlag&198)?f(N.el):y;v(N,B,de,null,ie,Q,J,b,!0)}},F=(I,U,y,ie,Q)=>{if(U!==y){if(U!==_t)for(const J in U)!qr(J)&&!(J in y)&&r(I,J,U[J],null,Q,ie);for(const J in y){if(qr(J))continue;const b=y[J],C=U[J];b!==C&&J!=="value"&&r(I,J,C,b,Q,ie)}"value"in y&&r(I,"value",U.value,y.value,Q)}},q=(I,U,y,ie,Q,J,b,C,N)=>{const B=U.el=I?I.el:a(""),de=U.anchor=I?I.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:P}=U;P&&(C=C?C.concat(P):P),I==null?(i(B,y,ie),i(de,y,ie),O(U.children||[],y,de,Q,J,b,C,N)):M>0&&M&64&&g&&I.dynamicChildren?(T(I.dynamicChildren,g,y,Q,J,b,C),(U.key!=null||Q&&U===Q.subTree)&&eg(I,U,!0)):W(I,U,y,de,Q,J,b,C,N)},j=(I,U,y,ie,Q,J,b,C,N)=>{U.slotScopeIds=C,I==null?U.shapeFlag&512?Q.ctx.activate(U,y,ie,b,N):oe(U,y,ie,Q,J,b,N):ae(I,U,N)},oe=(I,U,y,ie,Q,J,b)=>{const C=I.component=ex(I,ie,Q);if(Fm(I)&&(C.ctx.renderer=le),tx(C,!1,b),C.asyncDep){if(Q&&Q.registerDep(C,K,b),!I.el){const N=C.subTree=it(Zi);h(null,N,U,y),I.placeholder=N.el}}else K(C,I,U,y,Q,J,b)},ae=(I,U,y)=>{const ie=U.component=I.component;if(Xv(I,U,y))if(ie.asyncDep&&!ie.asyncResolved){Z(ie,U,y);return}else ie.next=U,ie.update();else U.el=I.el,ie.vnode=U},K=(I,U,y,ie,Q,J,b)=>{const C=()=>{if(I.isMounted){let{next:M,bu:g,u:P,parent:z,vnode:Y}=I;{const Re=tg(I);if(Re){M&&(M.el=Y.el,Z(I,M,b)),Re.asyncDep.then(()=>{I.isUnmounted||C()});return}}let $=M,Ee;us(I,!1),M?(M.el=Y.el,Z(I,M,b)):M=Y,g&&pa(g),(Ee=M.props&&M.props.onVnodeBeforeUpdate)&&qn(Ee,z,M,Y),us(I,!0);const he=fh(I),Te=I.subTree;I.subTree=he,v(Te,he,f(Te.el),H(Te),I,Q,J),M.el=he.el,$===null&&$v(I,he.el),P&&xn(P,Q),(Ee=M.props&&M.props.onVnodeUpdated)&&xn(()=>qn(Ee,z,M,Y),Q)}else{let M;const{el:g,props:P}=U,{bm:z,m:Y,parent:$,root:Ee,type:he}=I,Te=Jr(U);us(I,!1),z&&pa(z),!Te&&(M=P&&P.onVnodeBeforeMount)&&qn(M,$,U),us(I,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(he);const Re=I.subTree=fh(I);v(null,Re,y,ie,I,Q,J),U.el=Re.el}if(Y&&xn(Y,Q),!Te&&(M=P&&P.onVnodeMounted)){const Re=U;xn(()=>qn(M,$,Re),Q)}(U.shapeFlag&256||$&&Jr($.vnode)&&$.vnode.shapeFlag&256)&&I.a&&xn(I.a,Q),I.isMounted=!0,U=y=ie=null}};I.scope.on();const N=I.effect=new dm(C);I.scope.off();const B=I.update=N.run.bind(N),de=I.job=N.runIfDirty.bind(N);de.i=I,de.id=I.uid,N.scheduler=()=>ef(de),us(I,!0),B()},Z=(I,U,y)=>{U.component=I;const ie=I.vnode.props;I.vnode=U,I.next=null,Rv(I,U.props,ie,y),Dv(I,U.children,y),Ci(),th(I),Pi()},W=(I,U,y,ie,Q,J,b,C,N=!1)=>{const B=I&&I.children,de=I?I.shapeFlag:0,M=U.children,{patchFlag:g,shapeFlag:P}=U;if(g>0){if(g&128){xe(B,M,y,ie,Q,J,b,C,N);return}else if(g&256){me(B,M,y,ie,Q,J,b,C,N);return}}P&8?(de&16&&be(B,Q,J),M!==B&&u(y,M)):de&16?P&16?xe(B,M,y,ie,Q,J,b,C,N):be(B,Q,J,!0):(de&8&&u(y,""),P&16&&O(M,y,ie,Q,J,b,C,N))},me=(I,U,y,ie,Q,J,b,C,N)=>{I=I||or,U=U||or;const B=I.length,de=U.length,M=Math.min(B,de);let g;for(g=0;g<M;g++){const P=U[g]=N?zi(U[g]):Qn(U[g]);v(I[g],P,y,null,Q,J,b,C,N)}B>de?be(I,Q,J,!0,!1,M):O(U,y,ie,Q,J,b,C,N,M)},xe=(I,U,y,ie,Q,J,b,C,N)=>{let B=0;const de=U.length;let M=I.length-1,g=de-1;for(;B<=M&&B<=g;){const P=I[B],z=U[B]=N?zi(U[B]):Qn(U[B]);if(Ur(P,z))v(P,z,y,null,Q,J,b,C,N);else break;B++}for(;B<=M&&B<=g;){const P=I[M],z=U[g]=N?zi(U[g]):Qn(U[g]);if(Ur(P,z))v(P,z,y,null,Q,J,b,C,N);else break;M--,g--}if(B>M){if(B<=g){const P=g+1,z=P<de?U[P].el:ie;for(;B<=g;)v(null,U[B]=N?zi(U[B]):Qn(U[B]),y,z,Q,J,b,C,N),B++}}else if(B>g)for(;B<=M;)De(I[B],Q,J,!0),B++;else{const P=B,z=B,Y=new Map;for(B=z;B<=g;B++){const Ue=U[B]=N?zi(U[B]):Qn(U[B]);Ue.key!=null&&Y.set(Ue.key,B)}let $,Ee=0;const he=g-z+1;let Te=!1,Re=0;const fe=new Array(he);for(B=0;B<he;B++)fe[B]=0;for(B=P;B<=M;B++){const Ue=I[B];if(Ee>=he){De(Ue,Q,J,!0);continue}let Ne;if(Ue.key!=null)Ne=Y.get(Ue.key);else for($=z;$<=g;$++)if(fe[$-z]===0&&Ur(Ue,U[$])){Ne=$;break}Ne===void 0?De(Ue,Q,J,!0):(fe[Ne-z]=B+1,Ne>=Re?Re=Ne:Te=!0,v(Ue,U[Ne],y,null,Q,J,b,C,N),Ee++)}const Ce=Te?Ov(fe):or;for($=Ce.length-1,B=he-1;B>=0;B--){const Ue=z+B,Ne=U[Ue],ye=U[Ue+1],ze=Ue+1<de?ye.el||ye.placeholder:ie;fe[B]===0?v(null,Ne,y,ze,Q,J,b,C,N):Te&&($<0||B!==Ce[$]?Se(Ne,y,ze,2):$--)}}},Se=(I,U,y,ie,Q=null)=>{const{el:J,type:b,transition:C,children:N,shapeFlag:B}=I;if(B&6){Se(I.component.subTree,U,y,ie);return}if(B&128){I.suspense.move(U,y,ie);return}if(B&64){b.move(I,U,y,le);return}if(b===an){i(J,U,y);for(let M=0;M<N.length;M++)Se(N[M],U,y,ie);i(I.anchor,U,y);return}if(b===Tl){E(I,U,y);return}if(ie!==2&&B&1&&C)if(ie===0)C.beforeEnter(J),i(J,U,y),xn(()=>C.enter(J),Q);else{const{leave:M,delayLeave:g,afterLeave:P}=C,z=()=>{I.ctx.isUnmounted?s(J):i(J,U,y)},Y=()=>{J._isLeaving&&J[rv](!0),M(J,()=>{z(),P&&P()})};g?g(J,z,Y):Y()}else i(J,U,y)},De=(I,U,y,ie=!1,Q=!1)=>{const{type:J,props:b,ref:C,children:N,dynamicChildren:B,shapeFlag:de,patchFlag:M,dirs:g,cacheIndex:P}=I;if(M===-2&&(Q=!1),C!=null&&(Ci(),Zr(C,null,y,I,!0),Pi()),P!=null&&(U.renderCache[P]=void 0),de&256){U.ctx.deactivate(I);return}const z=de&1&&g,Y=!Jr(I);let $;if(Y&&($=b&&b.onVnodeBeforeUnmount)&&qn($,U,I),de&6)_e(I.component,y,ie);else{if(de&128){I.suspense.unmount(y,ie);return}z&&cs(I,null,U,"beforeUnmount"),de&64?I.type.remove(I,U,y,le,ie):B&&!B.hasOnce&&(J!==an||M>0&&M&64)?be(B,U,y,!1,!0):(J===an&&M&384||!Q&&de&16)&&be(N,U,y),ie&&Ye(I)}(Y&&($=b&&b.onVnodeUnmounted)||z)&&xn(()=>{$&&qn($,U,I),z&&cs(I,null,U,"unmounted")},y)},Ye=I=>{const{type:U,el:y,anchor:ie,transition:Q}=I;if(U===an){se(y,ie);return}if(U===Tl){x(I);return}const J=()=>{s(y),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(I.shapeFlag&1&&Q&&!Q.persisted){const{leave:b,delayLeave:C}=Q,N=()=>b(y,J);C?C(I.el,J,N):N()}else J()},se=(I,U)=>{let y;for(;I!==U;)y=d(I),s(I),I=y;s(U)},_e=(I,U,y)=>{const{bum:ie,scope:Q,job:J,subTree:b,um:C,m:N,a:B}=I;uh(N),uh(B),ie&&pa(ie),Q.stop(),J&&(J.flags|=8,De(b,I,U,y)),C&&xn(C,U),xn(()=>{I.isUnmounted=!0},U)},be=(I,U,y,ie=!1,Q=!1,J=0)=>{for(let b=J;b<I.length;b++)De(I[b],U,y,ie,Q)},H=I=>{if(I.shapeFlag&6)return H(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const U=d(I.anchor||I.el),y=U&&U[iv];return y?d(y):U};let re=!1;const ce=(I,U,y)=>{I==null?U._vnode&&De(U._vnode,null,null,!0):v(U._vnode||null,I,U,null,null,null,y),U._vnode=I,re||(re=!0,th(),Dm(),re=!1)},le={p:v,um:De,m:Se,r:Ye,mt:oe,mc:O,pc:W,pbc:T,n:H,o:t};return{render:ce,hydrate:void 0,createApp:Tv(ce)}}function bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function us({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Nv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const i=t.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=zi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&eg(o,a)),a.type===To&&a.patchFlag!==-1&&(a.el=o.el),a.type===Zi&&!a.el&&(a.el=o.el)}}function Ov(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function uh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Fv=Symbol.for("v-scx"),Bv=()=>Vn(Fv);function rf(t,e){return of(t,null,e)}function Ai(t,e,n){return of(t,e,n)}function of(t,e,n=_t){const{immediate:i,deep:s,flush:r,once:o}=n,a=tn({},n),l=e&&i||!e&&r!=="post";let c;if(lo){if(r==="sync"){const p=Bv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=si,p.resume=si,p.pause=si,p}}const u=Jt;a.call=(p,_,v)=>ai(p,u,_,v);let f=!1;r==="post"?a.scheduler=p=>{xn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():ef(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Q0(t,e,a);return lo&&(c?c.push(d):l&&d()),d}function kv(t,e,n){const i=this.proxy,s=Dt(t)?t.includes(".")?ng(i,t):()=>i[t]:t.bind(i,i);let r;qe(e)?r=e:(r=e.handler,n=e);const o=wo(this),a=of(s,r.bind(i),n);return o(),a}function ng(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const Hv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dn(e)}Modifiers`]||t[`${Is(e)}Modifiers`];function zv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||_t;let s=n;const r=e.startsWith("update:"),o=r&&Hv(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Dt(u)?u.trim():u)),o.number&&(s=n.map(yc)));let a,l=i[a=vl(e)]||i[a=vl(Dn(e))];!l&&r&&(l=i[a=vl(Is(e))]),l&&ai(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ai(c,t,6,s)}}const Vv=new WeakMap;function ig(t,e,n=!1){const i=n?Vv:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=ig(c,e,!0);u&&(a=!0,tn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Tt(t)&&i.set(t,null),null):($e(r)?r.forEach(l=>o[l]=null):tn(o,r),Tt(t)&&i.set(t,o),o)}function Qa(t,e){return!t||!Xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,Is(e))||ht(t,e))}function fh(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:v}=t,m=Ia(t);let h,S;try{if(n.shapeFlag&4){const x=s||i,L=x;h=Qn(c.call(L,x,u,f,p,d,_)),S=a}else{const x=e;h=Qn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),S=e.props?a:Gv(a)}}catch(x){eo.length=0,Za(x,t,1),h=it(Zi)}let E=h;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:L}=E;x.length&&L&7&&(r&&x.some(ku)&&(S=Wv(S,r)),E=dr(E,S,!1,!0))}return n.dirs&&(E=dr(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&tf(E,n.transition),h=E,Ia(m),h}const Gv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xa(n))&&((e||(e={}))[n]=t[n]);return e},Wv=(t,e)=>{const n={};for(const i in t)(!ku(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Xv(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?hh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Qa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?hh(i,o,c):!0:!!o;return!1}function hh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!Qa(n,r))return!0}return!1}function $v({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const sg=t=>t.__isSuspense;function jv(t,e){e&&e.pendingBranch?$e(t)?e.effects.push(...t):e.effects.push(t):nv(t)}const an=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),Tl=Symbol.for("v-stc"),eo=[];let En=null;function mt(t=!1){eo.push(En=t?null:[])}function qv(){eo.pop(),En=eo[eo.length-1]||null}let ao=1;function Fa(t,e=!1){ao+=t,t<0&&En&&e&&(En.hasOnce=!0)}function rg(t){return t.dynamicChildren=ao>0?En||or:null,qv(),ao>0&&En&&En.push(t),t}function St(t,e,n,i,s,r){return rg(We(t,e,n,i,s,r,!0))}function og(t,e,n,i,s){return rg(it(t,e,n,i,s,!0))}function Ba(t){return t?t.__v_isVNode===!0:!1}function Ur(t,e){return t.type===e.type&&t.key===e.key}const ag=({key:t})=>t??null,ga=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Dt(t)||Lt(t)||qe(t)?{i:yn,r:t,k:e,f:!!n}:t:null);function We(t,e=null,n=null,i=0,s=null,r=t===an?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ag(e),ref:e&&ga(e),scopeId:Um,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yn};return a?(af(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Dt(n)?8:16),ao>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const it=Yv;function Yv(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===zm)&&(t=Zi),Ba(t)){const a=dr(t,e,!0);return n&&af(a,n),ao>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(t)]=a:En.push(a)),a.patchFlag=-2,a}if(ox(t)&&(t=t.__vccOpts),e){e=Kv(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=Yi(a)),Tt(l)&&(Ku(l)&&!$e(l)&&(l=tn({},l)),e.style=Vu(l))}const o=Dt(t)?1:sg(t)?128:sv(t)?64:Tt(t)?4:qe(t)?2:0;return We(t,e,n,i,s,o,r,!0)}function Kv(t){return t?Ku(t)||qm(t)?tn({},t):t:null}function dr(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Zv(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ag(c),ref:e&&e.ref?n&&r?$e(r)?r.concat(ga(e)):[r,ga(e)]:ga(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&dr(t.ssContent),ssFallback:t.ssFallback&&dr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&tf(u,l.clone(u)),u}function $r(t=" ",e=0){return it(To,null,t,e)}function Mi(t="",e=!1){return e?(mt(),og(Zi,null,t)):it(Zi,null,t)}function Qn(t){return t==null||typeof t=="boolean"?it(Zi):$e(t)?it(an,null,t.slice()):Ba(t)?zi(t):it(To,null,String(t))}function zi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:dr(t)}function af(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($e(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),af(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!qm(e)?e._ctx=yn:s===3&&yn&&(yn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:yn},n=32):(e=String(e),i&64?(n=16,e=[$r(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Yi([e.class,i.class]));else if(s==="style")e.style=Vu([e.style,i.style]);else if(Xa(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function qn(t,e,n,i=null){ai(t,e,7,[n,i])}const Jv=Xm();let Qv=0;function ex(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Jv,r={uid:Qv++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Km(i,s),emitsOptions:ig(i,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zv.bind(null,r),t.ce&&t.ce(r),r}let Jt=null;const Ji=()=>Jt||yn;let ka,Pc;{const t=Ya(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ka=e("__VUE_INSTANCE_SETTERS__",n=>Jt=n),Pc=e("__VUE_SSR_SETTERS__",n=>lo=n)}const wo=t=>{const e=Jt;return ka(t),t.scope.on(),()=>{t.scope.off(),ka(e)}},dh=()=>{Jt&&Jt.scope.off(),ka(null)};function lg(t){return t.vnode.shapeFlag&4}let lo=!1;function tx(t,e=!1,n=!1){e&&Pc(e);const{props:i,children:s}=t.vnode,r=lg(t);Av(t,i,r,e),Lv(t,s,n||e);const o=r?nx(t,e):void 0;return e&&Pc(!1),o}function nx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vv);const{setup:i}=n;if(i){Ci();const s=t.setupContext=i.length>1?sx(t):null,r=wo(t),o=bo(i,t,0,[t.props,s]),a=sm(o);if(Pi(),r(),(a||t.sp)&&!Jr(t)&&Nm(t),a){if(o.then(dh,dh),e)return o.then(l=>{ph(t,l)}).catch(l=>{Za(l,t,0)});t.asyncDep=o}else ph(t,o)}else cg(t)}function ph(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Tt(e)&&(t.setupState=Cm(e)),cg(t)}function cg(t,e,n){const i=t.type;t.render||(t.render=i.render||si);{const s=wo(t);Ci();try{xv(t)}finally{Pi(),s()}}}const ix={get(t,e){return Zt(t,"get",""),t[e]}};function sx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ix),slots:t.slots,emit:t.emit,expose:e}}function el(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cm(Zu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qr)return Qr[n](t)},has(e,n){return n in e||n in Qr}})):t.proxy}function rx(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function ox(t){return qe(t)&&"__vccOpts"in t}const Nt=(t,e)=>Z0(t,e,lo);function tl(t,e,n){try{Fa(-1);const i=arguments.length;return i===2?Tt(e)&&!$e(e)?Ba(e)?it(t,null,[e]):it(t,e):it(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ba(n)&&(n=[n]),it(t,e,n))}finally{Fa(1)}}const ax="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lc;const mh=typeof window<"u"&&window.trustedTypes;if(mh)try{Lc=mh.createPolicy("vue",{createHTML:t=>t})}catch{}const ug=Lc?t=>Lc.createHTML(t):t=>t,lx="http://www.w3.org/2000/svg",cx="http://www.w3.org/1998/Math/MathML",xi=typeof document<"u"?document:null,gh=xi&&xi.createElement("template"),ux={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?xi.createElementNS(lx,t):e==="mathml"?xi.createElementNS(cx,t):n?xi.createElement(t,{is:n}):xi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>xi.createTextNode(t),createComment:t=>xi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{gh.innerHTML=ug(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=gh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fx=Symbol("_vtc");function hx(t,e,n){const i=t[fx];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _h=Symbol("_vod"),dx=Symbol("_vsh"),px=Symbol(""),mx=/(?:^|;)\s*display\s*:/;function gx(t,e,n){const i=t.style,s=Dt(n);let r=!1;if(n&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_a(i,a,"")}else for(const o in e)n[o]==null&&_a(i,o,"");for(const o in n)o==="display"&&(r=!0),_a(i,o,n[o])}else if(s){if(e!==n){const o=i[px];o&&(n+=";"+o),i.cssText=n,r=mx.test(n)}}else e&&t.removeAttribute("style");_h in t&&(t[_h]=r?i.display:"",t[dx]&&(i.display="none"))}const vh=/\s*!important$/;function _a(t,e,n){if($e(n))n.forEach(i=>_a(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=_x(t,e);vh.test(n)?t.setProperty(Is(i),n.replace(vh,""),"important"):t[i]=n}}const xh=["Webkit","Moz","ms"],wl={};function _x(t,e){const n=wl[e];if(n)return n;let i=Dn(e);if(i!=="filter"&&i in t)return wl[e]=i;i=qa(i);for(let s=0;s<xh.length;s++){const r=xh[s]+i;if(r in t)return wl[e]=r}return e}const Sh="http://www.w3.org/1999/xlink";function yh(t,e,n,i,s,r=b0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sh,e.slice(6,e.length)):t.setAttributeNS(Sh,e,n):n==null||r&&!lm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ts(n)?String(n):n)}function Eh(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ug(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=lm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function tr(t,e,n,i){t.addEventListener(e,n,i)}function vx(t,e,n,i){t.removeEventListener(e,n,i)}const Mh=Symbol("_vei");function xx(t,e,n,i,s=null){const r=t[Mh]||(t[Mh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Sx(e);if(i){const c=r[e]=Mx(i,s);tr(t,a,c,l)}else o&&(vx(t,a,o,l),r[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function Sx(t){let e;if(bh.test(t)){e={};let i;for(;i=t.match(bh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Is(t.slice(2)),e]}let Al=0;const yx=Promise.resolve(),Ex=()=>Al||(yx.then(()=>Al=0),Al=Date.now());function Mx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ai(bx(i,n.value),e,5,[i])};return n.value=t,n.attached=Ex(),n}function bx(t,e){if($e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Th=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Tx=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?hx(t,i,o):e==="style"?gx(t,n,i):Xa(e)?ku(e)||xx(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wx(t,e,i,o))?(Eh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yh(t,e,i,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Dt(i))?Eh(t,Dn(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),yh(t,e,i,o))};function wx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Th(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Th(e)&&Dt(n)?!1:e in t}const wh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $e(e)?n=>pa(e,n):e};function Ax(t){t.target.composing=!0}function Ah(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rl=Symbol("_assign"),Rh={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[Rl]=wh(s);const r=i||s.props&&s.props.type==="number";tr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=yc(a)),t[Rl](a)}),n&&tr(t,"change",()=>{t.value=t.value.trim()}),e||(tr(t,"compositionstart",Ax),tr(t,"compositionend",Ah),tr(t,"change",Ah))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[Rl]=wh(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?yc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Rx=tn({patchProp:Tx},ux);let Ch;function Cx(){return Ch||(Ch=Iv(Rx))}const Px=((...t)=>{const e=Cx().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Dx(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Lx(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Lx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Dx(t){return Dt(t)?document.querySelector(t):t}const Ix=$t({name:"a-hoverable",props:{isExternal:{type:Boolean,default:!1},to:{type:String,default:""},target:{type:String,default:"_self"},imgSrc:{type:String,default:""},shape:{type:String,default:"pill"},effect:{type:String,default:""},text:{type:String,default:""}}}),$n=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},Ux={key:0,class:"relative w-50 h-50"},Nx=["src","alt"],Ox={key:1,class:"font-size-16 capitalize"};function Fx(t,e,n,i,s,r){return mt(),og(gv(t.isExternal?"a":"router-link"),{class:Yi(["flex row a-center h-50 user-select-none pointer",{"j-start":t.shape==="pill"},{"j-center":t.shape==="round"},t.effect]),to:t.isExternal?void 0:{name:t.to},href:t.isExternal?t.to:void 0,target:t.target},{default:Ua(()=>[t.imgSrc?(mt(),St("div",Ux,[We("img",{src:t.imgSrc,alt:t.to},null,8,Nx)])):Mi("",!0),t.text?(mt(),St("span",Ox,ti(t.text),1)):Mi("",!0)]),_:1},8,["class","to","href","target"])}const fg=$n(Ix,[["render",Fx]]),Bx=$t({name:"switch-button",props:{isActive:{type:Boolean,default:!1},change:{type:Function,default:()=>{}},imgSrcL:{type:String,default:""},imgSrcR:{type:String,default:""},textL:{type:String,default:""},textR:{type:String,default:""}}}),kx={key:0,class:"relative"},Hx=["src"],zx={key:1,class:""},Vx={key:0,class:"relative"},Gx=["src"],Wx={key:1,class:""};function Xx(t,e,n,i,s,r){return mt(),St("button",{class:"flex row j-center border-none bg-none w-32 h-32 font-size-16 pointer user-select-none",onClick:e[0]||(e[0]=(...o)=>t.change&&t.change(...o))},[We("div",{class:Yi(["tr-100 a-content-center",{"w-full o-1":!t.isActive},{"w-0 o-0":t.isActive}])},[t.imgSrcL?(mt(),St("div",kx,[We("img",{src:t.imgSrcL},null,8,Hx)])):Mi("",!0),t.textL?(mt(),St("span",zx,ti(t.textL),1)):Mi("",!0)],2),We("div",{class:Yi(["tr-100 a-content-center",{"w-full o-1":t.isActive},{"w-0 o-0":!t.isActive}])},[t.imgSrcR?(mt(),St("div",Vx,[We("img",{src:t.imgSrcR},null,8,Gx)])):Mi("",!0),t.textR?(mt(),St("span",Wx,ti(t.textR),1)):Mi("",!0)],2)])}const hg=$n(Bx,[["render",Xx]]),$x="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z'/%3e%3cpath%20d='M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z'/%3e%3c/svg%3e",jx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",qx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",Yx="data:image/svg+xml,%3csvg%20id='Layer_1'%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%3e%3cpath%20d='m4%206a2.982%202.982%200%200%201%20-2.122-.879l-1.544-1.374a1%201%200%200%201%201.332-1.494l1.585%201.414a1%201%200%200%200%201.456.04l3.604-3.431a1%201%200%200%201%201.378%201.448l-3.589%203.414a2.964%202.964%200%200%201%20-2.1.862zm20-2a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.589-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1.023%201.023%200%200%201%20-1.414%200l-1.59-1.585a1%201%200%200%200%20-1.414%201.414l1.585%201.585a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.585-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1%201%200%200%201%20-1.456-.04l-1.585-1.414a1%201%200%200%200%20-1.332%201.494l1.544%201.374a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1z'/%3e%3c/svg%3e",Kx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",Zx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",Jx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",Qx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,20c-.552,0-1-.447-1-1,0-2.318,1.382-4.357,3.891-5.741,2.287-1.26,3.469-3.755,3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57,.147-4.952,1.307-1.363,1.144-2.144,2.82-2.144,4.597,0,.552-.448,1-1,1s-1-.448-1-1c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.289,13.441,.126c3.222,.565,5.866,3.21,6.432,6.432,.598,3.402-1.017,6.798-4.016,8.453-1.303,.718-2.857,1.993-2.857,3.989,0,.553-.448,1-1,1Zm-1.5,2.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z'/%3e%3c/svg%3e",eS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",tS="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z'/%3e%3cpath%20d='M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z'/%3e%3c/svg%3e",dg=Object.freeze(Object.defineProperty({__proto__:null,angleDoubleRight:$x,crossSmall:jx,home:qx,list:Kx,listCheck:Yx,menuBurger:Zx,moonStars:Jx,question:Qx,sun:eS,user:tS},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let pg;const nl=t=>pg=t,mg=Symbol();function Dc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var to;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(to||(to={}));function nS(){const t=Gu(!0),e=t.run(()=>ln({}));let n=[],i=[];const s=Zu({install(r){nl(s),s._a=r,r.provide(mg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>n.push(o)),i=[]},use(r){return this._a?n.push(r):i.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const gg=()=>{};function Ph(t,e,n,i=gg){t.push(e);const s=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),i())};return!n&&hm()&&T0(s),s}function Bs(t,...e){t.slice().forEach(n=>{n(...e)})}const iS=t=>t(),Lh=Symbol(),Cl=Symbol();function Ic(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];Dc(s)&&Dc(i)&&t.hasOwnProperty(n)&&!Lt(i)&&!$i(i)?t[n]=Ic(s,i):t[n]=i}return t}const sS=Symbol();function rS(t){return!Dc(t)||!Object.prototype.hasOwnProperty.call(t,sS)}const{assign:ki}=Object;function oS(t){return!!(Lt(t)&&t.effect)}function aS(t,e,n,i){const{state:s,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=j0(n.state.value[t]);return ki(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=Zu(Nt(()=>{nl(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=_g(t,c,e,n,i,!0),l}function _g(t,e,n={},i,s,r){let o;const a=ki({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[t];!r&&!_&&(i.state.value[t]={}),ln({});let v;function m(O){let w;c=u=!1,typeof O=="function"?(O(i.state.value[t]),w={type:to.patchFunction,storeId:t,events:p}):(Ic(i.state.value[t],O),w={type:to.patchObject,payload:O,storeId:t,events:p});const T=v=Symbol();Qu().then(()=>{v===T&&(c=!0)}),u=!0,Bs(f,w,i.state.value[t])}const h=r?function(){const{state:w}=n,T=w?w():{};this.$patch(F=>{ki(F,T)})}:gg;function S(){o.stop(),f=[],d=[],i._s.delete(t)}const E=(O,w="")=>{if(Lh in O)return O[Cl]=w,O;const T=function(){nl(i);const F=Array.from(arguments),q=[],j=[];function oe(Z){q.push(Z)}function ae(Z){j.push(Z)}Bs(d,{args:F,name:T[Cl],store:L,after:oe,onError:ae});let K;try{K=O.apply(this&&this.$id===t?this:L,F)}catch(Z){throw Bs(j,Z),Z}return K instanceof Promise?K.then(Z=>(Bs(q,Z),Z)).catch(Z=>(Bs(j,Z),Promise.reject(Z))):(Bs(q,K),K)};return T[Lh]=!0,T[Cl]=w,T},x={_p:i,$id:t,$onAction:Ph.bind(null,d),$patch:m,$reset:h,$subscribe(O,w={}){const T=Ph(f,O,w.detached,()=>F()),F=o.run(()=>Ai(()=>i.state.value[t],q=>{(w.flush==="sync"?u:c)&&O({storeId:t,type:to.direct,events:p},q)},ki({},l,w)));return T},$dispose:S},L=Mo(x);i._s.set(t,L);const A=(i._a&&i._a.runWithContext||iS)(()=>i._e.run(()=>(o=Gu()).run(()=>e({action:E}))));for(const O in A){const w=A[O];if(Lt(w)&&!oS(w)||$i(w))r||(_&&rS(w)&&(Lt(w)?w.value=_[O]:Ic(w,_[O])),i.state.value[t][O]=w);else if(typeof w=="function"){const T=E(w,O);A[O]=T,a.actions[O]=w}}return ki(L,A),ki(rt(L),A),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:O=>{m(w=>{ki(w,O)})}}),i._p.forEach(O=>{ki(L,o.run(()=>O({store:L,app:i._a,pinia:i,options:a})))}),_&&r&&n.hydrate&&n.hydrate(L.$state,_),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function lf(t,e,n){let i;const s=typeof e=="function";i=s?n:e;function r(o,a){const l=wv();return o=o||(l?Vn(mg,null):null),o&&nl(o),o=pg,o._s.has(t)||(s?_g(t,e,i,o):aS(t,i,o)),o._s.get(t)}return r.$id=t,r}const lS=["light","dark"],Ao=lf("theme",()=>{const t=localStorage.getItem("theme"),e=ln(lS.includes(t)?t:"light");rf(()=>{localStorage.setItem("theme",e.value)});const n=Nt(()=>e.value==="dark");return{theme:e,isDark:n,changeTheme:()=>{switch(e.value){case"light":e.value="dark";break;case"dark":e.value="light";break}}}});/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function cS(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ha=typeof window<"u",ns=(t,e=!1)=>e?Symbol.for(t):Symbol(t),uS=(t,e,n)=>fS({l:t,k:e,s:n}),fS=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ot=t=>typeof t=="number"&&isFinite(t),hS=t=>cf(t)==="[object Date]",pr=t=>cf(t)==="[object RegExp]",il=t=>tt(t)&&Object.keys(t).length===0,kt=Object.assign,dS=Object.create,xt=(t=null)=>dS(t);let Dh;const ys=()=>Dh||(Dh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:xt());function Ih(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Uh(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pS(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,s,r)=>`${s}="${Uh(r)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,s,r)=>`${s}='${Uh(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const mS=Object.prototype.hasOwnProperty;function kn(t,e){return mS.call(t,e)}const Ct=Array.isArray,bt=t=>typeof t=="function",Pe=t=>typeof t=="string",at=t=>typeof t=="boolean",lt=t=>t!==null&&typeof t=="object",gS=t=>lt(t)&&bt(t.then)&&bt(t.catch),vg=Object.prototype.toString,cf=t=>vg.call(t),tt=t=>cf(t)==="[object Object]",_S=t=>t==null?"":Ct(t)||tt(t)&&t.toString===vg?JSON.stringify(t,null,2):String(t);function uf(t,e=""){return t.reduce((n,i,s)=>s===0?n+i:n+e+i,"")}const Ho=t=>!lt(t)||Ct(t);function va(t,e){if(Ho(t)||Ho(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:s}=n.pop();Object.keys(i).forEach(r=>{r!=="__proto__"&&(lt(i[r])&&!lt(s[r])&&(s[r]=Array.isArray(i[r])?[]:xt()),Ho(s[r])||Ho(i[r])?s[r]=i[r]:n.push({src:i[r],des:s[r]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function vS(t,e,n){return{line:t,column:e,offset:n}}function Uc(t,e,n){return{start:t,end:e}}const ft={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},xS=17;function sl(t,e,n={}){const{domain:i,messages:s,args:r}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function SS(t){throw t}const Yn=" ",yS="\r",Yt=`
`,ES="\u2028",MS="\u2029";function bS(t){const e=t;let n=0,i=1,s=1,r=0;const o=A=>e[A]===yS&&e[A+1]===Yt,a=A=>e[A]===Yt,l=A=>e[A]===MS,c=A=>e[A]===ES,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>n,d=()=>i,p=()=>s,_=()=>r,v=A=>o(A)||l(A)||c(A)?Yt:e[A],m=()=>v(n),h=()=>v(n+r);function S(){return r=0,u(n)&&(i++,s=0),o(n)&&n++,n++,s++,e[n]}function E(){return o(n+r)&&r++,r++,e[n+r]}function x(){n=0,i=1,s=1,r=0}function L(A=0){r=A}function D(){const A=n+r;for(;A!==n;)S();r=0}return{index:f,line:d,column:p,peekOffset:_,charAt:v,currentChar:m,currentPeek:h,next:S,peek:E,reset:x,resetPeek:L,skipToPeek:D}}const fi=void 0,TS=".",Nh="'",wS="tokenizer";function AS(t,e={}){const n=e.location!==!1,i=bS(t),s=()=>i.index(),r=()=>vS(i.line(),i.column(),i.index()),o=r(),a=s(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(b,C,N,...B){const de=c();if(C.column+=N,C.offset+=N,u){const M=n?Uc(de.startLoc,C):null,g=sl(b,M,{domain:wS,args:B});u(g)}}function d(b,C,N){b.endLoc=r(),b.currentType=C;const B={type:C};return n&&(B.loc=Uc(b.startLoc,b.endLoc)),N!=null&&(B.value=N),B}const p=b=>d(b,13);function _(b,C){return b.currentChar()===C?(b.next(),C):(f(ft.EXPECTED_TOKEN,r(),0,C),"")}function v(b){let C="";for(;b.currentPeek()===Yn||b.currentPeek()===Yt;)C+=b.currentPeek(),b.peek();return C}function m(b){const C=v(b);return b.skipToPeek(),C}function h(b){if(b===fi)return!1;const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function S(b){if(b===fi)return!1;const C=b.charCodeAt(0);return C>=48&&C<=57}function E(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const B=h(b.currentPeek());return b.resetPeek(),B}function x(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const B=b.currentPeek()==="-"?b.peek():b.currentPeek(),de=S(B);return b.resetPeek(),de}function L(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const B=b.currentPeek()===Nh;return b.resetPeek(),B}function D(b,C){const{currentType:N}=C;if(N!==7)return!1;v(b);const B=b.currentPeek()===".";return b.resetPeek(),B}function A(b,C){const{currentType:N}=C;if(N!==8)return!1;v(b);const B=h(b.currentPeek());return b.resetPeek(),B}function O(b,C){const{currentType:N}=C;if(!(N===7||N===11))return!1;v(b);const B=b.currentPeek()===":";return b.resetPeek(),B}function w(b,C){const{currentType:N}=C;if(N!==9)return!1;const B=()=>{const M=b.currentPeek();return M==="{"?h(b.peek()):M==="@"||M==="|"||M===":"||M==="."||M===Yn||!M?!1:M===Yt?(b.peek(),B()):F(b,!1)},de=B();return b.resetPeek(),de}function T(b){v(b);const C=b.currentPeek()==="|";return b.resetPeek(),C}function F(b,C=!0){const N=(de=!1,M="")=>{const g=b.currentPeek();return g==="{"||g==="@"||!g?de:g==="|"?!(M===Yn||M===Yt):g===Yn?(b.peek(),N(!0,Yn)):g===Yt?(b.peek(),N(!0,Yt)):!0},B=N();return C&&b.resetPeek(),B}function q(b,C){const N=b.currentChar();return N===fi?fi:C(N)?(b.next(),N):null}function j(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function oe(b){return q(b,j)}function ae(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function K(b){return q(b,ae)}function Z(b){const C=b.charCodeAt(0);return C>=48&&C<=57}function W(b){return q(b,Z)}function me(b){const C=b.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function xe(b){return q(b,me)}function Se(b){let C="",N="";for(;C=W(b);)N+=C;return N}function De(b){let C="";for(;;){const N=b.currentChar();if(N==="{"||N==="}"||N==="@"||N==="|"||!N)break;if(N===Yn||N===Yt)if(F(b))C+=N,b.next();else{if(T(b))break;C+=N,b.next()}else C+=N,b.next()}return C}function Ye(b){m(b);let C="",N="";for(;C=K(b);)N+=C;const B=b.currentChar();if(B&&B!=="}"&&B!==fi&&B!==Yn&&B!==Yt&&B!=="　"){const de=le(b);return f(ft.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,N+de),N+de}return b.currentChar()===fi&&f(ft.UNTERMINATED_CLOSING_BRACE,r(),0),N}function se(b){m(b);let C="";return b.currentChar()==="-"?(b.next(),C+=`-${Se(b)}`):C+=Se(b),b.currentChar()===fi&&f(ft.UNTERMINATED_CLOSING_BRACE,r(),0),C}function _e(b){return b!==Nh&&b!==Yt}function be(b){m(b),_(b,"'");let C="",N="";for(;C=q(b,_e);)C==="\\"?N+=H(b):N+=C;const B=b.currentChar();return B===Yt||B===fi?(f(ft.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),B===Yt&&(b.next(),_(b,"'")),N):(_(b,"'"),N)}function H(b){const C=b.currentChar();switch(C){case"\\":case"'":return b.next(),`\\${C}`;case"u":return re(b,C,4);case"U":return re(b,C,6);default:return f(ft.UNKNOWN_ESCAPE_SEQUENCE,r(),0,C),""}}function re(b,C,N){_(b,C);let B="";for(let de=0;de<N;de++){const M=xe(b);if(!M){f(ft.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${C}${B}${b.currentChar()}`);break}B+=M}return`\\${C}${B}`}function ce(b){return b!=="{"&&b!=="}"&&b!==Yn&&b!==Yt}function le(b){m(b);let C="",N="";for(;C=q(b,ce);)N+=C;return N}function Be(b){let C="",N="";for(;C=oe(b);)N+=C;return N}function I(b){const C=N=>{const B=b.currentChar();return B==="{"||B==="@"||B==="|"||B==="("||B===")"||!B||B===Yn?N:(N+=B,b.next(),C(N))};return C("")}function U(b){m(b);const C=_(b,"|");return m(b),C}function y(b,C){let N=null;switch(b.currentChar()){case"{":return C.braceNest>=1&&f(ft.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),b.next(),N=d(C,2,"{"),m(b),C.braceNest++,N;case"}":return C.braceNest>0&&C.currentType===2&&f(ft.EMPTY_PLACEHOLDER,r(),0),b.next(),N=d(C,3,"}"),C.braceNest--,C.braceNest>0&&m(b),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),N;case"@":return C.braceNest>0&&f(ft.UNTERMINATED_CLOSING_BRACE,r(),0),N=ie(b,C)||p(C),C.braceNest=0,N;default:{let de=!0,M=!0,g=!0;if(T(b))return C.braceNest>0&&f(ft.UNTERMINATED_CLOSING_BRACE,r(),0),N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(ft.UNTERMINATED_CLOSING_BRACE,r(),0),C.braceNest=0,Q(b,C);if(de=E(b,C))return N=d(C,4,Ye(b)),m(b),N;if(M=x(b,C))return N=d(C,5,se(b)),m(b),N;if(g=L(b,C))return N=d(C,6,be(b)),m(b),N;if(!de&&!M&&!g)return N=d(C,12,le(b)),f(ft.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,N.value),m(b),N;break}}return N}function ie(b,C){const{currentType:N}=C;let B=null;const de=b.currentChar();switch((N===7||N===8||N===11||N===9)&&(de===Yt||de===Yn)&&f(ft.INVALID_LINKED_FORMAT,r(),0),de){case"@":return b.next(),B=d(C,7,"@"),C.inLinked=!0,B;case".":return m(b),b.next(),d(C,8,".");case":":return m(b),b.next(),d(C,9,":");default:return T(b)?(B=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,B):D(b,C)||O(b,C)?(m(b),ie(b,C)):A(b,C)?(m(b),d(C,11,Be(b))):w(b,C)?(m(b),de==="{"?y(b,C)||B:d(C,10,I(b))):(N===7&&f(ft.INVALID_LINKED_FORMAT,r(),0),C.braceNest=0,C.inLinked=!1,Q(b,C))}}function Q(b,C){let N={type:13};if(C.braceNest>0)return y(b,C)||p(C);if(C.inLinked)return ie(b,C)||p(C);switch(b.currentChar()){case"{":return y(b,C)||p(C);case"}":return f(ft.UNBALANCED_CLOSING_BRACE,r(),0),b.next(),d(C,3,"}");case"@":return ie(b,C)||p(C);default:{if(T(b))return N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(F(b))return d(C,0,De(b));break}}return N}function J(){const{currentType:b,offset:C,startLoc:N,endLoc:B}=l;return l.lastType=b,l.lastOffset=C,l.lastStartLoc=N,l.lastEndLoc=B,l.offset=s(),l.startLoc=r(),i.currentChar()===fi?d(l,13):Q(i,l)}return{nextToken:J,currentOffset:s,currentPosition:r,context:c}}const RS="parser",CS=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function PS(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function LS(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,S,E,x,...L){const D=h.currentPosition();if(D.offset+=x,D.column+=x,n){const A=e?Uc(E,D):null,O=sl(S,A,{domain:RS,args:L});n(O)}}function s(h,S,E){const x={type:h};return e&&(x.start=S,x.end=S,x.loc={start:E,end:E}),x}function r(h,S,E,x){e&&(h.end=S,h.loc&&(h.loc.end=E))}function o(h,S){const E=h.context(),x=s(3,E.offset,E.startLoc);return x.value=S,r(x,h.currentOffset(),h.currentPosition()),x}function a(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:L}=E,D=s(5,x,L);return D.index=parseInt(S,10),h.nextToken(),r(D,h.currentOffset(),h.currentPosition()),D}function l(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:L}=E,D=s(4,x,L);return D.key=S,h.nextToken(),r(D,h.currentOffset(),h.currentPosition()),D}function c(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:L}=E,D=s(9,x,L);return D.value=S.replace(CS,PS),h.nextToken(),r(D,h.currentOffset(),h.currentPosition()),D}function u(h){const S=h.nextToken(),E=h.context(),{lastOffset:x,lastStartLoc:L}=E,D=s(8,x,L);return S.type!==11?(i(h,ft.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),D.value="",r(D,x,L),{nextConsumeToken:S,node:D}):(S.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Kn(S)),D.value=S.value||"",r(D,h.currentOffset(),h.currentPosition()),{node:D})}function f(h,S){const E=h.context(),x=s(7,E.offset,E.startLoc);return x.value=S,r(x,h.currentOffset(),h.currentPosition()),x}function d(h){const S=h.context(),E=s(6,S.offset,S.startLoc);let x=h.nextToken();if(x.type===8){const L=u(h);E.modifier=L.node,x=L.nextConsumeToken||h.nextToken()}switch(x.type!==9&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),x=h.nextToken(),x.type===2&&(x=h.nextToken()),x.type){case 10:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=f(h,x.value||"");break;case 4:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=l(h,x.value||"");break;case 5:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=a(h,x.value||"");break;case 6:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(x)),E.key=c(h,x.value||"");break;default:{i(h,ft.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const L=h.context(),D=s(7,L.offset,L.startLoc);return D.value="",r(D,L.offset,L.startLoc),E.key=D,r(E,L.offset,L.startLoc),{nextConsumeToken:x,node:E}}}return r(E,h.currentOffset(),h.currentPosition()),{node:E}}function p(h){const S=h.context(),E=S.currentType===1?h.currentOffset():S.offset,x=S.currentType===1?S.endLoc:S.startLoc,L=s(2,E,x);L.items=[];let D=null;do{const w=D||h.nextToken();switch(D=null,w.type){case 0:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(w)),L.items.push(o(h,w.value||""));break;case 5:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(w)),L.items.push(a(h,w.value||""));break;case 4:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(w)),L.items.push(l(h,w.value||""));break;case 6:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Kn(w)),L.items.push(c(h,w.value||""));break;case 7:{const T=d(h);L.items.push(T.node),D=T.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const A=S.currentType===1?S.lastOffset:h.currentOffset(),O=S.currentType===1?S.lastEndLoc:h.currentPosition();return r(L,A,O),L}function _(h,S,E,x){const L=h.context();let D=x.items.length===0;const A=s(1,S,E);A.cases=[],A.cases.push(x);do{const O=p(h);D||(D=O.items.length===0),A.cases.push(O)}while(L.currentType!==13);return D&&i(h,ft.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),r(A,h.currentOffset(),h.currentPosition()),A}function v(h){const S=h.context(),{offset:E,startLoc:x}=S,L=p(h);return S.currentType===13?L:_(h,E,x,L)}function m(h){const S=AS(h,kt({},t)),E=S.context(),x=s(0,E.offset,E.startLoc);return e&&x.loc&&(x.loc.source=h),x.body=v(S),t.onCacheKey&&(x.cacheKey=t.onCacheKey(h)),E.currentType!==13&&i(S,ft.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,h[E.offset]||""),r(x,S.currentOffset(),S.currentPosition()),x}return{parse:m}}function Kn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function DS(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:r=>(n.helpers.add(r),r)}}function Oh(t,e){for(let n=0;n<t.length;n++)ff(t[n],e)}function ff(t,e){switch(t.type){case 1:Oh(t.cases,e),e.helper("plural");break;case 2:Oh(t.items,e);break;case 6:{ff(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function IS(t,e={}){const n=DS(t);n.helper("normalize"),t.body&&ff(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function US(t){const e=t.body;return e.type===2?Fh(e):e.cases.forEach(n=>Fh(n)),t}function Fh(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=uf(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function nr(t){switch(t.t=t.type,t.type){case 0:{const e=t;nr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)nr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)nr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;nr(e.key),e.k=e.key,delete e.key,e.modifier&&(nr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function NS(t,e){const{filename:n,breakLineCode:i,needIndent:s}=e,r=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0};r&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(v,m){o.code+=v}function c(v,m=!0){const h=m?i:"";l(s?h+"  ".repeat(v):h)}function u(v=!0){const m=++o.indentLevel;v&&c(m)}function f(v=!0){const m=--o.indentLevel;v&&c(m)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>o.needIndent}}function OS(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),mr(t,e.key),e.modifier?(t.push(", "),mr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function FS(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const s=e.items.length;for(let r=0;r<s&&(mr(t,e.items[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}function BS(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const s=e.cases.length;for(let r=0;r<s&&(mr(t,e.cases[r]),r!==s-1);r++)t.push(", ");t.deindent(i()),t.push("])")}}function kS(t,e){e.body?mr(t,e.body):t.push("null")}function mr(t,e){const{helper:n}=t;switch(e.type){case 0:kS(t,e);break;case 1:BS(t,e);break;case 2:FS(t,e);break;case 6:OS(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const HS=(t,e={})=>{const n=Pe(e.mode)?e.mode:"normal",i=Pe(e.filename)?e.filename:"message.intl";e.sourceMap;const s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,r=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=NS(t,{filename:i,breakLineCode:s,needIndent:r});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(r),o.length>0&&(a.push(`const { ${uf(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),mr(a,t),a.deindent(r),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function zS(t,e={}){const n=kt({},e),i=!!n.jit,s=!!n.minify,r=n.optimize==null?!0:n.optimize,a=LS(n).parse(t);return i?(r&&US(a),s&&nr(a),{ast:a,code:""}):(IS(a,n),HS(a,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function VS(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ys().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ys().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ri(t){return lt(t)&&hf(t)===0&&(kn(t,"b")||kn(t,"body"))}const xg=["b","body"];function GS(t){return is(t,xg)}const Sg=["c","cases"];function WS(t){return is(t,Sg,[])}const yg=["s","static"];function XS(t){return is(t,yg)}const Eg=["i","items"];function $S(t){return is(t,Eg,[])}const Mg=["t","type"];function hf(t){return is(t,Mg)}const bg=["v","value"];function zo(t,e){const n=is(t,bg);if(n!=null)return n;throw co(e)}const Tg=["m","modifier"];function jS(t){return is(t,Tg)}const wg=["k","key"];function qS(t){const e=is(t,wg);if(e)return e;throw co(6)}function is(t,e,n){for(let i=0;i<e.length;i++){const s=e[i];if(kn(t,s)&&t[s]!=null)return t[s]}return n}const Ag=[...xg,...Sg,...yg,...Eg,...wg,...Tg,...bg,...Mg];function co(t){return new Error(`unhandled node type: ${t}`)}function Pl(t){return n=>YS(n,t)}function YS(t,e){const n=GS(e);if(n==null)throw co(0);if(hf(n)===1){const r=WS(n);return t.plural(r.reduce((o,a)=>[...o,Bh(t,a)],[]))}else return Bh(t,n)}function Bh(t,e){const n=XS(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=$S(e).reduce((s,r)=>[...s,Nc(t,r)],[]);return t.normalize(i)}}function Nc(t,e){const n=hf(e);switch(n){case 3:return zo(e,n);case 9:return zo(e,n);case 4:{const i=e;if(kn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(kn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw co(n)}case 5:{const i=e;if(kn(i,"i")&&Ot(i.i))return t.interpolate(t.list(i.i));if(kn(i,"index")&&Ot(i.index))return t.interpolate(t.list(i.index));throw co(n)}case 6:{const i=e,s=jS(i),r=qS(i);return t.linked(Nc(t,r),s?Nc(t,s):void 0,t.type)}case 7:return zo(e,n);case 8:return zo(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const KS=t=>t;let Vo=xt();function ZS(t,e={}){let n=!1;const i=e.onError||SS;return e.onError=s=>{n=!0,i(s)},{...zS(t,e),detectError:n}}function JS(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Pe(t)){at(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||KS)(t),s=Vo[i];if(s)return s;const{ast:r,detectError:o}=ZS(t,{...e,location:!1,jit:!0}),a=Pl(r);return o?a:Vo[i]=a}else{const n=t.cacheKey;if(n){const i=Vo[n];return i||(Vo[n]=Pl(t))}else return Pl(t)}}let uo=null;function QS(t){uo=t}function ey(t,e,n){uo&&uo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const ty=ny("function:translate");function ny(t){return e=>uo&&uo.emit(t,e)}const bi={INVALID_ARGUMENT:xS,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},iy=24;function Ti(t){return sl(t,null,void 0)}function df(t,e){return e.locale!=null?kh(e.locale):kh(t.locale)}let Ll;function kh(t){if(Pe(t))return t;if(bt(t)){if(t.resolvedOnce&&Ll!=null)return Ll;if(t.constructor.name==="Function"){const e=t();if(gS(e))throw Ti(bi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Ll=e}else throw Ti(bi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Ti(bi.NOT_SUPPORT_LOCALE_TYPE)}function sy(t,e,n){return[...new Set([n,...Ct(e)?e:lt(e)?Object.keys(e):Pe(e)?[e]:[n]])]}function Rg(t,e,n){const i=Pe(n)?n:fo,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let r=s.__localeChainCache.get(i);if(!r){r=[];let o=[n];for(;Ct(o);)o=Hh(r,o,e);const a=Ct(e)||!tt(e)?e:e.default?e.default:null;o=Pe(a)?[a]:a,Ct(o)&&Hh(r,o,!1),s.__localeChainCache.set(i,r)}return r}function Hh(t,e,n){let i=!0;for(let s=0;s<e.length&&at(i);s++){const r=e[s];Pe(r)&&(i=ry(t,e[s],n))}return i}function ry(t,e,n){let i;const s=e.split("-");do{const r=s.join("-");i=oy(t,r,n),s.splice(-1,1)}while(s.length&&i===!0);return i}function oy(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Ct(n)||tt(n))&&n[s]&&(i=n[s])}return i}const ss=[];ss[0]={w:[0],i:[3,0],"[":[4],o:[7]};ss[1]={w:[1],".":[2],"[":[4],o:[7]};ss[2]={w:[2],i:[3,0],0:[3,0]};ss[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ss[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ss[5]={"'":[4,0],o:8,l:[5,0]};ss[6]={'"':[4,0],o:8,l:[6,0]};const ay=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ly(t){return ay.test(t)}function cy(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function uy(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function fy(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:ly(e)?cy(e):"*"+e}function hy(t){const e=[];let n=-1,i=0,s=0,r,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),s++},d[3]=()=>{if(s>0)s--,i=4,d[0]();else{if(s=0,o===void 0||(o=fy(o),o===!1))return!1;d[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,d[0](),!0}for(;i!==null;)if(n++,r=t[n],!(r==="\\"&&p())){if(l=uy(r),f=ss[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=r,u()===!1))))return;if(i===7)return e}}const zh=new Map;function dy(t,e){return lt(t)?t[e]:null}function py(t,e){if(!lt(t))return null;let n=zh.get(e);if(n||(n=hy(e),n&&zh.set(e,n)),!n)return null;const i=n.length;let s=t,r=0;for(;r<i;){const o=n[r];if(Ag.includes(o)&&ri(s))return null;const a=s[o];if(a===void 0||bt(s))return null;s=a,r++}return s}const my="11.1.12",rl=-1,fo="en-US",Vh="",Gh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function gy(){return{upper:(t,e)=>e==="text"&&Pe(t)?t.toUpperCase():e==="vnode"&&lt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Pe(t)?t.toLowerCase():e==="vnode"&&lt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Pe(t)?Gh(t):e==="vnode"&&lt(t)&&"__v_isVNode"in t?Gh(t.children):t}}let Cg;function _y(t){Cg=t}let Pg;function vy(t){Pg=t}let Lg;function xy(t){Lg=t}let Dg=null;const Sy=t=>{Dg=t},yy=()=>Dg;let Ig=null;const Wh=t=>{Ig=t},Ey=()=>Ig;let Xh=0;function My(t={}){const e=bt(t.onWarn)?t.onWarn:cS,n=Pe(t.version)?t.version:my,i=Pe(t.locale)||bt(t.locale)?t.locale:fo,s=bt(i)?fo:i,r=Ct(t.fallbackLocale)||tt(t.fallbackLocale)||Pe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=tt(t.messages)?t.messages:Dl(s),a=tt(t.datetimeFormats)?t.datetimeFormats:Dl(s),l=tt(t.numberFormats)?t.numberFormats:Dl(s),c=kt(xt(),t.modifiers,gy()),u=t.pluralRules||xt(),f=bt(t.missing)?t.missing:null,d=at(t.missingWarn)||pr(t.missingWarn)?t.missingWarn:!0,p=at(t.fallbackWarn)||pr(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,v=!!t.unresolving,m=bt(t.postTranslation)?t.postTranslation:null,h=tt(t.processor)?t.processor:null,S=at(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,x=bt(t.messageCompiler)?t.messageCompiler:Cg,L=bt(t.messageResolver)?t.messageResolver:Pg||dy,D=bt(t.localeFallbacker)?t.localeFallbacker:Lg||sy,A=lt(t.fallbackContext)?t.fallbackContext:void 0,O=t,w=lt(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,T=lt(O.__numberFormatters)?O.__numberFormatters:new Map,F=lt(O.__meta)?O.__meta:{};Xh++;const q={version:n,cid:Xh,locale:i,fallbackLocale:r,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:_,unresolving:v,postTranslation:m,processor:h,warnHtmlMessage:S,escapeParameter:E,messageCompiler:x,messageResolver:L,localeFallbacker:D,fallbackContext:A,onWarn:e,__meta:F};return q.datetimeFormats=a,q.numberFormats=l,q.__datetimeFormatters=w,q.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&ey(q,n,F),q}const Dl=t=>({[t]:xt()});function pf(t,e,n,i,s){const{missing:r,onWarn:o}=t;if(r!==null){const a=r(t,n,e,s);return Pe(a)?a:e}else return e}function Nr(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function by(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Ty(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(by(t,e[i]))return!0;return!1}function $h(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Oc(...e),d=at(u.missingWarn)?u.missingWarn:t.missingWarn;at(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=df(t,u),v=o(t,s,_);if(!Pe(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},h,S=null;const E="datetime format";for(let D=0;D<v.length&&(h=v[D],m=n[h]||{},S=m[l],!tt(S));D++)pf(t,l,h,d,E);if(!tt(S)||!Pe(h))return i?rl:l;let x=`${h}__${l}`;il(f)||(x=`${x}__${JSON.stringify(f)}`);let L=a.get(x);return L||(L=new Intl.DateTimeFormat(h,kt({},S,f)),a.set(x,L)),p?L.formatToParts(c):L.format(c)}const Ug=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Oc(...t){const[e,n,i,s]=t,r=xt();let o=xt(),a;if(Pe(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ti(bi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Ti(bi.INVALID_ISO_DATE_ARGUMENT)}}else if(hS(e)){if(isNaN(e.getTime()))throw Ti(bi.INVALID_DATE_ARGUMENT);a=e}else if(Ot(e))a=e;else throw Ti(bi.INVALID_ARGUMENT);return Pe(n)?r.key=n:tt(n)&&Object.keys(n).forEach(l=>{Ug.includes(l)?o[l]=n[l]:r[l]=n[l]}),Pe(i)?r.locale=i:tt(i)&&(o=i),tt(s)&&(o=s),[r.key||"",a,r,o]}function jh(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__datetimeFormatters.has(r)&&i.__datetimeFormatters.delete(r)}}function qh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:s,onWarn:r,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Fc(...e),d=at(u.missingWarn)?u.missingWarn:t.missingWarn;at(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=df(t,u),v=o(t,s,_);if(!Pe(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},h,S=null;const E="number format";for(let D=0;D<v.length&&(h=v[D],m=n[h]||{},S=m[l],!tt(S));D++)pf(t,l,h,d,E);if(!tt(S)||!Pe(h))return i?rl:l;let x=`${h}__${l}`;il(f)||(x=`${x}__${JSON.stringify(f)}`);let L=a.get(x);return L||(L=new Intl.NumberFormat(h,kt({},S,f)),a.set(x,L)),p?L.formatToParts(c):L.format(c)}const Ng=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Fc(...t){const[e,n,i,s]=t,r=xt();let o=xt();if(!Ot(e))throw Ti(bi.INVALID_ARGUMENT);const a=e;return Pe(n)?r.key=n:tt(n)&&Object.keys(n).forEach(l=>{Ng.includes(l)?o[l]=n[l]:r[l]=n[l]}),Pe(i)?r.locale=i:tt(i)&&(o=i),tt(s)&&(o=s),[r.key||"",a,r,o]}function Yh(t,e,n){const i=t;for(const s in n){const r=`${e}__${s}`;i.__numberFormatters.has(r)&&i.__numberFormatters.delete(r)}}const wy=t=>t,Ay=t=>"",Ry="text",Cy=t=>t.length===0?"":uf(t),Py=_S;function Kh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Ly(t){const e=Ot(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Ot(t.named.count)||Ot(t.named.n))?Ot(t.named.count)?t.named.count:Ot(t.named.n)?t.named.n:e:e}function Dy(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Iy(t={}){const e=t.locale,n=Ly(t),i=lt(t.pluralRules)&&Pe(e)&&bt(t.pluralRules[e])?t.pluralRules[e]:Kh,s=lt(t.pluralRules)&&Pe(e)&&bt(t.pluralRules[e])?Kh:void 0,r=h=>h[i(n,h.length,s)],o=t.list||[],a=h=>o[h],l=t.named||xt();Ot(t.pluralIndex)&&Dy(n,l);const c=h=>l[h];function u(h,S){const E=bt(t.messages)?t.messages(h,!!S):lt(t.messages)?t.messages[h]:!1;return E||(t.parent?t.parent.message(h):Ay)}const f=h=>t.modifiers?t.modifiers[h]:wy,d=tt(t.processor)&&bt(t.processor.normalize)?t.processor.normalize:Cy,p=tt(t.processor)&&bt(t.processor.interpolate)?t.processor.interpolate:Py,_=tt(t.processor)&&Pe(t.processor.type)?t.processor.type:Ry,m={list:a,named:c,plural:r,linked:(h,...S)=>{const[E,x]=S;let L="text",D="";S.length===1?lt(E)?(D=E.modifier||D,L=E.type||L):Pe(E)&&(D=E||D):S.length===2&&(Pe(E)&&(D=E||D),Pe(x)&&(L=x||L));const A=u(h,!0)(m),O=L==="vnode"&&Ct(A)&&D?A[0]:A;return D?f(D)(O,L):O},message:u,type:_,interpolate:p,normalize:d,values:kt(xt(),o,l)};return m}const Zh=()=>"",Cn=t=>bt(t);function Jh(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:s,messageCompiler:r,fallbackLocale:o,messages:a}=t,[l,c]=Bc(...e),u=at(c.missingWarn)?c.missingWarn:t.missingWarn,f=at(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=at(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Pe(c.default)||at(c.default)?at(c.default)?r?l:()=>l:c.default:n?r?l:()=>l:null,v=n||_!=null&&(Pe(_)||bt(_)),m=df(t,c);d&&Uy(c);let[h,S,E]=p?[l,m,a[m]||xt()]:Og(t,l,m,o,f,u),x=h,L=l;if(!p&&!(Pe(x)||ri(x)||Cn(x))&&v&&(x=_,L=x),!p&&(!(Pe(x)||ri(x)||Cn(x))||!Pe(S)))return s?rl:l;let D=!1;const A=()=>{D=!0},O=Cn(x)?x:Fg(t,l,S,x,L,A);if(D)return x;const w=Fy(t,S,E,c),T=Iy(w),F=Ny(t,O,T);let q=i?i(F,l):F;if(d&&Pe(q)&&(q=pS(q)),__INTLIFY_PROD_DEVTOOLS__){const j={timestamp:Date.now(),key:Pe(l)?l:Cn(x)?x.key:"",locale:S||(Cn(x)?x.locale:""),format:Pe(x)?x:Cn(x)?x.source:"",message:q};j.meta=kt({},t.__meta,yy()||{}),ty(j)}return q}function Uy(t){Ct(t.list)?t.list=t.list.map(e=>Pe(e)?Ih(e):e):lt(t.named)&&Object.keys(t.named).forEach(e=>{Pe(t.named[e])&&(t.named[e]=Ih(t.named[e]))})}function Og(t,e,n,i,s,r){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=xt(),d,p=null;const _="translate";for(let v=0;v<u.length&&(d=u[v],f=o[d]||xt(),(p=l(f,e))===null&&(p=f[e]),!(Pe(p)||ri(p)||Cn(p)));v++)if(!Ty(d,u)){const m=pf(t,e,d,r,_);m!==e&&(p=m)}return[p,d,f]}function Fg(t,e,n,i,s,r){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Cn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=o(i,Oy(t,n,s,i,a,r));return l.locale=n,l.key=e,l.source=i,l}function Ny(t,e,n){return e(n)}function Bc(...t){const[e,n,i]=t,s=xt();if(!Pe(e)&&!Ot(e)&&!Cn(e)&&!ri(e))throw Ti(bi.INVALID_ARGUMENT);const r=Ot(e)?String(e):(Cn(e),e);return Ot(n)?s.plural=n:Pe(n)?s.default=n:tt(n)&&!il(n)?s.named=n:Ct(n)&&(s.list=n),Ot(i)?s.plural=i:Pe(i)?s.default=i:tt(i)&&kt(s,i),[r,s]}function Oy(t,e,n,i,s,r){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw r&&r(o),o},onCacheKey:o=>uS(e,n,o)}}function Fy(t,e,n,i){const{modifiers:s,pluralRules:r,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:s,pluralRules:r,messages:(p,_)=>{let v=o(n,p);if(v==null&&(u||_)){const[,,m]=Og(u||t,p,e,a,l,c);v=o(m,p)}if(Pe(v)||ri(v)){let m=!1;const S=Fg(t,p,e,v,p,()=>{m=!0});return m?Zh:S}else return Cn(v)?v:Zh}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Ot(i.plural)&&(d.pluralIndex=i.plural),d}VS();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const By="11.1.12";function ky(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ys().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ys().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ys().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ys().__INTLIFY_PROD_DEVTOOLS__=!1)}const mn={UNEXPECTED_RETURN_TYPE:iy,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function bn(t,...e){return sl(t,null,void 0)}const kc=ns("__translateVNode"),Hc=ns("__datetimeParts"),zc=ns("__numberParts"),Bg=ns("__setPluralRules"),kg=ns("__injectWithOption"),Vc=ns("__dispose");function ho(t){if(!lt(t)||ri(t))return t;for(const e in t)if(kn(t,e))if(!e.includes("."))lt(t[e])&&ho(t[e]);else{const n=e.split("."),i=n.length-1;let s=t,r=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in s||(s[n[o]]=xt()),!lt(s[n[o]])){r=!0;break}s=s[n[o]]}if(r||(ri(s)?Ag.includes(n[i])||delete t[e]:(s[n[i]]=t[e],delete t[e])),!ri(s)){const o=s[n[i]];lt(o)&&ho(o)}}return t}function mf(t,e){const{messages:n,__i18n:i,messageResolver:s,flatJson:r}=e,o=tt(n)?n:Ct(i)?xt():{[t]:xt()};if(Ct(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||xt(),va(c,o[l])):va(c,o)}else Pe(a)&&va(JSON.parse(a),o)}),s==null&&r)for(const a in o)kn(o,a)&&ho(o[a]);return o}function Hg(t){return t.type}function zg(t,e,n){let i=lt(e.messages)?e.messages:xt();"__i18nGlobal"in n&&(i=mf(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const s=Object.keys(i);s.length&&s.forEach(r=>{t.mergeLocaleMessage(r,i[r])});{if(lt(e.datetimeFormats)){const r=Object.keys(e.datetimeFormats);r.length&&r.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(lt(e.numberFormats)){const r=Object.keys(e.numberFormats);r.length&&r.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Qh(t){return it(To,null,t,0)}const ed="__INTLIFY_META__",td=()=>[],Hy=()=>!1;let nd=0;function id(t){return((e,n,i,s)=>t(n,i,Ji()||void 0,s))}const zy=()=>{const t=Ji();let e=null;return t&&(e=Hg(t)[ed])?{[ed]:e}:null};function gf(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,s=t.flatJson,r=Ha?ln:Ju;let o=at(t.inheritLocale)?t.inheritLocale:!0;const a=r(e&&o?e.locale.value:Pe(t.locale)?t.locale:fo),l=r(e&&o?e.fallbackLocale.value:Pe(t.fallbackLocale)||Ct(t.fallbackLocale)||tt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=r(mf(a.value,t)),u=r(tt(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=r(tt(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=e?e.missingWarn:at(t.missingWarn)||pr(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:at(t.fallbackWarn)||pr(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:at(t.fallbackRoot)?t.fallbackRoot:!0,v=!!t.fallbackFormat,m=bt(t.missing)?t.missing:null,h=bt(t.missing)?id(t.missing):null,S=bt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:at(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const L=e?e.modifiers:tt(t.modifiers)?t.modifiers:{};let D=t.pluralRules||e&&e.pluralRules,A;A=(()=>{i&&Wh(null);const g={version:By,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:L,pluralRules:D,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:E,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=tt(A)?A.__datetimeFormatters:void 0,g.__numberFormatters=tt(A)?A.__numberFormatters:void 0;const P=My(g);return i&&Wh(P),P})(),Nr(A,a.value,l.value);function w(){return[a.value,l.value,c.value,u.value,f.value]}const T=Nt({get:()=>a.value,set:g=>{A.locale=g,a.value=g}}),F=Nt({get:()=>l.value,set:g=>{A.fallbackLocale=g,l.value=g,Nr(A,a.value,g)}}),q=Nt(()=>c.value),j=Nt(()=>u.value),oe=Nt(()=>f.value);function ae(){return bt(S)?S:null}function K(g){S=g,A.postTranslation=g}function Z(){return m}function W(g){g!==null&&(h=id(g)),m=g,A.missing=h}const me=(g,P,z,Y,$,Ee)=>{w();let he;try{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=e?Ey():void 0),he=g(A)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=void 0)}if(z!=="translate exists"&&Ot(he)&&he===rl||z==="translate exists"&&!he){const[Te,Re]=P();return e&&_?Y(e):$(Te)}else{if(Ee(he))return he;throw bn(mn.UNEXPECTED_RETURN_TYPE)}};function xe(...g){return me(P=>Reflect.apply(Jh,null,[P,...g]),()=>Bc(...g),"translate",P=>Reflect.apply(P.t,P,[...g]),P=>P,P=>Pe(P))}function Se(...g){const[P,z,Y]=g;if(Y&&!lt(Y))throw bn(mn.INVALID_ARGUMENT);return xe(P,z,kt({resolvedMessage:!0},Y||{}))}function De(...g){return me(P=>Reflect.apply($h,null,[P,...g]),()=>Oc(...g),"datetime format",P=>Reflect.apply(P.d,P,[...g]),()=>Vh,P=>Pe(P)||Ct(P))}function Ye(...g){return me(P=>Reflect.apply(qh,null,[P,...g]),()=>Fc(...g),"number format",P=>Reflect.apply(P.n,P,[...g]),()=>Vh,P=>Pe(P)||Ct(P))}function se(g){return g.map(P=>Pe(P)||Ot(P)||at(P)?Qh(String(P)):P)}const be={normalize:se,interpolate:g=>g,type:"vnode"};function H(...g){return me(P=>{let z;const Y=P;try{Y.processor=be,z=Reflect.apply(Jh,null,[Y,...g])}finally{Y.processor=null}return z},()=>Bc(...g),"translate",P=>P[kc](...g),P=>[Qh(P)],P=>Ct(P))}function re(...g){return me(P=>Reflect.apply(qh,null,[P,...g]),()=>Fc(...g),"number format",P=>P[zc](...g),td,P=>Pe(P)||Ct(P))}function ce(...g){return me(P=>Reflect.apply($h,null,[P,...g]),()=>Oc(...g),"datetime format",P=>P[Hc](...g),td,P=>Pe(P)||Ct(P))}function le(g){D=g,A.pluralRules=D}function Be(g,P){return me(()=>{if(!g)return!1;const z=Pe(P)?P:a.value,Y=y(z),$=A.messageResolver(Y,g);return ri($)||Cn($)||Pe($)},()=>[g],"translate exists",z=>Reflect.apply(z.te,z,[g,P]),Hy,z=>at(z))}function I(g){let P=null;const z=Rg(A,l.value,a.value);for(let Y=0;Y<z.length;Y++){const $=c.value[z[Y]]||{},Ee=A.messageResolver($,g);if(Ee!=null){P=Ee;break}}return P}function U(g){const P=I(g);return P??(e?e.tm(g)||{}:{})}function y(g){return c.value[g]||{}}function ie(g,P){if(s){const z={[g]:P};for(const Y in z)kn(z,Y)&&ho(z[Y]);P=z[g]}c.value[g]=P,A.messages=c.value}function Q(g,P){c.value[g]=c.value[g]||{};const z={[g]:P};if(s)for(const Y in z)kn(z,Y)&&ho(z[Y]);P=z[g],va(P,c.value[g]),A.messages=c.value}function J(g){return u.value[g]||{}}function b(g,P){u.value[g]=P,A.datetimeFormats=u.value,jh(A,g,P)}function C(g,P){u.value[g]=kt(u.value[g]||{},P),A.datetimeFormats=u.value,jh(A,g,P)}function N(g){return f.value[g]||{}}function B(g,P){f.value[g]=P,A.numberFormats=f.value,Yh(A,g,P)}function de(g,P){f.value[g]=kt(f.value[g]||{},P),A.numberFormats=f.value,Yh(A,g,P)}nd++,e&&Ha&&(Ai(e.locale,g=>{o&&(a.value=g,A.locale=g,Nr(A,a.value,l.value))}),Ai(e.fallbackLocale,g=>{o&&(l.value=g,A.fallbackLocale=g,Nr(A,a.value,l.value))}));const M={id:nd,locale:T,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Nr(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:q,get modifiers(){return L},get pluralRules(){return D||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(g){d=g,A.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(g){p=g,A.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return v},set fallbackFormat(g){v=g,A.fallbackFormat=v},get warnHtmlMessage(){return E},set warnHtmlMessage(g){E=g,A.warnHtmlMessage=g},get escapeParameter(){return x},set escapeParameter(g){x=g,A.escapeParameter=g},t:xe,getLocaleMessage:y,setLocaleMessage:ie,mergeLocaleMessage:Q,getPostTranslationHandler:ae,setPostTranslationHandler:K,getMissingHandler:Z,setMissingHandler:W,[Bg]:le};return M.datetimeFormats=j,M.numberFormats=oe,M.rt=Se,M.te=Be,M.tm=U,M.d=De,M.n=Ye,M.getDateTimeFormat=J,M.setDateTimeFormat=b,M.mergeDateTimeFormat=C,M.getNumberFormat=N,M.setNumberFormat=B,M.mergeNumberFormat=de,M[kg]=n,M[kc]=H,M[Hc]=ce,M[zc]=re,M}function Vy(t){const e=Pe(t.locale)?t.locale:fo,n=Pe(t.fallbackLocale)||Ct(t.fallbackLocale)||tt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=bt(t.missing)?t.missing:void 0,s=at(t.silentTranslationWarn)||pr(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,r=at(t.silentFallbackWarn)||pr(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=at(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=tt(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=bt(t.postTranslation)?t.postTranslation:void 0,f=Pe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=at(t.sync)?t.sync:!0;let _=t.messages;if(tt(t.sharedMessages)){const L=t.sharedMessages;_=Object.keys(L).reduce((A,O)=>{const w=A[O]||(A[O]={});return kt(w,L[O]),A},_||{})}const{__i18n:v,__root:m,__injectWithOption:h}=t,S=t.datetimeFormats,E=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:x,datetimeFormats:S,numberFormats:E,missing:i,missingWarn:s,fallbackWarn:r,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:v,__root:m,__injectWithOption:h}}function Gc(t={}){const e=gf(Vy(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(s){e.locale.value=s},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(s){e.fallbackLocale.value=s},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(s){e.setMissingHandler(s)},get silentTranslationWarn(){return at(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(s){e.missingWarn=at(s)?!s:s},get silentFallbackWarn(){return at(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(s){e.fallbackWarn=at(s)?!s:s},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(s){e.fallbackFormat=s},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(s){e.setPostTranslationHandler(s)},get sync(){return e.inheritLocale},set sync(s){e.inheritLocale=s},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){e.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(s){e.escapeParameter=s},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...s){return Reflect.apply(e.t,e,[...s])},rt(...s){return Reflect.apply(e.rt,e,[...s])},te(s,r){return e.te(s,r)},tm(s){return e.tm(s)},getLocaleMessage(s){return e.getLocaleMessage(s)},setLocaleMessage(s,r){e.setLocaleMessage(s,r)},mergeLocaleMessage(s,r){e.mergeLocaleMessage(s,r)},d(...s){return Reflect.apply(e.d,e,[...s])},getDateTimeFormat(s){return e.getDateTimeFormat(s)},setDateTimeFormat(s,r){e.setDateTimeFormat(s,r)},mergeDateTimeFormat(s,r){e.mergeDateTimeFormat(s,r)},n(...s){return Reflect.apply(e.n,e,[...s])},getNumberFormat(s){return e.getNumberFormat(s)},setNumberFormat(s,r){e.setNumberFormat(s,r)},mergeNumberFormat(s,r){e.mergeNumberFormat(s,r)}};return i.__extender=n,i}function Gy(t,e,n){return{beforeCreate(){const i=Ji();if(!i)throw bn(mn.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=e,this===this.$root)this.$i18n=sd(t,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=Gc(r);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=sd(t,s);else{this.$i18n=Gc({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&zg(e,s,s),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$te=(r,o)=>this.$i18n.te(r,o),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Ji();if(!i)throw bn(mn.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(i),delete this.$i18n}}}function sd(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Bg](e.pluralizationRules||t.pluralizationRules);const n=mf(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const _f={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Wy({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,s)=>[...i,...s.type===an?s.children:[s]],[]):e.reduce((n,i)=>{const s=t[i];return s&&(n[i]=s()),n},xt())}function Vg(){return an}const Xy=$t({name:"i18n-t",props:kt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Ot(t)||!isNaN(t)}},_f),setup(t,e){const{slots:n,attrs:i}=e,s=t.i18n||rs({useScope:t.scope,__useComponent:!0});return()=>{const r=Object.keys(n).filter(f=>f[0]!=="_"),o=xt();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Pe(t.plural)?+t.plural:t.plural);const a=Wy(e,r),l=s[kc](t.keypath,a,o),c=kt(xt(),i),u=Pe(t.tag)||lt(t.tag)?t.tag:Vg();return tl(u,c,l)}}}),rd=Xy;function $y(t){return Ct(t)&&!Pe(t[0])}function Gg(t,e,n,i){const{slots:s,attrs:r}=e;return()=>{const o={part:!0};let a=xt();t.locale&&(o.locale=t.locale),Pe(t.format)?o.key=t.format:lt(t.format)&&(Pe(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,p)=>n.includes(p)?kt(xt(),d,{[p]:t.format[p]}):d,xt()));const l=i(t.value,o,a);let c=[o.key];Ct(l)?c=l.map((d,p)=>{const _=s[d.type],v=_?_({[d.type]:d.value,index:p,parts:l}):[d.value];return $y(v)&&(v[0].key=`${d.type}-${p}`),v}):Pe(l)&&(c=[l]);const u=kt(xt(),r),f=Pe(t.tag)||lt(t.tag)?t.tag:Vg();return tl(f,u,c)}}const jy=$t({name:"i18n-n",props:kt({value:{type:Number,required:!0},format:{type:[String,Object]}},_f),setup(t,e){const n=t.i18n||rs({useScope:t.scope,__useComponent:!0});return Gg(t,e,Ng,(...i)=>n[zc](...i))}}),od=jy;function qy(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Yy(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw bn(mn.UNEXPECTED_ERROR);const c=qy(t,a.$),u=ad(l);return[Reflect.apply(c.t,c,[...ld(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Ha&&t.global===c&&(o.__i18nWatcher=Ai(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ha&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=ad(a);o.textContent=Reflect.apply(l.t,l,[...ld(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function ad(t){if(Pe(t))return{path:t};if(tt(t)){if(!("path"in t))throw bn(mn.REQUIRED_VALUE,"path");return t}else throw bn(mn.INVALID_VALUE)}function ld(t){const{path:e,locale:n,args:i,choice:s,plural:r}=t,o={},a=i||{};return Pe(n)&&(o.locale=n),Ot(s)&&(o.plural=s),Ot(r)&&(o.plural=r),[e,a,o]}function Ky(t,e,...n){const i=tt(n[0])?n[0]:{};(at(i.globalInstall)?i.globalInstall:!0)&&([rd.name,"I18nT"].forEach(r=>t.component(r,rd)),[od.name,"I18nN"].forEach(r=>t.component(r,od)),[ud.name,"I18nD"].forEach(r=>t.component(r,ud))),t.directive("t",Yy(e))}const Zy=ns("global-vue-i18n");function Jy(t={}){const e=__VUE_I18N_LEGACY_API__&&at(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=at(t.globalInjection)?t.globalInjection:!0,i=new Map,[s,r]=Qy(t,e),o=ns("");function a(f){return i.get(f)||null}function l(f,d){i.set(f,d)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),tt(d[0])){const v=d[0];u.__composerExtend=v.__composerExtend,u.__vueI18nExtend=v.__vueI18nExtend}let p=null;!e&&n&&(p=aE(f,u.global)),__VUE_I18N_FULL_INSTALL__&&Ky(f,u,...d),__VUE_I18N_LEGACY_API__&&e&&f.mixin(Gy(r,r.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return r},dispose(){s.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function rs(t={}){const e=Ji();if(e==null)throw bn(mn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw bn(mn.NOT_INSTALLED);const n=eE(e),i=nE(n),s=Hg(e),r=tE(t,s);if(r==="global")return zg(i,t,s),i;if(r==="parent"){let l=iE(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=kt({},t);"__i18n"in s&&(l.__i18n=s.__i18n),i&&(l.__root=i),a=gf(l),o.__composerExtend&&(a[Vc]=o.__composerExtend(a)),rE(o,e,a),o.__setInstance(e,a)}return a}function Qy(t,e){const n=Gu(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Gc(t)):n.run(()=>gf(t));if(i==null)throw bn(mn.UNEXPECTED_ERROR);return[n,i]}function eE(t){const e=Vn(t.isCE?Zy:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw bn(t.isCE?mn.NOT_INSTALLED_WITH_PROVIDE:mn.UNEXPECTED_ERROR);return e}function tE(t,e){return il(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function nE(t){return t.mode==="composition"?t.global:t.global.__composer}function iE(t,e,n=!1){let i=null;const s=e.root;let r=sE(e,n);for(;r!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(r);a!=null&&(i=a.__composer,n&&i&&!i[kg]&&(i=null))}if(i!=null||s===r)break;r=r.parent}return i}function sE(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function rE(t,e,n){Tr(()=>{},e),wr(()=>{const i=n;t.__deleteInstance(e);const s=i[Vc];s&&(s(),delete i[Vc])},e)}const oE=["locale","fallbackLocale","availableLocales"],cd=["t","rt","d","n","tm","te"];function aE(t,e){const n=Object.create(null);return oE.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r)throw bn(mn.UNEXPECTED_ERROR);const o=Lt(r.value)?{get(){return r.value.value},set(a){r.value.value=a}}:{get(){return r.get&&r.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,cd.forEach(s=>{const r=Object.getOwnPropertyDescriptor(e,s);if(!r||!r.value)throw bn(mn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,r)}),()=>{delete t.config.globalProperties.$i18n,cd.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}const lE=$t({name:"i18n-d",props:kt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},_f),setup(t,e){const n=t.i18n||rs({useScope:t.scope,__useComponent:!0});return Gg(t,e,Ug,(...i)=>n[Hc](...i))}}),ud=lE;ky();_y(JS);vy(py);xy(Rg);if(__INTLIFY_PROD_DEVTOOLS__){const t=ys();t.__INTLIFY__=!0,QS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const cE=["en-US","zh-TW"],Wg=lf("lang",()=>{const{locale:t}=rs({useScope:"global"}),e=localStorage.getItem("lang");t.value=cE.includes(e)?e:"en-US",rf(()=>{localStorage.setItem("lang",t.value)});const n=Nt(()=>t.value==="en-US");return{locale:t,isEnUS:n,changeLang:()=>{switch(t.value){case"en-US":t.value="zh-TW";break;case"zh-TW":t.value="en-US";break}}}}),uE=$t({name:"global-sidebar",components:{AHoverable:fg,Switch:hg},props:{toggled:{type:Boolean,default:!1},toggleSidebar:{type:Function,default:()=>{}}},setup(){const t=Ao(),e=Wg(),{t:n}=rs();return{icons:dg,themeStore:t,langStore:e,t:n}}}),fE={class:"relative flex row j-around nly w-160 h-50 pt-24 mt-32 mr-10 ml-10 top-line"};function hE(t,e,n,i,s,r){const o=ws("AHoverable"),a=ws("Switch");return mt(),St(an,null,[We("aside",{class:Yi(["absolute r--200 flex flex-col t-0 w-180 h-full pt-50 pr-10 pl-10 bg-glassy tr-100 z-99",{"sm:r-0":t.toggled}])},[it(o,{to:"home",imgSrc:t.icons.home,text:t.t("home"),shape:"pill"},null,8,["imgSrc","text"]),it(o,{to:"works",imgSrc:t.icons.list,text:t.t("work"),shape:"pill"},null,8,["imgSrc","text"]),it(o,{to:"blogs",imgSrc:t.icons.list,text:t.t("blog"),shape:"pill"},null,8,["imgSrc","text"]),We("div",fE,[it(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["change","isActive","imgSrcL","imgSrcR"]),it(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])])],2),We("div",{class:Yi(["bg-dark fixed t-0 l-0 w-dvw h-dvh o-0 z--0 tr-100",{"sm:o-1 sm:z-98":t.toggled}]),onClick:e[0]||(e[0]=l=>t.toggleSidebar())},null,2)],64)}const dE=$n(uE,[["render",hE]]),pE=$t({name:"global-header",components:{AHoverable:fg,Switch:hg,GlobalSidebar:dE},setup(){const t=Ao(),e=Wg(),{t:n}=rs(),i=ln(!1),s=()=>{i.value=!i.value},r=()=>{window.innerWidth>640&&(i.value=!1)};return Tr(()=>window.addEventListener("resize",r)),wr(()=>window.removeEventListener("resize",r)),{icons:dg,themeStore:t,langStore:e,t:n,toggled:i,toggleSidebar:s}}}),mE={class:"fixed flex row a-center j-between t-0 l-0 w-dvw h-50 font-size-16 z-100"},gE={class:"flex row j-around w-400 ml-70 sm:none"},_E={class:"flex row a-center j-around w-116 pr-16 sm:none"},vE=["src"],xE=["src"];function SE(t,e,n,i,s,r){const o=ws("AHoverable"),a=ws("Switch"),l=ws("GlobalSidebar");return mt(),St(an,null,[We("header",mE,[e[1]||(e[1]=We("h1",{class:"absolute l-0 w-38 ml-16 mr-16 mt-auto mb-auto font-size-36 italic user-select-none"},"Pc",-1)),We("nav",gE,[it(o,{to:"home",effect:"underline-m",text:t.t("home")},null,8,["text"]),it(o,{to:"works",effect:"underline-m",text:t.t("work")},null,8,["text"]),it(o,{to:"blogs",effect:"underline-m",text:t.t("blog")},null,8,["text"])]),We("aside",_E,[it(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["change","isActive","imgSrcL","imgSrcR"]),it(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])]),We("button",{class:"none relative w-50 h-50 bg-none border-none pointer sm:block sm:ml-auto",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?Mi("",!0):(mt(),St("img",{key:0,src:t.icons.menuBurger,alt:"menu"},null,8,vE)),t.toggled?(mt(),St("img",{key:1,src:t.icons.crossSmall,alt:"close"},null,8,xE)):Mi("",!0)])]),it(l,{toggled:t.toggled,toggleSidebar:t.toggleSidebar},null,8,["toggled","toggleSidebar"])],64)}const yE=$n(pE,[["render",SE]]),EE=$t({__name:"App",setup(t){const e=Ao();return rf(()=>{document.body.style.setProperty("--theme",e.theme)}),(n,i)=>{const s=ws("router-view");return mt(),St(an,null,[it(yE),it(s)],64)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const ir=typeof document<"u";function Xg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ME(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xg(t.default)}const ut=Object.assign;function Il(t,e){const n={};for(const i in e){const s=e[i];n[i]=Wn(s)?s.map(t):t(s)}return n}const no=()=>{},Wn=Array.isArray,$g=/#/g,bE=/&/g,TE=/\//g,wE=/=/g,AE=/\?/g,jg=/\+/g,RE=/%5B/g,CE=/%5D/g,qg=/%5E/g,PE=/%60/g,Yg=/%7B/g,LE=/%7C/g,Kg=/%7D/g,DE=/%20/g;function vf(t){return encodeURI(""+t).replace(LE,"|").replace(RE,"[").replace(CE,"]")}function IE(t){return vf(t).replace(Yg,"{").replace(Kg,"}").replace(qg,"^")}function Wc(t){return vf(t).replace(jg,"%2B").replace(DE,"+").replace($g,"%23").replace(bE,"%26").replace(PE,"`").replace(Yg,"{").replace(Kg,"}").replace(qg,"^")}function UE(t){return Wc(t).replace(wE,"%3D")}function NE(t){return vf(t).replace($g,"%23").replace(AE,"%3F")}function OE(t){return t==null?"":NE(t).replace(TE,"%2F")}function po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const FE=/\/$/,BE=t=>t.replace(FE,"");function Ul(t,e,n="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=VE(i??e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:po(o)}}function kE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function fd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function HE(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&gr(e.matched[i],n.matched[s])&&Zg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zE(t[n],e[n]))return!1;return!0}function zE(t,e){return Wn(t)?hd(t,e):Wn(e)?hd(e,t):t===e}function hd(t,e){return Wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function VE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mo;(function(t){t.pop="pop",t.push="push"})(mo||(mo={}));var io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(io||(io={}));function GE(t){if(!t)if(ir){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),BE(t)}const WE=/^[^#]+#/;function XE(t,e){return t.replace(WE,"#")+e}function $E(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ol=()=>({left:window.scrollX,top:window.scrollY});function jE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=$E(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function dd(t,e){return(history.state?history.state.position-e:-1)+t}const Xc=new Map;function qE(t,e){Xc.set(t,e)}function YE(t){const e=Xc.get(t);return Xc.delete(t),e}let KE=()=>location.protocol+"//"+location.host;function Jg(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let a=s.includes(t.slice(r))?t.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),fd(l,"")}return fd(n,t)+i+s}function ZE(t,e,n,i){let s=[],r=[],o=null;const a=({state:d})=>{const p=Jg(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}m=v?d.position-v.position:0}else i(p);s.forEach(h=>{h(n.value,_,{delta:m,type:mo.pop,direction:m?m>0?io.forward:io.back:io.unknown})})};function l(){o=n.value}function c(d){s.push(d);const p=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ut({},d.state,{scroll:ol()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function pd(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?ol():null}}function JE(t){const{history:e,location:n}=window,i={value:Jg(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:KE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ut({},e.state,pd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=ut({},s.value,e.state,{forward:l,scroll:ol()});r(u.current,u,!0);const f=ut({},pd(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function QE(t){t=GE(t);const e=JE(t),n=ZE(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=ut({location:"",base:t,go:i,createHref:XE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eM(t){return typeof t=="string"||t&&typeof t=="object"}function Qg(t){return typeof t=="string"||typeof t=="symbol"}const e_=Symbol("");var md;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(md||(md={}));function _r(t,e){return ut(new Error,{type:t,[e_]:!0},e)}function hi(t,e){return t instanceof Error&&e_ in t&&(e==null||!!(t.type&e))}const gd="[^/]+?",tM={sensitive:!1,strict:!1,start:!0,end:!0},nM=/[.+*?^${}()[\]/\\]/g;function iM(t,e){const n=ut({},tM,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(nM,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:h}=d;r.push({name:_,repeatable:v,optional:m});const S=h||gd;if(S!==gd){p+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+x.message)}}let E=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=20,m&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=r[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,h=_ in c?c[_]:"";if(Wn(h)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=Wn(h)?h.join("/"):h;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function sM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function t_(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=sM(i[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-i.length)===1){if(_d(i))return 1;if(_d(s))return-1}return s.length-i.length}function _d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rM={type:0,value:""},oM=/[a-zA-Z0-9_]/;function aM(t){if(!t)return[[]];if(t==="/")return[[rM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:oM.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function lM(t,e,n){const i=iM(aM(t.path),n),s=ut(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function cM(t,e){const n=[],i=new Map;e=yd({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,d,p){const _=!p,v=xd(f);v.aliasOf=p&&p.record;const m=yd(e,f),h=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of x)h.push(xd(ut({},v,{components:p?p.record.components:v.components,path:L,aliasOf:p?p.record:v})))}let S,E;for(const x of h){const{path:L}=x;if(d&&L[0]!=="/"){const D=d.record.path,A=D[D.length-1]==="/"?"":"/";x.path=d.record.path+(L&&A+L)}if(S=lM(x,d,m),p?p.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),_&&f.name&&!Sd(S)&&o(f.name)),n_(S)&&l(S),v.children){const D=v.children;for(let A=0;A<D.length;A++)r(D[A],S,p&&p.children[A])}p=p||S}return E?()=>{o(E)}:no}function o(f){if(Qg(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=hM(f,n);n.splice(d,0,f),f.record.name&&!Sd(f)&&i.set(f.record.name,f)}function c(f,d){let p,_={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw _r(1,{location:f});m=p.record.name,_=ut(vd(d.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&vd(f.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(f.path!=null)v=f.path,p=n.find(E=>E.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw _r(1,{location:f,currentLocation:d});m=p.record.name,_=ut({},d.params,f.params),v=p.stringify(_)}const h=[];let S=p;for(;S;)h.unshift(S.record),S=S.parent;return{name:m,path:v,params:_,matched:h,meta:fM(h)}}t.forEach(f=>r(f));function u(){n.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function vd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function xd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:uM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function uM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Sd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fM(t){return t.reduce((e,n)=>ut(e,n.meta),{})}function yd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function hM(t,e){let n=0,i=e.length;for(;n!==i;){const r=n+i>>1;t_(t,e[r])<0?i=r:n=r+1}const s=dM(t);return s&&(i=e.lastIndexOf(s,i-1)),i}function dM(t){let e=t;for(;e=e.parent;)if(n_(e)&&t_(t,e)===0)return e}function n_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(jg," "),o=r.indexOf("="),a=po(o<0?r:r.slice(0,o)),l=o<0?null:po(r.slice(o+1));if(a in e){let c=e[a];Wn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ed(t){let e="";for(let n in t){const i=t[n];if(n=UE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wn(i)?i.map(r=>r&&Wc(r)):[i&&Wc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function mM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Wn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const gM=Symbol(""),Md=Symbol(""),xf=Symbol(""),i_=Symbol(""),$c=Symbol("");function Or(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Vi(t,e,n,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(_r(4,{from:n,to:e})):d instanceof Error?l(d):eM(d)?l(_r(2,{from:e,to:d})):(o&&i.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(i&&i.instances[s],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Nl(t,e,n,i,s=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Xg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Vi(u,n,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ME(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Vi(p,n,i,o,a,s)()}))}}return r}function bd(t){const e=Vn(xf),n=Vn(i_),i=Nt(()=>{const l=Ln(t.to);return e.resolve(l)}),s=Nt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(gr.bind(null,u));if(d>-1)return d;const p=Td(l[c-2]);return c>1&&Td(u)===p&&f[f.length-1].path!==p?f.findIndex(gr.bind(null,l[c-2])):d}),r=Nt(()=>s.value>-1&&yM(n.params,i.value.params)),o=Nt(()=>s.value>-1&&s.value===n.matched.length-1&&Zg(n.params,i.value.params));function a(l={}){if(SM(l)){const c=e[Ln(t.replace)?"replace":"push"](Ln(t.to)).catch(no);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Nt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function _M(t){return t.length===1?t[0]:t}const vM=$t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bd,setup(t,{slots:e}){const n=Mo(bd(t)),{options:i}=Vn(xf),s=Nt(()=>({[wd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&_M(e.default(n));return t.custom?r:tl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),xM=vM;function SM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yM(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Wn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wd=(t,e,n)=>t??e??n,EM=$t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Vn($c),s=Nt(()=>t.route||i.value),r=Vn(Md,0),o=Nt(()=>{let c=Ln(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Nt(()=>s.value.matched[o.value]);ma(Md,Nt(()=>o.value+1)),ma(gM,a),ma($c,s);const l=ln();return Ai(()=>[l.value,a.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!gr(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Ad(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=tl(d,ut({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ad(n.default,{Component:m,route:c})||m}}});function Ad(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const MM=EM;function bM(t){const e=cM(t.routes,t),n=t.parseQuery||pM,i=t.stringifyQuery||Ed,s=t.history,r=Or(),o=Or(),a=Or(),l=Ju(Di);let c=Di;ir&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Il.bind(null,H=>""+H),f=Il.bind(null,OE),d=Il.bind(null,po);function p(H,re){let ce,le;return Qg(H)?(ce=e.getRecordMatcher(H),le=re):le=H,e.addRoute(le,ce)}function _(H){const re=e.getRecordMatcher(H);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function h(H,re){if(re=ut({},re||l.value),typeof H=="string"){const y=Ul(n,H,re.path),ie=e.resolve({path:y.path},re),Q=s.createHref(y.fullPath);return ut(y,ie,{params:d(ie.params),hash:po(y.hash),redirectedFrom:void 0,href:Q})}let ce;if(H.path!=null)ce=ut({},H,{path:Ul(n,H.path,re.path).path});else{const y=ut({},H.params);for(const ie in y)y[ie]==null&&delete y[ie];ce=ut({},H,{params:f(y)}),re.params=f(re.params)}const le=e.resolve(ce,re),Be=H.hash||"";le.params=u(d(le.params));const I=kE(i,ut({},H,{hash:IE(Be),path:le.path})),U=s.createHref(I);return ut({fullPath:I,hash:Be,query:i===Ed?mM(H.query):H.query||{}},le,{redirectedFrom:void 0,href:U})}function S(H){return typeof H=="string"?Ul(n,H,l.value.path):ut({},H)}function E(H,re){if(c!==H)return _r(8,{from:re,to:H})}function x(H){return A(H)}function L(H){return x(ut(S(H),{replace:!0}))}function D(H){const re=H.matched[H.matched.length-1];if(re&&re.redirect){const{redirect:ce}=re;let le=typeof ce=="function"?ce(H):ce;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=S(le):{path:le},le.params={}),ut({query:H.query,hash:H.hash,params:le.path!=null?{}:H.params},le)}}function A(H,re){const ce=c=h(H),le=l.value,Be=H.state,I=H.force,U=H.replace===!0,y=D(ce);if(y)return A(ut(S(y),{state:typeof y=="object"?ut({},Be,y.state):Be,force:I,replace:U}),re||ce);const ie=ce;ie.redirectedFrom=re;let Q;return!I&&HE(i,le,ce)&&(Q=_r(16,{to:ie,from:le}),Se(le,le,!0,!1)),(Q?Promise.resolve(Q):T(ie,le)).catch(J=>hi(J)?hi(J,2)?J:xe(J):W(J,ie,le)).then(J=>{if(J){if(hi(J,2))return A(ut({replace:U},S(J.to),{state:typeof J.to=="object"?ut({},Be,J.to.state):Be,force:I}),re||ie)}else J=q(ie,le,!0,U,Be);return F(ie,le,J),J})}function O(H,re){const ce=E(H,re);return ce?Promise.reject(ce):Promise.resolve()}function w(H){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(H):H()}function T(H,re){let ce;const[le,Be,I]=TM(H,re);ce=Nl(le.reverse(),"beforeRouteLeave",H,re);for(const y of le)y.leaveGuards.forEach(ie=>{ce.push(Vi(ie,H,re))});const U=O.bind(null,H,re);return ce.push(U),be(ce).then(()=>{ce=[];for(const y of r.list())ce.push(Vi(y,H,re));return ce.push(U),be(ce)}).then(()=>{ce=Nl(Be,"beforeRouteUpdate",H,re);for(const y of Be)y.updateGuards.forEach(ie=>{ce.push(Vi(ie,H,re))});return ce.push(U),be(ce)}).then(()=>{ce=[];for(const y of I)if(y.beforeEnter)if(Wn(y.beforeEnter))for(const ie of y.beforeEnter)ce.push(Vi(ie,H,re));else ce.push(Vi(y.beforeEnter,H,re));return ce.push(U),be(ce)}).then(()=>(H.matched.forEach(y=>y.enterCallbacks={}),ce=Nl(I,"beforeRouteEnter",H,re,w),ce.push(U),be(ce))).then(()=>{ce=[];for(const y of o.list())ce.push(Vi(y,H,re));return ce.push(U),be(ce)}).catch(y=>hi(y,8)?y:Promise.reject(y))}function F(H,re,ce){a.list().forEach(le=>w(()=>le(H,re,ce)))}function q(H,re,ce,le,Be){const I=E(H,re);if(I)return I;const U=re===Di,y=ir?history.state:{};ce&&(le||U?s.replace(H.fullPath,ut({scroll:U&&y&&y.scroll},Be)):s.push(H.fullPath,Be)),l.value=H,Se(H,re,ce,U),xe()}let j;function oe(){j||(j=s.listen((H,re,ce)=>{if(!_e.listening)return;const le=h(H),Be=D(le);if(Be){A(ut(Be,{replace:!0,force:!0}),le).catch(no);return}c=le;const I=l.value;ir&&qE(dd(I.fullPath,ce.delta),ol()),T(le,I).catch(U=>hi(U,12)?U:hi(U,2)?(A(ut(S(U.to),{force:!0}),le).then(y=>{hi(y,20)&&!ce.delta&&ce.type===mo.pop&&s.go(-1,!1)}).catch(no),Promise.reject()):(ce.delta&&s.go(-ce.delta,!1),W(U,le,I))).then(U=>{U=U||q(le,I,!1),U&&(ce.delta&&!hi(U,8)?s.go(-ce.delta,!1):ce.type===mo.pop&&hi(U,20)&&s.go(-1,!1)),F(le,I,U)}).catch(no)}))}let ae=Or(),K=Or(),Z;function W(H,re,ce){xe(H);const le=K.list();return le.length?le.forEach(Be=>Be(H,re,ce)):console.error(H),Promise.reject(H)}function me(){return Z&&l.value!==Di?Promise.resolve():new Promise((H,re)=>{ae.add([H,re])})}function xe(H){return Z||(Z=!H,oe(),ae.list().forEach(([re,ce])=>H?ce(H):re()),ae.reset()),H}function Se(H,re,ce,le){const{scrollBehavior:Be}=t;if(!ir||!Be)return Promise.resolve();const I=!ce&&YE(dd(H.fullPath,0))||(le||!ce)&&history.state&&history.state.scroll||null;return Qu().then(()=>Be(H,re,I)).then(U=>U&&jE(U)).catch(U=>W(U,H,re))}const De=H=>s.go(H);let Ye;const se=new Set,_e={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:t,push:x,replace:L,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:me,install(H){const re=this;H.component("RouterLink",xM),H.component("RouterView",MM),H.config.globalProperties.$router=re,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Ln(l)}),ir&&!Ye&&l.value===Di&&(Ye=!0,x(s.location).catch(Be=>{}));const ce={};for(const Be in Di)Object.defineProperty(ce,Be,{get:()=>l.value[Be],enumerable:!0});H.provide(xf,re),H.provide(i_,Am(ce)),H.provide($c,l);const le=H.unmount;se.add(H),H.unmount=function(){se.delete(H),se.size<1&&(c=Di,j&&j(),j=null,l.value=Di,Ye=!1,Z=!1),le()}}};function be(H){return H.reduce((re,ce)=>re.then(()=>w(ce)),Promise.resolve())}return _e}function TM(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>gr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>gr(c,l))||s.push(l))}return[n,i,s]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sf="177",cr={ROTATE:0,DOLLY:1,PAN:2},sr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wM=0,Rd=1,AM=2,s_=1,r_=2,vi=3,Qi=0,hn=1,Ei=2,ji=0,ur=1,Cd=2,Pd=3,Ld=4,RM=5,xs=100,CM=101,PM=102,LM=103,DM=104,IM=200,UM=201,NM=202,OM=203,jc=204,qc=205,FM=206,BM=207,kM=208,HM=209,zM=210,VM=211,GM=212,WM=213,XM=214,Yc=0,Kc=1,Zc=2,vr=3,Jc=4,Qc=5,eu=6,tu=7,al=0,$M=1,jM=2,qi=0,qM=1,YM=2,KM=3,ZM=4,JM=5,QM=6,eb=7,o_=300,xr=301,Sr=302,nu=303,iu=304,ll=306,go=1e3,Es=1001,su=1002,Mn=1003,tb=1004,Go=1005,ni=1006,Ol=1007,Ms=1008,li=1009,a_=1010,l_=1011,_o=1012,yf=1013,Cs=1014,ii=1015,Ro=1016,Ef=1017,Mf=1018,vo=1020,c_=35902,u_=1021,f_=1022,Hn=1023,xo=1026,So=1027,bf=1028,Tf=1029,h_=1030,wf=1031,Af=1033,xa=33776,Sa=33777,ya=33778,Ea=33779,ru=35840,ou=35841,au=35842,lu=35843,cu=36196,uu=37492,fu=37496,hu=37808,du=37809,pu=37810,mu=37811,gu=37812,_u=37813,vu=37814,xu=37815,Su=37816,yu=37817,Eu=37818,Mu=37819,bu=37820,Tu=37821,Ma=36492,wu=36494,Au=36495,d_=36283,Ru=36284,Cu=36285,Pu=36286,nb=3200,ib=3201,Rf=0,sb=1,Wi="",Rn="srgb",yr="srgb-linear",za="linear",gt="srgb",ks=7680,Dd=519,rb=512,ob=513,ab=514,p_=515,lb=516,cb=517,ub=518,fb=519,Id=35044,Ud="300 es",wi=2e3,Va=2001;class Us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,Ga=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function hb(t,e){return(t%e+e)%e}function Fl(t,e,n){return(1-n)*t+n*e}function Fr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const db={DEG2RAD:ba};class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*v,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),D=Math.atan2(L,h*S);m=Math.sin(m*D)/L,a=Math.sin(a*D)/L}const x=a*S;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,f=f*m+v*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Nd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new X,Nd=new Ps;class Ze{constructor(e,n,i,s,r,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=s[0],m=s[3],h=s[6],S=s[1],E=s[4],x=s[7],L=s[2],D=s[5],A=s[8];return r[0]=o*v+a*S+l*L,r[3]=o*m+a*E+l*D,r[6]=o*h+a*x+l*A,r[1]=c*v+u*S+f*L,r[4]=c*m+u*E+f*D,r[7]=c*h+u*x+f*A,r[2]=d*v+p*S+_*L,r[5]=d*m+p*E+_*D,r[8]=d*h+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,p=c*r-o*l,_=n*f+i*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*n-s*l)*v,e[5]=(s*r-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kl.makeScale(e,n)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,n){return this.premultiply(kl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new Ze;function m_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pb(){const t=yo("canvas");return t.style.display="block",t}const Od={};function fr(t){t in Od||(Od[t]=!0,console.warn(t))}function mb(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function gb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _b(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vb(){const t={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?za:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[yr]:{primaries:e,whitePoint:i,transfer:za,toXYZ:Fd,fromXYZ:Bd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Fd,fromXYZ:Bd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const ot=vb();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hs;class xb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=yo("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sb=0;class Cf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Hl(s[o].image)):r.push(Hl(s[o]))}else r=Hl(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Hl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yb=0;const zl=new X;class en extends Us{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=Es,s=Es,r=ni,o=Ms,a=Hn,l=li,c=en.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=Co(),this.name="",this.source=new Cf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case su:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case su:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=o_;en.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,L=(h+1)/2,D=(u+d)/4,A=(f+v)/4,O=(_+m)/4;return E>x&&E>L?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=D/i,r=A/i):x>L?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=D/s,r=O/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=A/r,s=O/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eb extends Us{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const s={width:e,height:n,depth:i.depth},r=new en(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Cf(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ls extends Eb{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g_ extends en{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mb extends en{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Xo.subVectors(this.max,Br),zs.subVectors(e.a,Br),Vs.subVectors(e.b,Br),Gs.subVectors(e.c,Br),Ii.subVectors(Vs,zs),Ui.subVectors(Gs,Vs),fs.subVectors(zs,Gs);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-fs.z,fs.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,fs.z,0,-fs.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-fs.y,fs.x,0];return!Vl(n,zs,Vs,Gs,Xo)||(n=[1,0,0,0,1,0,0,0,1],!Vl(n,zs,Vs,Gs,Xo))?!1:($o.crossVectors(Ii,Ui),n=[$o.x,$o.y,$o.z],Vl(n,zs,Vs,Gs,Xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new X,new X,new X,new X,new X,new X,new X,new X],Nn=new X,Wo=new Ns,zs=new X,Vs=new X,Gs=new X,Ii=new X,Ui=new X,fs=new X,Br=new X,Xo=new X,$o=new X,hs=new X;function Vl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){hs.fromArray(t,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=n.dot(hs),u=i.dot(hs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bb=new Ns,kr=new X,Gl=new X;class Po{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const n=kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Gl)),this.expandByPoint(kr.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pi=new X,Wl=new X,jo=new X,Ni=new X,Xl=new X,qo=new X,$l=new X;class Pf{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Wl.copy(e).add(n).multiplyScalar(.5),jo.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(Wl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(jo),a=Ni.dot(this.direction),l=-Ni.dot(jo),c=Ni.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wl).addScaledVector(jo,d),p}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,s,r){Xl.subVectors(n,e),qo.subVectors(i,e),$l.crossVectors(Xl,qo);let o=this.direction.dot($l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(Ni,qo));if(l<0)return null;const c=a*this.direction.dot(Xl.cross(Ni));if(c<0||l+c>o)return null;const u=-a*Ni.dot($l);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,s,r,o,a,l,c,u,f,d,p,_,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,p,_,v,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tb,e,wb)}lookAt(e,n,i){const s=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Oi.crossVectors(i,_n),Oi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Oi.crossVectors(i,_n)),Oi.normalize(),Yo.crossVectors(_n,Oi),s[0]=Oi.x,s[4]=Yo.x,s[8]=_n.x,s[1]=Oi.y,s[5]=Yo.y,s[9]=_n.y,s[2]=Oi.z,s[6]=Yo.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],S=i[3],E=i[7],x=i[11],L=i[15],D=s[0],A=s[4],O=s[8],w=s[12],T=s[1],F=s[5],q=s[9],j=s[13],oe=s[2],ae=s[6],K=s[10],Z=s[14],W=s[3],me=s[7],xe=s[11],Se=s[15];return r[0]=o*D+a*T+l*oe+c*W,r[4]=o*A+a*F+l*ae+c*me,r[8]=o*O+a*q+l*K+c*xe,r[12]=o*w+a*j+l*Z+c*Se,r[1]=u*D+f*T+d*oe+p*W,r[5]=u*A+f*F+d*ae+p*me,r[9]=u*O+f*q+d*K+p*xe,r[13]=u*w+f*j+d*Z+p*Se,r[2]=_*D+v*T+m*oe+h*W,r[6]=_*A+v*F+m*ae+h*me,r[10]=_*O+v*q+m*K+h*xe,r[14]=_*w+v*j+m*Z+h*Se,r[3]=S*D+E*T+x*oe+L*W,r[7]=S*A+E*F+x*ae+L*me,r[11]=S*O+E*q+x*K+L*xe,r[15]=S*w+E*j+x*Z+L*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+r*l*f-s*c*f-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+n*l*p-n*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+m*(+n*c*f-n*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-n*l*f+n*a*d+s*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,E=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-_*f*c+_*a*p-o*v*p-u*a*h+o*f*h,L=_*f*l-u*v*l-_*a*d+o*v*d+u*a*m-o*f*m,D=n*S+i*E+s*x+r*L;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=S*A,e[1]=(v*d*r-f*m*r-v*s*p+i*m*p+f*s*h-i*d*h)*A,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*A,e[3]=(f*l*r-a*d*r-f*s*c+i*d*c+a*s*p-i*l*p)*A,e[4]=E*A,e[5]=(u*m*r-_*d*r+_*s*p-n*m*p-u*s*h+n*d*h)*A,e[6]=(_*l*r-o*m*r-_*s*c+n*m*c+o*s*h-n*l*h)*A,e[7]=(o*d*r-u*l*r+u*s*c-n*d*c-o*s*p+n*l*p)*A,e[8]=x*A,e[9]=(_*f*r-u*v*r-_*i*p+n*v*p+u*i*h-n*f*h)*A,e[10]=(o*v*r-_*a*r+_*i*c-n*v*c-o*i*h+n*a*h)*A,e[11]=(u*a*r-o*f*r-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=L*A,e[13]=(u*v*s-_*f*s+_*i*d-n*v*d-u*i*m+n*f*m)*A,e[14]=(_*a*s-o*v*s-_*i*l+n*v*l+o*i*m-n*a*m)*A,e[15]=(o*f*s-u*a*s+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,p=r*u,_=r*f,v=o*u,m=o*f,h=a*f,S=l*c,E=l*u,x=l*f,L=i.x,D=i.y,A=i.z;return s[0]=(1-(v+h))*L,s[1]=(p+x)*L,s[2]=(_-E)*L,s[3]=0,s[4]=(p-x)*D,s[5]=(1-(d+h))*D,s[6]=(m+S)*D,s[7]=0,s[8]=(_+E)*A,s[9]=(m-S)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let r=Ws.set(s[0],s[1],s[2]).length();const o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],On.copy(this);const c=1/r,u=1/o,f=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=wi){const l=this.elements,c=2*r/(n-e),u=2*r/(i-s),f=(n+e)/(n-e),d=(i+s)/(i-s);let p,_;if(a===wi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Va)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=wi){const l=this.elements,c=1/(n-e),u=1/(i-s),f=1/(o-r),d=(n+e)*c,p=(i+s)*u;let _,v;if(a===wi)_=(o+r)*f,v=-2*f;else if(a===Va)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ws=new X,On=new Et,Tb=new X(0,0,0),wb=new X(1,1,1),Oi=new X,Yo=new X,_n=new X,kd=new Et,Hd=new Ps;class Xn{constructor(e=0,n=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return kd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ab=0;const zd=new X,Xs=new Ps,mi=new Et,Ko=new X,Hr=new X,Rb=new X,Cb=new Ps,Vd=new X(1,0,0),Gd=new X(0,1,0),Wd=new X(0,0,1),Xd={type:"added"},Pb={type:"removed"},$s={type:"childadded",child:null},jl={type:"childremoved",child:null};class Ft extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new X,n=new Xn,i=new Ps,s=new X(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,n){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Hr,Ko,this.up):mi.lookAt(Ko,Hr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(mi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),$s.child=e,this.dispatchEvent($s),$s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Pb),jl.child=e,this.dispatchEvent(jl),jl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,Rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ft.DEFAULT_UP=new X(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new X,gi=new X,ql=new X,_i=new X,js=new X,qs=new X,$d=new X,Yl=new X,Kl=new X,Zl=new X,Jl=new Pt,Ql=new Pt,ec=new Pt;class Bn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Fn.subVectors(e,n),s.cross(Fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Fn.subVectors(s,n),gi.subVectors(i,n),ql.subVectors(e,n);const o=Fn.dot(Fn),a=Fn.dot(gi),l=Fn.dot(ql),c=gi.dot(gi),u=gi.dot(ql),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Jl.fromBufferAttribute(e,n),Ql.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Jl,r.x),o.addScaledVector(Ql,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(e,n,i,s){return Fn.subVectors(i,n),gi.subVectors(e,n),Fn.cross(gi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Fn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,i),qs.subVectors(r,i),Yl.subVectors(e,i);const l=js.dot(Yl),c=qs.dot(Yl);if(l<=0&&c<=0)return n.copy(i);Kl.subVectors(e,s);const u=js.dot(Kl),f=qs.dot(Kl);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(js,o);Zl.subVectors(e,r);const p=js.dot(Zl),_=qs.dot(Zl);if(_>=0&&p<=_)return n.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(qs,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return $d.subVectors(r,s),a=(f-u)/(f-u+(p-_)),n.copy(s).addScaledVector($d,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(js,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const __={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ot.workingColorSpace){if(e=hb(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,n=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=__[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return ot.workingToColorSpace(qt.copy(this),e),Math.round(et(qt.r*255,0,255))*65536+Math.round(et(qt.g*255,0,255))*256+Math.round(et(qt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(qt.copy(this),n);const i=qt.r,s=qt.g,r=qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Rn){ot.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,s=qt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Zo);const i=Fl(Fi.h,Zo.h,n),s=Fl(Fi.s,Zo.s,n),r=Fl(Fi.l,Zo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Qe;Qe.NAMES=__;let Lb=0;class Ar extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=ur,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=qc,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jc&&(i.blendSrc=this.blendSrc),this.blendDst!==qc&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Df extends Ar{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new X,Jo=new Xe;let Db=0;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Db++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Id,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fr(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fr(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fr(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Id&&(e.usage=this.usage),e}}class v_ extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class x_ extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ib=0;const An=new Et,nc=new Ft,Ys=new X,vn=new Ns,zr=new Ns,Vt=new X;class os extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m_(e)?x_:v_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(vn.min,zr.min),vn.expandByPoint(Vt),Vt.addVectors(vn.max,zr.max),vn.expandByPoint(Vt)):(vn.expandByPoint(zr.min),vn.expandByPoint(zr.max))}vn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),Vt.add(Ys)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new X,l[O]=new X;const c=new X,u=new X,f=new X,d=new Xe,p=new Xe,_=new Xe,v=new X,m=new X;function h(O,w,T){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),d.fromBufferAttribute(r,O),p.fromBufferAttribute(r,w),_.fromBufferAttribute(r,T),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[O].add(v),a[w].add(v),a[T].add(v),l[O].add(m),l[w].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,w=S.length;O<w;++O){const T=S[O],F=T.start,q=T.count;for(let j=F,oe=F+q;j<oe;j+=3)h(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const E=new X,x=new X,L=new X,D=new X;function A(O){L.fromBufferAttribute(s,O),D.copy(L);const w=a[O];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),x.crossVectors(D,w);const F=x.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,w=S.length;O<w;++O){const T=S[O],F=T.start,q=T.count;for(let j=F,oe=F+q;j<oe;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Gn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new os,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jd=new Et,ds=new Pf,Qo=new Po,qd=new X,ea=new X,ta=new X,na=new X,ic=new X,ia=new X,Yd=new X,sa=new X;class Xt extends Ft{constructor(e=new os,n=new Df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ic.fromBufferAttribute(f,e),o?ia.addScaledVector(ic,u):ia.addScaledVector(ic.sub(n),u))}n.add(ia)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(Qo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(Qo,qd)===null||ds.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(jd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(jd),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ds)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=E;x<L;x+=3){const D=a.getX(x),A=a.getX(x+1),O=a.getX(x+2);s=ra(this,h,e,i,c,u,f,D,A,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);s=ra(this,o,e,i,c,u,f,S,E,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=E;x<L;x+=3){const D=x,A=x+1,O=x+2;s=ra(this,h,e,i,c,u,f,D,A,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=m,E=m+1,x=m+2;s=ra(this,o,e,i,c,u,f,S,E,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Ub(t,e,n,i,s,r,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qi,a),l===null)return null;sa.copy(a),sa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(sa);return c<n.near||c>n.far?null:{distance:c,point:sa.clone(),object:t}}function ra(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,ea),t.getVertexPosition(l,ta),t.getVertexPosition(c,na);const u=Ub(t,e,n,i,ea,ta,na,Yd);if(u){const f=new X;Bn.getBarycoord(Yd,ea,ta,na,f),s&&(u.uv=Bn.getInterpolatedAttribute(s,a,l,c,f,new Xe)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,a,l,c,f,new Xe)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new X,materialIndex:0};Bn.getNormal(ea,ta,na,d.normal),u.face=d,u.barycoord=f}return u}class Rr extends os{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,r,0),_("z","y","x",1,-1,i,n,-e,o,r,1),_("x","z","y",1,1,e,i,n,s,o,2),_("x","z","y",1,-1,e,i,-n,s,o,3),_("x","y","z",1,-1,e,n,i,s,r,4),_("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(v,m,h,S,E,x,L,D,A,O,w){const T=x/A,F=L/O,q=x/2,j=L/2,oe=D/2,ae=A+1,K=O+1;let Z=0,W=0;const me=new X;for(let xe=0;xe<K;xe++){const Se=xe*F-j;for(let De=0;De<ae;De++){const Ye=De*T-q;me[v]=Ye*S,me[m]=Se*E,me[h]=oe,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[h]=D>0?1:-1,u.push(me.x,me.y,me.z),f.push(De/A),f.push(1-xe/O),Z+=1}}for(let xe=0;xe<O;xe++)for(let Se=0;Se<A;Se++){const De=d+Se+ae*xe,Ye=d+Se+ae*(xe+1),se=d+(Se+1)+ae*(xe+1),_e=d+(Se+1)+ae*xe;l.push(De,Ye,_e),l.push(Ye,se,_e),W+=6}a.addGroup(p,W,w),p+=W,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Er(t[n]);for(const s in i)e[s]=i[s]}return e}function Nb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function S_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Ob={clone:Er,merge:rn};var Fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class es extends Ar{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fb,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class y_ extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new X,Kd=new Xe,Zd=new Xe;class Sn extends y_{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,Kd,Zd),n.subVectors(Zd,Kd)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ba*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ks=-90,Zs=1;class kb extends Ft{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ks,Zs,e,n);s.layers=this.layers,this.add(s);const r=new Sn(Ks,Zs,e,n);r.layers=this.layers,this.add(r);const o=new Sn(Ks,Zs,e,n);o.layers=this.layers,this.add(o);const a=new Sn(Ks,Zs,e,n);a.layers=this.layers,this.add(a);const l=new Sn(Ks,Zs,e,n);l.layers=this.layers,this.add(l);const c=new Sn(Ks,Zs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class E_ extends en{constructor(e=[],n=xr,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hb extends Ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new E_(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rr(5,5,5),r=new es({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ji});r.uniforms.tEquirect.value=n;const o=new Xt(s,r),a=n.minFilter;return n.minFilter===Ms&&(n.minFilter=ni),new kb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}class oa extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class sc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class If{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=n,this.far=i}clone(){return new If(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class M_ extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Vb extends en{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Mn,u=Mn,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jd extends Gn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Js=new Et,Qd=new Et,aa=[],ep=new Ns,Gb=new Et,Vr=new Xt,Gr=new Po;class Wb extends Xt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Jd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Js),ep.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(ep)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Po),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Js),Gr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Gr)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,n){const i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),Qd.multiplyMatrices(i,Js),Vr.matrixWorld=Qd,Vr.raycast(e,aa);for(let o=0,a=aa.length;o<a;o++){const l=aa[o];l.instanceId=r,l.object=this,n.push(l)}aa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Jd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vb(new Float32Array(s*this.count),s,this.count,bf,ii));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rc=new X,Xb=new X,$b=new Ze;class Gi{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=rc.subVectors(i,n).cross(Xb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$b.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Po,la=new X;class Uf{constructor(e=new Gi,n=new Gi,i=new Gi,s=new Gi,r=new Gi,o=new Gi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],d=s[7],p=s[8],_=s[9],v=s[10],m=s[11],h=s[12],S=s[13],E=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-p,x-h).normalize(),i[1].setComponents(l+r,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+_,x+S).normalize(),i[3].setComponents(l-o,d-u,m-_,x-S).normalize(),i[4].setComponents(l-a,d-f,m-v,x-E).normalize(),n===wi)i[5].setComponents(l+a,d+f,m+v,x+E).normalize();else if(n===Va)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b_ extends en{constructor(e,n,i=Cs,s,r,o,a=Mn,l=Mn,c,u=xo,f=1){if(u!==xo&&u!==So)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mr extends os{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let E=0;E<c;E++){const x=E*f-r;_.push(x,-S,0),v.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const E=S+c*h,x=S+c*(h+1),L=S+1+c*(h+1),D=S+1+c*h;p.push(E,x,D),p.push(x,L,D)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nf extends os{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,d=new X,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const S=[],E=h/i;let x=0;h===0&&o===0?x=.5/n:h===i&&l===Math.PI&&(x=-.5/n);for(let L=0;L<=n;L++){const D=L/n;f.x=-e*Math.cos(s+D*r)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(s+D*r)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(D+x,1-E),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<n;S++){const E=u[h][S+1],x=u[h][S],L=u[h+1][S],D=u[h+1][S+1];(h!==0||o>0)&&p.push(E,x,D),(h!==i-1||l<Math.PI)&&p.push(x,L,D)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jb extends Ar{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T_ extends Ar{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qb extends Ar{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yb extends Ar{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tp={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Kb{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Zb=new Kb;class Of{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Of.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jb extends Of{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=tp.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){n&&n(o),r.manager.itemEnd(e)},0),o;const a=yo("img");function l(){u(),tp.add(e,this),n&&n(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Qb extends Of{constructor(e){super(e)}load(e,n,i,s){const r=new en,o=new Jb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Ff extends Ft{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const oc=new Et,np=new X,ip=new X;class w_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uf,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;np.setFromMatrixPosition(e.matrixWorld),n.position.copy(np),ip.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ip),n.updateMatrixWorld(),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eT extends w_{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ga*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class sp extends Ff{constructor(e,n,i=0,s=Math.PI/3,r=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new eT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bf extends y_{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tT extends w_{constructor(){super(new Bf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rp extends Ff{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new tT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A_ extends Ff{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class nT extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class R_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=op(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=op();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function op(){return performance.now()}const ap=new Et;class lp{constructor(e,n,i=0,s=1/0){this.ray=new Pf(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Lf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,n=!0,i=[]){return Lu(e,this,i,n),i.sort(cp),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Lu(e[s],this,i,n);return i.sort(cp),i}}function cp(t,e){return t.distance-e.distance}function Lu(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){const r=t.children;for(let o=0,a=r.length;o<a;o++)Lu(r[o],e,n,!0)}}class up{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iT extends Us{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fp(t,e,n,i){const s=sT(i);switch(n){case u_:return t*e;case bf:return t*e/s.components*s.byteLength;case Tf:return t*e/s.components*s.byteLength;case h_:return t*e*2/s.components*s.byteLength;case wf:return t*e*2/s.components*s.byteLength;case f_:return t*e*3/s.components*s.byteLength;case Hn:return t*e*4/s.components*s.byteLength;case Af:return t*e*4/s.components*s.byteLength;case xa:case Sa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ya:case Ea:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ou:case lu:return Math.max(t,16)*Math.max(e,8)/4;case ru:case au:return Math.max(t,8)*Math.max(e,8)/2;case cu:case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case du:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case pu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case xu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Tu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ma:case wu:case Au:return Math.ceil(t/4)*Math.ceil(e/4)*16;case d_:case Ru:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cu:case Pu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sT(t){switch(t){case li:case a_:return{byteLength:1,components:1};case _o:case l_:case Ro:return{byteLength:2,components:1};case Ef:case Mf:return{byteLength:2,components:4};case Cs:case yf:case ii:return{byteLength:4,components:1};case c_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C_(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function rT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var oT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
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
#endif`,lT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pT=`#ifdef USE_BATCHING
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
#endif`,mT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xT=`#ifdef USE_IRIDESCENCE
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
#endif`,ST=`#ifdef USE_BUMPMAP
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
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,CT=`#define PI 3.141592653589793
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
} // validated`,PT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LT=`vec3 transformedNormal = objectNormal;
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
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OT="gl_FragColor = linearToOutputTexel( gl_FragColor );",FT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HT=`#ifdef USE_ENVMAP
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
#endif`,zT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,GT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
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
}`,qT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZT=`uniform bool receiveShadow;
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
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,QT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i1=`PhysicalMaterial material;
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
#endif`,s1=`struct PhysicalMaterial {
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
}`,r1=`
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
#endif`,o1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,h1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m1=`#if defined( USE_POINTS_UV )
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
#endif`,g1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,R1=`#ifdef USE_NORMALMAP
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
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,I1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W1=`float getShadowMask() {
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
}`,X1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,K1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,J1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ow=`uniform sampler2D t2D;
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fw=`#include <common>
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
}`,hw=`#if DEPTH_PACKING == 3200
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
}`,dw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`uniform float scale;
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
}`,vw=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,Sw=`uniform vec3 diffuse;
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
}`,yw=`#define LAMBERT
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
}`,Ew=`#define LAMBERT
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
}`,Mw=`#define MATCAP
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
}`,bw=`#define MATCAP
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
}`,Tw=`#define NORMAL
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
}`,ww=`#define NORMAL
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
}`,Aw=`#define PHONG
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
}`,Rw=`#define PHONG
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
}`,Cw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
}`,Lw=`#define TOON
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
}`,Dw=`#define TOON
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
}`,Iw=`uniform float size;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,Nw=`#include <common>
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
}`,Ow=`uniform vec3 color;
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
}`,Fw=`uniform float rotation;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:oT,alphahash_pars_fragment:aT,alphamap_fragment:lT,alphamap_pars_fragment:cT,alphatest_fragment:uT,alphatest_pars_fragment:fT,aomap_fragment:hT,aomap_pars_fragment:dT,batching_pars_vertex:pT,batching_vertex:mT,begin_vertex:gT,beginnormal_vertex:_T,bsdfs:vT,iridescence_fragment:xT,bumpmap_pars_fragment:ST,clipping_planes_fragment:yT,clipping_planes_pars_fragment:ET,clipping_planes_pars_vertex:MT,clipping_planes_vertex:bT,color_fragment:TT,color_pars_fragment:wT,color_pars_vertex:AT,color_vertex:RT,common:CT,cube_uv_reflection_fragment:PT,defaultnormal_vertex:LT,displacementmap_pars_vertex:DT,displacementmap_vertex:IT,emissivemap_fragment:UT,emissivemap_pars_fragment:NT,colorspace_fragment:OT,colorspace_pars_fragment:FT,envmap_fragment:BT,envmap_common_pars_fragment:kT,envmap_pars_fragment:HT,envmap_pars_vertex:zT,envmap_physical_pars_fragment:JT,envmap_vertex:VT,fog_vertex:GT,fog_pars_vertex:WT,fog_fragment:XT,fog_pars_fragment:$T,gradientmap_pars_fragment:jT,lightmap_pars_fragment:qT,lights_lambert_fragment:YT,lights_lambert_pars_fragment:KT,lights_pars_begin:ZT,lights_toon_fragment:QT,lights_toon_pars_fragment:e1,lights_phong_fragment:t1,lights_phong_pars_fragment:n1,lights_physical_fragment:i1,lights_physical_pars_fragment:s1,lights_fragment_begin:r1,lights_fragment_maps:o1,lights_fragment_end:a1,logdepthbuf_fragment:l1,logdepthbuf_pars_fragment:c1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:f1,map_fragment:h1,map_pars_fragment:d1,map_particle_fragment:p1,map_particle_pars_fragment:m1,metalnessmap_fragment:g1,metalnessmap_pars_fragment:_1,morphinstance_vertex:v1,morphcolor_vertex:x1,morphnormal_vertex:S1,morphtarget_pars_vertex:y1,morphtarget_vertex:E1,normal_fragment_begin:M1,normal_fragment_maps:b1,normal_pars_fragment:T1,normal_pars_vertex:w1,normal_vertex:A1,normalmap_pars_fragment:R1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:P1,clearcoat_pars_fragment:L1,iridescence_pars_fragment:D1,opaque_fragment:I1,packing:U1,premultiplied_alpha_fragment:N1,project_vertex:O1,dithering_fragment:F1,dithering_pars_fragment:B1,roughnessmap_fragment:k1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:V1,shadowmap_vertex:G1,shadowmask_pars_fragment:W1,skinbase_vertex:X1,skinning_pars_vertex:$1,skinning_vertex:j1,skinnormal_vertex:q1,specularmap_fragment:Y1,specularmap_pars_fragment:K1,tonemapping_fragment:Z1,tonemapping_pars_fragment:J1,transmission_fragment:Q1,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:sw,background_vert:rw,background_frag:ow,backgroundCube_vert:aw,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:fw,depth_frag:hw,distanceRGBA_vert:dw,distanceRGBA_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:_w,linedashed_frag:vw,meshbasic_vert:xw,meshbasic_frag:Sw,meshlambert_vert:yw,meshlambert_frag:Ew,meshmatcap_vert:Mw,meshmatcap_frag:bw,meshnormal_vert:Tw,meshnormal_frag:ww,meshphong_vert:Aw,meshphong_frag:Rw,meshphysical_vert:Cw,meshphysical_frag:Pw,meshtoon_vert:Lw,meshtoon_frag:Dw,points_vert:Iw,points_frag:Uw,shadow_vert:Nw,shadow_frag:Ow,sprite_vert:Fw,sprite_frag:Bw},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ei={basic:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:rn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:rn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:rn([Me.points,Me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:rn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:rn([Me.common,Me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:rn([Me.sprite,Me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:rn([Me.common,Me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:rn([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ei.physical={uniforms:rn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ca={r:0,b:0,g:0},ms=new Xn,kw=new Et;function Hw(t,e,n,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,u,f=null,d=0,p=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function v(E){let x=!1;const L=_(E);L===null?h(a,l):L&&L.isColor&&(h(L,1),x=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const L=_(x);L&&(L.isCubeTexture||L.mapping===ll)?(u===void 0&&(u=new Xt(new Rr(1,1,1),new es({name:"BackgroundCubeMaterial",uniforms:Er(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ms.copy(x.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kw.makeRotationFromEuler(ms)),u.material.toneMapped=ot.getTransfer(L.colorSpace)!==gt,(f!==L||d!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Xt(new Mr(2,2),new es({name:"BackgroundMaterial",uniforms:Er(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(L.colorSpace)!==gt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,x){E.getRGB(ca,S_(t)),i.buffers.color.setClear(ca.r,ca.g,ca.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:m,dispose:S}}function zw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(T,F,q,j,oe){let ae=!1;const K=f(j,q,F);r!==K&&(r=K,c(r.object)),ae=p(T,j,q,oe),ae&&_(T,j,q,oe),oe!==null&&e.update(oe,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,x(T,F,q,j),oe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,F,q){const j=q.wireframe===!0;let oe=i[T.id];oe===void 0&&(oe={},i[T.id]=oe);let ae=oe[F.id];ae===void 0&&(ae={},oe[F.id]=ae);let K=ae[j];return K===void 0&&(K=d(l()),ae[j]=K),K}function d(T){const F=[],q=[],j=[];for(let oe=0;oe<n;oe++)F[oe]=0,q[oe]=0,j[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:j,object:T,attributes:{},index:null}}function p(T,F,q,j){const oe=r.attributes,ae=F.attributes;let K=0;const Z=q.getAttributes();for(const W in Z)if(Z[W].location>=0){const xe=oe[W];let Se=ae[W];if(Se===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;K++}return r.attributesNum!==K||r.index!==j}function _(T,F,q,j){const oe={},ae=F.attributes;let K=0;const Z=q.getAttributes();for(const W in Z)if(Z[W].location>=0){let xe=ae[W];xe===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),oe[W]=Se,K++}r.attributes=oe,r.attributesNum=K,r.index=j}function v(){const T=r.newAttributes;for(let F=0,q=T.length;F<q;F++)T[F]=0}function m(T){h(T,0)}function h(T,F){const q=r.newAttributes,j=r.enabledAttributes,oe=r.attributeDivisors;q[T]=1,j[T]===0&&(t.enableVertexAttribArray(T),j[T]=1),oe[T]!==F&&(t.vertexAttribDivisor(T,F),oe[T]=F)}function S(){const T=r.newAttributes,F=r.enabledAttributes;for(let q=0,j=F.length;q<j;q++)F[q]!==T[q]&&(t.disableVertexAttribArray(q),F[q]=0)}function E(T,F,q,j,oe,ae,K){K===!0?t.vertexAttribIPointer(T,F,q,oe,ae):t.vertexAttribPointer(T,F,q,j,oe,ae)}function x(T,F,q,j){v();const oe=j.attributes,ae=q.getAttributes(),K=F.defaultAttributeValues;for(const Z in ae){const W=ae[Z];if(W.location>=0){let me=oe[Z];if(me===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const xe=me.normalized,Se=me.itemSize,De=e.get(me);if(De===void 0)continue;const Ye=De.buffer,se=De.type,_e=De.bytesPerElement,be=se===t.INT||se===t.UNSIGNED_INT||me.gpuType===yf;if(me.isInterleavedBufferAttribute){const H=me.data,re=H.stride,ce=me.offset;if(H.isInstancedInterleavedBuffer){for(let le=0;le<W.locationSize;le++)h(W.location+le,H.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let le=0;le<W.locationSize;le++)E(W.location+le,Se/W.locationSize,se,xe,re*_e,(ce+Se/W.locationSize*le)*_e,be)}else{if(me.isInstancedBufferAttribute){for(let H=0;H<W.locationSize;H++)h(W.location+H,me.meshPerAttribute);T.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let H=0;H<W.locationSize;H++)m(W.location+H);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let H=0;H<W.locationSize;H++)E(W.location+H,Se/W.locationSize,se,xe,Se*_e,Se/W.locationSize*H*_e,be)}}else if(K!==void 0){const xe=K[Z];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(W.location,xe);break;case 3:t.vertexAttrib3fv(W.location,xe);break;case 4:t.vertexAttrib4fv(W.location,xe);break;default:t.vertexAttrib1fv(W.location,xe)}}}}S()}function L(){O();for(const T in i){const F=i[T];for(const q in F){const j=F[q];for(const oe in j)u(j[oe].object),delete j[oe];delete F[q]}delete i[T]}}function D(T){if(i[T.id]===void 0)return;const F=i[T.id];for(const q in F){const j=F[q];for(const oe in j)u(j[oe].object),delete j[oe];delete F[q]}delete i[T.id]}function A(T){for(const F in i){const q=i[F];if(q[T.id]===void 0)continue;const j=q[T.id];for(const oe in j)u(j[oe].object),delete j[oe];delete q[T.id]}}function O(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Vw(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];n.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gw(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Hn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const O=A===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!O)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:L,maxSamples:D}}function Ww(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Gi,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||s;return s=d,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,E=S*4;let x=h.clippingState||null;l.value=x,x=u(_,d,E,p);for(let L=0;L!==E;++L)x[L]=n[L];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Xw(t){let e=new WeakMap;function n(o,a){return a===nu?o.mapping=xr:a===iu&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nu||a===iu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Hb(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",s),n(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const rr=4,hp=[.125,.215,.35,.446,.526,.582],Ss=20,ac=new Bf,dp=new Qe;let lc=null,cc=0,uc=0,fc=!1;const vs=(1+Math.sqrt(5))/2,Qs=1/vs,pp=[new X(-vs,Qs,0),new X(vs,Qs,0),new X(-Qs,0,vs),new X(Qs,0,vs),new X(0,vs,-Qs),new X(0,vs,Qs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],$w=new X;class mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=$w}=r;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=fc,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xr||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Ro,format:Hn,colorSpace:yr,depthBuffer:!1},s=gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jw(r)),this._blurMaterial=qw(r,e,n)}return s}_compileMaterial(e){const n=new Xt(this._lodPlanes[0],e);this._renderer.compile(n,ac)}_sceneToCubeUV(e,n,i,s,r){const l=new Sn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(dp),f.toneMapping=qi,f.autoClear=!1;const _=new Df({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new Xt(new Rr,_);let m=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,m=!0):(_.color.copy(dp),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const x=this._cubeSize;ua(s,E*x,S>2?x:0,x,x),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===xr||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ua(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pp[(s-r-1)%pp.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Xt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ss-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);const h=[];let S=0;for(let A=0;A<Ss;++A){const O=A/v,w=Math.exp(-O*O/2);h.push(w),A===0?S+=w:A<m&&(S+=2*w)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const x=this._sizeLods[s],L=3*x*(s>E-rr?s-E+rr:0),D=4*(this._cubeSize-x);ua(n,L,D,3*x,2*x),l.setRenderTarget(n),l.render(f,ac)}}function jw(t){const e=[],n=[],i=[];let s=t;const r=t-rr+1+hp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let l=1/a;o>t-rr?l=hp[o-t+rr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let D=0;D<p;D++){const A=D%3*2/3-1,O=D>2?0:-1,w=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];S.set(w,v*_*D),E.set(d,m*_*D);const T=[D,D,D,D,D,D];x.set(T,h*_*D)}const L=new os;L.setAttribute("position",new Gn(S,v)),L.setAttribute("uv",new Gn(E,m)),L.setAttribute("faceIndex",new Gn(x,h)),e.push(L),s>rr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gp(t,e,n){const i=new Ls(t,e,n);return i.texture.mapping=ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function qw(t,e,n){const i=new Float32Array(Ss),s=new X(0,1,0);return new es({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kf(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function _p(){return new es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function vp(){return new es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function Yw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nu||l===iu,u=l===xr||l===Sr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new mp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(n===null&&(n=new mp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Kw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&fr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zw(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,x=S.length;E<x;E+=3){const L=S[E+0],D=S[E+1],A=S[E+2];d.push(L,D,D,A,A,L)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const L=E+0,D=E+1,A=E+2;d.push(L,D,D,A,A,L)}}else return;const m=new(m_(d)?x_:v_)(d,1);m.version=v;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Jw(t,e,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,r,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S]*v[S];n.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Qw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function eA(t,e,n){const i=new WeakMap,s=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,D=1;L>e.maxTextureSize&&(D=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*D*4*f),O=new g_(A,L,D,f);O.type=ii,O.needsUpdate=!0;const w=x*4;for(let F=0;F<f;F++){const q=h[F],j=S[F],oe=E[F],ae=L*D*4*F;for(let K=0;K<q.count;K++){const Z=K*w;_===!0&&(s.fromBufferAttribute(q,K),A[ae+Z+0]=s.x,A[ae+Z+1]=s.y,A[ae+Z+2]=s.z,A[ae+Z+3]=0),v===!0&&(s.fromBufferAttribute(j,K),A[ae+Z+4]=s.x,A[ae+Z+5]=s.y,A[ae+Z+6]=s.z,A[ae+Z+7]=0),m===!0&&(s.fromBufferAttribute(oe,K),A[ae+Z+8]=s.x,A[ae+Z+9]=s.y,A[ae+Z+10]=s.z,A[ae+Z+11]=oe.itemSize===4?s.w:1)}}d={count:f,texture:O,size:new Xe(L,D)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function tA(t,e,n,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:o}}const P_=new en,xp=new b_(1,1),L_=new g_,D_=new Mb,I_=new E_,Sp=[],yp=[],Ep=new Float32Array(16),Mp=new Float32Array(9),bp=new Float32Array(4);function Cr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cl(t,e){let n=yp[e];n===void 0&&(n=new Int32Array(e),yp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function rA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function oA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ht(n,i))return;bp.set(i),t.uniformMatrix2fv(this.addr,!1,bp),zt(n,i)}}function aA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ht(n,i))return;Mp.set(i),t.uniformMatrix3fv(this.addr,!1,Mp),zt(n,i)}}function lA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ht(n,i))return;Ep.set(i),t.uniformMatrix4fv(this.addr,!1,Ep),zt(n,i)}}function cA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function dA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function _A(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(xp.compareFunction=p_,r=xp):r=P_,n.setTexture2D(e||r,s)}function vA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||D_,s)}function xA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||I_,s)}function SA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||L_,s)}function yA(t){switch(t){case 5126:return nA;case 35664:return iA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return aA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return hA;case 5125:return dA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}function EA(t,e){t.uniform1fv(this.addr,e)}function MA(t,e){const n=Cr(e,this.size,2);t.uniform2fv(this.addr,n)}function bA(t,e){const n=Cr(e,this.size,3);t.uniform3fv(this.addr,n)}function TA(t,e){const n=Cr(e,this.size,4);t.uniform4fv(this.addr,n)}function wA(t,e){const n=Cr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AA(t,e){const n=Cr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RA(t,e){const n=Cr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CA(t,e){t.uniform1iv(this.addr,e)}function PA(t,e){t.uniform2iv(this.addr,e)}function LA(t,e){t.uniform3iv(this.addr,e)}function DA(t,e){t.uniform4iv(this.addr,e)}function IA(t,e){t.uniform1uiv(this.addr,e)}function UA(t,e){t.uniform2uiv(this.addr,e)}function NA(t,e){t.uniform3uiv(this.addr,e)}function OA(t,e){t.uniform4uiv(this.addr,e)}function FA(t,e,n){const i=this.cache,s=e.length,r=cl(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||P_,r[o])}function BA(t,e,n){const i=this.cache,s=e.length,r=cl(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||D_,r[o])}function kA(t,e,n){const i=this.cache,s=e.length,r=cl(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||I_,r[o])}function HA(t,e,n){const i=this.cache,s=e.length,r=cl(n,s);Ht(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||L_,r[o])}function zA(t){switch(t){case 5126:return EA;case 35664:return MA;case 35665:return bA;case 35666:return TA;case 35674:return wA;case 35675:return AA;case 35676:return RA;case 5124:case 35670:return CA;case 35667:case 35671:return PA;case 35668:case 35672:return LA;case 35669:case 35673:return DA;case 5125:return IA;case 36294:return UA;case 36295:return NA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return HA}}class VA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=yA(n.type)}}class GA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zA(n.type)}}class WA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const hc=/(\w+)(\])?(\[|\.)?/g;function Tp(t,e){t.seq.push(e),t.map[e.id]=e}function XA(t,e,n){const i=t.name,s=i.length;for(hc.lastIndex=0;;){const r=hc.exec(i),o=hc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tp(n,c===void 0?new VA(a,t,e):new GA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new WA(a),Tp(n,f)),n=f}}}class Ta{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);XA(r,o,this)}}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const $A=37297;let jA=0;function qA(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Ap=new Ze;function YA(t){ot._getMatrix(Ap,ot.workingColorSpace,t);const e=`mat3( ${Ap.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case za:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+qA(t.getShaderSource(e),o)}else return s}function KA(t,e){const n=YA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ZA(t,e){let n;switch(e){case qM:n="Linear";break;case YM:n="Reinhard";break;case KM:n="Cineon";break;case ZM:n="ACESFilmic";break;case QM:n="AgX";break;case eb:n="Neutral";break;case JM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fa=new X;function JA(){ot.getLuminanceCoefficients(fa);const t=fa.x.toFixed(4),e=fa.y.toFixed(4),n=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function eR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function jr(t){return t!==""}function Cp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Du(t){return t.replace(nR,sR)}const iR=new Map;function sR(t,e){let n=Je[e];if(n===void 0){const i=iR.get(e);if(i!==void 0)n=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Du(n)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(t){return t.replace(rR,oR)}function oR(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function aR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===s_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===r_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function lR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xr:case Sr:e="ENVMAP_TYPE_CUBE";break;case ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function uR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case $M:e="ENVMAP_BLENDING_MIX";break;case jM:e="ENVMAP_BLENDING_ADD";break}return e}function fR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function hR(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=aR(n),c=lR(n),u=cR(n),f=uR(n),d=fR(n),p=QA(n),_=eR(r),v=s.createProgram();let m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(jr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(jr).join(`
`),h.length>0&&(h+=`
`)):(m=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),h=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Je.tonemapping_pars_fragment:"",n.toneMapping!==qi?ZA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,KA("linearToOutputTexel",n.outputColorSpace),JA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jr).join(`
`)),o=Du(o),o=Cp(o,n),o=Pp(o,n),a=Du(a),a=Cp(a,n),a=Pp(a,n),o=Lp(o),a=Lp(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+m+o,x=S+h+a,L=wp(s,s.VERTEX_SHADER,E),D=wp(s,s.FRAGMENT_SHADER,x);s.attachShader(v,L),s.attachShader(v,D),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(F){if(t.debug.checkShaderErrors){const q=s.getProgramInfoLog(v).trim(),j=s.getShaderInfoLog(L).trim(),oe=s.getShaderInfoLog(D).trim();let ae=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,v,L,D);else{const Z=Rp(s,L,"vertex"),W=Rp(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+Z+`
`+W)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(j===""||oe==="")&&(K=!1);K&&(F.diagnostics={runnable:ae,programLog:q,vertexShader:{log:j,prefix:m},fragmentShader:{log:oe,prefix:h}})}s.deleteShader(L),s.deleteShader(D),O=new Ta(s,v),w=tR(s,v)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,$A)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=D,this}let dR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new mR(e),n.set(e,i)),i}}class mR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function gR(t,e,n,i,s,r,o){const a=new Lf,l=new pR,c=new Set,u=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,T,F,q,j){const oe=q.fog,ae=j.geometry,K=w.isMeshStandardMaterial?q.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||K),W=Z&&Z.mapping===ll?Z.image.height:null,me=_[w.type];w.precision!==null&&(p=s.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const xe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Se=xe!==void 0?xe.length:0;let De=0;ae.morphAttributes.position!==void 0&&(De=1),ae.morphAttributes.normal!==void 0&&(De=2),ae.morphAttributes.color!==void 0&&(De=3);let Ye,se,_e,be;if(me){const dt=ei[me];Ye=dt.vertexShader,se=dt.fragmentShader}else Ye=w.vertexShader,se=w.fragmentShader,l.update(w),_e=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const H=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),ce=j.isInstancedMesh===!0,le=j.isBatchedMesh===!0,Be=!!w.map,I=!!w.matcap,U=!!Z,y=!!w.aoMap,ie=!!w.lightMap,Q=!!w.bumpMap,J=!!w.normalMap,b=!!w.displacementMap,C=!!w.emissiveMap,N=!!w.metalnessMap,B=!!w.roughnessMap,de=w.anisotropy>0,M=w.clearcoat>0,g=w.dispersion>0,P=w.iridescence>0,z=w.sheen>0,Y=w.transmission>0,$=de&&!!w.anisotropyMap,Ee=M&&!!w.clearcoatMap,he=M&&!!w.clearcoatNormalMap,Te=M&&!!w.clearcoatRoughnessMap,Re=P&&!!w.iridescenceMap,fe=P&&!!w.iridescenceThicknessMap,Ce=z&&!!w.sheenColorMap,Ue=z&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,ye=!!w.specularColorMap,ze=!!w.specularIntensityMap,k=Y&&!!w.transmissionMap,we=Y&&!!w.thicknessMap,pe=!!w.gradientMap,Ie=!!w.alphaMap,ge=w.alphaTest>0,ue=!!w.alphaHash,Oe=!!w.extensions;let je=qi;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(je=t.toneMapping);const Mt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:se,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:le,batchingColor:le&&j._colorsTexture!==null,instancing:ce,instancingColor:ce&&j.instanceColor!==null,instancingMorph:ce&&j.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:yr,alphaToCoverage:!!w.alphaToCoverage,map:Be,matcap:I,envMap:U,envMapMode:U&&Z.mapping,envMapCubeUVHeight:W,aoMap:y,lightMap:ie,bumpMap:Q,normalMap:J,displacementMap:d&&b,emissiveMap:C,normalMapObjectSpace:J&&w.normalMapType===sb,normalMapTangentSpace:J&&w.normalMapType===Rf,metalnessMap:N,roughnessMap:B,anisotropy:de,anisotropyMap:$,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:g,iridescence:P,iridescenceMap:Re,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:Ce,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:ye,specularIntensityMap:ze,transmission:Y,transmissionMap:k,thicknessMap:we,gradientMap:pe,opaque:w.transparent===!1&&w.blending===ur&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ge,alphaHash:ue,combine:w.combine,mapUv:Be&&v(w.map.channel),aoMapUv:y&&v(w.aoMap.channel),lightMapUv:ie&&v(w.lightMap.channel),bumpMapUv:Q&&v(w.bumpMap.channel),normalMapUv:J&&v(w.normalMap.channel),displacementMapUv:b&&v(w.displacementMap.channel),emissiveMapUv:C&&v(w.emissiveMap.channel),metalnessMapUv:N&&v(w.metalnessMap.channel),roughnessMapUv:B&&v(w.roughnessMap.channel),anisotropyMapUv:$&&v(w.anisotropyMap.channel),clearcoatMapUv:Ee&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(w.sheenRoughnessMap.channel),specularMapUv:Ne&&v(w.specularMap.channel),specularColorMapUv:ye&&v(w.specularColorMap.channel),specularIntensityMapUv:ze&&v(w.specularIntensityMap.channel),transmissionMapUv:k&&v(w.transmissionMap.channel),thicknessMapUv:we&&v(w.thicknessMap.channel),alphaMapUv:Ie&&v(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(J||de),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ae.attributes.uv&&(Be||Ie),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:j.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:De,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,decodeVideoTexture:Be&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===gt,decodeVideoTextureEmissive:C&&w.emissiveMap.isVideoTexture===!0&&ot.getTransfer(w.emissiveMap.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function h(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)T.push(F),T.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(T,w),E(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function S(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function E(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const T=_[w.type];let F;if(T){const q=ei[T];F=Ob.clone(q.uniforms)}else F=w.uniforms;return F}function L(w,T){let F;for(let q=0,j=u.length;q<j;q++){const oe=u[q];if(oe.cacheKey===T){F=oe,++F.usedTimes;break}}return F===void 0&&(F=new hR(t,T,w,r),u.push(F)),F}function D(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:D,releaseShaderCache:A,programs:u,dispose:O}}function _R(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function vR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ip(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Up(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||vR),i.length>1&&i.sort(d||Ip),s.length>1&&s.sort(d||Ip)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function xR(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Up,t.set(i,[o])):s>=r.length?(o=new Up,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function SR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Qe};break;case"SpotLight":n={position:new X,direction:new X,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function yR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ER=0;function MR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function bR(t){const e=new SR,n=yR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new Et,o=new Et;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,S=0,E=0,x=0,L=0,D=0,A=0;c.sort(MR);for(let w=0,T=c.length;w<T;w++){const F=c[w],q=F.color,j=F.intensity,oe=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=q.r*j,f+=q.g*j,d+=q.b*j;else if(F.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(F.sh.coefficients[K],j);A++}else if(F.isDirectionalLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,W=n.get(F);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=K,p++}else if(F.isSpotLight){const K=e.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(q).multiplyScalar(j),K.distance=oe,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,i.spot[v]=K;const Z=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,Z.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[v]=Z.matrix,F.castShadow){const W=n.get(F);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=ae,x++}v++}else if(F.isRectAreaLight){const K=e.get(F);K.color.copy(q).multiplyScalar(j),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=K,m++}else if(F.isPointLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){const Z=F.shadow,W=n.get(F);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=F.shadow.matrix,E++}i.point[_]=K,_++}else if(F.isHemisphereLight){const K=e.get(F);K.skyColor.copy(F.color).multiplyScalar(j),K.groundColor.copy(F.groundColor).multiplyScalar(j),i.hemi[h]=K,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==S||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==L||O.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+L-D,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=S,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=L,O.numLightProbes=A,i.version=ER++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Np(t){const e=new bR(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function TR(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Np(t),e.set(s,[a])):r>=o.length?(a=new Np(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const wR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AR=`uniform sampler2D shadow_pass;
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
}`;function RR(t,e,n){let i=new Uf;const s=new Xe,r=new Xe,o=new Pt,a=new qb({depthPacking:ib}),l=new Yb,c={},u=n.maxTextureSize,f={[Qi]:hn,[hn]:Qi,[Ei]:Ei},d=new es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:wR,fragmentShader:AR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new os;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=s_;let h=this.type;this.render=function(D,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const w=t.getRenderTarget(),T=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),q=t.state;q.setBlending(ji),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=h!==vi&&this.type===vi,oe=h===vi&&this.type!==vi;for(let ae=0,K=D.length;ae<K;ae++){const Z=D[ae],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const me=W.getFrameExtents();if(s.multiply(me),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||j===!0||oe===!0){const Se=this.type!==vi?{minFilter:Mn,magFilter:Mn}:{};W.map!==null&&W.map.dispose(),W.map=new Ls(s.x,s.y,Se),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const xe=W.getViewportCount();for(let Se=0;Se<xe;Se++){const De=W.getViewport(Se);o.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),q.viewport(o),W.updateMatrices(Z,Se),i=W.getFrustum(),x(A,O,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===vi&&S(W,O),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,T,F)};function S(D,A){const O=e.update(v);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ls(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(A,null,O,d,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(A,null,O,p,v,null)}function E(D,A,O,w){let T=null;const F=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)T=F;else if(T=O.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const q=T.uuid,j=A.uuid;let oe=c[q];oe===void 0&&(oe={},c[q]=oe);let ae=oe[j];ae===void 0&&(ae=T.clone(),oe[j]=ae,A.addEventListener("dispose",L)),T=ae}if(T.visible=A.visible,T.wireframe=A.wireframe,w===vi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=t.properties.get(T);q.light=O}return T}function x(D,A,O,w,T){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===vi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const j=e.update(D),oe=D.material;if(Array.isArray(oe)){const ae=j.groups;for(let K=0,Z=ae.length;K<Z;K++){const W=ae[K],me=oe[W.materialIndex];if(me&&me.visible){const xe=E(D,me,w,T);D.onBeforeShadow(t,D,A,O,j,xe,W),t.renderBufferDirect(O,null,j,xe,D,W),D.onAfterShadow(t,D,A,O,j,xe,W)}}}else if(oe.visible){const ae=E(D,oe,w,T);D.onBeforeShadow(t,D,A,O,j,ae,null),t.renderBufferDirect(O,null,j,ae,D,null),D.onAfterShadow(t,D,A,O,j,ae,null)}}const q=D.children;for(let j=0,oe=q.length;j<oe;j++)x(q[j],A,O,w,T)}function L(D){D.target.removeEventListener("dispose",L);for(const O in c){const w=c[O],T=D.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const CR={[Yc]:Kc,[Zc]:eu,[Jc]:tu,[vr]:Qc,[Kc]:Yc,[eu]:Zc,[tu]:Jc,[Qc]:vr};function PR(t,e){function n(){let k=!1;const we=new Pt;let pe=null;const Ie=new Pt(0,0,0,0);return{setMask:function(ge){pe!==ge&&!k&&(t.colorMask(ge,ge,ge,ge),pe=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ue,Oe,je,Mt){Mt===!0&&(ge*=je,ue*=je,Oe*=je),we.set(ge,ue,Oe,je),Ie.equals(we)===!1&&(t.clearColor(ge,ue,Oe,je),Ie.copy(we))},reset:function(){k=!1,pe=null,Ie.set(-1,0,0,0)}}}function i(){let k=!1,we=!1,pe=null,Ie=null,ge=null;return{setReversed:function(ue){if(we!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const je=ge;ge=null,this.setClear(je)}},getReversed:function(){return we},setTest:function(ue){ue?H(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){pe!==ue&&!k&&(t.depthMask(ue),pe=ue)},setFunc:function(ue){if(we&&(ue=CR[ue]),Ie!==ue){switch(ue){case Yc:t.depthFunc(t.NEVER);break;case Kc:t.depthFunc(t.ALWAYS);break;case Zc:t.depthFunc(t.LESS);break;case vr:t.depthFunc(t.LEQUAL);break;case Jc:t.depthFunc(t.EQUAL);break;case Qc:t.depthFunc(t.GEQUAL);break;case eu:t.depthFunc(t.GREATER);break;case tu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ie=ue}},setLocked:function(ue){k=ue},setClear:function(ue){ge!==ue&&(we&&(ue=1-ue),t.clearDepth(ue),ge=ue)},reset:function(){k=!1,pe=null,Ie=null,ge=null,we=!1}}}function s(){let k=!1,we=null,pe=null,Ie=null,ge=null,ue=null,Oe=null,je=null,Mt=null;return{setTest:function(dt){k||(dt?H(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(dt){we!==dt&&!k&&(t.stencilMask(dt),we=dt)},setFunc:function(dt,In,ci){(pe!==dt||Ie!==In||ge!==ci)&&(t.stencilFunc(dt,In,ci),pe=dt,Ie=In,ge=ci)},setOp:function(dt,In,ci){(ue!==dt||Oe!==In||je!==ci)&&(t.stencilOp(dt,In,ci),ue=dt,Oe=In,je=ci)},setLocked:function(dt){k=dt},setClear:function(dt){Mt!==dt&&(t.clearStencil(dt),Mt=dt)},reset:function(){k=!1,we=null,pe=null,Ie=null,ge=null,ue=null,Oe=null,je=null,Mt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,L=null,D=null,A=new Qe(0,0,0),O=0,w=!1,T=null,F=null,q=null,j=null,oe=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=Z>=2);let me=null,xe={};const Se=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),Ye=new Pt().fromArray(Se),se=new Pt().fromArray(De);function _e(k,we,pe,Ie){const ge=new Uint8Array(4),ue=t.createTexture();t.bindTexture(k,ue),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<pe;Oe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,Ie,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(we+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ue}const be={};be[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(vr),Q(!1),J(Rd),H(t.CULL_FACE),y(ji);function H(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function re(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function ce(k,we){return f[k]!==we?(t.bindFramebuffer(k,we),f[k]=we,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function le(k,we){let pe=p,Ie=!1;if(k){pe=d.get(we),pe===void 0&&(pe=[],d.set(we,pe));const ge=k.textures;if(pe.length!==ge.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Oe=ge.length;ue<Oe;ue++)pe[ue]=t.COLOR_ATTACHMENT0+ue;pe.length=ge.length,Ie=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,Ie=!0);Ie&&t.drawBuffers(pe)}function Be(k){return _!==k?(t.useProgram(k),_=k,!0):!1}const I={[xs]:t.FUNC_ADD,[CM]:t.FUNC_SUBTRACT,[PM]:t.FUNC_REVERSE_SUBTRACT};I[LM]=t.MIN,I[DM]=t.MAX;const U={[IM]:t.ZERO,[UM]:t.ONE,[NM]:t.SRC_COLOR,[jc]:t.SRC_ALPHA,[zM]:t.SRC_ALPHA_SATURATE,[kM]:t.DST_COLOR,[FM]:t.DST_ALPHA,[OM]:t.ONE_MINUS_SRC_COLOR,[qc]:t.ONE_MINUS_SRC_ALPHA,[HM]:t.ONE_MINUS_DST_COLOR,[BM]:t.ONE_MINUS_DST_ALPHA,[VM]:t.CONSTANT_COLOR,[GM]:t.ONE_MINUS_CONSTANT_COLOR,[WM]:t.CONSTANT_ALPHA,[XM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(k,we,pe,Ie,ge,ue,Oe,je,Mt,dt){if(k===ji){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),k!==RM){if(k!==m||dt!==w){if((h!==xs||x!==xs)&&(t.blendEquation(t.FUNC_ADD),h=xs,x=xs),dt)switch(k){case ur:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.ONE,t.ONE);break;case Pd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ld:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ur:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Pd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ld:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,E=null,L=null,D=null,A.set(0,0,0),O=0,m=k,w=dt}return}ge=ge||we,ue=ue||pe,Oe=Oe||Ie,(we!==h||ge!==x)&&(t.blendEquationSeparate(I[we],I[ge]),h=we,x=ge),(pe!==S||Ie!==E||ue!==L||Oe!==D)&&(t.blendFuncSeparate(U[pe],U[Ie],U[ue],U[Oe]),S=pe,E=Ie,L=ue,D=Oe),(je.equals(A)===!1||Mt!==O)&&(t.blendColor(je.r,je.g,je.b,Mt),A.copy(je),O=Mt),m=k,w=!1}function ie(k,we){k.side===Ei?re(t.CULL_FACE):H(t.CULL_FACE);let pe=k.side===hn;we&&(pe=!pe),Q(pe),k.blending===ur&&k.transparent===!1?y(ji):y(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ie=k.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),C(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){T!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),T=k)}function J(k){k!==wM?(H(t.CULL_FACE),k!==F&&(k===Rd?t.cullFace(t.BACK):k===AM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),F=k}function b(k){k!==q&&(K&&t.lineWidth(k),q=k)}function C(k,we,pe){k?(H(t.POLYGON_OFFSET_FILL),(j!==we||oe!==pe)&&(t.polygonOffset(we,pe),j=we,oe=pe)):re(t.POLYGON_OFFSET_FILL)}function N(k){k?H(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function B(k){k===void 0&&(k=t.TEXTURE0+ae-1),me!==k&&(t.activeTexture(k),me=k)}function de(k,we,pe){pe===void 0&&(me===null?pe=t.TEXTURE0+ae-1:pe=me);let Ie=xe[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},xe[pe]=Ie),(Ie.type!==k||Ie.texture!==we)&&(me!==pe&&(t.activeTexture(pe),me=pe),t.bindTexture(k,we||be[k]),Ie.type=k,Ie.texture=we)}function M(){const k=xe[me];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(k){Ye.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Ye.copy(k))}function Ue(k){se.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),se.copy(k))}function Ne(k,we){let pe=c.get(we);pe===void 0&&(pe=new WeakMap,c.set(we,pe));let Ie=pe.get(k);Ie===void 0&&(Ie=t.getUniformBlockIndex(we,k.name),pe.set(k,Ie))}function ye(k,we){const Ie=c.get(we).get(k);l.get(we)!==Ie&&(t.uniformBlockBinding(we,Ie,k.__bindingPointIndex),l.set(we,Ie))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},me=null,xe={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,L=null,D=null,A=new Qe(0,0,0),O=0,w=!1,T=null,F=null,q=null,j=null,oe=null,Ye.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:H,disable:re,bindFramebuffer:ce,drawBuffers:le,useProgram:Be,setBlending:y,setMaterial:ie,setFlipSided:Q,setCullFace:J,setLineWidth:b,setPolygonOffset:C,setScissorTest:N,activeTexture:B,bindTexture:de,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:Re,texImage3D:fe,updateUBOMapping:Ne,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Te,texSubImage2D:z,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:Ee,scissor:Ce,viewport:Ue,reset:ze}}function LR(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):yo("canvas")}function v(M,g,P){let z=1;const Y=de(M);if((Y.width>P||Y.height>P)&&(z=P/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(z*Y.width),Ee=Math.floor(z*Y.height);f===void 0&&(f=_($,Ee));const he=g?_($,Ee):f;return he.width=$,he.height=Ee,he.getContext("2d").drawImage(M,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+$+"x"+Ee+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,g,P,z,Y=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=g;if(g===t.RED&&(P===t.FLOAT&&($=t.R32F),P===t.HALF_FLOAT&&($=t.R16F),P===t.UNSIGNED_BYTE&&($=t.R8)),g===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.R8UI),P===t.UNSIGNED_SHORT&&($=t.R16UI),P===t.UNSIGNED_INT&&($=t.R32UI),P===t.BYTE&&($=t.R8I),P===t.SHORT&&($=t.R16I),P===t.INT&&($=t.R32I)),g===t.RG&&(P===t.FLOAT&&($=t.RG32F),P===t.HALF_FLOAT&&($=t.RG16F),P===t.UNSIGNED_BYTE&&($=t.RG8)),g===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RG8UI),P===t.UNSIGNED_SHORT&&($=t.RG16UI),P===t.UNSIGNED_INT&&($=t.RG32UI),P===t.BYTE&&($=t.RG8I),P===t.SHORT&&($=t.RG16I),P===t.INT&&($=t.RG32I)),g===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RGB8UI),P===t.UNSIGNED_SHORT&&($=t.RGB16UI),P===t.UNSIGNED_INT&&($=t.RGB32UI),P===t.BYTE&&($=t.RGB8I),P===t.SHORT&&($=t.RGB16I),P===t.INT&&($=t.RGB32I)),g===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RGBA8UI),P===t.UNSIGNED_SHORT&&($=t.RGBA16UI),P===t.UNSIGNED_INT&&($=t.RGBA32UI),P===t.BYTE&&($=t.RGBA8I),P===t.SHORT&&($=t.RGBA16I),P===t.INT&&($=t.RGBA32I)),g===t.RGB&&P===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),g===t.RGBA){const Ee=Y?za:ot.getTransfer(z);P===t.FLOAT&&($=t.RGBA32F),P===t.HALF_FLOAT&&($=t.RGBA16F),P===t.UNSIGNED_BYTE&&($=Ee===gt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(M,g){let P;return M?g===null||g===Cs||g===vo?P=t.DEPTH24_STENCIL8:g===ii?P=t.DEPTH32F_STENCIL8:g===_o&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cs||g===vo?P=t.DEPTH_COMPONENT24:g===ii?P=t.DEPTH_COMPONENT32F:g===_o&&(P=t.DEPTH_COMPONENT16),P}function L(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Mn&&M.minFilter!==ni?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function D(M){const g=M.target;g.removeEventListener("dispose",D),O(g),g.isVideoTexture&&u.delete(g)}function A(M){const g=M.target;g.removeEventListener("dispose",A),T(g)}function O(M){const g=i.get(M);if(g.__webglInit===void 0)return;const P=M.source,z=d.get(P);if(z){const Y=z[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&w(M),Object.keys(z).length===0&&d.delete(P)}i.remove(M)}function w(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const P=M.source,z=d.get(P);delete z[g.__cacheKey],o.memory.textures--}function T(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let Y=0;Y<g.__webglFramebuffer[z].length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[z][Y]);else t.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)t.deleteFramebuffer(g.__webglFramebuffer[z]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=M.textures;for(let z=0,Y=P.length;z<Y;z++){const $=i.get(P[z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(P[z])}i.remove(M)}let F=0;function q(){F=0}function j(){const M=F;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),F+=1,M}function oe(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ae(M,g){const P=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(P,M,g);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+g)}function K(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){be(P,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+g)}function Z(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){be(P,M,g);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+g)}function W(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){H(P,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+g)}const me={[go]:t.REPEAT,[Es]:t.CLAMP_TO_EDGE,[su]:t.MIRRORED_REPEAT},xe={[Mn]:t.NEAREST,[tb]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[Ol]:t.LINEAR_MIPMAP_NEAREST,[Ms]:t.LINEAR_MIPMAP_LINEAR},Se={[rb]:t.NEVER,[fb]:t.ALWAYS,[ob]:t.LESS,[p_]:t.LEQUAL,[ab]:t.EQUAL,[ub]:t.GEQUAL,[lb]:t.GREATER,[cb]:t.NOTEQUAL};function De(M,g){if(g.type===ii&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ni||g.magFilter===Ol||g.magFilter===Go||g.magFilter===Ms||g.minFilter===ni||g.minFilter===Ol||g.minFilter===Go||g.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,me[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,me[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,me[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,xe[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Mn||g.minFilter!==Go&&g.minFilter!==Ms||g.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(M,g){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",D));const z=g.source;let Y=d.get(z);Y===void 0&&(Y={},d.set(z,Y));const $=oe(g);if($!==M.__cacheKey){Y[$]===void 0&&(Y[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Y[$].usedTimes++;const Ee=Y[M.__cacheKey];Ee!==void 0&&(Y[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(g)),M.__cacheKey=$,M.__webglTexture=Y[$].texture}return P}function se(M,g,P){return Math.floor(Math.floor(M/P)/g)}function _e(M,g,P,z){const $=M.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,P,z,g.data);else{$.sort((fe,Ce)=>fe.start-Ce.start);let Ee=0;for(let fe=1;fe<$.length;fe++){const Ce=$[Ee],Ue=$[fe],Ne=Ce.start+Ce.count,ye=se(Ue.start,g.width,4),ze=se(Ce.start,g.width,4);Ue.start<=Ne+1&&ye===ze&&se(Ue.start+Ue.count-1,g.width,4)===ye?Ce.count=Math.max(Ce.count,Ue.start+Ue.count-Ce.start):(++Ee,$[Ee]=Ue)}$.length=Ee+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Re=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let fe=0,Ce=$.length;fe<Ce;fe++){const Ue=$[fe],Ne=Math.floor(Ue.start/4),ye=Math.ceil(Ue.count/4),ze=Ne%g.width,k=Math.floor(Ne/g.width),we=ye,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,ze,k,we,pe,P,z,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Re)}}function be(M,g,P){let z=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=t.TEXTURE_3D);const Y=Ye(M,g),$=g.source;n.bindTexture(z,M.__webglTexture,t.TEXTURE0+P);const Ee=i.get($);if($.version!==Ee.__version||Y===!0){n.activeTexture(t.TEXTURE0+P);const he=ot.getPrimaries(ot.workingColorSpace),Te=g.colorSpace===Wi?null:ot.getPrimaries(g.colorSpace),Re=g.colorSpace===Wi||he===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let fe=v(g.image,!1,s.maxTextureSize);fe=B(g,fe);const Ce=r.convert(g.format,g.colorSpace),Ue=r.convert(g.type);let Ne=E(g.internalFormat,Ce,Ue,g.colorSpace,g.isVideoTexture);De(z,g);let ye;const ze=g.mipmaps,k=g.isVideoTexture!==!0,we=Ee.__version===void 0||Y===!0,pe=$.dataReady,Ie=L(g,fe);if(g.isDepthTexture)Ne=x(g.format===So,g.type),we&&(k?n.texStorage2D(t.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ce,Ue,null));else if(g.isDataTexture)if(ze.length>0){k&&we&&n.texStorage2D(t.TEXTURE_2D,Ie,Ne,ze[0].width,ze[0].height);for(let ge=0,ue=ze.length;ge<ue;ge++)ye=ze[ge],k?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,Ce,Ue,ye.data);g.generateMipmaps=!1}else k?(we&&n.texStorage2D(t.TEXTURE_2D,Ie,Ne,fe.width,fe.height),pe&&_e(g,fe,Ce,Ue)):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ce,Ue,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){k&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Ne,ze[0].width,ze[0].height,fe.depth);for(let ge=0,ue=ze.length;ge<ue;ge++)if(ye=ze[ge],g.format!==Hn)if(Ce!==null)if(k){if(pe)if(g.layerUpdates.size>0){const Oe=fp(ye.width,ye.height,g.format,g.type);for(const je of g.layerUpdates){const Mt=ye.data.subarray(je*Oe/ye.data.BYTES_PER_ELEMENT,(je+1)*Oe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,je,ye.width,ye.height,1,Ce,Mt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Ce,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Ne,ye.width,ye.height,fe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Ce,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Ne,ye.width,ye.height,fe.depth,0,Ce,Ue,ye.data)}else{k&&we&&n.texStorage2D(t.TEXTURE_2D,Ie,Ne,ze[0].width,ze[0].height);for(let ge=0,ue=ze.length;ge<ue;ge++)ye=ze[ge],g.format!==Hn?Ce!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,Ce,Ue,ye.data)}else if(g.isDataArrayTexture)if(k){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ie,Ne,fe.width,fe.height,fe.depth),pe)if(g.layerUpdates.size>0){const ge=fp(fe.width,fe.height,g.format,g.type);for(const ue of g.layerUpdates){const Oe=fe.data.subarray(ue*ge/fe.data.BYTES_PER_ELEMENT,(ue+1)*ge/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Ce,Ue,Oe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Ue,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Ce,Ue,fe.data);else if(g.isData3DTexture)k?(we&&n.texStorage3D(t.TEXTURE_3D,Ie,Ne,fe.width,fe.height,fe.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Ue,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Ce,Ue,fe.data);else if(g.isFramebufferTexture){if(we)if(k)n.texStorage2D(t.TEXTURE_2D,Ie,Ne,fe.width,fe.height);else{let ge=fe.width,ue=fe.height;for(let Oe=0;Oe<Ie;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Ne,ge,ue,0,Ce,Ue,null),ge>>=1,ue>>=1}}else if(ze.length>0){if(k&&we){const ge=de(ze[0]);n.texStorage2D(t.TEXTURE_2D,Ie,Ne,ge.width,ge.height)}for(let ge=0,ue=ze.length;ge<ue;ge++)ye=ze[ge],k?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce,Ue,ye):n.texImage2D(t.TEXTURE_2D,ge,Ne,Ce,Ue,ye);g.generateMipmaps=!1}else if(k){if(we){const ge=de(fe);n.texStorage2D(t.TEXTURE_2D,Ie,Ne,ge.width,ge.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ue,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Ce,Ue,fe);m(g)&&h(z),Ee.__version=$.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function H(M,g,P){if(g.image.length!==6)return;const z=Ye(M,g),Y=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+P);const $=i.get(Y);if(Y.version!==$.__version||z===!0){n.activeTexture(t.TEXTURE0+P);const Ee=ot.getPrimaries(ot.workingColorSpace),he=g.colorSpace===Wi?null:ot.getPrimaries(g.colorSpace),Te=g.colorSpace===Wi||Ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Ce=[];for(let ue=0;ue<6;ue++)!Re&&!fe?Ce[ue]=v(g.image[ue],!0,s.maxCubemapSize):Ce[ue]=fe?g.image[ue].image:g.image[ue],Ce[ue]=B(g,Ce[ue]);const Ue=Ce[0],Ne=r.convert(g.format,g.colorSpace),ye=r.convert(g.type),ze=E(g.internalFormat,Ne,ye,g.colorSpace),k=g.isVideoTexture!==!0,we=$.__version===void 0||z===!0,pe=Y.dataReady;let Ie=L(g,Ue);De(t.TEXTURE_CUBE_MAP,g);let ge;if(Re){k&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,ze,Ue.width,Ue.height);for(let ue=0;ue<6;ue++){ge=Ce[ue].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const je=ge[Oe];g.format!==Hn?Ne!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,je.width,je.height,Ne,je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,ze,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,je.width,je.height,Ne,ye,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,ze,je.width,je.height,0,Ne,ye,je.data)}}}else{if(ge=g.mipmaps,k&&we){ge.length>0&&Ie++;const ue=de(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce[ue].width,Ce[ue].height,Ne,ye,Ce[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Ce[ue].width,Ce[ue].height,0,Ne,ye,Ce[ue].data);for(let Oe=0;Oe<ge.length;Oe++){const Mt=ge[Oe].image[ue].image;k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Mt.width,Mt.height,Ne,ye,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,ze,Mt.width,Mt.height,0,Ne,ye,Mt.data)}}else{k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,ye,Ce[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Ne,ye,Ce[ue]);for(let Oe=0;Oe<ge.length;Oe++){const je=ge[Oe];k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Ne,ye,je.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,ze,Ne,ye,je.image[ue])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),$.__version=Y.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function re(M,g,P,z,Y,$){const Ee=r.convert(P.format,P.colorSpace),he=r.convert(P.type),Te=E(P.internalFormat,Ee,he,P.colorSpace),Re=i.get(g),fe=i.get(P);if(fe.__renderTarget=g,!Re.__hasExternalTextures){const Ce=Math.max(1,g.width>>$),Ue=Math.max(1,g.height>>$);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,$,Te,Ce,Ue,g.depth,0,Ee,he,null):n.texImage2D(Y,$,Te,Ce,Ue,0,Ee,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,Y,fe.__webglTexture,0,b(g)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,Y,fe.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(M,g,P){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,Y=z&&z.isDepthTexture?z.type:null,$=x(g.stencilBuffer,Y),Ee=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=b(g);C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,$,g.width,g.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,$,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,$,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,M)}else{const z=g.textures;for(let Y=0;Y<z.length;Y++){const $=z[Y],Ee=r.convert($.format,$.colorSpace),he=r.convert($.type),Te=E($.internalFormat,Ee,he,$.colorSpace),Re=b(g);P&&C(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Te,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,Te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const Y=z.__webglTexture,$=b(g);if(g.depthTexture.format===xo)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(g.depthTexture.format===So)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(M){const g=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const z=M.texture.mipmaps;z&&z.length>0?le(g.__webglFramebuffer[0],M):le(g.__webglFramebuffer,M)}else if(P){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=t.createRenderbuffer(),ce(g.__webglDepthbuffer[z],M,!1);else{const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,$)}}else{const z=M.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ce(g.__webglDepthbuffer,M,!1);else{const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(M,g,P){const z=i.get(M);g!==void 0&&re(z.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Be(M)}function U(M){const g=M.texture,P=i.get(M),z=i.get(g);M.addEventListener("dispose",A);const Y=M.textures,$=M.isWebGLCubeRenderTarget===!0,Ee=Y.length>1;if(Ee||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=g.version,o.memory.textures++),$){P.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[he]=[];for(let Te=0;Te<g.mipmaps.length;Te++)P.__webglFramebuffer[he][Te]=t.createFramebuffer()}else P.__webglFramebuffer[he]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)P.__webglFramebuffer[he]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let he=0,Te=Y.length;he<Te;he++){const Re=i.get(Y[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&C(M)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let he=0;he<Y.length;he++){const Te=Y[he];P.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[he]);const Re=r.convert(Te.format,Te.colorSpace),fe=r.convert(Te.type),Ce=E(Te.internalFormat,Re,fe,Te.colorSpace,M.isXRRenderTarget===!0),Ue=b(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,P.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(P.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),De(t.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)re(P.__webglFramebuffer[he][Te],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else re(P.__webglFramebuffer[he],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let he=0,Te=Y.length;he<Te;he++){const Re=Y[he],fe=i.get(Re);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),De(t.TEXTURE_2D,Re),re(P.__webglFramebuffer,M,Re,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Re)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,z.__webglTexture),De(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)re(P.__webglFramebuffer[Te],M,g,t.COLOR_ATTACHMENT0,he,Te);else re(P.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,he,0);m(g)&&h(he),n.unbindTexture()}M.depthBuffer&&Be(M)}function y(M){const g=M.textures;for(let P=0,z=g.length;P<z;P++){const Y=g[P];if(m(Y)){const $=S(M),Ee=i.get(Y).__webglTexture;n.bindTexture($,Ee),h($),n.unbindTexture()}}}const ie=[],Q=[];function J(M){if(M.samples>0){if(C(M)===!1){const g=M.textures,P=M.width,z=M.height;let Y=t.COLOR_BUFFER_BIT;const $=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(M),he=g.length>1;if(he)for(let Re=0;Re<g.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const fe=i.get(g[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,P,z,0,0,P,z,Y,t.NEAREST),l===!0&&(ie.length=0,Q.length=0,ie.push(t.COLOR_ATTACHMENT0+Re),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ie.push($),Q.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<g.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const fe=i.get(g[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function b(M){return Math.min(s.maxSamples,M.samples)}function C(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function B(M,g){const P=M.colorSpace,z=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==yr&&P!==Wi&&(ot.getTransfer(P)===gt?(z!==Hn||Y!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function de(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=I,this.setupRenderTarget=U,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=re,this.useMultisampledRTT=C}function DR(t,e){function n(i,s=Wi){let r;const o=ot.getTransfer(s);if(i===li)return t.UNSIGNED_BYTE;if(i===Ef)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===c_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===a_)return t.BYTE;if(i===l_)return t.SHORT;if(i===_o)return t.UNSIGNED_SHORT;if(i===yf)return t.INT;if(i===Cs)return t.UNSIGNED_INT;if(i===ii)return t.FLOAT;if(i===Ro)return t.HALF_FLOAT;if(i===u_)return t.ALPHA;if(i===f_)return t.RGB;if(i===Hn)return t.RGBA;if(i===xo)return t.DEPTH_COMPONENT;if(i===So)return t.DEPTH_STENCIL;if(i===bf)return t.RED;if(i===Tf)return t.RED_INTEGER;if(i===h_)return t.RG;if(i===wf)return t.RG_INTEGER;if(i===Af)return t.RGBA_INTEGER;if(i===xa||i===Sa||i===ya||i===Ea)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ru||i===ou||i===au||i===lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ou)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cu||i===uu||i===fu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cu||i===uu)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hu||i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===Su||i===yu||i===Eu||i===Mu||i===bu||i===Tu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===du)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_u)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Su)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Tu)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ma||i===wu||i===Au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ma)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===d_||i===Ru||i===Cu||i===Pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const IR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
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

}`;class NR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new en,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new es({vertexShader:IR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xt(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends Us{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=new NR,m=n.getContextAttributes();let h=null,S=null;const E=[],x=[],L=new Xe;let D=null;const A=new Sn;A.viewport=new Pt;const O=new Sn;O.viewport=new Pt;const w=[A,O],T=new nT;let F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=E[se];return _e===void 0&&(_e=new sc,E[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=E[se];return _e===void 0&&(_e=new sc,E[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=E[se];return _e===void 0&&(_e=new sc,E[se]=_e),_e.getHandSpace()};function j(se){const _e=x.indexOf(se.inputSource);if(_e===-1)return;const be=E[_e];be!==void 0&&(be.update(se.inputSource,se.frame,c||o),be.dispatchEvent({type:se.type,data:se.inputSource}))}function oe(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",ae);for(let se=0;se<E.length;se++){const _e=x[se];_e!==null&&(x[se]=null,E[se].disconnect(_e))}F=null,q=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,s=null,S=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,H=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?So:xo,H=m.stencil?vo:Cs);const ce={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:r};f=new XRWebGLBinding(s,n),d=f.createProjectionLayer(ce),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ls(d.textureWidth,d.textureHeight,{format:Hn,type:li,depthTexture:new b_(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,be),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ls(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(se){for(let _e=0;_e<se.removed.length;_e++){const be=se.removed[_e],H=x.indexOf(be);H>=0&&(x[H]=null,E[H].disconnect(be))}for(let _e=0;_e<se.added.length;_e++){const be=se.added[_e];let H=x.indexOf(be);if(H===-1){for(let ce=0;ce<E.length;ce++)if(ce>=x.length){x.push(be),H=ce;break}else if(x[ce]===null){x[ce]=be,H=ce;break}if(H===-1)break}const re=E[H];re&&re.connect(be)}}const K=new X,Z=new X;function W(se,_e,be){K.setFromMatrixPosition(_e.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const H=K.distanceTo(Z),re=_e.projectionMatrix.elements,ce=be.projectionMatrix.elements,le=re[14]/(re[10]-1),Be=re[14]/(re[10]+1),I=(re[9]+1)/re[5],U=(re[9]-1)/re[5],y=(re[8]-1)/re[0],ie=(ce[8]+1)/ce[0],Q=le*y,J=le*ie,b=H/(-y+ie),C=b*-y;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(C),se.translateZ(b),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const N=le+b,B=Be+b,de=Q-C,M=J+(H-C),g=I*Be/B*N,P=U*Be/B*N;se.projectionMatrix.makePerspective(de,M,g,P,N,B),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function me(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let _e=se.near,be=se.far;v.texture!==null&&(v.depthNear>0&&(_e=v.depthNear),v.depthFar>0&&(be=v.depthFar)),T.near=O.near=A.near=_e,T.far=O.far=A.far=be,(F!==T.near||q!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,q=T.far),A.layers.mask=se.layers.mask|2,O.layers.mask=se.layers.mask|4,T.layers.mask=A.layers.mask|O.layers.mask;const H=se.parent,re=T.cameras;me(T,H);for(let ce=0;ce<re.length;ce++)me(re[ce],H);re.length===2?W(T,A,O):T.projectionMatrix.copy(A.projectionMatrix),xe(se,T,H)};function xe(se,_e,be){be===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ga*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let Se=null;function De(se,_e){if(u=_e.getViewerPose(c||o),_=_e,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;be.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let le=0;le<be.length;le++){const Be=be[le];let I=null;if(p!==null)I=p.getViewport(Be);else{const y=f.getViewSubImage(d,Be);I=y.viewport,le===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let U=w[le];U===void 0&&(U=new Sn,U.layers.enable(le),U.viewport=new Pt,w[le]=U),U.matrix.fromArray(Be.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Be.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(I.x,I.y,I.width,I.height),le===0&&(T.matrix.copy(U.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),H===!0&&T.cameras.push(U)}const re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(be[0]);le&&le.isValid&&le.texture&&v.init(e,le,s.renderState)}}for(let be=0;be<E.length;be++){const H=x[be],re=E[be];H!==null&&re!==void 0&&re.update(H,_e,c||o)}Se&&Se(se,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Ye=new C_;Ye.setAnimationLoop(De),this.setAnimationLoop=function(se){Se=se},this.dispose=function(){}}}const gs=new Xn,FR=new Et;function BR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,S_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,S,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===hn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===hn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,gs.copy(x),gs.x*=-1,gs.y*=-1,gs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(gs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function kR(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=s[S.id];x===void 0&&(_(S),x=u(S),s[S.id]=x,S.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(S,L);const D=e.render.frame;r[S.id]!==D&&(d(S),r[S.id]=D)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),L=S.__size,D=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,L,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],x=S.uniforms,L=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let D=0,A=x.length;D<A;D++){const O=Array.isArray(x[D])?x[D]:[x[D]];for(let w=0,T=O.length;w<T;w++){const F=O[w];if(p(F,D,w,L)===!0){const q=F.__offset,j=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let ae=0;ae<j.length;ae++){const K=j[ae],Z=v(K);typeof K=="number"||typeof K=="boolean"?(F.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,q+oe,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=0,F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=0,F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=0):(K.toArray(F.__data,oe),oe+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,E,x,L){const D=S.value,A=E+"_"+x;if(L[A]===void 0)return typeof D=="number"||typeof D=="boolean"?L[A]=D:L[A]=D.clone(),!0;{const O=L[A];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return L[A]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function _(S){const E=S.uniforms;let x=0;const L=16;for(let A=0,O=E.length;A<O;A++){const w=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,F=w.length;T<F;T++){const q=w[T],j=Array.isArray(q.value)?q.value:[q.value];for(let oe=0,ae=j.length;oe<ae;oe++){const K=j[oe],Z=v(K),W=x%L,me=W%Z.boundary,xe=W+me;x+=me,xe!==0&&L-xe<Z.storage&&(x+=L-xe),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=x,x+=Z.storage}}}const D=x%L;return D>0&&(x+=L-D),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class HR{constructor(e={}){const{canvas:n=pb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Rn;let D=0,A=0,O=null,w=-1,T=null;const F=new Pt,q=new Pt;let j=null;const oe=new Qe(0);let ae=0,K=n.width,Z=n.height,W=1,me=null,xe=null;const Se=new Pt(0,0,K,Z),De=new Pt(0,0,K,Z);let Ye=!1;const se=new Uf;let _e=!1,be=!1;const H=new Et,re=new Et,ce=new X,le=new Pt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let I=!1;function U(){return O===null?W:1}let y=i;function ie(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sf}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",ue,!1),y===null){const V="webgl2";if(y=ie(V,R),y===null)throw ie(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,J,b,C,N,B,de,M,g,P,z,Y,$,Ee,he,Te,Re,fe,Ce,Ue,Ne,ye,ze,k;function we(){Q=new Kw(y),Q.init(),ye=new DR(y,Q),J=new Gw(y,Q,e,ye),b=new PR(y,Q),J.reverseDepthBuffer&&d&&b.buffers.depth.setReversed(!0),C=new Qw(y),N=new _R,B=new LR(y,Q,b,N,J,ye,C),de=new Xw(x),M=new Yw(x),g=new rT(y),ze=new zw(y,g),P=new Zw(y,g,C,ze),z=new tA(y,P,g,C),Ce=new eA(y,J,B),Te=new Ww(N),Y=new gR(x,de,M,Q,J,ze,Te),$=new BR(x,N),Ee=new xR,he=new TR(Q),fe=new Hw(x,de,M,b,z,p,l),Re=new RR(x,z,J),k=new kR(y,C,J,b),Ue=new Vw(y,Q,C),Ne=new Jw(y,Q,C),C.programs=Y.programs,x.capabilities=J,x.extensions=Q,x.properties=N,x.renderLists=Ee,x.shadowMap=Re,x.state=b,x.info=C}we();const pe=new OR(x,y);this.xr=pe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(K,Z,!1))},this.getSize=function(R){return R.set(K,Z)},this.setSize=function(R,V,ee=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,Z=V,n.width=Math.floor(R*W),n.height=Math.floor(V*W),ee===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(K*W,Z*W).floor()},this.setDrawingBufferSize=function(R,V,ee){K=R,Z=V,W=ee,n.width=Math.floor(R*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,V,ee,ne){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,V,ee,ne),b.viewport(F.copy(Se).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(De)},this.setScissor=function(R,V,ee,ne){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,V,ee,ne),b.scissor(q.copy(De).multiplyScalar(W).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(R){b.setScissorTest(Ye=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){xe=R},this.getClearColor=function(R){return R.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,ee=!0){let ne=0;if(R){let G=!1;if(O!==null){const ve=O.texture.format;G=ve===Af||ve===wf||ve===Tf}if(G){const ve=O.texture.type,Ae=ve===li||ve===Cs||ve===_o||ve===vo||ve===Ef||ve===Mf,Fe=fe.getClearColor(),Le=fe.getClearAlpha(),Ve=Fe.r,Ge=Fe.g,ke=Fe.b;Ae?(_[0]=Ve,_[1]=Ge,_[2]=ke,_[3]=Le,y.clearBufferuiv(y.COLOR,0,_)):(v[0]=Ve,v[1]=Ge,v[2]=ke,v[3]=Le,y.clearBufferiv(y.COLOR,0,v))}else ne|=y.COLOR_BUFFER_BIT}V&&(ne|=y.DEPTH_BUFFER_BIT),ee&&(ne|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),Ee.dispose(),he.dispose(),N.dispose(),de.dispose(),M.dispose(),z.dispose(),ze.dispose(),k.dispose(),Y.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Xf),pe.removeEventListener("sessionend",$f),as.stop()};function Ie(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=C.autoReset,V=Re.enabled,ee=Re.autoUpdate,ne=Re.needsUpdate,G=Re.type;we(),C.autoReset=R,Re.enabled=V,Re.autoUpdate=ee,Re.needsUpdate=ne,Re.type=G}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const V=R.target;V.removeEventListener("dispose",Oe),je(V)}function je(R){Mt(R),N.remove(R)}function Mt(R){const V=N.get(R).programs;V!==void 0&&(V.forEach(function(ee){Y.releaseProgram(ee)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ee,ne,G,ve){V===null&&(V=Be);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Fe=c0(R,V,ee,ne,G);b.setMaterial(ne,Ae);let Le=ee.index,Ve=1;if(ne.wireframe===!0){if(Le=P.getWireframeAttribute(ee),Le===void 0)return;Ve=2}const Ge=ee.drawRange,ke=ee.attributes.position;let nt=Ge.start*Ve,pt=(Ge.start+Ge.count)*Ve;ve!==null&&(nt=Math.max(nt,ve.start*Ve),pt=Math.min(pt,(ve.start+ve.count)*Ve)),Le!==null?(nt=Math.max(nt,0),pt=Math.min(pt,Le.count)):ke!=null&&(nt=Math.max(nt,0),pt=Math.min(pt,ke.count));const At=pt-nt;if(At<0||At===1/0)return;ze.setup(G,ne,Fe,ee,Le);let Rt,st=Ue;if(Le!==null&&(Rt=g.get(Le),st=Ne,st.setIndex(Rt)),G.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*U()),st.setMode(y.LINES)):st.setMode(y.TRIANGLES);else if(G.isLine){let He=ne.linewidth;He===void 0&&(He=1),b.setLineWidth(He*U()),G.isLineSegments?st.setMode(y.LINES):G.isLineLoop?st.setMode(y.LINE_LOOP):st.setMode(y.LINE_STRIP)}else G.isPoints?st.setMode(y.POINTS):G.isSprite&&st.setMode(y.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,Gt=G._multiDrawCounts,ct=G._multiDrawCount,Un=Le?g.get(Le).bytesPerElement:1,Os=N.get(ne).currentProgram.getUniforms();for(let gn=0;gn<ct;gn++)Os.setValue(y,"_gl_DrawID",gn),st.render(He[gn]/Un,Gt[gn])}else if(G.isInstancedMesh)st.renderInstances(nt,At,G.count);else if(ee.isInstancedBufferGeometry){const He=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Gt=Math.min(ee.instanceCount,He);st.renderInstances(nt,At,Gt)}else st.render(nt,At)};function dt(R,V,ee){R.transparent===!0&&R.side===Ei&&R.forceSinglePass===!1?(R.side=hn,R.needsUpdate=!0,Oo(R,V,ee),R.side=Qi,R.needsUpdate=!0,Oo(R,V,ee),R.side=Ei):Oo(R,V,ee)}this.compile=function(R,V,ee=null){ee===null&&(ee=R),h=he.get(ee),h.init(V),E.push(h),ee.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),R!==ee&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const ne=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];dt(Fe,ee,G),ne.add(Fe)}else dt(ve,ee,G),ne.add(ve)}),h=E.pop(),ne},this.compileAsync=function(R,V,ee=null){const ne=this.compile(R,V,ee);return new Promise(G=>{function ve(){if(ne.forEach(function(Ae){N.get(Ae).currentProgram.isReady()&&ne.delete(Ae)}),ne.size===0){G(R);return}setTimeout(ve,10)}Q.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let In=null;function ci(R){In&&In(R)}function Xf(){as.stop()}function $f(){as.start()}const as=new C_;as.setAnimationLoop(ci),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(R){In=R,pe.setAnimationLoop(R),R===null?as.stop():as.start()},pe.addEventListener("sessionstart",Xf),pe.addEventListener("sessionend",$f),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,O),h=he.get(R,E.length),h.init(V),E.push(h),re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),se.setFromProjectionMatrix(re),be=this.localClippingEnabled,_e=Te.init(this.clippingPlanes,be),m=Ee.get(R,S.length),m.init(),S.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&gl(ve,V,-1/0,x.sortObjects)}gl(R,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(me,xe),I=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,I&&fe.addToRenderList(m,R),this.info.render.frame++,_e===!0&&Te.beginShadows();const ee=h.state.shadowsArray;Re.render(ee,R,V),_e===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,G=m.transmissive;if(h.setupLights(),V.isArrayCamera){const ve=V.cameras;if(G.length>0)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Le=ve[Ae];qf(ne,G,R,Le)}I&&fe.render(R);for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Le=ve[Ae];jf(m,R,Le,Le.viewport)}}else G.length>0&&qf(ne,G,R,V),I&&fe.render(R),jf(m,R,V);O!==null&&A===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(x,R,V),ze.resetDefaultState(),w=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],_e===!0&&Te.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function gl(R,V,ee,ne){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){ne&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const Ae=z.update(R),Fe=R.material;Fe.visible&&m.push(R,Ae,Fe,ee,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const Ae=z.update(R),Fe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),le.copy(Ae.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(Fe)){const Le=Ae.groups;for(let Ve=0,Ge=Le.length;Ve<Ge;Ve++){const ke=Le[Ve],nt=Fe[ke.materialIndex];nt&&nt.visible&&m.push(R,Ae,nt,ee,le.z,ke)}}else Fe.visible&&m.push(R,Ae,Fe,ee,le.z,null)}}const ve=R.children;for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++)gl(ve[Ae],V,ee,ne)}function jf(R,V,ee,ne){const G=R.opaque,ve=R.transmissive,Ae=R.transparent;h.setupLightsView(ee),_e===!0&&Te.setGlobalState(x.clippingPlanes,ee),ne&&b.viewport(F.copy(ne)),G.length>0&&No(G,V,ee),ve.length>0&&No(ve,V,ee),Ae.length>0&&No(Ae,V,ee),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function qf(R,V,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ne.id]===void 0&&(h.state.transmissionRenderTarget[ne.id]=new Ls(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ro:li,minFilter:Ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ve=h.state.transmissionRenderTarget[ne.id],Ae=ne.viewport||F;ve.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(oe),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),I&&fe.render(ee);const Le=x.toneMapping;x.toneMapping=qi;const Ve=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),h.setupLightsView(ne),_e===!0&&Te.setGlobalState(x.clippingPlanes,ne),No(R,ee,ne),B.updateMultisampleRenderTarget(ve),B.updateRenderTargetMipmap(ve),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ke=0,nt=V.length;ke<nt;ke++){const pt=V[ke],At=pt.object,Rt=pt.geometry,st=pt.material,He=pt.group;if(st.side===Ei&&At.layers.test(ne.layers)){const Gt=st.side;st.side=hn,st.needsUpdate=!0,Yf(At,ee,ne,Rt,st,He),st.side=Gt,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(B.updateMultisampleRenderTarget(ve),B.updateRenderTargetMipmap(ve))}x.setRenderTarget(Fe),x.setClearColor(oe,ae),Ve!==void 0&&(ne.viewport=Ve),x.toneMapping=Le}function No(R,V,ee){const ne=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ve=R.length;G<ve;G++){const Ae=R[G],Fe=Ae.object,Le=Ae.geometry,Ve=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&ne!==null&&(Ge=ne),Fe.layers.test(ee.layers)&&Yf(Fe,V,ee,Le,Ge,Ve)}}function Yf(R,V,ee,ne,G,ve){R.onBeforeRender(x,V,ee,ne,G,ve),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,V,ee,ne,R,ve),G.transparent===!0&&G.side===Ei&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,x.renderBufferDirect(ee,V,ne,G,R,ve),G.side=Qi,G.needsUpdate=!0,x.renderBufferDirect(ee,V,ne,G,R,ve),G.side=Ei):x.renderBufferDirect(ee,V,ne,G,R,ve),R.onAfterRender(x,V,ee,ne,G,ve)}function Oo(R,V,ee){V.isScene!==!0&&(V=Be);const ne=N.get(R),G=h.state.lights,ve=h.state.shadowsArray,Ae=G.state.version,Fe=Y.getParameters(R,G.state,ve,V,ee),Le=Y.getProgramCacheKey(Fe);let Ve=ne.programs;ne.environment=R.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(R.isMeshStandardMaterial?M:de).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",Oe),Ve=new Map,ne.programs=Ve);let Ge=Ve.get(Le);if(Ge!==void 0){if(ne.currentProgram===Ge&&ne.lightsStateVersion===Ae)return Zf(R,Fe),Ge}else Fe.uniforms=Y.getUniforms(R),R.onBeforeCompile(Fe,x),Ge=Y.acquireProgram(Fe,Le),Ve.set(Le,Ge),ne.uniforms=Fe.uniforms;const ke=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=Te.uniform),Zf(R,Fe),ne.needsLights=f0(R),ne.lightsStateVersion=Ae,ne.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=Ge,ne.uniformsList=null,Ge}function Kf(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Ta.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Zf(R,V){const ee=N.get(R);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function c0(R,V,ee,ne,G){V.isScene!==!0&&(V=Be),B.resetTextureUnits();const ve=V.fog,Ae=ne.isMeshStandardMaterial?V.environment:null,Fe=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yr,Le=(ne.isMeshStandardMaterial?M:de).get(ne.envMap||Ae),Ve=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ge=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ke=!!ee.morphAttributes.position,nt=!!ee.morphAttributes.normal,pt=!!ee.morphAttributes.color;let At=qi;ne.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(At=x.toneMapping);const Rt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,st=Rt!==void 0?Rt.length:0,He=N.get(ne),Gt=h.state.lights;if(_e===!0&&(be===!0||R!==T)){const nn=R===T&&ne.id===w;Te.setState(ne,R,nn)}let ct=!1;ne.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Gt.state.version||He.outputColorSpace!==Fe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Le||ne.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Te.numPlanes||He.numIntersection!==Te.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Ge||He.morphTargets!==ke||He.morphNormals!==nt||He.morphColors!==pt||He.toneMapping!==At||He.morphTargetsCount!==st)&&(ct=!0):(ct=!0,He.__version=ne.version);let Un=He.currentProgram;ct===!0&&(Un=Oo(ne,V,G));let Os=!1,gn=!1,Dr=!1;const wt=Un.getUniforms(),Tn=He.uniforms;if(b.useProgram(Un.program)&&(Os=!0,gn=!0,Dr=!0),ne.id!==w&&(w=ne.id,gn=!0),Os||T!==R){b.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),gb(H),_b(H),wt.setValue(y,"projectionMatrix",H)):wt.setValue(y,"projectionMatrix",R.projectionMatrix),wt.setValue(y,"viewMatrix",R.matrixWorldInverse);const cn=wt.map.cameraPosition;cn!==void 0&&cn.setValue(y,ce.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&wt.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,gn=!0,Dr=!0)}if(G.isSkinnedMesh){wt.setOptional(y,G,"bindMatrix"),wt.setOptional(y,G,"bindMatrixInverse");const nn=G.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),wt.setValue(y,"boneTexture",nn.boneTexture,B))}G.isBatchedMesh&&(wt.setOptional(y,G,"batchingTexture"),wt.setValue(y,"batchingTexture",G._matricesTexture,B),wt.setOptional(y,G,"batchingIdTexture"),wt.setValue(y,"batchingIdTexture",G._indirectTexture,B),wt.setOptional(y,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(y,"batchingColorTexture",G._colorsTexture,B));const wn=ee.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Ce.update(G,ee,Un),(gn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,wt.setValue(y,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Tn.envMap.value=Le,Tn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&V.environment!==null&&(Tn.envMapIntensity.value=V.environmentIntensity),gn&&(wt.setValue(y,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&u0(Tn,Dr),ve&&ne.fog===!0&&$.refreshFogUniforms(Tn,ve),$.refreshMaterialUniforms(Tn,ne,W,Z,h.state.transmissionRenderTarget[R.id]),Ta.upload(y,Kf(He),Tn,B)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ta.upload(y,Kf(He),Tn,B),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(y,"center",G.center),wt.setValue(y,"modelViewMatrix",G.modelViewMatrix),wt.setValue(y,"normalMatrix",G.normalMatrix),wt.setValue(y,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const nn=ne.uniformsGroups;for(let cn=0,_l=nn.length;cn<_l;cn++){const ls=nn[cn];k.update(ls,Un),k.bind(ls,Un)}}return Un}function u0(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function f0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,V,ee){const ne=N.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=V,N.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const ee=N.get(R);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const h0=y.createFramebuffer();this.setRenderTarget=function(R,V=0,ee=0){O=R,D=V,A=ee;let ne=!0,G=null,ve=!1,Ae=!1;if(R){const Le=N.get(R);if(Le.__useDefaultFramebuffer!==void 0)b.bindFramebuffer(y.FRAMEBUFFER,null),ne=!1;else if(Le.__webglFramebuffer===void 0)B.setupRenderTarget(R);else if(Le.__hasExternalTextures)B.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&N.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(R)}}const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Ge=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?G=Ge[V][ee]:G=Ge[V],ve=!0):R.samples>0&&B.useMultisampledRTT(R)===!1?G=N.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[ee]:G=Ge,F.copy(R.viewport),q.copy(R.scissor),j=R.scissorTest}else F.copy(Se).multiplyScalar(W).floor(),q.copy(De).multiplyScalar(W).floor(),j=Ye;if(ee!==0&&(G=h0),b.bindFramebuffer(y.FRAMEBUFFER,G)&&ne&&b.drawBuffers(R,G),b.viewport(F),b.scissor(q),b.setScissorTest(j),ve){const Le=N.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,ee)}else if(Ae){const Le=N.get(R.texture),Ve=V;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Le.__webglTexture,ee,Ve)}else if(R!==null&&ee!==0){const Le=N.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Le.__webglTexture,ee)}w=-1},this.readRenderTargetPixels=function(R,V,ee,ne,G,ve,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){b.bindFramebuffer(y.FRAMEBUFFER,Le);try{const Ve=R.textures[Fe],Ge=Ve.format,ke=Ve.type;if(!J.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ne&&ee>=0&&ee<=R.height-G&&(R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(V,ee,ne,G,ye.convert(Ge),ye.convert(ke),ve))}finally{const Ve=O!==null?N.get(O).__webglFramebuffer:null;b.bindFramebuffer(y.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,V,ee,ne,G,ve,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(V>=0&&V<=R.width-ne&&ee>=0&&ee<=R.height-G){b.bindFramebuffer(y.FRAMEBUFFER,Le);const Ve=R.textures[Fe],Ge=Ve.format,ke=Ve.type;if(!J.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,nt),y.bufferData(y.PIXEL_PACK_BUFFER,ve.byteLength,y.STREAM_READ),R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(V,ee,ne,G,ye.convert(Ge),ye.convert(ke),0);const pt=O!==null?N.get(O).__webglFramebuffer:null;b.bindFramebuffer(y.FRAMEBUFFER,pt);const At=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await mb(y,At,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,nt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ve),y.deleteBuffer(nt),y.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,ee=0){const ne=Math.pow(2,-ee),G=Math.floor(R.image.width*ne),ve=Math.floor(R.image.height*ne),Ae=V!==null?V.x:0,Fe=V!==null?V.y:0;B.setTexture2D(R,0),y.copyTexSubImage2D(y.TEXTURE_2D,ee,0,0,Ae,Fe,G,ve),b.unbindTexture()};const d0=y.createFramebuffer(),p0=y.createFramebuffer();this.copyTextureToTexture=function(R,V,ee=null,ne=null,G=0,ve=null){ve===null&&(G!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Ae,Fe,Le,Ve,Ge,ke,nt,pt,At;const Rt=R.isCompressedTexture?R.mipmaps[ve]:R.image;if(ee!==null)Ae=ee.max.x-ee.min.x,Fe=ee.max.y-ee.min.y,Le=ee.isBox3?ee.max.z-ee.min.z:1,Ve=ee.min.x,Ge=ee.min.y,ke=ee.isBox3?ee.min.z:0;else{const wn=Math.pow(2,-G);Ae=Math.floor(Rt.width*wn),Fe=Math.floor(Rt.height*wn),R.isDataArrayTexture?Le=Rt.depth:R.isData3DTexture?Le=Math.floor(Rt.depth*wn):Le=1,Ve=0,Ge=0,ke=0}ne!==null?(nt=ne.x,pt=ne.y,At=ne.z):(nt=0,pt=0,At=0);const st=ye.convert(V.format),He=ye.convert(V.type);let Gt;V.isData3DTexture?(B.setTexture3D(V,0),Gt=y.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),Gt=y.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),Gt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,V.unpackAlignment);const ct=y.getParameter(y.UNPACK_ROW_LENGTH),Un=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Os=y.getParameter(y.UNPACK_SKIP_PIXELS),gn=y.getParameter(y.UNPACK_SKIP_ROWS),Dr=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Rt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Rt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ke);const wt=R.isDataArrayTexture||R.isData3DTexture,Tn=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const wn=N.get(R),nn=N.get(V),cn=N.get(wn.__renderTarget),_l=N.get(nn.__renderTarget);b.bindFramebuffer(y.READ_FRAMEBUFFER,cn.__webglFramebuffer),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,_l.__webglFramebuffer);for(let ls=0;ls<Le;ls++)wt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(R).__webglTexture,G,ke+ls),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(V).__webglTexture,ve,At+ls)),y.blitFramebuffer(Ve,Ge,Ae,Fe,nt,pt,Ae,Fe,y.DEPTH_BUFFER_BIT,y.NEAREST);b.bindFramebuffer(y.READ_FRAMEBUFFER,null),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||N.has(R)){const wn=N.get(R),nn=N.get(V);b.bindFramebuffer(y.READ_FRAMEBUFFER,d0),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,p0);for(let cn=0;cn<Le;cn++)wt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,wn.__webglTexture,G,ke+cn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,wn.__webglTexture,G),Tn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,nn.__webglTexture,ve,At+cn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,nn.__webglTexture,ve),G!==0?y.blitFramebuffer(Ve,Ge,Ae,Fe,nt,pt,Ae,Fe,y.COLOR_BUFFER_BIT,y.NEAREST):Tn?y.copyTexSubImage3D(Gt,ve,nt,pt,At+cn,Ve,Ge,Ae,Fe):y.copyTexSubImage2D(Gt,ve,nt,pt,Ve,Ge,Ae,Fe);b.bindFramebuffer(y.READ_FRAMEBUFFER,null),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?y.texSubImage3D(Gt,ve,nt,pt,At,Ae,Fe,Le,st,He,Rt.data):V.isCompressedArrayTexture?y.compressedTexSubImage3D(Gt,ve,nt,pt,At,Ae,Fe,Le,st,Rt.data):y.texSubImage3D(Gt,ve,nt,pt,At,Ae,Fe,Le,st,He,Rt):R.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ve,nt,pt,Ae,Fe,st,He,Rt.data):R.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ve,nt,pt,Rt.width,Rt.height,st,Rt.data):y.texSubImage2D(y.TEXTURE_2D,ve,nt,pt,Ae,Fe,st,He,Rt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ct),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Un),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Os),y.pixelStorei(y.UNPACK_SKIP_ROWS,gn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Dr),ve===0&&V.generateMipmaps&&y.generateMipmap(Gt),b.unbindTexture()},this.copyTextureToTexture3D=function(R,V,ee=null,ne=null,G=0){return fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,ee,ne,G)},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&B.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?B.setTextureCube(R,0):R.isData3DTexture?B.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?B.setTexture2DArray(R,0):B.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){D=0,A=0,O=null,b.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}class U_{renderer;constructor(e){this.renderer=new HR({canvas:e,antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=r_,this.renderer.setClearColor(0,0),this.resizeRenderer()}resizeRenderer=()=>{this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setSize(window.innerWidth,window.innerHeight)};boundResizeRenderer=()=>this.resizeRenderer();addResizeListener=()=>{window.addEventListener("resize",this.boundResizeRenderer)};removeResizeListener=()=>{window.removeEventListener("resize",this.boundResizeRenderer)};setAnimation=(e,n,i)=>{const s=()=>{e(),this.renderer.render(n,i)};this.renderer.setAnimationLoop(s)}}class zR{aspect;camera;radius;constructor(e){this.aspect=0,this.radius=e,this.camera=new Bf}updateAspect=()=>{this.aspect=window.innerWidth/window.innerHeight};updateCamera=e=>{this.updateAspect(),this.camera.top=e/this.aspect,this.camera.right=e,this.camera.bottom=-e/this.aspect,this.camera.left=-e,this.camera.near=-100,this.camera.far=1e3,this.camera.updateProjectionMatrix()};boundUpdateCamera=()=>this.updateCamera(this.radius);addResizeListener=()=>{window.addEventListener("resize",this.boundUpdateCamera)};removeResizeListener=()=>{window.removeEventListener("resize",this.boundUpdateCamera)};setCamera=(e,n,i)=>{this.camera.position.set(e,n,i),this.camera.lookAt(0,0,0),this.updateCamera(this.radius)};get getCamera(){return this.camera}}const VR="/my-site/assets/texture-Bhl9W45K.webp";let GR=class{scene;theme;constructor(e){this.scene=new M_,this.theme=e||"light"}playerTexture=new Qb().load(VR);playerMaterial=new jb({color:16777215,map:this.playerTexture});wallMaterial_1=new T_({color:15658734});wallMaterial_2=new Df({transparent:!0});floorMaterial=this.wallMaterial_1;playerGeometry=new Nf(1,32,32);wallGeometry=new Mr(20,20);floorGeometry=new Mr(20,100);playerMesh=new Xt(this.playerGeometry,this.playerMaterial);player=new Ft().attach(this.playerMesh);wall_1=new Xt(this.wallGeometry,this.wallMaterial_1);wall_2=new Xt(this.wallGeometry,this.wallMaterial_2);wall_3=new Xt(this.wallGeometry,this.wallMaterial_2);wall_4=new Xt(this.wallGeometry,this.wallMaterial_2);floor=new Xt(this.floorGeometry,this.floorMaterial);ambientLight=new A_(13421772);spotlightPrimary=new sp(16777215);spotlightSecondary=new sp(14540253);spotlightPrimaryPosLight=new X(50,50,50);spotlightPrimaryPosDark=new X(-50,50,50);setTextures=()=>{this.playerTexture.wrapS=go,this.playerTexture.wrapT=go,this.playerTexture.repeat.set(3,3)};setPositions=()=>{this.player.position.set(3,0,-2),this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_3.position.set(5,0,0),this.wall_4.position.set(0,0,10),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.theme==="light"?this.spotlightPrimary.position.set(50,50,50):this.spotlightPrimary.position.set(-50,50,50),this.spotlightSecondary.position.set(-50,50,50)};setLightings=()=>{this.playerMesh.castShadow=!0,this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.castShadow=!0,this.spotlightPrimary.shadow.intensity=.8,this.spotlightPrimary.shadow.mapSize.width=512,this.spotlightPrimary.shadow.mapSize.height=512,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.castShadow=!0,this.spotlightSecondary.shadow.intensity=.8,this.spotlightSecondary.shadow.mapSize.width=512,this.spotlightSecondary.shadow.mapSize.height=512,this.theme==="light"?(this.ambientLight.intensity=1,this.spotlightPrimary.angle=.1,this.spotlightSecondary.power=0):(this.ambientLight.intensity=0,this.spotlightPrimary.angle=.03,this.spotlightSecondary.power=5e3)};createScene=()=>{this.setTextures(),this.setPositions(),this.setLightings(),this.scene.add(this.player,this.floor,this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.ambientLight,this.spotlightPrimary,this.spotlightSecondary)};get getScene(){return this.scene}get getPlayerObject(){return this.player}changeTheme=e=>{this.theme!==e&&(this.theme=e),this.theme==="light"?(this.ambientLight.intensity<1&&(this.ambientLight.intensity+=.05),this.spotlightPrimary.angle<.1&&(this.spotlightPrimary.angle+=.005),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosLight,.1),this.spotlightSecondary.power=0):(this.ambientLight.intensity>0&&(this.ambientLight.intensity-=.05),this.spotlightPrimary.angle>.03&&(this.spotlightPrimary.angle-=.005),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosDark,.1),this.spotlightSecondary.power=5e3)}};class N_{raycaster;cameraRaycaster;collidables;camera;screenPos;worldPoint;axis;angle;p1;p2;dir;constructor(e,n){this.raycaster=new lp,this.cameraRaycaster=new lp,this.collidables=e,this.camera=n,this.screenPos=new Xe(0,0),this.worldPoint=new X(0,0,0),this.axis=new X(0,1,0),this.angle=Math.PI/2,this.p1=new X(0,0,0),this.p2=new X(0,0,0),this.dir=new X(0,0,0)}raycast=(e,n,i)=>{let s;return this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,s=this.raycaster.intersectObjects(this.collidables),s};lineCast=(e,n,i=1,s=1,r=1)=>{let o;return o=this.raycast(e,n,i),this.p1.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,this.angle).normalize().multiplyScalar(s)),this.p2.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,-this.angle).normalize().multiplyScalar(r)),this.raycast(this.p1,n,i).forEach(a=>{o.indexOf(a)===-1&&o.push(a)}),this.raycast(this.p2,n,i).forEach(a=>{o.indexOf(a)===-1&&o.push(a)}),o};screenPointToWorld=(e,n)=>{if(!this.camera)return;let i=e/window.innerWidth*2-1,s=n/window.innerHeight*2-1;this.screenPos.set(i,s),this.cameraRaycaster.setFromCamera(this.screenPos,this.camera),this.cameraRaycaster.far=100;const r=this.cameraRaycaster.intersectObjects(this.collidables)[0];if(r)return this.worldPoint.set(r.point.x,r.point.y,-r.point.z),this.worldPoint}}class O_{isMouse;mousePos;moveDir;moveUp;moveDown;moveLeft;moveRight;constructor(){this.isMouse=!1,this.mousePos=new Xe(0,0),this.moveDir=new Xe(0,0),this.moveUp=!1,this.moveDown=!1,this.moveLeft=!1,this.moveRight=!1}isKeyboard=()=>!!(this.moveUp||this.moveRight||this.moveDown||this.moveLeft);handleMovementVector=()=>{this.moveUp?(this.moveDir.y=-1,this.moveDown&&(this.moveDir.y=0)):this.moveDown?(this.moveDir.y=1,this.moveUp&&(this.moveDir.y=0)):this.moveDir.y=0,this.moveLeft?(this.moveDir.x=-1,this.moveRight&&(this.moveDir.x=0)):this.moveRight?(this.moveDir.x=1,this.moveLeft&&(this.moveDir.x=0)):this.moveDir.x=0};handleKeyDown=e=>{if(!this.isMouse){switch(e.key){case"ArrowUp":this.moveUp=!0;break;case"ArrowDown":this.moveDown=!0;break;case"ArrowLeft":this.moveLeft=!0;break;case"ArrowRight":this.moveRight=!0;break}this.handleMovementVector()}};handleKeyUp=e=>{if(!this.isMouse){switch(e.key){case"ArrowUp":this.moveUp=!1;break;case"ArrowDown":this.moveDown=!1;break;case"ArrowLeft":this.moveLeft=!1;break;case"ArrowRight":this.moveRight=!1;break}this.handleMovementVector()}};handleMouseDown=e=>{this.isKeyboard()||(this.isMouse=!0,this.mousePos.set(e.clientX,e.clientY))};handleMouseMove=e=>{this.mousePos.set(e.clientX,e.clientY)};handleMouseUp=()=>{this.isKeyboard()||(this.isMouse=!1,this.mousePos.set(0,0))};boundHandleKeyDown=e=>this.handleKeyDown(e);boundHandleKeyUp=e=>this.handleKeyUp(e);boundHandleMouseDown=e=>this.handleMouseDown(e);boundHandleMouseMove=e=>this.handleMouseMove(e);boundHandleMouseUp=()=>this.handleMouseUp();addInputListener=()=>{window.addEventListener("keydown",this.boundHandleKeyDown),window.addEventListener("keyup",this.boundHandleKeyUp),window.addEventListener("mousedown",this.boundHandleMouseDown),window.addEventListener("mousemove",this.boundHandleMouseMove),window.addEventListener("mouseup",this.boundHandleMouseUp)};removeInputListener=()=>{window.removeEventListener("keydown",this.boundHandleKeyDown),window.removeEventListener("keyup",this.boundHandleKeyUp),window.removeEventListener("mousedown",this.boundHandleMouseDown),window.removeEventListener("mousemove",this.boundHandleMouseMove),window.removeEventListener("mouseup",this.boundHandleMouseUp)};get getIsMouse(){return this.isMouse}get getIsKeyboard(){return this.isKeyboard()}get getMousePos(){return this.mousePos}get getMovementVectorNormalized(){return this.moveDir.normalize()}}class WR{player;force;drag;velocity;velocityX;velocityZ;displacement;moveVec;clock;gameInput;physics;constructor(e,n,i){this.player=e,this.force=new X(0,0,0),this.drag=new X(0,0,0),this.velocity=new X(0,0,0),this.velocityX=new X(0,0,0),this.velocityZ=new X(0,0,0),this.displacement=new X(0,0,0),this.moveVec=new Xe(0,0),this.clock=new R_,this.gameInput=n,this.physics=i}updateForce=e=>{if(this.gameInput.getIsKeyboard)this.moveVec=this.gameInput.getMovementVectorNormalized;else if(this.gameInput.getIsMouse){const n=this.gameInput.getMousePos,s=this.physics.screenPointToWorld(n.x,n.y)?.sub(this.player.position).normalize();s&&this.moveVec.set(s.x,s.z)}else this.moveVec.set(0,0);this.force.set(this.moveVec.x,0,this.moveVec.y).multiplyScalar(e),this.force.z*=2};updateDrag=e=>{this.drag.copy(this.velocity).multiplyScalar(e)};updateVelocity=e=>{let n=this.force.sub(this.drag).multiplyScalar(e);this.velocity.length()<.5&&this.force.length()===0&&(this.velocity.set(0,0,0),n.set(0,0,0)),this.velocity.add(n)};applyMovement=()=>{let e=this.clock.getDelta();this.updateForce(30),this.updateDrag(3),this.updateVelocity(e);let n=this.physics.lineCast(this.player.position,this.velocity,1).length===0&&this.physics.lineCast(this.player.position,this.force,1).length===0;n||(this.velocityX.setX(this.velocity.x),this.velocityZ.setZ(this.velocity.z),n=this.physics.lineCast(this.player.position,this.velocityX,1).length===0,n?(n=this.physics.lineCast(this.player.position,this.velocityZ,1).length===0,n?this.velocity.set(this.velocityX.x,0,this.velocityZ.z):this.velocity.set(this.velocityX.x,0,-this.velocityZ.z)):(n=this.physics.lineCast(this.player.position,this.velocityZ,1).length===0,n?this.velocity.set(-this.velocityX.x,0,this.velocityZ.z):this.velocity.multiplyScalar(0))),this.displacement.copy(this.velocity).multiplyScalar(e),this.player.position.add(this.displacement)};get getForce(){return[this.force.x,this.force.y,this.force.z]}get getDrag(){return[this.drag.x,this.drag.y,this.drag.z]}get getVelocity(){return[this.velocity.x,this.velocity.y,this.velocity.z]}}const XR=$t({name:"homepage-background",setup(t,{expose:e}){const n=Om("canvas"),i=Ao();return Tr(()=>{if(!n.value)return;const s=new U_(n.value),r=new zR(5),o=new GR(i.theme),a=r.getCamera,l=o.getScene,c=o.getPlayerObject;o.createScene(),r.setCamera(0,10,50);const u=l.children.filter(v=>v!==c),f=new N_(u,a),d=new O_,p=new WR(c,d,f);function _(){o.changeTheme(i.theme),p.applyMovement()}s.setAnimation(_,l,a),d.addInputListener(),s.addResizeListener(),r.addResizeListener(),wr(()=>{d.removeInputListener(),s.removeResizeListener(),r.removeResizeListener()})}),e(),{canvas:n}}}),$R={ref:"canvas"};function jR(t,e,n,i,s,r){return mt(),St("canvas",$R,null,512)}const qR=$n(XR,[["render",jR]]),YR=$t({name:"animated-txt",props:{text:{type:String,default:""},duration:{type:Number,default:0},delay:{type:Number,default:0},stagger:{type:Number,default:0}},setup(t,{expose:e}){const n=Nt(()=>{const o=t.text.split("");o[0]=o[0].toUpperCase();for(let a=0;a<t.text.length;a++)(o[a+1]===" "||o[a-1]===" "&&o[a]==="i")&&(o[a]=o[a].toUpperCase());return o}),i=ln([]);Ai(n,()=>{i.value=[],r()});function s(o,a){o instanceof HTMLElement?i.value[a]=o:i.value[a]=null}function r(){setTimeout(()=>{i.value.forEach((o,a)=>{o?.animate([{opacity:0},{opacity:1}],{duration:t.duration,delay:a*t.stagger,fill:"both"})})},t.delay)}return Tr(()=>r()),e(),{chars:n,setCharRef:s}}});function KR(t,e,n,i,s,r){return mt(),St("div",null,[(mt(!0),St(an,null,_v(t.chars,(o,a)=>(mt(),St("span",{class:"o-0",key:a,ref_for:!0,ref:l=>t.setCharRef(l,a)},ti(o),1))),128))])}const dc=$n(YR,[["render",KR]]),ZR={class:"page flex row a-center j-start"},JR={class:"absolute t-0 l-0 w-full h-full"},QR={class:"grid grid-cols-2 a-start w-auto pl-0.10 z-1"},eC=$t({__name:"homepage",setup(t){const{t:e}=rs();return(n,i)=>(mt(),St("div",ZR,[We("div",JR,[it(qR)]),We("div",QR,[it(dc,{class:"col-span-2 hem-1 pb-10 font-size-md",text:Ln(e)("hello"),duration:500,stagger:50},null,8,["text"]),it(dc,{class:"sm:col-span-2 hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"peter",duration:1e3,stagger:100}),it(dc,{class:"hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"chan",duration:1e3,delay:500,stagger:100})])]))}});class tC{aspect;camera;constructor(){this.aspect=0,this.camera=new Sn,this.updateCamera()}updateAspect=()=>{this.aspect=window.innerWidth/window.innerHeight};updateCamera=()=>{this.updateAspect(),this.camera.fov=60,this.camera.aspect=this.aspect,this.camera.near=1,this.camera.far=1e3,this.camera.updateProjectionMatrix()};boundUpdateCamera=()=>this.updateCamera();addResizeListener=()=>{window.addEventListener("resize",this.boundUpdateCamera)};removeResizeListener=()=>{window.removeEventListener("resize",this.boundUpdateCamera)};setCamera=(e,n,i)=>{this.camera.position.set(e,n,i),this.camera.lookAt(0,0,0),this.updateCamera()};get getCamera(){return this.camera}}class nC{scene;clock;theme;constructor(e){this.scene=new M_,this.clock=new R_,this.theme=e||"light"}material=new T_({color:16777215});boxGeometry=new Rr(1,1,2);widthCount=100;heightCount=100;wall=new Wb(this.boxGeometry,this.material,this.widthCount*this.heightCount);dummy=new Ft;ambientLight=new A_(16777215);directionalLight1=new rp(16777215);directionalLight2=new rp(16777215);wallColor1=new Qe(16777215);wallColor2=new Qe(15790320);wallColor3=new Qe(15658734);speeds=[];phases=[];amplitudes=[];setup=()=>{for(let e=0;e<this.widthCount*this.heightCount;e++)this.speeds[e]=Math.random()/2,this.phases[e]=Math.random()*Math.PI*2,this.amplitudes[e]=Math.random()/2+1;this.scene.fog=new If(16777215,-10,50),this.directionalLight1.position.set(10,5,10),this.directionalLight2.position.set(-10,5,10),this.directionalLight1.intensity=2,this.theme==="light"?this.ambientLight.intensity=1:this.ambientLight.intensity=0};createScene=()=>{this.setup(),this.scene.add(this.ambientLight,this.directionalLight1,this.directionalLight2,this.wall)};get getScene(){return this.scene}animate=()=>{const e=this.clock.getElapsedTime();let n=0;const i=this.widthCount/2,s=this.heightCount/2;for(let r=-i;r<i;r++)for(let o=-s;o<s;o++)this.dummy.position.x=r,this.dummy.position.y=o,this.dummy.position.z=Math.sin(e*this.speeds[n]*this.phases[n]*this.amplitudes[n])/2,this.dummy.updateMatrix(),this.wall.setMatrixAt(n,this.dummy.matrix),n%3===0?this.wall.setColorAt(n,this.wallColor1):n%3===1?this.wall.setColorAt(n,this.wallColor2):this.wall.setColorAt(n,this.wallColor3),n++;this.wall.instanceMatrix.needsUpdate=!0};changeTheme=e=>{this.theme!==e&&(this.theme=e),this.theme==="light"?this.ambientLight.intensity<1&&(this.ambientLight.intensity+=.05):this.ambientLight.intensity>0&&(this.ambientLight.intensity-=.05)}}const Op={type:"change"},Hf={type:"start"},F_={type:"end"},ha=new Pf,Fp=new Gi,iC=Math.cos(70*db.DEG2RAD),Bt=new X,fn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pc=1e-6;class sC extends iT{constructor(e,n=null){super(e,n),this.state=vt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cr.ROTATE,MIDDLE:cr.DOLLY,RIGHT:cr.PAN},this.touches={ONE:sr.ROTATE,TWO:sr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Ps,this._lastTargetPosition=new X,this._quat=new Ps().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new up,this._sphericalDelta=new up,this._scale=1,this._panOffset=new X,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new X,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oC.bind(this),this._onPointerDown=rC.bind(this),this._onPointerUp=aC.bind(this),this._onContextMenu=pC.bind(this),this._onMouseWheel=uC.bind(this),this._onKeyDown=fC.bind(this),this._onTouchStart=hC.bind(this),this._onTouchMove=dC.bind(this),this._onMouseDown=lC.bind(this),this._onMouseMove=cC.bind(this),this._interceptControlDown=mC.bind(this),this._interceptControlUp=gC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Op),this.update(),this.state=vt.NONE}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<iC?this.object.lookAt(this.target):(Fp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(Fp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>pc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pc||this._lastTargetPosition.distanceToSquared(this.target)>pc?(this.dispatchEvent(Op),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fn/60*this.autoRotateSpeed*e:fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/n.clientHeight),this._rotateUp(fn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/n.clientHeight),this._rotateUp(fn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Xe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function rC(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function oC(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function aC(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(F_),this.state=vt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function lC(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=vt.DOLLY;break;case cr.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}break;case cr.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Hf)}function cC(t){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function uC(t){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(t.preventDefault(),this.dispatchEvent(Hf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(F_))}function fC(t){this.enabled!==!1&&this._handleKeyDown(t)}function hC(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case sr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=vt.TOUCH_ROTATE;break;case sr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case sr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=vt.TOUCH_DOLLY_PAN;break;case sr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Hf)}function dC(t){switch(this._trackPointer(t),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=vt.NONE}}function pC(t){this.enabled!==!1&&t.preventDefault()}function mC(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gC(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _C={class:"page"},vC={class:"absolute t-0 l-0 w-full h-full"},xC=$t({__name:"projects",setup(t){const{t:e}=rs(),n=Om("canvas"),i=Ao();return Tr(()=>{if(!n.value)return;const s=new U_(n.value),r=new tC,o=new nC(i.theme),a=r.getCamera,l=o.getScene;new sC(a,n.value),o.createScene(),r.setCamera(0,0,-10);const c=l.children;new N_(c,a);const u=new O_;function f(){o.changeTheme(i.theme),o.animate()}s.setAnimation(f,l,a),s.addResizeListener(),r.addResizeListener(),u.addInputListener(),wr(()=>{s.removeResizeListener(),r.removeResizeListener(),u.removeInputListener()})}),(s,r)=>(mt(),St("div",_C,[We("div",vC,[We("canvas",{ref_key:"canvas",ref:n},null,512)])]))}}),SC={},yC={class:"page"};function EC(t,e){return mt(),St("div",yC,[...e[0]||(e[0]=[We("h1",null,"Sorry",-1),We("h2",null,"This page is not yet online",-1)])])}const MC=$n(SC,[["render",EC]]);function B_(t,e){return function(){return t.apply(e,arguments)}}const{toString:bC}=Object.prototype,{getPrototypeOf:zf}=Object,{iterator:ul,toStringTag:k_}=Symbol,fl=(t=>e=>{const n=bC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jn=t=>(t=t.toLowerCase(),e=>fl(e)===t),hl=t=>e=>typeof e===t,{isArray:Pr}=Array,br=hl("undefined");function Lo(t){return t!==null&&!br(t)&&t.constructor!==null&&!br(t.constructor)&&dn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const H_=jn("ArrayBuffer");function TC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&H_(t.buffer),e}const wC=hl("string"),dn=hl("function"),z_=hl("number"),Do=t=>t!==null&&typeof t=="object",AC=t=>t===!0||t===!1,wa=t=>{if(fl(t)!=="object")return!1;const e=zf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(k_ in t)&&!(ul in t)},RC=t=>{if(!Do(t)||Lo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},CC=jn("Date"),PC=jn("File"),LC=jn("Blob"),DC=jn("FileList"),IC=t=>Do(t)&&dn(t.pipe),UC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||dn(t.append)&&((e=fl(t))==="formdata"||e==="object"&&dn(t.toString)&&t.toString()==="[object FormData]"))},NC=jn("URLSearchParams"),[OC,FC,BC,kC]=["ReadableStream","Request","Response","Headers"].map(jn),HC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Io(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Pr(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Lo(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function V_(t,e){if(Lo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const bs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,G_=t=>!br(t)&&t!==bs;function Iu(){const{caseless:t,skipUndefined:e}=G_(this)&&this||{},n={},i=(s,r)=>{const o=t&&V_(n,r)||r;wa(n[o])&&wa(s)?n[o]=Iu(n[o],s):wa(s)?n[o]=Iu({},s):Pr(s)?n[o]=s.slice():(!e||!br(s))&&(n[o]=s)};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Io(arguments[s],i);return n}const zC=(t,e,n,{allOwnKeys:i}={})=>(Io(e,(s,r)=>{n&&dn(s)?t[r]=B_(s,n):t[r]=s},{allOwnKeys:i}),t),VC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),GC=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},WC=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&zf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},XC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},$C=t=>{if(!t)return null;if(Pr(t))return t;let e=t.length;if(!z_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},jC=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&zf(Uint8Array)),qC=(t,e)=>{const i=(t&&t[ul]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},YC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},KC=jn("HTMLFormElement"),ZC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),Bp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),JC=jn("RegExp"),W_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Io(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},QC=t=>{W_(t,(e,n)=>{if(dn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(dn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},eP=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Pr(t)?i(t):i(String(t).split(e)),n},tP=()=>{},nP=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function iP(t){return!!(t&&dn(t.append)&&t[k_]==="FormData"&&t[ul])}const sP=t=>{const e=new Array(10),n=(i,s)=>{if(Do(i)){if(e.indexOf(i)>=0)return;if(Lo(i))return i;if(!("toJSON"in i)){e[s]=i;const r=Pr(i)?[]:{};return Io(i,(o,a)=>{const l=n(o,s+1);!br(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return n(t,0)},rP=jn("AsyncFunction"),oP=t=>t&&(Do(t)||dn(t))&&dn(t.then)&&dn(t.catch),X_=((t,e)=>t?setImmediate:e?((n,i)=>(bs.addEventListener("message",({source:s,data:r})=>{s===bs&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),bs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",dn(bs.postMessage)),aP=typeof queueMicrotask<"u"?queueMicrotask.bind(bs):typeof process<"u"&&process.nextTick||X_,lP=t=>t!=null&&dn(t[ul]),te={isArray:Pr,isArrayBuffer:H_,isBuffer:Lo,isFormData:UC,isArrayBufferView:TC,isString:wC,isNumber:z_,isBoolean:AC,isObject:Do,isPlainObject:wa,isEmptyObject:RC,isReadableStream:OC,isRequest:FC,isResponse:BC,isHeaders:kC,isUndefined:br,isDate:CC,isFile:PC,isBlob:LC,isRegExp:JC,isFunction:dn,isStream:IC,isURLSearchParams:NC,isTypedArray:jC,isFileList:DC,forEach:Io,merge:Iu,extend:zC,trim:HC,stripBOM:VC,inherits:GC,toFlatObject:WC,kindOf:fl,kindOfTest:jn,endsWith:XC,toArray:$C,forEachEntry:qC,matchAll:YC,isHTMLForm:KC,hasOwnProperty:Bp,hasOwnProp:Bp,reduceDescriptors:W_,freezeMethods:QC,toObjectSet:eP,toCamelCase:ZC,noop:tP,toFiniteNumber:nP,findKey:V_,global:bs,isContextDefined:G_,isSpecCompliantForm:iP,toJSONObject:sP,isAsyncFn:rP,isThenable:oP,setImmediate:X_,asap:aP,isIterable:lP};function Ke(t,e,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}te.inherits(Ke,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const $_=Ke.prototype,j_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{j_[t]={value:t}});Object.defineProperties(Ke,j_);Object.defineProperty($_,"isAxiosError",{value:!0});Ke.from=(t,e,n,i,s,r)=>{const o=Object.create($_);te.toFlatObject(t,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const a=t&&t.message?t.message:"Error",l=e==null&&t?t.code:e;return Ke.call(o,a,l,n,i,s),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",r&&Object.assign(o,r),o};const cP=null;function Uu(t){return te.isPlainObject(t)||te.isArray(t)}function q_(t){return te.endsWith(t,"[]")?t.slice(0,-2):t}function kp(t,e,n){return t?t.concat(e).map(function(s,r){return s=q_(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function uP(t){return te.isArray(t)&&!t.some(Uu)}const fP=te.toFlatObject(te,{},null,function(e){return/^is[A-Z]/.test(e)});function dl(t,e,n){if(!te.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=te.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!te.isUndefined(m[v])});const i=n.metaTokens,s=n.visitor||u,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(e);if(!te.isFunction(s))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(te.isDate(_))return _.toISOString();if(te.isBoolean(_))return _.toString();if(!l&&te.isBlob(_))throw new Ke("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(_)||te.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,m){let h=_;if(_&&!m&&typeof _=="object"){if(te.endsWith(v,"{}"))v=i?v:v.slice(0,-2),_=JSON.stringify(_);else if(te.isArray(_)&&uP(_)||(te.isFileList(_)||te.endsWith(v,"[]"))&&(h=te.toArray(_)))return v=q_(v),h.forEach(function(E,x){!(te.isUndefined(E)||E===null)&&e.append(o===!0?kp([v],x,r):o===null?v:v+"[]",c(E))}),!1}return Uu(_)?!0:(e.append(kp(m,v,r),c(_)),!1)}const f=[],d=Object.assign(fP,{defaultVisitor:u,convertValue:c,isVisitable:Uu});function p(_,v){if(!te.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),te.forEach(_,function(h,S){(!(te.isUndefined(h)||h===null)&&s.call(e,h,te.isString(S)?S.trim():S,v,d))===!0&&p(h,v?v.concat(S):[S])}),f.pop()}}if(!te.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Hp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Vf(t,e){this._pairs=[],t&&dl(t,this,e)}const Y_=Vf.prototype;Y_.append=function(e,n){this._pairs.push([e,n])};Y_.toString=function(e){const n=e?function(i){return e.call(this,i,Hp)}:Hp;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function hP(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function K_(t,e,n){if(!e)return t;const i=n&&n.encode||hP;te.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let r;if(s?r=s(e,n):r=te.isURLSearchParams(e)?e.toString():new Vf(e,n).toString(i),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class zp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){te.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Z_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dP=typeof URLSearchParams<"u"?URLSearchParams:Vf,pP=typeof FormData<"u"?FormData:null,mP=typeof Blob<"u"?Blob:null,gP={isBrowser:!0,classes:{URLSearchParams:dP,FormData:pP,Blob:mP},protocols:["http","https","file","blob","url","data"]},Gf=typeof window<"u"&&typeof document<"u",Nu=typeof navigator=="object"&&navigator||void 0,_P=Gf&&(!Nu||["ReactNative","NativeScript","NS"].indexOf(Nu.product)<0),vP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xP=Gf&&window.location.href||"http://localhost",SP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gf,hasStandardBrowserEnv:_P,hasStandardBrowserWebWorkerEnv:vP,navigator:Nu,origin:xP},Symbol.toStringTag,{value:"Module"})),Qt={...SP,...gP};function yP(t,e){return dl(t,new Qt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Qt.isNode&&te.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function EP(t){return te.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function MP(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function J_(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&te.isArray(s)?s.length:o,l?(te.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!te.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&te.isArray(s[o])&&(s[o]=MP(s[o])),!a)}if(te.isFormData(t)&&te.isFunction(t.entries)){const n={};return te.forEachEntry(t,(i,s)=>{e(EP(i),s,n,0)}),n}return null}function bP(t,e,n){if(te.isString(t))try{return(e||JSON.parse)(t),te.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Uo={transitional:Z_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=te.isObject(e);if(r&&te.isHTMLForm(e)&&(e=new FormData(e)),te.isFormData(e))return s?JSON.stringify(J_(e)):e;if(te.isArrayBuffer(e)||te.isBuffer(e)||te.isStream(e)||te.isFile(e)||te.isBlob(e)||te.isReadableStream(e))return e;if(te.isArrayBufferView(e))return e.buffer;if(te.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return yP(e,this.formSerializer).toString();if((a=te.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return dl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(n.setContentType("application/json",!1),bP(e)):e}],transformResponse:[function(e){const n=this.transitional||Uo.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(te.isResponse(e)||te.isReadableStream(e))return e;if(e&&te.isString(e)&&(i&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Ke.from(a,Ke.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qt.classes.FormData,Blob:Qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],t=>{Uo.headers[t]={}});const TP=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),wP=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&TP[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Vp=Symbol("internals");function Wr(t){return t&&String(t).trim().toLowerCase()}function Aa(t){return t===!1||t==null?t:te.isArray(t)?t.map(Aa):String(t)}function AP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const RP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function mc(t,e,n,i,s){if(te.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!te.isString(e)){if(te.isString(i))return e.indexOf(i)!==-1;if(te.isRegExp(i))return i.test(e)}}function CP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function PP(t,e){const n=te.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let pn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=Wr(l);if(!u)throw new Error("header name must be a non-empty string");const f=te.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Aa(a))}const o=(a,l)=>te.forEach(a,(c,u)=>r(c,u,l));if(te.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(te.isString(e)&&(e=e.trim())&&!RP(e))o(wP(e),n);else if(te.isObject(e)&&te.isIterable(e)){let a={},l,c;for(const u of e){if(!te.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?te.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=Wr(e),e){const i=te.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return AP(s);if(te.isFunction(n))return n.call(this,s,i);if(te.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Wr(e),e){const i=te.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||mc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=Wr(o),o){const a=te.findKey(i,o);a&&(!n||mc(i,i[a],a,n))&&(delete i[a],s=!0)}}return te.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||mc(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return te.forEach(this,(s,r)=>{const o=te.findKey(i,r);if(o){n[o]=Aa(s),delete n[r];return}const a=e?CP(r):String(r).trim();a!==r&&delete n[r],n[a]=Aa(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return te.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&te.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Vp]=this[Vp]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Wr(o);i[a]||(PP(s,o),i[a]=!0)}return te.isArray(e)?e.forEach(r):r(e),this}};pn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(pn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});te.freezeMethods(pn);function gc(t,e){const n=this||Uo,i=e||n,s=pn.from(i.headers);let r=i.data;return te.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function Q_(t){return!!(t&&t.__CANCEL__)}function Lr(t,e,n){Ke.call(this,t??"canceled",Ke.ERR_CANCELED,e,n),this.name="CanceledError"}te.inherits(Lr,Ke,{__CANCEL__:!0});function e0(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ke("Request failed with status code "+n.status,[Ke.ERR_BAD_REQUEST,Ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function LP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function DP(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function IP(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Wa=(t,e,n=3)=>{let i=0;const s=DP(50,250);return IP(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-i,c=s(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Gp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Wp=t=>(...e)=>te.asap(()=>t(...e)),UP=Qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Qt.origin),Qt.navigator&&/(msie|trident)/i.test(Qt.navigator.userAgent)):()=>!0,NP=Qt.hasStandardBrowserEnv?{write(t,e,n,i,s,r){const o=[t+"="+encodeURIComponent(e)];te.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),te.isString(i)&&o.push("path="+i),te.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function FP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function t0(t,e,n){let i=!OP(e);return t&&(i||n==!1)?FP(t,e):e}const Xp=t=>t instanceof pn?{...t}:t;function Ds(t,e){e=e||{};const n={};function i(c,u,f,d){return te.isPlainObject(c)&&te.isPlainObject(u)?te.merge.call({caseless:d},c,u):te.isPlainObject(u)?te.merge({},u):te.isArray(u)?u.slice():u}function s(c,u,f,d){if(te.isUndefined(u)){if(!te.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function r(c,u){if(!te.isUndefined(u))return i(void 0,u)}function o(c,u){if(te.isUndefined(u)){if(!te.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>s(Xp(c),Xp(u),f,!0)};return te.forEach(Object.keys({...t,...e}),function(u){const f=l[u]||s,d=f(t[u],e[u],u);te.isUndefined(d)&&f!==a||(n[u]=d)}),n}const n0=t=>{const e=Ds({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:r,headers:o,auth:a}=e;if(e.headers=o=pn.from(o),e.url=K_(t0(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),te.isFormData(n)){if(Qt.hasStandardBrowserEnv||Qt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(te.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&o.set(u,f)})}}if(Qt.hasStandardBrowserEnv&&(i&&te.isFunction(i)&&(i=i(e)),i||i!==!1&&UP(e.url))){const l=s&&r&&NP.read(r);l&&o.set(s,l)}return e},BP=typeof XMLHttpRequest<"u",kP=BP&&function(t){return new Promise(function(n,i){const s=n0(t);let r=s.data;const o=pn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,p,_;function v(){p&&p(),_&&_(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function h(){if(!m)return;const E=pn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};e0(function(A){n(A),v()},function(A){i(A),v()},L),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Ke("Request aborted",Ke.ECONNABORTED,t,m)),m=null)},m.onerror=function(x){const L=x&&x.message?x.message:"Network Error",D=new Ke(L,Ke.ERR_NETWORK,t,m);D.event=x||null,i(D),m=null},m.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||Z_;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),i(new Ke(x,L.clarifyTimeoutError?Ke.ETIMEDOUT:Ke.ECONNABORTED,t,m)),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&te.forEach(o.toJSON(),function(x,L){m.setRequestHeader(L,x)}),te.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,_]=Wa(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Wa(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new Lr(null,t,m):E),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=LP(s.url);if(S&&Qt.protocols.indexOf(S)===-1){i(new Ke("Unsupported protocol "+S+":",Ke.ERR_BAD_REQUEST,t));return}m.send(r||null)})},HP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,s;const r=function(c){if(!s){s=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ke?u:new Lr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new Ke(`timeout ${e} of ms exceeded`,Ke.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>c.addEventListener("abort",r));const{signal:l}=i;return l.unsubscribe=()=>te.asap(a),l}},zP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},VP=async function*(t,e){for await(const n of GP(t))yield*zP(n,e)},GP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},$p=(t,e,n,i)=>{const s=VP(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})},jp=64*1024,{isFunction:da}=te,WP=(({Request:t,Response:e})=>({Request:t,Response:e}))(te.global),{ReadableStream:qp,TextEncoder:Yp}=te.global,Kp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},XP=t=>{t=te.merge.call({skipUndefined:!0},WP,t);const{fetch:e,Request:n,Response:i}=t,s=e?da(e):typeof fetch=="function",r=da(n),o=da(i);if(!s)return!1;const a=s&&da(qp),l=s&&(typeof Yp=="function"?(_=>v=>_.encode(v))(new Yp):async _=>new Uint8Array(await new n(_).arrayBuffer())),c=r&&a&&Kp(()=>{let _=!1;const v=new n(Qt.origin,{body:new qp,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return _&&!v}),u=o&&a&&Kp(()=>te.isReadableStream(new i("").body)),f={stream:u&&(_=>_.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!f[_]&&(f[_]=(v,m)=>{let h=v&&v[_];if(h)return h.call(v);throw new Ke(`Response type '${_}' is not supported`,Ke.ERR_NOT_SUPPORT,m)})});const d=async _=>{if(_==null)return 0;if(te.isBlob(_))return _.size;if(te.isSpecCompliantForm(_))return(await new n(Qt.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(te.isArrayBufferView(_)||te.isArrayBuffer(_))return _.byteLength;if(te.isURLSearchParams(_)&&(_=_+""),te.isString(_))return(await l(_)).byteLength},p=async(_,v)=>{const m=te.toFiniteNumber(_.getContentLength());return m??d(v)};return async _=>{let{url:v,method:m,data:h,signal:S,cancelToken:E,timeout:x,onDownloadProgress:L,onUploadProgress:D,responseType:A,headers:O,withCredentials:w="same-origin",fetchOptions:T}=n0(_),F=e||fetch;A=A?(A+"").toLowerCase():"text";let q=HP([S,E&&E.toAbortSignal()],x),j=null;const oe=q&&q.unsubscribe&&(()=>{q.unsubscribe()});let ae;try{if(D&&c&&m!=="get"&&m!=="head"&&(ae=await p(O,h))!==0){let Se=new n(v,{method:"POST",body:h,duplex:"half"}),De;if(te.isFormData(h)&&(De=Se.headers.get("content-type"))&&O.setContentType(De),Se.body){const[Ye,se]=Gp(ae,Wa(Wp(D)));h=$p(Se.body,jp,Ye,se)}}te.isString(w)||(w=w?"include":"omit");const K=r&&"credentials"in n.prototype,Z={...T,signal:q,method:m.toUpperCase(),headers:O.normalize().toJSON(),body:h,duplex:"half",credentials:K?w:void 0};j=r&&new n(v,Z);let W=await(r?F(j,T):F(v,Z));const me=u&&(A==="stream"||A==="response");if(u&&(L||me&&oe)){const Se={};["status","statusText","headers"].forEach(_e=>{Se[_e]=W[_e]});const De=te.toFiniteNumber(W.headers.get("content-length")),[Ye,se]=L&&Gp(De,Wa(Wp(L),!0))||[];W=new i($p(W.body,jp,Ye,()=>{se&&se(),oe&&oe()}),Se)}A=A||"text";let xe=await f[te.findKey(f,A)||"text"](W,_);return!me&&oe&&oe(),await new Promise((Se,De)=>{e0(Se,De,{data:xe,headers:pn.from(W.headers),status:W.status,statusText:W.statusText,config:_,request:j})})}catch(K){throw oe&&oe(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new Ke("Network Error",Ke.ERR_NETWORK,_,j),{cause:K.cause||K}):Ke.from(K,K&&K.code,_,j)}}},$P=new Map,i0=t=>{let e=t?t.env:{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=$P;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:XP(e)),u=c;return c};i0();const Ou={http:cP,xhr:kP,fetch:{get:i0}};te.forEach(Ou,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Zp=t=>`- ${t}`,jP=t=>te.isFunction(t)||t===null||t===!1,s0={getAdapter:(t,e)=>{t=te.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!jP(i)&&(s=Ou[(a=String(i)).toLowerCase()],s===void 0))throw new Ke(`Unknown adapter '${a}'`);if(s&&(te.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Zp).join(`
`):" "+Zp(o[0]):"as no adapter specified";throw new Ke("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s},adapters:Ou};function _c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Lr(null,t)}function Jp(t){return _c(t),t.headers=pn.from(t.headers),t.data=gc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),s0.getAdapter(t.adapter||Uo.adapter,t)(t).then(function(i){return _c(t),i.data=gc.call(t,t.transformResponse,i),i.headers=pn.from(i.headers),i},function(i){return Q_(i)||(_c(t),i&&i.response&&(i.response.data=gc.call(t,t.transformResponse,i.response),i.response.headers=pn.from(i.response.headers))),Promise.reject(i)})}const r0="1.12.2",pl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{pl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Qp={};pl.transitional=function(e,n,i){function s(r,o){return"[Axios v"+r0+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ke(s(o," has been removed"+(n?" in "+n:"")),Ke.ERR_DEPRECATED);return n&&!Qp[o]&&(Qp[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};pl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function qP(t,e,n){if(typeof t!="object")throw new Ke("options must be an object",Ke.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Ke("option "+r+" must be "+l,Ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ke("Unknown option "+r,Ke.ERR_BAD_OPTION)}}const Ra={assertOptions:qP,validators:pl},Zn=Ra.validators;let Rs=class{constructor(e){this.defaults=e||{},this.interceptors={request:new zp,response:new zp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ds(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Ra.assertOptions(i,{silentJSONParsing:Zn.transitional(Zn.boolean),forcedJSONParsing:Zn.transitional(Zn.boolean),clarifyTimeoutError:Zn.transitional(Zn.boolean)},!1),s!=null&&(te.isFunction(s)?n.paramsSerializer={serialize:s}:Ra.assertOptions(s,{encode:Zn.function,serialize:Zn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ra.assertOptions(n,{baseUrl:Zn.spelling("baseURL"),withXsrfToken:Zn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&te.merge(r.common,r[n.method]);r&&te.forEach(["delete","get","head","post","put","patch","common"],_=>{delete r[_]}),n.headers=pn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const _=[Jp.bind(this),void 0];for(_.unshift(...a),_.push(...c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let p=n;for(;f<d;){const _=a[f++],v=a[f++];try{p=_(p)}catch(m){v.call(this,m);break}}try{u=Jp.call(this,p)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Ds(this.defaults,e);const n=t0(e.baseURL,e.url,e.allowAbsoluteUrls);return K_(n,e.params,e.paramsSerializer)}};te.forEach(["delete","get","head","options"],function(e){Rs.prototype[e]=function(n,i){return this.request(Ds(i||{},{method:e,url:n,data:(i||{}).data}))}});te.forEach(["post","put","patch"],function(e){function n(i){return function(r,o,a){return this.request(Ds(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Rs.prototype[e]=n(),Rs.prototype[e+"Form"]=n(!0)});let YP=class o0{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Lr(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new o0(function(s){e=s}),cancel:e}}};function KP(t){return function(n){return t.apply(null,n)}}function ZP(t){return te.isObject(t)&&t.isAxiosError===!0}const Fu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Fu).forEach(([t,e])=>{Fu[e]=t});function a0(t){const e=new Rs(t),n=B_(Rs.prototype.request,e);return te.extend(n,Rs.prototype,e,{allOwnKeys:!0}),te.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return a0(Ds(t,s))},n}const It=a0(Uo);It.Axios=Rs;It.CanceledError=Lr;It.CancelToken=YP;It.isCancel=Q_;It.VERSION=r0;It.toFormData=dl;It.AxiosError=Ke;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=KP;It.isAxiosError=ZP;It.mergeConfig=Ds;It.AxiosHeaders=pn;It.formToJSON=t=>J_(te.isHTMLForm(t)?new FormData(t):t);It.getAdapter=s0.getAdapter;It.HttpStatusCode=Fu;It.default=It;const{Axios:TL,AxiosError:wL,CanceledError:AL,isCancel:RL,CancelToken:CL,VERSION:PL,all:LL,Cancel:DL,isAxiosError:IL,spread:UL,toFormData:NL,AxiosHeaders:OL,HttpStatusCode:FL,formToJSON:BL,getAdapter:kL,mergeConfig:HL}=It,em=()=>It.create({baseURL:"https://dummyjson.com/auth/",timeout:1e3}),tm={getUserFromLogin(t){return em().post("/login",t,{headers:{"Content-Type":"application/json"}})},getCurrentAuthByToken(t){return em().get("/me",{headers:{Authorization:`Bearer ${t}`}})}},Wf=lf("user",()=>{const t=ln(null),e=ln(null),n=ln(null),i=ln(null);async function s(a,l){try{const c=await tm.getUserFromLogin({username:a,password:l,expiresponseInMins:.1});e.value=c.data.accessToken,Eo.push(Eo.currentRoute.value.query.redirect?.toString()||{name:"authentication"})}catch{n.value="Login failed"}}async function r(){try{if(!e.value)return i.value="You are not login",!1;const a=await tm.getCurrentAuthByToken(e.value);return t.value=a.data,!0}catch(a){return i.value=`Authentication failed ${a.status}`,!1}}function o(){t.value=null,e.value=null}return{user:t,accessToken:e,loginErr:n,authErr:i,handleLogin:s,handleAuth:r,$reset:o}}),JP={class:"page grid grid-cols-2 grid-rows-4 a-center j-items-center w-0.90 pl-0.5 pr-0.5 font-size-16"},QP={class:"col-span-2 mt-12 mb-12 txt-a-center"},eL={key:0,class:"mt-0 mb-0"},tL={key:1,class:"mt-0 mb-0"},nL={class:"mt-8 mb-0"},vc=3e3,iL=$t({__name:"AuthView",setup(t){const e=Wf(),n=ln(""),i=ln("");let s=setTimeout(()=>{}),r=!1;km(async()=>{await e.handleAuth()});const o=async()=>{n.value="Authenticating",r=await e.handleAuth(),console.log(e.authErr),r?(clearTimeout(s),n.value="Authentication success",s=setTimeout(()=>{n.value=""},vc)):(clearTimeout(s),n.value="Authentication failed",i.value=e.authErr,s=setTimeout(()=>{n.value="",i.value=""},vc))},a=()=>{e.user&&(clearTimeout(s),n.value="You are login",s=setTimeout(()=>{n.value=""},vc))};return(l,c)=>{const u=ws("router-link");return mt(),St("div",JP,[We("div",QP,[Ln(e).user?(mt(),St("p",eL,[$r(" Username: "+ti(Ln(e).user.username)+" ",1),c[0]||(c[0]=We("br",null,null,-1)),$r(" Email: "+ti(Ln(e).user.email)+" ",1),c[1]||(c[1]=We("br",null,null,-1))])):(mt(),St("p",tL,"You are not login")),We("p",nL,[$r(ti(n.value)+" ",1),c[2]||(c[2]=We("br",null,null,-1)),$r(" "+ti(i.value),1)])]),it(u,{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",to:{name:"login"},onClick:a},{default:Ua(()=>[...c[3]||(c[3]=[We("span",null,"Login",-1)])]),_:1}),c[6]||(c[6]=We("span",null,"Direct to login page if you are not login",-1)),it(u,{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",to:{name:"auth-content"}},{default:Ua(()=>[...c[4]||(c[4]=[We("span",null,"Can only access after login",-1)])]),_:1}),c[7]||(c[7]=We("span",null,"Direct to content page if you are login else will direct you to login page",-1)),We("button",{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",onClick:o},[...c[5]||(c[5]=[We("span",{class:"font-size-16"},"Authenticate",-1)])]),c[8]||(c[8]=We("span",null,"Check for authentication",-1))])}}}),sL={class:"login page"},rL={key:0},oL=$t({__name:"LoginView",setup(t){const e=ln("emilys"),n=ln("emilyspass"),i=Wf(),s=async()=>{await i.handleLogin(e.value,n.value)};return(r,o)=>(mt(),St("div",sL,[o[6]||(o[6]=We("h1",null,"Login",-1)),We("div",null,[o[2]||(o[2]=We("span",null,"Username: ",-1)),nh(We("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,512),[[Rh,e.value]]),o[3]||(o[3]=We("br",null,null,-1)),o[4]||(o[4]=We("span",null,"Password: ",-1)),nh(We("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,512),[[Rh,n.value]]),o[5]||(o[5]=We("br",null,null,-1)),We("button",{onClick:s},"Login")]),Ln(i).loginErr?(mt(),St("p",rL,ti(Ln(i).loginErr),1)):Mi("",!0)]))}}),aL=$n(oL,[["__scopeId","data-v-10e3505e"]]),lL={class:"auth-content page"},cL=$t({__name:"AuthContentView",setup(t){const e=()=>{Eo.push({name:"authentication"})};return(n,i)=>(mt(),St("div",lL,[i[0]||(i[0]=We("span",null,"You have successfully login",-1)),We("button",{onClick:e},"Back to Authentication Page")]))}}),uL=$n(cL,[["__scopeId","data-v-191902c5"]]),fL={},hL={class:"page"};function dL(t,e){return mt(),St("div",hL,[...e[0]||(e[0]=[We("h1",null,"Sorry",-1),We("h2",null,"This page is not yet online",-1)])])}const pL=$n(fL,[["render",dL]]),mL={},gL={class:"page test"};function _L(t,e){return mt(),St("div",gL," Test ")}const vL=$n(mL,[["render",_L],["__scopeId","data-v-cd553ea4"]]),l0=[{path:"/",name:"home",component:eC},{path:"/works",name:"works",component:xC},{path:"/blogs",name:"blogs",component:pL},{path:"/todos",name:"todos",component:MC},{path:"/authentication",name:"authentication",component:iL},{path:"/login",name:"login",component:aL,meta:{requireGuest:!0}},{path:"/auth-content",name:"auth-content",component:uL,meta:{requireAuth:!0}},{path:"/test",name:"test",component:vL}],Eo=bM({history:QE("/my-site/"),scrollBehavior(){return{top:0}},routes:l0});Eo.beforeEach(async(t,e,n)=>{const i=Wf(),s=sessionStorage.redirect;s?(l0.forEach(r=>{s===r.path&&(sessionStorage.removeItem("redirect"),n(s))}),n()):t.meta.requireAuth?await i.handleAuth()?n():n({name:"login",query:{redirect:t.fullPath}}):t.meta.requireGuest&&await i.handleAuth()?n({name:"authentication"}):n()});const xc={messages:{hello:"hello, i am",home:"home",work:"work",todos:"todos",authentication:"authentication",blogs:"blogs",blog:"blog",test:"test"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},Sc={messages:{hello:"你好, 我是",home:"主頁",work:"項目",todos:"任務清單",authentication:"驗證",blogs:"部落格",blog:"博客",test:"測試"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},xL={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":xc.messages,"zh-TW":Sc.messages},datetimeFormats:{"en-US":xc.dateTimeFormats,"zh-TW":Sc.dateTimeFormats},numberFormats:{"en-US":xc.numberFormats,"zh-TW":Sc.numberFormats}},SL=Jy(xL),yL=nS(),ml=Px(EE);ml.use(Eo);ml.use(SL);ml.use(yL);ml.mount("#app");
