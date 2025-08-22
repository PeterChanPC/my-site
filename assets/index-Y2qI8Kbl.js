var j_=Object.defineProperty;var K_=(t,e,n)=>e in t?j_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wt=(t,e,n)=>K_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Fu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xt={},ns=[],ii=()=>{},J_=()=>!1,ka=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bu=t=>t.startsWith("onUpdate:"),nn=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Z_=Object.prototype.hasOwnProperty,pt=(t,e)=>Z_.call(t,e),We=Array.isArray,is=t=>mo(t)==="[object Map]",Ha=t=>mo(t)==="[object Set]",Wf=t=>mo(t)==="[object Date]",je=t=>typeof t=="function",Vt=t=>typeof t=="string",ai=t=>typeof t=="symbol",Et=t=>t!==null&&typeof t=="object",Op=t=>(Et(t)||je(t))&&je(t.then)&&je(t.catch),Fp=Object.prototype.toString,mo=t=>Fp.call(t),Q_=t=>mo(t).slice(8,-1),Bp=t=>mo(t)==="[object Object]",Hu=t=>Vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ks=Fu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ev=/-(\w)/g,Nn=Va(t=>t.replace(ev,(e,n)=>n?n.toUpperCase():"")),tv=/\B([A-Z])/g,Dr=Va(t=>t.replace(tv,"-$1").toLowerCase()),za=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),vl=Va(t=>t?`on${za(t)}`:""),Wi=(t,e)=>!Object.is(t,e),aa=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},kp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xf;const Ga=()=>Xf||(Xf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function go(t){if(We(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Vt(i)?sv(i):go(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Vt(t)||Et(t))return t}const nv=/;(?![^(]*\))/g,iv=/:([^]+)/,rv=/\/\*[^]*?\*\//g;function sv(t){const e={};return t.replace(rv,"").split(nv).forEach(n=>{if(n){const i=n.split(iv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(t){let e="";if(Vt(t))e=t;else if(We(t))for(let n=0;n<t.length;n++){const i=Dt(t[n]);i&&(e+=i+" ")}else if(Et(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ov="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",av=Fu(ov);function Hp(t){return!!t||t===""}function lv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Wa(t[i],e[i]);return n}function Wa(t,e){if(t===e)return!0;let n=Wf(t),i=Wf(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=ai(t),i=ai(e),n||i)return t===e;if(n=We(t),i=We(e),n||i)return n&&i?lv(t,e):!1;if(n=Et(t),i=Et(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wa(t[o],e[o]))return!1}}return String(t)===String(e)}function Vp(t,e){return t.findIndex(n=>Wa(n,e))}const zp=t=>!!(t&&t.__v_isRef===!0),Kt=t=>Vt(t)?t:t==null?"":We(t)||Et(t)&&(t.toString===Fp||!je(t.toString))?zp(t)?Kt(t.value):JSON.stringify(t,Gp,2):String(t),Gp=(t,e)=>zp(e)?Gp(t,e.value):is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[xl(i,s)+" =>"]=r,n),{})}:Ha(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xl(n))}:ai(e)?xl(e):Et(e)&&!We(e)&&!Bp(e)?String(e):e,xl=(t,e="")=>{var n;return ai(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ln;try{return ln=this,e()}finally{ln=n}}}on(){ln=this}off(){ln=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vu(t){return new Wp(t)}function Xp(){return ln}function cv(t,e=!1){ln&&ln.cleanups.push(t)}let yt;const Sl=new WeakSet;class $p{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sl.has(this)&&(Sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$f(this),jp(this);const e=yt,n=Gn;yt=this,Gn=!0;try{return this.fn()}finally{Kp(this),yt=e,Gn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Wu(e);this.deps=this.depsTail=void 0,$f(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sc(this)&&this.run()}get dirty(){return Sc(this)}}let qp=0,Hs,Vs;function Yp(t,e=!1){if(t.flags|=8,e){t.next=Vs,Vs=t;return}t.next=Hs,Hs=t}function zu(){qp++}function Gu(){if(--qp>0)return;if(Vs){let e=Vs;for(Vs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hs;){let e=Hs;for(Hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function jp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Kp(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Wu(i),uv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ys))return;t.globalVersion=Ys;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Sc(t)){t.flags&=-3;return}const n=yt,i=Gn;yt=t,Gn=!0;try{jp(t);const r=t.fn(t._value);(e.version===0||Wi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{yt=n,Gn=i,Kp(t),t.flags&=-3}}function Wu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Wu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function uv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gn=!0;const Zp=[];function Ji(){Zp.push(Gn),Gn=!1}function Zi(){const t=Zp.pop();Gn=t===void 0?!0:t}function $f(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=yt;yt=void 0;try{e()}finally{yt=n}}}let Ys=0;class fv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!yt||!Gn||yt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==yt)n=this.activeLink=new fv(yt,this),yt.deps?(n.prevDep=yt.depsTail,yt.depsTail.nextDep=n,yt.depsTail=n):yt.deps=yt.depsTail=n,Qp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=yt.depsTail,n.nextDep=void 0,yt.depsTail.nextDep=n,yt.depsTail=n,yt.deps===n&&(yt.deps=i)}return n}trigger(e){this.version++,Ys++,this.notify(e)}notify(e){zu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Gu()}}}function Qp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Qp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ya=new WeakMap,Mr=Symbol(""),yc=Symbol(""),js=Symbol("");function Qt(t,e,n){if(Gn&&yt){let i=ya.get(t);i||ya.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Xu),r.map=i,r.key=n),r.track()}}function yi(t,e,n,i,r,s){const o=ya.get(t);if(!o){Ys++;return}const a=l=>{l&&l.trigger()};if(zu(),e==="clear")o.forEach(a);else{const l=We(t),c=l&&Hu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===js||!ai(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(js)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Mr)),is(t)&&a(o.get(yc)));break;case"delete":l||(a(o.get(Mr)),is(t)&&a(o.get(yc)));break;case"set":is(t)&&a(o.get(Mr));break}}Gu()}function dv(t,e){const n=ya.get(t);return n&&n.get(e)}function Or(t){const e=at(t);return e===t?e:(Qt(e,"iterate",js),Dn(t)?e:e.map(en))}function Xa(t){return Qt(t=at(t),"iterate",js),t}const hv={__proto__:null,[Symbol.iterator](){return yl(this,Symbol.iterator,en)},concat(...t){return Or(this).concat(...t.map(e=>We(e)?Or(e):e))},entries(){return yl(this,"entries",t=>(t[1]=en(t[1]),t))},every(t,e){return fi(this,"every",t,e,void 0,arguments)},filter(t,e){return fi(this,"filter",t,e,n=>n.map(en),arguments)},find(t,e){return fi(this,"find",t,e,en,arguments)},findIndex(t,e){return fi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fi(this,"findLast",t,e,en,arguments)},findLastIndex(t,e){return fi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fi(this,"forEach",t,e,void 0,arguments)},includes(...t){return El(this,"includes",t)},indexOf(...t){return El(this,"indexOf",t)},join(t){return Or(this).join(t)},lastIndexOf(...t){return El(this,"lastIndexOf",t)},map(t,e){return fi(this,"map",t,e,void 0,arguments)},pop(){return As(this,"pop")},push(...t){return As(this,"push",t)},reduce(t,...e){return qf(this,"reduce",t,e)},reduceRight(t,...e){return qf(this,"reduceRight",t,e)},shift(){return As(this,"shift")},some(t,e){return fi(this,"some",t,e,void 0,arguments)},splice(...t){return As(this,"splice",t)},toReversed(){return Or(this).toReversed()},toSorted(t){return Or(this).toSorted(t)},toSpliced(...t){return Or(this).toSpliced(...t)},unshift(...t){return As(this,"unshift",t)},values(){return yl(this,"values",en)}};function yl(t,e,n){const i=Xa(t),r=i[e]();return i!==t&&!Dn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const pv=Array.prototype;function fi(t,e,n,i,r,s){const o=Xa(t),a=o!==t&&!Dn(t),l=o[e];if(l!==pv[e]){const f=l.apply(t,s);return a?en(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,en(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function qf(t,e,n,i){const r=Xa(t);let s=n;return r!==t&&(Dn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,en(a),l,t)}),r[e](s,...i)}function El(t,e,n){const i=at(t);Qt(i,"iterate",js);const r=i[e](...n);return(r===-1||r===!1)&&Yu(n[0])?(n[0]=at(n[0]),i[e](...n)):r}function As(t,e,n=[]){Ji(),zu();const i=at(t)[e].apply(t,n);return Gu(),Zi(),i}const mv=Fu("__proto__,__v_isRef,__isVue"),em=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ai));function gv(t){ai(t)||(t=String(t));const e=at(this);return Qt(e,"has",t),e.hasOwnProperty(t)}class tm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?wv:sm:s?rm:im).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!r){let l;if(o&&(l=hv[n]))return l;if(n==="hasOwnProperty")return gv}const a=Reflect.get(e,n,Nt(e)?e:i);return(ai(n)?em.has(n):mv(n))||(r||Qt(e,"get",n),s)?a:Nt(a)?o&&Hu(n)?a:a.value:Et(a)?r?am(a):_o(a):a}}class nm extends tm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Ar(s);if(!Dn(i)&&!Ar(i)&&(s=at(s),i=at(i)),!We(e)&&Nt(s)&&!Nt(i))return l?!1:(s.value=i,!0)}const o=We(e)&&Hu(n)?Number(n)<e.length:pt(e,n),a=Reflect.set(e,n,i,Nt(e)?e:r);return e===at(r)&&(o?Wi(i,s)&&yi(e,"set",n,i):yi(e,"add",n,i)),a}deleteProperty(e,n){const i=pt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&yi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!ai(n)||!em.has(n))&&Qt(e,"has",n),i}ownKeys(e){return Qt(e,"iterate",We(e)?"length":Mr),Reflect.ownKeys(e)}}class _v extends tm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const vv=new nm,xv=new _v,Sv=new nm(!0);const Ec=t=>t,Io=t=>Reflect.getPrototypeOf(t);function yv(t,e,n){return function(...i){const r=this.__v_raw,s=at(r),o=is(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ec:e?Mc:en;return!e&&Qt(s,"iterate",l?yc:Mr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ev(t,e){const n={get(r){const s=this.__v_raw,o=at(s),a=at(r);t||(Wi(r,a)&&Qt(o,"get",r),Qt(o,"get",a));const{has:l}=Io(o),c=e?Ec:t?Mc:en;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Qt(at(r),"iterate",Mr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=at(s),a=at(r);return t||(Wi(r,a)&&Qt(o,"has",r),Qt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=at(a),c=e?Ec:t?Mc:en;return!t&&Qt(l,"iterate",Mr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return nn(n,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(r){!e&&!Dn(r)&&!Ar(r)&&(r=at(r));const s=at(this);return Io(s).has.call(s,r)||(s.add(r),yi(s,"add",r,r)),this},set(r,s){!e&&!Dn(s)&&!Ar(s)&&(s=at(s));const o=at(this),{has:a,get:l}=Io(o);let c=a.call(o,r);c||(r=at(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Wi(s,u)&&yi(o,"set",r,s):yi(o,"add",r,s),this},delete(r){const s=at(this),{has:o,get:a}=Io(s);let l=o.call(s,r);l||(r=at(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&yi(s,"delete",r,void 0),c},clear(){const r=at(this),s=r.size!==0,o=r.clear();return s&&yi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=yv(r,t,e)}),n}function $u(t,e){const n=Ev(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(pt(n,r)&&r in i?n:i,r,s)}const Mv={get:$u(!1,!1)},bv={get:$u(!1,!0)},Tv={get:$u(!0,!1)};const im=new WeakMap,rm=new WeakMap,sm=new WeakMap,wv=new WeakMap;function Av(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rv(t){return t.__v_skip||!Object.isExtensible(t)?0:Av(Q_(t))}function _o(t){return Ar(t)?t:qu(t,!1,vv,Mv,im)}function om(t){return qu(t,!1,Sv,bv,rm)}function am(t){return qu(t,!0,xv,Tv,sm)}function qu(t,e,n,i,r){if(!Et(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Rv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Xi(t){return Ar(t)?Xi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ar(t){return!!(t&&t.__v_isReadonly)}function Dn(t){return!!(t&&t.__v_isShallow)}function Yu(t){return t?!!t.__v_raw:!1}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function ju(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&kp(t,"__v_skip",!0),t}const en=t=>Et(t)?_o(t):t,Mc=t=>Et(t)?am(t):t;function Nt(t){return t?t.__v_isRef===!0:!1}function ct(t){return lm(t,!1)}function Ku(t){return lm(t,!0)}function lm(t,e){return Nt(t)?t:new Cv(t,e)}class Cv{constructor(e,n){this.dep=new Xu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:at(e),this._value=n?e:en(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Dn(e)||Ar(e);e=i?e:at(e),Wi(e,n)&&(this._rawValue=e,this._value=i?e:en(e),this.dep.trigger())}}function un(t){return Nt(t)?t.value:t}const Pv={get:(t,e,n)=>e==="__v_raw"?t:un(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Nt(r)&&!Nt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function cm(t){return Xi(t)?t:new Proxy(t,Pv)}function Lv(t){const e=We(t)?new Array(t.length):{};for(const n in t)e[n]=Dv(t,n);return e}class Iv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dv(at(this._object),this._key)}}function Dv(t,e,n){const i=t[e];return Nt(i)?i:new Iv(t,e,n)}class Nv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return Yp(this,!0),!0}get value(){const e=this.dep.track();return Jp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uv(t,e,n=!1){let i,r;return je(t)?i=t:(i=t.get,r=t.set),new Nv(i,r,n)}const No={},Ea=new WeakMap;let hr;function Ov(t,e=!1,n=hr){if(n){let i=Ea.get(n);i||Ea.set(n,i=[]),i.push(t)}}function Fv(t,e,n=xt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:Dn(x)||r===!1||r===0?Ei(x,1):Ei(x);let u,f,d,p,_=!1,v=!1;if(Nt(t)?(f=()=>t.value,_=Dn(t)):Xi(t)?(f=()=>c(t),_=!0):We(t)?(v=!0,_=t.some(x=>Xi(x)||Dn(x)),f=()=>t.map(x=>{if(Nt(x))return x.value;if(Xi(x))return c(x);if(je(x))return l?l(x,2):x()})):je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Ji();try{d()}finally{Zi()}}const x=hr;hr=u;try{return l?l(t,3,[p]):t(p)}finally{hr=x}}:f=ii,e&&r){const x=f,C=r===!0?1/0:r;f=()=>Ei(x(),C)}const m=Xp(),h=()=>{u.stop(),m&&m.active&&ku(m.effects,u)};if(s&&e){const x=e;e=(...C)=>{x(...C),h()}}let S=v?new Array(t.length).fill(No):No;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const C=u.run();if(r||_||(v?C.some((L,A)=>Wi(L,S[A])):Wi(C,S))){d&&d();const L=hr;hr=u;try{const A=[C,S===No?void 0:v&&S[0]===No?[]:S,p];l?l(e,3,A):e(...A),S=C}finally{hr=L}}}else u.run()};return a&&a(E),u=new $p(f),u.scheduler=o?()=>o(E,!1):E,p=x=>Ov(x,!1,u),d=u.onStop=()=>{const x=Ea.get(u);if(x){if(l)l(x,4);else for(const C of x)C();Ea.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Ei(t,e=1/0,n){if(e<=0||!Et(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Nt(t))Ei(t.value,e,n);else if(We(t))for(let i=0;i<t.length;i++)Ei(t[i],e,n);else if(Ha(t)||is(t))t.forEach(i=>{Ei(i,e,n)});else if(Bp(t)){for(const i in t)Ei(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ei(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vo(t,e,n,i){try{return i?t(...i):t()}catch(r){$a(r,e,n)}}function li(t,e,n,i){if(je(t)){const r=vo(t,e,n,i);return r&&Op(r)&&r.catch(s=>{$a(s,e,n)}),r}if(We(t)){const r=[];for(let s=0;s<t.length;s++)r.push(li(t[s],e,n,i));return r}}function $a(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){Ji(),vo(s,null,10,[t,l,c]),Zi();return}}Bv(t,n,r,i,o)}function Bv(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const cn=[];let Qn=-1;const rs=[];let Hi=null,Zr=0;const um=Promise.resolve();let Ma=null;function Ju(t){const e=Ma||um;return t?e.then(this?t.bind(this):t):e}function kv(t){let e=Qn+1,n=cn.length;for(;e<n;){const i=e+n>>>1,r=cn[i],s=Ks(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Zu(t){if(!(t.flags&1)){const e=Ks(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Ks(n)?cn.push(t):cn.splice(kv(e),0,t),t.flags|=1,fm()}}function fm(){Ma||(Ma=um.then(hm))}function Hv(t){We(t)?rs.push(...t):Hi&&t.id===-1?Hi.splice(Zr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),fm()}function Yf(t,e,n=Qn+1){for(;n<cn.length;n++){const i=cn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;cn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dm(t){if(rs.length){const e=[...new Set(rs)].sort((n,i)=>Ks(n)-Ks(i));if(rs.length=0,Hi){Hi.push(...e);return}for(Hi=e,Zr=0;Zr<Hi.length;Zr++){const n=Hi[Zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hi=null,Zr=0}}const Ks=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hm(t){try{for(Qn=0;Qn<cn.length;Qn++){const e=cn[Qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qn<cn.length;Qn++){const e=cn[Qn];e&&(e.flags&=-2)}Qn=-1,cn.length=0,dm(),Ma=null,(cn.length||rs.length)&&hm()}}let fn=null,pm=null;function ba(t){const e=fn;return fn=t,pm=t&&t.type.__scopeId||null,e}function br(t,e=fn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&rd(-1);const s=ba(e);let o;try{o=t(...r)}finally{ba(s),i._d&&rd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Js(t,e){if(fn===null)return t;const n=Ka(fn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=xt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&Ei(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function sr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ji(),li(l,n,8,[t.el,a,t,e]),Zi())}}const Vv=Symbol("_vte"),zv=t=>t.__isTeleport;function Qu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function vn(t,e){return je(t)?nn({name:t.name},e,{setup:t}):t}function mm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function gm(t){const e=us(),n=Ku(null);if(e){const r=e.refs===xt?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}function Ta(t,e,n,i,r=!1){if(We(t)){t.forEach((_,v)=>Ta(_,e&&(We(e)?e[v]:e),n,i,r));return}if(zs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ta(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ka(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,f=a.setupState,d=at(f),p=f===xt?()=>!1:_=>pt(d,_);if(c!=null&&c!==l&&(Vt(c)?(u[c]=null,p(c)&&(f[c]=null)):Nt(c)&&(c.value=null)),je(l))vo(l,a,12,[o,u]);else{const _=Vt(l),v=Nt(l);if(_||v){const m=()=>{if(t.f){const h=_?p(l)?f[l]:u[l]:l.value;r?We(h)&&ku(h,s):We(h)?h.includes(s)||h.push(s):_?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,En(m,n)):m()}}}Ga().requestIdleCallback;Ga().cancelIdleCallback;const zs=t=>!!t.type.__asyncLoader,_m=t=>t.type.__isKeepAlive;function Gv(t,e){vm(t,"a",e)}function Wv(t,e){vm(t,"da",e)}function vm(t,e,n=qt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(qa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)_m(r.parent.vnode)&&Xv(i,e,n,r),r=r.parent}}function Xv(t,e,n,i){const r=qa(e,t,i,!0);xo(()=>{ku(i[e],r)},n)}function qa(t,e,n=qt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Ji();const a=yo(n),l=li(e,n,t,o);return a(),Zi(),l});return i?r.unshift(s):r.push(s),s}}const Pi=t=>(e,n=qt)=>{(!eo||t==="sp")&&qa(t,(...i)=>e(...i),n)},xm=Pi("bm"),Ya=Pi("m"),$v=Pi("bu"),qv=Pi("u"),Yv=Pi("bum"),xo=Pi("um"),jv=Pi("sp"),Kv=Pi("rtg"),Jv=Pi("rtc");function Zv(t,e=qt){qa("ec",t,e)}const Qv="components";function Ri(t,e){return t0(Qv,t,!0,e)||t}const e0=Symbol.for("v-ndc");function t0(t,e,n=!0,i=!1){const r=fn||qt;if(r){const s=r.type;{const a=z0(s,!1);if(a&&(a===e||a===Nn(e)||a===za(Nn(e))))return s}const o=jf(r[t]||s[t],e)||jf(r.appContext[t],e);return!o&&i?s:o}}function jf(t,e){return t&&(t[e]||t[Nn(e)]||t[za(Nn(e))])}function Zs(t,e,n,i){let r;const s=n,o=We(t);if(o||Vt(t)){const a=o&&Xi(t);let l=!1;a&&(l=!Dn(t),t=Xa(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?en(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Et(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const bc=t=>t?km(t)?Ka(t):bc(t.parent):null,Gs=nn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ym(t),$forceUpdate:t=>t.f||(t.f=()=>{Zu(t.update)}),$nextTick:t=>t.n||(t.n=Ju.bind(t.proxy)),$watch:t=>M0.bind(t)}),Ml=(t,e)=>t!==xt&&!t.__isScriptSetup&&pt(t,e),n0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ml(i,e))return o[e]=1,i[e];if(r!==xt&&pt(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&pt(c,e))return o[e]=3,s[e];if(n!==xt&&pt(n,e))return o[e]=4,n[e];Tc&&(o[e]=0)}}const u=Gs[e];let f,d;if(u)return e==="$attrs"&&Qt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==xt&&pt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,pt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ml(r,e)?(r[e]=n,!0):i!==xt&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==xt&&pt(t,o)||Ml(e,o)||(a=s[0])&&pt(a,o)||pt(i,o)||pt(Gs,o)||pt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Kf(t){return We(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tc=!0;function i0(t){const e=ym(t),n=t.proxy,i=t.ctx;Tc=!1,e.beforeCreate&&Jf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:E,unmounted:x,render:C,renderTracked:L,renderTriggered:A,errorCaptured:U,serverPrefetch:T,expose:b,inheritAttrs:F,components:Y,directives:$,filters:ae}=e;if(c&&r0(c,i,null),o)for(const K in o){const W=o[K];je(W)&&(i[K]=W.bind(n))}if(r){const K=r.call(n,n);Et(K)&&(t.data=_o(K))}if(Tc=!0,s)for(const K in s){const W=s[K],he=je(W)?W.bind(n,n):je(W.get)?W.get.bind(n,n):ii,Se=!je(W)&&je(W.set)?W.set.bind(n):ii,Re=Rt({get:he,set:Se});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>Re.value,set:ke=>Re.value=ke})}if(a)for(const K in a)Sm(a[K],i,n,K);if(l){const K=je(l)?l.call(n):l;Reflect.ownKeys(K).forEach(W=>{la(W,K[W])})}u&&Jf(u,t,"c");function Q(K,W){We(W)?W.forEach(he=>K(he.bind(n))):W&&K(W.bind(n))}if(Q(xm,f),Q(Ya,d),Q($v,p),Q(qv,_),Q(Gv,v),Q(Wv,m),Q(Zv,U),Q(Jv,L),Q(Kv,A),Q(Yv,S),Q(xo,x),Q(jv,T),We(b))if(b.length){const K=t.exposed||(t.exposed={});b.forEach(W=>{Object.defineProperty(K,W,{get:()=>n[W],set:he=>n[W]=he})})}else t.exposed||(t.exposed={});C&&t.render===ii&&(t.render=C),F!=null&&(t.inheritAttrs=F),Y&&(t.components=Y),$&&(t.directives=$),T&&mm(t)}function r0(t,e,n=ii){We(t)&&(t=wc(t));for(const i in t){const r=t[i];let s;Et(r)?"default"in r?s=Wn(r.from||i,r.default,!0):s=Wn(r.from||i):s=Wn(r),Nt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Jf(t,e,n){li(We(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sm(t,e,n,i){let r=i.includes(".")?Nm(n,i):()=>n[i];if(Vt(t)){const s=e[t];je(s)&&Xn(r,s)}else if(je(t))Xn(r,t.bind(n));else if(Et(t))if(We(t))t.forEach(s=>Sm(s,e,n,i));else{const s=je(t.handler)?t.handler.bind(n):e[t.handler];je(s)&&Xn(r,s,t)}}function ym(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>wa(l,c,o,!0)),wa(l,e,o)),Et(e)&&s.set(e,l),l}function wa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&wa(t,s,n,!0),r&&r.forEach(o=>wa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=s0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const s0={data:Zf,props:Qf,emits:Qf,methods:Fs,computed:Fs,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Fs,directives:Fs,watch:a0,provide:Zf,inject:o0};function Zf(t,e){return e?t?function(){return nn(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function o0(t,e){return Fs(wc(t),wc(e))}function wc(t){if(We(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function sn(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?nn(Object.create(null),t,e):e}function Qf(t,e){return t?We(t)&&We(e)?[...new Set([...t,...e])]:nn(Object.create(null),Kf(t),Kf(e??{})):e}function a0(t,e){if(!t)return e;if(!e)return t;const n=nn(Object.create(null),t);for(const i in e)n[i]=sn(t[i],e[i]);return n}function Em(){return{app:null,config:{isNativeTag:J_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let l0=0;function c0(t,e){return function(i,r=null){je(i)||(i=nn({},i)),r!=null&&!Et(r)&&(r=null);const s=Em(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:l0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:W0,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...f)):je(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Ke(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ka(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(li(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Tr;Tr=c;try{return u()}finally{Tr=f}}};return c}}let Tr=null;function la(t,e){if(qt){let n=qt.provides;const i=qt.parent&&qt.parent.provides;i===n&&(n=qt.provides=Object.create(i)),n[t]=e}}function Wn(t,e,n=!1){const i=qt||fn;if(i||Tr){const r=Tr?Tr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function u0(){return!!(qt||fn||Tr)}const Mm={},bm=()=>Object.create(Mm),Tm=t=>Object.getPrototypeOf(t)===Mm;function f0(t,e,n,i=!1){const r={},s=bm();t.propsDefaults=Object.create(null),wm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:om(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function d0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=at(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ja(t.emitsOptions,d))continue;const p=e[d];if(l)if(pt(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=Nn(d);r[_]=Ac(l,a,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{wm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=Dr(f))===f||!pt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ac(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!pt(e,f))&&(delete s[f],c=!0)}c&&yi(t.attrs,"set","")}function wm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ks(l))continue;const c=e[l];let u;r&&pt(r,u=Nn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ja(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=at(n),c=a||xt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ac(r,l,f,c[f],t,!pt(c,f))}}return o}function Ac(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=yo(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Dr(n))&&(i=!0))}return i}const h0=new WeakMap;function Am(t,e,n=!1){const i=n?h0:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!je(t)){const u=f=>{l=!0;const[d,p]=Am(f,e,!0);nn(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Et(t)&&i.set(t,ns),ns;if(We(s))for(let u=0;u<s.length;u++){const f=Nn(s[u]);ed(f)&&(o[f]=xt)}else if(s)for(const u in s){const f=Nn(u);if(ed(f)){const d=s[u],p=o[f]=We(d)||je(d)?{type:d}:nn({},d),_=p.type;let v=!1,m=!0;if(We(_))for(let h=0;h<_.length;++h){const S=_[h],E=je(S)&&S.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=je(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||pt(p,"default"))&&a.push(f)}}const c=[o,a];return Et(t)&&i.set(t,c),c}function ed(t){return t[0]!=="$"&&!ks(t)}const Rm=t=>t[0]==="_"||t==="$stable",ef=t=>We(t)?t.map(ei):[ei(t)],p0=(t,e,n)=>{if(e._n)return e;const i=br((...r)=>ef(e(...r)),n);return i._c=!1,i},Cm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Rm(r))continue;const s=t[r];if(je(s))e[r]=p0(r,s,i);else if(s!=null){const o=ef(s);e[r]=()=>o}}},Pm=(t,e)=>{const n=ef(e);t.slots.default=()=>n},Lm=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},m0=(t,e,n)=>{const i=t.slots=bm();if(t.vnode.shapeFlag&32){const r=e._;r?(Lm(i,e,n),n&&kp(i,"_",r,!0)):Cm(e,i)}else e&&Pm(t,e)},g0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Lm(r,e,n):(s=!e.$stable,Cm(e,r)),o=e}else e&&(Pm(t,e),o={default:1});if(s)for(const a in r)!Rm(a)&&o[a]==null&&delete r[a]},En=P0;function _0(t){return v0(t)}function v0(t,e){const n=Ga();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ii,insertStaticContent:_}=t,v=(D,N,y,ne=null,J=null,ee=null,w=void 0,P=null,O=!!N.dynamicChildren)=>{if(D===N)return;D&&!Rs(D,N)&&(ne=H(D),ke(D,J,ee,!0),D=null),N.patchFlag===-2&&(O=!1,N.dynamicChildren=null);const{type:k,ref:ge,shapeFlag:M}=N;switch(k){case So:m(D,N,y,ne);break;case Rr:h(D,N,y,ne);break;case Tl:D==null&&S(N,y,ne,w);break;case Ut:Y(D,N,y,ne,J,ee,w,P,O);break;default:M&1?C(D,N,y,ne,J,ee,w,P,O):M&6?$(D,N,y,ne,J,ee,w,P,O):(M&64||M&128)&&k.process(D,N,y,ne,J,ee,w,P,O,le)}ge!=null&&J&&Ta(ge,D&&D.ref,ee,N||D,!N)},m=(D,N,y,ne)=>{if(D==null)i(N.el=a(N.children),y,ne);else{const J=N.el=D.el;N.children!==D.children&&c(J,N.children)}},h=(D,N,y,ne)=>{D==null?i(N.el=l(N.children||""),y,ne):N.el=D.el},S=(D,N,y,ne)=>{[D.el,D.anchor]=_(D.children,N,y,ne,D.el,D.anchor)},E=({el:D,anchor:N},y,ne)=>{let J;for(;D&&D!==N;)J=d(D),i(D,y,ne),D=J;i(N,y,ne)},x=({el:D,anchor:N})=>{let y;for(;D&&D!==N;)y=d(D),r(D),D=y;r(N)},C=(D,N,y,ne,J,ee,w,P,O)=>{N.type==="svg"?w="svg":N.type==="math"&&(w="mathml"),D==null?L(N,y,ne,J,ee,w,P,O):T(D,N,J,ee,w,P,O)},L=(D,N,y,ne,J,ee,w,P)=>{let O,k;const{props:ge,shapeFlag:M,transition:g,dirs:I}=D;if(O=D.el=o(D.type,ee,ge&&ge.is,ge),M&8?u(O,D.children):M&16&&U(D.children,O,null,ne,J,bl(D,ee),w,P),I&&sr(D,null,ne,"created"),A(O,D,D.scopeId,w,ne),ge){for(const j in ge)j!=="value"&&!ks(j)&&s(O,j,null,ge[j],ee,ne);"value"in ge&&s(O,"value",null,ge.value,ee),(k=ge.onVnodeBeforeMount)&&Kn(k,ne,D)}I&&sr(D,null,ne,"beforeMount");const V=x0(J,g);V&&g.beforeEnter(O),i(O,N,y),((k=ge&&ge.onVnodeMounted)||V||I)&&En(()=>{k&&Kn(k,ne,D),V&&g.enter(O),I&&sr(D,null,ne,"mounted")},J)},A=(D,N,y,ne,J)=>{if(y&&p(D,y),ne)for(let ee=0;ee<ne.length;ee++)p(D,ne[ee]);if(J){let ee=J.subTree;if(N===ee||Om(ee.type)&&(ee.ssContent===N||ee.ssFallback===N)){const w=J.vnode;A(D,w,w.scopeId,w.slotScopeIds,J.parent)}}},U=(D,N,y,ne,J,ee,w,P,O=0)=>{for(let k=O;k<D.length;k++){const ge=D[k]=P?Vi(D[k]):ei(D[k]);v(null,ge,N,y,ne,J,ee,w,P)}},T=(D,N,y,ne,J,ee,w)=>{const P=N.el=D.el;let{patchFlag:O,dynamicChildren:k,dirs:ge}=N;O|=D.patchFlag&16;const M=D.props||xt,g=N.props||xt;let I;if(y&&or(y,!1),(I=g.onVnodeBeforeUpdate)&&Kn(I,y,N,D),ge&&sr(N,D,y,"beforeUpdate"),y&&or(y,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(P,""),k?b(D.dynamicChildren,k,P,y,ne,bl(N,J),ee):w||W(D,N,P,null,y,ne,bl(N,J),ee,!1),O>0){if(O&16)F(P,M,g,y,J);else if(O&2&&M.class!==g.class&&s(P,"class",null,g.class,J),O&4&&s(P,"style",M.style,g.style,J),O&8){const V=N.dynamicProps;for(let j=0;j<V.length;j++){const X=V[j],Ee=M[X],pe=g[X];(pe!==Ee||X==="value")&&s(P,X,Ee,pe,J,y)}}O&1&&D.children!==N.children&&u(P,N.children)}else!w&&k==null&&F(P,M,g,y,J);((I=g.onVnodeUpdated)||ge)&&En(()=>{I&&Kn(I,y,N,D),ge&&sr(N,D,y,"updated")},ne)},b=(D,N,y,ne,J,ee,w)=>{for(let P=0;P<N.length;P++){const O=D[P],k=N[P],ge=O.el&&(O.type===Ut||!Rs(O,k)||O.shapeFlag&70)?f(O.el):y;v(O,k,ge,null,ne,J,ee,w,!0)}},F=(D,N,y,ne,J)=>{if(N!==y){if(N!==xt)for(const ee in N)!ks(ee)&&!(ee in y)&&s(D,ee,N[ee],null,J,ne);for(const ee in y){if(ks(ee))continue;const w=y[ee],P=N[ee];w!==P&&ee!=="value"&&s(D,ee,P,w,J,ne)}"value"in y&&s(D,"value",N.value,y.value,J)}},Y=(D,N,y,ne,J,ee,w,P,O)=>{const k=N.el=D?D.el:a(""),ge=N.anchor=D?D.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:I}=N;I&&(P=P?P.concat(I):I),D==null?(i(k,y,ne),i(ge,y,ne),U(N.children||[],y,ge,J,ee,w,P,O)):M>0&&M&64&&g&&D.dynamicChildren?(b(D.dynamicChildren,g,y,J,ee,w,P),(N.key!=null||J&&N===J.subTree)&&Im(D,N,!0)):W(D,N,y,ge,J,ee,w,P,O)},$=(D,N,y,ne,J,ee,w,P,O)=>{N.slotScopeIds=P,D==null?N.shapeFlag&512?J.ctx.activate(N,y,ne,w,O):ae(N,y,ne,J,ee,w,O):oe(D,N,O)},ae=(D,N,y,ne,J,ee,w)=>{const P=D.component=F0(D,ne,J);if(_m(D)&&(P.ctx.renderer=le),B0(P,!1,w),P.asyncDep){if(J&&J.registerDep(P,Q,w),!D.el){const O=P.subTree=Ke(Rr);h(null,O,N,y)}}else Q(P,D,N,y,J,ee,w)},oe=(D,N,y)=>{const ne=N.component=D.component;if(R0(D,N,y))if(ne.asyncDep&&!ne.asyncResolved){K(ne,N,y);return}else ne.next=N,ne.update();else N.el=D.el,ne.vnode=N},Q=(D,N,y,ne,J,ee,w)=>{const P=()=>{if(D.isMounted){let{next:M,bu:g,u:I,parent:V,vnode:j}=D;{const Ce=Dm(D);if(Ce){M&&(M.el=j.el,K(D,M,w)),Ce.asyncDep.then(()=>{D.isUnmounted||P()});return}}let X=M,Ee;or(D,!1),M?(M.el=j.el,K(D,M,w)):M=j,g&&aa(g),(Ee=M.props&&M.props.onVnodeBeforeUpdate)&&Kn(Ee,V,M,j),or(D,!0);const pe=nd(D),Te=D.subTree;D.subTree=pe,v(Te,pe,f(Te.el),H(Te),D,J,ee),M.el=pe.el,X===null&&C0(D,pe.el),I&&En(I,J),(Ee=M.props&&M.props.onVnodeUpdated)&&En(()=>Kn(Ee,V,M,j),J)}else{let M;const{el:g,props:I}=N,{bm:V,m:j,parent:X,root:Ee,type:pe}=D,Te=zs(N);or(D,!1),V&&aa(V),!Te&&(M=I&&I.onVnodeBeforeMount)&&Kn(M,X,N),or(D,!0);{Ee.ce&&Ee.ce._injectChildStyle(pe);const Ce=D.subTree=nd(D);v(null,Ce,y,ne,D,J,ee),N.el=Ce.el}if(j&&En(j,J),!Te&&(M=I&&I.onVnodeMounted)){const Ce=N;En(()=>Kn(M,X,Ce),J)}(N.shapeFlag&256||X&&zs(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&En(D.a,J),D.isMounted=!0,N=y=ne=null}};D.scope.on();const O=D.effect=new $p(P);D.scope.off();const k=D.update=O.run.bind(O),ge=D.job=O.runIfDirty.bind(O);ge.i=D,ge.id=D.uid,O.scheduler=()=>Zu(ge),or(D,!0),k()},K=(D,N,y)=>{N.component=D;const ne=D.vnode.props;D.vnode=N,D.next=null,d0(D,N.props,ne,y),g0(D,N.children,y),Ji(),Yf(D),Zi()},W=(D,N,y,ne,J,ee,w,P,O=!1)=>{const k=D&&D.children,ge=D?D.shapeFlag:0,M=N.children,{patchFlag:g,shapeFlag:I}=N;if(g>0){if(g&128){Se(k,M,y,ne,J,ee,w,P,O);return}else if(g&256){he(k,M,y,ne,J,ee,w,P,O);return}}I&8?(ge&16&&be(k,J,ee),M!==k&&u(y,M)):ge&16?I&16?Se(k,M,y,ne,J,ee,w,P,O):be(k,J,ee,!0):(ge&8&&u(y,""),I&16&&U(M,y,ne,J,ee,w,P,O))},he=(D,N,y,ne,J,ee,w,P,O)=>{D=D||ns,N=N||ns;const k=D.length,ge=N.length,M=Math.min(k,ge);let g;for(g=0;g<M;g++){const I=N[g]=O?Vi(N[g]):ei(N[g]);v(D[g],I,y,null,J,ee,w,P,O)}k>ge?be(D,J,ee,!0,!1,M):U(N,y,ne,J,ee,w,P,O,M)},Se=(D,N,y,ne,J,ee,w,P,O)=>{let k=0;const ge=N.length;let M=D.length-1,g=ge-1;for(;k<=M&&k<=g;){const I=D[k],V=N[k]=O?Vi(N[k]):ei(N[k]);if(Rs(I,V))v(I,V,y,null,J,ee,w,P,O);else break;k++}for(;k<=M&&k<=g;){const I=D[M],V=N[g]=O?Vi(N[g]):ei(N[g]);if(Rs(I,V))v(I,V,y,null,J,ee,w,P,O);else break;M--,g--}if(k>M){if(k<=g){const I=g+1,V=I<ge?N[I].el:ne;for(;k<=g;)v(null,N[k]=O?Vi(N[k]):ei(N[k]),y,V,J,ee,w,P,O),k++}}else if(k>g)for(;k<=M;)ke(D[k],J,ee,!0),k++;else{const I=k,V=k,j=new Map;for(k=V;k<=g;k++){const Ne=N[k]=O?Vi(N[k]):ei(N[k]);Ne.key!=null&&j.set(Ne.key,k)}let X,Ee=0;const pe=g-V+1;let Te=!1,Ce=0;const de=new Array(pe);for(k=0;k<pe;k++)de[k]=0;for(k=I;k<=M;k++){const Ne=D[k];if(Ee>=pe){ke(Ne,J,ee,!0);continue}let Ue;if(Ne.key!=null)Ue=j.get(Ne.key);else for(X=V;X<=g;X++)if(de[X-V]===0&&Rs(Ne,N[X])){Ue=X;break}Ue===void 0?ke(Ne,J,ee,!0):(de[Ue-V]=k+1,Ue>=Ce?Ce=Ue:Te=!0,v(Ne,N[Ue],y,null,J,ee,w,P,O),Ee++)}const Pe=Te?S0(de):ns;for(X=Pe.length-1,k=pe-1;k>=0;k--){const Ne=V+k,Ue=N[Ne],ye=Ne+1<ge?N[Ne+1].el:ne;de[k]===0?v(null,Ue,y,ye,J,ee,w,P,O):Te&&(X<0||k!==Pe[X]?Re(Ue,y,ye,2):X--)}}},Re=(D,N,y,ne,J=null)=>{const{el:ee,type:w,transition:P,children:O,shapeFlag:k}=D;if(k&6){Re(D.component.subTree,N,y,ne);return}if(k&128){D.suspense.move(N,y,ne);return}if(k&64){w.move(D,N,y,le);return}if(w===Ut){i(ee,N,y);for(let M=0;M<O.length;M++)Re(O[M],N,y,ne);i(D.anchor,N,y);return}if(w===Tl){E(D,N,y);return}if(ne!==2&&k&1&&P)if(ne===0)P.beforeEnter(ee),i(ee,N,y),En(()=>P.enter(ee),J);else{const{leave:M,delayLeave:g,afterLeave:I}=P,V=()=>i(ee,N,y),j=()=>{M(ee,()=>{V(),I&&I()})};g?g(ee,V,j):j()}else i(ee,N,y)},ke=(D,N,y,ne=!1,J=!1)=>{const{type:ee,props:w,ref:P,children:O,dynamicChildren:k,shapeFlag:ge,patchFlag:M,dirs:g,cacheIndex:I}=D;if(M===-2&&(J=!1),P!=null&&Ta(P,null,y,D,!0),I!=null&&(N.renderCache[I]=void 0),ge&256){N.ctx.deactivate(D);return}const V=ge&1&&g,j=!zs(D);let X;if(j&&(X=w&&w.onVnodeBeforeUnmount)&&Kn(X,N,D),ge&6)xe(D.component,y,ne);else{if(ge&128){D.suspense.unmount(y,ne);return}V&&sr(D,null,N,"beforeUnmount"),ge&64?D.type.remove(D,N,y,le,ne):k&&!k.hasOnce&&(ee!==Ut||M>0&&M&64)?be(k,N,y,!1,!0):(ee===Ut&&M&384||!J&&ge&16)&&be(O,N,y),ne&&et(D)}(j&&(X=w&&w.onVnodeUnmounted)||V)&&En(()=>{X&&Kn(X,N,D),V&&sr(D,null,N,"unmounted")},y)},et=D=>{const{type:N,el:y,anchor:ne,transition:J}=D;if(N===Ut){se(y,ne);return}if(N===Tl){x(D);return}const ee=()=>{r(y),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(D.shapeFlag&1&&J&&!J.persisted){const{leave:w,delayLeave:P}=J,O=()=>w(y,ee);P?P(D.el,ee,O):O()}else ee()},se=(D,N)=>{let y;for(;D!==N;)y=d(D),r(D),D=y;r(N)},xe=(D,N,y)=>{const{bum:ne,scope:J,job:ee,subTree:w,um:P,m:O,a:k}=D;td(O),td(k),ne&&aa(ne),J.stop(),ee&&(ee.flags|=8,ke(w,D,N,y)),P&&En(P,N),En(()=>{D.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},be=(D,N,y,ne=!1,J=!1,ee=0)=>{for(let w=ee;w<D.length;w++)ke(D[w],N,y,ne,J)},H=D=>{if(D.shapeFlag&6)return H(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const N=d(D.anchor||D.el),y=N&&N[Vv];return y?d(y):N};let re=!1;const ce=(D,N,y)=>{D==null?N._vnode&&ke(N._vnode,null,null,!0):v(N._vnode||null,D,N,null,null,null,y),N._vnode=D,re||(re=!0,Yf(),dm(),re=!1)},le={p:v,um:ke,m:Re,r:et,mt:ae,mc:U,pc:W,pbc:b,n:H,o:t};return{render:ce,hydrate:void 0,createApp:c0(ce)}}function bl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function x0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Im(t,e,n=!1){const i=t.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Im(o,a)),a.type===So&&(a.el=o.el)}}function S0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Dm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dm(e)}function td(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const y0=Symbol.for("v-scx"),E0=()=>Wn(y0);function Ss(t,e){return tf(t,null,e)}function Xn(t,e,n){return tf(t,e,n)}function tf(t,e,n=xt){const{immediate:i,deep:r,flush:s,once:o}=n,a=nn({},n),l=e&&i||!e&&s!=="post";let c;if(eo){if(s==="sync"){const p=E0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ii,p.resume=ii,p.pause=ii,p}}const u=qt;a.call=(p,_,v)=>li(p,u,_,v);let f=!1;s==="post"?a.scheduler=p=>{En(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Zu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Fv(t,e,a);return eo&&(c?c.push(d):l&&d()),d}function M0(t,e,n){const i=this.proxy,r=Vt(t)?t.includes(".")?Nm(i,t):()=>i[t]:t.bind(i,i);let s;je(e)?s=e:(s=e.handler,n=e);const o=yo(this),a=tf(r,s.bind(i),n);return o(),a}function Nm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const b0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nn(e)}Modifiers`]||t[`${Dr(e)}Modifiers`];function T0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xt;let r=n;const s=e.startsWith("update:"),o=s&&b0(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Vt(u)?u.trim():u)),o.number&&(r=n.map(xc)));let a,l=i[a=vl(e)]||i[a=vl(Nn(e))];!l&&s&&(l=i[a=vl(Dr(e))]),l&&li(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,li(c,t,6,r)}}function Um(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=Um(c,e,!0);u&&(a=!0,nn(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Et(t)&&i.set(t,null),null):(We(s)?s.forEach(l=>o[l]=null):nn(o,s),Et(t)&&i.set(t,o),o)}function ja(t,e){return!t||!ka(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,Dr(e))||pt(t,e))}function nd(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:v}=t,m=ba(t);let h,S;try{if(n.shapeFlag&4){const x=r||i,C=x;h=ei(c.call(C,x,u,f,p,d,_)),S=a}else{const x=e;h=ei(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),S=e.props?a:w0(a)}}catch(x){Ws.length=0,$a(x,t,1),h=Ke(Rr)}let E=h;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:C}=E;x.length&&C&7&&(s&&x.some(Bu)&&(S=A0(S,s)),E=cs(E,S,!1,!0))}return n.dirs&&(E=cs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Qu(E,n.transition),h=E,ba(m),h}const w0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ka(n))&&((e||(e={}))[n]=t[n]);return e},A0=(t,e)=>{const n={};for(const i in t)(!Bu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function R0(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?id(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ja(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?id(i,o,c):!0:!!o;return!1}function id(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ja(n,s))return!0}return!1}function C0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Om=t=>t.__isSuspense;function P0(t,e){e&&e.pendingBranch?We(t)?e.effects.push(...t):e.effects.push(t):Hv(t)}const Ut=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),Tl=Symbol.for("v-stc"),Ws=[];let Mn=null;function Be(t=!1){Ws.push(Mn=t?null:[])}function L0(){Ws.pop(),Mn=Ws[Ws.length-1]||null}let Qs=1;function rd(t,e=!1){Qs+=t,t<0&&Mn&&e&&(Mn.hasOnce=!0)}function Fm(t){return t.dynamicChildren=Qs>0?Mn||ns:null,L0(),Qs>0&&Mn&&Mn.push(t),t}function ze(t,e,n,i,r,s){return Fm(fe(t,e,n,i,r,s,!0))}function Aa(t,e,n,i,r){return Fm(Ke(t,e,n,i,r,!0))}function Ra(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const Bm=({key:t})=>t??null,ca=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Vt(t)||Nt(t)||je(t)?{i:fn,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,i=0,r=null,s=t===Ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bm(e),ref:e&&ca(e),scopeId:pm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:fn};return a?(nf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Vt(n)?8:16),Qs>0&&!o&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const Ke=I0;function I0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===e0)&&(t=Rr),Ra(t)){const a=cs(t,e,!0);return n&&nf(a,n),Qs>0&&!s&&Mn&&(a.shapeFlag&6?Mn[Mn.indexOf(t)]=a:Mn.push(a)),a.patchFlag=-2,a}if(G0(t)&&(t=t.__vccOpts),e){e=D0(e);let{class:a,style:l}=e;a&&!Vt(a)&&(e.class=Dt(a)),Et(l)&&(Yu(l)&&!We(l)&&(l=nn({},l)),e.style=go(l))}const o=Vt(t)?1:Om(t)?128:zv(t)?64:Et(t)?4:je(t)?2:0;return fe(t,e,n,i,r,o,s,!0)}function D0(t){return t?Yu(t)||Tm(t)?nn({},t):t:null}function cs(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?N0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Bm(c),ref:e&&e.ref?n&&s?We(s)?s.concat(ca(e)):[s,ca(e)]:ca(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Qu(u,l.clone(u)),u}function Cn(t=" ",e=0){return Ke(So,null,t,e)}function kt(t="",e=!1){return e?(Be(),Aa(Rr,null,t)):Ke(Rr,null,t)}function ei(t){return t==null||typeof t=="boolean"?Ke(Rr):We(t)?Ke(Ut,null,t.slice()):Ra(t)?Vi(t):Ke(So,null,String(t))}function Vi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function nf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(We(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Tm(e)?e._ctx=fn:r===3&&fn&&(fn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:fn},n=32):(e=String(e),i&64?(n=16,e=[Cn(e)]):n=8);t.children=e,t.shapeFlag|=n}function N0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=go([e.style,i.style]);else if(ka(r)){const s=e[r],o=i[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Kn(t,e,n,i=null){li(t,e,7,[n,i])}const U0=Em();let O0=0;function F0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||U0,s={uid:O0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Am(i,r),emitsOptions:Um(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=T0.bind(null,s),t.ce&&t.ce(s),s}let qt=null;const us=()=>qt||fn;let Ca,Rc;{const t=Ga(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ca=e("__VUE_INSTANCE_SETTERS__",n=>qt=n),Rc=e("__VUE_SSR_SETTERS__",n=>eo=n)}const yo=t=>{const e=qt;return Ca(t),t.scope.on(),()=>{t.scope.off(),Ca(e)}},sd=()=>{qt&&qt.scope.off(),Ca(null)};function km(t){return t.vnode.shapeFlag&4}let eo=!1;function B0(t,e=!1,n=!1){e&&Rc(e);const{props:i,children:r}=t.vnode,s=km(t);f0(t,i,s,e),m0(t,r,n);const o=s?k0(t,e):void 0;return e&&Rc(!1),o}function k0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,n0);const{setup:i}=n;if(i){Ji();const r=t.setupContext=i.length>1?V0(t):null,s=yo(t),o=vo(i,t,0,[t.props,r]),a=Op(o);if(Zi(),s(),(a||t.sp)&&!zs(t)&&mm(t),a){if(o.then(sd,sd),e)return o.then(l=>{od(t,l)}).catch(l=>{$a(l,t,0)});t.asyncDep=o}else od(t,o)}else Hm(t)}function od(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Et(e)&&(t.setupState=cm(e)),Hm(t)}function Hm(t,e,n){const i=t.type;t.render||(t.render=i.render||ii);{const r=yo(t);Ji();try{i0(t)}finally{Zi(),r()}}}const H0={get(t,e){return Qt(t,"get",""),t[e]}};function V0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H0),slots:t.slots,emit:t.emit,expose:e}}function Ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cm(ju(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function z0(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function G0(t){return je(t)&&"__vccOpts"in t}const Rt=(t,e)=>Uv(t,e,eo);function Ja(t,e,n){const i=arguments.length;return i===2?Et(e)&&!We(e)?Ra(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ra(n)&&(n=[n]),Ke(t,e,n))}const W0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cc;const ad=typeof window<"u"&&window.trustedTypes;if(ad)try{Cc=ad.createPolicy("vue",{createHTML:t=>t})}catch{}const Vm=Cc?t=>Cc.createHTML(t):t=>t,X0="http://www.w3.org/2000/svg",$0="http://www.w3.org/1998/Math/MathML",Si=typeof document<"u"?document:null,ld=Si&&Si.createElement("template"),q0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Si.createElementNS(X0,t):e==="mathml"?Si.createElementNS($0,t):n?Si.createElement(t,{is:n}):Si.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Si.createTextNode(t),createComment:t=>Si.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Si.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{ld.innerHTML=Vm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=ld.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Y0=Symbol("_vtc");function j0(t,e,n){const i=t[Y0];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cd=Symbol("_vod"),K0=Symbol("_vsh"),J0=Symbol(""),Z0=/(^|;)\s*display\s*:/;function Q0(t,e,n){const i=t.style,r=Vt(n);let s=!1;if(n&&!r){if(e)if(Vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ua(i,a,"")}else for(const o in e)n[o]==null&&ua(i,o,"");for(const o in n)o==="display"&&(s=!0),ua(i,o,n[o])}else if(r){if(e!==n){const o=i[J0];o&&(n+=";"+o),i.cssText=n,s=Z0.test(n)}}else e&&t.removeAttribute("style");cd in t&&(t[cd]=s?i.display:"",t[K0]&&(i.display="none"))}const ud=/\s*!important$/;function ua(t,e,n){if(We(n))n.forEach(i=>ua(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ex(t,e);ud.test(n)?t.setProperty(Dr(i),n.replace(ud,""),"important"):t[i]=n}}const fd=["Webkit","Moz","ms"],wl={};function ex(t,e){const n=wl[e];if(n)return n;let i=Nn(e);if(i!=="filter"&&i in t)return wl[e]=i;i=za(i);for(let r=0;r<fd.length;r++){const s=fd[r]+i;if(s in t)return wl[e]=s}return e}const dd="http://www.w3.org/1999/xlink";function hd(t,e,n,i,r,s=av(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(dd,e.slice(6,e.length)):t.setAttributeNS(dd,e,n):n==null||s&&!Hp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":ai(n)?String(n):n)}function pd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Hp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function gr(t,e,n,i){t.addEventListener(e,n,i)}function tx(t,e,n,i){t.removeEventListener(e,n,i)}const md=Symbol("_vei");function nx(t,e,n,i,r=null){const s=t[md]||(t[md]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=ix(e);if(i){const c=s[e]=ox(i,r);gr(t,a,c,l)}else o&&(tx(t,a,o,l),s[e]=void 0)}}const gd=/(?:Once|Passive|Capture)$/;function ix(t){let e;if(gd.test(t)){e={};let i;for(;i=t.match(gd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let Al=0;const rx=Promise.resolve(),sx=()=>Al||(rx.then(()=>Al=0),Al=Date.now());function ox(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;li(ax(i,n.value),e,5,[i])};return n.value=t,n.attached=sx(),n}function ax(t,e){if(We(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const _d=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?j0(t,i,o):e==="style"?Q0(t,n,i):ka(e)?Bu(e)||nx(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cx(t,e,i,o))?(pd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hd(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Vt(i))?pd(t,Nn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hd(t,e,i,o))};function cx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&_d(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _d(e)&&Vt(n)?!1:e in t}const Pa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return We(e)?n=>aa(e,n):e};function ux(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ss=Symbol("_assign"),La={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[ss]=Pa(r);const s=i||r.props&&r.props.type==="number";gr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=xc(a)),t[ss](a)}),n&&gr(t,"change",()=>{t.value=t.value.trim()}),e||(gr(t,"compositionstart",ux),gr(t,"compositionend",vd),gr(t,"change",vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[ss]=Pa(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?xc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},fx={deep:!0,created(t,e,n){t[ss]=Pa(n),gr(t,"change",()=>{const i=t._modelValue,r=dx(t),s=t.checked,o=t[ss];if(We(i)){const a=Vp(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ha(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(zm(t,s))})},mounted:xd,beforeUpdate(t,e,n){t[ss]=Pa(n),xd(t,e,n)}};function xd(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(We(e))r=Vp(e,i.props.value)>-1;else if(Ha(e))r=e.has(i.props.value);else{if(e===n)return;r=Wa(e,zm(t,!0))}t.checked!==r&&(t.checked=r)}function dx(t){return"_value"in t?t._value:t.value}function zm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const hx=nn({patchProp:lx},q0);let Sd;function px(){return Sd||(Sd=_0(hx))}const mx=(...t)=>{const e=px().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=_x(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,gx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function gx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _x(t){return Vt(t)?document.querySelector(t):t}const vx=vn({name:"a-hoverable",props:{path:{type:String,default:""},href:{type:String,default:""},target:{type:String,default:"_self"},icon:{type:String,default:""},text:{type:String,default:""},effect:{type:String,default:""}}}),zt=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},xx={key:0},Sx=["href","target"],yx={key:1},Ex={key:1},Mx={key:1};function bx(t,e,n,i,r,s){const o=Ri("router-link");return Be(),ze(Ut,null,[t.href?(Be(),ze("div",xx,[fe("a",{class:Dt(["a-hoverable",t.effect]),href:t.href,target:t.target},[t.icon?(Be(),ze("i",{key:0,class:Dt(t.icon)},null,2)):kt("",!0),t.text?(Be(),ze("span",yx,Kt(t.text),1)):kt("",!0)],10,Sx)])):kt("",!0),t.path?(Be(),ze("div",Ex,[Ke(o,{class:Dt(["a-hoverable",t.effect]),to:{name:t.path}},{default:br(()=>[t.icon?(Be(),ze("i",{key:0,class:Dt(t.icon)},null,2)):kt("",!0),t.text?(Be(),ze("span",Mx,Kt(t.text),1)):kt("",!0)]),_:1},8,["class","to"])])):kt("",!0)],64)}const Gm=zt(vx,[["render",bx],["__scopeId","data-v-fe57f52f"]]),Tx=vn({name:"switch-button",props:{isActive:{type:Boolean,default:!1},iconL:{type:String,default:""},iconR:{type:String,default:""},textL:{type:String,default:""},textR:{type:String,default:""},change:{type:Function,default:()=>{}}}}),wx={key:1},Ax={key:1};function Rx(t,e,n,i,r,s){return Be(),ze("button",{class:"switch",onClick:e[0]||(e[0]=(...o)=>t.change&&t.change(...o))},[fe("div",{class:Dt(["option",{active:!t.isActive}])},[t.iconL?(Be(),ze("i",{key:0,class:Dt(t.iconL)},null,2)):kt("",!0),t.textL?(Be(),ze("span",wx,Kt(t.textL),1)):kt("",!0)],2),fe("div",{class:Dt(["option",{active:t.isActive}])},[t.iconR?(Be(),ze("i",{key:0,class:Dt(t.iconR)},null,2)):kt("",!0),t.textR?(Be(),ze("span",Ax,Kt(t.textR),1)):kt("",!0)],2)])}const Wm=zt(Tx,[["render",Rx],["__scopeId","data-v-2a89746a"]]);/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Xm;const Za=t=>Xm=t,$m=Symbol();function Pc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Xs||(Xs={}));function Cx(){const t=Vu(!0),e=t.run(()=>ct({}));let n=[],i=[];const r=ju({install(s){Za(r),r._a=s,s.provide($m,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const qm=()=>{};function yd(t,e,n,i=qm){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Xp()&&cv(r),r}function Fr(t,...e){t.slice().forEach(n=>{n(...e)})}const Px=t=>t(),Ed=Symbol(),Rl=Symbol();function Lc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Pc(r)&&Pc(i)&&t.hasOwnProperty(n)&&!Nt(i)&&!Xi(i)?t[n]=Lc(r,i):t[n]=i}return t}const Lx=Symbol();function Ix(t){return!Pc(t)||!t.hasOwnProperty(Lx)}const{assign:ki}=Object;function Dx(t){return!!(Nt(t)&&t.effect)}function Nx(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Lv(n.state.value[t]);return ki(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=ju(Rt(()=>{Za(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=Ym(t,c,e,n,i,!0),l}function Ym(t,e,n={},i,r,s){let o;const a=ki({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),ct({});let v;function m(U){let T;c=u=!1,typeof U=="function"?(U(i.state.value[t]),T={type:Xs.patchFunction,storeId:t,events:p}):(Lc(i.state.value[t],U),T={type:Xs.patchObject,payload:U,storeId:t,events:p});const b=v=Symbol();Ju().then(()=>{v===b&&(c=!0)}),u=!0,Fr(f,T,i.state.value[t])}const h=s?function(){const{state:T}=n,b=T?T():{};this.$patch(F=>{ki(F,b)})}:qm;function S(){o.stop(),f=[],d=[],i._s.delete(t)}const E=(U,T="")=>{if(Ed in U)return U[Rl]=T,U;const b=function(){Za(i);const F=Array.from(arguments),Y=[],$=[];function ae(K){Y.push(K)}function oe(K){$.push(K)}Fr(d,{args:F,name:b[Rl],store:C,after:ae,onError:oe});let Q;try{Q=U.apply(this&&this.$id===t?this:C,F)}catch(K){throw Fr($,K),K}return Q instanceof Promise?Q.then(K=>(Fr(Y,K),K)).catch(K=>(Fr($,K),Promise.reject(K))):(Fr(Y,Q),Q)};return b[Ed]=!0,b[Rl]=T,b},x={_p:i,$id:t,$onAction:yd.bind(null,d),$patch:m,$reset:h,$subscribe(U,T={}){const b=yd(f,U,T.detached,()=>F()),F=o.run(()=>Xn(()=>i.state.value[t],Y=>{(T.flush==="sync"?u:c)&&U({storeId:t,type:Xs.direct,events:p},Y)},ki({},l,T)));return b},$dispose:S},C=_o(x);i._s.set(t,C);const A=(i._a&&i._a.runWithContext||Px)(()=>i._e.run(()=>(o=Vu()).run(()=>e({action:E}))));for(const U in A){const T=A[U];if(Nt(T)&&!Dx(T)||Xi(T))s||(_&&Ix(T)&&(Nt(T)?T.value=_[U]:Lc(T,_[U])),i.state.value[t][U]=T);else if(typeof T=="function"){const b=E(T,U);A[U]=b,a.actions[U]=T}}return ki(C,A),ki(at(C),A),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:U=>{m(T=>{ki(T,U)})}}),i._p.forEach(U=>{ki(C,o.run(()=>U({store:C,app:i._a,pinia:i,options:a})))}),_&&s&&n.hydrate&&n.hydrate(C.$state,_),c=!0,u=!0,C}/*! #__NO_SIDE_EFFECTS__ */function Qa(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(o,a){const l=u0();return o=o||(l?Wn($m,null):null),o&&Za(o),o=Xm,o._s.has(t)||(r?Ym(t,e,i,o):Nx(t,i,o)),o._s.get(t)}return s.$id=t,s}const Ux=["light","dark"],Eo=Qa("theme",()=>{const t=localStorage.getItem("theme"),e=ct(Ux.includes(t)?t:"light");Ss(()=>{localStorage.setItem("theme",e.value)});const n=Rt(()=>e.value==="dark");function i(){switch(e.value){case"light":e.value="dark";break;case"dark":e.value="light";break}}return{theme:e,isDark:n,changeTheme:i}});/*!
  * shared v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Ox(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ia=typeof window<"u",Qi=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Fx=(t,e,n)=>Bx({l:t,k:e,s:n}),Bx=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Ht=t=>typeof t=="number"&&isFinite(t),kx=t=>rf(t)==="[object Date]",fs=t=>rf(t)==="[object RegExp]",el=t=>tt(t)&&Object.keys(t).length===0,Gt=Object.assign,Hx=Object.create,St=(t=null)=>Hx(t);let Md;const xr=()=>Md||(Md=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:St());function bd(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Td(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vx(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Td(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Td(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const zx=Object.prototype.hasOwnProperty;function Vn(t,e){return zx.call(t,e)}const Lt=Array.isArray,bt=t=>typeof t=="function",Le=t=>typeof t=="string",ut=t=>typeof t=="boolean",ft=t=>t!==null&&typeof t=="object",Gx=t=>ft(t)&&bt(t.then)&&bt(t.catch),jm=Object.prototype.toString,rf=t=>jm.call(t),tt=t=>rf(t)==="[object Object]",Wx=t=>t==null?"":Lt(t)||tt(t)&&t.toString===jm?JSON.stringify(t,null,2):String(t);function sf(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Uo=t=>!ft(t)||Lt(t);function fa(t,e){if(Uo(t)||Uo(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(ft(i[s])&&!ft(r[s])&&(r[s]=Array.isArray(i[s])?[]:St()),Uo(r[s])||Uo(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Xx(t,e,n){return{line:t,column:e,offset:n}}function Ic(t,e,n){return{start:t,end:e}}const _t={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},$x=17;function tl(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function qx(t){throw t}const di=" ",Yx="\r",an=`
`,jx="\u2028",Kx="\u2029";function Jx(t){const e=t;let n=0,i=1,r=1,s=0;const o=A=>e[A]===Yx&&e[A+1]===an,a=A=>e[A]===an,l=A=>e[A]===Kx,c=A=>e[A]===jx,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>n,d=()=>i,p=()=>r,_=()=>s,v=A=>o(A)||l(A)||c(A)?an:e[A],m=()=>v(n),h=()=>v(n+s);function S(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function E(){return o(n+s)&&s++,s++,e[n+s]}function x(){n=0,i=1,r=1,s=0}function C(A=0){s=A}function L(){const A=n+s;for(;A!==n;)S();s=0}return{index:f,line:d,column:p,peekOffset:_,charAt:v,currentChar:m,currentPeek:h,next:S,peek:E,reset:x,resetPeek:C,skipToPeek:L}}const Li=void 0,Zx=".",wd="'",Qx="tokenizer";function eS(t,e={}){const n=e.location!==!1,i=Jx(t),r=()=>i.index(),s=()=>Xx(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(w,P,O,...k){const ge=c();if(P.column+=O,P.offset+=O,u){const M=n?Ic(ge.startLoc,P):null,g=tl(w,M,{domain:Qx,args:k});u(g)}}function d(w,P,O){w.endLoc=s(),w.currentType=P;const k={type:P};return n&&(k.loc=Ic(w.startLoc,w.endLoc)),O!=null&&(k.value=O),k}const p=w=>d(w,13);function _(w,P){return w.currentChar()===P?(w.next(),P):(f(_t.EXPECTED_TOKEN,s(),0,P),"")}function v(w){let P="";for(;w.currentPeek()===di||w.currentPeek()===an;)P+=w.currentPeek(),w.peek();return P}function m(w){const P=v(w);return w.skipToPeek(),P}function h(w){if(w===Li)return!1;const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P===95}function S(w){if(w===Li)return!1;const P=w.charCodeAt(0);return P>=48&&P<=57}function E(w,P){const{currentType:O}=P;if(O!==2)return!1;v(w);const k=h(w.currentPeek());return w.resetPeek(),k}function x(w,P){const{currentType:O}=P;if(O!==2)return!1;v(w);const k=w.currentPeek()==="-"?w.peek():w.currentPeek(),ge=S(k);return w.resetPeek(),ge}function C(w,P){const{currentType:O}=P;if(O!==2)return!1;v(w);const k=w.currentPeek()===wd;return w.resetPeek(),k}function L(w,P){const{currentType:O}=P;if(O!==7)return!1;v(w);const k=w.currentPeek()===".";return w.resetPeek(),k}function A(w,P){const{currentType:O}=P;if(O!==8)return!1;v(w);const k=h(w.currentPeek());return w.resetPeek(),k}function U(w,P){const{currentType:O}=P;if(!(O===7||O===11))return!1;v(w);const k=w.currentPeek()===":";return w.resetPeek(),k}function T(w,P){const{currentType:O}=P;if(O!==9)return!1;const k=()=>{const M=w.currentPeek();return M==="{"?h(w.peek()):M==="@"||M==="|"||M===":"||M==="."||M===di||!M?!1:M===an?(w.peek(),k()):F(w,!1)},ge=k();return w.resetPeek(),ge}function b(w){v(w);const P=w.currentPeek()==="|";return w.resetPeek(),P}function F(w,P=!0){const O=(ge=!1,M="")=>{const g=w.currentPeek();return g==="{"||g==="@"||!g?ge:g==="|"?!(M===di||M===an):g===di?(w.peek(),O(!0,di)):g===an?(w.peek(),O(!0,an)):!0},k=O();return P&&w.resetPeek(),k}function Y(w,P){const O=w.currentChar();return O===Li?Li:P(O)?(w.next(),O):null}function $(w){const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36}function ae(w){return Y(w,$)}function oe(w){const P=w.charCodeAt(0);return P>=97&&P<=122||P>=65&&P<=90||P>=48&&P<=57||P===95||P===36||P===45}function Q(w){return Y(w,oe)}function K(w){const P=w.charCodeAt(0);return P>=48&&P<=57}function W(w){return Y(w,K)}function he(w){const P=w.charCodeAt(0);return P>=48&&P<=57||P>=65&&P<=70||P>=97&&P<=102}function Se(w){return Y(w,he)}function Re(w){let P="",O="";for(;P=W(w);)O+=P;return O}function ke(w){let P="";for(;;){const O=w.currentChar();if(O==="{"||O==="}"||O==="@"||O==="|"||!O)break;if(O===di||O===an)if(F(w))P+=O,w.next();else{if(b(w))break;P+=O,w.next()}else P+=O,w.next()}return P}function et(w){m(w);let P="",O="";for(;P=Q(w);)O+=P;return w.currentChar()===Li&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),O}function se(w){m(w);let P="";return w.currentChar()==="-"?(w.next(),P+=`-${Re(w)}`):P+=Re(w),w.currentChar()===Li&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),P}function xe(w){return w!==wd&&w!==an}function be(w){m(w),_(w,"'");let P="",O="";for(;P=Y(w,xe);)P==="\\"?O+=H(w):O+=P;const k=w.currentChar();return k===an||k===Li?(f(_t.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),k===an&&(w.next(),_(w,"'")),O):(_(w,"'"),O)}function H(w){const P=w.currentChar();switch(P){case"\\":case"'":return w.next(),`\\${P}`;case"u":return re(w,P,4);case"U":return re(w,P,6);default:return f(_t.UNKNOWN_ESCAPE_SEQUENCE,s(),0,P),""}}function re(w,P,O){_(w,P);let k="";for(let ge=0;ge<O;ge++){const M=Se(w);if(!M){f(_t.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${P}${k}${w.currentChar()}`);break}k+=M}return`\\${P}${k}`}function ce(w){return w!=="{"&&w!=="}"&&w!==di&&w!==an}function le(w){m(w);let P="",O="";for(;P=Y(w,ce);)O+=P;return O}function He(w){let P="",O="";for(;P=ae(w);)O+=P;return O}function D(w){const P=O=>{const k=w.currentChar();return k==="{"||k==="@"||k==="|"||k==="("||k===")"||!k||k===di?O:(O+=k,w.next(),P(O))};return P("")}function N(w){m(w);const P=_(w,"|");return m(w),P}function y(w,P){let O=null;switch(w.currentChar()){case"{":return P.braceNest>=1&&f(_t.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),w.next(),O=d(P,2,"{"),m(w),P.braceNest++,O;case"}":return P.braceNest>0&&P.currentType===2&&f(_t.EMPTY_PLACEHOLDER,s(),0),w.next(),O=d(P,3,"}"),P.braceNest--,P.braceNest>0&&m(w),P.inLinked&&P.braceNest===0&&(P.inLinked=!1),O;case"@":return P.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),O=ne(w,P)||p(P),P.braceNest=0,O;default:{let ge=!0,M=!0,g=!0;if(b(w))return P.braceNest>0&&f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),O=d(P,1,N(w)),P.braceNest=0,P.inLinked=!1,O;if(P.braceNest>0&&(P.currentType===4||P.currentType===5||P.currentType===6))return f(_t.UNTERMINATED_CLOSING_BRACE,s(),0),P.braceNest=0,J(w,P);if(ge=E(w,P))return O=d(P,4,et(w)),m(w),O;if(M=x(w,P))return O=d(P,5,se(w)),m(w),O;if(g=C(w,P))return O=d(P,6,be(w)),m(w),O;if(!ge&&!M&&!g)return O=d(P,12,le(w)),f(_t.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,O.value),m(w),O;break}}return O}function ne(w,P){const{currentType:O}=P;let k=null;const ge=w.currentChar();switch((O===7||O===8||O===11||O===9)&&(ge===an||ge===di)&&f(_t.INVALID_LINKED_FORMAT,s(),0),ge){case"@":return w.next(),k=d(P,7,"@"),P.inLinked=!0,k;case".":return m(w),w.next(),d(P,8,".");case":":return m(w),w.next(),d(P,9,":");default:return b(w)?(k=d(P,1,N(w)),P.braceNest=0,P.inLinked=!1,k):L(w,P)||U(w,P)?(m(w),ne(w,P)):A(w,P)?(m(w),d(P,11,He(w))):T(w,P)?(m(w),ge==="{"?y(w,P)||k:d(P,10,D(w))):(O===7&&f(_t.INVALID_LINKED_FORMAT,s(),0),P.braceNest=0,P.inLinked=!1,J(w,P))}}function J(w,P){let O={type:13};if(P.braceNest>0)return y(w,P)||p(P);if(P.inLinked)return ne(w,P)||p(P);switch(w.currentChar()){case"{":return y(w,P)||p(P);case"}":return f(_t.UNBALANCED_CLOSING_BRACE,s(),0),w.next(),d(P,3,"}");case"@":return ne(w,P)||p(P);default:{if(b(w))return O=d(P,1,N(w)),P.braceNest=0,P.inLinked=!1,O;if(F(w))return d(P,0,ke(w));break}}return O}function ee(){const{currentType:w,offset:P,startLoc:O,endLoc:k}=l;return l.lastType=w,l.lastOffset=P,l.lastStartLoc=O,l.lastEndLoc=k,l.offset=r(),l.startLoc=s(),i.currentChar()===Li?d(l,13):J(i,l)}return{nextToken:ee,currentOffset:r,currentPosition:s,context:c}}const tS="parser",nS=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function iS(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function rS(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,S,E,x,...C){const L=h.currentPosition();if(L.offset+=x,L.column+=x,n){const A=e?Ic(E,L):null,U=tl(S,A,{domain:tS,args:C});n(U)}}function r(h,S,E){const x={type:h};return e&&(x.start=S,x.end=S,x.loc={start:E,end:E}),x}function s(h,S,E,x){e&&(h.end=S,h.loc&&(h.loc.end=E))}function o(h,S){const E=h.context(),x=r(3,E.offset,E.startLoc);return x.value=S,s(x,h.currentOffset(),h.currentPosition()),x}function a(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:C}=E,L=r(5,x,C);return L.index=parseInt(S,10),h.nextToken(),s(L,h.currentOffset(),h.currentPosition()),L}function l(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:C}=E,L=r(4,x,C);return L.key=S,h.nextToken(),s(L,h.currentOffset(),h.currentPosition()),L}function c(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:C}=E,L=r(9,x,C);return L.value=S.replace(nS,iS),h.nextToken(),s(L,h.currentOffset(),h.currentPosition()),L}function u(h){const S=h.nextToken(),E=h.context(),{lastOffset:x,lastStartLoc:C}=E,L=r(8,x,C);return S.type!==11?(i(h,_t.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),L.value="",s(L,x,C),{nextConsumeToken:S,node:L}):(S.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,Jn(S)),L.value=S.value||"",s(L,h.currentOffset(),h.currentPosition()),{node:L})}function f(h,S){const E=h.context(),x=r(7,E.offset,E.startLoc);return x.value=S,s(x,h.currentOffset(),h.currentPosition()),x}function d(h){const S=h.context(),E=r(6,S.offset,S.startLoc);let x=h.nextToken();if(x.type===8){const C=u(h);E.modifier=C.node,x=C.nextConsumeToken||h.nextToken()}switch(x.type!==9&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(x)),x=h.nextToken(),x.type===2&&(x=h.nextToken()),x.type){case 10:x.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(x)),E.key=f(h,x.value||"");break;case 4:x.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(x)),E.key=l(h,x.value||"");break;case 5:x.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(x)),E.key=a(h,x.value||"");break;case 6:x.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(x)),E.key=c(h,x.value||"");break;default:{i(h,_t.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const C=h.context(),L=r(7,C.offset,C.startLoc);return L.value="",s(L,C.offset,C.startLoc),E.key=L,s(E,C.offset,C.startLoc),{nextConsumeToken:x,node:E}}}return s(E,h.currentOffset(),h.currentPosition()),{node:E}}function p(h){const S=h.context(),E=S.currentType===1?h.currentOffset():S.offset,x=S.currentType===1?S.endLoc:S.startLoc,C=r(2,E,x);C.items=[];let L=null;do{const T=L||h.nextToken();switch(L=null,T.type){case 0:T.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(T)),C.items.push(o(h,T.value||""));break;case 5:T.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(T)),C.items.push(a(h,T.value||""));break;case 4:T.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(T)),C.items.push(l(h,T.value||""));break;case 6:T.value==null&&i(h,_t.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,Jn(T)),C.items.push(c(h,T.value||""));break;case 7:{const b=d(h);C.items.push(b.node),L=b.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const A=S.currentType===1?S.lastOffset:h.currentOffset(),U=S.currentType===1?S.lastEndLoc:h.currentPosition();return s(C,A,U),C}function _(h,S,E,x){const C=h.context();let L=x.items.length===0;const A=r(1,S,E);A.cases=[],A.cases.push(x);do{const U=p(h);L||(L=U.items.length===0),A.cases.push(U)}while(C.currentType!==13);return L&&i(h,_t.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),s(A,h.currentOffset(),h.currentPosition()),A}function v(h){const S=h.context(),{offset:E,startLoc:x}=S,C=p(h);return S.currentType===13?C:_(h,E,x,C)}function m(h){const S=eS(h,Gt({},t)),E=S.context(),x=r(0,E.offset,E.startLoc);return e&&x.loc&&(x.loc.source=h),x.body=v(S),t.onCacheKey&&(x.cacheKey=t.onCacheKey(h)),E.currentType!==13&&i(S,_t.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,h[E.offset]||""),s(x,S.currentOffset(),S.currentPosition()),x}return{parse:m}}function Jn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function sS(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Ad(t,e){for(let n=0;n<t.length;n++)of(t[n],e)}function of(t,e){switch(t.type){case 1:Ad(t.cases,e),e.helper("plural");break;case 2:Ad(t.items,e);break;case 6:{of(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function oS(t,e={}){const n=sS(t);n.helper("normalize"),t.body&&of(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function aS(t){const e=t.body;return e.type===2?Rd(e):e.cases.forEach(n=>Rd(n)),t}function Rd(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=sf(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Qr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Qr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Qr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Qr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Qr(e.key),e.k=e.key,delete e.key,e.modifier&&(Qr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function lS(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(v,m){o.code+=v}function c(v,m=!0){const h=m?i:"";l(r?h+"  ".repeat(v):h)}function u(v=!0){const m=++o.indentLevel;v&&c(m)}function f(v=!0){const m=--o.indentLevel;v&&c(m)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>o.needIndent}}function cS(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ds(t,e.key),e.modifier?(t.push(", "),ds(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function uS(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(ds(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function fS(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(ds(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function dS(t,e){e.body?ds(t,e.body):t.push("null")}function ds(t,e){const{helper:n}=t;switch(e.type){case 0:dS(t,e);break;case 1:fS(t,e);break;case 2:uS(t,e);break;case 6:cS(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const hS=(t,e={})=>{const n=Le(e.mode)?e.mode:"normal",i=Le(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=lS(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${sf(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),ds(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function pS(t,e={}){const n=Gt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=rS(n).parse(t);return i?(s&&aS(a),r&&Qr(a),{ast:a,code:""}):(oS(a,n),hS(a,n))}/*!
  * core-base v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function mS(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(xr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(xr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ri(t){return ft(t)&&af(t)===0&&(Vn(t,"b")||Vn(t,"body"))}const Km=["b","body"];function gS(t){return er(t,Km)}const Jm=["c","cases"];function _S(t){return er(t,Jm,[])}const Zm=["s","static"];function vS(t){return er(t,Zm)}const Qm=["i","items"];function xS(t){return er(t,Qm,[])}const eg=["t","type"];function af(t){return er(t,eg)}const tg=["v","value"];function Oo(t,e){const n=er(t,tg);if(n!=null)return n;throw to(e)}const ng=["m","modifier"];function SS(t){return er(t,ng)}const ig=["k","key"];function yS(t){const e=er(t,ig);if(e)return e;throw to(6)}function er(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Vn(t,r)&&t[r]!=null)return t[r]}return n}const rg=[...Km,...Jm,...Zm,...Qm,...ig,...ng,...tg,...eg];function to(t){return new Error(`unhandled node type: ${t}`)}function Cl(t){return n=>ES(n,t)}function ES(t,e){const n=gS(e);if(n==null)throw to(0);if(af(n)===1){const s=_S(n);return t.plural(s.reduce((o,a)=>[...o,Cd(t,a)],[]))}else return Cd(t,n)}function Cd(t,e){const n=vS(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=xS(e).reduce((r,s)=>[...r,Dc(t,s)],[]);return t.normalize(i)}}function Dc(t,e){const n=af(e);switch(n){case 3:return Oo(e,n);case 9:return Oo(e,n);case 4:{const i=e;if(Vn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Vn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw to(n)}case 5:{const i=e;if(Vn(i,"i")&&Ht(i.i))return t.interpolate(t.list(i.i));if(Vn(i,"index")&&Ht(i.index))return t.interpolate(t.list(i.index));throw to(n)}case 6:{const i=e,r=SS(i),s=yS(i);return t.linked(Dc(t,s),r?Dc(t,r):void 0,t.type)}case 7:return Oo(e,n);case 8:return Oo(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const MS=t=>t;let Fo=St();function bS(t,e={}){let n=!1;const i=e.onError||qx;return e.onError=r=>{n=!0,i(r)},{...pS(t,e),detectError:n}}function TS(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Le(t)){ut(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||MS)(t),r=Fo[i];if(r)return r;const{ast:s,detectError:o}=bS(t,{...e,location:!1,jit:!0}),a=Cl(s);return o?a:Fo[i]=a}else{const n=t.cacheKey;if(n){const i=Fo[n];return i||(Fo[n]=Cl(t))}else return Cl(t)}}let no=null;function wS(t){no=t}function AS(t,e,n){no&&no.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const RS=CS("function:translate");function CS(t){return e=>no&&no.emit(t,e)}const bi={INVALID_ARGUMENT:$x,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},PS=24;function Ti(t){return tl(t,null,void 0)}function lf(t,e){return e.locale!=null?Pd(e.locale):Pd(t.locale)}let Pl;function Pd(t){if(Le(t))return t;if(bt(t)){if(t.resolvedOnce&&Pl!=null)return Pl;if(t.constructor.name==="Function"){const e=t();if(Gx(e))throw Ti(bi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Pl=e}else throw Ti(bi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Ti(bi.NOT_SUPPORT_LOCALE_TYPE)}function LS(t,e,n){return[...new Set([n,...Lt(e)?e:ft(e)?Object.keys(e):Le(e)?[e]:[n]])]}function sg(t,e,n){const i=Le(n)?n:io,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Lt(o);)o=Ld(s,o,e);const a=Lt(e)||!tt(e)?e:e.default?e.default:null;o=Le(a)?[a]:a,Lt(o)&&Ld(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Ld(t,e,n){let i=!0;for(let r=0;r<e.length&&ut(i);r++){const s=e[r];Le(s)&&(i=IS(t,e[r],n))}return i}function IS(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=DS(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function DS(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Lt(n)||tt(n))&&n[r]&&(i=n[r])}return i}const tr=[];tr[0]={w:[0],i:[3,0],"[":[4],o:[7]};tr[1]={w:[1],".":[2],"[":[4],o:[7]};tr[2]={w:[2],i:[3,0],0:[3,0]};tr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};tr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};tr[5]={"'":[4,0],o:8,l:[5,0]};tr[6]={'"':[4,0],o:8,l:[6,0]};const NS=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function US(t){return NS.test(t)}function OS(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function FS(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function BS(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:US(e)?OS(e):"*"+e}function kS(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=BS(o),o===!1))return!1;d[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=FS(s),f=tr[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Id=new Map;function HS(t,e){return ft(t)?t[e]:null}function VS(t,e){if(!ft(t))return null;let n=Id.get(e);if(n||(n=kS(e),n&&Id.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(rg.includes(o)&&ri(r))return null;const a=r[o];if(a===void 0||bt(r))return null;r=a,s++}return r}const zS="11.1.11",nl=-1,io="en-US",Dd="",Nd=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function GS(){return{upper:(t,e)=>e==="text"&&Le(t)?t.toUpperCase():e==="vnode"&&ft(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Le(t)?t.toLowerCase():e==="vnode"&&ft(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Le(t)?Nd(t):e==="vnode"&&ft(t)&&"__v_isVNode"in t?Nd(t.children):t}}let og;function WS(t){og=t}let ag;function XS(t){ag=t}let lg;function $S(t){lg=t}let cg=null;const qS=t=>{cg=t},YS=()=>cg;let ug=null;const Ud=t=>{ug=t},jS=()=>ug;let Od=0;function KS(t={}){const e=bt(t.onWarn)?t.onWarn:Ox,n=Le(t.version)?t.version:zS,i=Le(t.locale)||bt(t.locale)?t.locale:io,r=bt(i)?io:i,s=Lt(t.fallbackLocale)||tt(t.fallbackLocale)||Le(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=tt(t.messages)?t.messages:Ll(r),a=tt(t.datetimeFormats)?t.datetimeFormats:Ll(r),l=tt(t.numberFormats)?t.numberFormats:Ll(r),c=Gt(St(),t.modifiers,GS()),u=t.pluralRules||St(),f=bt(t.missing)?t.missing:null,d=ut(t.missingWarn)||fs(t.missingWarn)?t.missingWarn:!0,p=ut(t.fallbackWarn)||fs(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,v=!!t.unresolving,m=bt(t.postTranslation)?t.postTranslation:null,h=tt(t.processor)?t.processor:null,S=ut(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,x=bt(t.messageCompiler)?t.messageCompiler:og,C=bt(t.messageResolver)?t.messageResolver:ag||HS,L=bt(t.localeFallbacker)?t.localeFallbacker:lg||LS,A=ft(t.fallbackContext)?t.fallbackContext:void 0,U=t,T=ft(U.__datetimeFormatters)?U.__datetimeFormatters:new Map,b=ft(U.__numberFormatters)?U.__numberFormatters:new Map,F=ft(U.__meta)?U.__meta:{};Od++;const Y={version:n,cid:Od,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:_,unresolving:v,postTranslation:m,processor:h,warnHtmlMessage:S,escapeParameter:E,messageCompiler:x,messageResolver:C,localeFallbacker:L,fallbackContext:A,onWarn:e,__meta:F};return Y.datetimeFormats=a,Y.numberFormats=l,Y.__datetimeFormatters=T,Y.__numberFormatters=b,__INTLIFY_PROD_DEVTOOLS__&&AS(Y,n,F),Y}const Ll=t=>({[t]:St()});function cf(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Le(a)?a:e}else return e}function Cs(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function JS(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function ZS(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(JS(t,e[i]))return!0;return!1}function Fd(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Nc(...e),d=ut(u.missingWarn)?u.missingWarn:t.missingWarn;ut(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=lf(t,u),v=o(t,r,_);if(!Le(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},h,S=null;const E="datetime format";for(let L=0;L<v.length&&(h=v[L],m=n[h]||{},S=m[l],!tt(S));L++)cf(t,l,h,d,E);if(!tt(S)||!Le(h))return i?nl:l;let x=`${h}__${l}`;el(f)||(x=`${x}__${JSON.stringify(f)}`);let C=a.get(x);return C||(C=new Intl.DateTimeFormat(h,Gt({},S,f)),a.set(x,C)),p?C.formatToParts(c):C.format(c)}const fg=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Nc(...t){const[e,n,i,r]=t,s=St();let o=St(),a;if(Le(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Ti(bi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Ti(bi.INVALID_ISO_DATE_ARGUMENT)}}else if(kx(e)){if(isNaN(e.getTime()))throw Ti(bi.INVALID_DATE_ARGUMENT);a=e}else if(Ht(e))a=e;else throw Ti(bi.INVALID_ARGUMENT);return Le(n)?s.key=n:tt(n)&&Object.keys(n).forEach(l=>{fg.includes(l)?o[l]=n[l]:s[l]=n[l]}),Le(i)?s.locale=i:tt(i)&&(o=i),tt(r)&&(o=r),[s.key||"",a,s,o]}function Bd(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function kd(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Uc(...e),d=ut(u.missingWarn)?u.missingWarn:t.missingWarn;ut(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=lf(t,u),v=o(t,r,_);if(!Le(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},h,S=null;const E="number format";for(let L=0;L<v.length&&(h=v[L],m=n[h]||{},S=m[l],!tt(S));L++)cf(t,l,h,d,E);if(!tt(S)||!Le(h))return i?nl:l;let x=`${h}__${l}`;el(f)||(x=`${x}__${JSON.stringify(f)}`);let C=a.get(x);return C||(C=new Intl.NumberFormat(h,Gt({},S,f)),a.set(x,C)),p?C.formatToParts(c):C.format(c)}const dg=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Uc(...t){const[e,n,i,r]=t,s=St();let o=St();if(!Ht(e))throw Ti(bi.INVALID_ARGUMENT);const a=e;return Le(n)?s.key=n:tt(n)&&Object.keys(n).forEach(l=>{dg.includes(l)?o[l]=n[l]:s[l]=n[l]}),Le(i)?s.locale=i:tt(i)&&(o=i),tt(r)&&(o=r),[s.key||"",a,s,o]}function Hd(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const QS=t=>t,ey=t=>"",ty="text",ny=t=>t.length===0?"":sf(t),iy=Wx;function Vd(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function ry(t){const e=Ht(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Ht(t.named.count)||Ht(t.named.n))?Ht(t.named.count)?t.named.count:Ht(t.named.n)?t.named.n:e:e}function sy(t,e){e.count||(e.count=t),e.n||(e.n=t)}function oy(t={}){const e=t.locale,n=ry(t),i=ft(t.pluralRules)&&Le(e)&&bt(t.pluralRules[e])?t.pluralRules[e]:Vd,r=ft(t.pluralRules)&&Le(e)&&bt(t.pluralRules[e])?Vd:void 0,s=h=>h[i(n,h.length,r)],o=t.list||[],a=h=>o[h],l=t.named||St();Ht(t.pluralIndex)&&sy(n,l);const c=h=>l[h];function u(h,S){const E=bt(t.messages)?t.messages(h,!!S):ft(t.messages)?t.messages[h]:!1;return E||(t.parent?t.parent.message(h):ey)}const f=h=>t.modifiers?t.modifiers[h]:QS,d=tt(t.processor)&&bt(t.processor.normalize)?t.processor.normalize:ny,p=tt(t.processor)&&bt(t.processor.interpolate)?t.processor.interpolate:iy,_=tt(t.processor)&&Le(t.processor.type)?t.processor.type:ty,m={list:a,named:c,plural:s,linked:(h,...S)=>{const[E,x]=S;let C="text",L="";S.length===1?ft(E)?(L=E.modifier||L,C=E.type||C):Le(E)&&(L=E||L):S.length===2&&(Le(E)&&(L=E||L),Le(x)&&(C=x||C));const A=u(h,!0)(m),U=C==="vnode"&&Lt(A)&&L?A[0]:A;return L?f(L)(U,C):U},message:u,type:_,interpolate:p,normalize:d,values:Gt(St(),o,l)};return m}const zd=()=>"",Ln=t=>bt(t);function Gd(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=Oc(...e),u=ut(c.missingWarn)?c.missingWarn:t.missingWarn,f=ut(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=ut(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Le(c.default)||ut(c.default)?ut(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,v=n||_!=null&&(Le(_)||bt(_)),m=lf(t,c);d&&ay(c);let[h,S,E]=p?[l,m,a[m]||St()]:hg(t,l,m,o,f,u),x=h,C=l;if(!p&&!(Le(x)||ri(x)||Ln(x))&&v&&(x=_,C=x),!p&&(!(Le(x)||ri(x)||Ln(x))||!Le(S)))return r?nl:l;let L=!1;const A=()=>{L=!0},U=Ln(x)?x:pg(t,l,S,x,C,A);if(L)return x;const T=uy(t,S,E,c),b=oy(T),F=ly(t,U,b);let Y=i?i(F,l):F;if(d&&Le(Y)&&(Y=Vx(Y)),__INTLIFY_PROD_DEVTOOLS__){const $={timestamp:Date.now(),key:Le(l)?l:Ln(x)?x.key:"",locale:S||(Ln(x)?x.locale:""),format:Le(x)?x:Ln(x)?x.source:"",message:Y};$.meta=Gt({},t.__meta,YS()||{}),RS($)}return Y}function ay(t){Lt(t.list)?t.list=t.list.map(e=>Le(e)?bd(e):e):ft(t.named)&&Object.keys(t.named).forEach(e=>{Le(t.named[e])&&(t.named[e]=bd(t.named[e]))})}function hg(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=St(),d,p=null;const _="translate";for(let v=0;v<u.length&&(d=u[v],f=o[d]||St(),(p=l(f,e))===null&&(p=f[e]),!(Le(p)||ri(p)||Ln(p)));v++)if(!ZS(d,u)){const m=cf(t,e,d,s,_);m!==e&&(p=m)}return[p,d,f]}function pg(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Ln(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=o(i,cy(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function ly(t,e,n){return e(n)}function Oc(...t){const[e,n,i]=t,r=St();if(!Le(e)&&!Ht(e)&&!Ln(e)&&!ri(e))throw Ti(bi.INVALID_ARGUMENT);const s=Ht(e)?String(e):(Ln(e),e);return Ht(n)?r.plural=n:Le(n)?r.default=n:tt(n)&&!el(n)?r.named=n:Lt(n)&&(r.list=n),Ht(i)?r.plural=i:Le(i)?r.default=i:tt(i)&&Gt(r,i),[s,r]}function cy(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>Fx(e,n,o)}}function uy(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let v=o(n,p);if(v==null&&(u||_)){const[,,m]=hg(u||t,p,e,a,l,c);v=o(m,p)}if(Le(v)||ri(v)){let m=!1;const S=pg(t,p,e,v,p,()=>{m=!0});return m?zd:S}else return Ln(v)?v:zd}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Ht(i.plural)&&(d.pluralIndex=i.plural),d}mS();/*!
  * vue-i18n v11.1.11
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const fy="11.1.11";function dy(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(xr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(xr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(xr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(xr().__INTLIFY_PROD_DEVTOOLS__=!1)}const _n={UNEXPECTED_RETURN_TYPE:PS,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function Tn(t,...e){return tl(t,null,void 0)}const Fc=Qi("__translateVNode"),Bc=Qi("__datetimeParts"),kc=Qi("__numberParts"),mg=Qi("__setPluralRules"),gg=Qi("__injectWithOption"),Hc=Qi("__dispose");function ro(t){if(!ft(t)||ri(t))return t;for(const e in t)if(Vn(t,e))if(!e.includes("."))ft(t[e])&&ro(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=St()),!ft(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(ri(r)?rg.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!ri(r)){const o=r[n[i]];ft(o)&&ro(o)}}return t}function uf(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=tt(n)?n:Lt(i)?St():{[t]:St()};if(Lt(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||St(),fa(c,o[l])):fa(c,o)}else Le(a)&&fa(JSON.parse(a),o)}),r==null&&s)for(const a in o)Vn(o,a)&&ro(o[a]);return o}function _g(t){return t.type}function vg(t,e,n){let i=ft(e.messages)?e.messages:St();"__i18nGlobal"in n&&(i=uf(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(ft(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(ft(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Wd(t){return Ke(So,null,t,0)}const Xd="__INTLIFY_META__",$d=()=>[],hy=()=>!1;let qd=0;function Yd(t){return(e,n,i,r)=>t(n,i,us()||void 0,r)}const py=()=>{const t=us();let e=null;return t&&(e=_g(t)[Xd])?{[Xd]:e}:null};function ff(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Ia?ct:Ku;let o=ut(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Le(t.locale)?t.locale:io),l=s(e&&o?e.fallbackLocale.value:Le(t.fallbackLocale)||Lt(t.fallbackLocale)||tt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(uf(a.value,t)),u=s(tt(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(tt(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=e?e.missingWarn:ut(t.missingWarn)||fs(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:ut(t.fallbackWarn)||fs(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:ut(t.fallbackRoot)?t.fallbackRoot:!0,v=!!t.fallbackFormat,m=bt(t.missing)?t.missing:null,h=bt(t.missing)?Yd(t.missing):null,S=bt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:ut(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const C=e?e.modifiers:tt(t.modifiers)?t.modifiers:{};let L=t.pluralRules||e&&e.pluralRules,A;A=(()=>{i&&Ud(null);const g={version:fy,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:C,pluralRules:L,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:E,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=tt(A)?A.__datetimeFormatters:void 0,g.__numberFormatters=tt(A)?A.__numberFormatters:void 0;const I=KS(g);return i&&Ud(I),I})(),Cs(A,a.value,l.value);function T(){return[a.value,l.value,c.value,u.value,f.value]}const b=Rt({get:()=>a.value,set:g=>{A.locale=g,a.value=g}}),F=Rt({get:()=>l.value,set:g=>{A.fallbackLocale=g,l.value=g,Cs(A,a.value,g)}}),Y=Rt(()=>c.value),$=Rt(()=>u.value),ae=Rt(()=>f.value);function oe(){return bt(S)?S:null}function Q(g){S=g,A.postTranslation=g}function K(){return m}function W(g){g!==null&&(h=Yd(g)),m=g,A.missing=h}const he=(g,I,V,j,X,Ee)=>{T();let pe;try{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=e?jS():void 0),pe=g(A)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=void 0)}if(V!=="translate exists"&&Ht(pe)&&pe===nl||V==="translate exists"&&!pe){const[Te,Ce]=I();return e&&_?j(e):X(Te)}else{if(Ee(pe))return pe;throw Tn(_n.UNEXPECTED_RETURN_TYPE)}};function Se(...g){return he(I=>Reflect.apply(Gd,null,[I,...g]),()=>Oc(...g),"translate",I=>Reflect.apply(I.t,I,[...g]),I=>I,I=>Le(I))}function Re(...g){const[I,V,j]=g;if(j&&!ft(j))throw Tn(_n.INVALID_ARGUMENT);return Se(I,V,Gt({resolvedMessage:!0},j||{}))}function ke(...g){return he(I=>Reflect.apply(Fd,null,[I,...g]),()=>Nc(...g),"datetime format",I=>Reflect.apply(I.d,I,[...g]),()=>Dd,I=>Le(I)||Lt(I))}function et(...g){return he(I=>Reflect.apply(kd,null,[I,...g]),()=>Uc(...g),"number format",I=>Reflect.apply(I.n,I,[...g]),()=>Dd,I=>Le(I)||Lt(I))}function se(g){return g.map(I=>Le(I)||Ht(I)||ut(I)?Wd(String(I)):I)}const be={normalize:se,interpolate:g=>g,type:"vnode"};function H(...g){return he(I=>{let V;const j=I;try{j.processor=be,V=Reflect.apply(Gd,null,[j,...g])}finally{j.processor=null}return V},()=>Oc(...g),"translate",I=>I[Fc](...g),I=>[Wd(I)],I=>Lt(I))}function re(...g){return he(I=>Reflect.apply(kd,null,[I,...g]),()=>Uc(...g),"number format",I=>I[kc](...g),$d,I=>Le(I)||Lt(I))}function ce(...g){return he(I=>Reflect.apply(Fd,null,[I,...g]),()=>Nc(...g),"datetime format",I=>I[Bc](...g),$d,I=>Le(I)||Lt(I))}function le(g){L=g,A.pluralRules=L}function He(g,I){return he(()=>{if(!g)return!1;const V=Le(I)?I:a.value,j=y(V),X=A.messageResolver(j,g);return ri(X)||Ln(X)||Le(X)},()=>[g],"translate exists",V=>Reflect.apply(V.te,V,[g,I]),hy,V=>ut(V))}function D(g){let I=null;const V=sg(A,l.value,a.value);for(let j=0;j<V.length;j++){const X=c.value[V[j]]||{},Ee=A.messageResolver(X,g);if(Ee!=null){I=Ee;break}}return I}function N(g){const I=D(g);return I??(e?e.tm(g)||{}:{})}function y(g){return c.value[g]||{}}function ne(g,I){if(r){const V={[g]:I};for(const j in V)Vn(V,j)&&ro(V[j]);I=V[g]}c.value[g]=I,A.messages=c.value}function J(g,I){c.value[g]=c.value[g]||{};const V={[g]:I};if(r)for(const j in V)Vn(V,j)&&ro(V[j]);I=V[g],fa(I,c.value[g]),A.messages=c.value}function ee(g){return u.value[g]||{}}function w(g,I){u.value[g]=I,A.datetimeFormats=u.value,Bd(A,g,I)}function P(g,I){u.value[g]=Gt(u.value[g]||{},I),A.datetimeFormats=u.value,Bd(A,g,I)}function O(g){return f.value[g]||{}}function k(g,I){f.value[g]=I,A.numberFormats=f.value,Hd(A,g,I)}function ge(g,I){f.value[g]=Gt(f.value[g]||{},I),A.numberFormats=f.value,Hd(A,g,I)}qd++,e&&Ia&&(Xn(e.locale,g=>{o&&(a.value=g,A.locale=g,Cs(A,a.value,l.value))}),Xn(e.fallbackLocale,g=>{o&&(l.value=g,A.fallbackLocale=g,Cs(A,a.value,l.value))}));const M={id:qd,locale:b,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Cs(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:Y,get modifiers(){return C},get pluralRules(){return L||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(g){d=g,A.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(g){p=g,A.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return v},set fallbackFormat(g){v=g,A.fallbackFormat=v},get warnHtmlMessage(){return E},set warnHtmlMessage(g){E=g,A.warnHtmlMessage=g},get escapeParameter(){return x},set escapeParameter(g){x=g,A.escapeParameter=g},t:Se,getLocaleMessage:y,setLocaleMessage:ne,mergeLocaleMessage:J,getPostTranslationHandler:oe,setPostTranslationHandler:Q,getMissingHandler:K,setMissingHandler:W,[mg]:le};return M.datetimeFormats=$,M.numberFormats=ae,M.rt=Re,M.te=He,M.tm=N,M.d=ke,M.n=et,M.getDateTimeFormat=ee,M.setDateTimeFormat=w,M.mergeDateTimeFormat=P,M.getNumberFormat=O,M.setNumberFormat=k,M.mergeNumberFormat=ge,M[gg]=n,M[Fc]=H,M[Bc]=ce,M[kc]=re,M}function my(t){const e=Le(t.locale)?t.locale:io,n=Le(t.fallbackLocale)||Lt(t.fallbackLocale)||tt(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=bt(t.missing)?t.missing:void 0,r=ut(t.silentTranslationWarn)||fs(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=ut(t.silentFallbackWarn)||fs(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=ut(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=tt(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=bt(t.postTranslation)?t.postTranslation:void 0,f=Le(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=ut(t.sync)?t.sync:!0;let _=t.messages;if(tt(t.sharedMessages)){const C=t.sharedMessages;_=Object.keys(C).reduce((A,U)=>{const T=A[U]||(A[U]={});return Gt(T,C[U]),A},_||{})}const{__i18n:v,__root:m,__injectWithOption:h}=t,S=t.datetimeFormats,E=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:x,datetimeFormats:S,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:v,__root:m,__injectWithOption:h}}function Vc(t={}){const e=ff(my(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return ut(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=ut(r)?!r:r},get silentFallbackWarn(){return ut(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=ut(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function gy(t,e,n){return{beforeCreate(){const i=us();if(!i)throw Tn(_n.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=jd(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Vc(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=jd(t,r);else{this.$i18n=Vc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&vg(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=us();if(!i)throw Tn(_n.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function jd(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[mg](e.pluralizationRules||t.pluralizationRules);const n=uf(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const df={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function _y({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===Ut?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},St())}function xg(){return Ut}const vy=vn({name:"i18n-t",props:Gt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Ht(t)||!isNaN(t)}},df),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Nr({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),o=St();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Le(t.plural)?+t.plural:t.plural);const a=_y(e,s),l=r[Fc](t.keypath,a,o),c=Gt(St(),i),u=Le(t.tag)||ft(t.tag)?t.tag:xg();return Ja(u,c,l)}}}),Kd=vy;function xy(t){return Lt(t)&&!Le(t[0])}function Sg(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=St();t.locale&&(o.locale=t.locale),Le(t.format)?o.key=t.format:ft(t.format)&&(Le(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,p)=>n.includes(p)?Gt(St(),d,{[p]:t.format[p]}):d,St()));const l=i(t.value,o,a);let c=[o.key];Lt(l)?c=l.map((d,p)=>{const _=r[d.type],v=_?_({[d.type]:d.value,index:p,parts:l}):[d.value];return xy(v)&&(v[0].key=`${d.type}-${p}`),v}):Le(l)&&(c=[l]);const u=Gt(St(),s),f=Le(t.tag)||ft(t.tag)?t.tag:xg();return Ja(f,u,c)}}const Sy=vn({name:"i18n-n",props:Gt({value:{type:Number,required:!0},format:{type:[String,Object]}},df),setup(t,e){const n=t.i18n||Nr({useScope:t.scope,__useComponent:!0});return Sg(t,e,dg,(...i)=>n[kc](...i))}}),Jd=Sy;function yy(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Ey(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw Tn(_n.UNEXPECTED_ERROR);const c=yy(t,a.$),u=Zd(l);return[Reflect.apply(c.t,c,[...Qd(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Ia&&t.global===c&&(o.__i18nWatcher=Xn(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ia&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=Zd(a);o.textContent=Reflect.apply(l.t,l,[...Qd(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Zd(t){if(Le(t))return{path:t};if(tt(t)){if(!("path"in t))throw Tn(_n.REQUIRED_VALUE,"path");return t}else throw Tn(_n.INVALID_VALUE)}function Qd(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Le(n)&&(o.locale=n),Ht(r)&&(o.plural=r),Ht(s)&&(o.plural=s),[e,a,o]}function My(t,e,...n){const i=tt(n[0])?n[0]:{};(ut(i.globalInstall)?i.globalInstall:!0)&&([Kd.name,"I18nT"].forEach(s=>t.component(s,Kd)),[Jd.name,"I18nN"].forEach(s=>t.component(s,Jd)),[th.name,"I18nD"].forEach(s=>t.component(s,th))),t.directive("t",Ey(e))}const by=Qi("global-vue-i18n");function Ty(t={}){const e=__VUE_I18N_LEGACY_API__&&ut(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=ut(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=wy(t,e),o=Qi("");function a(f){return i.get(f)||null}function l(f,d){i.set(f,d)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),tt(d[0])){const v=d[0];u.__composerExtend=v.__composerExtend,u.__vueI18nExtend=v.__vueI18nExtend}let p=null;!e&&n&&(p=Ny(f,u.global)),__VUE_I18N_FULL_INSTALL__&&My(f,u,...d),__VUE_I18N_LEGACY_API__&&e&&f.mixin(gy(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function Nr(t={}){const e=us();if(e==null)throw Tn(_n.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Tn(_n.NOT_INSTALLED);const n=Ay(e),i=Cy(n),r=_g(e),s=Ry(t,r);if(s==="global")return vg(i,t,r),i;if(s==="parent"){let l=Py(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Gt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=ff(l),o.__composerExtend&&(a[Hc]=o.__composerExtend(a)),Iy(o,e,a),o.__setInstance(e,a)}return a}function wy(t,e){const n=Vu(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Vc(t)):n.run(()=>ff(t));if(i==null)throw Tn(_n.UNEXPECTED_ERROR);return[n,i]}function Ay(t){const e=Wn(t.isCE?by:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Tn(t.isCE?_n.NOT_INSTALLED_WITH_PROVIDE:_n.UNEXPECTED_ERROR);return e}function Ry(t,e){return el(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function Cy(t){return t.mode==="composition"?t.global:t.global.__composer}function Py(t,e,n=!1){let i=null;const r=e.root;let s=Ly(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[gg]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function Ly(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function Iy(t,e,n){Ya(()=>{},e),xo(()=>{const i=n;t.__deleteInstance(e);const r=i[Hc];r&&(r(),delete i[Hc])},e)}const Dy=["locale","fallbackLocale","availableLocales"],eh=["t","rt","d","n","tm","te"];function Ny(t,e){const n=Object.create(null);return Dy.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Tn(_n.UNEXPECTED_ERROR);const o=Nt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,eh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Tn(_n.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,eh.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const Uy=vn({name:"i18n-d",props:Gt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},df),setup(t,e){const n=t.i18n||Nr({useScope:t.scope,__useComponent:!0});return Sg(t,e,fg,(...i)=>n[Bc](...i))}}),th=Uy;dy();WS(TS);XS(VS);$S(sg);if(__INTLIFY_PROD_DEVTOOLS__){const t=xr();t.__INTLIFY__=!0,wS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const Oy=["en-US","zh-TW"],hf=Qa("lang",()=>{const{locale:t}=Nr({useScope:"global"}),e=localStorage.getItem("lang");t.value=Oy.includes(e)?e:"en-US",Ss(()=>{localStorage.setItem("lang",t.value)});const n=Rt(()=>t.value==="en-US");function i(){switch(t.value){case"en-US":t.value="zh-TW";break;case"zh-TW":t.value="en-US";break}}return{locale:t,isEnUS:n,changeLang:i}}),Fy=vn({name:"global-sidebar",components:{AHoverable:Gm,Switch:Wm},props:{toggled:{type:Boolean,default:!1},toggleSidebar:{type:Function,default:()=>{}}},setup(){const t=Eo(),e=hf(),{t:n}=Nr();return{themeStore:t,langStore:e,t:n}}}),By={class:"functions"};function ky(t,e,n,i,r,s){const o=Ri("AHoverable"),a=Ri("Switch");return Be(),ze("aside",{class:Dt(["global-sidebar",{active:t.toggled}])},[Ke(o,{path:"home",icon:"fi fi-rr-home",text:t.t("home")},null,8,["text"]),Ke(o,{path:"my practices",icon:"fi fi-rr-list",text:t.t("work")},null,8,["text"]),Ke(o,{path:"my practices",icon:"fi fi-rr-list",text:"blog"}),fe("div",By,[Ke(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,iconL:"fi fi-rr-sun",iconR:"fi fi-rr-moon"},null,8,["change","isActive"]),Ke(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])])],2)}const Hy=zt(Fy,[["render",ky],["__scopeId","data-v-ebc70944"]]),Vy=vn({name:"global-header",components:{AHoverable:Gm,Switch:Wm,GlobalSidebar:Hy},setup(){const t=Eo(),e=hf(),{t:n}=Nr(),i=ct(!1);return{themeStore:t,langStore:e,t:n,toggled:i,toggleSidebar:()=>{i.value=!i.value}}}}),zy={class:"global-header"},Gy={class:"navbar"},Wy={class:"functions"},Xy={key:0,class:"fi fi-rr-menu-burger"},$y={key:1,class:"fi fi-rr-cross-small"};function qy(t,e,n,i,r,s){const o=Ri("AHoverable"),a=Ri("Switch"),l=Ri("GlobalSidebar");return Be(),ze(Ut,null,[fe("header",zy,[e[2]||(e[2]=fe("h1",{class:"icon"},"Pc",-1)),fe("nav",Gy,[Ke(o,{path:"home",text:t.t("home"),effect:"underline-middle"},null,8,["text"]),Ke(o,{path:"my practices",text:t.t("work"),effect:"underline-middle"},null,8,["text"]),Ke(o,{path:"my practices",text:"Blog",effect:"underline-middle"})]),fe("aside",Wy,[Ke(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,iconL:"fi fi-rr-sun",iconR:"fi fi-rr-moon"},null,8,["change","isActive"]),Ke(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])]),fe("button",{class:"toggle-sidebar",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?kt("",!0):(Be(),ze("i",Xy)),t.toggled?(Be(),ze("i",$y)):kt("",!0)])]),Ke(l,{toggled:t.toggled,toggleSidebar:t.toggleSidebar},null,8,["toggled","toggleSidebar"]),fe("div",{class:Dt(["sidebar-bg",{"active-bg":t.toggled}]),onClick:e[1]||(e[1]=c=>t.toggleSidebar())},null,2)],64)}const Yy=zt(Vy,[["render",qy],["__scopeId","data-v-ca0bec77"]]),jy=vn({__name:"App",setup(t){const e=Eo();return Ss(()=>{document.body.style.setProperty("--theme",e.theme)}),(n,i)=>{const r=Ri("router-view");return Be(),ze(Ut,null,[fe("div",null,[Ke(Yy)]),Ke(r)],64)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof document<"u";function yg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ky(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&yg(t.default)}const ht=Object.assign;function Il(t,e){const n={};for(const i in e){const r=e[i];n[i]=qn(r)?r.map(t):t(r)}return n}const $s=()=>{},qn=Array.isArray,Eg=/#/g,Jy=/&/g,Zy=/\//g,Qy=/=/g,eE=/\?/g,Mg=/\+/g,tE=/%5B/g,nE=/%5D/g,bg=/%5E/g,iE=/%60/g,Tg=/%7B/g,rE=/%7C/g,wg=/%7D/g,sE=/%20/g;function pf(t){return encodeURI(""+t).replace(rE,"|").replace(tE,"[").replace(nE,"]")}function oE(t){return pf(t).replace(Tg,"{").replace(wg,"}").replace(bg,"^")}function zc(t){return pf(t).replace(Mg,"%2B").replace(sE,"+").replace(Eg,"%23").replace(Jy,"%26").replace(iE,"`").replace(Tg,"{").replace(wg,"}").replace(bg,"^")}function aE(t){return zc(t).replace(Qy,"%3D")}function lE(t){return pf(t).replace(Eg,"%23").replace(eE,"%3F")}function cE(t){return t==null?"":lE(t).replace(Zy,"%2F")}function so(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const uE=/\/$/,fE=t=>t.replace(uE,"");function Dl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=mE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:so(o)}}function dE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&hs(e.matched[i],n.matched[r])&&Ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pE(t[n],e[n]))return!1;return!0}function pE(t,e){return qn(t)?ih(t,e):qn(e)?ih(e,t):t===e}function ih(t,e){return qn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function mE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var oo;(function(t){t.pop="pop",t.push="push"})(oo||(oo={}));var qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qs||(qs={}));function gE(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fE(t)}const _E=/^[^#]+#/;function vE(t,e){return t.replace(_E,"#")+e}function xE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const il=()=>({left:window.scrollX,top:window.scrollY});function SE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rh(t,e){return(history.state?history.state.position-e:-1)+t}const Gc=new Map;function yE(t,e){Gc.set(t,e)}function EE(t){const e=Gc.get(t);return Gc.delete(t),e}let ME=()=>location.protocol+"//"+location.host;function Rg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),nh(l,"")}return nh(n,t)+i+r}function bE(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=Rg(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(n.value,_,{delta:m,type:oo.pop,direction:m?m>0?qs.forward:qs.back:qs.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ht({},d.state,{scroll:il()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function sh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?il():null}}function TE(t){const{history:e,location:n}=window,i={value:Rg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:ME()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ht({},e.state,sh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ht({},r.value,e.state,{forward:l,scroll:il()});s(u.current,u,!0);const f=ht({},sh(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function wE(t){t=gE(t);const e=TE(t),n=bE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ht({location:"",base:t,go:i,createHref:vE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function AE(t){return typeof t=="string"||t&&typeof t=="object"}function Cg(t){return typeof t=="string"||typeof t=="symbol"}const Pg=Symbol("");var oh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(oh||(oh={}));function ps(t,e){return ht(new Error,{type:t,[Pg]:!0},e)}function hi(t,e){return t instanceof Error&&Pg in t&&(e==null||!!(t.type&e))}const ah="[^/]+?",RE={sensitive:!1,strict:!1,start:!0,end:!0},CE=/[.+*?^${}()[\]/\\]/g;function PE(t,e){const n=ht({},RE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(CE,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:h}=d;s.push({name:_,repeatable:v,optional:m});const S=h||ah;if(S!==ah){p+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+x.message)}}let E=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=20,m&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=s[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,h=_ in c?c[_]:"";if(qn(h)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=qn(h)?h.join("/"):h;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function LE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=LE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(lh(i))return 1;if(lh(r))return-1}return r.length-i.length}function lh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const IE={type:0,value:""},DE=/[a-zA-Z0-9_]/;function NE(t){if(!t)return[[]];if(t==="/")return[[IE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:DE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function UE(t,e,n){const i=PE(NE(t.path),n),r=ht(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function OE(t,e){const n=[],i=new Map;e=dh({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const _=!p,v=uh(f);v.aliasOf=p&&p.record;const m=dh(e,f),h=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of x)h.push(uh(ht({},v,{components:p?p.record.components:v.components,path:C,aliasOf:p?p.record:v})))}let S,E;for(const x of h){const{path:C}=x;if(d&&C[0]!=="/"){const L=d.record.path,A=L[L.length-1]==="/"?"":"/";x.path=d.record.path+(C&&A+C)}if(S=UE(x,d,m),p?p.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),_&&f.name&&!fh(S)&&o(f.name)),Ig(S)&&l(S),v.children){const L=v.children;for(let A=0;A<L.length;A++)s(L[A],S,p&&p.children[A])}p=p||S}return E?()=>{o(E)}:$s}function o(f){if(Cg(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=kE(f,n);n.splice(d,0,f),f.record.name&&!fh(f)&&i.set(f.record.name,f)}function c(f,d){let p,_={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw ps(1,{location:f});m=p.record.name,_=ht(ch(d.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&ch(f.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(f.path!=null)v=f.path,p=n.find(E=>E.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw ps(1,{location:f,currentLocation:d});m=p.record.name,_=ht({},d.params,f.params),v=p.stringify(_)}const h=[];let S=p;for(;S;)h.unshift(S.record),S=S.parent;return{name:m,path:v,params:_,matched:h,meta:BE(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function ch(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function uh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BE(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function dh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function kE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Lg(t,e[s])<0?i=s:n=s+1}const r=HE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function HE(t){let e=t;for(;e=e.parent;)if(Ig(e)&&Lg(t,e)===0)return e}function Ig({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function VE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Mg," "),o=s.indexOf("="),a=so(o<0?s:s.slice(0,o)),l=o<0?null:so(s.slice(o+1));if(a in e){let c=e[a];qn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function hh(t){let e="";for(let n in t){const i=t[n];if(n=aE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(qn(i)?i.map(s=>s&&zc(s)):[i&&zc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function zE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=qn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const GE=Symbol(""),ph=Symbol(""),mf=Symbol(""),Dg=Symbol(""),Wc=Symbol("");function Ps(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ps(4,{from:n,to:e})):d instanceof Error?l(d):AE(d)?l(ps(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Nl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(yg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(zi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Ky(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&zi(p,n,i,o,a,r)()}))}}return s}function mh(t){const e=Wn(mf),n=Wn(Dg),i=Rt(()=>{const l=un(t.to);return e.resolve(l)}),r=Rt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(hs.bind(null,u));if(d>-1)return d;const p=gh(l[c-2]);return c>1&&gh(u)===p&&f[f.length-1].path!==p?f.findIndex(hs.bind(null,l[c-2])):d}),s=Rt(()=>r.value>-1&&YE(n.params,i.value.params)),o=Rt(()=>r.value>-1&&r.value===n.matched.length-1&&Ag(n.params,i.value.params));function a(l={}){if(qE(l)){const c=e[un(t.replace)?"replace":"push"](un(t.to)).catch($s);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Rt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function WE(t){return t.length===1?t[0]:t}const XE=vn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mh,setup(t,{slots:e}){const n=_o(mh(t)),{options:i}=Wn(mf),r=Rt(()=>({[_h(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[_h(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&WE(e.default(n));return t.custom?s:Ja("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),$E=XE;function qE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function YE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!qn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function gh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _h=(t,e,n)=>t??e??n,jE=vn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Wn(Wc),r=Rt(()=>t.route||i.value),s=Wn(ph,0),o=Rt(()=>{let c=un(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Rt(()=>r.value.matched[o.value]);la(ph,Rt(()=>o.value+1)),la(GE,a),la(Wc,r);const l=ct();return Xn(()=>[l.value,a.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!hs(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return vh(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ja(d,ht({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return vh(n.default,{Component:m,route:c})||m}}});function vh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const KE=jE;function JE(t){const e=OE(t.routes,t),n=t.parseQuery||VE,i=t.stringifyQuery||hh,r=t.history,s=Ps(),o=Ps(),a=Ps(),l=Ku(Ii);let c=Ii;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Il.bind(null,H=>""+H),f=Il.bind(null,cE),d=Il.bind(null,so);function p(H,re){let ce,le;return Cg(H)?(ce=e.getRecordMatcher(H),le=re):le=H,e.addRoute(le,ce)}function _(H){const re=e.getRecordMatcher(H);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function h(H,re){if(re=ht({},re||l.value),typeof H=="string"){const y=Dl(n,H,re.path),ne=e.resolve({path:y.path},re),J=r.createHref(y.fullPath);return ht(y,ne,{params:d(ne.params),hash:so(y.hash),redirectedFrom:void 0,href:J})}let ce;if(H.path!=null)ce=ht({},H,{path:Dl(n,H.path,re.path).path});else{const y=ht({},H.params);for(const ne in y)y[ne]==null&&delete y[ne];ce=ht({},H,{params:f(y)}),re.params=f(re.params)}const le=e.resolve(ce,re),He=H.hash||"";le.params=u(d(le.params));const D=dE(i,ht({},H,{hash:oE(He),path:le.path})),N=r.createHref(D);return ht({fullPath:D,hash:He,query:i===hh?zE(H.query):H.query||{}},le,{redirectedFrom:void 0,href:N})}function S(H){return typeof H=="string"?Dl(n,H,l.value.path):ht({},H)}function E(H,re){if(c!==H)return ps(8,{from:re,to:H})}function x(H){return A(H)}function C(H){return x(ht(S(H),{replace:!0}))}function L(H){const re=H.matched[H.matched.length-1];if(re&&re.redirect){const{redirect:ce}=re;let le=typeof ce=="function"?ce(H):ce;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=S(le):{path:le},le.params={}),ht({query:H.query,hash:H.hash,params:le.path!=null?{}:H.params},le)}}function A(H,re){const ce=c=h(H),le=l.value,He=H.state,D=H.force,N=H.replace===!0,y=L(ce);if(y)return A(ht(S(y),{state:typeof y=="object"?ht({},He,y.state):He,force:D,replace:N}),re||ce);const ne=ce;ne.redirectedFrom=re;let J;return!D&&hE(i,le,ce)&&(J=ps(16,{to:ne,from:le}),Re(le,le,!0,!1)),(J?Promise.resolve(J):b(ne,le)).catch(ee=>hi(ee)?hi(ee,2)?ee:Se(ee):W(ee,ne,le)).then(ee=>{if(ee){if(hi(ee,2))return A(ht({replace:N},S(ee.to),{state:typeof ee.to=="object"?ht({},He,ee.to.state):He,force:D}),re||ne)}else ee=Y(ne,le,!0,N,He);return F(ne,le,ee),ee})}function U(H,re){const ce=E(H,re);return ce?Promise.reject(ce):Promise.resolve()}function T(H){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(H):H()}function b(H,re){let ce;const[le,He,D]=ZE(H,re);ce=Nl(le.reverse(),"beforeRouteLeave",H,re);for(const y of le)y.leaveGuards.forEach(ne=>{ce.push(zi(ne,H,re))});const N=U.bind(null,H,re);return ce.push(N),be(ce).then(()=>{ce=[];for(const y of s.list())ce.push(zi(y,H,re));return ce.push(N),be(ce)}).then(()=>{ce=Nl(He,"beforeRouteUpdate",H,re);for(const y of He)y.updateGuards.forEach(ne=>{ce.push(zi(ne,H,re))});return ce.push(N),be(ce)}).then(()=>{ce=[];for(const y of D)if(y.beforeEnter)if(qn(y.beforeEnter))for(const ne of y.beforeEnter)ce.push(zi(ne,H,re));else ce.push(zi(y.beforeEnter,H,re));return ce.push(N),be(ce)}).then(()=>(H.matched.forEach(y=>y.enterCallbacks={}),ce=Nl(D,"beforeRouteEnter",H,re,T),ce.push(N),be(ce))).then(()=>{ce=[];for(const y of o.list())ce.push(zi(y,H,re));return ce.push(N),be(ce)}).catch(y=>hi(y,8)?y:Promise.reject(y))}function F(H,re,ce){a.list().forEach(le=>T(()=>le(H,re,ce)))}function Y(H,re,ce,le,He){const D=E(H,re);if(D)return D;const N=re===Ii,y=es?history.state:{};ce&&(le||N?r.replace(H.fullPath,ht({scroll:N&&y&&y.scroll},He)):r.push(H.fullPath,He)),l.value=H,Re(H,re,ce,N),Se()}let $;function ae(){$||($=r.listen((H,re,ce)=>{if(!xe.listening)return;const le=h(H),He=L(le);if(He){A(ht(He,{replace:!0,force:!0}),le).catch($s);return}c=le;const D=l.value;es&&yE(rh(D.fullPath,ce.delta),il()),b(le,D).catch(N=>hi(N,12)?N:hi(N,2)?(A(ht(S(N.to),{force:!0}),le).then(y=>{hi(y,20)&&!ce.delta&&ce.type===oo.pop&&r.go(-1,!1)}).catch($s),Promise.reject()):(ce.delta&&r.go(-ce.delta,!1),W(N,le,D))).then(N=>{N=N||Y(le,D,!1),N&&(ce.delta&&!hi(N,8)?r.go(-ce.delta,!1):ce.type===oo.pop&&hi(N,20)&&r.go(-1,!1)),F(le,D,N)}).catch($s)}))}let oe=Ps(),Q=Ps(),K;function W(H,re,ce){Se(H);const le=Q.list();return le.length?le.forEach(He=>He(H,re,ce)):console.error(H),Promise.reject(H)}function he(){return K&&l.value!==Ii?Promise.resolve():new Promise((H,re)=>{oe.add([H,re])})}function Se(H){return K||(K=!H,ae(),oe.list().forEach(([re,ce])=>H?ce(H):re()),oe.reset()),H}function Re(H,re,ce,le){const{scrollBehavior:He}=t;if(!es||!He)return Promise.resolve();const D=!ce&&EE(rh(H.fullPath,0))||(le||!ce)&&history.state&&history.state.scroll||null;return Ju().then(()=>He(H,re,D)).then(N=>N&&SE(N)).catch(N=>W(N,H,re))}const ke=H=>r.go(H);let et;const se=new Set,xe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:t,push:x,replace:C,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Q.add,isReady:he,install(H){const re=this;H.component("RouterLink",$E),H.component("RouterView",KE),H.config.globalProperties.$router=re,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>un(l)}),es&&!et&&l.value===Ii&&(et=!0,x(r.location).catch(He=>{}));const ce={};for(const He in Ii)Object.defineProperty(ce,He,{get:()=>l.value[He],enumerable:!0});H.provide(mf,re),H.provide(Dg,om(ce)),H.provide(Wc,l);const le=H.unmount;se.add(H),H.unmount=function(){se.delete(H),se.size<1&&(c=Ii,$&&$(),$=null,l.value=Ii,et=!1,K=!1),le()}}};function be(H){return H.reduce((re,ce)=>re.then(()=>T(ce)),Promise.resolve())}return xe}function ZE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>hs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hs(c,l))||r.push(l))}return[n,i,r]}const QE=vn({name:"animated-txt",props:{text:{type:String,default:""},fontSize:{type:String,default:""},textTransform:{type:String,default:""},letterSpacing:{type:String,default:""},lineHeight:{type:String,default:"sm"},justify:{type:String,default:""},wrap:{type:String,default:"nowrap"},whiteSpace:{type:Boolean,default:!1},animation:{type:String,default:""},duration:{type:String,default:"0ms"},delay:{type:String,default:"0ms"},stagger:{type:Number,default:0},lang:{type:String,default:"en-US"}},setup(t,{expose:e}){let n=0;const i=ct([]),r=()=>n+=t.stagger;Xn(t,()=>{n=0}),Ss(()=>{t.lang==="zh-TW"?i.value=t.text.split(""):i.value=t.text.split(" ")});let s=0;return e(),{words:i,getStepDelay:r,animationReset:s}}});function eM(t,e,n,i,r,s){return Be(),ze("div",{class:Dt(["animated-txt",`text-${t.wrap}`,`justify-${t.justify}`,`font-size-${t.fontSize}`])},[(Be(!0),ze(Ut,null,Zs(t.words,o=>(Be(),ze("div",{class:Dt(["word",{whitespace:t.whiteSpace},`letter-spacing-${t.letterSpacing}`,`line-height-${t.lineHeight}`]),key:`word ${t.animationReset+=1}`},[(Be(!0),ze(Ut,null,Zs(o,a=>(Be(),ze("span",{class:Dt(["char",`animation-${t.animation}`,`text-transform-${t.textTransform}`]),key:a,style:go({animationDelay:`calc(${t.delay} + ${t.getStepDelay()}ms)`,animationDuration:t.duration})},Kt(a),7))),128))],2))),128))],2)}const xh=zt(QE,[["render",eM],["__scopeId","data-v-792e4f3e"]]),Ng="/my-site/assets/homepage-bg-BaaHqyYF.webp",Ug="/my-site/assets/texture-1-Bhl9W45K.webp";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="177",tM=0,Sh=1,nM=2,Og=1,_f=2,xi=3,Yi=0,mn=1,Mi=2,$i=0,os=1,yh=2,Eh=3,Mh=4,iM=5,_r=100,rM=101,sM=102,oM=103,aM=104,lM=200,cM=201,uM=202,fM=203,Xc=204,$c=205,dM=206,hM=207,pM=208,mM=209,gM=210,_M=211,vM=212,xM=213,SM=214,qc=0,Yc=1,jc=2,ms=3,Kc=4,Jc=5,Zc=6,Qc=7,rl=0,yM=1,EM=2,qi=0,MM=1,bM=2,TM=3,wM=4,AM=5,RM=6,CM=7,Fg=300,gs=301,_s=302,eu=303,tu=304,sl=306,Cr=1e3,Sr=1001,nu=1002,$n=1003,PM=1004,Bo=1005,ni=1006,Ul=1007,yr=1008,ci=1009,Bg=1010,kg=1011,ao=1012,vf=1013,Pr=1014,wi=1015,Mo=1016,xf=1017,Sf=1018,lo=1020,Hg=35902,Vg=1021,zg=1022,zn=1023,co=1026,uo=1027,Gg=1028,yf=1029,Wg=1030,Ef=1031,Mf=1033,da=33776,ha=33777,pa=33778,ma=33779,iu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,uu=37808,fu=37809,du=37810,hu=37811,pu=37812,mu=37813,gu=37814,_u=37815,vu=37816,xu=37817,Su=37818,yu=37819,Eu=37820,Mu=37821,ga=36492,bu=36494,Tu=36495,Xg=36283,wu=36284,Au=36285,Ru=36286,LM=3200,IM=3201,bf=0,DM=1,Gi="",Pn="srgb",vs="srgb-linear",Da="linear",vt="srgb",Br=7680,bh=519,NM=512,UM=513,OM=514,$g=515,FM=516,BM=517,kM=518,HM=519,Th=35044,wh="300 es",Ai=2e3,Na=2001;class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,Ua=180/Math.PI;function bo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function VM(t,e){return(t%e+e)%e}function Fl(t,e,n){return(1-n)*t+n*e}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class To{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*v,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const C=Math.sqrt(E),L=Math.atan2(C,h*S);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const x=a*S;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,f=f*m+v*x,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,n=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ah.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new q,Ah=new To;class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],S=r[1],E=r[4],x=r[7],C=r[2],L=r[5],A=r[8];return s[0]=o*v+a*S+l*C,s[3]=o*m+a*E+l*L,s[6]=o*h+a*x+l*A,s[1]=c*v+u*S+f*C,s[4]=c*m+u*E+f*L,s[7]=c*h+u*x+f*A,s[2]=d*v+p*S+_*C,s[5]=d*m+p*E+_*L,s[8]=d*h+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(kl.makeScale(e,n)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,n){return this.premultiply(kl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kl=new Ze;function qg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zM(){const t=fo("canvas");return t.style.display="block",t}const Rh={};function as(t){t in Rh||(Rh[t]=!0,console.warn(t))}function GM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function WM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function XM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ch=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ph=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $M(){const t={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===vt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Gi?Da:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[vs]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Ch,fromXYZ:Ph,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),t}const lt=$M();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class qM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{kr===void 0&&(kr=fo("canvas")),kr.width=e.width,kr.height=e.height;const r=kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=kr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ci(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YM=0;class Tf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hl(r[o].image)):s.push(Hl(r[o]))}else s=Hl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jM=0;const Vl=new q;class dn extends ys{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Sr,r=Sr,s=ni,o=yr,a=zn,l=ci,c=dn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=bo(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case nu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case nu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Fg;dn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,C=(h+1)/2,L=(u+d)/4,A=(f+v)/4,U=(_+m)/4;return E>x&&E>C?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=L/i,s=A/i):x>C?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=L/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=U/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KM extends ys{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new dn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ni,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Tf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends KM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Yg extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ko.copy(i.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),Ho.subVectors(this.max,Is),Hr.subVectors(e.a,Is),Vr.subVectors(e.b,Is),zr.subVectors(e.c,Is),Di.subVectors(Vr,Hr),Ni.subVectors(zr,Vr),ar.subVectors(Hr,zr);let n=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ar.z,ar.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ar.z,0,-ar.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ar.y,ar.x,0];return!zl(n,Hr,Vr,zr,Ho)||(n=[1,0,0,0,1,0,0,0,1],!zl(n,Hr,Vr,zr,Ho))?!1:(Vo.crossVectors(Di,Ni),n=[Vo.x,Vo.y,Vo.z],zl(n,Hr,Vr,zr,Ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new q,new q,new q,new q,new q,new q,new q,new q],Fn=new q,ko=new wo,Hr=new q,Vr=new q,zr=new q,Di=new q,Ni=new q,ar=new q,Is=new q,Ho=new q,Vo=new q,lr=new q;function zl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ZM=new wo,Ds=new q,Gl=new q;class wf{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const n=Ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Gl)),this.expandByPoint(Ds.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mi=new q,Wl=new q,zo=new q,Ui=new q,Xl=new q,Go=new q,$l=new q;class jg{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wl.copy(e).add(n).multiplyScalar(.5),zo.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(Wl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(zo),a=Ui.dot(this.direction),l=-Ui.dot(zo),c=Ui.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wl).addScaledVector(zo,d),p}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){Xl.subVectors(n,e),Go.subVectors(i,e),$l.crossVectors(Xl,Go);let o=this.direction.dot($l),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Go.crossVectors(Ui,Go));if(l<0)return null;const c=a*this.direction.dot(Xl.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot($l);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),o=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QM,e,eb)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Oi.crossVectors(i,Sn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Oi.crossVectors(i,Sn)),Oi.normalize(),Wo.crossVectors(Sn,Oi),r[0]=Oi.x,r[4]=Wo.x,r[8]=Sn.x,r[1]=Oi.y,r[5]=Wo.y,r[9]=Sn.y,r[2]=Oi.z,r[6]=Wo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],S=i[3],E=i[7],x=i[11],C=i[15],L=r[0],A=r[4],U=r[8],T=r[12],b=r[1],F=r[5],Y=r[9],$=r[13],ae=r[2],oe=r[6],Q=r[10],K=r[14],W=r[3],he=r[7],Se=r[11],Re=r[15];return s[0]=o*L+a*b+l*ae+c*W,s[4]=o*A+a*F+l*oe+c*he,s[8]=o*U+a*Y+l*Q+c*Se,s[12]=o*T+a*$+l*K+c*Re,s[1]=u*L+f*b+d*ae+p*W,s[5]=u*A+f*F+d*oe+p*he,s[9]=u*U+f*Y+d*Q+p*Se,s[13]=u*T+f*$+d*K+p*Re,s[2]=_*L+v*b+m*ae+h*W,s[6]=_*A+v*F+m*oe+h*he,s[10]=_*U+v*Y+m*Q+h*Se,s[14]=_*T+v*$+m*K+h*Re,s[3]=S*L+E*b+x*ae+C*W,s[7]=S*A+E*F+x*oe+C*he,s[11]=S*U+E*Y+x*Q+C*Se,s[15]=S*T+E*$+x*K+C*Re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,E=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-_*f*c+_*a*p-o*v*p-u*a*h+o*f*h,C=_*f*l-u*v*l-_*a*d+o*v*d+u*a*m-o*f*m,L=n*S+i*E+r*x+s*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=S*A,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=E*A,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*h+n*d*h)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*h-n*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=x*A,e[9]=(_*f*s-u*v*s-_*i*p+n*v*p+u*i*h-n*f*h)*A,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=C*A,e[13]=(u*v*r-_*f*r+_*i*d-n*v*d-u*i*m+n*f*m)*A,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,v=o*u,m=o*f,h=a*f,S=l*c,E=l*u,x=l*f,C=i.x,L=i.y,A=i.z;return r[0]=(1-(v+h))*C,r[1]=(p+x)*C,r[2]=(_-E)*C,r[3]=0,r[4]=(p-x)*L,r[5]=(1-(d+h))*L,r[6]=(m+S)*L,r[7]=0,r[8]=(_+E)*A,r[9]=(m-S)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),a=Gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,u=1/o,f=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=f,Bn.elements[9]*=f,Bn.elements[10]*=f,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ai){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===Ai)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Na)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ai){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,v;if(a===Ai)_=(o+s)*f,v=-2*f;else if(a===Na)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Gr=new q,Bn=new Ct,QM=new q(0,0,0),eb=new q(1,1,1),Oi=new q,Wo=new q,Sn=new q,Lh=new Ct,Ih=new To;class Yn{constructor(e=0,n=0,i=0,r=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ih.setFromEuler(this),this.setFromQuaternion(Ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tb=0;const Dh=new q,Wr=new To,gi=new Ct,Xo=new q,Ns=new q,nb=new q,ib=new To,Nh=new q(1,0,0),Uh=new q(0,1,0),Oh=new q(0,0,1),Fh={type:"added"},rb={type:"removed"},Xr={type:"childadded",child:null},ql={type:"childremoved",child:null};class Yt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new q,n=new Yn,i=new To,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ze}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Nh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Oh,e)}translateOnAxis(e,n){return Dh.copy(e).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Ns,Xo,this.up):gi.lookAt(Xo,Ns,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(gi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rb),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new q(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new q,_i=new q,Yl=new q,vi=new q,$r=new q,qr=new q,Bh=new q,jl=new q,Kl=new q,Jl=new q,Zl=new It,Ql=new It,ec=new It;class Hn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),_i.subVectors(i,n),Yl.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(_i),l=kn.dot(Yl),c=_i.dot(_i),u=_i.dot(Yl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Zl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Zl.fromBufferAttribute(e,n),Ql.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zl,s.x),o.addScaledVector(Ql,s.y),o.addScaledVector(ec,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),_i.subVectors(e,n),kn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),kn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;$r.subVectors(r,i),qr.subVectors(s,i),jl.subVectors(e,i);const l=$r.dot(jl),c=qr.dot(jl);if(l<=0&&c<=0)return n.copy(i);Kl.subVectors(e,r);const u=$r.dot(Kl),f=qr.dot(Kl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector($r,o);Jl.subVectors(e,s);const p=$r.dot(Jl),_=qr.dot(Jl);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(qr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Bh.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(Bh,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector($r,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},$o={h:0,s:0,l:0};function tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=VM(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=tc(o,s,e+1/3),this.g=tc(o,s,e),this.b=tc(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pn){const i=Kg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return lt.workingToColorSpace(Zt.copy(this),e),Math.round(it(Zt.r*255,0,255))*65536+Math.round(it(Zt.g*255,0,255))*256+Math.round(it(Zt.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Pn){lt.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL($o);const i=Fl(Fi.h,$o.h,n),r=Fl(Fi.s,$o.s,n),s=Fl(Fi.l,$o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new rt;rt.NAMES=Kg;let sb=0;class Es extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=os,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=$c,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xc&&(i.blendSrc=this.blendSrc),this.blendDst!==$c&&(i.blendDst=this.blendDst),this.blendEquation!==_r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ol extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new q,qo=new st;let ob=0;class si{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}}class Jg extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zg extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class oi extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ab=0;const Rn=new Ct,nc=new Yt,Yr=new q,yn=new wo,Us=new wo,$t=new q;class nr extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qg(e)?Zg:Jg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(yn.min,Us.min),yn.expandByPoint($t),$t.addVectors(yn.max,Us.max),yn.expandByPoint($t)):(yn.expandByPoint(Us.min),yn.expandByPoint(Us.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$t.fromBufferAttribute(a,c),l&&(Yr.fromBufferAttribute(e,c),$t.add(Yr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new q,l[U]=new q;const c=new q,u=new q,f=new q,d=new st,p=new st,_=new st,v=new q,m=new q;function h(U,T,b){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[U].add(v),a[T].add(v),a[b].add(v),l[U].add(m),l[T].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,T=S.length;U<T;++U){const b=S[U],F=b.start,Y=b.count;for(let $=F,ae=F+Y;$<ae;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const E=new q,x=new q,C=new q,L=new q;function A(U){C.fromBufferAttribute(r,U),L.copy(C);const T=a[U];E.copy(T),E.sub(C.multiplyScalar(C.dot(T))).normalize(),x.crossVectors(L,T);const F=x.dot(l[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,F)}for(let U=0,T=S.length;U<T;++U){const b=S[U],F=b.start,Y=b.count;for(let $=F,ae=F+Y;$<ae;$+=3)A(e.getX($+0)),A(e.getX($+1)),A(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new si(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new Ct,cr=new jg,Yo=new wf,Hh=new q,jo=new q,Ko=new q,Jo=new q,ic=new q,Zo=new q,Vh=new q,Qo=new q;class Ot extends Yt{constructor(e=new nr,n=new ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ic.fromBufferAttribute(f,e),o?Zo.addScaledVector(ic,u):Zo.addScaledVector(ic.sub(n),u))}n.add(Zo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yo.copy(i.boundingSphere),Yo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Yo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Yo,Hh)===null||cr.origin.distanceToSquared(Hh)>(e.far-e.near)**2))&&(kh.copy(s).invert(),cr.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,C=E;x<C;x+=3){const L=a.getX(x),A=a.getX(x+1),U=a.getX(x+2);r=ea(this,h,e,i,c,u,f,L,A,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=ea(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,C=E;x<C;x+=3){const L=x,A=x+1,U=x+2;r=ea(this,h,e,i,c,u,f,L,A,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=m,E=m+1,x=m+2;r=ea(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function lb(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qo);return c<n.near||c>n.far?null:{distance:c,point:Qo.clone(),object:t}}function ea(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,jo),t.getVertexPosition(l,Ko),t.getVertexPosition(c,Jo);const u=lb(t,e,n,i,jo,Ko,Jo,Vh);if(u){const f=new q;Hn.getBarycoord(Vh,jo,Ko,Jo,f),r&&(u.uv=Hn.getInterpolatedAttribute(r,a,l,c,f,new st)),s&&(u.uv1=Hn.getInterpolatedAttribute(s,a,l,c,f,new st)),o&&(u.normal=Hn.getInterpolatedAttribute(o,a,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};Hn.getNormal(jo,Ko,Jo,d.normal),u.face=d,u.barycoord=f}return u}class Ao extends nr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(v,m,h,S,E,x,C,L,A,U,T){const b=x/A,F=C/U,Y=x/2,$=C/2,ae=L/2,oe=A+1,Q=U+1;let K=0,W=0;const he=new q;for(let Se=0;Se<Q;Se++){const Re=Se*F-$;for(let ke=0;ke<oe;ke++){const et=ke*b-Y;he[v]=et*S,he[m]=Re*E,he[h]=ae,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[h]=L>0?1:-1,u.push(he.x,he.y,he.z),f.push(ke/A),f.push(1-Se/U),K+=1}}for(let Se=0;Se<U;Se++)for(let Re=0;Re<A;Re++){const ke=d+Re+oe*Se,et=d+Re+oe*(Se+1),se=d+(Re+1)+oe*(Se+1),xe=d+(Re+1)+oe*Se;l.push(ke,et,xe),l.push(et,se,xe),W+=6}a.addGroup(p,W,T),p+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=xs(t[n]);for(const r in i)e[r]=i[r]}return e}function cb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const ub={clone:xs,merge:on};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e_ extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Ai}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new q,zh=new st,Gh=new st;class In extends e_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,zh,Gh),n.subVectors(Gh,zh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ol*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const jr=-90,Kr=1;class hb extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(jr,Kr,e,n);r.layers=this.layers,this.add(r);const s=new In(jr,Kr,e,n);s.layers=this.layers,this.add(s);const o=new In(jr,Kr,e,n);o.layers=this.layers,this.add(o);const a=new In(jr,Kr,e,n);a.layers=this.layers,this.add(a);const l=new In(jr,Kr,e,n);l.layers=this.layers,this.add(l);const c=new In(jr,Kr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class t_ extends dn{constructor(e=[],n=gs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pb extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ao(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:$i});s.uniforms.tEquirect.value=n;const o=new Ot(r,s),a=n.minFilter;return n.minFilter===yr&&(n.minFilter=ni),new hb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ta extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class n_ extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const sc=new q,gb=new q,_b=new Ze;class pr{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sc.subVectors(i,n).cross(gb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_b.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new wf,na=new q;class Rf{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ai){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+_,x+S).normalize(),i[3].setComponents(l-o,d-u,m-_,x-S).normalize(),i[4].setComponents(l-a,d-f,m-v,x-E).normalize(),n===Ai)i[5].setComponents(l+a,d+f,m+v,x+E).normalize();else if(n===Na)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(na.x=r.normal.x>0?e.max.x:e.min.x,na.y=r.normal.y>0?e.max.y:e.min.y,na.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends dn{constructor(e,n,i=Pr,r,s,o,a=$n,l=$n,c,u=co,f=1){if(u!==co&&u!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ki extends nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let E=0;E<c;E++){const x=E*f-s;_.push(x,-S,0),v.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const E=S+c*h,x=S+c*(h+1),C=S+1+c*(h+1),L=S+1+c*h;p.push(E,x,L),p.push(x,C,L)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.widthSegments,e.heightSegments)}}class al extends nr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new q,d=new q,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const S=[],E=h/i;let x=0;h===0&&o===0?x=.5/n:h===i&&l===Math.PI&&(x=-.5/n);for(let C=0;C<=n;C++){const L=C/n;f.x=-e*Math.cos(r+L*s)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(r+L*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(L+x,1-E),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<n;S++){const E=u[h][S+1],x=u[h][S],C=u[h+1][S],L=u[h+1][S+1];(h!==0||o>0)&&p.push(E,x,L),(h!==i-1||l<Math.PI)&&p.push(x,C,L)}this.setIndex(p),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class r_ extends Es{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new rt(16777215),this.specular=new rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class s_ extends Es{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vb extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xb extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Sb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const yb=new Sb;class Cf{constructor(e){this.manager=e!==void 0?e:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Cf.DEFAULT_MATERIAL_NAME="__DEFAULT";class Eb extends Cf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Wh.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=fo("img");function l(){u(),Wh.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class o_ extends Cf{constructor(e){super(e)}load(e,n,i,r){const s=new dn,o=new Eb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class a_ extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const oc=new Ct,Xh=new q,$h=new q;class Mb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Xh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xh),$h.setFromMatrixPosition(e.target.matrixWorld),n.lookAt($h),n.updateMatrixWorld(),oc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bb extends Mb{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ua*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Oa extends a_{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new bb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pf extends e_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class l_ extends a_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tb extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=qh();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function qh(){return performance.now()}const Yh=new Ct;class Ab{constructor(e,n,i=0,r=1/0){this.ray=new jg(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Af,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Yh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(e,n=!0,i=[]){return Cu(e,this,i,n),i.sort(jh),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cu(e[r],this,i,n);return i.sort(jh),i}}function jh(t,e){return t.distance-e.distance}function Cu(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Cu(s[o],e,n,!0)}}function Kh(t,e,n,i){const r=Rb(i);switch(n){case Vg:return t*e;case Gg:return t*e/r.components*r.byteLength;case yf:return t*e/r.components*r.byteLength;case Wg:return t*e*2/r.components*r.byteLength;case Ef:return t*e*2/r.components*r.byteLength;case zg:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case Mf:return t*e*4/r.components*r.byteLength;case da:case ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ru:case ou:return Math.max(t,16)*Math.max(e,8)/4;case iu:case su:return Math.max(t,8)*Math.max(e,8)/2;case au:case lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case fu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case du:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case mu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _u:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Su:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Eu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ga:case bu:case Tu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xg:case wu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Au:case Ru:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Rb(t){switch(t){case ci:case Bg:return{byteLength:1,components:1};case ao:case kg:case Mo:return{byteLength:2,components:1};case xf:case Sf:return{byteLength:2,components:4};case Pr:case vf:case wi:return{byteLength:4,components:1};case Hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function c_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Cb(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Pb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ub=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ob=`#ifdef USE_AOMAP
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
#endif`,Fb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bb=`#ifdef USE_BATCHING
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
#endif`,kb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gb=`#ifdef USE_IRIDESCENCE
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
#endif`,Wb=`#ifdef USE_BUMPMAP
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
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qb=`#define PI 3.141592653589793
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
} // validated`,eT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tT=`vec3 transformedNormal = objectNormal;
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
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",aT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
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
#endif`,hT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_T=`#ifdef USE_GRADIENTMAP
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
}`,vT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
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
#endif`,ET=`#ifdef USE_ENVMAP
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
#endif`,MT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AT=`PhysicalMaterial material;
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
#endif`,RT=`struct PhysicalMaterial {
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
}`,CT=`
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
#endif`,PT=`#if defined( RE_IndirectDiffuse )
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
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,HT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XT=`#ifdef USE_MORPHTARGETS
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
#endif`,$T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
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
#endif`,QT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ew=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pw=`float getShadowMask() {
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
}`,mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gw=`#ifdef USE_SKINNING
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
#endif`,_w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,xw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mw=`#ifdef USE_TRANSMISSION
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
#endif`,bw=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pw=`uniform sampler2D t2D;
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`#include <common>
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
}`,Ow=`#if DEPTH_PACKING == 3200
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
}`,Fw=`#define DISTANCE
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
}`,Bw=`#define DISTANCE
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
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vw=`uniform float scale;
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
}`,zw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#define LAMBERT
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
}`,$w=`#define LAMBERT
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
}`,qw=`#define MATCAP
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
}`,Yw=`#define MATCAP
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
}`,jw=`#define NORMAL
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
}`,Kw=`#define NORMAL
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
}`,Jw=`#define PHONG
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
}`,Zw=`#define PHONG
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
}`,Qw=`#define STANDARD
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
}`,eA=`#define STANDARD
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
}`,tA=`#define TOON
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
}`,nA=`#define TOON
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
}`,iA=`uniform float size;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 color;
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
}`,aA=`uniform float rotation;
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
}`,lA=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Pb,alphahash_pars_fragment:Lb,alphamap_fragment:Ib,alphamap_pars_fragment:Db,alphatest_fragment:Nb,alphatest_pars_fragment:Ub,aomap_fragment:Ob,aomap_pars_fragment:Fb,batching_pars_vertex:Bb,batching_vertex:kb,begin_vertex:Hb,beginnormal_vertex:Vb,bsdfs:zb,iridescence_fragment:Gb,bumpmap_pars_fragment:Wb,clipping_planes_fragment:Xb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:qb,clipping_planes_vertex:Yb,color_fragment:jb,color_pars_fragment:Kb,color_pars_vertex:Jb,color_vertex:Zb,common:Qb,cube_uv_reflection_fragment:eT,defaultnormal_vertex:tT,displacementmap_pars_vertex:nT,displacementmap_vertex:iT,emissivemap_fragment:rT,emissivemap_pars_fragment:sT,colorspace_fragment:oT,colorspace_pars_fragment:aT,envmap_fragment:lT,envmap_common_pars_fragment:cT,envmap_pars_fragment:uT,envmap_pars_vertex:fT,envmap_physical_pars_fragment:ET,envmap_vertex:dT,fog_vertex:hT,fog_pars_vertex:pT,fog_fragment:mT,fog_pars_fragment:gT,gradientmap_pars_fragment:_T,lightmap_pars_fragment:vT,lights_lambert_fragment:xT,lights_lambert_pars_fragment:ST,lights_pars_begin:yT,lights_toon_fragment:MT,lights_toon_pars_fragment:bT,lights_phong_fragment:TT,lights_phong_pars_fragment:wT,lights_physical_fragment:AT,lights_physical_pars_fragment:RT,lights_fragment_begin:CT,lights_fragment_maps:PT,lights_fragment_end:LT,logdepthbuf_fragment:IT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:NT,logdepthbuf_vertex:UT,map_fragment:OT,map_pars_fragment:FT,map_particle_fragment:BT,map_particle_pars_fragment:kT,metalnessmap_fragment:HT,metalnessmap_pars_fragment:VT,morphinstance_vertex:zT,morphcolor_vertex:GT,morphnormal_vertex:WT,morphtarget_pars_vertex:XT,morphtarget_vertex:$T,normal_fragment_begin:qT,normal_fragment_maps:YT,normal_pars_fragment:jT,normal_pars_vertex:KT,normal_vertex:JT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:QT,clearcoat_normal_fragment_maps:ew,clearcoat_pars_fragment:tw,iridescence_pars_fragment:nw,opaque_fragment:iw,packing:rw,premultiplied_alpha_fragment:sw,project_vertex:ow,dithering_fragment:aw,dithering_pars_fragment:lw,roughnessmap_fragment:cw,roughnessmap_pars_fragment:uw,shadowmap_pars_fragment:fw,shadowmap_pars_vertex:dw,shadowmap_vertex:hw,shadowmask_pars_fragment:pw,skinbase_vertex:mw,skinning_pars_vertex:gw,skinning_vertex:_w,skinnormal_vertex:vw,specularmap_fragment:xw,specularmap_pars_fragment:Sw,tonemapping_fragment:yw,tonemapping_pars_fragment:Ew,transmission_fragment:Mw,transmission_pars_fragment:bw,uv_pars_fragment:Tw,uv_pars_vertex:ww,uv_vertex:Aw,worldpos_vertex:Rw,background_vert:Cw,background_frag:Pw,backgroundCube_vert:Lw,backgroundCube_frag:Iw,cube_vert:Dw,cube_frag:Nw,depth_vert:Uw,depth_frag:Ow,distanceRGBA_vert:Fw,distanceRGBA_frag:Bw,equirect_vert:kw,equirect_frag:Hw,linedashed_vert:Vw,linedashed_frag:zw,meshbasic_vert:Gw,meshbasic_frag:Ww,meshlambert_vert:Xw,meshlambert_frag:$w,meshmatcap_vert:qw,meshmatcap_frag:Yw,meshnormal_vert:jw,meshnormal_frag:Kw,meshphong_vert:Jw,meshphong_frag:Zw,meshphysical_vert:Qw,meshphysical_frag:eA,meshtoon_vert:tA,meshtoon_frag:nA,points_vert:iA,points_frag:rA,shadow_vert:sA,shadow_frag:oA,sprite_vert:aA,sprite_frag:lA},Me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ti={basic:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:on([Me.common,Me.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:on([Me.lights,Me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ti.physical={uniforms:on([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ia={r:0,b:0,g:0},fr=new Yn,cA=new Ct;function uA(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function v(E){let x=!1;const C=_(E);C===null?h(a,l):C&&C.isColor&&(h(C,1),x=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const C=_(x);C&&(C.isCubeTexture||C.mapping===sl)?(u===void 0&&(u=new Ot(new Ao(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:xs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fr.copy(x.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cA.makeRotationFromEuler(fr)),u.material.toneMapped=lt.getTransfer(C.colorSpace)!==vt,(f!==C||d!==C.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ot(new Ki(2,2),new ji({name:"BackgroundMaterial",uniforms:xs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=lt.getTransfer(C.colorSpace)!==vt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,x){E.getRGB(ia,Qg(t)),i.buffers.color.setClear(ia.r,ia.g,ia.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:m,dispose:S}}function fA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,F,Y,$,ae){let oe=!1;const Q=f($,Y,F);s!==Q&&(s=Q,c(s.object)),oe=p(b,$,Y,ae),oe&&_(b,$,Y,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,x(b,F,Y,$),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function f(b,F,Y){const $=Y.wireframe===!0;let ae=i[b.id];ae===void 0&&(ae={},i[b.id]=ae);let oe=ae[F.id];oe===void 0&&(oe={},ae[F.id]=oe);let Q=oe[$];return Q===void 0&&(Q=d(l()),oe[$]=Q),Q}function d(b){const F=[],Y=[],$=[];for(let ae=0;ae<n;ae++)F[ae]=0,Y[ae]=0,$[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:$,object:b,attributes:{},index:null}}function p(b,F,Y,$){const ae=s.attributes,oe=F.attributes;let Q=0;const K=Y.getAttributes();for(const W in K)if(K[W].location>=0){const Se=ae[W];let Re=oe[W];if(Re===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Re=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Re=b.instanceColor)),Se===void 0||Se.attribute!==Re||Re&&Se.data!==Re.data)return!0;Q++}return s.attributesNum!==Q||s.index!==$}function _(b,F,Y,$){const ae={},oe=F.attributes;let Q=0;const K=Y.getAttributes();for(const W in K)if(K[W].location>=0){let Se=oe[W];Se===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor));const Re={};Re.attribute=Se,Se&&Se.data&&(Re.data=Se.data),ae[W]=Re,Q++}s.attributes=ae,s.attributesNum=Q,s.index=$}function v(){const b=s.newAttributes;for(let F=0,Y=b.length;F<Y;F++)b[F]=0}function m(b){h(b,0)}function h(b,F){const Y=s.newAttributes,$=s.enabledAttributes,ae=s.attributeDivisors;Y[b]=1,$[b]===0&&(t.enableVertexAttribArray(b),$[b]=1),ae[b]!==F&&(t.vertexAttribDivisor(b,F),ae[b]=F)}function S(){const b=s.newAttributes,F=s.enabledAttributes;for(let Y=0,$=F.length;Y<$;Y++)F[Y]!==b[Y]&&(t.disableVertexAttribArray(Y),F[Y]=0)}function E(b,F,Y,$,ae,oe,Q){Q===!0?t.vertexAttribIPointer(b,F,Y,ae,oe):t.vertexAttribPointer(b,F,Y,$,ae,oe)}function x(b,F,Y,$){v();const ae=$.attributes,oe=Y.getAttributes(),Q=F.defaultAttributeValues;for(const K in oe){const W=oe[K];if(W.location>=0){let he=ae[K];if(he===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const Se=he.normalized,Re=he.itemSize,ke=e.get(he);if(ke===void 0)continue;const et=ke.buffer,se=ke.type,xe=ke.bytesPerElement,be=se===t.INT||se===t.UNSIGNED_INT||he.gpuType===vf;if(he.isInterleavedBufferAttribute){const H=he.data,re=H.stride,ce=he.offset;if(H.isInstancedInterleavedBuffer){for(let le=0;le<W.locationSize;le++)h(W.location+le,H.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);t.bindBuffer(t.ARRAY_BUFFER,et);for(let le=0;le<W.locationSize;le++)E(W.location+le,Re/W.locationSize,se,Se,re*xe,(ce+Re/W.locationSize*le)*xe,be)}else{if(he.isInstancedBufferAttribute){for(let H=0;H<W.locationSize;H++)h(W.location+H,he.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let H=0;H<W.locationSize;H++)m(W.location+H);t.bindBuffer(t.ARRAY_BUFFER,et);for(let H=0;H<W.locationSize;H++)E(W.location+H,Re/W.locationSize,se,Se,Re*xe,Re/W.locationSize*H*xe,be)}}else if(Q!==void 0){const Se=Q[K];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(W.location,Se);break;case 3:t.vertexAttrib3fv(W.location,Se);break;case 4:t.vertexAttrib4fv(W.location,Se);break;default:t.vertexAttrib1fv(W.location,Se)}}}}S()}function C(){U();for(const b in i){const F=i[b];for(const Y in F){const $=F[Y];for(const ae in $)u($[ae].object),delete $[ae];delete F[Y]}delete i[b]}}function L(b){if(i[b.id]===void 0)return;const F=i[b.id];for(const Y in F){const $=F[Y];for(const ae in $)u($[ae].object),delete $[ae];delete F[Y]}delete i[b.id]}function A(b){for(const F in i){const Y=i[F];if(Y[b.id]===void 0)continue;const $=Y[b.id];for(const ae in $)u($[ae].object),delete $[ae];delete Y[b.id]}}function U(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function dA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const U=A===Mo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ci&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wi&&!U)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:C,maxSamples:L}}function pA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new pr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let x=h.clippingState||null;l.value=x,x=u(_,d,E,p);for(let C=0;C!==E;++C)x[C]=n[C];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function mA(t){let e=new WeakMap;function n(o,a){return a===eu?o.mapping=gs:a===tu&&(o.mapping=_s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eu||a===tu)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pb(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ts=4,Jh=[.125,.215,.35,.446,.526,.582],vr=20,ac=new Pf,Zh=new rt;let lc=null,cc=0,uc=0,fc=!1;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,Qh=[new q(-mr,Jr,0),new q(mr,Jr,0),new q(-Jr,0,mr),new q(Jr,0,mr),new q(0,mr,-Jr),new q(0,mr,Jr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],gA=new q;class ep{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=gA}=s;lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=np(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lc,cc,uc),this._renderer.xr.enabled=fc,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===gs||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lc=this._renderer.getRenderTarget(),cc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Mo,format:zn,colorSpace:vs,depthBuffer:!1},r=tp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_A(s)),this._blurMaterial=vA(s,e,n)}return r}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,ac)}_sceneToCubeUV(e,n,i,r,s){const l=new In(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(Zh),f.toneMapping=qi,f.autoClear=!1;const _=new ol({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),v=new Ot(new Ao,_);let m=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,m=!0):(_.color.copy(Zh),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;ra(r,E*x,S>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===gs||e.mapping===_s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=np());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ot(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ra(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ac)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qh[(r-s-1)%Qh.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ot(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vr-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):vr;m>vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vr}`);const h=[];let S=0;for(let A=0;A<vr;++A){const U=A/v,T=Math.exp(-U*U/2);h.push(T),A===0?S+=T:A<m&&(S+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const x=this._sizeLods[r],C=3*x*(r>E-ts?r-E+ts:0),L=4*(this._cubeSize-x);ra(n,C,L,3*x,2*x),l.setRenderTarget(n),l.render(f,ac)}}function _A(t){const e=[],n=[],i=[];let r=t;const s=t-ts+1+Jh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ts?l=Jh[o-t+ts-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let L=0;L<p;L++){const A=L%3*2/3-1,U=L>2?0:-1,T=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];S.set(T,v*_*L),E.set(d,m*_*L);const b=[L,L,L,L,L,L];x.set(b,h*_*L)}const C=new nr;C.setAttribute("position",new si(S,v)),C.setAttribute("uv",new si(E,m)),C.setAttribute("faceIndex",new si(x,h)),e.push(C),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function tp(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ra(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vA(t,e,n){const i=new Float32Array(vr),r=new q(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function np(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lf(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ip(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Lf(){return`

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
	`}function xA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eu||l===tu,u=l===gs||l===_s;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ep(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new ep(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function SA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yA(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,x=S.length;E<x;E+=3){const C=S[E+0],L=S[E+1],A=S[E+2];d.push(C,L,L,A,A,C)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const C=E+0,L=E+1,A=E+2;d.push(C,L,L,A,A,C)}}else return;const m=new(qg(d)?Zg:Jg)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function EA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S]*v[S];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function MA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bA(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*L*4*f),U=new Yg(A,C,L,f);U.type=wi,U.needsUpdate=!0;const T=x*4;for(let F=0;F<f;F++){const Y=h[F],$=S[F],ae=E[F],oe=C*L*4*F;for(let Q=0;Q<Y.count;Q++){const K=Q*T;_===!0&&(r.fromBufferAttribute(Y,Q),A[oe+K+0]=r.x,A[oe+K+1]=r.y,A[oe+K+2]=r.z,A[oe+K+3]=0),v===!0&&(r.fromBufferAttribute($,Q),A[oe+K+4]=r.x,A[oe+K+5]=r.y,A[oe+K+6]=r.z,A[oe+K+7]=0),m===!0&&(r.fromBufferAttribute(ae,Q),A[oe+K+8]=r.x,A[oe+K+9]=r.y,A[oe+K+10]=r.z,A[oe+K+11]=ae.itemSize===4?r.w:1)}}d={count:f,texture:U,size:new st(C,L)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function TA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const u_=new dn,rp=new i_(1,1),f_=new Yg,d_=new JM,h_=new t_,sp=[],op=[],ap=new Float32Array(16),lp=new Float32Array(9),cp=new Float32Array(4);function Ms(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sp[r];if(s===void 0&&(s=new Float32Array(r),sp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ll(t,e){let n=op[e];n===void 0&&(n=new Int32Array(e),op[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function PA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;cp.set(i),t.uniformMatrix2fv(this.addr,!1,cp),Xt(n,i)}}function LA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;lp.set(i),t.uniformMatrix3fv(this.addr,!1,lp),Xt(n,i)}}function IA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;ap.set(i),t.uniformMatrix4fv(this.addr,!1,ap),Xt(n,i)}}function DA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function OA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function FA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function kA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function VA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rp.compareFunction=$g,s=rp):s=u_,n.setTexture2D(e||s,r)}function zA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||d_,r)}function GA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||h_,r)}function WA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||f_,r)}function XA(t){switch(t){case 5126:return wA;case 35664:return AA;case 35665:return RA;case 35666:return CA;case 35674:return PA;case 35675:return LA;case 35676:return IA;case 5124:case 35670:return DA;case 35667:case 35671:return NA;case 35668:case 35672:return UA;case 35669:case 35673:return OA;case 5125:return FA;case 36294:return BA;case 36295:return kA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return VA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return WA}}function $A(t,e){t.uniform1fv(this.addr,e)}function qA(t,e){const n=Ms(e,this.size,2);t.uniform2fv(this.addr,n)}function YA(t,e){const n=Ms(e,this.size,3);t.uniform3fv(this.addr,n)}function jA(t,e){const n=Ms(e,this.size,4);t.uniform4fv(this.addr,n)}function KA(t,e){const n=Ms(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JA(t,e){const n=Ms(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZA(t,e){const n=Ms(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QA(t,e){t.uniform1iv(this.addr,e)}function eR(t,e){t.uniform2iv(this.addr,e)}function tR(t,e){t.uniform3iv(this.addr,e)}function nR(t,e){t.uniform4iv(this.addr,e)}function iR(t,e){t.uniform1uiv(this.addr,e)}function rR(t,e){t.uniform2uiv(this.addr,e)}function sR(t,e){t.uniform3uiv(this.addr,e)}function oR(t,e){t.uniform4uiv(this.addr,e)}function aR(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||u_,s[o])}function lR(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||d_,s[o])}function cR(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||h_,s[o])}function uR(t,e,n){const i=this.cache,r=e.length,s=ll(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||f_,s[o])}function fR(t){switch(t){case 5126:return $A;case 35664:return qA;case 35665:return YA;case 35666:return jA;case 35674:return KA;case 35675:return JA;case 35676:return ZA;case 5124:case 35670:return QA;case 35667:case 35671:return eR;case 35668:case 35672:return tR;case 35669:case 35673:return nR;case 5125:return iR;case 36294:return rR;case 36295:return sR;case 36296:return oR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return lR;case 35680:case 36300:case 36308:case 36293:return cR;case 36289:case 36303:case 36311:case 36292:return uR}}class dR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XA(n.type)}}class hR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fR(n.type)}}class pR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function up(t,e){t.seq.push(e),t.map[e.id]=e}function mR(t,e,n){const i=t.name,r=i.length;for(dc.lastIndex=0;;){const s=dc.exec(i),o=dc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){up(n,c===void 0?new dR(a,t,e):new hR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new pR(a),up(n,f)),n=f}}}class _a{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);mR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gR=37297;let _R=0;function vR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const dp=new Ze;function xR(t){lt._getMatrix(dp,lt.workingColorSpace,t);const e=`mat3( ${dp.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case Da:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vR(t.getShaderSource(e),o)}else return r}function SR(t,e){const n=xR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yR(t,e){let n;switch(e){case MM:n="Linear";break;case bM:n="Reinhard";break;case TM:n="Cineon";break;case wM:n="ACESFilmic";break;case RM:n="AgX";break;case CM:n="Neutral";break;case AM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sa=new q;function ER(){lt.getLuminanceCoefficients(sa);const t=sa.x.toFixed(4),e=sa.y.toFixed(4),n=sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function bR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Bs(t){return t!==""}function pp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(t){return t.replace(wR,RR)}const AR=new Map;function RR(t,e){let n=Qe[e];if(n===void 0){const i=AR.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pu(n)}const CR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(t){return t.replace(CR,PR)}function PR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _p(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function LR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===xi&&(e="SHADOWMAP_TYPE_VSM"),e}function IR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case gs:case _s:e="ENVMAP_TYPE_CUBE";break;case sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case _s:e="ENVMAP_MODE_REFRACTION";break}return e}function NR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case rl:e="ENVMAP_BLENDING_MULTIPLY";break;case yM:e="ENVMAP_BLENDING_MIX";break;case EM:e="ENVMAP_BLENDING_ADD";break}return e}function UR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LR(n),c=IR(n),u=DR(n),f=NR(n),d=UR(n),p=MR(n),_=bR(s),v=r.createProgram();let m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Bs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Bs).join(`
`),h.length>0&&(h+=`
`)):(m=[_p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),h=[_p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==qi?yR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,SR("linearToOutputTexel",n.outputColorSpace),ER(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Pu(o),o=pp(o,n),o=mp(o,n),a=Pu(a),a=pp(a,n),a=mp(a,n),o=gp(o),a=gp(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+m+o,x=S+h+a,C=fp(r,r.VERTEX_SHADER,E),L=fp(r,r.FRAGMENT_SHADER,x);r.attachShader(v,C),r.attachShader(v,L),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(F){if(t.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),$=r.getShaderInfoLog(C).trim(),ae=r.getShaderInfoLog(L).trim();let oe=!0,Q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,L);else{const K=hp(r,C,"vertex"),W=hp(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+K+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||ae==="")&&(Q=!1);Q&&(F.diagnostics={runnable:oe,programLog:Y,vertexShader:{log:$,prefix:m},fragmentShader:{log:ae,prefix:h}})}r.deleteShader(C),r.deleteShader(L),U=new _a(r,v),T=TR(r,v)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,gR)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_R++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=L,this}let FR=0;class BR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kR(e),n.set(e,i)),i}}class kR{constructor(e){this.id=FR++,this.code=e,this.usedTimes=0}}function HR(t,e,n,i,r,s,o){const a=new Af,l=new BR,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,F,Y,$){const ae=Y.fog,oe=$.geometry,Q=T.isMeshStandardMaterial?Y.environment:null,K=(T.isMeshStandardMaterial?n:e).get(T.envMap||Q),W=K&&K.mapping===sl?K.image.height:null,he=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Se=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Re=Se!==void 0?Se.length:0;let ke=0;oe.morphAttributes.position!==void 0&&(ke=1),oe.morphAttributes.normal!==void 0&&(ke=2),oe.morphAttributes.color!==void 0&&(ke=3);let et,se,xe,be;if(he){const mt=ti[he];et=mt.vertexShader,se=mt.fragmentShader}else et=T.vertexShader,se=T.fragmentShader,l.update(T),xe=l.getVertexShaderID(T),be=l.getFragmentShaderID(T);const H=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),ce=$.isInstancedMesh===!0,le=$.isBatchedMesh===!0,He=!!T.map,D=!!T.matcap,N=!!K,y=!!T.aoMap,ne=!!T.lightMap,J=!!T.bumpMap,ee=!!T.normalMap,w=!!T.displacementMap,P=!!T.emissiveMap,O=!!T.metalnessMap,k=!!T.roughnessMap,ge=T.anisotropy>0,M=T.clearcoat>0,g=T.dispersion>0,I=T.iridescence>0,V=T.sheen>0,j=T.transmission>0,X=ge&&!!T.anisotropyMap,Ee=M&&!!T.clearcoatMap,pe=M&&!!T.clearcoatNormalMap,Te=M&&!!T.clearcoatRoughnessMap,Ce=I&&!!T.iridescenceMap,de=I&&!!T.iridescenceThicknessMap,Pe=V&&!!T.sheenColorMap,Ne=V&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,ye=!!T.specularColorMap,qe=!!T.specularIntensityMap,B=j&&!!T.transmissionMap,we=j&&!!T.thicknessMap,me=!!T.gradientMap,De=!!T.alphaMap,_e=T.alphaTest>0,ue=!!T.alphaHash,Oe=!!T.extensions;let Ye=qi;T.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ye=t.toneMapping);const Mt={shaderID:he,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:se,defines:T.defines,customVertexShaderID:xe,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:le,batchingColor:le&&$._colorsTexture!==null,instancing:ce,instancingColor:ce&&$.instanceColor!==null,instancingMorph:ce&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:vs,alphaToCoverage:!!T.alphaToCoverage,map:He,matcap:D,envMap:N,envMapMode:N&&K.mapping,envMapCubeUVHeight:W,aoMap:y,lightMap:ne,bumpMap:J,normalMap:ee,displacementMap:d&&w,emissiveMap:P,normalMapObjectSpace:ee&&T.normalMapType===DM,normalMapTangentSpace:ee&&T.normalMapType===bf,metalnessMap:O,roughnessMap:k,anisotropy:ge,anisotropyMap:X,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:pe,clearcoatRoughnessMap:Te,dispersion:g,iridescence:I,iridescenceMap:Ce,iridescenceThicknessMap:de,sheen:V,sheenColorMap:Pe,sheenRoughnessMap:Ne,specularMap:Ue,specularColorMap:ye,specularIntensityMap:qe,transmission:j,transmissionMap:B,thicknessMap:we,gradientMap:me,opaque:T.transparent===!1&&T.blending===os&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:ue,combine:T.combine,mapUv:He&&v(T.map.channel),aoMapUv:y&&v(T.aoMap.channel),lightMapUv:ne&&v(T.lightMap.channel),bumpMapUv:J&&v(T.bumpMap.channel),normalMapUv:ee&&v(T.normalMap.channel),displacementMapUv:w&&v(T.displacementMap.channel),emissiveMapUv:P&&v(T.emissiveMap.channel),metalnessMapUv:O&&v(T.metalnessMap.channel),roughnessMapUv:k&&v(T.roughnessMap.channel),anisotropyMapUv:X&&v(T.anisotropyMap.channel),clearcoatMapUv:Ee&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(T.sheenRoughnessMap.channel),specularMapUv:Ue&&v(T.specularMap.channel),specularColorMapUv:ye&&v(T.specularColorMap.channel),specularIntensityMapUv:qe&&v(T.specularIntensityMap.channel),transmissionMapUv:B&&v(T.transmissionMap.channel),thicknessMapUv:we&&v(T.thicknessMap.channel),alphaMapUv:De&&v(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(ee||ge),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(He||De),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:ke,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,decodeVideoTexture:He&&T.map.isVideoTexture===!0&&lt.getTransfer(T.map.colorSpace)===vt,decodeVideoTextureEmissive:P&&T.emissiveMap.isVideoTexture===!0&&lt.getTransfer(T.emissiveMap.colorSpace)===vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mi,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function h(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)b.push(F),b.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(S(b,T),E(b,T),b.push(t.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function S(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function E(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=_[T.type];let F;if(b){const Y=ti[b];F=ub.clone(Y.uniforms)}else F=T.uniforms;return F}function C(T,b){let F;for(let Y=0,$=u.length;Y<$;Y++){const ae=u[Y];if(ae.cacheKey===b){F=ae,++F.usedTimes;break}}return F===void 0&&(F=new OR(t,b,T,s),u.push(F)),F}function L(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:C,releaseProgram:L,releaseShaderCache:A,programs:u,dispose:U}}function VR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function zR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||zR),i.length>1&&i.sort(d||vp),r.length>1&&r.sort(d||vp)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new xp,t.set(i,[o])):r>=s.length?(o=new xp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new rt};break;case"SpotLight":n={position:new q,direction:new q,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function XR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $R=0;function qR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YR(t){const e=new WR,n=XR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,S=0,E=0,x=0,C=0,L=0,A=0;c.sort(qR);for(let T=0,b=c.length;T<b;T++){const F=c[T],Y=F.color,$=F.intensity,ae=F.distance,oe=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=Y.r*$,f+=Y.g*$,d+=Y.b*$;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],$);A++}else if(F.isDirectionalLight){const Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const K=F.shadow,W=n.get(F);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=Q,p++}else if(F.isSpotLight){const Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(Y).multiplyScalar($),Q.distance=ae,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[v]=Q;const K=F.shadow;if(F.map&&(i.spotLightMap[C]=F.map,C++,K.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[v]=K.matrix,F.castShadow){const W=n.get(F);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=oe,x++}v++}else if(F.isRectAreaLight){const Q=e.get(F);Q.color.copy(Y).multiplyScalar($),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=Q,m++}else if(F.isPointLight){const Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const K=F.shadow,W=n.get(F);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=F.shadow.matrix,E++}i.point[_]=Q,_++}else if(F.isHemisphereLight){const Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar($),Q.groundColor.copy(F.groundColor).multiplyScalar($),i.hemi[h]=Q,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==S||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==C||U.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+C-L,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=A,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=S,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=C,U.numLightProbes=A,i.version=$R++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Sp(t){const e=new YR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sp(t),e.set(r,[a])):s>=o.length?(a=new Sp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const KR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JR=`uniform sampler2D shadow_pass;
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
}`;function ZR(t,e,n){let i=new Rf;const r=new st,s=new st,o=new It,a=new vb({depthPacking:IM}),l=new xb,c={},u=n.maxTextureSize,f={[Yi]:mn,[mn]:Yi,[Mi]:Mi},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:KR,fragmentShader:JR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new nr;_.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ot(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Og;let h=this.type;this.render=function(L,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const T=t.getRenderTarget(),b=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending($i),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=h!==xi&&this.type===xi,ae=h===xi&&this.type!==xi;for(let oe=0,Q=L.length;oe<Q;oe++){const K=L[oe],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const he=W.getFrameExtents();if(r.multiply(he),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,W.mapSize.y=s.y)),W.map===null||$===!0||ae===!0){const Re=this.type!==xi?{minFilter:$n,magFilter:$n}:{};W.map!==null&&W.map.dispose(),W.map=new Lr(r.x,r.y,Re),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const Se=W.getViewportCount();for(let Re=0;Re<Se;Re++){const ke=W.getViewport(Re);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),Y.viewport(o),W.updateMatrices(K,Re),i=W.getFrustum(),x(A,U,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===xi&&S(W,U),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,b,F)};function S(L,A){const U=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Lr(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(A,null,U,d,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(A,null,U,p,v,null)}function E(L,A,U,T){let b=null;const F=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)b=F;else if(b=U.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const Y=b.uuid,$=A.uuid;let ae=c[Y];ae===void 0&&(ae={},c[Y]=ae);let oe=ae[$];oe===void 0&&(oe=b.clone(),ae[$]=oe,A.addEventListener("dispose",C)),b=oe}if(b.visible=A.visible,b.wireframe=A.wireframe,T===xi?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:f[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Y=t.properties.get(b);Y.light=U}return b}function x(L,A,U,T,b){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===xi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const $=e.update(L),ae=L.material;if(Array.isArray(ae)){const oe=$.groups;for(let Q=0,K=oe.length;Q<K;Q++){const W=oe[Q],he=ae[W.materialIndex];if(he&&he.visible){const Se=E(L,he,T,b);L.onBeforeShadow(t,L,A,U,$,Se,W),t.renderBufferDirect(U,null,$,Se,L,W),L.onAfterShadow(t,L,A,U,$,Se,W)}}}else if(ae.visible){const oe=E(L,ae,T,b);L.onBeforeShadow(t,L,A,U,$,oe,null),t.renderBufferDirect(U,null,$,oe,L,null),L.onAfterShadow(t,L,A,U,$,oe,null)}}const Y=L.children;for(let $=0,ae=Y.length;$<ae;$++)x(Y[$],A,U,T,b)}function C(L){L.target.removeEventListener("dispose",C);for(const U in c){const T=c[U],b=L.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const QR={[qc]:Yc,[jc]:Zc,[Kc]:Qc,[ms]:Jc,[Yc]:qc,[Zc]:jc,[Qc]:Kc,[Jc]:ms};function eC(t,e){function n(){let B=!1;const we=new It;let me=null;const De=new It(0,0,0,0);return{setMask:function(_e){me!==_e&&!B&&(t.colorMask(_e,_e,_e,_e),me=_e)},setLocked:function(_e){B=_e},setClear:function(_e,ue,Oe,Ye,Mt){Mt===!0&&(_e*=Ye,ue*=Ye,Oe*=Ye),we.set(_e,ue,Oe,Ye),De.equals(we)===!1&&(t.clearColor(_e,ue,Oe,Ye),De.copy(we))},reset:function(){B=!1,me=null,De.set(-1,0,0,0)}}}function i(){let B=!1,we=!1,me=null,De=null,_e=null;return{setReversed:function(ue){if(we!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const Ye=_e;_e=null,this.setClear(Ye)}},getReversed:function(){return we},setTest:function(ue){ue?H(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){me!==ue&&!B&&(t.depthMask(ue),me=ue)},setFunc:function(ue){if(we&&(ue=QR[ue]),De!==ue){switch(ue){case qc:t.depthFunc(t.NEVER);break;case Yc:t.depthFunc(t.ALWAYS);break;case jc:t.depthFunc(t.LESS);break;case ms:t.depthFunc(t.LEQUAL);break;case Kc:t.depthFunc(t.EQUAL);break;case Jc:t.depthFunc(t.GEQUAL);break;case Zc:t.depthFunc(t.GREATER);break;case Qc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){B=ue},setClear:function(ue){_e!==ue&&(we&&(ue=1-ue),t.clearDepth(ue),_e=ue)},reset:function(){B=!1,me=null,De=null,_e=null,we=!1}}}function r(){let B=!1,we=null,me=null,De=null,_e=null,ue=null,Oe=null,Ye=null,Mt=null;return{setTest:function(mt){B||(mt?H(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(mt){we!==mt&&!B&&(t.stencilMask(mt),we=mt)},setFunc:function(mt,Un,ui){(me!==mt||De!==Un||_e!==ui)&&(t.stencilFunc(mt,Un,ui),me=mt,De=Un,_e=ui)},setOp:function(mt,Un,ui){(ue!==mt||Oe!==Un||Ye!==ui)&&(t.stencilOp(mt,Un,ui),ue=mt,Oe=Un,Ye=ui)},setLocked:function(mt){B=mt},setClear:function(mt){Mt!==mt&&(t.clearStencil(mt),Mt=mt)},reset:function(){B=!1,we=null,me=null,De=null,_e=null,ue=null,Oe=null,Ye=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,C=null,L=null,A=new rt(0,0,0),U=0,T=!1,b=null,F=null,Y=null,$=null,ae=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,K=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),Q=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Q=K>=2);let he=null,Se={};const Re=t.getParameter(t.SCISSOR_BOX),ke=t.getParameter(t.VIEWPORT),et=new It().fromArray(Re),se=new It().fromArray(ke);function xe(B,we,me,De){const _e=new Uint8Array(4),ue=t.createTexture();t.bindTexture(B,ue),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<me;Oe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(we+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ue}const be={};be[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(ms),J(!1),ee(Sh),H(t.CULL_FACE),y($i);function H(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function re(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function ce(B,we){return f[B]!==we?(t.bindFramebuffer(B,we),f[B]=we,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function le(B,we){let me=p,De=!1;if(B){me=d.get(we),me===void 0&&(me=[],d.set(we,me));const _e=B.textures;if(me.length!==_e.length||me[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Oe=_e.length;ue<Oe;ue++)me[ue]=t.COLOR_ATTACHMENT0+ue;me.length=_e.length,De=!0}}else me[0]!==t.BACK&&(me[0]=t.BACK,De=!0);De&&t.drawBuffers(me)}function He(B){return _!==B?(t.useProgram(B),_=B,!0):!1}const D={[_r]:t.FUNC_ADD,[rM]:t.FUNC_SUBTRACT,[sM]:t.FUNC_REVERSE_SUBTRACT};D[oM]=t.MIN,D[aM]=t.MAX;const N={[lM]:t.ZERO,[cM]:t.ONE,[uM]:t.SRC_COLOR,[Xc]:t.SRC_ALPHA,[gM]:t.SRC_ALPHA_SATURATE,[pM]:t.DST_COLOR,[dM]:t.DST_ALPHA,[fM]:t.ONE_MINUS_SRC_COLOR,[$c]:t.ONE_MINUS_SRC_ALPHA,[mM]:t.ONE_MINUS_DST_COLOR,[hM]:t.ONE_MINUS_DST_ALPHA,[_M]:t.CONSTANT_COLOR,[vM]:t.ONE_MINUS_CONSTANT_COLOR,[xM]:t.CONSTANT_ALPHA,[SM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(B,we,me,De,_e,ue,Oe,Ye,Mt,mt){if(B===$i){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),B!==iM){if(B!==m||mt!==T){if((h!==_r||x!==_r)&&(t.blendEquation(t.FUNC_ADD),h=_r,x=_r),mt)switch(B){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yh:t.blendFunc(t.ONE,t.ONE);break;case Eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Eh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}S=null,E=null,C=null,L=null,A.set(0,0,0),U=0,m=B,T=mt}return}_e=_e||we,ue=ue||me,Oe=Oe||De,(we!==h||_e!==x)&&(t.blendEquationSeparate(D[we],D[_e]),h=we,x=_e),(me!==S||De!==E||ue!==C||Oe!==L)&&(t.blendFuncSeparate(N[me],N[De],N[ue],N[Oe]),S=me,E=De,C=ue,L=Oe),(Ye.equals(A)===!1||Mt!==U)&&(t.blendColor(Ye.r,Ye.g,Ye.b,Mt),A.copy(Ye),U=Mt),m=B,T=!1}function ne(B,we){B.side===Mi?re(t.CULL_FACE):H(t.CULL_FACE);let me=B.side===mn;we&&(me=!me),J(me),B.blending===os&&B.transparent===!1?y($i):y(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const De=B.stencilWrite;a.setTest(De),De&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),P(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){b!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),b=B)}function ee(B){B!==tM?(H(t.CULL_FACE),B!==F&&(B===Sh?t.cullFace(t.BACK):B===nM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),F=B}function w(B){B!==Y&&(Q&&t.lineWidth(B),Y=B)}function P(B,we,me){B?(H(t.POLYGON_OFFSET_FILL),($!==we||ae!==me)&&(t.polygonOffset(we,me),$=we,ae=me)):re(t.POLYGON_OFFSET_FILL)}function O(B){B?H(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function k(B){B===void 0&&(B=t.TEXTURE0+oe-1),he!==B&&(t.activeTexture(B),he=B)}function ge(B,we,me){me===void 0&&(he===null?me=t.TEXTURE0+oe-1:me=he);let De=Se[me];De===void 0&&(De={type:void 0,texture:void 0},Se[me]=De),(De.type!==B||De.texture!==we)&&(he!==me&&(t.activeTexture(me),he=me),t.bindTexture(B,we||be[B]),De.type=B,De.texture=we)}function M(){const B=Se[he];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function V(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Te(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(B){et.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),et.copy(B))}function Ne(B){se.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),se.copy(B))}function Ue(B,we){let me=c.get(we);me===void 0&&(me=new WeakMap,c.set(we,me));let De=me.get(B);De===void 0&&(De=t.getUniformBlockIndex(we,B.name),me.set(B,De))}function ye(B,we){const De=c.get(we).get(B);l.get(we)!==De&&(t.uniformBlockBinding(we,De,B.__bindingPointIndex),l.set(we,De))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},he=null,Se={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,C=null,L=null,A=new rt(0,0,0),U=0,T=!1,b=null,F=null,Y=null,$=null,ae=null,et.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:re,bindFramebuffer:ce,drawBuffers:le,useProgram:He,setBlending:y,setMaterial:ne,setFlipSided:J,setCullFace:ee,setLineWidth:w,setPolygonOffset:P,setScissorTest:O,activeTexture:k,bindTexture:ge,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:Ce,texImage3D:de,updateUBOMapping:Ue,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Te,texSubImage2D:V,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Ee,scissor:Pe,viewport:Ne,reset:qe}}function tC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):fo("canvas")}function v(M,g,I){let V=1;const j=ge(M);if((j.width>I||j.height>I)&&(V=I/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const X=Math.floor(V*j.width),Ee=Math.floor(V*j.height);f===void 0&&(f=_(X,Ee));const pe=g?_(X,Ee):f;return pe.width=X,pe.height=Ee,pe.getContext("2d").drawImage(M,0,0,X,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Ee+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,g,I,V,j=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let X=g;if(g===t.RED&&(I===t.FLOAT&&(X=t.R32F),I===t.HALF_FLOAT&&(X=t.R16F),I===t.UNSIGNED_BYTE&&(X=t.R8)),g===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.R8UI),I===t.UNSIGNED_SHORT&&(X=t.R16UI),I===t.UNSIGNED_INT&&(X=t.R32UI),I===t.BYTE&&(X=t.R8I),I===t.SHORT&&(X=t.R16I),I===t.INT&&(X=t.R32I)),g===t.RG&&(I===t.FLOAT&&(X=t.RG32F),I===t.HALF_FLOAT&&(X=t.RG16F),I===t.UNSIGNED_BYTE&&(X=t.RG8)),g===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RG8UI),I===t.UNSIGNED_SHORT&&(X=t.RG16UI),I===t.UNSIGNED_INT&&(X=t.RG32UI),I===t.BYTE&&(X=t.RG8I),I===t.SHORT&&(X=t.RG16I),I===t.INT&&(X=t.RG32I)),g===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGB8UI),I===t.UNSIGNED_SHORT&&(X=t.RGB16UI),I===t.UNSIGNED_INT&&(X=t.RGB32UI),I===t.BYTE&&(X=t.RGB8I),I===t.SHORT&&(X=t.RGB16I),I===t.INT&&(X=t.RGB32I)),g===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),I===t.UNSIGNED_INT&&(X=t.RGBA32UI),I===t.BYTE&&(X=t.RGBA8I),I===t.SHORT&&(X=t.RGBA16I),I===t.INT&&(X=t.RGBA32I)),g===t.RGB&&I===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),g===t.RGBA){const Ee=j?Da:lt.getTransfer(V);I===t.FLOAT&&(X=t.RGBA32F),I===t.HALF_FLOAT&&(X=t.RGBA16F),I===t.UNSIGNED_BYTE&&(X=Ee===vt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(M,g){let I;return M?g===null||g===Pr||g===lo?I=t.DEPTH24_STENCIL8:g===wi?I=t.DEPTH32F_STENCIL8:g===ao&&(I=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pr||g===lo?I=t.DEPTH_COMPONENT24:g===wi?I=t.DEPTH_COMPONENT32F:g===ao&&(I=t.DEPTH_COMPONENT16),I}function C(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==$n&&M.minFilter!==ni?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function L(M){const g=M.target;g.removeEventListener("dispose",L),U(g),g.isVideoTexture&&u.delete(g)}function A(M){const g=M.target;g.removeEventListener("dispose",A),b(g)}function U(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,V=d.get(I);if(V){const j=V[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(M),Object.keys(V).length===0&&d.delete(I)}i.remove(M)}function T(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const I=M.source,V=d.get(I);delete V[g.__cacheKey],o.memory.textures--}function b(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let j=0;j<g.__webglFramebuffer[V].length;j++)t.deleteFramebuffer(g.__webglFramebuffer[V][j]);else t.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)t.deleteFramebuffer(g.__webglFramebuffer[V]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=M.textures;for(let V=0,j=I.length;V<j;V++){const X=i.get(I[V]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[V])}i.remove(M)}let F=0;function Y(){F=0}function $(){const M=F;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function ae(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function oe(M,g){const I=i.get(M);if(M.isVideoTexture&&O(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const V=M.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(I,M,g);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+g)}function Q(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){be(I,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+g)}function K(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){be(I,M,g);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+g)}function W(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){H(I,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+g)}const he={[Cr]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[nu]:t.MIRRORED_REPEAT},Se={[$n]:t.NEAREST,[PM]:t.NEAREST_MIPMAP_NEAREST,[Bo]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[Ul]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},Re={[NM]:t.NEVER,[HM]:t.ALWAYS,[UM]:t.LESS,[$g]:t.LEQUAL,[OM]:t.EQUAL,[kM]:t.GEQUAL,[FM]:t.GREATER,[BM]:t.NOTEQUAL};function ke(M,g){if(g.type===wi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ni||g.magFilter===Ul||g.magFilter===Bo||g.magFilter===yr||g.minFilter===ni||g.minFilter===Ul||g.minFilter===Bo||g.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,he[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,he[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,he[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Se[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Re[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===$n||g.minFilter!==Bo&&g.minFilter!==yr||g.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function et(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",L));const V=g.source;let j=d.get(V);j===void 0&&(j={},d.set(V,j));const X=ae(g);if(X!==M.__cacheKey){j[X]===void 0&&(j[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[X].usedTimes++;const Ee=j[M.__cacheKey];Ee!==void 0&&(j[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(g)),M.__cacheKey=X,M.__webglTexture=j[X].texture}return I}function se(M,g,I){return Math.floor(Math.floor(M/I)/g)}function xe(M,g,I,V){const X=M.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,I,V,g.data);else{X.sort((de,Pe)=>de.start-Pe.start);let Ee=0;for(let de=1;de<X.length;de++){const Pe=X[Ee],Ne=X[de],Ue=Pe.start+Pe.count,ye=se(Ne.start,g.width,4),qe=se(Pe.start,g.width,4);Ne.start<=Ue+1&&ye===qe&&se(Ne.start+Ne.count-1,g.width,4)===ye?Pe.count=Math.max(Pe.count,Ne.start+Ne.count-Pe.start):(++Ee,X[Ee]=Ne)}X.length=Ee+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let de=0,Pe=X.length;de<Pe;de++){const Ne=X[de],Ue=Math.floor(Ne.start/4),ye=Math.ceil(Ne.count/4),qe=Ue%g.width,B=Math.floor(Ue/g.width),we=ye,me=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,qe,B,we,me,I,V,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function be(M,g,I){let V=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=t.TEXTURE_3D);const j=et(M,g),X=g.source;n.bindTexture(V,M.__webglTexture,t.TEXTURE0+I);const Ee=i.get(X);if(X.version!==Ee.__version||j===!0){n.activeTexture(t.TEXTURE0+I);const pe=lt.getPrimaries(lt.workingColorSpace),Te=g.colorSpace===Gi?null:lt.getPrimaries(g.colorSpace),Ce=g.colorSpace===Gi||pe===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let de=v(g.image,!1,r.maxTextureSize);de=k(g,de);const Pe=s.convert(g.format,g.colorSpace),Ne=s.convert(g.type);let Ue=E(g.internalFormat,Pe,Ne,g.colorSpace,g.isVideoTexture);ke(V,g);let ye;const qe=g.mipmaps,B=g.isVideoTexture!==!0,we=Ee.__version===void 0||j===!0,me=X.dataReady,De=C(g,de);if(g.isDepthTexture)Ue=x(g.format===uo,g.type),we&&(B?n.texStorage2D(t.TEXTURE_2D,1,Ue,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Ue,de.width,de.height,0,Pe,Ne,null));else if(g.isDataTexture)if(qe.length>0){B&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ue,qe[0].width,qe[0].height);for(let _e=0,ue=qe.length;_e<ue;_e++)ye=qe[_e],B?me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Pe,Ne,ye.data):n.texImage2D(t.TEXTURE_2D,_e,Ue,ye.width,ye.height,0,Pe,Ne,ye.data);g.generateMipmaps=!1}else B?(we&&n.texStorage2D(t.TEXTURE_2D,De,Ue,de.width,de.height),me&&xe(g,de,Pe,Ne)):n.texImage2D(t.TEXTURE_2D,0,Ue,de.width,de.height,0,Pe,Ne,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){B&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ue,qe[0].width,qe[0].height,de.depth);for(let _e=0,ue=qe.length;_e<ue;_e++)if(ye=qe[_e],g.format!==zn)if(Pe!==null)if(B){if(me)if(g.layerUpdates.size>0){const Oe=Kh(ye.width,ye.height,g.format,g.type);for(const Ye of g.layerUpdates){const Mt=ye.data.subarray(Ye*Oe/ye.data.BYTES_PER_ELEMENT,(Ye+1)*Oe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,Ye,ye.width,ye.height,1,Pe,Mt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,ye.width,ye.height,de.depth,Pe,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Ue,ye.width,ye.height,de.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?me&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,ye.width,ye.height,de.depth,Pe,Ne,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Ue,ye.width,ye.height,de.depth,0,Pe,Ne,ye.data)}else{B&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ue,qe[0].width,qe[0].height);for(let _e=0,ue=qe.length;_e<ue;_e++)ye=qe[_e],g.format!==zn?Pe!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Pe,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Ue,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,ye.width,ye.height,Pe,Ne,ye.data):n.texImage2D(t.TEXTURE_2D,_e,Ue,ye.width,ye.height,0,Pe,Ne,ye.data)}else if(g.isDataArrayTexture)if(B){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ue,de.width,de.height,de.depth),me)if(g.layerUpdates.size>0){const _e=Kh(de.width,de.height,g.format,g.type);for(const ue of g.layerUpdates){const Oe=de.data.subarray(ue*_e/de.data.BYTES_PER_ELEMENT,(ue+1)*_e/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,de.width,de.height,1,Pe,Ne,Oe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Pe,Ne,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Pe,Ne,de.data);else if(g.isData3DTexture)B?(we&&n.texStorage3D(t.TEXTURE_3D,De,Ue,de.width,de.height,de.depth),me&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Pe,Ne,de.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Pe,Ne,de.data);else if(g.isFramebufferTexture){if(we)if(B)n.texStorage2D(t.TEXTURE_2D,De,Ue,de.width,de.height);else{let _e=de.width,ue=de.height;for(let Oe=0;Oe<De;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Ue,_e,ue,0,Pe,Ne,null),_e>>=1,ue>>=1}}else if(qe.length>0){if(B&&we){const _e=ge(qe[0]);n.texStorage2D(t.TEXTURE_2D,De,Ue,_e.width,_e.height)}for(let _e=0,ue=qe.length;_e<ue;_e++)ye=qe[_e],B?me&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Pe,Ne,ye):n.texImage2D(t.TEXTURE_2D,_e,Ue,Pe,Ne,ye);g.generateMipmaps=!1}else if(B){if(we){const _e=ge(de);n.texStorage2D(t.TEXTURE_2D,De,Ue,_e.width,_e.height)}me&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Ne,de)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Pe,Ne,de);m(g)&&h(V),Ee.__version=X.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function H(M,g,I){if(g.image.length!==6)return;const V=et(M,g),j=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+I);const X=i.get(j);if(j.version!==X.__version||V===!0){n.activeTexture(t.TEXTURE0+I);const Ee=lt.getPrimaries(lt.workingColorSpace),pe=g.colorSpace===Gi?null:lt.getPrimaries(g.colorSpace),Te=g.colorSpace===Gi||Ee===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,Pe=[];for(let ue=0;ue<6;ue++)!Ce&&!de?Pe[ue]=v(g.image[ue],!0,r.maxCubemapSize):Pe[ue]=de?g.image[ue].image:g.image[ue],Pe[ue]=k(g,Pe[ue]);const Ne=Pe[0],Ue=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),qe=E(g.internalFormat,Ue,ye,g.colorSpace),B=g.isVideoTexture!==!0,we=X.__version===void 0||V===!0,me=j.dataReady;let De=C(g,Ne);ke(t.TEXTURE_CUBE_MAP,g);let _e;if(Ce){B&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,qe,Ne.width,Ne.height);for(let ue=0;ue<6;ue++){_e=Pe[ue].mipmaps;for(let Oe=0;Oe<_e.length;Oe++){const Ye=_e[Oe];g.format!==zn?Ue!==null?B?me&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ye.width,Ye.height,Ue,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,qe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ye.width,Ye.height,Ue,ye,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,qe,Ye.width,Ye.height,0,Ue,ye,Ye.data)}}}else{if(_e=g.mipmaps,B&&we){_e.length>0&&De++;const ue=ge(Pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(de){B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe[ue].width,Pe[ue].height,Ue,ye,Pe[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Pe[ue].width,Pe[ue].height,0,Ue,ye,Pe[ue].data);for(let Oe=0;Oe<_e.length;Oe++){const Mt=_e[Oe].image[ue].image;B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Mt.width,Mt.height,Ue,ye,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,qe,Mt.width,Mt.height,0,Ue,ye,Mt.data)}}else{B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ue,ye,Pe[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Ue,ye,Pe[ue]);for(let Oe=0;Oe<_e.length;Oe++){const Ye=_e[Oe];B?me&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Ue,ye,Ye.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,qe,Ue,ye,Ye.image[ue])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),X.__version=j.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function re(M,g,I,V,j,X){const Ee=s.convert(I.format,I.colorSpace),pe=s.convert(I.type),Te=E(I.internalFormat,Ee,pe,I.colorSpace),Ce=i.get(g),de=i.get(I);if(de.__renderTarget=g,!Ce.__hasExternalTextures){const Pe=Math.max(1,g.width>>X),Ne=Math.max(1,g.height>>X);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,X,Te,Pe,Ne,g.depth,0,Ee,pe,null):n.texImage2D(j,X,Te,Pe,Ne,0,Ee,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),P(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,de.__webglTexture,0,w(g)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,j,de.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(M,g,I){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const V=g.depthTexture,j=V&&V.isDepthTexture?V.type:null,X=x(g.stencilBuffer,j),Ee=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=w(g);P(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,X,g.width,g.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,X,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,X,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,M)}else{const V=g.textures;for(let j=0;j<V.length;j++){const X=V[j],Ee=s.convert(X.format,X.colorSpace),pe=s.convert(X.type),Te=E(X.internalFormat,Ee,pe,X.colorSpace),Ce=w(g);I&&P(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Te,g.width,g.height):P(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),oe(g.depthTexture,0);const j=V.__webglTexture,X=w(g);if(g.depthTexture.format===co)P(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(g.depthTexture.format===uo)P(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function He(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const V=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=V}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const V=M.texture.mipmaps;V&&V.length>0?le(g.__webglFramebuffer[0],M):le(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=t.createRenderbuffer(),ce(g.__webglDepthbuffer[V],M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}}else{const V=M.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ce(g.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(M,g,I){const V=i.get(M);g!==void 0&&re(V.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&He(M)}function N(M){const g=M.texture,I=i.get(M),V=i.get(g);M.addEventListener("dispose",A);const j=M.textures,X=M.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=g.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[pe]=[];for(let Te=0;Te<g.mipmaps.length;Te++)I.__webglFramebuffer[pe][Te]=t.createFramebuffer()}else I.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)I.__webglFramebuffer[pe]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let pe=0,Te=j.length;pe<Te;pe++){const Ce=i.get(j[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&P(M)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let pe=0;pe<j.length;pe++){const Te=j[pe];I.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[pe]);const Ce=s.convert(Te.format,Te.colorSpace),de=s.convert(Te.type),Pe=E(Te.internalFormat,Ce,de,Te.colorSpace,M.isXRRenderTarget===!0),Ne=w(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,Pe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,I.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(I.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),ke(t.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)re(I.__webglFramebuffer[pe][Te],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Te);else re(I.__webglFramebuffer[pe],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let pe=0,Te=j.length;pe<Te;pe++){const Ce=j[pe],de=i.get(Ce);n.bindTexture(t.TEXTURE_2D,de.__webglTexture),ke(t.TEXTURE_2D,Ce),re(I.__webglFramebuffer,M,Ce,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ce)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,V.__webglTexture),ke(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)re(I.__webglFramebuffer[Te],M,g,t.COLOR_ATTACHMENT0,pe,Te);else re(I.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,pe,0);m(g)&&h(pe),n.unbindTexture()}M.depthBuffer&&He(M)}function y(M){const g=M.textures;for(let I=0,V=g.length;I<V;I++){const j=g[I];if(m(j)){const X=S(M),Ee=i.get(j).__webglTexture;n.bindTexture(X,Ee),h(X),n.unbindTexture()}}}const ne=[],J=[];function ee(M){if(M.samples>0){if(P(M)===!1){const g=M.textures,I=M.width,V=M.height;let j=t.COLOR_BUFFER_BIT;const X=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(M),pe=g.length>1;if(pe)for(let Ce=0;Ce<g.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const de=i.get(g[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,I,V,0,0,I,V,j,t.NEAREST),l===!0&&(ne.length=0,J.length=0,ne.push(t.COLOR_ATTACHMENT0+Ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ne.push(X),J.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,J)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<g.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Ce]);const de=i.get(g[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function w(M){return Math.min(r.maxSamples,M.samples)}function P(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function O(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function k(M,g){const I=M.colorSpace,V=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||I!==vs&&I!==Gi&&(lt.getTransfer(I)===vt?(V!==zn||j!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function ge(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=Y,this.setTexture2D=oe,this.setTexture2DArray=Q,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=D,this.setupRenderTarget=N,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=re,this.useMultisampledRTT=P}function nC(t,e){function n(i,r=Gi){let s;const o=lt.getTransfer(r);if(i===ci)return t.UNSIGNED_BYTE;if(i===xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Bg)return t.BYTE;if(i===kg)return t.SHORT;if(i===ao)return t.UNSIGNED_SHORT;if(i===vf)return t.INT;if(i===Pr)return t.UNSIGNED_INT;if(i===wi)return t.FLOAT;if(i===Mo)return t.HALF_FLOAT;if(i===Vg)return t.ALPHA;if(i===zg)return t.RGB;if(i===zn)return t.RGBA;if(i===co)return t.DEPTH_COMPONENT;if(i===uo)return t.DEPTH_STENCIL;if(i===Gg)return t.RED;if(i===yf)return t.RED_INTEGER;if(i===Wg)return t.RG;if(i===Ef)return t.RG_INTEGER;if(i===Mf)return t.RGBA_INTEGER;if(i===da||i===ha||i===pa||i===ma)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===iu||i===ru||i===su||i===ou)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===au||i===lu||i===cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===au||i===lu)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uu||i===fu||i===du||i===hu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===Su||i===yu||i===Eu||i===Mu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===du)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_u)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Su)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mu)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ga||i===bu||i===Tu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ga)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xg||i===wu||i===Au||i===Ru)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ga)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ru)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
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

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new dn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ji({vertexShader:iC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new Ki(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends ys{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=new sC,m=n.getContextAttributes();let h=null,S=null;const E=[],x=[],C=new st;let L=null;const A=new In;A.viewport=new It;const U=new In;U.viewport=new It;const T=[A,U],b=new Tb;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=E[se];return xe===void 0&&(xe=new rc,E[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=E[se];return xe===void 0&&(xe=new rc,E[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=E[se];return xe===void 0&&(xe=new rc,E[se]=xe),xe.getHandSpace()};function $(se){const xe=x.indexOf(se.inputSource);if(xe===-1)return;const be=E[xe];be!==void 0&&(be.update(se.inputSource,se.frame,c||o),be.dispatchEvent({type:se.type,data:se.inputSource}))}function ae(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",oe);for(let se=0;se<E.length;se++){const xe=x[se];xe!==null&&(x[se]=null,E[se].disconnect(xe))}F=null,Y=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,S=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(C),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,H=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?uo:co,H=m.stencil?lo:Pr);const ce={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Lr(d.textureWidth,d.textureHeight,{format:zn,type:ci,depthTexture:new i_(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Lr(p.framebufferWidth,p.framebufferHeight,{format:zn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function oe(se){for(let xe=0;xe<se.removed.length;xe++){const be=se.removed[xe],H=x.indexOf(be);H>=0&&(x[H]=null,E[H].disconnect(be))}for(let xe=0;xe<se.added.length;xe++){const be=se.added[xe];let H=x.indexOf(be);if(H===-1){for(let ce=0;ce<E.length;ce++)if(ce>=x.length){x.push(be),H=ce;break}else if(x[ce]===null){x[ce]=be,H=ce;break}if(H===-1)break}const re=E[H];re&&re.connect(be)}}const Q=new q,K=new q;function W(se,xe,be){Q.setFromMatrixPosition(xe.matrixWorld),K.setFromMatrixPosition(be.matrixWorld);const H=Q.distanceTo(K),re=xe.projectionMatrix.elements,ce=be.projectionMatrix.elements,le=re[14]/(re[10]-1),He=re[14]/(re[10]+1),D=(re[9]+1)/re[5],N=(re[9]-1)/re[5],y=(re[8]-1)/re[0],ne=(ce[8]+1)/ce[0],J=le*y,ee=le*ne,w=H/(-y+ne),P=w*-y;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(P),se.translateZ(w),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const O=le+w,k=He+w,ge=J-P,M=ee+(H-P),g=D*He/k*O,I=N*He/k*O;se.projectionMatrix.makePerspective(ge,M,g,I,O,k),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function he(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let xe=se.near,be=se.far;v.texture!==null&&(v.depthNear>0&&(xe=v.depthNear),v.depthFar>0&&(be=v.depthFar)),b.near=U.near=A.near=xe,b.far=U.far=A.far=be,(F!==b.near||Y!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,Y=b.far),A.layers.mask=se.layers.mask|2,U.layers.mask=se.layers.mask|4,b.layers.mask=A.layers.mask|U.layers.mask;const H=se.parent,re=b.cameras;he(b,H);for(let ce=0;ce<re.length;ce++)he(re[ce],H);re.length===2?W(b,A,U):b.projectionMatrix.copy(A.projectionMatrix),Se(se,b,H)};function Se(se,xe,be){be===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(be.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ua*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Re=null;function ke(se,xe){if(u=xe.getViewerPose(c||o),_=xe,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;be.length!==b.cameras.length&&(b.cameras.length=0,H=!0);for(let le=0;le<be.length;le++){const He=be[le];let D=null;if(p!==null)D=p.getViewport(He);else{const y=f.getViewSubImage(d,He);D=y.viewport,le===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let N=T[le];N===void 0&&(N=new In,N.layers.enable(le),N.viewport=new It,T[le]=N),N.matrix.fromArray(He.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(He.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(D.x,D.y,D.width,D.height),le===0&&(b.matrix.copy(N.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),H===!0&&b.cameras.push(N)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(be[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let be=0;be<E.length;be++){const H=x[be],re=E[be];H!==null&&re!==void 0&&re.update(H,xe,c||o)}Re&&Re(se,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),_=null}const et=new c_;et.setAnimationLoop(ke),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const dr=new Yn,aC=new Ct;function lC(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Qg(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===mn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===mn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,dr.copy(x),dr.x*=-1,dr.y*=-1,dr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(dr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===mn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(_(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(S,C);const L=e.render.frame;s[S.id]!==L&&(d(S),s[S.id]=L)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),C=S.__size,L=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,C,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],x=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let L=0,A=x.length;L<A;L++){const U=Array.isArray(x[L])?x[L]:[x[L]];for(let T=0,b=U.length;T<b;T++){const F=U[T];if(p(F,L,T,C)===!0){const Y=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let oe=0;oe<$.length;oe++){const Q=$[oe],K=v(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,Y+ae,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,ae),ae+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,E,x,C){const L=S.value,A=E+"_"+x;if(C[A]===void 0)return typeof L=="number"||typeof L=="boolean"?C[A]=L:C[A]=L.clone(),!0;{const U=C[A];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return C[A]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function _(S){const E=S.uniforms;let x=0;const C=16;for(let A=0,U=E.length;A<U;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let b=0,F=T.length;b<F;b++){const Y=T[b],$=Array.isArray(Y.value)?Y.value:[Y.value];for(let ae=0,oe=$.length;ae<oe;ae++){const Q=$[ae],K=v(Q),W=x%C,he=W%K.boundary,Se=W+he;x+=he,Se!==0&&C-Se<K.storage&&(x+=C-Se),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=K.storage}}}const L=x%C;return L>0&&(x+=C-L),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class p_{constructor(e={}){const{canvas:n=zM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let C=!1;this._outputColorSpace=Pn;let L=0,A=0,U=null,T=-1,b=null;const F=new It,Y=new It;let $=null;const ae=new rt(0);let oe=0,Q=n.width,K=n.height,W=1,he=null,Se=null;const Re=new It(0,0,Q,K),ke=new It(0,0,Q,K);let et=!1;const se=new Rf;let xe=!1,be=!1;const H=new Ct,re=new Ct,ce=new q,le=new It,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function N(){return U===null?W:1}let y=i;function ne(R,z){return n.getContext(R,z)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gf}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",ue,!1),y===null){const z="webgl2";if(y=ne(z,R),y===null)throw ne(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let J,ee,w,P,O,k,ge,M,g,I,V,j,X,Ee,pe,Te,Ce,de,Pe,Ne,Ue,ye,qe,B;function we(){J=new SA(y),J.init(),ye=new nC(y,J),ee=new hA(y,J,e,ye),w=new eC(y,J),ee.reverseDepthBuffer&&d&&w.buffers.depth.setReversed(!0),P=new MA(y),O=new VR,k=new tC(y,J,w,O,ee,ye,P),ge=new mA(x),M=new xA(x),g=new Cb(y),qe=new fA(y,g),I=new yA(y,g,P,qe),V=new TA(y,I,g,P),Pe=new bA(y,ee,k),Te=new pA(O),j=new HR(x,ge,M,J,ee,qe,Te),X=new lC(x,O),Ee=new GR,pe=new jR(J),de=new uA(x,ge,M,w,V,p,l),Ce=new ZR(x,V,ee),B=new cC(y,P,ee,w),Ne=new dA(y,J,P),Ue=new EA(y,J,P),P.programs=j.programs,x.capabilities=ee,x.extensions=J,x.properties=O,x.renderLists=Ee,x.shadowMap=Ce,x.state=w,x.info=P}we();const me=new oC(x,y);this.xr=me,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=J.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=J.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(Q,K,!1))},this.getSize=function(R){return R.set(Q,K)},this.setSize=function(R,z,Z=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=R,K=z,n.width=Math.floor(R*W),n.height=Math.floor(z*W),Z===!0&&(n.style.width=R+"px",n.style.height=z+"px"),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(Q*W,K*W).floor()},this.setDrawingBufferSize=function(R,z,Z){Q=R,K=z,W=Z,n.width=Math.floor(R*Z),n.height=Math.floor(z*Z),this.setViewport(0,0,R,z)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Re)},this.setViewport=function(R,z,Z,te){R.isVector4?Re.set(R.x,R.y,R.z,R.w):Re.set(R,z,Z,te),w.viewport(F.copy(Re).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(ke)},this.setScissor=function(R,z,Z,te){R.isVector4?ke.set(R.x,R.y,R.z,R.w):ke.set(R,z,Z,te),w.scissor(Y.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){w.setScissorTest(et=R)},this.setOpaqueSort=function(R){he=R},this.setTransparentSort=function(R){Se=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,Z=!0){let te=0;if(R){let G=!1;if(U!==null){const ve=U.texture.format;G=ve===Mf||ve===Ef||ve===yf}if(G){const ve=U.texture.type,Ae=ve===ci||ve===Pr||ve===ao||ve===lo||ve===xf||ve===Sf,Fe=de.getClearColor(),Ie=de.getClearAlpha(),Xe=Fe.r,$e=Fe.g,Ve=Fe.b;Ae?(_[0]=Xe,_[1]=$e,_[2]=Ve,_[3]=Ie,y.clearBufferuiv(y.COLOR,0,_)):(v[0]=Xe,v[1]=$e,v[2]=Ve,v[3]=Ie,y.clearBufferiv(y.COLOR,0,v))}else te|=y.COLOR_BUFFER_BIT}z&&(te|=y.DEPTH_BUFFER_BIT),Z&&(te|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),de.dispose(),Ee.dispose(),pe.dispose(),O.dispose(),ge.dispose(),M.dispose(),V.dispose(),qe.dispose(),B.dispose(),j.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ff),me.removeEventListener("sessionend",Bf),ir.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const R=P.autoReset,z=Ce.enabled,Z=Ce.autoUpdate,te=Ce.needsUpdate,G=Ce.type;we(),P.autoReset=R,Ce.enabled=z,Ce.autoUpdate=Z,Ce.needsUpdate=te,Ce.type=G}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const z=R.target;z.removeEventListener("dispose",Oe),Ye(z)}function Ye(R){Mt(R),O.remove(R)}function Mt(R){const z=O.get(R).programs;z!==void 0&&(z.forEach(function(Z){j.releaseProgram(Z)}),R.isShaderMaterial&&j.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,Z,te,G,ve){z===null&&(z=He);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Fe=G_(R,z,Z,te,G);w.setMaterial(te,Ae);let Ie=Z.index,Xe=1;if(te.wireframe===!0){if(Ie=I.getWireframeAttribute(Z),Ie===void 0)return;Xe=2}const $e=Z.drawRange,Ve=Z.attributes.position;let nt=$e.start*Xe,gt=($e.start+$e.count)*Xe;ve!==null&&(nt=Math.max(nt,ve.start*Xe),gt=Math.min(gt,(ve.start+ve.count)*Xe)),Ie!==null?(nt=Math.max(nt,0),gt=Math.min(gt,Ie.count)):Ve!=null&&(nt=Math.max(nt,0),gt=Math.min(gt,Ve.count));const At=gt-nt;if(At<0||At===1/0)return;qe.setup(G,te,Fe,Z,Ie);let Pt,ot=Ne;if(Ie!==null&&(Pt=g.get(Ie),ot=Ue,ot.setIndex(Pt)),G.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*N()),ot.setMode(y.LINES)):ot.setMode(y.TRIANGLES);else if(G.isLine){let Ge=te.linewidth;Ge===void 0&&(Ge=1),w.setLineWidth(Ge*N()),G.isLineSegments?ot.setMode(y.LINES):G.isLineLoop?ot.setMode(y.LINE_LOOP):ot.setMode(y.LINE_STRIP)}else G.isPoints?ot.setMode(y.POINTS):G.isSprite&&ot.setMode(y.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ge=G._multiDrawStarts,jt=G._multiDrawCounts,dt=G._multiDrawCount,On=Ie?g.get(Ie).bytesPerElement:1,Ur=O.get(te).currentProgram.getUniforms();for(let xn=0;xn<dt;xn++)Ur.setValue(y,"_gl_DrawID",xn),ot.render(Ge[xn]/On,jt[xn])}else if(G.isInstancedMesh)ot.renderInstances(nt,At,G.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,jt=Math.min(Z.instanceCount,Ge);ot.renderInstances(nt,At,jt)}else ot.render(nt,At)};function mt(R,z,Z){R.transparent===!0&&R.side===Mi&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,Lo(R,z,Z),R.side=Yi,R.needsUpdate=!0,Lo(R,z,Z),R.side=Mi):Lo(R,z,Z)}this.compile=function(R,z,Z=null){Z===null&&(Z=R),h=pe.get(Z),h.init(z),E.push(h),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),R!==Z&&R.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const te=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];mt(Fe,Z,G),te.add(Fe)}else mt(ve,Z,G),te.add(ve)}),h=E.pop(),te},this.compileAsync=function(R,z,Z=null){const te=this.compile(R,z,Z);return new Promise(G=>{function ve(){if(te.forEach(function(Ae){O.get(Ae).currentProgram.isReady()&&te.delete(Ae)}),te.size===0){G(R);return}setTimeout(ve,10)}J.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Un=null;function ui(R){Un&&Un(R)}function Ff(){ir.stop()}function Bf(){ir.start()}const ir=new c_;ir.setAnimationLoop(ui),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(R){Un=R,me.setAnimationLoop(R),R===null?ir.stop():ir.start()},me.addEventListener("sessionstart",Ff),me.addEventListener("sessionend",Bf),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(z),z=me.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,z,U),h=pe.get(R,E.length),h.init(z),E.push(h),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(re),be=this.localClippingEnabled,xe=Te.init(this.clippingPlanes,be),m=Ee.get(R,S.length),m.init(),S.push(m),me.enabled===!0&&me.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&gl(ve,z,-1/0,x.sortObjects)}gl(R,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(he,Se),D=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,D&&de.addToRenderList(m,R),this.info.render.frame++,xe===!0&&Te.beginShadows();const Z=h.state.shadowsArray;Ce.render(Z,R,z),xe===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,G=m.transmissive;if(h.setupLights(),z.isArrayCamera){const ve=z.cameras;if(G.length>0)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Ie=ve[Ae];Hf(te,G,R,Ie)}D&&de.render(R);for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Ie=ve[Ae];kf(m,R,Ie,Ie.viewport)}}else G.length>0&&Hf(te,G,R,z),D&&de.render(R),kf(m,R,z);U!==null&&A===0&&(k.updateMultisampleRenderTarget(U),k.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(x,R,z),qe.resetDefaultState(),T=-1,b=null,E.pop(),E.length>0?(h=E[E.length-1],xe===!0&&Te.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function gl(R,z,Z,te){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){te&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(re);const Ae=V.update(R),Fe=R.material;Fe.visible&&m.push(R,Ae,Fe,Z,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const Ae=V.update(R),Fe=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),le.copy(Ae.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(re)),Array.isArray(Fe)){const Ie=Ae.groups;for(let Xe=0,$e=Ie.length;Xe<$e;Xe++){const Ve=Ie[Xe],nt=Fe[Ve.materialIndex];nt&&nt.visible&&m.push(R,Ae,nt,Z,le.z,Ve)}}else Fe.visible&&m.push(R,Ae,Fe,Z,le.z,null)}}const ve=R.children;for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++)gl(ve[Ae],z,Z,te)}function kf(R,z,Z,te){const G=R.opaque,ve=R.transmissive,Ae=R.transparent;h.setupLightsView(Z),xe===!0&&Te.setGlobalState(x.clippingPlanes,Z),te&&w.viewport(F.copy(te)),G.length>0&&Po(G,z,Z),ve.length>0&&Po(ve,z,Z),Ae.length>0&&Po(Ae,z,Z),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Hf(R,z,Z,te){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[te.id]===void 0&&(h.state.transmissionRenderTarget[te.id]=new Lr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Mo:ci,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const ve=h.state.transmissionRenderTarget[te.id],Ae=te.viewport||F;ve.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(ae),oe=x.getClearAlpha(),oe<1&&x.setClearColor(16777215,.5),x.clear(),D&&de.render(Z);const Ie=x.toneMapping;x.toneMapping=qi;const Xe=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),h.setupLightsView(te),xe===!0&&Te.setGlobalState(x.clippingPlanes,te),Po(R,Z,te),k.updateMultisampleRenderTarget(ve),k.updateRenderTargetMipmap(ve),J.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ve=0,nt=z.length;Ve<nt;Ve++){const gt=z[Ve],At=gt.object,Pt=gt.geometry,ot=gt.material,Ge=gt.group;if(ot.side===Mi&&At.layers.test(te.layers)){const jt=ot.side;ot.side=mn,ot.needsUpdate=!0,Vf(At,Z,te,Pt,ot,Ge),ot.side=jt,ot.needsUpdate=!0,$e=!0}}$e===!0&&(k.updateMultisampleRenderTarget(ve),k.updateRenderTargetMipmap(ve))}x.setRenderTarget(Fe),x.setClearColor(ae,oe),Xe!==void 0&&(te.viewport=Xe),x.toneMapping=Ie}function Po(R,z,Z){const te=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ve=R.length;G<ve;G++){const Ae=R[G],Fe=Ae.object,Ie=Ae.geometry,Xe=Ae.group;let $e=Ae.material;$e.allowOverride===!0&&te!==null&&($e=te),Fe.layers.test(Z.layers)&&Vf(Fe,z,Z,Ie,$e,Xe)}}function Vf(R,z,Z,te,G,ve){R.onBeforeRender(x,z,Z,te,G,ve),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,z,Z,te,R,ve),G.transparent===!0&&G.side===Mi&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,x.renderBufferDirect(Z,z,te,G,R,ve),G.side=Yi,G.needsUpdate=!0,x.renderBufferDirect(Z,z,te,G,R,ve),G.side=Mi):x.renderBufferDirect(Z,z,te,G,R,ve),R.onAfterRender(x,z,Z,te,G,ve)}function Lo(R,z,Z){z.isScene!==!0&&(z=He);const te=O.get(R),G=h.state.lights,ve=h.state.shadowsArray,Ae=G.state.version,Fe=j.getParameters(R,G.state,ve,z,Z),Ie=j.getProgramCacheKey(Fe);let Xe=te.programs;te.environment=R.isMeshStandardMaterial?z.environment:null,te.fog=z.fog,te.envMap=(R.isMeshStandardMaterial?M:ge).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Oe),Xe=new Map,te.programs=Xe);let $e=Xe.get(Ie);if($e!==void 0){if(te.currentProgram===$e&&te.lightsStateVersion===Ae)return Gf(R,Fe),$e}else Fe.uniforms=j.getUniforms(R),R.onBeforeCompile(Fe,x),$e=j.acquireProgram(Fe,Ie),Xe.set(Ie,$e),te.uniforms=Fe.uniforms;const Ve=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Te.uniform),Gf(R,Fe),te.needsLights=X_(R),te.lightsStateVersion=Ae,te.needsLights&&(Ve.ambientLightColor.value=G.state.ambient,Ve.lightProbe.value=G.state.probe,Ve.directionalLights.value=G.state.directional,Ve.directionalLightShadows.value=G.state.directionalShadow,Ve.spotLights.value=G.state.spot,Ve.spotLightShadows.value=G.state.spotShadow,Ve.rectAreaLights.value=G.state.rectArea,Ve.ltc_1.value=G.state.rectAreaLTC1,Ve.ltc_2.value=G.state.rectAreaLTC2,Ve.pointLights.value=G.state.point,Ve.pointLightShadows.value=G.state.pointShadow,Ve.hemisphereLights.value=G.state.hemi,Ve.directionalShadowMap.value=G.state.directionalShadowMap,Ve.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ve.spotShadowMap.value=G.state.spotShadowMap,Ve.spotLightMatrix.value=G.state.spotLightMatrix,Ve.spotLightMap.value=G.state.spotLightMap,Ve.pointShadowMap.value=G.state.pointShadowMap,Ve.pointShadowMatrix.value=G.state.pointShadowMatrix),te.currentProgram=$e,te.uniformsList=null,$e}function zf(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=_a.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function Gf(R,z){const Z=O.get(R);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function G_(R,z,Z,te,G){z.isScene!==!0&&(z=He),k.resetTextureUnits();const ve=z.fog,Ae=te.isMeshStandardMaterial?z.environment:null,Fe=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:vs,Ie=(te.isMeshStandardMaterial?M:ge).get(te.envMap||Ae),Xe=te.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!Z.morphAttributes.position,nt=!!Z.morphAttributes.normal,gt=!!Z.morphAttributes.color;let At=qi;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(At=x.toneMapping);const Pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=Pt!==void 0?Pt.length:0,Ge=O.get(te),jt=h.state.lights;if(xe===!0&&(be===!0||R!==b)){const rn=R===b&&te.id===T;Te.setState(te,R,rn)}let dt=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==jt.state.version||Ge.outputColorSpace!==Fe||G.isBatchedMesh&&Ge.batching===!1||!G.isBatchedMesh&&Ge.batching===!0||G.isBatchedMesh&&Ge.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ge.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ge.instancing===!1||!G.isInstancedMesh&&Ge.instancing===!0||G.isSkinnedMesh&&Ge.skinning===!1||!G.isSkinnedMesh&&Ge.skinning===!0||G.isInstancedMesh&&Ge.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ge.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ge.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ge.instancingMorph===!1&&G.morphTexture!==null||Ge.envMap!==Ie||te.fog===!0&&Ge.fog!==ve||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Te.numPlanes||Ge.numIntersection!==Te.numIntersection)||Ge.vertexAlphas!==Xe||Ge.vertexTangents!==$e||Ge.morphTargets!==Ve||Ge.morphNormals!==nt||Ge.morphColors!==gt||Ge.toneMapping!==At||Ge.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,Ge.__version=te.version);let On=Ge.currentProgram;dt===!0&&(On=Lo(te,z,G));let Ur=!1,xn=!1,ws=!1;const Tt=On.getUniforms(),wn=Ge.uniforms;if(w.useProgram(On.program)&&(Ur=!0,xn=!0,ws=!0),te.id!==T&&(T=te.id,xn=!0),Ur||b!==R){w.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),WM(H),XM(H),Tt.setValue(y,"projectionMatrix",H)):Tt.setValue(y,"projectionMatrix",R.projectionMatrix),Tt.setValue(y,"viewMatrix",R.matrixWorldInverse);const hn=Tt.map.cameraPosition;hn!==void 0&&hn.setValue(y,ce.setFromMatrixPosition(R.matrixWorld)),ee.logarithmicDepthBuffer&&Tt.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Tt.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,xn=!0,ws=!0)}if(G.isSkinnedMesh){Tt.setOptional(y,G,"bindMatrix"),Tt.setOptional(y,G,"bindMatrixInverse");const rn=G.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Tt.setValue(y,"boneTexture",rn.boneTexture,k))}G.isBatchedMesh&&(Tt.setOptional(y,G,"batchingTexture"),Tt.setValue(y,"batchingTexture",G._matricesTexture,k),Tt.setOptional(y,G,"batchingIdTexture"),Tt.setValue(y,"batchingIdTexture",G._indirectTexture,k),Tt.setOptional(y,G,"batchingColorTexture"),G._colorsTexture!==null&&Tt.setValue(y,"batchingColorTexture",G._colorsTexture,k));const An=Z.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&Pe.update(G,Z,On),(xn||Ge.receiveShadow!==G.receiveShadow)&&(Ge.receiveShadow=G.receiveShadow,Tt.setValue(y,"receiveShadow",G.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(wn.envMap.value=Ie,wn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&z.environment!==null&&(wn.envMapIntensity.value=z.environmentIntensity),xn&&(Tt.setValue(y,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&W_(wn,ws),ve&&te.fog===!0&&X.refreshFogUniforms(wn,ve),X.refreshMaterialUniforms(wn,te,W,K,h.state.transmissionRenderTarget[R.id]),_a.upload(y,zf(Ge),wn,k)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(_a.upload(y,zf(Ge),wn,k),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Tt.setValue(y,"center",G.center),Tt.setValue(y,"modelViewMatrix",G.modelViewMatrix),Tt.setValue(y,"normalMatrix",G.normalMatrix),Tt.setValue(y,"modelMatrix",G.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const rn=te.uniformsGroups;for(let hn=0,_l=rn.length;hn<_l;hn++){const rr=rn[hn];B.update(rr,On),B.bind(rr,On)}}return On}function W_(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function X_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,z,Z){const te=O.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),O.get(R.texture).__webglTexture=z,O.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Z,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const Z=O.get(R);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const $_=y.createFramebuffer();this.setRenderTarget=function(R,z=0,Z=0){U=R,L=z,A=Z;let te=!0,G=null,ve=!1,Ae=!1;if(R){const Ie=O.get(R);if(Ie.__useDefaultFramebuffer!==void 0)w.bindFramebuffer(y.FRAMEBUFFER,null),te=!1;else if(Ie.__webglFramebuffer===void 0)k.setupRenderTarget(R);else if(Ie.__hasExternalTextures)k.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Ie.__boundDepthTexture!==Ve){if(Ve!==null&&O.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ae=!0);const $e=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($e[z])?G=$e[z][Z]:G=$e[z],ve=!0):R.samples>0&&k.useMultisampledRTT(R)===!1?G=O.get(R).__webglMultisampledFramebuffer:Array.isArray($e)?G=$e[Z]:G=$e,F.copy(R.viewport),Y.copy(R.scissor),$=R.scissorTest}else F.copy(Re).multiplyScalar(W).floor(),Y.copy(ke).multiplyScalar(W).floor(),$=et;if(Z!==0&&(G=$_),w.bindFramebuffer(y.FRAMEBUFFER,G)&&te&&w.drawBuffers(R,G),w.viewport(F),w.scissor(Y),w.setScissorTest($),ve){const Ie=O.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,Z)}else if(Ae){const Ie=O.get(R.texture),Xe=z;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ie.__webglTexture,Z,Xe)}else if(R!==null&&Z!==0){const Ie=O.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ie.__webglTexture,Z)}T=-1},this.readRenderTargetPixels=function(R,z,Z,te,G,ve,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){w.bindFramebuffer(y.FRAMEBUFFER,Ie);try{const Xe=R.textures[Fe],$e=Xe.format,Ve=Xe.type;if(!ee.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-te&&Z>=0&&Z<=R.height-G&&(R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(z,Z,te,G,ye.convert($e),ye.convert(Ve),ve))}finally{const Xe=U!==null?O.get(U).__webglFramebuffer:null;w.bindFramebuffer(y.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,z,Z,te,G,ve,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(z>=0&&z<=R.width-te&&Z>=0&&Z<=R.height-G){w.bindFramebuffer(y.FRAMEBUFFER,Ie);const Xe=R.textures[Fe],$e=Xe.format,Ve=Xe.type;if(!ee.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,nt),y.bufferData(y.PIXEL_PACK_BUFFER,ve.byteLength,y.STREAM_READ),R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(z,Z,te,G,ye.convert($e),ye.convert(Ve),0);const gt=U!==null?O.get(U).__webglFramebuffer:null;w.bindFramebuffer(y.FRAMEBUFFER,gt);const At=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await GM(y,At,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,nt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ve),y.deleteBuffer(nt),y.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,Z=0){const te=Math.pow(2,-Z),G=Math.floor(R.image.width*te),ve=Math.floor(R.image.height*te),Ae=z!==null?z.x:0,Fe=z!==null?z.y:0;k.setTexture2D(R,0),y.copyTexSubImage2D(y.TEXTURE_2D,Z,0,0,Ae,Fe,G,ve),w.unbindTexture()};const q_=y.createFramebuffer(),Y_=y.createFramebuffer();this.copyTextureToTexture=function(R,z,Z=null,te=null,G=0,ve=null){ve===null&&(G!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Ae,Fe,Ie,Xe,$e,Ve,nt,gt,At;const Pt=R.isCompressedTexture?R.mipmaps[ve]:R.image;if(Z!==null)Ae=Z.max.x-Z.min.x,Fe=Z.max.y-Z.min.y,Ie=Z.isBox3?Z.max.z-Z.min.z:1,Xe=Z.min.x,$e=Z.min.y,Ve=Z.isBox3?Z.min.z:0;else{const An=Math.pow(2,-G);Ae=Math.floor(Pt.width*An),Fe=Math.floor(Pt.height*An),R.isDataArrayTexture?Ie=Pt.depth:R.isData3DTexture?Ie=Math.floor(Pt.depth*An):Ie=1,Xe=0,$e=0,Ve=0}te!==null?(nt=te.x,gt=te.y,At=te.z):(nt=0,gt=0,At=0);const ot=ye.convert(z.format),Ge=ye.convert(z.type);let jt;z.isData3DTexture?(k.setTexture3D(z,0),jt=y.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(k.setTexture2DArray(z,0),jt=y.TEXTURE_2D_ARRAY):(k.setTexture2D(z,0),jt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,z.unpackAlignment);const dt=y.getParameter(y.UNPACK_ROW_LENGTH),On=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Ur=y.getParameter(y.UNPACK_SKIP_PIXELS),xn=y.getParameter(y.UNPACK_SKIP_ROWS),ws=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Pt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Pt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Xe),y.pixelStorei(y.UNPACK_SKIP_ROWS,$e),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ve);const Tt=R.isDataArrayTexture||R.isData3DTexture,wn=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const An=O.get(R),rn=O.get(z),hn=O.get(An.__renderTarget),_l=O.get(rn.__renderTarget);w.bindFramebuffer(y.READ_FRAMEBUFFER,hn.__webglFramebuffer),w.bindFramebuffer(y.DRAW_FRAMEBUFFER,_l.__webglFramebuffer);for(let rr=0;rr<Ie;rr++)Tt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,O.get(R).__webglTexture,G,Ve+rr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,O.get(z).__webglTexture,ve,At+rr)),y.blitFramebuffer(Xe,$e,Ae,Fe,nt,gt,Ae,Fe,y.DEPTH_BUFFER_BIT,y.NEAREST);w.bindFramebuffer(y.READ_FRAMEBUFFER,null),w.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||O.has(R)){const An=O.get(R),rn=O.get(z);w.bindFramebuffer(y.READ_FRAMEBUFFER,q_),w.bindFramebuffer(y.DRAW_FRAMEBUFFER,Y_);for(let hn=0;hn<Ie;hn++)Tt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,An.__webglTexture,G,Ve+hn):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,An.__webglTexture,G),wn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,rn.__webglTexture,ve,At+hn):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,rn.__webglTexture,ve),G!==0?y.blitFramebuffer(Xe,$e,Ae,Fe,nt,gt,Ae,Fe,y.COLOR_BUFFER_BIT,y.NEAREST):wn?y.copyTexSubImage3D(jt,ve,nt,gt,At+hn,Xe,$e,Ae,Fe):y.copyTexSubImage2D(jt,ve,nt,gt,Xe,$e,Ae,Fe);w.bindFramebuffer(y.READ_FRAMEBUFFER,null),w.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?y.texSubImage3D(jt,ve,nt,gt,At,Ae,Fe,Ie,ot,Ge,Pt.data):z.isCompressedArrayTexture?y.compressedTexSubImage3D(jt,ve,nt,gt,At,Ae,Fe,Ie,ot,Pt.data):y.texSubImage3D(jt,ve,nt,gt,At,Ae,Fe,Ie,ot,Ge,Pt):R.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ve,nt,gt,Ae,Fe,ot,Ge,Pt.data):R.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ve,nt,gt,Pt.width,Pt.height,ot,Pt.data):y.texSubImage2D(y.TEXTURE_2D,ve,nt,gt,Ae,Fe,ot,Ge,Pt);y.pixelStorei(y.UNPACK_ROW_LENGTH,dt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,On),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ur),y.pixelStorei(y.UNPACK_SKIP_ROWS,xn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ws),ve===0&&z.generateMipmaps&&y.generateMipmap(jt),w.unbindTexture()},this.copyTextureToTexture3D=function(R,z,Z=null,te=null,G=0){return as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,z,Z,te,G)},this.initRenderTarget=function(R){O.get(R).__webglFramebuffer===void 0&&k.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?k.setTextureCube(R,0):R.isData3DTexture?k.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?k.setTexture2DArray(R,0):k.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){L=0,A=0,U=null,w.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}class m_{constructor(e,n,i){wt(this,"player");wt(this,"velocity",new q(0,0,0));wt(this,"force",new q(0,0,0));wt(this,"drag",new q(0,0,0));wt(this,"clock",new wb);wt(this,"gameInput");wt(this,"physics");this.player=e,this.gameInput=n,this.physics=i}updateForce(e){let n=this.gameInput.getMovementVectorNormalized();this.force.set(n.x,0,n.y).multiplyScalar(e),this.force.z*=2}updateDrag(e){this.drag.set(this.velocity.x,0,this.velocity.z).multiplyScalar(e)}updateVelocity(e){let n=this.force.clone().sub(this.drag).multiplyScalar(e);this.velocity.length()<.5&&this.force.length()===0&&(this.velocity.multiplyScalar(0),n.multiplyScalar(0)),this.velocity.add(n)}applyMovement(){let e=this.clock.getDelta();this.updateForce(30),this.updateDrag(3),this.updateVelocity(e);let n=this.physics.lineCast(this.player.position,this.velocity,1).length===0&&this.physics.lineCast(this.player.position,this.force,1).length===0;if(!n){const i=new q(this.velocity.x,0,0),r=new q(0,0,this.velocity.z);n=this.physics.lineCast(this.player.position,i,1).length===0,n?(n=this.physics.lineCast(this.player.position,r,1).length===0,n?this.velocity.set(i.x,0,r.z):this.velocity.set(i.x,0,-r.z)):(n=this.physics.lineCast(this.player.position,r,1).length===0,n?this.velocity.set(-i.x,0,r.z):this.velocity.multiplyScalar(0))}this.player.position.add(this.velocity.clone().multiplyScalar(e))}getForce(){return[this.force.x,this.force.y,this.force.z]}getDrag(){return[this.drag.x,this.drag.y,this.drag.z]}getVelocity(){return[this.velocity.x,this.velocity.y,this.velocity.z]}}class g_{constructor(e){wt(this,"isMouse",!1);wt(this,"pointerPos",new q(0,0,0));wt(this,"moveDir",new st(0,0));wt(this,"moveUp",!1);wt(this,"moveDown",!1);wt(this,"moveLeft",!1);wt(this,"moveRight",!1);wt(this,"physics");wt(this,"boundHandleKeyDown",e=>this.handleKeyDown(e));wt(this,"boundHandleKeyUp",e=>this.handleKeyUp(e));wt(this,"boundHandleMouseDown",e=>this.handleMouseDown(e));wt(this,"boundHandleMouseMove",e=>this.handleMouseMove(e));wt(this,"boundHandleMouseUp",()=>this.handleMouseUp());this.physics=e}handleKeyDown(e){if(!this.isMouse)switch(e.key){case"ArrowUp":this.moveUp=!0;break;case"ArrowDown":this.moveDown=!0;break;case"ArrowLeft":this.moveLeft=!0;break;case"ArrowRight":this.moveRight=!0;break}}handleKeyUp(e){if(!this.isMouse)switch(e.key){case"ArrowUp":this.moveUp=!1;break;case"ArrowDown":this.moveDown=!1;break;case"ArrowLeft":this.moveLeft=!1;break;case"ArrowRight":this.moveRight=!1;break}}isKeyboard(){return!!(this.moveUp||this.moveDown||this.moveLeft||this.moveRight)}handleMouseDown(e){var i;if(this.isKeyboard())return;const n=(i=this.physics)==null?void 0:i.screenPointToWorld(e.clientX,e.clientY);n&&(this.isMouse=!0,this.pointerPos.set(n.x,0,n.z))}handleMouseMove(e){var i;if(this.isKeyboard())return;const n=(i=this.physics)==null?void 0:i.screenPointToWorld(e.clientX,e.clientY);n&&this.pointerPos.set(n.x,0,n.z)}handleMouseUp(){this.isKeyboard()||(this.isMouse=!1,this.moveDir.set(0,0))}addInputListener(){window.addEventListener("keydown",this.boundHandleKeyDown),window.addEventListener("keyup",this.boundHandleKeyUp),window.addEventListener("mousedown",this.boundHandleMouseDown),window.addEventListener("mousemove",this.boundHandleMouseMove),window.addEventListener("mouseup",this.boundHandleMouseUp)}removeInputListener(){window.removeEventListener("keydown",this.boundHandleKeyDown),window.removeEventListener("keyup",this.boundHandleKeyUp),window.removeEventListener("mousedown",this.boundHandleMouseDown),window.removeEventListener("mousemove",this.boundHandleMouseMove),window.removeEventListener("mouseup",this.boundHandleMouseUp)}handleMovementVector(e){if(this.isMouse&&!this.isKeyboard()&&e){const n=this.pointerPos.clone().sub(e);n.length()>.1?this.moveDir.set(n.x,n.z):this.moveDir.set(0,0);return}this.moveUp?(this.moveDir.y=-1,this.moveDown&&(this.moveDir.y=0)):this.moveDown?(this.moveDir.y=1,this.moveUp&&(this.moveDir.y=0)):this.moveDir.y=0,this.moveLeft?(this.moveDir.x=-1,this.moveRight&&(this.moveDir.x=0)):this.moveRight?(this.moveDir.x=1,this.moveLeft&&(this.moveDir.x=0)):this.moveDir.x=0}getMovementVectorNormalized(){return this.moveDir.clone().normalize()}}class __{constructor(e,n){wt(this,"raycaster",new Ab);wt(this,"collidables");wt(this,"camera");this.collidables=e,this.camera=n}raycast(e,n,i){let r;return this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,r=this.raycaster.intersectObjects(this.collidables),r}lineCast(e,n,i=1,r=1,s=1){let o;o=this.raycast(e,n,i);const a=new q(0,1,0),l=Math.PI/2,c=e.clone().add(n.clone().applyAxisAngle(a,l).normalize().multiplyScalar(r)),u=e.clone().add(n.clone().applyAxisAngle(a,-l).normalize().multiplyScalar(s));return this.raycast(c,n,i).forEach(f=>{o.indexOf(f)===-1&&o.push(f)}),this.raycast(u,n,i).forEach(f=>{o.indexOf(f)===-1&&o.push(f)}),o}screenPointToWorld(e,n){if(!this.camera)return;let i=e/window.innerWidth*2-1,r=n/window.innerHeight*2-1,s=new st(i,r);this.raycaster.setFromCamera(s,this.camera),this.raycaster.far=100;const o=this.raycaster.intersectObjects(this.collidables)[0];return new q(o.point.x,o.point.y,-o.point.z)}}const uC=vn({name:"homepage-background",setup(t,{expose:e}){const n=ct(void 0),i=gm("background"),r=Eo(),s=()=>!!n.value;return Ya(()=>{!s()&&i.value&&(i.value.style.cssText=`
          background-position: center;
          background-size: cover;
          background-image: url(${Ng});
        `);const o=new p_({canvas:n.value,antialias:!0,alpha:!0});o.shadowMap.enabled=!0,o.shadowMap.type=_f,o.setClearColor(0,0);const a=new n_;let l=window.innerWidth/window.innerHeight;const c=new Pf(-5,5,5/l,-5/l,0,1e3);c.position.set(0,10,50),c.lookAt(0,0,0);const u=new o_().load(Ug);u.wrapS=Cr,u.wrapT=Cr,u.repeat.set(3,3);const f=new r_({color:16777215,map:u}),d=new s_({color:15658734}),p=new ol({transparent:!0}),_=new Ki(20,20),v=new Ot(_,d),m=new Ot(_,p),h=new Ot(_,p),S=new Ot(_,p);v.position.set(0,0,-10),v.receiveShadow=!0,m.rotation.set(0,Math.PI/2,0),m.position.set(-5,0,0),h.rotation.set(0,-Math.PI/2,0),h.position.set(5,0,0),S.rotation.set(0,Math.PI,0),S.position.set(0,0,10),v.receiveShadow=!0;const E=new Ki(20,100),x=new Ot(E,d);x.position.set(0,-1,0),x.rotation.set(-Math.PI/2,0,0),x.receiveShadow=!0;const C=new l_;C.color.set(13421772);const L=new Oa(16777215);L.power=5e4,L.penumbra=.8,L.castShadow=!0,L.shadow.intensity=.8;const A=new Oa(14540253);A.angle=.08,A.penumbra=.8,A.castShadow=!0,A.position.set(-50,50,50),A.shadow.intensity=.8,r.theme==="light"?(C.intensity=1,L.angle=.1,L.position.set(50,50,50),A.power=0):(C.intensity=0,L.angle=.03,L.position.set(-50,50,50),A.power=5e3);function U(){r.theme==="light"?(C.intensity<1&&(C.intensity+=.05),L.angle<.1&&(L.angle+=.005),L.position.lerp(new q(50,50,50),.1),A.power=0):(C.intensity>0&&(C.intensity-=.05),L.angle>.03&&(L.angle-=.005),L.position.lerp(new q(-50,50,50),.1),A.power=5e3)}const T=1,b=new al(T,32,32),F=new Ot(b,f);F.castShadow=!0,F.receiveShadow=!0;const Y=new Yt().attach(F);Y.position.set(3,0,-2),a.add(Y,x,v,m,h,S,C,L,A);const $=new g_;$.addInputListener();const ae=a.children.filter(W=>W!==Y),oe=new __(ae),Q=new m_(Y,$,oe);function K(){l=window.innerWidth/window.innerHeight,c.top=5/l,c.bottom=-5/l,c.updateProjectionMatrix(),U(),Q.applyMovement(),i.value&&o.setSize(i.value.offsetWidth,i.value.offsetHeight),o.render(a,c)}o.setAnimationLoop(K),xo(()=>{$.removeInputListener()})}),e(),{canvas:n}}}),fC={ref:"background",class:"homepage-bg"},dC={ref:"canvas"};function hC(t,e,n,i,r,s){return Be(),ze("div",fC,[fe("canvas",dC,null,512)],512)}const pC=zt(uC,[["render",hC],["__scopeId","data-v-64e8c593"]]),mC={class:"home"},gC={class:"homepage-bg"},_C={ref:"intro",class:"container show"},vC={class:"intro"},xC={class:"intro-txt"},SC=vn({__name:"homepage",setup(t){const{t:e}=Nr();return hf(),(n,i)=>(Be(),ze("div",mC,[fe("div",gC,[Ke(pC)]),fe("div",_C,[fe("div",vC,[fe("span",xC,[Ke(xh,{text:un(e)("hello"),fontSize:"md",textTransform:"cap",lineHeight:"xl",justify:"start",wrap:"wrap",whiteSpace:!0,animation:"fadeIn",duration:"1000ms",stagger:50},null,8,["text"]),Ke(xh,{text:"peter chan",fontSize:"4xl",textTransform:"uc",letterSpacing:"md",lineHeight:"md",justify:"start",wrap:"wrap",animation:"fadeIn",duration:"1000ms",stagger:100})])])],512)]))}}),yC=zt(SC,[["__scopeId","data-v-b97547ba"]]),EC={},MC={class:"project-view"},bC={class:"project"};function TC(t,e){const n=Ri("router-link");return Be(),ze("div",MC,[fe("div",bC,[Ke(n,{to:{name:"todos"}},{default:br(()=>e[0]||(e[0]=[fe("i",{class:"fi fi-rr-web-test"},null,-1),fe("span",null,"TodoList",-1)])),_:1}),Ke(n,{to:{name:"authentication"}},{default:br(()=>e[1]||(e[1]=[fe("i",{class:"fi fi-rr-user"},null,-1),fe("span",null,"Authentication",-1)])),_:1}),Ke(n,{to:{name:"test"}},{default:br(()=>e[2]||(e[2]=[fe("i",{class:"fi fi-rr-web-test"},null,-1),fe("span",null,"TEST",-1)])),_:1})])])}const wC=zt(EC,[["render",TC],["__scopeId","data-v-cd6883a7"]]),If=Qa("todos",()=>{const t=ct(JSON.parse(localStorage.getItem("todos"))||[]),e=Rt(()=>t.value.filter(a=>{const l=new Date,c=l.getDate(),u=l.getMonth(),f=l.getFullYear(),d=new Date(a.date),p=d.getDate(),_=d.getMonth(),v=d.getFullYear();return p===c&&_===u&&v===f})),n=Rt(()=>t.value.filter(a=>{const l=new Date,c=l.getDate(),u=l.getDay(),f=l.getMonth(),d=l.getFullYear(),p=c-u,_=new Date(a.date),v=_.getDate(),m=_.getMonth(),h=_.getFullYear();return 7>v-p>0&&m===f&&h===d})),i=Rt(()=>t.value.filter(a=>{const l=new Date,c=l.getMonth(),u=l.getFullYear(),f=new Date(a.date),d=f.getMonth(),p=f.getFullYear();return d===c&&p===u}));function r(a){t.value.push({id:t.value.length,task:a.task,repeat:a.repeat,periodicity:a.periodicity,days:a.days,date:a.date,done:a.done})}function s(a){t.value=t.value.filter(l=>l.id!==a)}function o(){t.value.forEach((a,l)=>{a.id=l})}return Xn([t,t.value],()=>{o(),localStorage.setItem("todos",JSON.stringify(t.value))}),{allTodos:t,todayTodos:e,weekTodos:n,monthTodos:i,addTodo:r,deleteTodo:s}}),AC={class:"todo-item-container"},RC={key:0,class:"fi fi-rr-check-circle"},CC={key:1,class:"fi fi-rr-circle"},PC={class:"todo-item"},LC={class:"todo-item-header"},IC={key:1,class:"todo-task"},DC={__name:"TodoItem",props:{todoItem:{id:Number,task:String,repeat:Boolean,periodicity:Array,days:Array,date:Date,done:Boolean}},setup(t){const e=t,n=If(),i=()=>{e.todoItem.done=!e.todoItem.done},r=ct(!1),s=()=>{r.value=!r.value};return(o,a)=>(Be(),ze("div",AC,[r.value?(Be(),ze("div",{key:0,class:"delete",onClick:a[0]||(a[0]=l=>un(n).deleteTodo(t.todoItem.id))},a[2]||(a[2]=[fe("i",{class:"fi fi-rr-minus-circle"},null,-1)]))):(Be(),ze("div",{key:1,class:"checkbox",onClick:i},[t.todoItem.done?(Be(),ze("i",RC)):(Be(),ze("i",CC))])),fe("div",PC,[fe("div",LC,[r.value?Js((Be(),ze("input",{key:0,ref:"",type:"text",placeholder:"Type your todo ...","onUpdate:modelValue":a[1]||(a[1]=l=>t.todoItem.task=l)},null,512)),[[La,t.todoItem.task]]):(Be(),ze("div",IC,Kt(t.todoItem.task),1))])]),fe("div",{class:"options",onClick:s},a[3]||(a[3]=[fe("i",{class:"fi fi-rr-menu-dots-vertical"},null,-1)]))]))}},NC=zt(DC,[["__scopeId","data-v-b0cba5e9"]]),UC={class:"todo-list"},OC={class:"todo-list-header"},FC={class:"todo-list-name"},BC={__name:"TodoList",props:{name:{type:String}},setup(t){const e=t,n=If(),i=ct([]);return Ss(()=>{switch(e.name){case"Today":i.value=n.todayTodos;break;case"This Week":i.value=n.weekTodos;break;case"This Month":i.value=n.monthTodos;break;default:i.value=n.allTodos;break}}),(r,s)=>(Be(),ze("div",UC,[fe("div",OC,[fe("div",FC,Kt(t.name),1)]),(Be(!0),ze(Ut,null,Zs(i.value,o=>(Be(),Aa(NC,{key:o,todoItem:o},null,8,["todoItem"]))),128))]))}},oa=zt(BC,[["__scopeId","data-v-eb55e2f4"]]),kC={__name:"ToggleButton",props:{isToggled:Boolean},emits:["toggle"],setup(t,{emit:e}){const n=t,i=e,r=()=>{i("toggle")},s=Rt(()=>({transform:n.isToggled?"translateX(16px)":""}));return(o,a)=>(Be(),ze("div",{class:"toggle-button",onClick:r},[Js(fe("input",{type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=l=>n.isToggled=l)},null,512),[[fx,n.isToggled]]),fe("div",{class:Dt(["slider",{toggled:t.isToggled}])},[fe("div",{class:"thumb",style:go(s.value)},null,4)],2)]))}},HC=zt(kC,[["__scopeId","data-v-cf28ee5f"]]),VC={class:"week"},zC=["onClick"],GC={__name:"TodoWeek",setup(t){const e=ct([{day:"mo",isSelected:!1},{day:"tu",isSelected:!1},{day:"we",isSelected:!1},{day:"th",isSelected:!1},{day:"fr",isSelected:!1},{day:"sa",isSelected:!1},{day:"su",isSelected:!1}]),n=i=>{i.isSelected=!i.isSelected};return(i,r)=>(Be(),ze("div",VC,[(Be(!0),ze(Ut,null,Zs(e.value,s=>(Be(),ze("div",{class:Dt(["day",{selected:s.isSelected}]),key:s,onClick:o=>n(s)},[fe("div",null,Kt(s.day),1)],10,zC))),128))]))}},WC=zt(GC,[["__scopeId","data-v-099a79e3"]]),XC={};function $C(t,e){return" month "}const qC=zt(XC,[["render",$C]]),YC={},jC={class:"todo-sublist"};function KC(t,e){return Be(),ze("div",jC," sublist ")}const JC=zt(YC,[["render",KC],["__scopeId","data-v-98083cf9"]]),ZC={class:"new-todo-details"},QC={class:"new-task"},e1={class:"new-repeat"},t1={class:"repeat-selector"},n1={class:"selector-content"},i1={__name:"NewTodo",props:{showNewTodo:Boolean},emits:["showNewTodo"],setup(t,{emit:e}){const n=t,i=["daily","weekly","monthly","select"],r=If(),s=ct({id:999,task:"",repeat:!1,periodicity:null,days:[],date:null,done:!1}),o=e,a=()=>{l.value=3,s.value.repeat=!1,o("showNewTodo",!n.showNewTodo)},l=ct(3),c=()=>{s.value.repeat=!s.value.repeat,l.value=3},u=()=>{l.value--,l.value<0&&(l.value=3)},f=()=>{l.value++,l.value>3&&(l.value=0)},d=_=>{s.value.periodicity=_};Ss(()=>{l.value===3?d(null):d(i[l.value])});const p=()=>{r.addTodo(s.value)};return(_,v)=>(Be(),ze(Ut,null,[fe("div",{class:Dt(["new-todo-background",{"active-background":t.showNewTodo}]),onClick:a},null,2),fe("div",{class:Dt(["new-todo",{"active-box":t.showNewTodo}])},[v[6]||(v[6]=fe("header",{class:"new-todo-header"},[fe("span",null,"Create New Todo")],-1)),fe("div",ZC,[fe("div",QC,[Js(fe("input",{type:"text",placeholder:"type your task here...","onUpdate:modelValue":v[0]||(v[0]=m=>s.value.task=m)},null,512),[[La,s.value.task]])]),fe("div",e1,[v[1]||(v[1]=fe("span",null,"Is repeating",-1)),Ke(HC,{class:"toggle-button",onToggle:c,isToggled:s.value.repeat},null,8,["isToggled"])]),fe("div",{class:Dt(["new-periodicity",{"active-new-periodicity":s.value.repeat}])},[v[4]||(v[4]=fe("span",null,"Repeat",-1)),fe("div",t1,[fe("div",{class:"selector-icon left",onClick:u},v[2]||(v[2]=[fe("i",{class:"fi fi-rr-angle-small-left"},null,-1)])),fe("div",n1,[(Be(),ze(Ut,null,Zs(i,m=>fe("div",{class:Dt(["selector-options",{"active-option":m===i[l.value]}]),key:m},Kt(m),3)),64))]),fe("div",{class:"selector-icon right",onClick:f},v[3]||(v[3]=[fe("i",{class:"fi fi-rr-angle-small-right"},null,-1)]))])],2),s.value.periodicity==="weekly"?(Be(),Aa(WC,{key:0})):kt("",!0),s.value.periodicity==="monthly"||s.value.periodicity==="others"?(Be(),Aa(qC,{key:1})):kt("",!0),Ke(JC)]),fe("div",{class:"todo-save",onClick:p},v[5]||(v[5]=[fe("span",null,"Save",-1)]))],2)],64))}},r1=zt(i1,[["__scopeId","data-v-8259ba07"]]),s1={class:"todo-view"},o1={class:"options"},a1={class:"todo-options"},l1={class:"todo-lists"},c1={__name:"TodoView",setup(t){const e=ct(!1),n=()=>{e.value=!e.value};return(i,r)=>(Be(),ze("div",s1,[fe("div",o1,[r[3]||(r[3]=fe("span",null,"What to do next ...",-1)),fe("div",a1,[fe("div",{class:"create-todo",onClick:n},r[1]||(r[1]=[fe("span",{class:"create-todo-span"},"Create",-1),fe("i",{class:"fi fi-rr-plus"},null,-1)])),fe("div",{class:"edit-todo",onClick:r[0]||(r[0]=()=>{})},r[2]||(r[2]=[fe("span",{class:"edit-todo-span"},"Edit",-1),fe("i",{class:"fi fi-rr-pencil"},null,-1)]))])]),fe("div",l1,[Ke(oa,{name:"All"}),Ke(oa,{name:"Today"}),Ke(oa,{name:"This Week"}),Ke(oa,{name:"This Month"})]),Ke(r1,{showNewTodo:e.value,onShowNewTodo:n},null,8,["showNewTodo"])]))}},u1=zt(c1,[["__scopeId","data-v-691f1c03"]]);function v_(t,e){return function(){return t.apply(e,arguments)}}const{toString:f1}=Object.prototype,{getPrototypeOf:Df}=Object,cl=(t=>e=>{const n=f1.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jn=t=>(t=t.toLowerCase(),e=>cl(e)===t),ul=t=>e=>typeof e===t,{isArray:bs}=Array,ho=ul("undefined");function d1(t){return t!==null&&!ho(t)&&t.constructor!==null&&!ho(t.constructor)&&bn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const x_=jn("ArrayBuffer");function h1(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&x_(t.buffer),e}const p1=ul("string"),bn=ul("function"),S_=ul("number"),fl=t=>t!==null&&typeof t=="object",m1=t=>t===!0||t===!1,va=t=>{if(cl(t)!=="object")return!1;const e=Df(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},g1=jn("Date"),_1=jn("File"),v1=jn("Blob"),x1=jn("FileList"),S1=t=>fl(t)&&bn(t.pipe),y1=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||bn(t.append)&&((e=cl(t))==="formdata"||e==="object"&&bn(t.toString)&&t.toString()==="[object FormData]"))},E1=jn("URLSearchParams"),[M1,b1,T1,w1]=["ReadableStream","Request","Response","Headers"].map(jn),A1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ro(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),bs(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function y_(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,E_=t=>!ho(t)&&t!==Er;function Lu(){const{caseless:t}=E_(this)&&this||{},e={},n=(i,r)=>{const s=t&&y_(e,r)||r;va(e[s])&&va(i)?e[s]=Lu(e[s],i):va(i)?e[s]=Lu({},i):bs(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Ro(arguments[i],n);return e}const R1=(t,e,n,{allOwnKeys:i}={})=>(Ro(e,(r,s)=>{n&&bn(r)?t[s]=v_(r,n):t[s]=r},{allOwnKeys:i}),t),C1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),P1=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},L1=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Df(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},I1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},D1=t=>{if(!t)return null;if(bs(t))return t;let e=t.length;if(!S_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},N1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Df(Uint8Array)),U1=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},O1=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},F1=jn("HTMLFormElement"),B1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),yp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),k1=jn("RegExp"),M_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ro(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},H1=t=>{M_(t,(e,n)=>{if(bn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(bn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},V1=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return bs(t)?i(t):i(String(t).split(e)),n},z1=()=>{},G1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function W1(t){return!!(t&&bn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const X1=t=>{const e=new Array(10),n=(i,r)=>{if(fl(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=bs(i)?[]:{};return Ro(i,(o,a)=>{const l=n(o,r+1);!ho(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},$1=jn("AsyncFunction"),q1=t=>t&&(fl(t)||bn(t))&&bn(t.then)&&bn(t.catch),b_=((t,e)=>t?setImmediate:e?((n,i)=>(Er.addEventListener("message",({source:r,data:s})=>{r===Er&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Er.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bn(Er.postMessage)),Y1=typeof queueMicrotask<"u"?queueMicrotask.bind(Er):typeof process<"u"&&process.nextTick||b_,ie={isArray:bs,isArrayBuffer:x_,isBuffer:d1,isFormData:y1,isArrayBufferView:h1,isString:p1,isNumber:S_,isBoolean:m1,isObject:fl,isPlainObject:va,isReadableStream:M1,isRequest:b1,isResponse:T1,isHeaders:w1,isUndefined:ho,isDate:g1,isFile:_1,isBlob:v1,isRegExp:k1,isFunction:bn,isStream:S1,isURLSearchParams:E1,isTypedArray:N1,isFileList:x1,forEach:Ro,merge:Lu,extend:R1,trim:A1,stripBOM:C1,inherits:P1,toFlatObject:L1,kindOf:cl,kindOfTest:jn,endsWith:I1,toArray:D1,forEachEntry:U1,matchAll:O1,isHTMLForm:F1,hasOwnProperty:yp,hasOwnProp:yp,reduceDescriptors:M_,freezeMethods:H1,toObjectSet:V1,toCamelCase:B1,noop:z1,toFiniteNumber:G1,findKey:y_,global:Er,isContextDefined:E_,isSpecCompliantForm:W1,toJSONObject:X1,isAsyncFn:$1,isThenable:q1,setImmediate:b_,asap:Y1};function Je(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}ie.inherits(Je,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.status}}});const T_=Je.prototype,w_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{w_[t]={value:t}});Object.defineProperties(Je,w_);Object.defineProperty(T_,"isAxiosError",{value:!0});Je.from=(t,e,n,i,r,s)=>{const o=Object.create(T_);return ie.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Je.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const j1=null;function Iu(t){return ie.isPlainObject(t)||ie.isArray(t)}function A_(t){return ie.endsWith(t,"[]")?t.slice(0,-2):t}function Ep(t,e,n){return t?t.concat(e).map(function(r,s){return r=A_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function K1(t){return ie.isArray(t)&&!t.some(Iu)}const J1=ie.toFlatObject(ie,{},null,function(e){return/^is[A-Z]/.test(e)});function dl(t,e,n){if(!ie.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=ie.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!ie.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&ie.isSpecCompliantForm(e);if(!ie.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(ie.isDate(_))return _.toISOString();if(!l&&ie.isBlob(_))throw new Je("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(_)||ie.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,m){let h=_;if(_&&!m&&typeof _=="object"){if(ie.endsWith(v,"{}"))v=i?v:v.slice(0,-2),_=JSON.stringify(_);else if(ie.isArray(_)&&K1(_)||(ie.isFileList(_)||ie.endsWith(v,"[]"))&&(h=ie.toArray(_)))return v=A_(v),h.forEach(function(E,x){!(ie.isUndefined(E)||E===null)&&e.append(o===!0?Ep([v],x,s):o===null?v:v+"[]",c(E))}),!1}return Iu(_)?!0:(e.append(Ep(m,v,s),c(_)),!1)}const f=[],d=Object.assign(J1,{defaultVisitor:u,convertValue:c,isVisitable:Iu});function p(_,v){if(!ie.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),ie.forEach(_,function(h,S){(!(ie.isUndefined(h)||h===null)&&r.call(e,h,ie.isString(S)?S.trim():S,v,d))===!0&&p(h,v?v.concat(S):[S])}),f.pop()}}if(!ie.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Mp(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Nf(t,e){this._pairs=[],t&&dl(t,this,e)}const R_=Nf.prototype;R_.append=function(e,n){this._pairs.push([e,n])};R_.toString=function(e){const n=e?function(i){return e.call(this,i,Mp)}:Mp;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Z1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function C_(t,e,n){if(!e)return t;const i=n&&n.encode||Z1;ie.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=ie.isURLSearchParams(e)?e.toString():new Nf(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class bp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ie.forEach(this.handlers,function(i){i!==null&&e(i)})}}const P_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Q1=typeof URLSearchParams<"u"?URLSearchParams:Nf,eP=typeof FormData<"u"?FormData:null,tP=typeof Blob<"u"?Blob:null,nP={isBrowser:!0,classes:{URLSearchParams:Q1,FormData:eP,Blob:tP},protocols:["http","https","file","blob","url","data"]},Uf=typeof window<"u"&&typeof document<"u",Du=typeof navigator=="object"&&navigator||void 0,iP=Uf&&(!Du||["ReactNative","NativeScript","NS"].indexOf(Du.product)<0),rP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sP=Uf&&window.location.href||"http://localhost",oP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uf,hasStandardBrowserEnv:iP,hasStandardBrowserWebWorkerEnv:rP,navigator:Du,origin:sP},Symbol.toStringTag,{value:"Module"})),tn={...oP,...nP};function aP(t,e){return dl(t,new tn.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return tn.isNode&&ie.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function lP(t){return ie.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function cP(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function L_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&ie.isArray(r)?r.length:o,l?(ie.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!ie.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&ie.isArray(r[o])&&(r[o]=cP(r[o])),!a)}if(ie.isFormData(t)&&ie.isFunction(t.entries)){const n={};return ie.forEachEntry(t,(i,r)=>{e(lP(i),r,n,0)}),n}return null}function uP(t,e,n){if(ie.isString(t))try{return(e||JSON.parse)(t),ie.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Co={transitional:P_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=ie.isObject(e);if(s&&ie.isHTMLForm(e)&&(e=new FormData(e)),ie.isFormData(e))return r?JSON.stringify(L_(e)):e;if(ie.isArrayBuffer(e)||ie.isBuffer(e)||ie.isStream(e)||ie.isFile(e)||ie.isBlob(e)||ie.isReadableStream(e))return e;if(ie.isArrayBufferView(e))return e.buffer;if(ie.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return aP(e,this.formSerializer).toString();if((a=ie.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return dl(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),uP(e)):e}],transformResponse:[function(e){const n=this.transitional||Co.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(ie.isResponse(e)||ie.isReadableStream(e))return e;if(e&&ie.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Je.from(a,Je.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:tn.classes.FormData,Blob:tn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ie.forEach(["delete","get","head","post","put","patch"],t=>{Co.headers[t]={}});const fP=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dP=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&fP[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Tp=Symbol("internals");function Os(t){return t&&String(t).trim().toLowerCase()}function xa(t){return t===!1||t==null?t:ie.isArray(t)?t.map(xa):String(t)}function hP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const pP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function hc(t,e,n,i,r){if(ie.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!ie.isString(e)){if(ie.isString(i))return e.indexOf(i)!==-1;if(ie.isRegExp(i))return i.test(e)}}function mP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function gP(t,e){const n=ie.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let gn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Os(l);if(!u)throw new Error("header name must be a non-empty string");const f=ie.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=xa(a))}const o=(a,l)=>ie.forEach(a,(c,u)=>s(c,u,l));if(ie.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(ie.isString(e)&&(e=e.trim())&&!pP(e))o(dP(e),n);else if(ie.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=Os(e),e){const i=ie.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return hP(r);if(ie.isFunction(n))return n.call(this,r,i);if(ie.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Os(e),e){const i=ie.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||hc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Os(o),o){const a=ie.findKey(i,o);a&&(!n||hc(i,i[a],a,n))&&(delete i[a],r=!0)}}return ie.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||hc(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return ie.forEach(this,(r,s)=>{const o=ie.findKey(i,s);if(o){n[o]=xa(r),delete n[s];return}const a=e?mP(s):String(s).trim();a!==s&&delete n[s],n[a]=xa(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return ie.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&ie.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Tp]=this[Tp]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Os(o);i[a]||(gP(r,o),i[a]=!0)}return ie.isArray(e)?e.forEach(s):s(e),this}};gn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ie.reduceDescriptors(gn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});ie.freezeMethods(gn);function pc(t,e){const n=this||Co,i=e||n,r=gn.from(i.headers);let s=i.data;return ie.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function I_(t){return!!(t&&t.__CANCEL__)}function Ts(t,e,n){Je.call(this,t??"canceled",Je.ERR_CANCELED,e,n),this.name="CanceledError"}ie.inherits(Ts,Je,{__CANCEL__:!0});function D_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Je("Request failed with status code "+n.status,[Je.ERR_BAD_REQUEST,Je.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function _P(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function vP(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function xP(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Fa=(t,e,n=3)=>{let i=0;const r=vP(50,250);return xP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},wp=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Ap=t=>(...e)=>ie.asap(()=>t(...e)),SP=tn.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,tn.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(tn.origin),tn.navigator&&/(msie|trident)/i.test(tn.navigator.userAgent)):()=>!0,yP=tn.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];ie.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ie.isString(i)&&o.push("path="+i),ie.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function EP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function MP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function N_(t,e,n){let i=!EP(e);return t&&i||n==!1?MP(t,e):e}const Rp=t=>t instanceof gn?{...t}:t;function Ir(t,e){e=e||{};const n={};function i(c,u,f,d){return ie.isPlainObject(c)&&ie.isPlainObject(u)?ie.merge.call({caseless:d},c,u):ie.isPlainObject(u)?ie.merge({},u):ie.isArray(u)?u.slice():u}function r(c,u,f,d){if(ie.isUndefined(u)){if(!ie.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!ie.isUndefined(u))return i(void 0,u)}function o(c,u){if(ie.isUndefined(u)){if(!ie.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Rp(c),Rp(u),f,!0)};return ie.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);ie.isUndefined(d)&&f!==a||(n[u]=d)}),n}const U_=t=>{const e=Ir({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=gn.from(o),e.url=C_(N_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(ie.isFormData(n)){if(tn.hasStandardBrowserEnv||tn.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(tn.hasStandardBrowserEnv&&(i&&ie.isFunction(i)&&(i=i(e)),i||i!==!1&&SP(e.url))){const c=r&&s&&yP.read(s);c&&o.set(r,c)}return e},bP=typeof XMLHttpRequest<"u",TP=bP&&function(t){return new Promise(function(n,i){const r=U_(t);let s=r.data;const o=gn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,_;function v(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const E=gn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};D_(function(A){n(A),v()},function(A){i(A),v()},C),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Je("Request aborted",Je.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new Je("Network Error",Je.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const C=r.transitional||P_;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),i(new Je(x,C.clarifyTimeoutError?Je.ETIMEDOUT:Je.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&ie.forEach(o.toJSON(),function(x,C){m.setRequestHeader(C,x)}),ie.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,_]=Fa(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Fa(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=E=>{m&&(i(!E||E.type?new Ts(null,t,m):E),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const S=_P(r.url);if(S&&tn.protocols.indexOf(S)===-1){i(new Je("Unsupported protocol "+S+":",Je.ERR_BAD_REQUEST,t));return}m.send(s||null)})},wP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Je?u:new Ts(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Je(`timeout ${e} of ms exceeded`,Je.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>ie.asap(a),l}},AP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},RP=async function*(t,e){for await(const n of CP(t))yield*AP(n,e)},CP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Cp=(t,e,n,i)=>{const r=RP(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},hl=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",O_=hl&&typeof ReadableStream=="function",PP=hl&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),F_=(t,...e)=>{try{return!!t(...e)}catch{return!1}},LP=O_&&F_(()=>{let t=!1;const e=new Request(tn.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Pp=64*1024,Nu=O_&&F_(()=>ie.isReadableStream(new Response("").body)),Ba={stream:Nu&&(t=>t.body)};hl&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Ba[e]&&(Ba[e]=ie.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Je(`Response type '${e}' is not supported`,Je.ERR_NOT_SUPPORT,i)})})})(new Response);const IP=async t=>{if(t==null)return 0;if(ie.isBlob(t))return t.size;if(ie.isSpecCompliantForm(t))return(await new Request(tn.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(ie.isArrayBufferView(t)||ie.isArrayBuffer(t))return t.byteLength;if(ie.isURLSearchParams(t)&&(t=t+""),ie.isString(t))return(await PP(t)).byteLength},DP=async(t,e)=>{const n=ie.toFiniteNumber(t.getContentLength());return n??IP(e)},NP=hl&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=U_(t);c=c?(c+"").toLowerCase():"text";let p=wP([r,s&&s.toAbortSignal()],o),_;const v=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&LP&&n!=="get"&&n!=="head"&&(m=await DP(u,i))!==0){let C=new Request(e,{method:"POST",body:i,duplex:"half"}),L;if(ie.isFormData(i)&&(L=C.headers.get("content-type"))&&u.setContentType(L),C.body){const[A,U]=wp(m,Fa(Ap(l)));i=Cp(C.body,Pp,A,U)}}ie.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;_=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:h?f:void 0});let S=await fetch(_);const E=Nu&&(c==="stream"||c==="response");if(Nu&&(a||E&&v)){const C={};["status","statusText","headers"].forEach(T=>{C[T]=S[T]});const L=ie.toFiniteNumber(S.headers.get("content-length")),[A,U]=a&&wp(L,Fa(Ap(a),!0))||[];S=new Response(Cp(S.body,Pp,A,()=>{U&&U(),v&&v()}),C)}c=c||"text";let x=await Ba[ie.findKey(Ba,c)||"text"](S,t);return!E&&v&&v(),await new Promise((C,L)=>{D_(C,L,{data:x,headers:gn.from(S.headers),status:S.status,statusText:S.statusText,config:t,request:_})})}catch(h){throw v&&v(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new Je("Network Error",Je.ERR_NETWORK,t,_),{cause:h.cause||h}):Je.from(h,h&&h.code,t,_)}}),Uu={http:j1,xhr:TP,fetch:NP};ie.forEach(Uu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Lp=t=>`- ${t}`,UP=t=>ie.isFunction(t)||t===null||t===!1,B_={getAdapter:t=>{t=ie.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!UP(n)&&(i=Uu[(o=String(n)).toLowerCase()],i===void 0))throw new Je(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Lp).join(`
`):" "+Lp(s[0]):"as no adapter specified";throw new Je("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Uu};function mc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ts(null,t)}function Ip(t){return mc(t),t.headers=gn.from(t.headers),t.data=pc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),B_.getAdapter(t.adapter||Co.adapter)(t).then(function(i){return mc(t),i.data=pc.call(t,t.transformResponse,i),i.headers=gn.from(i.headers),i},function(i){return I_(i)||(mc(t),i&&i.response&&(i.response.data=pc.call(t,t.transformResponse,i.response),i.response.headers=gn.from(i.response.headers))),Promise.reject(i)})}const k_="1.8.3",pl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{pl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Dp={};pl.transitional=function(e,n,i){function r(s,o){return"[Axios v"+k_+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Je(r(o," has been removed"+(n?" in "+n:"")),Je.ERR_DEPRECATED);return n&&!Dp[o]&&(Dp[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};pl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function OP(t,e,n){if(typeof t!="object")throw new Je("options must be an object",Je.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Je("option "+s+" must be "+l,Je.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Je("Unknown option "+s,Je.ERR_BAD_OPTION)}}const Sa={assertOptions:OP,validators:pl},Zn=Sa.validators;let wr=class{constructor(e){this.defaults=e,this.interceptors={request:new bp,response:new bp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ir(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Sa.assertOptions(i,{silentJSONParsing:Zn.transitional(Zn.boolean),forcedJSONParsing:Zn.transitional(Zn.boolean),clarifyTimeoutError:Zn.transitional(Zn.boolean)},!1),r!=null&&(ie.isFunction(r)?n.paramsSerializer={serialize:r}:Sa.assertOptions(r,{encode:Zn.function,serialize:Zn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Sa.assertOptions(n,{baseUrl:Zn.spelling("baseURL"),withXsrfToken:Zn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&ie.merge(s.common,s[n.method]);s&&ie.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=gn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const _=[Ip.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let p=n;for(f=0;f<d;){const _=a[f++],v=a[f++];try{p=_(p)}catch(m){v.call(this,m);break}}try{u=Ip.call(this,p)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Ir(this.defaults,e);const n=N_(e.baseURL,e.url,e.allowAbsoluteUrls);return C_(n,e.params,e.paramsSerializer)}};ie.forEach(["delete","get","head","options"],function(e){wr.prototype[e]=function(n,i){return this.request(Ir(i||{},{method:e,url:n,data:(i||{}).data}))}});ie.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ir(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}wr.prototype[e]=n(),wr.prototype[e+"Form"]=n(!0)});let FP=class H_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Ts(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new H_(function(r){e=r}),cancel:e}}};function BP(t){return function(n){return t.apply(null,n)}}function kP(t){return ie.isObject(t)&&t.isAxiosError===!0}const Ou={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ou).forEach(([t,e])=>{Ou[e]=t});function V_(t){const e=new wr(t),n=v_(wr.prototype.request,e);return ie.extend(n,wr.prototype,e,{allOwnKeys:!0}),ie.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return V_(Ir(t,r))},n}const Ft=V_(Co);Ft.Axios=wr;Ft.CanceledError=Ts;Ft.CancelToken=FP;Ft.isCancel=I_;Ft.VERSION=k_;Ft.toFormData=dl;Ft.AxiosError=Je;Ft.Cancel=Ft.CanceledError;Ft.all=function(e){return Promise.all(e)};Ft.spread=BP;Ft.isAxiosError=kP;Ft.mergeConfig=Ir;Ft.AxiosHeaders=gn;Ft.formToJSON=t=>L_(ie.isHTMLForm(t)?new FormData(t):t);Ft.getAdapter=B_.getAdapter;Ft.HttpStatusCode=Ou;Ft.default=Ft;const{Axios:xL,AxiosError:SL,CanceledError:yL,isCancel:EL,CancelToken:ML,VERSION:bL,all:TL,Cancel:wL,isAxiosError:AL,spread:RL,toFormData:CL,AxiosHeaders:PL,HttpStatusCode:LL,formToJSON:IL,getAdapter:DL,mergeConfig:NL}=Ft,Np=()=>Ft.create({baseURL:"https://dummyjson.com/auth/",timeout:1e3}),Up={getUserFromLogin(t){return Np().post("/login",t,{headers:{"Content-Type":"application/json"}})},getCurrentAuthByToken(t){return Np().get("/me",{headers:{Authorization:`Bearer ${t}`}})}},Of=Qa("user",()=>{const t=ct(null),e=ct(null),n=ct(null),i=ct(null);async function r(a,l){try{const c=await Up.getUserFromLogin({username:a,password:l,expiresponseInMins:1});e.value=c.data.accessToken,po.push(po.currentRoute.value.query.redirect||{name:"authentication"})}catch{n.value="Login failed"}}async function s(){try{const a=await Up.getCurrentAuthByToken(e.value);return t.value=a.data,!0}catch(a){return i.value=a.status,!1}}function o(){t.value=null,e.value=null}return{user:t,accessToken:e,loginErr:n,authErr:i,handleLogin:r,handleAuth:s,$reset:o}}),HP={class:"auth-view"},VP={class:"auth"},zP={class:"auth-details"},GP={key:0},WP={key:1},XP={key:2},$P={key:3},qP={key:4},YP={key:0},jP={key:5},KP={class:"auth-button"},JP={class:"auth-button"},gc=3e3,ZP={__name:"AuthView",setup(t){const e=Of(),n=ct(!1),i=ct(!1),r=ct(!1),s=ct(!1),o=ct(!1),a=ct(null),l=ct(null);xm(async()=>{await e.handleAuth()});const c=async()=>{n.value=!0,s.value=!1,r.value=!1,i.value=await e.handleAuth(),n.value=!1,i.value?(a.value&&clearTimeout(a.value),r.value=!0,a.value=setTimeout(()=>{r.value=!1},gc)):(a.value&&clearTimeout(a.value),s.value=!0,a.value=setTimeout(()=>{s.value=!1},gc))},u=()=>{o.value=!1,e.user&&(l.value&&clearTimeout(l.value),o.value=!0,l.value=setTimeout(()=>{o.value=!1},gc))};return(f,d)=>{const p=Ri("router-link");return Be(),ze("div",HP,[fe("div",VP,[fe("div",zP,[un(e).user?(Be(),ze("span",GP,[Cn(" Username: "+Kt(un(e).user.username)+" ",1),d[0]||(d[0]=fe("br",null,null,-1)),Cn(" Email: "+Kt(un(e).user.email)+" ",1),d[1]||(d[1]=fe("br",null,null,-1))])):(Be(),ze("span",WP,"You are not login")),n.value?(Be(),ze("span",XP,d[2]||(d[2]=[Cn(" Authenticating"),fe("br",null,null,-1)]))):kt("",!0),r.value?(Be(),ze("span",$P,d[3]||(d[3]=[Cn(" Authentication success"),fe("br",null,null,-1)]))):kt("",!0),s.value?(Be(),ze("span",qP,[d[4]||(d[4]=Cn(" Authentication failed ")),d[5]||(d[5]=fe("br",null,null,-1)),Cn(" Status Code: "+Kt(un(e).authErr)+" ",1),d[6]||(d[6]=fe("br",null,null,-1)),un(e).user?(Be(),ze("span",YP,"Session expired")):kt("",!0)])):kt("",!0),o.value?(Be(),ze("span",jP,d[7]||(d[7]=[Cn(" You are login"),fe("br",null,null,-1)]))):kt("",!0)]),fe("div",KP,[Ke(p,{to:{name:"login"},onClick:u},{default:br(()=>d[8]||(d[8]=[fe("i",{class:"fi fi-rr-sign-out-alt"},null,-1),fe("span",null,"Login",-1)])),_:1}),d[9]||(d[9]=fe("span",null,"Direct to login page if you are not login",-1))]),fe("div",JP,[Ke(p,{to:{name:"auth-content"}},{default:br(()=>d[10]||(d[10]=[fe("i",{class:"fi fi-rr-user-key"},null,-1),fe("span",null,[Cn("Can only"),fe("br"),Cn("access after login")],-1)])),_:1}),d[11]||(d[11]=fe("span",null,[Cn("Direct to content page if you are login "),fe("br"),Cn(" else will direct you to login page")],-1))]),fe("div",{class:"auth-button"},[fe("button",{onClick:c},d[12]||(d[12]=[fe("i",{class:"fi fi-rr-unlock"},null,-1),fe("span",null,"Authenticate",-1)])),d[13]||(d[13]=fe("span",null,"Check for authentication",-1))])])])}}},QP=zt(ZP,[["__scopeId","data-v-f43d9a2c"]]),eL={class:"login"},tL={key:0},nL={__name:"LoginView",setup(t){const e=ct("emilys"),n=ct("emilyspass"),i=Of(),r=async()=>{await i.handleLogin(e.value,n.value)};return(s,o)=>(Be(),ze("div",eL,[o[6]||(o[6]=fe("h1",null,"Login",-1)),fe("div",null,[o[2]||(o[2]=fe("span",null,"Username: ",-1)),Js(fe("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,512),[[La,e.value]]),o[3]||(o[3]=fe("br",null,null,-1)),o[4]||(o[4]=fe("span",null,"Password: ",-1)),Js(fe("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,512),[[La,n.value]]),o[5]||(o[5]=fe("br",null,null,-1)),fe("button",{onClick:r},"Login")]),un(i).loginErr?(Be(),ze("p",tL,Kt(un(i).loginErr),1)):kt("",!0)]))}},iL=zt(nL,[["__scopeId","data-v-f9f208d3"]]),rL={class:"auth-content"},sL={__name:"AuthContentView",setup(t){const e=()=>{po.push({name:"authentication"})};return(n,i)=>(Be(),ze("div",rL,[i[0]||(i[0]=fe("span",null,"You have successfully login",-1)),fe("button",{onClick:e},"Back to Authentication Page")]))}},oL=zt(sL,[["__scopeId","data-v-8f997543"]]),aL=vn({name:"homepage-background",setup(t,{expose:e}){const n=ct(void 0),i=gm("background"),r=Eo(),s=()=>!!n.value,o=ct(),a=ct(),l=ct();return Ya(()=>{!s()&&i.value&&(i.value.style.cssText=`
          background-position: center;
          background-size: cover;
          background-image: url(${Ng});
        `);const c=new p_({canvas:n.value,antialias:!0,alpha:!0});c.shadowMap.enabled=!0,c.shadowMap.type=_f,c.setClearColor(0,0);const u=new n_;let f=window.innerWidth/window.innerHeight;const d=new Pf(-5,5,5/f,-5/f,0,1e3);d.position.set(0,10,50),d.lookAt(0,0,0);const p=new o_().load(Ug);p.wrapS=Cr,p.wrapT=Cr,p.repeat.set(3,3);const _=new r_({color:16777215,map:p}),v=new s_({color:15658734}),m=new ol({transparent:!0}),h=new Ki(20,20),S=new Ot(h,v),E=new Ot(h,m),x=new Ot(h,m),C=new Ot(h,m);S.position.set(0,0,-10),S.receiveShadow=!0,E.rotation.set(0,Math.PI/2,0),E.position.set(-5,0,0),x.rotation.set(0,-Math.PI/2,0),x.position.set(5,0,0),C.rotation.set(0,Math.PI,0),C.position.set(0,0,10),S.receiveShadow=!0;const L=new Ki(20,100),A=new Ot(L,v);A.position.set(0,-1,0),A.rotation.set(-Math.PI/2,0,0),A.receiveShadow=!0;const U=new l_;U.color.set(13421772);const T=new Oa(16777215);T.power=5e4,T.penumbra=.8,T.castShadow=!0,T.shadow.intensity=.8;const b=new Oa(14540253);b.angle=.08,b.penumbra=.8,b.castShadow=!0,b.position.set(-50,50,50),b.shadow.intensity=.8,r.theme==="light"?(U.intensity=1,T.angle=.1,T.position.set(50,50,50),b.power=0):(U.intensity=0,T.angle=.03,T.position.set(-50,50,50),b.power=5e3);function F(){r.theme==="light"?(U.intensity<1&&(U.intensity+=.05),T.angle<.1&&(T.angle+=.005),T.position.lerp(new q(50,50,50),.1),b.power=0):(U.intensity>0&&(U.intensity-=.05),T.angle>.03&&(T.angle-=.005),T.position.lerp(new q(-50,50,50),.1),b.power=5e3)}const Y=1,$=new al(Y,32,32),ae=new Ot($,_);ae.castShadow=!0,ae.receiveShadow=!0;const oe=new Yt().attach(ae);oe.position.set(3,0,-2),u.add(oe,A,S,E,x,C,U,T,b);const Q=u.children.filter(Re=>Re!==oe),K=new __(Q,d),W=new g_(K);W.addInputListener();const he=new m_(oe,W,K);function Se(){f=window.innerWidth/window.innerHeight,d.top=5/f,d.bottom=-5/f,d.updateProjectionMatrix(),F(),W.handleMovementVector(oe.position),he.applyMovement(),i.value&&c.setSize(i.value.offsetWidth,i.value.offsetHeight),c.render(u,d),o.value=he.getForce(),a.value=he.getDrag(),l.value=he.getVelocity()}Xn([o,a,l],()=>{}),c.setAnimationLoop(Se),xo(()=>{W.removeInputListener()})}),e(),{canvas:n,force:o,drag:a,velocity:l}}}),lL={ref:"background",class:"homepage-bg"},cL={ref:"canvas"},uL={class:"properties"};function fL(t,e,n,i,r,s){return Be(),ze(Ut,null,[fe("div",lL,[fe("canvas",cL,null,512)],512),fe("span",uL,[fe("span",null,"force: "+Kt(t.force),1),fe("span",null,"drag: "+Kt(t.drag),1),fe("span",null,"velocity: "+Kt(t.velocity),1)])],64)}const dL=zt(aL,[["render",fL],["__scopeId","data-v-561d1dad"]]),z_=[{path:"/",name:"home",component:yC},{path:"/my-practice",name:"my practices",component:wC},{path:"/todos",name:"todos",component:u1},{path:"/authentication",name:"authentication",component:QP},{path:"/login",name:"login",component:iL,meta:{requiresGuest:!0}},{path:"/auth-content",name:"auth-content",component:oL,meta:{requiresAuth:!0}},{path:"/test",name:"test",component:dL}],po=JE({history:wE("/my-site/"),scrollBehavior(t,e,n){return{top:0}},routes:z_});po.beforeEach(async(t,e,n)=>{const i=Of(),r=sessionStorage.redirect;r?(z_.forEach(s=>{r===s.path&&(sessionStorage.removeItem("redirect"),n(r))}),n()):t.meta.requiresAuth?n(await i.handleAuth()||{name:"login",query:{redirect:t.fullPath}}):t.meta.requiresGuest&&await i.handleAuth()?n({name:"authentication"}):n()});const _c={messages:{hello:"hello, i am",home:"home",work:"work",intro:"introduction",about_me:"about me",about_me_details:"Hi, I’m Peter Chan, a recent Physics graduate from HKUST. I’m passionate about coding and have experience in Python, C#, and Vue.js. I enjoy building projects and learning new technologies.",exp:"experience",resume:"get my resume",use:"use",or:"or",control:"to control the ball"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},vc={messages:{hello:"你好, 我是",home:"主頁",work:"經驗",intro:"介紹",about_me:"關於我",about_me_details:"嗨！我係PeterChan，香港科技大學物理學系2024屆畢業生，喜歡編程和學習新知識，有Python、C#、Vue.js等等的使用經驗。",exp:"經驗",resume:"我的簡歷",use:"用",or:"或",control:"來控制畫面中的球"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},hL={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":_c.messages,"zh-TW":vc.messages},datetimeFormats:{"en-US":_c.dateTimeFormats,"zh-TW":vc.dateTimeFormats},numberFormats:{"en-US":_c.numberFormats,"zh-TW":vc.numberFormats}},pL=Ty(hL),mL=Cx(),ml=mx(jy);ml.use(po);ml.use(pL);ml.use(mL);ml.mount("#app");
