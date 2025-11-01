(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const _t={},is=[],ni=()=>{},jp=()=>!1,Va=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nu=t=>t.startsWith("onUpdate:"),Qt=Object.assign,Ou=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f0=Object.prototype.hasOwnProperty,ht=(t,e)=>f0.call(t,e),Xe=Array.isArray,rs=t=>Ga(t)==="[object Map]",Yp=t=>Ga(t)==="[object Set]",qe=t=>typeof t=="function",Lt=t=>typeof t=="string",Zi=t=>typeof t=="symbol",Tt=t=>t!==null&&typeof t=="object",Kp=t=>(Tt(t)||qe(t))&&qe(t.then)&&qe(t.catch),Zp=Object.prototype.toString,Ga=t=>Zp.call(t),h0=t=>Ga(t).slice(8,-1),Jp=t=>Ga(t)==="[object Object]",Fu=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$s=Uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wa=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},d0=/-\w/g,Cn=Wa(t=>t.replace(d0,e=>e.slice(1).toUpperCase())),p0=/\B([A-Z])/g,Pr=Wa(t=>t.replace(p0,"-$1").toLowerCase()),Xa=Wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),ml=Wa(t=>t?`on${Xa(t)}`:""),zi=(t,e)=>!Object.is(t,e),da=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},_c=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $f;const $a=()=>$f||($f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bu(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Lt(i)?v0(i):Bu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(t)||Tt(t))return t}const m0=/;(?![^(]*\))/g,g0=/:([^]+)/,_0=/\/\*[^]*?\*\//g;function v0(t){const e={};return t.replace(_0,"").split(m0).forEach(n=>{if(n){const i=n.split(g0);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xi(t){let e="";if(Lt(t))e=t;else if(Xe(t))for(let n=0;n<t.length;n++){const i=Xi(t[n]);i&&(e+=i+" ")}else if(Tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const x0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S0=Uu(x0);function em(t){return!!t||t===""}const tm=t=>!!(t&&t.__v_isRef===!0),Qn=t=>Lt(t)?t:t==null?"":Xe(t)||Tt(t)&&(t.toString===Zp||!qe(t.toString))?tm(t)?Qn(t.value):JSON.stringify(t,nm,2):String(t),nm=(t,e)=>tm(e)?nm(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[gl(i,s)+" =>"]=r,n),{})}:Yp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gl(n))}:Zi(e)?gl(e):Tt(e)&&!Xe(e)&&!Jp(e)?String(e):e,gl=(t,e="")=>{var n;return Zi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class im{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=jt;try{return jt=this,e()}finally{jt=n}}}on(){++this._on===1&&(this.prevScope=jt,jt=this)}off(){this._on>0&&--this._on===0&&(jt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ku(t){return new im(t)}function rm(){return jt}function y0(t,e=!1){jt&&jt.cleanups.push(t)}let Et;const _l=new WeakSet;class sm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,jt&&jt.active&&jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,_l.has(this)&&(_l.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||am(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qf(this),lm(this);const e=Et,n=Bn;Et=this,Bn=!0;try{return this.fn()}finally{cm(this),Et=e,Bn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vu(e);this.deps=this.depsTail=void 0,qf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?_l.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vc(this)&&this.run()}get dirty(){return vc(this)}}let om=0,qs,js;function am(t,e=!1){if(t.flags|=8,e){t.next=js,js=t;return}t.next=qs,qs=t}function Hu(){om++}function zu(){if(--om>0)return;if(js){let e=js;for(js=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function lm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cm(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Vu(i),E0(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function vc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(um(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function um(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ro)||(t.globalVersion=ro,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vc(t))))return;t.flags|=2;const e=t.dep,n=Et,i=Bn;Et=t,Bn=!0;try{lm(t);const r=t.fn(t._value);(e.version===0||zi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=n,Bn=i,cm(t),t.flags&=-3}}function Vu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Vu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function E0(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Bn=!0;const fm=[];function wi(){fm.push(Bn),Bn=!1}function Ai(){const t=fm.pop();Bn=t===void 0?!0:t}function qf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Et;Et=void 0;try{e()}finally{Et=n}}}let ro=0;class M0{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Bn||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new M0(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,hm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(e){this.version++,ro++,this.notify(e)}notify(e){Hu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zu()}}}function hm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Aa=new WeakMap,Er=Symbol(""),xc=Symbol(""),so=Symbol("");function Yt(t,e,n){if(Bn&&Et){let i=Aa.get(t);i||Aa.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Gu),r.map=i,r.key=n),r.track()}}function vi(t,e,n,i,r,s){const o=Aa.get(t);if(!o){ro++;return}const a=l=>{l&&l.trigger()};if(Hu(),e==="clear")o.forEach(a);else{const l=Xe(t),c=l&&Fu(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===so||!Zi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(so)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Er)),rs(t)&&a(o.get(xc)));break;case"delete":l||(a(o.get(Er)),rs(t)&&a(o.get(xc)));break;case"set":rs(t)&&a(o.get(Er));break}}zu()}function b0(t,e){const n=Aa.get(t);return n&&n.get(e)}function Dr(t){const e=st(t);return e===t?e:(Yt(e,"iterate",so),An(t)?e:e.map(Gt))}function qa(t){return Yt(t=st(t),"iterate",so),t}const T0={__proto__:null,[Symbol.iterator](){return vl(this,Symbol.iterator,Gt)},concat(...t){return Dr(this).concat(...t.map(e=>Xe(e)?Dr(e):e))},entries(){return vl(this,"entries",t=>(t[1]=Gt(t[1]),t))},every(t,e){return li(this,"every",t,e,void 0,arguments)},filter(t,e){return li(this,"filter",t,e,n=>n.map(Gt),arguments)},find(t,e){return li(this,"find",t,e,Gt,arguments)},findIndex(t,e){return li(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return li(this,"findLast",t,e,Gt,arguments)},findLastIndex(t,e){return li(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return li(this,"forEach",t,e,void 0,arguments)},includes(...t){return xl(this,"includes",t)},indexOf(...t){return xl(this,"indexOf",t)},join(t){return Dr(this).join(t)},lastIndexOf(...t){return xl(this,"lastIndexOf",t)},map(t,e){return li(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return jf(this,"reduce",t,e)},reduceRight(t,...e){return jf(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return li(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Dr(this).toReversed()},toSorted(t){return Dr(this).toSorted(t)},toSpliced(...t){return Dr(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return vl(this,"values",Gt)}};function vl(t,e,n){const i=qa(t),r=i[e]();return i!==t&&!An(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const w0=Array.prototype;function li(t,e,n,i,r,s){const o=qa(t),a=o!==t&&!An(t),l=o[e];if(l!==w0[e]){const f=l.apply(t,s);return a?Gt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Gt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function jf(t,e,n,i){const r=qa(t);let s=n;return r!==t&&(An(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Gt(a),l,t)}),r[e](s,...i)}function xl(t,e,n){const i=st(t);Yt(i,"iterate",so);const r=i[e](...n);return(r===-1||r===!1)&&$u(n[0])?(n[0]=st(n[0]),i[e](...n)):r}function Ls(t,e,n=[]){wi(),Hu();const i=st(t)[e].apply(t,n);return zu(),Ai(),i}const A0=Uu("__proto__,__v_isRef,__isVue"),dm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zi));function R0(t){Zi(t)||(t=String(t));const e=st(this);return Yt(e,"has",t),e.hasOwnProperty(t)}class pm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?B0:vm:s?_m:gm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Xe(e);if(!r){let l;if(o&&(l=T0[n]))return l;if(n==="hasOwnProperty")return R0}const a=Reflect.get(e,n,Pt(e)?e:i);if((Zi(n)?dm.has(n):A0(n))||(r||Yt(e,"get",n),s))return a;if(Pt(a)){const l=o&&Fu(n)?a:a.value;return r&&Tt(l)?yc(l):l}return Tt(a)?r?yc(a):Mo(a):a}}class mm extends pm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=$i(s);if(!An(i)&&!$i(i)&&(s=st(s),i=st(i)),!Xe(e)&&Pt(s)&&!Pt(i))return l||(s.value=i),!0}const o=Xe(e)&&Fu(n)?Number(n)<e.length:ht(e,n),a=Reflect.set(e,n,i,Pt(e)?e:r);return e===st(r)&&(o?zi(i,s)&&vi(e,"set",n,i):vi(e,"add",n,i)),a}deleteProperty(e,n){const i=ht(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&vi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Zi(n)||!dm.has(n))&&Yt(e,"has",n),i}ownKeys(e){return Yt(e,"iterate",Xe(e)?"length":Er),Reflect.ownKeys(e)}}class C0 extends pm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const P0=new mm,L0=new C0,I0=new mm(!0);const Sc=t=>t,Fo=t=>Reflect.getPrototypeOf(t);function D0(t,e,n){return function(...i){const r=this.__v_raw,s=st(r),o=rs(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Sc:e?Ra:Gt;return!e&&Yt(s,"iterate",l?xc:Er),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Bo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function U0(t,e){const n={get(r){const s=this.__v_raw,o=st(s),a=st(r);t||(zi(r,a)&&Yt(o,"get",r),Yt(o,"get",a));const{has:l}=Fo(o),c=e?Sc:t?Ra:Gt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Yt(st(r),"iterate",Er),r.size},has(r){const s=this.__v_raw,o=st(s),a=st(r);return t||(zi(r,a)&&Yt(o,"has",r),Yt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=st(a),c=e?Sc:t?Ra:Gt;return!t&&Yt(l,"iterate",Er),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Qt(n,t?{add:Bo("add"),set:Bo("set"),delete:Bo("delete"),clear:Bo("clear")}:{add(r){!e&&!An(r)&&!$i(r)&&(r=st(r));const s=st(this);return Fo(s).has.call(s,r)||(s.add(r),vi(s,"add",r,r)),this},set(r,s){!e&&!An(s)&&!$i(s)&&(s=st(s));const o=st(this),{has:a,get:l}=Fo(o);let c=a.call(o,r);c||(r=st(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?zi(s,u)&&vi(o,"set",r,s):vi(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=Fo(s);let l=o.call(s,r);l||(r=st(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&vi(s,"delete",r,void 0),c},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&vi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=D0(r,t,e)}),n}function Wu(t,e){const n=U0(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ht(n,r)&&r in i?n:i,r,s)}const N0={get:Wu(!1,!1)},O0={get:Wu(!1,!0)},F0={get:Wu(!0,!1)};const gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,B0=new WeakMap;function k0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function H0(t){return t.__v_skip||!Object.isExtensible(t)?0:k0(h0(t))}function Mo(t){return $i(t)?t:Xu(t,!1,P0,N0,gm)}function xm(t){return Xu(t,!1,I0,O0,_m)}function yc(t){return Xu(t,!0,L0,F0,vm)}function Xu(t,e,n,i,r){if(!Tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=H0(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Vi(t){return $i(t)?Vi(t.__v_raw):!!(t&&t.__v_isReactive)}function $i(t){return!!(t&&t.__v_isReadonly)}function An(t){return!!(t&&t.__v_isShallow)}function $u(t){return t?!!t.__v_raw:!1}function st(t){const e=t&&t.__v_raw;return e?st(e):t}function qu(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&Qp(t,"__v_skip",!0),t}const Gt=t=>Tt(t)?Mo(t):t,Ra=t=>Tt(t)?yc(t):t;function Pt(t){return t?t.__v_isRef===!0:!1}function an(t){return Sm(t,!1)}function ju(t){return Sm(t,!0)}function Sm(t,e){return Pt(t)?t:new z0(t,e)}class z0{constructor(e,n){this.dep=new Gu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:st(e),this._value=n?e:Gt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||An(e)||$i(e);e=i?e:st(e),zi(e,n)&&(this._rawValue=e,this._value=i?e:Gt(e),this.dep.trigger())}}function Rn(t){return Pt(t)?t.value:t}const V0={get:(t,e,n)=>e==="__v_raw"?t:Rn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Pt(r)&&!Pt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function ym(t){return Vi(t)?t:new Proxy(t,V0)}function G0(t){const e=Xe(t)?new Array(t.length):{};for(const n in t)e[n]=X0(t,n);return e}class W0{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return b0(st(this._object),this._key)}}function X0(t,e,n){const i=t[e];return Pt(i)?i:new W0(t,e,n)}class $0{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return am(this,!0),!0}get value(){const e=this.dep.track();return um(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function q0(t,e,n=!1){let i,r;return qe(t)?i=t:(i=t.get,r=t.set),new $0(i,r,n)}const ko={},Ca=new WeakMap;let dr;function j0(t,e=!1,n=dr){if(n){let i=Ca.get(n);i||Ca.set(n,i=[]),i.push(t)}}function Y0(t,e,n=_t){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:An(x)||r===!1||r===0?xi(x,1):xi(x);let u,f,d,p,_=!1,v=!1;if(Pt(t)?(f=()=>t.value,_=An(t)):Vi(t)?(f=()=>c(t),_=!0):Xe(t)?(v=!0,_=t.some(x=>Vi(x)||An(x)),f=()=>t.map(x=>{if(Pt(x))return x.value;if(Vi(x))return c(x);if(qe(x))return l?l(x,2):x()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){wi();try{d()}finally{Ai()}}const x=dr;dr=u;try{return l?l(t,3,[p]):t(p)}finally{dr=x}}:f=ni,e&&r){const x=f,L=r===!0?1/0:r;f=()=>xi(x(),L)}const m=rm(),h=()=>{u.stop(),m&&m.active&&Ou(m.effects,u)};if(s&&e){const x=e;e=(...L)=>{x(...L),h()}}let S=v?new Array(t.length).fill(ko):ko;const E=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const L=u.run();if(r||_||(v?L.some((I,A)=>zi(I,S[A])):zi(L,S))){d&&d();const I=dr;dr=u;try{const A=[L,S===ko?void 0:v&&S[0]===ko?[]:S,p];S=L,l?l(e,3,A):e(...A)}finally{dr=I}}}else u.run()};return a&&a(E),u=new sm(f),u.scheduler=o?()=>o(E,!1):E,p=x=>j0(x,!1,u),d=u.onStop=()=>{const x=Ca.get(u);if(x){if(l)l(x,4);else for(const L of x)L();Ca.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function xi(t,e=1/0,n){if(e<=0||!Tt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Pt(t))xi(t.value,e,n);else if(Xe(t))for(let i=0;i<t.length;i++)xi(t[i],e,n);else if(Yp(t)||rs(t))t.forEach(i=>{xi(i,e,n)});else if(Jp(t)){for(const i in t)xi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&xi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(t,e,n,i){try{return i?t(...i):t()}catch(r){ja(r,e,n)}}function si(t,e,n,i){if(qe(t)){const r=bo(t,e,n,i);return r&&Kp(r)&&r.catch(s=>{ja(s,e,n)}),r}if(Xe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(si(t[s],e,n,i));return r}}function ja(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||_t;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){wi(),bo(s,null,10,[t,l,c]),Ai();return}}K0(t,n,r,i,o)}function K0(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const sn=[];let Kn=-1;const ss=[];let Fi=null,Kr=0;const Em=Promise.resolve();let Pa=null;function Yu(t){const e=Pa||Em;return t?e.then(this?t.bind(this):t):e}function Z0(t){let e=Kn+1,n=sn.length;for(;e<n;){const i=e+n>>>1,r=sn[i],s=oo(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Ku(t){if(!(t.flags&1)){const e=oo(t),n=sn[sn.length-1];!n||!(t.flags&2)&&e>=oo(n)?sn.push(t):sn.splice(Z0(e),0,t),t.flags|=1,Mm()}}function Mm(){Pa||(Pa=Em.then(Tm))}function J0(t){Xe(t)?ss.push(...t):Fi&&t.id===-1?Fi.splice(Kr+1,0,t):t.flags&1||(ss.push(t),t.flags|=1),Mm()}function Yf(t,e,n=Kn+1){for(;n<sn.length;n++){const i=sn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;sn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bm(t){if(ss.length){const e=[...new Set(ss)].sort((n,i)=>oo(n)-oo(i));if(ss.length=0,Fi){Fi.push(...e);return}for(Fi=e,Kr=0;Kr<Fi.length;Kr++){const n=Fi[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,Kr=0}}const oo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Tm(t){try{for(Kn=0;Kn<sn.length;Kn++){const e=sn[Kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Kn<sn.length;Kn++){const e=sn[Kn];e&&(e.flags&=-2)}Kn=-1,sn.length=0,bm(),Pa=null,(sn.length||ss.length)&&Tm()}}let vn=null,wm=null;function La(t){const e=vn;return vn=t,wm=t&&t.type.__scopeId||null,e}function Ia(t,e=vn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Na(-1);const s=La(e);let o;try{o=t(...r)}finally{La(s),i._d&&Na(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Kf(t,e){if(vn===null)return t;const n=Za(vn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=_t]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&xi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function sr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(wi(),si(l,n,8,[t.el,a,t,e]),Ai())}}const Q0=Symbol("_vte"),ev=t=>t.__isTeleport,tv=Symbol("_leaveCb");function Zu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wt(t,e){return qe(t)?Qt({name:t.name},e,{setup:t}):t}function Am(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Rm(t){const e=ji(),n=ju(null);if(e){const r=e.refs===_t?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}const Da=new WeakMap;function Ys(t,e,n,i,r=!1){if(Xe(t)){t.forEach((_,v)=>Ys(_,e&&(Xe(e)?e[v]:e),n,i,r));return}if(Ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ys(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Za(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_t?a.refs={}:a.refs,f=a.setupState,d=st(f),p=f===_t?jp:_=>ht(d,_);if(c!=null&&c!==l){if(Zf(e),Lt(c))u[c]=null,p(c)&&(f[c]=null);else if(Pt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(qe(l))bo(l,a,12,[o,u]);else{const _=Lt(l),v=Pt(l);if(_||v){const m=()=>{if(t.f){const h=_?p(l)?f[l]:u[l]:l.value;if(r)Xe(h)&&Ou(h,s);else if(Xe(h))h.includes(s)||h.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const S=[s];l.value=S,t.k&&(u[t.k]=S)}}else _?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const h=()=>{m(),Da.delete(t)};h.id=-1,Da.set(t,h),_n(h,n)}else Zf(t),m()}}}function Zf(t){const e=Da.get(t);e&&(e.flags|=8,Da.delete(t))}$a().requestIdleCallback;$a().cancelIdleCallback;const Ks=t=>!!t.type.__asyncLoader,Cm=t=>t.type.__isKeepAlive;function nv(t,e){Pm(t,"a",e)}function iv(t,e){Pm(t,"da",e)}function Pm(t,e,n=Kt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ya(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Cm(r.parent.vnode)&&rv(i,e,n,r),r=r.parent}}function rv(t,e,n,i){const r=Ya(e,t,i,!0);Es(()=>{Ou(i[e],r)},n)}function Ya(t,e,n=Kt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{wi();const a=wo(n),l=si(e,n,t,o);return a(),Ai(),l});return i?r.unshift(s):r.push(s),s}}const Ri=t=>(e,n=Kt)=>{(!lo||t==="sp")&&Ya(t,(...i)=>e(...i),n)},Lm=Ri("bm"),ys=Ri("m"),sv=Ri("bu"),ov=Ri("u"),av=Ri("bum"),Es=Ri("um"),lv=Ri("sp"),cv=Ri("rtg"),uv=Ri("rtc");function fv(t,e=Kt){Ya("ec",t,e)}const Im="components";function Mr(t,e){return Um(Im,t,!0,e)||t}const Dm=Symbol.for("v-ndc");function hv(t){return Lt(t)?Um(Im,t,!1)||t:t||Dm}function Um(t,e,n=!0,i=!1){const r=vn||Kt;if(r){const s=r.type;{const a=tx(s,!1);if(a&&(a===e||a===Cn(e)||a===Xa(Cn(e))))return s}const o=Jf(r[t]||s[t],e)||Jf(r.appContext[t],e);return!o&&i?s:o}}function Jf(t,e){return t&&(t[e]||t[Cn(e)]||t[Xa(Cn(e))])}function dv(t,e,n,i){let r;const s=n,o=Xe(t);if(o||Lt(t)){const a=o&&Vi(t);let l=!1,c=!1;a&&(l=!An(t),c=$i(t),t=qa(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Ra(Gt(t[u])):Gt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(Tt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ec=t=>t?eg(t)?Za(t):Ec(t.parent):null,Zs=Qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ec(t.parent),$root:t=>Ec(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Om(t),$forceUpdate:t=>t.f||(t.f=()=>{Ku(t.update)}),$nextTick:t=>t.n||(t.n=Yu.bind(t.proxy)),$watch:t=>Nv.bind(t)}),Sl=(t,e)=>t!==_t&&!t.__isScriptSetup&&ht(t,e),pv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Sl(i,e))return o[e]=1,i[e];if(r!==_t&&ht(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ht(c,e))return o[e]=3,s[e];if(n!==_t&&ht(n,e))return o[e]=4,n[e];Mc&&(o[e]=0)}}const u=Zs[e];let f,d;if(u)return e==="$attrs"&&Yt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==_t&&ht(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Sl(r,e)?(r[e]=n,!0):i!==_t&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:o}},a){let l,c;return!!(n[a]||t!==_t&&a[0]!=="$"&&ht(t,a)||Sl(e,a)||(l=s[0])&&ht(l,a)||ht(i,a)||ht(Zs,a)||ht(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qf(t){return Xe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Mc=!0;function mv(t){const e=Om(t),n=t.proxy,i=t.ctx;Mc=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:S,destroyed:E,unmounted:x,render:L,renderTracked:I,renderTriggered:A,errorCaptured:O,serverPrefetch:w,expose:T,inheritAttrs:F,components:j,directives:q,filters:oe}=e;if(c&&gv(c,i,null),o)for(const Z in o){const X=o[Z];qe(X)&&(i[Z]=X.bind(n))}if(r){const Z=r.call(n,n);Tt(Z)&&(t.data=Mo(Z))}if(Mc=!0,s)for(const Z in s){const X=s[Z],me=qe(X)?X.bind(n,n):qe(X.get)?X.get.bind(n,n):ni,xe=!qe(X)&&qe(X.set)?X.set.bind(n):ni,Se=Ut({get:me,set:xe});Object.defineProperty(i,Z,{enumerable:!0,configurable:!0,get:()=>Se.value,set:Ie=>Se.value=Ie})}if(a)for(const Z in a)Nm(a[Z],i,n,Z);if(l){const Z=qe(l)?l.call(n):l;Reflect.ownKeys(Z).forEach(X=>{pa(X,Z[X])})}u&&eh(u,t,"c");function K(Z,X){Xe(X)?X.forEach(me=>Z(me.bind(n))):X&&Z(X.bind(n))}if(K(Lm,f),K(ys,d),K(sv,p),K(ov,_),K(nv,v),K(iv,m),K(fv,O),K(uv,I),K(cv,A),K(av,S),K(Es,x),K(lv,w),Xe(T))if(T.length){const Z=t.exposed||(t.exposed={});T.forEach(X=>{Object.defineProperty(Z,X,{get:()=>n[X],set:me=>n[X]=me,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===ni&&(t.render=L),F!=null&&(t.inheritAttrs=F),j&&(t.components=j),q&&(t.directives=q),w&&Am(t)}function gv(t,e,n=ni){Xe(t)&&(t=bc(t));for(const i in t){const r=t[i];let s;Tt(r)?"default"in r?s=kn(r.from||i,r.default,!0):s=kn(r.from||i):s=kn(r),Pt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function eh(t,e,n){si(Xe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nm(t,e,n,i){let r=i.includes(".")?jm(n,i):()=>n[i];if(Lt(t)){const s=e[t];qe(s)&&Hn(r,s)}else if(qe(t))Hn(r,t.bind(n));else if(Tt(t))if(Xe(t))t.forEach(s=>Nm(s,e,n,i));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&Hn(r,s,t)}}function Om(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ua(l,c,o,!0)),Ua(l,e,o)),Tt(e)&&s.set(e,l),l}function Ua(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ua(t,s,n,!0),r&&r.forEach(o=>Ua(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=_v[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _v={data:th,props:nh,emits:nh,methods:Gs,computed:Gs,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:Gs,directives:Gs,watch:xv,provide:th,inject:vv};function th(t,e){return e?t?function(){return Qt(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function vv(t,e){return Gs(bc(t),bc(e))}function bc(t){if(Xe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?Qt(Object.create(null),t,e):e}function nh(t,e){return t?Xe(t)&&Xe(e)?[...new Set([...t,...e])]:Qt(Object.create(null),Qf(t),Qf(e??{})):e}function xv(t,e){if(!t)return e;if(!e)return t;const n=Qt(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function Fm(){return{app:null,config:{isNativeTag:jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sv=0;function yv(t,e){return function(i,r=null){qe(i)||(i=Qt({},i)),r!=null&&!Tt(r)&&(r=null);const s=Fm(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Sv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ix,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||it(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Za(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(si(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=br;br=c;try{return u()}finally{br=f}}};return c}}let br=null;function pa(t,e){if(Kt){let n=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===n&&(n=Kt.provides=Object.create(i)),n[t]=e}}function kn(t,e,n=!1){const i=ji();if(i||br){let r=br?br._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function Ev(){return!!(ji()||br)}const Bm={},km=()=>Object.create(Bm),Hm=t=>Object.getPrototypeOf(t)===Bm;function Mv(t,e,n,i=!1){const r={},s=km();t.propsDefaults=Object.create(null),zm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:xm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function bv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=st(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ka(t.emitsOptions,d))continue;const p=e[d];if(l)if(ht(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const _=Cn(d);r[_]=Tc(l,a,_,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{zm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ht(e,f)&&((u=Pr(f))===f||!ht(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Tc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ht(e,f))&&(delete s[f],c=!0)}c&&vi(t.attrs,"set","")}function zm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;r&&ht(r,u=Cn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ka(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(n),c=a||_t;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Tc(r,l,f,c[f],t,!ht(c,f))}}return o}function Tc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=wo(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Pr(n))&&(i=!0))}return i}const Tv=new WeakMap;function Vm(t,e,n=!1){const i=n?Tv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[d,p]=Vm(f,e,!0);Qt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return Tt(t)&&i.set(t,is),is;if(Xe(s))for(let u=0;u<s.length;u++){const f=Cn(s[u]);ih(f)&&(o[f]=_t)}else if(s)for(const u in s){const f=Cn(u);if(ih(f)){const d=s[u],p=o[f]=Xe(d)||qe(d)?{type:d}:Qt({},d),_=p.type;let v=!1,m=!0;if(Xe(_))for(let h=0;h<_.length;++h){const S=_[h],E=qe(S)&&S.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=qe(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||ht(p,"default"))&&a.push(f)}}const c=[o,a];return Tt(t)&&i.set(t,c),c}function ih(t){return t[0]!=="$"&&!$s(t)}const Ju=t=>t==="_"||t==="_ctx"||t==="$stable",Qu=t=>Xe(t)?t.map(Zn):[Zn(t)],wv=(t,e,n)=>{if(e._n)return e;const i=Ia((...r)=>Qu(e(...r)),n);return i._c=!1,i},Gm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ju(r))continue;const s=t[r];if(qe(s))e[r]=wv(r,s,i);else if(s!=null){const o=Qu(s);e[r]=()=>o}}},Wm=(t,e)=>{const n=Qu(e);t.slots.default=()=>n},Xm=(t,e,n)=>{for(const i in e)(n||!Ju(i))&&(t[i]=e[i])},Av=(t,e,n)=>{const i=t.slots=km();if(t.vnode.shapeFlag&32){const r=e._;r?(Xm(i,e,n),n&&Qp(i,"_",r,!0)):Gm(e,i)}else e&&Wm(t,e)},Rv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=_t;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Xm(r,e,n):(s=!e.$stable,Gm(e,r)),o=e}else e&&(Wm(t,e),o={default:1});if(s)for(const a in r)!Ju(a)&&o[a]==null&&delete r[a]},_n=Gv;function Cv(t){return Pv(t)}function Pv(t,e){const n=$a();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=ni,insertStaticContent:_}=t,v=(D,U,y,ie=null,Q=null,J=null,b=void 0,C=null,N=!!U.dynamicChildren)=>{if(D===U)return;D&&!Is(D,U)&&(ie=H(D),Ie(D,Q,J,!0),D=null),U.patchFlag===-2&&(N=!1,U.dynamicChildren=null);const{type:B,ref:de,shapeFlag:M}=U;switch(B){case To:m(D,U,y,ie);break;case qi:h(D,U,y,ie);break;case El:D==null&&S(U,y,ie,b);break;case on:j(D,U,y,ie,Q,J,b,C,N);break;default:M&1?L(D,U,y,ie,Q,J,b,C,N):M&6?q(D,U,y,ie,Q,J,b,C,N):(M&64||M&128)&&B.process(D,U,y,ie,Q,J,b,C,N,le)}de!=null&&Q?Ys(de,D&&D.ref,J,U||D,!U):de==null&&D&&D.ref!=null&&Ys(D.ref,null,J,D,!0)},m=(D,U,y,ie)=>{if(D==null)i(U.el=a(U.children),y,ie);else{const Q=U.el=D.el;U.children!==D.children&&c(Q,U.children)}},h=(D,U,y,ie)=>{D==null?i(U.el=l(U.children||""),y,ie):U.el=D.el},S=(D,U,y,ie)=>{[D.el,D.anchor]=_(D.children,U,y,ie,D.el,D.anchor)},E=({el:D,anchor:U},y,ie)=>{let Q;for(;D&&D!==U;)Q=d(D),i(D,y,ie),D=Q;i(U,y,ie)},x=({el:D,anchor:U})=>{let y;for(;D&&D!==U;)y=d(D),r(D),D=y;r(U)},L=(D,U,y,ie,Q,J,b,C,N)=>{U.type==="svg"?b="svg":U.type==="math"&&(b="mathml"),D==null?I(U,y,ie,Q,J,b,C,N):w(D,U,Q,J,b,C,N)},I=(D,U,y,ie,Q,J,b,C)=>{let N,B;const{props:de,shapeFlag:M,transition:g,dirs:P}=D;if(N=D.el=o(D.type,J,de&&de.is,de),M&8?u(N,D.children):M&16&&O(D.children,N,null,ie,Q,yl(D,J),b,C),P&&sr(D,null,ie,"created"),A(N,D,D.scopeId,b,ie),de){for(const Y in de)Y!=="value"&&!$s(Y)&&s(N,Y,null,de[Y],J,ie);"value"in de&&s(N,"value",null,de.value,J),(B=de.onVnodeBeforeMount)&&$n(B,ie,D)}P&&sr(D,null,ie,"beforeMount");const z=Lv(Q,g);z&&g.beforeEnter(N),i(N,U,y),((B=de&&de.onVnodeMounted)||z||P)&&_n(()=>{B&&$n(B,ie,D),z&&g.enter(N),P&&sr(D,null,ie,"mounted")},Q)},A=(D,U,y,ie,Q)=>{if(y&&p(D,y),ie)for(let J=0;J<ie.length;J++)p(D,ie[J]);if(Q){let J=Q.subTree;if(U===J||Km(J.type)&&(J.ssContent===U||J.ssFallback===U)){const b=Q.vnode;A(D,b,b.scopeId,b.slotScopeIds,Q.parent)}}},O=(D,U,y,ie,Q,J,b,C,N=0)=>{for(let B=N;B<D.length;B++){const de=D[B]=C?Bi(D[B]):Zn(D[B]);v(null,de,U,y,ie,Q,J,b,C)}},w=(D,U,y,ie,Q,J,b)=>{const C=U.el=D.el;let{patchFlag:N,dynamicChildren:B,dirs:de}=U;N|=D.patchFlag&16;const M=D.props||_t,g=U.props||_t;let P;if(y&&or(y,!1),(P=g.onVnodeBeforeUpdate)&&$n(P,y,U,D),de&&sr(U,D,y,"beforeUpdate"),y&&or(y,!0),(M.innerHTML&&g.innerHTML==null||M.textContent&&g.textContent==null)&&u(C,""),B?T(D.dynamicChildren,B,C,y,ie,yl(U,Q),J):b||X(D,U,C,null,y,ie,yl(U,Q),J,!1),N>0){if(N&16)F(C,M,g,y,Q);else if(N&2&&M.class!==g.class&&s(C,"class",null,g.class,Q),N&4&&s(C,"style",M.style,g.style,Q),N&8){const z=U.dynamicProps;for(let Y=0;Y<z.length;Y++){const $=z[Y],Ee=M[$],he=g[$];(he!==Ee||$==="value")&&s(C,$,Ee,he,Q,y)}}N&1&&D.children!==U.children&&u(C,U.children)}else!b&&B==null&&F(C,M,g,y,Q);((P=g.onVnodeUpdated)||de)&&_n(()=>{P&&$n(P,y,U,D),de&&sr(U,D,y,"updated")},ie)},T=(D,U,y,ie,Q,J,b)=>{for(let C=0;C<U.length;C++){const N=D[C],B=U[C],de=N.el&&(N.type===on||!Is(N,B)||N.shapeFlag&198)?f(N.el):y;v(N,B,de,null,ie,Q,J,b,!0)}},F=(D,U,y,ie,Q)=>{if(U!==y){if(U!==_t)for(const J in U)!$s(J)&&!(J in y)&&s(D,J,U[J],null,Q,ie);for(const J in y){if($s(J))continue;const b=y[J],C=U[J];b!==C&&J!=="value"&&s(D,J,C,b,Q,ie)}"value"in y&&s(D,"value",U.value,y.value,Q)}},j=(D,U,y,ie,Q,J,b,C,N)=>{const B=U.el=D?D.el:a(""),de=U.anchor=D?D.anchor:a("");let{patchFlag:M,dynamicChildren:g,slotScopeIds:P}=U;P&&(C=C?C.concat(P):P),D==null?(i(B,y,ie),i(de,y,ie),O(U.children||[],y,de,Q,J,b,C,N)):M>0&&M&64&&g&&D.dynamicChildren?(T(D.dynamicChildren,g,y,Q,J,b,C),(U.key!=null||Q&&U===Q.subTree)&&$m(D,U,!0)):X(D,U,y,de,Q,J,b,C,N)},q=(D,U,y,ie,Q,J,b,C,N)=>{U.slotScopeIds=C,D==null?U.shapeFlag&512?Q.ctx.activate(U,y,ie,b,N):oe(U,y,ie,Q,J,b,N):ae(D,U,N)},oe=(D,U,y,ie,Q,J,b)=>{const C=D.component=Kv(D,ie,Q);if(Cm(D)&&(C.ctx.renderer=le),Zv(C,!1,b),C.asyncDep){if(Q&&Q.registerDep(C,K,b),!D.el){const N=C.subTree=it(qi);h(null,N,U,y),D.placeholder=N.el}}else K(C,D,U,y,Q,J,b)},ae=(D,U,y)=>{const ie=U.component=D.component;if(zv(D,U,y))if(ie.asyncDep&&!ie.asyncResolved){Z(ie,U,y);return}else ie.next=U,ie.update();else U.el=D.el,ie.vnode=U},K=(D,U,y,ie,Q,J,b)=>{const C=()=>{if(D.isMounted){let{next:M,bu:g,u:P,parent:z,vnode:Y}=D;{const Re=qm(D);if(Re){M&&(M.el=Y.el,Z(D,M,b)),Re.asyncDep.then(()=>{D.isUnmounted||C()});return}}let $=M,Ee;or(D,!1),M?(M.el=Y.el,Z(D,M,b)):M=Y,g&&da(g),(Ee=M.props&&M.props.onVnodeBeforeUpdate)&&$n(Ee,z,M,Y),or(D,!0);const he=sh(D),Te=D.subTree;D.subTree=he,v(Te,he,f(Te.el),H(Te),D,Q,J),M.el=he.el,$===null&&Vv(D,he.el),P&&_n(P,Q),(Ee=M.props&&M.props.onVnodeUpdated)&&_n(()=>$n(Ee,z,M,Y),Q)}else{let M;const{el:g,props:P}=U,{bm:z,m:Y,parent:$,root:Ee,type:he}=D,Te=Ks(U);or(D,!1),z&&da(z),!Te&&(M=P&&P.onVnodeBeforeMount)&&$n(M,$,U),or(D,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(he);const Re=D.subTree=sh(D);v(null,Re,y,ie,D,Q,J),U.el=Re.el}if(Y&&_n(Y,Q),!Te&&(M=P&&P.onVnodeMounted)){const Re=U;_n(()=>$n(M,$,Re),Q)}(U.shapeFlag&256||$&&Ks($.vnode)&&$.vnode.shapeFlag&256)&&D.a&&_n(D.a,Q),D.isMounted=!0,U=y=ie=null}};D.scope.on();const N=D.effect=new sm(C);D.scope.off();const B=D.update=N.run.bind(N),de=D.job=N.runIfDirty.bind(N);de.i=D,de.id=D.uid,N.scheduler=()=>Ku(de),or(D,!0),B()},Z=(D,U,y)=>{U.component=D;const ie=D.vnode.props;D.vnode=U,D.next=null,bv(D,U.props,ie,y),Rv(D,U.children,y),wi(),Yf(D),Ai()},X=(D,U,y,ie,Q,J,b,C,N=!1)=>{const B=D&&D.children,de=D?D.shapeFlag:0,M=U.children,{patchFlag:g,shapeFlag:P}=U;if(g>0){if(g&128){xe(B,M,y,ie,Q,J,b,C,N);return}else if(g&256){me(B,M,y,ie,Q,J,b,C,N);return}}P&8?(de&16&&be(B,Q,J),M!==B&&u(y,M)):de&16?P&16?xe(B,M,y,ie,Q,J,b,C,N):be(B,Q,J,!0):(de&8&&u(y,""),P&16&&O(M,y,ie,Q,J,b,C,N))},me=(D,U,y,ie,Q,J,b,C,N)=>{D=D||is,U=U||is;const B=D.length,de=U.length,M=Math.min(B,de);let g;for(g=0;g<M;g++){const P=U[g]=N?Bi(U[g]):Zn(U[g]);v(D[g],P,y,null,Q,J,b,C,N)}B>de?be(D,Q,J,!0,!1,M):O(U,y,ie,Q,J,b,C,N,M)},xe=(D,U,y,ie,Q,J,b,C,N)=>{let B=0;const de=U.length;let M=D.length-1,g=de-1;for(;B<=M&&B<=g;){const P=D[B],z=U[B]=N?Bi(U[B]):Zn(U[B]);if(Is(P,z))v(P,z,y,null,Q,J,b,C,N);else break;B++}for(;B<=M&&B<=g;){const P=D[M],z=U[g]=N?Bi(U[g]):Zn(U[g]);if(Is(P,z))v(P,z,y,null,Q,J,b,C,N);else break;M--,g--}if(B>M){if(B<=g){const P=g+1,z=P<de?U[P].el:ie;for(;B<=g;)v(null,U[B]=N?Bi(U[B]):Zn(U[B]),y,z,Q,J,b,C,N),B++}}else if(B>g)for(;B<=M;)Ie(D[B],Q,J,!0),B++;else{const P=B,z=B,Y=new Map;for(B=z;B<=g;B++){const Ue=U[B]=N?Bi(U[B]):Zn(U[B]);Ue.key!=null&&Y.set(Ue.key,B)}let $,Ee=0;const he=g-z+1;let Te=!1,Re=0;const fe=new Array(he);for(B=0;B<he;B++)fe[B]=0;for(B=P;B<=M;B++){const Ue=D[B];if(Ee>=he){Ie(Ue,Q,J,!0);continue}let Ne;if(Ue.key!=null)Ne=Y.get(Ue.key);else for($=z;$<=g;$++)if(fe[$-z]===0&&Is(Ue,U[$])){Ne=$;break}Ne===void 0?Ie(Ue,Q,J,!0):(fe[Ne-z]=B+1,Ne>=Re?Re=Ne:Te=!0,v(Ue,U[Ne],y,null,Q,J,b,C,N),Ee++)}const Ce=Te?Iv(fe):is;for($=Ce.length-1,B=he-1;B>=0;B--){const Ue=z+B,Ne=U[Ue],ye=U[Ue+1],ze=Ue+1<de?ye.el||ye.placeholder:ie;fe[B]===0?v(null,Ne,y,ze,Q,J,b,C,N):Te&&($<0||B!==Ce[$]?Se(Ne,y,ze,2):$--)}}},Se=(D,U,y,ie,Q=null)=>{const{el:J,type:b,transition:C,children:N,shapeFlag:B}=D;if(B&6){Se(D.component.subTree,U,y,ie);return}if(B&128){D.suspense.move(U,y,ie);return}if(B&64){b.move(D,U,y,le);return}if(b===on){i(J,U,y);for(let M=0;M<N.length;M++)Se(N[M],U,y,ie);i(D.anchor,U,y);return}if(b===El){E(D,U,y);return}if(ie!==2&&B&1&&C)if(ie===0)C.beforeEnter(J),i(J,U,y),_n(()=>C.enter(J),Q);else{const{leave:M,delayLeave:g,afterLeave:P}=C,z=()=>{D.ctx.isUnmounted?r(J):i(J,U,y)},Y=()=>{J._isLeaving&&J[tv](!0),M(J,()=>{z(),P&&P()})};g?g(J,z,Y):Y()}else i(J,U,y)},Ie=(D,U,y,ie=!1,Q=!1)=>{const{type:J,props:b,ref:C,children:N,dynamicChildren:B,shapeFlag:de,patchFlag:M,dirs:g,cacheIndex:P}=D;if(M===-2&&(Q=!1),C!=null&&(wi(),Ys(C,null,y,D,!0),Ai()),P!=null&&(U.renderCache[P]=void 0),de&256){U.ctx.deactivate(D);return}const z=de&1&&g,Y=!Ks(D);let $;if(Y&&($=b&&b.onVnodeBeforeUnmount)&&$n($,U,D),de&6)_e(D.component,y,ie);else{if(de&128){D.suspense.unmount(y,ie);return}z&&sr(D,null,U,"beforeUnmount"),de&64?D.type.remove(D,U,y,le,ie):B&&!B.hasOnce&&(J!==on||M>0&&M&64)?be(B,U,y,!1,!0):(J===on&&M&384||!Q&&de&16)&&be(N,U,y),ie&&je(D)}(Y&&($=b&&b.onVnodeUnmounted)||z)&&_n(()=>{$&&$n($,U,D),z&&sr(D,null,U,"unmounted")},y)},je=D=>{const{type:U,el:y,anchor:ie,transition:Q}=D;if(U===on){re(y,ie);return}if(U===El){x(D);return}const J=()=>{r(y),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(D.shapeFlag&1&&Q&&!Q.persisted){const{leave:b,delayLeave:C}=Q,N=()=>b(y,J);C?C(D.el,J,N):N()}else J()},re=(D,U)=>{let y;for(;D!==U;)y=d(D),r(D),D=y;r(U)},_e=(D,U,y)=>{const{bum:ie,scope:Q,job:J,subTree:b,um:C,m:N,a:B}=D;rh(N),rh(B),ie&&da(ie),Q.stop(),J&&(J.flags|=8,Ie(b,D,U,y)),C&&_n(C,U),_n(()=>{D.isUnmounted=!0},U)},be=(D,U,y,ie=!1,Q=!1,J=0)=>{for(let b=J;b<D.length;b++)Ie(D[b],U,y,ie,Q)},H=D=>{if(D.shapeFlag&6)return H(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const U=d(D.anchor||D.el),y=U&&U[Q0];return y?d(y):U};let se=!1;const ce=(D,U,y)=>{D==null?U._vnode&&Ie(U._vnode,null,null,!0):v(U._vnode||null,D,U,null,null,null,y),U._vnode=D,se||(se=!0,Yf(),bm(),se=!1)},le={p:v,um:Ie,m:Se,r:je,mt:oe,mc:O,pc:X,pbc:T,n:H,o:t};return{render:ce,hydrate:void 0,createApp:yv(ce)}}function yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $m(t,e,n=!1){const i=t.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Bi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&$m(o,a)),a.type===To&&a.patchFlag!==-1&&(a.el=o.el),a.type===qi&&!a.el&&(a.el=o.el)}}function Iv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function qm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qm(e)}function rh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Dv=Symbol.for("v-scx"),Uv=()=>kn(Dv);function ef(t,e){return tf(t,null,e)}function Hn(t,e,n){return tf(t,e,n)}function tf(t,e,n=_t){const{immediate:i,deep:r,flush:s,once:o}=n,a=Qt({},n),l=e&&i||!e&&s!=="post";let c;if(lo){if(s==="sync"){const p=Uv();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=ni,p.resume=ni,p.pause=ni,p}}const u=Kt;a.call=(p,_,v)=>si(p,u,_,v);let f=!1;s==="post"?a.scheduler=p=>{_n(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Ku(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Y0(t,e,a);return lo&&(c?c.push(d):l&&d()),d}function Nv(t,e,n){const i=this.proxy,r=Lt(t)?t.includes(".")?jm(i,t):()=>i[t]:t.bind(i,i);let s;qe(e)?s=e:(s=e.handler,n=e);const o=wo(this),a=tf(r,s.bind(i),n);return o(),a}function jm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Ov=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Cn(e)}Modifiers`]||t[`${Pr(e)}Modifiers`];function Fv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||_t;let r=n;const s=e.startsWith("update:"),o=s&&Ov(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Lt(u)?u.trim():u)),o.number&&(r=n.map(_c)));let a,l=i[a=ml(e)]||i[a=ml(Cn(e))];!l&&s&&(l=i[a=ml(Pr(e))]),l&&si(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,si(c,t,6,r)}}const Bv=new WeakMap;function Ym(t,e,n=!1){const i=n?Bv:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=Ym(c,e,!0);u&&(a=!0,Qt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Tt(t)&&i.set(t,null),null):(Xe(s)?s.forEach(l=>o[l]=null):Qt(o,s),Tt(t)&&i.set(t,o),o)}function Ka(t,e){return!t||!Va(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,Pr(e))||ht(t,e))}function sh(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:_,inheritAttrs:v}=t,m=La(t);let h,S;try{if(n.shapeFlag&4){const x=r||i,L=x;h=Zn(c.call(L,x,u,f,p,d,_)),S=a}else{const x=e;h=Zn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),S=e.props?a:kv(a)}}catch(x){Js.length=0,ja(x,t,1),h=it(qi)}let E=h;if(S&&v!==!1){const x=Object.keys(S),{shapeFlag:L}=E;x.length&&L&7&&(s&&x.some(Nu)&&(S=Hv(S,s)),E=cs(E,S,!1,!0))}return n.dirs&&(E=cs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Zu(E,n.transition),h=E,La(m),h}const kv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Va(n))&&((e||(e={}))[n]=t[n]);return e},Hv=(t,e)=>{const n={};for(const i in t)(!Nu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function zv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?oh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Ka(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?oh(i,o,c):!0:!!o;return!1}function oh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ka(n,s))return!0}return!1}function Vv({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Km=t=>t.__isSuspense;function Gv(t,e){e&&e.pendingBranch?Xe(t)?e.effects.push(...t):e.effects.push(t):J0(t)}const on=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),qi=Symbol.for("v-cmt"),El=Symbol.for("v-stc"),Js=[];let xn=null;function mt(t=!1){Js.push(xn=t?null:[])}function Wv(){Js.pop(),xn=Js[Js.length-1]||null}let ao=1;function Na(t,e=!1){ao+=t,t<0&&xn&&e&&(xn.hasOnce=!0)}function Zm(t){return t.dynamicChildren=ao>0?xn||is:null,Wv(),ao>0&&xn&&xn.push(t),t}function St(t,e,n,i,r,s){return Zm(We(t,e,n,i,r,s,!0))}function Jm(t,e,n,i,r){return Zm(it(t,e,n,i,r,!0))}function Oa(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const Qm=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||Pt(t)||qe(t)?{i:vn,r:t,k:e,f:!!n}:t:null);function We(t,e=null,n=null,i=0,r=null,s=t===on?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qm(e),ref:e&&ma(e),scopeId:wm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vn};return a?(nf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),ao>0&&!o&&xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xn.push(l),l}const it=Xv;function Xv(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Dm)&&(t=qi),Oa(t)){const a=cs(t,e,!0);return n&&nf(a,n),ao>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag=-2,a}if(nx(t)&&(t=t.__vccOpts),e){e=$v(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=Xi(a)),Tt(l)&&($u(l)&&!Xe(l)&&(l=Qt({},l)),e.style=Bu(l))}const o=Lt(t)?1:Km(t)?128:ev(t)?64:Tt(t)?4:qe(t)?2:0;return We(t,e,n,i,r,o,s,!0)}function $v(t){return t?$u(t)||Hm(t)?Qt({},t):t:null}function cs(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?qv(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Qm(c),ref:e&&e.ref?n&&s?Xe(s)?s.concat(ma(e)):[s,ma(e)]:ma(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==on?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Zu(u,l.clone(u)),u}function Ws(t=" ",e=0){return it(To,null,t,e)}function yi(t="",e=!1){return e?(mt(),Jm(qi,null,t)):it(qi,null,t)}function Zn(t){return t==null||typeof t=="boolean"?it(qi):Xe(t)?it(on,null,t.slice()):Oa(t)?Bi(t):it(To,null,String(t))}function Bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function nf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Xe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),nf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Hm(e)?e._ctx=vn:r===3&&vn&&(vn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:vn},n=32):(e=String(e),i&64?(n=16,e=[Ws(e)]):n=8);t.children=e,t.shapeFlag|=n}function qv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xi([e.class,i.class]));else if(r==="style")e.style=Bu([e.style,i.style]);else if(Va(r)){const s=e[r],o=i[r];o&&s!==o&&!(Xe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function $n(t,e,n,i=null){si(t,e,7,[n,i])}const jv=Fm();let Yv=0;function Kv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||jv,s={uid:Yv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vm(i,r),emitsOptions:Ym(i,r),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Fv.bind(null,s),t.ce&&t.ce(s),s}let Kt=null;const ji=()=>Kt||vn;let Fa,wc;{const t=$a(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Fa=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),wc=e("__VUE_SSR_SETTERS__",n=>lo=n)}const wo=t=>{const e=Kt;return Fa(t),t.scope.on(),()=>{t.scope.off(),Fa(e)}},ah=()=>{Kt&&Kt.scope.off(),Fa(null)};function eg(t){return t.vnode.shapeFlag&4}let lo=!1;function Zv(t,e=!1,n=!1){e&&wc(e);const{props:i,children:r}=t.vnode,s=eg(t);Mv(t,i,s,e),Av(t,r,n||e);const o=s?Jv(t,e):void 0;return e&&wc(!1),o}function Jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pv);const{setup:i}=n;if(i){wi();const r=t.setupContext=i.length>1?ex(t):null,s=wo(t),o=bo(i,t,0,[t.props,r]),a=Kp(o);if(Ai(),s(),(a||t.sp)&&!Ks(t)&&Am(t),a){if(o.then(ah,ah),e)return o.then(l=>{lh(t,l)}).catch(l=>{ja(l,t,0)});t.asyncDep=o}else lh(t,o)}else tg(t)}function lh(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Tt(e)&&(t.setupState=ym(e)),tg(t)}function tg(t,e,n){const i=t.type;t.render||(t.render=i.render||ni);{const r=wo(t);wi();try{mv(t)}finally{Ai(),r()}}}const Qv={get(t,e){return Yt(t,"get",""),t[e]}};function ex(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Qv),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ym(qu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function tx(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function nx(t){return qe(t)&&"__vccOpts"in t}const Ut=(t,e)=>q0(t,e,lo);function Ja(t,e,n){try{Na(-1);const i=arguments.length;return i===2?Tt(e)&&!Xe(e)?Oa(e)?it(t,null,[e]):it(t,e):it(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Oa(n)&&(n=[n]),it(t,e,n))}finally{Na(1)}}const ix="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ac;const ch=typeof window<"u"&&window.trustedTypes;if(ch)try{Ac=ch.createPolicy("vue",{createHTML:t=>t})}catch{}const ng=Ac?t=>Ac.createHTML(t):t=>t,rx="http://www.w3.org/2000/svg",sx="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,uh=_i&&_i.createElement("template"),ox={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?_i.createElementNS(rx,t):e==="mathml"?_i.createElementNS(sx,t):n?_i.createElement(t,{is:n}):_i.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>_i.createTextNode(t),createComment:t=>_i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{uh.innerHTML=ng(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=uh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ax=Symbol("_vtc");function lx(t,e,n){const i=t[ax];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fh=Symbol("_vod"),cx=Symbol("_vsh"),ux=Symbol(""),fx=/(?:^|;)\s*display\s*:/;function hx(t,e,n){const i=t.style,r=Lt(n);let s=!1;if(n&&!r){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ga(i,a,"")}else for(const o in e)n[o]==null&&ga(i,o,"");for(const o in n)o==="display"&&(s=!0),ga(i,o,n[o])}else if(r){if(e!==n){const o=i[ux];o&&(n+=";"+o),i.cssText=n,s=fx.test(n)}}else e&&t.removeAttribute("style");fh in t&&(t[fh]=s?i.display:"",t[cx]&&(i.display="none"))}const hh=/\s*!important$/;function ga(t,e,n){if(Xe(n))n.forEach(i=>ga(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=dx(t,e);hh.test(n)?t.setProperty(Pr(i),n.replace(hh,""),"important"):t[i]=n}}const dh=["Webkit","Moz","ms"],Ml={};function dx(t,e){const n=Ml[e];if(n)return n;let i=Cn(e);if(i!=="filter"&&i in t)return Ml[e]=i;i=Xa(i);for(let r=0;r<dh.length;r++){const s=dh[r]+i;if(s in t)return Ml[e]=s}return e}const ph="http://www.w3.org/1999/xlink";function mh(t,e,n,i,r,s=S0(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ph,e.slice(6,e.length)):t.setAttributeNS(ph,e,n):n==null||s&&!em(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Zi(n)?String(n):n)}function gh(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ng(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=em(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Zr(t,e,n,i){t.addEventListener(e,n,i)}function px(t,e,n,i){t.removeEventListener(e,n,i)}const _h=Symbol("_vei");function mx(t,e,n,i,r=null){const s=t[_h]||(t[_h]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=gx(e);if(i){const c=s[e]=xx(i,r);Zr(t,a,c,l)}else o&&(px(t,a,o,l),s[e]=void 0)}}const vh=/(?:Once|Passive|Capture)$/;function gx(t){let e;if(vh.test(t)){e={};let i;for(;i=t.match(vh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let bl=0;const _x=Promise.resolve(),vx=()=>bl||(_x.then(()=>bl=0),bl=Date.now());function xx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;si(Sx(i,n.value),e,5,[i])};return n.value=t,n.attached=vx(),n}function Sx(t,e){if(Xe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?lx(t,i,o):e==="style"?hx(t,n,i):Va(e)?Nu(e)||mx(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ex(t,e,i,o))?(gh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mh(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?gh(t,Cn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),mh(t,e,i,o))};function Ex(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&xh(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xh(e)&&Lt(n)?!1:e in t}const Sh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Xe(e)?n=>da(e,n):e};function Mx(t){t.target.composing=!0}function yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tl=Symbol("_assign"),Eh={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Tl]=Sh(r);const s=i||r.props&&r.props.type==="number";Zr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=_c(a)),t[Tl](a)}),n&&Zr(t,"change",()=>{t.value=t.value.trim()}),e||(Zr(t,"compositionstart",Mx),Zr(t,"compositionend",yh),Zr(t,"change",yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Tl]=Sh(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?_c(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},bx=Qt({patchProp:yx},ox);let Mh;function Tx(){return Mh||(Mh=Cv(bx))}const wx=((...t)=>{const e=Tx().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Rx(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Ax(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function Ax(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rx(t){return Lt(t)?document.querySelector(t):t}const Cx=Wt({name:"a-hoverable",props:{isExternal:{type:Boolean,default:!1},to:{type:String,default:""},target:{type:String,default:"_self"},imgSrc:{type:String,default:""},shape:{type:String,default:"pill"},effect:{type:String,default:""},text:{type:String,default:""}}}),Wn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Px={key:0,class:"relative w-50 h-50"},Lx=["src","alt"],Ix={key:1,class:"font-size-16 capitalize"};function Dx(t,e,n,i,r,s){return mt(),Jm(hv(t.isExternal?"a":"router-link"),{class:Xi(["flex row a-center h-50 user-select-none pointer",{"j-start":t.shape==="pill"},{"j-center":t.shape==="round"},t.effect]),to:t.isExternal?void 0:{name:t.to},href:t.isExternal?t.to:void 0,target:t.target},{default:Ia(()=>[t.imgSrc?(mt(),St("div",Px,[We("img",{src:t.imgSrc,alt:t.to},null,8,Lx)])):yi("",!0),t.text?(mt(),St("span",Ix,Qn(t.text),1)):yi("",!0)]),_:1},8,["class","to","href","target"])}const ig=Wn(Cx,[["render",Dx]]),Ux=Wt({name:"switch-button",props:{isActive:{type:Boolean,default:!1},change:{type:Function,default:()=>{}},imgSrcL:{type:String,default:""},imgSrcR:{type:String,default:""},textL:{type:String,default:""},textR:{type:String,default:""}}}),Nx={key:0,class:"relative"},Ox=["src"],Fx={key:1},Bx={key:0,class:"relative"},kx=["src"],Hx={key:1};function zx(t,e,n,i,r,s){return mt(),St("button",{class:"flex row a-center j-center border-none bg-none w-32 h-32 font-size-16 pointer user-select-none",onClick:e[0]||(e[0]=(...o)=>t.change&&t.change(...o))},[We("div",{class:Xi(["tr-100",{"w-full o-1":!t.isActive},{"w-0 o-0":t.isActive}])},[t.imgSrcL?(mt(),St("div",Nx,[We("img",{src:t.imgSrcL},null,8,Ox)])):yi("",!0),t.textL?(mt(),St("span",Fx,Qn(t.textL),1)):yi("",!0)],2),We("div",{class:Xi(["tr-100",{"w-full o-1":t.isActive},{"w-0 o-0":!t.isActive}])},[t.imgSrcR?(mt(),St("div",Bx,[We("img",{src:t.imgSrcR},null,8,kx)])):yi("",!0),t.textR?(mt(),St("span",Hx,Qn(t.textR),1)):yi("",!0)],2)])}const rg=Wn(Ux,[["render",zx]]),Vx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z'/%3e%3cpath%20d='M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z'/%3e%3c/svg%3e",Gx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",Wx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",Xx="data:image/svg+xml,%3csvg%20id='Layer_1'%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%3e%3cpath%20d='m4%206a2.982%202.982%200%200%201%20-2.122-.879l-1.544-1.374a1%201%200%200%201%201.332-1.494l1.585%201.414a1%201%200%200%200%201.456.04l3.604-3.431a1%201%200%200%201%201.378%201.448l-3.589%203.414a2.964%202.964%200%200%201%20-2.1.862zm20-2a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.589-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1.023%201.023%200%200%201%20-1.414%200l-1.59-1.585a1%201%200%200%200%20-1.414%201.414l1.585%201.585a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.585-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1%201%200%200%201%20-1.456-.04l-1.585-1.414a1%201%200%200%200%20-1.332%201.494l1.544%201.374a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1z'/%3e%3c/svg%3e",$x="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",qx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",jx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",Yx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,20c-.552,0-1-.447-1-1,0-2.318,1.382-4.357,3.891-5.741,2.287-1.26,3.469-3.755,3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57,.147-4.952,1.307-1.363,1.144-2.144,2.82-2.144,4.597,0,.552-.448,1-1,1s-1-.448-1-1c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.289,13.441,.126c3.222,.565,5.866,3.21,6.432,6.432,.598,3.402-1.017,6.798-4.016,8.453-1.303,.718-2.857,1.993-2.857,3.989,0,.553-.448,1-1,1Zm-1.5,2.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z'/%3e%3c/svg%3e",Kx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",Zx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z'/%3e%3cpath%20d='M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z'/%3e%3c/svg%3e",sg=Object.freeze(Object.defineProperty({__proto__:null,angleDoubleRight:Vx,crossSmall:Gx,home:Wx,list:$x,listCheck:Xx,menuBurger:qx,moonStars:jx,question:Yx,sun:Kx,user:Zx},Symbol.toStringTag,{value:"Module"}));/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let og;const Qa=t=>og=t,ag=Symbol();function Rc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qs||(Qs={}));function Jx(){const t=ku(!0),e=t.run(()=>an({}));let n=[],i=[];const r=qu({install(s){Qa(r),r._a=s,s.provide(ag,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const lg=()=>{};function bh(t,e,n,i=lg){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&rm()&&y0(r),r}function Ur(t,...e){t.slice().forEach(n=>{n(...e)})}const Qx=t=>t(),Th=Symbol(),wl=Symbol();function Cc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Rc(r)&&Rc(i)&&t.hasOwnProperty(n)&&!Pt(i)&&!Vi(i)?t[n]=Cc(r,i):t[n]=i}return t}const eS=Symbol();function tS(t){return!Rc(t)||!Object.prototype.hasOwnProperty.call(t,eS)}const{assign:Oi}=Object;function nS(t){return!!(Pt(t)&&t.effect)}function iS(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=G0(n.state.value[t]);return Oi(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=qu(Ut(()=>{Qa(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=cg(t,c,e,n,i,!0),l}function cg(t,e,n={},i,r,s){let o;const a=Oi({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),an({});let v;function m(O){let w;c=u=!1,typeof O=="function"?(O(i.state.value[t]),w={type:Qs.patchFunction,storeId:t,events:p}):(Cc(i.state.value[t],O),w={type:Qs.patchObject,payload:O,storeId:t,events:p});const T=v=Symbol();Yu().then(()=>{v===T&&(c=!0)}),u=!0,Ur(f,w,i.state.value[t])}const h=s?function(){const{state:w}=n,T=w?w():{};this.$patch(F=>{Oi(F,T)})}:lg;function S(){o.stop(),f=[],d=[],i._s.delete(t)}const E=(O,w="")=>{if(Th in O)return O[wl]=w,O;const T=function(){Qa(i);const F=Array.from(arguments),j=[],q=[];function oe(Z){j.push(Z)}function ae(Z){q.push(Z)}Ur(d,{args:F,name:T[wl],store:L,after:oe,onError:ae});let K;try{K=O.apply(this&&this.$id===t?this:L,F)}catch(Z){throw Ur(q,Z),Z}return K instanceof Promise?K.then(Z=>(Ur(j,Z),Z)).catch(Z=>(Ur(q,Z),Promise.reject(Z))):(Ur(j,K),K)};return T[Th]=!0,T[wl]=w,T},x={_p:i,$id:t,$onAction:bh.bind(null,d),$patch:m,$reset:h,$subscribe(O,w={}){const T=bh(f,O,w.detached,()=>F()),F=o.run(()=>Hn(()=>i.state.value[t],j=>{(w.flush==="sync"?u:c)&&O({storeId:t,type:Qs.direct,events:p},j)},Oi({},l,w)));return T},$dispose:S},L=Mo(x);i._s.set(t,L);const A=(i._a&&i._a.runWithContext||Qx)(()=>i._e.run(()=>(o=ku()).run(()=>e({action:E}))));for(const O in A){const w=A[O];if(Pt(w)&&!nS(w)||Vi(w))s||(_&&tS(w)&&(Pt(w)?w.value=_[O]:Cc(w,_[O])),i.state.value[t][O]=w);else if(typeof w=="function"){const T=E(w,O);A[O]=T,a.actions[O]=w}}return Oi(L,A),Oi(st(L),A),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:O=>{m(w=>{Oi(w,O)})}}),i._p.forEach(O=>{Oi(L,o.run(()=>O({store:L,app:i._a,pinia:i,options:a})))}),_&&s&&n.hydrate&&n.hydrate(L.$state,_),c=!0,u=!0,L}/*! #__NO_SIDE_EFFECTS__ */function rf(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(o,a){const l=Ev();return o=o||(l?kn(ag,null):null),o&&Qa(o),o=og,o._s.has(t)||(r?cg(t,e,i,o):iS(t,i,o)),o._s.get(t)}return s.$id=t,s}const rS=["light","dark"],Ao=rf("theme",()=>{const t=localStorage.getItem("theme"),e=an(rS.includes(t)?t:"light");ef(()=>{localStorage.setItem("theme",e.value)});const n=Ut(()=>e.value==="dark");return{theme:e,isDark:n,changeTheme:()=>{switch(e.value){case"light":e.value="dark";break;case"dark":e.value="light";break}}}});/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function sS(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Ba=typeof window<"u",Ji=(t,e=!1)=>e?Symbol.for(t):Symbol(t),oS=(t,e,n)=>aS({l:t,k:e,s:n}),aS=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Nt=t=>typeof t=="number"&&isFinite(t),lS=t=>sf(t)==="[object Date]",us=t=>sf(t)==="[object RegExp]",el=t=>Je(t)&&Object.keys(t).length===0,Ot=Object.assign,cS=Object.create,xt=(t=null)=>cS(t);let wh;const vr=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:xt());function Ah(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Rh(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uS(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${Rh(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${Rh(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const fS=Object.prototype.hasOwnProperty;function On(t,e){return fS.call(t,e)}const Ct=Array.isArray,bt=t=>typeof t=="function",Pe=t=>typeof t=="string",at=t=>typeof t=="boolean",lt=t=>t!==null&&typeof t=="object",hS=t=>lt(t)&&bt(t.then)&&bt(t.catch),ug=Object.prototype.toString,sf=t=>ug.call(t),Je=t=>sf(t)==="[object Object]",dS=t=>t==null?"":Ct(t)||Je(t)&&t.toString===ug?JSON.stringify(t,null,2):String(t);function of(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const Ho=t=>!lt(t)||Ct(t);function _a(t,e){if(Ho(t)||Ho(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(lt(i[s])&&!lt(r[s])&&(r[s]=Array.isArray(i[s])?[]:xt()),Ho(r[s])||Ho(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function pS(t,e,n){return{line:t,column:e,offset:n}}function Pc(t,e,n){return{start:t,end:e}}const ft={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},mS=17;function tl(t,e,n={}){const{domain:i,messages:r,args:s}=n,o=t,a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=i,a}function gS(t){throw t}const qn=" ",_S="\r",qt=`
`,vS="\u2028",xS="\u2029";function SS(t){const e=t;let n=0,i=1,r=1,s=0;const o=A=>e[A]===_S&&e[A+1]===qt,a=A=>e[A]===qt,l=A=>e[A]===xS,c=A=>e[A]===vS,u=A=>o(A)||a(A)||l(A)||c(A),f=()=>n,d=()=>i,p=()=>r,_=()=>s,v=A=>o(A)||l(A)||c(A)?qt:e[A],m=()=>v(n),h=()=>v(n+s);function S(){return s=0,u(n)&&(i++,r=0),o(n)&&n++,n++,r++,e[n]}function E(){return o(n+s)&&s++,s++,e[n+s]}function x(){n=0,i=1,r=1,s=0}function L(A=0){s=A}function I(){const A=n+s;for(;A!==n;)S();s=0}return{index:f,line:d,column:p,peekOffset:_,charAt:v,currentChar:m,currentPeek:h,next:S,peek:E,reset:x,resetPeek:L,skipToPeek:I}}const ci=void 0,yS=".",Ch="'",ES="tokenizer";function MS(t,e={}){const n=e.location!==!1,i=SS(t),r=()=>i.index(),s=()=>pS(i.line(),i.column(),i.index()),o=s(),a=r(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(b,C,N,...B){const de=c();if(C.column+=N,C.offset+=N,u){const M=n?Pc(de.startLoc,C):null,g=tl(b,M,{domain:ES,args:B});u(g)}}function d(b,C,N){b.endLoc=s(),b.currentType=C;const B={type:C};return n&&(B.loc=Pc(b.startLoc,b.endLoc)),N!=null&&(B.value=N),B}const p=b=>d(b,13);function _(b,C){return b.currentChar()===C?(b.next(),C):(f(ft.EXPECTED_TOKEN,s(),0,C),"")}function v(b){let C="";for(;b.currentPeek()===qn||b.currentPeek()===qt;)C+=b.currentPeek(),b.peek();return C}function m(b){const C=v(b);return b.skipToPeek(),C}function h(b){if(b===ci)return!1;const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function S(b){if(b===ci)return!1;const C=b.charCodeAt(0);return C>=48&&C<=57}function E(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const B=h(b.currentPeek());return b.resetPeek(),B}function x(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const B=b.currentPeek()==="-"?b.peek():b.currentPeek(),de=S(B);return b.resetPeek(),de}function L(b,C){const{currentType:N}=C;if(N!==2)return!1;v(b);const B=b.currentPeek()===Ch;return b.resetPeek(),B}function I(b,C){const{currentType:N}=C;if(N!==7)return!1;v(b);const B=b.currentPeek()===".";return b.resetPeek(),B}function A(b,C){const{currentType:N}=C;if(N!==8)return!1;v(b);const B=h(b.currentPeek());return b.resetPeek(),B}function O(b,C){const{currentType:N}=C;if(!(N===7||N===11))return!1;v(b);const B=b.currentPeek()===":";return b.resetPeek(),B}function w(b,C){const{currentType:N}=C;if(N!==9)return!1;const B=()=>{const M=b.currentPeek();return M==="{"?h(b.peek()):M==="@"||M==="|"||M===":"||M==="."||M===qn||!M?!1:M===qt?(b.peek(),B()):F(b,!1)},de=B();return b.resetPeek(),de}function T(b){v(b);const C=b.currentPeek()==="|";return b.resetPeek(),C}function F(b,C=!0){const N=(de=!1,M="")=>{const g=b.currentPeek();return g==="{"||g==="@"||!g?de:g==="|"?!(M===qn||M===qt):g===qn?(b.peek(),N(!0,qn)):g===qt?(b.peek(),N(!0,qt)):!0},B=N();return C&&b.resetPeek(),B}function j(b,C){const N=b.currentChar();return N===ci?ci:C(N)?(b.next(),N):null}function q(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function oe(b){return j(b,q)}function ae(b){const C=b.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function K(b){return j(b,ae)}function Z(b){const C=b.charCodeAt(0);return C>=48&&C<=57}function X(b){return j(b,Z)}function me(b){const C=b.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function xe(b){return j(b,me)}function Se(b){let C="",N="";for(;C=X(b);)N+=C;return N}function Ie(b){let C="";for(;;){const N=b.currentChar();if(N==="{"||N==="}"||N==="@"||N==="|"||!N)break;if(N===qn||N===qt)if(F(b))C+=N,b.next();else{if(T(b))break;C+=N,b.next()}else C+=N,b.next()}return C}function je(b){m(b);let C="",N="";for(;C=K(b);)N+=C;const B=b.currentChar();if(B&&B!=="}"&&B!==ci&&B!==qn&&B!==qt&&B!=="　"){const de=le(b);return f(ft.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,N+de),N+de}return b.currentChar()===ci&&f(ft.UNTERMINATED_CLOSING_BRACE,s(),0),N}function re(b){m(b);let C="";return b.currentChar()==="-"?(b.next(),C+=`-${Se(b)}`):C+=Se(b),b.currentChar()===ci&&f(ft.UNTERMINATED_CLOSING_BRACE,s(),0),C}function _e(b){return b!==Ch&&b!==qt}function be(b){m(b),_(b,"'");let C="",N="";for(;C=j(b,_e);)C==="\\"?N+=H(b):N+=C;const B=b.currentChar();return B===qt||B===ci?(f(ft.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),B===qt&&(b.next(),_(b,"'")),N):(_(b,"'"),N)}function H(b){const C=b.currentChar();switch(C){case"\\":case"'":return b.next(),`\\${C}`;case"u":return se(b,C,4);case"U":return se(b,C,6);default:return f(ft.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function se(b,C,N){_(b,C);let B="";for(let de=0;de<N;de++){const M=xe(b);if(!M){f(ft.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${B}${b.currentChar()}`);break}B+=M}return`\\${C}${B}`}function ce(b){return b!=="{"&&b!=="}"&&b!==qn&&b!==qt}function le(b){m(b);let C="",N="";for(;C=j(b,ce);)N+=C;return N}function Be(b){let C="",N="";for(;C=oe(b);)N+=C;return N}function D(b){const C=N=>{const B=b.currentChar();return B==="{"||B==="@"||B==="|"||B==="("||B===")"||!B||B===qn?N:(N+=B,b.next(),C(N))};return C("")}function U(b){m(b);const C=_(b,"|");return m(b),C}function y(b,C){let N=null;switch(b.currentChar()){case"{":return C.braceNest>=1&&f(ft.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),b.next(),N=d(C,2,"{"),m(b),C.braceNest++,N;case"}":return C.braceNest>0&&C.currentType===2&&f(ft.EMPTY_PLACEHOLDER,s(),0),b.next(),N=d(C,3,"}"),C.braceNest--,C.braceNest>0&&m(b),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),N;case"@":return C.braceNest>0&&f(ft.UNTERMINATED_CLOSING_BRACE,s(),0),N=ie(b,C)||p(C),C.braceNest=0,N;default:{let de=!0,M=!0,g=!0;if(T(b))return C.braceNest>0&&f(ft.UNTERMINATED_CLOSING_BRACE,s(),0),N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(ft.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,Q(b,C);if(de=E(b,C))return N=d(C,4,je(b)),m(b),N;if(M=x(b,C))return N=d(C,5,re(b)),m(b),N;if(g=L(b,C))return N=d(C,6,be(b)),m(b),N;if(!de&&!M&&!g)return N=d(C,12,le(b)),f(ft.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,N.value),m(b),N;break}}return N}function ie(b,C){const{currentType:N}=C;let B=null;const de=b.currentChar();switch((N===7||N===8||N===11||N===9)&&(de===qt||de===qn)&&f(ft.INVALID_LINKED_FORMAT,s(),0),de){case"@":return b.next(),B=d(C,7,"@"),C.inLinked=!0,B;case".":return m(b),b.next(),d(C,8,".");case":":return m(b),b.next(),d(C,9,":");default:return T(b)?(B=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,B):I(b,C)||O(b,C)?(m(b),ie(b,C)):A(b,C)?(m(b),d(C,11,Be(b))):w(b,C)?(m(b),de==="{"?y(b,C)||B:d(C,10,D(b))):(N===7&&f(ft.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,Q(b,C))}}function Q(b,C){let N={type:13};if(C.braceNest>0)return y(b,C)||p(C);if(C.inLinked)return ie(b,C)||p(C);switch(b.currentChar()){case"{":return y(b,C)||p(C);case"}":return f(ft.UNBALANCED_CLOSING_BRACE,s(),0),b.next(),d(C,3,"}");case"@":return ie(b,C)||p(C);default:{if(T(b))return N=d(C,1,U(b)),C.braceNest=0,C.inLinked=!1,N;if(F(b))return d(C,0,Ie(b));break}}return N}function J(){const{currentType:b,offset:C,startLoc:N,endLoc:B}=l;return l.lastType=b,l.lastOffset=C,l.lastStartLoc=N,l.lastEndLoc=B,l.offset=r(),l.startLoc=s(),i.currentChar()===ci?d(l,13):Q(i,l)}return{nextToken:J,currentOffset:r,currentPosition:s,context:c}}const bS="parser",TS=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function wS(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function AS(t={}){const e=t.location!==!1,{onError:n}=t;function i(h,S,E,x,...L){const I=h.currentPosition();if(I.offset+=x,I.column+=x,n){const A=e?Pc(E,I):null,O=tl(S,A,{domain:bS,args:L});n(O)}}function r(h,S,E){const x={type:h};return e&&(x.start=S,x.end=S,x.loc={start:E,end:E}),x}function s(h,S,E,x){e&&(h.end=S,h.loc&&(h.loc.end=E))}function o(h,S){const E=h.context(),x=r(3,E.offset,E.startLoc);return x.value=S,s(x,h.currentOffset(),h.currentPosition()),x}function a(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:L}=E,I=r(5,x,L);return I.index=parseInt(S,10),h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function l(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:L}=E,I=r(4,x,L);return I.key=S,h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function c(h,S){const E=h.context(),{lastOffset:x,lastStartLoc:L}=E,I=r(9,x,L);return I.value=S.replace(TS,wS),h.nextToken(),s(I,h.currentOffset(),h.currentPosition()),I}function u(h){const S=h.nextToken(),E=h.context(),{lastOffset:x,lastStartLoc:L}=E,I=r(8,x,L);return S.type!==11?(i(h,ft.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),I.value="",s(I,x,L),{nextConsumeToken:S,node:I}):(S.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,jn(S)),I.value=S.value||"",s(I,h.currentOffset(),h.currentPosition()),{node:I})}function f(h,S){const E=h.context(),x=r(7,E.offset,E.startLoc);return x.value=S,s(x,h.currentOffset(),h.currentPosition()),x}function d(h){const S=h.context(),E=r(6,S.offset,S.startLoc);let x=h.nextToken();if(x.type===8){const L=u(h);E.modifier=L.node,x=L.nextConsumeToken||h.nextToken()}switch(x.type!==9&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),x=h.nextToken(),x.type===2&&(x=h.nextToken()),x.type){case 10:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=f(h,x.value||"");break;case 4:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=l(h,x.value||"");break;case 5:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=a(h,x.value||"");break;case 6:x.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(x)),E.key=c(h,x.value||"");break;default:{i(h,ft.UNEXPECTED_EMPTY_LINKED_KEY,S.lastStartLoc,0);const L=h.context(),I=r(7,L.offset,L.startLoc);return I.value="",s(I,L.offset,L.startLoc),E.key=I,s(E,L.offset,L.startLoc),{nextConsumeToken:x,node:E}}}return s(E,h.currentOffset(),h.currentPosition()),{node:E}}function p(h){const S=h.context(),E=S.currentType===1?h.currentOffset():S.offset,x=S.currentType===1?S.endLoc:S.startLoc,L=r(2,E,x);L.items=[];let I=null;do{const w=I||h.nextToken();switch(I=null,w.type){case 0:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),L.items.push(o(h,w.value||""));break;case 5:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),L.items.push(a(h,w.value||""));break;case 4:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),L.items.push(l(h,w.value||""));break;case 6:w.value==null&&i(h,ft.UNEXPECTED_LEXICAL_ANALYSIS,S.lastStartLoc,0,jn(w)),L.items.push(c(h,w.value||""));break;case 7:{const T=d(h);L.items.push(T.node),I=T.nextConsumeToken||null;break}}}while(S.currentType!==13&&S.currentType!==1);const A=S.currentType===1?S.lastOffset:h.currentOffset(),O=S.currentType===1?S.lastEndLoc:h.currentPosition();return s(L,A,O),L}function _(h,S,E,x){const L=h.context();let I=x.items.length===0;const A=r(1,S,E);A.cases=[],A.cases.push(x);do{const O=p(h);I||(I=O.items.length===0),A.cases.push(O)}while(L.currentType!==13);return I&&i(h,ft.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),s(A,h.currentOffset(),h.currentPosition()),A}function v(h){const S=h.context(),{offset:E,startLoc:x}=S,L=p(h);return S.currentType===13?L:_(h,E,x,L)}function m(h){const S=MS(h,Ot({},t)),E=S.context(),x=r(0,E.offset,E.startLoc);return e&&x.loc&&(x.loc.source=h),x.body=v(S),t.onCacheKey&&(x.cacheKey=t.onCacheKey(h)),E.currentType!==13&&i(S,ft.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,h[E.offset]||""),s(x,S.currentOffset(),S.currentPosition()),x}return{parse:m}}function jn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function RS(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function Ph(t,e){for(let n=0;n<t.length;n++)af(t[n],e)}function af(t,e){switch(t.type){case 1:Ph(t.cases,e),e.helper("plural");break;case 2:Ph(t.items,e);break;case 6:{af(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function CS(t,e={}){const n=RS(t);n.helper("normalize"),t.body&&af(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function PS(t){const e=t.body;return e.type===2?Lh(e):e.cases.forEach(n=>Lh(n)),t}function Lh(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=of(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function Jr(t){switch(t.t=t.type,t.type){case 0:{const e=t;Jr(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Jr(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Jr(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Jr(e.key),e.k=e.key,delete e.key,e.modifier&&(Jr(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function LS(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(o.source=t.loc.source);const a=()=>o;function l(v,m){o.code+=v}function c(v,m=!0){const h=m?i:"";l(r?h+"  ".repeat(v):h)}function u(v=!0){const m=++o.indentLevel;v&&c(m)}function f(v=!0){const m=--o.indentLevel;v&&c(m)}function d(){c(o.indentLevel)}return{context:a,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>o.needIndent}}function IS(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),fs(t,e.key),e.modifier?(t.push(", "),fs(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function DS(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(fs(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function US(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(fs(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function NS(t,e){e.body?fs(t,e.body):t.push("null")}function fs(t,e){const{helper:n}=t;switch(e.type){case 0:NS(t,e);break;case 1:US(t,e);break;case 2:DS(t,e);break;case 6:IS(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const OS=(t,e={})=>{const n=Pe(e.mode)?e.mode:"normal",i=Pe(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",o=t.helpers||[],a=LS(t,{filename:i,breakLineCode:r,needIndent:s});a.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(s),o.length>0&&(a.push(`const { ${of(o.map(u=>`${u}: _${u}`),", ")} } = ctx`),a.newline()),a.push("return "),fs(a,t),a.deindent(s),a.push("}"),delete t.helpers;const{code:l,map:c}=a.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function FS(t,e={}){const n=Ot({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,a=AS(n).parse(t);return i?(s&&PS(a),r&&Jr(a),{ast:a,code:""}):(CS(a,n),OS(a,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function BS(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(vr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(vr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function ii(t){return lt(t)&&lf(t)===0&&(On(t,"b")||On(t,"body"))}const fg=["b","body"];function kS(t){return Qi(t,fg)}const hg=["c","cases"];function HS(t){return Qi(t,hg,[])}const dg=["s","static"];function zS(t){return Qi(t,dg)}const pg=["i","items"];function VS(t){return Qi(t,pg,[])}const mg=["t","type"];function lf(t){return Qi(t,mg)}const gg=["v","value"];function zo(t,e){const n=Qi(t,gg);if(n!=null)return n;throw co(e)}const _g=["m","modifier"];function GS(t){return Qi(t,_g)}const vg=["k","key"];function WS(t){const e=Qi(t,vg);if(e)return e;throw co(6)}function Qi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(On(t,r)&&t[r]!=null)return t[r]}return n}const xg=[...fg,...hg,...dg,...pg,...vg,..._g,...gg,...mg];function co(t){return new Error(`unhandled node type: ${t}`)}function Al(t){return n=>XS(n,t)}function XS(t,e){const n=kS(e);if(n==null)throw co(0);if(lf(n)===1){const s=HS(n);return t.plural(s.reduce((o,a)=>[...o,Ih(t,a)],[]))}else return Ih(t,n)}function Ih(t,e){const n=zS(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=VS(e).reduce((r,s)=>[...r,Lc(t,s)],[]);return t.normalize(i)}}function Lc(t,e){const n=lf(e);switch(n){case 3:return zo(e,n);case 9:return zo(e,n);case 4:{const i=e;if(On(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(On(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw co(n)}case 5:{const i=e;if(On(i,"i")&&Nt(i.i))return t.interpolate(t.list(i.i));if(On(i,"index")&&Nt(i.index))return t.interpolate(t.list(i.index));throw co(n)}case 6:{const i=e,r=GS(i),s=WS(i);return t.linked(Lc(t,s),r?Lc(t,r):void 0,t.type)}case 7:return zo(e,n);case 8:return zo(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const $S=t=>t;let Vo=xt();function qS(t,e={}){let n=!1;const i=e.onError||gS;return e.onError=r=>{n=!0,i(r)},{...FS(t,e),detectError:n}}function jS(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Pe(t)){at(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||$S)(t),r=Vo[i];if(r)return r;const{ast:s,detectError:o}=qS(t,{...e,location:!1,jit:!0}),a=Al(s);return o?a:Vo[i]=a}else{const n=t.cacheKey;if(n){const i=Vo[n];return i||(Vo[n]=Al(t))}else return Al(t)}}let uo=null;function YS(t){uo=t}function KS(t,e,n){uo&&uo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const ZS=JS("function:translate");function JS(t){return e=>uo&&uo.emit(t,e)}const Ei={INVALID_ARGUMENT:mS,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},QS=24;function Mi(t){return tl(t,null,void 0)}function cf(t,e){return e.locale!=null?Dh(e.locale):Dh(t.locale)}let Rl;function Dh(t){if(Pe(t))return t;if(bt(t)){if(t.resolvedOnce&&Rl!=null)return Rl;if(t.constructor.name==="Function"){const e=t();if(hS(e))throw Mi(Ei.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Rl=e}else throw Mi(Ei.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Mi(Ei.NOT_SUPPORT_LOCALE_TYPE)}function ey(t,e,n){return[...new Set([n,...Ct(e)?e:lt(e)?Object.keys(e):Pe(e)?[e]:[n]])]}function Sg(t,e,n){const i=Pe(n)?n:fo,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let o=[n];for(;Ct(o);)o=Uh(s,o,e);const a=Ct(e)||!Je(e)?e:e.default?e.default:null;o=Pe(a)?[a]:a,Ct(o)&&Uh(s,o,!1),r.__localeChainCache.set(i,s)}return s}function Uh(t,e,n){let i=!0;for(let r=0;r<e.length&&at(i);r++){const s=e[r];Pe(s)&&(i=ty(t,e[r],n))}return i}function ty(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=ny(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function ny(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(Ct(n)||Je(n))&&n[r]&&(i=n[r])}return i}const er=[];er[0]={w:[0],i:[3,0],"[":[4],o:[7]};er[1]={w:[1],".":[2],"[":[4],o:[7]};er[2]={w:[2],i:[3,0],0:[3,0]};er[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};er[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};er[5]={"'":[4,0],o:8,l:[5,0]};er[6]={'"':[4,0],o:8,l:[6,0]};const iy=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function ry(t){return iy.test(t)}function sy(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function oy(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function ay(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:ry(e)?sy(e):"*"+e}function ly(t){const e=[];let n=-1,i=0,r=0,s,o,a,l,c,u,f;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,o===void 0||(o=ay(o),o===!1))return!1;d[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,a="\\"+_,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=oy(s),f=er[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(a=s,u()===!1))))return;if(i===7)return e}}const Nh=new Map;function cy(t,e){return lt(t)?t[e]:null}function uy(t,e){if(!lt(t))return null;let n=Nh.get(e);if(n||(n=ly(e),n&&Nh.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const o=n[s];if(xg.includes(o)&&ii(r))return null;const a=r[o];if(a===void 0||bt(r))return null;r=a,s++}return r}const fy="11.1.12",nl=-1,fo="en-US",Oh="",Fh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function hy(){return{upper:(t,e)=>e==="text"&&Pe(t)?t.toUpperCase():e==="vnode"&&lt(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Pe(t)?t.toLowerCase():e==="vnode"&&lt(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Pe(t)?Fh(t):e==="vnode"&&lt(t)&&"__v_isVNode"in t?Fh(t.children):t}}let yg;function dy(t){yg=t}let Eg;function py(t){Eg=t}let Mg;function my(t){Mg=t}let bg=null;const gy=t=>{bg=t},_y=()=>bg;let Tg=null;const Bh=t=>{Tg=t},vy=()=>Tg;let kh=0;function xy(t={}){const e=bt(t.onWarn)?t.onWarn:sS,n=Pe(t.version)?t.version:fy,i=Pe(t.locale)||bt(t.locale)?t.locale:fo,r=bt(i)?fo:i,s=Ct(t.fallbackLocale)||Je(t.fallbackLocale)||Pe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,o=Je(t.messages)?t.messages:Cl(r),a=Je(t.datetimeFormats)?t.datetimeFormats:Cl(r),l=Je(t.numberFormats)?t.numberFormats:Cl(r),c=Ot(xt(),t.modifiers,hy()),u=t.pluralRules||xt(),f=bt(t.missing)?t.missing:null,d=at(t.missingWarn)||us(t.missingWarn)?t.missingWarn:!0,p=at(t.fallbackWarn)||us(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,v=!!t.unresolving,m=bt(t.postTranslation)?t.postTranslation:null,h=Je(t.processor)?t.processor:null,S=at(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,x=bt(t.messageCompiler)?t.messageCompiler:yg,L=bt(t.messageResolver)?t.messageResolver:Eg||cy,I=bt(t.localeFallbacker)?t.localeFallbacker:Mg||ey,A=lt(t.fallbackContext)?t.fallbackContext:void 0,O=t,w=lt(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,T=lt(O.__numberFormatters)?O.__numberFormatters:new Map,F=lt(O.__meta)?O.__meta:{};kh++;const j={version:n,cid:kh,locale:i,fallbackLocale:s,messages:o,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:p,fallbackFormat:_,unresolving:v,postTranslation:m,processor:h,warnHtmlMessage:S,escapeParameter:E,messageCompiler:x,messageResolver:L,localeFallbacker:I,fallbackContext:A,onWarn:e,__meta:F};return j.datetimeFormats=a,j.numberFormats=l,j.__datetimeFormatters=w,j.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&KS(j,n,F),j}const Cl=t=>({[t]:xt()});function uf(t,e,n,i,r){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,r);return Pe(a)?a:e}else return e}function Ds(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Sy(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function yy(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(Sy(t,e[i]))return!0;return!1}function Hh(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,c,u,f]=Ic(...e),d=at(u.missingWarn)?u.missingWarn:t.missingWarn;at(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=cf(t,u),v=o(t,r,_);if(!Pe(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let m={},h,S=null;const E="datetime format";for(let I=0;I<v.length&&(h=v[I],m=n[h]||{},S=m[l],!Je(S));I++)uf(t,l,h,d,E);if(!Je(S)||!Pe(h))return i?nl:l;let x=`${h}__${l}`;el(f)||(x=`${x}__${JSON.stringify(f)}`);let L=a.get(x);return L||(L=new Intl.DateTimeFormat(h,Ot({},S,f)),a.set(x,L)),p?L.formatToParts(c):L.format(c)}const wg=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Ic(...t){const[e,n,i,r]=t,s=xt();let o=xt(),a;if(Pe(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Mi(Ei.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(c);try{a.toISOString()}catch{throw Mi(Ei.INVALID_ISO_DATE_ARGUMENT)}}else if(lS(e)){if(isNaN(e.getTime()))throw Mi(Ei.INVALID_DATE_ARGUMENT);a=e}else if(Nt(e))a=e;else throw Mi(Ei.INVALID_ARGUMENT);return Pe(n)?s.key=n:Je(n)&&Object.keys(n).forEach(l=>{wg.includes(l)?o[l]=n[l]:s[l]=n[l]}),Pe(i)?s.locale=i:Je(i)&&(o=i),Je(r)&&(o=r),[s.key||"",a,s,o]}function zh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Vh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,c,u,f]=Dc(...e),d=at(u.missingWarn)?u.missingWarn:t.missingWarn;at(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=cf(t,u),v=o(t,r,_);if(!Pe(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let m={},h,S=null;const E="number format";for(let I=0;I<v.length&&(h=v[I],m=n[h]||{},S=m[l],!Je(S));I++)uf(t,l,h,d,E);if(!Je(S)||!Pe(h))return i?nl:l;let x=`${h}__${l}`;el(f)||(x=`${x}__${JSON.stringify(f)}`);let L=a.get(x);return L||(L=new Intl.NumberFormat(h,Ot({},S,f)),a.set(x,L)),p?L.formatToParts(c):L.format(c)}const Ag=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Dc(...t){const[e,n,i,r]=t,s=xt();let o=xt();if(!Nt(e))throw Mi(Ei.INVALID_ARGUMENT);const a=e;return Pe(n)?s.key=n:Je(n)&&Object.keys(n).forEach(l=>{Ag.includes(l)?o[l]=n[l]:s[l]=n[l]}),Pe(i)?s.locale=i:Je(i)&&(o=i),Je(r)&&(o=r),[s.key||"",a,s,o]}function Gh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const Ey=t=>t,My=t=>"",by="text",Ty=t=>t.length===0?"":of(t),wy=dS;function Wh(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Ay(t){const e=Nt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(Nt(t.named.count)||Nt(t.named.n))?Nt(t.named.count)?t.named.count:Nt(t.named.n)?t.named.n:e:e}function Ry(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Cy(t={}){const e=t.locale,n=Ay(t),i=lt(t.pluralRules)&&Pe(e)&&bt(t.pluralRules[e])?t.pluralRules[e]:Wh,r=lt(t.pluralRules)&&Pe(e)&&bt(t.pluralRules[e])?Wh:void 0,s=h=>h[i(n,h.length,r)],o=t.list||[],a=h=>o[h],l=t.named||xt();Nt(t.pluralIndex)&&Ry(n,l);const c=h=>l[h];function u(h,S){const E=bt(t.messages)?t.messages(h,!!S):lt(t.messages)?t.messages[h]:!1;return E||(t.parent?t.parent.message(h):My)}const f=h=>t.modifiers?t.modifiers[h]:Ey,d=Je(t.processor)&&bt(t.processor.normalize)?t.processor.normalize:Ty,p=Je(t.processor)&&bt(t.processor.interpolate)?t.processor.interpolate:wy,_=Je(t.processor)&&Pe(t.processor.type)?t.processor.type:by,m={list:a,named:c,plural:s,linked:(h,...S)=>{const[E,x]=S;let L="text",I="";S.length===1?lt(E)?(I=E.modifier||I,L=E.type||L):Pe(E)&&(I=E||I):S.length===2&&(Pe(E)&&(I=E||I),Pe(x)&&(L=x||L));const A=u(h,!0)(m),O=L==="vnode"&&Ct(A)&&I?A[0]:A;return I?f(I)(O,L):O},message:u,type:_,interpolate:p,normalize:d,values:Ot(xt(),o,l)};return m}const Xh=()=>"",wn=t=>bt(t);function $h(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,c]=Uc(...e),u=at(c.missingWarn)?c.missingWarn:t.missingWarn,f=at(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=at(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Pe(c.default)||at(c.default)?at(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,v=n||_!=null&&(Pe(_)||bt(_)),m=cf(t,c);d&&Py(c);let[h,S,E]=p?[l,m,a[m]||xt()]:Rg(t,l,m,o,f,u),x=h,L=l;if(!p&&!(Pe(x)||ii(x)||wn(x))&&v&&(x=_,L=x),!p&&(!(Pe(x)||ii(x)||wn(x))||!Pe(S)))return r?nl:l;let I=!1;const A=()=>{I=!0},O=wn(x)?x:Cg(t,l,S,x,L,A);if(I)return x;const w=Dy(t,S,E,c),T=Cy(w),F=Ly(t,O,T);let j=i?i(F,l):F;if(d&&Pe(j)&&(j=uS(j)),__INTLIFY_PROD_DEVTOOLS__){const q={timestamp:Date.now(),key:Pe(l)?l:wn(x)?x.key:"",locale:S||(wn(x)?x.locale:""),format:Pe(x)?x:wn(x)?x.source:"",message:j};q.meta=Ot({},t.__meta,_y()||{}),ZS(q)}return j}function Py(t){Ct(t.list)?t.list=t.list.map(e=>Pe(e)?Ah(e):e):lt(t.named)&&Object.keys(t.named).forEach(e=>{Pe(t.named[e])&&(t.named[e]=Ah(t.named[e]))})}function Rg(t,e,n,i,r,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=xt(),d,p=null;const _="translate";for(let v=0;v<u.length&&(d=u[v],f=o[d]||xt(),(p=l(f,e))===null&&(p=f[e]),!(Pe(p)||ii(p)||wn(p)));v++)if(!yy(d,u)){const m=uf(t,e,d,s,_);m!==e&&(p=m)}return[p,d,f]}function Cg(t,e,n,i,r,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(wn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(o==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=o(i,Iy(t,n,r,i,a,s));return l.locale=n,l.key=e,l.source=i,l}function Ly(t,e,n){return e(n)}function Uc(...t){const[e,n,i]=t,r=xt();if(!Pe(e)&&!Nt(e)&&!wn(e)&&!ii(e))throw Mi(Ei.INVALID_ARGUMENT);const s=Nt(e)?String(e):(wn(e),e);return Nt(n)?r.plural=n:Pe(n)?r.default=n:Je(n)&&!el(n)?r.named=n:Ct(n)&&(r.list=n),Nt(i)?r.plural=i:Pe(i)?r.default=i:Je(i)&&Ot(r,i),[s,r]}function Iy(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:o=>{throw s&&s(o),o},onCacheKey:o=>oS(e,n,o)}}function Dy(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let v=o(n,p);if(v==null&&(u||_)){const[,,m]=Rg(u||t,p,e,a,l,c);v=o(m,p)}if(Pe(v)||ii(v)){let m=!1;const S=Cg(t,p,e,v,p,()=>{m=!0});return m?Xh:S}else return wn(v)?v:Xh}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),Nt(i.plural)&&(d.pluralIndex=i.plural),d}BS();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Uy="11.1.12";function Ny(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(vr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(vr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(vr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(vr().__INTLIFY_PROD_DEVTOOLS__=!1)}const dn={UNEXPECTED_RETURN_TYPE:QS,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function yn(t,...e){return tl(t,null,void 0)}const Nc=Ji("__translateVNode"),Oc=Ji("__datetimeParts"),Fc=Ji("__numberParts"),Pg=Ji("__setPluralRules"),Lg=Ji("__injectWithOption"),Bc=Ji("__dispose");function ho(t){if(!lt(t)||ii(t))return t;for(const e in t)if(On(t,e))if(!e.includes("."))lt(t[e])&&ho(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let o=0;o<i;o++){if(n[o]==="__proto__")throw new Error(`unsafe key: ${n[o]}`);if(n[o]in r||(r[n[o]]=xt()),!lt(r[n[o]])){s=!0;break}r=r[n[o]]}if(s||(ii(r)?xg.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!ii(r)){const o=r[n[i]];lt(o)&&ho(o)}}return t}function ff(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,o=Je(n)?n:Ct(i)?xt():{[t]:xt()};if(Ct(i)&&i.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:c}=a;l?(o[l]=o[l]||xt(),_a(c,o[l])):_a(c,o)}else Pe(a)&&_a(JSON.parse(a),o)}),r==null&&s)for(const a in o)On(o,a)&&ho(o[a]);return o}function Ig(t){return t.type}function Dg(t,e,n){let i=lt(e.messages)?e.messages:xt();"__i18nGlobal"in n&&(i=ff(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(lt(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(lt(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function qh(t){return it(To,null,t,0)}const jh="__INTLIFY_META__",Yh=()=>[],Oy=()=>!1;let Kh=0;function Zh(t){return((e,n,i,r)=>t(n,i,ji()||void 0,r))}const Fy=()=>{const t=ji();let e=null;return t&&(e=Ig(t)[jh])?{[jh]:e}:null};function hf(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Ba?an:ju;let o=at(t.inheritLocale)?t.inheritLocale:!0;const a=s(e&&o?e.locale.value:Pe(t.locale)?t.locale:fo),l=s(e&&o?e.fallbackLocale.value:Pe(t.fallbackLocale)||Ct(t.fallbackLocale)||Je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),c=s(ff(a.value,t)),u=s(Je(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),f=s(Je(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=e?e.missingWarn:at(t.missingWarn)||us(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:at(t.fallbackWarn)||us(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:at(t.fallbackRoot)?t.fallbackRoot:!0,v=!!t.fallbackFormat,m=bt(t.missing)?t.missing:null,h=bt(t.missing)?Zh(t.missing):null,S=bt(t.postTranslation)?t.postTranslation:null,E=e?e.warnHtmlMessage:at(t.warnHtmlMessage)?t.warnHtmlMessage:!0,x=!!t.escapeParameter;const L=e?e.modifiers:Je(t.modifiers)?t.modifiers:{};let I=t.pluralRules||e&&e.pluralRules,A;A=(()=>{i&&Bh(null);const g={version:Uy,locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:L,pluralRules:I,missing:h===null?void 0:h,missingWarn:d,fallbackWarn:p,fallbackFormat:v,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:E,escapeParameter:x,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};g.datetimeFormats=u.value,g.numberFormats=f.value,g.__datetimeFormatters=Je(A)?A.__datetimeFormatters:void 0,g.__numberFormatters=Je(A)?A.__numberFormatters:void 0;const P=xy(g);return i&&Bh(P),P})(),Ds(A,a.value,l.value);function w(){return[a.value,l.value,c.value,u.value,f.value]}const T=Ut({get:()=>a.value,set:g=>{A.locale=g,a.value=g}}),F=Ut({get:()=>l.value,set:g=>{A.fallbackLocale=g,l.value=g,Ds(A,a.value,g)}}),j=Ut(()=>c.value),q=Ut(()=>u.value),oe=Ut(()=>f.value);function ae(){return bt(S)?S:null}function K(g){S=g,A.postTranslation=g}function Z(){return m}function X(g){g!==null&&(h=Zh(g)),m=g,A.missing=h}const me=(g,P,z,Y,$,Ee)=>{w();let he;try{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=e?vy():void 0),he=g(A)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(A.fallbackContext=void 0)}if(z!=="translate exists"&&Nt(he)&&he===nl||z==="translate exists"&&!he){const[Te,Re]=P();return e&&_?Y(e):$(Te)}else{if(Ee(he))return he;throw yn(dn.UNEXPECTED_RETURN_TYPE)}};function xe(...g){return me(P=>Reflect.apply($h,null,[P,...g]),()=>Uc(...g),"translate",P=>Reflect.apply(P.t,P,[...g]),P=>P,P=>Pe(P))}function Se(...g){const[P,z,Y]=g;if(Y&&!lt(Y))throw yn(dn.INVALID_ARGUMENT);return xe(P,z,Ot({resolvedMessage:!0},Y||{}))}function Ie(...g){return me(P=>Reflect.apply(Hh,null,[P,...g]),()=>Ic(...g),"datetime format",P=>Reflect.apply(P.d,P,[...g]),()=>Oh,P=>Pe(P)||Ct(P))}function je(...g){return me(P=>Reflect.apply(Vh,null,[P,...g]),()=>Dc(...g),"number format",P=>Reflect.apply(P.n,P,[...g]),()=>Oh,P=>Pe(P)||Ct(P))}function re(g){return g.map(P=>Pe(P)||Nt(P)||at(P)?qh(String(P)):P)}const be={normalize:re,interpolate:g=>g,type:"vnode"};function H(...g){return me(P=>{let z;const Y=P;try{Y.processor=be,z=Reflect.apply($h,null,[Y,...g])}finally{Y.processor=null}return z},()=>Uc(...g),"translate",P=>P[Nc](...g),P=>[qh(P)],P=>Ct(P))}function se(...g){return me(P=>Reflect.apply(Vh,null,[P,...g]),()=>Dc(...g),"number format",P=>P[Fc](...g),Yh,P=>Pe(P)||Ct(P))}function ce(...g){return me(P=>Reflect.apply(Hh,null,[P,...g]),()=>Ic(...g),"datetime format",P=>P[Oc](...g),Yh,P=>Pe(P)||Ct(P))}function le(g){I=g,A.pluralRules=I}function Be(g,P){return me(()=>{if(!g)return!1;const z=Pe(P)?P:a.value,Y=y(z),$=A.messageResolver(Y,g);return ii($)||wn($)||Pe($)},()=>[g],"translate exists",z=>Reflect.apply(z.te,z,[g,P]),Oy,z=>at(z))}function D(g){let P=null;const z=Sg(A,l.value,a.value);for(let Y=0;Y<z.length;Y++){const $=c.value[z[Y]]||{},Ee=A.messageResolver($,g);if(Ee!=null){P=Ee;break}}return P}function U(g){const P=D(g);return P??(e?e.tm(g)||{}:{})}function y(g){return c.value[g]||{}}function ie(g,P){if(r){const z={[g]:P};for(const Y in z)On(z,Y)&&ho(z[Y]);P=z[g]}c.value[g]=P,A.messages=c.value}function Q(g,P){c.value[g]=c.value[g]||{};const z={[g]:P};if(r)for(const Y in z)On(z,Y)&&ho(z[Y]);P=z[g],_a(P,c.value[g]),A.messages=c.value}function J(g){return u.value[g]||{}}function b(g,P){u.value[g]=P,A.datetimeFormats=u.value,zh(A,g,P)}function C(g,P){u.value[g]=Ot(u.value[g]||{},P),A.datetimeFormats=u.value,zh(A,g,P)}function N(g){return f.value[g]||{}}function B(g,P){f.value[g]=P,A.numberFormats=f.value,Gh(A,g,P)}function de(g,P){f.value[g]=Ot(f.value[g]||{},P),A.numberFormats=f.value,Gh(A,g,P)}Kh++,e&&Ba&&(Hn(e.locale,g=>{o&&(a.value=g,A.locale=g,Ds(A,a.value,l.value))}),Hn(e.fallbackLocale,g=>{o&&(l.value=g,A.fallbackLocale=g,Ds(A,a.value,l.value))}));const M={id:Kh,locale:T,fallbackLocale:F,get inheritLocale(){return o},set inheritLocale(g){o=g,g&&e&&(a.value=e.locale.value,l.value=e.fallbackLocale.value,Ds(A,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:j,get modifiers(){return L},get pluralRules(){return I||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(g){d=g,A.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(g){p=g,A.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(g){_=g},get fallbackFormat(){return v},set fallbackFormat(g){v=g,A.fallbackFormat=v},get warnHtmlMessage(){return E},set warnHtmlMessage(g){E=g,A.warnHtmlMessage=g},get escapeParameter(){return x},set escapeParameter(g){x=g,A.escapeParameter=g},t:xe,getLocaleMessage:y,setLocaleMessage:ie,mergeLocaleMessage:Q,getPostTranslationHandler:ae,setPostTranslationHandler:K,getMissingHandler:Z,setMissingHandler:X,[Pg]:le};return M.datetimeFormats=q,M.numberFormats=oe,M.rt=Se,M.te=Be,M.tm=U,M.d=Ie,M.n=je,M.getDateTimeFormat=J,M.setDateTimeFormat=b,M.mergeDateTimeFormat=C,M.getNumberFormat=N,M.setNumberFormat=B,M.mergeNumberFormat=de,M[Lg]=n,M[Nc]=H,M[Oc]=ce,M[Fc]=se,M}function By(t){const e=Pe(t.locale)?t.locale:fo,n=Pe(t.fallbackLocale)||Ct(t.fallbackLocale)||Je(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=bt(t.missing)?t.missing:void 0,r=at(t.silentTranslationWarn)||us(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=at(t.silentFallbackWarn)||us(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=at(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=Je(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=bt(t.postTranslation)?t.postTranslation:void 0,f=Pe(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,p=at(t.sync)?t.sync:!0;let _=t.messages;if(Je(t.sharedMessages)){const L=t.sharedMessages;_=Object.keys(L).reduce((A,O)=>{const w=A[O]||(A[O]={});return Ot(w,L[O]),A},_||{})}const{__i18n:v,__root:m,__injectWithOption:h}=t,S=t.datetimeFormats,E=t.numberFormats,x=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:x,datetimeFormats:S,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:p,__i18n:v,__root:m,__injectWithOption:h}}function kc(t={}){const e=hf(By(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return at(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=at(r)?!r:r},get silentFallbackWarn(){return at(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=at(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function ky(t,e,n){return{beforeCreate(){const i=ji();if(!i)throw yn(dn.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Jh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=kc(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Jh(t,r);else{this.$i18n=kc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&Dg(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=ji();if(!i)throw yn(dn.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Jh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Pg](e.pluralizationRules||t.pluralizationRules);const n=ff(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const df={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function Hy({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===on?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},xt())}function Ug(){return on}const zy=Wt({name:"i18n-t",props:Ot({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>Nt(t)||!isNaN(t)}},df),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||tr({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),o=xt();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=Pe(t.plural)?+t.plural:t.plural);const a=Hy(e,s),l=r[Nc](t.keypath,a,o),c=Ot(xt(),i),u=Pe(t.tag)||lt(t.tag)?t.tag:Ug();return Ja(u,c,l)}}}),Qh=zy;function Vy(t){return Ct(t)&&!Pe(t[0])}function Ng(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const o={part:!0};let a=xt();t.locale&&(o.locale=t.locale),Pe(t.format)?o.key=t.format:lt(t.format)&&(Pe(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,p)=>n.includes(p)?Ot(xt(),d,{[p]:t.format[p]}):d,xt()));const l=i(t.value,o,a);let c=[o.key];Ct(l)?c=l.map((d,p)=>{const _=r[d.type],v=_?_({[d.type]:d.value,index:p,parts:l}):[d.value];return Vy(v)&&(v[0].key=`${d.type}-${p}`),v}):Pe(l)&&(c=[l]);const u=Ot(xt(),s),f=Pe(t.tag)||lt(t.tag)?t.tag:Ug();return Ja(f,u,c)}}const Gy=Wt({name:"i18n-n",props:Ot({value:{type:Number,required:!0},format:{type:[String,Object]}},df),setup(t,e){const n=t.i18n||tr({useScope:t.scope,__useComponent:!0});return Ng(t,e,Ag,(...i)=>n[Fc](...i))}}),ed=Gy;function Wy(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function Xy(t){const e=o=>{const{instance:a,value:l}=o;if(!a||!a.$)throw yn(dn.UNEXPECTED_ERROR);const c=Wy(t,a.$),u=td(l);return[Reflect.apply(c.t,c,[...nd(u)]),c]};return{created:(o,a)=>{const[l,c]=e(a);Ba&&t.global===c&&(o.__i18nWatcher=Hn(c.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=c,o.textContent=l},unmounted:o=>{Ba&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,c=td(a);o.textContent=Reflect.apply(l.t,l,[...nd(c)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function td(t){if(Pe(t))return{path:t};if(Je(t)){if(!("path"in t))throw yn(dn.REQUIRED_VALUE,"path");return t}else throw yn(dn.INVALID_VALUE)}function nd(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,o={},a=i||{};return Pe(n)&&(o.locale=n),Nt(r)&&(o.plural=r),Nt(s)&&(o.plural=s),[e,a,o]}function $y(t,e,...n){const i=Je(n[0])?n[0]:{};(at(i.globalInstall)?i.globalInstall:!0)&&([Qh.name,"I18nT"].forEach(s=>t.component(s,Qh)),[ed.name,"I18nN"].forEach(s=>t.component(s,ed)),[rd.name,"I18nD"].forEach(s=>t.component(s,rd))),t.directive("t",Xy(e))}const qy=Ji("global-vue-i18n");function jy(t={}){const e=__VUE_I18N_LEGACY_API__&&at(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=at(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=Yy(t,e),o=Ji("");function a(f){return i.get(f)||null}function l(f,d){i.set(f,d)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...d){if(f.__VUE_I18N_SYMBOL__=o,f.provide(f.__VUE_I18N_SYMBOL__,u),Je(d[0])){const v=d[0];u.__composerExtend=v.__composerExtend,u.__vueI18nExtend=v.__vueI18nExtend}let p=null;!e&&n&&(p=iE(f,u.global)),__VUE_I18N_FULL_INSTALL__&&$y(f,u,...d),__VUE_I18N_LEGACY_API__&&e&&f.mixin(ky(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:a,__setInstance:l,__deleteInstance:c};return u}function tr(t={}){const e=ji();if(e==null)throw yn(dn.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw yn(dn.NOT_INSTALLED);const n=Ky(e),i=Jy(n),r=Ig(e),s=Zy(t,r);if(s==="global")return Dg(i,t,r),i;if(s==="parent"){let l=Qy(n,e,t.__useComponent);return l==null&&(l=i),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Ot({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),a=hf(l),o.__composerExtend&&(a[Bc]=o.__composerExtend(a)),tE(o,e,a),o.__setInstance(e,a)}return a}function Yy(t,e){const n=ku(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>kc(t)):n.run(()=>hf(t));if(i==null)throw yn(dn.UNEXPECTED_ERROR);return[n,i]}function Ky(t){const e=kn(t.isCE?qy:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw yn(t.isCE?dn.NOT_INSTALLED_WITH_PROVIDE:dn.UNEXPECTED_ERROR);return e}function Zy(t,e){return el(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function Jy(t){return t.mode==="composition"?t.global:t.global.__composer}function Qy(t,e,n=!1){let i=null;const r=e.root;let s=eE(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")i=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(i=a.__composer,n&&i&&!i[Lg]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function eE(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function tE(t,e,n){ys(()=>{},e),Es(()=>{const i=n;t.__deleteInstance(e);const r=i[Bc];r&&(r(),delete i[Bc])},e)}const nE=["locale","fallbackLocale","availableLocales"],id=["t","rt","d","n","tm","te"];function iE(t,e){const n=Object.create(null);return nE.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw yn(dn.UNEXPECTED_ERROR);const o=Pt(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,o)}),t.config.globalProperties.$i18n=n,id.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw yn(dn.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,id.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const rE=Wt({name:"i18n-d",props:Ot({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},df),setup(t,e){const n=t.i18n||tr({useScope:t.scope,__useComponent:!0});return Ng(t,e,wg,(...i)=>n[Oc](...i))}}),rd=rE;Ny();dy(jS);py(uy);my(Sg);if(__INTLIFY_PROD_DEVTOOLS__){const t=vr();t.__INTLIFY__=!0,YS(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const sE=["en-US","zh-TW"],Og=rf("lang",()=>{const{locale:t}=tr({useScope:"global"}),e=localStorage.getItem("lang");t.value=sE.includes(e)?e:"en-US",ef(()=>{localStorage.setItem("lang",t.value)});const n=Ut(()=>t.value==="en-US");return{locale:t,isEnUS:n,changeLang:()=>{switch(t.value){case"en-US":t.value="zh-TW";break;case"zh-TW":t.value="en-US";break}}}}),oE=Wt({name:"global-sidebar",components:{AHoverable:ig,Switch:rg},props:{toggled:{type:Boolean,default:!1},toggleSidebar:{type:Function,default:()=>{}}},setup(){const t=Ao(),e=Og(),{t:n}=tr();return{icons:sg,themeStore:t,langStore:e,t:n}}}),aE={class:"relative flex row j-around nly w-160 h-50 pt-24 mt-32 mr-10 ml-10 top-line"};function lE(t,e,n,i,r,s){const o=Mr("AHoverable"),a=Mr("Switch");return mt(),St(on,null,[We("aside",{class:Xi(["absolute r--200 flex flex-col t-0 w-180 h-full pt-50 pr-10 pl-10 bg-glassy tr-100 z-99",{"sm:r-0":t.toggled}])},[it(o,{to:"home",imgSrc:t.icons.home,text:t.t("home"),shape:"pill"},null,8,["imgSrc","text"]),it(o,{to:"works",imgSrc:t.icons.list,text:t.t("work"),shape:"pill"},null,8,["imgSrc","text"]),it(o,{to:"blogs",imgSrc:t.icons.list,text:t.t("blog"),shape:"pill"},null,8,["imgSrc","text"]),We("div",aE,[it(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["change","isActive","imgSrcL","imgSrcR"]),it(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])])],2),We("div",{class:Xi(["bg-dark fixed t-0 l-0 w-dvw h-dvh o-0 z--0 tr-100",{"sm:o-1 sm:z-98":t.toggled}]),onClick:e[0]||(e[0]=l=>t.toggleSidebar())},null,2)],64)}const cE=Wn(oE,[["render",lE]]),uE=Wt({name:"global-header",components:{AHoverable:ig,Switch:rg,GlobalSidebar:cE},setup(){const t=Ao(),e=Og(),{t:n}=tr(),i=an(!1),r=()=>{i.value=!i.value},s=()=>{window.innerWidth>640&&(i.value=!1)};return ys(()=>window.addEventListener("resize",s)),Es(()=>window.removeEventListener("resize",s)),{icons:sg,themeStore:t,langStore:e,t:n,toggled:i,toggleSidebar:r}}}),fE={class:"fixed flex row a-center j-between t-0 l-0 w-dvw h-50 font-size-16 z-100"},hE={class:"flex row j-around w-400 ml-70 sm:none"},dE={class:"flex row a-center j-around w-116 pr-16 sm:none"},pE=["src"],mE=["src"];function gE(t,e,n,i,r,s){const o=Mr("AHoverable"),a=Mr("Switch"),l=Mr("GlobalSidebar");return mt(),St(on,null,[We("header",fE,[e[1]||(e[1]=We("h1",{class:"absolute l-0 w-38 ml-16 mr-16 mt-auto mb-auto font-size-36 italic user-select-none"},"Pc",-1)),We("nav",hE,[it(o,{to:"home",effect:"underline-m",text:t.t("home")},null,8,["text"]),it(o,{to:"works",effect:"underline-m",text:t.t("work")},null,8,["text"]),it(o,{to:"blogs",effect:"underline-m",text:t.t("blog")},null,8,["text"])]),We("aside",dE,[it(a,{change:t.themeStore.changeTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["change","isActive","imgSrcL","imgSrcR"]),it(a,{change:t.langStore.changeLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["change","isActive"])]),We("button",{class:"none relative w-50 h-50 bg-none border-none pointer sm:block sm:ml-auto",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?yi("",!0):(mt(),St("img",{key:0,src:t.icons.menuBurger,alt:"menu"},null,8,pE)),t.toggled?(mt(),St("img",{key:1,src:t.icons.crossSmall,alt:"close"},null,8,mE)):yi("",!0)])]),it(l,{toggled:t.toggled,toggleSidebar:t.toggleSidebar},null,8,["toggled","toggleSidebar"])],64)}const _E=Wn(uE,[["render",gE]]),vE=Wt({__name:"App",setup(t){const e=Ao();return ef(()=>{document.body.style.setProperty("--theme",e.theme)}),(n,i)=>{const r=Mr("router-view");return mt(),St(on,null,[it(_E),it(r)],64)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Qr=typeof document<"u";function Fg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Fg(t.default)}const ut=Object.assign;function Pl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Vn(r)?r.map(t):t(r)}return n}const eo=()=>{},Vn=Array.isArray,Bg=/#/g,SE=/&/g,yE=/\//g,EE=/=/g,ME=/\?/g,kg=/\+/g,bE=/%5B/g,TE=/%5D/g,Hg=/%5E/g,wE=/%60/g,zg=/%7B/g,AE=/%7C/g,Vg=/%7D/g,RE=/%20/g;function pf(t){return encodeURI(""+t).replace(AE,"|").replace(bE,"[").replace(TE,"]")}function CE(t){return pf(t).replace(zg,"{").replace(Vg,"}").replace(Hg,"^")}function Hc(t){return pf(t).replace(kg,"%2B").replace(RE,"+").replace(Bg,"%23").replace(SE,"%26").replace(wE,"`").replace(zg,"{").replace(Vg,"}").replace(Hg,"^")}function PE(t){return Hc(t).replace(EE,"%3D")}function LE(t){return pf(t).replace(Bg,"%23").replace(ME,"%3F")}function IE(t){return t==null?"":LE(t).replace(yE,"%2F")}function po(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const DE=/\/$/,UE=t=>t.replace(DE,"");function Ll(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=BE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:po(o)}}function NE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function OE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&hs(e.matched[i],n.matched[r])&&Gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return Vn(t)?od(t,e):Vn(e)?od(e,t):t===e}function od(t,e){return Vn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function BE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mo;(function(t){t.pop="pop",t.push="push"})(mo||(mo={}));var to;(function(t){t.back="back",t.forward="forward",t.unknown=""})(to||(to={}));function kE(t){if(!t)if(Qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),UE(t)}const HE=/^[^#]+#/;function zE(t,e){return t.replace(HE,"#")+e}function VE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const il=()=>({left:window.scrollX,top:window.scrollY});function GE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=VE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ad(t,e){return(history.state?history.state.position-e:-1)+t}const zc=new Map;function WE(t,e){zc.set(t,e)}function XE(t){const e=zc.get(t);return zc.delete(t),e}let $E=()=>location.protocol+"//"+location.host;function Wg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),sd(l,"")}return sd(n,t)+i+r}function qE(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=Wg(t,location),_=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===_){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(n.value,_,{delta:m,type:mo.pop,direction:m?m>0?to.forward:to.back:to.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(ut({},d.state,{scroll:il()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function ld(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?il():null}}function jE(t){const{history:e,location:n}=window,i={value:Wg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:$E()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=ut({},e.state,ld(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ut({},r.value,e.state,{forward:l,scroll:il()});s(u.current,u,!0);const f=ut({},ld(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function YE(t){t=kE(t);const e=jE(t),n=qE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ut({location:"",base:t,go:i,createHref:zE.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function KE(t){return typeof t=="string"||t&&typeof t=="object"}function Xg(t){return typeof t=="string"||typeof t=="symbol"}const $g=Symbol("");var cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cd||(cd={}));function ds(t,e){return ut(new Error,{type:t,[$g]:!0},e)}function ui(t,e){return t instanceof Error&&$g in t&&(e==null||!!(t.type&e))}const ud="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},JE=/[.+*?^${}()[\]/\\]/g;function QE(t,e){const n=ut({},ZE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(JE,"\\$&"),p+=40;else if(d.type===1){const{value:_,repeatable:v,optional:m,regexp:h}=d;s.push({name:_,repeatable:v,optional:m});const S=h||ud;if(S!==ud){p+=10;try{new RegExp(`(${S})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+x.message)}}let E=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,p+=20,m&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",_=s[d-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,h=_ in c?c[_]:"";if(Vn(h)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=Vn(h)?h.join("/"):h;if(!S)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function eM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function qg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=eM(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(fd(i))return 1;if(fd(r))return-1}return r.length-i.length}function fd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tM={type:0,value:""},nM=/[a-zA-Z0-9_]/;function iM(t){if(!t)return[[]];if(t==="/")return[[tM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:nM.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function rM(t,e,n){const i=QE(iM(t.path),n),r=ut(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function sM(t,e){const n=[],i=new Map;e=md({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const _=!p,v=dd(f);v.aliasOf=p&&p.record;const m=md(e,f),h=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of x)h.push(dd(ut({},v,{components:p?p.record.components:v.components,path:L,aliasOf:p?p.record:v})))}let S,E;for(const x of h){const{path:L}=x;if(d&&L[0]!=="/"){const I=d.record.path,A=I[I.length-1]==="/"?"":"/";x.path=d.record.path+(L&&A+L)}if(S=rM(x,d,m),p?p.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),_&&f.name&&!pd(S)&&o(f.name)),jg(S)&&l(S),v.children){const I=v.children;for(let A=0;A<I.length;A++)s(I[A],S,p&&p.children[A])}p=p||S}return E?()=>{o(E)}:eo}function o(f){if(Xg(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=lM(f,n);n.splice(d,0,f),f.record.name&&!pd(f)&&i.set(f.record.name,f)}function c(f,d){let p,_={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw ds(1,{location:f});m=p.record.name,_=ut(hd(d.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&hd(f.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(f.path!=null)v=f.path,p=n.find(E=>E.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!p)throw ds(1,{location:f,currentLocation:d});m=p.record.name,_=ut({},d.params,f.params),v=p.stringify(_)}const h=[];let S=p;for(;S;)h.unshift(S.record),S=S.parent;return{name:m,path:v,params:_,matched:h,meta:aM(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function hd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function dd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:oM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function oM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function pd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aM(t){return t.reduce((e,n)=>ut(e,n.meta),{})}function md(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function lM(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;qg(t,e[s])<0?i=s:n=s+1}const r=cM(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function cM(t){let e=t;for(;e=e.parent;)if(jg(e)&&qg(t,e)===0)return e}function jg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(kg," "),o=s.indexOf("="),a=po(o<0?s:s.slice(0,o)),l=o<0?null:po(s.slice(o+1));if(a in e){let c=e[a];Vn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function gd(t){let e="";for(let n in t){const i=t[n];if(n=PE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(i)?i.map(s=>s&&Hc(s)):[i&&Hc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function fM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const hM=Symbol(""),_d=Symbol(""),mf=Symbol(""),Yg=Symbol(""),Vc=Symbol("");function Us(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ki(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ds(4,{from:n,to:e})):d instanceof Error?l(d):KE(d)?l(ds(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Il(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Fg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(ki(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=xE(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&ki(p,n,i,o,a,r)()}))}}return s}function vd(t){const e=kn(mf),n=kn(Yg),i=Ut(()=>{const l=Rn(t.to);return e.resolve(l)}),r=Ut(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(hs.bind(null,u));if(d>-1)return d;const p=xd(l[c-2]);return c>1&&xd(u)===p&&f[f.length-1].path!==p?f.findIndex(hs.bind(null,l[c-2])):d}),s=Ut(()=>r.value>-1&&_M(n.params,i.value.params)),o=Ut(()=>r.value>-1&&r.value===n.matched.length-1&&Gg(n.params,i.value.params));function a(l={}){if(gM(l)){const c=e[Rn(t.replace)?"replace":"push"](Rn(t.to)).catch(eo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ut(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function dM(t){return t.length===1?t[0]:t}const pM=Wt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vd,setup(t,{slots:e}){const n=Mo(vd(t)),{options:i}=kn(mf),r=Ut(()=>({[Sd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&dM(e.default(n));return t.custom?s:Ja("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),mM=pM;function gM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _M(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Vn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function xd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sd=(t,e,n)=>t??e??n,vM=Wt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=kn(Vc),r=Ut(()=>t.route||i.value),s=kn(_d,0),o=Ut(()=>{let c=Rn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Ut(()=>r.value.matched[o.value]);pa(_d,Ut(()=>o.value+1)),pa(hM,a),pa(Vc,r);const l=an();return Hn(()=>[l.value,a.value,t.name],([c,u,f],[d,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!hs(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return yd(n.default,{Component:d,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Ja(d,ut({},_,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return yd(n.default,{Component:m,route:c})||m}}});function yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xM=vM;function SM(t){const e=sM(t.routes,t),n=t.parseQuery||uM,i=t.stringifyQuery||gd,r=t.history,s=Us(),o=Us(),a=Us(),l=ju(Ci);let c=Ci;Qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Pl.bind(null,H=>""+H),f=Pl.bind(null,IE),d=Pl.bind(null,po);function p(H,se){let ce,le;return Xg(H)?(ce=e.getRecordMatcher(H),le=se):le=H,e.addRoute(le,ce)}function _(H){const se=e.getRecordMatcher(H);se&&e.removeRoute(se)}function v(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function h(H,se){if(se=ut({},se||l.value),typeof H=="string"){const y=Ll(n,H,se.path),ie=e.resolve({path:y.path},se),Q=r.createHref(y.fullPath);return ut(y,ie,{params:d(ie.params),hash:po(y.hash),redirectedFrom:void 0,href:Q})}let ce;if(H.path!=null)ce=ut({},H,{path:Ll(n,H.path,se.path).path});else{const y=ut({},H.params);for(const ie in y)y[ie]==null&&delete y[ie];ce=ut({},H,{params:f(y)}),se.params=f(se.params)}const le=e.resolve(ce,se),Be=H.hash||"";le.params=u(d(le.params));const D=NE(i,ut({},H,{hash:CE(Be),path:le.path})),U=r.createHref(D);return ut({fullPath:D,hash:Be,query:i===gd?fM(H.query):H.query||{}},le,{redirectedFrom:void 0,href:U})}function S(H){return typeof H=="string"?Ll(n,H,l.value.path):ut({},H)}function E(H,se){if(c!==H)return ds(8,{from:se,to:H})}function x(H){return A(H)}function L(H){return x(ut(S(H),{replace:!0}))}function I(H){const se=H.matched[H.matched.length-1];if(se&&se.redirect){const{redirect:ce}=se;let le=typeof ce=="function"?ce(H):ce;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=S(le):{path:le},le.params={}),ut({query:H.query,hash:H.hash,params:le.path!=null?{}:H.params},le)}}function A(H,se){const ce=c=h(H),le=l.value,Be=H.state,D=H.force,U=H.replace===!0,y=I(ce);if(y)return A(ut(S(y),{state:typeof y=="object"?ut({},Be,y.state):Be,force:D,replace:U}),se||ce);const ie=ce;ie.redirectedFrom=se;let Q;return!D&&OE(i,le,ce)&&(Q=ds(16,{to:ie,from:le}),Se(le,le,!0,!1)),(Q?Promise.resolve(Q):T(ie,le)).catch(J=>ui(J)?ui(J,2)?J:xe(J):X(J,ie,le)).then(J=>{if(J){if(ui(J,2))return A(ut({replace:U},S(J.to),{state:typeof J.to=="object"?ut({},Be,J.to.state):Be,force:D}),se||ie)}else J=j(ie,le,!0,U,Be);return F(ie,le,J),J})}function O(H,se){const ce=E(H,se);return ce?Promise.reject(ce):Promise.resolve()}function w(H){const se=re.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(H):H()}function T(H,se){let ce;const[le,Be,D]=yM(H,se);ce=Il(le.reverse(),"beforeRouteLeave",H,se);for(const y of le)y.leaveGuards.forEach(ie=>{ce.push(ki(ie,H,se))});const U=O.bind(null,H,se);return ce.push(U),be(ce).then(()=>{ce=[];for(const y of s.list())ce.push(ki(y,H,se));return ce.push(U),be(ce)}).then(()=>{ce=Il(Be,"beforeRouteUpdate",H,se);for(const y of Be)y.updateGuards.forEach(ie=>{ce.push(ki(ie,H,se))});return ce.push(U),be(ce)}).then(()=>{ce=[];for(const y of D)if(y.beforeEnter)if(Vn(y.beforeEnter))for(const ie of y.beforeEnter)ce.push(ki(ie,H,se));else ce.push(ki(y.beforeEnter,H,se));return ce.push(U),be(ce)}).then(()=>(H.matched.forEach(y=>y.enterCallbacks={}),ce=Il(D,"beforeRouteEnter",H,se,w),ce.push(U),be(ce))).then(()=>{ce=[];for(const y of o.list())ce.push(ki(y,H,se));return ce.push(U),be(ce)}).catch(y=>ui(y,8)?y:Promise.reject(y))}function F(H,se,ce){a.list().forEach(le=>w(()=>le(H,se,ce)))}function j(H,se,ce,le,Be){const D=E(H,se);if(D)return D;const U=se===Ci,y=Qr?history.state:{};ce&&(le||U?r.replace(H.fullPath,ut({scroll:U&&y&&y.scroll},Be)):r.push(H.fullPath,Be)),l.value=H,Se(H,se,ce,U),xe()}let q;function oe(){q||(q=r.listen((H,se,ce)=>{if(!_e.listening)return;const le=h(H),Be=I(le);if(Be){A(ut(Be,{replace:!0,force:!0}),le).catch(eo);return}c=le;const D=l.value;Qr&&WE(ad(D.fullPath,ce.delta),il()),T(le,D).catch(U=>ui(U,12)?U:ui(U,2)?(A(ut(S(U.to),{force:!0}),le).then(y=>{ui(y,20)&&!ce.delta&&ce.type===mo.pop&&r.go(-1,!1)}).catch(eo),Promise.reject()):(ce.delta&&r.go(-ce.delta,!1),X(U,le,D))).then(U=>{U=U||j(le,D,!1),U&&(ce.delta&&!ui(U,8)?r.go(-ce.delta,!1):ce.type===mo.pop&&ui(U,20)&&r.go(-1,!1)),F(le,D,U)}).catch(eo)}))}let ae=Us(),K=Us(),Z;function X(H,se,ce){xe(H);const le=K.list();return le.length?le.forEach(Be=>Be(H,se,ce)):console.error(H),Promise.reject(H)}function me(){return Z&&l.value!==Ci?Promise.resolve():new Promise((H,se)=>{ae.add([H,se])})}function xe(H){return Z||(Z=!H,oe(),ae.list().forEach(([se,ce])=>H?ce(H):se()),ae.reset()),H}function Se(H,se,ce,le){const{scrollBehavior:Be}=t;if(!Qr||!Be)return Promise.resolve();const D=!ce&&XE(ad(H.fullPath,0))||(le||!ce)&&history.state&&history.state.scroll||null;return Yu().then(()=>Be(H,se,D)).then(U=>U&&GE(U)).catch(U=>X(U,H,se))}const Ie=H=>r.go(H);let je;const re=new Set,_e={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:t,push:x,replace:L,go:Ie,back:()=>Ie(-1),forward:()=>Ie(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:me,install(H){const se=this;H.component("RouterLink",mM),H.component("RouterView",xM),H.config.globalProperties.$router=se,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Rn(l)}),Qr&&!je&&l.value===Ci&&(je=!0,x(r.location).catch(Be=>{}));const ce={};for(const Be in Ci)Object.defineProperty(ce,Be,{get:()=>l.value[Be],enumerable:!0});H.provide(mf,se),H.provide(Yg,xm(ce)),H.provide(Vc,l);const le=H.unmount;re.add(H),H.unmount=function(){re.delete(H),re.size<1&&(c=Ci,q&&q(),q=null,l.value=Ci,je=!1,Z=!1),le()}}};function be(H){return H.reduce((se,ce)=>se.then(()=>w(ce)),Promise.resolve())}return _e}function yM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>hs(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>hs(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="177",EM=0,Ed=1,MM=2,Kg=1,Zg=2,gi=3,Yi=0,un=1,Si=2,Gi=0,os=1,Md=2,bd=3,Td=4,bM=5,gr=100,TM=101,wM=102,AM=103,RM=104,CM=200,PM=201,LM=202,IM=203,Gc=204,Wc=205,DM=206,UM=207,NM=208,OM=209,FM=210,BM=211,kM=212,HM=213,zM=214,Xc=0,$c=1,qc=2,ps=3,jc=4,Yc=5,Kc=6,Zc=7,rl=0,VM=1,GM=2,Wi=0,WM=1,XM=2,$M=3,qM=4,jM=5,YM=6,KM=7,Jg=300,ms=301,gs=302,Jc=303,Qc=304,sl=306,go=1e3,xr=1001,eu=1002,Sn=1003,ZM=1004,Go=1005,ei=1006,Dl=1007,Sr=1008,oi=1009,Qg=1010,e_=1011,_o=1012,_f=1013,wr=1014,ti=1015,Ro=1016,vf=1017,xf=1018,vo=1020,t_=35902,n_=1021,i_=1022,Fn=1023,xo=1026,So=1027,Sf=1028,yf=1029,r_=1030,Ef=1031,Mf=1033,va=33776,xa=33777,Sa=33778,ya=33779,tu=35840,nu=35841,iu=35842,ru=35843,su=36196,ou=37492,au=37496,lu=37808,cu=37809,uu=37810,fu=37811,hu=37812,du=37813,pu=37814,mu=37815,gu=37816,_u=37817,vu=37818,xu=37819,Su=37820,yu=37821,Ea=36492,Eu=36494,Mu=36495,s_=36283,bu=36284,Tu=36285,wu=36286,JM=3200,QM=3201,bf=0,eb=1,Hi="",Tn="srgb",_s="srgb-linear",ka="linear",gt="srgb",Nr=7680,wd=519,tb=512,nb=513,ib=514,o_=515,rb=516,sb=517,ob=518,ab=519,Ad=35044,Rd="300 es",bi=2e3,Ha=2001;class Ms{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cd=1234567;const no=Math.PI/180,vs=180/Math.PI;function bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Tf(t,e){return(t%e+e)%e}function lb(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function cb(t,e,n){return t!==e?(n-t)/(e-t):0}function io(t,e,n){return(1-n)*t+n*e}function ub(t,e,n,i){return io(t,e,1-Math.exp(-n*i))}function fb(t,e=1){return e-Math.abs(Tf(t,e*2)-e)}function hb(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function db(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function pb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function mb(t,e){return t+Math.random()*(e-t)}function gb(t){return t*(.5-Math.random())}function _b(t){t!==void 0&&(Cd=t);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vb(t){return t*no}function xb(t){return t*vs}function Sb(t){return(t&t-1)===0&&t!==0}function yb(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Eb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Mb(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ts={DEG2RAD:no,RAD2DEG:vs,generateUUID:bs,clamp:Qe,euclideanModulo:Tf,mapLinear:lb,inverseLerp:cb,lerp:io,damp:ub,pingpong:fb,smoothstep:hb,smootherstep:db,randInt:pb,randFloat:mb,randFloatSpread:gb,seededRandom:_b,degToRad:vb,radToDeg:xb,isPowerOfTwo:Sb,ceilPowerOfTwo:yb,floorPowerOfTwo:Eb,setQuaternionFromProperEuler:Mb,normalize:nn,denormalize:es};class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*v,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const L=Math.sqrt(E),I=Math.atan2(L,h*S);m=Math.sin(m*I)/L,a=Math.sin(a*I)/L}const x=a*S;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,f=f*m+v*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-a*p,e[n+2]=c*_+u*p+a*d-l*f,e[n+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ul.copy(this).projectOnVector(e),this.sub(Ul)}reflect(e){return this.sub(Ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ul=new W,Pd=new Co;class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],v=r[0],m=r[3],h=r[6],S=r[1],E=r[4],x=r[7],L=r[2],I=r[5],A=r[8];return s[0]=o*v+a*S+l*L,s[3]=o*m+a*E+l*I,s[6]=o*h+a*x+l*A,s[1]=c*v+u*S+f*L,s[4]=c*m+u*E+f*I,s[7]=c*h+u*x+f*A,s[2]=d*v+p*S+_*L,s[5]=d*m+p*E+_*I,s[8]=d*h+p*x+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Nl.makeScale(e,n)),this}rotate(e){return this.premultiply(Nl.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nl=new Ke;function a_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function bb(){const t=yo("canvas");return t.style.display="block",t}const Ld={};function as(t){t in Ld||(Ld[t]=!0,console.warn(t))}function Tb(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function wb(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ab(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Id=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rb(){const t={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=ls(r.r),r.g=ls(r.g),r.b=ls(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?ka:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return as("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[_s]:{primaries:e,whitePoint:i,transfer:ka,toXYZ:Id,fromXYZ:Dd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Id,fromXYZ:Dd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const ot=Rb();function Ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ls(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Or;class Cb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Or===void 0&&(Or=yo("canvas")),Or.width=e.width,Or.height=e.height;const r=Or.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Or}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ti(n[i]/255)*255):n[i]=Ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pb=0;class wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ol(r[o].image)):s.push(Ol(r[o]))}else s=Ol(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ol(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Cb.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lb=0;const Fl=new W;class Jt extends Ms{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=xr,r=xr,s=ei,o=Sr,a=Fn,l=oi,c=Jt.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=bs(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fl).x}get height(){return this.source.getSize(Fl).y}get depth(){return this.source.getSize(Fl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case eu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case eu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Jg;Jt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,n=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,x=(p+1)/2,L=(h+1)/2,I=(u+d)/4,A=(f+v)/4,O=(_+m)/4;return E>x&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=I/i,s=A/i):x>L?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=I/r,s=O/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=O/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(d-u)/S,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ib extends Ms{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Jt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new wf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends Ib{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class l_ extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Db extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lr{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(In.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(In.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=In.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,In):In.fromBufferAttribute(s,o),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),Xo.subVectors(this.max,Ns),Fr.subVectors(e.a,Ns),Br.subVectors(e.b,Ns),kr.subVectors(e.c,Ns),Pi.subVectors(Br,Fr),Li.subVectors(kr,Br),ar.subVectors(Fr,kr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ar.z,ar.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ar.z,0,-ar.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ar.y,ar.x,0];return!Bl(n,Fr,Br,kr,Xo)||(n=[1,0,0,0,1,0,0,0,1],!Bl(n,Fr,Br,kr,Xo))?!1:($o.crossVectors(Pi,Li),n=[$o.x,$o.y,$o.z],Bl(n,Fr,Br,kr,Xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new W,new W,new W,new W,new W,new W,new W,new W],In=new W,Wo=new Lr,Fr=new W,Br=new W,kr=new W,Pi=new W,Li=new W,ar=new W,Ns=new W,Xo=new W,$o=new W,lr=new W;function Bl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ub=new Lr,Os=new W,kl=new W;class Po{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(kl)),this.expandByPoint(Os.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const hi=new W,Hl=new W,qo=new W,Ii=new W,zl=new W,jo=new W,Vl=new W;class c_{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Hl.copy(e).add(n).multiplyScalar(.5),qo.copy(n).sub(e).normalize(),Ii.copy(this.origin).sub(Hl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(qo),a=Ii.dot(this.direction),l=-Ii.dot(qo),c=Ii.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Hl).addScaledVector(qo,d),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){zl.subVectors(n,e),jo.subVectors(i,e),Vl.crossVectors(zl,jo);let o=this.direction.dot(Vl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,e);const l=a*this.direction.dot(jo.crossVectors(Ii,jo));if(l<0)return null;const c=a*this.direction.dot(zl.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(Vl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,_,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d+v*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,v=a*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Ob)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(i,mn),Di.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(i,mn)),Di.normalize(),Yo.crossVectors(mn,Di),r[0]=Di.x,r[4]=Yo.x,r[8]=mn.x,r[1]=Di.y,r[5]=Yo.y,r[9]=mn.y,r[2]=Di.z,r[6]=Yo.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],S=i[3],E=i[7],x=i[11],L=i[15],I=r[0],A=r[4],O=r[8],w=r[12],T=r[1],F=r[5],j=r[9],q=r[13],oe=r[2],ae=r[6],K=r[10],Z=r[14],X=r[3],me=r[7],xe=r[11],Se=r[15];return s[0]=o*I+a*T+l*oe+c*X,s[4]=o*A+a*F+l*ae+c*me,s[8]=o*O+a*j+l*K+c*xe,s[12]=o*w+a*q+l*Z+c*Se,s[1]=u*I+f*T+d*oe+p*X,s[5]=u*A+f*F+d*ae+p*me,s[9]=u*O+f*j+d*K+p*xe,s[13]=u*w+f*q+d*Z+p*Se,s[2]=_*I+v*T+m*oe+h*X,s[6]=_*A+v*F+m*ae+h*me,s[10]=_*O+v*j+m*K+h*xe,s[14]=_*w+v*q+m*Z+h*Se,s[3]=S*I+E*T+x*oe+L*X,s[7]=S*A+E*F+x*ae+L*me,s[11]=S*O+E*j+x*K+L*xe,s[15]=S*w+E*q+x*Z+L*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],h=e[15],S=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,E=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,x=u*v*c-_*f*c+_*a*p-o*v*p-u*a*h+o*f*h,L=_*f*l-u*v*l-_*a*d+o*v*d+u*a*m-o*f*m,I=n*S+i*E+r*x+s*L;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/I;return e[0]=S*A,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=E*A,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*h+n*d*h)*A,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*h-n*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=x*A,e[9]=(_*f*s-u*v*s-_*i*p+n*v*p+u*i*h-n*f*h)*A,e[10]=(o*v*s-_*a*s+_*i*c-n*v*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=L*A,e[13]=(u*v*r-_*f*r+_*i*d-n*v*d-u*i*m+n*f*m)*A,e[14]=(_*a*r-o*v*r-_*i*l+n*v*l+o*i*m-n*a*m)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,v=o*u,m=o*f,h=a*f,S=l*c,E=l*u,x=l*f,L=i.x,I=i.y,A=i.z;return r[0]=(1-(v+h))*L,r[1]=(p+x)*L,r[2]=(_-E)*L,r[3]=0,r[4]=(p-x)*I,r[5]=(1-(d+h))*I,r[6]=(m+S)*I,r[7]=0,r[8]=(_+E)*A,r[9]=(m-S)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,u=1/o,f=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===bi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ha)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,v;if(a===bi)_=(o+s)*f,v=-2*f;else if(a===Ha)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new W,Dn=new yt,Nb=new W(0,0,0),Ob=new W(1,1,1),Di=new W,Yo=new W,mn=new W,Ud=new yt,Nd=new Co;class Gn{constructor(e=0,n=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Fb=0;const Od=new W,zr=new Co,di=new yt,Ko=new W,Fs=new W,Bb=new W,kb=new Co,Fd=new W(1,0,0),Bd=new W(0,1,0),kd=new W(0,0,1),Hd={type:"added"},Hb={type:"removed"},Vr={type:"childadded",child:null},Gl={type:"childremoved",child:null};class zt extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new W,n=new Gn,i=new Co,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,n){return zr.setFromAxisAngle(e,n),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,n){return Od.copy(e).applyQuaternion(this.quaternion),this.position.add(Od.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Fs,Ko,this.up):di.lookAt(Ko,Fs,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),zr.setFromRotationMatrix(di),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Hb),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,kb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new W(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new W,pi=new W,Wl=new W,mi=new W,Gr=new W,Wr=new W,zd=new W,Xl=new W,$l=new W,ql=new W,jl=new vt,Yl=new vt,Kl=new vt;class Nn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),pi.subVectors(i,n),Wl.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(pi),l=Un.dot(Wl),c=pi.dot(pi),u=pi.dot(Wl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return jl.setScalar(0),Yl.setScalar(0),Kl.setScalar(0),jl.fromBufferAttribute(e,n),Yl.fromBufferAttribute(e,i),Kl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(jl,s.x),o.addScaledVector(Yl,s.y),o.addScaledVector(Kl,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),pi.subVectors(e,n),Un.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Un.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Gr.subVectors(r,i),Wr.subVectors(s,i),Xl.subVectors(e,i);const l=Gr.dot(Xl),c=Wr.dot(Xl);if(l<=0&&c<=0)return n.copy(i);$l.subVectors(e,r);const u=Gr.dot($l),f=Wr.dot($l);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Gr,o);ql.subVectors(e,s);const p=Gr.dot(ql),_=Wr.dot(ql);if(_>=0&&p<=_)return n.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Wr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return zd.subVectors(s,r),a=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(zd,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const u_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Zl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=Tf(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zl(o,s,e+1/3),this.g=Zl(o,s,e),this.b=Zl(o,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=u_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ot.workingToColorSpace($t.copy(this),e),Math.round(Qe($t.r*255,0,255))*65536+Math.round(Qe($t.g*255,0,255))*256+Math.round(Qe($t.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Tn){ot.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Zo);const i=io(Ui.h,Zo.h,n),r=io(Ui.s,Zo.s,n),s=io(Ui.l,Zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new nt;nt.NAMES=u_;let zb=0;class Ts extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=os,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gc&&(i.blendSrc=this.blendSrc),this.blendDst!==Wc&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rf extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new W,Jo=new et;let Vb=0;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ad,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Jo.fromBufferAttribute(this,n),Jo.applyMatrix3(e),this.setXY(n,Jo.x,Jo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ad&&(e.usage=this.usage),e}}class f_ extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class h_ extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ri extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Gb=0;const bn=new yt,Jl=new zt,Xr=new W,gn=new Lr,Bs=new Lr,kt=new W;class nr extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a_(e)?h_:f_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Po);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(gn.min,Bs.min),gn.expandByPoint(kt),kt.addVectors(gn.max,Bs.max),gn.expandByPoint(kt)):(gn.expandByPoint(Bs.min),gn.expandByPoint(Bs.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),kt.add(Xr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new W,l[O]=new W;const c=new W,u=new W,f=new W,d=new et,p=new et,_=new et,v=new W,m=new W;function h(O,w,T){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(d),_.sub(d);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),a[O].add(v),a[w].add(v),a[T].add(v),l[O].add(m),l[w].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,w=S.length;O<w;++O){const T=S[O],F=T.start,j=T.count;for(let q=F,oe=F+j;q<oe;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const E=new W,x=new W,L=new W,I=new W;function A(O){L.fromBufferAttribute(r,O),I.copy(L);const w=a[O];E.copy(w),E.sub(L.multiplyScalar(L.dot(w))).normalize(),x.crossVectors(I,w);const F=x.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,F)}for(let O=0,w=S.length;O<w;++O){const T=S[O],F=T.start,j=T.count;for(let q=F,oe=F+j;q<oe;q+=3)A(e.getX(q+0)),A(e.getX(q+1)),A(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new zn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new nr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vd=new yt,cr=new c_,Qo=new Po,Gd=new W,ea=new W,ta=new W,na=new W,Ql=new W,ia=new W,Wd=new W,ra=new W;class Ht extends zt{constructor(e=new nr,n=new Rf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ql.fromBufferAttribute(f,e),o?ia.addScaledVector(Ql,u):ia.addScaledVector(Ql.sub(n),u))}n.add(ia)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Qo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Qo,Gd)===null||cr.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=E;x<L;x+=3){const I=a.getX(x),A=a.getX(x+1),O=a.getX(x+2);r=sa(this,h,e,i,c,u,f,I,A,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=sa(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const m=d[_],h=o[m.materialIndex],S=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=S,L=E;x<L;x+=3){const I=x,A=x+1,O=x+2;r=sa(this,h,e,i,c,u,f,I,A,O),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const S=m,E=m+1,x=m+2;r=sa(this,o,e,i,c,u,f,S,E,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Wb(t,e,n,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;ra.copy(a),ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ra);return c<n.near||c>n.far?null:{distance:c,point:ra.clone(),object:t}}function sa(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ea),t.getVertexPosition(l,ta),t.getVertexPosition(c,na);const u=Wb(t,e,n,i,ea,ta,na,Wd);if(u){const f=new W;Nn.getBarycoord(Wd,ea,ta,na,f),r&&(u.uv=Nn.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=Nn.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};Nn.getNormal(ea,ta,na,d.normal),u.face=d,u.barycoord=f}return u}class ws extends nr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(f,2));function _(v,m,h,S,E,x,L,I,A,O,w){const T=x/A,F=L/O,j=x/2,q=L/2,oe=I/2,ae=A+1,K=O+1;let Z=0,X=0;const me=new W;for(let xe=0;xe<K;xe++){const Se=xe*F-q;for(let Ie=0;Ie<ae;Ie++){const je=Ie*T-j;me[v]=je*S,me[m]=Se*E,me[h]=oe,c.push(me.x,me.y,me.z),me[v]=0,me[m]=0,me[h]=I>0?1:-1,u.push(me.x,me.y,me.z),f.push(Ie/A),f.push(1-xe/O),Z+=1}}for(let xe=0;xe<O;xe++)for(let Se=0;Se<A;Se++){const Ie=d+Se+ae*xe,je=d+Se+ae*(xe+1),re=d+(Se+1)+ae*(xe+1),_e=d+(Se+1)+ae*xe;l.push(Ie,je,_e),l.push(je,re,_e),X+=6}a.addGroup(p,X,w),p+=X,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=xs(t[n]);for(const r in i)e[r]=i[r]}return e}function Xb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const $b={clone:xs,merge:rn};var qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qb,this.fragmentShader=jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class p_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new W,Xd=new et,$d=new et;class cn extends p_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Xd,$d),n.subVectors($d,Xd)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $r=-90,qr=1;class Yb extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn($r,qr,e,n);r.layers=this.layers,this.add(r);const s=new cn($r,qr,e,n);s.layers=this.layers,this.add(s);const o=new cn($r,qr,e,n);o.layers=this.layers,this.add(o);const a=new cn($r,qr,e,n);a.layers=this.layers,this.add(a);const l=new cn($r,qr,e,n);l.layers=this.layers,this.add(l);const c=new cn($r,qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class m_ extends Jt{constructor(e=[],n=ms,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kb extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new m_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ws(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Gi});s.uniforms.tEquirect.value=n;const o=new Ht(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=ei),new Yb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class oa extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zb={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Zb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class g_ extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jb extends Jt{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Sn,u=Sn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qd extends zn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const jr=new yt,jd=new yt,aa=[],Yd=new Lr,Qb=new yt,ks=new Ht,Hs=new Po;class eT extends Ht{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new qd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Qb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jr),Yd.copy(e.boundingBox).applyMatrix4(jr),this.boundingBox.union(Yd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Po),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,jr),Hs.copy(e.boundingSphere).applyMatrix4(jr),this.boundingSphere.union(Hs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),e.ray.intersectsSphere(Hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,jr),jd.multiplyMatrices(i,jr),ks.matrixWorld=jd,ks.raycast(e,aa);for(let o=0,a=aa.length;o<a;o++){const l=aa[o];l.instanceId=s,l.object=this,n.push(l)}aa.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new qd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Jb(new Float32Array(r*this.count),r,this.count,Sf,ti));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tc=new W,tT=new W,nT=new Ke;class pr{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=tc.subVectors(i,n).cross(tT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(tc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nT.getNormalMatrix(e),r=this.coplanarPoint(tc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Po,la=new W;class Cf{constructor(e=new pr,n=new pr,i=new pr,r=new pr,s=new pr,o=new pr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],v=r[10],m=r[11],h=r[12],S=r[13],E=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+_,x+S).normalize(),i[3].setComponents(l-o,d-u,m-_,x-S).normalize(),i[4].setComponents(l-a,d-f,m-v,x-E).normalize(),n===bi)i[5].setComponents(l+a,d+f,m+v,x+E).normalize();else if(n===Ha)i[5].setComponents(a,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class __ extends Jt{constructor(e,n,i=wr,r,s,o,a=Sn,l=Sn,c,u=xo,f=1){if(u!==xo&&u!==So)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Rr extends nr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const S=h*d-o;for(let E=0;E<c;E++){const x=E*f-s;_.push(x,-S,0),v.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<a;S++){const E=S+c*h,x=S+c*(h+1),L=S+1+c*(h+1),I=S+1+c*h;p.push(E,x,I),p.push(x,L,I)}this.setIndex(p),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pf extends nr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new W,d=new W,p=[],_=[],v=[],m=[];for(let h=0;h<=i;h++){const S=[],E=h/i;let x=0;h===0&&o===0?x=.5/n:h===i&&l===Math.PI&&(x=-.5/n);for(let L=0;L<=n;L++){const I=L/n;f.x=-e*Math.cos(r+I*s)*Math.sin(o+E*a),f.y=e*Math.cos(o+E*a),f.z=e*Math.sin(r+I*s)*Math.sin(o+E*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(I+x,1-E),S.push(c++)}u.push(S)}for(let h=0;h<i;h++)for(let S=0;S<n;S++){const E=u[h][S+1],x=u[h][S],L=u[h+1][S],I=u[h+1][S+1];(h!==0||o>0)&&p.push(E,x,I),(h!==i-1||l<Math.PI)&&p.push(x,L,I)}this.setIndex(p),this.setAttribute("position",new ri(_,3)),this.setAttribute("normal",new ri(v,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class iT extends Ts{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new nt(16777215),this.specular=new nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class v_ extends Ts{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rT extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class oT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const aT=new oT;class Lf{constructor(e){this.manager=e!==void 0?e:aT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Lf.DEFAULT_MATERIAL_NAME="__DEFAULT";class lT extends Lf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Kd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=yo("img");function l(){u(),Kd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class cT extends Lf{constructor(e){super(e)}load(e,n,i,r){const s=new Jt,o=new lT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class If extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const nc=new yt,Zd=new W,Jd=new W;class x_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zd),Jd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jd),n.updateMatrixWorld(),nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uT extends x_{constructor(){super(new cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=vs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qd extends If{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new uT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ep=new yt,zs=new W,ic=new W;class fT extends x_{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zs.setFromMatrixPosition(e.matrixWorld),i.position.copy(zs),ic.copy(i.position),ic.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ic),i.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ep)}}class hT extends If{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new fT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class S_ extends p_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class y_ extends If{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class dT extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class E_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=tp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function tp(){return performance.now()}const np=new yt;class ip{constructor(e,n,i=0,r=1/0){this.ray=new c_(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Af,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return np.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(np),this}intersectObject(e,n=!0,i=[]){return Au(e,this,i,n),i.sort(rp),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Au(e[r],this,i,n);return i.sort(rp),i}}function rp(t,e){return t.distance-e.distance}function Au(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Au(s[o],e,n,!0)}}function sp(t,e,n,i){const r=pT(i);switch(n){case n_:return t*e;case Sf:return t*e/r.components*r.byteLength;case yf:return t*e/r.components*r.byteLength;case r_:return t*e*2/r.components*r.byteLength;case Ef:return t*e*2/r.components*r.byteLength;case i_:return t*e*3/r.components*r.byteLength;case Fn:return t*e*4/r.components*r.byteLength;case Mf:return t*e*4/r.components*r.byteLength;case va:case xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sa:case ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nu:case ru:return Math.max(t,16)*Math.max(e,8)/4;case tu:case iu:return Math.max(t,8)*Math.max(e,8)/2;case su:case ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case au:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case du:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gu:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _u:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Su:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ea:case Eu:case Mu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case s_:case bu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tu:case wu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pT(t){switch(t){case oi:case Qg:return{byteLength:1,components:1};case _o:case e_:case Ro:return{byteLength:2,components:1};case vf:case xf:return{byteLength:2,components:4};case wr:case _f:case ti:return{byteLength:4,components:1};case t_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function M_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mT(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_T=`#ifdef USE_ALPHAHASH
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
#endif`,vT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ST=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ET=`#ifdef USE_AOMAP
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
#endif`,MT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bT=`#ifdef USE_BATCHING
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
#endif`,TT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CT=`#ifdef USE_IRIDESCENCE
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
#endif`,PT=`#ifdef USE_BUMPMAP
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
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kT=`#define PI 3.141592653589793
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
} // validated`,HT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zT=`vec3 transformedNormal = objectNormal;
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
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",qT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jT=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KT=`#ifdef USE_ENVMAP
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
#endif`,ZT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JT=`#ifdef USE_ENVMAP
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
#endif`,QT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
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
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d1=`PhysicalMaterial material;
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
#endif`,p1=`struct PhysicalMaterial {
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
}`,m1=`
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
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
#endif`,_1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T1=`#if defined( USE_POINTS_UV )
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
#endif`,w1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
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
#endif`,I1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B1=`#ifdef USE_NORMALMAP
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
#endif`,k1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ew=`float getShadowMask() {
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
}`,tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nw=`#ifdef USE_SKINNING
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
#endif`,iw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rw=`#ifdef USE_SKINNING
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
#endif`,sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cw=`#ifdef USE_TRANSMISSION
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
#endif`,uw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gw=`uniform sampler2D t2D;
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`#include <common>
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
}`,Ew=`#if DEPTH_PACKING == 3200
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
}`,Mw=`#define DISTANCE
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
}`,bw=`#define DISTANCE
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Pw=`uniform vec3 diffuse;
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
}`,Lw=`#define LAMBERT
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
}`,Iw=`#define LAMBERT
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
}`,Dw=`#define MATCAP
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
}`,Uw=`#define MATCAP
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
}`,Nw=`#define NORMAL
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
}`,Ow=`#define NORMAL
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
}`,Fw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,kw=`#define STANDARD
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
}`,Hw=`#define STANDARD
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
}`,zw=`#define TOON
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
}`,Vw=`#define TOON
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
}`,Gw=`uniform float size;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#include <common>
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
}`,$w=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,jw=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:gT,alphahash_pars_fragment:_T,alphamap_fragment:vT,alphamap_pars_fragment:xT,alphatest_fragment:ST,alphatest_pars_fragment:yT,aomap_fragment:ET,aomap_pars_fragment:MT,batching_pars_vertex:bT,batching_vertex:TT,begin_vertex:wT,beginnormal_vertex:AT,bsdfs:RT,iridescence_fragment:CT,bumpmap_pars_fragment:PT,clipping_planes_fragment:LT,clipping_planes_pars_fragment:IT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:UT,color_fragment:NT,color_pars_fragment:OT,color_pars_vertex:FT,color_vertex:BT,common:kT,cube_uv_reflection_fragment:HT,defaultnormal_vertex:zT,displacementmap_pars_vertex:VT,displacementmap_vertex:GT,emissivemap_fragment:WT,emissivemap_pars_fragment:XT,colorspace_fragment:$T,colorspace_pars_fragment:qT,envmap_fragment:jT,envmap_common_pars_fragment:YT,envmap_pars_fragment:KT,envmap_pars_vertex:ZT,envmap_physical_pars_fragment:l1,envmap_vertex:JT,fog_vertex:QT,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:o1,lights_pars_begin:a1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:f1,lights_phong_pars_fragment:h1,lights_physical_fragment:d1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:_1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:y1,map_fragment:E1,map_pars_fragment:M1,map_particle_fragment:b1,map_particle_pars_fragment:T1,metalnessmap_fragment:w1,metalnessmap_pars_fragment:A1,morphinstance_vertex:R1,morphcolor_vertex:C1,morphnormal_vertex:P1,morphtarget_pars_vertex:L1,morphtarget_vertex:I1,normal_fragment_begin:D1,normal_fragment_maps:U1,normal_pars_fragment:N1,normal_pars_vertex:O1,normal_vertex:F1,normalmap_pars_fragment:B1,clearcoat_normal_fragment_begin:k1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:z1,iridescence_pars_fragment:V1,opaque_fragment:G1,packing:W1,premultiplied_alpha_fragment:X1,project_vertex:$1,dithering_fragment:q1,dithering_pars_fragment:j1,roughnessmap_fragment:Y1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:J1,shadowmap_vertex:Q1,shadowmask_pars_fragment:ew,skinbase_vertex:tw,skinning_pars_vertex:nw,skinning_vertex:iw,skinnormal_vertex:rw,specularmap_fragment:sw,specularmap_pars_fragment:ow,tonemapping_fragment:aw,tonemapping_pars_fragment:lw,transmission_fragment:cw,transmission_pars_fragment:uw,uv_pars_fragment:fw,uv_pars_vertex:hw,uv_vertex:dw,worldpos_vertex:pw,background_vert:mw,background_frag:gw,backgroundCube_vert:_w,backgroundCube_frag:vw,cube_vert:xw,cube_frag:Sw,depth_vert:yw,depth_frag:Ew,distanceRGBA_vert:Mw,distanceRGBA_frag:bw,equirect_vert:Tw,equirect_frag:ww,linedashed_vert:Aw,linedashed_frag:Rw,meshbasic_vert:Cw,meshbasic_frag:Pw,meshlambert_vert:Lw,meshlambert_frag:Iw,meshmatcap_vert:Dw,meshmatcap_frag:Uw,meshnormal_vert:Nw,meshnormal_frag:Ow,meshphong_vert:Fw,meshphong_frag:Bw,meshphysical_vert:kw,meshphysical_frag:Hw,meshtoon_vert:zw,meshtoon_frag:Vw,points_vert:Gw,points_frag:Ww,shadow_vert:Xw,shadow_frag:$w,sprite_vert:qw,sprite_frag:jw},Me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Jn={basic:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:rn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:rn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:rn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:rn([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:rn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:rn([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:rn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:rn([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:rn([Me.common,Me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:rn([Me.lights,Me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Jn.physical={uniforms:rn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ca={r:0,b:0,g:0},fr=new Gn,Yw=new yt;function Kw(t,e,n,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?n:e).get(x)),x}function v(E){let x=!1;const L=_(E);L===null?h(a,l):L&&L.isColor&&(h(L,1),x=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(E,x){const L=_(x);L&&(L.isCubeTexture||L.mapping===sl)?(u===void 0&&(u=new Ht(new ws(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:xs(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fr.copy(x.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(fr)),u.material.toneMapped=ot.getTransfer(L.colorSpace)!==gt,(f!==L||d!==L.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Ht(new Rr(2,2),new Ki({name:"BackgroundMaterial",uniforms:xs(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(L.colorSpace)!==gt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,p=t.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,x){E.getRGB(ca,d_(t)),i.buffers.color.setClear(ca.r,ca.g,ca.b,x,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:v,addToRenderList:m,dispose:S}}function Zw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(T,F,j,q,oe){let ae=!1;const K=f(q,j,F);s!==K&&(s=K,c(s.object)),ae=p(T,q,j,oe),ae&&_(T,q,j,oe),oe!==null&&e.update(oe,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,x(T,F,j,q),oe!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,F,j){const q=j.wireframe===!0;let oe=i[T.id];oe===void 0&&(oe={},i[T.id]=oe);let ae=oe[F.id];ae===void 0&&(ae={},oe[F.id]=ae);let K=ae[q];return K===void 0&&(K=d(l()),ae[q]=K),K}function d(T){const F=[],j=[],q=[];for(let oe=0;oe<n;oe++)F[oe]=0,j[oe]=0,q[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:j,attributeDivisors:q,object:T,attributes:{},index:null}}function p(T,F,j,q){const oe=s.attributes,ae=F.attributes;let K=0;const Z=j.getAttributes();for(const X in Z)if(Z[X].location>=0){const xe=oe[X];let Se=ae[X];if(Se===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor)),xe===void 0||xe.attribute!==Se||Se&&xe.data!==Se.data)return!0;K++}return s.attributesNum!==K||s.index!==q}function _(T,F,j,q){const oe={},ae=F.attributes;let K=0;const Z=j.getAttributes();for(const X in Z)if(Z[X].location>=0){let xe=ae[X];xe===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(xe=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(xe=T.instanceColor));const Se={};Se.attribute=xe,xe&&xe.data&&(Se.data=xe.data),oe[X]=Se,K++}s.attributes=oe,s.attributesNum=K,s.index=q}function v(){const T=s.newAttributes;for(let F=0,j=T.length;F<j;F++)T[F]=0}function m(T){h(T,0)}function h(T,F){const j=s.newAttributes,q=s.enabledAttributes,oe=s.attributeDivisors;j[T]=1,q[T]===0&&(t.enableVertexAttribArray(T),q[T]=1),oe[T]!==F&&(t.vertexAttribDivisor(T,F),oe[T]=F)}function S(){const T=s.newAttributes,F=s.enabledAttributes;for(let j=0,q=F.length;j<q;j++)F[j]!==T[j]&&(t.disableVertexAttribArray(j),F[j]=0)}function E(T,F,j,q,oe,ae,K){K===!0?t.vertexAttribIPointer(T,F,j,oe,ae):t.vertexAttribPointer(T,F,j,q,oe,ae)}function x(T,F,j,q){v();const oe=q.attributes,ae=j.getAttributes(),K=F.defaultAttributeValues;for(const Z in ae){const X=ae[Z];if(X.location>=0){let me=oe[Z];if(me===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const xe=me.normalized,Se=me.itemSize,Ie=e.get(me);if(Ie===void 0)continue;const je=Ie.buffer,re=Ie.type,_e=Ie.bytesPerElement,be=re===t.INT||re===t.UNSIGNED_INT||me.gpuType===_f;if(me.isInterleavedBufferAttribute){const H=me.data,se=H.stride,ce=me.offset;if(H.isInstancedInterleavedBuffer){for(let le=0;le<X.locationSize;le++)h(X.location+le,H.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<X.locationSize;le++)m(X.location+le);t.bindBuffer(t.ARRAY_BUFFER,je);for(let le=0;le<X.locationSize;le++)E(X.location+le,Se/X.locationSize,re,xe,se*_e,(ce+Se/X.locationSize*le)*_e,be)}else{if(me.isInstancedBufferAttribute){for(let H=0;H<X.locationSize;H++)h(X.location+H,me.meshPerAttribute);T.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let H=0;H<X.locationSize;H++)m(X.location+H);t.bindBuffer(t.ARRAY_BUFFER,je);for(let H=0;H<X.locationSize;H++)E(X.location+H,Se/X.locationSize,re,xe,Se*_e,Se/X.locationSize*H*_e,be)}}else if(K!==void 0){const xe=K[Z];if(xe!==void 0)switch(xe.length){case 2:t.vertexAttrib2fv(X.location,xe);break;case 3:t.vertexAttrib3fv(X.location,xe);break;case 4:t.vertexAttrib4fv(X.location,xe);break;default:t.vertexAttrib1fv(X.location,xe)}}}}S()}function L(){O();for(const T in i){const F=i[T];for(const j in F){const q=F[j];for(const oe in q)u(q[oe].object),delete q[oe];delete F[j]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const F=i[T.id];for(const j in F){const q=F[j];for(const oe in q)u(q[oe].object),delete q[oe];delete F[j]}delete i[T.id]}function A(T){for(const F in i){const j=i[F];if(j[T.id]===void 0)continue;const q=j[T.id];for(const oe in q)u(q[oe].object),delete q[oe];delete j[T.id]}}function O(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function Jw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*d[v];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Fn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const O=A===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==oi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ti&&!O)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:L,maxSamples:I}}function eA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new pr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let x=h.clippingState||null;l.value=x,x=u(_,d,E,p);for(let L=0;L!==E;++L)x[L]=n[L];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,x=p;E!==v;++E,x+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function tA(t){let e=new WeakMap;function n(o,a){return a===Jc?o.mapping=ms:a===Qc&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Qc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kb(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const ns=4,op=[.125,.215,.35,.446,.526,.582],_r=20,rc=new S_,ap=new nt;let sc=null,oc=0,ac=0,lc=!1;const mr=(1+Math.sqrt(5))/2,Yr=1/mr,lp=[new W(-mr,Yr,0),new W(mr,Yr,0),new W(-Yr,0,mr),new W(Yr,0,mr),new W(0,mr,-Yr),new W(0,mr,Yr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],nA=new W;class cp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=nA}=s;sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sc,oc,ac),this._renderer.xr.enabled=lc,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ro,format:Fn,colorSpace:_s,depthBuffer:!1},r=up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(s)),this._blurMaterial=rA(s,e,n)}return r}_compileMaterial(e){const n=new Ht(this._lodPlanes[0],e);this._renderer.compile(n,rc)}_sceneToCubeUV(e,n,i,r,s){const l=new cn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(ap),f.toneMapping=Wi,f.autoClear=!1;const _=new Rf({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new Ht(new ws,_);let m=!1;const h=e.background;h?h.isColor&&(_.color.copy(h),e.background=null,m=!0):(_.color.copy(ap),m=!0);for(let S=0;S<6;S++){const E=S%3;E===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):E===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const x=this._cubeSize;ua(r,E*x,S>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ht(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ua(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,rc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lp[(r-s-1)%lp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ht(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const h=[];let S=0;for(let A=0;A<_r;++A){const O=A/v,w=Math.exp(-O*O/2);h.push(w),A===0?S+=w:A<m&&(S+=2*w)}for(let A=0;A<h.length;A++)h[A]=h[A]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const x=this._sizeLods[r],L=3*x*(r>E-ns?r-E+ns:0),I=4*(this._cubeSize-x);ua(n,L,I,3*x,2*x),l.setRenderTarget(n),l.render(f,rc)}}function iA(t){const e=[],n=[],i=[];let r=t;const s=t-ns+1+op.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ns?l=op[o-t+ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,h=1,S=new Float32Array(v*_*p),E=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let I=0;I<p;I++){const A=I%3*2/3-1,O=I>2?0:-1,w=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];S.set(w,v*_*I),E.set(d,m*_*I);const T=[I,I,I,I,I,I];x.set(T,h*_*I)}const L=new nr;L.setAttribute("position",new zn(S,v)),L.setAttribute("uv",new zn(E,m)),L.setAttribute("faceIndex",new zn(x,h)),e.push(L),r>ns&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function up(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=sl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rA(t,e,n){const i=new Float32Array(_r),r=new W(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Df(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function fp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function hp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Df(){return`

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
	`}function sA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jc||l===Qc,u=l===ms||l===gs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new cp(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new cp(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function oA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&as("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aA(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let E=0,x=S.length;E<x;E+=3){const L=S[E+0],I=S[E+1],A=S[E+2];d.push(L,I,I,A,A,L)}}else if(_!==void 0){const S=_.array;v=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const L=E+0,I=E+1,A=E+2;d.push(L,I,I,A,A,L)}}else return;const m=new(a_(d)?h_:f_)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function lA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];n.update(m,i,1)}function f(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,_);let h=0;for(let S=0;S<_;S++)h+=p[S]*v[S];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function cA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uA(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*I*4*f),O=new l_(A,L,I,f);O.type=ti,O.needsUpdate=!0;const w=x*4;for(let F=0;F<f;F++){const j=h[F],q=S[F],oe=E[F],ae=L*I*4*F;for(let K=0;K<j.count;K++){const Z=K*w;_===!0&&(r.fromBufferAttribute(j,K),A[ae+Z+0]=r.x,A[ae+Z+1]=r.y,A[ae+Z+2]=r.z,A[ae+Z+3]=0),v===!0&&(r.fromBufferAttribute(q,K),A[ae+Z+4]=r.x,A[ae+Z+5]=r.y,A[ae+Z+6]=r.z,A[ae+Z+7]=0),m===!0&&(r.fromBufferAttribute(oe,K),A[ae+Z+8]=r.x,A[ae+Z+9]=r.y,A[ae+Z+10]=r.z,A[ae+Z+11]=oe.itemSize===4?r.w:1)}}d={count:f,texture:O,size:new et(L,I)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function fA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const b_=new Jt,dp=new __(1,1),T_=new l_,w_=new Db,A_=new m_,pp=[],mp=[],gp=new Float32Array(16),_p=new Float32Array(9),vp=new Float32Array(4);function As(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pp[r];if(s===void 0&&(s=new Float32Array(r),pp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ol(t,e){let n=mp[e];n===void 0&&(n=new Int32Array(e),mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function pA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function mA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function gA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;vp.set(i),t.uniformMatrix2fv(this.addr,!1,vp),Bt(n,i)}}function _A(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;_p.set(i),t.uniformMatrix3fv(this.addr,!1,_p),Bt(n,i)}}function vA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(Ft(n,i))return;gp.set(i),t.uniformMatrix4fv(this.addr,!1,gp),Bt(n,i)}}function xA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function MA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function bA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function AA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(dp.compareFunction=o_,s=dp):s=b_,n.setTexture2D(e||s,r)}function RA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||w_,r)}function CA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||A_,r)}function PA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||T_,r)}function LA(t){switch(t){case 5126:return hA;case 35664:return dA;case 35665:return pA;case 35666:return mA;case 35674:return gA;case 35675:return _A;case 35676:return vA;case 5124:case 35670:return xA;case 35667:case 35671:return SA;case 35668:case 35672:return yA;case 35669:case 35673:return EA;case 5125:return MA;case 36294:return bA;case 36295:return TA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return AA;case 35679:case 36299:case 36307:return RA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return PA}}function IA(t,e){t.uniform1fv(this.addr,e)}function DA(t,e){const n=As(e,this.size,2);t.uniform2fv(this.addr,n)}function UA(t,e){const n=As(e,this.size,3);t.uniform3fv(this.addr,n)}function NA(t,e){const n=As(e,this.size,4);t.uniform4fv(this.addr,n)}function OA(t,e){const n=As(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function FA(t,e){const n=As(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BA(t,e){const n=As(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kA(t,e){t.uniform1iv(this.addr,e)}function HA(t,e){t.uniform2iv(this.addr,e)}function zA(t,e){t.uniform3iv(this.addr,e)}function VA(t,e){t.uniform4iv(this.addr,e)}function GA(t,e){t.uniform1uiv(this.addr,e)}function WA(t,e){t.uniform2uiv(this.addr,e)}function XA(t,e){t.uniform3uiv(this.addr,e)}function $A(t,e){t.uniform4uiv(this.addr,e)}function qA(t,e,n){const i=this.cache,r=e.length,s=ol(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||b_,s[o])}function jA(t,e,n){const i=this.cache,r=e.length,s=ol(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||w_,s[o])}function YA(t,e,n){const i=this.cache,r=e.length,s=ol(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||A_,s[o])}function KA(t,e,n){const i=this.cache,r=e.length,s=ol(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||T_,s[o])}function ZA(t){switch(t){case 5126:return IA;case 35664:return DA;case 35665:return UA;case 35666:return NA;case 35674:return OA;case 35675:return FA;case 35676:return BA;case 5124:case 35670:return kA;case 35667:case 35671:return HA;case 35668:case 35672:return zA;case 35669:case 35673:return VA;case 5125:return GA;case 36294:return WA;case 36295:return XA;case 36296:return $A;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return KA}}class JA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=LA(n.type)}}class QA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ZA(n.type)}}class eR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const cc=/(\w+)(\])?(\[|\.)?/g;function xp(t,e){t.seq.push(e),t.map[e.id]=e}function tR(t,e,n){const i=t.name,r=i.length;for(cc.lastIndex=0;;){const s=cc.exec(i),o=cc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){xp(n,c===void 0?new JA(a,t,e):new QA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new eR(a),xp(n,f)),n=f}}}class Ma{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);tR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Sp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const nR=37297;let iR=0;function rR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const yp=new Ke;function sR(t){ot._getMatrix(yp,ot.workingColorSpace,t);const e=`mat3( ${yp.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case ka:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ep(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+rR(t.getShaderSource(e),o)}else return r}function oR(t,e){const n=sR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function aR(t,e){let n;switch(e){case WM:n="Linear";break;case XM:n="Reinhard";break;case $M:n="Cineon";break;case qM:n="ACESFilmic";break;case YM:n="AgX";break;case KM:n="Neutral";break;case jM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fa=new W;function lR(){ot.getLuminanceCoefficients(fa);const t=fa.x.toFixed(4),e=fa.y.toFixed(4),n=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function uR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Xs(t){return t!==""}function Mp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(t){return t.replace(hR,pR)}const dR=new Map;function pR(t,e){let n=Ze[e];if(n===void 0){const i=dR.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ru(n)}const mR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(t){return t.replace(mR,gR)}function gR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function _R(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function vR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ms:case gs:e="ENVMAP_TYPE_CUBE";break;case sl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case gs:e="ENVMAP_MODE_REFRACTION";break}return e}function SR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case rl:e="ENVMAP_BLENDING_MULTIPLY";break;case VM:e="ENVMAP_BLENDING_MIX";break;case GM:e="ENVMAP_BLENDING_ADD";break}return e}function yR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function ER(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=_R(n),c=vR(n),u=xR(n),f=SR(n),d=yR(n),p=cR(n),_=uR(s),v=r.createProgram();let m,h,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),h.length>0&&(h+=`
`)):(m=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),h=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Wi?aR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,oR("linearToOutputTexel",n.outputColorSpace),lR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),o=Ru(o),o=Mp(o,n),o=bp(o,n),a=Ru(a),a=Mp(a,n),a=bp(a,n),o=Tp(o),a=Tp(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+m+o,x=S+h+a,L=Sp(r,r.VERTEX_SHADER,E),I=Sp(r,r.FRAGMENT_SHADER,x);r.attachShader(v,L),r.attachShader(v,I),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(F){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(v).trim(),q=r.getShaderInfoLog(L).trim(),oe=r.getShaderInfoLog(I).trim();let ae=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,L,I);else{const Z=Ep(r,L,"vertex"),X=Ep(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+Z+`
`+X)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||oe==="")&&(K=!1);K&&(F.diagnostics={runnable:ae,programLog:j,vertexShader:{log:q,prefix:m},fragmentShader:{log:oe,prefix:h}})}r.deleteShader(L),r.deleteShader(I),O=new Ma(r,v),w=fR(r,v)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,nR)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iR++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=I,this}let MR=0;class bR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TR(e),n.set(e,i)),i}}class TR{constructor(e){this.id=MR++,this.code=e,this.usedTimes=0}}function wR(t,e,n,i,r,s,o){const a=new Af,l=new bR,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,T,F,j,q){const oe=j.fog,ae=q.geometry,K=w.isMeshStandardMaterial?j.environment:null,Z=(w.isMeshStandardMaterial?n:e).get(w.envMap||K),X=Z&&Z.mapping===sl?Z.image.height:null,me=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const xe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Se=xe!==void 0?xe.length:0;let Ie=0;ae.morphAttributes.position!==void 0&&(Ie=1),ae.morphAttributes.normal!==void 0&&(Ie=2),ae.morphAttributes.color!==void 0&&(Ie=3);let je,re,_e,be;if(me){const dt=Jn[me];je=dt.vertexShader,re=dt.fragmentShader}else je=w.vertexShader,re=w.fragmentShader,l.update(w),_e=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const H=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),ce=q.isInstancedMesh===!0,le=q.isBatchedMesh===!0,Be=!!w.map,D=!!w.matcap,U=!!Z,y=!!w.aoMap,ie=!!w.lightMap,Q=!!w.bumpMap,J=!!w.normalMap,b=!!w.displacementMap,C=!!w.emissiveMap,N=!!w.metalnessMap,B=!!w.roughnessMap,de=w.anisotropy>0,M=w.clearcoat>0,g=w.dispersion>0,P=w.iridescence>0,z=w.sheen>0,Y=w.transmission>0,$=de&&!!w.anisotropyMap,Ee=M&&!!w.clearcoatMap,he=M&&!!w.clearcoatNormalMap,Te=M&&!!w.clearcoatRoughnessMap,Re=P&&!!w.iridescenceMap,fe=P&&!!w.iridescenceThicknessMap,Ce=z&&!!w.sheenColorMap,Ue=z&&!!w.sheenRoughnessMap,Ne=!!w.specularMap,ye=!!w.specularColorMap,ze=!!w.specularIntensityMap,k=Y&&!!w.transmissionMap,we=Y&&!!w.thicknessMap,pe=!!w.gradientMap,De=!!w.alphaMap,ge=w.alphaTest>0,ue=!!w.alphaHash,Oe=!!w.extensions;let $e=Wi;w.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&($e=t.toneMapping);const Mt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:re,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:le,batchingColor:le&&q._colorsTexture!==null,instancing:ce,instancingColor:ce&&q.instanceColor!==null,instancingMorph:ce&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:H===null?t.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_s,alphaToCoverage:!!w.alphaToCoverage,map:Be,matcap:D,envMap:U,envMapMode:U&&Z.mapping,envMapCubeUVHeight:X,aoMap:y,lightMap:ie,bumpMap:Q,normalMap:J,displacementMap:d&&b,emissiveMap:C,normalMapObjectSpace:J&&w.normalMapType===eb,normalMapTangentSpace:J&&w.normalMapType===bf,metalnessMap:N,roughnessMap:B,anisotropy:de,anisotropyMap:$,clearcoat:M,clearcoatMap:Ee,clearcoatNormalMap:he,clearcoatRoughnessMap:Te,dispersion:g,iridescence:P,iridescenceMap:Re,iridescenceThicknessMap:fe,sheen:z,sheenColorMap:Ce,sheenRoughnessMap:Ue,specularMap:Ne,specularColorMap:ye,specularIntensityMap:ze,transmission:Y,transmissionMap:k,thicknessMap:we,gradientMap:pe,opaque:w.transparent===!1&&w.blending===os&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:ue,combine:w.combine,mapUv:Be&&v(w.map.channel),aoMapUv:y&&v(w.aoMap.channel),lightMapUv:ie&&v(w.lightMap.channel),bumpMapUv:Q&&v(w.bumpMap.channel),normalMapUv:J&&v(w.normalMap.channel),displacementMapUv:b&&v(w.displacementMap.channel),emissiveMapUv:C&&v(w.emissiveMap.channel),metalnessMapUv:N&&v(w.metalnessMap.channel),roughnessMapUv:B&&v(w.roughnessMap.channel),anisotropyMapUv:$&&v(w.anisotropyMap.channel),clearcoatMapUv:Ee&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(w.sheenRoughnessMap.channel),specularMapUv:Ne&&v(w.specularMap.channel),specularColorMapUv:ye&&v(w.specularColorMap.channel),specularIntensityMapUv:ze&&v(w.specularIntensityMap.channel),transmissionMapUv:k&&v(w.transmissionMap.channel),thicknessMapUv:we&&v(w.thicknessMap.channel),alphaMapUv:De&&v(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(J||de),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ae.attributes.uv&&(Be||De),fog:!!oe,useFog:w.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:Be&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===gt,decodeVideoTextureEmissive:C&&w.emissiveMap.isVideoTexture===!0&&ot.getTransfer(w.emissiveMap.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Si,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function h(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)T.push(F),T.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(T,w),E(T,w),T.push(t.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function S(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function E(w,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const T=_[w.type];let F;if(T){const j=Jn[T];F=$b.clone(j.uniforms)}else F=w.uniforms;return F}function L(w,T){let F;for(let j=0,q=u.length;j<q;j++){const oe=u[j];if(oe.cacheKey===T){F=oe,++F.usedTimes;break}}return F===void 0&&(F=new ER(t,T,w,s),u.push(F)),F}function I(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:L,releaseProgram:I,releaseShaderCache:A,programs:u,dispose:O}}function AR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function RR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ap(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Rp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,v,m){const h=o(f,d,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||RR),i.length>1&&i.sort(d||Ap),r.length>1&&r.sort(d||Ap)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function CR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Rp,t.set(i,[o])):r>=s.length?(o=new Rp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new nt};break;case"SpotLight":n={position:new W,direction:new W,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function LR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IR=0;function DR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UR(t){const e=new PR,n=LR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new yt,o=new yt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,S=0,E=0,x=0,L=0,I=0,A=0;c.sort(DR);for(let w=0,T=c.length;w<T;w++){const F=c[w],j=F.color,q=F.intensity,oe=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=j.r*q,f+=j.g*q,d+=j.b*q;else if(F.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(F.sh.coefficients[K],q);A++}else if(F.isDirectionalLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,X=n.get(F);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=K,p++}else if(F.isSpotLight){const K=e.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(j).multiplyScalar(q),K.distance=oe,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,i.spot[v]=K;const Z=F.shadow;if(F.map&&(i.spotLightMap[L]=F.map,L++,Z.updateMatrices(F),F.castShadow&&I++),i.spotLightMatrix[v]=Z.matrix,F.castShadow){const X=n.get(F);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=ae,x++}v++}else if(F.isRectAreaLight){const K=e.get(F);K.color.copy(j).multiplyScalar(q),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=K,m++}else if(F.isPointLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){const Z=F.shadow,X=n.get(F);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=F.shadow.matrix,E++}i.point[_]=K,_++}else if(F.isHemisphereLight){const K=e.get(F);K.skyColor.copy(F.color).multiplyScalar(q),K.groundColor.copy(F.groundColor).multiplyScalar(q),i.hemi[h]=K,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==v||O.rectAreaLength!==m||O.hemiLength!==h||O.numDirectionalShadows!==S||O.numPointShadows!==E||O.numSpotShadows!==x||O.numSpotMaps!==L||O.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+L-I,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=A,O.directionalLength=p,O.pointLength=_,O.spotLength=v,O.rectAreaLength=m,O.hemiLength=h,O.numDirectionalShadows=S,O.numPointShadows=E,O.numSpotShadows=x,O.numSpotMaps=L,O.numLightProbes=A,i.version=IR++)}function l(c,u){let f=0,d=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(E.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Cp(t){const e=new UR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function NR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Cp(t),e.set(r,[a])):s>=o.length?(a=new Cp(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FR=`uniform sampler2D shadow_pass;
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
}`;function BR(t,e,n){let i=new Cf;const r=new et,s=new et,o=new vt,a=new rT({depthPacking:QM}),l=new sT,c={},u=n.maxTextureSize,f={[Yi]:un,[un]:Yi,[Si]:Si},d=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:OR,fragmentShader:FR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new nr;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ht(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kg;let h=this.type;this.render=function(I,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const w=t.getRenderTarget(),T=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),j=t.state;j.setBlending(Gi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=h!==gi&&this.type===gi,oe=h===gi&&this.type!==gi;for(let ae=0,K=I.length;ae<K;ae++){const Z=I[ae],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const me=X.getFrameExtents();if(r.multiply(me),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,X.mapSize.y=s.y)),X.map===null||q===!0||oe===!0){const Se=this.type!==gi?{minFilter:Sn,magFilter:Sn}:{};X.map!==null&&X.map.dispose(),X.map=new Ar(r.x,r.y,Se),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}t.setRenderTarget(X.map),t.clear();const xe=X.getViewportCount();for(let Se=0;Se<xe;Se++){const Ie=X.getViewport(Se);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),j.viewport(o),X.updateMatrices(Z,Se),i=X.getFrustum(),x(A,O,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===gi&&S(X,O),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,T,F)};function S(I,A){const O=e.update(v);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ar(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(A,null,O,d,v,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(A,null,O,p,v,null)}function E(I,A,O,w){let T=null;const F=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)T=F;else if(T=O.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const j=T.uuid,q=A.uuid;let oe=c[j];oe===void 0&&(oe={},c[j]=oe);let ae=oe[q];ae===void 0&&(ae=T.clone(),oe[q]=ae,A.addEventListener("dispose",L)),T=ae}if(T.visible=A.visible,T.wireframe=A.wireframe,w===gi?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const j=t.properties.get(T);j.light=O}return T}function x(I,A,O,w,T){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===gi)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const q=e.update(I),oe=I.material;if(Array.isArray(oe)){const ae=q.groups;for(let K=0,Z=ae.length;K<Z;K++){const X=ae[K],me=oe[X.materialIndex];if(me&&me.visible){const xe=E(I,me,w,T);I.onBeforeShadow(t,I,A,O,q,xe,X),t.renderBufferDirect(O,null,q,xe,I,X),I.onAfterShadow(t,I,A,O,q,xe,X)}}}else if(oe.visible){const ae=E(I,oe,w,T);I.onBeforeShadow(t,I,A,O,q,ae,null),t.renderBufferDirect(O,null,q,ae,I,null),I.onAfterShadow(t,I,A,O,q,ae,null)}}const j=I.children;for(let q=0,oe=j.length;q<oe;q++)x(j[q],A,O,w,T)}function L(I){I.target.removeEventListener("dispose",L);for(const O in c){const w=c[O],T=I.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const kR={[Xc]:$c,[qc]:Kc,[jc]:Zc,[ps]:Yc,[$c]:Xc,[Kc]:qc,[Zc]:jc,[Yc]:ps};function HR(t,e){function n(){let k=!1;const we=new vt;let pe=null;const De=new vt(0,0,0,0);return{setMask:function(ge){pe!==ge&&!k&&(t.colorMask(ge,ge,ge,ge),pe=ge)},setLocked:function(ge){k=ge},setClear:function(ge,ue,Oe,$e,Mt){Mt===!0&&(ge*=$e,ue*=$e,Oe*=$e),we.set(ge,ue,Oe,$e),De.equals(we)===!1&&(t.clearColor(ge,ue,Oe,$e),De.copy(we))},reset:function(){k=!1,pe=null,De.set(-1,0,0,0)}}}function i(){let k=!1,we=!1,pe=null,De=null,ge=null;return{setReversed:function(ue){if(we!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),we=ue;const $e=ge;ge=null,this.setClear($e)}},getReversed:function(){return we},setTest:function(ue){ue?H(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ue){pe!==ue&&!k&&(t.depthMask(ue),pe=ue)},setFunc:function(ue){if(we&&(ue=kR[ue]),De!==ue){switch(ue){case Xc:t.depthFunc(t.NEVER);break;case $c:t.depthFunc(t.ALWAYS);break;case qc:t.depthFunc(t.LESS);break;case ps:t.depthFunc(t.LEQUAL);break;case jc:t.depthFunc(t.EQUAL);break;case Yc:t.depthFunc(t.GEQUAL);break;case Kc:t.depthFunc(t.GREATER);break;case Zc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){k=ue},setClear:function(ue){ge!==ue&&(we&&(ue=1-ue),t.clearDepth(ue),ge=ue)},reset:function(){k=!1,pe=null,De=null,ge=null,we=!1}}}function r(){let k=!1,we=null,pe=null,De=null,ge=null,ue=null,Oe=null,$e=null,Mt=null;return{setTest:function(dt){k||(dt?H(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(dt){we!==dt&&!k&&(t.stencilMask(dt),we=dt)},setFunc:function(dt,Pn,ai){(pe!==dt||De!==Pn||ge!==ai)&&(t.stencilFunc(dt,Pn,ai),pe=dt,De=Pn,ge=ai)},setOp:function(dt,Pn,ai){(ue!==dt||Oe!==Pn||$e!==ai)&&(t.stencilOp(dt,Pn,ai),ue=dt,Oe=Pn,$e=ai)},setLocked:function(dt){k=dt},setClear:function(dt){Mt!==dt&&(t.clearStencil(dt),Mt=dt)},reset:function(){k=!1,we=null,pe=null,De=null,ge=null,ue=null,Oe=null,$e=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,L=null,I=null,A=new nt(0,0,0),O=0,w=!1,T=null,F=null,j=null,q=null,oe=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Z=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=Z>=2);let me=null,xe={};const Se=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),je=new vt().fromArray(Se),re=new vt().fromArray(Ie);function _e(k,we,pe,De){const ge=new Uint8Array(4),ue=t.createTexture();t.bindTexture(k,ue),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<pe;Oe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(we,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(we+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ue}const be={};be[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),H(t.DEPTH_TEST),o.setFunc(ps),Q(!1),J(Ed),H(t.CULL_FACE),y(Gi);function H(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function se(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function ce(k,we){return f[k]!==we?(t.bindFramebuffer(k,we),f[k]=we,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=we),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=we),!0):!1}function le(k,we){let pe=p,De=!1;if(k){pe=d.get(we),pe===void 0&&(pe=[],d.set(we,pe));const ge=k.textures;if(pe.length!==ge.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Oe=ge.length;ue<Oe;ue++)pe[ue]=t.COLOR_ATTACHMENT0+ue;pe.length=ge.length,De=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,De=!0);De&&t.drawBuffers(pe)}function Be(k){return _!==k?(t.useProgram(k),_=k,!0):!1}const D={[gr]:t.FUNC_ADD,[TM]:t.FUNC_SUBTRACT,[wM]:t.FUNC_REVERSE_SUBTRACT};D[AM]=t.MIN,D[RM]=t.MAX;const U={[CM]:t.ZERO,[PM]:t.ONE,[LM]:t.SRC_COLOR,[Gc]:t.SRC_ALPHA,[FM]:t.SRC_ALPHA_SATURATE,[NM]:t.DST_COLOR,[DM]:t.DST_ALPHA,[IM]:t.ONE_MINUS_SRC_COLOR,[Wc]:t.ONE_MINUS_SRC_ALPHA,[OM]:t.ONE_MINUS_DST_COLOR,[UM]:t.ONE_MINUS_DST_ALPHA,[BM]:t.CONSTANT_COLOR,[kM]:t.ONE_MINUS_CONSTANT_COLOR,[HM]:t.CONSTANT_ALPHA,[zM]:t.ONE_MINUS_CONSTANT_ALPHA};function y(k,we,pe,De,ge,ue,Oe,$e,Mt,dt){if(k===Gi){v===!0&&(se(t.BLEND),v=!1);return}if(v===!1&&(H(t.BLEND),v=!0),k!==bM){if(k!==m||dt!==w){if((h!==gr||x!==gr)&&(t.blendEquation(t.FUNC_ADD),h=gr,x=gr),dt)switch(k){case os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Md:t.blendFunc(t.ONE,t.ONE);break;case bd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Td:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Md:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case bd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Td:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}S=null,E=null,L=null,I=null,A.set(0,0,0),O=0,m=k,w=dt}return}ge=ge||we,ue=ue||pe,Oe=Oe||De,(we!==h||ge!==x)&&(t.blendEquationSeparate(D[we],D[ge]),h=we,x=ge),(pe!==S||De!==E||ue!==L||Oe!==I)&&(t.blendFuncSeparate(U[pe],U[De],U[ue],U[Oe]),S=pe,E=De,L=ue,I=Oe),($e.equals(A)===!1||Mt!==O)&&(t.blendColor($e.r,$e.g,$e.b,Mt),A.copy($e),O=Mt),m=k,w=!1}function ie(k,we){k.side===Si?se(t.CULL_FACE):H(t.CULL_FACE);let pe=k.side===un;we&&(pe=!pe),Q(pe),k.blending===os&&k.transparent===!1?y(Gi):y(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const De=k.stencilWrite;a.setTest(De),De&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),C(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?H(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){T!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),T=k)}function J(k){k!==EM?(H(t.CULL_FACE),k!==F&&(k===Ed?t.cullFace(t.BACK):k===MM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),F=k}function b(k){k!==j&&(K&&t.lineWidth(k),j=k)}function C(k,we,pe){k?(H(t.POLYGON_OFFSET_FILL),(q!==we||oe!==pe)&&(t.polygonOffset(we,pe),q=we,oe=pe)):se(t.POLYGON_OFFSET_FILL)}function N(k){k?H(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function B(k){k===void 0&&(k=t.TEXTURE0+ae-1),me!==k&&(t.activeTexture(k),me=k)}function de(k,we,pe){pe===void 0&&(me===null?pe=t.TEXTURE0+ae-1:pe=me);let De=xe[pe];De===void 0&&(De={type:void 0,texture:void 0},xe[pe]=De),(De.type!==k||De.texture!==we)&&(me!==pe&&(t.activeTexture(pe),me=pe),t.bindTexture(k,we||be[k]),De.type=k,De.texture=we)}function M(){const k=xe[me];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function g(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function z(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function fe(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(k){je.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),je.copy(k))}function Ue(k){re.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),re.copy(k))}function Ne(k,we){let pe=c.get(we);pe===void 0&&(pe=new WeakMap,c.set(we,pe));let De=pe.get(k);De===void 0&&(De=t.getUniformBlockIndex(we,k.name),pe.set(k,De))}function ye(k,we){const De=c.get(we).get(k);l.get(we)!==De&&(t.uniformBlockBinding(we,De,k.__bindingPointIndex),l.set(we,De))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},me=null,xe={},f={},d=new WeakMap,p=[],_=null,v=!1,m=null,h=null,S=null,E=null,x=null,L=null,I=null,A=new nt(0,0,0),O=0,w=!1,T=null,F=null,j=null,q=null,oe=null,je.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:H,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:Be,setBlending:y,setMaterial:ie,setFlipSided:Q,setCullFace:J,setLineWidth:b,setPolygonOffset:C,setScissorTest:N,activeTexture:B,bindTexture:de,unbindTexture:M,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:Re,texImage3D:fe,updateUBOMapping:Ne,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Te,texSubImage2D:z,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:Ee,scissor:Ce,viewport:Ue,reset:ze}}function zR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,g){return p?new OffscreenCanvas(M,g):yo("canvas")}function v(M,g,P){let z=1;const Y=de(M);if((Y.width>P||Y.height>P)&&(z=P/Math.max(Y.width,Y.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const $=Math.floor(z*Y.width),Ee=Math.floor(z*Y.height);f===void 0&&(f=_($,Ee));const he=g?_($,Ee):f;return he.width=$,he.height=Ee,he.getContext("2d").drawImage(M,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+$+"x"+Ee+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function S(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(M,g,P,z,Y=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=g;if(g===t.RED&&(P===t.FLOAT&&($=t.R32F),P===t.HALF_FLOAT&&($=t.R16F),P===t.UNSIGNED_BYTE&&($=t.R8)),g===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.R8UI),P===t.UNSIGNED_SHORT&&($=t.R16UI),P===t.UNSIGNED_INT&&($=t.R32UI),P===t.BYTE&&($=t.R8I),P===t.SHORT&&($=t.R16I),P===t.INT&&($=t.R32I)),g===t.RG&&(P===t.FLOAT&&($=t.RG32F),P===t.HALF_FLOAT&&($=t.RG16F),P===t.UNSIGNED_BYTE&&($=t.RG8)),g===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RG8UI),P===t.UNSIGNED_SHORT&&($=t.RG16UI),P===t.UNSIGNED_INT&&($=t.RG32UI),P===t.BYTE&&($=t.RG8I),P===t.SHORT&&($=t.RG16I),P===t.INT&&($=t.RG32I)),g===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RGB8UI),P===t.UNSIGNED_SHORT&&($=t.RGB16UI),P===t.UNSIGNED_INT&&($=t.RGB32UI),P===t.BYTE&&($=t.RGB8I),P===t.SHORT&&($=t.RGB16I),P===t.INT&&($=t.RGB32I)),g===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&($=t.RGBA8UI),P===t.UNSIGNED_SHORT&&($=t.RGBA16UI),P===t.UNSIGNED_INT&&($=t.RGBA32UI),P===t.BYTE&&($=t.RGBA8I),P===t.SHORT&&($=t.RGBA16I),P===t.INT&&($=t.RGBA32I)),g===t.RGB&&P===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),g===t.RGBA){const Ee=Y?ka:ot.getTransfer(z);P===t.FLOAT&&($=t.RGBA32F),P===t.HALF_FLOAT&&($=t.RGBA16F),P===t.UNSIGNED_BYTE&&($=Ee===gt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(M,g){let P;return M?g===null||g===wr||g===vo?P=t.DEPTH24_STENCIL8:g===ti?P=t.DEPTH32F_STENCIL8:g===_o&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===wr||g===vo?P=t.DEPTH_COMPONENT24:g===ti?P=t.DEPTH_COMPONENT32F:g===_o&&(P=t.DEPTH_COMPONENT16),P}function L(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Sn&&M.minFilter!==ei?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function I(M){const g=M.target;g.removeEventListener("dispose",I),O(g),g.isVideoTexture&&u.delete(g)}function A(M){const g=M.target;g.removeEventListener("dispose",A),T(g)}function O(M){const g=i.get(M);if(g.__webglInit===void 0)return;const P=M.source,z=d.get(P);if(z){const Y=z[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&w(M),Object.keys(z).length===0&&d.delete(P)}i.remove(M)}function w(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const P=M.source,z=d.get(P);delete z[g.__cacheKey],o.memory.textures--}function T(M){const g=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let Y=0;Y<g.__webglFramebuffer[z].length;Y++)t.deleteFramebuffer(g.__webglFramebuffer[z][Y]);else t.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)t.deleteFramebuffer(g.__webglFramebuffer[z]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=M.textures;for(let z=0,Y=P.length;z<Y;z++){const $=i.get(P[z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(P[z])}i.remove(M)}let F=0;function j(){F=0}function q(){const M=F;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function oe(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function ae(M,g){const P=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.version>0&&P.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(P,M,g);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+g)}function K(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){be(P,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+g)}function Z(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){be(P,M,g);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+g)}function X(M,g){const P=i.get(M);if(M.version>0&&P.__version!==M.version){H(P,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+g)}const me={[go]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[eu]:t.MIRRORED_REPEAT},xe={[Sn]:t.NEAREST,[ZM]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[ei]:t.LINEAR,[Dl]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},Se={[tb]:t.NEVER,[ab]:t.ALWAYS,[nb]:t.LESS,[o_]:t.LEQUAL,[ib]:t.EQUAL,[ob]:t.GEQUAL,[rb]:t.GREATER,[sb]:t.NOTEQUAL};function Ie(M,g){if(g.type===ti&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===ei||g.magFilter===Dl||g.magFilter===Go||g.magFilter===Sr||g.minFilter===ei||g.minFilter===Dl||g.minFilter===Go||g.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,me[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,me[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,me[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,xe[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,xe[g.minFilter]),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Se[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Sn||g.minFilter!==Go&&g.minFilter!==Sr||g.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(M,g){let P=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",I));const z=g.source;let Y=d.get(z);Y===void 0&&(Y={},d.set(z,Y));const $=oe(g);if($!==M.__cacheKey){Y[$]===void 0&&(Y[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Y[$].usedTimes++;const Ee=Y[M.__cacheKey];Ee!==void 0&&(Y[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(g)),M.__cacheKey=$,M.__webglTexture=Y[$].texture}return P}function re(M,g,P){return Math.floor(Math.floor(M/P)/g)}function _e(M,g,P,z){const $=M.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,g.width,g.height,P,z,g.data);else{$.sort((fe,Ce)=>fe.start-Ce.start);let Ee=0;for(let fe=1;fe<$.length;fe++){const Ce=$[Ee],Ue=$[fe],Ne=Ce.start+Ce.count,ye=re(Ue.start,g.width,4),ze=re(Ce.start,g.width,4);Ue.start<=Ne+1&&ye===ze&&re(Ue.start+Ue.count-1,g.width,4)===ye?Ce.count=Math.max(Ce.count,Ue.start+Ue.count-Ce.start):(++Ee,$[Ee]=Ue)}$.length=Ee+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Re=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,g.width);for(let fe=0,Ce=$.length;fe<Ce;fe++){const Ue=$[fe],Ne=Math.floor(Ue.start/4),ye=Math.ceil(Ue.count/4),ze=Ne%g.width,k=Math.floor(Ne/g.width),we=ye,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,ze,k,we,pe,P,z,g.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Re)}}function be(M,g,P){let z=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=t.TEXTURE_3D);const Y=je(M,g),$=g.source;n.bindTexture(z,M.__webglTexture,t.TEXTURE0+P);const Ee=i.get($);if($.version!==Ee.__version||Y===!0){n.activeTexture(t.TEXTURE0+P);const he=ot.getPrimaries(ot.workingColorSpace),Te=g.colorSpace===Hi?null:ot.getPrimaries(g.colorSpace),Re=g.colorSpace===Hi||he===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let fe=v(g.image,!1,r.maxTextureSize);fe=B(g,fe);const Ce=s.convert(g.format,g.colorSpace),Ue=s.convert(g.type);let Ne=E(g.internalFormat,Ce,Ue,g.colorSpace,g.isVideoTexture);Ie(z,g);let ye;const ze=g.mipmaps,k=g.isVideoTexture!==!0,we=Ee.__version===void 0||Y===!0,pe=$.dataReady,De=L(g,fe);if(g.isDepthTexture)Ne=x(g.format===So,g.type),we&&(k?n.texStorage2D(t.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ce,Ue,null));else if(g.isDataTexture)if(ze.length>0){k&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,ze[0].width,ze[0].height);for(let ge=0,ue=ze.length;ge<ue;ge++)ye=ze[ge],k?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,Ce,Ue,ye.data);g.generateMipmaps=!1}else k?(we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,fe.width,fe.height),pe&&_e(g,fe,Ce,Ue)):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Ce,Ue,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){k&&we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,ze[0].width,ze[0].height,fe.depth);for(let ge=0,ue=ze.length;ge<ue;ge++)if(ye=ze[ge],g.format!==Fn)if(Ce!==null)if(k){if(pe)if(g.layerUpdates.size>0){const Oe=sp(ye.width,ye.height,g.format,g.type);for(const $e of g.layerUpdates){const Mt=ye.data.subarray($e*Oe/ye.data.BYTES_PER_ELEMENT,($e+1)*Oe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,$e,ye.width,ye.height,1,Ce,Mt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Ce,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Ne,ye.width,ye.height,fe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,fe.depth,Ce,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Ne,ye.width,ye.height,fe.depth,0,Ce,Ue,ye.data)}else{k&&we&&n.texStorage2D(t.TEXTURE_2D,De,Ne,ze[0].width,ze[0].height);for(let ge=0,ue=ze.length;ge<ue;ge++)ye=ze[ge],g.format!==Fn?Ce!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ce,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Ne,ye.width,ye.height,0,Ce,Ue,ye.data)}else if(g.isDataArrayTexture)if(k){if(we&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ne,fe.width,fe.height,fe.depth),pe)if(g.layerUpdates.size>0){const ge=sp(fe.width,fe.height,g.format,g.type);for(const ue of g.layerUpdates){const Oe=fe.data.subarray(ue*ge/fe.data.BYTES_PER_ELEMENT,(ue+1)*ge/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Ce,Ue,Oe)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Ue,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Ce,Ue,fe.data);else if(g.isData3DTexture)k?(we&&n.texStorage3D(t.TEXTURE_3D,De,Ne,fe.width,fe.height,fe.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Ue,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Ce,Ue,fe.data);else if(g.isFramebufferTexture){if(we)if(k)n.texStorage2D(t.TEXTURE_2D,De,Ne,fe.width,fe.height);else{let ge=fe.width,ue=fe.height;for(let Oe=0;Oe<De;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Ne,ge,ue,0,Ce,Ue,null),ge>>=1,ue>>=1}}else if(ze.length>0){if(k&&we){const ge=de(ze[0]);n.texStorage2D(t.TEXTURE_2D,De,Ne,ge.width,ge.height)}for(let ge=0,ue=ze.length;ge<ue;ge++)ye=ze[ge],k?pe&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ce,Ue,ye):n.texImage2D(t.TEXTURE_2D,ge,Ne,Ce,Ue,ye);g.generateMipmaps=!1}else if(k){if(we){const ge=de(fe);n.texStorage2D(t.TEXTURE_2D,De,Ne,ge.width,ge.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,Ue,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Ce,Ue,fe);m(g)&&h(z),Ee.__version=$.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function H(M,g,P){if(g.image.length!==6)return;const z=je(M,g),Y=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+P);const $=i.get(Y);if(Y.version!==$.__version||z===!0){n.activeTexture(t.TEXTURE0+P);const Ee=ot.getPrimaries(ot.workingColorSpace),he=g.colorSpace===Hi?null:ot.getPrimaries(g.colorSpace),Te=g.colorSpace===Hi||Ee===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Ce=[];for(let ue=0;ue<6;ue++)!Re&&!fe?Ce[ue]=v(g.image[ue],!0,r.maxCubemapSize):Ce[ue]=fe?g.image[ue].image:g.image[ue],Ce[ue]=B(g,Ce[ue]);const Ue=Ce[0],Ne=s.convert(g.format,g.colorSpace),ye=s.convert(g.type),ze=E(g.internalFormat,Ne,ye,g.colorSpace),k=g.isVideoTexture!==!0,we=$.__version===void 0||z===!0,pe=Y.dataReady;let De=L(g,Ue);Ie(t.TEXTURE_CUBE_MAP,g);let ge;if(Re){k&&we&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,ze,Ue.width,Ue.height);for(let ue=0;ue<6;ue++){ge=Ce[ue].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const $e=ge[Oe];g.format!==Fn?Ne!==null?k?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,$e.width,$e.height,Ne,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,ze,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,$e.width,$e.height,Ne,ye,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,ze,$e.width,$e.height,0,Ne,ye,$e.data)}}}else{if(ge=g.mipmaps,k&&we){ge.length>0&&De++;const ue=de(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,ze,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ce[ue].width,Ce[ue].height,Ne,ye,Ce[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Ce[ue].width,Ce[ue].height,0,Ne,ye,Ce[ue].data);for(let Oe=0;Oe<ge.length;Oe++){const Mt=ge[Oe].image[ue].image;k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Mt.width,Mt.height,Ne,ye,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,ze,Mt.width,Mt.height,0,Ne,ye,Mt.data)}}else{k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,ye,Ce[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ze,Ne,ye,Ce[ue]);for(let Oe=0;Oe<ge.length;Oe++){const $e=ge[Oe];k?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Ne,ye,$e.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,ze,Ne,ye,$e.image[ue])}}}m(g)&&h(t.TEXTURE_CUBE_MAP),$.__version=Y.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function se(M,g,P,z,Y,$){const Ee=s.convert(P.format,P.colorSpace),he=s.convert(P.type),Te=E(P.internalFormat,Ee,he,P.colorSpace),Re=i.get(g),fe=i.get(P);if(fe.__renderTarget=g,!Re.__hasExternalTextures){const Ce=Math.max(1,g.width>>$),Ue=Math.max(1,g.height>>$);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,$,Te,Ce,Ue,g.depth,0,Ee,he,null):n.texImage2D(Y,$,Te,Ce,Ue,0,Ee,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,Y,fe.__webglTexture,0,b(g)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,Y,fe.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(M,g,P){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,Y=z&&z.isDepthTexture?z.type:null,$=x(g.stencilBuffer,Y),Ee=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=b(g);C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,$,g.width,g.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,$,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,$,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,M)}else{const z=g.textures;for(let Y=0;Y<z.length;Y++){const $=z[Y],Ee=s.convert($.format,$.colorSpace),he=s.convert($.type),Te=E($.internalFormat,Ee,he,$.colorSpace),Re=b(g);P&&C(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Te,g.width,g.height):C(g)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,Te,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,Te,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(g.depthTexture);z.__renderTarget=g,(!z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ae(g.depthTexture,0);const Y=z.__webglTexture,$=b(g);if(g.depthTexture.format===xo)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(g.depthTexture.format===So)C(g)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Be(M){const g=i.get(M),P=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",Y)};z.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const z=M.texture.mipmaps;z&&z.length>0?le(g.__webglFramebuffer[0],M):le(g.__webglFramebuffer,M)}else if(P){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=t.createRenderbuffer(),ce(g.__webglDepthbuffer[z],M,!1);else{const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,$)}}else{const z=M.texture.mipmaps;if(z&&z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),ce(g.__webglDepthbuffer,M,!1);else{const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(M,g,P){const z=i.get(M);g!==void 0&&se(z.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Be(M)}function U(M){const g=M.texture,P=i.get(M),z=i.get(g);M.addEventListener("dispose",A);const Y=M.textures,$=M.isWebGLCubeRenderTarget===!0,Ee=Y.length>1;if(Ee||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=g.version,o.memory.textures++),$){P.__webglFramebuffer=[];for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[he]=[];for(let Te=0;Te<g.mipmaps.length;Te++)P.__webglFramebuffer[he][Te]=t.createFramebuffer()}else P.__webglFramebuffer[he]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let he=0;he<g.mipmaps.length;he++)P.__webglFramebuffer[he]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let he=0,Te=Y.length;he<Te;he++){const Re=i.get(Y[he]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&C(M)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let he=0;he<Y.length;he++){const Te=Y[he];P.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[he]);const Re=s.convert(Te.format,Te.colorSpace),fe=s.convert(Te.type),Ce=E(Te.internalFormat,Re,fe,Te.colorSpace,M.isXRRenderTarget===!0),Ue=b(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ce,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,P.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(P.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,g);for(let he=0;he<6;he++)if(g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)se(P.__webglFramebuffer[he][Te],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Te);else se(P.__webglFramebuffer[he],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(g)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let he=0,Te=Y.length;he<Te;he++){const Re=Y[he],fe=i.get(Re);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Ie(t.TEXTURE_2D,Re),se(P.__webglFramebuffer,M,Re,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Re)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(he=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,z.__webglTexture),Ie(he,g),g.mipmaps&&g.mipmaps.length>0)for(let Te=0;Te<g.mipmaps.length;Te++)se(P.__webglFramebuffer[Te],M,g,t.COLOR_ATTACHMENT0,he,Te);else se(P.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,he,0);m(g)&&h(he),n.unbindTexture()}M.depthBuffer&&Be(M)}function y(M){const g=M.textures;for(let P=0,z=g.length;P<z;P++){const Y=g[P];if(m(Y)){const $=S(M),Ee=i.get(Y).__webglTexture;n.bindTexture($,Ee),h($),n.unbindTexture()}}}const ie=[],Q=[];function J(M){if(M.samples>0){if(C(M)===!1){const g=M.textures,P=M.width,z=M.height;let Y=t.COLOR_BUFFER_BIT;const $=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(M),he=g.length>1;if(he)for(let Re=0;Re<g.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Te=M.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const fe=i.get(g[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,P,z,0,0,P,z,Y,t.NEAREST),l===!0&&(ie.length=0,Q.length=0,ie.push(t.COLOR_ATTACHMENT0+Re),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ie.push($),Q.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Q)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Re=0;Re<g.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[Re]);const fe=i.get(g[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function b(M){return Math.min(r.maxSamples,M.samples)}function C(M){const g=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function N(M){const g=o.render.frame;u.get(M)!==g&&(u.set(M,g),M.update())}function B(M,g){const P=M.colorSpace,z=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||P!==_s&&P!==Hi&&(ot.getTransfer(P)===gt?(z!==Fn||Y!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function de(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=D,this.setupRenderTarget=U,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=C}function VR(t,e){function n(i,r=Hi){let s;const o=ot.getTransfer(r);if(i===oi)return t.UNSIGNED_BYTE;if(i===vf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===t_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qg)return t.BYTE;if(i===e_)return t.SHORT;if(i===_o)return t.UNSIGNED_SHORT;if(i===_f)return t.INT;if(i===wr)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Ro)return t.HALF_FLOAT;if(i===n_)return t.ALPHA;if(i===i_)return t.RGB;if(i===Fn)return t.RGBA;if(i===xo)return t.DEPTH_COMPONENT;if(i===So)return t.DEPTH_STENCIL;if(i===Sf)return t.RED;if(i===yf)return t.RED_INTEGER;if(i===r_)return t.RG;if(i===Ef)return t.RG_INTEGER;if(i===Mf)return t.RGBA_INTEGER;if(i===va||i===xa||i===Sa||i===ya)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tu||i===nu||i===iu||i===ru)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===su||i===ou||i===au)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===su||i===ou)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===au)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lu||i===cu||i===uu||i===fu||i===hu||i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===Su||i===yu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===du)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_u)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Su)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yu)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ea||i===Eu||i===Mu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ea)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===s_||i===bu||i===Tu||i===wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ea)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const GR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WR=`
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

}`;class XR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:GR,fragmentShader:WR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ht(new Rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $R extends Ms{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const v=new XR,m=n.getContextAttributes();let h=null,S=null;const E=[],x=[],L=new et;let I=null;const A=new cn;A.viewport=new vt;const O=new cn;O.viewport=new vt;const w=[A,O],T=new dT;let F=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let _e=E[re];return _e===void 0&&(_e=new ec,E[re]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(re){let _e=E[re];return _e===void 0&&(_e=new ec,E[re]=_e),_e.getGripSpace()},this.getHand=function(re){let _e=E[re];return _e===void 0&&(_e=new ec,E[re]=_e),_e.getHandSpace()};function q(re){const _e=x.indexOf(re.inputSource);if(_e===-1)return;const be=E[_e];be!==void 0&&(be.update(re.inputSource,re.frame,c||o),be.dispatchEvent({type:re.type,data:re.inputSource}))}function oe(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",ae);for(let re=0;re<E.length;re++){const _e=x[re];_e!==null&&(x[re]=null,E[re].disconnect(_e))}F=null,j=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,S=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,H=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?So:xo,H=m.stencil?vo:wr);const ce={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ar(d.textureWidth,d.textureHeight,{format:Fn,type:oi,depthTexture:new __(d.textureWidth,d.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ar(p.framebufferWidth,p.framebufferHeight,{format:Fn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(re){for(let _e=0;_e<re.removed.length;_e++){const be=re.removed[_e],H=x.indexOf(be);H>=0&&(x[H]=null,E[H].disconnect(be))}for(let _e=0;_e<re.added.length;_e++){const be=re.added[_e];let H=x.indexOf(be);if(H===-1){for(let ce=0;ce<E.length;ce++)if(ce>=x.length){x.push(be),H=ce;break}else if(x[ce]===null){x[ce]=be,H=ce;break}if(H===-1)break}const se=E[H];se&&se.connect(be)}}const K=new W,Z=new W;function X(re,_e,be){K.setFromMatrixPosition(_e.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const H=K.distanceTo(Z),se=_e.projectionMatrix.elements,ce=be.projectionMatrix.elements,le=se[14]/(se[10]-1),Be=se[14]/(se[10]+1),D=(se[9]+1)/se[5],U=(se[9]-1)/se[5],y=(se[8]-1)/se[0],ie=(ce[8]+1)/ce[0],Q=le*y,J=le*ie,b=H/(-y+ie),C=b*-y;if(_e.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(C),re.translateZ(b),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),se[10]===-1)re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const N=le+b,B=Be+b,de=Q-C,M=J+(H-C),g=D*Be/B*N,P=U*Be/B*N;re.projectionMatrix.makePerspective(de,M,g,P,N,B),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function me(re,_e){_e===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(_e.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let _e=re.near,be=re.far;v.texture!==null&&(v.depthNear>0&&(_e=v.depthNear),v.depthFar>0&&(be=v.depthFar)),T.near=O.near=A.near=_e,T.far=O.far=A.far=be,(F!==T.near||j!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,j=T.far),A.layers.mask=re.layers.mask|2,O.layers.mask=re.layers.mask|4,T.layers.mask=A.layers.mask|O.layers.mask;const H=re.parent,se=T.cameras;me(T,H);for(let ce=0;ce<se.length;ce++)me(se[ce],H);se.length===2?X(T,A,O):T.projectionMatrix.copy(A.projectionMatrix),xe(re,T,H)};function xe(re,_e,be){be===null?re.matrix.copy(_e.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(_e.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(_e.projectionMatrix),re.projectionMatrixInverse.copy(_e.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=vs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let Se=null;function Ie(re,_e){if(u=_e.getViewerPose(c||o),_=_e,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let H=!1;be.length!==T.cameras.length&&(T.cameras.length=0,H=!0);for(let le=0;le<be.length;le++){const Be=be[le];let D=null;if(p!==null)D=p.getViewport(Be);else{const y=f.getViewSubImage(d,Be);D=y.viewport,le===0&&(e.setRenderTargetTextures(S,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(S))}let U=w[le];U===void 0&&(U=new cn,U.layers.enable(le),U.viewport=new vt,w[le]=U),U.matrix.fromArray(Be.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Be.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(D.x,D.y,D.width,D.height),le===0&&(T.matrix.copy(U.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),H===!0&&T.cameras.push(U)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const le=f.getDepthInformation(be[0]);le&&le.isValid&&le.texture&&v.init(e,le,r.renderState)}}for(let be=0;be<E.length;be++){const H=x[be],se=E[be];H!==null&&se!==void 0&&se.update(H,_e,c||o)}Se&&Se(re,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const je=new M_;je.setAnimationLoop(Ie),this.setAnimationLoop=function(re){Se=re},this.dispose=function(){}}}const hr=new Gn,qR=new yt;function jR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,d_(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,S,E,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,S,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===un&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===un&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const S=e.get(h),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,hr.copy(x),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(hr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,S,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*S,m.scale.value=E*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,S){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const S=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;i.uniformBlockBinding(S,x)}function c(S,E){let x=r[S.id];x===void 0&&(_(S),x=u(S),r[S.id]=x,S.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(S,L);const I=e.render.frame;s[S.id]!==I&&(d(S),s[S.id]=I)}function u(S){const E=f();S.__bindingPointIndex=E;const x=t.createBuffer(),L=S.__size,I=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,L,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,x),x}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=r[S.id],x=S.uniforms,L=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let I=0,A=x.length;I<A;I++){const O=Array.isArray(x[I])?x[I]:[x[I]];for(let w=0,T=O.length;w<T;w++){const F=O[w];if(p(F,I,w,L)===!0){const j=F.__offset,q=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let ae=0;ae<q.length;ae++){const K=q[ae],Z=v(K);typeof K=="number"||typeof K=="boolean"?(F.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,j+oe,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=0,F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=0,F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=0):(K.toArray(F.__data,oe),oe+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(S,E,x,L){const I=S.value,A=E+"_"+x;if(L[A]===void 0)return typeof I=="number"||typeof I=="boolean"?L[A]=I:L[A]=I.clone(),!0;{const O=L[A];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return L[A]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function _(S){const E=S.uniforms;let x=0;const L=16;for(let A=0,O=E.length;A<O;A++){const w=Array.isArray(E[A])?E[A]:[E[A]];for(let T=0,F=w.length;T<F;T++){const j=w[T],q=Array.isArray(j.value)?j.value:[j.value];for(let oe=0,ae=q.length;oe<ae;oe++){const K=q[oe],Z=v(K),X=x%L,me=X%Z.boundary,xe=X+me;x+=me,xe!==0&&L-xe<Z.storage&&(x+=L-xe),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=x,x+=Z.storage}}}const I=x%L;return I>0&&(x+=L-I),S.__size=x,S.__cache={},this}function v(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class KR{constructor(e={}){const{canvas:n=bb(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const S=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Tn;let I=0,A=0,O=null,w=-1,T=null;const F=new vt,j=new vt;let q=null;const oe=new nt(0);let ae=0,K=n.width,Z=n.height,X=1,me=null,xe=null;const Se=new vt(0,0,K,Z),Ie=new vt(0,0,K,Z);let je=!1;const re=new Cf;let _e=!1,be=!1;const H=new yt,se=new yt,ce=new W,le=new vt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function U(){return O===null?X:1}let y=i;function ie(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gf}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",ue,!1),y===null){const V="webgl2";if(y=ie(V,R),y===null)throw ie(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,J,b,C,N,B,de,M,g,P,z,Y,$,Ee,he,Te,Re,fe,Ce,Ue,Ne,ye,ze,k;function we(){Q=new oA(y),Q.init(),ye=new VR(y,Q),J=new Qw(y,Q,e,ye),b=new HR(y,Q),J.reverseDepthBuffer&&d&&b.buffers.depth.setReversed(!0),C=new cA(y),N=new AR,B=new zR(y,Q,b,N,J,ye,C),de=new tA(x),M=new sA(x),g=new mT(y),ze=new Zw(y,g),P=new aA(y,g,C,ze),z=new fA(y,P,g,C),Ce=new uA(y,J,B),Te=new eA(N),Y=new wR(x,de,M,Q,J,ze,Te),$=new jR(x,N),Ee=new CR,he=new NR(Q),fe=new Kw(x,de,M,b,z,p,l),Re=new BR(x,z,J),k=new YR(y,C,J,b),Ue=new Jw(y,Q,C),Ne=new lA(y,Q,C),C.programs=Y.programs,x.capabilities=J,x.extensions=Q,x.properties=N,x.renderLists=Ee,x.shadowMap=Re,x.state=b,x.info=C}we();const pe=new $R(x,y);this.xr=pe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(K,Z,!1))},this.getSize=function(R){return R.set(K,Z)},this.setSize=function(R,V,ee=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,Z=V,n.width=Math.floor(R*X),n.height=Math.floor(V*X),ee===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(K*X,Z*X).floor()},this.setDrawingBufferSize=function(R,V,ee){K=R,Z=V,X=ee,n.width=Math.floor(R*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,V,ee,ne){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,V,ee,ne),b.viewport(F.copy(Se).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(Ie)},this.setScissor=function(R,V,ee,ne){R.isVector4?Ie.set(R.x,R.y,R.z,R.w):Ie.set(R,V,ee,ne),b.scissor(j.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(R){b.setScissorTest(je=R)},this.setOpaqueSort=function(R){me=R},this.setTransparentSort=function(R){xe=R},this.getClearColor=function(R){return R.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,ee=!0){let ne=0;if(R){let G=!1;if(O!==null){const ve=O.texture.format;G=ve===Mf||ve===Ef||ve===yf}if(G){const ve=O.texture.type,Ae=ve===oi||ve===wr||ve===_o||ve===vo||ve===vf||ve===xf,Fe=fe.getClearColor(),Le=fe.getClearAlpha(),Ve=Fe.r,Ge=Fe.g,ke=Fe.b;Ae?(_[0]=Ve,_[1]=Ge,_[2]=ke,_[3]=Le,y.clearBufferuiv(y.COLOR,0,_)):(v[0]=Ve,v[1]=Ge,v[2]=ke,v[3]=Le,y.clearBufferiv(y.COLOR,0,v))}else ne|=y.COLOR_BUFFER_BIT}V&&(ne|=y.DEPTH_BUFFER_BIT),ee&&(ne|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),Ee.dispose(),he.dispose(),N.dispose(),de.dispose(),M.dispose(),z.dispose(),ze.dispose(),k.dispose(),Y.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",kf),pe.removeEventListener("sessionend",Hf),ir.stop()};function De(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=C.autoReset,V=Re.enabled,ee=Re.autoUpdate,ne=Re.needsUpdate,G=Re.type;we(),C.autoReset=R,Re.enabled=V,Re.autoUpdate=ee,Re.needsUpdate=ne,Re.type=G}function ue(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const V=R.target;V.removeEventListener("dispose",Oe),$e(V)}function $e(R){Mt(R),N.remove(R)}function Mt(R){const V=N.get(R).programs;V!==void 0&&(V.forEach(function(ee){Y.releaseProgram(ee)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ee,ne,G,ve){V===null&&(V=Be);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Fe=s0(R,V,ee,ne,G);b.setMaterial(ne,Ae);let Le=ee.index,Ve=1;if(ne.wireframe===!0){if(Le=P.getWireframeAttribute(ee),Le===void 0)return;Ve=2}const Ge=ee.drawRange,ke=ee.attributes.position;let tt=Ge.start*Ve,pt=(Ge.start+Ge.count)*Ve;ve!==null&&(tt=Math.max(tt,ve.start*Ve),pt=Math.min(pt,(ve.start+ve.count)*Ve)),Le!==null?(tt=Math.max(tt,0),pt=Math.min(pt,Le.count)):ke!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,ke.count));const At=pt-tt;if(At<0||At===1/0)return;ze.setup(G,ne,Fe,ee,Le);let Rt,rt=Ue;if(Le!==null&&(Rt=g.get(Le),rt=Ne,rt.setIndex(Rt)),G.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*U()),rt.setMode(y.LINES)):rt.setMode(y.TRIANGLES);else if(G.isLine){let He=ne.linewidth;He===void 0&&(He=1),b.setLineWidth(He*U()),G.isLineSegments?rt.setMode(y.LINES):G.isLineLoop?rt.setMode(y.LINE_LOOP):rt.setMode(y.LINE_STRIP)}else G.isPoints?rt.setMode(y.POINTS):G.isSprite&&rt.setMode(y.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)as("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))rt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const He=G._multiDrawStarts,Vt=G._multiDrawCounts,ct=G._multiDrawCount,Ln=Le?g.get(Le).bytesPerElement:1,Ir=N.get(ne).currentProgram.getUniforms();for(let pn=0;pn<ct;pn++)Ir.setValue(y,"_gl_DrawID",pn),rt.render(He[pn]/Ln,Vt[pn])}else if(G.isInstancedMesh)rt.renderInstances(tt,At,G.count);else if(ee.isInstancedBufferGeometry){const He=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Vt=Math.min(ee.instanceCount,He);rt.renderInstances(tt,At,Vt)}else rt.render(tt,At)};function dt(R,V,ee){R.transparent===!0&&R.side===Si&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,Oo(R,V,ee),R.side=Yi,R.needsUpdate=!0,Oo(R,V,ee),R.side=Si):Oo(R,V,ee)}this.compile=function(R,V,ee=null){ee===null&&(ee=R),h=he.get(ee),h.init(V),E.push(h),ee.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),R!==ee&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const ne=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];dt(Fe,ee,G),ne.add(Fe)}else dt(ve,ee,G),ne.add(ve)}),h=E.pop(),ne},this.compileAsync=function(R,V,ee=null){const ne=this.compile(R,V,ee);return new Promise(G=>{function ve(){if(ne.forEach(function(Ae){N.get(Ae).currentProgram.isReady()&&ne.delete(Ae)}),ne.size===0){G(R);return}setTimeout(ve,10)}Q.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Pn=null;function ai(R){Pn&&Pn(R)}function kf(){ir.stop()}function Hf(){ir.start()}const ir=new M_;ir.setAnimationLoop(ai),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(R){Pn=R,pe.setAnimationLoop(R),R===null?ir.stop():ir.start()},pe.addEventListener("sessionstart",kf),pe.addEventListener("sessionend",Hf),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(V),V=pe.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,V,O),h=he.get(R,E.length),h.init(V),E.push(h),se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(se),be=this.localClippingEnabled,_e=Te.init(this.clippingPlanes,be),m=Ee.get(R,S.length),m.init(),S.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&dl(ve,V,-1/0,x.sortObjects)}dl(R,V,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(me,xe),D=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,D&&fe.addToRenderList(m,R),this.info.render.frame++,_e===!0&&Te.beginShadows();const ee=h.state.shadowsArray;Re.render(ee,R,V),_e===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,G=m.transmissive;if(h.setupLights(),V.isArrayCamera){const ve=V.cameras;if(G.length>0)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Le=ve[Ae];Vf(ne,G,R,Le)}D&&fe.render(R);for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const Le=ve[Ae];zf(m,R,Le,Le.viewport)}}else G.length>0&&Vf(ne,G,R,V),D&&fe.render(R),zf(m,R,V);O!==null&&A===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(x,R,V),ze.resetDefaultState(),w=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],_e===!0&&Te.setGlobalState(x.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function dl(R,V,ee,ne){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){ne&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const Ae=z.update(R),Fe=R.material;Fe.visible&&m.push(R,Ae,Fe,ee,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Ae=z.update(R),Fe=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),le.copy(Ae.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Fe)){const Le=Ae.groups;for(let Ve=0,Ge=Le.length;Ve<Ge;Ve++){const ke=Le[Ve],tt=Fe[ke.materialIndex];tt&&tt.visible&&m.push(R,Ae,tt,ee,le.z,ke)}}else Fe.visible&&m.push(R,Ae,Fe,ee,le.z,null)}}const ve=R.children;for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++)dl(ve[Ae],V,ee,ne)}function zf(R,V,ee,ne){const G=R.opaque,ve=R.transmissive,Ae=R.transparent;h.setupLightsView(ee),_e===!0&&Te.setGlobalState(x.clippingPlanes,ee),ne&&b.viewport(F.copy(ne)),G.length>0&&No(G,V,ee),ve.length>0&&No(ve,V,ee),Ae.length>0&&No(Ae,V,ee),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Vf(R,V,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ne.id]===void 0&&(h.state.transmissionRenderTarget[ne.id]=new Ar(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Ro:oi,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ve=h.state.transmissionRenderTarget[ne.id],Ae=ne.viewport||F;ve.setSize(Ae.z*x.transmissionResolutionScale,Ae.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(oe),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),D&&fe.render(ee);const Le=x.toneMapping;x.toneMapping=Wi;const Ve=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),h.setupLightsView(ne),_e===!0&&Te.setGlobalState(x.clippingPlanes,ne),No(R,ee,ne),B.updateMultisampleRenderTarget(ve),B.updateRenderTargetMipmap(ve),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ke=0,tt=V.length;ke<tt;ke++){const pt=V[ke],At=pt.object,Rt=pt.geometry,rt=pt.material,He=pt.group;if(rt.side===Si&&At.layers.test(ne.layers)){const Vt=rt.side;rt.side=un,rt.needsUpdate=!0,Gf(At,ee,ne,Rt,rt,He),rt.side=Vt,rt.needsUpdate=!0,Ge=!0}}Ge===!0&&(B.updateMultisampleRenderTarget(ve),B.updateRenderTargetMipmap(ve))}x.setRenderTarget(Fe),x.setClearColor(oe,ae),Ve!==void 0&&(ne.viewport=Ve),x.toneMapping=Le}function No(R,V,ee){const ne=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ve=R.length;G<ve;G++){const Ae=R[G],Fe=Ae.object,Le=Ae.geometry,Ve=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&ne!==null&&(Ge=ne),Fe.layers.test(ee.layers)&&Gf(Fe,V,ee,Le,Ge,Ve)}}function Gf(R,V,ee,ne,G,ve){R.onBeforeRender(x,V,ee,ne,G,ve),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(x,V,ee,ne,R,ve),G.transparent===!0&&G.side===Si&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,x.renderBufferDirect(ee,V,ne,G,R,ve),G.side=Yi,G.needsUpdate=!0,x.renderBufferDirect(ee,V,ne,G,R,ve),G.side=Si):x.renderBufferDirect(ee,V,ne,G,R,ve),R.onAfterRender(x,V,ee,ne,G,ve)}function Oo(R,V,ee){V.isScene!==!0&&(V=Be);const ne=N.get(R),G=h.state.lights,ve=h.state.shadowsArray,Ae=G.state.version,Fe=Y.getParameters(R,G.state,ve,V,ee),Le=Y.getProgramCacheKey(Fe);let Ve=ne.programs;ne.environment=R.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(R.isMeshStandardMaterial?M:de).get(R.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",Oe),Ve=new Map,ne.programs=Ve);let Ge=Ve.get(Le);if(Ge!==void 0){if(ne.currentProgram===Ge&&ne.lightsStateVersion===Ae)return Xf(R,Fe),Ge}else Fe.uniforms=Y.getUniforms(R),R.onBeforeCompile(Fe,x),Ge=Y.acquireProgram(Fe,Le),Ve.set(Le,Ge),ne.uniforms=Fe.uniforms;const ke=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=Te.uniform),Xf(R,Fe),ne.needsLights=a0(R),ne.lightsStateVersion=Ae,ne.needsLights&&(ke.ambientLightColor.value=G.state.ambient,ke.lightProbe.value=G.state.probe,ke.directionalLights.value=G.state.directional,ke.directionalLightShadows.value=G.state.directionalShadow,ke.spotLights.value=G.state.spot,ke.spotLightShadows.value=G.state.spotShadow,ke.rectAreaLights.value=G.state.rectArea,ke.ltc_1.value=G.state.rectAreaLTC1,ke.ltc_2.value=G.state.rectAreaLTC2,ke.pointLights.value=G.state.point,ke.pointLightShadows.value=G.state.pointShadow,ke.hemisphereLights.value=G.state.hemi,ke.directionalShadowMap.value=G.state.directionalShadowMap,ke.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ke.spotShadowMap.value=G.state.spotShadowMap,ke.spotLightMatrix.value=G.state.spotLightMatrix,ke.spotLightMap.value=G.state.spotLightMap,ke.pointShadowMap.value=G.state.pointShadowMap,ke.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=Ge,ne.uniformsList=null,Ge}function Wf(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Ma.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Xf(R,V){const ee=N.get(R);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function s0(R,V,ee,ne,G){V.isScene!==!0&&(V=Be),B.resetTextureUnits();const ve=V.fog,Ae=ne.isMeshStandardMaterial?V.environment:null,Fe=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:_s,Le=(ne.isMeshStandardMaterial?M:de).get(ne.envMap||Ae),Ve=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ge=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ke=!!ee.morphAttributes.position,tt=!!ee.morphAttributes.normal,pt=!!ee.morphAttributes.color;let At=Wi;ne.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(At=x.toneMapping);const Rt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,rt=Rt!==void 0?Rt.length:0,He=N.get(ne),Vt=h.state.lights;if(_e===!0&&(be===!0||R!==T)){const en=R===T&&ne.id===w;Te.setState(ne,R,en)}let ct=!1;ne.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Vt.state.version||He.outputColorSpace!==Fe||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Le||ne.fog===!0&&He.fog!==ve||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Te.numPlanes||He.numIntersection!==Te.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Ge||He.morphTargets!==ke||He.morphNormals!==tt||He.morphColors!==pt||He.toneMapping!==At||He.morphTargetsCount!==rt)&&(ct=!0):(ct=!0,He.__version=ne.version);let Ln=He.currentProgram;ct===!0&&(Ln=Oo(ne,V,G));let Ir=!1,pn=!1,Ps=!1;const wt=Ln.getUniforms(),En=He.uniforms;if(b.useProgram(Ln.program)&&(Ir=!0,pn=!0,Ps=!0),ne.id!==w&&(w=ne.id,pn=!0),Ir||T!==R){b.buffers.depth.getReversed()?(H.copy(R.projectionMatrix),wb(H),Ab(H),wt.setValue(y,"projectionMatrix",H)):wt.setValue(y,"projectionMatrix",R.projectionMatrix),wt.setValue(y,"viewMatrix",R.matrixWorldInverse);const ln=wt.map.cameraPosition;ln!==void 0&&ln.setValue(y,ce.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&wt.setValue(y,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&wt.setValue(y,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,pn=!0,Ps=!0)}if(G.isSkinnedMesh){wt.setOptional(y,G,"bindMatrix"),wt.setOptional(y,G,"bindMatrixInverse");const en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),wt.setValue(y,"boneTexture",en.boneTexture,B))}G.isBatchedMesh&&(wt.setOptional(y,G,"batchingTexture"),wt.setValue(y,"batchingTexture",G._matricesTexture,B),wt.setOptional(y,G,"batchingIdTexture"),wt.setValue(y,"batchingIdTexture",G._indirectTexture,B),wt.setOptional(y,G,"batchingColorTexture"),G._colorsTexture!==null&&wt.setValue(y,"batchingColorTexture",G._colorsTexture,B));const Mn=ee.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Ce.update(G,ee,Ln),(pn||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,wt.setValue(y,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(En.envMap.value=Le,En.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&V.environment!==null&&(En.envMapIntensity.value=V.environmentIntensity),pn&&(wt.setValue(y,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&o0(En,Ps),ve&&ne.fog===!0&&$.refreshFogUniforms(En,ve),$.refreshMaterialUniforms(En,ne,X,Z,h.state.transmissionRenderTarget[R.id]),Ma.upload(y,Wf(He),En,B)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ma.upload(y,Wf(He),En,B),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&wt.setValue(y,"center",G.center),wt.setValue(y,"modelViewMatrix",G.modelViewMatrix),wt.setValue(y,"normalMatrix",G.normalMatrix),wt.setValue(y,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const en=ne.uniformsGroups;for(let ln=0,pl=en.length;ln<pl;ln++){const rr=en[ln];k.update(rr,Ln),k.bind(rr,Ln)}}return Ln}function o0(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function a0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,V,ee){const ne=N.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),N.get(R.texture).__webglTexture=V,N.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const ee=N.get(R);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const l0=y.createFramebuffer();this.setRenderTarget=function(R,V=0,ee=0){O=R,I=V,A=ee;let ne=!0,G=null,ve=!1,Ae=!1;if(R){const Le=N.get(R);if(Le.__useDefaultFramebuffer!==void 0)b.bindFramebuffer(y.FRAMEBUFFER,null),ne=!1;else if(Le.__webglFramebuffer===void 0)B.setupRenderTarget(R);else if(Le.__hasExternalTextures)B.rebindTextures(R,N.get(R.texture).__webglTexture,N.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ke=R.depthTexture;if(Le.__boundDepthTexture!==ke){if(ke!==null&&N.has(ke)&&(R.width!==ke.image.width||R.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(R)}}const Ve=R.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Ge=N.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[V])?G=Ge[V][ee]:G=Ge[V],ve=!0):R.samples>0&&B.useMultisampledRTT(R)===!1?G=N.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[ee]:G=Ge,F.copy(R.viewport),j.copy(R.scissor),q=R.scissorTest}else F.copy(Se).multiplyScalar(X).floor(),j.copy(Ie).multiplyScalar(X).floor(),q=je;if(ee!==0&&(G=l0),b.bindFramebuffer(y.FRAMEBUFFER,G)&&ne&&b.drawBuffers(R,G),b.viewport(F),b.scissor(j),b.setScissorTest(q),ve){const Le=N.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+V,Le.__webglTexture,ee)}else if(Ae){const Le=N.get(R.texture),Ve=V;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Le.__webglTexture,ee,Ve)}else if(R!==null&&ee!==0){const Le=N.get(R.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Le.__webglTexture,ee)}w=-1},this.readRenderTargetPixels=function(R,V,ee,ne,G,ve,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){b.bindFramebuffer(y.FRAMEBUFFER,Le);try{const Ve=R.textures[Fe],Ge=Ve.format,ke=Ve.type;if(!J.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-ne&&ee>=0&&ee<=R.height-G&&(R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(V,ee,ne,G,ye.convert(Ge),ye.convert(ke),ve))}finally{const Ve=O!==null?N.get(O).__webglFramebuffer:null;b.bindFramebuffer(y.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,V,ee,ne,G,ve,Ae,Fe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=N.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le)if(V>=0&&V<=R.width-ne&&ee>=0&&ee<=R.height-G){b.bindFramebuffer(y.FRAMEBUFFER,Le);const Ve=R.textures[Fe],Ge=Ve.format,ke=Ve.type;if(!J.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,tt),y.bufferData(y.PIXEL_PACK_BUFFER,ve.byteLength,y.STREAM_READ),R.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Fe),y.readPixels(V,ee,ne,G,ye.convert(Ge),ye.convert(ke),0);const pt=O!==null?N.get(O).__webglFramebuffer:null;b.bindFramebuffer(y.FRAMEBUFFER,pt);const At=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Tb(y,At,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,tt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ve),y.deleteBuffer(tt),y.deleteSync(At),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,ee=0){const ne=Math.pow(2,-ee),G=Math.floor(R.image.width*ne),ve=Math.floor(R.image.height*ne),Ae=V!==null?V.x:0,Fe=V!==null?V.y:0;B.setTexture2D(R,0),y.copyTexSubImage2D(y.TEXTURE_2D,ee,0,0,Ae,Fe,G,ve),b.unbindTexture()};const c0=y.createFramebuffer(),u0=y.createFramebuffer();this.copyTextureToTexture=function(R,V,ee=null,ne=null,G=0,ve=null){ve===null&&(G!==0?(as("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let Ae,Fe,Le,Ve,Ge,ke,tt,pt,At;const Rt=R.isCompressedTexture?R.mipmaps[ve]:R.image;if(ee!==null)Ae=ee.max.x-ee.min.x,Fe=ee.max.y-ee.min.y,Le=ee.isBox3?ee.max.z-ee.min.z:1,Ve=ee.min.x,Ge=ee.min.y,ke=ee.isBox3?ee.min.z:0;else{const Mn=Math.pow(2,-G);Ae=Math.floor(Rt.width*Mn),Fe=Math.floor(Rt.height*Mn),R.isDataArrayTexture?Le=Rt.depth:R.isData3DTexture?Le=Math.floor(Rt.depth*Mn):Le=1,Ve=0,Ge=0,ke=0}ne!==null?(tt=ne.x,pt=ne.y,At=ne.z):(tt=0,pt=0,At=0);const rt=ye.convert(V.format),He=ye.convert(V.type);let Vt;V.isData3DTexture?(B.setTexture3D(V,0),Vt=y.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(B.setTexture2DArray(V,0),Vt=y.TEXTURE_2D_ARRAY):(B.setTexture2D(V,0),Vt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,V.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,V.unpackAlignment);const ct=y.getParameter(y.UNPACK_ROW_LENGTH),Ln=y.getParameter(y.UNPACK_IMAGE_HEIGHT),Ir=y.getParameter(y.UNPACK_SKIP_PIXELS),pn=y.getParameter(y.UNPACK_SKIP_ROWS),Ps=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Rt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Rt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ge),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ke);const wt=R.isDataArrayTexture||R.isData3DTexture,En=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const Mn=N.get(R),en=N.get(V),ln=N.get(Mn.__renderTarget),pl=N.get(en.__renderTarget);b.bindFramebuffer(y.READ_FRAMEBUFFER,ln.__webglFramebuffer),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,pl.__webglFramebuffer);for(let rr=0;rr<Le;rr++)wt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(R).__webglTexture,G,ke+rr),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,N.get(V).__webglTexture,ve,At+rr)),y.blitFramebuffer(Ve,Ge,Ae,Fe,tt,pt,Ae,Fe,y.DEPTH_BUFFER_BIT,y.NEAREST);b.bindFramebuffer(y.READ_FRAMEBUFFER,null),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||N.has(R)){const Mn=N.get(R),en=N.get(V);b.bindFramebuffer(y.READ_FRAMEBUFFER,c0),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,u0);for(let ln=0;ln<Le;ln++)wt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Mn.__webglTexture,G,ke+ln):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Mn.__webglTexture,G),En?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,en.__webglTexture,ve,At+ln):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,en.__webglTexture,ve),G!==0?y.blitFramebuffer(Ve,Ge,Ae,Fe,tt,pt,Ae,Fe,y.COLOR_BUFFER_BIT,y.NEAREST):En?y.copyTexSubImage3D(Vt,ve,tt,pt,At+ln,Ve,Ge,Ae,Fe):y.copyTexSubImage2D(Vt,ve,tt,pt,Ve,Ge,Ae,Fe);b.bindFramebuffer(y.READ_FRAMEBUFFER,null),b.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else En?R.isDataTexture||R.isData3DTexture?y.texSubImage3D(Vt,ve,tt,pt,At,Ae,Fe,Le,rt,He,Rt.data):V.isCompressedArrayTexture?y.compressedTexSubImage3D(Vt,ve,tt,pt,At,Ae,Fe,Le,rt,Rt.data):y.texSubImage3D(Vt,ve,tt,pt,At,Ae,Fe,Le,rt,He,Rt):R.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ve,tt,pt,Ae,Fe,rt,He,Rt.data):R.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ve,tt,pt,Rt.width,Rt.height,rt,Rt.data):y.texSubImage2D(y.TEXTURE_2D,ve,tt,pt,Ae,Fe,rt,He,Rt);y.pixelStorei(y.UNPACK_ROW_LENGTH,ct),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Ln),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Ir),y.pixelStorei(y.UNPACK_SKIP_ROWS,pn),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ps),ve===0&&V.generateMipmaps&&y.generateMipmap(Vt),b.unbindTexture()},this.copyTextureToTexture3D=function(R,V,ee=null,ne=null,G=0){return as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,ee,ne,G)},this.initRenderTarget=function(R){N.get(R).__webglFramebuffer===void 0&&B.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?B.setTextureCube(R,0):R.isData3DTexture?B.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?B.setTexture2DArray(R,0):B.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){I=0,A=0,O=null,b.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}class R_{renderer;constructor(e){this.renderer=new KR({canvas:e,antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zg,this.renderer.setClearColor(0,0),this.resizeRenderer()}resizeRenderer=()=>{this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setSize(window.innerWidth,window.innerHeight)};boundResizeRenderer=()=>this.resizeRenderer();addResizeListener=()=>{window.addEventListener("resize",this.boundResizeRenderer)};removeResizeListener=()=>{window.removeEventListener("resize",this.boundResizeRenderer)};setAnimation=(e,n,i)=>{const r=()=>{e(),this.renderer.render(n,i)};this.renderer.setAnimationLoop(r)}}class C_{_camera;aspect=1;isResizeListenerAdded=!1;constructor(){this.updateAspect()}setCameraNear(e){if(e<this._camera.far)this._camera.near=e,this._camera.updateProjectionMatrix();else throw new Error("Value of near must be smaller than far")}setCameraFar(e){if(e>this._camera.near)this._camera.far=e,this._camera.updateProjectionMatrix();else throw new Error("Value of far must be greater than near")}setCameraRange(e,n){if(e>n)throw new Error("Value of far must be greater than near");this._camera.near=e,this._camera.far=n,this._camera.updateProjectionMatrix()}setCameraPos(e,n,i){this._camera.position.set(e,n,i)}setCameraLookAt(e,n,i){this._camera.lookAt(e,n,i)}updateAspect(){this.aspect=window.innerWidth/window.innerHeight}handleResize=()=>{this.updateAspect(),this.updateProjection()};addResizeListener(){this.isResizeListenerAdded||(window.addEventListener("resize",this.handleResize),this.isResizeListenerAdded=!0)}removeResizeListener(){window.removeEventListener("resize",this.handleResize),this.isResizeListenerAdded=!1}get camera(){return this._camera}}class ZR extends C_{_camera;size=10;constructor(e){super(),this._camera=new S_,this.setCameraSize(e.size??this.size),this.setCameraRange(e.near??this._camera.near,e.far??this._camera.far),this.updateProjection()}setCameraSize(e){if(e>0)this.size=e,this.updateProjection();else throw new Error("Size cannot be less than or equal to 0")}updateProjection(){this._camera.top=this.size/this.aspect,this._camera.bottom=-this.size/this.aspect,this._camera.right=this.size,this._camera.left=-this.size,this._camera.updateProjectionMatrix()}}class JR extends C_{_camera;constructor(e){super(),this._camera=new cn,this.setCameraFOV(e.fov??this._camera.fov),this.setCameraRange(e.near??this._camera.near,e.far??this._camera.far),this.updateProjection()}setCameraFOV(e){if(e>0&&e<180)this._camera.fov=e,this._camera.updateProjectionMatrix();else throw new Error("FOV cannot be less than or equal to 0 / larger than or equal to 180")}updateProjection(){this._camera.aspect=this.aspect,this._camera.updateProjectionMatrix()}}var Uf=(t=>(t.Orthographic="orthographic",t.Perspective="perspective",t))(Uf||{});function QR(t){return t.type===Uf.Orthographic}function eC(t){return t.type===Uf.Perspective}class P_{controller;constructor(e){if(QR(e))this.controller=new ZR(e);else if(eC(e))this.controller=new JR(e);else throw new Error("Invalid camera type or property")}setCameraSize(e){if(this.controller.setCameraSize)this.controller.setCameraSize(e);else throw new Error("setCameraSize is only available for orthographic camera, use setCameraFOV instead")}setCameraFOV(e){if(this.controller.setCameraFOV)this.controller.setCameraFOV(e);else throw new Error("setCameraFOV is only available for perspective camera, use setCameraSize instead")}setCameraNear(e){this.controller.setCameraNear(e)}setCameraFar(e){this.controller.setCameraFar(e)}setCameraRange(e,n){this.controller.setCameraRange(e,n)}setCameraPos(e,n,i){this.controller.setCameraPos(e,n,i)}setCameraLookAt(e,n,i){this.controller.setCameraLookAt(e,n,i)}addResizeListener(){this.controller.addResizeListener()}removeResizeListener(){this.controller.removeResizeListener()}get camera(){return this.controller.camera}}class L_{directions=[0,0,0,0];moveDir=new et(0,0);_mousePos=new et(0,0);_isMouse=!1;handleMovementVector=()=>{this.moveDir.x=this.directions[3]-this.directions[2],this.moveDir.y=this.directions[1]-this.directions[0]};handleKeyDown=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=1;break;case"ArrowDown":this.directions[1]=1;break;case"ArrowLeft":this.directions[2]=1;break;case"ArrowRight":this.directions[3]=1;break}this.handleMovementVector()}};handleKeyUp=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=0;break;case"ArrowDown":this.directions[1]=0;break;case"ArrowLeft":this.directions[2]=0;break;case"ArrowRight":this.directions[3]=0;break}this.handleMovementVector()}};handleMouseDown=e=>{this.isKeyboard||(this._isMouse=!0,this._mousePos.set(e.clientX,e.clientY))};handleMouseMove=e=>{this._mousePos.set(e.clientX,e.clientY)};handleMouseUp=()=>{this.isKeyboard||(this._isMouse=!1,this._mousePos.set(this.mousePos.x,this.mousePos.y))};addInputListener=()=>{window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp)};removeInputListener=()=>{window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)};getMovementVectorNormalized(){return this.moveDir.normalize()}get isMouse(){return this._isMouse}get isKeyboard(){return this.directions.includes(1)}get mousePos(){return this._mousePos}}class I_{raycaster=new ip;collidables=[];camera;cameraRaycaster;screenPos;worldPoint;angle=Math.PI/2;axis=new W(0,1,0);temp=new W(0,0,0);dir=new W(0,0,0);constructor(e){e&&(this.camera=e,this.cameraRaycaster=new ip,this.screenPos=new et(0,0),this.worldPoint=new W(0,0,0))}setCollidables(e){this.collidables=e}getRaycastHit=(e,n,i)=>(this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,this.raycaster.intersectObjects(this.collidables));getLinecastHit=(e,n,i=1,r=0,s=0)=>{const o=this.getRaycastHit(e,n,i);return this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,this.angle).normalize().multiplyScalar(r)),this.getRaycastHit(this.temp,n,i).forEach(a=>{o.indexOf(a)===-1&&o.push(a)}),this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,-this.angle).normalize().multiplyScalar(s)),this.getRaycastHit(this.temp,n,i).forEach(a=>{o.indexOf(a)===-1&&o.push(a)}),o};raycast=(e,n,i)=>this.getRaycastHit(e,n,i).length===0;linecast=(e,n,i,r,s)=>this.getLinecastHit(e,n,i,r,s).length===0;getRaycastHitFromScreen=(e,n)=>{if(!this.cameraRaycaster||!this.camera||!this.screenPos)return;const i=e/window.innerWidth*2-1,r=-(n/window.innerHeight)*2+1;return this.screenPos.set(i,r),this.cameraRaycaster.setFromCamera(this.screenPos,this.camera),this.cameraRaycaster.far=100,this.cameraRaycaster.intersectObjects(this.collidables)};screenPointToWorld=(e,n)=>{const i=this.getRaycastHitFromScreen(e,n);if(!(!i||!i[0]||!this.worldPoint))return this.worldPoint.set(i[0].point.x,i[0].point.y,i[0].point.z),this.worldPoint}}const tC="/my-site/assets/texture-Bhl9W45K.webp";class nC{wallMaterial_1=new v_({color:15658734});wallMaterial_2=new Rf({opacity:0,transparent:!0});floorMaterial=this.wallMaterial_1;playerGeometry=new Pf(1,32,32);wallGeometry=new Rr(20,20);floorGeometry=new Rr(20,100);wall_1=new Ht(this.wallGeometry,this.wallMaterial_1);wall_2=new Ht(this.wallGeometry,this.wallMaterial_2);wall_3=new Ht(this.wallGeometry,this.wallMaterial_2);wall_4=new Ht(this.wallGeometry,this.wallMaterial_2);floor=new Ht(this.floorGeometry,this.floorMaterial);ambientLightIntensityLight=1;ambientLightIntensityDark=0;spotlightPrimaryPosLight=new W(50,50,50);spotlightPrimaryPosDark=new W(-50,50,50);spotlightPrimaryAngleLight=.1;spotlightPrimaryAngleDark=.03;spotlightSecondaryPowLight=0;spotlightSecondaryPowDark=5e3;ambientLight=new y_(13421772);spotlightPrimary=new Qd(16777215);spotlightSecondary=new Qd(14540253);theme="light";clock=new E_;rendererController;cameraController=new P_({type:"orthographic",size:5,near:-100,far:1e3});scene=new g_;gameInput=new L_;physics=new I_(this.cameraController.camera);playerTexture=new cT().load(tC);playerMaterial=new iT({color:16777215,map:this.playerTexture});playerMesh=new Ht(this.playerGeometry,this.playerMaterial);playerObject=new zt().attach(this.playerMesh);player=new sC(this.playerObject,this.gameInput,this.physics);constructor(e,n){n&&(this.theme=n),this.rendererController=new R_(e)}setTextures=()=>{this.playerTexture.wrapS=go,this.playerTexture.wrapT=go,this.playerTexture.repeat.set(3,3)};setPositions=()=>{this.cameraController.setCameraPos(0,10,50),this.cameraController.setCameraLookAt(0,0,0),this.playerObject.position.set(3,0,-2),this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_3.position.set(5,0,0),this.wall_4.position.set(0,0,10),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.theme==="light"?this.spotlightPrimary.position.set(50,50,50):this.spotlightPrimary.position.set(-50,50,50),this.spotlightSecondary.position.set(-50,50,50)};setLightings=()=>{this.playerMesh.castShadow=!0,this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.shadow.intensity=.8,this.spotlightPrimary.castShadow=!0,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.shadow.intensity=.8,this.spotlightSecondary.castShadow=!0,this.theme==="light"?(this.ambientLight.intensity=this.ambientLightIntensityLight,this.spotlightPrimary.angle=this.spotlightPrimaryAngleLight,this.spotlightSecondary.power=this.spotlightSecondaryPowLight):(this.ambientLight.intensity=this.ambientLightIntensityDark,this.spotlightPrimary.angle=this.spotlightPrimaryAngleDark,this.spotlightSecondary.power=this.spotlightSecondaryPowDark)};createScene=()=>{this.setTextures(),this.setPositions(),this.setLightings(),this.scene.add(this.playerObject,this.floor,this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.ambientLight,this.spotlightPrimary,this.spotlightSecondary);const e=this.scene.children.filter(n=>n!==this.playerObject);this.physics.setCollidables(e)};updateTheme=()=>{this.theme==="light"?(this.ambientLight.intensity=ts.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,.1),this.spotlightPrimary.angle=ts.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleLight,.1),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosLight,.1),this.spotlightSecondary.power=this.spotlightSecondaryPowLight):(this.ambientLight.intensity=ts.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,.1),this.spotlightPrimary.angle=ts.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleDark,.1),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosDark,.1),this.spotlightSecondary.power=this.spotlightSecondaryPowDark)};update=()=>{this.updateTheme();const e=Math.min(this.clock.getDelta(),1/60);this.player.applyMovement(e)};startScene=()=>{this.createScene(),this.gameInput.addInputListener(),this.rendererController.addResizeListener(),this.cameraController.addResizeListener(),this.rendererController.setAnimation(this.update,this.scene,this.cameraController.camera)};endScene=()=>{this.gameInput.removeInputListener(),this.rendererController.removeResizeListener(),this.cameraController.removeResizeListener()};setTheme=e=>this.theme=e}class iC{color=new nt(16711680);_width=80;_height=46;maxCount=this._width*this._height;gap=.02;EFFECT_THRESHOLD=3.5;EFFECT_COE=5;speeds=[];phases=[];amplitudes=[];dummy=new zt;cubes;constructor(e,n){e.computeBoundingBox(),this.cubes=new eT(e,n,this.maxCount);for(let i=0;i<this.maxCount;i++)this.speeds[i]=Math.random()/2,this.phases[i]=Math.random()*Math.PI*2,this.amplitudes[i]=Math.random()/2+1;this.update(0,new W(0,0,0))}update(e,n){let i=0;for(let r=0;r<this._width;r++)for(let s=0;s<this._height;s++){const o=-r*(1+this.gap),a=-s*(1+this.gap);this.dummy.position.x=o,this.dummy.position.y=a;const l=Math.sin(e*this.speeds[i]*this.phases[i]*this.amplitudes[i])/2,c=Math.min(this.EFFECT_COE/Math.sqrt((n.x-o)**2+(n.y-a)**2),this.EFFECT_THRESHOLD);this.dummy.position.z=l-c,this.dummy.updateMatrix(),this.cubes.setMatrixAt(i,this.dummy.matrix),i++}this.cubes.instanceMatrix.needsUpdate=!0}get height(){return this._height}get width(){return this._width}get mesh(){return this.cubes}}class rC{material=new v_({color:16777215});wallGeometry=new Rr(80,40);boxGeometry=new ws(1,1,3);cubes=new iC(this.boxGeometry,this.material);wall=new Ht(this.wallGeometry,this.material);ambientLightIntensityLight=.5;ambientLightIntensityDark=0;ambientLight=new y_(16777215);pointLight=new hT(16777215);theme="light";clock=new E_;rendererController;cameraController=new P_({type:"perspective",fov:60,near:1,far:1e3});scene=new g_;physics=new I_(this.cameraController.camera);gameInput=new L_;constructor(e,n){n&&(this.theme=n),this.rendererController=new R_(e)}setPositions=()=>{const e=-this.cubes.width/2,n=-this.cubes.height/2;this.cameraController.setCameraPos(e,n,-15),this.cameraController.setCameraLookAt(e,n,0),this.pointLight.position.set(e,n,-10),this.wall.position.set(-40,-20,0),this.wall.rotation.set(0,Math.PI,0)};setLightings=()=>{this.pointLight.intensity=50,this.theme==="light"?this.ambientLight.intensity=this.ambientLightIntensityLight:this.ambientLight.intensity=this.ambientLightIntensityDark};createScene=()=>{this.setPositions(),this.setLightings(),this.scene.add(this.ambientLight,this.cubes.mesh,this.wall,this.pointLight),this.physics.setCollidables(this.scene.children)};updateTheme=()=>{this.theme==="light"?this.ambientLight.intensity=ts.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,.1):this.ambientLight.intensity=ts.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,.1)};update=()=>{const e=this.clock.getElapsedTime(),n=this.gameInput.mousePos,i=this.physics.screenPointToWorld(n.x,n.y);i&&this.cubes.update(e,i),this.updateTheme()};startScene=()=>{this.createScene(),this.rendererController.addResizeListener(),this.cameraController.addResizeListener(),this.gameInput.addInputListener(),this.rendererController.setAnimation(this.update,this.scene,this.cameraController.camera)};endScene=()=>{this.rendererController.removeResizeListener(),this.cameraController.removeResizeListener(),this.gameInput.removeInputListener()};setTheme=e=>this.theme=e}class sC{VELOCITY_THRESHOLD=.5;FORCE_THRESHOLD=100;BOUNCINESS=1;FORCE_COE=30;DRAG_COE=3;gameInput;physics;mousePosYOffset=100;moveVec=new et(0,0);displacement=new W(0,0,0);_velocity=new W(0,0,0);velocityX=new W(0,0,0);velocityZ=new W(0,0,0);_force=new W(0,0,0);_drag=new W(0,0,0);playerRadius=1;player;constructor(e,n,i){this.player=e,this.gameInput=n,this.physics=i}updateMoveVec(){if(this.gameInput.isKeyboard)this.moveVec=this.gameInput.getMovementVectorNormalized();else if(this.gameInput.isMouse){const e=this.gameInput.mousePos,n=this.physics.screenPointToWorld(e.x,e.y+this.mousePosYOffset);if(n){const i=n.sub(this.player.position).normalize();i&&this.moveVec.set(i.x,i.z)}}else this.moveVec.set(0,0)}updateForce(e){if(e>this.FORCE_THRESHOLD)throw new Error("Large force may result in object tunneling in this physics engine");this._force.set(this.moveVec.x,0,this.moveVec.y).multiplyScalar(e),this._force.z*=2}updateDrag(e){if(e>this.FORCE_THRESHOLD)throw new Error("Large force may result in object tunneling in this physics engine");this._drag.copy(this._velocity).multiplyScalar(-e)}updateVelocity(e){let n=this._force.add(this._drag).multiplyScalar(e);this._velocity.length()<this.VELOCITY_THRESHOLD&&this._force.length()===0&&(this._velocity.set(0,0,0),n.set(0,0,0)),this._velocity.add(n)}safeLinecast(e,n){return this.physics.linecast(e,n,this.playerRadius,this.playerRadius,this.playerRadius)}checkCollision(){let e=this.safeLinecast(this.player.position,this._velocity)&&this.safeLinecast(this.player.position,this._force);e||(this.velocityX.set(this._velocity.x,0,0),this.velocityZ.set(0,0,this._velocity.z),e=this.safeLinecast(this.player.position,this.velocityX),e?(e=this.safeLinecast(this.player.position,this.velocityZ),e?this._velocity.set(this.velocityX.x,0,this.velocityZ.z):this._velocity.set(this.velocityX.x,0,-this.velocityZ.z*this.BOUNCINESS)):(e=this.safeLinecast(this.player.position,this.velocityZ),e?this._velocity.set(-this.velocityX.x*this.BOUNCINESS,0,this.velocityZ.z):this._velocity.set(0,0,0)))}applyMovement(e){this.updateMoveVec(),this.updateForce(this.FORCE_COE),this.updateDrag(this.DRAG_COE),this.updateVelocity(e),this.checkCollision(),this.displacement.copy(this._velocity).multiplyScalar(e),this.player.position.add(this.displacement)}get force(){return this._force}get drag(){return this._drag}get velocity(){return this._velocity}}class D_{controller;constructor(e,n,i="light"){if(n==="homepage")this.controller=new nC(e,i);else if(n==="project")this.controller=new rC(e,i);else throw new Error("Invalid Scene")}startScene=()=>this.controller.startScene();endScene=()=>this.controller.endScene();setTheme=e=>this.controller.setTheme(e)}const oC=Wt({name:"homepage-background",setup(t,{expose:e}){const n=Rm("canvas"),i=Ao();return ys(()=>{if(!n.value)return;const r=new D_(n.value,"homepage",i.theme);r.startScene(),Hn(i,()=>r.setTheme(i.theme)),Es(()=>{r.endScene()})}),e(),{canvas:n}}}),aC={ref:"canvas"};function lC(t,e,n,i,r,s){return mt(),St("canvas",aC,null,512)}const cC=Wn(oC,[["render",lC]]),uC=Wt({name:"animated-txt",props:{text:{type:String,default:""},duration:{type:Number,default:0},delay:{type:Number,default:0},stagger:{type:Number,default:0}},setup(t,{expose:e}){const n=Ut(()=>{const o=t.text.split("");o[0]=o[0].toUpperCase();for(let a=0;a<t.text.length;a++)(o[a+1]===" "||o[a+1]==="'"||o[a-1]===""&&o[a]==="i")&&(o[a]=o[a].toUpperCase());return o}),i=an([]);function r(o,a){o instanceof HTMLElement?i.value[a]=o:i.value[a]=null}function s(){setTimeout(()=>{i.value.forEach((o,a)=>{o?.animate([{opacity:0},{opacity:1}],{duration:t.duration,delay:a*t.stagger,fill:"both"})})},t.delay)}return ys(()=>s()),Hn(n,()=>{i.value=[],s()}),e(),{chars:n,setCharRef:r}}});function fC(t,e,n,i,r,s){return mt(),St("div",null,[(mt(!0),St(on,null,dv(t.chars,(o,a)=>(mt(),St("span",{class:"o-0",key:a,ref_for:!0,ref:l=>t.setCharRef(l,a)},Qn(o),1))),128))])}const uc=Wn(uC,[["render",fC]]),hC={class:"page flex row a-center j-start"},dC={class:"absolute t-0 l-0 w-full h-full"},pC={class:"grid grid-cols-2 a-start w-auto pl-0.10 z-1"},mC=Wt({__name:"homepage",setup(t){const{t:e}=tr();return(n,i)=>(mt(),St("div",hC,[We("div",dC,[it(cC)]),We("div",pC,[it(uc,{class:"col-span-2 hem-1 pb-10 font-size-md",text:Rn(e)("hello"),duration:500,stagger:50},null,8,["text"]),it(uc,{class:"sm:col-span-2 hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"peter",duration:1e3,stagger:100}),it(uc,{class:"hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"chan",duration:1e3,delay:500,stagger:100})])]))}}),gC={class:"page"},_C={class:"absolute t-0 l-0 w-full h-full"},vC=Wt({__name:"projects",setup(t){const{t:e}=tr(),n=Rm("canvas"),i=Ao();return ys(()=>{if(!n.value)return;const r=new D_(n.value,"project",i.theme);r.startScene(),Hn(i,()=>r.setTheme(i.theme)),Es(()=>{r.endScene()})}),(r,s)=>(mt(),St("div",gC,[We("div",_C,[We("canvas",{ref_key:"canvas",ref:n},null,512)])]))}}),xC={},SC={class:"page"};function yC(t,e){return mt(),St("div",SC,[...e[0]||(e[0]=[We("h1",null,"Sorry",-1),We("h2",null,"This page is not yet online",-1)])])}const EC=Wn(xC,[["render",yC]]);function U_(t,e){return function(){return t.apply(e,arguments)}}const{toString:MC}=Object.prototype,{getPrototypeOf:Nf}=Object,{iterator:al,toStringTag:N_}=Symbol,ll=(t=>e=>{const n=MC.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Xn=t=>(t=t.toLowerCase(),e=>ll(e)===t),cl=t=>e=>typeof e===t,{isArray:Rs}=Array,Ss=cl("undefined");function Lo(t){return t!==null&&!Ss(t)&&t.constructor!==null&&!Ss(t.constructor)&&fn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const O_=Xn("ArrayBuffer");function bC(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&O_(t.buffer),e}const TC=cl("string"),fn=cl("function"),F_=cl("number"),Io=t=>t!==null&&typeof t=="object",wC=t=>t===!0||t===!1,ba=t=>{if(ll(t)!=="object")return!1;const e=Nf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(N_ in t)&&!(al in t)},AC=t=>{if(!Io(t)||Lo(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},RC=Xn("Date"),CC=Xn("File"),PC=Xn("Blob"),LC=Xn("FileList"),IC=t=>Io(t)&&fn(t.pipe),DC=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||fn(t.append)&&((e=ll(t))==="formdata"||e==="object"&&fn(t.toString)&&t.toString()==="[object FormData]"))},UC=Xn("URLSearchParams"),[NC,OC,FC,BC]=["ReadableStream","Request","Response","Headers"].map(Xn),kC=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Do(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Rs(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(Lo(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function B_(t,e){if(Lo(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,k_=t=>!Ss(t)&&t!==yr;function Cu(){const{caseless:t,skipUndefined:e}=k_(this)&&this||{},n={},i=(r,s)=>{const o=t&&B_(n,s)||s;ba(n[o])&&ba(r)?n[o]=Cu(n[o],r):ba(r)?n[o]=Cu({},r):Rs(r)?n[o]=r.slice():(!e||!Ss(r))&&(n[o]=r)};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&Do(arguments[r],i);return n}const HC=(t,e,n,{allOwnKeys:i}={})=>(Do(e,(r,s)=>{n&&fn(r)?t[s]=U_(r,n):t[s]=r},{allOwnKeys:i}),t),zC=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),VC=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},GC=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Nf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},WC=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},XC=t=>{if(!t)return null;if(Rs(t))return t;let e=t.length;if(!F_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$C=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Nf(Uint8Array)),qC=(t,e)=>{const i=(t&&t[al]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},jC=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},YC=Xn("HTMLFormElement"),KC=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Pp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),ZC=Xn("RegExp"),H_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Do(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},JC=t=>{H_(t,(e,n)=>{if(fn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(fn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},QC=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Rs(t)?i(t):i(String(t).split(e)),n},eP=()=>{},tP=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function nP(t){return!!(t&&fn(t.append)&&t[N_]==="FormData"&&t[al])}const iP=t=>{const e=new Array(10),n=(i,r)=>{if(Io(i)){if(e.indexOf(i)>=0)return;if(Lo(i))return i;if(!("toJSON"in i)){e[r]=i;const s=Rs(i)?[]:{};return Do(i,(o,a)=>{const l=n(o,r+1);!Ss(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},rP=Xn("AsyncFunction"),sP=t=>t&&(Io(t)||fn(t))&&fn(t.then)&&fn(t.catch),z_=((t,e)=>t?setImmediate:e?((n,i)=>(yr.addEventListener("message",({source:r,data:s})=>{r===yr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),yr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",fn(yr.postMessage)),oP=typeof queueMicrotask<"u"?queueMicrotask.bind(yr):typeof process<"u"&&process.nextTick||z_,aP=t=>t!=null&&fn(t[al]),te={isArray:Rs,isArrayBuffer:O_,isBuffer:Lo,isFormData:DC,isArrayBufferView:bC,isString:TC,isNumber:F_,isBoolean:wC,isObject:Io,isPlainObject:ba,isEmptyObject:AC,isReadableStream:NC,isRequest:OC,isResponse:FC,isHeaders:BC,isUndefined:Ss,isDate:RC,isFile:CC,isBlob:PC,isRegExp:ZC,isFunction:fn,isStream:IC,isURLSearchParams:UC,isTypedArray:$C,isFileList:LC,forEach:Do,merge:Cu,extend:HC,trim:kC,stripBOM:zC,inherits:VC,toFlatObject:GC,kindOf:ll,kindOfTest:Xn,endsWith:WC,toArray:XC,forEachEntry:qC,matchAll:jC,isHTMLForm:YC,hasOwnProperty:Pp,hasOwnProp:Pp,reduceDescriptors:H_,freezeMethods:JC,toObjectSet:QC,toCamelCase:KC,noop:eP,toFiniteNumber:tP,findKey:B_,global:yr,isContextDefined:k_,isSpecCompliantForm:nP,toJSONObject:iP,isAsyncFn:rP,isThenable:sP,setImmediate:z_,asap:oP,isIterable:aP};function Ye(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}te.inherits(Ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const V_=Ye.prototype,G_={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{G_[t]={value:t}});Object.defineProperties(Ye,G_);Object.defineProperty(V_,"isAxiosError",{value:!0});Ye.from=(t,e,n,i,r,s)=>{const o=Object.create(V_);te.toFlatObject(t,o,function(u){return u!==Error.prototype},c=>c!=="isAxiosError");const a=t&&t.message?t.message:"Error",l=e==null&&t?t.code:e;return Ye.call(o,a,l,n,i,r),t&&o.cause==null&&Object.defineProperty(o,"cause",{value:t,configurable:!0}),o.name=t&&t.name||"Error",s&&Object.assign(o,s),o};const lP=null;function Pu(t){return te.isPlainObject(t)||te.isArray(t)}function W_(t){return te.endsWith(t,"[]")?t.slice(0,-2):t}function Lp(t,e,n){return t?t.concat(e).map(function(r,s){return r=W_(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function cP(t){return te.isArray(t)&&!t.some(Pu)}const uP=te.toFlatObject(te,{},null,function(e){return/^is[A-Z]/.test(e)});function ul(t,e,n){if(!te.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=te.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!te.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(e);if(!te.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(te.isDate(_))return _.toISOString();if(te.isBoolean(_))return _.toString();if(!l&&te.isBlob(_))throw new Ye("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(_)||te.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,m){let h=_;if(_&&!m&&typeof _=="object"){if(te.endsWith(v,"{}"))v=i?v:v.slice(0,-2),_=JSON.stringify(_);else if(te.isArray(_)&&cP(_)||(te.isFileList(_)||te.endsWith(v,"[]"))&&(h=te.toArray(_)))return v=W_(v),h.forEach(function(E,x){!(te.isUndefined(E)||E===null)&&e.append(o===!0?Lp([v],x,s):o===null?v:v+"[]",c(E))}),!1}return Pu(_)?!0:(e.append(Lp(m,v,s),c(_)),!1)}const f=[],d=Object.assign(uP,{defaultVisitor:u,convertValue:c,isVisitable:Pu});function p(_,v){if(!te.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),te.forEach(_,function(h,S){(!(te.isUndefined(h)||h===null)&&r.call(e,h,te.isString(S)?S.trim():S,v,d))===!0&&p(h,v?v.concat(S):[S])}),f.pop()}}if(!te.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Ip(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function Of(t,e){this._pairs=[],t&&ul(t,this,e)}const X_=Of.prototype;X_.append=function(e,n){this._pairs.push([e,n])};X_.toString=function(e){const n=e?function(i){return e.call(this,i,Ip)}:Ip;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function fP(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function $_(t,e,n){if(!e)return t;const i=n&&n.encode||fP;te.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=te.isURLSearchParams(e)?e.toString():new Of(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Dp{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){te.forEach(this.handlers,function(i){i!==null&&e(i)})}}const q_={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},hP=typeof URLSearchParams<"u"?URLSearchParams:Of,dP=typeof FormData<"u"?FormData:null,pP=typeof Blob<"u"?Blob:null,mP={isBrowser:!0,classes:{URLSearchParams:hP,FormData:dP,Blob:pP},protocols:["http","https","file","blob","url","data"]},Ff=typeof window<"u"&&typeof document<"u",Lu=typeof navigator=="object"&&navigator||void 0,gP=Ff&&(!Lu||["ReactNative","NativeScript","NS"].indexOf(Lu.product)<0),_P=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vP=Ff&&window.location.href||"http://localhost",xP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ff,hasStandardBrowserEnv:gP,hasStandardBrowserWebWorkerEnv:_P,navigator:Lu,origin:vP},Symbol.toStringTag,{value:"Module"})),Zt={...xP,...mP};function SP(t,e){return ul(t,new Zt.classes.URLSearchParams,{visitor:function(n,i,r,s){return Zt.isNode&&te.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}function yP(t){return te.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function EP(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function j_(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&te.isArray(r)?r.length:o,l?(te.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!te.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&te.isArray(r[o])&&(r[o]=EP(r[o])),!a)}if(te.isFormData(t)&&te.isFunction(t.entries)){const n={};return te.forEachEntry(t,(i,r)=>{e(yP(i),r,n,0)}),n}return null}function MP(t,e,n){if(te.isString(t))try{return(e||JSON.parse)(t),te.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Uo={transitional:q_,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=te.isObject(e);if(s&&te.isHTMLForm(e)&&(e=new FormData(e)),te.isFormData(e))return r?JSON.stringify(j_(e)):e;if(te.isArrayBuffer(e)||te.isBuffer(e)||te.isStream(e)||te.isFile(e)||te.isBlob(e)||te.isReadableStream(e))return e;if(te.isArrayBufferView(e))return e.buffer;if(te.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return SP(e,this.formSerializer).toString();if((a=te.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ul(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),MP(e)):e}],transformResponse:[function(e){const n=this.transitional||Uo.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(te.isResponse(e)||te.isReadableStream(e))return e;if(e&&te.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,this.parseReviver)}catch(a){if(o)throw a.name==="SyntaxError"?Ye.from(a,Ye.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Zt.classes.FormData,Blob:Zt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],t=>{Uo.headers[t]={}});const bP=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),TP=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&bP[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Up=Symbol("internals");function Vs(t){return t&&String(t).trim().toLowerCase()}function Ta(t){return t===!1||t==null?t:te.isArray(t)?t.map(Ta):String(t)}function wP(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const AP=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function fc(t,e,n,i,r){if(te.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!te.isString(e)){if(te.isString(i))return e.indexOf(i)!==-1;if(te.isRegExp(i))return i.test(e)}}function RP(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function CP(t,e){const n=te.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let hn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=Vs(l);if(!u)throw new Error("header name must be a non-empty string");const f=te.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Ta(a))}const o=(a,l)=>te.forEach(a,(c,u)=>s(c,u,l));if(te.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(te.isString(e)&&(e=e.trim())&&!AP(e))o(TP(e),n);else if(te.isObject(e)&&te.isIterable(e)){let a={},l,c;for(const u of e){if(!te.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?te.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Vs(e),e){const i=te.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return wP(r);if(te.isFunction(n))return n.call(this,r,i);if(te.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Vs(e),e){const i=te.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||fc(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=Vs(o),o){const a=te.findKey(i,o);a&&(!n||fc(i,i[a],a,n))&&(delete i[a],r=!0)}}return te.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||fc(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return te.forEach(this,(r,s)=>{const o=te.findKey(i,s);if(o){n[o]=Ta(r),delete n[s];return}const a=e?RP(s):String(s).trim();a!==s&&delete n[s],n[a]=Ta(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return te.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&te.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Up]=this[Up]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=Vs(o);i[a]||(CP(r,o),i[a]=!0)}return te.isArray(e)?e.forEach(s):s(e),this}};hn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(hn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});te.freezeMethods(hn);function hc(t,e){const n=this||Uo,i=e||n,r=hn.from(i.headers);let s=i.data;return te.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Y_(t){return!!(t&&t.__CANCEL__)}function Cs(t,e,n){Ye.call(this,t??"canceled",Ye.ERR_CANCELED,e,n),this.name="CanceledError"}te.inherits(Cs,Ye,{__CANCEL__:!0});function K_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ye("Request failed with status code "+n.status,[Ye.ERR_BAD_REQUEST,Ye.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function PP(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function LP(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function IP(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const za=(t,e,n=3)=>{let i=0;const r=LP(50,250);return IP(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Np=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Op=t=>(...e)=>te.asap(()=>t(...e)),DP=Zt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Zt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Zt.origin),Zt.navigator&&/(msie|trident)/i.test(Zt.navigator.userAgent)):()=>!0,UP=Zt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];te.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),te.isString(i)&&o.push("path="+i),te.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function NP(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function OP(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Z_(t,e,n){let i=!NP(e);return t&&(i||n==!1)?OP(t,e):e}const Fp=t=>t instanceof hn?{...t}:t;function Cr(t,e){e=e||{};const n={};function i(c,u,f,d){return te.isPlainObject(c)&&te.isPlainObject(u)?te.merge.call({caseless:d},c,u):te.isPlainObject(u)?te.merge({},u):te.isArray(u)?u.slice():u}function r(c,u,f,d){if(te.isUndefined(u)){if(!te.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!te.isUndefined(u))return i(void 0,u)}function o(c,u){if(te.isUndefined(u)){if(!te.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Fp(c),Fp(u),f,!0)};return te.forEach(Object.keys({...t,...e}),function(u){const f=l[u]||r,d=f(t[u],e[u],u);te.isUndefined(d)&&f!==a||(n[u]=d)}),n}const J_=t=>{const e=Cr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;if(e.headers=o=hn.from(o),e.url=$_(Z_(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),te.isFormData(n)){if(Zt.hasStandardBrowserEnv||Zt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if(te.isFunction(n.getHeaders)){const l=n.getHeaders(),c=["content-type","content-length"];Object.entries(l).forEach(([u,f])=>{c.includes(u.toLowerCase())&&o.set(u,f)})}}if(Zt.hasStandardBrowserEnv&&(i&&te.isFunction(i)&&(i=i(e)),i||i!==!1&&DP(e.url))){const l=r&&s&&UP.read(s);l&&o.set(r,l)}return e},FP=typeof XMLHttpRequest<"u",BP=FP&&function(t){return new Promise(function(n,i){const r=J_(t);let s=r.data;const o=hn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,_;function v(){p&&p(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const E=hn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),L={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};K_(function(A){n(A),v()},function(A){i(A),v()},L),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new Ye("Request aborted",Ye.ECONNABORTED,t,m)),m=null)},m.onerror=function(x){const L=x&&x.message?x.message:"Network Error",I=new Ye(L,Ye.ERR_NETWORK,t,m);I.event=x||null,i(I),m=null},m.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const L=r.transitional||q_;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),i(new Ye(x,L.clarifyTimeoutError?Ye.ETIMEDOUT:Ye.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&te.forEach(o.toJSON(),function(x,L){m.setRequestHeader(L,x)}),te.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,_]=za(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=za(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=E=>{m&&(i(!E||E.type?new Cs(null,t,m):E),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const S=PP(r.url);if(S&&Zt.protocols.indexOf(S)===-1){i(new Ye("Unsupported protocol "+S+":",Ye.ERR_BAD_REQUEST,t));return}m.send(s||null)})},kP=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ye?u:new Cs(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Ye(`timeout ${e} of ms exceeded`,Ye.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>te.asap(a),l}},HP=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},zP=async function*(t,e){for await(const n of VP(t))yield*HP(n,e)},VP=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Bp=(t,e,n,i)=>{const r=zP(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},kp=64*1024,{isFunction:ha}=te,GP=(({Request:t,Response:e})=>({Request:t,Response:e}))(te.global),{ReadableStream:Hp,TextEncoder:zp}=te.global,Vp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},WP=t=>{t=te.merge.call({skipUndefined:!0},GP,t);const{fetch:e,Request:n,Response:i}=t,r=e?ha(e):typeof fetch=="function",s=ha(n),o=ha(i);if(!r)return!1;const a=r&&ha(Hp),l=r&&(typeof zp=="function"?(_=>v=>_.encode(v))(new zp):async _=>new Uint8Array(await new n(_).arrayBuffer())),c=s&&a&&Vp(()=>{let _=!1;const v=new n(Zt.origin,{body:new Hp,method:"POST",get duplex(){return _=!0,"half"}}).headers.has("Content-Type");return _&&!v}),u=o&&a&&Vp(()=>te.isReadableStream(new i("").body)),f={stream:u&&(_=>_.body)};r&&["text","arrayBuffer","blob","formData","stream"].forEach(_=>{!f[_]&&(f[_]=(v,m)=>{let h=v&&v[_];if(h)return h.call(v);throw new Ye(`Response type '${_}' is not supported`,Ye.ERR_NOT_SUPPORT,m)})});const d=async _=>{if(_==null)return 0;if(te.isBlob(_))return _.size;if(te.isSpecCompliantForm(_))return(await new n(Zt.origin,{method:"POST",body:_}).arrayBuffer()).byteLength;if(te.isArrayBufferView(_)||te.isArrayBuffer(_))return _.byteLength;if(te.isURLSearchParams(_)&&(_=_+""),te.isString(_))return(await l(_)).byteLength},p=async(_,v)=>{const m=te.toFiniteNumber(_.getContentLength());return m??d(v)};return async _=>{let{url:v,method:m,data:h,signal:S,cancelToken:E,timeout:x,onDownloadProgress:L,onUploadProgress:I,responseType:A,headers:O,withCredentials:w="same-origin",fetchOptions:T}=J_(_),F=e||fetch;A=A?(A+"").toLowerCase():"text";let j=kP([S,E&&E.toAbortSignal()],x),q=null;const oe=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let ae;try{if(I&&c&&m!=="get"&&m!=="head"&&(ae=await p(O,h))!==0){let Se=new n(v,{method:"POST",body:h,duplex:"half"}),Ie;if(te.isFormData(h)&&(Ie=Se.headers.get("content-type"))&&O.setContentType(Ie),Se.body){const[je,re]=Np(ae,za(Op(I)));h=Bp(Se.body,kp,je,re)}}te.isString(w)||(w=w?"include":"omit");const K=s&&"credentials"in n.prototype,Z={...T,signal:j,method:m.toUpperCase(),headers:O.normalize().toJSON(),body:h,duplex:"half",credentials:K?w:void 0};q=s&&new n(v,Z);let X=await(s?F(q,T):F(v,Z));const me=u&&(A==="stream"||A==="response");if(u&&(L||me&&oe)){const Se={};["status","statusText","headers"].forEach(_e=>{Se[_e]=X[_e]});const Ie=te.toFiniteNumber(X.headers.get("content-length")),[je,re]=L&&Np(Ie,za(Op(L),!0))||[];X=new i(Bp(X.body,kp,je,()=>{re&&re(),oe&&oe()}),Se)}A=A||"text";let xe=await f[te.findKey(f,A)||"text"](X,_);return!me&&oe&&oe(),await new Promise((Se,Ie)=>{K_(Se,Ie,{data:xe,headers:hn.from(X.headers),status:X.status,statusText:X.statusText,config:_,request:q})})}catch(K){throw oe&&oe(),K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)?Object.assign(new Ye("Network Error",Ye.ERR_NETWORK,_,q),{cause:K.cause||K}):Ye.from(K,K&&K.code,_,q)}}},XP=new Map,Q_=t=>{let e=t?t.env:{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let o=s.length,a=o,l,c,u=XP;for(;a--;)l=s[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:WP(e)),u=c;return c};Q_();const Iu={http:lP,xhr:BP,fetch:{get:Q_}};te.forEach(Iu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Gp=t=>`- ${t}`,$P=t=>te.isFunction(t)||t===null||t===!1,e0={getAdapter:(t,e)=>{t=te.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let o=0;o<n;o++){i=t[o];let a;if(r=i,!$P(i)&&(r=Iu[(a=String(i)).toLowerCase()],r===void 0))throw new Ye(`Unknown adapter '${a}'`);if(r&&(te.isFunction(r)||(r=r.get(e))))break;s[a||"#"+o]=r}if(!r){const o=Object.entries(s).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Gp).join(`
`):" "+Gp(o[0]):"as no adapter specified";throw new Ye("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Iu};function dc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Cs(null,t)}function Wp(t){return dc(t),t.headers=hn.from(t.headers),t.data=hc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),e0.getAdapter(t.adapter||Uo.adapter,t)(t).then(function(i){return dc(t),i.data=hc.call(t,t.transformResponse,i),i.headers=hn.from(i.headers),i},function(i){return Y_(i)||(dc(t),i&&i.response&&(i.response.data=hc.call(t,t.transformResponse,i.response),i.response.headers=hn.from(i.response.headers))),Promise.reject(i)})}const t0="1.12.2",fl={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fl[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Xp={};fl.transitional=function(e,n,i){function r(s,o){return"[Axios v"+t0+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Ye(r(o," has been removed"+(n?" in "+n:"")),Ye.ERR_DEPRECATED);return n&&!Xp[o]&&(Xp[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};fl.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function qP(t,e,n){if(typeof t!="object")throw new Ye("options must be an object",Ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ye("option "+s+" must be "+l,Ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ye("Unknown option "+s,Ye.ERR_BAD_OPTION)}}const wa={assertOptions:qP,validators:fl},Yn=wa.validators;let Tr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Dp,response:new Dp}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Cr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&wa.assertOptions(i,{silentJSONParsing:Yn.transitional(Yn.boolean),forcedJSONParsing:Yn.transitional(Yn.boolean),clarifyTimeoutError:Yn.transitional(Yn.boolean)},!1),r!=null&&(te.isFunction(r)?n.paramsSerializer={serialize:r}:wa.assertOptions(r,{encode:Yn.function,serialize:Yn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),wa.assertOptions(n,{baseUrl:Yn.spelling("baseURL"),withXsrfToken:Yn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&te.merge(s.common,s[n.method]);s&&te.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=hn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const _=[Wp.bind(this),void 0];for(_.unshift(...a),_.push(...c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let p=n;for(;f<d;){const _=a[f++],v=a[f++];try{p=_(p)}catch(m){v.call(this,m);break}}try{u=Wp.call(this,p)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Cr(this.defaults,e);const n=Z_(e.baseURL,e.url,e.allowAbsoluteUrls);return $_(n,e.params,e.paramsSerializer)}};te.forEach(["delete","get","head","options"],function(e){Tr.prototype[e]=function(n,i){return this.request(Cr(i||{},{method:e,url:n,data:(i||{}).data}))}});te.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Cr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Tr.prototype[e]=n(),Tr.prototype[e+"Form"]=n(!0)});let jP=class n0{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Cs(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new n0(function(r){e=r}),cancel:e}}};function YP(t){return function(n){return t.apply(null,n)}}function KP(t){return te.isObject(t)&&t.isAxiosError===!0}const Du={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Du).forEach(([t,e])=>{Du[e]=t});function i0(t){const e=new Tr(t),n=U_(Tr.prototype.request,e);return te.extend(n,Tr.prototype,e,{allOwnKeys:!0}),te.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return i0(Cr(t,r))},n}const It=i0(Uo);It.Axios=Tr;It.CanceledError=Cs;It.CancelToken=jP;It.isCancel=Y_;It.VERSION=t0;It.toFormData=ul;It.AxiosError=Ye;It.Cancel=It.CanceledError;It.all=function(e){return Promise.all(e)};It.spread=YP;It.isAxiosError=KP;It.mergeConfig=Cr;It.AxiosHeaders=hn;It.formToJSON=t=>j_(te.isHTMLForm(t)?new FormData(t):t);It.getAdapter=e0.getAdapter;It.HttpStatusCode=Du;It.default=It;const{Axios:ML,AxiosError:bL,CanceledError:TL,isCancel:wL,CancelToken:AL,VERSION:RL,all:CL,Cancel:PL,isAxiosError:LL,spread:IL,toFormData:DL,AxiosHeaders:UL,HttpStatusCode:NL,formToJSON:OL,getAdapter:FL,mergeConfig:BL}=It,$p=()=>It.create({baseURL:"https://dummyjson.com/auth/",timeout:1e3}),qp={getUserFromLogin(t){return $p().post("/login",t,{headers:{"Content-Type":"application/json"}})},getCurrentAuthByToken(t){return $p().get("/me",{headers:{Authorization:`Bearer ${t}`}})}},Bf=rf("user",()=>{const t=an(null),e=an(null),n=an(null),i=an(null);async function r(a,l){try{const c=await qp.getUserFromLogin({username:a,password:l,expiresponseInMins:.1});e.value=c.data.accessToken,Eo.push(Eo.currentRoute.value.query.redirect?.toString()||{name:"authentication"})}catch{n.value="Login failed"}}async function s(){try{if(!e.value)return i.value="You are not login",!1;const a=await qp.getCurrentAuthByToken(e.value);return t.value=a.data,!0}catch(a){return i.value=`Authentication failed ${a.status}`,!1}}function o(){t.value=null,e.value=null}return{user:t,accessToken:e,loginErr:n,authErr:i,handleLogin:r,handleAuth:s,$reset:o}}),ZP={class:"page grid grid-cols-2 grid-rows-4 a-center j-items-center w-0.90 pl-0.5 pr-0.5 font-size-16"},JP={class:"col-span-2 mt-12 mb-12 txt-a-center"},QP={key:0,class:"mt-0 mb-0"},eL={key:1,class:"mt-0 mb-0"},tL={class:"mt-8 mb-0"},pc=3e3,nL=Wt({__name:"AuthView",setup(t){const e=Bf(),n=an(""),i=an("");let r=setTimeout(()=>{}),s=!1;Lm(async()=>{await e.handleAuth()});const o=async()=>{n.value="Authenticating",s=await e.handleAuth(),console.log(e.authErr),s?(clearTimeout(r),n.value="Authentication success",r=setTimeout(()=>{n.value=""},pc)):(clearTimeout(r),n.value="Authentication failed",i.value=e.authErr,r=setTimeout(()=>{n.value="",i.value=""},pc))},a=()=>{e.user&&(clearTimeout(r),n.value="You are login",r=setTimeout(()=>{n.value=""},pc))};return(l,c)=>{const u=Mr("router-link");return mt(),St("div",ZP,[We("div",JP,[Rn(e).user?(mt(),St("p",QP,[Ws(" Username: "+Qn(Rn(e).user.username)+" ",1),c[0]||(c[0]=We("br",null,null,-1)),Ws(" Email: "+Qn(Rn(e).user.email)+" ",1),c[1]||(c[1]=We("br",null,null,-1))])):(mt(),St("p",eL,"You are not login")),We("p",tL,[Ws(Qn(n.value)+" ",1),c[2]||(c[2]=We("br",null,null,-1)),Ws(" "+Qn(i.value),1)])]),it(u,{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",to:{name:"login"},onClick:a},{default:Ia(()=>[...c[3]||(c[3]=[We("span",null,"Login",-1)])]),_:1}),c[6]||(c[6]=We("span",null,"Direct to login page if you are not login",-1)),it(u,{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",to:{name:"auth-content"}},{default:Ia(()=>[...c[4]||(c[4]=[We("span",null,"Can only access after login",-1)])]),_:1}),c[7]||(c[7]=We("span",null,"Direct to content page if you are login else will direct you to login page",-1)),We("button",{class:"flex a-center j-center w-0.90 h-0.80 bg-secondary border border-radius-12",onClick:o},[...c[5]||(c[5]=[We("span",{class:"font-size-16"},"Authenticate",-1)])]),c[8]||(c[8]=We("span",null,"Check for authentication",-1))])}}}),iL={class:"login page"},rL={key:0},sL=Wt({__name:"LoginView",setup(t){const e=an("emilys"),n=an("emilyspass"),i=Bf(),r=async()=>{await i.handleLogin(e.value,n.value)};return(s,o)=>(mt(),St("div",iL,[o[6]||(o[6]=We("h1",null,"Login",-1)),We("div",null,[o[2]||(o[2]=We("span",null,"Username: ",-1)),Kf(We("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,512),[[Eh,e.value]]),o[3]||(o[3]=We("br",null,null,-1)),o[4]||(o[4]=We("span",null,"Password: ",-1)),Kf(We("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>n.value=a)},null,512),[[Eh,n.value]]),o[5]||(o[5]=We("br",null,null,-1)),We("button",{onClick:r},"Login")]),Rn(i).loginErr?(mt(),St("p",rL,Qn(Rn(i).loginErr),1)):yi("",!0)]))}}),oL=Wn(sL,[["__scopeId","data-v-10e3505e"]]),aL={class:"auth-content page"},lL=Wt({__name:"AuthContentView",setup(t){const e=()=>{Eo.push({name:"authentication"})};return(n,i)=>(mt(),St("div",aL,[i[0]||(i[0]=We("span",null,"You have successfully login",-1)),We("button",{onClick:e},"Back to Authentication Page")]))}}),cL=Wn(lL,[["__scopeId","data-v-191902c5"]]),uL={},fL={class:"page"};function hL(t,e){return mt(),St("div",fL,[...e[0]||(e[0]=[We("h1",null,"Sorry",-1),We("h2",null,"This page is not yet online",-1)])])}const dL=Wn(uL,[["render",hL]]),pL={},mL={class:"page test"};function gL(t,e){return mt(),St("div",mL," Test ")}const _L=Wn(pL,[["render",gL],["__scopeId","data-v-cd553ea4"]]),r0=[{path:"/",name:"home",component:mC},{path:"/works",name:"works",component:vC},{path:"/blogs",name:"blogs",component:dL},{path:"/todos",name:"todos",component:EC},{path:"/authentication",name:"authentication",component:nL},{path:"/login",name:"login",component:oL,meta:{requireGuest:!0}},{path:"/auth-content",name:"auth-content",component:cL,meta:{requireAuth:!0}},{path:"/test",name:"test",component:_L}],Eo=SM({history:YE("/my-site/"),scrollBehavior(){return{top:0}},routes:r0});Eo.beforeEach(async(t,e,n)=>{const i=Bf(),r=sessionStorage.redirect;r?(r0.forEach(s=>{r===s.path&&(sessionStorage.removeItem("redirect"),n(r))}),n()):t.meta.requireAuth?await i.handleAuth()?n():n({name:"login",query:{redirect:t.fullPath}}):t.meta.requireGuest&&await i.handleAuth()?n({name:"authentication"}):n()});const mc={messages:{hello:"hello, i am",home:"home",work:"work",todos:"todos",authentication:"authentication",blogs:"blogs",blog:"blog",test:"test"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},gc={messages:{hello:"你好, 我是",home:"主頁",work:"項目",todos:"任務清單",authentication:"驗證",blogs:"部落格",blog:"博客",test:"測試"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},vL={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":mc.messages,"zh-TW":gc.messages},datetimeFormats:{"en-US":mc.dateTimeFormats,"zh-TW":gc.dateTimeFormats},numberFormats:{"en-US":mc.numberFormats,"zh-TW":gc.numberFormats}},xL=jy(vL),SL=Jx(),hl=wx(vE);hl.use(Eo);hl.use(xL);hl.use(SL);hl.mount("#app");
