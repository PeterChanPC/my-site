(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const mt={},qr=[],$n=()=>{},zd=()=>!1,Mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qc=t=>t.startsWith("onUpdate:"),qt=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pg=Object.prototype.hasOwnProperty,lt=(t,e)=>Pg.call(t,e),Ge=Array.isArray,jr=t=>yo(t)==="[object Map]",Hd=t=>yo(t)==="[object Set]",Xe=t=>typeof t=="function",Ct=t=>typeof t=="string",Gi=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",Vd=t=>(St(t)||Xe(t))&&Xe(t.then)&&Xe(t.catch),Gd=Object.prototype.toString,yo=t=>Gd.call(t),Lg=t=>yo(t).slice(8,-1),Wd=t=>yo(t)==="[object Object]",tu=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=Jc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Eo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ig=/-\w/g,yn=Eo(t=>t.replace(Ig,e=>e.slice(1).toUpperCase())),Dg=/\B([A-Z])/g,yr=Eo(t=>t.replace(Dg,"-$1").toLowerCase()),bo=Eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Go=Eo(t=>t?`on${bo(t)}`:""),Ii=(t,e)=>!Object.is(t,e),Wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ug=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let af;const To=()=>af||(af=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nu(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ct(i)?Bg(i):nu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(t)||St(t))return t}const Ng=/;(?![^(]*\))/g,Fg=/:([^]+)/,Og=/\/\*[^]*?\*\//g;function Bg(t){const e={};return t.replace(Og,"").split(Ng).forEach(n=>{if(n){const i=n.split(Fg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Fi(t){let e="";if(Ct(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=Fi(t[n]);i&&(e+=i+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zg=Jc(kg);function $d(t){return!!t||t===""}const Yd=t=>!!(t&&t.__v_isRef===!0),ts=t=>Ct(t)?t:t==null?"":Ge(t)||St(t)&&(t.toString===Gd||!Xe(t.toString))?Yd(t)?ts(t.value):JSON.stringify(t,qd,2):String(t),qd=(t,e)=>Yd(e)?qd(t,e.value):jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Xo(i,s)+" =>"]=r,n),{})}:Hd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xo(n))}:Gi(e)?Xo(e):St(e)&&!Ge(e)&&!Wd(e)?String(e):e,Xo=(t,e="")=>{var n;return Gi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class jd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function iu(t){return new jd(t)}function Kd(){return Wt}function Hg(t,e=!1){Wt&&Wt.cleanups.push(t)}let _t;const $o=new WeakSet;class Zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$o.has(this)&&($o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,of(this),ep(this);const e=_t,n=Dn;_t=this,Dn=!0;try{return this.fn()}finally{tp(this),_t=e,Dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)au(e);this.deps=this.depsTail=void 0,of(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hl(this)&&this.run()}get dirty(){return Hl(this)}}let Jd=0,Fs,Os;function Qd(t,e=!1){if(t.flags|=8,e){t.next=Os,Os=t;return}t.next=Fs,Fs=t}function ru(){Jd++}function su(){if(--Jd>0)return;if(Os){let e=Os;for(Os=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tp(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),au(i),Vg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Hl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function np(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ys)||(t.globalVersion=Ys,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Hl(t))))return;t.flags|=2;const e=t.dep,n=_t,i=Dn;_t=t,Dn=!0;try{ep(t);const r=t.fn(t._value);(e.version===0||Ii(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{_t=n,Dn=i,tp(t),t.flags&=-3}}function au(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)au(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dn=!0;const ip=[];function mi(){ip.push(Dn),Dn=!1}function gi(){const t=ip.pop();Dn=t===void 0?!0:t}function of(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_t;_t=void 0;try{e()}finally{_t=n}}}let Ys=0;class Gg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ou{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_t||!Dn||_t===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_t)n=this.activeLink=new Gg(_t,this),_t.deps?(n.prevDep=_t.depsTail,_t.depsTail.nextDep=n,_t.depsTail=n):_t.deps=_t.depsTail=n,rp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=_t.depsTail,n.nextDep=void 0,_t.depsTail.nextDep=n,_t.depsTail=n,_t.deps===n&&(_t.deps=i)}return n}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){ru();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{su()}}}function rp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)rp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const oo=new WeakMap,mr=Symbol(""),Vl=Symbol(""),qs=Symbol("");function Xt(t,e,n){if(Dn&&_t){let i=oo.get(t);i||oo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new ou),r.map=i,r.key=n),r.track()}}function li(t,e,n,i,r,s){const a=oo.get(t);if(!a){Ys++;return}const o=l=>{l&&l.trigger()};if(ru(),e==="clear")a.forEach(o);else{const l=Ge(t),c=l&&tu(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===qs||!Gi(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(qs)),e){case"add":l?c&&o(a.get("length")):(o(a.get(mr)),jr(t)&&o(a.get(Vl)));break;case"delete":l||(o(a.get(mr)),jr(t)&&o(a.get(Vl)));break;case"set":jr(t)&&o(a.get(mr));break}}su()}function Wg(t,e){const n=oo.get(t);return n&&n.get(e)}function wr(t){const e=tt(t);return e===t?e:(Xt(e,"iterate",qs),Mn(t)?e:e.map(kt))}function wo(t){return Xt(t=tt(t),"iterate",qs),t}const Xg={__proto__:null,[Symbol.iterator](){return Yo(this,Symbol.iterator,kt)},concat(...t){return wr(this).concat(...t.map(e=>Ge(e)?wr(e):e))},entries(){return Yo(this,"entries",t=>(t[1]=kt(t[1]),t))},every(t,e){return Jn(this,"every",t,e,void 0,arguments)},filter(t,e){return Jn(this,"filter",t,e,n=>n.map(kt),arguments)},find(t,e){return Jn(this,"find",t,e,kt,arguments)},findIndex(t,e){return Jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jn(this,"findLast",t,e,kt,arguments)},findLastIndex(t,e){return Jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return qo(this,"includes",t)},indexOf(...t){return qo(this,"indexOf",t)},join(t){return wr(this).join(t)},lastIndexOf(...t){return qo(this,"lastIndexOf",t)},map(t,e){return Jn(this,"map",t,e,void 0,arguments)},pop(){return ys(this,"pop")},push(...t){return ys(this,"push",t)},reduce(t,...e){return lf(this,"reduce",t,e)},reduceRight(t,...e){return lf(this,"reduceRight",t,e)},shift(){return ys(this,"shift")},some(t,e){return Jn(this,"some",t,e,void 0,arguments)},splice(...t){return ys(this,"splice",t)},toReversed(){return wr(this).toReversed()},toSorted(t){return wr(this).toSorted(t)},toSpliced(...t){return wr(this).toSpliced(...t)},unshift(...t){return ys(this,"unshift",t)},values(){return Yo(this,"values",kt)}};function Yo(t,e,n){const i=wo(t),r=i[e]();return i!==t&&!Mn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const $g=Array.prototype;function Jn(t,e,n,i,r,s){const a=wo(t),o=a!==t&&!Mn(t),l=a[e];if(l!==$g[e]){const f=l.apply(t,s);return o?kt(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,kt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function lf(t,e,n,i){const r=wo(t);let s=n;return r!==t&&(Mn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,kt(o),l,t)}),r[e](s,...i)}function qo(t,e,n){const i=tt(t);Xt(i,"iterate",qs);const r=i[e](...n);return(r===-1||r===!1)&&uu(n[0])?(n[0]=tt(n[0]),i[e](...n)):r}function ys(t,e,n=[]){mi(),ru();const i=tt(t)[e].apply(t,n);return su(),gi(),i}const Yg=Jc("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gi));function qg(t){Gi(t)||(t=String(t));const e=tt(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class ap{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?r_:up:s?cp:lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ge(e);if(!r){let l;if(a&&(l=Xg[n]))return l;if(n==="hasOwnProperty")return qg}const o=Reflect.get(e,n,Rt(e)?e:i);if((Gi(n)?sp.has(n):Yg(n))||(r||Xt(e,"get",n),s))return o;if(Rt(o)){const l=a&&tu(n)?o:o.value;return r&&St(l)?Wl(l):l}return St(o)?r?Wl(o):fa(o):o}}class op extends ap{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Oi(s);if(!Mn(i)&&!Oi(i)&&(s=tt(s),i=tt(i)),!Ge(e)&&Rt(s)&&!Rt(i))return l||(s.value=i),!0}const a=Ge(e)&&tu(n)?Number(n)<e.length:lt(e,n),o=Reflect.set(e,n,i,Rt(e)?e:r);return e===tt(r)&&(a?Ii(i,s)&&li(e,"set",n,i):li(e,"add",n,i)),o}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&li(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gi(n)||!sp.has(n))&&Xt(e,"has",n),i}ownKeys(e){return Xt(e,"iterate",Ge(e)?"length":mr),Reflect.ownKeys(e)}}class jg extends ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kg=new op,Zg=new jg,Jg=new op(!0);const Gl=t=>t,Ma=t=>Reflect.getPrototypeOf(t);function Qg(t,e,n){return function(...i){const r=this.__v_raw,s=tt(r),a=jr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Gl:e?lo:kt;return!e&&Xt(s,"iterate",l?Vl:mr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ya(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function e_(t,e){const n={get(r){const s=this.__v_raw,a=tt(s),o=tt(r);t||(Ii(r,o)&&Xt(a,"get",r),Xt(a,"get",o));const{has:l}=Ma(a),c=e?Gl:t?lo:kt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Xt(tt(r),"iterate",mr),r.size},has(r){const s=this.__v_raw,a=tt(s),o=tt(r);return t||(Ii(r,o)&&Xt(a,"has",r),Xt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=tt(o),c=e?Gl:t?lo:kt;return!t&&Xt(l,"iterate",mr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return qt(n,t?{add:ya("add"),set:ya("set"),delete:ya("delete"),clear:ya("clear")}:{add(r){!e&&!Mn(r)&&!Oi(r)&&(r=tt(r));const s=tt(this);return Ma(s).has.call(s,r)||(s.add(r),li(s,"add",r,r)),this},set(r,s){!e&&!Mn(s)&&!Oi(s)&&(s=tt(s));const a=tt(this),{has:o,get:l}=Ma(a);let c=o.call(a,r);c||(r=tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ii(s,u)&&li(a,"set",r,s):li(a,"add",r,s),this},delete(r){const s=tt(this),{has:a,get:o}=Ma(s);let l=a.call(s,r);l||(r=tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&li(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,a=r.clear();return s&&li(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Qg(r,t,e)}),n}function lu(t,e){const n=e_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const t_={get:lu(!1,!1)},n_={get:lu(!1,!0)},i_={get:lu(!0,!1)};const lp=new WeakMap,cp=new WeakMap,up=new WeakMap,r_=new WeakMap;function s_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(t){return t.__v_skip||!Object.isExtensible(t)?0:s_(Lg(t))}function fa(t){return Oi(t)?t:cu(t,!1,Kg,t_,lp)}function fp(t){return cu(t,!1,Jg,n_,cp)}function Wl(t){return cu(t,!0,Zg,i_,up)}function cu(t,e,n,i,r){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=a_(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Di(t){return Oi(t)?Di(t.__v_raw):!!(t&&t.__v_isReactive)}function Oi(t){return!!(t&&t.__v_isReadonly)}function Mn(t){return!!(t&&t.__v_isShallow)}function uu(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function fu(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&Xd(t,"__v_skip",!0),t}const kt=t=>St(t)?fa(t):t,lo=t=>St(t)?Wl(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function Er(t){return hp(t,!1)}function hu(t){return hp(t,!0)}function hp(t,e){return Rt(t)?t:new o_(t,e)}class o_{constructor(e,n){this.dep=new ou,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:tt(e),this._value=n?e:kt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Mn(e)||Oi(e);e=i?e:tt(e),Ii(e,n)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function gr(t){return Rt(t)?t.value:t}const l_={get:(t,e,n)=>e==="__v_raw"?t:gr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Rt(r)&&!Rt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function dp(t){return Di(t)?t:new Proxy(t,l_)}function c_(t){const e=Ge(t)?new Array(t.length):{};for(const n in t)e[n]=f_(t,n);return e}class u_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Wg(tt(this._object),this._key)}}function f_(t,e,n){const i=t[e];return Rt(i)?i:new u_(t,e,n)}class h_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ou(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_t!==this)return Qd(this,!0),!0}get value(){const e=this.dep.track();return np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function d_(t,e,n=!1){let i,r;return Xe(t)?i=t:(i=t.get,r=t.set),new h_(i,r,n)}const Ea={},co=new WeakMap;let ar;function p_(t,e=!1,n=ar){if(n){let i=co.get(n);i||co.set(n,i=[]),i.push(t)}}function m_(t,e,n=mt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=v=>r?v:Mn(v)||r===!1||r===0?Ci(v,1):Ci(v);let u,f,d,p,_=!1,x=!1;if(Rt(t)?(f=()=>t.value,_=Mn(t)):Di(t)?(f=()=>c(t),_=!0):Ge(t)?(x=!0,_=t.some(v=>Di(v)||Mn(v)),f=()=>t.map(v=>{if(Rt(v))return v.value;if(Di(v))return c(v);if(Xe(v))return l?l(v,2):v()})):Xe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){mi();try{d()}finally{gi()}}const v=ar;ar=u;try{return l?l(t,3,[p]):t(p)}finally{ar=v}}:f=$n,e&&r){const v=f,L=r===!0?1/0:r;f=()=>Ci(v(),L)}const g=Kd(),h=()=>{u.stop(),g&&g.active&&eu(g.effects,u)};if(s&&e){const v=e;e=(...L)=>{v(...L),h()}}let M=x?new Array(t.length).fill(Ea):Ea;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const L=u.run();if(r||_||(x?L.some((I,R)=>Ii(I,M[R])):Ii(L,M))){d&&d();const I=ar;ar=u;try{const R=[L,M===Ea?void 0:x&&M[0]===Ea?[]:M,p];M=L,l?l(e,3,R):e(...R)}finally{ar=I}}}else u.run()};return o&&o(E),u=new Zd(f),u.scheduler=a?()=>a(E,!1):E,p=v=>p_(v,!1,u),d=u.onStop=()=>{const v=co.get(u);if(v){if(l)l(v,4);else for(const L of v)L();co.delete(u)}},e?i?E(!0):M=u.run():a?a(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ci(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Rt(t))Ci(t.value,e,n);else if(Ge(t))for(let i=0;i<t.length;i++)Ci(t[i],e,n);else if(Hd(t)||jr(t))t.forEach(i=>{Ci(i,e,n)});else if(Wd(t)){for(const i in t)Ci(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ci(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ha(t,e,n,i){try{return i?t(...i):t()}catch(r){Ao(r,e,n)}}function jn(t,e,n,i){if(Xe(t)){const r=ha(t,e,n,i);return r&&Vd(r)&&r.catch(s=>{Ao(s,e,n)}),r}if(Ge(t)){const r=[];for(let s=0;s<t.length;s++)r.push(jn(t[s],e,n,i));return r}}function Ao(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||mt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){mi(),ha(s,null,10,[t,l,c]),gi();return}}g_(t,n,r,i,a)}function g_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Qt=[];let Hn=-1;const Kr=[];let wi=null,Gr=0;const pp=Promise.resolve();let uo=null;function du(t){const e=uo||pp;return t?e.then(this?t.bind(this):t):e}function __(t){let e=Hn+1,n=Qt.length;for(;e<n;){const i=e+n>>>1,r=Qt[i],s=js(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function pu(t){if(!(t.flags&1)){const e=js(t),n=Qt[Qt.length-1];!n||!(t.flags&2)&&e>=js(n)?Qt.push(t):Qt.splice(__(e),0,t),t.flags|=1,mp()}}function mp(){uo||(uo=pp.then(_p))}function v_(t){Ge(t)?Kr.push(...t):wi&&t.id===-1?wi.splice(Gr+1,0,t):t.flags&1||(Kr.push(t),t.flags|=1),mp()}function cf(t,e,n=Hn+1){for(;n<Qt.length;n++){const i=Qt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Qt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function gp(t){if(Kr.length){const e=[...new Set(Kr)].sort((n,i)=>js(n)-js(i));if(Kr.length=0,wi){wi.push(...e);return}for(wi=e,Gr=0;Gr<wi.length;Gr++){const n=wi[Gr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wi=null,Gr=0}}const js=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _p(t){try{for(Hn=0;Hn<Qt.length;Hn++){const e=Qt[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ha(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<Qt.length;Hn++){const e=Qt[Hn];e&&(e.flags&=-2)}Hn=-1,Qt.length=0,gp(),uo=null,(Qt.length||Kr.length)&&_p()}}let Cn=null,vp=null;function fo(t){const e=Cn;return Cn=t,vp=t&&t.type.__scopeId||null,e}function xp(t,e=Cn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&mo(-1);const s=fo(e);let a;try{a=t(...r)}finally{fo(s),i._d&&mo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ji(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(mi(),jn(l,n,8,[t.el,o,t,e]),gi())}}const x_=Symbol("_vte"),S_=t=>t.__isTeleport,M_=Symbol("_leaveCb");function mu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function tn(t,e){return Xe(t)?qt({name:t.name},e,{setup:t}):t}function Sp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mp(t){const e=ki(),n=hu(null);if(e){const r=e.refs===mt?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}const ho=new WeakMap;function Bs(t,e,n,i,r=!1){if(Ge(t)){t.forEach((_,x)=>Bs(_,e&&(Ge(e)?e[x]:e),n,i,r));return}if(ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Bs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?yu(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===mt?o.refs={}:o.refs,f=o.setupState,d=tt(f),p=f===mt?zd:_=>lt(d,_);if(c!=null&&c!==l){if(uf(e),Ct(c))u[c]=null,p(c)&&(f[c]=null);else if(Rt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Xe(l))ha(l,o,12,[a,u]);else{const _=Ct(l),x=Rt(l);if(_||x){const g=()=>{if(t.f){const h=_?p(l)?f[l]:u[l]:l.value;if(r)Ge(h)&&eu(h,s);else if(Ge(h))h.includes(s)||h.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const M=[s];l.value=M,t.k&&(u[t.k]=M)}}else _?(u[l]=a,p(l)&&(f[l]=a)):x&&(l.value=a,t.k&&(u[t.k]=a))};if(a){const h=()=>{g(),ho.delete(t)};h.id=-1,ho.set(t,h),fn(h,n)}else uf(t),g()}}}function uf(t){const e=ho.get(t);e&&(e.flags|=8,ho.delete(t))}To().requestIdleCallback;To().cancelIdleCallback;const ks=t=>!!t.type.__asyncLoader,yp=t=>t.type.__isKeepAlive;function y_(t,e){Ep(t,"a",e)}function E_(t,e){Ep(t,"da",e)}function Ep(t,e,n=$t){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ro(e,i,n),n){let r=n.parent;for(;r&&r.parent;)yp(r.parent.vnode)&&b_(i,e,n,r),r=r.parent}}function b_(t,e,n,i){const r=Ro(e,t,i,!0);ms(()=>{eu(i[e],r)},n)}function Ro(t,e,n=$t,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{mi();const o=pa(n),l=jn(e,n,t,a);return o(),gi(),l});return i?r.unshift(s):r.push(s),s}}const _i=t=>(e,n=$t)=>{(!Zs||t==="sp")&&Ro(t,(...i)=>e(...i),n)},T_=_i("bm"),ps=_i("m"),w_=_i("bu"),A_=_i("u"),R_=_i("bum"),ms=_i("um"),C_=_i("sp"),P_=_i("rtg"),L_=_i("rtc");function I_(t,e=$t){Ro("ec",t,e)}const bp="components";function Zr(t,e){return Tp(bp,t,!0,e)||t}const D_=Symbol.for("v-ndc");function U_(t){return Ct(t)&&Tp(bp,t,!1)||t}function Tp(t,e,n=!0,i=!1){const r=Cn||$t;if(r){const s=r.type;{const o=b0(s,!1);if(o&&(o===e||o===yn(e)||o===bo(yn(e))))return s}const a=ff(r[t]||s[t],e)||ff(r.appContext[t],e);return!a&&i?s:a}}function ff(t,e){return t&&(t[e]||t[yn(e)]||t[bo(yn(e))])}function N_(t,e,n,i){let r;const s=n,a=Ge(t);if(a||Ct(t)){const o=a&&Di(t);let l=!1,c=!1;o&&(l=!Mn(t),c=Oi(t),t=wo(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?lo(kt(t[u])):kt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(St(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Xl=t=>t?Wp(t)?yu(t):Xl(t.parent):null,zs=qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ap(t),$forceUpdate:t=>t.f||(t.f=()=>{pu(t.update)}),$nextTick:t=>t.n||(t.n=du.bind(t.proxy)),$watch:t=>i0.bind(t)}),jo=(t,e)=>t!==mt&&!t.__isScriptSetup&&lt(t,e),F_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(jo(i,e))return a[e]=1,i[e];if(r!==mt&&lt(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&lt(c,e))return a[e]=3,s[e];if(n!==mt&&lt(n,e))return a[e]=4,n[e];$l&&(a[e]=0)}}const u=zs[e];let f,d;if(u)return e==="$attrs"&&Xt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==mt&&lt(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,lt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return jo(r,e)?(r[e]=n,!0):i!==mt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:a}},o){let l,c;return!!(n[o]||t!==mt&&o[0]!=="$"&&lt(t,o)||jo(e,o)||(l=s[0])&&lt(l,o)||lt(i,o)||lt(zs,o)||lt(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hf(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let $l=!0;function O_(t){const e=Ap(t),n=t.proxy,i=t.ctx;$l=!1,e.beforeCreate&&df(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:x,deactivated:g,beforeDestroy:h,beforeUnmount:M,destroyed:E,unmounted:v,render:L,renderTracked:I,renderTriggered:R,errorCaptured:F,serverPrefetch:w,expose:T,inheritAttrs:O,components:j,directives:Y,filters:se}=e;if(c&&B_(c,i,null),a)for(const J in a){const X=a[J];Xe(X)&&(i[J]=X.bind(n))}if(r){const J=r.call(n,n);St(J)&&(t.data=fa(J))}if($l=!0,s)for(const J in s){const X=s[J],pe=Xe(X)?X.bind(n,n):Xe(X.get)?X.get.bind(n,n):$n,ve=!Xe(X)&&Xe(X.set)?X.set.bind(n):$n,we=At({get:pe,set:ve});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>we.value,set:Fe=>we.value=Fe})}if(o)for(const J in o)wp(o[J],i,n,J);if(l){const J=Xe(l)?l.call(n):l;Reflect.ownKeys(J).forEach(X=>{Ka(X,J[X])})}u&&df(u,t,"c");function te(J,X){Ge(X)?X.forEach(pe=>J(pe.bind(n))):X&&J(X.bind(n))}if(te(T_,f),te(ps,d),te(w_,p),te(A_,_),te(y_,x),te(E_,g),te(I_,F),te(L_,I),te(P_,R),te(R_,M),te(ms,v),te(C_,w),Ge(T))if(T.length){const J=t.exposed||(t.exposed={});T.forEach(X=>{Object.defineProperty(J,X,{get:()=>n[X],set:pe=>n[X]=pe,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===$n&&(t.render=L),O!=null&&(t.inheritAttrs=O),j&&(t.components=j),Y&&(t.directives=Y),w&&Sp(t)}function B_(t,e,n=$n){Ge(t)&&(t=Yl(t));for(const i in t){const r=t[i];let s;St(r)?"default"in r?s=Un(r.from||i,r.default,!0):s=Un(r.from||i):s=Un(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function df(t,e,n){jn(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function wp(t,e,n,i){let r=i.includes(".")?kp(n,i):()=>n[i];if(Ct(t)){const s=e[t];Xe(s)&&di(r,s)}else if(Xe(t))di(r,t.bind(n));else if(St(t))if(Ge(t))t.forEach(s=>wp(s,e,n,i));else{const s=Xe(t.handler)?t.handler.bind(n):e[t.handler];Xe(s)&&di(r,s,t)}}function Ap(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>po(l,c,a,!0)),po(l,e,a)),St(e)&&s.set(e,l),l}function po(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&po(t,s,n,!0),r&&r.forEach(a=>po(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=k_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const k_={data:pf,props:mf,emits:mf,methods:Ds,computed:Ds,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:Ds,directives:Ds,watch:H_,provide:pf,inject:z_};function pf(t,e){return e?t?function(){return qt(Xe(t)?t.call(this,this):t,Xe(e)?e.call(this,this):e)}:e:t}function z_(t,e){return Ds(Yl(t),Yl(e))}function Yl(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ds(t,e){return t?qt(Object.create(null),t,e):e}function mf(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:qt(Object.create(null),hf(t),hf(e??{})):e}function H_(t,e){if(!t)return e;if(!e)return t;const n=qt(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function Rp(){return{app:null,config:{isNativeTag:zd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V_=0;function G_(t,e){return function(i,r=null){Xe(i)||(i=qt({},i)),r!=null&&!St(r)&&(r=null);const s=Rp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:V_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:w0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Xe(u.install)?(a.add(u),u.install(c,...f)):Xe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||ct(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,yu(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(jn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=_r;_r=c;try{return u()}finally{_r=f}}};return c}}let _r=null;function Ka(t,e){if($t){let n=$t.provides;const i=$t.parent&&$t.parent.provides;i===n&&(n=$t.provides=Object.create(i)),n[t]=e}}function Un(t,e,n=!1){const i=ki();if(i||_r){let r=_r?_r._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Xe(e)?e.call(i&&i.proxy):e}}function W_(){return!!(ki()||_r)}const Cp={},Pp=()=>Object.create(Cp),Lp=t=>Object.getPrototypeOf(t)===Cp;function X_(t,e,n,i=!1){const r={},s=Pp();t.propsDefaults=Object.create(null),Ip(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:fp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function $_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=tt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Co(t.emitsOptions,d))continue;const p=e[d];if(l)if(lt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=yn(d);r[_]=ql(l,o,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{Ip(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!lt(e,f)&&((u=yr(f))===f||!lt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=ql(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&li(t.attrs,"set","")}function Ip(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ns(l))continue;const c=e[l];let u;r&&lt(r,u=yn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Co(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(n),c=o||mt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=ql(r,l,f,c[f],t,!lt(c,f))}}return a}function ql(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=lt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=pa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===yr(n))&&(i=!0))}return i}const Y_=new WeakMap;function Dp(t,e,n=!1){const i=n?Y_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Xe(t)){const u=f=>{l=!0;const[d,p]=Dp(f,e,!0);qt(a,d),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return St(t)&&i.set(t,qr),qr;if(Ge(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);gf(f)&&(a[f]=mt)}else if(s)for(const u in s){const f=yn(u);if(gf(f)){const d=s[u],p=a[f]=Ge(d)||Xe(d)?{type:d}:qt({},d),_=p.type;let x=!1,g=!0;if(Ge(_))for(let h=0;h<_.length;++h){const M=_[h],E=Xe(M)&&M.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(g=!1)}else x=Xe(_)&&_.name==="Boolean";p[0]=x,p[1]=g,(x||lt(p,"default"))&&o.push(f)}}const c=[a,o];return St(t)&&i.set(t,c),c}function gf(t){return t[0]!=="$"&&!Ns(t)}const gu=t=>t==="_"||t==="_ctx"||t==="$stable",_u=t=>Ge(t)?t.map(Vn):[Vn(t)],q_=(t,e,n)=>{if(e._n)return e;const i=xp((...r)=>_u(e(...r)),n);return i._c=!1,i},Up=(t,e,n)=>{const i=t._ctx;for(const r in t){if(gu(r))continue;const s=t[r];if(Xe(s))e[r]=q_(r,s,i);else if(s!=null){const a=_u(s);e[r]=()=>a}}},Np=(t,e)=>{const n=_u(e);t.slots.default=()=>n},Fp=(t,e,n)=>{for(const i in e)(n||!gu(i))&&(t[i]=e[i])},j_=(t,e,n)=>{const i=t.slots=Pp();if(t.vnode.shapeFlag&32){const r=e._;r?(Fp(i,e,n),n&&Xd(i,"_",r,!0)):Up(e,i)}else e&&Np(t,e)},K_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=mt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:Fp(r,e,n):(s=!e.$stable,Up(e,r)),a=e}else e&&(Np(t,e),a={default:1});if(s)for(const o in r)!gu(o)&&a[o]==null&&delete r[o]},fn=f0;function Z_(t){return J_(t)}function J_(t,e){const n=To();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=$n,insertStaticContent:_}=t,x=(D,U,S,ne=null,Z=null,K=null,b=void 0,C=null,N=!!U.dynamicChildren)=>{if(D===U)return;D&&!Es(D,U)&&(ne=z(D),Fe(D,Z,K,!0),D=null),U.patchFlag===-2&&(N=!1,U.dynamicChildren=null);const{type:B,ref:he,shapeFlag:y}=U;switch(B){case da:g(D,U,S,ne);break;case Bi:h(D,U,S,ne);break;case Zo:D==null&&M(U,S,ne,b);break;case en:j(D,U,S,ne,Z,K,b,C,N);break;default:y&1?L(D,U,S,ne,Z,K,b,C,N):y&6?Y(D,U,S,ne,Z,K,b,C,N):(y&64||y&128)&&B.process(D,U,S,ne,Z,K,b,C,N,oe)}he!=null&&Z?Bs(he,D&&D.ref,K,U||D,!U):he==null&&D&&D.ref!=null&&Bs(D.ref,null,K,D,!0)},g=(D,U,S,ne)=>{if(D==null)i(U.el=o(U.children),S,ne);else{const Z=U.el=D.el;U.children!==D.children&&c(Z,U.children)}},h=(D,U,S,ne)=>{D==null?i(U.el=l(U.children||""),S,ne):U.el=D.el},M=(D,U,S,ne)=>{[D.el,D.anchor]=_(D.children,U,S,ne,D.el,D.anchor)},E=({el:D,anchor:U},S,ne)=>{let Z;for(;D&&D!==U;)Z=d(D),i(D,S,ne),D=Z;i(U,S,ne)},v=({el:D,anchor:U})=>{let S;for(;D&&D!==U;)S=d(D),r(D),D=S;r(U)},L=(D,U,S,ne,Z,K,b,C,N)=>{U.type==="svg"?b="svg":U.type==="math"&&(b="mathml"),D==null?I(U,S,ne,Z,K,b,C,N):w(D,U,Z,K,b,C,N)},I=(D,U,S,ne,Z,K,b,C)=>{let N,B;const{props:he,shapeFlag:y,transition:m,dirs:P}=D;if(N=D.el=a(D.type,K,he&&he.is,he),y&8?u(N,D.children):y&16&&F(D.children,N,null,ne,Z,Ko(D,K),b,C),P&&Ji(D,null,ne,"created"),R(N,D,D.scopeId,b,ne),he){for(const q in he)q!=="value"&&!Ns(q)&&s(N,q,null,he[q],K,ne);"value"in he&&s(N,"value",null,he.value,K),(B=he.onVnodeBeforeMount)&&Bn(B,ne,D)}P&&Ji(D,null,ne,"beforeMount");const H=Q_(Z,m);H&&m.beforeEnter(N),i(N,U,S),((B=he&&he.onVnodeMounted)||H||P)&&fn(()=>{B&&Bn(B,ne,D),H&&m.enter(N),P&&Ji(D,null,ne,"mounted")},Z)},R=(D,U,S,ne,Z)=>{if(S&&p(D,S),ne)for(let K=0;K<ne.length;K++)p(D,ne[K]);if(Z){let K=Z.subTree;if(U===K||Hp(K.type)&&(K.ssContent===U||K.ssFallback===U)){const b=Z.vnode;R(D,b,b.scopeId,b.slotScopeIds,Z.parent)}}},F=(D,U,S,ne,Z,K,b,C,N=0)=>{for(let B=N;B<D.length;B++){const he=D[B]=C?Ai(D[B]):Vn(D[B]);x(null,he,U,S,ne,Z,K,b,C)}},w=(D,U,S,ne,Z,K,b)=>{const C=U.el=D.el;let{patchFlag:N,dynamicChildren:B,dirs:he}=U;N|=D.patchFlag&16;const y=D.props||mt,m=U.props||mt;let P;if(S&&Qi(S,!1),(P=m.onVnodeBeforeUpdate)&&Bn(P,S,U,D),he&&Ji(U,D,S,"beforeUpdate"),S&&Qi(S,!0),(y.innerHTML&&m.innerHTML==null||y.textContent&&m.textContent==null)&&u(C,""),B?T(D.dynamicChildren,B,C,S,ne,Ko(U,Z),K):b||X(D,U,C,null,S,ne,Ko(U,Z),K,!1),N>0){if(N&16)O(C,y,m,S,Z);else if(N&2&&y.class!==m.class&&s(C,"class",null,m.class,Z),N&4&&s(C,"style",y.style,m.style,Z),N&8){const H=U.dynamicProps;for(let q=0;q<H.length;q++){const $=H[q],Se=y[$],fe=m[$];(fe!==Se||$==="value")&&s(C,$,Se,fe,Z,S)}}N&1&&D.children!==U.children&&u(C,U.children)}else!b&&B==null&&O(C,y,m,S,Z);((P=m.onVnodeUpdated)||he)&&fn(()=>{P&&Bn(P,S,U,D),he&&Ji(U,D,S,"updated")},ne)},T=(D,U,S,ne,Z,K,b)=>{for(let C=0;C<U.length;C++){const N=D[C],B=U[C],he=N.el&&(N.type===en||!Es(N,B)||N.shapeFlag&198)?f(N.el):S;x(N,B,he,null,ne,Z,K,b,!0)}},O=(D,U,S,ne,Z)=>{if(U!==S){if(U!==mt)for(const K in U)!Ns(K)&&!(K in S)&&s(D,K,U[K],null,Z,ne);for(const K in S){if(Ns(K))continue;const b=S[K],C=U[K];b!==C&&K!=="value"&&s(D,K,C,b,Z,ne)}"value"in S&&s(D,"value",U.value,S.value,Z)}},j=(D,U,S,ne,Z,K,b,C,N)=>{const B=U.el=D?D.el:o(""),he=U.anchor=D?D.anchor:o("");let{patchFlag:y,dynamicChildren:m,slotScopeIds:P}=U;P&&(C=C?C.concat(P):P),D==null?(i(B,S,ne),i(he,S,ne),F(U.children||[],S,he,Z,K,b,C,N)):y>0&&y&64&&m&&D.dynamicChildren?(T(D.dynamicChildren,m,S,Z,K,b,C),(U.key!=null||Z&&U===Z.subTree)&&Op(D,U,!0)):X(D,U,S,he,Z,K,b,C,N)},Y=(D,U,S,ne,Z,K,b,C,N)=>{U.slotScopeIds=C,D==null?U.shapeFlag&512?Z.ctx.activate(U,S,ne,b,N):se(U,S,ne,Z,K,b,N):ae(D,U,N)},se=(D,U,S,ne,Z,K,b)=>{const C=D.component=x0(D,ne,Z);if(yp(D)&&(C.ctx.renderer=oe),S0(C,!1,b),C.asyncDep){if(Z&&Z.registerDep(C,te,b),!D.el){const N=C.subTree=ct(Bi);h(null,N,U,S),D.placeholder=N.el}}else te(C,D,U,S,Z,K,b)},ae=(D,U,S)=>{const ne=U.component=D.component;if(c0(D,U,S))if(ne.asyncDep&&!ne.asyncResolved){J(ne,U,S);return}else ne.next=U,ne.update();else U.el=D.el,ne.vnode=U},te=(D,U,S,ne,Z,K,b)=>{const C=()=>{if(D.isMounted){let{next:y,bu:m,u:P,parent:H,vnode:q}=D;{const Ae=Bp(D);if(Ae){y&&(y.el=q.el,J(D,y,b)),Ae.asyncDep.then(()=>{D.isUnmounted||C()});return}}let $=y,Se;Qi(D,!1),y?(y.el=q.el,J(D,y,b)):y=q,m&&Wo(m),(Se=y.props&&y.props.onVnodeBeforeUpdate)&&Bn(Se,H,y,q),Qi(D,!0);const fe=vf(D),Ee=D.subTree;D.subTree=fe,x(Ee,fe,f(Ee.el),z(Ee),D,Z,K),y.el=fe.el,$===null&&u0(D,fe.el),P&&fn(P,Z),(Se=y.props&&y.props.onVnodeUpdated)&&fn(()=>Bn(Se,H,y,q),Z)}else{let y;const{el:m,props:P}=U,{bm:H,m:q,parent:$,root:Se,type:fe}=D,Ee=ks(U);Qi(D,!1),H&&Wo(H),!Ee&&(y=P&&P.onVnodeBeforeMount)&&Bn(y,$,U),Qi(D,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(fe);const Ae=D.subTree=vf(D);x(null,Ae,S,ne,D,Z,K),U.el=Ae.el}if(q&&fn(q,Z),!Ee&&(y=P&&P.onVnodeMounted)){const Ae=U;fn(()=>Bn(y,$,Ae),Z)}(U.shapeFlag&256||$&&ks($.vnode)&&$.vnode.shapeFlag&256)&&D.a&&fn(D.a,Z),D.isMounted=!0,U=S=ne=null}};D.scope.on();const N=D.effect=new Zd(C);D.scope.off();const B=D.update=N.run.bind(N),he=D.job=N.runIfDirty.bind(N);he.i=D,he.id=D.uid,N.scheduler=()=>pu(he),Qi(D,!0),B()},J=(D,U,S)=>{U.component=D;const ne=D.vnode.props;D.vnode=U,D.next=null,$_(D,U.props,ne,S),K_(D,U.children,S),mi(),cf(D),gi()},X=(D,U,S,ne,Z,K,b,C,N=!1)=>{const B=D&&D.children,he=D?D.shapeFlag:0,y=U.children,{patchFlag:m,shapeFlag:P}=U;if(m>0){if(m&128){ve(B,y,S,ne,Z,K,b,C,N);return}else if(m&256){pe(B,y,S,ne,Z,K,b,C,N);return}}P&8?(he&16&&ye(B,Z,K),y!==B&&u(S,y)):he&16?P&16?ve(B,y,S,ne,Z,K,b,C,N):ye(B,Z,K,!0):(he&8&&u(S,""),P&16&&F(y,S,ne,Z,K,b,C,N))},pe=(D,U,S,ne,Z,K,b,C,N)=>{D=D||qr,U=U||qr;const B=D.length,he=U.length,y=Math.min(B,he);let m;for(m=0;m<y;m++){const P=U[m]=N?Ai(U[m]):Vn(U[m]);x(D[m],P,S,null,Z,K,b,C,N)}B>he?ye(D,Z,K,!0,!1,y):F(U,S,ne,Z,K,b,C,N,y)},ve=(D,U,S,ne,Z,K,b,C,N)=>{let B=0;const he=U.length;let y=D.length-1,m=he-1;for(;B<=y&&B<=m;){const P=D[B],H=U[B]=N?Ai(U[B]):Vn(U[B]);if(Es(P,H))x(P,H,S,null,Z,K,b,C,N);else break;B++}for(;B<=y&&B<=m;){const P=D[y],H=U[m]=N?Ai(U[m]):Vn(U[m]);if(Es(P,H))x(P,H,S,null,Z,K,b,C,N);else break;y--,m--}if(B>y){if(B<=m){const P=m+1,H=P<he?U[P].el:ne;for(;B<=m;)x(null,U[B]=N?Ai(U[B]):Vn(U[B]),S,H,Z,K,b,C,N),B++}}else if(B>m)for(;B<=y;)Fe(D[B],Z,K,!0),B++;else{const P=B,H=B,q=new Map;for(B=H;B<=m;B++){const Ie=U[B]=N?Ai(U[B]):Vn(U[B]);Ie.key!=null&&q.set(Ie.key,B)}let $,Se=0;const fe=m-H+1;let Ee=!1,Ae=0;const ue=new Array(fe);for(B=0;B<fe;B++)ue[B]=0;for(B=P;B<=y;B++){const Ie=D[B];if(Se>=fe){Fe(Ie,Z,K,!0);continue}let De;if(Ie.key!=null)De=q.get(Ie.key);else for($=H;$<=m;$++)if(ue[$-H]===0&&Es(Ie,U[$])){De=$;break}De===void 0?Fe(Ie,Z,K,!0):(ue[De-H]=B+1,De>=Ae?Ae=De:Ee=!0,x(Ie,U[De],S,null,Z,K,b,C,N),Se++)}const Re=Ee?e0(ue):qr;for($=Re.length-1,B=fe-1;B>=0;B--){const Ie=H+B,De=U[Ie],xe=U[Ie+1],ze=Ie+1<he?xe.el||xe.placeholder:ne;ue[B]===0?x(null,De,S,ze,Z,K,b,C,N):Ee&&($<0||B!==Re[$]?we(De,S,ze,2):$--)}}},we=(D,U,S,ne,Z=null)=>{const{el:K,type:b,transition:C,children:N,shapeFlag:B}=D;if(B&6){we(D.component.subTree,U,S,ne);return}if(B&128){D.suspense.move(U,S,ne);return}if(B&64){b.move(D,U,S,oe);return}if(b===en){i(K,U,S);for(let y=0;y<N.length;y++)we(N[y],U,S,ne);i(D.anchor,U,S);return}if(b===Zo){E(D,U,S);return}if(ne!==2&&B&1&&C)if(ne===0)C.beforeEnter(K),i(K,U,S),fn(()=>C.enter(K),Z);else{const{leave:y,delayLeave:m,afterLeave:P}=C,H=()=>{D.ctx.isUnmounted?r(K):i(K,U,S)},q=()=>{K._isLeaving&&K[M_](!0),y(K,()=>{H(),P&&P()})};m?m(K,H,q):q()}else i(K,U,S)},Fe=(D,U,S,ne=!1,Z=!1)=>{const{type:K,props:b,ref:C,children:N,dynamicChildren:B,shapeFlag:he,patchFlag:y,dirs:m,cacheIndex:P}=D;if(y===-2&&(Z=!1),C!=null&&(mi(),Bs(C,null,S,D,!0),gi()),P!=null&&(U.renderCache[P]=void 0),he&256){U.ctx.deactivate(D);return}const H=he&1&&m,q=!ks(D);let $;if(q&&($=b&&b.onVnodeBeforeUnmount)&&Bn($,U,D),he&6)_e(D.component,S,ne);else{if(he&128){D.suspense.unmount(S,ne);return}H&&Ji(D,null,U,"beforeUnmount"),he&64?D.type.remove(D,U,S,oe,ne):B&&!B.hasOnce&&(K!==en||y>0&&y&64)?ye(B,U,S,!1,!0):(K===en&&y&384||!Z&&he&16)&&ye(N,U,S),ne&&qe(D)}(q&&($=b&&b.onVnodeUnmounted)||H)&&fn(()=>{$&&Bn($,U,D),H&&Ji(D,null,U,"unmounted")},S)},qe=D=>{const{type:U,el:S,anchor:ne,transition:Z}=D;if(U===en){re(S,ne);return}if(U===Zo){v(D);return}const K=()=>{r(S),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:b,delayLeave:C}=Z,N=()=>b(S,K);C?C(D.el,K,N):N()}else K()},re=(D,U)=>{let S;for(;D!==U;)S=d(D),r(D),D=S;r(U)},_e=(D,U,S)=>{const{bum:ne,scope:Z,job:K,subTree:b,um:C,m:N,a:B}=D;_f(N),_f(B),ne&&Wo(ne),Z.stop(),K&&(K.flags|=8,Fe(b,D,U,S)),C&&fn(C,U),fn(()=>{D.isUnmounted=!0},U)},ye=(D,U,S,ne=!1,Z=!1,K=0)=>{for(let b=K;b<D.length;b++)Fe(D[b],U,S,ne,Z)},z=D=>{if(D.shapeFlag&6)return z(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const U=d(D.anchor||D.el),S=U&&U[x_];return S?d(S):U};let ie=!1;const le=(D,U,S)=>{D==null?U._vnode&&Fe(U._vnode,null,null,!0):x(U._vnode||null,D,U,null,null,null,S),U._vnode=D,ie||(ie=!0,cf(),gp(),ie=!1)},oe={p:x,um:Fe,m:we,r:qe,mt:se,mc:F,pc:X,pbc:T,n:z,o:t};return{render:le,hydrate:void 0,createApp:G_(le)}}function Ko({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Qi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Q_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Op(t,e,n=!1){const i=t.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ai(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Op(a,o)),o.type===da&&o.patchFlag!==-1&&(o.el=a.el),o.type===Bi&&!o.el&&(o.el=a.el)}}function e0(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function Bp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bp(e)}function _f(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const t0=Symbol.for("v-scx"),n0=()=>Un(t0);function vu(t,e){return xu(t,null,e)}function di(t,e,n){return xu(t,e,n)}function xu(t,e,n=mt){const{immediate:i,deep:r,flush:s,once:a}=n,o=qt({},n),l=e&&i||!e&&s!=="post";let c;if(Zs){if(s==="sync"){const p=n0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=$n,p.resume=$n,p.pause=$n,p}}const u=$t;o.call=(p,_,x)=>jn(p,u,_,x);let f=!1;s==="post"?o.scheduler=p=>{fn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():pu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=m_(t,e,o);return Zs&&(c?c.push(d):l&&d()),d}function i0(t,e,n){const i=this.proxy,r=Ct(t)?t.includes(".")?kp(i,t):()=>i[t]:t.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,n=e);const a=pa(this),o=xu(r,s.bind(i),n);return a(),o}function kp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const r0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${yr(e)}Modifiers`];function s0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||mt;let r=n;const s=e.startsWith("update:"),a=s&&r0(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Ct(u)?u.trim():u)),a.number&&(r=n.map(Ug)));let o,l=i[o=Go(e)]||i[o=Go(yn(e))];!l&&s&&(l=i[o=Go(yr(e))]),l&&jn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,jn(c,t,6,r)}}const a0=new WeakMap;function zp(t,e,n=!1){const i=n?a0:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Xe(t)){const l=c=>{const u=zp(c,e,!0);u&&(o=!0,qt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(St(t)&&i.set(t,null),null):(Ge(s)?s.forEach(l=>a[l]=null):qt(a,s),St(t)&&i.set(t,a),a)}function Co(t,e){return!t||!Mo(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,yr(e))||lt(t,e))}function vf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:x}=t,g=fo(t);let h,M;try{if(n.shapeFlag&4){const v=r||i,L=v;h=Vn(c.call(L,v,u,f,p,d,_)),M=o}else{const v=e;h=Vn(v.length>1?v(f,{attrs:o,slots:a,emit:l}):v(f,null)),M=e.props?o:o0(o)}}catch(v){Hs.length=0,Ao(v,t,1),h=ct(Bi)}let E=h;if(M&&x!==!1){const v=Object.keys(M),{shapeFlag:L}=E;v.length&&L&7&&(s&&v.some(Qc)&&(M=l0(M,s)),E=ns(E,M,!1,!0))}return n.dirs&&(E=ns(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&mu(E,n.transition),h=E,fo(g),h}const o0=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mo(n))&&((e||(e={}))[n]=t[n]);return e},l0=(t,e)=>{const n={};for(const i in t)(!Qc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function c0(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?xf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Co(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?xf(i,a,c):!0:!!a;return!1}function xf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Co(n,s))return!0}return!1}function u0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hp=t=>t.__isSuspense;function f0(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):v_(t)}const en=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),Bi=Symbol.for("v-cmt"),Zo=Symbol.for("v-stc"),Hs=[];let hn=null;function wt(t=!1){Hs.push(hn=t?null:[])}function h0(){Hs.pop(),hn=Hs[Hs.length-1]||null}let Ks=1;function mo(t,e=!1){Ks+=t,t<0&&hn&&e&&(hn.hasOnce=!0)}function Vp(t){return t.dynamicChildren=Ks>0?hn||qr:null,h0(),Ks>0&&hn&&hn.push(t),t}function It(t,e,n,i,r,s){return Vp(yt(t,e,n,i,r,s,!0))}function Su(t,e,n,i,r){return Vp(ct(t,e,n,i,r,!0))}function go(t){return t?t.__v_isVNode===!0:!1}function Es(t,e){return t.type===e.type&&t.key===e.key}const Gp=({key:t})=>t??null,Za=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||Rt(t)||Xe(t)?{i:Cn,r:t,k:e,f:!!n}:t:null);function yt(t,e=null,n=null,i=0,r=null,s=t===en?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gp(e),ref:e&&Za(e),scopeId:vp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Cn};return o?(Mu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),Ks>0&&!a&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const ct=d0;function d0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===D_)&&(t=Bi),go(t)){const o=ns(t,e,!0);return n&&Mu(o,n),Ks>0&&!s&&hn&&(o.shapeFlag&6?hn[hn.indexOf(t)]=o:hn.push(o)),o.patchFlag=-2,o}if(T0(t)&&(t=t.__vccOpts),e){e=p0(e);let{class:o,style:l}=e;o&&!Ct(o)&&(e.class=Fi(o)),St(l)&&(uu(l)&&!Ge(l)&&(l=qt({},l)),e.style=nu(l))}const a=Ct(t)?1:Hp(t)?128:S_(t)?64:St(t)?4:Xe(t)?2:0;return yt(t,e,n,i,r,a,s,!0)}function p0(t){return t?uu(t)||Lp(t)?qt({},t):t:null}function ns(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?g0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Gp(c),ref:e&&e.ref?n&&s?Ge(s)?s.concat(Za(e)):[s,Za(e)]:Za(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==en?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ns(t.ssContent),ssFallback:t.ssFallback&&ns(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&mu(u,l.clone(u)),u}function m0(t=" ",e=0){return ct(da,null,t,e)}function Li(t="",e=!1){return e?(wt(),Su(Bi,null,t)):ct(Bi,null,t)}function Vn(t){return t==null||typeof t=="boolean"?ct(Bi):Ge(t)?ct(en,null,t.slice()):go(t)?Ai(t):ct(da,null,String(t))}function Ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ns(t)}function Mu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Mu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Lp(e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Cn},n=32):(e=String(e),i&64?(n=16,e=[m0(e)]):n=8);t.children=e,t.shapeFlag|=n}function g0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Fi([e.class,i.class]));else if(r==="style")e.style=nu([e.style,i.style]);else if(Mo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ge(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Bn(t,e,n,i=null){jn(t,e,7,[n,i])}const _0=Rp();let v0=0;function x0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||_0,s={uid:v0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dp(i,r),emitsOptions:zp(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=s0.bind(null,s),t.ce&&t.ce(s),s}let $t=null;const ki=()=>$t||Cn;let _o,jl;{const t=To(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};_o=e("__VUE_INSTANCE_SETTERS__",n=>$t=n),jl=e("__VUE_SSR_SETTERS__",n=>Zs=n)}const pa=t=>{const e=$t;return _o(t),t.scope.on(),()=>{t.scope.off(),_o(e)}},Sf=()=>{$t&&$t.scope.off(),_o(null)};function Wp(t){return t.vnode.shapeFlag&4}let Zs=!1;function S0(t,e=!1,n=!1){e&&jl(e);const{props:i,children:r}=t.vnode,s=Wp(t);X_(t,i,s,e),j_(t,r,n||e);const a=s?M0(t,e):void 0;return e&&jl(!1),a}function M0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,F_);const{setup:i}=n;if(i){mi();const r=t.setupContext=i.length>1?E0(t):null,s=pa(t),a=ha(i,t,0,[t.props,r]),o=Vd(a);if(gi(),s(),(o||t.sp)&&!ks(t)&&Sp(t),o){if(a.then(Sf,Sf),e)return a.then(l=>{Mf(t,l)}).catch(l=>{Ao(l,t,0)});t.asyncDep=a}else Mf(t,a)}else Xp(t)}function Mf(t,e,n){Xe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=dp(e)),Xp(t)}function Xp(t,e,n){const i=t.type;t.render||(t.render=i.render||$n);{const r=pa(t);mi();try{O_(t)}finally{gi(),r()}}}const y0={get(t,e){return Xt(t,"get",""),t[e]}};function E0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,y0),slots:t.slots,emit:t.emit,expose:e}}function yu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(dp(fu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in zs)return zs[n](t)},has(e,n){return n in e||n in zs}})):t.proxy}function b0(t,e=!0){return Xe(t)?t.displayName||t.name:t.name||e&&t.__name}function T0(t){return Xe(t)&&"__vccOpts"in t}const At=(t,e)=>d_(t,e,Zs);function Po(t,e,n){try{mo(-1);const i=arguments.length;return i===2?St(e)&&!Ge(e)?go(e)?ct(t,null,[e]):ct(t,e):ct(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&go(n)&&(n=[n]),ct(t,e,n))}finally{mo(1)}}const w0="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kl;const yf=typeof window<"u"&&window.trustedTypes;if(yf)try{Kl=yf.createPolicy("vue",{createHTML:t=>t})}catch{}const $p=Kl?t=>Kl.createHTML(t):t=>t,A0="http://www.w3.org/2000/svg",R0="http://www.w3.org/1998/Math/MathML",oi=typeof document<"u"?document:null,Ef=oi&&oi.createElement("template"),C0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?oi.createElementNS(A0,t):e==="mathml"?oi.createElementNS(R0,t):n?oi.createElement(t,{is:n}):oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>oi.createTextNode(t),createComment:t=>oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Ef.innerHTML=$p(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=Ef.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},P0=Symbol("_vtc");function L0(t,e,n){const i=t[P0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bf=Symbol("_vod"),I0=Symbol("_vsh"),D0=Symbol(""),U0=/(?:^|;)\s*display\s*:/;function N0(t,e,n){const i=t.style,r=Ct(n);let s=!1;if(n&&!r){if(e)if(Ct(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ja(i,o,"")}else for(const a in e)n[a]==null&&Ja(i,a,"");for(const a in n)a==="display"&&(s=!0),Ja(i,a,n[a])}else if(r){if(e!==n){const a=i[D0];a&&(n+=";"+a),i.cssText=n,s=U0.test(n)}}else e&&t.removeAttribute("style");bf in t&&(t[bf]=s?i.display:"",t[I0]&&(i.display="none"))}const Tf=/\s*!important$/;function Ja(t,e,n){if(Ge(n))n.forEach(i=>Ja(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=F0(t,e);Tf.test(n)?t.setProperty(yr(i),n.replace(Tf,""),"important"):t[i]=n}}const wf=["Webkit","Moz","ms"],Jo={};function F0(t,e){const n=Jo[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return Jo[e]=i;i=bo(i);for(let r=0;r<wf.length;r++){const s=wf[r]+i;if(s in t)return Jo[e]=s}return e}const Af="http://www.w3.org/1999/xlink";function Rf(t,e,n,i,r,s=zg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Af,e.slice(6,e.length)):t.setAttributeNS(Af,e,n):n==null||s&&!$d(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Gi(n)?String(n):n)}function Cf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$p(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=$d(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function O0(t,e,n,i){t.addEventListener(e,n,i)}function B0(t,e,n,i){t.removeEventListener(e,n,i)}const Pf=Symbol("_vei");function k0(t,e,n,i,r=null){const s=t[Pf]||(t[Pf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=z0(e);if(i){const c=s[e]=G0(i,r);O0(t,o,c,l)}else a&&(B0(t,o,a,l),s[e]=void 0)}}const Lf=/(?:Once|Passive|Capture)$/;function z0(t){let e;if(Lf.test(t)){e={};let i;for(;i=t.match(Lf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yr(t.slice(2)),e]}let Qo=0;const H0=Promise.resolve(),V0=()=>Qo||(H0.then(()=>Qo=0),Qo=Date.now());function G0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;jn(W0(i,n.value),e,5,[i])};return n.value=t,n.attached=V0(),n}function W0(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const If=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,X0=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?L0(t,i,a):e==="style"?N0(t,n,i):Mo(e)?Qc(e)||k0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$0(t,e,i,a))?(Cf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Rf(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?Cf(t,yn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Rf(t,e,i,a))};function $0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&If(e)&&Xe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return If(e)&&Ct(n)?!1:e in t}const Y0=qt({patchProp:X0},C0);let Df;function q0(){return Df||(Df=Z_(Y0))}const j0=((...t)=>{const e=q0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Z0(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,K0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function K0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Z0(t){return Ct(t)?document.querySelector(t):t}const J0=tn({name:"a-hoverable",props:{isExternal:{type:Boolean,default:!1},to:{type:String,default:""},target:{type:String,default:"_self"},imgSrc:{type:String,default:""},shape:{type:String,default:"pill"},effect:{type:String,default:""},text:{type:String,default:""}}}),Wi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Q0={key:0,class:"relative w-50 h-50"},ev=["src","alt"],tv={key:1,class:"font-size-16 capitalize"};function nv(t,e,n,i,r,s){return wt(),Su(U_(t.isExternal?"a":"router-link"),{class:Fi(["flex row a-center h-50 user-select-none pointer",{"j-start":t.shape==="pill"},{"j-center":t.shape==="round"},t.effect]),to:t.isExternal?void 0:{name:t.to},href:t.isExternal?t.to:void 0,target:t.target},{default:xp(()=>[t.imgSrc?(wt(),It("div",Q0,[yt("img",{src:t.imgSrc,alt:t.to},null,8,ev)])):Li("",!0),t.text?(wt(),It("span",tv,ts(t.text),1)):Li("",!0)]),_:1},8,["class","to","href","target"])}const Yp=Wi(J0,[["render",nv]]),iv=tn({name:"switch-button",props:{isActive:{type:Boolean,default:!1},onSwitch:{type:Function,default:()=>{}},imgSrcL:{type:String,default:""},imgSrcR:{type:String,default:""},textL:{type:String,default:""},textR:{type:String,default:""}}}),rv={key:0,class:"relative"},sv=["src"],av={key:1},ov={key:0,class:"relative"},lv=["src"],cv={key:1};function uv(t,e,n,i,r,s){return wt(),It("button",{class:"flex row a-center j-center border-none bg-none w-32 h-32 font-size-16 pointer user-select-none",onClick:e[0]||(e[0]=(...a)=>t.onSwitch&&t.onSwitch(...a))},[yt("div",{class:Fi(["tr-100",{"w-full o-1":!t.isActive},{"w-0 o-0":t.isActive}])},[t.imgSrcL?(wt(),It("div",rv,[yt("img",{src:t.imgSrcL},null,8,sv)])):Li("",!0),t.textL?(wt(),It("span",av,ts(t.textL),1)):Li("",!0)],2),yt("div",{class:Fi(["tr-100",{"w-full o-1":t.isActive},{"w-0 o-0":!t.isActive}])},[t.imgSrcR?(wt(),It("div",ov,[yt("img",{src:t.imgSrcR},null,8,lv)])):Li("",!0),t.textR?(wt(),It("span",cv,ts(t.textR),1)):Li("",!0)],2)])}const qp=Wi(iv,[["render",uv]]),fv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z'/%3e%3cpath%20d='M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z'/%3e%3c/svg%3e",hv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",dv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",pv="data:image/svg+xml,%3csvg%20id='Layer_1'%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%3e%3cpath%20d='m4%206a2.982%202.982%200%200%201%20-2.122-.879l-1.544-1.374a1%201%200%200%201%201.332-1.494l1.585%201.414a1%201%200%200%200%201.456.04l3.604-3.431a1%201%200%200%201%201.378%201.448l-3.589%203.414a2.964%202.964%200%200%201%20-2.1.862zm20-2a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.589-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1.023%201.023%200%200%201%20-1.414%200l-1.59-1.585a1%201%200%200%200%20-1.414%201.414l1.585%201.585a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.585-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1%201%200%200%201%20-1.456-.04l-1.585-1.414a1%201%200%200%200%20-1.332%201.494l1.544%201.374a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1z'/%3e%3c/svg%3e",mv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",gv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",_v="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",vv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,20c-.552,0-1-.447-1-1,0-2.318,1.382-4.357,3.891-5.741,2.287-1.26,3.469-3.755,3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57,.147-4.952,1.307-1.363,1.144-2.144,2.82-2.144,4.597,0,.552-.448,1-1,1s-1-.448-1-1c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.289,13.441,.126c3.222,.565,5.866,3.21,6.432,6.432,.598,3.402-1.017,6.798-4.016,8.453-1.303,.718-2.857,1.993-2.857,3.989,0,.553-.448,1-1,1Zm-1.5,2.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z'/%3e%3c/svg%3e",xv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",Sv="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z'/%3e%3cpath%20d='M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z'/%3e%3c/svg%3e",jp=Object.freeze(Object.defineProperty({__proto__:null,angleDoubleRight:fv,crossSmall:hv,home:dv,list:mv,listCheck:pv,menuBurger:gv,moonStars:_v,question:vv,sun:xv,user:Sv},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Kp;const Lo=t=>Kp=t,Zp=Symbol();function Zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vs||(Vs={}));function Mv(){const t=iu(!0),e=t.run(()=>Er({}));let n=[],i=[];const r=fu({install(s){Lo(r),r._a=s,s.provide(Zp,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Jp=()=>{};function Uf(t,e,n,i=Jp){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Kd()&&Hg(r),r}function Ar(t,...e){t.slice().forEach(n=>{n(...e)})}const yv=t=>t(),Nf=Symbol(),el=Symbol();function Jl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Zl(r)&&Zl(i)&&t.hasOwnProperty(n)&&!Rt(i)&&!Di(i)?t[n]=Jl(r,i):t[n]=i}return t}const Ev=Symbol();function bv(t){return!Zl(t)||!Object.prototype.hasOwnProperty.call(t,Ev)}const{assign:Ti}=Object;function Tv(t){return!!(Rt(t)&&t.effect)}function wv(t,e,n,i){const{state:r,actions:s,getters:a}=e,o=n.state.value[t];let l;function c(){o||(n.state.value[t]=r?r():{});const u=c_(n.state.value[t]);return Ti(u,s,Object.keys(a||{}).reduce((f,d)=>(f[d]=fu(At(()=>{Lo(n);const p=n._s.get(t);return a[d].call(p,p)})),f),{}))}return l=Qp(t,c,e,n,i,!0),l}function Qp(t,e,n={},i,r,s){let a;const o=Ti({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),Er({});let x;function g(F){let w;c=u=!1,typeof F=="function"?(F(i.state.value[t]),w={type:Vs.patchFunction,storeId:t,events:p}):(Jl(i.state.value[t],F),w={type:Vs.patchObject,payload:F,storeId:t,events:p});const T=x=Symbol();du().then(()=>{x===T&&(c=!0)}),u=!0,Ar(f,w,i.state.value[t])}const h=s?function(){const{state:w}=n,T=w?w():{};this.$patch(O=>{Ti(O,T)})}:Jp;function M(){a.stop(),f=[],d=[],i._s.delete(t)}const E=(F,w="")=>{if(Nf in F)return F[el]=w,F;const T=function(){Lo(i);const O=Array.from(arguments),j=[],Y=[];function se(J){j.push(J)}function ae(J){Y.push(J)}Ar(d,{args:O,name:T[el],store:L,after:se,onError:ae});let te;try{te=F.apply(this&&this.$id===t?this:L,O)}catch(J){throw Ar(Y,J),J}return te instanceof Promise?te.then(J=>(Ar(j,J),J)).catch(J=>(Ar(Y,J),Promise.reject(J))):(Ar(j,te),te)};return T[Nf]=!0,T[el]=w,T},v={_p:i,$id:t,$onAction:Uf.bind(null,d),$patch:g,$reset:h,$subscribe(F,w={}){const T=Uf(f,F,w.detached,()=>O()),O=a.run(()=>di(()=>i.state.value[t],j=>{(w.flush==="sync"?u:c)&&F({storeId:t,type:Vs.direct,events:p},j)},Ti({},l,w)));return T},$dispose:M},L=fa(v);i._s.set(t,L);const R=(i._a&&i._a.runWithContext||yv)(()=>i._e.run(()=>(a=iu()).run(()=>e({action:E}))));for(const F in R){const w=R[F];if(Rt(w)&&!Tv(w)||Di(w))s||(_&&bv(w)&&(Rt(w)?w.value=_[F]:Jl(w,_[F])),i.state.value[t][F]=w);else if(typeof w=="function"){const T=E(w,F);R[F]=T,o.actions[F]=w}}return Ti(L,R),Ti(tt(L),R),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:F=>{g(w=>{Ti(w,F)})}}),i._p.forEach(F=>{Ti(L,a.run(()=>F({store:L,app:i._a,pinia:i,options:o})))}),_&&s&&n.hydrate&&n.hydrate(L.$state,_),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function em(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(a,o){const l=W_();return a=a||(l?Un(Zp,null):null),a&&Lo(a),a=Kp,a._s.has(t)||(r?Qp(t,e,i,a):wv(t,i,a)),a._s.get(t)}return s.$id=t,s}var rn=(t=>(t.Light="light",t.Dark="dark",t))(rn||{}),or=(t=>(t.EnUS="en-US",t.ZhTW="zh-TW",t))(or||{});function Av(t){return t!==null}const ma=em("theme",()=>{const t=Er(rn.Light),e=localStorage.getItem("theme");Av(e)&&(t.value=e),vu(()=>localStorage.setItem("theme",t.value));function n(){switch(t.value){case rn.Light:t.value=rn.Dark;break;case rn.Dark:t.value=rn.Light;break}}const i=At(()=>t.value===rn.Dark),r=At(()=>t.value===rn.Light);return{theme:t,switchTheme:n,isDark:i,isLight:r}});/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Rv(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const vo=typeof window<"u",Xi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Cv=(t,e,n)=>Pv({l:t,k:e,s:n}),Pv=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Lt=t=>typeof t=="number"&&isFinite(t),Lv=t=>Eu(t)==="[object Date]",is=t=>Eu(t)==="[object RegExp]",Io=t=>Ke(t)&&Object.keys(t).length===0,Dt=Object.assign,Iv=Object.create,pt=(t=null)=>Iv(t);let Ff;const hr=()=>Ff||(Ff=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:pt());function Of(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Bf(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Dv(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Bf(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Bf(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const Uv=Object.prototype.hasOwnProperty;function Pn(t,e){return Uv.call(t,e)}const Tt=Array.isArray,xt=t=>typeof t=="function",Ce=t=>typeof t=="string",it=t=>typeof t=="boolean",rt=t=>t!==null&&typeof t=="object",Nv=t=>rt(t)&&xt(t.then)&&xt(t.catch),tm=Object.prototype.toString,Eu=t=>tm.call(t),Ke=t=>Eu(t)==="[object Object]",Fv=t=>t==null?"":Tt(t)||Ke(t)&&t.toString===tm?JSON.stringify(t,null,2):String(t);function bu(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const ba=t=>!rt(t)||Tt(t);function Qa(t,e){if(ba(t)||ba(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(rt(i[s])&&!rt(r[s])&&(r[s]=Array.isArray(i[s])?[]:pt()),ba(r[s])||ba(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Ov(t,e,n){return{line:t,column:e,offset:n}}function Ql(t,e,n){return{start:t,end:e}}const ot={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Bv=17;function Do(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=t,o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function kv(t){throw t}const kn=" ",zv="\r",Gt=`
`,Hv="\u2028",Vv="\u2029";function Gv(t){const e=t;let n=0,i=1,r=1,s=0;const a=R=>e[R]===zv&&e[R+1]===Gt,o=R=>e[R]===Gt,l=R=>e[R]===Vv,c=R=>e[R]===Hv,u=R=>a(R)||o(R)||l(R)||c(R),f=()=>n,d=()=>i,p=()=>r,_=()=>s,x=R=>a(R)||l(R)||c(R)?Gt:e[R],g=()=>x(n),h=()=>x(n+s);function M(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function E(){return a(n+s)&&s++,s++,e[n+s]}function v(){n=0,i=1,r=1,s=0}function L(R=0){s=R}function I(){const R=n+s;for(;R!==n;)M();s=0}return{index:f,line:d,column:p,peekOffset:_,charAt:x,currentChar:g,currentPeek:h,next:M,peek:E,reset:v,resetPeek:L,skipToPeek:I}}const Qn=void 0,Wv=".",kf="'",Xv="tokenizer";function $v(t,e={}){const n=e.location!==!1,i=Gv(t),r=()=>i.index(),s=()=>Ov(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:13,offset:o,startLoc:a,endLoc:a,lastType:13,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(b,C,N,...B){const he=c();if(C.column+=N,C.offset+=N,u){const y=n?Ql(he.startLoc,C):null,m=Do(b,y,{domain:Xv,args:B});u(m)}}function d(b,C,N){b.endLoc=s(),b.currentType=C;const B={type:C};return n&&(B.loc=Ql(b.startLoc,b.endLoc)),N!=null&&(B.value=N),B}const p=b=>d(b,13);function _(b,C){return b.currentChar()===C?(b.next(),C):(f(ot.EXPECTED_TOKEN,s(),0,C),"")}function x(b){let C="";for(;b.currentPeek()===kn||b.currentPeek()===Gt;)C+=b.currentPeek(),b.peek();return C}function g(b){const C=x(b);return b.skipToPeek(),C}function h(b){if(b===Qn)return!1;const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function M(b){if(b===Qn)return!1;const C=b.charCodeAt(0);return C>=48&&C<=57}function E(b,C){const{currentType:N}=C;if(N!==2)return!1;x(b);const B=h(b.currentPeek());return b.resetPeek(),B}function v(b,C){const{currentType:N}=C;if(N!==2)return!1;x(b);const B=b.currentPeek()==="-"?b.peek():b.currentPeek(),he=M(B);return b.resetPeek(),he}function L(b,C){const{currentType:N}=C;if(N!==2)return!1;x(b);const B=b.currentPeek()===kf;return b.resetPeek(),B}function I(b,C){const{currentType:N}=C;if(N!==7)return!1;x(b);const B=b.currentPeek()===".";return b.resetPeek(),B}function R(b,C){const{currentType:N}=C;if(N!==8)return!1;x(b);const B=h(b.currentPeek());return b.resetPeek(),B}function F(b,C){const{currentType:N}=C;if(!(N===7||N===11))return!1;x(b);const B=b.currentPeek()===":";return b.resetPeek(),B}function w(b,C){const{currentType:N}=C;if(N!==9)return!1;const B=()=>{const y=b.currentPeek();return y==="{"?h(b.peek()):y==="@"||y==="|"||y===":"||y==="."||y===kn||!y?!1:y===Gt?(b.peek(),B()):O(b,!1)},he=B();return b.resetPeek(),he}function T(b){x(b);const C=b.currentPeek()==="|";return b.resetPeek(),C}function O(b,C=!0){const N=(he=!1,y="")=>{const m=b.currentPeek();return m==="{"||m==="@"||!m?he:m==="|"?!(y===kn||y===Gt):m===kn?(b.peek(),N(!0,kn)):m===Gt?(b.peek(),N(!0,Gt)):!0},B=N();return C&&b.resetPeek(),B}function j(b,C){const N=b.currentChar();return N===Qn?Qn:C(N)?(b.next(),N):null}function Y(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function se(b){return j(b,Y)}function ae(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function te(b){return j(b,ae)}function J(b){const C=b.charCodeAt(0);return C>=48&&C<=57}function X(b){return j(b,J)}function pe(b){const C=b.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function ve(b){return j(b,pe)}function we(b){let C="",N="";for(;C=X(b);)N+=C;return N}function Fe(b){let C="";for(;;){const N=b.currentChar();if(N==="{"||N==="}"||N==="@"||N==="|"||!N)break;if(N===kn||N===Gt)if(O(b))C+=N,b.next();else{if(T(b))break;C+=N,b.next()}else C+=N,b.next()}return C}function qe(b){g(b);let C="",N="";for(;C=te(b);)N+=C;const B=b.currentChar();if(B&&B!=="}"&&B!==Qn&&B!==kn&&B!==Gt&&B!=="　"){const he=oe(b);return f(ot.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,N+he),N+he}return b.currentChar()===Qn&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),N}function re(b){g(b);let C="";return b.currentChar()==="-"?(b.next(),C+=`-${we(b)}`):C+=we(b),b.currentChar()===Qn&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),C}function _e(b){return b!==kf&&b!==Gt}function ye(b){g(b),_(b,"'");let C="",N="";for(;C=j(b,_e);)C==="\\"?N+=z(b):N+=C;const B=b.currentChar();return B===Gt||B===Qn?(f(ot.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),B===Gt&&(b.next(),_(b,"'")),N):(_(b,"'"),N)}function z(b){const C=b.currentChar();switch(C){case"\\":case"'":return b.next(),`\\${C}`;case"u":return ie(b,C,4);case"U":return ie(b,C,6);default:return f(ot.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function ie(b,C,N){_(b,C);let B="";for(let he=0;he<N;he++){const y=ve(b);if(!y){f(ot.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${B}${b.currentChar()}`);break}B+=y}return`\\${C}${B}`}function le(b){return b!=="{"&&b!=="}"&&b!==kn&&b!==Gt}function oe(b){g(b);let C="",N="";for(;C=j(b,le);)N+=C;return N}function Oe(b){let C="",N="";for(;C=se(b);)N+=C;return N}function D(b){const C=N=>{const B=b.currentChar();return B==="{"||B==="@"||B==="|"||B==="("||B===")"||!B||B===kn?N:(N+=B,b.next(),C(N))};return C("")}function U(b){g(b);const C=_(b,"|");return g(b),C}function S(b,C){let N=null;switch(b.currentChar()){case"{":return C.braceNest>=1&&f(ot.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),b.next(),N=d(C,2,"{"),g(b),C.braceNest++,N;case"}":return C.braceNest>0&&C.currentType===2&&f(ot.EMPTY_PLACEHOLDER,s(),0),b.next(),N=d(C,3,"}"),C.braceNest--,C.braceNest>0&&g(b),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),N;case"@":return C.braceNest>0&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),N=ne(b,C)||p(C),C.braceNest=0,N;default:{let he=!0,y=!0,m=!0;if(T(b))return C.braceNest>0&&f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(ot.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,Z(b,C);if(he=E(b,C))return N=d(C,4,qe(b)),g(b),N;if(y=v(b,C))return N=d(C,5,re(b)),g(b),N;if(m=L(b,C))return N=d(C,6,ye(b)),g(b),N;if(!he&&!y&&!m)return N=d(C,12,oe(b)),f(ot.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,N.value),g(b),N;break}}return N}function ne(b,C){const{currentType:N}=C;let B=null;const he=b.currentChar();switch((N===7||N===8||N===11||N===9)&&(he===Gt||he===kn)&&f(ot.INVALID_LINKED_FORMAT,s(),0),he){case"@":return b.next(),B=d(C,7,"@"),C.inLinked=!0,B;case".":return g(b),b.next(),d(C,8,".");case":":return g(b),b.next(),d(C,9,":");default:return T(b)?(B=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,B):I(b,C)||F(b,C)?(g(b),ne(b,C)):R(b,C)?(g(b),d(C,11,Oe(b))):w(b,C)?(g(b),he==="{"?S(b,C)||B:d(C,10,D(b))):(N===7&&f(ot.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,Z(b,C))}}function Z(b,C){let N={type:13};if(C.braceNest>0)return S(b,C)||p(C);if(C.inLinked)return ne(b,C)||p(C);switch(b.currentChar()){case"{":return S(b,C)||p(C);case"}":return f(ot.UNBALANCED_CLOSING_BRACE,s(),0),b.next(),d(C,3,"}");case"@":return ne(b,C)||p(C);default:{if(T(b))return N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(O(b))return d(C,0,Fe(b));break}}return N}function K(){const{currentType:b,offset:C,startLoc:N,endLoc:B}=l;return l.lastType=b,l.lastOffset=C,l.lastStartLoc=N,l.lastEndLoc=B,l.offset=r(),l.startLoc=s(),i.currentChar()===Qn?d(l,13):Z(i,l)}return{nextToken:K,currentOffset:r,currentPosition:s,context:c}}const Yv="parser",qv=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function jv(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function Kv(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,M,E,v,...L){const I=h.currentPosition();if(I.offset+=v,I.column+=v,n){const R=e?Ql(E,I):null,F=Do(M,R,{domain:Yv,args:L});n(F)}}function r(h,M,E){const v={type:h};return e&&(v.start=M,v.end=M,v.loc={start:E,end:E}),v}function s(h,M,E,v){e&&(h.end=M,h.loc&&(h.loc.end=E))}function a(h,M){const E=h.context(),v=r(3,E.offset,E.startLoc);return v.value=M,s(v,h.currentOffset(),h.currentPosition()),v}function o(h,M){const E=h.context(),{lastOffset:v,lastStartLoc:L}=E,I=r(5,v,L);return I.index=parseInt(M,10),h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function l(h,M){const E=h.context(),{lastOffset:v,lastStartLoc:L}=E,I=r(4,v,L);return I.key=M,h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function c(h,M){const E=h.context(),{lastOffset:v,lastStartLoc:L}=E,I=r(9,v,L);return I.value=M.replace(qv,jv),h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function u(h){const M=h.nextToken(),E=h.context(),{lastOffset:v,lastStartLoc:L}=E,I=r(8,v,L);return M.type!==11?(i(h,ot.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),I.value="",s(I,v,L),{nextConsumeToken:M,node:I}):(M.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,zn(M)),I.value=M.value||"",s(I,h.currentOffset(),h.currentPosition()),{node:I})}function f(h,M){const E=h.context(),v=r(7,E.offset,E.startLoc);return v.value=M,s(v,h.currentOffset(),h.currentPosition()),v}function d(h){const M=h.context(),E=r(6,M.offset,M.startLoc);let v=h.nextToken();if(v.type===8){const L=u(h);E.modifier=L.node,v=L.nextConsumeToken||h.nextToken()}switch(v.type!==9&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(v)),v=h.nextToken(),v.type===2&&(v=h.nextToken()),v.type){case 10:v.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(v)),E.key=f(h,v.value||"");break;case 4:v.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(v)),E.key=l(h,v.value||"");break;case 5:v.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(v)),E.key=o(h,v.value||"");break;case 6:v.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(v)),E.key=c(h,v.value||"");break;default:{i(h,ot.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const L=h.context(),I=r(7,L.offset,L.startLoc);return I.value="",s(I,L.offset,L.startLoc),E.key=I,s(E,L.offset,L.startLoc),{nextConsumeToken:v,node:E}}}return s(E,h.currentOffset(),h.currentPosition()),{node:E}}function p(h){const M=h.context(),E=M.currentType===1?h.currentOffset():M.offset,v=M.currentType===1?M.endLoc:M.startLoc,L=r(2,E,v);L.items=[];let I=null;do{const w=I||h.nextToken();switch(I=null,w.type){case 0:w.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(w)),L.items.push(a(h,w.value||""));break;case 5:w.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(w)),L.items.push(o(h,w.value||""));break;case 4:w.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(w)),L.items.push(l(h,w.value||""));break;case 6:w.value==null&&i(h,ot.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,zn(w)),L.items.push(c(h,w.value||""));break;case 7:{const T=d(h);L.items.push(T.node),I=T.nextConsumeToken||null;break}}}while(M.currentType!==13&&M.currentType!==1);const R=M.currentType===1?M.lastOffset:h.currentOffset(),F=M.currentType===1?M.lastEndLoc:h.currentPosition();return s(L,R,F),L}function _(h,M,E,v){const L=h.context();let I=v.items.length===0;const R=r(1,M,E);R.cases=[],R.cases.push(v);do{const F=p(h);I||(I=F.items.length===0),R.cases.push(F)}while(L.currentType!==13);return I&&i(h,ot.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),s(R,h.currentOffset(),h.currentPosition()),R}function x(h){const M=h.context(),{offset:E,startLoc:v}=M,L=p(h);return M.currentType===13?L:_(h,E,v,L)}function g(h){const M=$v(h,Dt({},t)),E=M.context(),v=r(0,E.offset,E.startLoc);return e&&v.loc&&(v.loc.source=h),v.body=x(M),t.onCacheKey&&(v.cacheKey=t.onCacheKey(h)),E.currentType!==13&&i(M,ot.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,h[E.offset]||""),s(v,M.currentOffset(),M.currentPosition()),v}return{parse:g}}function zn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function Zv(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function zf(t,e){for(let n=0;n<t.length;n++)Tu(t[n],e)}function Tu(t,e){switch(t.type){case 1:zf(t.cases,e),e.helper("plural");break;case 2:zf(t.items,e);break;case 6:{Tu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function Jv(t,e={}){const n=Zv(t);n.helper("normalize"),t.body&&Tu(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Qv(t){const e=t.body;return e.type===2?Hf(e):e.cases.forEach(n=>Hf(n)),t}function Hf(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=bu(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Wr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Wr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Wr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Wr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Wr(e.key),e.k=e.key,delete e.key,e.modifier&&(Wr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function ex(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,a={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(a.source=t.loc.source);const o=()=>a;function l(x,g){a.code+=x}function c(x,g=!0){const h=g?i:"";l(r?h+"  ".repeat(x):h)}function u(x=!0){const g=++a.indentLevel;x&&c(g)}function f(x=!0){const g=--a.indentLevel;x&&c(g)}function d(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:f,newline:d,helper:x=>`_${x}`,needIndent:()=>a.needIndent}}function tx(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),rs(t,e.key),e.modifier?(t.push(", "),rs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function nx(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(rs(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function ix(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(rs(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function rx(t,e){e.body?rs(t,e.body):t.push("null")}function rs(t,e){const{helper:n}=t;switch(e.type){case 0:rx(t,e);break;case 1:ix(t,e);break;case 2:nx(t,e);break;case 6:tx(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const sx=(t,e={})=>{const n=Ce(e.mode)?e.mode:"normal",i=Ce(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],o=ex(t,{filename:i,breakLineCode:r,needIndent:s});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(s),a.length>0&&(o.push(`const { ${bu(a.map(u=>`${u}: _${u}`),", ")} } = ctx`),o.newline()),o.push("return "),rs(o,t),o.deindent(s),o.push("}"),delete t.helpers;const{code:l,map:c}=o.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function ax(t,e={}){const n=Dt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=Kv(n).parse(t);return i?(s&&Qv(o),r&&Wr(o),{ast:o,code:""}):(Jv(o,n),sx(o,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function ox(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(hr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(hr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Yn(t){return rt(t)&&wu(t)===0&&(Pn(t,"b")||Pn(t,"body"))}const nm=["b","body"];function lx(t){return $i(t,nm)}const im=["c","cases"];function cx(t){return $i(t,im,[])}const rm=["s","static"];function ux(t){return $i(t,rm)}const sm=["i","items"];function fx(t){return $i(t,sm,[])}const am=["t","type"];function wu(t){return $i(t,am)}const om=["v","value"];function Ta(t,e){const n=$i(t,om);if(n!=null)return n;throw Js(e)}const lm=["m","modifier"];function hx(t){return $i(t,lm)}const cm=["k","key"];function dx(t){const e=$i(t,cm);if(e)return e;throw Js(6)}function $i(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Pn(t,r)&&t[r]!=null)return t[r]}return n}const um=[...nm,...im,...rm,...sm,...cm,...lm,...om,...am];function Js(t){return new Error(`unhandled node type: ${t}`)}function tl(t){return n=>px(n,t)}function px(t,e){const n=lx(e);if(n==null)throw Js(0);if(wu(n)===1){const s=cx(n);return t.plural(s.reduce((a,o)=>[...a,Vf(t,o)],[]))}else return Vf(t,n)}function Vf(t,e){const n=ux(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=fx(e).reduce((r,s)=>[...r,ec(t,s)],[]);return t.normalize(i)}}function ec(t,e){const n=wu(e);switch(n){case 3:return Ta(e,n);case 9:return Ta(e,n);case 4:{const i=e;if(Pn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Pn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Js(n)}case 5:{const i=e;if(Pn(i,"i")&&Lt(i.i))return t.interpolate(t.list(i.i));if(Pn(i,"index")&&Lt(i.index))return t.interpolate(t.list(i.index));throw Js(n)}case 6:{const i=e,r=hx(i),s=dx(i);return t.linked(ec(t,s),r?ec(t,r):void 0,t.type)}case 7:return Ta(e,n);case 8:return Ta(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const mx=t=>t;let wa=pt();function gx(t,e={}){let n=!1;const i=e.onError||kv;return e.onError=r=>{n=!0,i(r)},{...ax(t,e),detectError:n}}function _x(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ce(t)){it(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||mx)(t),r=wa[i];if(r)return r;const{ast:s,detectError:a}=gx(t,{...e,location:!1,jit:!0}),o=tl(s);return a?o:wa[i]=o}else{const n=t.cacheKey;if(n){const i=wa[n];return i||(wa[n]=tl(t))}else return tl(t)}}let Qs=null;function vx(t){Qs=t}function xx(t,e,n){Qs&&Qs.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Sx=Mx("function:translate");function Mx(t){return e=>Qs&&Qs.emit(t,e)}const ui={INVALID_ARGUMENT:Bv,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},yx=24;function fi(t){return Do(t,null,void 0)}function Au(t,e){return e.locale!=null?Gf(e.locale):Gf(t.locale)}let nl;function Gf(t){if(Ce(t))return t;if(xt(t)){if(t.resolvedOnce&&nl!=null)return nl;if(t.constructor.name==="Function"){const e=t();if(Nv(e))throw fi(ui.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return nl=e}else throw fi(ui.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw fi(ui.NOT_SUPPORT_LOCALE_TYPE)}function Ex(t,e,n){return[...new Set([n,...Tt(e)?e:rt(e)?Object.keys(e):Ce(e)?[e]:[n]])]}function fm(t,e,n){const i=Ce(n)?n:ea,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;Tt(a);)a=Wf(s,a,e);const o=Tt(e)||!Ke(e)?e:e.default?e.default:null;a=Ce(o)?[o]:o,Tt(a)&&Wf(s,a,!1),r.__localeChainCache.set(i,s)}return s}function Wf(t,e,n){let i=!0;for(let r=0;r<e.length&&it(i);r++){const s=e[r];Ce(s)&&(i=bx(t,e[r],n))}return i}function bx(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=Tx(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function Tx(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Tt(n)||Ke(n))&&n[r]&&(i=n[r])}return i}const Yi=[];Yi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Yi[1]={w:[1],".":[2],"[":[4],o:[7]};Yi[2]={w:[2],i:[3,0],0:[3,0]};Yi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Yi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Yi[5]={"'":[4,0],o:8,l:[5,0]};Yi[6]={'"':[4,0],o:8,l:[6,0]};const wx=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ax(t){return wx.test(t)}function Rx(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Cx(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Px(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Ax(e)?Rx(e):"*"+e}function Lx(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,f;const d=[];d[0]=()=>{a===void 0?a=o:a+=o},d[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,a===void 0||(a=Px(a),a===!1))return!1;d[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,o="\\"+_,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=Cx(s),f=Yi[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const Xf=new Map;function Ix(t,e){return rt(t)?t[e]:null}function Dx(t,e){if(!rt(t))return null;let n=Xf.get(e);if(n||(n=Lx(e),n&&Xf.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=n[s];if(um.includes(a)&&Yn(r))return null;const o=r[a];if(o===void 0||xt(r))return null;r=o,s++}return r}const Ux="11.1.12",Uo=-1,ea="en-US",$f="",Yf=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Nx(){return{upper:(t,e)=>e==="text"&&Ce(t)?t.toUpperCase():e==="vnode"&&rt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ce(t)?t.toLowerCase():e==="vnode"&&rt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ce(t)?Yf(t):e==="vnode"&&rt(t)&&"__v_isVNode"in t?Yf(t.children):t}}let hm;function Fx(t){hm=t}let dm;function Ox(t){dm=t}let pm;function Bx(t){pm=t}let mm=null;const kx=t=>{mm=t},zx=()=>mm;let gm=null;const qf=t=>{gm=t},Hx=()=>gm;let jf=0;function Vx(t={}){const e=xt(t.onWarn)?t.onWarn:Rv,n=Ce(t.version)?t.version:Ux,i=Ce(t.locale)||xt(t.locale)?t.locale:ea,r=xt(i)?ea:i,s=Tt(t.fallbackLocale)||Ke(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Ke(t.messages)?t.messages:il(r),o=Ke(t.datetimeFormats)?t.datetimeFormats:il(r),l=Ke(t.numberFormats)?t.numberFormats:il(r),c=Dt(pt(),t.modifiers,Nx()),u=t.pluralRules||pt(),f=xt(t.missing)?t.missing:null,d=it(t.missingWarn)||is(t.missingWarn)?t.missingWarn:!0,p=it(t.fallbackWarn)||is(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,x=!!t.unresolving,g=xt(t.postTranslation)?t.postTranslation:null,h=Ke(t.processor)?t.processor:null,M=it(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,v=xt(t.messageCompiler)?t.messageCompiler:hm,L=xt(t.messageResolver)?t.messageResolver:dm||Ix,I=xt(t.localeFallbacker)?t.localeFallbacker:pm||Ex,R=rt(t.fallbackContext)?t.fallbackContext:void 0,F=t,w=rt(F.__datetimeFormatters)?F.__datetimeFormatters:new Map,T=rt(F.__numberFormatters)?F.__numberFormatters:new Map,O=rt(F.__meta)?F.__meta:{};jf++;const j={version:n,cid:jf,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:_,unresolving:x,postTranslation:g,processor:h,warnHtmlMessage:M,escapeParameter:E,messageCompiler:v,messageResolver:L,localeFallbacker:I,fallbackContext:R,onWarn:e,__meta:O};return j.datetimeFormats=o,j.numberFormats=l,j.__datetimeFormatters=w,j.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&xx(j,n,O),j}const il=t=>({[t]:pt()});function Ru(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Ce(o)?o:e}else return e}function bs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Gx(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function Wx(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(Gx(t,e[i]))return!0;return!1}function Kf(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,f]=tc(...e),d=it(u.missingWarn)?u.missingWarn:t.missingWarn;it(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=Au(t,u),x=a(t,r,_);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let g={},h,M=null;const E="datetime format";for(let I=0;I<x.length&&(h=x[I],g=n[h]||{},M=g[l],!Ke(M));I++)Ru(t,l,h,d,E);if(!Ke(M)||!Ce(h))return i?Uo:l;let v=`${h}__${l}`;Io(f)||(v=`${v}__${JSON.stringify(f)}`);let L=o.get(v);return L||(L=new Intl.DateTimeFormat(h,Dt({},M,f)),o.set(v,L)),p?L.formatToParts(c):L.format(c)}const _m=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function tc(...t){const[e,n,i,r]=t,s=pt();let a=pt(),o;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw fi(ui.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw fi(ui.INVALID_ISO_DATE_ARGUMENT)}}else if(Lv(e)){if(isNaN(e.getTime()))throw fi(ui.INVALID_DATE_ARGUMENT);o=e}else if(Lt(e))o=e;else throw fi(ui.INVALID_ARGUMENT);return Ce(n)?s.key=n:Ke(n)&&Object.keys(n).forEach(l=>{_m.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ce(i)?s.locale=i:Ke(i)&&(a=i),Ke(r)&&(a=r),[s.key||"",o,s,a]}function Zf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Jf(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,f]=nc(...e),d=it(u.missingWarn)?u.missingWarn:t.missingWarn;it(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=Au(t,u),x=a(t,r,_);if(!Ce(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let g={},h,M=null;const E="number format";for(let I=0;I<x.length&&(h=x[I],g=n[h]||{},M=g[l],!Ke(M));I++)Ru(t,l,h,d,E);if(!Ke(M)||!Ce(h))return i?Uo:l;let v=`${h}__${l}`;Io(f)||(v=`${v}__${JSON.stringify(f)}`);let L=o.get(v);return L||(L=new Intl.NumberFormat(h,Dt({},M,f)),o.set(v,L)),p?L.formatToParts(c):L.format(c)}const vm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function nc(...t){const[e,n,i,r]=t,s=pt();let a=pt();if(!Lt(e))throw fi(ui.INVALID_ARGUMENT);const o=e;return Ce(n)?s.key=n:Ke(n)&&Object.keys(n).forEach(l=>{vm.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ce(i)?s.locale=i:Ke(i)&&(a=i),Ke(r)&&(a=r),[s.key||"",o,s,a]}function Qf(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const Xx=t=>t,$x=t=>"",Yx="text",qx=t=>t.length===0?"":bu(t),jx=Fv;function eh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Kx(t){const e=Lt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Lt(t.named.count)||Lt(t.named.n))?Lt(t.named.count)?t.named.count:Lt(t.named.n)?t.named.n:e:e}function Zx(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Jx(t={}){const e=t.locale,n=Kx(t),i=rt(t.pluralRules)&&Ce(e)&&xt(t.pluralRules[e])?t.pluralRules[e]:eh,r=rt(t.pluralRules)&&Ce(e)&&xt(t.pluralRules[e])?eh:void 0,s=h=>h[i(n,h.length,r)],a=t.list||[],o=h=>a[h],l=t.named||pt();Lt(t.pluralIndex)&&Zx(n,l);const c=h=>l[h];function u(h,M){const E=xt(t.messages)?t.messages(h,!!M):rt(t.messages)?t.messages[h]:!1;return E||(t.parent?t.parent.message(h):$x)}const f=h=>t.modifiers?t.modifiers[h]:Xx,d=Ke(t.processor)&&xt(t.processor.normalize)?t.processor.normalize:qx,p=Ke(t.processor)&&xt(t.processor.interpolate)?t.processor.interpolate:jx,_=Ke(t.processor)&&Ce(t.processor.type)?t.processor.type:Yx,g={list:o,named:c,plural:s,linked:(h,...M)=>{const[E,v]=M;let L="text",I="";M.length===1?rt(E)?(I=E.modifier||I,L=E.type||L):Ce(E)&&(I=E||I):M.length===2&&(Ce(E)&&(I=E||I),Ce(v)&&(L=v||L));const R=u(h,!0)(g),F=L==="vnode"&&Tt(R)&&I?R[0]:R;return I?f(I)(F,L):F},message:u,type:_,interpolate:p,normalize:d,values:Dt(pt(),a,l)};return g}const th=()=>"",Sn=t=>xt(t);function nh(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=ic(...e),u=it(c.missingWarn)?c.missingWarn:t.missingWarn,f=it(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=it(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Ce(c.default)||it(c.default)?it(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,x=n||_!=null&&(Ce(_)||xt(_)),g=Au(t,c);d&&Qx(c);let[h,M,E]=p?[l,g,o[g]||pt()]:xm(t,l,g,a,f,u),v=h,L=l;if(!p&&!(Ce(v)||Yn(v)||Sn(v))&&x&&(v=_,L=v),!p&&(!(Ce(v)||Yn(v)||Sn(v))||!Ce(M)))return r?Uo:l;let I=!1;const R=()=>{I=!0},F=Sn(v)?v:Sm(t,l,M,v,L,R);if(I)return v;const w=nS(t,M,E,c),T=Jx(w),O=eS(t,F,T);let j=i?i(O,l):O;if(d&&Ce(j)&&(j=Dv(j)),__INTLIFY_PROD_DEVTOOLS__){const Y={timestamp:Date.now(),key:Ce(l)?l:Sn(v)?v.key:"",locale:M||(Sn(v)?v.locale:""),format:Ce(v)?v:Sn(v)?v.source:"",message:j};Y.meta=Dt({},t.__meta,zx()||{}),Sx(Y)}return j}function Qx(t){Tt(t.list)?t.list=t.list.map(e=>Ce(e)?Of(e):e):rt(t.named)&&Object.keys(t.named).forEach(e=>{Ce(t.named[e])&&(t.named[e]=Of(t.named[e]))})}function xm(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=pt(),d,p=null;const _="translate";for(let x=0;x<u.length&&(d=u[x],f=a[d]||pt(),(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||Yn(p)||Sn(p)));x++)if(!Wx(d,u)){const g=Ru(t,e,d,s,_);g!==e&&(p=g)}return[p,d,f]}function Sm(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(Sn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=a(i,tS(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function eS(t,e,n){return e(n)}function ic(...t){const[e,n,i]=t,r=pt();if(!Ce(e)&&!Lt(e)&&!Sn(e)&&!Yn(e))throw fi(ui.INVALID_ARGUMENT);const s=Lt(e)?String(e):(Sn(e),e);return Lt(n)?r.plural=n:Ce(n)?r.default=n:Ke(n)&&!Io(n)?r.named=n:Tt(n)&&(r.list=n),Lt(i)?r.plural=i:Ce(i)?r.default=i:Ke(i)&&Dt(r,i),[s,r]}function tS(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>Cv(e,n,a)}}function nS(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let x=a(n,p);if(x==null&&(u||_)){const[,,g]=xm(u||t,p,e,o,l,c);x=a(g,p)}if(Ce(x)||Yn(x)){let g=!1;const M=Sm(t,p,e,x,p,()=>{g=!0});return g?th:M}else return Sn(x)?x:th}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Lt(i.plural)&&(d.pluralIndex=i.plural),d}ox();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const iS="11.1.12";function rS(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(hr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(hr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(hr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(hr().__INTLIFY_PROD_DEVTOOLS__=!1)}const on={UNEXPECTED_RETURN_TYPE:yx,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function mn(t,...e){return Do(t,null,void 0)}const rc=Xi("__translateVNode"),sc=Xi("__datetimeParts"),ac=Xi("__numberParts"),Mm=Xi("__setPluralRules"),ym=Xi("__injectWithOption"),oc=Xi("__dispose");function ta(t){if(!rt(t)||Yn(t))return t;for(const e in t)if(Pn(t,e))if(!e.includes("."))rt(t[e])&&ta(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]==="__proto__")throw new Error(`unsafe key: ${n[a]}`);if(n[a]in r||(r[n[a]]=pt()),!rt(r[n[a]])){s=!0;break}r=r[n[a]]}if(s||(Yn(r)?um.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!Yn(r)){const a=r[n[i]];rt(a)&&ta(a)}}return t}function Cu(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Ke(n)?n:Tt(i)?pt():{[t]:pt()};if(Tt(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||pt(),Qa(c,a[l])):Qa(c,a)}else Ce(o)&&Qa(JSON.parse(o),a)}),r==null&&s)for(const o in a)Pn(a,o)&&ta(a[o]);return a}function Em(t){return t.type}function bm(t,e,n){let i=rt(e.messages)?e.messages:pt();"__i18nGlobal"in n&&(i=Cu(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(rt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(rt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function ih(t){return ct(da,null,t,0)}const rh="__INTLIFY_META__",sh=()=>[],sS=()=>!1;let ah=0;function oh(t){return((e,n,i,r)=>t(n,i,ki()||void 0,r))}const aS=()=>{const t=ki();let e=null;return t&&(e=Em(t)[rh])?{[rh]:e}:null};function Pu(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=vo?Er:hu;let a=it(t.inheritLocale)?t.inheritLocale:!0;const o=s(e&&a?e.locale.value:Ce(t.locale)?t.locale:ea),l=s(e&&a?e.fallbackLocale.value:Ce(t.fallbackLocale)||Tt(t.fallbackLocale)||Ke(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:o.value),c=s(Cu(o.value,t)),u=s(Ke(t.datetimeFormats)?t.datetimeFormats:{[o.value]:{}}),f=s(Ke(t.numberFormats)?t.numberFormats:{[o.value]:{}});let d=e?e.missingWarn:it(t.missingWarn)||is(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:it(t.fallbackWarn)||is(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:it(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,g=xt(t.missing)?t.missing:null,h=xt(t.missing)?oh(t.missing):null,M=xt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:it(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter;const L=e?e.modifiers:Ke(t.modifiers)?t.modifiers:{};let I=t.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&qf(null);const m={version:iS,locale:o.value,fallbackLocale:l.value,messages:c.value,modifiers:L,pluralRules:I,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:E,escapeParameter:v,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};m.datetimeFormats=u.value,m.numberFormats=f.value,m.__datetimeFormatters=Ke(R)?R.__datetimeFormatters:void 0,m.__numberFormatters=Ke(R)?R.__numberFormatters:void 0;const P=Vx(m);return i&&qf(P),P})(),bs(R,o.value,l.value);function w(){return[o.value,l.value,c.value,u.value,f.value]}const T=At({get:()=>o.value,set:m=>{R.locale=m,o.value=m}}),O=At({get:()=>l.value,set:m=>{R.fallbackLocale=m,l.value=m,bs(R,o.value,m)}}),j=At(()=>c.value),Y=At(()=>u.value),se=At(()=>f.value);function ae(){return xt(M)?M:null}function te(m){M=m,R.postTranslation=m}function J(){return g}function X(m){m!==null&&(h=oh(m)),g=m,R.missing=h}const pe=(m,P,H,q,$,Se)=>{w();let fe;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?Hx():void 0),fe=m(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(H!=="translate exists"&&Lt(fe)&&fe===Uo||H==="translate exists"&&!fe){const[Ee,Ae]=P();return e&&_?q(e):$(Ee)}else{if(Se(fe))return fe;throw mn(on.UNEXPECTED_RETURN_TYPE)}};function ve(...m){return pe(P=>Reflect.apply(nh,null,[P,...m]),()=>ic(...m),"translate",P=>Reflect.apply(P.t,P,[...m]),P=>P,P=>Ce(P))}function we(...m){const[P,H,q]=m;if(q&&!rt(q))throw mn(on.INVALID_ARGUMENT);return ve(P,H,Dt({resolvedMessage:!0},q||{}))}function Fe(...m){return pe(P=>Reflect.apply(Kf,null,[P,...m]),()=>tc(...m),"datetime format",P=>Reflect.apply(P.d,P,[...m]),()=>$f,P=>Ce(P)||Tt(P))}function qe(...m){return pe(P=>Reflect.apply(Jf,null,[P,...m]),()=>nc(...m),"number format",P=>Reflect.apply(P.n,P,[...m]),()=>$f,P=>Ce(P)||Tt(P))}function re(m){return m.map(P=>Ce(P)||Lt(P)||it(P)?ih(String(P)):P)}const ye={normalize:re,interpolate:m=>m,type:"vnode"};function z(...m){return pe(P=>{let H;const q=P;try{q.processor=ye,H=Reflect.apply(nh,null,[q,...m])}finally{q.processor=null}return H},()=>ic(...m),"translate",P=>P[rc](...m),P=>[ih(P)],P=>Tt(P))}function ie(...m){return pe(P=>Reflect.apply(Jf,null,[P,...m]),()=>nc(...m),"number format",P=>P[ac](...m),sh,P=>Ce(P)||Tt(P))}function le(...m){return pe(P=>Reflect.apply(Kf,null,[P,...m]),()=>tc(...m),"datetime format",P=>P[sc](...m),sh,P=>Ce(P)||Tt(P))}function oe(m){I=m,R.pluralRules=I}function Oe(m,P){return pe(()=>{if(!m)return!1;const H=Ce(P)?P:o.value,q=S(H),$=R.messageResolver(q,m);return Yn($)||Sn($)||Ce($)},()=>[m],"translate exists",H=>Reflect.apply(H.te,H,[m,P]),sS,H=>it(H))}function D(m){let P=null;const H=fm(R,l.value,o.value);for(let q=0;q<H.length;q++){const $=c.value[H[q]]||{},Se=R.messageResolver($,m);if(Se!=null){P=Se;break}}return P}function U(m){const P=D(m);return P??(e?e.tm(m)||{}:{})}function S(m){return c.value[m]||{}}function ne(m,P){if(r){const H={[m]:P};for(const q in H)Pn(H,q)&&ta(H[q]);P=H[m]}c.value[m]=P,R.messages=c.value}function Z(m,P){c.value[m]=c.value[m]||{};const H={[m]:P};if(r)for(const q in H)Pn(H,q)&&ta(H[q]);P=H[m],Qa(P,c.value[m]),R.messages=c.value}function K(m){return u.value[m]||{}}function b(m,P){u.value[m]=P,R.datetimeFormats=u.value,Zf(R,m,P)}function C(m,P){u.value[m]=Dt(u.value[m]||{},P),R.datetimeFormats=u.value,Zf(R,m,P)}function N(m){return f.value[m]||{}}function B(m,P){f.value[m]=P,R.numberFormats=f.value,Qf(R,m,P)}function he(m,P){f.value[m]=Dt(f.value[m]||{},P),R.numberFormats=f.value,Qf(R,m,P)}ah++,e&&vo&&(di(e.locale,m=>{a&&(o.value=m,R.locale=m,bs(R,o.value,l.value))}),di(e.fallbackLocale,m=>{a&&(l.value=m,R.fallbackLocale=m,bs(R,o.value,l.value))}));const y={id:ah,locale:T,fallbackLocale:O,get inheritLocale(){return a},set inheritLocale(m){a=m,m&&e&&(o.value=e.locale.value,l.value=e.fallbackLocale.value,bs(R,o.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:j,get modifiers(){return L},get pluralRules(){return I||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(m){d=m,R.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(m){p=m,R.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(m){_=m},get fallbackFormat(){return x},set fallbackFormat(m){x=m,R.fallbackFormat=x},get warnHtmlMessage(){return E},set warnHtmlMessage(m){E=m,R.warnHtmlMessage=m},get escapeParameter(){return v},set escapeParameter(m){v=m,R.escapeParameter=m},t:ve,getLocaleMessage:S,setLocaleMessage:ne,mergeLocaleMessage:Z,getPostTranslationHandler:ae,setPostTranslationHandler:te,getMissingHandler:J,setMissingHandler:X,[Mm]:oe};return y.datetimeFormats=Y,y.numberFormats=se,y.rt=we,y.te=Oe,y.tm=U,y.d=Fe,y.n=qe,y.getDateTimeFormat=K,y.setDateTimeFormat=b,y.mergeDateTimeFormat=C,y.getNumberFormat=N,y.setNumberFormat=B,y.mergeNumberFormat=he,y[ym]=n,y[rc]=z,y[sc]=le,y[ac]=ie,y}function oS(t){const e=Ce(t.locale)?t.locale:ea,n=Ce(t.fallbackLocale)||Tt(t.fallbackLocale)||Ke(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=xt(t.missing)?t.missing:void 0,r=it(t.silentTranslationWarn)||is(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=it(t.silentFallbackWarn)||is(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=it(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Ke(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=xt(t.postTranslation)?t.postTranslation:void 0,f=Ce(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=it(t.sync)?t.sync:!0;let _=t.messages;if(Ke(t.sharedMessages)){const L=t.sharedMessages;_=Object.keys(L).reduce((R,F)=>{const w=R[F]||(R[F]={});return Dt(w,L[F]),R},_||{})}const{__i18n:x,__root:g,__injectWithOption:h}=t,M=t.datetimeFormats,E=t.numberFormats,v=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:v,datetimeFormats:M,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:g,__injectWithOption:h}}function lc(t={}){const e=Pu(oS(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return it(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=it(r)?!r:r},get silentFallbackWarn(){return it(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=it(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function lS(t,e,n){return{beforeCreate(){const i=ki();if(!i)throw mn(on.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=lh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=lc(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=lh(t,r);else{this.$i18n=lc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&bm(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=ki();if(!i)throw mn(on.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function lh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Mm](e.pluralizationRules||t.pluralizationRules);const n=Cu(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Lu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function cS({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===en?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},pt())}function Tm(){return en}const uS=tn({name:"i18n-t",props:Dt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Lt(t)||!isNaN(t)}},Lu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||qi({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),a=pt();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Ce(t.plural)?+t.plural:t.plural);const o=cS(e,s),l=r[rc](t.keypath,o,a),c=Dt(pt(),i),u=Ce(t.tag)||rt(t.tag)?t.tag:Tm();return Po(u,c,l)}}}),ch=uS;function fS(t){return Tt(t)&&!Ce(t[0])}function wm(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o=pt();t.locale&&(a.locale=t.locale),Ce(t.format)?a.key=t.format:rt(t.format)&&(Ce(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((d,p)=>n.includes(p)?Dt(pt(),d,{[p]:t.format[p]}):d,pt()));const l=i(t.value,a,o);let c=[a.key];Tt(l)?c=l.map((d,p)=>{const _=r[d.type],x=_?_({[d.type]:d.value,index:p,parts:l}):[d.value];return fS(x)&&(x[0].key=`${d.type}-${p}`),x}):Ce(l)&&(c=[l]);const u=Dt(pt(),s),f=Ce(t.tag)||rt(t.tag)?t.tag:Tm();return Po(f,u,c)}}const hS=tn({name:"i18n-n",props:Dt({value:{type:Number,required:!0},format:{type:[String,Object]}},Lu),setup(t,e){const n=t.i18n||qi({useScope:t.scope,__useComponent:!0});return wm(t,e,vm,(...i)=>n[ac](...i))}}),uh=hS;function dS(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function pS(t){const e=a=>{const{instance:o,value:l}=a;if(!o||!o.$)throw mn(on.UNEXPECTED_ERROR);const c=dS(t,o.$),u=fh(l);return[Reflect.apply(c.t,c,[...hh(u)]),c]};return{created:(a,o)=>{const[l,c]=e(o);vo&&t.global===c&&(a.__i18nWatcher=di(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{vo&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=fh(o);a.textContent=Reflect.apply(l.t,l,[...hh(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function fh(t){if(Ce(t))return{path:t};if(Ke(t)){if(!("path"in t))throw mn(on.REQUIRED_VALUE,"path");return t}else throw mn(on.INVALID_VALUE)}function hh(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Ce(n)&&(a.locale=n),Lt(r)&&(a.plural=r),Lt(s)&&(a.plural=s),[e,o,a]}function mS(t,e,...n){const i=Ke(n[0])?n[0]:{};(it(i.globalInstall)?i.globalInstall:!0)&&([ch.name,"I18nT"].forEach(s=>t.component(s,ch)),[uh.name,"I18nN"].forEach(s=>t.component(s,uh)),[ph.name,"I18nD"].forEach(s=>t.component(s,ph))),t.directive("t",pS(e))}const gS=Xi("global-vue-i18n");function _S(t={}){const e=__VUE_I18N_LEGACY_API__&&it(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=it(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=vS(t,e),a=Xi("");function o(f){return i.get(f)||null}function l(f,d){i.set(f,d)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=a,f.provide(f.__VUE_I18N_SYMBOL__,u),Ke(d[0])){const x=d[0];u.__composerExtend=x.__composerExtend,u.__vueI18nExtend=x.__vueI18nExtend}let p=null;!e&&n&&(p=wS(f,u.global)),__VUE_I18N_FULL_INSTALL__&&mS(f,u,...d),__VUE_I18N_LEGACY_API__&&e&&f.mixin(lS(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:o,__setInstance:l,__deleteInstance:c};return u}function qi(t={}){const e=ki();if(e==null)throw mn(on.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw mn(on.NOT_INSTALLED);const n=xS(e),i=MS(n),r=Em(e),s=SS(t,r);if(s==="global")return bm(i,t,r),i;if(s==="parent"){let l=yS(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Dt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=Pu(l),a.__composerExtend&&(o[oc]=a.__composerExtend(o)),bS(a,e,o),a.__setInstance(e,o)}return o}function vS(t,e){const n=iu(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>lc(t)):n.run(()=>Pu(t));if(i==null)throw mn(on.UNEXPECTED_ERROR);return[n,i]}function xS(t){const e=Un(t.isCE?gS:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw mn(t.isCE?on.NOT_INSTALLED_WITH_PROVIDE:on.UNEXPECTED_ERROR);return e}function SS(t,e){return Io(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function MS(t){return t.mode==="composition"?t.global:t.global.__composer}function yS(t,e,n=!1){let i=null;const r=e.root;let s=ES(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[ym]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function ES(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function bS(t,e,n){ps(()=>{},e),ms(()=>{const i=n;t.__deleteInstance(e);const r=i[oc];r&&(r(),delete i[oc])},e)}const TS=["locale","fallbackLocale","availableLocales"],dh=["t","rt","d","n","tm","te"];function wS(t,e){const n=Object.create(null);return TS.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw mn(on.UNEXPECTED_ERROR);const a=Rt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,dh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw mn(on.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,dh.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const AS=tn({name:"i18n-d",props:Dt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Lu),setup(t,e){const n=t.i18n||qi({useScope:t.scope,__useComponent:!0});return wm(t,e,_m,(...i)=>n[sc](...i))}}),ph=AS;rS();Fx(_x);Ox(Dx);Bx(fm);if(__INTLIFY_PROD_DEVTOOLS__){const t=hr();t.__INTLIFY__=!0,vx(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}function RS(t){return t!==null}const Am=em("lang",()=>{const{locale:t}=qi({useScope:"global"}),e=localStorage.getItem("lang");RS(e)&&(t.value=e),vu(()=>localStorage.setItem("lang",t.value));const n=()=>{switch(t.value){case or.EnUS:t.value=or.ZhTW;break;case or.ZhTW:t.value=or.EnUS;break}},i=At(()=>t.value===or.EnUS),r=At(()=>t.value===or.ZhTW);return{locale:t,switchLang:n,isEnUS:i,isZhTW:r}}),CS=tn({name:"global-sidebar",components:{AHoverable:Yp,SwitchBtn:qp},props:{toggled:{type:Boolean,default:!1},toggleSidebar:{type:Function,default:()=>{}}},setup(){const t=ma(),e=Am(),{t:n}=qi();return{icons:jp,themeStore:t,langStore:e,t:n}}}),PS={class:"relative flex row j-around nly w-160 h-50 pt-24 mt-32 mr-10 ml-10 top-line"};function LS(t,e,n,i,r,s){const a=Zr("AHoverable"),o=Zr("SwitchBtn");return wt(),It(en,null,[yt("aside",{class:Fi(["absolute r--200 flex flex-col t-0 w-180 h-full pt-50 pr-10 pl-10 bg-glassy tr-100 z-99",{"sm:r-0":t.toggled}])},[ct(a,{to:"home",imgSrc:t.icons.home,text:t.t("home"),shape:"pill"},null,8,["imgSrc","text"]),ct(a,{to:"works",imgSrc:t.icons.list,text:t.t("work"),shape:"pill"},null,8,["imgSrc","text"]),ct(a,{to:"blogs",imgSrc:t.icons.list,text:t.t("blog"),shape:"pill"},null,8,["imgSrc","text"]),yt("div",PS,[ct(o,{onSwitch:t.themeStore.switchTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["onSwitch","isActive","imgSrcL","imgSrcR"]),ct(o,{onSwitch:t.langStore.switchLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["onSwitch","isActive"])])],2),yt("div",{class:Fi(["bg-dark fixed t-0 l-0 w-dvw h-dvh o-0 z--0 tr-100",{"sm:o-1 sm:z-98":t.toggled}]),onClick:e[0]||(e[0]=l=>t.toggleSidebar())},null,2)],64)}const IS=Wi(CS,[["render",LS]]),DS=tn({name:"global-header",components:{AHoverable:Yp,SwitchBtn:qp,GlobalSidebar:IS},setup(){const t=ma(),e=Am(),{t:n}=qi(),i=Er(!1);function r(){i.value=!i.value}const s=()=>{window.innerWidth>640&&(i.value=!1)};return ps(()=>window.addEventListener("resize",s)),ms(()=>window.removeEventListener("resize",s)),{icons:jp,themeStore:t,langStore:e,t:n,toggled:i,toggleSidebar:r}}}),US={class:"fixed flex row a-center j-between t-0 l-0 w-dvw h-50 font-size-16 z-100"},NS={class:"flex row j-around w-400 ml-70 sm:none"},FS={class:"flex row a-center j-around w-116 pr-16 sm:none"},OS=["src"],BS=["src"];function kS(t,e,n,i,r,s){const a=Zr("AHoverable"),o=Zr("SwitchBtn"),l=Zr("GlobalSidebar");return wt(),It(en,null,[yt("header",US,[e[1]||(e[1]=yt("h1",{class:"absolute l-0 w-38 ml-16 mr-16 mt-auto mb-auto font-size-36 italic user-select-none"},"Pc",-1)),yt("nav",NS,[ct(a,{to:"home",effect:"underline-m",text:t.t("home")},null,8,["text"]),ct(a,{to:"works",effect:"underline-m",text:t.t("work")},null,8,["text"]),ct(a,{to:"blogs",effect:"underline-m",text:t.t("blog")},null,8,["text"])]),yt("aside",FS,[ct(o,{onSwitch:t.themeStore.switchTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["onSwitch","isActive","imgSrcL","imgSrcR"]),ct(o,{onSwitch:t.langStore.switchLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["onSwitch","isActive"])]),yt("button",{class:"none relative w-50 h-50 bg-none border-none pointer sm:block sm:ml-auto",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?Li("",!0):(wt(),It("img",{key:0,src:t.icons.menuBurger,alt:"menu"},null,8,OS)),t.toggled?(wt(),It("img",{key:1,src:t.icons.crossSmall,alt:"close"},null,8,BS)):Li("",!0)])]),ct(l,{toggled:t.toggled,toggleSidebar:t.toggleSidebar},null,8,["toggled","toggleSidebar"])],64)}const zS=Wi(DS,[["render",kS]]),HS=tn({__name:"App",setup(t){const e=ma();return vu(()=>document.body.style.setProperty("--theme",e.theme)),(n,i)=>{const r=Zr("router-view");return wt(),It(en,null,[ct(zS),ct(r)],64)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Xr=typeof document<"u";function Rm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function VS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Rm(t.default)}const at=Object.assign;function rl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Fn(r)?r.map(t):t(r)}return n}const Gs=()=>{},Fn=Array.isArray,Cm=/#/g,GS=/&/g,WS=/\//g,XS=/=/g,$S=/\?/g,Pm=/\+/g,YS=/%5B/g,qS=/%5D/g,Lm=/%5E/g,jS=/%60/g,Im=/%7B/g,KS=/%7C/g,Dm=/%7D/g,ZS=/%20/g;function Iu(t){return encodeURI(""+t).replace(KS,"|").replace(YS,"[").replace(qS,"]")}function JS(t){return Iu(t).replace(Im,"{").replace(Dm,"}").replace(Lm,"^")}function cc(t){return Iu(t).replace(Pm,"%2B").replace(ZS,"+").replace(Cm,"%23").replace(GS,"%26").replace(jS,"`").replace(Im,"{").replace(Dm,"}").replace(Lm,"^")}function QS(t){return cc(t).replace(XS,"%3D")}function eM(t){return Iu(t).replace(Cm,"%23").replace($S,"%3F")}function tM(t){return t==null?"":eM(t).replace(WS,"%2F")}function na(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const nM=/\/$/,iM=t=>t.replace(nM,"");function sl(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=oM(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:na(a)}}function rM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function mh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sM(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&ss(e.matched[i],n.matched[r])&&Um(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Um(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!aM(t[n],e[n]))return!1;return!0}function aM(t,e){return Fn(t)?gh(t,e):Fn(e)?gh(e,t):t===e}function gh(t,e){return Fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function oM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const vi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ia;(function(t){t.pop="pop",t.push="push"})(ia||(ia={}));var Ws;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ws||(Ws={}));function lM(t){if(!t)if(Xr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iM(t)}const cM=/^[^#]+#/;function uM(t,e){return t.replace(cM,"#")+e}function fM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const No=()=>({left:window.scrollX,top:window.scrollY});function hM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=fM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function _h(t,e){return(history.state?history.state.position-e:-1)+t}const uc=new Map;function dM(t,e){uc.set(t,e)}function pM(t){const e=uc.get(t);return uc.delete(t),e}let mM=()=>location.protocol+"//"+location.host;function Nm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),mh(l,"")}return mh(n,t)+i+r}function gM(t,e,n,i){let r=[],s=[],a=null;const o=({state:d})=>{const p=Nm(t,location),_=n.value,x=e.value;let g=0;if(d){if(n.value=p,e.value=d,a&&a===_){a=null;return}g=x?d.position-x.position:0}else i(p);r.forEach(h=>{h(n.value,_,{delta:g,type:ia.pop,direction:g?g>0?Ws.forward:Ws.back:Ws.unknown})})};function l(){a=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(at({},d.state,{scroll:No()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function vh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?No():null}}function _M(t){const{history:e,location:n}=window,i={value:Nm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:mM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function a(l,c){const u=at({},e.state,vh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=at({},r.value,e.state,{forward:l,scroll:No()});s(u.current,u,!0);const f=at({},vh(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function vM(t){t=lM(t);const e=_M(t),n=gM(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=at({location:"",base:t,go:i,createHref:uM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function xM(t){return typeof t=="string"||t&&typeof t=="object"}function Fm(t){return typeof t=="string"||typeof t=="symbol"}const Om=Symbol("");var xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xh||(xh={}));function as(t,e){return at(new Error,{type:t,[Om]:!0},e)}function ei(t,e){return t instanceof Error&&Om in t&&(e==null||!!(t.type&e))}const Sh="[^/]+?",SM={sensitive:!1,strict:!1,start:!0,end:!0},MM=/[.+*?^${}()[\]/\\]/g;function yM(t,e){const n=at({},SM,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(MM,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:x,optional:g,regexp:h}=d;s.push({name:_,repeatable:x,optional:g});const M=h||Sh;if(M!==Sh){p+=10;try{new RegExp(`(${M})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${M}): `+v.message)}}let E=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(E=g&&c.length<2?`(?:/${E})`:"/"+E),g&&(E+="?"),r+=E,p+=20,g&&(p+=-8),x&&(p+=-20),M===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=s[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:x,optional:g}=p,h=_ in c?c[_]:"";if(Fn(h)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const M=Fn(h)?h.join("/"):h;if(!M)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function EM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Bm(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=EM(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Mh(i))return 1;if(Mh(r))return-1}return r.length-i.length}function Mh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bM={type:0,value:""},TM=/[a-zA-Z0-9_]/;function wM(t){if(!t)return[[]];if(t==="/")return[[bM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:TM.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function AM(t,e,n){const i=yM(wM(t.path),n),r=at(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function RM(t,e){const n=[],i=new Map;e=Th({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const _=!p,x=Eh(f);x.aliasOf=p&&p.record;const g=Th(e,f),h=[x];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of v)h.push(Eh(at({},x,{components:p?p.record.components:x.components,path:L,aliasOf:p?p.record:x})))}let M,E;for(const v of h){const{path:L}=v;if(d&&L[0]!=="/"){const I=d.record.path,R=I[I.length-1]==="/"?"":"/";v.path=d.record.path+(L&&R+L)}if(M=AM(v,d,g),p?p.alias.push(M):(E=E||M,E!==M&&E.alias.push(M),_&&f.name&&!bh(M)&&a(f.name)),km(M)&&l(M),x.children){const I=x.children;for(let R=0;R<I.length;R++)s(I[R],M,p&&p.children[R])}p=p||M}return E?()=>{a(E)}:Gs}function a(f){if(Fm(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const d=LM(f,n);n.splice(d,0,f),f.record.name&&!bh(f)&&i.set(f.record.name,f)}function c(f,d){let p,_={},x,g;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw as(1,{location:f});g=p.record.name,_=at(yh(d.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&yh(f.params,p.keys.map(E=>E.name))),x=p.stringify(_)}else if(f.path!=null)x=f.path,p=n.find(E=>E.re.test(x)),p&&(_=p.parse(x),g=p.record.name);else{if(p=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw as(1,{location:f,currentLocation:d});g=p.record.name,_=at({},d.params,f.params),x=p.stringify(_)}const h=[];let M=p;for(;M;)h.unshift(M.record),M=M.parent;return{name:g,path:x,params:_,matched:h,meta:PM(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function yh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Eh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:CM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function CM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function bh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PM(t){return t.reduce((e,n)=>at(e,n.meta),{})}function Th(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function LM(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Bm(t,e[s])<0?i=s:n=s+1}const r=IM(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function IM(t){let e=t;for(;e=e.parent;)if(km(e)&&Bm(t,e)===0)return e}function km({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function DM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Pm," "),a=s.indexOf("="),o=na(a<0?s:s.slice(0,a)),l=a<0?null:na(s.slice(a+1));if(o in e){let c=e[o];Fn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function wh(t){let e="";for(let n in t){const i=t[n];if(n=QS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Fn(i)?i.map(s=>s&&cc(s)):[i&&cc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function UM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const NM=Symbol(""),Ah=Symbol(""),Du=Symbol(""),zm=Symbol(""),fc=Symbol("");function Ts(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ri(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(as(4,{from:n,to:e})):d instanceof Error?l(d):xM(d)?l(as(2,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function al(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Rm(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Ri(u,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=VS(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&Ri(p,n,i,a,o,r)()}))}}return s}function Rh(t){const e=Un(Du),n=Un(zm),i=At(()=>{const l=gr(t.to);return e.resolve(l)}),r=At(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(ss.bind(null,u));if(d>-1)return d;const p=Ch(l[c-2]);return c>1&&Ch(u)===p&&f[f.length-1].path!==p?f.findIndex(ss.bind(null,l[c-2])):d}),s=At(()=>r.value>-1&&zM(n.params,i.value.params)),a=At(()=>r.value>-1&&r.value===n.matched.length-1&&Um(n.params,i.value.params));function o(l={}){if(kM(l)){const c=e[gr(t.replace)?"replace":"push"](gr(t.to)).catch(Gs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:At(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function FM(t){return t.length===1?t[0]:t}const OM=tn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rh,setup(t,{slots:e}){const n=fa(Rh(t)),{options:i}=Un(Du),r=At(()=>({[Ph(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ph(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&FM(e.default(n));return t.custom?s:Po("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),BM=OM;function kM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Fn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Ch(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ph=(t,e,n)=>t??e??n,HM=tn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Un(fc),r=At(()=>t.route||i.value),s=Un(Ah,0),a=At(()=>{let c=gr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=At(()=>r.value.matched[a.value]);Ka(Ah,At(()=>a.value+1)),Ka(NM,o),Ka(fc,r);const l=Er();return di(()=>[l.value,o.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ss(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,d=f&&f.components[u];if(!d)return Lh(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Po(d,at({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Lh(n.default,{Component:g,route:c})||g}}});function Lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const VM=HM;function GM(t){const e=RM(t.routes,t),n=t.parseQuery||DM,i=t.stringifyQuery||wh,r=t.history,s=Ts(),a=Ts(),o=Ts(),l=hu(vi);let c=vi;Xr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rl.bind(null,z=>""+z),f=rl.bind(null,tM),d=rl.bind(null,na);function p(z,ie){let le,oe;return Fm(z)?(le=e.getRecordMatcher(z),oe=ie):oe=z,e.addRoute(oe,le)}function _(z){const ie=e.getRecordMatcher(z);ie&&e.removeRoute(ie)}function x(){return e.getRoutes().map(z=>z.record)}function g(z){return!!e.getRecordMatcher(z)}function h(z,ie){if(ie=at({},ie||l.value),typeof z=="string"){const S=sl(n,z,ie.path),ne=e.resolve({path:S.path},ie),Z=r.createHref(S.fullPath);return at(S,ne,{params:d(ne.params),hash:na(S.hash),redirectedFrom:void 0,href:Z})}let le;if(z.path!=null)le=at({},z,{path:sl(n,z.path,ie.path).path});else{const S=at({},z.params);for(const ne in S)S[ne]==null&&delete S[ne];le=at({},z,{params:f(S)}),ie.params=f(ie.params)}const oe=e.resolve(le,ie),Oe=z.hash||"";oe.params=u(d(oe.params));const D=rM(i,at({},z,{hash:JS(Oe),path:oe.path})),U=r.createHref(D);return at({fullPath:D,hash:Oe,query:i===wh?UM(z.query):z.query||{}},oe,{redirectedFrom:void 0,href:U})}function M(z){return typeof z=="string"?sl(n,z,l.value.path):at({},z)}function E(z,ie){if(c!==z)return as(8,{from:ie,to:z})}function v(z){return R(z)}function L(z){return v(at(M(z),{replace:!0}))}function I(z){const ie=z.matched[z.matched.length-1];if(ie&&ie.redirect){const{redirect:le}=ie;let oe=typeof le=="function"?le(z):le;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=M(oe):{path:oe},oe.params={}),at({query:z.query,hash:z.hash,params:oe.path!=null?{}:z.params},oe)}}function R(z,ie){const le=c=h(z),oe=l.value,Oe=z.state,D=z.force,U=z.replace===!0,S=I(le);if(S)return R(at(M(S),{state:typeof S=="object"?at({},Oe,S.state):Oe,force:D,replace:U}),ie||le);const ne=le;ne.redirectedFrom=ie;let Z;return!D&&sM(i,oe,le)&&(Z=as(16,{to:ne,from:oe}),we(oe,oe,!0,!1)),(Z?Promise.resolve(Z):T(ne,oe)).catch(K=>ei(K)?ei(K,2)?K:ve(K):X(K,ne,oe)).then(K=>{if(K){if(ei(K,2))return R(at({replace:U},M(K.to),{state:typeof K.to=="object"?at({},Oe,K.to.state):Oe,force:D}),ie||ne)}else K=j(ne,oe,!0,U,Oe);return O(ne,oe,K),K})}function F(z,ie){const le=E(z,ie);return le?Promise.reject(le):Promise.resolve()}function w(z){const ie=re.values().next().value;return ie&&typeof ie.runWithContext=="function"?ie.runWithContext(z):z()}function T(z,ie){let le;const[oe,Oe,D]=WM(z,ie);le=al(oe.reverse(),"beforeRouteLeave",z,ie);for(const S of oe)S.leaveGuards.forEach(ne=>{le.push(Ri(ne,z,ie))});const U=F.bind(null,z,ie);return le.push(U),ye(le).then(()=>{le=[];for(const S of s.list())le.push(Ri(S,z,ie));return le.push(U),ye(le)}).then(()=>{le=al(Oe,"beforeRouteUpdate",z,ie);for(const S of Oe)S.updateGuards.forEach(ne=>{le.push(Ri(ne,z,ie))});return le.push(U),ye(le)}).then(()=>{le=[];for(const S of D)if(S.beforeEnter)if(Fn(S.beforeEnter))for(const ne of S.beforeEnter)le.push(Ri(ne,z,ie));else le.push(Ri(S.beforeEnter,z,ie));return le.push(U),ye(le)}).then(()=>(z.matched.forEach(S=>S.enterCallbacks={}),le=al(D,"beforeRouteEnter",z,ie,w),le.push(U),ye(le))).then(()=>{le=[];for(const S of a.list())le.push(Ri(S,z,ie));return le.push(U),ye(le)}).catch(S=>ei(S,8)?S:Promise.reject(S))}function O(z,ie,le){o.list().forEach(oe=>w(()=>oe(z,ie,le)))}function j(z,ie,le,oe,Oe){const D=E(z,ie);if(D)return D;const U=ie===vi,S=Xr?history.state:{};le&&(oe||U?r.replace(z.fullPath,at({scroll:U&&S&&S.scroll},Oe)):r.push(z.fullPath,Oe)),l.value=z,we(z,ie,le,U),ve()}let Y;function se(){Y||(Y=r.listen((z,ie,le)=>{if(!_e.listening)return;const oe=h(z),Oe=I(oe);if(Oe){R(at(Oe,{replace:!0,force:!0}),oe).catch(Gs);return}c=oe;const D=l.value;Xr&&dM(_h(D.fullPath,le.delta),No()),T(oe,D).catch(U=>ei(U,12)?U:ei(U,2)?(R(at(M(U.to),{force:!0}),oe).then(S=>{ei(S,20)&&!le.delta&&le.type===ia.pop&&r.go(-1,!1)}).catch(Gs),Promise.reject()):(le.delta&&r.go(-le.delta,!1),X(U,oe,D))).then(U=>{U=U||j(oe,D,!1),U&&(le.delta&&!ei(U,8)?r.go(-le.delta,!1):le.type===ia.pop&&ei(U,20)&&r.go(-1,!1)),O(oe,D,U)}).catch(Gs)}))}let ae=Ts(),te=Ts(),J;function X(z,ie,le){ve(z);const oe=te.list();return oe.length?oe.forEach(Oe=>Oe(z,ie,le)):console.error(z),Promise.reject(z)}function pe(){return J&&l.value!==vi?Promise.resolve():new Promise((z,ie)=>{ae.add([z,ie])})}function ve(z){return J||(J=!z,se(),ae.list().forEach(([ie,le])=>z?le(z):ie()),ae.reset()),z}function we(z,ie,le,oe){const{scrollBehavior:Oe}=t;if(!Xr||!Oe)return Promise.resolve();const D=!le&&pM(_h(z.fullPath,0))||(oe||!le)&&history.state&&history.state.scroll||null;return du().then(()=>Oe(z,ie,D)).then(U=>U&&hM(U)).catch(U=>X(U,z,ie))}const Fe=z=>r.go(z);let qe;const re=new Set,_e={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:x,resolve:h,options:t,push:v,replace:L,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:pe,install(z){const ie=this;z.component("RouterLink",BM),z.component("RouterView",VM),z.config.globalProperties.$router=ie,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>gr(l)}),Xr&&!qe&&l.value===vi&&(qe=!0,v(r.location).catch(Oe=>{}));const le={};for(const Oe in vi)Object.defineProperty(le,Oe,{get:()=>l.value[Oe],enumerable:!0});z.provide(Du,ie),z.provide(zm,fp(le)),z.provide(fc,l);const oe=z.unmount;re.add(z),z.unmount=function(){re.delete(z),re.size<1&&(c=vi,Y&&Y(),Y=null,l.value=vi,qe=!1,J=!1),oe()}}};function ye(z){return z.reduce((ie,le)=>ie.then(()=>w(le)),Promise.resolve())}return _e}function WM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>ss(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>ss(c,l))||r.push(l))}return[n,i,r]}const XM=tn({name:"animated-txt",props:{text:{type:String,default:""},duration:{type:Number,default:0},delay:{type:Number,default:0},stagger:{type:Number,default:0}},setup(t,{expose:e}){const n=At(()=>{const a=t.text.split("");a[0]=a[0].toUpperCase();for(let o=0;o<t.text.length;o++)(a[o+1]===" "||a[o+1]==="'"||a[o-1]===""&&a[o]==="i")&&(a[o]=a[o].toUpperCase());return a}),i=Er([]);function r(a,o){a instanceof HTMLElement?i.value[o]=a:i.value[o]=null}function s(){setTimeout(()=>{i.value.forEach((a,o)=>{a?.animate([{opacity:0},{opacity:1}],{duration:t.duration,delay:o*t.stagger,fill:"both"})})},t.delay)}return ps(()=>s()),di(n,()=>{i.value=[],s()}),e(),{chars:n,setCharRef:r}}});function $M(t,e,n,i,r,s){return wt(),It("div",null,[(wt(!0),It(en,null,N_(t.chars,(a,o)=>(wt(),It("span",{class:"o-0",key:o,ref_for:!0,ref:l=>t.setCharRef(l,o)},ts(a),1))),128))])}const ol=Wi(XM,[["render",$M]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uu="177",YM=0,Ih=1,qM=2,Hm=1,Vm=2,ai=3,zi=0,an=1,ci=2,Ui=0,Jr=1,Dh=2,Uh=3,Nh=4,jM=5,ur=100,KM=101,ZM=102,JM=103,QM=104,ey=200,ty=201,ny=202,iy=203,hc=204,dc=205,ry=206,sy=207,ay=208,oy=209,ly=210,cy=211,uy=212,fy=213,hy=214,pc=0,mc=1,gc=2,os=3,_c=4,vc=5,xc=6,Sc=7,Fo=0,dy=1,py=2,Ni=0,my=1,gy=2,_y=3,vy=4,xy=5,Sy=6,My=7,Gm=300,ls=301,cs=302,Mc=303,yc=304,Oo=306,ra=1e3,dr=1001,Ec=1002,pn=1003,yy=1004,Aa=1005,Wn=1006,ll=1007,pr=1008,Kn=1009,Wm=1010,Xm=1011,sa=1012,Nu=1013,xr=1014,Xn=1015,ga=1016,Fu=1017,Ou=1018,aa=1020,$m=35902,Ym=1021,qm=1022,Ln=1023,oa=1026,la=1027,Bu=1028,ku=1029,jm=1030,zu=1031,Hu=1033,eo=33776,to=33777,no=33778,io=33779,bc=35840,Tc=35841,wc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Lc=37808,Ic=37809,Dc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Hc=37818,Vc=37819,Gc=37820,Wc=37821,ro=36492,Xc=36494,$c=36495,Km=36283,Yc=36284,qc=36285,jc=36286,Ey=3200,by=3201,Vu=0,Ty=1,Pi="",xn="srgb",us="srgb-linear",xo="linear",ht="srgb",Rr=7680,Fh=519,wy=512,Ay=513,Ry=514,Zm=515,Cy=516,Py=517,Ly=518,Iy=519,Oh=35044,Bh="300 es",hi=2e3,So=2001;class gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kh=1234567;const Xs=Math.PI/180,fs=180/Math.PI;function _s(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function Gu(t,e){return(t%e+e)%e}function Dy(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Uy(t,e,n){return t!==e?(n-t)/(e-t):0}function $s(t,e,n){return(1-n)*t+n*e}function Ny(t,e,n,i){return $s(t,e,1-Math.exp(-n*i))}function Fy(t,e=1){return e-Math.abs(Gu(t,e*2)-e)}function Oy(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function By(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ky(t,e){return t+Math.floor(Math.random()*(e-t+1))}function zy(t,e){return t+Math.random()*(e-t)}function Hy(t){return t*(.5-Math.random())}function Vy(t){t!==void 0&&(kh=t);let e=kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gy(t){return t*Xs}function Wy(t){return t*fs}function Xy(t){return(t&t-1)===0&&t!==0}function $y(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Yy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function qy(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:Xs,RAD2DEG:fs,generateUUID:_s,clamp:Ze,euclideanModulo:Gu,mapLinear:Dy,inverseLerp:Uy,lerp:$s,damp:Ny,pingpong:Fy,smoothstep:Oy,smootherstep:By,randInt:ky,randFloat:zy,randFloatSpread:Hy,seededRandom:Vy,degToRad:Gy,radToDeg:Wy,isPowerOfTwo:Xy,ceilPowerOfTwo:$y,floorPowerOfTwo:Yy,setQuaternionFromProperEuler:qy,normalize:Zt,denormalize:$r};class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let g=1-o;const h=l*d+c*p+u*_+f*x,M=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),I=Math.atan2(L,h*M);g=Math.sin(g*I)/L,o=Math.sin(o*I)/L}const v=o*M;if(l=l*g+d*v,c=c*g+p*v,u=u*g+_*v,f=f*g+x*v,g===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-o*p,e[n+2]=c*_+u*p+o*d-l*f,e[n+3]=u*_-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new W,zh=new _a;class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],g=r[3],h=r[6],M=r[1],E=r[4],v=r[7],L=r[2],I=r[5],R=r[8];return s[0]=a*x+o*M+l*L,s[3]=a*g+o*E+l*I,s[6]=a*h+o*v+l*R,s[1]=c*x+u*M+f*L,s[4]=c*g+u*E+f*I,s[7]=c*h+u*v+f*R,s[2]=d*x+p*M+_*L,s[5]=d*g+p*E+_*I,s[8]=d*h+p*v+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,p=c*s-a*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(ul.makeScale(e,n)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,n){return this.premultiply(ul.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ul=new $e;function Jm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function jy(){const t=ca("canvas");return t.style.display="block",t}const Hh={};function Qr(t){t in Hh||(Hh[t]=!0,console.warn(t))}function Ky(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Zy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Jy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Vh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qy(){const t={enabled:!0,workingColorSpace:us,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[us]:{primaries:e,whitePoint:i,transfer:xo,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),t}const nt=Qy();function pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class eE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cr===void 0&&(Cr=ca("canvas")),Cr.width=e.width,Cr.height=e.height;const r=Cr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Cr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pi(n[i]/255)*255):n[i]=pi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tE=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=_s(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fl(r[a].image)):s.push(fl(r[a]))}else s=fl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function fl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nE=0;const hl=new W;class Yt extends gs{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=dr,r=dr,s=Wn,a=pr,o=Ln,l=Kn,c=Yt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=_s(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Gm;Yt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,v=(p+1)/2,L=(h+1)/2,I=(u+d)/4,R=(f+x)/4,F=(_+g)/4;return E>v&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=I/i,s=R/i):v>L?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=I/r,s=F/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=F/s),this.set(i,r,s,n),this}let M=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-_)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iE extends gs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Yt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Wu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends iE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qm extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rE extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(s,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),Ca.subVectors(this.max,ws),Pr.subVectors(e.a,ws),Lr.subVectors(e.b,ws),Ir.subVectors(e.c,ws),xi.subVectors(Lr,Pr),Si.subVectors(Ir,Lr),er.subVectors(Pr,Ir);let n=[0,-xi.z,xi.y,0,-Si.z,Si.y,0,-er.z,er.y,xi.z,0,-xi.x,Si.z,0,-Si.x,er.z,0,-er.x,-xi.y,xi.x,0,-Si.y,Si.x,0,-er.y,er.x,0];return!dl(n,Pr,Lr,Ir,Ca)||(n=[1,0,0,0,1,0,0,0,1],!dl(n,Pr,Lr,Ir,Ca))?!1:(Pa.crossVectors(xi,Si),n=[Pa.x,Pa.y,Pa.z],dl(n,Pr,Lr,Ir,Ca))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new W,new W,new W,new W,new W,new W,new W,new W],Tn=new W,Ra=new br,Pr=new W,Lr=new W,Ir=new W,xi=new W,Si=new W,er=new W,ws=new W,Ca=new W,Pa=new W,tr=new W;function dl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);const o=r.x*Math.abs(tr.x)+r.y*Math.abs(tr.y)+r.z*Math.abs(tr.z),l=e.dot(tr),c=n.dot(tr),u=i.dot(tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const sE=new br,As=new W,pl=new W;class va{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const n=As.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(pl)),this.expandByPoint(As.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ni=new W,ml=new W,La=new W,Mi=new W,gl=new W,Ia=new W,_l=new W;class eg{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ml.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),Mi.copy(this.origin).sub(ml);const s=e.distanceTo(n)*.5,a=-this.direction.dot(La),o=Mi.dot(this.direction),l=-Mi.dot(La),c=Mi.lengthSq(),u=Math.abs(1-a*a);let f,d,p,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ml).addScaledVector(La,d),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){gl.subVectors(n,e),Ia.subVectors(i,e),_l.crossVectors(gl,Ia);let a=this.direction.dot(_l),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);const l=o*this.direction.dot(Ia.crossVectors(Mi,Ia));if(l<0)return null;const c=o*this.direction.dot(gl.cross(Mi));if(c<0||l+c>a)return null;const u=-o*Mi.dot(_l);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,a,o,l,c,u,f,d,p,_,x,g){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,p,_,x,g)}set(e,n,i,r,s,a,o,l,c,u,f,d,p,_,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,_=o*u,x=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=x-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,_=o*u,x=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aE,e,oE)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),yi.crossVectors(i,cn),yi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),yi.crossVectors(i,cn)),yi.normalize(),Da.crossVectors(cn,yi),r[0]=yi.x,r[4]=Da.x,r[8]=cn.x,r[1]=yi.y,r[5]=Da.y,r[9]=cn.y,r[2]=yi.z,r[6]=Da.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],g=i[10],h=i[14],M=i[3],E=i[7],v=i[11],L=i[15],I=r[0],R=r[4],F=r[8],w=r[12],T=r[1],O=r[5],j=r[9],Y=r[13],se=r[2],ae=r[6],te=r[10],J=r[14],X=r[3],pe=r[7],ve=r[11],we=r[15];return s[0]=a*I+o*T+l*se+c*X,s[4]=a*R+o*O+l*ae+c*pe,s[8]=a*F+o*j+l*te+c*ve,s[12]=a*w+o*Y+l*J+c*we,s[1]=u*I+f*T+d*se+p*X,s[5]=u*R+f*O+d*ae+p*pe,s[9]=u*F+f*j+d*te+p*ve,s[13]=u*w+f*Y+d*J+p*we,s[2]=_*I+x*T+g*se+h*X,s[6]=_*R+x*O+g*ae+h*pe,s[10]=_*F+x*j+g*te+h*ve,s[14]=_*w+x*Y+g*J+h*we,s[3]=M*I+E*T+v*se+L*X,s[7]=M*R+E*O+v*ae+L*pe,s[11]=M*F+E*j+v*te+L*ve,s[15]=M*w+E*Y+v*J+L*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*p-i*l*p)+x*(+n*l*p-n*c*d+s*a*d-r*a*p+r*c*u-s*l*u)+g*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+h*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],h=e[15],M=f*g*c-x*d*c+x*l*p-o*g*p-f*l*h+o*d*h,E=_*d*c-u*g*c-_*l*p+a*g*p+u*l*h-a*d*h,v=u*x*c-_*f*c+_*o*p-a*x*p-u*o*h+a*f*h,L=_*f*l-u*x*l-_*o*d+a*x*d+u*o*g-a*f*g,I=n*M+i*E+r*v+s*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=M*R,e[1]=(x*d*s-f*g*s-x*r*p+i*g*p+f*r*h-i*d*h)*R,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*h+i*l*h)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*p-i*l*p)*R,e[4]=E*R,e[5]=(u*g*s-_*d*s+_*r*p-n*g*p-u*r*h+n*d*h)*R,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*h-n*l*h)*R,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*p+n*l*p)*R,e[8]=v*R,e[9]=(_*f*s-u*x*s-_*i*p+n*x*p+u*i*h-n*f*h)*R,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*h+n*o*h)*R,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*R,e[12]=L*R,e[13]=(u*x*r-_*f*r+_*i*d-n*x*d-u*i*g+n*f*g)*R,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*g-n*o*g)*R,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,p=s*u,_=s*f,x=a*u,g=a*f,h=o*f,M=l*c,E=l*u,v=l*f,L=i.x,I=i.y,R=i.z;return r[0]=(1-(x+h))*L,r[1]=(p+v)*L,r[2]=(_-E)*L,r[3]=0,r[4]=(p-v)*I,r[5]=(1-(d+h))*I,r[6]=(g+M)*I,r[7]=0,r[8]=(_+E)*R,r[9]=(g-M)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Dr.set(r[0],r[1],r[2]).length();const a=Dr.set(r[4],r[5],r[6]).length(),o=Dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/a,f=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,n.setFromRotationMatrix(wn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=hi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(o===hi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===So)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=hi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),d=(n+e)*c,p=(i+r)*u;let _,x;if(o===hi)_=(a+s)*f,x=-2*f;else if(o===So)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Dr=new W,wn=new gt,aE=new W(0,0,0),oE=new W(1,1,1),yi=new W,Da=new W,cn=new W,Wh=new gt,Xh=new _a;class On{constructor(e=0,n=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lE=0;const $h=new W,Ur=new _a,ii=new gt,Ua=new W,Rs=new W,cE=new W,uE=new _a,Yh=new W(1,0,0),qh=new W(0,1,0),jh=new W(0,0,1),Kh={type:"added"},fE={type:"removed"},Nr={type:"childadded",child:null},vl={type:"childremoved",child:null};class zt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new W,n=new On,i=new _a,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new $e}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Yh,e)}rotateY(e){return this.rotateOnAxis(qh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,n){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yh,e)}translateY(e){return this.translateOnAxis(qh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ua.copy(e):Ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Rs,Ua,this.up):ii.lookAt(Ua,Rs,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ii),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kh),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fE),vl.child=e,this.dispatchEvent(vl),vl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kh),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,e,cE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,uE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new W(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new W,ri=new W,xl=new W,si=new W,Fr=new W,Or=new W,Zh=new W,Sl=new W,Ml=new W,yl=new W,El=new dt,bl=new dt,Tl=new dt;class Rn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),An.subVectors(e,n),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){An.subVectors(r,n),ri.subVectors(i,n),xl.subVectors(e,n);const a=An.dot(An),o=An.dot(ri),l=An.dot(xl),c=ri.dot(ri),u=ri.dot(xl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return El.setScalar(0),bl.setScalar(0),Tl.setScalar(0),El.fromBufferAttribute(e,n),bl.fromBufferAttribute(e,i),Tl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(El,s.x),a.addScaledVector(bl,s.y),a.addScaledVector(Tl,s.z),a}static isFrontFacing(e,n,i,r){return An.subVectors(i,n),ri.subVectors(e,n),An.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),An.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Rn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Rn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Fr.subVectors(r,i),Or.subVectors(s,i),Sl.subVectors(e,i);const l=Fr.dot(Sl),c=Or.dot(Sl);if(l<=0&&c<=0)return n.copy(i);Ml.subVectors(e,r);const u=Fr.dot(Ml),f=Or.dot(Ml);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(Fr,a);yl.subVectors(e,s);const p=Fr.dot(yl),_=Or.dot(yl);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Or,o);const g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return Zh.subVectors(s,r),o=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Zh,o);const h=1/(g+x+d);return a=x*h,o=d*h,n.copy(i).addScaledVector(Fr,a).addScaledVector(Or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Na={h:0,s:0,l:0};function wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=Gu(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=wl(a,s,e+1/3),this.g=wl(a,s,e),this.b=wl(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=xn){const i=tg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return nt.workingToColorSpace(Vt.copy(this),e),Math.round(Ze(Vt.r*255,0,255))*65536+Math.round(Ze(Vt.g*255,0,255))*256+Math.round(Ze(Vt.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=xn){nt.workingToColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(Na);const i=$s(Ei.h,Na.h,n),r=$s(Ei.s,Na.s,n),s=$s(Ei.l,Na.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Qe;Qe.NAMES=tg;let hE=0;class vs extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Jr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Jr&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hc&&(i.blendSrc=this.blendSrc),this.blendDst!==dc&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bo extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new W,Fa=new je;let dE=0;class Nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Oh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fa.fromBufferAttribute(this,n),Fa.applyMatrix3(e),this.setXY(n,Fa.x,Fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$r(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$r(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$r(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$r(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$r(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oh&&(e.usage=this.usage),e}}class ng extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ig extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qn extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pE=0;const vn=new gt,Al=new zt,Br=new W,un=new br,Cs=new br,Ft=new W;class ji extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jm(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return Al.lookAt(e),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(un.min,Cs.min),un.expandByPoint(Ft),Ft.addVectors(un.max,Cs.max),un.expandByPoint(Ft)):(un.expandByPoint(Cs.min),un.expandByPoint(Cs.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),Ft.add(Br)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new W,l[F]=new W;const c=new W,u=new W,f=new W,d=new je,p=new je,_=new je,x=new W,g=new W;function h(F,w,T){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(O),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(O),o[F].add(x),o[w].add(x),o[T].add(x),l[F].add(g),l[w].add(g),l[T].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,w=M.length;F<w;++F){const T=M[F],O=T.start,j=T.count;for(let Y=O,se=O+j;Y<se;Y+=3)h(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const E=new W,v=new W,L=new W,I=new W;function R(F){L.fromBufferAttribute(r,F),I.copy(L);const w=o[F];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),v.crossVectors(I,w);const O=v.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,O)}for(let F=0,w=M.length;F<w;++F){const T=M[F],O=T.start,j=T.count;for(let Y=O,se=O+j;Y<se;Y+=3)R(e.getX(Y+0)),R(e.getX(Y+1)),R(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Nn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jh=new gt,nr=new eg,Oa=new va,Qh=new W,Ba=new W,ka=new W,za=new W,Rl=new W,Ha=new W,ed=new W,Va=new W;class Ot extends zt{constructor(e=new ji,n=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Rl.fromBufferAttribute(f,e),a?Ha.addScaledVector(Rl,u):Ha.addScaledVector(Rl.sub(n),u))}n.add(Ha)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),nr.copy(e.ray).recast(e.near),!(Oa.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Oa,Qh)===null||nr.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Jh.copy(s).invert(),nr.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&nr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=a[g.materialIndex],M=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,L=E;v<L;v+=3){const I=o.getX(v),R=o.getX(v+1),F=o.getX(v+2);r=Ga(this,h,e,i,c,u,f,I,R,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=_,h=x;g<h;g+=3){const M=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);r=Ga(this,a,e,i,c,u,f,M,E,v),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=a[g.materialIndex],M=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=M,L=E;v<L;v+=3){const I=v,R=v+1,F=v+2;r=Ga(this,h,e,i,c,u,f,I,R,F),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,h=x;g<h;g+=3){const M=g,E=g+1,v=g+2;r=Ga(this,a,e,i,c,u,f,M,E,v),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function mE(t,e,n,i,r,s,a,o){let l;if(e.side===an?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===zi,o),l===null)return null;Va.copy(o),Va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:t}}function Ga(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ba),t.getVertexPosition(l,ka),t.getVertexPosition(c,za);const u=mE(t,e,n,i,Ba,ka,za,ed);if(u){const f=new W;Rn.getBarycoord(ed,Ba,ka,za,f),r&&(u.uv=Rn.getInterpolatedAttribute(r,o,l,c,f,new je)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,o,l,c,f,new je)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new W,materialIndex:0};Rn.getNormal(Ba,ka,za,d.normal),u.face=d,u.barycoord=f}return u}class xs extends ji{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qn(c,3)),this.setAttribute("normal",new qn(u,3)),this.setAttribute("uv",new qn(f,2));function _(x,g,h,M,E,v,L,I,R,F,w){const T=v/R,O=L/F,j=v/2,Y=L/2,se=I/2,ae=R+1,te=F+1;let J=0,X=0;const pe=new W;for(let ve=0;ve<te;ve++){const we=ve*O-Y;for(let Fe=0;Fe<ae;Fe++){const qe=Fe*T-j;pe[x]=qe*M,pe[g]=we*E,pe[h]=se,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[g]=0,pe[h]=I>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Fe/R),f.push(1-ve/F),J+=1}}for(let ve=0;ve<F;ve++)for(let we=0;we<R;we++){const Fe=d+we+ae*ve,qe=d+we+ae*(ve+1),re=d+(we+1)+ae*(ve+1),_e=d+(we+1)+ae*ve;l.push(Fe,qe,_e),l.push(qe,re,_e),X+=6}o.addGroup(p,X,w),p+=X,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=hs(t[n]);for(const r in i)e[r]=i[r]}return e}function gE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const _E={clone:hs,merge:Jt};var vE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vE,this.fragmentShader=xE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=gE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let sg=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const bi=new W,td=new je,nd=new je;class sn extends sg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,td,nd),n.subVectors(nd,td)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const kr=-90,zr=1;class SE extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(kr,zr,e,n);r.layers=this.layers,this.add(r);const s=new sn(kr,zr,e,n);s.layers=this.layers,this.add(s);const a=new sn(kr,zr,e,n);a.layers=this.layers,this.add(a);const o=new sn(kr,zr,e,n);o.layers=this.layers,this.add(o);const l=new sn(kr,zr,e,n);l.layers=this.layers,this.add(l);const c=new sn(kr,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===So)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ag extends Yt{constructor(e=[],n=ls,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ME extends Sr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ag(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xs(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Ui});s.uniforms.tEquirect.value=n;const a=new Ot(r,s),o=n.minFilter;return n.minFilter===pr&&(n.minFilter=Wn),new SE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class Wa extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yE={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class og extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class EE extends Yt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=pn,u=pn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class id extends Nn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new gt,rd=new gt,Xa=[],sd=new br,bE=new gt,Ps=new Ot,Ls=new va;class TE extends Ot{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new id(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,bE)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Hr),sd.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(sd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new va),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Hr),Ls.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Ls)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ps.geometry=this.geometry,Ps.material=this.material,Ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(i),e.ray.intersectsSphere(Ls)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Hr),rd.multiplyMatrices(i,Hr),Ps.matrixWorld=rd,Ps.raycast(e,Xa);for(let a=0,o=Xa.length;a<o;a++){const l=Xa[a];l.instanceId=s,l.object=this,n.push(l)}Xa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new id(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new EE(new Float32Array(r*this.count),r,this.count,Bu,Xn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pl=new W,wE=new W,AE=new $e;class lr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pl.subVectors(i,n).cross(wE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AE.getNormalMatrix(e),r=this.coplanarPoint(Pl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new va,$a=new W;class $u{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],g=r[11],h=r[12],M=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,d-c,g-p,v-h).normalize(),i[1].setComponents(l+s,d+c,g+p,v+h).normalize(),i[2].setComponents(l+a,d+u,g+_,v+M).normalize(),i[3].setComponents(l-a,d-u,g-_,v-M).normalize(),i[4].setComponents(l-o,d-f,g-x,v-E).normalize(),n===hi)i[5].setComponents(l+o,d+f,g+x,v+E).normalize();else if(n===So)i[5].setComponents(o,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){return ir.center.set(0,0,0),ir.radius=.7071067811865476,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($a.x=r.normal.x>0?e.max.x:e.min.x,$a.y=r.normal.y>0?e.max.y:e.min.y,$a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lg extends Yt{constructor(e,n,i=xr,r,s,a,o=pn,l=pn,c,u=oa,f=1){if(u!==oa&&u!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Mr extends ji{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,p=[],_=[],x=[],g=[];for(let h=0;h<u;h++){const M=h*d-a;for(let E=0;E<c;E++){const v=E*f-s;_.push(v,-M,0),x.push(0,0,1),g.push(E/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const E=M+c*h,v=M+c*(h+1),L=M+1+c*(h+1),I=M+1+c*h;p.push(E,v,I),p.push(v,L,I)}this.setIndex(p),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yu extends ji{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new W,d=new W,p=[],_=[],x=[],g=[];for(let h=0;h<=i;h++){const M=[],E=h/i;let v=0;h===0&&a===0?v=.5/n:h===i&&l===Math.PI&&(v=-.5/n);for(let L=0;L<=n;L++){const I=L/n;f.x=-e*Math.cos(r+I*s)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(r+I*s)*Math.sin(a+E*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(I+v,1-E),M.push(c++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<n;M++){const E=u[h][M+1],v=u[h][M],L=u[h+1][M],I=u[h+1][M+1];(h!==0||a>0)&&p.push(E,v,I),(h!==i-1||l<Math.PI)&&p.push(v,L,I)}this.setIndex(p),this.setAttribute("position",new qn(_,3)),this.setAttribute("normal",new qn(x,3)),this.setAttribute("uv",new qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class RE extends vs{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cg extends vs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vu,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Fo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class CE extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PE extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ad={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class LE{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const IE=new LE;class qu{constructor(e){this.manager=e!==void 0?e:IE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qu.DEFAULT_MATERIAL_NAME="__DEFAULT";class DE extends qu{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ad.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=ca("img");function l(){u(),ad.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class UE extends qu{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,a=new DE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class ju extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ll=new gt,od=new W,ld=new W;class ug{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;od.setFromMatrixPosition(e.matrixWorld),n.position.copy(od),ld.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ld),n.updateMatrixWorld(),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NE extends ug{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=fs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cd extends ju{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new NE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ud=new gt,Is=new W,Il=new W;class FE extends ug{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),i.position.copy(Is),Il.copy(i.position),Il.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Il),i.updateMatrixWorld(),r.makeTranslation(-Is.x,-Is.y,-Is.z),ud.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}}class OE extends ju{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new FE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fg extends sg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class hg extends ju{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class BE extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=fd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function fd(){return performance.now()}const hd=new gt;class dd{constructor(e,n,i=0,r=1/0){this.ray=new eg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hd),this}intersectObject(e,n=!0,i=[]){return Kc(e,this,i,n),i.sort(pd),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Kc(e[r],this,i,n);return i.sort(pd),i}}function pd(t,e){return t.distance-e.distance}function Kc(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Kc(s[a],e,n,!0)}}function md(t,e,n,i){const r=zE(i);switch(n){case Ym:return t*e;case Bu:return t*e/r.components*r.byteLength;case ku:return t*e/r.components*r.byteLength;case jm:return t*e*2/r.components*r.byteLength;case zu:return t*e*2/r.components*r.byteLength;case qm:return t*e*3/r.components*r.byteLength;case Ln:return t*e*4/r.components*r.byteLength;case Hu:return t*e*4/r.components*r.byteLength;case eo:case to:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tc:case Ac:return Math.max(t,16)*Math.max(e,8)/4;case bc:case wc:return Math.max(t,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ro:case Xc:case $c:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Km:case Yc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qc:case jc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zE(t){switch(t){case Kn:case Wm:return{byteLength:1,components:1};case sa:case Xm:case ga:return{byteLength:2,components:1};case Fu:case Ou:return{byteLength:2,components:4};case xr:case Nu:case Xn:return{byteLength:4,components:1};case $m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HE(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var VE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GE=`#ifdef USE_ALPHAHASH
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
#endif`,WE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qE=`#ifdef USE_AOMAP
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
#endif`,jE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KE=`#ifdef USE_BATCHING
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
#endif`,ZE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tb=`#ifdef USE_IRIDESCENCE
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
#endif`,nb=`#ifdef USE_BUMPMAP
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fb=`#define PI 3.141592653589793
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
} // validated`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,db=`vec3 transformedNormal = objectNormal;
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
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",xb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cb=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Db=`uniform bool receiveShadow;
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
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kb=`PhysicalMaterial material;
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
#endif`,zb=`struct PhysicalMaterial {
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
}`,Hb=`
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zb=`#if defined( USE_POINTS_UV )
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
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iT=`#ifdef USE_MORPHTARGETS
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
#endif`,rT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uT=`#ifdef USE_NORMALMAP
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
#endif`,fT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_T=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ST=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wT=`float getShadowMask() {
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
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RT=`#ifdef USE_SKINNING
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
#endif`,CT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PT=`#ifdef USE_SKINNING
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
#endif`,LT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NT=`#ifdef USE_TRANSMISSION
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
#endif`,FT=`#ifdef USE_TRANSMISSION
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
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VT=`uniform sampler2D t2D;
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
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`#include <common>
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
}`,qT=`#if DEPTH_PACKING == 3200
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
}`,jT=`#define DISTANCE
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
}`,KT=`#define DISTANCE
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
}`,ZT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,l1=`#define NORMAL
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
}`,c1=`#define PHONG
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
}`,u1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,d1=`#define TOON
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
}`,p1=`#define TOON
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,v1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,S1=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:VE,alphahash_pars_fragment:GE,alphamap_fragment:WE,alphamap_pars_fragment:XE,alphatest_fragment:$E,alphatest_pars_fragment:YE,aomap_fragment:qE,aomap_pars_fragment:jE,batching_pars_vertex:KE,batching_vertex:ZE,begin_vertex:JE,beginnormal_vertex:QE,bsdfs:eb,iridescence_fragment:tb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:rb,clipping_planes_pars_vertex:sb,clipping_planes_vertex:ab,color_fragment:ob,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:ub,common:fb,cube_uv_reflection_fragment:hb,defaultnormal_vertex:db,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:_b,colorspace_fragment:vb,colorspace_pars_fragment:xb,envmap_fragment:Sb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:yb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Ub,envmap_vertex:bb,fog_vertex:Tb,fog_pars_vertex:wb,fog_fragment:Ab,fog_pars_fragment:Rb,gradientmap_pars_fragment:Cb,lightmap_pars_fragment:Pb,lights_lambert_fragment:Lb,lights_lambert_pars_fragment:Ib,lights_pars_begin:Db,lights_toon_fragment:Nb,lights_toon_pars_fragment:Fb,lights_phong_fragment:Ob,lights_phong_pars_fragment:Bb,lights_physical_fragment:kb,lights_physical_pars_fragment:zb,lights_fragment_begin:Hb,lights_fragment_maps:Vb,lights_fragment_end:Gb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:Yb,map_fragment:qb,map_pars_fragment:jb,map_particle_fragment:Kb,map_particle_pars_fragment:Zb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:Qb,morphinstance_vertex:eT,morphcolor_vertex:tT,morphnormal_vertex:nT,morphtarget_pars_vertex:iT,morphtarget_vertex:rT,normal_fragment_begin:sT,normal_fragment_maps:aT,normal_pars_fragment:oT,normal_pars_vertex:lT,normal_vertex:cT,normalmap_pars_fragment:uT,clearcoat_normal_fragment_begin:fT,clearcoat_normal_fragment_maps:hT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:pT,opaque_fragment:mT,packing:gT,premultiplied_alpha_fragment:_T,project_vertex:vT,dithering_fragment:xT,dithering_pars_fragment:ST,roughnessmap_fragment:MT,roughnessmap_pars_fragment:yT,shadowmap_pars_fragment:ET,shadowmap_pars_vertex:bT,shadowmap_vertex:TT,shadowmask_pars_fragment:wT,skinbase_vertex:AT,skinning_pars_vertex:RT,skinning_vertex:CT,skinnormal_vertex:PT,specularmap_fragment:LT,specularmap_pars_fragment:IT,tonemapping_fragment:DT,tonemapping_pars_fragment:UT,transmission_fragment:NT,transmission_pars_fragment:FT,uv_pars_fragment:OT,uv_pars_vertex:BT,uv_vertex:kT,worldpos_vertex:zT,background_vert:HT,background_frag:VT,backgroundCube_vert:GT,backgroundCube_frag:WT,cube_vert:XT,cube_frag:$T,depth_vert:YT,depth_frag:qT,distanceRGBA_vert:jT,distanceRGBA_frag:KT,equirect_vert:ZT,equirect_frag:JT,linedashed_vert:QT,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:a1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:c1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:h1,meshtoon_vert:d1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:_1,shadow_frag:v1,sprite_vert:x1,sprite_frag:S1},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Gn={basic:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Jt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Jt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Jt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Jt([Me.points,Me.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Jt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Jt([Me.common,Me.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Jt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Jt([Me.sprite,Me.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Jt([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Jt([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Gn.physical={uniforms:Jt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ya={r:0,b:0,g:0},rr=new On,M1=new gt;function y1(t,e,n,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?n:e).get(v)),v}function x(E){let v=!1;const L=_(E);L===null?h(o,l):L&&L.isColor&&(h(L,1),v=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(E,v){const L=_(v);L&&(L.isCubeTexture||L.mapping===Oo)?(u===void 0&&(u=new Ot(new xs(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:hs(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),rr.copy(v.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(rr)),u.material.toneMapped=nt.getTransfer(L.colorSpace)!==ht,(f!==L||d!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Ot(new Mr(2,2),new Hi({name:"BackgroundMaterial",uniforms:hs(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=nt.getTransfer(L.colorSpace)!==ht,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,v){E.getRGB(Ya,rg(t)),i.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:x,addToRenderList:g,dispose:M}}function E1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(T,O,j,Y,se){let ae=!1;const te=f(Y,j,O);s!==te&&(s=te,c(s.object)),ae=p(T,Y,j,se),ae&&_(T,Y,j,se),se!==null&&e.update(se,t.ELEMENT_ARRAY_BUFFER),(ae||a)&&(a=!1,v(T,O,j,Y),se!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,O,j){const Y=j.wireframe===!0;let se=i[T.id];se===void 0&&(se={},i[T.id]=se);let ae=se[O.id];ae===void 0&&(ae={},se[O.id]=ae);let te=ae[Y];return te===void 0&&(te=d(l()),ae[Y]=te),te}function d(T){const O=[],j=[],Y=[];for(let se=0;se<n;se++)O[se]=0,j[se]=0,Y[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:Y,object:T,attributes:{},index:null}}function p(T,O,j,Y){const se=s.attributes,ae=O.attributes;let te=0;const J=j.getAttributes();for(const X in J)if(J[X].location>=0){const ve=se[X];let we=ae[X];if(we===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(we=T.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;te++}return s.attributesNum!==te||s.index!==Y}function _(T,O,j,Y){const se={},ae=O.attributes;let te=0;const J=j.getAttributes();for(const X in J)if(J[X].location>=0){let ve=ae[X];ve===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),se[X]=we,te++}s.attributes=se,s.attributesNum=te,s.index=Y}function x(){const T=s.newAttributes;for(let O=0,j=T.length;O<j;O++)T[O]=0}function g(T){h(T,0)}function h(T,O){const j=s.newAttributes,Y=s.enabledAttributes,se=s.attributeDivisors;j[T]=1,Y[T]===0&&(t.enableVertexAttribArray(T),Y[T]=1),se[T]!==O&&(t.vertexAttribDivisor(T,O),se[T]=O)}function M(){const T=s.newAttributes,O=s.enabledAttributes;for(let j=0,Y=O.length;j<Y;j++)O[j]!==T[j]&&(t.disableVertexAttribArray(j),O[j]=0)}function E(T,O,j,Y,se,ae,te){te===!0?t.vertexAttribIPointer(T,O,j,se,ae):t.vertexAttribPointer(T,O,j,Y,se,ae)}function v(T,O,j,Y){x();const se=Y.attributes,ae=j.getAttributes(),te=O.defaultAttributeValues;for(const J in ae){const X=ae[J];if(X.location>=0){let pe=se[J];if(pe===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),pe!==void 0){const ve=pe.normalized,we=pe.itemSize,Fe=e.get(pe);if(Fe===void 0)continue;const qe=Fe.buffer,re=Fe.type,_e=Fe.bytesPerElement,ye=re===t.INT||re===t.UNSIGNED_INT||pe.gpuType===Nu;if(pe.isInterleavedBufferAttribute){const z=pe.data,ie=z.stride,le=pe.offset;if(z.isInstancedInterleavedBuffer){for(let oe=0;oe<X.locationSize;oe++)h(X.location+oe,z.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let oe=0;oe<X.locationSize;oe++)g(X.location+oe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let oe=0;oe<X.locationSize;oe++)E(X.location+oe,we/X.locationSize,re,ve,ie*_e,(le+we/X.locationSize*oe)*_e,ye)}else{if(pe.isInstancedBufferAttribute){for(let z=0;z<X.locationSize;z++)h(X.location+z,pe.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let z=0;z<X.locationSize;z++)g(X.location+z);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let z=0;z<X.locationSize;z++)E(X.location+z,we/X.locationSize,re,ve,we*_e,we/X.locationSize*z*_e,ye)}}else if(te!==void 0){const ve=te[J];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(X.location,ve);break;case 3:t.vertexAttrib3fv(X.location,ve);break;case 4:t.vertexAttrib4fv(X.location,ve);break;default:t.vertexAttrib1fv(X.location,ve)}}}}M()}function L(){F();for(const T in i){const O=i[T];for(const j in O){const Y=O[j];for(const se in Y)u(Y[se].object),delete Y[se];delete O[j]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const O=i[T.id];for(const j in O){const Y=O[j];for(const se in Y)u(Y[se].object),delete Y[se];delete O[j]}delete i[T.id]}function R(T){for(const O in i){const j=i[O];if(j[T.id]===void 0)continue;const Y=j[T.id];for(const se in Y)u(Y[se].object),delete Y[se];delete j[T.id]}}function F(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function b1(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function T1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Ln&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Kn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xn&&!F)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:L,maxSamples:I}}function w1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const M=s?0:i,E=M*4;let v=h.clippingState||null;l.value=v,v=u(_,d,E,p);for(let L=0;L!==E;++L)v[L]=n[L];h.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const h=p+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<h)&&(g=new Float32Array(h));for(let E=0,v=p;E!==x;++E,v+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function A1(t){let e=new WeakMap;function n(a,o){return o===Mc?a.mapping=ls:o===yc&&(a.mapping=cs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mc||o===yc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ME(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Yr=4,gd=[.125,.215,.35,.446,.526,.582],fr=20,Dl=new fg,_d=new Qe;let Ul=null,Nl=0,Fl=0,Ol=!1;const cr=(1+Math.sqrt(5))/2,Vr=1/cr,vd=[new W(-cr,Vr,0),new W(cr,Vr,0),new W(-Vr,0,cr),new W(Vr,0,cr),new W(0,cr,-Vr),new W(0,cr,Vr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],R1=new W;class xd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=R1}=s;Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Nl,Fl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ga,format:Ln,colorSpace:us,depthBuffer:!1},r=Sd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C1(s)),this._blurMaterial=P1(s,e,n)}return r}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,Dl)}_sceneToCubeUV(e,n,i,r,s){const l=new sn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(_d),f.toneMapping=Ni,f.autoClear=!1;const _=new Bo({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new Ot(new xs,_);let g=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,g=!0):(_.color.copy(_d),g=!0);for(let M=0;M<6;M++){const E=M%3;E===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):E===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const v=this._cubeSize;qa(r,E*v,M>2?v:0,v,v),f.setRenderTarget(r),g&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ls||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Dl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vd[(r-s-1)%vd.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ot(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),x=s/_,g=isFinite(s)?1+Math.floor(u*x):fr;g>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fr}`);const h=[];let M=0;for(let R=0;R<fr;++R){const F=R/x,w=Math.exp(-F*F/2);h.push(w),R===0?M+=w:R<g&&(M+=2*w)}for(let R=0;R<h.length;R++)h[R]=h[R]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const v=this._sizeLods[r],L=3*v*(r>E-Yr?r-E+Yr:0),I=4*(this._cubeSize-v);qa(n,L,I,3*v,2*v),l.setRenderTarget(n),l.render(f,Dl)}}function C1(t){const e=[],n=[],i=[];let r=t;const s=t-Yr+1+gd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Yr?l=gd[a-t+Yr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,g=2,h=1,M=new Float32Array(x*_*p),E=new Float32Array(g*_*p),v=new Float32Array(h*_*p);for(let I=0;I<p;I++){const R=I%3*2/3-1,F=I>2?0:-1,w=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];M.set(w,x*_*I),E.set(d,g*_*I);const T=[I,I,I,I,I,I];v.set(T,h*_*I)}const L=new ji;L.setAttribute("position",new Nn(M,x)),L.setAttribute("uv",new Nn(E,g)),L.setAttribute("faceIndex",new Nn(v,h)),e.push(L),r>Yr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sd(t,e,n){const i=new Sr(t,e,n);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function P1(t,e,n){const i=new Float32Array(fr),r=new W(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Md(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function yd(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Ku(){return`

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
	`}function L1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mc||l===yc,u=l===ls||l===cs;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new xd(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new xd(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function I1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function D1(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const M=p.array;x=p.version;for(let E=0,v=M.length;E<v;E+=3){const L=M[E+0],I=M[E+1],R=M[E+2];d.push(L,I,I,R,R,L)}}else if(_!==void 0){const M=_.array;x=_.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const L=E+0,I=E+1,R=E+2;d.push(L,I,I,R,R,L)}}else return;const g=new(Jm(d)?ig:ng)(d,1);g.version=x;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function U1(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*a),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*a,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let g=0;for(let h=0;h<_;h++)g+=p[h];n.update(g,i,1)}function f(d,p,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/a,p[h],x[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,x,0,_);let h=0;for(let M=0;M<_;M++)h+=p[M]*x[M];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function N1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function F1(t,e,n){const i=new WeakMap,r=new dt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let T=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let L=o.attributes.position.count*v,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*I*4*f),F=new Qm(R,L,I,f);F.type=Xn,F.needsUpdate=!0;const w=v*4;for(let O=0;O<f;O++){const j=h[O],Y=M[O],se=E[O],ae=L*I*4*O;for(let te=0;te<j.count;te++){const J=te*w;_===!0&&(r.fromBufferAttribute(j,te),R[ae+J+0]=r.x,R[ae+J+1]=r.y,R[ae+J+2]=r.z,R[ae+J+3]=0),x===!0&&(r.fromBufferAttribute(Y,te),R[ae+J+4]=r.x,R[ae+J+5]=r.y,R[ae+J+6]=r.z,R[ae+J+7]=0),g===!0&&(r.fromBufferAttribute(se,te),R[ae+J+8]=r.x,R[ae+J+9]=r.y,R[ae+J+10]=r.z,R[ae+J+11]=se.itemSize===4?r.w:1)}}d={count:f,texture:F,size:new je(L,I)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function O1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const pg=new Yt,Ed=new lg(1,1),mg=new Qm,gg=new rE,_g=new ag,bd=[],Td=[],wd=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function Ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bd[r];if(s===void 0&&(s=new Float32Array(r),bd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ko(t,e){let n=Td[e];n===void 0&&(n=new Int32Array(e),Td[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function B1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function V1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Rd.set(i),t.uniformMatrix2fv(this.addr,!1,Rd),Nt(n,i)}}function G1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;Ad.set(i),t.uniformMatrix3fv(this.addr,!1,Ad),Nt(n,i)}}function W1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;wd.set(i),t.uniformMatrix4fv(this.addr,!1,wd),Nt(n,i)}}function X1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function Y1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function j1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function K1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function Q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ed.compareFunction=Zm,s=Ed):s=pg,n.setTexture2D(e||s,r)}function ew(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||gg,r)}function tw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_g,r)}function nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||mg,r)}function iw(t){switch(t){case 5126:return B1;case 35664:return k1;case 35665:return z1;case 35666:return H1;case 35674:return V1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return $1;case 35668:case 35672:return Y1;case 35669:case 35673:return q1;case 5125:return j1;case 36294:return K1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}function rw(t,e){t.uniform1fv(this.addr,e)}function sw(t,e){const n=Ss(e,this.size,2);t.uniform2fv(this.addr,n)}function aw(t,e){const n=Ss(e,this.size,3);t.uniform3fv(this.addr,n)}function ow(t,e){const n=Ss(e,this.size,4);t.uniform4fv(this.addr,n)}function lw(t,e){const n=Ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cw(t,e){const n=Ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uw(t,e){const n=Ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fw(t,e){t.uniform1iv(this.addr,e)}function hw(t,e){t.uniform2iv(this.addr,e)}function dw(t,e){t.uniform3iv(this.addr,e)}function pw(t,e){t.uniform4iv(this.addr,e)}function mw(t,e){t.uniform1uiv(this.addr,e)}function gw(t,e){t.uniform2uiv(this.addr,e)}function _w(t,e){t.uniform3uiv(this.addr,e)}function vw(t,e){t.uniform4uiv(this.addr,e)}function xw(t,e,n){const i=this.cache,r=e.length,s=ko(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||pg,s[a])}function Sw(t,e,n){const i=this.cache,r=e.length,s=ko(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||gg,s[a])}function Mw(t,e,n){const i=this.cache,r=e.length,s=ko(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||_g,s[a])}function yw(t,e,n){const i=this.cache,r=e.length,s=ko(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Nt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||mg,s[a])}function Ew(t){switch(t){case 5126:return rw;case 35664:return sw;case 35665:return aw;case 35666:return ow;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return fw;case 35667:case 35671:return hw;case 35668:case 35672:return dw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Mw;case 36289:case 36303:case 36311:case 36292:return yw}}class bw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iw(n.type)}}class Tw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ew(n.type)}}class ww{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function Cd(t,e){t.seq.push(e),t.map[e.id]=e}function Aw(t,e,n){const i=t.name,r=i.length;for(Bl.lastIndex=0;;){const s=Bl.exec(i),a=Bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cd(n,c===void 0?new bw(o,t,e):new Tw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new ww(o),Cd(n,f)),n=f}}}class so{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Aw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Pd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Rw=37297;let Cw=0;function Pw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ld=new $e;function Lw(t){nt._getMatrix(Ld,nt.workingColorSpace,t);const e=`mat3( ${Ld.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case xo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Id(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Pw(t.getShaderSource(e),a)}else return r}function Iw(t,e){const n=Lw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Dw(t,e){let n;switch(e){case my:n="Linear";break;case gy:n="Reinhard";break;case _y:n="Cineon";break;case vy:n="ACESFilmic";break;case Sy:n="AgX";break;case My:n="Neutral";break;case xy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ja=new W;function Uw(){nt.getLuminanceCoefficients(ja);const t=ja.x.toFixed(4),e=ja.y.toFixed(4),n=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Fw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ow(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Us(t){return t!==""}function Dd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ud(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(t){return t.replace(Bw,zw)}const kw=new Map;function zw(t,e){let n=Ye[e];if(n===void 0){const i=kw.get(e);if(i!==void 0)n=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zc(n)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(t){return t.replace(Hw,Vw)}function Vw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Fd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Gw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Hm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Vm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Ww(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function $w(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fo:e="ENVMAP_BLENDING_MULTIPLY";break;case dy:e="ENVMAP_BLENDING_MIX";break;case py:e="ENVMAP_BLENDING_ADD";break}return e}function Yw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function qw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Gw(n),c=Ww(n),u=Xw(n),f=$w(n),d=Yw(n),p=Nw(n),_=Fw(s),x=r.createProgram();let g,h,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Us).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Us).join(`
`),h.length>0&&(h+=`
`)):(g=[Fd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),h=[Fd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?Ye.tonemapping_pars_fragment:"",n.toneMapping!==Ni?Dw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Iw("linearToOutputTexel",n.outputColorSpace),Uw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),a=Zc(a),a=Dd(a,n),a=Ud(a,n),o=Zc(o),o=Dd(o,n),o=Ud(o,n),a=Nd(a),o=Nd(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=M+g+a,v=M+h+o,L=Pd(r,r.VERTEX_SHADER,E),I=Pd(r,r.FRAGMENT_SHADER,v);r.attachShader(x,L),r.attachShader(x,I),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(O){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(x).trim(),Y=r.getShaderInfoLog(L).trim(),se=r.getShaderInfoLog(I).trim();let ae=!0,te=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,I);else{const J=Id(r,L,"vertex"),X=Id(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+j+`
`+J+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(Y===""||se==="")&&(te=!1);te&&(O.diagnostics={runnable:ae,programLog:j,vertexShader:{log:Y,prefix:g},fragmentShader:{log:se,prefix:h}})}r.deleteShader(L),r.deleteShader(I),F=new so(r,x),w=Ow(r,x)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,Rw)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=I,this}let jw=0;class Kw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Zw(e),n.set(e,i)),i}}class Zw{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}}function Jw(t,e,n,i,r,s,a){const o=new Xu,l=new Kw,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,T,O,j,Y){const se=j.fog,ae=Y.geometry,te=w.isMeshStandardMaterial?j.environment:null,J=(w.isMeshStandardMaterial?n:e).get(w.envMap||te),X=J&&J.mapping===Oo?J.image.height:null,pe=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const ve=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,we=ve!==void 0?ve.length:0;let Fe=0;ae.morphAttributes.position!==void 0&&(Fe=1),ae.morphAttributes.normal!==void 0&&(Fe=2),ae.morphAttributes.color!==void 0&&(Fe=3);let qe,re,_e,ye;if(pe){const ut=Gn[pe];qe=ut.vertexShader,re=ut.fragmentShader}else qe=w.vertexShader,re=w.fragmentShader,l.update(w),_e=l.getVertexShaderID(w),ye=l.getFragmentShaderID(w);const z=t.getRenderTarget(),ie=t.state.buffers.depth.getReversed(),le=Y.isInstancedMesh===!0,oe=Y.isBatchedMesh===!0,Oe=!!w.map,D=!!w.matcap,U=!!J,S=!!w.aoMap,ne=!!w.lightMap,Z=!!w.bumpMap,K=!!w.normalMap,b=!!w.displacementMap,C=!!w.emissiveMap,N=!!w.metalnessMap,B=!!w.roughnessMap,he=w.anisotropy>0,y=w.clearcoat>0,m=w.dispersion>0,P=w.iridescence>0,H=w.sheen>0,q=w.transmission>0,$=he&&!!w.anisotropyMap,Se=y&&!!w.clearcoatMap,fe=y&&!!w.clearcoatNormalMap,Ee=y&&!!w.clearcoatRoughnessMap,Ae=P&&!!w.iridescenceMap,ue=P&&!!w.iridescenceThicknessMap,Re=H&&!!w.sheenColorMap,Ie=H&&!!w.sheenRoughnessMap,De=!!w.specularMap,xe=!!w.specularColorMap,ze=!!w.specularIntensityMap,k=q&&!!w.transmissionMap,be=q&&!!w.thicknessMap,de=!!w.gradientMap,Le=!!w.alphaMap,me=w.alphaTest>0,ce=!!w.alphaHash,Ue=!!w.extensions;let We=Ni;w.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(We=t.toneMapping);const vt={shaderID:pe,shaderType:w.type,shaderName:w.name,vertexShader:qe,fragmentShader:re,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:ye,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:oe,batchingColor:oe&&Y._colorsTexture!==null,instancing:le,instancingColor:le&&Y.instanceColor!==null,instancingMorph:le&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:z===null?t.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:us,alphaToCoverage:!!w.alphaToCoverage,map:Oe,matcap:D,envMap:U,envMapMode:U&&J.mapping,envMapCubeUVHeight:X,aoMap:S,lightMap:ne,bumpMap:Z,normalMap:K,displacementMap:d&&b,emissiveMap:C,normalMapObjectSpace:K&&w.normalMapType===Ty,normalMapTangentSpace:K&&w.normalMapType===Vu,metalnessMap:N,roughnessMap:B,anisotropy:he,anisotropyMap:$,clearcoat:y,clearcoatMap:Se,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:m,iridescence:P,iridescenceMap:Ae,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:Re,sheenRoughnessMap:Ie,specularMap:De,specularColorMap:xe,specularIntensityMap:ze,transmission:q,transmissionMap:k,thicknessMap:be,gradientMap:de,opaque:w.transparent===!1&&w.blending===Jr&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:ce,combine:w.combine,mapUv:Oe&&x(w.map.channel),aoMapUv:S&&x(w.aoMap.channel),lightMapUv:ne&&x(w.lightMap.channel),bumpMapUv:Z&&x(w.bumpMap.channel),normalMapUv:K&&x(w.normalMap.channel),displacementMapUv:b&&x(w.displacementMap.channel),emissiveMapUv:C&&x(w.emissiveMap.channel),metalnessMapUv:N&&x(w.metalnessMap.channel),roughnessMapUv:B&&x(w.roughnessMap.channel),anisotropyMapUv:$&&x(w.anisotropyMap.channel),clearcoatMapUv:Se&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(w.sheenRoughnessMap.channel),specularMapUv:De&&x(w.specularMap.channel),specularColorMapUv:xe&&x(w.specularColorMap.channel),specularIntensityMapUv:ze&&x(w.specularIntensityMap.channel),transmissionMapUv:k&&x(w.transmissionMap.channel),thicknessMapUv:be&&x(w.thicknessMap.channel),alphaMapUv:Le&&x(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(K||he),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ae.attributes.uv&&(Oe||Le),fog:!!se,useFog:w.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ie,skinning:Y.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,decodeVideoTexture:Oe&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===ht,decodeVideoTextureEmissive:C&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ci,flipSided:w.side===an,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ue&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&w.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function h(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const O in w.defines)T.push(O),T.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(M(T,w),E(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function M(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function E(w,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const T=_[w.type];let O;if(T){const j=Gn[T];O=_E.clone(j.uniforms)}else O=w.uniforms;return O}function L(w,T){let O;for(let j=0,Y=u.length;j<Y;j++){const se=u[j];if(se.cacheKey===T){O=se,++O.usedTimes;break}}return O===void 0&&(O=new qw(t,T,w,s),u.push(O)),O}function I(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function R(w){l.remove(w)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:v,acquireProgram:L,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:F}}function Qw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function eA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Od(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,_,x,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=g),e++,h}function o(f,d,p,_,x,g){const h=a(f,d,p,_,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,x,g){const h=a(f,d,p,_,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||eA),i.length>1&&i.sort(d||Od),r.length>1&&r.sort(d||Od)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function tA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Bd,t.set(i,[a])):r>=s.length?(a=new Bd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Qe};break;case"SpotLight":n={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function iA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rA=0;function sA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aA(t){const e=new nA,n=iA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new gt,a=new gt;function o(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,x=0,g=0,h=0,M=0,E=0,v=0,L=0,I=0,R=0;c.sort(sA);for(let w=0,T=c.length;w<T;w++){const O=c[w],j=O.color,Y=O.intensity,se=O.distance,ae=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=j.r*Y,f+=j.g*Y,d+=j.b*Y;else if(O.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(O.sh.coefficients[te],Y);R++}else if(O.isDirectionalLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const J=O.shadow,X=n.get(O);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=O.shadow.matrix,M++}i.directional[p]=te,p++}else if(O.isSpotLight){const te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(j).multiplyScalar(Y),te.distance=se,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,i.spot[x]=te;const J=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,J.updateMatrices(O),O.castShadow&&I++),i.spotLightMatrix[x]=J.matrix,O.castShadow){const X=n.get(O);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,i.spotShadow[x]=X,i.spotShadowMap[x]=ae,v++}x++}else if(O.isRectAreaLight){const te=e.get(O);te.color.copy(j).multiplyScalar(Y),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=te,g++}else if(O.isPointLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){const J=O.shadow,X=n.get(O);X.shadowIntensity=J.intensity,X.shadowBias=J.bias,X.shadowNormalBias=J.normalBias,X.shadowRadius=J.radius,X.shadowMapSize=J.mapSize,X.shadowCameraNear=J.camera.near,X.shadowCameraFar=J.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=O.shadow.matrix,E++}i.point[_]=te,_++}else if(O.isHemisphereLight){const te=e.get(O);te.skyColor.copy(O.color).multiplyScalar(Y),te.groundColor.copy(O.groundColor).multiplyScalar(Y),i.hemi[h]=te,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==g||F.hemiLength!==h||F.numDirectionalShadows!==M||F.numPointShadows!==E||F.numSpotShadows!==v||F.numSpotMaps!==L||F.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=g,F.hemiLength=h,F.numDirectionalShadows=M,F.numPointShadows=E,F.numSpotShadows=v,F.numSpotMaps=L,F.numLightProbes=R,i.version=rA++)}function l(c,u){let f=0,d=0,p=0,_=0,x=0;const g=u.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const E=c[h];if(E.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(E.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(E.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function kd(t){const e=new aA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function oA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new kd(t),e.set(r,[o])):s>=a.length?(o=new kd(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const lA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cA=`uniform sampler2D shadow_pass;
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
}`;function uA(t,e,n){let i=new $u;const r=new je,s=new je,a=new dt,o=new CE({depthPacking:by}),l=new PE,c={},u=n.maxTextureSize,f={[zi]:an,[an]:zi,[ci]:ci},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:lA,fragmentShader:cA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ji;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hm;let h=this.type;this.render=function(I,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const w=t.getRenderTarget(),T=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Ui),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=h!==ai&&this.type===ai,se=h===ai&&this.type!==ai;for(let ae=0,te=I.length;ae<te;ae++){const J=I[ae],X=J.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const pe=X.getFrameExtents();if(r.multiply(pe),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,X.mapSize.y=s.y)),X.map===null||Y===!0||se===!0){const we=this.type!==ai?{minFilter:pn,magFilter:pn}:{};X.map!==null&&X.map.dispose(),X.map=new Sr(r.x,r.y,we),X.map.texture.name=J.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const ve=X.getViewportCount();for(let we=0;we<ve;we++){const Fe=X.getViewport(we);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),j.viewport(a),X.updateMatrices(J,we),i=X.getFrustum(),v(R,F,X.camera,J,this.type)}X.isPointLightShadow!==!0&&this.type===ai&&M(X,F),X.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(w,T,O)};function M(I,R){const F=e.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Sr(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(R,null,F,d,x,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(R,null,F,p,x,null)}function E(I,R,F,w){let T=null;const O=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)T=O;else if(T=F.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const j=T.uuid,Y=R.uuid;let se=c[j];se===void 0&&(se={},c[j]=se);let ae=se[Y];ae===void 0&&(ae=T.clone(),se[Y]=ae,R.addEventListener("dispose",L)),T=ae}if(T.visible=R.visible,T.wireframe=R.wireframe,w===ai?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=t.properties.get(T);j.light=F}return T}function v(I,R,F,w,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===ai)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const Y=e.update(I),se=I.material;if(Array.isArray(se)){const ae=Y.groups;for(let te=0,J=ae.length;te<J;te++){const X=ae[te],pe=se[X.materialIndex];if(pe&&pe.visible){const ve=E(I,pe,w,T);I.onBeforeShadow(t,I,R,F,Y,ve,X),t.renderBufferDirect(F,null,Y,ve,I,X),I.onAfterShadow(t,I,R,F,Y,ve,X)}}}else if(se.visible){const ae=E(I,se,w,T);I.onBeforeShadow(t,I,R,F,Y,ae,null),t.renderBufferDirect(F,null,Y,ae,I,null),I.onAfterShadow(t,I,R,F,Y,ae,null)}}const j=I.children;for(let Y=0,se=j.length;Y<se;Y++)v(j[Y],R,F,w,T)}function L(I){I.target.removeEventListener("dispose",L);for(const F in c){const w=c[F],T=I.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const fA={[pc]:mc,[gc]:xc,[_c]:Sc,[os]:vc,[mc]:pc,[xc]:gc,[Sc]:_c,[vc]:os};function hA(t,e){function n(){let k=!1;const be=new dt;let de=null;const Le=new dt(0,0,0,0);return{setMask:function(me){de!==me&&!k&&(t.colorMask(me,me,me,me),de=me)},setLocked:function(me){k=me},setClear:function(me,ce,Ue,We,vt){vt===!0&&(me*=We,ce*=We,Ue*=We),be.set(me,ce,Ue,We),Le.equals(be)===!1&&(t.clearColor(me,ce,Ue,We),Le.copy(be))},reset:function(){k=!1,de=null,Le.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,de=null,Le=null,me=null;return{setReversed:function(ce){if(be!==ce){const Ue=e.get("EXT_clip_control");ce?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),be=ce;const We=me;me=null,this.setClear(We)}},getReversed:function(){return be},setTest:function(ce){ce?z(t.DEPTH_TEST):ie(t.DEPTH_TEST)},setMask:function(ce){de!==ce&&!k&&(t.depthMask(ce),de=ce)},setFunc:function(ce){if(be&&(ce=fA[ce]),Le!==ce){switch(ce){case pc:t.depthFunc(t.NEVER);break;case mc:t.depthFunc(t.ALWAYS);break;case gc:t.depthFunc(t.LESS);break;case os:t.depthFunc(t.LEQUAL);break;case _c:t.depthFunc(t.EQUAL);break;case vc:t.depthFunc(t.GEQUAL);break;case xc:t.depthFunc(t.GREATER);break;case Sc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=ce}},setLocked:function(ce){k=ce},setClear:function(ce){me!==ce&&(be&&(ce=1-ce),t.clearDepth(ce),me=ce)},reset:function(){k=!1,de=null,Le=null,me=null,be=!1}}}function r(){let k=!1,be=null,de=null,Le=null,me=null,ce=null,Ue=null,We=null,vt=null;return{setTest:function(ut){k||(ut?z(t.STENCIL_TEST):ie(t.STENCIL_TEST))},setMask:function(ut){be!==ut&&!k&&(t.stencilMask(ut),be=ut)},setFunc:function(ut,En,Zn){(de!==ut||Le!==En||me!==Zn)&&(t.stencilFunc(ut,En,Zn),de=ut,Le=En,me=Zn)},setOp:function(ut,En,Zn){(ce!==ut||Ue!==En||We!==Zn)&&(t.stencilOp(ut,En,Zn),ce=ut,Ue=En,We=Zn)},setLocked:function(ut){k=ut},setClear:function(ut){vt!==ut&&(t.clearStencil(ut),vt=ut)},reset:function(){k=!1,be=null,de=null,Le=null,me=null,ce=null,Ue=null,We=null,vt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,x=!1,g=null,h=null,M=null,E=null,v=null,L=null,I=null,R=new Qe(0,0,0),F=0,w=!1,T=null,O=null,j=null,Y=null,se=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,J=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),te=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),te=J>=2);let pe=null,ve={};const we=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),qe=new dt().fromArray(we),re=new dt().fromArray(Fe);function _e(k,be,de,Le){const me=new Uint8Array(4),ce=t.createTexture();t.bindTexture(k,ce),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<de;Ue++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(be+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ce}const ye={};ye[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(t.DEPTH_TEST),a.setFunc(os),Z(!1),K(Ih),z(t.CULL_FACE),S(Ui);function z(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function ie(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function le(k,be){return f[k]!==be?(t.bindFramebuffer(k,be),f[k]=be,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=be),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=be),!0):!1}function oe(k,be){let de=p,Le=!1;if(k){de=d.get(be),de===void 0&&(de=[],d.set(be,de));const me=k.textures;if(de.length!==me.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ue=me.length;ce<Ue;ce++)de[ce]=t.COLOR_ATTACHMENT0+ce;de.length=me.length,Le=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Le=!0);Le&&t.drawBuffers(de)}function Oe(k){return _!==k?(t.useProgram(k),_=k,!0):!1}const D={[ur]:t.FUNC_ADD,[KM]:t.FUNC_SUBTRACT,[ZM]:t.FUNC_REVERSE_SUBTRACT};D[JM]=t.MIN,D[QM]=t.MAX;const U={[ey]:t.ZERO,[ty]:t.ONE,[ny]:t.SRC_COLOR,[hc]:t.SRC_ALPHA,[ly]:t.SRC_ALPHA_SATURATE,[ay]:t.DST_COLOR,[ry]:t.DST_ALPHA,[iy]:t.ONE_MINUS_SRC_COLOR,[dc]:t.ONE_MINUS_SRC_ALPHA,[oy]:t.ONE_MINUS_DST_COLOR,[sy]:t.ONE_MINUS_DST_ALPHA,[cy]:t.CONSTANT_COLOR,[uy]:t.ONE_MINUS_CONSTANT_COLOR,[fy]:t.CONSTANT_ALPHA,[hy]:t.ONE_MINUS_CONSTANT_ALPHA};function S(k,be,de,Le,me,ce,Ue,We,vt,ut){if(k===Ui){x===!0&&(ie(t.BLEND),x=!1);return}if(x===!1&&(z(t.BLEND),x=!0),k!==jM){if(k!==g||ut!==w){if((h!==ur||v!==ur)&&(t.blendEquation(t.FUNC_ADD),h=ur,v=ur),ut)switch(k){case Jr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dh:t.blendFunc(t.ONE,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Jr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Dh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,E=null,L=null,I=null,R.set(0,0,0),F=0,g=k,w=ut}return}me=me||be,ce=ce||de,Ue=Ue||Le,(be!==h||me!==v)&&(t.blendEquationSeparate(D[be],D[me]),h=be,v=me),(de!==M||Le!==E||ce!==L||Ue!==I)&&(t.blendFuncSeparate(U[de],U[Le],U[ce],U[Ue]),M=de,E=Le,L=ce,I=Ue),(We.equals(R)===!1||vt!==F)&&(t.blendColor(We.r,We.g,We.b,vt),R.copy(We),F=vt),g=k,w=!1}function ne(k,be){k.side===ci?ie(t.CULL_FACE):z(t.CULL_FACE);let de=k.side===an;be&&(de=!de),Z(de),k.blending===Jr&&k.transparent===!1?S(Ui):S(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Le=k.stencilWrite;o.setTest(Le),Le&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),C(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?z(t.SAMPLE_ALPHA_TO_COVERAGE):ie(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(k){T!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),T=k)}function K(k){k!==YM?(z(t.CULL_FACE),k!==O&&(k===Ih?t.cullFace(t.BACK):k===qM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ie(t.CULL_FACE),O=k}function b(k){k!==j&&(te&&t.lineWidth(k),j=k)}function C(k,be,de){k?(z(t.POLYGON_OFFSET_FILL),(Y!==be||se!==de)&&(t.polygonOffset(be,de),Y=be,se=de)):ie(t.POLYGON_OFFSET_FILL)}function N(k){k?z(t.SCISSOR_TEST):ie(t.SCISSOR_TEST)}function B(k){k===void 0&&(k=t.TEXTURE0+ae-1),pe!==k&&(t.activeTexture(k),pe=k)}function he(k,be,de){de===void 0&&(pe===null?de=t.TEXTURE0+ae-1:de=pe);let Le=ve[de];Le===void 0&&(Le={type:void 0,texture:void 0},ve[de]=Le),(Le.type!==k||Le.texture!==be)&&(pe!==de&&(t.activeTexture(de),pe=de),t.bindTexture(k,be||ye[k]),Le.type=k,Le.texture=be)}function y(){const k=ve[pe];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function m(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(k){qe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),qe.copy(k))}function Ie(k){re.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),re.copy(k))}function De(k,be){let de=c.get(be);de===void 0&&(de=new WeakMap,c.set(be,de));let Le=de.get(k);Le===void 0&&(Le=t.getUniformBlockIndex(be,k.name),de.set(k,Le))}function xe(k,be){const Le=c.get(be).get(k);l.get(be)!==Le&&(t.uniformBlockBinding(be,Le,k.__bindingPointIndex),l.set(be,Le))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},pe=null,ve={},f={},d=new WeakMap,p=[],_=null,x=!1,g=null,h=null,M=null,E=null,v=null,L=null,I=null,R=new Qe(0,0,0),F=0,w=!1,T=null,O=null,j=null,Y=null,se=null,qe.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:z,disable:ie,bindFramebuffer:le,drawBuffers:oe,useProgram:Oe,setBlending:S,setMaterial:ne,setFlipSided:Z,setCullFace:K,setLineWidth:b,setPolygonOffset:C,setScissorTest:N,activeTexture:B,bindTexture:he,unbindTexture:y,compressedTexImage2D:m,compressedTexImage3D:P,texImage2D:Ae,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:H,texSubImage3D:q,compressedTexSubImage2D:$,compressedTexSubImage3D:Se,scissor:Re,viewport:Ie,reset:ze}}function dA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,m){return p?new OffscreenCanvas(y,m):ca("canvas")}function x(y,m,P){let H=1;const q=he(y);if((q.width>P||q.height>P)&&(H=P/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const $=Math.floor(H*q.width),Se=Math.floor(H*q.height);f===void 0&&(f=_($,Se));const fe=m?_($,Se):f;return fe.width=$,fe.height=Se,fe.getContext("2d").drawImage(y,0,0,$,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+$+"x"+Se+")."),fe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),y;return y}function g(y){return y.generateMipmaps}function h(y){t.generateMipmap(y)}function M(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(y,m,P,H,q=!1){if(y!==null){if(t[y]!==void 0)return t[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let $=m;if(m===t.RED&&(P===t.FLOAT&&($=t.R32F),P===t.HALF_FLOAT&&($=t.R16F),P===t.UNSIGNED_BYTE&&($=t.R8)),m===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.R8UI),P===t.UNSIGNED_SHORT&&($=t.R16UI),P===t.UNSIGNED_INT&&($=t.R32UI),P===t.BYTE&&($=t.R8I),P===t.SHORT&&($=t.R16I),P===t.INT&&($=t.R32I)),m===t.RG&&(P===t.FLOAT&&($=t.RG32F),P===t.HALF_FLOAT&&($=t.RG16F),P===t.UNSIGNED_BYTE&&($=t.RG8)),m===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RG8UI),P===t.UNSIGNED_SHORT&&($=t.RG16UI),P===t.UNSIGNED_INT&&($=t.RG32UI),P===t.BYTE&&($=t.RG8I),P===t.SHORT&&($=t.RG16I),P===t.INT&&($=t.RG32I)),m===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RGB8UI),P===t.UNSIGNED_SHORT&&($=t.RGB16UI),P===t.UNSIGNED_INT&&($=t.RGB32UI),P===t.BYTE&&($=t.RGB8I),P===t.SHORT&&($=t.RGB16I),P===t.INT&&($=t.RGB32I)),m===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RGBA8UI),P===t.UNSIGNED_SHORT&&($=t.RGBA16UI),P===t.UNSIGNED_INT&&($=t.RGBA32UI),P===t.BYTE&&($=t.RGBA8I),P===t.SHORT&&($=t.RGBA16I),P===t.INT&&($=t.RGBA32I)),m===t.RGB&&P===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),m===t.RGBA){const Se=q?xo:nt.getTransfer(H);P===t.FLOAT&&($=t.RGBA32F),P===t.HALF_FLOAT&&($=t.RGBA16F),P===t.UNSIGNED_BYTE&&($=Se===ht?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(y,m){let P;return y?m===null||m===xr||m===aa?P=t.DEPTH24_STENCIL8:m===Xn?P=t.DEPTH32F_STENCIL8:m===sa&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===xr||m===aa?P=t.DEPTH_COMPONENT24:m===Xn?P=t.DEPTH_COMPONENT32F:m===sa&&(P=t.DEPTH_COMPONENT16),P}function L(y,m){return g(y)===!0||y.isFramebufferTexture&&y.minFilter!==pn&&y.minFilter!==Wn?Math.log2(Math.max(m.width,m.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?m.mipmaps.length:1}function I(y){const m=y.target;m.removeEventListener("dispose",I),F(m),m.isVideoTexture&&u.delete(m)}function R(y){const m=y.target;m.removeEventListener("dispose",R),T(m)}function F(y){const m=i.get(y);if(m.__webglInit===void 0)return;const P=y.source,H=d.get(P);if(H){const q=H[m.__cacheKey];q.usedTimes--,q.usedTimes===0&&w(y),Object.keys(H).length===0&&d.delete(P)}i.remove(y)}function w(y){const m=i.get(y);t.deleteTexture(m.__webglTexture);const P=y.source,H=d.get(P);delete H[m.__cacheKey],a.memory.textures--}function T(y){const m=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(m.__webglFramebuffer[H]))for(let q=0;q<m.__webglFramebuffer[H].length;q++)t.deleteFramebuffer(m.__webglFramebuffer[H][q]);else t.deleteFramebuffer(m.__webglFramebuffer[H]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[H])}else{if(Array.isArray(m.__webglFramebuffer))for(let H=0;H<m.__webglFramebuffer.length;H++)t.deleteFramebuffer(m.__webglFramebuffer[H]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let H=0;H<m.__webglColorRenderbuffer.length;H++)m.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[H]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const P=y.textures;for(let H=0,q=P.length;H<q;H++){const $=i.get(P[H]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(P[H])}i.remove(y)}let O=0;function j(){O=0}function Y(){const y=O;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),O+=1,y}function se(y){const m=[];return m.push(y.wrapS),m.push(y.wrapT),m.push(y.wrapR||0),m.push(y.magFilter),m.push(y.minFilter),m.push(y.anisotropy),m.push(y.internalFormat),m.push(y.format),m.push(y.type),m.push(y.generateMipmaps),m.push(y.premultiplyAlpha),m.push(y.flipY),m.push(y.unpackAlignment),m.push(y.colorSpace),m.join()}function ae(y,m){const P=i.get(y);if(y.isVideoTexture&&N(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){const H=y.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(P,y,m);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+m)}function te(y,m){const P=i.get(y);if(y.version>0&&P.__version!==y.version){ye(P,y,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+m)}function J(y,m){const P=i.get(y);if(y.version>0&&P.__version!==y.version){ye(P,y,m);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+m)}function X(y,m){const P=i.get(y);if(y.version>0&&P.__version!==y.version){z(P,y,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+m)}const pe={[ra]:t.REPEAT,[dr]:t.CLAMP_TO_EDGE,[Ec]:t.MIRRORED_REPEAT},ve={[pn]:t.NEAREST,[yy]:t.NEAREST_MIPMAP_NEAREST,[Aa]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[ll]:t.LINEAR_MIPMAP_NEAREST,[pr]:t.LINEAR_MIPMAP_LINEAR},we={[wy]:t.NEVER,[Iy]:t.ALWAYS,[Ay]:t.LESS,[Zm]:t.LEQUAL,[Ry]:t.EQUAL,[Ly]:t.GEQUAL,[Cy]:t.GREATER,[Py]:t.NOTEQUAL};function Fe(y,m){if(m.type===Xn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Wn||m.magFilter===ll||m.magFilter===Aa||m.magFilter===pr||m.minFilter===Wn||m.minFilter===ll||m.minFilter===Aa||m.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,pe[m.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,pe[m.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,pe[m.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,ve[m.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,ve[m.minFilter]),m.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,we[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===pn||m.minFilter!==Aa&&m.minFilter!==pr||m.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function qe(y,m){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,m.addEventListener("dispose",I));const H=m.source;let q=d.get(H);q===void 0&&(q={},d.set(H,q));const $=se(m);if($!==y.__cacheKey){q[$]===void 0&&(q[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),q[$].usedTimes++;const Se=q[y.__cacheKey];Se!==void 0&&(q[y.__cacheKey].usedTimes--,Se.usedTimes===0&&w(m)),y.__cacheKey=$,y.__webglTexture=q[$].texture}return P}function re(y,m,P){return Math.floor(Math.floor(y/P)/m)}function _e(y,m,P,H){const $=y.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,P,H,m.data);else{$.sort((ue,Re)=>ue.start-Re.start);let Se=0;for(let ue=1;ue<$.length;ue++){const Re=$[Se],Ie=$[ue],De=Re.start+Re.count,xe=re(Ie.start,m.width,4),ze=re(Re.start,m.width,4);Ie.start<=De+1&&xe===ze&&re(Ie.start+Ie.count-1,m.width,4)===xe?Re.count=Math.max(Re.count,Ie.start+Ie.count-Re.start):(++Se,$[Se]=Ie)}$.length=Se+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let ue=0,Re=$.length;ue<Re;ue++){const Ie=$[ue],De=Math.floor(Ie.start/4),xe=Math.ceil(Ie.count/4),ze=De%m.width,k=Math.floor(De/m.width),be=xe,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,ze,k,be,de,P,H,m.data)}y.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function ye(y,m,P){let H=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(H=t.TEXTURE_3D);const q=qe(y,m),$=m.source;n.bindTexture(H,y.__webglTexture,t.TEXTURE0+P);const Se=i.get($);if($.version!==Se.__version||q===!0){n.activeTexture(t.TEXTURE0+P);const fe=nt.getPrimaries(nt.workingColorSpace),Ee=m.colorSpace===Pi?null:nt.getPrimaries(m.colorSpace),Ae=m.colorSpace===Pi||fe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ue=x(m.image,!1,r.maxTextureSize);ue=B(m,ue);const Re=s.convert(m.format,m.colorSpace),Ie=s.convert(m.type);let De=E(m.internalFormat,Re,Ie,m.colorSpace,m.isVideoTexture);Fe(H,m);let xe;const ze=m.mipmaps,k=m.isVideoTexture!==!0,be=Se.__version===void 0||q===!0,de=$.dataReady,Le=L(m,ue);if(m.isDepthTexture)De=v(m.format===la,m.type),be&&(k?n.texStorage2D(t.TEXTURE_2D,1,De,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,Re,Ie,null));else if(m.isDataTexture)if(ze.length>0){k&&be&&n.texStorage2D(t.TEXTURE_2D,Le,De,ze[0].width,ze[0].height);for(let me=0,ce=ze.length;me<ce;me++)xe=ze[me],k?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,me,De,xe.width,xe.height,0,Re,Ie,xe.data);m.generateMipmaps=!1}else k?(be&&n.texStorage2D(t.TEXTURE_2D,Le,De,ue.width,ue.height),de&&_e(m,ue,Re,Ie)):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,Re,Ie,ue.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){k&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,ze[0].width,ze[0].height,ue.depth);for(let me=0,ce=ze.length;me<ce;me++)if(xe=ze[me],m.format!==Ln)if(Re!==null)if(k){if(de)if(m.layerUpdates.size>0){const Ue=md(xe.width,xe.height,m.format,m.type);for(const We of m.layerUpdates){const vt=xe.data.subarray(We*Ue/xe.data.BYTES_PER_ELEMENT,(We+1)*Ue/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,We,xe.width,xe.height,1,Re,vt)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,ue.depth,Re,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,De,xe.width,xe.height,ue.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,ue.depth,Re,Ie,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,De,xe.width,xe.height,ue.depth,0,Re,Ie,xe.data)}else{k&&be&&n.texStorage2D(t.TEXTURE_2D,Le,De,ze[0].width,ze[0].height);for(let me=0,ce=ze.length;me<ce;me++)xe=ze[me],m.format!==Ln?Re!==null?k?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,me,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,me,De,xe.width,xe.height,0,Re,Ie,xe.data)}else if(m.isDataArrayTexture)if(k){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,ue.width,ue.height,ue.depth),de)if(m.layerUpdates.size>0){const me=md(ue.width,ue.height,m.format,m.type);for(const ce of m.layerUpdates){const Ue=ue.data.subarray(ce*me/ue.data.BYTES_PER_ELEMENT,(ce+1)*me/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Re,Ie,Ue)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Ie,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,Re,Ie,ue.data);else if(m.isData3DTexture)k?(be&&n.texStorage3D(t.TEXTURE_3D,Le,De,ue.width,ue.height,ue.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Ie,ue.data)):n.texImage3D(t.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,Re,Ie,ue.data);else if(m.isFramebufferTexture){if(be)if(k)n.texStorage2D(t.TEXTURE_2D,Le,De,ue.width,ue.height);else{let me=ue.width,ce=ue.height;for(let Ue=0;Ue<Le;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,De,me,ce,0,Re,Ie,null),me>>=1,ce>>=1}}else if(ze.length>0){if(k&&be){const me=he(ze[0]);n.texStorage2D(t.TEXTURE_2D,Le,De,me.width,me.height)}for(let me=0,ce=ze.length;me<ce;me++)xe=ze[me],k?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Re,Ie,xe):n.texImage2D(t.TEXTURE_2D,me,De,Re,Ie,xe);m.generateMipmaps=!1}else if(k){if(be){const me=he(ue);n.texStorage2D(t.TEXTURE_2D,Le,De,me.width,me.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Ie,ue)}else n.texImage2D(t.TEXTURE_2D,0,De,Re,Ie,ue);g(m)&&h(H),Se.__version=$.version,m.onUpdate&&m.onUpdate(m)}y.__version=m.version}function z(y,m,P){if(m.image.length!==6)return;const H=qe(y,m),q=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+P);const $=i.get(q);if(q.version!==$.__version||H===!0){n.activeTexture(t.TEXTURE0+P);const Se=nt.getPrimaries(nt.workingColorSpace),fe=m.colorSpace===Pi?null:nt.getPrimaries(m.colorSpace),Ee=m.colorSpace===Pi||Se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=m.isCompressedTexture||m.image[0].isCompressedTexture,ue=m.image[0]&&m.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!Ae&&!ue?Re[ce]=x(m.image[ce],!0,r.maxCubemapSize):Re[ce]=ue?m.image[ce].image:m.image[ce],Re[ce]=B(m,Re[ce]);const Ie=Re[0],De=s.convert(m.format,m.colorSpace),xe=s.convert(m.type),ze=E(m.internalFormat,De,xe,m.colorSpace),k=m.isVideoTexture!==!0,be=$.__version===void 0||H===!0,de=q.dataReady;let Le=L(m,Ie);Fe(t.TEXTURE_CUBE_MAP,m);let me;if(Ae){k&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ze,Ie.width,Ie.height);for(let ce=0;ce<6;ce++){me=Re[ce].mipmaps;for(let Ue=0;Ue<me.length;Ue++){const We=me[Ue];m.format!==Ln?De!==null?k?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,We.width,We.height,De,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,ze,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,0,0,We.width,We.height,De,xe,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue,ze,We.width,We.height,0,De,xe,We.data)}}}else{if(me=m.mipmaps,k&&be){me.length>0&&Le++;const ce=he(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,De,xe,Re[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,Re[ce].width,Re[ce].height,0,De,xe,Re[ce].data);for(let Ue=0;Ue<me.length;Ue++){const vt=me[Ue].image[ce].image;k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,vt.width,vt.height,De,xe,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,ze,vt.width,vt.height,0,De,xe,vt.data)}}else{k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De,xe,Re[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,De,xe,Re[ce]);for(let Ue=0;Ue<me.length;Ue++){const We=me[Ue];k?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,0,0,De,xe,We.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ue+1,ze,De,xe,We.image[ce])}}}g(m)&&h(t.TEXTURE_CUBE_MAP),$.__version=q.version,m.onUpdate&&m.onUpdate(m)}y.__version=m.version}function ie(y,m,P,H,q,$){const Se=s.convert(P.format,P.colorSpace),fe=s.convert(P.type),Ee=E(P.internalFormat,Se,fe,P.colorSpace),Ae=i.get(m),ue=i.get(P);if(ue.__renderTarget=m,!Ae.__hasExternalTextures){const Re=Math.max(1,m.width>>$),Ie=Math.max(1,m.height>>$);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,$,Ee,Re,Ie,m.depth,0,Se,fe,null):n.texImage2D(q,$,Ee,Re,Ie,0,Se,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),C(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,q,ue.__webglTexture,0,b(m)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,q,ue.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(y,m,P){if(t.bindRenderbuffer(t.RENDERBUFFER,y),m.depthBuffer){const H=m.depthTexture,q=H&&H.isDepthTexture?H.type:null,$=v(m.stencilBuffer,q),Se=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=b(m);C(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,$,m.width,m.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,$,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,$,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,y)}else{const H=m.textures;for(let q=0;q<H.length;q++){const $=H[q],Se=s.convert($.format,$.colorSpace),fe=s.convert($.type),Ee=E($.internalFormat,Se,fe,$.colorSpace),Ae=b(m);P&&C(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Ee,m.width,m.height):C(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Ee,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(y,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(m.depthTexture);H.__renderTarget=m,(!H.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ae(m.depthTexture,0);const q=H.__webglTexture,$=b(m);if(m.depthTexture.format===oa)C(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(m.depthTexture.format===la)C(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Oe(y){const m=i.get(y),P=y.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==y.depthTexture){const H=y.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),H){const q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),m.__depthDisposeCallback=q}m.__boundDepthTexture=H}if(y.depthTexture&&!m.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const H=y.texture.mipmaps;H&&H.length>0?oe(m.__webglFramebuffer[0],y):oe(m.__webglFramebuffer,y)}else if(P){m.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[H]),m.__webglDepthbuffer[H]===void 0)m.__webglDepthbuffer[H]=t.createRenderbuffer(),le(m.__webglDepthbuffer[H],y,!1);else{const q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,$)}}else{const H=y.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),le(m.__webglDepthbuffer,y,!1);else{const q=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(y,m,P){const H=i.get(y);m!==void 0&&ie(H.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Oe(y)}function U(y){const m=y.texture,P=i.get(y),H=i.get(m);y.addEventListener("dispose",R);const q=y.textures,$=y.isWebGLCubeRenderTarget===!0,Se=q.length>1;if(Se||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=m.version,a.memory.textures++),$){P.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<m.mipmaps.length;Ee++)P.__webglFramebuffer[fe][Ee]=t.createFramebuffer()}else P.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let fe=0;fe<m.mipmaps.length;fe++)P.__webglFramebuffer[fe]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Se)for(let fe=0,Ee=q.length;fe<Ee;fe++){const Ae=i.get(q[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(y.samples>0&&C(y)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let fe=0;fe<q.length;fe++){const Ee=q[fe];P.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[fe]);const Ae=s.convert(Ee.format,Ee.colorSpace),ue=s.convert(Ee.type),Re=E(Ee.internalFormat,Ae,ue,Ee.colorSpace,y.isXRRenderTarget===!0),Ie=b(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Re,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,P.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),le(P.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,m);for(let fe=0;fe<6;fe++)if(m.mipmaps&&m.mipmaps.length>0)for(let Ee=0;Ee<m.mipmaps.length;Ee++)ie(P.__webglFramebuffer[fe][Ee],y,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else ie(P.__webglFramebuffer[fe],y,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(m)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let fe=0,Ee=q.length;fe<Ee;fe++){const Ae=q[fe],ue=i.get(Ae);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Fe(t.TEXTURE_2D,Ae),ie(P.__webglFramebuffer,y,Ae,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Ae)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(fe=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,H.__webglTexture),Fe(fe,m),m.mipmaps&&m.mipmaps.length>0)for(let Ee=0;Ee<m.mipmaps.length;Ee++)ie(P.__webglFramebuffer[Ee],y,m,t.COLOR_ATTACHMENT0,fe,Ee);else ie(P.__webglFramebuffer,y,m,t.COLOR_ATTACHMENT0,fe,0);g(m)&&h(fe),n.unbindTexture()}y.depthBuffer&&Oe(y)}function S(y){const m=y.textures;for(let P=0,H=m.length;P<H;P++){const q=m[P];if(g(q)){const $=M(y),Se=i.get(q).__webglTexture;n.bindTexture($,Se),h($),n.unbindTexture()}}}const ne=[],Z=[];function K(y){if(y.samples>0){if(C(y)===!1){const m=y.textures,P=y.width,H=y.height;let q=t.COLOR_BUFFER_BIT;const $=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(y),fe=m.length>1;if(fe)for(let Ae=0;Ae<m.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ee=y.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ae=0;Ae<m.length;Ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);const ue=i.get(m[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,P,H,0,0,P,H,q,t.NEAREST),l===!0&&(ne.length=0,Z.length=0,ne.push(t.COLOR_ATTACHMENT0+Ae),y.depthBuffer&&y.resolveDepthBuffer===!1&&(ne.push($),Z.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<m.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);const ue=i.get(m[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const m=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function b(y){return Math.min(r.maxSamples,y.samples)}function C(y){const m=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function N(y){const m=a.render.frame;u.get(y)!==m&&(u.set(y,m),y.update())}function B(y,m){const P=y.colorSpace,H=y.format,q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==us&&P!==Pi&&(nt.getTransfer(P)===ht?(H!==Ln||q!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),m}function he(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=ae,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=X,this.rebindTextures=D,this.setupRenderTarget=U,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=C}function pA(t,e){function n(i,r=Pi){let s;const a=nt.getTransfer(r);if(i===Kn)return t.UNSIGNED_BYTE;if(i===Fu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ou)return t.UNSIGNED_SHORT_5_5_5_1;if(i===$m)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wm)return t.BYTE;if(i===Xm)return t.SHORT;if(i===sa)return t.UNSIGNED_SHORT;if(i===Nu)return t.INT;if(i===xr)return t.UNSIGNED_INT;if(i===Xn)return t.FLOAT;if(i===ga)return t.HALF_FLOAT;if(i===Ym)return t.ALPHA;if(i===qm)return t.RGB;if(i===Ln)return t.RGBA;if(i===oa)return t.DEPTH_COMPONENT;if(i===la)return t.DEPTH_STENCIL;if(i===Bu)return t.RED;if(i===ku)return t.RED_INTEGER;if(i===jm)return t.RG;if(i===zu)return t.RG_INTEGER;if(i===Hu)return t.RGBA_INTEGER;if(i===eo||i===to||i===no||i===io)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bc||i===Tc||i===wc||i===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Cc)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Lc||i===Ic||i===Dc||i===Uc||i===Nc||i===Fc||i===Oc||i===Bc||i===kc||i===zc||i===Hc||i===Vc||i===Gc||i===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ic)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wc)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===Xc||i===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ro)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Km||i===Yc||i===qc||i===jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ro)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
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

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hi({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new Mr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends gs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=new _A,g=n.getContextAttributes();let h=null,M=null;const E=[],v=[],L=new je;let I=null;const R=new sn;R.viewport=new dt;const F=new sn;F.viewport=new dt;const w=[R,F],T=new BE;let O=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let _e=E[re];return _e===void 0&&(_e=new Cl,E[re]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(re){let _e=E[re];return _e===void 0&&(_e=new Cl,E[re]=_e),_e.getGripSpace()},this.getHand=function(re){let _e=E[re];return _e===void 0&&(_e=new Cl,E[re]=_e),_e.getHandSpace()};function Y(re){const _e=v.indexOf(re.inputSource);if(_e===-1)return;const ye=E[_e];ye!==void 0&&(ye.update(re.inputSource,re.frame,c||a),ye.dispatchEvent({type:re.type,data:re.inputSource}))}function se(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",ae);for(let re=0;re<E.length;re++){const _e=v[re];_e!==null&&(v[re]=null,E[re].disconnect(_e))}O=null,j=null,x.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,M=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",se),r.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,z=null,ie=null;g.depth&&(ie=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ye=g.stencil?la:oa,z=g.stencil?aa:xr);const le={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Sr(d.textureWidth,d.textureHeight,{format:Ln,type:Kn,depthTexture:new lg(d.textureWidth,d.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Sr(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(re){for(let _e=0;_e<re.removed.length;_e++){const ye=re.removed[_e],z=v.indexOf(ye);z>=0&&(v[z]=null,E[z].disconnect(ye))}for(let _e=0;_e<re.added.length;_e++){const ye=re.added[_e];let z=v.indexOf(ye);if(z===-1){for(let le=0;le<E.length;le++)if(le>=v.length){v.push(ye),z=le;break}else if(v[le]===null){v[le]=ye,z=le;break}if(z===-1)break}const ie=E[z];ie&&ie.connect(ye)}}const te=new W,J=new W;function X(re,_e,ye){te.setFromMatrixPosition(_e.matrixWorld),J.setFromMatrixPosition(ye.matrixWorld);const z=te.distanceTo(J),ie=_e.projectionMatrix.elements,le=ye.projectionMatrix.elements,oe=ie[14]/(ie[10]-1),Oe=ie[14]/(ie[10]+1),D=(ie[9]+1)/ie[5],U=(ie[9]-1)/ie[5],S=(ie[8]-1)/ie[0],ne=(le[8]+1)/le[0],Z=oe*S,K=oe*ne,b=z/(-S+ne),C=b*-S;if(_e.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(C),re.translateZ(b),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),ie[10]===-1)re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const N=oe+b,B=Oe+b,he=Z-C,y=K+(z-C),m=D*Oe/B*N,P=U*Oe/B*N;re.projectionMatrix.makePerspective(he,y,m,P,N,B),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function pe(re,_e){_e===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(_e.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let _e=re.near,ye=re.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),T.near=F.near=R.near=_e,T.far=F.far=R.far=ye,(O!==T.near||j!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,j=T.far),R.layers.mask=re.layers.mask|2,F.layers.mask=re.layers.mask|4,T.layers.mask=R.layers.mask|F.layers.mask;const z=re.parent,ie=T.cameras;pe(T,z);for(let le=0;le<ie.length;le++)pe(ie[le],z);ie.length===2?X(T,R,F):T.projectionMatrix.copy(R.projectionMatrix),ve(re,T,z)};function ve(re,_e,ye){ye===null?re.matrix.copy(_e.matrixWorld):(re.matrix.copy(ye.matrixWorld),re.matrix.invert(),re.matrix.multiply(_e.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=fs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)};let we=null;function Fe(re,_e){if(u=_e.getViewerPose(c||a),_=_e,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let z=!1;ye.length!==T.cameras.length&&(T.cameras.length=0,z=!0);for(let oe=0;oe<ye.length;oe++){const Oe=ye[oe];let D=null;if(p!==null)D=p.getViewport(Oe);else{const S=f.getViewSubImage(d,Oe);D=S.viewport,oe===0&&(e.setRenderTargetTextures(M,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(M))}let U=w[oe];U===void 0&&(U=new sn,U.layers.enable(oe),U.viewport=new dt,w[oe]=U),U.matrix.fromArray(Oe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Oe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(D.x,D.y,D.width,D.height),oe===0&&(T.matrix.copy(U.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),z===!0&&T.cameras.push(U)}const ie=r.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const oe=f.getDepthInformation(ye[0]);oe&&oe.isValid&&oe.texture&&x.init(e,oe,r.renderState)}}for(let ye=0;ye<E.length;ye++){const z=v[ye],ie=E[ye];z!==null&&ie!==void 0&&ie.update(z,_e,c||a)}we&&we(re,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const qe=new dg;qe.setAnimationLoop(Fe),this.setAnimationLoop=function(re){we=re},this.dispose=function(){}}}const sr=new On,xA=new gt;function SA(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,rg(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,M,E,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,v)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),x(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,M,E):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===an&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===an&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const M=e.get(h),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,sr.copy(v),sr.x*=-1,sr.y*=-1,sr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(sr)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,M,E){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*M,g.scale.value=E*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,M){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const M=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function MA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const v=E.program;i.uniformBlockBinding(M,v)}function c(M,E){let v=r[M.id];v===void 0&&(_(M),v=u(M),r[M.id]=v,M.addEventListener("dispose",g));const L=E.program;i.updateUBOMapping(M,L);const I=e.render.frame;s[M.id]!==I&&(d(M),s[M.id]=I)}function u(M){const E=f();M.__bindingPointIndex=E;const v=t.createBuffer(),L=M.__size,I=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,L,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,v),v}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=r[M.id],v=M.uniforms,L=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let I=0,R=v.length;I<R;I++){const F=Array.isArray(v[I])?v[I]:[v[I]];for(let w=0,T=F.length;w<T;w++){const O=F[w];if(p(O,I,w,L)===!0){const j=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value];let se=0;for(let ae=0;ae<Y.length;ae++){const te=Y[ae],J=x(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,j+se,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):(te.toArray(O.__data,se),se+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(M,E,v,L){const I=M.value,R=E+"_"+v;if(L[R]===void 0)return typeof I=="number"||typeof I=="boolean"?L[R]=I:L[R]=I.clone(),!0;{const F=L[R];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return L[R]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function _(M){const E=M.uniforms;let v=0;const L=16;for(let R=0,F=E.length;R<F;R++){const w=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,O=w.length;T<O;T++){const j=w[T],Y=Array.isArray(j.value)?j.value:[j.value];for(let se=0,ae=Y.length;se<ae;se++){const te=Y[se],J=x(te),X=v%L,pe=X%J.boundary,ve=X+pe;v+=pe,ve!==0&&L-ve<J.storage&&(v+=L-ve),j.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=v,v+=J.storage}}}const I=v%L;return I>0&&(v+=L-I),M.__size=v,M.__cache={},this}function x(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function g(M){const E=M.target;E.removeEventListener("dispose",g);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class yA{constructor(e={}){const{canvas:n=jy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,h=null;const M=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=xn;let I=0,R=0,F=null,w=-1,T=null;const O=new dt,j=new dt;let Y=null;const se=new Qe(0);let ae=0,te=n.width,J=n.height,X=1,pe=null,ve=null;const we=new dt(0,0,te,J),Fe=new dt(0,0,te,J);let qe=!1;const re=new $u;let _e=!1,ye=!1;const z=new gt,ie=new gt,le=new W,oe=new dt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function U(){return F===null?X:1}let S=i;function ne(A,V){return n.getContext(A,V)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uu}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ce,!1),S===null){const V="webgl2";if(S=ne(V,A),S===null)throw ne(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,K,b,C,N,B,he,y,m,P,H,q,$,Se,fe,Ee,Ae,ue,Re,Ie,De,xe,ze,k;function be(){Z=new I1(S),Z.init(),xe=new pA(S,Z),K=new T1(S,Z,e,xe),b=new hA(S,Z),K.reverseDepthBuffer&&d&&b.buffers.depth.setReversed(!0),C=new N1(S),N=new Qw,B=new dA(S,Z,b,N,K,xe,C),he=new A1(v),y=new L1(v),m=new HE(S),ze=new E1(S,m),P=new D1(S,m,C,ze),H=new O1(S,P,m,C),Re=new F1(S,K,B),Ee=new w1(N),q=new Jw(v,he,y,Z,K,ze,Ee),$=new SA(v,N),Se=new tA,fe=new oA(Z),ue=new y1(v,he,y,b,H,p,l),Ae=new uA(v,H,K),k=new MA(S,C,K,b),Ie=new b1(S,Z,C),De=new U1(S,Z,C),C.programs=q.programs,v.capabilities=K,v.extensions=Z,v.properties=N,v.renderLists=Se,v.shadowMap=Ae,v.state=b,v.info=C}be();const de=new vA(v,S);this.xr=de,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(te,J,!1))},this.getSize=function(A){return A.set(te,J)},this.setSize=function(A,V,Q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=A,J=V,n.width=Math.floor(A*X),n.height=Math.floor(V*X),Q===!0&&(n.style.width=A+"px",n.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(te*X,J*X).floor()},this.setDrawingBufferSize=function(A,V,Q){te=A,J=V,X=Q,n.width=Math.floor(A*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,V,Q,ee){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,V,Q,ee),b.viewport(O.copy(we).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,V,Q,ee){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,V,Q,ee),b.scissor(j.copy(Fe).multiplyScalar(X).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){b.setScissorTest(qe=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Q=!0){let ee=0;if(A){let G=!1;if(F!==null){const ge=F.texture.format;G=ge===Hu||ge===zu||ge===ku}if(G){const ge=F.texture.type,Te=ge===Kn||ge===xr||ge===sa||ge===aa||ge===Fu||ge===Ou,Ne=ue.getClearColor(),Pe=ue.getClearAlpha(),He=Ne.r,Ve=Ne.g,Be=Ne.b;Te?(_[0]=He,_[1]=Ve,_[2]=Be,_[3]=Pe,S.clearBufferuiv(S.COLOR,0,_)):(x[0]=He,x[1]=Ve,x[2]=Be,x[3]=Pe,S.clearBufferiv(S.COLOR,0,x))}else ee|=S.COLOR_BUFFER_BIT}V&&(ee|=S.DEPTH_BUFFER_BIT),Q&&(ee|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),Se.dispose(),fe.dispose(),N.dispose(),he.dispose(),y.dispose(),H.dispose(),ze.dispose(),k.dispose(),q.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ju),de.removeEventListener("sessionend",Qu),Ki.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=C.autoReset,V=Ae.enabled,Q=Ae.autoUpdate,ee=Ae.needsUpdate,G=Ae.type;be(),C.autoReset=A,Ae.enabled=V,Ae.autoUpdate=Q,Ae.needsUpdate=ee,Ae.type=G}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ue(A){const V=A.target;V.removeEventListener("dispose",Ue),We(V)}function We(A){vt(A),N.remove(A)}function vt(A){const V=N.get(A).programs;V!==void 0&&(V.forEach(function(Q){q.releaseProgram(Q)}),A.isShaderMaterial&&q.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Q,ee,G,ge){V===null&&(V=Oe);const Te=G.isMesh&&G.matrixWorld.determinant()<0,Ne=bg(A,V,Q,ee,G);b.setMaterial(ee,Te);let Pe=Q.index,He=1;if(ee.wireframe===!0){if(Pe=P.getWireframeAttribute(Q),Pe===void 0)return;He=2}const Ve=Q.drawRange,Be=Q.attributes.position;let Je=Ve.start*He,ft=(Ve.start+Ve.count)*He;ge!==null&&(Je=Math.max(Je,ge.start*He),ft=Math.min(ft,(ge.start+ge.count)*He)),Pe!==null?(Je=Math.max(Je,0),ft=Math.min(ft,Pe.count)):Be!=null&&(Je=Math.max(Je,0),ft=Math.min(ft,Be.count));const Et=ft-Je;if(Et<0||Et===1/0)return;ze.setup(G,ee,Ne,Q,Pe);let bt,et=Ie;if(Pe!==null&&(bt=m.get(Pe),et=De,et.setIndex(bt)),G.isMesh)ee.wireframe===!0?(b.setLineWidth(ee.wireframeLinewidth*U()),et.setMode(S.LINES)):et.setMode(S.TRIANGLES);else if(G.isLine){let ke=ee.linewidth;ke===void 0&&(ke=1),b.setLineWidth(ke*U()),G.isLineSegments?et.setMode(S.LINES):G.isLineLoop?et.setMode(S.LINE_LOOP):et.setMode(S.LINE_STRIP)}else G.isPoints?et.setMode(S.POINTS):G.isSprite&&et.setMode(S.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))et.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const ke=G._multiDrawStarts,Bt=G._multiDrawCounts,st=G._multiDrawCount,bn=Pe?m.get(Pe).bytesPerElement:1,Tr=N.get(ee).currentProgram.getUniforms();for(let ln=0;ln<st;ln++)Tr.setValue(S,"_gl_DrawID",ln),et.render(ke[ln]/bn,Bt[ln])}else if(G.isInstancedMesh)et.renderInstances(Je,Et,G.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Bt=Math.min(Q.instanceCount,ke);et.renderInstances(Je,Et,Bt)}else et.render(Je,Et)};function ut(A,V,Q){A.transparent===!0&&A.side===ci&&A.forceSinglePass===!1?(A.side=an,A.needsUpdate=!0,Sa(A,V,Q),A.side=zi,A.needsUpdate=!0,Sa(A,V,Q),A.side=ci):Sa(A,V,Q)}this.compile=function(A,V,Q=null){Q===null&&(Q=A),h=fe.get(Q),h.init(V),E.push(h),Q.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),A!==Q&&A.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ge=G.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Ne=ge[Te];ut(Ne,Q,G),ee.add(Ne)}else ut(ge,Q,G),ee.add(ge)}),h=E.pop(),ee},this.compileAsync=function(A,V,Q=null){const ee=this.compile(A,V,Q);return new Promise(G=>{function ge(){if(ee.forEach(function(Te){N.get(Te).currentProgram.isReady()&&ee.delete(Te)}),ee.size===0){G(A);return}setTimeout(ge,10)}Z.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let En=null;function Zn(A){En&&En(A)}function Ju(){Ki.stop()}function Qu(){Ki.start()}const Ki=new dg;Ki.setAnimationLoop(Zn),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(A){En=A,de.setAnimationLoop(A),A===null?Ki.stop():Ki.start()},de.addEventListener("sessionstart",Ju),de.addEventListener("sessionend",Qu),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(V),V=de.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,F),h=fe.get(A,E.length),h.init(V),E.push(h),ie.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(ie),ye=this.localClippingEnabled,_e=Ee.init(this.clippingPlanes,ye),g=Se.get(A,M.length),g.init(),M.push(g),de.enabled===!0&&de.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&Ho(ge,V,-1/0,v.sortObjects)}Ho(A,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(pe,ve),D=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,D&&ue.addToRenderList(g,A),this.info.render.frame++,_e===!0&&Ee.beginShadows();const Q=h.state.shadowsArray;Ae.render(Q,A,V),_e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=g.opaque,G=g.transmissive;if(h.setupLights(),V.isArrayCamera){const ge=V.cameras;if(G.length>0)for(let Te=0,Ne=ge.length;Te<Ne;Te++){const Pe=ge[Te];tf(ee,G,A,Pe)}D&&ue.render(A);for(let Te=0,Ne=ge.length;Te<Ne;Te++){const Pe=ge[Te];ef(g,A,Pe,Pe.viewport)}}else G.length>0&&tf(ee,G,A,V),D&&ue.render(A),ef(g,A,V);F!==null&&R===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),A.isScene===!0&&A.onAfterRender(v,A,V),ze.resetDefaultState(),w=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],_e===!0&&Ee.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ho(A,V,Q,ee){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){ee&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ie);const Te=H.update(A),Ne=A.material;Ne.visible&&g.push(A,Te,Ne,Q,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const Te=H.update(A),Ne=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),oe.copy(Te.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(ie)),Array.isArray(Ne)){const Pe=Te.groups;for(let He=0,Ve=Pe.length;He<Ve;He++){const Be=Pe[He],Je=Ne[Be.materialIndex];Je&&Je.visible&&g.push(A,Te,Je,Q,oe.z,Be)}}else Ne.visible&&g.push(A,Te,Ne,Q,oe.z,null)}}const ge=A.children;for(let Te=0,Ne=ge.length;Te<Ne;Te++)Ho(ge[Te],V,Q,ee)}function ef(A,V,Q,ee){const G=A.opaque,ge=A.transmissive,Te=A.transparent;h.setupLightsView(Q),_e===!0&&Ee.setGlobalState(v.clippingPlanes,Q),ee&&b.viewport(O.copy(ee)),G.length>0&&xa(G,V,Q),ge.length>0&&xa(ge,V,Q),Te.length>0&&xa(Te,V,Q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function tf(A,V,Q,ee){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ee.id]===void 0&&(h.state.transmissionRenderTarget[ee.id]=new Sr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?ga:Kn,minFilter:pr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ge=h.state.transmissionRenderTarget[ee.id],Te=ee.viewport||O;ge.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(se),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),D&&ue.render(Q);const Pe=v.toneMapping;v.toneMapping=Ni;const He=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),h.setupLightsView(ee),_e===!0&&Ee.setGlobalState(v.clippingPlanes,ee),xa(A,Q,ee),B.updateMultisampleRenderTarget(ge),B.updateRenderTargetMipmap(ge),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Be=0,Je=V.length;Be<Je;Be++){const ft=V[Be],Et=ft.object,bt=ft.geometry,et=ft.material,ke=ft.group;if(et.side===ci&&Et.layers.test(ee.layers)){const Bt=et.side;et.side=an,et.needsUpdate=!0,nf(Et,Q,ee,bt,et,ke),et.side=Bt,et.needsUpdate=!0,Ve=!0}}Ve===!0&&(B.updateMultisampleRenderTarget(ge),B.updateRenderTargetMipmap(ge))}v.setRenderTarget(Ne),v.setClearColor(se,ae),He!==void 0&&(ee.viewport=He),v.toneMapping=Pe}function xa(A,V,Q){const ee=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ge=A.length;G<ge;G++){const Te=A[G],Ne=Te.object,Pe=Te.geometry,He=Te.group;let Ve=Te.material;Ve.allowOverride===!0&&ee!==null&&(Ve=ee),Ne.layers.test(Q.layers)&&nf(Ne,V,Q,Pe,Ve,He)}}function nf(A,V,Q,ee,G,ge){A.onBeforeRender(v,V,Q,ee,G,ge),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,V,Q,ee,A,ge),G.transparent===!0&&G.side===ci&&G.forceSinglePass===!1?(G.side=an,G.needsUpdate=!0,v.renderBufferDirect(Q,V,ee,G,A,ge),G.side=zi,G.needsUpdate=!0,v.renderBufferDirect(Q,V,ee,G,A,ge),G.side=ci):v.renderBufferDirect(Q,V,ee,G,A,ge),A.onAfterRender(v,V,Q,ee,G,ge)}function Sa(A,V,Q){V.isScene!==!0&&(V=Oe);const ee=N.get(A),G=h.state.lights,ge=h.state.shadowsArray,Te=G.state.version,Ne=q.getParameters(A,G.state,ge,V,Q),Pe=q.getProgramCacheKey(Ne);let He=ee.programs;ee.environment=A.isMeshStandardMaterial?V.environment:null,ee.fog=V.fog,ee.envMap=(A.isMeshStandardMaterial?y:he).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Ue),He=new Map,ee.programs=He);let Ve=He.get(Pe);if(Ve!==void 0){if(ee.currentProgram===Ve&&ee.lightsStateVersion===Te)return sf(A,Ne),Ve}else Ne.uniforms=q.getUniforms(A),A.onBeforeCompile(Ne,v),Ve=q.acquireProgram(Ne,Pe),He.set(Pe,Ve),ee.uniforms=Ne.uniforms;const Be=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),sf(A,Ne),ee.needsLights=wg(A),ee.lightsStateVersion=Te,ee.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=Ve,ee.uniformsList=null,Ve}function rf(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=so.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function sf(A,V){const Q=N.get(A);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function bg(A,V,Q,ee,G){V.isScene!==!0&&(V=Oe),B.resetTextureUnits();const ge=V.fog,Te=ee.isMeshStandardMaterial?V.environment:null,Ne=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:us,Pe=(ee.isMeshStandardMaterial?y:he).get(ee.envMap||Te),He=ee.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ve=!!Q.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Be=!!Q.morphAttributes.position,Je=!!Q.morphAttributes.normal,ft=!!Q.morphAttributes.color;let Et=Ni;ee.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Et=v.toneMapping);const bt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,et=bt!==void 0?bt.length:0,ke=N.get(ee),Bt=h.state.lights;if(_e===!0&&(ye===!0||A!==T)){const jt=A===T&&ee.id===w;Ee.setState(ee,A,jt)}let st=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Bt.state.version||ke.outputColorSpace!==Ne||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Pe||ee.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==He||ke.vertexTangents!==Ve||ke.morphTargets!==Be||ke.morphNormals!==Je||ke.morphColors!==ft||ke.toneMapping!==Et||ke.morphTargetsCount!==et)&&(st=!0):(st=!0,ke.__version=ee.version);let bn=ke.currentProgram;st===!0&&(bn=Sa(ee,V,G));let Tr=!1,ln=!1,Ms=!1;const Mt=bn.getUniforms(),gn=ke.uniforms;if(b.useProgram(bn.program)&&(Tr=!0,ln=!0,Ms=!0),ee.id!==w&&(w=ee.id,ln=!0),Tr||T!==A){b.buffers.depth.getReversed()?(z.copy(A.projectionMatrix),Zy(z),Jy(z),Mt.setValue(S,"projectionMatrix",z)):Mt.setValue(S,"projectionMatrix",A.projectionMatrix),Mt.setValue(S,"viewMatrix",A.matrixWorldInverse);const nn=Mt.map.cameraPosition;nn!==void 0&&nn.setValue(S,le.setFromMatrixPosition(A.matrixWorld)),K.logarithmicDepthBuffer&&Mt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Mt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,ln=!0,Ms=!0)}if(G.isSkinnedMesh){Mt.setOptional(S,G,"bindMatrix"),Mt.setOptional(S,G,"bindMatrixInverse");const jt=G.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Mt.setValue(S,"boneTexture",jt.boneTexture,B))}G.isBatchedMesh&&(Mt.setOptional(S,G,"batchingTexture"),Mt.setValue(S,"batchingTexture",G._matricesTexture,B),Mt.setOptional(S,G,"batchingIdTexture"),Mt.setValue(S,"batchingIdTexture",G._indirectTexture,B),Mt.setOptional(S,G,"batchingColorTexture"),G._colorsTexture!==null&&Mt.setValue(S,"batchingColorTexture",G._colorsTexture,B));const _n=Q.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Re.update(G,Q,bn),(ln||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Mt.setValue(S,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(gn.envMap.value=Pe,gn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&V.environment!==null&&(gn.envMapIntensity.value=V.environmentIntensity),ln&&(Mt.setValue(S,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Tg(gn,Ms),ge&&ee.fog===!0&&$.refreshFogUniforms(gn,ge),$.refreshMaterialUniforms(gn,ee,X,J,h.state.transmissionRenderTarget[A.id]),so.upload(S,rf(ke),gn,B)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(so.upload(S,rf(ke),gn,B),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Mt.setValue(S,"center",G.center),Mt.setValue(S,"modelViewMatrix",G.modelViewMatrix),Mt.setValue(S,"normalMatrix",G.normalMatrix),Mt.setValue(S,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const jt=ee.uniformsGroups;for(let nn=0,Vo=jt.length;nn<Vo;nn++){const Zi=jt[nn];k.update(Zi,bn),k.bind(Zi,bn)}}return bn}function Tg(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function wg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(A,V,Q){const ee=N.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),N.get(A.texture).__webglTexture=V,N.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:Q,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const Q=N.get(A);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};const Ag=S.createFramebuffer();this.setRenderTarget=function(A,V=0,Q=0){F=A,I=V,R=Q;let ee=!0,G=null,ge=!1,Te=!1;if(A){const Pe=N.get(A);if(Pe.__useDefaultFramebuffer!==void 0)b.bindFramebuffer(S.FRAMEBUFFER,null),ee=!1;else if(Pe.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(Pe.__hasExternalTextures)B.rebindTextures(A,N.get(A.texture).__webglTexture,N.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Pe.__boundDepthTexture!==Be){if(Be!==null&&N.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const Ve=N.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?G=Ve[V][Q]:G=Ve[V],ge=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?G=N.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?G=Ve[Q]:G=Ve,O.copy(A.viewport),j.copy(A.scissor),Y=A.scissorTest}else O.copy(we).multiplyScalar(X).floor(),j.copy(Fe).multiplyScalar(X).floor(),Y=qe;if(Q!==0&&(G=Ag),b.bindFramebuffer(S.FRAMEBUFFER,G)&&ee&&b.drawBuffers(A,G),b.viewport(O),b.scissor(j),b.setScissorTest(Y),ge){const Pe=N.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,Q)}else if(Te){const Pe=N.get(A.texture),He=V;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,Q,He)}else if(A!==null&&Q!==0){const Pe=N.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Pe.__webglTexture,Q)}w=-1},this.readRenderTargetPixels=function(A,V,Q,ee,G,ge,Te,Ne=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){b.bindFramebuffer(S.FRAMEBUFFER,Pe);try{const He=A.textures[Ne],Ve=He.format,Be=He.type;if(!K.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-ee&&Q>=0&&Q<=A.height-G&&(A.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ne),S.readPixels(V,Q,ee,G,xe.convert(Ve),xe.convert(Be),ge))}finally{const He=F!==null?N.get(F).__webglFramebuffer:null;b.bindFramebuffer(S.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,V,Q,ee,G,ge,Te,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=N.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(V>=0&&V<=A.width-ee&&Q>=0&&Q<=A.height-G){b.bindFramebuffer(S.FRAMEBUFFER,Pe);const He=A.textures[Ne],Ve=He.format,Be=He.type;if(!K.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Je),S.bufferData(S.PIXEL_PACK_BUFFER,ge.byteLength,S.STREAM_READ),A.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ne),S.readPixels(V,Q,ee,G,xe.convert(Ve),xe.convert(Be),0);const ft=F!==null?N.get(F).__webglFramebuffer:null;b.bindFramebuffer(S.FRAMEBUFFER,ft);const Et=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Ky(S,Et,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Je),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ge),S.deleteBuffer(Je),S.deleteSync(Et),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Q=0){const ee=Math.pow(2,-Q),G=Math.floor(A.image.width*ee),ge=Math.floor(A.image.height*ee),Te=V!==null?V.x:0,Ne=V!==null?V.y:0;B.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,Q,0,0,Te,Ne,G,ge),b.unbindTexture()};const Rg=S.createFramebuffer(),Cg=S.createFramebuffer();this.copyTextureToTexture=function(A,V,Q=null,ee=null,G=0,ge=null){ge===null&&(G!==0?(Qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=G,G=0):ge=0);let Te,Ne,Pe,He,Ve,Be,Je,ft,Et;const bt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(Q!==null)Te=Q.max.x-Q.min.x,Ne=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,He=Q.min.x,Ve=Q.min.y,Be=Q.isBox3?Q.min.z:0;else{const _n=Math.pow(2,-G);Te=Math.floor(bt.width*_n),Ne=Math.floor(bt.height*_n),A.isDataArrayTexture?Pe=bt.depth:A.isData3DTexture?Pe=Math.floor(bt.depth*_n):Pe=1,He=0,Ve=0,Be=0}ee!==null?(Je=ee.x,ft=ee.y,Et=ee.z):(Je=0,ft=0,Et=0);const et=xe.convert(V.format),ke=xe.convert(V.type);let Bt;V.isData3DTexture?(B.setTexture3D(V,0),Bt=S.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),Bt=S.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),Bt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,V.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,V.unpackAlignment);const st=S.getParameter(S.UNPACK_ROW_LENGTH),bn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Tr=S.getParameter(S.UNPACK_SKIP_PIXELS),ln=S.getParameter(S.UNPACK_SKIP_ROWS),Ms=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,bt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,He),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Be);const Mt=A.isDataArrayTexture||A.isData3DTexture,gn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const _n=N.get(A),jt=N.get(V),nn=N.get(_n.__renderTarget),Vo=N.get(jt.__renderTarget);b.bindFramebuffer(S.READ_FRAMEBUFFER,nn.__webglFramebuffer),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let Zi=0;Zi<Pe;Zi++)Mt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,N.get(A).__webglTexture,G,Be+Zi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,N.get(V).__webglTexture,ge,Et+Zi)),S.blitFramebuffer(He,Ve,Te,Ne,Je,ft,Te,Ne,S.DEPTH_BUFFER_BIT,S.NEAREST);b.bindFramebuffer(S.READ_FRAMEBUFFER,null),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||N.has(A)){const _n=N.get(A),jt=N.get(V);b.bindFramebuffer(S.READ_FRAMEBUFFER,Rg),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,Cg);for(let nn=0;nn<Pe;nn++)Mt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,_n.__webglTexture,G,Be+nn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,_n.__webglTexture,G),gn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,jt.__webglTexture,ge,Et+nn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,jt.__webglTexture,ge),G!==0?S.blitFramebuffer(He,Ve,Te,Ne,Je,ft,Te,Ne,S.COLOR_BUFFER_BIT,S.NEAREST):gn?S.copyTexSubImage3D(Bt,ge,Je,ft,Et+nn,He,Ve,Te,Ne):S.copyTexSubImage2D(Bt,ge,Je,ft,He,Ve,Te,Ne);b.bindFramebuffer(S.READ_FRAMEBUFFER,null),b.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Bt,ge,Je,ft,Et,Te,Ne,Pe,et,ke,bt.data):V.isCompressedArrayTexture?S.compressedTexSubImage3D(Bt,ge,Je,ft,Et,Te,Ne,Pe,et,bt.data):S.texSubImage3D(Bt,ge,Je,ft,Et,Te,Ne,Pe,et,ke,bt):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ge,Je,ft,Te,Ne,et,ke,bt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ge,Je,ft,bt.width,bt.height,et,bt.data):S.texSubImage2D(S.TEXTURE_2D,ge,Je,ft,Te,Ne,et,ke,bt);S.pixelStorei(S.UNPACK_ROW_LENGTH,st),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,bn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Tr),S.pixelStorei(S.UNPACK_SKIP_ROWS,ln),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ms),ge===0&&V.generateMipmaps&&S.generateMipmap(Bt),b.unbindTexture()},this.copyTextureToTexture3D=function(A,V,Q=null,ee=null,G=0){return Qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,V,Q,ee,G)},this.initRenderTarget=function(A){N.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){I=0,R=0,F=null,b.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}function EA(t){return t.type===Zu.Orthographic}function bA(t){return t.type===Zu.Perspective}class vg{controller;constructor(e){if(EA(e))this.controller=new TA(e);else if(bA(e))this.controller=new wA(e);else throw new Error("Invalid camera type or property")}setSize(e){if(this.controller.setSize)this.controller.setSize(e);else throw new Error("setCameraSize is only available for orthographic camera, use setCameraFOV instead")}setFOV(e){if(this.controller.setFOV)this.controller.setFOV(e);else throw new Error("setCameraFOV is only available for perspective camera, use setCameraSize instead")}setNear(e){this.controller.setNear(e)}setFar(e){this.controller.setFar(e)}setRange(e,n){this.controller.setRange(e,n)}move(e,n,i,r){this.controller.move(e,n,i,r)}setPos(e,n,i){this.controller.setPos(e,n,i)}setLookAt(e,n,i){this.controller.setLookAt(e,n,i)}addResizeListener(){this.controller.addResizeListener()}removeResizeListener(){this.controller.removeResizeListener()}get camera(){return this.controller.camera}}class xg{_camera;aspect=1;isResizeListenerAdded=!1;constructor(){this.updateAspect()}setNear(e){if(e<this._camera.far)this._camera.near=e,this._camera.updateProjectionMatrix();else throw new Error("Value of near must be smaller than far")}setFar(e){if(e>this._camera.near)this._camera.far=e,this._camera.updateProjectionMatrix();else throw new Error("Value of far must be greater than near")}setRange(e,n){if(e>n)throw new Error("Value of far must be greater than near");this._camera.near=e,this._camera.far=n,this._camera.updateProjectionMatrix()}move(e,n,i,r=1){this._camera.position.x+=e*r,this._camera.position.y+=n*r,this._camera.position.z+=i*r}setPos(e,n,i){this._camera.position.set(e,n,i)}setLookAt(e,n,i){this._camera.lookAt(e,n,i)}updateAspect(){this.aspect=window.innerWidth/window.innerHeight}handleResize=()=>{this.updateAspect(),this.updateProjection()};addResizeListener(){this.isResizeListenerAdded||(window.addEventListener("resize",this.handleResize),this.isResizeListenerAdded=!0)}removeResizeListener(){window.removeEventListener("resize",this.handleResize),this.isResizeListenerAdded=!1}get camera(){return this._camera}}class TA extends xg{_camera;size=10;constructor(e){super(),this._camera=new fg,this.setSize(e.size??this.size),this.setRange(e.near??this._camera.near,e.far??this._camera.far),this.updateProjection()}setSize(e){if(e>0)this.size=e,this.updateProjection();else throw new Error("Size cannot be less than or equal to 0")}updateProjection(){this._camera.top=this.size/this.aspect,this._camera.bottom=-this.size/this.aspect,this._camera.right=this.size,this._camera.left=-this.size,this._camera.updateProjectionMatrix()}}class wA extends xg{_camera;constructor(e){super(),this._camera=new sn,this.setFOV(e.fov??this._camera.fov),this.setRange(e.near??this._camera.near,e.far??this._camera.far),this.updateProjection()}setFOV(e){if(e>0&&e<180)this._camera.fov=e,this._camera.updateProjectionMatrix();else throw new Error("FOV cannot be less than or equal to 0 / larger than or equal to 180")}updateProjection(){this._camera.aspect=this.aspect,this._camera.updateProjectionMatrix()}}var Zu=(t=>(t.Orthographic="orthographic",t.Perspective="perspective",t))(Zu||{});class Sg{_renderer;constructor(e){this._renderer=new yA({canvas:e,antialias:!0,alpha:!0})}handleResize=()=>{this._renderer.setPixelRatio(window.devicePixelRatio||1),this._renderer.setSize(window.innerWidth,window.innerHeight)};startAnimation(e,n,i){const r=()=>{e(),this._renderer.render(n,i)};this._renderer.setAnimationLoop(r)}start(){window.addEventListener("resize",this.handleResize),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=Vm,this._renderer.setClearColor(0,0),this.handleResize()}update(){}end(){window.removeEventListener("resize",this.handleResize),this._renderer.dispose()}}class AA{directions=[0,0,0,0];moveDir=new je(0,0);_mouseXSpeed;_mouseYSpeed;_isMouse=!1;_isMouseMovingTimer=setTimeout(()=>{});_mousePos=new je(window.innerWidth/2,window.innerHeight/2);_mouseDir=new je(0,0);constructor(e=11e3,n=9500){this._mouseXSpeed=e,this._mouseYSpeed=n}handleMovementVector=()=>{this.moveDir.x=this.directions[3]-this.directions[2],this.moveDir.y=this.directions[1]-this.directions[0]};handleKeyDown=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=1;break;case"ArrowDown":this.directions[1]=1;break;case"ArrowLeft":this.directions[2]=1;break;case"ArrowRight":this.directions[3]=1;break}this.handleMovementVector()}};handleKeyUp=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=0;break;case"ArrowDown":this.directions[1]=0;break;case"ArrowLeft":this.directions[2]=0;break;case"ArrowRight":this.directions[3]=0;break}this.handleMovementVector()}};handleMouseClick=e=>{this._mousePos.set(e.clientX,e.clientY)};handleStart=e=>{if(!this.isKeyboard){if(this._mouseDir.set(0,0),e.type==="mousedown"){const n=e;this._mousePos.set(n.clientX,n.clientY)}else if(e.type==="touchstart"){const n=e;this._mousePos.set(n.touches[0].clientX,n.touches[0].clientY)}this._isMouse=!0}};handleMove=e=>{let n=0,i=0;if(e.type==="mousemove"){const a=e;n=In.lerp(this.mousePos.x,a.clientX,.5),i=In.lerp(this.mousePos.y,a.clientY,.5)}else if(e.type==="touchmove"){const a=e;n=In.lerp(this.mousePos.x,a.touches[0].clientX,.5),i=In.lerp(this.mousePos.y,a.touches[0].clientY,.5)}const r=(n-this.mousePos.x)*this._mouseXSpeed/window.innerWidth/window.innerHeight,s=(i-this.mousePos.y)*this._mouseYSpeed/window.innerWidth/window.innerHeight;this._mouseDir.set(r,s),this._mousePos.set(n,i),clearTimeout(this._isMouseMovingTimer),this._isMouseMovingTimer=setTimeout(()=>{this._mouseDir.set(0,0)},50)};handleEnd=()=>{this.isKeyboard||(this._mouseDir.set(0,0),this._isMouse=!1)};start(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("click",this.handleMouseClick),window.addEventListener("mousedown",this.handleStart),window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleEnd),window.addEventListener("touchstart",this.handleStart,{passive:!1}),window.addEventListener("touchmove",this.handleMove,{passive:!1}),window.addEventListener("touchend",this.handleEnd,{passive:!1})}update(){}end(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("click",this.handleMouseClick),window.removeEventListener("mousedown",this.handleStart),window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleEnd),window.removeEventListener("touchstart",this.handleStart),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleEnd)}getMovementVectorNormalized(){return this.moveDir.normalize()}get mousePos(){return this._mousePos}get mouseDir(){return this._mouseDir}get isMouse(){return this._isMouse}get isKeyboard(){return this.directions.includes(1)}set mouseHorizontalSpeed(e){this._mouseXSpeed=e}set mouseVerticalSpeed(e){this._mouseYSpeed=e}}class RA{collidables=[];raycaster=new dd;cameraRaycaster=new dd;screenPoint=new je(0,0);screenWorldPos=new W(0,0,0);angle=Math.PI/2;axis=new W(0,1,0);temp=new W(0,0,0);dir=new W(0,0,0);setCollidables(e){this.collidables=e}getRaycastHit(e,n,i){return this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,this.raycaster.intersectObjects(this.collidables)}getLinecastHit(e,n,i=1,r=0){const s=this.getRaycastHit(e,n,i);return this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,this.angle).normalize().multiplyScalar(r)),this.getRaycastHit(this.temp,n,i).forEach(a=>{s.indexOf(a)===-1&&s.push(a)}),this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,-this.angle).normalize().multiplyScalar(r)),this.getRaycastHit(this.temp,n,i).forEach(a=>{s.indexOf(a)===-1&&s.push(a)}),s}raycast(e,n,i){return this.getRaycastHit(e,n,i).length===0}linecast(e,n,i,r){return this.getLinecastHit(e,n,i,r).length===0}getRaycastHitFromScreen=(e,n,i)=>{const r=n/window.innerWidth*2-1,s=-(i/window.innerHeight)*2+1;return this.screenPoint.set(r,s),this.cameraRaycaster.setFromCamera(this.screenPoint,e),this.cameraRaycaster.intersectObjects(this.collidables)};screenPointToWorld=(e,n,i)=>{const r=this.getRaycastHitFromScreen(e,n,i);if(!(!r||!r[0]))return this.screenWorldPos.set(r[0].point.x,r[0].point.y,r[0].point.z),this.screenWorldPos}}let CA=class{cameraController=new vg({type:"orthographic",size:5,near:-100,far:1e3});start(){this.cameraController.addResizeListener(),this.cameraController.setPos(0,10,50),this.cameraController.setLookAt(0,0,0)}update(){}end(){this.cameraController.removeResizeListener()}get camera(){return this.cameraController.camera}},PA=class{ambientLightIntensityLight=1;ambientLightIntensityDark=0;spotlightPrimaryPosLight=new W(50,50,50);spotlightPrimaryPosDark=new W(-50,50,50);spotlightPrimaryAngleLight=.1;spotlightPrimaryAngleDark=.03;spotlightSecondaryPowLight=0;spotlightSecondaryPowDark=5e3;ambientLight=new hg(13421772);spotlightPrimary=new cd(16777215);spotlightSecondary=new cd(14540253);alpha=.1;themeStore=ma();start(){this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.shadow.intensity=.8,this.spotlightPrimary.castShadow=!0,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.shadow.intensity=.8,this.spotlightSecondary.castShadow=!0,this.themeStore.theme===rn.Light?(this.spotlightPrimary.position.set(50,50,50),this.ambientLight.intensity=this.ambientLightIntensityLight,this.spotlightPrimary.angle=this.spotlightPrimaryAngleLight,this.spotlightSecondary.power=this.spotlightSecondaryPowLight):this.themeStore.theme===rn.Dark&&(this.spotlightPrimary.position.set(-50,50,50),this.ambientLight.intensity=this.ambientLightIntensityDark,this.spotlightPrimary.angle=this.spotlightPrimaryAngleDark,this.spotlightSecondary.power=this.spotlightSecondaryPowDark),this.spotlightSecondary.position.set(-50,50,50),Vi.add(this.ambientLight,this.spotlightPrimary,this.spotlightSecondary)}update(){this.themeStore.theme==="light"?(this.ambientLight.intensity=In.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,this.alpha),this.spotlightPrimary.angle=In.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleLight,this.alpha),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosLight,this.alpha),this.spotlightSecondary.power=this.spotlightSecondaryPowLight):(this.ambientLight.intensity=In.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,this.alpha),this.spotlightPrimary.angle=In.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleDark,this.alpha),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosDark,this.alpha),this.spotlightSecondary.power=this.spotlightSecondaryPowDark)}end(){Vi.remove(this.ambientLight,this.spotlightPrimary,this.spotlightSecondary),this.ambientLight.dispose(),this.spotlightPrimary.dispose(),this.spotlightSecondary.dispose()}};const LA="/my-site/assets/texture-Bhl9W45K.webp";let IA=class{velocityGrounding=.5;maxForce=100;bounciness=1;forceCoe=30;dragCoe=3;mousePosYOffset=100;moveVec=new je(0,0);displacement=new W(0,0,0);_velocity=new W(0,0,0);velocityX=new W(0,0,0);velocityZ=new W(0,0,0);_force=new W(0,0,0);_drag=new W(0,0,0);playerRadius=1;playerGeometry=new Yu(this.playerRadius,32,32);playerTexture=new UE().load(LA);playerMaterial=new RE({color:16777215,map:this.playerTexture});player=new Ot(this.playerGeometry,this.playerMaterial);updateMoveVec(){if(dn.isKeyboard)this.moveVec=dn.getMovementVectorNormalized();else if(dn.isMouse){const e=dn.mousePos,n=ds.screenPointToWorld(ao.camera,e.x,e.y+this.mousePosYOffset);if(n){const i=n.sub(this.player.position).normalize();i&&this.moveVec.set(i.x,i.z)}}else this.moveVec.set(0,0)}updateForce(e){if(e>this.maxForce)throw new Error("Large force may result in object tunneling in this physics engine");this._force.set(this.moveVec.x,0,this.moveVec.y).multiplyScalar(e),this._force.z*=2}updateDrag(e){if(e>this.maxForce)throw new Error("Large force may result in object tunneling in this physics engine");this._drag.copy(this._velocity).multiplyScalar(-e)}updateVelocity(e){let n=this._force.add(this._drag).multiplyScalar(e);this._velocity.length()<this.velocityGrounding&&this._force.length()===0&&(this._velocity.set(0,0,0),n.set(0,0,0)),this._velocity.add(n)}safeLinecast(e){return ds.linecast(this.player.position,e,this.playerRadius,this.playerRadius)}checkCollision(){let e=this.safeLinecast(this._velocity)&&this.safeLinecast(this._force);e||(this.velocityX.set(this._velocity.x,0,0),this.velocityZ.set(0,0,this._velocity.z),e=this.safeLinecast(this.velocityX),e?(e=this.safeLinecast(this.velocityZ),e?this._velocity.set(this.velocityX.x,0,this.velocityZ.z):this._velocity.set(this.velocityX.x,0,-this.velocityZ.z*this.bounciness)):(e=this.safeLinecast(this.velocityZ),e?this._velocity.set(-this.velocityX.x*this.bounciness,0,this.velocityZ.z):this._velocity.set(0,0,0)))}applyMovement(){const e=Mg.getDelta();this.updateMoveVec(),this.updateForce(this.forceCoe),this.updateDrag(this.dragCoe),this.updateVelocity(e),this.checkCollision(),this.displacement.copy(this._velocity).multiplyScalar(e),this.player.position.add(this.displacement)}start(){this.playerTexture.wrapS=ra,this.playerTexture.wrapT=ra,this.playerTexture.repeat.set(3,3),this.player.position.set(3,0,-2),this.player.castShadow=!0,Vi.add(this.player)}update(){this.applyMovement()}end(){Vi.remove(this.player),this.playerMaterial.dispose(),this.playerTexture.dispose(),this.playerGeometry.dispose()}get obj(){return this.player}};class DA{wallMaterial_1=new cg({color:15658734});wallMaterial_2=new Bo({opacity:0,transparent:!0});floorMaterial=this.wallMaterial_1;wallGeometry=new Mr(20,20);floorGeometry=new Mr(20,100);wall_1=new Ot(this.wallGeometry,this.wallMaterial_1);wall_2=new Ot(this.wallGeometry,this.wallMaterial_2);wall_3=new Ot(this.wallGeometry,this.wallMaterial_2);wall_4=new Ot(this.wallGeometry,this.wallMaterial_2);floor=new Ot(this.floorGeometry,this.floorMaterial);start(){this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.position.set(5,0,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.position.set(0,0,10),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,Vi.add(this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.floor)}update(){}end(){Vi.remove(this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.floor),this.wallMaterial_1.dispose(),this.wallMaterial_2.dispose(),this.floorMaterial.dispose(),this.wallGeometry.dispose(),this.floorGeometry.dispose()}}const Vi=new og,ao=new CA;class UA{walls=new DA;player=new IA;lights=new PA;rendererController;constructor(e){this.rendererController=new Sg(e)}start(){this.player.start(),this.walls.start(),this.lights.start(),ao.start();const e=Vi.children.filter(n=>n!==this.player.obj);ds.setCollidables(e),dn.start(),this.rendererController.start(),this.rendererController.startAnimation(()=>this.update(),Vi,ao.camera)}update(){this.player.update(),this.walls.update(),this.lights.update()}end(){ao.end(),dn.end(),this.rendererController.end(),this.player.end(),this.walls.end(),this.lights.end()}}class NA{cameraController=new vg({type:"perspective",fov:60,near:1,far:1e3});start(){this.cameraController.addResizeListener(),this.cameraController.setPos(0,0,15),this.cameraController.setLookAt(0,0,0)}update(){const e=dn.mouseDir;dn.isMouse&&e.length()!==0&&this.cameraController.move(-e.x,e.y,0,2)}end(){this.cameraController.removeResizeListener()}get camera(){return this.cameraController.camera}}class FA{ambientLightIntensityLight=.7;ambientLightIntensityDark=.1;ambientLight=new hg(16777215);alpha=.1;themeStore=ma();start(){this.themeStore.theme===rn.Light?this.ambientLight.intensity=this.ambientLightIntensityLight:this.themeStore.theme===rn.Dark&&(this.ambientLight.intensity=this.ambientLightIntensityDark),ua.add(this.ambientLight)}update(){this.themeStore.theme===rn.Light?this.ambientLight.intensity=In.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,this.alpha):this.themeStore.theme===rn.Dark&&(this.ambientLight.intensity=In.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,this.alpha))}end(){this.ambientLight.dispose()}}class OA{player=new OE(16777215);wallGeometry=new Mr(100,100);wallMaterial=new Bo({opacity:0,transparent:!0});wall=new Ot(this.wallGeometry,this.wallMaterial);mouseWorldPos=new W(0,0,0);updateMouseWorldPos(){const e=dn.mousePos,n=ds.screenPointToWorld(vr.camera,e.x,e.y);n&&(this.mouseWorldPos=n)}applyMovement(){this.updateMouseWorldPos(),this.player.position.set(this.mouseWorldPos.x,this.mouseWorldPos.y,10),this.wall.position.set(this.mouseWorldPos.x,this.mouseWorldPos.y,5)}start(){this.player.intensity=50,ua.add(this.player,this.wall)}update(){this.applyMovement()}end(){this.player.dispose(),this.wallGeometry.dispose(),this.wallMaterial.dispose()}get obj(){return this.wall}}class BA{maxAmp=.7;minAmp=.3;ampCoe=this.maxAmp-this.minAmp;maxSpeed=1;minSpeed=.3;speedCoe=this.maxSpeed-this.minSpeed;phaseCoe=2*Math.PI;amplitudes=[];speeds=[];phases=[];maxMouseEffect=3.5;mouseEffectSigma=8;tailEffect=[];size;gap=.02;dummy=new zt;mesh;constructor(e,n,i=0){this.size=i;const r=i**2;this.mesh=new TE(e,n,r);for(let s=0;s<r;s++)this.amplitudes[s]=Math.random()*this.ampCoe+this.minAmp,this.speeds[s]=Math.random()*this.speedCoe+this.minSpeed,this.phases[s]=this.phaseCoe*Math.random(),this.tailEffect.push(0)}setPos(e,n,i){this.mesh.position.set(e,n,i)}start(){this.update(),ua.add(this.mesh)}update(){let e=0;const n=ds.screenPointToWorld(vr.camera,dn.mousePos.x,dn.mousePos.y);for(let i=0;i<this.size;i++)for(let r=0;r<this.size;r++){const s=i*(1+this.gap),a=r*(1+this.gap),o=this.amplitudes[e]*Math.sin(Mg.getElapsedTime()*this.speeds[e]+this.phases[e]);let l=999;n&&(l=(n.x-s-this.mesh.position.x)**2+(n.y-a-this.mesh.position.y)**2);const c=this.maxMouseEffect*Math.exp(-l/this.mouseEffectSigma);let u=.5;c<this.tailEffect[e]&&(u=.2),this.tailEffect[e]=In.lerp(this.tailEffect[e],c,u),this.dummy.position.x=s,this.dummy.position.y=a,this.dummy.position.z=o+this.tailEffect[e],this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),e++}this.mesh.instanceMatrix.needsUpdate=!0}end(){ua.remove(this.mesh),this.mesh.dispose()}}class kA{_size;_renderDist;loadedChunks=new Map;center=new je(0,0);geometry=new xs(1,1,3);material=new cg({color:16777215});constructor(e,n){this._size=e,this._renderDist=n}getCurrentGridFromWorld(){this.center.set(Math.floor(vr.camera.position.x/this._size),Math.floor(vr.camera.position.y/this._size))}updateChunks(){const e=new Set;for(let n=-this._renderDist;n<=this._renderDist;n++)for(let i=-this._renderDist;i<=this._renderDist;i++){const r=this.center.x+n,s=this.center.y+i,a=`${r},${s}`;if(e.add(a),!this.loadedChunks.has(a)){const o=new BA(this.geometry,this.material,this._size),l=r*this._size*1.02,c=s*this._size*1.02;o.setPos(l,c,0),o.start(),this.loadedChunks.set(a,o)}}for(const n of this.loadedChunks.keys())if(!e.has(n)){const i=this.loadedChunks.get(n);i&&i.end(),this.loadedChunks.delete(n)}}start(){}update(){this.getCurrentGridFromWorld(),this.updateChunks(),this.loadedChunks.forEach(e=>{e.update()})}end(){this.geometry.dispose(),this.material.dispose()}}const ua=new og,vr=new NA;class zA{lights=new FA;player=new OA;chunkLoader=new kA(8,2);rendererController;constructor(e){this.rendererController=new Sg(e)}start(){this.lights.start(),this.player.start(),this.chunkLoader.start(),vr.start(),ds.setCollidables([this.player.obj]),dn.start(),this.rendererController.start(),this.rendererController.startAnimation(()=>this.update(),ua,vr.camera)}update(){this.lights.update(),this.player.update(),this.chunkLoader.update(),vr.update()}end(){dn.end(),this.rendererController.end(),this.lights.end(),this.player.end(),this.chunkLoader.end()}}const dn=new AA,ds=new RA,Mg=new kE,HA={class:"page flex row a-center j-start"},VA={class:"absolute t-0 l-0 w-full h-full"},GA={class:"grid grid-cols-2 a-start w-auto pl-0.10 z-1"},WA=tn({__name:"homepage",setup(t){const{t:e}=qi(),n=Mp("canvas");return ps(()=>{if(!n.value)return;const i=new UA(n.value);i.start(),ms(()=>i.end())}),(i,r)=>(wt(),It("div",HA,[yt("div",VA,[yt("canvas",{ref_key:"canvas",ref:n},null,512)]),yt("div",GA,[ct(ol,{class:"col-span-2 hem-1 pb-10 font-size-md",text:gr(e)("hello"),duration:500,stagger:50},null,8,["text"]),ct(ol,{class:"sm:col-span-2 hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"peter",duration:1e3,stagger:100}),ct(ol,{class:"hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"chan",duration:1e3,delay:500,stagger:100})])]))}}),XA={class:"page"},$A={class:"absolute t-0 l-0 w-full h-full"},YA=tn({__name:"projects",setup(t){const{t:e}=qi(),n=Mp("canvas");return ps(()=>{if(!n.value)return;const i=new zA(n.value);i.start(),ms(()=>i.end())}),(i,r)=>(wt(),It("div",XA,[yt("div",$A,[yt("canvas",{ref_key:"canvas",ref:n},null,512)])]))}}),qA={},jA={class:"page"};function KA(t,e){return wt(),It("div",jA,[...e[0]||(e[0]=[yt("h1",null,"Sorry",-1),yt("h2",null,"This page is not yet online",-1)])])}const ZA=Wi(qA,[["render",KA]]),JA=tn({name:"project-overlay",props:{title:{type:String,default:""}},setup(){}}),QA={class:"absolute"};function eR(t,e,n,i,r,s){return wt(),It("div",QA,[e[0]||(e[0]=yt("h1",null,"Overlay",-1)),yt("h1",null,ts(t.title),1)])}const tR=Wi(JA,[["render",eR]]),nR=tn({__name:"test",setup(t){return(e,n)=>(wt(),Su(tR))}}),iR=Wi(nR,[["__scopeId","data-v-bd3e3fc3"]]),yg=[{path:"/",name:"home",component:WA},{path:"/works",name:"works",component:YA},{path:"/blogs",name:"blogs",component:ZA},{path:"/test",name:"test",component:iR}],Eg=GM({history:vM("/my-site/"),scrollBehavior(){return{top:0}},routes:yg});Eg.beforeEach((t,e,n)=>{const i=sessionStorage.redirect;i&&yg.forEach(r=>{i===r.path&&(sessionStorage.removeItem("redirect"),n(i))}),n()});const kl={messages:{hello:"hello, i am",home:"home",work:"work",todos:"todos",authentication:"authentication",blogs:"blogs",blog:"blog",test:"test"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},zl={messages:{hello:"你好, 我是",home:"主頁",work:"項目",todos:"任務清單",authentication:"驗證",blogs:"部落格",blog:"博客",test:"測試"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},rR={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":kl.messages,"zh-TW":zl.messages},datetimeFormats:{"en-US":kl.dateTimeFormats,"zh-TW":zl.dateTimeFormats},numberFormats:{"en-US":kl.numberFormats,"zh-TW":zl.numberFormats}},sR=_S(rR),aR=Mv(),zo=j0(HS);zo.use(Eg);zo.use(sR);zo.use(aR);zo.mount("#app");
